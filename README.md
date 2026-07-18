# Lao PDR 2025 PHC Census Atlas Prototype

Interactive static web prototype for the UNFPA Lao PDR / Lao Statistics Bureau 2025 Population and Housing Census dashboard TOR.

## What this demonstrates

- Map-first census atlas layout that is visually distinct from the earlier Afrobarometer prototype.
- Real Lao PDR ADM1 province boundaries from geoBoundaries rendered locally from GeoJSON.
- Dynamic filters by province, district, sex, urban/rural, and ethno-linguistic typology.
- Population pyramid by 5-year age group and sex.
- 2015 vs 2025 trend comparison.
- Custom cross-tabulation builder.
- CSV, JSON, PNG, and print/PDF export paths.
- Chat widget inspired by a clean report-assistant panel.
- Privacy-first demo: only aggregated synthetic indicators are exposed.

## Data note

The prototype uses generated, aggregated demonstration indicators aligned with public UNFPA Lao PDR census themes. It does not contain official 2025 PHC microdata or personally identifiable information.

Boundary data: `data/geo/lao-adm1-geoboundaries.geojson`, downloaded from geoBoundaries LAO ADM1. In production, this layer can be replaced by LSB-approved shapefiles or GeoJSON layers and connected to official aggregated tabulation matrices.

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
