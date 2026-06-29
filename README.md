# Delikta — Webseite

Kleine, statische Marketing- und Rechtswebseite für das mobile Game **Delikta**.
Drei Seiten, im Noir-Look der App, zweisprachig (Deutsch / Englisch), ohne Build-Schritt.

## Inhalt

| Datei | Zweck |
|-------|-------|
| `index.html` | Teaser/Landing: Pitch, drei Falltypen, So funktioniert's, Screenshots, Download-Buttons |
| `privacy.html` | Datenschutzerklärung (DSGVO-orientierter **Entwurf**, DE + EN) — wird in den Stores hinterlegt |
| `delete-account.html` | Anleitung zur Account-Löschung (DE + EN) — wird in den Stores hinterlegt |
| `css/style.css` | Noir-Theme, Farbtokens 1:1 aus `core/ui/.../Theme.kt`, responsive |
| `js/i18n.js` | Clientseitiger Sprachumschalter (DE/EN), Auswahl in `localStorage` |
| `assets/` | App-Icon (PNG, mehrere Größen), QR-Code, Platzhalter-Screenshots |

## Lokal ansehen

Kein Build nötig. Einfacher lokaler Server (für korrekte Pfade):

```bash
cd delikta-web
python3 -m http.server 8000
# http://localhost:8000
```

Oder die `index.html` direkt im Browser öffnen.

## Design

Farben und Typografie sind aus der App übernommen
(`tagesakte-app/core/ui/src/commonMain/kotlin/io/delikta/game/core/ui/Theme.kt`,
Noir-/Dark-Academia-Theme): dunkler Hintergrund, Amber-Akzent (`#E0AA48`),
Serifen-Schrift für Texte, Monospace für Labels, „Papier-Akte"-Optik für die Lösch-Anleitung.
Das App-Icon (Fingerabdruck + Lupe) wird als PNG in mehreren Größen verwendet
(`assets/icon-512.png`, `icon-180.png`, `icon-96.png`), abgeleitet aus
`tagesakte-app/branding/icon/play_store_512.png`.

## Sprachen

DE/EN-Umschalter oben rechts. Initiale Sprache: `?lang=` → `localStorage` → Browsersprache → Default DE.
- Kurztexte über `data-i18n="key"` (Wörterbuch in `js/i18n.js`).
- Lange Rechtstexte über `data-lang-block="de|en"`-Container (je Sprache ein Block).

## Deployment via GitHub Pages

Der Workflow `.github/workflows/deploy.yml` deployt bei jedem Push auf `main` automatisch.

**Einmalige Einrichtung:**

1. Neues GitHub-Repository anlegen (z. B. `delikta-web`) und diesen Ordner pushen:
   ```bash
   cd delikta-web
   git init
   git add .
   git commit -m "Delikta website"
   git branch -M main
   git remote add origin git@github.com:<USER>/delikta-web.git
   git push -u origin main
   ```
2. Im Repo unter **Settings → Pages** als **Source** „**GitHub Actions**" wählen.
3. Nächster Push (oder manueller „Run workflow") veröffentlicht die Seite unter
   `https://<USER>.github.io/delikta-web/`.

> Die `.nojekyll`-Datei verhindert Jekyll-Processing (sonst werden u. a. Dateien mit `_` ignoriert).

**Alternative ohne Actions:** Settings → Pages → Source = „Deploy from a branch", Branch `main`, Ordner `/ (root)`.

**Custom-Domain:** Erst dann eine `CNAME`-Datei (mit der Domain als Inhalt) im Root anlegen und in den DNS einen CNAME-/A-Record setzen.

## TODO vor Release

- [ ] **Download-Links eintragen:** in `index.html` die beiden `.store-btn`-Links (Android/iOS) mit echten Store-URLs versehen, `aria-disabled` entfernen, `cursor`/`opacity` ggf. anpassen und das „Bald"-Badge entfernen.
- [ ] **Echte Screenshots** in `assets/screenshots/` ablegen und die SVG-Platzhalter in `index.html` ersetzen.
- [ ] **Datenschutz rechtlich prüfen** (`privacy.html`): Entwurf-Hinweis entfernen, Platzhalter `[…]` ausfüllen (Stand-Datum, Supabase-Region/Garantien, Consent-Mechanismus), ggf. Name/Anschrift des Verantwortlichen ergänzen.
- [ ] **AdMob/Login-Status** abgleichen: Falls sich der tatsächliche Funktionsumfang (Werbung, Login-Anbieter) ändert, Datenschutztext anpassen.
- [ ] Falls Custom-Domain gewünscht: `CNAME` anlegen (siehe oben).
