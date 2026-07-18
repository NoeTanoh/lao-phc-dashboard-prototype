const GEO_URL = "./data/geo/lao-adm1-geoboundaries.geojson";
const MAP_WIDTH = 760;
const MAP_HEIGHT = 920;
const MAP_PADDING = 34;

const PROVINCES = [
  { shape: "Attapeu", name: "Attapeu", pop2015: 139600, pop2025: 168000, urban: 24, medianAge: 24.3, youth: 56, working: 59, literacy: 82, school: 67, water: 72, internet: 34, tfr: 2.8, districts: ["Samakkhixay", "Xaysetha", "Sanamxay", "Phouvong"] },
  { shape: "Bokeo", name: "Bokeo", pop2015: 179300, pop2025: 220000, urban: 31, medianAge: 24.6, youth: 55, working: 60, literacy: 86, school: 70, water: 76, internet: 39, tfr: 2.7, districts: ["Houayxay", "Tonpheung", "Meung", "Pha Oudom"] },
  { shape: "Bolikhamsai", name: "Bolikhamsai", pop2015: 273700, pop2025: 323000, urban: 30, medianAge: 26.3, youth: 50, working: 63, literacy: 90, school: 76, water: 84, internet: 47, tfr: 2.3, districts: ["Paksan", "Thaphabath", "Pak Kading", "Viengthong"] },
  { shape: "Champasak", name: "Champasak", pop2015: 694000, pop2025: 794000, urban: 41, medianAge: 27.5, youth: 47, working: 65, literacy: 92, school: 80, water: 88, internet: 55, tfr: 2.1, districts: ["Pakse", "Champasak", "Pathoumphone", "Khong"] },
  { shape: "Houaphan", name: "Houaphan", pop2015: 289400, pop2025: 310000, urban: 18, medianAge: 24.9, youth: 56, working: 58, literacy: 81, school: 66, water: 69, internet: 31, tfr: 2.9, districts: ["Xam Neua", "Viengxay", "Huameuang", "Sop Bao"] },
  { shape: "Khammouane", name: "Khammouane", pop2015: 392100, pop2025: 456000, urban: 31, medianAge: 26.8, youth: 49, working: 64, literacy: 91, school: 77, water: 84, internet: 49, tfr: 2.2, districts: ["Thakhek", "Mahaxay", "Nongbok", "Hinboun"] },
  { shape: "Luang Namtha", name: "Luang Namtha", pop2015: 175800, pop2025: 205000, urban: 27, medianAge: 23.8, youth: 59, working: 58, literacy: 82, school: 67, water: 72, internet: 34, tfr: 2.9, districts: ["Luang Namtha", "Sing", "Long", "Viengphoukha"] },
  { shape: "Luang Prabang", name: "Luang Prabang", pop2015: 431900, pop2025: 483000, urban: 33, medianAge: 25.7, youth: 53, working: 61, literacy: 88, school: 73, water: 80, internet: 44, tfr: 2.5, districts: ["Luang Prabang", "Xieng Ngeun", "Pak Ou", "Chomphet"] },
  { shape: "Oudomxay", name: "Oudomxay", pop2015: 307600, pop2025: 349000, urban: 25, medianAge: 24.1, youth: 57, working: 59, literacy: 84, school: 69, water: 71, internet: 36, tfr: 2.8, districts: ["Xay", "La", "Namor", "Nga"] },
  { shape: "Phongsaly", name: "Phongsaly", pop2015: 177900, pop2025: 197000, urban: 22, medianAge: 22.9, youth: 61, working: 56, literacy: 78, school: 63, water: 66, internet: 29, tfr: 3.2, districts: ["Phongsaly", "May", "Boun Nuea", "Yot Ou"] },
  { shape: "Salavan", name: "Salavan", pop2015: 397000, pop2025: 454000, urban: 23, medianAge: 24.8, youth: 55, working: 59, literacy: 83, school: 68, water: 73, internet: 36, tfr: 2.8, districts: ["Salavan", "Lao Ngam", "Ta Oy", "Vapy"] },
  { shape: "Savannakhet", name: "Savannakhet", pop2015: 969700, pop2025: 1102000, urban: 35, medianAge: 27.0, youth: 48, working: 65, literacy: 92, school: 79, water: 86, internet: 52, tfr: 2.1, districts: ["Kaysone Phomvihane", "Outhoumphone", "Songkhone", "Atsaphangthong"] },
  { shape: "Vientiane Capital", name: "Vientiane Capital", pop2015: 821700, pop2025: 1074000, urban: 88, medianAge: 28.6, youth: 48, working: 68, literacy: 96, school: 84, water: 94, internet: 72, tfr: 1.9, districts: ["Chanthabouly", "Sikhottabong", "Xaysetha", "Sisattanak"] },
  { shape: "Vientiane", name: "Vientiane Province", pop2015: 419100, pop2025: 506000, urban: 39, medianAge: 27.2, youth: 49, working: 64, literacy: 91, school: 78, water: 86, internet: 50, tfr: 2.2, districts: ["Vang Vieng", "Phonhong", "Thoulakhom", "Keo Oudom"] },
  { shape: "Xaignabouli", name: "Xaignabouli", pop2015: 382200, pop2025: 421000, urban: 27, medianAge: 26.5, youth: 51, working: 62, literacy: 89, school: 74, water: 82, internet: 43, tfr: 2.4, districts: ["Xaignabouli", "Khop", "Hongsa", "Phieng"] },
  { shape: "Xaisomboun", name: "Xaisomboun", pop2015: 85800, pop2025: 103000, urban: 18, medianAge: 23.9, youth: 57, working: 58, literacy: 82, school: 66, water: 70, internet: 33, tfr: 2.9, districts: ["Anouvong", "Thathom", "Longchaeng", "Hom"] },
  { shape: "Xekong", name: "Xekong", pop2015: 113000, pop2025: 133000, urban: 20, medianAge: 23.6, youth: 58, working: 57, literacy: 79, school: 64, water: 68, internet: 30, tfr: 3.0, districts: ["Lamam", "Kaleum", "Dakcheung", "Thateng"] },
  { shape: "Xiangkhouang", name: "Xiangkhouang", pop2015: 244700, pop2025: 280000, urban: 29, medianAge: 25.4, youth: 54, working: 61, literacy: 86, school: 72, water: 75, internet: 41, tfr: 2.6, districts: ["Pek", "Kham", "Phoukout", "Nong Het"] },
];

const INDICATORS = {
  pop2025: { label: "Population 2025", unit: "", format: "number" },
  growth: { label: "Growth 2015-2025", unit: "%", format: "percent" },
  urban: { label: "Urban share", unit: "%", format: "percent" },
  youth: { label: "Under age 30", unit: "%", format: "percent" },
  working: { label: "Working-age population", unit: "%", format: "percent" },
  literacy: { label: "Adult literacy", unit: "%", format: "percent" },
  school: { label: "School attendance 6-17", unit: "%", format: "percent" },
  water: { label: "Improved drinking water", unit: "%", format: "percent" },
  internet: { label: "Internet access", unit: "%", format: "percent" },
  tfr: { label: "Total fertility rate", unit: "", format: "decimal" },
};

const state = {
  lang: "en",
  indicator: "pop2025",
  province: "all",
  district: "all",
  group: "all",
  search: "",
  rowDim: "province",
  colDim: "group",
  measure: "pop2025",
};

const uiText = {
  en: {
    title: "Lao PDR census atlas and evidence console",
    subtitle: "Real ADM1 province boundaries from geoBoundaries, synthetic aggregated indicators, and a production-ready interaction model for official PHC dissemination.",
    langButton: "EN / LO",
  },
  lo: {
    title: "Lao PDR census atlas and evidence console",
    subtitle: "Lao interface mode: labels can be connected to official LSB translation tables in production. Boundary and indicator logic remain active.",
    langButton: "LO / EN",
  },
};

const colors = ["#edf8fb", "#c9e9f0", "#8bd0df", "#45aec6", "#0b83b5", "#075a88"];
const provinceByShape = new Map(PROVINCES.map((p) => [p.shape, p]));
let geojson = null;
let projector = null;

function growth(p) {
  return ((p.pop2025 - p.pop2015) / p.pop2015) * 100;
}

function valueOf(p, key) {
  return key === "growth" ? growth(p) : p[key];
}

function national(key) {
  if (key === "pop2025") return PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
  if (key === "growth") {
    const now = PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
    const then = PROVINCES.reduce((sum, p) => sum + p.pop2015, 0);
    return ((now - then) / then) * 100;
  }
  const total = PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
  return PROVINCES.reduce((sum, p) => sum + valueOf(p, key) * p.pop2025, 0) / total;
}

function fmt(value, key = state.indicator) {
  const meta = INDICATORS[key] || {};
  if (meta.format === "number") return Math.round(value).toLocaleString("en-US");
  if (meta.format === "decimal") return Number(value).toFixed(1);
  return `${Number(value).toFixed(value >= 10 ? 0 : 1)}${meta.unit || ""}`;
}

function activeProvince() {
  return PROVINCES.find((p) => p.shape === state.province) || null;
}

function filteredProvinces() {
  const q = state.search.trim().toLowerCase();
  return PROVINCES.filter((p) => {
    const byProvince = state.province === "all" || p.shape === state.province;
    const bySearch = !q || p.name.toLowerCase().includes(q) || p.shape.toLowerCase().includes(q);
    return byProvince && bySearch;
  });
}

function populateControls() {
  const indicatorSelect = document.querySelector("#indicatorSelect");
  indicatorSelect.innerHTML = Object.entries(INDICATORS)
    .map(([key, meta]) => `<option value="${key}">${meta.label}</option>`)
    .join("");
  indicatorSelect.value = state.indicator;

  const provinceSelect = document.querySelector("#provinceSelect");
  provinceSelect.innerHTML = `<option value="all">Lao PDR</option>${PROVINCES.map((p) => `<option value="${p.shape}">${p.name}</option>`).join("")}`;
  provinceSelect.value = state.province;

  const p = activeProvince();
  document.querySelector("#districtSelect").innerHTML = `<option value="all">All districts</option>${(p ? p.districts : ["Select a province first"])
    .map((d) => `<option value="${d}">${d}</option>`)
    .join("")}`;
  document.querySelector("#districtSelect").value = p && p.districts.includes(state.district) ? state.district : "all";

  document.querySelector("#groupSelect").value = state.group;
  document.querySelector("#searchInput").value = state.search;

  fillSelect("#rowDimSelect", [["province", "Province"], ["group", "Population group"], ["area", "Urban / rural"], ["age", "Age group"]], state.rowDim);
  fillSelect("#colDimSelect", [["group", "Population group"], ["area", "Urban / rural"], ["sex", "Sex"], ["age", "Age group"]], state.colDim);
  document.querySelector("#measureSelect").innerHTML = Object.entries(INDICATORS)
    .map(([key, meta]) => `<option value="${key}">${meta.label}</option>`)
    .join("");
  document.querySelector("#measureSelect").value = state.measure;
}

function fillSelect(selector, options, value) {
  const el = document.querySelector(selector);
  el.innerHTML = options.map(([key, text]) => `<option value="${key}">${text}</option>`).join("");
  el.value = value;
}

function allCoordinates(geometry) {
  const coords = [];
  const visit = (node) => {
    if (typeof node[0] === "number") {
      coords.push(node);
      return;
    }
    node.forEach(visit);
  };
  visit(geometry.coordinates);
  return coords;
}

function buildProjector(features) {
  const coords = features.flatMap((f) => allCoordinates(f.geometry));
  const xs = coords.map((c) => c[0]);
  const ys = coords.map((c) => c[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const scale = Math.min((MAP_WIDTH - MAP_PADDING * 2) / (maxX - minX), (MAP_HEIGHT - MAP_PADDING * 2) / (maxY - minY));
  const drawnWidth = (maxX - minX) * scale;
  const drawnHeight = (maxY - minY) * scale;
  const offsetX = (MAP_WIDTH - drawnWidth) / 2;
  const offsetY = (MAP_HEIGHT - drawnHeight) / 2;
  return ([lon, lat]) => [offsetX + (lon - minX) * scale, offsetY + (maxY - lat) * scale];
}

function ringPath(ring) {
  return ring
    .map((point, index) => {
      const [x, y] = projector(point);
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ") + " Z";
}

function geometryPath(geometry) {
  if (geometry.type === "Polygon") return geometry.coordinates.map(ringPath).join(" ");
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flatMap((polygon) => polygon.map(ringPath)).join(" ");
  return "";
}

function featureCenter(feature) {
  const coords = allCoordinates(feature.geometry).map(projector);
  const xs = coords.map((c) => c[0]);
  const ys = coords.map((c) => c[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
}

function colorFor(value, min, max) {
  const t = (value - min) / Math.max(1, max - min);
  return colors[Math.min(colors.length - 1, Math.floor(t * colors.length))];
}

function renderMetrics() {
  const p = activeProvince();
  const scope = p || { name: "Lao PDR" };
  const rows = [
    ["Population", fmt(p ? p.pop2025 : national("pop2025"), "pop2025"), scope.name],
    ["Growth", fmt(p ? growth(p) : national("growth"), "growth"), "2015-2025"],
    ["Median age", fmt(p ? p.medianAge : national("medianAge"), "tfr"), "years"],
    [INDICATORS[state.indicator].label, fmt(p ? valueOf(p, state.indicator) : national(state.indicator), state.indicator), "Current indicator"],
  ];
  document.querySelector("#metricRail").innerHTML = rows
    .map(([label, value, note]) => `<div class="metric-tile"><span>${label}</span><strong>${value}</strong><em>${note}</em></div>`)
    .join("");
}

function renderMap() {
  if (!geojson || !projector) return;
  const values = PROVINCES.map((p) => valueOf(p, state.indicator));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const svg = document.querySelector("#laoMap");
  svg.innerHTML = `
    <rect width="${MAP_WIDTH}" height="${MAP_HEIGHT}" fill="transparent"></rect>
    <path d="M118 90 C98 180 128 245 110 325 C84 445 132 552 110 690 C101 746 122 824 174 890" fill="none" stroke="#42b8c7" stroke-width="8" opacity=".28" stroke-linecap="round"></path>
    ${geojson.features
      .map((feature) => {
        const shape = feature.properties.shapeName;
        const p = provinceByShape.get(shape);
        const value = p ? valueOf(p, state.indicator) : min;
        const [cx, cy] = featureCenter(feature);
        const active = state.province === shape ? " active" : "";
        return `
          <path class="province-boundary${active}" data-shape="${shape}" d="${geometryPath(feature.geometry)}" fill="${colorFor(value, min, max)}">
            <title>${p ? p.name : shape}: ${fmt(value, state.indicator)}</title>
          </path>
          <text class="province-label" x="${cx.toFixed(1)}" y="${cy.toFixed(1)}">${shortName(p ? p.name : shape)}</text>
        `;
      })
      .join("")}
  `;
  svg.querySelectorAll(".province-boundary").forEach((path) => {
    path.addEventListener("click", () => {
      state.province = path.dataset.shape;
      state.district = "all";
      renderAll();
    });
  });
  document.querySelector("#mapTitle").textContent = `${INDICATORS[state.indicator].label} by province`;
  renderLegend(min, max);
}

function shortName(name) {
  return name
    .replace("Vientiane Capital", "VTE-C")
    .replace("Vientiane Province", "VTE-P")
    .replace("Luang Prabang", "LPB")
    .replace("Luang Namtha", "LNT")
    .replace("Xiangkhouang", "XKH")
    .replace("Savannakhet", "SVK")
    .replace("Bolikhamsai", "BOL")
    .replace("Xaignabouli", "XAY")
    .replace("Xaisomboun", "XSB")
    .replace("Khammouane", "KHM");
}

function renderLegend(min, max) {
  document.querySelector("#mapLegend").innerHTML = colors
    .map((color, i) => {
      const value = min + ((max - min) * i) / Math.max(1, colors.length - 1);
      return `<span><i style="background:${color}"></i>${fmt(value, state.indicator)}</span>`;
    })
    .join("");
}

function renderInspector() {
  const p = activeProvince();
  document.querySelector("#selectedName").textContent = p ? p.name : "Lao PDR";
  document.querySelector("#selectedNarrative").textContent = p
    ? `${p.name} has an estimated ${fmt(p.pop2025, "pop2025")} people in this demonstration dataset, with ${fmt(p.youth, "youth")} under age 30 and ${fmt(p.internet, "internet")} internet access.`
    : "Select a province on the real ADM1 map to inspect its headline demographic and service indicators.";

  const ranked = [...PROVINCES].sort((a, b) => valueOf(b, state.indicator) - valueOf(a, state.indicator)).slice(0, 7);
  const max = Math.max(...ranked.map((item) => valueOf(item, state.indicator)));
  document.querySelector("#rankList").innerHTML = ranked
    .map((item) => {
      const value = valueOf(item, state.indicator);
      return `<div class="rank-item">
        <div><strong>${item.name}</strong><span>${fmt(value, state.indicator)}</span></div>
        <div class="rank-track"><div class="rank-fill" style="width:${(value / max) * 100}%"></div></div>
      </div>`;
    })
    .join("");
}

function ageProfile() {
  const p = activeProvince();
  const youthBias = p ? (p.youth - 52) / 100 : 0;
  const bands = ["80+", "75-79", "70-74", "65-69", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24", "15-19", "10-14", "5-9", "0-4"];
  const base = [1.1, 1.4, 1.8, 2.2, 2.9, 3.5, 4.0, 4.5, 5.0, 5.6, 6.2, 6.9, 7.4, 8.0, 8.4, 8.1, 7.6];
  return bands.map((band, i) => {
    const youngBoost = i > 10 ? youthBias * 32 : -youthBias * 14;
    const male = Math.max(0.7, base[i] + youngBoost + (i % 3 - 1) * 0.18);
    const female = Math.max(0.7, base[i] + youngBoost + 0.25 + (i % 2) * 0.12);
    return { band, male, female };
  });
}

function renderPyramid() {
  const data = ageProfile();
  const max = Math.max(...data.flatMap((d) => [d.male, d.female]));
  document.querySelector("#pyramidChart").innerHTML = data
    .map(
      (d) => `<div class="bar-row">
        <span>${d.band}</span>
        <div class="bar-track"><div class="bar-fill male" style="width:${(d.male / max) * 100}%"></div></div>
        <div class="bar-track"><div class="bar-fill female" style="width:${(d.female / max) * 100}%"></div></div>
        <span>${d.female.toFixed(1)}%</span>
      </div>`,
    )
    .join("");
}

function renderTrend() {
  const data = activeProvince() ? [activeProvince()] : [...PROVINCES].sort((a, b) => b.pop2025 - a.pop2025).slice(0, 8);
  const max = Math.max(...data.flatMap((p) => [p.pop2015, p.pop2025]));
  const rows = data
    .map((p, i) => {
      const y = 42 + i * 34;
      const x1 = 160;
      const x2 = 160 + (p.pop2015 / max) * 230;
      const x3 = 160 + (p.pop2025 / max) * 230;
      return `
        <text x="6" y="${y + 5}" font-size="12" font-weight="750" fill="#101826">${p.name}</text>
        <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#9db8c4" stroke-width="10" stroke-linecap="round"></line>
        <line x1="${x1}" y1="${y + 12}" x2="${x3}" y2="${y + 12}" stroke="#d4212f" stroke-width="10" stroke-linecap="round"></line>
        <text x="${x3 + 8}" y="${y + 16}" font-size="11" font-weight="850" fill="#647084">${fmt(p.pop2025, "pop2025")}</text>
      `;
    })
    .join("");
  document.querySelector("#trendChart").innerHTML = `
    <svg class="trend-svg" viewBox="0 0 460 320" role="img" aria-label="Population trend chart">
      <text x="160" y="20" font-size="11" font-weight="900" fill="#647084">2015</text>
      <text x="214" y="20" font-size="11" font-weight="900" fill="#d4212f">2025</text>
      ${rows}
    </svg>`;
}

function dimValues(dim) {
  const values = {
    province: PROVINCES.map((p) => p.name),
    group: ["All groups", "Women and girls", "Youth under 30", "Rural communities", "Ethno-linguistic minorities"],
    area: ["Urban", "Rural"],
    sex: ["Male", "Female"],
    age: ["0-14", "15-29", "30-59", "60+"],
  };
  return values[dim] || [];
}

function adjustedMeasure(row, col, measure) {
  const base = national(measure);
  let factor = 1;
  const text = `${row} ${col}`;
  if (text.includes("Urban") || text.includes("Vientiane")) factor += 0.09;
  if (text.includes("Rural") || text.includes("Phongsaly") || text.includes("Xekong")) factor -= 0.07;
  if (text.includes("Youth") && measure === "youth") factor += 0.2;
  if (text.includes("Ethno") && ["literacy", "school", "internet"].includes(measure)) factor -= 0.1;
  if (measure === "pop2025") {
    const p = PROVINCES.find((item) => item.name === row || item.name === col);
    return p ? p.pop2025 / Math.max(1, dimValues(state.colDim).length) : base / 10;
  }
  return Math.max(0, base * factor);
}

function renderCrosstab() {
  const rows = dimValues(state.rowDim);
  const cols = dimValues(state.colDim);
  const head = `<thead><tr><th>${state.rowDim}</th>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
  const body = rows
    .map((r) => `<tr><td>${r}</td>${cols.map((c) => `<td>${fmt(adjustedMeasure(r, c, state.measure), state.measure)}</td>`).join("")}</tr>`)
    .join("");
  document.querySelector("#crosstabTable").innerHTML = `${head}<tbody>${body}</tbody>`;
}

function renderDelivery() {
  const items = [
    ["Inception", "Architecture and UI blueprint", "Data schema, localization map, LAOSIS assessment, and implementation plan."],
    ["Warehouse", "Aggregated data pipeline", "PostgreSQL/PostGIS design with anonymization and no browser microdata exposure."],
    ["Beta", "Private staging release", "Real maps, filters, pyramid, trends, downloads, and cross-tabs ready for review."],
    ["Manuals", "Admin and user handover", "Source code, data dictionary, update workflow, and troubleshooting guides."],
    ["Deployment", "Live LSB hosting and training", "Production migration, stress checks, and hands-on capacity building in Vientiane."],
  ];
  document.querySelector("#deliveryGrid").innerHTML = items.map(([phase, title, text]) => `<div class="delivery-item"><span>${phase}</span><strong>${title}</strong><p>${text}</p></div>`).join("");
}

function exportRows() {
  return filteredProvinces().map((p) => ({
    province: p.name,
    district_filter: state.district,
    group_filter: state.group,
    population_2015: p.pop2015,
    population_2025: p.pop2025,
    growth_2015_2025_pct: growth(p).toFixed(2),
    urban_share_pct: p.urban,
    youth_under_30_pct: p.youth,
    working_age_pct: p.working,
    literacy_pct: p.literacy,
    school_attendance_pct: p.school,
    improved_water_pct: p.water,
    internet_pct: p.internet,
    total_fertility_rate: p.tfr,
    boundary_source: "geoBoundaries LAO ADM1",
    data_note: "Synthetic aggregated demo indicators",
  }));
}

function toCsv(rows) {
  const headers = Object.keys(rows[0] || {});
  const escape = (value) => `"${String(value).replaceAll('"', '""')}"`;
  return [headers.join(","), ...rows.map((row) => headers.map((header) => escape(row[header])).join(","))].join("\n");
}

function download(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadMapPng() {
  const svg = document.querySelector("#laoMap");
  const xml = new XMLSerializer().serializeToString(svg);
  const img = new Image();
  const url = URL.createObjectURL(new Blob([xml], { type: "image/svg+xml;charset=utf-8" }));
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1520;
    canvas.height = 1840;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    canvas.toBlob((blob) => {
      const out = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = out;
      a.download = "lao-phc-real-adm1-map.png";
      a.click();
      URL.revokeObjectURL(out);
    });
  };
  img.src = url;
}

function addMessage(role, text) {
  const box = document.querySelector("#messages");
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function assistantReply(question) {
  const q = question.toLowerCase();
  const selected = activeProvince();
  const topPop = [...PROVINCES].sort((a, b) => b.pop2025 - a.pop2025)[0];
  const youngest = [...PROVINCES].sort((a, b) => b.youth - a.youth)[0];
  const connected = [...PROVINCES].sort((a, b) => b.internet - a.internet)[0];
  const lowWater = [...PROVINCES].sort((a, b) => a.water - b.water)[0];
  if (q.includes("map") || q.includes("boundary") || q.includes("carte")) {
    return "The map now uses real Lao PDR ADM1 province boundaries from geoBoundaries, rendered locally as GeoJSON. It replaces the previous hand-drawn province sketch.";
  }
  if (q.includes("selected") || q.includes("province")) {
    return selected
      ? `${selected.name} is selected. Population: ${fmt(selected.pop2025, "pop2025")}; youth under 30: ${fmt(selected.youth, "youth")}; internet access: ${fmt(selected.internet, "internet")}.`
      : "No province is selected. Click any province on the map to make my answer focus on that geography.";
  }
  if (q.includes("young") || q.includes("youth") || q.includes("jeune")) {
    return `${youngest.name} has the youngest profile in the demo, with ${fmt(youngest.youth, "youth")} under age 30.`;
  }
  if (q.includes("population") || q.includes("largest") || q.includes("plus peupl")) {
    return `${topPop.name} has the largest demo population at ${fmt(topPop.pop2025, "pop2025")}. National synthetic total is ${fmt(national("pop2025"), "pop2025")}.`;
  }
  if (q.includes("internet") || q.includes("digital")) {
    return `${connected.name} leads on internet access in the demo at ${fmt(connected.internet, "internet")}.`;
  }
  if (q.includes("water") || q.includes("service")) {
    return `${lowWater.name} has the lowest improved-water value in the demo at ${fmt(lowWater.water, "water")}.`;
  }
  if (q.includes("privacy") || q.includes("microdata") || q.includes("confidential")) {
    return "This prototype follows the TOR privacy principle: only aggregated indicators are exposed to the browser, never individual microdata or PII.";
  }
  return "Ask about the map, selected province, largest population, youngest province, internet access, water gaps, exports, or privacy safeguards.";
}

function setupChat() {
  const prompts = ["What map is this?", "Selected province?", "Largest population?", "Privacy safeguards?"];
  document.querySelector("#quickPrompts").innerHTML = prompts.map((p) => `<button type="button">${p}</button>`).join("");
  document.querySelectorAll("#quickPrompts button").forEach((button) => {
    button.addEventListener("click", () => {
      addMessage("user", button.textContent);
      addMessage("bot", assistantReply(button.textContent));
    });
  });
}

function bindEvents() {
  document.querySelector("#indicatorSelect").addEventListener("change", (e) => {
    state.indicator = e.target.value;
    renderAll();
  });
  document.querySelector("#provinceSelect").addEventListener("change", (e) => {
    state.province = e.target.value;
    state.district = "all";
    renderAll();
  });
  document.querySelector("#districtSelect").addEventListener("change", (e) => {
    state.district = e.target.value;
    renderAll();
  });
  document.querySelector("#groupSelect").addEventListener("change", (e) => {
    state.group = e.target.value;
  });
  document.querySelector("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
  });
  document.querySelector("#resetBtn").addEventListener("click", () => {
    Object.assign(state, { indicator: "pop2025", province: "all", district: "all", group: "all", search: "" });
    renderAll();
  });
  document.querySelector("#rowDimSelect").addEventListener("change", (e) => {
    state.rowDim = e.target.value;
    renderCrosstab();
  });
  document.querySelector("#colDimSelect").addEventListener("change", (e) => {
    state.colDim = e.target.value;
    renderCrosstab();
  });
  document.querySelector("#measureSelect").addEventListener("change", (e) => {
    state.measure = e.target.value;
    renderCrosstab();
  });
  document.querySelector("#downloadCsvBtn").addEventListener("click", () => download("lao-phc-atlas-demo.csv", toCsv(exportRows()), "text/csv;charset=utf-8"));
  document.querySelector("#downloadJsonBtn").addEventListener("click", () => download("lao-phc-atlas-demo.json", JSON.stringify(exportRows(), null, 2), "application/json"));
  document.querySelector("#downloadMapPngBtn").addEventListener("click", downloadMapPng);
  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#langToggle").addEventListener("click", () => {
    state.lang = state.lang === "en" ? "lo" : "en";
    renderAll();
  });
  document.querySelector("#copyTableBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText(document.querySelector("#crosstabTable").innerText);
    document.querySelector("#copyTableBtn").textContent = "Copied";
    setTimeout(() => {
      document.querySelector("#copyTableBtn").textContent = "Copy table";
    }, 900);
  });
  document.querySelector("#chatBubble").addEventListener("click", () => {
    document.querySelector("#chatWidget").classList.add("open");
    document.querySelector("#chatBubble").setAttribute("aria-expanded", "true");
    document.querySelector("#assistantInput").focus();
  });
  document.querySelector("#chatClose").addEventListener("click", () => {
    document.querySelector("#chatWidget").classList.remove("open");
    document.querySelector("#chatBubble").setAttribute("aria-expanded", "false");
  });
  document.querySelector("#assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#assistantInput");
    const q = input.value.trim();
    if (!q) return;
    addMessage("user", q);
    addMessage("bot", assistantReply(q));
    input.value = "";
  });
}

function renderAll() {
  document.querySelector(".atlas-head h1").textContent = uiText[state.lang].title;
  document.querySelector(".atlas-head > p").textContent = uiText[state.lang].subtitle;
  document.querySelector("#langToggle").textContent = uiText[state.lang].langButton;
  document.documentElement.lang = state.lang === "lo" ? "lo" : "en";
  populateControls();
  renderMetrics();
  renderMap();
  renderInspector();
  renderPyramid();
  renderTrend();
  renderCrosstab();
  renderDelivery();
}

async function init() {
  populateControls();
  bindEvents();
  setupChat();
  try {
    const response = await fetch(GEO_URL);
    geojson = await response.json();
    projector = buildProjector(geojson.features);
  } catch (error) {
    console.error("Unable to load Lao ADM1 GeoJSON", error);
    document.querySelector("#laoMap").innerHTML = `<text x="40" y="80" fill="#d4212f">Map layer failed to load.</text>`;
  }
  renderAll();
}

init();
