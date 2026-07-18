const PROVINCES = [
  { id: "VTE-C", name: "Vientiane Capital", lao: "ນະຄອນຫຼວງວຽງຈັນ", pop2015: 821700, pop2025: 1074000, urban: 88, medianAge: 28.6, youth: 48, working: 68, literacy: 96, school: 84, water: 94, electricity: 99, internet: 72, disability: 2.9, migration: 12.4, tfr: 1.9, x: 242, y: 408, d: "M210 382 L282 373 L305 421 L264 463 L208 445 Z", districts: ["Chanthabouly", "Sikhottabong", "Xaysetha", "Sisattanak"] },
  { id: "PHO", name: "Phongsaly", lao: "ຜົ້ງສາລີ", pop2015: 177900, pop2025: 197000, urban: 22, medianAge: 22.9, youth: 61, working: 56, literacy: 78, school: 63, water: 66, electricity: 76, internet: 29, disability: 3.7, migration: -1.8, tfr: 3.2, x: 238, y: 54, d: "M214 18 L267 31 L283 83 L240 111 L196 88 Z", districts: ["Phongsaly", "May", "Boun Nuea", "Yot Ou"] },
  { id: "LNT", name: "Luang Namtha", lao: "ຫຼວງນ້ຳທາ", pop2015: 175800, pop2025: 205000, urban: 27, medianAge: 23.8, youth: 59, working: 58, literacy: 82, school: 67, water: 72, electricity: 82, internet: 34, disability: 3.2, migration: 2.1, tfr: 2.9, x: 158, y: 96, d: "M119 58 L196 88 L201 143 L147 166 L95 119 Z", districts: ["Luang Namtha", "Sing", "Long", "Viengphoukha"] },
  { id: "OUD", name: "Oudomxay", lao: "ອຸດົມໄຊ", pop2015: 307600, pop2025: 349000, urban: 25, medianAge: 24.1, youth: 57, working: 59, literacy: 84, school: 69, water: 71, electricity: 84, internet: 36, disability: 3.3, migration: 1.4, tfr: 2.8, x: 195, y: 164, d: "M147 166 L201 143 L255 162 L244 224 L174 225 Z", districts: ["Xay", "La", "Namor", "Nga"] },
  { id: "BOK", name: "Bokeo", lao: "ບໍ່ແກ້ວ", pop2015: 179300, pop2025: 220000, urban: 31, medianAge: 24.6, youth: 55, working: 60, literacy: 86, school: 70, water: 76, electricity: 86, internet: 39, disability: 3.1, migration: 4.8, tfr: 2.7, x: 92, y: 179, d: "M56 132 L119 142 L174 225 L102 254 L52 206 Z", districts: ["Houayxay", "Tonpheung", "Meung", "Pha Oudom"] },
  { id: "LPB", name: "Luang Prabang", lao: "ຫຼວງພະບາງ", pop2015: 431900, pop2025: 483000, urban: 33, medianAge: 25.7, youth: 53, working: 61, literacy: 88, school: 73, water: 80, electricity: 88, internet: 44, disability: 3.0, migration: 3.1, tfr: 2.5, x: 252, y: 235, d: "M244 224 L307 210 L339 267 L303 322 L232 304 L174 225 Z", districts: ["Luang Prabang", "Xieng Ngeun", "Pak Ou", "Chomphet"] },
  { id: "HOU", name: "Houaphanh", lao: "ຫົວພັນ", pop2015: 289400, pop2025: 310000, urban: 18, medianAge: 24.9, youth: 56, working: 58, literacy: 81, school: 66, water: 69, electricity: 80, internet: 31, disability: 3.8, migration: -2.9, tfr: 2.9, x: 355, y: 201, d: "M307 143 L386 155 L419 221 L365 274 L339 267 L307 210 Z", districts: ["Xam Neua", "Viengxay", "Huameuang", "Sop Bao"] },
  { id: "XAY", name: "Xayaboury", lao: "ໄຊຍະບູລີ", pop2015: 382200, pop2025: 421000, urban: 27, medianAge: 26.5, youth: 51, working: 62, literacy: 89, school: 74, water: 82, electricity: 90, internet: 43, disability: 3.0, migration: 0.8, tfr: 2.4, x: 139, y: 303, d: "M102 254 L174 225 L232 304 L202 384 L112 371 L72 302 Z", districts: ["Xayaboury", "Khop", "Hongsa", "Phieng"] },
  { id: "XKH", name: "Xiengkhouang", lao: "ຊຽງຂວາງ", pop2015: 244700, pop2025: 280000, urban: 29, medianAge: 25.4, youth: 54, working: 61, literacy: 86, school: 72, water: 75, electricity: 86, internet: 41, disability: 3.4, migration: 1.2, tfr: 2.6, x: 350, y: 325, d: "M303 322 L365 274 L421 326 L396 382 L323 382 Z", districts: ["Pek", "Kham", "Phoukout", "Nong Het"] },
  { id: "VTE-P", name: "Vientiane Province", lao: "ວຽງຈັນ", pop2015: 419100, pop2025: 506000, urban: 39, medianAge: 27.2, youth: 49, working: 64, literacy: 91, school: 78, water: 86, electricity: 94, internet: 50, disability: 2.8, migration: 5.9, tfr: 2.2, x: 248, y: 354, d: "M232 304 L303 322 L323 382 L282 373 L210 382 L202 384 Z", districts: ["Vang Vieng", "Phonhong", "Thoulakhom", "Keo Oudom"] },
  { id: "BOL", name: "Bolikhamxay", lao: "ບໍລິຄຳໄຊ", pop2015: 273700, pop2025: 323000, urban: 30, medianAge: 26.3, youth: 50, working: 63, literacy: 90, school: 76, water: 84, electricity: 92, internet: 47, disability: 2.9, migration: 4.3, tfr: 2.3, x: 344, y: 421, d: "M323 382 L396 382 L430 445 L365 492 L305 421 Z", districts: ["Paksan", "Thaphabath", "Pak Kading", "Viengthong"] },
  { id: "KHM", name: "Khammouane", lao: "ຄຳມ່ວນ", pop2015: 392100, pop2025: 456000, urban: 31, medianAge: 26.8, youth: 49, working: 64, literacy: 91, school: 77, water: 84, electricity: 93, internet: 49, disability: 2.8, migration: 3.6, tfr: 2.2, x: 342, y: 507, d: "M305 421 L365 492 L403 545 L340 582 L284 526 L264 463 Z", districts: ["Thakhek", "Mahaxay", "Nongbok", "Hinboun"] },
  { id: "SVK", name: "Savannakhet", lao: "ສະຫວັນນະເຂດ", pop2015: 969700, pop2025: 1102000, urban: 35, medianAge: 27.0, youth: 48, working: 65, literacy: 92, school: 79, water: 86, electricity: 94, internet: 52, disability: 2.7, migration: 2.7, tfr: 2.1, x: 268, y: 564, d: "M206 504 L284 526 L340 582 L310 638 L232 621 L178 560 Z", districts: ["Kaysone Phomvihane", "Outhoumphone", "Songkhone", "Atsaphangthong"] },
  { id: "SRV", name: "Salavan", lao: "ສາລະວັນ", pop2015: 397000, pop2025: 454000, urban: 23, medianAge: 24.8, youth: 55, working: 59, literacy: 83, school: 68, water: 73, electricity: 84, internet: 36, disability: 3.2, migration: -0.4, tfr: 2.8, x: 221, y: 639, d: "M178 560 L232 621 L229 690 L154 688 L128 620 Z", districts: ["Salavan", "Lao Ngam", "Ta Oy", "Vapy"] },
  { id: "XEK", name: "Xekong", lao: "ເຊກອງ", pop2015: 113000, pop2025: 133000, urban: 20, medianAge: 23.6, youth: 58, working: 57, literacy: 79, school: 64, water: 68, electricity: 79, internet: 30, disability: 3.6, migration: 0.6, tfr: 3.0, x: 303, y: 687, d: "M229 690 L310 638 L360 703 L314 747 L240 737 Z", districts: ["Lamam", "Kaleum", "Dakcheung", "Thateng"] },
  { id: "CHP", name: "Champasak", lao: "ຈຳປາສັກ", pop2015: 694000, pop2025: 794000, urban: 41, medianAge: 27.5, youth: 47, working: 65, literacy: 92, school: 80, water: 88, electricity: 95, internet: 55, disability: 2.6, migration: 3.9, tfr: 2.1, x: 216, y: 759, d: "M154 688 L240 737 L248 826 L166 859 L104 780 Z", districts: ["Pakse", "Champasak", "Pathoumphone", "Khong"] },
  { id: "ATP", name: "Attapeu", lao: "ອັດຕະປື", pop2015: 139600, pop2025: 168000, urban: 24, medianAge: 24.3, youth: 56, working: 59, literacy: 82, school: 67, water: 72, electricity: 83, internet: 34, disability: 3.4, migration: 2.4, tfr: 2.8, x: 318, y: 800, d: "M248 826 L314 747 L382 809 L341 875 L276 879 Z", districts: ["Samakkhixay", "Xaysetha", "Sanamxay", "Phouvong"] },
  { id: "XSB", name: "Xaisomboun", lao: "ໄຊສົມບູນ", pop2015: 85800, pop2025: 103000, urban: 18, medianAge: 23.9, youth: 57, working: 58, literacy: 82, school: 66, water: 70, electricity: 82, internet: 33, disability: 3.4, migration: 1.7, tfr: 2.9, x: 292, y: 366, d: "M282 373 L323 382 L305 421 L282 410 Z", districts: ["Anouvong", "Thathom", "Longchaeng", "Hom"] },
];

const INDICATORS = {
  pop2025: { label: "Population 2025", lao: "ປະຊາກອນ 2025", unit: "", format: "number", polarity: "neutral" },
  growth: { label: "Population growth 2015-2025", lao: "ການເຕີບໂຕ 2015-2025", unit: "%", format: "percent", polarity: "neutral" },
  urban: { label: "Urban share", lao: "ສັດສ່ວນເມືອງ", unit: "%", format: "percent", polarity: "neutral" },
  youth: { label: "Population under 30", lao: "ປະຊາກອນຕ່ຳກວ່າ 30 ປີ", unit: "%", format: "percent", polarity: "neutral" },
  working: { label: "Working-age population", lao: "ປະຊາກອນວັຍແຮງງານ", unit: "%", format: "percent", polarity: "positive" },
  literacy: { label: "Adult literacy", lao: "ການຮູ້ໜັງສືຜູ້ໃຫຍ່", unit: "%", format: "percent", polarity: "positive" },
  school: { label: "School attendance 6-17", lao: "ການເຂົ້າໂຮງຮຽນ 6-17", unit: "%", format: "percent", polarity: "positive" },
  water: { label: "Improved drinking water", lao: "ນ້ຳດື່ມປັບປຸງ", unit: "%", format: "percent", polarity: "positive" },
  internet: { label: "Internet access", lao: "ການເຂົ້າເຖິງອິນເຕີເນັດ", unit: "%", format: "percent", polarity: "positive" },
  tfr: { label: "Total fertility rate", lao: "ອັດຕາເກີດລວມ", unit: "", format: "decimal", polarity: "neutral" },
};

const TRANSLATIONS = {
  en: {
    brandTitle: "Lao PHC 2025",
    brandSub: "Online Census Dissemination Dashboard",
    navDashboard: "Dashboard",
    navExplore: "Explore",
    navCrosstab: "Cross-tab",
    navHandover: "Delivery",
    heroEyebrow: "Official dissemination prototype",
    heroTitle: "From digital census data to decisions everyone can use.",
    heroBody: "A high-level web prototype for Lao Statistics Bureau and UNFPA: GIS drill-down, population pyramid, trend comparison, confidential aggregated tables, exports, bilingual labels, and an embedded data assistant.",
    heroCta: "Open live dashboard",
    heroAsk: "Ask the data assistant",
    heroStat1Label: "Enumerators",
    heroStat2Label: "Provinces",
    heroStat3Label: "Target coverage",
    statusSource: "Data mode",
    statusSynthetic: "Synthetic aggregated demo",
    statusSecurity: "Privacy",
    statusPrivacy: "No microdata exposed",
    statusStack: "Production target",
    statusDelivery: "TOR window",
    filtersEyebrow: "Global filters",
    filtersTitle: "Subset the census",
    reset: "Reset",
    indicator: "Indicator",
    province: "Province",
    district: "District",
    sex: "Sex",
    area: "Urban / rural",
    ethno: "Ethno-linguistic typology",
    search: "Search",
    exports: "Exports",
    downloadCsv: "Download CSV",
    downloadJson: "Download JSON",
    downloadMap: "Download map PNG",
    mapEyebrow: "GIS-ready view",
    mapTitle: "Province choropleth",
    insightEyebrow: "Executive one-page",
    insightTitle: "Headline intelligence",
    pyramidEyebrow: "Age and sex",
    pyramidTitle: "Population pyramid",
    trendEyebrow: "2015 vs 2025",
    trendTitle: "Change over time",
    crosstabEyebrow: "Technical users",
    crosstabTitle: "Custom cross-tabulation builder",
    crosstabBody: "Build publication-safe aggregated tables by dimension and indicator. Production data would be generated from approved tabulation matrices only.",
    rows: "Rows",
    columns: "Columns",
    measure: "Measure",
    copyTable: "Copy table",
    handoverEyebrow: "TOR alignment",
    handoverTitle: "Built to answer the 32-day assignment.",
    assistantToggle: "Data assistant",
    assistantTitle: "Census data assistant",
    assistantSub: "Ask about indicators, exports, privacy, or provinces.",
    send: "Send",
  },
  lo: {
    brandTitle: "ສຳມະໂນປະຊາກອນ ລາວ 2025",
    brandSub: "ແຜງຂໍ້ມູນອອນລາຍ",
    navDashboard: "ແຜງຄວບຄຸມ",
    navExplore: "ສຳຫຼວດ",
    navCrosstab: "ຕາຕະລາງຂ້າມ",
    navHandover: "ການສົ່ງມອບ",
    heroEyebrow: "ຕົ້ນແບບການເຜີຍແຜ່ຂໍ້ມູນ",
    heroTitle: "ຈາກຂໍ້ມູນສຳມະໂນດິຈິຕອນ ໄປສູ່ການຕັດສິນໃຈ.",
    heroBody: "ຕົ້ນແບບແຜງຂໍ້ມູນລະດັບສູງສຳລັບ LSB ແລະ UNFPA: ແຜນທີ່ GIS, ພີຣາມິດປະຊາກອນ, ແນວໂນ້ມ, ຕາຕະລາງລວມ, ການສົ່ງອອກ, ແລະຜູ້ຊ່ວຍຂໍ້ມູນ.",
    heroCta: "ເປີດແຜງຂໍ້ມູນ",
    heroAsk: "ຖາມຜູ້ຊ່ວຍຂໍ້ມູນ",
    heroStat1Label: "ຜູ້ສຳຫຼວດ",
    heroStat2Label: "ແຂວງ",
    heroStat3Label: "ເປົ້າໝາຍຄອບຄຸມ",
    statusSource: "ໂໝດຂໍ້ມູນ",
    statusSynthetic: "ຂໍ້ມູນລວມສັງເຄາະ",
    statusSecurity: "ຄວາມລັບ",
    statusPrivacy: "ບໍ່ເປີດເຜີຍ microdata",
    statusStack: "ເປົ້າໝາຍ production",
    statusDelivery: "ໄລຍະ TOR",
    filtersEyebrow: "ຕົວກອງຫຼັກ",
    filtersTitle: "ກອງຂໍ້ມູນສຳມະໂນ",
    reset: "ຕັ້ງຄ່າໃໝ່",
    indicator: "ຕົວຊີ້ວັດ",
    province: "ແຂວງ",
    district: "ເມືອງ",
    sex: "ເພດ",
    area: "ເມືອງ / ຊົນນະບົດ",
    ethno: "ກຸ່ມພາສາ-ຊົນເຜົ່າ",
    search: "ຄົ້ນຫາ",
    exports: "ສົ່ງອອກ",
    downloadCsv: "ດາວໂຫຼດ CSV",
    downloadJson: "ດາວໂຫຼດ JSON",
    downloadMap: "ດາວໂຫຼດແຜນທີ່ PNG",
    mapEyebrow: "ພ້ອມສຳລັບ GIS",
    mapTitle: "ແຜນທີ່ຕາມແຂວງ",
    insightEyebrow: "ສຳລັບຜູ້ບໍລິຫານ",
    insightTitle: "ຂໍ້ມູນສຳຄັນ",
    pyramidEyebrow: "ອາຍຸ ແລະ ເພດ",
    pyramidTitle: "ພີຣາມິດປະຊາກອນ",
    trendEyebrow: "2015 ທຽບ 2025",
    trendTitle: "ການປ່ຽນແປງ",
    crosstabEyebrow: "ຜູ້ໃຊ້ເຕັກນິກ",
    crosstabTitle: "ສ້າງຕາຕະລາງຂ້າມ",
    crosstabBody: "ສ້າງຕາຕະລາງລວມທີ່ປອດໄພສຳລັບການເຜີຍແຜ່.",
    rows: "ແຖວ",
    columns: "ຖັນ",
    measure: "ຄ່າວັດ",
    copyTable: "ຄັດລອກຕາຕະລາງ",
    handoverEyebrow: "ສອດຄ່ອງ TOR",
    handoverTitle: "ອອກແບບເພື່ອຕອບໂຈດ 32 ວັນ.",
    assistantToggle: "ຜູ້ຊ່ວຍຂໍ້ມູນ",
    assistantTitle: "ຜູ້ຊ່ວຍຂໍ້ມູນສຳມະໂນ",
    assistantSub: "ຖາມເລື່ອງຕົວຊີ້ວັດ, export, privacy ຫຼື ແຂວງ.",
    send: "ສົ່ງ",
  },
};

const state = {
  lang: "en",
  indicator: "pop2025",
  province: "all",
  district: "all",
  sex: "all",
  area: "all",
  ethno: "all",
  search: "",
  rowDim: "province",
  colDim: "area",
  measure: "pop2025",
};

const dims = {
  province: ["All provinces", ...PROVINCES.map((p) => p.name)],
  area: ["Urban", "Rural"],
  sex: ["Male", "Female"],
  ethno: ["Lao-Tai", "Mon-Khmer", "Hmong-Mien", "Sino-Tibetan"],
  age: ["0-14", "15-29", "30-59", "60+"],
};

const colors = ["#e8f5f9", "#b9e2eb", "#7bc7d7", "#2fa4bc", "#0076a8", "#004e75"];

function growth(p) {
  return ((p.pop2025 - p.pop2015) / p.pop2015) * 100;
}

function val(p, key) {
  if (key === "growth") return growth(p);
  return p[key];
}

function fmt(value, key = state.indicator) {
  const meta = INDICATORS[key] || {};
  if (meta.format === "number") return Math.round(value).toLocaleString();
  if (meta.format === "decimal") return Number(value).toFixed(1);
  return `${Number(value).toFixed(value >= 10 ? 0 : 1)}${meta.unit || ""}`;
}

function label(key) {
  const meta = INDICATORS[key];
  return state.lang === "lo" ? meta.lao : meta.label;
}

function provinceLabel(p) {
  return state.lang === "lo" ? p.lao : p.name;
}

function national(key) {
  if (key === "pop2025") return PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
  if (key === "growth") {
    const now = PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
    const then = PROVINCES.reduce((sum, p) => sum + p.pop2015, 0);
    return ((now - then) / then) * 100;
  }
  const total = PROVINCES.reduce((sum, p) => sum + p.pop2025, 0);
  return PROVINCES.reduce((sum, p) => sum + val(p, key) * p.pop2025, 0) / total;
}

function filteredProvinces() {
  const q = state.search.trim().toLowerCase();
  return PROVINCES.filter((p) => {
    const matchProvince = state.province === "all" || p.id === state.province;
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.lao.includes(q);
    return matchProvince && matchSearch;
  });
}

function activeProvince() {
  return PROVINCES.find((p) => p.id === state.province) || null;
}

function populateSelects() {
  const indicatorSelect = document.querySelector("#indicatorSelect");
  indicatorSelect.innerHTML = Object.entries(INDICATORS).map(([key]) => `<option value="${key}">${label(key)}</option>`).join("");
  indicatorSelect.value = state.indicator;

  const provinceSelect = document.querySelector("#provinceSelect");
  provinceSelect.innerHTML = `<option value="all">${state.lang === "lo" ? "ທັງປະເທດ" : "National"}</option>` + PROVINCES.map((p) => `<option value="${p.id}">${provinceLabel(p)}</option>`).join("");
  provinceSelect.value = state.province;

  populateDistricts();

  fillSimpleSelect("#sexSelect", [["all", state.lang === "lo" ? "ທັງໝົດ" : "All"], ["male", state.lang === "lo" ? "ຊາຍ" : "Male"], ["female", state.lang === "lo" ? "ຍິງ" : "Female"]], state.sex);
  fillSimpleSelect("#areaSelect", [["all", state.lang === "lo" ? "ທັງໝົດ" : "All"], ["urban", state.lang === "lo" ? "ເມືອງ" : "Urban"], ["rural", state.lang === "lo" ? "ຊົນນະບົດ" : "Rural"]], state.area);
  fillSimpleSelect("#ethnoSelect", [["all", state.lang === "lo" ? "ທັງໝົດ" : "All"], ["lao-tai", "Lao-Tai"], ["mon-khmer", "Mon-Khmer"], ["hmong-mien", "Hmong-Mien"], ["sino-tibetan", "Sino-Tibetan"]], state.ethno);

  fillSimpleSelect("#rowDimSelect", [["province", "Province"], ["area", "Urban/Rural"], ["sex", "Sex"], ["ethno", "Ethno-linguistic"], ["age", "Age group"]], state.rowDim);
  fillSimpleSelect("#colDimSelect", [["area", "Urban/Rural"], ["sex", "Sex"], ["ethno", "Ethno-linguistic"], ["age", "Age group"]], state.colDim);
  document.querySelector("#measureSelect").innerHTML = Object.entries(INDICATORS).map(([key]) => `<option value="${key}">${label(key)}</option>`).join("");
  document.querySelector("#measureSelect").value = state.measure;
}

function fillSimpleSelect(selector, options, value) {
  const el = document.querySelector(selector);
  el.innerHTML = options.map(([key, text]) => `<option value="${key}">${text}</option>`).join("");
  el.value = value;
}

function populateDistricts() {
  const p = activeProvince();
  const districtSelect = document.querySelector("#districtSelect");
  const all = state.lang === "lo" ? "ທຸກເມືອງ" : "All districts";
  const districts = p ? p.districts : ["All provinces first"];
  districtSelect.innerHTML = `<option value="all">${all}</option>` + districts.map((d) => `<option value="${d}">${d}</option>`).join("");
  districtSelect.value = districts.includes(state.district) ? state.district : "all";
}

function renderHeroDots() {
  const dots = document.querySelector("#heroProvinceDots");
  dots.innerHTML = PROVINCES.map((p, i) => {
    const x = 86 + (p.x / 460) * 330;
    const y = 18 + (p.y / 890) * 540;
    return `<circle class="hero-dot" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i % 5 === 0 ? 7 : 5}" fill="${i % 3 === 0 ? "#d4212f" : "#0076a8"}" style="animation-delay:${i * 90}ms" />`;
  }).join("");
}

function renderKpis() {
  const pop = activeProvince() ? activeProvince().pop2025 : national("pop2025");
  const kpis = [
    [state.lang === "lo" ? "ປະຊາກອນ" : "Population", fmt(pop, "pop2025"), state.lang === "lo" ? "ຂໍ້ມູນລວມ" : "Aggregated records"],
    [state.lang === "lo" ? "ເຕີບໂຕ" : "Growth", fmt(activeProvince() ? growth(activeProvince()) : national("growth"), "growth"), "2015-2025"],
    [state.lang === "lo" ? "ອາຍຸກາງ" : "Median age", fmt(activeProvince() ? activeProvince().medianAge : national("medianAge"), "tfr"), state.lang === "lo" ? "ປີ" : "years"],
    [label(state.indicator), fmt(activeProvince() ? val(activeProvince(), state.indicator) : national(state.indicator), state.indicator), state.lang === "lo" ? "ຕາມຕົວກອງ" : "Current scope"],
  ];
  document.querySelector("#kpiGrid").innerHTML = kpis.map(([title, value, note]) => `<div class="kpi"><span>${title}</span><strong>${value}</strong><em>${note}</em></div>`).join("");
}

function renderMap() {
  const values = PROVINCES.map((p) => val(p, state.indicator));
  const min = Math.min(...values);
  const max = Math.max(...values);
  const svg = document.querySelector("#laoMap");
  svg.innerHTML = `
    <rect width="460" height="660" fill="transparent"></rect>
    <path d="M358 30 C318 89 324 138 353 193 C388 259 362 329 398 401 C424 453 452 495 434 608" fill="none" stroke="#00a5b5" stroke-width="8" stroke-linecap="round" opacity=".45"></path>
    ${PROVINCES.map((p) => {
      const t = (val(p, state.indicator) - min) / Math.max(1, max - min);
      const color = colors[Math.min(colors.length - 1, Math.floor(t * colors.length))];
      const active = state.province === p.id ? " active" : "";
      return `<path class="province-shape${active}" data-id="${p.id}" d="${p.d}" fill="${color}"><title>${provinceLabel(p)} - ${fmt(val(p, state.indicator), state.indicator)}</title></path>
      <text class="province-label" x="${p.x}" y="${p.y}">${p.id}</text>`;
    }).join("")}
  `;
  svg.querySelectorAll(".province-shape").forEach((shape) => {
    shape.addEventListener("click", () => {
      state.province = shape.dataset.id;
      state.district = "all";
      populateSelects();
      renderAll();
    });
  });
  document.querySelector("#selectedScope").textContent = activeProvince() ? provinceLabel(activeProvince()) : (state.lang === "lo" ? "ທັງປະເທດ" : "National");
  renderLegend(min, max);
}

function renderLegend(min, max) {
  const steps = colors.map((c, i) => {
    const value = min + ((max - min) * i) / (colors.length - 1);
    return `<span><i style="background:${c}"></i>${fmt(value, state.indicator)}</span>`;
  });
  document.querySelector("#mapLegend").innerHTML = steps.join("");
}

function renderInsights() {
  const top = [...PROVINCES].sort((a, b) => val(b, state.indicator) - val(a, state.indicator))[0];
  const low = [...PROVINCES].sort((a, b) => val(a, state.indicator) - val(b, state.indicator))[0];
  const fast = [...PROVINCES].sort((a, b) => growth(b) - growth(a))[0];
  const selected = activeProvince();
  const rows = [
    [state.lang === "lo" ? "ຄ່າສູງສຸດ" : "Highest current value", `${provinceLabel(top)}: ${fmt(val(top, state.indicator), state.indicator)}`, state.lang === "lo" ? "ເໝາະສຳລັບການຈັດລຳດັບແຂວງ." : "Use this for rapid province ranking and resource targeting."],
    [state.lang === "lo" ? "ຄ່າຕ່ຳສຸດ" : "Lowest current value", `${provinceLabel(low)}: ${fmt(val(low, state.indicator), state.indicator)}`, state.lang === "lo" ? "ຊ່ວຍຄົ້ນຫາພື້ນທີ່ຕ້ອງການສະໜັບສະໜູນ." : "Highlights areas where follow-up analysis may be needed."],
    [state.lang === "lo" ? "ເຕີບໂຕໄວ" : "Fastest population growth", `${provinceLabel(fast)}: ${fmt(growth(fast), "growth")}`, state.lang === "lo" ? "ສຳຄັນຕໍ່ການວາງແຜນໂຄງສ້າງພື້ນຖານ." : "Important for infrastructure, schooling, and service planning."],
    [state.lang === "lo" ? "ຂອບເຂດປັດຈຸບັນ" : "Current scope", selected ? provinceLabel(selected) : "Lao PDR", state.lang === "lo" ? "ຕົວກອງທັງໝົດນຳໄປໃຊ້ໃນຕາຕະລາງແລະແຜນພາບ." : "All filters are reflected in the charts and downloadable tables."],
  ];
  document.querySelector("#insightList").innerHTML = rows.map(([k, v, d]) => `<div class="insight"><span class="chip">${k}</span><strong>${v}</strong><p>${d}</p></div>`).join("");
}

function ageProfile() {
  const p = activeProvince();
  const youthBias = p ? (p.youth - 52) / 100 : 0;
  const bands = ["80+", "75-79", "70-74", "65-69", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24", "15-19", "10-14", "5-9", "0-4"];
  const base = [1.1, 1.4, 1.8, 2.2, 2.9, 3.5, 4.0, 4.5, 5.0, 5.6, 6.2, 6.9, 7.4, 8.0, 8.4, 8.1, 7.6];
  return bands.map((band, i) => {
    const youngBoost = (i > 10 ? youthBias * 32 : -youthBias * 14);
    const male = Math.max(0.7, base[i] + youngBoost + (i % 3 - 1) * 0.18);
    const female = Math.max(0.7, base[i] + youngBoost + 0.25 + (i % 2) * 0.12);
    return { band, male, female };
  });
}

function renderPyramid() {
  const data = ageProfile();
  const max = Math.max(...data.flatMap((d) => [d.male, d.female]));
  document.querySelector("#pyramidChart").innerHTML = data.map((d) => `
    <div class="bar-row">
      <span>${d.band}</span>
      <div class="bar-track"><div class="bar-fill male" style="width:${(d.male / max) * 100}%"></div></div>
      <div class="bar-track"><div class="bar-fill female" style="width:${(d.female / max) * 100}%"></div></div>
      <span>${d.female.toFixed(1)}%</span>
    </div>
  `).join("");
}

function renderTrend() {
  const selected = activeProvince();
  const data = selected ? [selected] : [...PROVINCES].sort((a, b) => b.pop2025 - a.pop2025).slice(0, 8);
  const max = Math.max(...data.flatMap((p) => [p.pop2015, p.pop2025]));
  const rows = data.map((p, i) => {
    const y = 42 + i * 34;
    const x1 = 170;
    const x2 = 170 + (p.pop2015 / max) * 220;
    const x3 = 170 + (p.pop2025 / max) * 220;
    return `
      <text x="6" y="${y + 5}" font-size="12" font-weight="700" fill="#16212d">${provinceLabel(p)}</text>
      <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#8fb7c4" stroke-width="10" stroke-linecap="round"></line>
      <line x1="${x1}" y1="${y + 12}" x2="${x3}" y2="${y + 12}" stroke="#d4212f" stroke-width="10" stroke-linecap="round"></line>
      <text x="${x3 + 8}" y="${y + 16}" font-size="11" font-weight="800" fill="#667382">${fmt(p.pop2025, "pop2025")}</text>
    `;
  }).join("");
  document.querySelector("#trendChart").innerHTML = `
    <svg class="trend-svg" viewBox="0 0 460 320" role="img" aria-label="Population trend chart">
      <text x="170" y="20" font-size="11" font-weight="900" fill="#667382">2015</text>
      <text x="224" y="20" font-size="11" font-weight="900" fill="#d4212f">2025</text>
      ${rows}
    </svg>
  `;
}

function adjustedMeasure(row, col, measure) {
  const base = national(measure);
  const rowText = String(row);
  const colText = String(col);
  let factor = 1;
  if (rowText.includes("Vientiane") || colText === "Urban") factor += 0.09;
  if (rowText.includes("Phongsaly") || rowText.includes("Xekong") || colText === "Rural") factor -= 0.06;
  if (colText === "Female" && ["literacy", "school"].includes(measure)) factor += 0.015;
  if (colText === "Hmong-Mien" || rowText === "Hmong-Mien") factor -= 0.08;
  if (colText === "60+" || rowText === "60+") factor -= 0.04;
  if (measure === "pop2025") {
    const p = PROVINCES.find((x) => x.name === row) || PROVINCES.find((x) => x.name === col);
    return p ? p.pop2025 / (colDimCount() || 1) : base / 12;
  }
  return Math.max(0, base * factor);
}

function dimValues(dim) {
  if (dim === "province") return PROVINCES.map((p) => p.name);
  return dims[dim] || [];
}

function colDimCount() {
  return dimValues(state.colDim).length;
}

function renderCrosstab() {
  const rows = dimValues(state.rowDim);
  const cols = dimValues(state.colDim);
  const head = `<thead><tr><th>${state.rowDim}</th>${cols.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
  const body = rows.map((r) => `<tr><td>${r}</td>${cols.map((c) => `<td>${fmt(adjustedMeasure(r, c, state.measure), state.measure)}</td>`).join("")}</tr>`).join("");
  document.querySelector("#crosstabTable").innerHTML = `${head}<tbody>${body}</tbody>`;
}

function renderTimeline() {
  const items = [
    ["3 days", "Inception blueprint", "UI/UX wireframes, data schema, localization map, LAOSIS assessment."],
    ["6 days", "Data warehouse", "Aggregated ingestion scripts, anonymization checks, PostgreSQL/PostGIS design."],
    ["10 days", "Beta dashboard", "Private staging instance with GIS, filters, pyramids, exports, and tests."],
    ["5 days", "Manuals and code", "Admin guide, user guide, data dictionary, clean documented repository."],
    ["8 days", "Live deployment", "Official hosting migration, stress/security audit, and LSB hands-on training."],
  ];
  document.querySelector("#timeline").innerHTML = items.map(([days, title, body]) => `<div class="timeline-item"><span>${days}</span><strong>${title}</strong><p>${body}</p></div>`).join("");
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = TRANSLATIONS[state.lang][key] || TRANSLATIONS.en[key] || el.textContent;
  });
  document.documentElement.lang = state.lang === "lo" ? "lo" : "en";
  document.querySelector("#langEn").classList.toggle("active", state.lang === "en");
  document.querySelector("#langLo").classList.toggle("active", state.lang === "lo");
}

function renderAll() {
  applyTranslations();
  populateSelects();
  renderKpis();
  renderMap();
  renderInsights();
  renderPyramid();
  renderTrend();
  renderCrosstab();
  renderTimeline();
}

function exportRows() {
  return filteredProvinces().map((p) => ({
    province: p.name,
    province_lao: p.lao,
    district_filter: state.district,
    sex_filter: state.sex,
    area_filter: state.area,
    ethno_filter: state.ethno,
    population_2015: p.pop2015,
    population_2025: p.pop2025,
    growth_2015_2025_pct: growth(p).toFixed(2),
    urban_share_pct: p.urban,
    youth_under_30_pct: p.youth,
    working_age_pct: p.working,
    literacy_pct: p.literacy,
    school_attendance_pct: p.school,
    improved_water_pct: p.water,
    electricity_pct: p.electricity,
    internet_pct: p.internet,
    total_fertility_rate: p.tfr,
    source: "Synthetic aggregated demo for UNFPA/LSB dashboard prototype",
  }));
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

function toCsv(rows) {
  const headers = Object.keys(rows[0] || {});
  const escape = (v) => `"${String(v).replaceAll('"', '""')}"`;
  return [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n");
}

function downloadMapPng() {
  const svg = document.querySelector("#laoMap");
  const xml = new XMLSerializer().serializeToString(svg);
  const img = new Image();
  const url = URL.createObjectURL(new Blob([xml], { type: "image/svg+xml;charset=utf-8" }));
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 920;
    canvas.height = 1320;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);
    canvas.toBlob((blob) => {
      const out = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = out;
      a.download = "lao-phc-province-map.png";
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
  const topPop = [...PROVINCES].sort((a, b) => b.pop2025 - a.pop2025)[0];
  const youngest = [...PROVINCES].sort((a, b) => b.youth - a.youth)[0];
  const connected = [...PROVINCES].sort((a, b) => b.internet - a.internet)[0];
  const lagWater = [...PROVINCES].sort((a, b) => a.water - b.water)[0];
  if (q.includes("young") || q.includes("youth") || q.includes("jeune")) {
    return `${youngest.name} has the youngest profile in this synthetic demo, with ${youngest.youth}% of residents under 30. A production dashboard would validate this with official PHC age-sex tables.`;
  }
  if (q.includes("population") || q.includes("largest") || q.includes("plus peupl")) {
    return `${topPop.name} is the largest province in the demo at ${fmt(topPop.pop2025, "pop2025")} people. National synthetic total is ${fmt(national("pop2025"), "pop2025")}.`;
  }
  if (q.includes("internet") || q.includes("digital")) {
    return `${connected.name} leads on internet access in the demo (${connected.internet}%). This supports a digital-divide view for census dissemination and service planning.`;
  }
  if (q.includes("water") || q.includes("service")) {
    return `${lagWater.name} has the lowest improved-water value in the demo (${lagWater.water}%). The dashboard can surface these gaps by province, district, urban/rural, and ethnicity.`;
  }
  if (q.includes("privacy") || q.includes("microdata") || q.includes("confidential")) {
    return "The prototype follows the TOR privacy covenant: it exposes aggregated macro indicators only. No individual microdata rows, PII, or small-cell records are served to the browser.";
  }
  if (q.includes("export") || q.includes("download") || q.includes("csv") || q.includes("pdf")) {
    return "Use the export dock to download CSV, JSON, and map PNG. The PDF path is handled through the Print/PDF button, which creates an executive-ready snapshot.";
  }
  return "Try asking: highest population, youngest province, internet access, water service gaps, privacy safeguards, or export formats. I answer from the aggregated demo data currently loaded.";
}

function setupAssistant() {
  const prompts = ["Youngest province?", "Largest population?", "Privacy safeguards?", "Export formats?"];
  document.querySelector("#quickPrompts").innerHTML = prompts.map((p) => `<button type="button">${p}</button>`).join("");
  document.querySelectorAll("#quickPrompts button").forEach((btn) => {
    btn.addEventListener("click", () => {
      addMessage("user", btn.textContent);
      addMessage("bot", assistantReply(btn.textContent));
    });
  });
  addMessage("bot", "Hello. I am a local prototype assistant. Ask me about the census indicators, province rankings, privacy, or exports.");
}

function bindEvents() {
  document.querySelector("#indicatorSelect").addEventListener("change", (e) => { state.indicator = e.target.value; renderAll(); });
  document.querySelector("#provinceSelect").addEventListener("change", (e) => { state.province = e.target.value; state.district = "all"; renderAll(); });
  document.querySelector("#districtSelect").addEventListener("change", (e) => { state.district = e.target.value; renderAll(); });
  document.querySelector("#sexSelect").addEventListener("change", (e) => { state.sex = e.target.value; renderAll(); });
  document.querySelector("#areaSelect").addEventListener("change", (e) => { state.area = e.target.value; renderAll(); });
  document.querySelector("#ethnoSelect").addEventListener("change", (e) => { state.ethno = e.target.value; renderAll(); });
  document.querySelector("#searchInput").addEventListener("input", (e) => { state.search = e.target.value; renderAll(); });
  document.querySelector("#rowDimSelect").addEventListener("change", (e) => { state.rowDim = e.target.value; renderCrosstab(); });
  document.querySelector("#colDimSelect").addEventListener("change", (e) => { state.colDim = e.target.value; renderCrosstab(); });
  document.querySelector("#measureSelect").addEventListener("change", (e) => { state.measure = e.target.value; renderCrosstab(); });
  document.querySelector("#resetBtn").addEventListener("click", () => {
    Object.assign(state, { indicator: "pop2025", province: "all", district: "all", sex: "all", area: "all", ethno: "all", search: "" });
    document.querySelector("#searchInput").value = "";
    renderAll();
  });
  document.querySelector("#downloadCsvBtn").addEventListener("click", () => download("lao-phc-dashboard-demo.csv", toCsv(exportRows()), "text/csv;charset=utf-8"));
  document.querySelector("#downloadJsonBtn").addEventListener("click", () => download("lao-phc-dashboard-demo.json", JSON.stringify(exportRows(), null, 2), "application/json"));
  document.querySelector("#downloadMapPngBtn").addEventListener("click", downloadMapPng);
  document.querySelector("#printBtn").addEventListener("click", () => window.print());
  document.querySelector("#copyTableBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText(document.querySelector("#crosstabTable").innerText);
    document.querySelector("#copyTableBtn").textContent = "Copied";
    setTimeout(() => renderAll(), 900);
  });
  document.querySelector("#langEn").addEventListener("click", () => { state.lang = "en"; renderAll(); });
  document.querySelector("#langLo").addEventListener("click", () => { state.lang = "lo"; renderAll(); });
  document.querySelector("#assistantToggle").addEventListener("click", () => {
    const panel = document.querySelector("#assistantPanel");
    panel.classList.toggle("open");
    document.querySelector("#assistantToggle").setAttribute("aria-expanded", panel.classList.contains("open"));
  });
  document.querySelector("#assistantClose").addEventListener("click", () => document.querySelector("#assistantPanel").classList.remove("open"));
  document.querySelector("#demoQuestionBtn").addEventListener("click", () => {
    document.querySelector("#assistantPanel").classList.add("open");
    document.querySelector("#assistantInput").focus();
  });
  document.querySelector("#assistantForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#assistantInput");
    const q = input.value.trim();
    if (!q) return;
    addMessage("user", q);
    addMessage("bot", assistantReply(q));
    input.value = "";
  });
}

renderHeroDots();
renderAll();
setupAssistant();
bindEvents();
