---
title: AP2 Karteikarten-Lern-App
date: 2026-04-23
status: approved
---

# AP2 Karteikarten-Lern-App — Design-Dokument

## Ziel

Eine lokale Web-App (HTML/CSS/JS, kein Server, kein API-Key) zum Lernen auf die AP2-Abschlussprüfung. Der Benutzer schickt Lernmaterial im Chat, Claude erstellt daraus eine `cards.json`, die App lädt die Datei und bietet drei Lernmodi mit Fortschritts-Tracking.

---

## Architektur

```
AP2/
  index.html          # Einstiegspunkt, öffnen im Browser
  style.css           # Styles
  app.js              # Gesamte App-Logik
  cards.json          # Karteikarten (von Claude generiert, manuell austauschbar)
```

- Keine Build-Tools, kein Node.js, kein Backend
- Fortschritt wird in `localStorage` gespeichert (bleibt zwischen Sessions erhalten)
- Neue Themen: neues Material im Chat schicken → Claude erweitert `cards.json`

---

## Datenformat `cards.json`

```json
{
  "meta": {
    "version": 1,
    "sprache": "de"
  },
  "themen": [
    {
      "id": "thema-001",
      "name": "Netzwerktechnik",
      "karten": [
        {
          "id": "k-001",
          "frage": "Was ist das OSI-Modell?",
          "antwort": "Ein 7-Schichten-Referenzmodell zur Beschreibung von Netzwerkkommunikation.",
          "stichworte": ["OSI", "7 Schichten", "Referenzmodell"],
          "falschantworten": [
            "Ein Protokoll zur Datenverschlüsselung.",
            "Ein Betriebssystem für Router.",
            "Eine Methode zur IP-Adressierung."
          ],
          "schwierigkeit": "mittel"
        }
      ]
    }
  ]
}
```

**Felder:**
- `stichworte` — für Freitext-Modus (Schlüsselwort-Abgleich)
- `falschantworten` — für Multiple-Choice-Modus (3 Stück pro Karte)
- `schwierigkeit` — `leicht` / `mittel` / `schwer`

---

## Lernmodi

### 1. Karteikarte (Flip)
- Frage wird angezeigt
- Klick deckt Antwort auf
- Benutzer bewertet selbst: **Gewusst** / **Nicht gewusst**
- Bewertung fließt in SM-2-Algorithmus ein

### 2. Multiple Choice
- Frage + 4 Antwortoptionen (1 richtig + 3 aus `falschantworten`)
- Reihenfolge wird zufällig gemischt
- Sofortiges Feedback: richtig (grün) / falsch (rot, richtige Antwort hervorgehoben)

### 3. Freitext
- Frage + Eingabefeld
- Abgleich gegen `stichworte`: mindestens X der Stichworte enthalten → richtig
- Kein exakter Text-Match nötig, Groß-/Kleinschreibung ignoriert

---

## Fortschritt & Spaced Repetition

**Algorithmus:** SM-2 (vereinfacht)
- Jede Karte hat: `intervall`, `wiederholungen`, `easeFactor`, `naechsteWiederholung`
- Richtige Antwort → Intervall wächst exponentiell
- Falsche Antwort → Karte wird kurzfristig wiederholt
- Daten werden in `localStorage` unter dem Key `ap2_fortschritt` gespeichert

**Dashboard:**
- Gesamtfortschritt (Karten gelernt / gesamt)
- Fortschritt pro Thema
- Anzahl fälliger Karten heute
- Streak-Anzeige (Lerntage in Folge)

---

## UI-Struktur

```
[Header: AP2 Lernapp | Streak | Heute fällig]
[Sidebar: Themen-Liste mit Fortschrittsbalken]
[Hauptbereich: Lernmodus-Auswahl → Karteikarte / MC / Freitext]
[Footer: Fortschritts-Zusammenfassung]
```

- Responsive, funktioniert auf Desktop-Bildschirmen
- Deutschsprachige UI
- Dunkles oder helles Theme (localStorage-Einstellung)

---

## Nicht im Scope

- Kein Server, kein Backend
- Keine automatische KI-Generierung in der App selbst
- Keine Nutzer-Accounts oder Cloud-Sync
- Kein mobiles Responsive-Design (Desktop-First)
