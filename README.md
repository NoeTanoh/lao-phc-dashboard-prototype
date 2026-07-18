# Lao PDR 2025 PHC Online Dashboard Prototype

Interactive static web prototype for the UNFPA Lao PDR / Lao Statistics Bureau 2025 Population and Housing Census dashboard TOR.

## What this demonstrates

- Executive one-page indicators for policymakers.
- Province-level GIS-style choropleth map with drill-down behavior.
- Dynamic filters by province, district, sex, urban/rural, and ethno-linguistic typology.
- Population pyramid by 5-year age group and sex.
- 2015 vs 2025 trend comparison.
- Custom cross-tabulation builder.
- CSV, JSON, PNG, and print/PDF export paths.
- Lao/English language switch architecture.
- Embedded rule-based chatbot/data assistant.
- Privacy-first demo: only aggregated synthetic indicators are exposed.

## Data note

The prototype uses generated, aggregated demonstration data aligned with public UNFPA Lao PDR census themes. It does not contain official 2025 PHC microdata or personally identifiable information. In production, these arrays should be replaced by LSB-approved aggregated tabulation matrices and official GeoJSON/shapefile layers.

## Run locally

```powershell
python -m http.server 5174
```

Open:

```text
http://localhost:5174
```

## Deploy

This is a static site and can be deployed directly to GitHub Pages from the repository root.
