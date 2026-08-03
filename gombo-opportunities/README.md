# Gombo Opportunities

Plateforme personnelle de veille pour trouver chaque matin des opportunites remote proches du profil de Noe : Power BI, dashboards, data analyst/scientist, API, ODK/Kobo, suivi-evaluation et visualisation de donnees.

## Lancer localement

```powershell
cd "C:\Users\TanohNoeAhoundjoueh\OneDrive - Ipas\Documents\GOMBO\gombo-opportunities"
.\run.ps1
```

Ouvrir ensuite :

```text
http://127.0.0.1:5188
```

## Faire un scan manuel

Depuis l'interface, cliquer sur `Scanner maintenant`.

Ou en ligne de commande :

```powershell
.\.venv\Scripts\python.exe -m app.main --scan
```

## Automatiser chaque matin

Apres avoir lance `.\run.ps1` une premiere fois :

```powershell
.\scripts\install_morning_task.ps1 -Time "07:30"
```

La tache Windows va lancer un scan quotidien et alimenter la base SQLite locale.

## Version GitHub Pages

Le site statique est genere dans :

```text
gombo-opportunities/public/
```

Le workflow GitHub Actions `.github/workflows/gombo-opportunities.yml` execute les tests, lance un scan, genere `public/data/opportunities.json`, puis commit les resultats. Comme GitHub Pages sert deja la racine du repo, l'URL publique sera :

```text
https://noetanoh.github.io/lao-phc-dashboard-prototype/gombo-opportunities/public/
```

Le cron GitHub est regle sur `05:30 UTC`, soit `07:30` a Paris pendant l'heure d'ete europeenne. Il peut aussi etre lance manuellement depuis l'onglet Actions.

## Sources actuelles

Les sources sont configurees dans `app/sources.json` :

- Remotive API
- RemoteOK API
- Jobicy API
- Arbeitnow API
- Himalayas API
- The Muse API
- We Work Remotely RSS
- JobsCollider RSS
- ReliefWeb API
- Lever boards publics
- Greenhouse boards publics
- Ashby boards publics

La plateforme inclut aussi un annuaire de plateformes complementaires : LinkedIn, Indeed, Upwork, Freelancer, Contra, Malt, Toptal, UNGM, UNDP, World Bank, DevelopmentAid, Devex, ReliefWeb, UNICEF, Impactpool, Emploi.ci, Educarriere, Jobberman et MyJobMag.

Les sites difficiles ou risqués a scraper directement sont ouverts comme liens de recherche plutot que scrapes en silence, surtout quand ils exigent un login, bloquent les robots, ou imposent une API payante. L'automatisation couvre en priorite les sources publiques/API/RSS stables.

## Donnees

La base locale est creee ici :

```text
data/opportunities_v6.sqlite
```

L'interface permet aussi d'exporter un CSV.
