from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable

import requests
from bs4 import BeautifulSoup

from .scoring import clean_text, classify_track_domain, has_profile_anchor, score_opportunity


ROOT = Path(__file__).resolve().parents[1]
SOURCES_PATH = ROOT / "app" / "sources.json"
HEADERS = {
    "User-Agent": "GomboOpportunities/0.1 (+personal opportunity monitor)",
    "Accept": "application/json,text/html;q=0.9,*/*;q=0.8",
}


def load_sources() -> dict[str, Any]:
    return json.loads(SOURCES_PATH.read_text(encoding="utf-8"))


def scan_all() -> tuple[list[dict[str, Any]], list[str], int]:
    config = load_sources()
    raw_items: list[dict[str, Any]] = []
    errors: list[str] = []
    source_count = 0

    runners: list[tuple[str, Callable[[dict[str, Any]], list[dict[str, Any]]]]] = [
        ("remotive", scrape_remotive),
        ("remoteok", scrape_remoteok),
        ("jobicy", scrape_jobicy),
        ("arbeitnow", scrape_arbeitnow),
        ("reliefweb", scrape_reliefweb),
        ("lever", scrape_lever),
        ("greenhouse", scrape_greenhouse),
        ("ashby", scrape_ashby),
    ]

    for key, runner in runners:
        source_config = config.get(key, {})
        if not source_config.get("enabled", True):
            continue
        source_count += 1
        try:
            raw_items.extend(runner(source_config))
        except Exception as exc:  # noqa: BLE001 - scan should continue when one source fails.
            errors.append(f"{key}: {exc}")

    normalized: list[dict[str, Any]] = []
    seen_urls: set[str] = set()
    for item in raw_items:
        item = normalize_item(item)
        if not item or item["url"] in seen_urls:
            continue
        seen_urls.add(item["url"])
        consultancy_match = item["track"] == "consultance" and item["domain"] in {
            "data-bi",
            "suivi-evaluation-etudes",
            "developpement-app",
            "communication",
        }
        if item["is_remote"] and item["score"] >= config.get("minimum_score", 35) and (has_profile_anchor(item["title"], item["description"]) or consultancy_match):
            normalized.append(item)

    return normalized, errors, source_count


def normalize_item(item: dict[str, Any]) -> dict[str, Any] | None:
    title = clean_text(item.get("title"))
    url = item.get("url")
    if not title or not url:
        return None
    description = clean_text(item.get("description"))
    organization = clean_text(item.get("organization"))
    location = clean_text(item.get("location"))
    score, keywords, remote_type, is_remote = score_opportunity(title, organization, location, description)
    summary = clean_text(item.get("summary")) or description[:280]
    opportunity_type = item.get("opportunity_type") or infer_type(title, description)
    track, domain = classify_track_domain(title, opportunity_type, description)
    if track == "consultance" and domain in {"developpement-app", "communication", "suivi-evaluation-etudes"}:
        score = min(100, score + 12)
        keywords = sorted(set([*keywords, domain, "consultance"]))
    return {
        "title": title,
        "organization": organization,
        "source": item.get("source") or "Unknown",
        "location": location or "Remote",
        "remote_type": remote_type,
        "opportunity_type": opportunity_type,
        "track": track,
        "domain": domain,
        "deadline": item.get("deadline"),
        "posted_at": item.get("posted_at"),
        "url": url,
        "summary": summary,
        "description": description,
        "score": score,
        "keywords": keywords,
        "is_remote": is_remote,
    }


def infer_type(title: str, description: str) -> str:
    text = f"{title} {description}".lower()
    if any(term in text for term in ["rfp", "request for proposal", "request for quotation", "request for quotes", "consultancy", "consultant"]):
        return "consultance"
    if any(term in text for term in ["contractor", "freelance", "contract"]):
        return "contract"
    return "job"


def scrape_remotive(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for query in config.get("queries", []):
        response = requests.get(
            "https://remotive.com/api/remote-jobs",
            params={"search": query, "limit": 50},
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for job in response.json().get("jobs", []):
            items.append(
                {
                    "source": "Remotive",
                    "title": job.get("title"),
                    "organization": job.get("company_name"),
                    "location": job.get("candidate_required_location") or "Remote",
                    "posted_at": job.get("publication_date"),
                    "url": job.get("url"),
                    "description": job.get("description"),
                    "summary": job.get("description"),
                    "opportunity_type": job.get("job_type") or "job",
                }
            )
    return items


def scrape_remoteok(config: dict[str, Any]) -> list[dict[str, Any]]:
    response = requests.get("https://remoteok.com/api", headers=HEADERS, timeout=30)
    response.raise_for_status()
    keywords = [keyword.lower() for keyword in config.get("keywords", [])]
    items: list[dict[str, Any]] = []
    for job in response.json()[1:]:
        haystack = " ".join(
            str(job.get(key) or "") for key in ["position", "company", "description", "location", "tags"]
        ).lower()
        if keywords and not any(keyword in haystack for keyword in keywords):
            continue
        items.append(
            {
                "source": "RemoteOK",
                "title": job.get("position"),
                "organization": job.get("company"),
                "location": job.get("location") or "Remote",
                "posted_at": job.get("date"),
                "url": job.get("url"),
                "description": job.get("description") or " ".join(job.get("tags") or []),
                "summary": job.get("description"),
                "opportunity_type": "job",
            }
        )
    return items


def scrape_jobicy(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for params in config.get("requests", []):
        query_params = {"count": params.get("count", 50)}
        if params.get("industry"):
            query_params["industry"] = params["industry"]
        if params.get("tag"):
            query_params["tag"] = params["tag"]
        response = requests.get(
            "https://jobicy.com/api/v2/remote-jobs",
            params=query_params,
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for job in response.json().get("jobs", []):
            description = job.get("jobDescription") or job.get("jobExcerpt")
            items.append(
                {
                    "source": "Jobicy",
                    "title": job.get("jobTitle"),
                    "organization": job.get("companyName"),
                    "location": job.get("jobGeo") or "Remote",
                    "posted_at": job.get("pubDate"),
                    "url": job.get("url"),
                    "description": description,
                    "summary": job.get("jobExcerpt") or BeautifulSoup(description or "", "html.parser").get_text(" ", strip=True)[:350],
                    "opportunity_type": ", ".join(job.get("jobType") or []) or "job",
                }
            )
    return items


def scrape_arbeitnow(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    pages = int(config.get("pages", 2))
    keywords = [keyword.lower() for keyword in config.get("keywords", [])]
    url = "https://www.arbeitnow.com/api/job-board-api"
    for _ in range(pages):
        response = requests.get(url, headers=HEADERS, timeout=30)
        response.raise_for_status()
        payload = response.json()
        for job in payload.get("data", []):
            if not job.get("remote"):
                continue
            haystack = " ".join(
                str(job.get(key) or "") for key in ["title", "company_name", "description", "location", "tags"]
            ).lower()
            if keywords and not any(keyword in haystack for keyword in keywords):
                continue
            items.append(
                {
                    "source": "Arbeitnow",
                    "title": job.get("title"),
                    "organization": job.get("company_name"),
                    "location": job.get("location") or "Remote",
                    "posted_at": epoch_seconds_to_iso(job.get("created_at")),
                    "url": job.get("url"),
                    "description": job.get("description"),
                    "summary": BeautifulSoup(job.get("description") or "", "html.parser").get_text(" ", strip=True)[:350],
                    "opportunity_type": ", ".join(job.get("job_types") or []) or "job",
                }
            )
        next_url = (payload.get("links") or {}).get("next")
        if not next_url:
            break
        url = next_url
    return items


def scrape_reliefweb(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for query in config.get("queries", []):
        response = requests.get(
            "https://api.reliefweb.int/v2/jobs",
            params={
                "appname": "gombo-opportunities",
                "profile": "full",
                "preset": "latest",
                "limit": 50,
                "query[value]": query,
            },
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for record in response.json().get("data", []):
            fields = record.get("fields", {})
            body = fields.get("body") or ""
            location = ", ".join(country.get("name", "") for country in fields.get("country", []) if country.get("name"))
            source = fields.get("source") or []
            organization = source[0].get("name") if source else ""
            items.append(
                {
                    "source": "ReliefWeb",
                    "title": fields.get("title"),
                    "organization": organization,
                    "location": location or "Remote",
                    "deadline": fields.get("date", {}).get("closing"),
                    "posted_at": fields.get("date", {}).get("created"),
                    "url": fields.get("url_alias") or fields.get("url"),
                    "description": body,
                    "summary": BeautifulSoup(body, "html.parser").get_text(" ", strip=True)[:350],
                    "opportunity_type": "consultance",
                }
            )
    return items


def scrape_lever(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for company in config.get("companies", []):
        response = requests.get(
            f"https://api.lever.co/v0/postings/{company}",
            params={"mode": "json"},
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for job in response.json():
            categories = job.get("categories") or {}
            list_text = []
            for group in job.get("lists", []):
                if isinstance(group, str):
                    list_text.append(group)
                    continue
                for entry in group.get("content", []):
                    if isinstance(entry, str):
                        list_text.append(entry)
                    else:
                        list_text.append(entry.get("text", ""))
            description = "\n".join([job.get("descriptionPlain") or job.get("description") or "", " ".join(list_text)])
            items.append(
                {
                    "source": f"Lever/{company}",
                    "title": job.get("text"),
                    "organization": company,
                    "location": categories.get("location") or "Remote",
                    "posted_at": epoch_ms_to_iso(job.get("createdAt")),
                    "url": job.get("hostedUrl") or job.get("applyUrl"),
                    "description": description,
                    "summary": job.get("descriptionPlain") or job.get("description"),
                    "opportunity_type": categories.get("commitment") or "job",
                }
            )
    return items


def scrape_greenhouse(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for board in config.get("boards", []):
        response = requests.get(
            f"https://boards-api.greenhouse.io/v1/boards/{board}/jobs",
            params={"content": "true"},
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for job in response.json().get("jobs", []):
            location = (job.get("location") or {}).get("name") or "Remote"
            items.append(
                {
                    "source": f"Greenhouse/{board}",
                    "title": job.get("title"),
                    "organization": board,
                    "location": location,
                    "posted_at": job.get("updated_at"),
                    "url": job.get("absolute_url"),
                    "description": job.get("content"),
                    "summary": BeautifulSoup(job.get("content") or "", "html.parser").get_text(" ", strip=True)[:350],
                    "opportunity_type": "job",
                }
            )
    return items


def scrape_ashby(config: dict[str, Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for board in config.get("boards", []):
        response = requests.post(
            f"https://api.ashbyhq.com/posting-api/job-board/{board}",
            json={},
            headers=HEADERS,
            timeout=30,
        )
        response.raise_for_status()
        for job in response.json().get("jobs", []):
            location = job.get("locationName") or "Remote"
            description = BeautifulSoup(job.get("descriptionHtml") or "", "html.parser").get_text(" ", strip=True)
            items.append(
                {
                    "source": f"Ashby/{board}",
                    "title": job.get("title"),
                    "organization": board,
                    "location": location,
                    "posted_at": job.get("publishedDate"),
                    "url": job.get("jobUrl") or job.get("applicationUrl"),
                    "description": description,
                    "summary": description[:350],
                    "opportunity_type": job.get("employmentType") or "job",
                }
            )
    return items


def epoch_ms_to_iso(value: Any) -> str | None:
    if not value:
        return None


def epoch_seconds_to_iso(value: Any) -> str | None:
    if not value:
        return None
    try:
        return datetime.fromtimestamp(int(value), tz=timezone.utc).isoformat(timespec="seconds")
    except (TypeError, ValueError, OSError):
        return None
    try:
        return datetime.fromtimestamp(int(value) / 1000, tz=timezone.utc).isoformat(timespec="seconds")
    except (TypeError, ValueError, OSError):
        return None
