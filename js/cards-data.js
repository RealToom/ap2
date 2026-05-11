// js/cards-data.js
export const cardsData = {
  "meta": { "version": 3, "sprache": "de" },
  "faecher": [
    {
      "id": "wbl",
      "name": "WBL",
      "themen": [
        {
          "id": "thema-wbl",
          "name": "Wirtschaftliche Grundlagen",
          "karten": [
            {
              "id": "k-001",
              "frage": "Was versteht man unter dem Prinzip der Wirtschaftlichkeit?",
              "antwort": "Mit minimalem Einsatz einen maximalen Nutzen erzielen (Minimal- oder Maximalprinzip).",
              "stichworte": ["Wirtschaftlichkeit", "Minimalprinzip", "Maximalprinzip", "Nutzen"],
              "falschantworten": ["Den Gewinn durch Preiserhöhungen maximieren.", "Alle Ressourcen vollständig verbrauchen.", "Kosten und Erträge stets gleich halten."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "k-002",
              "frage": "Was beschreibt das Minimalprinzip?",
              "antwort": "Ein bestimmtes Ziel mit möglichst geringem Einsatz (Kosten, Ressourcen) erreichen.",
              "stichworte": ["Minimalprinzip", "Wirtschaftlichkeit"],
              "falschantworten": ["Mit gegebenem Einsatz den größtmöglichen Ertrag erzielen.", "Gewinne durch Kostensteigerung maximieren.", "Ressourcen gleichmäßig auf alle Bereiche verteilen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "k-003",
              "frage": "Was beschreibt das Maximalprinzip?",
              "antwort": "Mit einem gegebenen Einsatz den größtmöglichen Nutzen (Ertrag) erzielen.",
              "stichworte": ["Maximalprinzip", "Wirtschaftlichkeit"],
              "falschantworten": ["Den Einsatz für ein bestimmtes Ziel minimieren.", "Sowohl Einsatz als auch Ertrag gleichzeitig erhöhen.", "Kosten und Erträge in der GuV ausgleichen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "k-004",
              "frage": "Was ist der Unterschied zwischen Kosten und Aufwendungen?",
              "antwort": "Kosten haben direkten Bezug zum Betriebszweck (z. B. Rohstoffe, Löhne). Aufwendungen umfassen alle verbrauchten Güter und Dienstleistungen, auch betriebsfremde (z. B. Spenden).",
              "stichworte": ["Kosten", "Aufwendungen", "Betriebszweck"],
              "falschantworten": ["Kosten und Aufwendungen sind Synonyme.", "Aufwendungen sind immer kleiner als Kosten.", "Kosten entstehen nur bei der Produktion, Aufwendungen nur im Vertrieb."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "k-005",
              "frage": "Wie berechnet sich das Unternehmensergebnis (Gewinn-und-Verlustrechnung)?",
              "antwort": "Erträge − Aufwendungen = Unternehmensergebnis (> 0 Gewinn, < 0 Verlust).",
              "stichworte": ["GuV", "Gewinn", "Verlust", "Erträge", "Aufwendungen"],
              "falschantworten": ["Umsatz − Selbstkosten = Unternehmensergebnis.", "Einnahmen − Ausgaben − Steuern = Unternehmensergebnis.", "Bruttolohn − Abzüge = Unternehmensergebnis."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "thema-vertragsrecht",
          "name": "Vertragsrecht & Geschäftsfähigkeit",
          "karten": [
            {
              "id": "vr-001",
              "frage": "Was versteht man unter Geschäftsfähigkeit?",
              "antwort": "Die Fähigkeit, Kaufverträge und andere Rechtsgeschäfte selbstständig und wirksam abschließen zu können.",
              "stichworte": ["Geschäftsfähigkeit", "BGB", "Rechtsgeschäft"],
              "falschantworten": ["Die Fähigkeit, ein Unternehmen zu gründen.", "Das Recht, einen Reisepass zu beantragen.", "Die Pflicht, Steuern zu zahlen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "vr-002",
              "frage": "Welche drei Stufen der Geschäftsfähigkeit unterscheidet das BGB?",
              "antwort": "1. Geschäftsunfähig (0–6 Jahre), 2. Beschränkt geschäftsfähig (7–17 Jahre), 3. Voll geschäftsfähig (ab 18 Jahre).",
              "stichworte": ["Geschäftsfähigkeit", "BGB", "Minderjährige"],
              "falschantworten": ["Teilweise (ab 16), eingeschränkt (ab 18), vollständig (ab 21).", "Nicht geschäftsfähig (0–12), bedingt (13–17), voll (ab 18).", "Geschäftsunfähig (0–3), begrenzt (4–14), voll (ab 15)."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vr-003",
              "frage": "Wann ist eine Person beschränkt geschäftsfähig und was bedeutet das?",
              "antwort": "Personen von 7 bis 17 Jahren. Sie können nur Verträge abschließen, die ihnen ausschließlich rechtliche Vorteile bringen, oder solche, bei denen die gesetzlichen Vertreter (Eltern) zustimmen.",
              "stichworte": ["beschränkte Geschäftsfähigkeit", "Minderjährige", "gesetzlicher Vertreter"],
              "falschantworten": ["Sie können alle Verträge frei abschließen, sofern die Eltern später zustimmen.", "Sie dürfen keine Verträge abschließen, nur Schenkungen annehmen.", "Sie sind wie Erwachsene voll geschäftsfähig, aber nur für Alltagsgeschäfte."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "vr-004",
              "frage": "Was ist Rechtsfähigkeit und ab wann besitzt ein Mensch sie?",
              "antwort": "Rechtsfähigkeit ist die Fähigkeit, Träger von Rechten und Pflichten zu sein. Sie beginnt mit der Geburt und endet mit dem Tod.",
              "stichworte": ["Rechtsfähigkeit", "natürliche Person", "Geburt"],
              "falschantworten": ["Rechtsfähigkeit beginnt mit Vollendung des 18. Lebensjahres.", "Rechtsfähigkeit ist identisch mit Geschäftsfähigkeit.", "Nur juristische Personen besitzen Rechtsfähigkeit."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vr-005",
              "frage": "Wann beginnt die Rechtsfähigkeit einer juristischen Person (z. B. GmbH)?",
              "antwort": "Mit der Eintragung ins Handelsregister.",
              "stichworte": ["juristische Person", "Handelsregister", "Rechtsfähigkeit", "GmbH"],
              "falschantworten": ["Mit dem Abschluss des Gesellschaftsvertrags.", "Sobald der erste Gewinn erzielt wird.", "Nach Erteilung der Gewerbeerlaubnis durch das Finanzamt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vr-006",
              "frage": "Was ist ein Fernabsatzgeschäft und welche besonderen Rechte hat der Käufer?",
              "antwort": "Ein Fernabsatzgeschäft ist ein Vertrag zwischen Unternehmer und Verbraucher, der ausschließlich über Fernkommunikationsmittel abgeschlossen wird (z. B. Online-Shop, Telefon). Der Verbraucher hat ein gesetzliches Widerrufsrecht von 14 Tagen ohne Angabe von Gründen. Die Widerrufsfrist beginnt erst, wenn eine ordnungsgemäße Widerrufsbelehrung erteilt wurde.",
              "stichworte": ["Fernabsatzgeschäft", "Widerrufsrecht", "14 Tage", "Online-Kauf", "Fernkommunikation"],
              "falschantworten": ["Beim Fernabsatz gilt kein Widerrufsrecht, da der Käufer die Ware gesehen hat.", "Das Widerrufsrecht beträgt beim Fernabsatz 7 Tage.", "Das Widerrufsrecht gilt auch für individuell angefertigte Waren."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vr-007",
              "frage": "Was sind Besitz und Eigentum und was ist der Unterschied?",
              "antwort": "Eigentum: rechtliche Sachherrschaft über eine Sache (gesetzlich geschützt, § 903 BGB). Eigentümer darf die Sache nutzen, veräußern, belasten. Besitz: tatsächliche Sachherrschaft (§ 854 BGB). Besitzer hat die Sache in seiner Gewalt, muss aber nicht Eigentümer sein. Beispiel: Mieter ist Besitzer, Vermieter bleibt Eigentümer.",
              "stichworte": ["Eigentum", "Besitz", "Sachherrschaft", "§ 903 BGB", "§ 854 BGB"],
              "falschantworten": ["Besitz und Eigentum sind rechtlich identisch.", "Wer eine Sache besitzt, ist automatisch ihr Eigentümer.", "Eigentum ist die tatsächliche, Besitz die rechtliche Sachherrschaft."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vr-008",
              "frage": "Was schützt das Urheberrecht und wie lange gilt es?",
              "antwort": "Das Urheberrecht schützt geistige und künstlerische Schöpfungen (Werke): Bücher, Musik, Software, Bilder, Filme. Es entsteht automatisch mit der Schöpfung, keine Anmeldung nötig. Schutzfrist: 70 Jahre nach dem Tod des Urhebers. Erlaubt ohne Genehmigung: Privatkopie für den persönlichen Gebrauch (§ 53 UrhG).",
              "stichworte": ["Urheberrecht", "70 Jahre", "Schöpfung", "Privatkopie", "§ 53 UrhG"],
              "falschantworten": ["Das Urheberrecht muss beim Patentamt angemeldet werden.", "Das Urheberrecht gilt 20 Jahre ab Veröffentlichung des Werkes.", "Alle Werke im Internet dürfen frei kopiert und genutzt werden."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "thema-garantie",
          "name": "Garantie & Gewährleistung",
          "karten": [
            {
              "id": "ga-001",
              "frage": "Was ist der grundlegende Unterschied zwischen Garantie und Gewährleistung?",
              "antwort": "Gewährleistung ist ein gesetzlich vorgeschriebenes Recht des Käufers gegenüber dem Händler. Garantie ist eine freiwillige Zusicherung des Herstellers oder Verkäufers, die über die Gewährleistung hinausgehen kann.",
              "stichworte": ["Garantie", "Gewährleistung", "gesetzlich", "freiwillig"],
              "falschantworten": ["Garantie ist gesetzlich vorgeschrieben, Gewährleistung ist freiwillig.", "Beide sind identisch – es handelt sich nur um unterschiedliche Begriffe.", "Gewährleistung gilt nur beim Privatkauf, Garantie nur im B2B-Bereich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ga-002",
              "frage": "Wie lange gilt die gesetzliche Gewährleistung bei Neuware?",
              "antwort": "2 Jahre ab Kaufdatum.",
              "stichworte": ["Gewährleistung", "Neuware", "2 Jahre"],
              "falschantworten": ["1 Jahr ab Kaufdatum.", "6 Monate ab Kaufdatum.", "3 Jahre ab Kaufdatum."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "ga-003",
              "frage": "Wie lange gilt die gesetzliche Gewährleistung bei Gebrauchtware (Privatkauf)?",
              "antwort": "Beim Privatkauf darf die Gewährleistung auf 1 Jahr verkürzt oder sogar ganz ausgeschlossen werden.",
              "stichworte": ["Gewährleistung", "Gebrauchtware", "Privatkauf"],
              "falschantworten": ["2 Jahre, genauso wie bei Neuware.", "6 Monate, ohne Möglichkeit des Ausschlusses.", "3 Jahre, da Gebrauchtware mehr Risiken birgt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ga-004",
              "frage": "Was versteht man unter der Beweislastumkehr bei der Gewährleistung?",
              "antwort": "In den ersten 12 Monaten nach dem Kauf wird vermutet, dass ein Mangel bereits beim Kauf vorhanden war – der Händler muss das Gegenteil beweisen. Nach 12 Monaten muss der Käufer selbst den Nachweis erbringen.",
              "stichworte": ["Beweislast", "Gewährleistung", "12 Monate"],
              "falschantworten": ["Der Käufer muss immer beweisen, dass der Mangel beim Kauf vorhanden war.", "Der Händler muss 2 Jahre lang beweisen, dass kein Mangel vorlag.", "Bei Garantie trägt der Hersteller immer die Beweislast."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "ga-005",
              "frage": "Gilt die Gewährleistung auch bei selbst verschuldeten Mängeln?",
              "antwort": "Nein. Die Gewährleistung deckt nur Sachmängel, die bereits zum Zeitpunkt des Kaufs vorhanden waren – nicht bei selbst verschuldeten Schäden.",
              "stichworte": ["Gewährleistung", "Sachmangel", "Selbstverschulden"],
              "falschantworten": ["Ja, Gewährleistung gilt immer, unabhängig von der Ursache.", "Nur bei Garantie ist Selbstverschulden ausgeschlossen.", "Ja, sofern der Käufer eine Schadensversicherung abgeschlossen hat."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "thema-verzug",
          "name": "Zahlungsverzug & Lieferungsverzug",
          "karten": [
            {
              "id": "vz-001",
              "frage": "Wann liegt Zahlungsverzug vor?",
              "antwort": "Wenn eine fällige Rechnung nicht bezahlt wird, obwohl eine Mahnung des Verkäufers ergangen ist (oder die Zahlung kalendermäßig bestimmt war).",
              "stichworte": ["Zahlungsverzug", "Mahnung", "fällig"],
              "falschantworten": ["Sobald eine Rechnung gestellt wird, aber noch nicht fällig ist.", "Wenn der Käufer die Ware zurücksendet.", "Wenn der Verkäufer keine Rechnung ausstellt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vz-002",
              "frage": "Welche Folgen hat Zahlungsverzug für den Schuldner (Käufer)?",
              "antwort": "Mahngebühren, Verzugszinsen und im schlimmsten Fall Gerichtskosten und Zwangsvollstreckung.",
              "stichworte": ["Zahlungsverzug", "Verzugszinsen", "Mahnung", "Zwangsvollstreckung"],
              "falschantworten": ["Nur eine schriftliche Abmahnung ohne weitere Konsequenzen.", "Der Kaufvertrag wird automatisch aufgelöst.", "Der Verkäufer verliert seinen Anspruch auf Zahlung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vz-003",
              "frage": "Wann kommt eine Lieferfirma in Lieferungsverzug?",
              "antwort": "Wenn ein vorher festgelegter Liefertermin (Fixtermin) überschritten wird.",
              "stichworte": ["Lieferungsverzug", "Liefertermin", "Fixtermin"],
              "falschantworten": ["Sobald die bestellte Ware defekt ist.", "Wenn der Käufer die Lieferung ablehnt.", "Wenn die Ware einen Tag nach dem Kaufdatum noch nicht geliefert ist."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "vz-004",
              "frage": "Welche Rechte hat der Käufer bei Lieferungsverzug ohne Nachfristsetzung (Fixtermin)?",
              "antwort": "Bei einem Fixtermin kann der Käufer sofort vom Vertrag zurücktreten oder Schadensersatz statt Leistung verlangen – ohne eine Nachfrist setzen zu müssen.",
              "stichworte": ["Lieferungsverzug", "Rücktritt", "Schadensersatz", "Fixtermin"],
              "falschantworten": ["Der Käufer muss immer eine Nachfrist setzen, bevor er zurücktreten darf.", "Der Käufer darf nur eine neue Lieferung verlangen, kein Schadensersatz.", "Keinerlei Rechte, da Verzögerungen im Handel üblich sind."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "vz-005",
              "frage": "Was ist Annahmeverzug und welche Folgen hat er für den Gläubiger?",
              "antwort": "Annahmeverzug (Gläubigerverzug) liegt vor, wenn der Gläubiger (Käufer) eine ordnungsgemäß angebotene Leistung nicht annimmt. Folgen: Der Schuldner (Verkäufer) haftet nur noch für Vorsatz und grobe Fahrlässigkeit, kann die Sache auf Kosten des Gläubigers hinterlegen oder versteigern lassen.",
              "stichworte": ["Annahmeverzug", "Gläubigerverzug", "Hinterlegung", "Versteigerung"],
              "falschantworten": ["Annahmeverzug tritt auf, wenn der Schuldner nicht leistet.", "Bei Annahmeverzug hat der Schuldner keine Rechte.", "Annahmeverzug ist identisch mit Zahlungsverzug."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "thema-lohnsteuer",
          "name": "Lohnsteuer & Gehaltsabrechnung",
          "karten": [
            {
              "id": "ls-001",
              "frage": "Was ist der Unterschied zwischen Bruttolohn, Nettolohn und Auszahlungsbetrag?",
              "antwort": "Bruttolohn: Gesamtlohn vor Abzügen. Nettolohn: Lohn nach gesetzlichen Abzügen (Steuern, Sozialversicherung). Auszahlungsbetrag: Nettolohn minus sonstige Abzüge (z. B. Sparbeiträge, Vorschüsse).",
              "stichworte": ["Bruttolohn", "Nettolohn", "Auszahlungsbetrag", "Abzüge"],
              "falschantworten": ["Bruttolohn und Nettolohn sind identisch; Auszahlungsbetrag ist das Gleiche wie Nettolohn.", "Nettolohn ist der Lohn vor Steuern, Bruttolohn der Lohn nach Steuern.", "Auszahlungsbetrag ist immer höher als der Nettolohn."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ls-002",
              "frage": "Welche gesetzlichen Abzüge werden vom Bruttolohn abgezogen?",
              "antwort": "Lohnsteuer, Kirchensteuer (8–9 % der Lohnsteuer), Solidaritätszuschlag (seit 2021 meist entfallen) und Sozialversicherungsbeiträge (Kranken-, Renten-, Arbeitslosen-, Pflegeversicherung).",
              "stichworte": ["Lohnsteuer", "Kirchensteuer", "Sozialversicherung", "Abzüge"],
              "falschantworten": ["Nur Lohnsteuer und Rentenversicherung werden gesetzlich abgezogen.", "Gewerbesteuer, Erbschaftsteuer und Umsatzsteuer.", "Nur Lohnsteuer und Krankenversicherung sind gesetzlich vorgeschrieben."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ls-003",
              "frage": "Wie hoch sind die Gesamtsätze der Sozialversicherungsbeiträge (AN + AG je zur Hälfte)?",
              "antwort": "Krankenversicherung: 14,6 % + Zusatzbeitrag (z. B. 1,6 %), Rentenversicherung: 18,6 %, Arbeitslosenversicherung: 2,6 %, Pflegeversicherung: 3,4 % – jeweils hälftig von AN und AG getragen.",
              "stichworte": ["Sozialversicherung", "Krankenversicherung", "Rentenversicherung", "Pflegeversicherung", "Beitragssatz"],
              "falschantworten": ["Krankenversicherung 20 %, Rentenversicherung 5 %, Arbeitslosigkeit 3 %.", "Alle Sozialversicherungsbeiträge betragen zusammen genau 10 % des Bruttolohns.", "Der Arbeitnehmer trägt den gesamten Sozialversicherungsbeitrag allein."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "ls-004",
              "frage": "Welche Berechnungsformel führt vom Bruttolohn zum Auszahlungsbetrag?",
              "antwort": "Bruttolohn − gesetzliche Abzüge (Steuern + Sozialversicherung) = Nettolohn − sonstige Abzüge (z. B. Sparbeitrag, Vorschuss) = Auszahlungsbetrag.",
              "stichworte": ["Berechnung", "Auszahlungsbetrag", "Nettolohn", "Bruttolohn"],
              "falschantworten": ["Bruttolohn + Sozialversicherung − Steuern = Auszahlungsbetrag.", "Nettolohn = Bruttolohn − Umsatzsteuer.", "Auszahlungsbetrag = Bruttolohn × 0,5."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ls-005",
              "frage": "Nenne drei Beispiele für sonstige (nicht gesetzliche) Abzüge vom Nettolohn.",
              "antwort": "Vermögenswirksames Sparen, Mietzahlungen für Betriebswohnung, Lohnvorschüsse / Lohnpfändungen.",
              "stichworte": ["sonstige Abzüge", "vermögenswirksame Leistungen", "Lohnpfändung"],
              "falschantworten": ["Lohnsteuer, Kirchensteuer, Sozialversicherung.", "Umsatzsteuer, Körperschaftsteuer, Grundsteuer.", "Krankenversicherung, Rentenversicherung, Pflegeversicherung."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "ls-006",
              "frage": "Was ist der Unterschied zwischen Einkommensteuer und Lohnsteuer?",
              "antwort": "Lohnsteuer ist eine Erhebungsform der Einkommensteuer für Arbeitnehmer. Sie wird direkt vom Arbeitgeber einbehalten und ans Finanzamt abgeführt. Die Einkommensteuer wird über die jährliche Einkommensteuererklärung ermittelt – bei Arbeitnehmern ergibt sich dabei eine Erstattung oder Nachzahlung.",
              "stichworte": ["Einkommensteuer", "Lohnsteuer", "Arbeitgeber", "Finanzamt", "Steuererklärung"],
              "falschantworten": ["Lohnsteuer und Einkommensteuer sind zwei völlig verschiedene Steuerarten.", "Die Lohnsteuer wird nur von Selbstständigen gezahlt.", "Der Arbeitnehmer überweist die Lohnsteuer selbst ans Finanzamt."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "thema-marktwirtschaft",
          "name": "Wirtschaftssysteme & Soziale Marktwirtschaft",
          "karten": [
            {
              "id": "mw-001",
              "frage": "Was sind die Hauptmerkmale der freien Marktwirtschaft (nach Adam Smith)?",
              "antwort": "Angebot und Nachfrage bestimmen den Markt, Staat hält sich heraus, Vertrags-/Konsums-/Gewerbefreiheit, Ziel: Gewinnmaximierung, Innovation, Wettbewerb.",
              "stichworte": ["freie Marktwirtschaft", "Adam Smith", "Angebot", "Nachfrage"],
              "falschantworten": ["Staat plant alle wirtschaftlichen Abläufe zentral.", "Güterverteilung erfolgt nach Bedürftigkeit, kein Wettbewerb.", "Preise werden staatlich festgelegt, Unternehmen gehören dem Staat."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mw-002",
              "frage": "Welche Probleme entstehen in einer freien Marktwirtschaft?",
              "antwort": "Monopole, Ausbeutung, soziale Ungleichheit, keine Absicherung bei Krankheit/Alter/Arbeitslosigkeit, Kinderarbeit, Umweltverschmutzung.",
              "stichworte": ["freie Marktwirtschaft", "Probleme", "Monopol", "soziale Ungleichheit"],
              "falschantworten": ["Mangelwirtschaft, Bürokratie, fehlende Innovation.", "Zu viel staatliche Kontrolle und hohe Steuern.", "Gleichheit wird erzwungen, kein Anreiz zu arbeiten."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mw-003",
              "frage": "Was sind die Hauptmerkmale der Planwirtschaft (nach Karl Marx)?",
              "antwort": "Staat plant und kontrolliert alle wirtschaftlichen Abläufe, Güterverteilung und Produktion werden zentral gelenkt, theoretische Gleichheit, keine Arbeitslosigkeit.",
              "stichworte": ["Planwirtschaft", "Karl Marx", "Zentralverwaltung"],
              "falschantworten": ["Markt regelt alles, Staat greift nur minimal ein.", "Unternehmen entscheiden frei über Preise und Produktion.", "Wettbewerb und Gewinnstreben stehen im Mittelpunkt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mw-004",
              "frage": "Was ist die soziale Marktwirtschaft und wer prägte sie in Deutschland?",
              "antwort": "Die soziale Marktwirtschaft vereint wirtschaftliche Freiheit (Markt) mit sozialem Ausgleich (staatliche Eingriffe). Sie wurde nach dem Zweiten Weltkrieg von Ludwig Erhard geprägt. Ziel: Wohlstand für alle und soziale Sicherheit.",
              "stichworte": ["soziale Marktwirtschaft", "Ludwig Erhard", "Wohlstand"],
              "falschantworten": ["Eine reine Planwirtschaft mit sozialen Elementen, eingeführt von Karl Marx.", "Eine freie Marktwirtschaft ohne staatliche Eingriffe, geprägt von Adam Smith.", "Ein System, in dem nur Gewerkschaften die Wirtschaft steuern."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "mw-005",
              "frage": "Nenne fünf Bereiche staatlicher Eingriffe in der sozialen Marktwirtschaft (mit Beispiel).",
              "antwort": "Sozialpolitik (Sozialversicherungen), Wettbewerbspolitik (Kartellgesetz), Einkommenspolitik (Steuerprogression), Strukturpolitik (Subventionen), Konjunkturpolitik (staatliche Investitionen).",
              "stichworte": ["staatliche Eingriffe", "soziale Marktwirtschaft", "Kartellgesetz", "Subventionen"],
              "falschantworten": ["Preiskontrollen, Planvorgaben, Verstaatlichung, Quotenregelungen, Exportverbote.", "Deregulierung, Privatisierung, Steuersenkung, Subventionsabbau, Währungsreform.", "Zinssteuerung, Inflationskontrolle, Währungsabwertung, Importzölle, Exportförderung."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "mw-006",
              "frage": "Welche Grundgesetzartikel sind für die soziale Marktwirtschaft besonders relevant?",
              "antwort": "Art. 14 GG: Eigentum verpflichtet – soll dem Gemeinwohl dienen. Art. 20 GG: Soziales und demokratisches Prinzip des Staates.",
              "stichworte": ["Grundgesetz", "Eigentumsrecht", "Sozialstaatsprinzip", "Art. 14", "Art. 20"],
              "falschantworten": ["Art. 1 GG (Menschenwürde) und Art. 5 GG (Meinungsfreiheit).", "Art. 3 GG (Gleichheit) und Art. 8 GG (Versammlungsfreiheit).", "Art. 12 GG (Berufsfreiheit) und Art. 16 GG (Staatsangehörigkeit)."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "thema-unternehmensformen",
          "name": "Unternehmensformen & Rechtsformen",
          "karten": [
            {
              "id": "uf-001",
              "frage": "Welche vier Hauptgruppen von Unternehmensformen gibt es?",
              "antwort": "Einzelunternehmen, Personengesellschaften (z. B. GbR, OHG, KG), Kapitalgesellschaften (z. B. GmbH, AG, UG) und Genossenschaften (eG).",
              "stichworte": ["Unternehmensformen", "Rechtsformen", "Einzelunternehmen", "Kapitalgesellschaft"],
              "falschantworten": ["GmbH, AG, KG und UG – das sind alle Unternehmensformen.", "Privatunternehmen, Staatsunternehmen, Sozialunternehmen und Genossenschaften.", "Kleinbetriebe, Mittelbetriebe, Großbetriebe und Konzerne."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "uf-002",
              "frage": "Welche Merkmale hat ein Einzelunternehmen?",
              "antwort": "Häufigste Form in Deutschland. Inhaber haftet unbeschränkt mit Geschäfts- und Privatvermögen. Vorteile: alleiniger Gewinn, schnelle Entscheidungen. Nachteile: unbeschränkte Haftung, Kapitalbeschaffung schwierig.",
              "stichworte": ["Einzelunternehmen", "unbeschränkte Haftung", "alleiniger Gewinn"],
              "falschantworten": ["Haftung ist auf die Kapitaleinlage beschränkt, Gründung mit Mindestkapital 25.000 €.", "Mindestens zwei Gesellschafter erforderlich, Gewinn wird geteilt.", "Juristische Person, Eintragung ins Handelsregister zwingend erforderlich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "uf-003",
              "frage": "Was sind die Merkmale der GbR (Gesellschaft bürgerlichen Rechts)?",
              "antwort": "Einfachste Personengesellschaft. Mind. 2 Gesellschafter. Keine Eintragung ins Handelsregister nötig. Alle Gesellschafter haften unbeschränkt. Einfacher Gesellschaftsvertrag genügt.",
              "stichworte": ["GbR", "Personengesellschaft", "Handelsregister", "Haftung"],
              "falschantworten": ["GbR: Haftung auf Geschäftsvermögen begrenzt, Mindestkapital 1 €.", "GbR: Nur ein Gesellschafter, schnelle Gründung ohne Vertrag.", "GbR: Pflicht zur Eintragung ins Handelsregister und notariellem Vertrag."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "uf-004",
              "frage": "Wie unterscheiden sich OHG und KG voneinander?",
              "antwort": "OHG: Alle Gesellschafter haften unbeschränkt. KG: Komplementär haftet unbeschränkt, Kommanditist nur mit Kapitaleinlage (beschränkte Haftung). Geschäftsführung bei KG nur durch den Komplementär.",
              "stichworte": ["OHG", "KG", "Komplementär", "Kommanditist", "Haftung"],
              "falschantworten": ["OHG: Alle haften beschränkt. KG: Alle haften unbeschränkt.", "OHG und KG sind identisch – es gibt keinen Unterschied.", "KG: Beide Gesellschafterarten haften unbeschränkt, aber der Kommanditist führt die Geschäfte."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "uf-005",
              "frage": "Was sind die Merkmale einer GmbH?",
              "antwort": "Juristische Person. Haftung beschränkt auf Gesellschaftsvermögen (kein Privatvermögen). Mindestkapital 25.000 €. Geschäftsführung durch Geschäftsführer. Notarielle Beurkundung des Gesellschaftsvertrags erforderlich.",
              "stichworte": ["GmbH", "beschränkte Haftung", "Mindestkapital", "juristische Person"],
              "falschantworten": ["GmbH: Gründung ab 1 €, keine notarielle Beurkundung nötig.", "GmbH: Alle Gesellschafter haften unbeschränkt mit Privatvermögen.", "GmbH: Mindestkapital 50.000 €, Leitung durch Vorstand."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "uf-006",
              "frage": "Wie unterscheiden sich GmbH, UG und AG bei Mindestkapital und Gewinnverteilung?",
              "antwort": "GmbH: 25.000 € Mindestkapital, Gewinn nach Anteilen. UG (Mini-GmbH): ab 1 €, Pflicht zur Rücklagenbildung. AG: 50.000 €, Gewinnverteilung als Dividende an Aktionäre.",
              "stichworte": ["GmbH", "UG", "AG", "Mindestkapital", "Dividende"],
              "falschantworten": ["GmbH: 50.000 €, AG: 25.000 €, UG: 10.000 € – alle zahlen Dividende.", "UG hat kein Mindestkapital und muss keine Rücklagen bilden.", "AG und GmbH sind identisch, nur der Name unterscheidet sich."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "uf-007",
              "frage": "Was ist eine GmbH & Co. KG und was ist ihr Vorteil?",
              "antwort": "Eine Kombination aus KG und GmbH: Die GmbH ist Komplementär (Vollhafter) – haftet aber nur mit ihrem Gesellschaftsvermögen, nicht privat. Vorteil: KG-Struktur mit beschränkter Haftung.",
              "stichworte": ["GmbH & Co. KG", "Komplementär", "beschränkte Haftung"],
              "falschantworten": ["GmbH & Co. KG: Alle Gesellschafter haften unbeschränkt wie bei der OHG.", "GmbH & Co. KG: Die AG übernimmt die Rolle des Komplementärs.", "GmbH & Co. KG: Kommanditisten haften unbeschränkt, die GmbH haftet gar nicht."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "thema-finanzierung",
          "name": "Finanzierung",
          "karten": [
            {
              "id": "fi-001",
              "frage": "Was versteht man unter Finanzierung?",
              "antwort": "Finanzierung umfasst alle Maßnahmen zur Beschaffung von Kapital (Geld, Waren, Wertpapiere), das ein Unternehmen zur Durchführung seiner Geschäftstätigkeit benötigt.",
              "stichworte": ["Finanzierung", "Kapital", "Kapitalbeschaffung"],
              "falschantworten": ["Finanzierung bezeichnet den Verkauf von Unternehmensanteilen an der Börse.", "Finanzierung ist die Verwaltung und Auszahlung von Gehältern.", "Finanzierung umfasst nur die Aufnahme von Bankdarlehen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "fi-002",
              "frage": "Was ist der Unterschied zwischen Eigen- und Fremdfinanzierung?",
              "antwort": "Eigenfinanzierung: Kapital kommt von Eigentümern (z. B. Einlagen, Gewinne). Fremdfinanzierung: Kapital wird von Gläubigern geliehen (z. B. Bankkredit, Anleihe) und muss zurückgezahlt werden.",
              "stichworte": ["Eigenfinanzierung", "Fremdfinanzierung", "Gläubiger", "Eigenkapital"],
              "falschantworten": ["Eigenfinanzierung ist immer teurer als Fremdfinanzierung.", "Fremdfinanzierung kommt von den Eigentümern, Eigenfinanzierung von Banken.", "Beide Begriffe meinen dasselbe: die Beschaffung von Kapital."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "fi-003",
              "frage": "Was ist der Unterschied zwischen Innen- und Außenfinanzierung?",
              "antwort": "Innenfinanzierung: Kapital entsteht durch den Betrieb selbst (z. B. einbehaltene Gewinne, Abschreibungen). Außenfinanzierung: Kapital kommt von außen (z. B. Bankkredite, neue Gesellschaftereinlagen).",
              "stichworte": ["Innenfinanzierung", "Außenfinanzierung", "Selbstfinanzierung"],
              "falschantworten": ["Innenfinanzierung = Bankkredit, Außenfinanzierung = Eigenkapital.", "Innenfinanzierung ist immer Fremdfinanzierung.", "Außenfinanzierung kommt ausschließlich vom Staat."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "fi-004",
              "frage": "Was sind Sicherheiten bei der Kreditvergabe? Nenne drei Beispiele.",
              "antwort": "Sicherheiten schützen den Gläubiger bei Zahlungsunfähigkeit des Schuldners. Beispiele: Grundschuld/Hypothek (Immobilien), Bürgschaft (dritte Person haftet), Pfandrecht (bewegliche Sachen als Sicherheit).",
              "stichworte": ["Sicherheiten", "Kredit", "Bürgschaft", "Hypothek", "Pfandrecht"],
              "falschantworten": ["Sicherheiten sind staatliche Garantien für Unternehmen.", "Leasing, Factoring und Ratenkredit sind Sicherheiten.", "Sicherheiten sind nur für private Kredite relevant, nicht für Unternehmen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "fi-005",
              "frage": "Was ist Leasing und wie unterscheidet es sich von einem Kauf?",
              "antwort": "Beim Leasing mietet ein Unternehmen ein Wirtschaftsgut (z. B. Fahrzeug, Maschine) für eine bestimmte Zeit gegen Leasingrate. Das Eigentum verbleibt beim Leasinggeber. Vorteil: kein großer Kapitaleinsatz sofort nötig, Liquidität bleibt erhalten.",
              "stichworte": ["Leasing", "Leasinggeber", "Leasingnehmer", "Liquidität"],
              "falschantworten": ["Beim Leasing erwirbt der Nutzer sofort das Eigentum am Gegenstand.", "Leasing ist identisch mit einem Ratenkauf – Eigentum geht sofort über.", "Leasing ist eine Form der Eigenfinanzierung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "fi-006",
              "frage": "Was ist Factoring?",
              "antwort": "Beim Factoring verkauft ein Unternehmen seine Forderungen (offene Rechnungen) an ein Factoringunternehmen. Das Unternehmen erhält sofort Geld (minus Gebühr), das Factoringunternehmen übernimmt das Ausfallrisiko.",
              "stichworte": ["Factoring", "Forderungen", "Liquidität", "Ausfallrisiko"],
              "falschantworten": ["Factoring bedeutet, Schulden an eine Bank abzutreten.", "Beim Factoring kauft ein Unternehmen Rohstoffe auf Kredit.", "Factoring ist eine staatliche Fördermaßnahme für Existenzgründer."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "fi-007",
              "frage": "Was ist der Unterschied zwischen Kontokorrentkredit und Darlehen?",
              "antwort": "Kontokorrentkredit: flexibel nutzbarer Kreditrahmen auf dem Girokonto (kurzfristig, Zinsen nur auf genutzten Betrag). Darlehen: feste Summe, Rückzahlung in Raten (langfristig, Zinsen auf gesamte Restschuld).",
              "stichworte": ["Kontokorrentkredit", "Darlehen", "Kredit", "Zinsen"],
              "falschantworten": ["Beide sind identisch – nur der Name unterscheidet sich.", "Ein Darlehen ist immer zinsfrei, ein Kontokorrentkredit nicht.", "Kontokorrentkredit ist langfristig, Darlehen kurzfristig."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "thema-kalkulation",
          "name": "Kalkulation & Kostenrechnung",
          "karten": [
            {
              "id": "ka-001",
              "frage": "Was ist der Unterschied zwischen Einzel- und Gemeinkosten?",
              "antwort": "Einzelkosten lassen sich einem einzelnen Produkt direkt zuordnen (z. B. Fertigungsmaterial, Fertigungslöhne). Gemeinkosten können keinem einzelnen Produkt direkt zugeordnet werden (z. B. Miete, Strom, Verwaltungskosten).",
              "stichworte": ["Einzelkosten", "Gemeinkosten", "Kostenrechnung"],
              "falschantworten": ["Einzelkosten entstehen nur in der Verwaltung, Gemeinkosten nur in der Produktion.", "Einzelkosten sind immer höher als Gemeinkosten.", "Gemeinkosten sind gesetzlich vorgeschrieben, Einzelkosten nicht."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ka-002",
              "frage": "Nenne die Schritte des Kalkulationsschemas zur Ermittlung der Selbstkosten.",
              "antwort": "① Fertigungsmaterial + ② Materialgemeinkosten = ③ Materialkosten + ④ Fertigungslöhne + ⑤ Fertigungsgemeinkosten = ⑥ Fertigungskosten → ⑦ Herstellungskosten (③+⑥) + ⑧ Verwaltungsgemeinkosten + ⑨ Vertriebsgemeinkosten = ⑩ Selbstkosten.",
              "stichworte": ["Kalkulationsschema", "Selbstkosten", "Herstellungskosten", "Zuschlagskalkulation"],
              "falschantworten": ["Umsatz − Gewinn = Selbstkosten.", "Fertigungsmaterial + Löhne + Miete = Selbstkosten.", "Selbstkosten = Verkaufspreis × Mehrwertsteuersatz."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "ka-003",
              "frage": "Wie ergibt sich der Bruttoverkaufspreis aus den Selbstkosten?",
              "antwort": "Selbstkosten + Gewinnzuschlag = Nettoverkaufspreis + Umsatzsteuer (19 %) = Bruttoverkaufspreis.",
              "stichworte": ["Verkaufspreis", "Bruttoverkaufspreis", "Umsatzsteuer", "Gewinnzuschlag"],
              "falschantworten": ["Selbstkosten × 1,19 = Bruttoverkaufspreis (ohne Gewinnzuschlag).", "Bruttoverkaufspreis = Selbstkosten − Rabatt + MwSt.", "Nettoverkaufspreis = Selbstkosten + MwSt., dann + Gewinn = Brutto."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "ka-004",
              "frage": "Was ist eine Abschreibung und warum ist sie für die Kalkulation wichtig?",
              "antwort": "Eine Abschreibung erfasst den jährlichen Wertverlust einer Anlage über ihre Nutzungsdauer. Beispiel: Anschaffung 100.000 €, Nutzungsdauer 10 Jahre → 10.000 € Abschreibung/Jahr. Abschreibungen sind Aufwendungen und senken den Gewinn.",
              "stichworte": ["Abschreibung", "Wertverlust", "Nutzungsdauer", "Aufwendungen"],
              "falschantworten": ["Abschreibungen erhöhen den Wert einer Anlage in der Bilanz.", "Abschreibungen sind nur für Umlaufvermögen (z. B. Waren) relevant.", "Abschreibungen werden nur beim Verkauf einer Anlage verbucht."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "ka-005",
              "frage": "Was ist der Betriebsabrechnungsbogen (BAB) und wozu dient er?",
              "antwort": "Der BAB ist eine Tabelle, die Gemeinkosten mithilfe von Verteilungsschlüsseln auf die einzelnen Kostenstellen (Material, Fertigung, Verwaltung, Vertrieb) verteilt. Er liefert die Zuschlagssätze für die Kalkulation.",
              "stichworte": ["BAB", "Betriebsabrechnungsbogen", "Kostenstellen", "Zuschlagssatz"],
              "falschantworten": ["Der BAB ist eine gesetzlich vorgeschriebene Steuererklärung für Betriebe.", "Der BAB verteilt Einzelkosten auf einzelne Produkte.", "Der BAB ersetzt die Gewinn-und-Verlustrechnung."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "thema-versicherung",
          "name": "Versicherungen & Sozialstaat",
          "karten": [
            {
              "id": "vs-001",
              "frage": "Was sind die fünf Säulen der gesetzlichen Sozialversicherung in Deutschland?",
              "antwort": "1. Krankenversicherung (GKV), 2. Rentenversicherung (GRV), 3. Arbeitslosenversicherung (BA), 4. Pflegeversicherung (GPV), 5. Unfallversicherung (DGUV/BG). Alle außer der Unfallversicherung werden je hälftig von AN und AG bezahlt.",
              "stichworte": ["Sozialversicherung", "Krankenversicherung", "Rentenversicherung", "Pflegeversicherung", "Unfallversicherung"],
              "falschantworten": ["Kranken-, Renten-, Lebens-, Auto- und Haftpflichtversicherung.", "Kranken-, Renten-, Arbeitslosen-, Unfall- und Kfz-Versicherung.", "Es gibt drei Säulen: Kranken-, Renten- und Arbeitslosenversicherung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vs-002",
              "frage": "Was ist der Unterschied zwischen privater Haftpflicht- und Kfz-Haftpflichtversicherung?",
              "antwort": "Private Haftpflichtversicherung: deckt Schäden ab, die man Dritten im Alltag zufügt (freiwillig, aber sehr empfohlen). Kfz-Haftpflichtversicherung: gesetzlich vorgeschrieben für alle Kraftfahrzeuge – deckt Schäden Dritter bei Unfällen. Eigene Fahrzeugschäden deckt sie nicht.",
              "stichworte": ["Haftpflichtversicherung", "Kfz-Haftpflicht", "gesetzliche Pflicht", "Drittschäden"],
              "falschantworten": ["Private Haftpflicht ist gesetzlich vorgeschrieben, Kfz-Haftpflicht freiwillig.", "Kfz-Haftpflicht deckt auch eigene Fahrzeugschäden ab.", "Beide Versicherungen sind identisch – nur die versicherte Sache unterscheidet sich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vs-003",
              "frage": "Was versteht man unter Vollkaskoversicherung und was deckt sie ab?",
              "antwort": "Vollkasko deckt alle Schäden am eigenen Fahrzeug ab: eigenverschuldete Unfälle, Vandalismus, Wildunfälle, Elementarschäden, Glasbruch. Außerdem enthält sie den Umfang der Teilkasko. Vollkasko ist freiwillig, aber bei Fahrzeugleasing/Kreditfinanzierung oft vorgeschrieben.",
              "stichworte": ["Vollkasko", "Teilkasko", "Eigenfahrzeugschäden", "Vandalismus"],
              "falschantworten": ["Vollkasko deckt nur Schäden durch Dritte ab.", "Vollkasko ist gesetzlich vorgeschrieben für alle Fahrzeuge.", "Vollkasko und Teilkasko sind identisch."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vs-004",
              "frage": "Was ist die Aufgabe des Sozialstaates und welche Grundsätze gelten?",
              "antwort": "Der Sozialstaat (Art. 20 GG) sichert Bürger in Notlagen ab (Krankheit, Alter, Arbeitslosigkeit, Pflegebedürftigkeit). Grundsätze: Solidarität (Starke helfen Schwachen), Subsidiarität (Eigenverantwortung vor staatlicher Hilfe), Äquivalenz (Leistung steht in Beziehung zum Beitrag).",
              "stichworte": ["Sozialstaat", "Art. 20 GG", "Solidarität", "Subsidiarität", "Äquivalenz"],
              "falschantworten": ["Der Sozialstaat verwaltet nur Steuern und hat keine Schutzfunktion.", "Subsidiarität bedeutet: Der Staat hilft zuerst, bevor die Eigenverantwortung greift.", "Äquivalenz bedeutet, dass alle Bürger gleich hohe Leistungen erhalten."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "vs-005",
              "frage": "Was ist der Unterschied zwischen gesetzlicher und privater Krankenversicherung (GKV vs. PKV)?",
              "antwort": "GKV (gesetzliche Krankenversicherung): Pflichtversicherung für AN bis zur Versicherungspflichtgrenze (~69.300 €/Jahr). Beitrag: einkommensabhängig (~14,6 % + Zusatzbeitrag), hälftig AG/AN. Familienversicherung beitragsfrei. PKV (private Krankenversicherung): für Beamte, Selbstständige, Gutverdiener. Beitrag: risikobezogen (Alter, Gesundheitszustand). Bessere Leistungen möglich, aber kein Familienversicherungsschutz.",
              "antwort_mc": "GKV: Pflicht, einkommensabhängig, Familienversicherung gratis. PKV: freiwillig, risikobezogen, kein Familienschutz.",
              "stichworte": ["GKV", "PKV", "Krankenversicherung", "Versicherungspflichtgrenze", "Familienversicherung"],
              "falschantworten": ["In der PKV ist Familienversicherung beitragsfrei möglich.", "GKV-Beiträge richten sich nach dem Alter des Versicherten.", "Alle Arbeitnehmer können frei zwischen GKV und PKV wählen."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "iban",
      "name": "IBAN",
      "themen": [
        {
          "id": "iban-licht",
          "name": "Lichttechnik & Beleuchtungsplanung",
          "karten": [
            {
              "id": "iban-001",
              "frage": "Nenne die fünf wichtigsten lichttechnischen Größen mit Formelzeichen und Einheit.",
              "antwort": "1. Lichtstrom Φ [Lumen, lm] – gesamte abgegebene Lichtleistung. 2. Lichtstärke I [Candela, cd] – Lichtstrom pro Raumwinkel. 3. Beleuchtungsstärke E [Lux, lx] – auf eine Fläche treffender Lichtstrom (E = Φ/A). 4. Leuchtdichte L [cd/m²] – wahrgenommene Helligkeit einer Fläche. 5. Lichtausbeute η [lm/W] – Wirkungsgrad der Lichtquelle.",
              "stichworte": ["Lichtstrom", "Lichtstärke", "Beleuchtungsstärke", "Lux", "Lumen", "Lichtausbeute"],
              "falschantworten": ["Lichtstrom wird in Lux, Beleuchtungsstärke in Lumen gemessen.", "Leuchtdichte wird in Watt gemessen und beschreibt die Lichtleistung.", "Lichtausbeute wird in Candela gemessen und gibt die Richtungsabhängigkeit an."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "iban-002",
              "frage": "Was ist der Unterschied zwischen Lichtfarbe (Farbtemperatur) und Farbwiedergabeindex (Ra)?",
              "antwort": "Farbtemperatur [Kelvin, K]: beschreibt den Farbeindruck des Lichts – warmweiß (< 3.300 K), neutralweiß (3.300–5.300 K), tageslichtweiß (> 5.300 K). Farbwiedergabeindex Ra (0–100): gibt an, wie natürlich Farben unter der Lichtquelle erscheinen. Ra 100 = perfekte Wiedergabe. Arbeitsplätze benötigen Ra ≥ 80.",
              "stichworte": ["Farbtemperatur", "Kelvin", "Ra", "Farbwiedergabeindex", "warmweiß", "tageslichtweiß"],
              "falschantworten": ["Höhere Kelvinzahl bedeutet wärmeres, rötlicheres Licht.", "Ra 100 bedeutet, dass kein Licht abgestrahlt wird.", "Farbtemperatur und Farbwiedergabeindex bezeichnen dasselbe."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "iban-003",
              "frage": "Wie berechnet man die benötigte Anzahl Leuchten nach dem Wirkungsgradverfahren?",
              "antwort": "Formel: N = (E × A) / (Φ × η_WG × MF). Dabei: E = geforderte Beleuchtungsstärke [lx], A = Raumfläche [m²], Φ = Lichtstrom pro Lampe [lm], η_WG = Wirkungsgrad (aus Tabelle, abhängig von Raumindex und Reflexionsgraden), MF = Minderungsfaktor (Verschmutzung, z. B. 0,8). Raumindex: k = (l × b) / (h × (l+b)).",
              "stichworte": ["Wirkungsgradverfahren", "Beleuchtungsberechnung", "Raumindex", "Minderungsfaktor", "Leuchtenanzahl"],
              "falschantworten": ["N = E / (Φ × A) – Raumindex und Wirkungsgrad spielen keine Rolle.", "Die Anzahl der Leuchten ergibt sich direkt aus der Raumgröße in m².", "Für die Berechnung wird nur der Lichtstrom der Leuchte benötigt."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "iban-009",
              "frage": "Was ist Blendung und welche Arten gibt es?",
              "antwort": "Blendung ist eine Beeinträchtigung des Sehens durch zu hohe Leuchtdichten. Arten: 1. Direktblendung: Lichtquelle liegt im Gesichtsfeld (z. B. ungeschützte Lampe). 2. Reflexblendung: Spiegelung auf Bildschirmen oder Oberflächen. Maßnahmen: Leuchten mit Abschirmwinkel > 65°, Leuchtenraster, indirektes Licht, Leuchtenanordnung senkrecht zur Blickrichtung.",
              "stichworte": ["Blendung", "Direktblendung", "Reflexblendung", "Leuchtdichte", "Abschirmwinkel"],
              "falschantworten": ["Blendung tritt nur bei zu wenig Licht auf.", "Reflexblendung entsteht direkt durch die Lichtquelle im Gesichtsfeld.", "Blendung kann durch Erhöhung der Beleuchtungsstärke vermieden werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "iban-011",
              "frage": "Was ist DALI und für welchen Bereich wird es eingesetzt?",
              "antwort": "DALI (Digital Addressable Lighting Interface, IEC 62386) ist ein digitales Protokoll speziell für die Beleuchtungssteuerung. Über eine 2-Draht-Busleitung werden bis zu 64 Teilnehmer (EVGs, LED-Treiber) individuell oder in Gruppen (16 Gruppen, 16 Szenen) angesteuert. Dimmen erfolgt logarithmisch (entspricht der Hellwahrnehmung des Auges).",
              "stichworte": ["DALI", "IEC 62386", "Beleuchtungssteuerung", "64 Teilnehmer", "logarithmisch", "EVG"],
              "falschantworten": ["DALI ist ein Funkprotokoll auf 2,4 GHz für Smart-Home-Anwendungen.", "DALI kann neben Beleuchtung auch Heizung und Beschattung steuern.", "DALI nutzt 0–10 V Analogsignale zur Dimmung von Leuchten."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "iban-regelung",
          "name": "Regelungstechnik & Steuerungsarten",
          "karten": [
            {
              "id": "iban-004",
              "frage": "Was ist der grundlegende Unterschied zwischen einer Steuerung und einer Regelung?",
              "antwort": "Steuerung: offener Wirkungsweg (Steuerkette) – die Ausgangsgröße wird nicht auf die Eingangsgröße zurückgemeldet. Keine Rückkopplung → Störgrößen werden nicht ausgeglichen. Regelung: geschlossener Wirkungskreis – die Regelgröße (Istwert) wird ständig gemessen und mit dem Sollwert verglichen. Abweichung (Regelabweichung) wird durch den Regler korrigiert.",
              "stichworte": ["Steuerung", "Regelung", "offener Wirkungsweg", "geschlossener Wirkungskreis", "Rückkopplung"],
              "falschantworten": ["Bei einer Steuerung wird die Ausgangsgröße gemessen und rückgemeldet.", "Eine Regelung hat keinen Sollwert – sie reagiert nur auf Störgrößen.", "Steuerung und Regelung sind technisch identisch, nur der Begriff unterscheidet sich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "iban-005",
              "frage": "Nenne die wesentlichen Elemente eines Regelkreises und erkläre ihre Funktion.",
              "antwort": "1. Regler: vergleicht Soll- und Istwert, berechnet Stellgröße. 2. Stellglied/Aktor: setzt Stellgröße um (z. B. Ventil öffnet). 3. Regelstrecke: zu beeinflussender Prozess (z. B. Raum mit Heizung). 4. Messglied/Sensor: misst die Regelgröße (Istwert). 5. Führungsgröße (Sollwert): gewünschter Zielwert. 6. Regelgröße (Istwert): gemessener Ist-Zustand. 7. Störgröße: unerwünschte Einflüsse.",
              "stichworte": ["Regler", "Stellglied", "Regelstrecke", "Sensor", "Sollwert", "Istwert", "Störgröße"],
              "falschantworten": ["Der Regler misst die Regelgröße, das Messglied berechnet die Stellgröße.", "Die Regelstrecke ist identisch mit dem Regler.", "Störgrößen sind gewünschte Einflüsse auf den Regelkreis."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "iban-006",
              "frage": "Erkläre die P-, I- und D-Anteile eines PID-Reglers.",
              "antwort": "P-Anteil (Proportional): Stellgröße proportional zur Regelabweichung – schnelle Reaktion, aber bleibende Regelabweichung. I-Anteil (Integral): integriert die Regelabweichung über die Zeit – eliminiert bleibende Regelabweichung, aber langsamer. D-Anteil (Differential): reagiert auf die Änderungsgeschwindigkeit – verbessert Stabilität und Dämpfung, kann instabil werden. PID kombiniert alle drei Anteile.",
              "stichworte": ["P-Anteil", "I-Anteil", "D-Anteil", "PID-Regler", "Regelabweichung"],
              "falschantworten": ["Der I-Anteil reagiert auf Änderungsgeschwindigkeit, der D-Anteil auf den Zeitverlauf.", "Ein reiner P-Regler eliminiert die bleibende Regelabweichung.", "Der D-Anteil integriert die Regelabweichung und stabilisiert den Regelkreis."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "iban-007",
              "frage": "Was regelt §14a EnWG und welche Geräte sind betroffen?",
              "antwort": "§14a EnWG ermöglicht es Netzbetreibern, steuerbare Verbrauchseinrichtungen bei Netzüberlastung zeitweise zu drosseln (nicht abzuschalten). Betroffene Geräte (ab 3,7 kW): Wärmepumpen, Wallboxen (Ladeeinrichtungen für E-Autos), Klimaanlagen, Batteriespeicher. Geräte benötigen eine Steuerschnittstelle (z. B. CLS, KNX, SG-Ready). Als Ausgleich: reduziertes Netzentgelt für Betreiber.",
              "stichworte": ["14a EnWG", "Wärmepumpe", "Wallbox", "Drosselung", "Netzentgelt", "steuerbare Verbrauchseinrichtungen"],
              "falschantworten": ["§14a EnWG verpflichtet alle Haushalte zur Installation von Solaranlagen.", "Netzbetreiber dürfen Geräte nach §14a EnWG vollständig abschalten.", "§14a EnWG betrifft nur gewerbliche Verbraucher mit über 100 kW Anschlussleistung."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "iban-010",
              "frage": "Was ist das EVA-Prinzip und wie wird es bei Steuerungen angewendet?",
              "antwort": "EVA = Eingabe – Verarbeitung – Ausgabe. Bei Steuerungen: Eingabe (Sensoren, Taster, Schalter erfassen Zustände), Verarbeitung (Steuergerät/SPS verarbeitet die Signale nach Programm/Kennlinie), Ausgabe (Aktoren führen die Aktion aus, z. B. Motor läuft, Leuchte schaltet).",
              "stichworte": ["EVA", "Eingabe", "Verarbeitung", "Ausgabe", "Sensor", "Aktor"],
              "falschantworten": ["EVA steht für Einzelverbindung, Verteiler und Abschluss im Netzwerk.", "Bei EVA werden Ausgaben zuerst verarbeitet, dann eingegeben.", "Das EVA-Prinzip gilt nur für SPS, nicht für einfache Steuerungen."],
              "schwierigkeit": "leicht"
            }
          ]
        }
      ]
    },
    {
      "id": "pesn",
      "name": "PESN",
      "themen": [
        {
          "id": "pesn-netz",
          "name": "Vernetzte IT-Systeme & Protokolle",
          "karten": [
            {
              "id": "pesn-001",
              "frage": "Was ist das OSI-Modell und welche 7 Schichten hat es?",
              "antwort": "Das OSI-Modell (Open Systems Interconnection) beschreibt Netzwerkkommunikation in 7 Schichten: 1. Bitübertragung (Physical), 2. Sicherung (Data Link), 3. Vermittlung (Network), 4. Transport, 5. Sitzung (Session), 6. Darstellung (Presentation), 7. Anwendung (Application). Merkhilfe: 'Alle deutschen Studenten trinken verschiedene Sorten Bier'.",
              "stichworte": ["OSI", "7 Schichten", "Bitübertragung", "Netzwerk", "Anwendung"],
              "falschantworten": ["Das OSI-Modell hat 5 Schichten und wird nur im Internet verwendet.", "Schicht 3 (Netzwerk) entspricht dem HTTP-Protokoll.", "TCP/IP und OSI sind identisch – TCP/IP hat ebenfalls 7 Schichten."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-002",
              "frage": "Was ist eine IP-Adresse und was ist der Unterschied zwischen IPv4 und IPv6?",
              "antwort": "Eine IP-Adresse ist eine eindeutige Netzwerkadresse. IPv4: 32-Bit, in 4 Oktetten (z. B. 192.168.1.1), ca. 4,3 Mrd. Adressen. IPv6: 128-Bit, hexadezimal (z. B. 2001:0db8::1), ca. 340 Sextillionen Adressen. IPv6 wurde eingeführt, da IPv4-Adressen knapp wurden.",
              "stichworte": ["IP-Adresse", "IPv4", "IPv6", "32-Bit", "128-Bit", "MAC-Adresse"],
              "falschantworten": ["IPv6 hat nur 64 Bit und ist deshalb schneller als IPv4.", "IPv4-Adressen haben 6 Oktette, IPv6-Adressen 4.", "IP-Adressen und MAC-Adressen sind dasselbe."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-003",
              "frage": "Was ist eine Subnetzmaske und wie berechnet man nutzbare Hosts?",
              "antwort": "Die Subnetzmaske trennt den Netzwerkanteil vom Hostanteil einer IP-Adresse (z. B. /24 = 255.255.255.0). Nutzbare Hosts = 2^n − 2 (Netzadresse und Broadcast abgezogen). Beispiel: /24 → 8 Hostbits → 2^8 − 2 = 254 nutzbare Hosts. Netzadresse: alle Hostbits 0. Broadcast: alle Hostbits 1.",
              "stichworte": ["Subnetzmaske", "Hostbits", "nutzbare Hosts", "Netzadresse", "Broadcast", "CIDR"],
              "falschantworten": ["Nutzbare Hosts = 2^n, ohne Abzug von Netz- und Broadcastadresse.", "Eine /24-Maske hat 24 Hostbits und 8 Netzwerkbits.", "Die Broadcastadresse hat alle Netzwerkbits auf 1 gesetzt."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pesn-004",
              "frage": "Was ist Subnetting und wie geht man bei der Aufteilung eines Netzes vor?",
              "antwort": "Subnetting teilt ein großes Netzwerk in kleinere Teilnetze auf. Vorgehen: 1. Anzahl benötigter Hosts pro Subnetz festlegen. 2. Anzahl Hostbits berechnen: n = ⌈log₂(Hosts + 2)⌉. 3. Präfixlänge = 32 − n. Beispiel: 500 Hosts → n = 9 (2^9 = 512 ≥ 502) → /23 → 510 nutzbare Hosts.",
              "stichworte": ["Subnetting", "VLSM", "Hostbits", "Präfixlänge", "Teilnetz"],
              "falschantworten": ["Bei Subnetting werden immer gleich große Teilnetze erstellt.", "Subnetting erhöht die Anzahl nutzbarer IP-Adressen.", "Die Präfixlänge /24 erlaubt immer genau 500 Hosts."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pesn-005",
              "frage": "Was ist ein VLAN und welchen Vorteil bietet es gegenüber physischer Netztrennung?",
              "antwort": "Ein VLAN (Virtual Local Area Network) ist ein logisch getrenntes Netzwerk innerhalb derselben physischen Infrastruktur. Vorteile: Broadcast-Domänen trennen (weniger Netzlast), Sicherheitstrennung (z. B. Büro- von Produktionsnetz) ohne separate Kabel/Switches, flexible Umkonfiguration ohne Hardware-Änderungen.",
              "stichworte": ["VLAN", "Virtual Local Area Network", "Broadcast-Domäne", "Sicherheitstrennung", "Layer-3-Switch"],
              "falschantworten": ["VLANs benötigen separate physische Switche für jedes Subnetz.", "Geräte in verschiedenen VLANs können ohne Router direkt kommunizieren.", "VLANs erhöhen den Broadcast-Traffic im Netzwerk."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-006",
              "frage": "Was ist der Unterschied zwischen tagged und untagged VLANs?",
              "antwort": "Untagged (Access Port): Port gehört genau einem VLAN – angeschlossenes Gerät sendet ohne VLAN-Tag. Der Switch fügt intern den Tag hinzu. Tagged (Trunk Port): mehrere VLANs auf einem Port – Frames werden mit IEEE 802.1Q-Tag (4 Byte) versehen. Trunks verbinden Switches oder Switch mit Router.",
              "stichworte": ["tagged", "untagged", "Trunk", "Access Port", "802.1Q", "Native VLAN"],
              "falschantworten": ["Tagged Ports gehören immer nur einem VLAN.", "Untagged Ports können mehrere VLANs gleichzeitig übertragen.", "IEEE 802.1Q-Tags werden vom Endgerät, nicht vom Switch hinzugefügt."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pesn-007",
              "frage": "Was ist Inter-VLAN-Routing und wie wird es realisiert?",
              "antwort": "Inter-VLAN-Routing ermöglicht die Kommunikation zwischen verschiedenen VLANs. Methoden: 1. Router-on-a-Stick: Ein Router mit Sub-Interfaces (Trunk zum Switch, je Sub-Interface ein VLAN). 2. Layer-3-Switch (Multilayer Switch): hat integrierte Routing-Funktion, erstellt SVIs (Switch Virtual Interfaces) pro VLAN.",
              "stichworte": ["Inter-VLAN-Routing", "Router-on-a-Stick", "Layer-3-Switch", "SVI", "Sub-Interface"],
              "falschantworten": ["Inter-VLAN-Routing ist nicht möglich – VLANs sind immer isoliert.", "Router-on-a-Stick benötigt für jedes VLAN einen eigenen physischen Port.", "Layer-3-Switche können kein Routing durchführen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pesn-008",
              "frage": "Was ist DHCP und welche vier Schritte hat der DHCP-Prozess?",
              "antwort": "DHCP (Dynamic Host Configuration Protocol) verteilt automatisch IP-Adressen und Netzwerkkonfiguration. Vier Schritte (DORA): 1. Discover (Client sendet Broadcast), 2. Offer (Server bietet IP an), 3. Request (Client fordert IP an), 4. Acknowledge (Server bestätigt + übergibt IP, Subnetz, Gateway, DNS).",
              "stichworte": ["DHCP", "DORA", "Discover", "Offer", "Request", "Acknowledge"],
              "falschantworten": ["DHCP verteilt nur IP-Adressen, kein Gateway oder DNS.", "DHCP nutzt TCP für die Kommunikation zwischen Client und Server.", "Der DHCP-Prozess besteht aus zwei Schritten: Request und Reply."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-009",
              "frage": "Nenne die drei wichtigsten privaten IPv4-Adressbereiche (RFC 1918).",
              "antwort": "Klasse A: 10.0.0.0 – 10.255.255.255 (/8, ~16 Mio. Hosts). Klasse B: 172.16.0.0 – 172.31.255.255 (/12). Klasse C: 192.168.0.0 – 192.168.255.255 (/16). Diese Adressen sind nicht im Internet routbar – für Internetzugang: NAT (Network Address Translation).",
              "stichworte": ["Private IP", "RFC 1918", "10.0.0.0", "192.168.0.0", "NAT"],
              "falschantworten": ["192.168.0.0/16 hat nur 254 nutzbare Adressen.", "Private IP-Adressen sind direkt im Internet erreichbar.", "Der Bereich 172.0.0.0/8 ist der größte private Adressbereich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-010",
              "frage": "Was ist ein Twisted-Pair-Kabel und welche Kategorien gibt es?",
              "antwort": "Twisted-Pair (TP) ist ein Netzwerkkabel aus verdrillten Adernpaaren zur Reduzierung elektromagnetischer Störungen. Kategorien: Cat 5e (100 MHz, 1 Gbit/s), Cat 6 (250 MHz, 1–10 Gbit/s bis 55 m), Cat 6A (500 MHz, 10 Gbit/s bis 100 m), Cat 7 (600 MHz, 10 Gbit/s). Standard-Stecker: RJ45.",
              "stichworte": ["Twisted Pair", "Cat 6", "Cat 7", "UTP", "FTP", "RJ45"],
              "falschantworten": ["Cat 5e unterstützt 10 Gbit/s auf 100 m ohne Probleme.", "UTP-Kabel sind besser geschirmt als STP-Kabel.", "Twisted-Pair-Kabel sind ausschließlich für WLAN-Verbindungen gedacht."],
              "schwierigkeit": "leicht"
            }
          ]
        },
        {
          "id": "pesn-grundlagen",
          "name": "Netzwerk-Grundlagen (Bit, Byte, MAC, IP)",
          "karten": [
            {
              "id": "pesn-g001",
              "frage": "Was ist der Unterschied zwischen Bit und Byte?",
              "antwort": "Ein Bit ist die kleinste Informationseinheit und kann den Wert 0 oder 1 haben. Ein Byte besteht aus 8 Bit und kann Werte von 0 bis 255 darstellen. Weitere Einheiten: 1 Kilobyte (KB) = 1.024 Byte, 1 Megabyte (MB) = 1.024 KB, 1 Gigabyte (GB) = 1.024 MB. In der Übertragungsgeschwindigkeit wird oft Bit/s verwendet (z. B. 100 Mbit/s).",
              "stichworte": ["Bit", "Byte", "8 Bit", "KB", "MB", "GB", "Mbit/s"],
              "falschantworten": ["1 Byte = 4 Bit.", "1 Kilobyte = 1.000 Byte.", "Bit und Byte sind dasselbe."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pesn-g002",
              "frage": "Was ist eine MAC-Adresse und wie ist sie aufgebaut?",
              "antwort": "Die MAC-Adresse (Media Access Control) ist die physische, hardware-gebundene Adresse einer Netzwerkkarte. Sie ist 48 Bit lang, dargestellt als 6 Hexadezimal-Paare (z. B. 00:1A:2B:3C:4D:5E). Die ersten 3 Bytes (OUI) identifizieren den Hersteller, die letzten 3 Bytes sind die gerätespezifische Nummer. MAC-Adressen werden in Layer 2 (OSI) verwendet.",
              "stichworte": ["MAC-Adresse", "48 Bit", "Hexadezimal", "OUI", "Layer 2", "Netzwerkkarte"],
              "falschantworten": ["MAC-Adressen sind 32 Bit lang.", "Die MAC-Adresse wird vom Router dynamisch vergeben.", "MAC-Adressen funktionieren auf Layer 3."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pesn-g003",
              "frage": "Wie ist eine IPv4-Adresse aufgebaut und welche Klassen gibt es?",
              "antwort": "Eine IPv4-Adresse ist 32 Bit lang, aufgeteilt in 4 Oktette (0–255), getrennt durch Punkte (z. B. 192.168.1.10). Klassen: A (1–126, große Netze), B (128–191, mittlere Netze), C (192–223, kleine Netze), D (224–239, Multicast), E (240–255, reserviert). Heute wird meist CIDR-Notation genutzt (z. B. /24 statt Klasse C).",
              "stichworte": ["IPv4", "32 Bit", "Oktett", "Klasse A/B/C", "CIDR", "192.168.x.x"],
              "falschantworten": ["IPv4-Adressen sind 64 Bit lang.", "Klasse-A-Adressen beginnen mit 192.", "Eine IPv4-Adresse besteht aus 6 Hexadezimal-Blöcken."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pesn-g004",
              "frage": "Was ist der Unterschied zwischen IP-Adresse und MAC-Adresse?",
              "antwort": "Die IP-Adresse (Layer 3) ist logisch und adressiert Geräte netzwerkübergreifend – sie kann sich ändern (DHCP). Die MAC-Adresse (Layer 2) ist physisch und adressiert Geräte im lokalen Netz (LAN). ARP (Address Resolution Protocol) übersetzt IP → MAC innerhalb eines Subnetzes. Router nutzen IP-Adressen für die Weiterleitung, Switches nutzen MAC-Adressen.",
              "stichworte": ["IP-Adresse", "MAC-Adresse", "ARP", "Layer 2", "Layer 3", "Switch", "Router"],
              "falschantworten": ["MAC-Adressen werden für das Routing im Internet genutzt.", "IP-Adressen sind fest in der Hardware eingebrannt.", "ARP übersetzt MAC-Adressen in IPv6-Adressen."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-g005",
              "frage": "Was ist das Binärsystem und wie rechnet man Dezimal in Binär um?",
              "antwort": "Das Binärsystem (Basis 2) verwendet nur 0 und 1. Umrechnung Dezimal → Binär: Zahl wiederholt durch 2 teilen, Rest notieren, von unten lesen. Beispiel: 13 → 13÷2=6 R1, 6÷2=3 R0, 3÷2=1 R1, 1÷2=0 R1 → 1101. IP-Adressen und Subnetzmasken sind intern binär gespeichert (z. B. 255 = 11111111).",
              "stichworte": ["Binär", "Dezimal", "Basis 2", "Umrechnung", "Bit", "11111111"],
              "falschantworten": ["Dezimalzahl 10 = 1111 im Binärsystem.", "Im Binärsystem gibt es die Ziffern 0, 1 und 2.", "255 dezimal = 11111110 binär."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-g006",
              "frage": "Was ist das Hexadezimalsystem und wo wird es in der Netzwerktechnik eingesetzt?",
              "antwort": "Das Hexadezimalsystem (Basis 16) nutzt die Ziffern 0–9 und A–F. 1 Hex-Zeichen = 4 Bit (Nibble), 2 Hex-Zeichen = 1 Byte. Beispiel: FF hex = 255 dezimal = 11111111 binär. Einsatz: MAC-Adressen (00:1A:2B:...), IPv6-Adressen (2001:0db8::1). Vorteil: kompakte Darstellung langer Binärzahlen.",
              "stichworte": ["Hexadezimal", "Basis 16", "Nibble", "MAC-Adresse", "IPv6", "A–F"],
              "falschantworten": ["1 Hex-Zeichen entspricht 8 Bit.", "FF hexadezimal = 150 dezimal.", "Hexadezimal nutzt die Ziffern 0–9 und a–g."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pesn-g007",
              "frage": "Was ist ein Standard-Gateway und welche Rolle spielt es?",
              "antwort": "Das Standard-Gateway (Default Gateway) ist die IP-Adresse des Routers, an den alle Pakete weitergeleitet werden, die das lokale Subnetz verlassen. Ohne Gateway kann ein Gerät nur innerhalb seines Subnetzes kommunizieren. Typisch: .1 oder .254 als letzte Stelle (z. B. 192.168.1.1). Das Gateway vermittelt zwischen lokalem Netz und Internet/WAN.",
              "stichworte": ["Default Gateway", "Router", "Subnetz", "WAN", "Routing", "192.168.1.1"],
              "falschantworten": ["Das Standard-Gateway ist identisch mit der IP des Clients.", "Ohne Gateway können Geräte überhaupt nicht kommunizieren.", "Das Gateway vergibt IP-Adressen per DHCP."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pesn-g008",
              "frage": "Was ist DNS und warum ist es notwendig?",
              "antwort": "Das Domain Name System (DNS) übersetzt Domainnamen (z. B. www.google.de) in IP-Adressen (z. B. 142.250.185.99). Ohne DNS müsste man IP-Adressen auswendig kennen. DNS arbeitet hierarchisch: Root-Server → TLD-Server (.de, .com) → Autoritativer Nameserver. Standard-Port: 53 (UDP/TCP).",
              "stichworte": ["DNS", "Domain", "IP-Auflösung", "Port 53", "Nameserver", "www"],
              "falschantworten": ["DNS vergibt IP-Adressen dynamisch an Clients.", "DNS läuft auf Port 80.", "DNS ist nur für IPv6 nötig."],
              "schwierigkeit": "leicht"
            }
          ]
        }
      ]
    },
    {
      "id": "pegs",
      "name": "PEGS",
      "themen": [
        {
          "id": "pegs-smarthome",
          "name": "Smart Home & Gebäudeautomation",
          "karten": [
            {
              "id": "pegs-001",
              "frage": "Was ist Smart Home und welche typischen Anwendungsbereiche gibt es?",
              "antwort": "Smart Home beschreibt ein vernetztes Zuhause, in dem Geräte und Systeme automatisiert und zentral gesteuert werden. Typische Bereiche: Beleuchtungssteuerung, Heizungs-/Klimaregelung, Beschattung (Rollläden, Jalousien), Sicherheitssysteme (Kameras, Sensoren), Multiroom-Audio/Video, Zugangskontrolle.",
              "stichworte": ["Smart Home", "Beleuchtung", "Heizung", "Beschattung", "Sicherheit", "Automatisierung"],
              "falschantworten": ["Smart Home betrifft nur die Steuerung von Unterhaltungselektronik.", "Smart-Home-Systeme benötigen immer eine Internetverbindung.", "Smart Home ist nur für Neubauten geeignet, nicht für Bestandsgebäude."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pegs-002",
              "frage": "Was ist Homematic IP und welche Besonderheiten hat das System?",
              "antwort": "Homematic IP ist ein Smart-Home-System von eQ-3. Kommunikation: 868 MHz Funkfrequenz (störungsarmer Bereich, bis 300 m Reichweite). Besonderheiten: kein Cloud-Zwang (lokale Steuerung möglich), Ende-zu-Ende-Verschlüsselung, modular erweiterbar, Kombination aus Funk und Kabel möglich.",
              "stichworte": ["Homematic IP", "868 MHz", "eQ-3", "Access Point", "lokale Steuerung"],
              "falschantworten": ["Homematic IP nutzt WLAN auf 2,4 GHz für die Kommunikation.", "Homematic IP erfordert zwingend eine Cloud-Verbindung.", "Homematic IP wurde von Bosch entwickelt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-003",
              "frage": "Was ist Gebäudeautomation und welche drei Ebenen hat sie nach DIN EN ISO 16484?",
              "antwort": "Gebäudeautomation (GA) vernetzt und steuert automatisch Gebäudetechnik (HLK, Licht, Sicherheit). Drei Ebenen: 1. Feldebene (Sensoren, Aktoren – z. B. Temperaturfühler, Ventile), 2. Automatisierungsebene (DDC-Regler, SPS – verarbeiten Daten und steuern), 3. Managementebene (GLT, Visualisierung, Fernzugriff, Alarmierung).",
              "stichworte": ["Gebäudeautomation", "Feldebene", "Automatisierungsebene", "Managementebene", "DDC", "GLT"],
              "falschantworten": ["Gebäudeautomation hat nur zwei Ebenen: Sensor und Aktor.", "DDC-Regler befinden sich auf der Managementebene.", "Die Feldebene ist zuständig für Visualisierung und Alarmierung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-004",
              "frage": "Was ist dezentrale Lüftung mit Wärmerückgewinnung und welchen Vorteil bietet sie?",
              "antwort": "Dezentrale Lüftungsgeräte werden direkt im Raum (Außenwand) montiert und arbeiten im Wechselbetrieb: erst Zuluft (60 s), dann Abluft (60 s) durch denselben Ventilator. Ein Wärmespeicher (Keramikelement) speichert die Wärme der Abluft und gibt sie bei der nächsten Zuluftphase wieder ab. Wärmerückgewinnung bis 90 %. Vorteil: kein zentrales Kanalnetz, einfache Installation.",
              "stichworte": ["Dezentrale Lüftung", "Wärmerückgewinnung", "Wechselbetrieb", "Keramikelement", "Zuluft", "Abluft"],
              "falschantworten": ["Dezentrale Lüftung bläst kontinuierlich frische Luft und leitet Abluft über Kanäle ab.", "Wärmerückgewinnung ist nur bei zentralen Lüftungsanlagen möglich.", "Dezentrale Lüftungsgeräte benötigen immer ein zentrales Rohrnetz."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pegs-010",
              "frage": "Was ist ein Gateway in der Gebäudeautomation und wann wird es benötigt?",
              "antwort": "Ein Gateway verbindet zwei verschiedene Bussysteme oder Protokolle miteinander und übersetzt die Datenkommunikation. Beispiele: KNX ↔ Modbus, KNX ↔ BACnet, KNX ↔ DALI, KNX ↔ Homematic. Notwendig wenn unterschiedliche Hersteller oder Systeme integriert werden müssen. Konfiguration: Datenpunkt-Mapping (welcher KNX-Gruppenadresse entspricht welches Modbus-Register). Vorteil: Systemintegration ohne Austausch vorhandener Komponenten.",
              "antwort_mc": "Verbindet und übersetzt zwei Bussysteme (z. B. KNX ↔ Modbus) über Datenpunkt-Mapping.",
              "stichworte": ["Gateway", "KNX", "Modbus", "BACnet", "DALI", "Systemintegration", "Datenpunkt-Mapping"],
              "falschantworten": ["Ein Gateway verbindet nur gleichartige Bussysteme desselben Herstellers.", "Datenpunkt-Mapping ist bei Gateways nicht erforderlich.", "KNX und BACnet können ohne Gateway direkt kommunizieren."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "pegs-dsgvo",
          "name": "DSGVO & Datenschutz",
          "karten": [
            {
              "id": "pegs-005",
              "frage": "Was versteht man unter Datenschutz und Datensicherheit in der Gebäudeautomation?",
              "antwort": "Datenschutz: Schutz personenbezogener Daten (geregelt in DSGVO und BDSG). Grundsätze: Datensparsamkeit (nur nötige Daten erheben), Zweckbindung (Daten nur für den Erhebungszweck nutzen), Transparenz. Datensicherheit: technisch-organisatorische Maßnahmen zum Schutz vor Verlust/Manipulation (Art. 25, 32 DSGVO). In der GA: Bewegungsdaten, Temperaturdaten, Videoüberwachung sind personenbezogen.",
              "stichworte": ["DSGVO", "Datenschutz", "Datensparsamkeit", "Zweckbindung", "personenbezogene Daten"],
              "falschantworten": ["Datensicherheit und Datenschutz sind identisch.", "In der Gebäudeautomation gibt es keine personenbezogenen Daten.", "Die DSGVO gilt nicht für technische Systeme wie Gebäudeautomation."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-006",
              "frage": "Was sind personenbezogene Daten und was bedeutet 'Verbote mit Erlaubnisvorbehalt' (DSGVO)?",
              "antwort": "Personenbezogene Daten: alle Informationen, die einer natürlichen Person eindeutig zugeordnet werden können (Name, Adresse, Bewegungsdaten, Biometrie). Verbote mit Erlaubnisvorbehalt: Datenverarbeitung ist grundsätzlich verboten – außer ein Gesetz erlaubt sie oder eine freiwillige, informierte Einwilligung liegt vor.",
              "stichworte": ["personenbezogene Daten", "DSGVO", "Einwilligung", "Verbote mit Erlaubnisvorbehalt"],
              "falschantworten": ["Personenbezogene Daten sind nur Name und Adresse.", "Datenverarbeitung ist grundsätzlich erlaubt – außer ein Gesetz verbietet sie.", "Anonymisierte Daten gelten weiterhin als personenbezogen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "dsgvo-003",
              "frage": "Was sind die Betroffenenrechte nach DSGVO (Art. 12–23)?",
              "antwort": "Auskunftsrecht (Art. 15): Person kann Auskunft über gespeicherte Daten verlangen. Recht auf Berichtigung (Art. 16): falsche Daten korrigieren lassen. Recht auf Löschung (Art. 17): 'Recht auf Vergessenwerden'. Recht auf Einschränkung der Verarbeitung (Art. 18). Widerspruchsrecht (Art. 21): Widerspruch gegen Datenverarbeitung aus berechtigtem Interesse. Datenübertragbarkeit (Art. 20): eigene Daten in maschinenlesbarem Format erhalten.",
              "antwort_mc": "Auskunft, Berichtigung, Löschung ('Recht auf Vergessen'), Einschränkung, Widerspruch, Datenübertragbarkeit.",
              "stichworte": ["DSGVO", "Auskunftsrecht", "Löschrecht", "Widerspruchsrecht", "Datenübertragbarkeit", "Betroffenenrechte"],
              "falschantworten": ["Betroffene können keine Auskunft über gespeicherte Daten verlangen.", "Das Recht auf Löschung gilt absolut und uneingeschränkt in jedem Fall.", "Widerspruchsrecht gilt nur bei Einwilligungsdatenverarbeitung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "dsgvo-004",
              "frage": "Was ist ein Datenschutzbeauftragter (DSB) und wann muss ein Unternehmen einen benennen?",
              "antwort": "Ein DSB überwacht die Einhaltung der DSGVO im Unternehmen, berät Mitarbeitende und ist Ansprechpartner für Aufsichtsbehörden. Pflicht zur Benennung (Art. 37 DSGVO): wenn regelmäßig mehr als 20 Personen mit personenbezogenen Daten umgehen, bei umfangreicher Verarbeitung sensibler Daten (Gesundheit, Biometrie), oder bei Behörden. Der DSB kann intern oder extern bestellt werden und darf für die Ausübung seiner Tätigkeit nicht bestraft werden.",
              "antwort_mc": "DSB überwacht DSGVO-Einhaltung. Pflicht ab 20 Personen mit Datenzugang oder bei sensiblen Daten/Behörden.",
              "stichworte": ["Datenschutzbeauftragter", "DSB", "DSGVO Art. 37", "Aufsichtsbehörde", "Pflicht"],
              "falschantworten": ["Jedes Unternehmen muss zwingend einen DSB benennen.", "Der DSB darf Anweisungen von der Geschäftsführung zur Datenlöschung erhalten.", "Ein DSB ist nur für öffentliche Behörden vorgeschrieben."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "dsgvo-005",
              "frage": "Was sind technische und organisatorische Maßnahmen (TOMs) nach Art. 32 DSGVO?",
              "antwort": "TOMs sind Maßnahmen zum Schutz personenbezogener Daten vor unberechtigtem Zugriff, Verlust und Manipulation. Technisch: Zutrittskontrolle (abgesperrter Serverraum), Zugriffskontrolle (Benutzerrechte, Passwörter), Verschlüsselung (HTTPS, Ende-zu-Ende), Datensicherung (Backup), Pseudonymisierung. Organisatorisch: Mitarbeiterschulung, Datenschutzrichtlinien, Verpflichtungserklärungen, Auftragsverarbeitungsverträge (AVV). Maßnahmen müssen dem Risiko angemessen sein.",
              "antwort_mc": "TOMs schützen Daten: technisch (Verschlüsselung, Zugangskontrolle) und organisatorisch (Schulungen, AVV, Richtlinien).",
              "stichworte": ["TOM", "technische Maßnahmen", "organisatorische Maßnahmen", "DSGVO Art. 32", "Verschlüsselung", "AVV"],
              "falschantworten": ["TOMs sind nur technische Maßnahmen, keine organisatorischen.", "Pseudonymisierung gilt als vollständige Anonymisierung.", "Passwörter und Zugangskontrollen sind keine TOMs."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "pegs-planung",
          "name": "GA-Planung & Schutzeinrichtungen",
          "karten": [
            {
              "id": "pegs-007",
              "frage": "Was ist ein Lastenheft und was enthält es bei der GA-Planung?",
              "antwort": "Das Lastenheft beschreibt WAS und WOZU gefordert wird – noch nicht WIE oder WOMIT. Bei der Gebäudeautomation enthält es: Anforderungen des Nutzers pro Raum (Heizung, Lüftung, Beleuchtung, Beschattung, Sicherheit), Prioritäten und Kommentare. Das Lastenheft ist die Basis für Pflichtenheft und Materialplanung.",
              "stichworte": ["Lastenheft", "Nutzeranforderungen", "Gebäudeautomation", "GA-Planung", "Checkliste"],
              "falschantworten": ["Das Lastenheft beschreibt detailliert WIE die Anforderungen technisch umgesetzt werden.", "Ein Lastenheft wird erst nach der Installation erstellt.", "Das Lastenheft enthält nur Angaben zu Kosten und Zeitplan."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-008",
              "frage": "Was ist eine Datenpunktliste in der Gebäudeautomation und wozu dient sie?",
              "antwort": "Eine Datenpunktliste erfasst alle Sensoren und Aktoren eines GA-Projekts strukturiert: Funktion, Raum/Bereich, Anschlussort, Art des Signals (binär/analog), Sensor- und Aktorfunktionen. Sie ermöglicht systematische Materialplanung, vereinfacht Programmierung und Dokumentation. Grundlage: Gebäudegliederung in Bereiche/Räume nach VDI 3813.",
              "stichworte": ["Datenpunktliste", "Sensor", "Aktor", "VDI 3813", "Gebäudegliederung", "GA-Planung"],
              "falschantworten": ["Eine Datenpunktliste enthält nur IP-Adressen der vernetzten Geräte.", "Die Datenpunktliste wird erst nach Abschluss der Installation erstellt.", "Datenpunktlisten sind nur bei KNX-Systemen erforderlich."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pegs-009",
              "frage": "Erkläre den Unterschied zwischen FI-Schutzschalter (RCD) und Leitungsschutzschalter (LS).",
              "antwort": "FI-Schutzschalter (RCD/RCCB): Schützt Menschen vor Stromschlag durch Erkennung von Fehlerstrom (Differenz zwischen Hin- und Rückleiter ≥ 30 mA → Auslösung in < 30 ms). LS-Schalter: Schützt Leitungen vor Überlast (thermischer Auslöser) und Kurzschluss (magnetischer Auslöser). FI schützt Personen, LS schützt Leitungen. Kombination: FI/LS = RCBO.",
              "stichworte": ["FI-Schutzschalter", "RCD", "Leitungsschutzschalter", "Fehlerstrom", "30 mA", "RCBO"],
              "falschantworten": ["FI und LS schützen beide vor Kurzschlüssen, haben aber verschiedene Auslösezeiten.", "Ein FI-Schutzschalter löst bei Überlast aus, ein LS bei Fehlerstrom.", "Der FI-Schutzschalter schützt auch Leitungen – ein LS wird nicht mehr benötigt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-011",
              "frage": "Was ist ein Pflichtenheft und wie unterscheidet es sich vom Lastenheft?",
              "antwort": "Das Pflichtenheft beschreibt WIE und WOMIT die im Lastenheft geforderten Anforderungen technisch umgesetzt werden. Es wird vom Auftragnehmer (Elektroinstallateur, Systemintegrator) erstellt und enthält: konkrete Produkte und Hersteller, Verdrahtungskonzept, Programmierkonzept, Inbetriebnahmeplan, Abnahmekriterien. Unterschied: Lastenheft (Auftraggeber, WAS?) → Pflichtenheft (Auftragnehmer, WIE?).",
              "antwort_mc": "Pflichtenheft (Auftragnehmer): WIE und WOMIT – Produkte, Verdrahtung, Programmierung. Lastenheft (Auftraggeber): WAS?",
              "stichworte": ["Pflichtenheft", "Lastenheft", "Auftragnehmer", "Auftraggeber", "GA-Planung", "Abnahmekriterien"],
              "falschantworten": ["Das Pflichtenheft beschreibt nur, was der Auftraggeber möchte.", "Lastenheft und Pflichtenheft werden beide vom Auftragnehmer erstellt.", "Das Pflichtenheft ist immer vor dem Lastenheft fertig."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pegs-012",
              "frage": "Was ist der Potenzialausgleich und warum ist er in der Gebäudeinstallation wichtig?",
              "antwort": "Potenzialausgleich verbindet alle leitfähigen Teile eines Gebäudes (Wasserrohre, Heizungsrohre, Stahlbauteile, PE-Schiene) mit der Haupterdungsschiene (HES). Zweck: verhindert gefährliche Spannungsdifferenzen zwischen berührbaren metallischen Teilen. Schutzpotenzialausgleich: Pflicht nach VDE 0100 Teil 540 für alle Gebäude. Zusätzlicher Potenzialausgleich: in Feuchträumen (Bäder – DGUV/VDE). Blitzschutzpotenzialausgleich: verbindet Blitzschutzanlage mit Gebäudeinstallation.",
              "antwort_mc": "Verbindet alle leitfähigen Teile mit HES, verhindert Spannungsdifferenzen. Pflicht nach VDE 0100 Teil 540.",
              "stichworte": ["Potenzialausgleich", "Haupterdungsschiene", "HES", "VDE 0100", "Feuchtraum", "Blitzschutz"],
              "falschantworten": ["Potenzialausgleich ist nur in Badezimmern erforderlich.", "Wasserrohre müssen nicht in den Potenzialausgleich einbezogen werden.", "Potenzialausgleich und Schutzleiter (PE) sind identisch."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "pwa",
      "name": "PWA",
      "themen": [
        {
          "id": "pwa-schuetz",
          "name": "Schützsteuerung & Grundschaltungen",
          "karten": [
            {
              "id": "sc-001",
              "frage": "Was ist der Unterschied zwischen Steuer- und Laststromkreis bei einer Schützschaltung?",
              "antwort": "Steuerstromkreis: Niederspannungskreis (z. B. 24 V AC/DC), enthält Taster, Schützspule, Hilfskontakte, Meldeleuchten. Laststromkreis: Spannungskreis der Last (z. B. 400 V), enthält Schützhauptkontakte und den Motor/Verbraucher. Beide sind elektrisch galvanisch getrennt.",
              "stichworte": ["Steuerstromkreis", "Laststromkreis", "Schütz", "Taster", "Hauptkontakt"],
              "falschantworten": ["Steuer- und Laststromkreis sind beim Schütz elektrisch direkt verbunden.", "Der Steuerstromkreis hat immer 400 V, der Laststromkreis 230 V.", "Hilfskontakte befinden sich im Laststromkreis, Hauptkontakte im Steuerstromkreis."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "sc-002",
              "frage": "Wie funktioniert eine Stern-Dreieck-Schaltung und wozu wird sie eingesetzt?",
              "antwort": "Beim Anlauf wird der Motor in Stern (Y) geschaltet (Spannung pro Wicklung: 230 V bei 400 V Netz → Anlaufstrom auf 1/3 reduziert). Nach ca. 3–5 Sekunden wird auf Dreieck (△) umgeschaltet (volle Spannung 400 V, Nennbetrieb). Einsatz bei großen Asynchronmotoren zur Anlaufstrombegrenzung.",
              "stichworte": ["Stern-Dreieck", "Anlaufstrombegrenzung", "Asynchronmotor", "Stern", "Dreieck"],
              "falschantworten": ["Bei Stern-Dreieck wird der Motor mit verringerter Drehzahl gestartet.", "In Dreieckschaltung ist die Spannung pro Wicklung geringer als in Sternschaltung.", "Stern-Dreieck erhöht das Anlaufdrehmoment des Motors."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "sc-003",
              "frage": "Was ist ein Motorschutzschalter (MSS) und welchen Schutz bietet er?",
              "antwort": "Ein Motorschutzschalter schützt Elektromotoren vor: 1. Überlast (thermischer Auslöser, einstellbarer Strom), 2. Kurzschluss (magnetischer Auslöser), 3. Phasenausfall (asymmetrische Last löst aus). Der Einstellbereich des Nennstroms ist am MSS stufenlos einstellbar.",
              "stichworte": ["Motorschutzschalter", "Überlast", "Kurzschluss", "Phasenausfall", "thermischer Auslöser"],
              "falschantworten": ["Ein MSS schützt nur vor Kurzschlüssen, kein Überlastschutz.", "Motorschutzschalter sind fest auf den Nennstrom eingestellt und nicht verstellbar.", "Phasenausfall wird vom Leitungsschutzschalter erkannt, nicht vom MSS."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sc-004",
              "frage": "Was ist ein Wendeschütz und wie realisiert man eine elektrische Verriegelung?",
              "antwort": "Ein Wendeschütz ermöglicht die Drehrichtungsumkehr eines Drehstrommotors durch Vertauschen von zwei Phasen (L1/L2). Elektrische Verriegelung: Öffner-Hilfskontakt von K1 im Steuerstromkreis von K2 (und umgekehrt). Dadurch können K1 und K2 nie gleichzeitig anziehen – verhindert Kurzschluss.",
              "stichworte": ["Wendeschütz", "Drehrichtungsumkehr", "Verriegelung", "Öffner", "Phasentausch"],
              "falschantworten": ["Drehrichtungsumkehr erfolgt durch Änderung der Frequenz am Motor.", "Elektrische Verriegelung verbindet K1 und K2 parallel im Laststromkreis.", "Ein Wendeschütz besteht aus drei Schützen, nicht zwei."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "sc-005",
              "frage": "Was ist ein Frequenzumrichter (FU) und welche Vorteile bietet er bei Motorsteuerungen?",
              "antwort": "Ein Frequenzumrichter wandelt Netzstrom (feste Frequenz/Spannung) in einen Strom mit variabler Frequenz und Spannung um. Vorteile: stufenlose Drehzahlregelung, sanfter Anlauf (kein Anlaufstrompeak), Energieeinsparung (z. B. bei Pumpen/Lüftern: Drehzahl halbiert → Leistung auf 1/8 reduziert), Bremsenergierückspeisung.",
              "stichworte": ["Frequenzumrichter", "Drehzahlregelung", "sanfter Anlauf", "Energieeinsparung", "Frequenz"],
              "falschantworten": ["Ein Frequenzumrichter erhöht nur die Frequenz, nicht die Spannung.", "Frequenzumrichter werden nur bei Gleichstrommotoren eingesetzt.", "Mit einem Frequenzumrichter kann ein Motor nur auf zwei feste Drehzahlen eingestellt werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sc-006",
              "frage": "Was ist eine Selbsthalteschaltung und wozu wird sie verwendet?",
              "antwort": "Eine Selbsthalteschaltung hält einen Schütz nach dem Loslassen des Einschalttasters selbstständig gehalten – durch einen parallel zum Einschalttaster geschalteten Schließer-Hilfskontakt des Schützes. Abschalten nur durch Öffner (Ausschalttaster) im Steuerstromkreis. Einsatz: Motoren, die nach einmaligem Tastendruck weiterlaufen sollen.",
              "stichworte": ["Selbsthalteschaltung", "Hilfskontakt", "Schließer", "Einschalttaster", "Ausschalttaster"],
              "falschantworten": ["Bei der Selbsthaltung muss der Taster dauerhaft gedrückt bleiben.", "Die Selbsthaltung wird durch einen Öffner-Hilfskontakt realisiert.", "Eine Selbsthalteschaltung kann nur mit einem Relais, nicht mit einem Schütz realisiert werden."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "sef",
      "name": "SEF",
      "themen": [
        {
          "id": "sef-knx",
          "name": "KNX/EIB Bussystem",
          "karten": [
            {
              "id": "knx-001",
              "frage": "Was ist KNX und welchen Standard beschreibt es?",
              "antwort": "KNX (früher EIB) ist ein weltweit genormter Kommunikationsstandard für Gebäudeautomation (ISO/IEC 14543-3). Er ermöglicht die Vernetzung und Steuerung aller elektrischen Gewerke: Beleuchtung, Heizung/Kühlung, Beschattung, Zugangskontrolle, Energie. KNX ist herstellerunabhängig – Produkte verschiedener Hersteller sind untereinander kompatibel.",
              "stichworte": ["KNX", "EIB", "ISO/IEC 14543-3", "Gebäudeautomation", "herstellerunabhängig"],
              "falschantworten": ["KNX ist ein proprietärer Standard eines einzelnen Herstellers.", "KNX gilt nur für Beleuchtungssteuerung.", "KNX und DALI beschreiben denselben Standard."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "knx-002",
              "frage": "Welche Übertragungsmedien unterstützt KNX?",
              "antwort": "KNX unterstützt vier Übertragungsmedien: 1. Twisted Pair (KNX TP): 2-Draht-Bus, bekannteste Variante, 9.600 Baud, Bus versorgt Geräte mit 24–30 V DC. 2. KNX IP: Übertragung über Ethernet (IP-Backbone). 3. KNX RF: Funkkommunikation (868 MHz). 4. KNX PL (Powerline): Übertragung über vorhandene 230-V-Leitungen.",
              "stichworte": ["KNX TP", "KNX IP", "KNX RF", "KNX PL", "Twisted Pair", "868 MHz"],
              "falschantworten": ["KNX unterstützt nur Twisted Pair, kein Funk oder IP.", "KNX RF arbeitet auf 2,4 GHz wie WLAN.", "Bei KNX TP werden die Geräte über ein separates Netzteil versorgt (keine Busversorgung)."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "knx-003",
              "frage": "Wie ist eine KNX-Anlage topologisch aufgebaut (Linie, Bereich, Anlage)?",
              "antwort": "Linie: bis zu 64 Teilnehmer, verbunden am KNX-Bus mit einer Linienspannung. Bereich: bis zu 15 Linien, verbunden über Linienkoppler (LK). Anlage: bis zu 15 Bereiche, verbunden über Bereichskoppler (BK) an der Hauptlinie. Max. Gesamtteilnehmer: 15 × 15 × 64 = 14.400. Jede Linie benötigt ein Netzteil (230 mA).",
              "stichworte": ["KNX Topologie", "Linie", "Bereich", "Linienkoppler", "Bereichskoppler", "64 Teilnehmer"],
              "falschantworten": ["Eine KNX-Linie kann unbegrenzt viele Teilnehmer haben.", "Linienkoppler und Bereichskoppler sind dasselbe Gerät.", "Max. 10 Linien pro Bereich und max. 10 Bereiche pro Anlage."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "knx-004",
              "frage": "Was ist eine physische Adresse und was ist eine Gruppenadresse in KNX?",
              "antwort": "Physische Adresse: eindeutige Geräteadresse, Format Bereich.Linie.Teilnehmer (z. B. 1.2.5). Wird bei der Inbetriebnahme mit ETS vergeben. Gruppenadresse: logische Kommunikationsadresse, verbindet Sender (z. B. Taster) mit Empfänger (z. B. Dimmaktor). Format: Hauptgruppe/Mittelgruppe/Untergruppe (z. B. 1/1/1). Ein Gerät kann mehreren Gruppenadressen zugeordnet sein.",
              "stichworte": ["physische Adresse", "Gruppenadresse", "KNX", "ETS", "Bereich.Linie.Teilnehmer"],
              "falschantworten": ["Physische Adresse und Gruppenadresse sind dasselbe in KNX.", "Eine Gruppenadresse kann nur genau einem Sender und einem Empfänger zugeordnet werden.", "Die physische Adresse wird automatisch vergeben, keine ETS-Software nötig."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "knx-005",
              "frage": "Was ist die ETS (Engineering Tool Software) und welche Aufgaben hat sie?",
              "antwort": "ETS (Engineering Tool Software) ist die offizielle Programmier- und Inbetriebnahmesoftware für KNX-Anlagen. Aufgaben: Projektplanung (Gebäudestruktur), Geräteauswahl und Import von Produktdatenbanken, Vergabe physischer Adressen, Zuweisung von Gruppenadressen, Download der Applikationsparameter auf Geräte, Diagnose und Fehlerbehebung. Hersteller: KNX Association.",
              "stichworte": ["ETS", "Engineering Tool Software", "KNX Association", "Inbetriebnahme", "Gruppenadresse"],
              "falschantworten": ["ETS ist ein proprietäres Tool eines einzelnen KNX-Herstellers.", "Mit ETS werden nur physische Adressen vergeben – Gruppenadressen sind nicht nötig.", "ETS läuft nur auf Apple-Betriebssystemen."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "knx-006",
              "frage": "Welche KNX-Gerätetypen gibt es und welche Funktion haben sie?",
              "antwort": "Sensoren (Eingabegeräte): erfassen Zustände und senden Telegramme – z. B. Taster, Binäreingang, Bewegungsmelder, Thermostat, Windsensor, Helligkeitssensor. Aktoren (Ausgabegeräte): empfangen Telegramme und führen Aktionen aus – z. B. Schaltaktor, Dimmaktor, Jalousieaktor, Heizungsaktor, Ventilantrieb. Systemgeräte: Netzteil, Linienkoppler, IP-Router, Datenlogger.",
              "stichworte": ["Sensor", "Aktor", "Taster", "Schaltaktor", "Dimmaktor", "Jalousieaktor", "Linienkoppler"],
              "falschantworten": ["KNX-Sensoren führen Schaltbefehle aus, Aktoren erfassen Zustände.", "Ein Linienkoppler ist ein Aktor zur Beleuchtungssteuerung.", "Netzteile sind keine KNX-Systemgeräte."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "knx-007",
              "frage": "Was ist ein KNX-Telegramm und welche Informationen enthält es?",
              "antwort": "Ein KNX-Telegramm (max. 23 Byte) ist die Dateneinheit, über die KNX-Geräte kommunizieren. Inhalt: Steuerfeld (Priorität, Wiederholung), Quelladresse (physische Adresse des Senders), Zieladresse (Gruppenadresse), Datenlänge (1 Bit bis 14 Byte Nutzdaten), Prüfbyte. KNX TP arbeitet mit CSMA/CA – bei Kollision sendet das Telegramm mit höherer Priorität zuerst.",
              "stichworte": ["KNX Telegramm", "Quelladresse", "Zieladresse", "Gruppenadresse", "CSMA/CA", "Priorität"],
              "falschantworten": ["KNX-Telegramme können beliebig groß sein.", "KNX nutzt Token-Ring für die Kommunikation.", "Die Zieladresse im KNX-Telegramm ist immer eine physische Adresse."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "knx-008",
              "frage": "Was sind Datenpunkttypen (DPT) in KNX und warum sind sie wichtig?",
              "antwort": "Datenpunkttypen (DPT) definieren Format und Interpretation von Kommunikationsobjekten. Beispiele: DPT 1.001 = 1-Bit (Ein/Aus), DPT 5.001 = 1-Byte (0–100 % Dimmwert), DPT 9.001 = 2-Byte Gleitkomma (Temperatur in °C). Sender und Empfänger müssen denselben DPT verwenden, sonst ist die Kommunikation fehlerhaft.",
              "stichworte": ["DPT", "Datenpunkttyp", "1-Bit", "Gleitkomma", "Kommunikationsobjekt", "Dimmwert"],
              "falschantworten": ["DPTs gelten nur für Dimmaktoren, nicht für andere Geräte.", "DPT 1.001 ist ein 2-Byte Datenpunkt für Temperaturen.", "Sender und Empfänger können unterschiedliche DPTs haben."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "knx-009",
              "frage": "Was ist ein KNX IP-Router und welchen Zweck erfüllt er?",
              "antwort": "Ein KNX IP-Router verbindet KNX TP-Linien mit einem IP-Netzwerk (Ethernet). Er ermöglicht: schnelle IP-Backbone-Verbindung zwischen Bereichen (anstatt langsamer Linienkoppler), Fernzugriff auf KNX-Anlage über IP, Visualisierung und Steuerung per App/PC. Der IP-Router ersetzt den Bereichs- oder Linienkoppler im IP-Backbone-Betrieb.",
              "stichworte": ["KNX IP-Router", "Backbone", "Ethernet", "Fernzugriff", "Linienkoppler"],
              "falschantworten": ["Ein KNX IP-Router hat dieselbe Funktion wie ein WLAN-Router.", "IP-Router werden nur für die Fernwartung benötigt, nicht für die interne Kommunikation.", "KNX IP-Router und Linienkoppler sind identisch."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "knx-010",
              "frage": "Was ist ein Binäreingang in KNX und welche Geräte können daran angeschlossen werden?",
              "antwort": "Ein Binäreingang (auch Universalschnittstelle) wandelt konventionelle Schalter-/Tasterimpulse in KNX-Telegramme um. Anschließbar: konventionelle Taster, Schalter, Fensterkontakte, Bewegungsmelder mit potenzialfreiem Kontakt, Türkontakte. Vorteil: bestehende Schalter bleiben, werden durch Binäreingang in KNX-Anlage integriert.",
              "stichworte": ["Binäreingang", "Universalschnittstelle", "konventioneller Taster", "potenzialfreier Kontakt", "KNX"],
              "falschantworten": ["Ein Binäreingang steuert direkt Leuchten – kein KNX-Telegramm wird gesendet.", "An einem Binäreingang können nur KNX-Taster angeschlossen werden.", "Binäreingänge sind nur für digitale Signale, nicht für Schalter geeignet."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "sef-pv",
          "name": "Photovoltaik & Energietechnik",
          "karten": [
            {
              "id": "pv-001",
              "frage": "Wie funktioniert eine Solarzelle (photovoltaischer Effekt)?",
              "antwort": "Eine Solarzelle nutzt den photovoltaischen Effekt: Lichtphotonen treffen auf Halbleitermaterial (Silizium mit p-n-Übergang). Die Photonen lösen Elektronen aus dem Kristallgitter. Durch das elektrische Feld des p-n-Übergangs werden Elektronen (n-Seite) und Löcher (p-Seite) getrennt → Gleichspannung entsteht (ca. 0,5–0,6 V pro Zelle).",
              "stichworte": ["Photovoltaik", "p-n-Übergang", "Silizium", "Elektron", "Gleichspannung"],
              "falschantworten": ["Solarzellen erzeugen Wechselstrom direkt durch Wärmeumwandlung.", "Der photovoltaische Effekt tritt nur bei Temperaturen über 100 °C auf.", "Siliziumzellen nutzen einen n-p-n-Transistoraufbau zur Stromerzeugung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pv-002",
              "frage": "Was ist der Unterschied zwischen monokristallinen, polykristallinen und Dünnschicht-Solarzellen?",
              "antwort": "Monokristallin: höchster Wirkungsgrad (22–24 %), einheitliches Erscheinungsbild (dunkel), teuerste Herstellung. Polykristallin: mittlerer Wirkungsgrad (17–19 %), bläuliches Erscheinungsbild, günstiger. Dünnschicht (CdTe, CIGS): niedrigster Wirkungsgrad (12–15 %), flexibel einsetzbar, besser bei Schwachlicht.",
              "stichworte": ["monokristallin", "polykristallin", "Dünnschicht", "Wirkungsgrad", "Silizium"],
              "falschantworten": ["Dünnschichtzellen haben den höchsten Wirkungsgrad aller Zellentypen.", "Polykristalline Zellen sind dunkler als monokristalline.", "Monokristalline Zellen funktionieren nicht bei bewölktem Himmel."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "pv-003",
              "frage": "Was ist der Unterschied zwischen einer netzgekoppelten PV-Anlage und einer Inselanlage?",
              "antwort": "Netzgekoppelte Anlage: Wechselrichter speist Überschussstrom ins öffentliche Netz ein, bezieht Strom bei Unterversorgung aus dem Netz (EEG-Vergütung). Inselanlage: Unabhängig vom Netz, benötigt Batteriespeicher, Insellader und Inselwechselrichter – für abgelegene Standorte ohne Netzanschluss.",
              "stichworte": ["Netzgekoppelt", "Inselanlage", "Batteriespeicher", "Einspeisung", "EEG"],
              "falschantworten": ["Inselanlagen speisen überschüssigen Strom ins öffentliche Netz ein.", "Netzgekoppelte Anlagen benötigen immer einen Batteriespeicher.", "Inselanlagen werden nur in Industriebetrieben eingesetzt."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "pv-004",
              "frage": "Was ist Eigenverbrauch und Autarkiegrad bei PV-Anlagen?",
              "antwort": "Eigenverbrauch: Anteil des selbst erzeugten PV-Stroms, der direkt im Gebäude verbraucht wird (nicht eingespeist). Eigenverbrauchsquote = Eigenverbrauch / Gesamterzeugung. Autarkiegrad: Anteil des Gesamtstrombedarfs, der durch PV gedeckt wird. Autarkiegrad = Eigenverbrauch / Gesamtbedarf. Beide werden durch Batteriespeicher erhöht.",
              "stichworte": ["Eigenverbrauch", "Autarkiegrad", "Eigenverbrauchsquote", "PV", "Batteriespeicher"],
              "falschantworten": ["Autarkiegrad und Eigenverbrauchsquote sind dasselbe.", "Ein Autarkiegrad von 100 % bedeutet, dass die Anlage keine Energie erzeugt.", "Eigenverbrauch ist der Anteil des Netzstroms am Gesamtverbrauch."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "pv-005",
              "frage": "Was besagt das EEG (Erneuerbare-Energien-Gesetz) für private PV-Anlagen?",
              "antwort": "Das EEG regelt die Einspeisung von Strom aus erneuerbaren Energien: feste Einspeisevergütung für 20 Jahre (garantiert ab Inbetriebnahme). Aktuelle Vergütung (2024): ca. 8 Cent/kWh für Volleinspeiser, ca. 13 Cent/kWh für Teileinspeisung <10 kWp. Seit 2023: Anlagen bis 30 kWp steuerbefreit (§3 Nr. 72 EStG).",
              "stichworte": ["EEG", "Einspeisevergütung", "20 Jahre", "kWp", "Steuerbefreiung"],
              "falschantworten": ["Das EEG verpflichtet alle Haushalte zur Installation von PV-Anlagen.", "Die Einspeisevergütung wird jährlich an die Inflationsrate angepasst.", "Anlagen über 10 kWp sind stets von der Einkommensteuer befreit."],
              "schwierigkeit": "schwer"
            }
          ]
        }
      ]
    }
    ,
    {
      "id": "etg",
      "name": "Elektrotechnik – Grundlagen",
      "themen": [
        {
          "id": "etg-grundgroessen",
          "name": "Elektrische Grundgrößen & Gesetze",
          "karten": [
            {
              "id": "etg-001",
              "frage": "Nenne die vier elektrischen Grundgrößen mit Formelzeichen und Einheit.",
              "antwort": "1. Spannung U [Volt, V] – elektrischer Druck, der Ladungsträger antreibt. 2. Strom I [Ampere, A] – Ladungsfluss pro Zeiteinheit (I = Q/t). 3. Widerstand R [Ohm, Ω] – Hemmung des Stromflusses. 4. Elektrische Leistung P [Watt, W] – Energie pro Zeiteinheit (P = U × I).",
              "stichworte": ["Spannung", "Strom", "Widerstand", "Leistung", "Volt", "Ampere", "Ohm", "Watt"],
              "falschantworten": ["Spannung wird in Ampere, Strom in Volt gemessen.", "Widerstand hat die Einheit Watt.", "Leistung wird in Ohm gemessen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "etg-002",
              "frage": "Was besagt das Ohmsche Gesetz und wie lauten die drei Varianten?",
              "antwort": "Das Ohmsche Gesetz beschreibt den Zusammenhang zwischen Spannung, Strom und Widerstand: U = R × I (Spannung = Widerstand × Strom), R = U / I (Widerstand = Spannung / Strom), I = U / R (Strom = Spannung / Widerstand). Gilt nur für ohmsche (lineare) Widerstände bei konstanter Temperatur.",
              "stichworte": ["Ohmsches Gesetz", "U = R × I", "Spannung", "Strom", "Widerstand"],
              "falschantworten": ["U = I + R ist die Formel des Ohmschen Gesetzes.", "Das Ohmsche Gesetz gilt für alle Bauteile, auch Spulen und Kondensatoren.", "I = R × U ist die korrekte Formel."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "etg-003",
              "frage": "Was besagen die Kirchhoffschen Gesetze (Knoten- und Maschenregel)?",
              "antwort": "Knotenregel (1. Kirchhoff): Die Summe aller zufließenden Ströme ist gleich der Summe aller abfließenden Ströme an einem Knoten (ΣI_zu = ΣI_ab). Maschenregel (2. Kirchhoff): In einem geschlossenen Stromkreis (Masche) ist die Summe aller Spannungen gleich null (ΣU = 0). Grundlage der Schaltungsanalyse.",
              "stichworte": ["Knotenregel", "Maschenregel", "Kirchhoff", "Stromknoten", "Umlaufspannung"],
              "falschantworten": ["Die Knotenregel gilt für Spannungen, die Maschenregel für Ströme.", "Bei der Maschenregel muss die Summe der Ströme null ergeben.", "Kirchhoffs Gesetze gelten nur für Gleichstromkreise."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "etg-004",
              "frage": "Wie verhält sich der Gesamtwiderstand bei Reihen- und Parallelschaltung?",
              "antwort": "Reihenschaltung: R_ges = R1 + R2 + R3 … (Widerstände addieren sich). Strom ist überall gleich, Spannungen teilen sich auf. Parallelschaltung: 1/R_ges = 1/R1 + 1/R2 + … (Kehrwerte addieren sich). Spannung ist überall gleich, Ströme teilen sich auf. Gesamtwiderstand ist immer kleiner als der kleinste Einzelwiderstand.",
              "stichworte": ["Reihenschaltung", "Parallelschaltung", "Gesamtwiderstand", "Spannungsteiler", "Stromteiler"],
              "falschantworten": ["Bei Parallelschaltung addieren sich die Widerstände direkt.", "Bei Reihenschaltung ist der Gesamtwiderstand kleiner als der kleinste Widerstand.", "Bei Parallelschaltung ist die Spannung an jedem Widerstand unterschiedlich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "etg-005",
              "frage": "Wie berechnet man elektrische Leistung und Energie?",
              "antwort": "Leistung: P = U × I [Watt, W] = U²/R = I² × R. Energie: W = P × t [Wattsekunde, Ws] oder [Kilowattstunde, kWh]. 1 kWh = 3.600.000 Ws. Wirkungsgrad: η = P_ab / P_zu (immer ≤ 1). Beispiel: 1.000 W × 2 h = 2 kWh (Energieverbrauch).",
              "stichworte": ["Leistung", "Energie", "P = U × I", "kWh", "Wirkungsgrad"],
              "falschantworten": ["P = U + I ist die Leistungsformel.", "1 kWh = 1.000 Ws.", "Energie und Leistung sind dasselbe."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "etg-006",
              "frage": "Was ist der Unterschied zwischen Gleich-, Wechsel- und Drehstrom?",
              "antwort": "Gleichstrom (DC): konstante Spannung und Richtung (z. B. Batterie, PV). Wechselstrom (AC): Spannung und Richtung wechseln sinusförmig mit Frequenz f = 50 Hz in Deutschland. Effektivwert: U_eff = U_max / √2 ≈ 0,707 × U_max. Drehstrom (Dreiphasenwechselstrom): drei um 120° versetzte Wechselspannungen. Verkettete Spannung: U_verk = √3 × U_str ≈ 1,73 × U_str (400 V = 1,73 × 230 V).",
              "stichworte": ["Gleichstrom", "Wechselstrom", "Drehstrom", "Effektivwert", "50 Hz", "verkettete Spannung"],
              "falschantworten": ["Drehstrom besteht aus zwei Phasen, die um 90° versetzt sind.", "Der Effektivwert des Wechselstroms ist gleich dem Scheitelwert.", "400 V Drehstrom und 230 V Wechselstrom haben keinen mathematischen Zusammenhang."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "etg-007",
              "frage": "Was sind Wirkleistung (P), Blindleistung (Q) und Scheinleistung (S)?",
              "antwort": "Wirkleistung P [W]: tatsächlich nutzbare Leistung (erzeugt Wärme, Licht, Arbeit). Blindleistung Q [var]: wird zwischen Erzeuger und Verbraucher hin- und herpendelt (bei Spulen/Kondensatoren), kein Energieverbrauch. Scheinleistung S [VA]: Vektorielle Summe: S² = P² + Q². Leistungsfaktor: cos φ = P/S (idealerweise = 1). Transformatoren und Zählermessungen beziehen sich auf S.",
              "stichworte": ["Wirkleistung", "Blindleistung", "Scheinleistung", "cos phi", "Leistungsfaktor", "var", "VA"],
              "falschantworten": ["Blindleistung verrichtet nutzbare Arbeit wie Wirkleistung.", "S = P + Q (einfache Addition, kein Pythagoras).", "Leistungsfaktor cos φ sollte möglichst nahe null sein."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "etg-008",
              "frage": "Was ist ein Kondensator und wie verhält er sich im Gleich- und Wechselstromkreis?",
              "antwort": "Ein Kondensator speichert elektrische Energie in einem elektrischen Feld zwischen zwei Platten. Kapazität C [Farad, F]. Gleichstrom: Nach dem Aufladen fließt kein Strom (Kondensator sperrt DC). Wechselstrom: Kondensator lässt Wechselstrom passieren – sein Widerstand (kapazitiver Blindwiderstand) nimmt mit steigender Frequenz ab: X_C = 1 / (2π × f × C).",
              "stichworte": ["Kondensator", "Kapazität", "Farad", "kapazitiver Blindwiderstand", "Gleichstrom sperren"],
              "falschantworten": ["Kondensatoren leiten Gleichstrom, sperren aber Wechselstrom.", "Mit höherer Frequenz steigt der kapazitive Blindwiderstand.", "Die Einheit der Kapazität ist Ohm."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "etg-009",
              "frage": "Was ist eine Spule (Induktivität) und wie verhält sie sich im Gleich- und Wechselstromkreis?",
              "antwort": "Eine Spule speichert Energie in einem Magnetfeld. Induktivität L [Henry, H]. Gleichstrom: Spule ist nach dem Einschalten nur ein ohmscher Widerstand (Drahtwicklung). Wechselstrom: Spule erzeugt Gegenspannung (Induktion) – induktiver Blindwiderstand wächst mit Frequenz: X_L = 2π × f × L. Spulen werden in Transformatoren, Drosseln, Motoren eingesetzt.",
              "stichworte": ["Spule", "Induktivität", "Henry", "induktiver Blindwiderstand", "Magnetfeld", "Selbstinduktion"],
              "falschantworten": ["Spulen leiten Wechselstrom besser als Gleichstrom.", "Mit steigender Frequenz sinkt der induktive Blindwiderstand.", "Die Einheit der Induktivität ist Farad."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "etg-010",
              "frage": "Was sind Halbleiter und welche Funktion hat eine Diode?",
              "antwort": "Halbleiter (z. B. Silizium, Germanium) leiten Strom besser als Isolatoren, schlechter als Metalle – ihre Leitfähigkeit ist durch Dotierung steuerbar. Diode: erlaubt Stromfluss nur in einer Richtung (Durchlassspannung ca. 0,7 V bei Si). Verwendung: Gleichrichter (AC → DC), Verpolungsschutz, LED (Light Emitting Diode, gibt Licht ab).",
              "stichworte": ["Halbleiter", "Diode", "Silizium", "Durchlassspannung", "Gleichrichter", "LED"],
              "falschantworten": ["Dioden leiten Strom in beide Richtungen gleich gut.", "LED steht für Low Energy Diode.", "Silizium ist ein Metall und hat gute elektrische Leitfähigkeit."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "etg-messen",
          "name": "Messtechnik & Messverfahren",
          "karten": [
            {
              "id": "mes-001",
              "frage": "Wie misst man Spannung, Strom und Widerstand mit dem Multimeter korrekt?",
              "antwort": "Spannung (Voltmeter): parallel zum Verbraucher schalten, hoher Innenwiderstand (belastet Schaltung kaum). Strom (Amperemeter): in Reihe in den Stromkreis schalten, niedriger Innenwiderstand. Widerstand: Bauteil spannungslos auslöten, dann messen. Niemals Strom oder Widerstand an spannungsführenden Leitungen messen → Kurzschluss-/Messfehler-Gefahr!",
              "stichworte": ["Multimeter", "Voltmeter", "Amperemeter", "Parallelschaltung", "Reihenschaltung", "Innenwiderstand"],
              "falschantworten": ["Amperemeter wird parallel zum Verbraucher geschaltet.", "Spannung wird in Reihe gemessen.", "Widerstand kann direkt im eingeschalteten Zustand gemessen werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mes-002",
              "frage": "Was ist ein Oszilloskop und welche Größen kann man damit messen?",
              "antwort": "Ein Oszilloskop stellt elektrische Signale zeitabhängig als Kurve dar (X-Achse: Zeit, Y-Achse: Spannung). Messbar: Scheitelspannung U_max, Periodendauer T → Frequenz f = 1/T, Phasenverschiebung zwischen zwei Signalen, Signalform (Sinus, Rechteck, Dreieck). Wichtige Einstellungen: Zeitbasis (ms/div), Verstärkung (V/div).",
              "stichworte": ["Oszilloskop", "Zeitbasis", "Periodendauer", "Frequenz", "Scheitelspannung", "Phasenverschiebung"],
              "falschantworten": ["Ein Oszilloskop misst nur Gleichspannungen.", "Die X-Achse des Oszilloskops zeigt die Spannung.", "Frequenz = T (Periodendauer), keine Division nötig."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mes-003",
              "frage": "Was ist Isolationswiderstandsmessung und wann muss sie durchgeführt werden?",
              "antwort": "Die Isolationswiderstandsmessung prüft, ob die Isolierung elektrischer Leitungen intakt ist. Messgerät: Isolationsmessgerät (z. B. Fluke), Messspannung: 500 V DC (bei 230/400-V-Anlagen). Mindest-Isolationswiderstand nach VDE 0100: ≥ 1 MΩ (Neuanlagen), ≥ 0,5 MΩ (Bestandsanlagen). Durchführung: Anlage spannungslos, alle Verbraucher abklemmen oder Schalter schließen.",
              "stichworte": ["Isolationswiderstand", "VDE 0100", "1 MΩ", "500 V DC", "Prüfung", "Fehlerstrom"],
              "falschantworten": ["Isolationsmessung erfolgt bei eingeschalteter Anlage mit 230 V.", "Mindest-Isolationswiderstand nach VDE 0100 beträgt 1 kΩ.", "Isolationsmessung wird mit dem Multimeter im Widerstandsbereich durchgeführt."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "mes-004",
              "frage": "Was ist die Schleifenimpedanzmessung und warum ist sie wichtig?",
              "antwort": "Die Schleifenimpedanzmessung prüft, ob bei einem Kurzschluss oder Erdschluss genug Strom fließt, um die Schutzeinrichtung (Sicherung, LS) sicher auszulösen. Gemessen wird die Impedanz des Fehlerstromkreises (Phase → Erde → Rückleiter). Aus Z_S = U_0 / I_k kann der Kurzschlussstrom berechnet werden. Anforderung: I_k muss mindestens das 5-fache (typ.) des Nennstroms der Sicherung betragen.",
              "stichworte": ["Schleifenimpedanz", "Kurzschlussstrom", "Schutzeinrichtung", "VDE 0100 Teil 600", "Abschaltbedingung"],
              "falschantworten": ["Die Schleifenimpedanzmessung prüft die Qualität der Leitungsisolierung.", "Eine höhere Schleifenimpedanz ist immer besser für die Schutzwirkung.", "Schleifenimpedanz wird nur in Industrie, nicht in Wohngebäuden gemessen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "mes-005",
              "frage": "Was ist eine Durchgangsprüfung und wann wird sie eingesetzt?",
              "antwort": "Die Durchgangsprüfung prüft die elektrische Verbindung eines Leiters – insbesondere von Schutz- und Potenzialausgleichsleitern (PE, PEN). Durchführung: Messgerät legt Prüfspannung an (typisch 4–24 V), misst Widerstand des Leiters. Erwarteter Widerstand: möglichst niedrig (< 1 Ω für kurze Leitungen). Pflicht nach VDE 0100 Teil 600 für alle PE-Leiter. Erkennt: Unterbrechungen, schlechte Verbindungen (Klemmen), Leitungsbrüche.",
              "antwort_mc": "Prüft elektrische Verbindung von PE/PEN-Leitern per Widerstandsmessung. Pflicht nach VDE 0100 Teil 600.",
              "stichworte": ["Durchgangsprüfung", "PE-Leiter", "VDE 0100 Teil 600", "Widerstand", "Potenzialausgleich"],
              "falschantworten": ["Die Durchgangsprüfung prüft die Isolierung zwischen Leitern.", "PE-Leiter müssen nicht geprüft werden.", "Hoher Widerstand beim PE-Leiter ist unkritisch."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "normen",
      "name": "Normen & Schutzmaßnahmen",
      "themen": [
        {
          "id": "normen-schutz",
          "name": "VDE-Normen & Schutzklassen",
          "karten": [
            {
              "id": "vde-001",
              "frage": "Was regelt die DIN VDE 0100 und welche Teile sind besonders wichtig?",
              "antwort": "DIN VDE 0100 regelt die Errichtung von Niederspannungsanlagen bis 1.000 V AC / 1.500 V DC. Wichtige Teile: Teil 410 (Schutz gegen elektrischen Schlag), Teil 430 (Schutz bei Überstrom), Teil 520 (Auswahl und Errichtung elektrischer Betriebsmittel – Leitungen), Teil 600 (Erstprüfung – Messungen und Prüfungen nach der Errichtung), Teil 710 (medizinische Bereiche), Teil 718 (öffentliche Gebäude).",
              "stichworte": ["VDE 0100", "Niederspannung", "Teil 410", "Teil 600", "Erstprüfung", "Schutz"],
              "falschantworten": ["VDE 0100 gilt nur für Hochspannungsanlagen über 10 kV.", "VDE 0100 Teil 600 regelt die Auswahl von Leitungen.", "VDE 0100 ist freiwillig – es gibt keine Pflicht zur Einhaltung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vde-002",
              "frage": "Was sind die Schutzklassen I, II und III und welche Geräte gehören dazu?",
              "antwort": "Schutzklasse I: Schutz durch Schutzleiter (PE) – Gehäuse geerdet, bei Fehler fließt Fehlerstrom über PE (z. B. Waschmaschine, Herd). Schutzklasse II: doppelte oder verstärkte Isolierung – kein Schutzleiter nötig (z. B. Bohrmaschine, Elektrorasenmäher). Schutzklasse III: Betrieb nur mit Schutzkleinspannung SELV (≤ 50 V AC / 120 V DC) – kein Erdungsanschluss (z. B. LED-Leuchtmittel, Spielzeug).",
              "stichworte": ["Schutzklasse I", "Schutzklasse II", "Schutzklasse III", "Schutzleiter", "SELV", "doppelte Isolierung"],
              "falschantworten": ["Schutzklasse II benötigt immer einen Schutzleiter.", "Schutzklasse III erlaubt Betrieb mit 230 V.", "Geräte der Schutzklasse I haben keine Erdung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vde-003",
              "frage": "Was bedeuten die IP-Schutzarten (IP-Code) und wie liest man sie?",
              "antwort": "IP (International Protection) nach DIN EN 60529 beschreibt Schutz gegen Fremdkörper/Wasser. Format: IP XY – X = Schutz gegen Berührung und Fremdkörper (0–6), Y = Schutz gegen Wasser (0–9K). Beispiele: IP20 = Schutz gegen Finger, kein Wasserschutz (Innenräume). IP44 = gegen Fremdkörper ≥ 1 mm + Spritzwasser (Außen). IP67 = staubdicht + kurzzeitig tauchfest (1 m, 30 min). IP68 = staubdicht + dauerhaft tauchfest.",
              "stichworte": ["IP-Schutzart", "IP44", "IP67", "IP68", "Fremdkörperschutz", "Wasserschutz"],
              "falschantworten": ["IP steht für Isolation Protection.", "IP20 bedeutet vollständiger Schutz gegen Staub und Wasser.", "Je kleiner die IP-Zahl, desto besser der Schutz."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vde-004",
              "frage": "Was sind die Netzformen TN, TT und IT und wie unterscheiden sie sich?",
              "antwort": "TN-Netz: Sternpunkt des Transformators geerdet, Schutzleiter PE (oder PEN) direkt mit dem Sternpunkt verbunden. Unterarten: TN-C (PE und N kombiniert als PEN), TN-S (PE und N getrennt). TT-Netz: Sternpunkt geerdet, Schutzleiter zum Verbraucher über separate Erdelektrode – typisch im Freizeitbereich/Camping. IT-Netz: Sternpunkt nicht geerdet oder hochohmig geerdet – bei erstem Fehler kein Abschalten (z. B. OP-Säle, Bergwerke).",
              "stichworte": ["TN-Netz", "TT-Netz", "IT-Netz", "PEN-Leiter", "Sternpunkt", "Schutzleiter"],
              "falschantworten": ["Im TT-Netz ist der PE mit dem Sternpunkt des Transformators verbunden.", "Im IT-Netz schaltet die Anlage beim ersten Fehler sofort ab.", "TN-C und TN-S bedeuten dasselbe."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "vde-005",
              "frage": "Was sind die Schutzmaßnahmen gegen elektrischen Schlag nach VDE 0100 Teil 410?",
              "antwort": "Basisschutz (Schutz im Fehlerfall): verhindert direktes Berühren aktiver Teile – durch Isolierung, Abdeckung, Gehäuse. Fehlerschutz (Schutz bei indirektem Berühren): verhindert gefährliche Berührungsspannung bei Isolationsfehler – durch automatische Abschaltung (FI, LS), Schutzkleinspannung (SELV/PELV), Schutzisolierung (SK II), nicht leitende Umgebung. Zusätzlicher Schutz: RCD mit ≤ 30 mA in Feuchträumen, Baustellen, Außenbereichen.",
              "stichworte": ["Basisschutz", "Fehlerschutz", "VDE 0100 Teil 410", "SELV", "PELV", "RCD", "automatische Abschaltung"],
              "falschantworten": ["Basisschutz schützt vor indirektem Berühren.", "Fehlerschutz verhindert direktes Berühren aktiver Teile.", "RCD mit 30 mA ist nur in Industrieanlagen vorgeschrieben."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "vde-006",
              "frage": "Welche Prüfungen sind nach VDE 0100 Teil 600 (Erstprüfung) vorgeschrieben?",
              "antwort": "1. Sichtprüfung: Vollständigkeit, Zustand, Beschriftung. 2. Messen und Erproben: a) Durchgängigkeit der Schutz- und Potenzialausgleichsleiter, b) Isolationswiderstand (≥ 1 MΩ bei 500 V), c) Schutz durch SELV/PELV – Trennung prüfen, d) Schleifenimpedanz (Abschaltbedingung erfüllt?), e) Auslöseprüfung FI-Schutzschalter, f) Drehfeldprüfung bei Drehstromanlagen. Ergebnis wird im Prüfprotokoll dokumentiert.",
              "stichworte": ["VDE 0100 Teil 600", "Erstprüfung", "Sichtprüfung", "Isolationswiderstand", "Schleifenimpedanz", "FI-Auslösung"],
              "falschantworten": ["VDE 0100 Teil 600 gilt nur für Bestandsanlagen, nicht für Neuanlagen.", "Isolationswiderstand muss mindestens 100 kΩ betragen.", "Sichtprüfung ist optional und nicht vorgeschrieben."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "normen-arbeitssicherheit",
          "name": "Arbeitssicherheit & DGUV-Vorschriften",
          "karten": [
            {
              "id": "as-001",
              "frage": "Was regelt die DGUV Vorschrift 3 (früher BGV A3)?",
              "antwort": "DGUV Vorschrift 3 regelt die Sicherheit beim Betrieb elektrischer Anlagen und Betriebsmittel. Kernpflichten: Elektrische Anlagen und Betriebsmittel müssen von Elektrofachkräften errichtet, geändert und instand gehalten werden. Betriebsmittel sind regelmäßig auf Sicherheit zu prüfen (ortsveränderlich: alle 6–12 Monate, ortsfest: alle 4 Jahre). Prüfung ist zu dokumentieren.",
              "stichworte": ["DGUV Vorschrift 3", "BGV A3", "Elektrofachkraft", "Prüffristen", "ortsveränderlich", "ortsfest"],
              "falschantworten": ["DGUV Vorschrift 3 gilt nur für Hochspannungsanlagen.", "Elektrogeräte müssen alle 10 Jahre geprüft werden.", "Elektrifachkraft und Laie dürfen gleiche elektrische Arbeiten durchführen."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "as-002",
              "frage": "Was sind die 5 Sicherheitsregeln (Fünf Sicherheitsregeln) beim Arbeiten an elektrischen Anlagen?",
              "antwort": "1. Freischalten (alle Pole abschalten). 2. Gegen Wiedereinschalten sichern (Schloss/Schild). 3. Spannungsfreiheit feststellen (mit geeignetem Messgerät an allen Polen). 4. Erden und Kurzschließen (bei Hochspannung, ab 1 kV). 5. Benachbarte unter Spannung stehende Teile abdecken oder abschranken. Reihenfolge muss eingehalten werden!",
              "stichworte": ["5 Sicherheitsregeln", "Freischalten", "Spannungsfreiheit", "Erden", "Kurzschließen", "Wiedereinschalten"],
              "falschantworten": ["Die Reihenfolge der 5 Sicherheitsregeln ist beliebig.", "Spannungsfreiheit kann man erspüren, kein Messgerät nötig.", "Erden und Kurzschließen ist bei 230 V-Anlagen immer erforderlich."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "as-003",
              "frage": "Was ist eine Elektrofachkraft und was darf sie im Gegensatz zu einer elektrotechnisch unterwiesenen Person?",
              "antwort": "Elektrofachkraft (EFK): hat durch Ausbildung, Kenntnisse und Erfahrung Fähigkeiten, elektrische Arbeit sicher zu beurteilen und Gefahren zu erkennen. Darf alle Arbeiten an elektrischen Anlagen durchführen. Elektrotechnisch unterwiesene Person (EuP): wurde in einem abgegrenzten Aufgabenbereich unterwiesen – darf nur einfache Tätigkeiten unter Aufsicht einer EFK ausführen (z. B. Lampenwechsel, Prüfungen nach Anweisung). Laie: darf keine elektrischen Arbeiten durchführen.",
              "stichworte": ["Elektrofachkraft", "EFK", "EuP", "elektrotechnisch unterwiesene Person", "Qualifikation"],
              "falschantworten": ["Eine EuP darf alle Arbeiten an elektrischen Anlagen selbstständig ausführen.", "Elektrofachkraft und EuP haben dieselben Befugnisse.", "Laien dürfen einfache Elektroarbeiten ohne Unterweisung durchführen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "as-004",
              "frage": "Welche Wirkungen hat elektrischer Strom auf den menschlichen Körper?",
              "antwort": "Körperwiderstand: ca. 1.000–2.000 Ω (trocken), < 500 Ω (nass/feucht). Stromwirkungen (AC 50 Hz): < 1 mA: kaum wahrnehmbar. 1–10 mA: Kribbeln, loslassen möglich. 10–25 mA: Muskelkrämpfe, Loslassen kaum möglich. 25–80 mA: Herzkammerflimmern möglich. > 80 mA: sicherer Tod. Wechselstrom ist gefährlicher als Gleichstrom gleicher Stärke (Herzflimmergrenze niedriger). Schutzgrenze: 30 mA (FI-Auslösestrom).",
              "stichworte": ["Körperwiderstand", "Herzkammerflimmern", "30 mA", "Muskelkrämpfe", "Wechselstrom", "Schutzgrenze"],
              "falschantworten": ["Gleichstrom ist gefährlicher als Wechselstrom gleicher Stärke.", "Herzkammerflimmern tritt erst ab 500 mA auf.", "Der Körperwiderstand ist immer konstant, unabhängig von Feuchtigkeit."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "as-005",
              "frage": "Was ist eine Gefährdungsbeurteilung und wer ist dafür verantwortlich?",
              "antwort": "Die Gefährdungsbeurteilung (§ 5 ArbSchG) ist eine systematische Analyse aller Gefährdungen am Arbeitsplatz. Verantwortlich: Arbeitgeber (kann Führungskräfte/Fachkraft für Arbeitssicherheit beauftragen). Ablauf: 1. Arbeitsbereiche ermitteln, 2. Gefährdungen identifizieren, 3. Risiko bewerten, 4. Maßnahmen ableiten (STOP-Prinzip), 5. Umsetzung, 6. Wirksamkeitskontrolle, 7. Dokumentation. STOP-Prinzip: Substitution → Technisch → Organisatorisch → Persönlich (PSA).",
              "antwort_mc": "Gefährdungsbeurteilung (§ 5 ArbSchG): Arbeitgeber identifiziert und bewertet Risiken, leitet Maßnahmen nach STOP-Prinzip ab.",
              "stichworte": ["Gefährdungsbeurteilung", "ArbSchG", "STOP-Prinzip", "PSA", "Arbeitgeber", "Dokumentation"],
              "falschantworten": ["Die Gefährdungsbeurteilung ist freiwillig und gesetzlich nicht vorgeschrieben.", "STOP-Prinzip: erst PSA, dann technische Maßnahmen.", "Für die Gefährdungsbeurteilung ist die DGUV zuständig, nicht der Arbeitgeber."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "mae",
      "name": "MAE",
      "themen": [
        {
          "id": "mae-motoren",
          "name": "Elektromotoren & Antriebe",
          "karten": [
            {
              "id": "mae-001",
              "frage": "Wie funktioniert ein Drehstrom-Asynchronmotor?",
              "antwort": "Im Ständer (Stator) erzeugen drei um 120° versetzte Drehstromwicklungen ein rotierendes Magnetfeld (Drehfeld) mit Synchrondrehzahl n_s = 60 × f / p (p = Polpaarzahl, f = 50 Hz). Dieses Drehfeld induziert Ströme im Kurzschlussläufer (Rotor). Die daraus entstehende Kraft dreht den Rotor – jedoch immer mit etwas geringerer Drehzahl als das Drehfeld (Schlupf s). Deshalb: 'Asynchron' (= nicht synchron).",
              "stichworte": ["Asynchronmotor", "Drehfeld", "Schlupf", "Ständer", "Läufer", "Synchrondrehzahl"],
              "falschantworten": ["Ein Asynchronmotor dreht mit exakt der Synchrondrehzahl.", "Das Drehfeld entsteht im Rotor, nicht im Stator.", "Drehstrom-Asynchronmotoren können nicht umgepolt werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mae-002",
              "frage": "Wie berechnet man die Synchrondrehzahl und was ist der Schlupf?",
              "antwort": "Synchrondrehzahl: n_s = (60 × f) / p [U/min]. Bei 2-poligem Motor (p=1): n_s = 60 × 50 / 1 = 3.000 U/min. Bei 4-poligem (p=2): n_s = 1.500 U/min. Schlupf: s = (n_s − n) / n_s. Typisch: 3–8 % im Nennbetrieb. Beispiel: 4-poliger Motor, n = 1.440 U/min: s = (1.500−1.440)/1.500 = 0,04 = 4 %.",
              "stichworte": ["Synchrondrehzahl", "Schlupf", "Polpaarzahl", "50 Hz", "Drehzahl", "n_s"],
              "falschantworten": ["n_s = f × p (ohne den Faktor 60).", "Schlupf = n / n_s (kein Zähler-Minuend).", "Ein 4-poliger Motor hat Synchrondrehzahl 3.000 U/min."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "mae-003",
              "frage": "Was ist ein Synchronmotor und was unterscheidet ihn vom Asynchronmotor?",
              "antwort": "Ein Synchronmotor dreht exakt mit der Synchrondrehzahl des Drehfeldes – kein Schlupf. Der Rotor besteht aus Permanentmagneten oder einer erregten Wicklung, die sich exakt mit dem Drehfeld synchronisiert. Vorteile: konstante Drehzahl unabhängig von Last, kann kapazitive Blindleistung liefern (Synchronkompensator). Nachteil: kein Selbstanlauf (braucht Anlaufhilfe oder Frequenzumrichter).",
              "stichworte": ["Synchronmotor", "kein Schlupf", "Permanentmagnet", "konstante Drehzahl", "Blindleistung"],
              "falschantworten": ["Synchronmotoren starten problemlos ohne Anlaufhilfe.", "Synchronmotoren haben einen Schlupf von ca. 5 %.", "Synchronmotoren drehen langsamer als das Drehfeld."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mae-004",
              "frage": "Was ist ein Transformator und wie funktioniert er?",
              "antwort": "Ein Transformator überträgt elektrische Energie berührungslos zwischen zwei Spulen (Primär- und Sekundärwicklung) über ein gemeinsames Magnetfeld im Eisenkern. Übersetzungsverhältnis: U1/U2 = N1/N2 = I2/I1 (Strom kehrt sich um!). Ideal: P1 = P2 (verlustlos). Anwendung: Spannungstransformation (Netz ↔ Verbraucher), Potenzialtrennnung, Impedanzanpassung.",
              "stichworte": ["Transformator", "Übersetzungsverhältnis", "Primärwicklung", "Sekundärwicklung", "Windungszahl"],
              "falschantworten": ["Transformatoren funktionieren mit Gleichstrom genauso gut wie mit Wechselstrom.", "U1/U2 = I1/I2 (Strom verhält sich gleich wie Spannung).", "Transformatoren erzeugen elektrische Energie aus Wärme."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mae-005",
              "frage": "Was sind Kenngrößen auf dem Motorleistungsschild und was bedeuten sie?",
              "antwort": "Nennspannung U_N [V]: Spannung für den Nennbetrieb (z. B. 400 V Δ / 690 V Y). Nennstrom I_N [A]: Strom im Nennbetrieb. Nennleistung P_N [kW]: mechanische Abgabeleistung. Nennfrequenz f_N [Hz]: meist 50 Hz. Nenndrehzahl n_N [U/min]: z. B. 1.450 U/min (4-polig). Schutzart IP: z. B. IP55. Isolationsklasse (F = 155 °C, B = 130 °C). cos φ: Leistungsfaktor.",
              "stichworte": ["Motorleistungsschild", "Nennspannung", "Nennstrom", "Nennleistung", "Isolationsklasse", "cos φ"],
              "falschantworten": ["Die Nennleistung auf dem Schild ist die aufgenommene elektrische Leistung.", "cos φ auf dem Leistungsschild bezeichnet den Wirkungsgrad des Motors.", "Isolationsklasse F bedeutet maximale Wicklungstemperatur 200 °C."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "mae-006",
              "frage": "Was ist Motorschutz und welche Maßnahmen gibt es?",
              "antwort": "Motorschutz verhindert Schäden durch Überlast, Kurzschluss und Phasenfehler. Maßnahmen: 1. Motorschutzschalter (MSS): Überlast + Kurzschluss + Phasenausfall. 2. Thermistor (PTC) in Motorwicklung: misst Wicklungstemperatur direkt. 3. Frequenzumrichter (FU): überwacht Strom, Spannung, Temperatur elektronisch. 4. FI-Schutzschalter: Schutz vor Ableitströmen. Motorschutz = MSS + FI + FU kombiniert für optimalen Schutz.",
              "stichworte": ["Motorschutz", "Motorschutzschalter", "Thermistor", "PTC", "Frequenzumrichter", "Phasenausfall"],
              "falschantworten": ["Ein Leitungsschutzschalter bietet ausreichend Motorschutz.", "Thermistoren messen Strom, nicht Temperatur.", "FI-Schutzschalter schützt Motoren vor Überlast."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "mae-energie",
          "name": "Energieversorgung & Netztechnik",
          "karten": [
            {
              "id": "en-001",
              "frage": "Wie ist das öffentliche Stromnetz aufgebaut (Spannungsebenen)?",
              "antwort": "Höchstspannungsnetz: 380/220 kV (Übertragung über große Entfernungen, Verbundnetz). Hochspannungsnetz: 110 kV (regionale Verteilung). Mittelspannungsnetz: 10–30 kV (städtische Verteilung, Industrieeinspeisung). Niederspannungsnetz: 400 V / 230 V (Haushalte, Gewerbe). Transformatoren wandeln zwischen den Ebenen um. Erzeugung: Kraft-, Windkraft-, Solar-werke meist am Hoch- oder Mittelspannungsnetz.",
              "stichworte": ["Stromnetz", "380 kV", "110 kV", "Mittelspannung", "Niederspannung", "Transformator"],
              "falschantworten": ["Haushalte werden direkt über das 110-kV-Netz versorgt.", "Das Niederspannungsnetz hat 10 kV.", "Windkraftanlagen speisen immer ins 380-kV-Netz ein."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "en-002",
              "frage": "Was ist ein Blindleistungskompensation und warum ist sie wichtig?",
              "antwort": "Induktive Verbraucher (Motoren, Transformatoren) verursachen kapazitive Blindleistung im Netz. Blindleistung belastet Leitungen, ohne Arbeit zu verrichten → höhere Ströme, mehr Verluste, Spannungsabfall. Kompensation: Kondensatoren erzeugen kapazitive Blindleistung, die die induktive kompensiert → cos φ steigt gegen 1. Vorteil: geringere Netzbelastung, weniger Stromkosten (Blindleistung wird berechnet). Schaltungsarten: Einzel-, Gruppen- oder Zentralkompensation.",
              "stichworte": ["Blindleistungskompensation", "Kondensator", "cos φ", "induktiv", "kapazitiv", "Netzbelastung"],
              "falschantworten": ["Blindleistungskompensation erhöht den Energieverbrauch.", "Kondensatoren erzeugen induktive Blindleistung.", "Kompensation ist nur bei Gleichstromanlagen sinnvoll."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "en-003",
              "frage": "Was ist eine unterbrechungsfreie Stromversorgung (USV) und welche Arten gibt es?",
              "antwort": "Eine USV sichert Verbraucher bei Netzausfall oder -störung. Arten: 1. Offline-USV (VFD): schaltet bei Ausfall auf Batterie um (5–20 ms Umschaltzeit) – einfach, günstig. 2. Line-interactive (VI): regelt Spannung, bei Ausfall sofort auf Batterie – für IT-Geräte. 3. Online-USV (VFI): Verbraucher läuft immer über Wechselrichter – keine Umschaltzeit, beste Qualität, teuer (z. B. Rechenzentrum, OP). Aufgaben: Überbrückung, Spannungsregulierung, Filterung.",
              "stichworte": ["USV", "unterbrechungsfreie Stromversorgung", "Offline-USV", "Online-USV", "Batterie", "Umschaltzeit"],
              "falschantworten": ["Alle USV-Typen haben keine Umschaltzeit.", "Online-USV ist am günstigsten und einfachsten.", "USV schützt nur vor Spannungsspitzen, nicht vor Netzausfall."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "en-004",
              "frage": "Was ist ein Transformator und wie funktioniert er?",
              "antwort": "Ein Transformator wandelt Wechselspannungen durch elektromagnetische Induktion um. Aufbau: Primär- und Sekundärwicklung auf gemeinsamem Eisenkern. Funktionsprinzip: Wechselstrom in Primärwicklung → wechselndes Magnetfeld → induziert Spannung in Sekundärwicklung. Übersetzungsverhältnis: U1/U2 = N1/N2 (N = Windungszahl). Verlustfreier Trafo: U1 × I1 = U2 × I2 (Scheinleistung konstant). Wirkungsgrad realer Trafos: 95–99 %.",
              "antwort_mc": "Wandelt AC-Spannung per Induktion um: U1/U2 = N1/N2, Leistung bleibt (annähernd) konstant.",
              "stichworte": ["Transformator", "Induktion", "Übersetzungsverhältnis", "Windungszahl", "Wirkungsgrad"],
              "falschantworten": ["Transformatoren funktionieren auch mit Gleichspannung.", "Beim Transformator bleibt die Spannung konstant, der Strom ändert sich nicht.", "Ein Trafo mit 2:1 Windungsverhältnis verdoppelt die Spannung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "en-005",
              "frage": "Was ist ein Verteilertrafo (Ortsnetztrafo) und welche Aufgabe hat er?",
              "antwort": "Ein Ortsnetztrafo (Verteilertrafo) wandelt die Mittelspannung (10–20 kV) in Niederspannung (400 V / 230 V) für die örtliche Versorgung um. Einbauort: Trafostation (in Gebäude oder Freiluft-Kompaktstation). Leistung: typisch 100–1.000 kVA. Schaltgruppe: Dyn5 (häufigste Schaltgruppe in DE) – Primärseite Dreieck (D), Sekundärseite Stern mit Neutralleiter (yn), 150° Phasenversatz (5). Der Neutralleiter auf der Sekundärseite ermöglicht 230 V Einphasenstrom für Haushalte.",
              "antwort_mc": "Wandelt 10–20 kV → 400 V/230 V. Schaltgruppe Dyn5: Dreieck primär, Stern sekundär mit Neutralleiter.",
              "stichworte": ["Ortsnetztrafo", "Verteilertrafo", "Mittelspannung", "Dyn5", "Trafostation", "Neutralleiter"],
              "falschantworten": ["Ortsnetztrafo wandelt 380 kV direkt auf 230 V um.", "Die Schaltgruppe Dyn5 hat keinen Neutralleiter auf der Sekundärseite.", "Ortsnetzstationen sind immer außen im Freiluft-Bereich."],
              "schwierigkeit": "schwer"
            }
          ]
        }
      ]
    },
    {
      "id": "sps",
      "name": "SPS – Steuerungstechnik",
      "themen": [
        {
          "id": "sps-grundlagen",
          "name": "SPS Grundlagen & Aufbau",
          "karten": [
            {
              "id": "sps-001",
              "frage": "Was ist eine SPS (Speicherprogrammierbare Steuerung) und wie ist sie aufgebaut?",
              "antwort": "Eine SPS ist ein industrieller Computer zur Automatisierung von Maschinen und Anlagen. Aufbau: CPU (Prozessor, führt Programm aus), Eingangsbaugruppen (digitale/analoge Signale einlesen: Taster, Sensoren), Ausgangsbaugruppen (Aktoren ansteuern: Schütze, Ventile, Leuchten), Netzteil, Bussystem (verbindet Baugruppen), Programmierschnittstelle. Programme werden im nichtflüchtigen Speicher (Flash/EEPROM) gespeichert.",
              "stichworte": ["SPS", "CPU", "Eingangsbaugruppe", "Ausgangsbaugruppe", "Netzteil", "Programmspeicher"],
              "falschantworten": ["Eine SPS hat keine CPU – sie arbeitet mit analogen Schaltkreisen.", "Eingangsbaugruppen steuern Aktoren an.", "Das Programm einer SPS geht beim Stromausfall verloren."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "sps-002",
              "frage": "Wie arbeitet eine SPS im zyklischen Programmbetrieb?",
              "antwort": "Eine SPS arbeitet in einem festen Zyklus: 1. Eingänge einlesen (alle digitalen/analogen Eingangssignale in den Prozessabbild der Eingänge schreiben). 2. Programm ausführen (CPU verarbeitet das Programm von oben nach unten). 3. Ausgänge ausgeben (Prozessabbild der Ausgänge auf physische Ausgänge schreiben). Zykluszeit: typisch 1–50 ms. Schnelle Reaktionen brauchen Interrupt-Routinen.",
              "stichworte": ["zyklischer Betrieb", "Prozessabbild", "Eingabe", "Verarbeitung", "Ausgabe", "Zykluszeit"],
              "falschantworten": ["SPS-Programme werden nur einmal ausgeführt, dann wartet die SPS.", "Ausgänge werden direkt während der Programmausführung aktualisiert.", "Die Zykluszeit einer SPS beträgt immer genau 1 ms."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sps-003",
              "frage": "Welche fünf Programmiersprachen sind in der IEC 61131-3 für SPS definiert?",
              "antwort": "1. KOP (Kontaktplan / Ladder Diagram, LD): grafisch, ähnelt Stromlaufplan – für Elektriker gut verständlich. 2. FUP (Funktionsplan / Function Block Diagram, FBD): grafisch, logische Blöcke. 3. AWL (Anweisungsliste / Instruction List, IL): textbasiert, maschinennahe Sprache. 4. ST (Strukturierter Text / Structured Text): hochsprachlich (ähnlich Pascal). 5. AS (Ablaufsprache / Sequential Function Chart, SFC): für sequenzielle Abläufe, Zustandsautomaten.",
              "stichworte": ["IEC 61131-3", "KOP", "FUP", "AWL", "ST", "AS", "Kontaktplan", "Strukturierter Text"],
              "falschantworten": ["IEC 61131-3 definiert nur zwei Programmiersprachen: KOP und ST.", "KOP steht für Kompilierter Objektplan.", "AWL ist eine grafische Programmiersprache."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sps-004",
              "frage": "Was sind digitale und analoge Ein-/Ausgänge bei einer SPS?",
              "antwort": "Digitale Eingänge (DI): 0 oder 1 (z. B. 0 V / 24 V DC) – Taster, Schalter, Endschalter, NAMUR-Sensoren. Digitale Ausgänge (DO): schalten Spannungen – Transistor (DC), Triac (AC), Relais (galvanische Trennung). Analoge Eingänge (AI): messen kontinuierliche Signale – 0–10 V, 4–20 mA (Temperatur, Druck, Füllstand). Analoge Ausgänge (AO): geben kontinuierliche Signale aus – z. B. 0–10 V für Dimmer oder Frequenzumrichter.",
              "stichworte": ["Digitale Eingänge", "Analoge Eingänge", "4–20 mA", "0–10 V", "Transistor", "Relaisausgang"],
              "falschantworten": ["Analoge Eingänge erfassen nur 0 oder 1.", "4–20 mA Signale werden als digitale Eingänge verarbeitet.", "Relaisausgänge können nur Gleichstrom schalten."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sps-005",
              "frage": "Was sind Merker, Timer und Zähler in der SPS-Programmierung?",
              "antwort": "Merker (M): interne Speicherbits der SPS – keine physischen Ein-/Ausgänge, nur im Programm verwendet (z. B. Hilfsbits für Verriegelungen). Timer (T): zeitverzögerte Schaltvorgänge – z. B. Einschaltverzögerung, Ausschaltverzögerung, Impulsgeber. Zähler (C/Z): zählen Impulse (z. B. Produktionsmengen, Taktzähler) – Auf-, Ab- oder Ringzähler. Alle drei bleiben bei Stromausfall verloren (außer bei remanenten Bereichen/EEPROM).",
              "stichworte": ["Merker", "Timer", "Zähler", "Einschaltverzögerung", "Ausschaltverzögerung", "remanent"],
              "falschantworten": ["Merker sind physische Ausgänge der SPS.", "Timer können keine Ausschaltverzögerung realisieren.", "Zähler sind identisch mit Timern, nur mit einem anderen Namen."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sps-006",
              "frage": "Was ist PROFIBUS und was ist PROFINET und wie unterscheiden sie sich?",
              "antwort": "PROFIBUS (Process Field Bus): älteres serielles Feldbussystem (RS-485), bis 12 Mbit/s, max. 126 Teilnehmer, für Sensorik/Aktorik in der Industrie. PROFINET: modernes Industrial-Ethernet-basiertes Protokoll (100 Mbit/s / 1 Gbit/s), Echtzeit-Datenübertragung (RT und IRT), kompatibel mit Standard-Netzwerk-Hardware. PROFINET ersetzt zunehmend PROFIBUS in neuen Anlagen. Beide Standards stammen von Siemens/Profibus International.",
              "stichworte": ["PROFIBUS", "PROFINET", "Feldbus", "Industrial Ethernet", "Echtzeit", "RS-485"],
              "falschantworten": ["PROFIBUS ist schneller als PROFINET.", "PROFINET basiert auf RS-485 Serielltechnik.", "Beide Systeme sind identisch und können nicht unterschieden werden."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "sps-sicherheit",
          "name": "Funktionale Sicherheit & Safety",
          "karten": [
            {
              "id": "saf-001",
              "frage": "Was ist funktionale Sicherheit und welche Norm gilt dafür in der Industrie?",
              "antwort": "Funktionale Sicherheit (IEC 61508 / IEC 62061 / ISO 13849) stellt sicher, dass Sicherheitsfunktionen (z. B. Notaus, Schutztüren) zuverlässig auslösen, wenn sie benötigt werden. Performance Level (PL a–e nach ISO 13849) und Safety Integrity Level (SIL 1–4 nach IEC 62061) beschreiben die Zuverlässigkeit. Anwendung: Not-Halt-Systeme, Lichtvorhänge, Sicherheitsrelais, Schutztürüberwachung.",
              "stichworte": ["Funktionale Sicherheit", "IEC 61508", "ISO 13849", "Performance Level", "SIL", "Not-Halt"],
              "falschantworten": ["Funktionale Sicherheit gilt nur für Hochspannungsanlagen.", "Performance Level wird in Buchstaben SIL1–SIL4 angegeben.", "Not-Halt-Systeme müssen keiner Norm entsprechen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "saf-002",
              "frage": "Was ist der Performance Level (PL) nach ISO 13849 und wie wird er ermittelt?",
              "antwort": "Der Performance Level (PL a–e) beschreibt die Wahrscheinlichkeit eines gefahrbringenden Ausfalls pro Stunde (PFH). PL a: niedrigstes Niveau (z. B. einfache Schutzvorrichtung). PL e: höchstes Niveau (z. B. Roboteranlage mit Menschen im Gefahrenbereich). Ermittlung über Risikobeurteilung: Schwere der Verletzung (S1/S2), Aufenthaltshäufigkeit (F1/F2), Möglichkeit zur Vermeidung (P1/P2) → erforderlicher PL (PLr). Konstruktive Maßnahmen (Kategorie B–4) bestimmen den erreichbaren PL.",
              "antwort_mc": "PL a–e: Wahrscheinlichkeit gefahrbringender Ausfälle. Ermittlung via Risikobeurteilung (Schwere S, Häufigkeit F, Vermeidung P) → PLr.",
              "stichworte": ["Performance Level", "PLr", "ISO 13849", "PFH", "Kategorie", "Risikobeurteilung"],
              "falschantworten": ["PL a ist das höchste Sicherheitsniveau nach ISO 13849.", "PL wird ausschließlich durch die Kabelquerschnitte bestimmt.", "Risikobeurteilung ist für PL nicht notwendig."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "saf-003",
              "frage": "Was ist ein Not-Halt-Taster (Not-Aus) und welche Anforderungen stellt EN ISO 13850?",
              "antwort": "Ein Not-Halt-Taster (Kategorie 0: sofortiger Stromabschnitt; Kategorie 1: kontrolliertes Stoppen, dann Abschalten; Kategorie 2: Stopp, Antrieb bleibt bestromt) stoppt Maschinen in Gefahrensituationen. EN ISO 13850: roter Pilztaster auf gelbem Hintergrund, mechanisch verrastend (muss aktiv entriegelt werden), leicht erreichbar, zweikanalig verdrahtet. Auslösung darf keine neue Gefahr erzeugen.",
              "antwort_mc": "Not-Halt: roter Pilztaster auf Gelb, verrastend, zweikanalig. Kategorien 0 (sofort), 1 (kontrolliert), 2 (mit bestromtem Antrieb).",
              "stichworte": ["Not-Halt", "EN ISO 13850", "Kategorie 0", "Pilztaster", "zweikanalig", "verrastend"],
              "falschantworten": ["Not-Halt-Taster dürfen grün sein, wenn sie beleuchtet sind.", "Ein Not-Halt-Taster muss selbstrückstellend sein.", "Kategorie 0 bedeutet kontrolliertes Stoppen mit Verzögerung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "saf-004",
              "frage": "Was ist ein zweikanaliger Sicherheitsschaltkreis und warum wird er verwendet?",
              "antwort": "Ein zweikanaliger (redundanter) Sicherheitsschaltkreis verwendet zwei unabhängige Pfade vom Sensor (z. B. Not-Halt) zur Auswertungseinheit (Sicherheitsrelais oder Sicherheits-SPS). Ziel: Erkennung von Einkanalfehlern (z. B. Querschluss, Kabelbruch). Beide Kanäle müssen gleichzeitig schalten – bei Abweichung → Fehlererkennung und Abschaltung. Ermöglicht PLd/PLe und SIL 2/3. Querschlussüberwachung durch Pulsausgabe detektiert Kabelfehler.",
              "antwort_mc": "Zwei unabhängige Pfade erkennen Einkanalfehler (Kabelbruch, Querschluss) → Abschaltung. Ermöglicht PLd/e, SIL 2/3.",
              "stichworte": ["zweikanalig", "Redundanz", "Sicherheitsrelais", "Querschluss", "Fehlertoleranz", "PLd", "SIL 2"],
              "falschantworten": ["Zweikanalige Schaltkreise sind nur bei Hochspannungsanlagen vorgeschrieben.", "Beide Kanäle müssen nacheinander schalten, nicht gleichzeitig.", "Ein einzelner Kanal reicht für PLe aus."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "saf-005",
              "frage": "Was ist ein Sicherheitsrelais und welche Aufgabe hat es?",
              "antwort": "Ein Sicherheitsrelais (z. B. Pilz PNOZ, Schmersal) wertet Sicherheitssignale (Not-Halt, Schutztür, Lichtvorhang) aus und schaltet Freigabe-Ausgänge (zwangsgeführte Kontakte). Eigenschaften: zwangsgeführte (mechanisch gekoppelte) Kontakte – Öffner und Schließer können nicht gleichzeitig geschlossen sein. Querschluss- und Verdrahtungsüberwachung. Anlauftest: Maschine startet nur, wenn Schutzeinrichtung beim letzten Anlauf korrekt war. Kategorien B–4 nach ISO 13849 realisierbar.",
              "antwort_mc": "Wertet Sicherheitssignale aus, schaltet Freigabeausgänge mit zwangsgeführten Kontakten und überwacht Verdrahtung.",
              "stichworte": ["Sicherheitsrelais", "zwangsgeführt", "PNOZ", "Anlauftest", "ISO 13849", "Freigabeausgang"],
              "falschantworten": ["Sicherheitsrelais haben normale Schützkontakte ohne Zwangsführung.", "Ein Anlauftest bei Sicherheitsrelais ist optional.", "Sicherheitsrelais können keinen Querschluss erkennen."],
              "schwierigkeit": "schwer"
            }
          ]
        }
      ]
    },
    {
      "id": "sicherheitstechnik",
      "name": "Sicherheitstechnik",
      "themen": [
        {
          "id": "sicherheit-ema",
          "name": "Einbruchmelde- & Zutrittskontrollanlagen",
          "karten": [
            {
              "id": "ema-001",
              "frage": "Was ist eine Einbruchmeldeanlage (EMA) und welche Norm gilt dafür?",
              "antwort": "Eine EMA (Einbruchmeldeanlage) erkennt unbefugtes Eindringen und löst Alarm aus. Norm: DIN VDE 0833 / EN 50131 (Einbruch- und Überfallmeldeanlagen). Geräteklassen (Grad 1–4, nach Einbruchrisiko). Komponenten: Zentrale (Verarbeitung), Melder (Bewegungsmelder, Magnetkontakte, Glasbruchmelder, Erschütterungsmelder), Signalgeber (Sirene, Blitzleuchte), Bedienteile, Sabotageüberwachung (Sabotagekontakt an jedem Gehäuse).",
              "stichworte": ["EMA", "Einbruchmeldeanlage", "EN 50131", "Grad 1–4", "Bewegungsmelder", "Sabotageüberwachung"],
              "falschantworten": ["EMA-Anlagen müssen keiner Norm entsprechen.", "Sabotagekontakte sind optional und nicht vorgeschrieben.", "Grad 4 ist für einfache Wohngebäude ohne besonderes Risiko."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ema-002",
              "frage": "Welche Meldertypen werden in EMA-Anlagen eingesetzt und was erkennen sie?",
              "antwort": "Passiv-Infrarot-Bewegungsmelder (PIR): erkennt Wärmebewegung von Personen im Raum (häufigster Melder). Mikrowellen-Melder: erkennt Bewegung durch Wände (Doppler-Effekt). Dualmelder: PIR + Mikrowellen kombiniert (weniger Fehlalarme). Magnetkontakt: erkennt Öffnen von Türen/Fenstern. Glasbruchmelder: erkennt Glasbruch akustisch. Erschütterungsmelder (Körperschallmelder): erkennt Einschlagversuche.",
              "stichworte": ["PIR", "Bewegungsmelder", "Magnetkontakt", "Glasbruchmelder", "Dualmelder", "Körperschallmelder"],
              "falschantworten": ["PIR-Melder erkennen Bewegung durch Mikrowellen.", "Glasbruchmelder erkennen Erschütterungen im Boden.", "Dualmelder sind unzuverlässiger als Einzelmelder."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "zkt-001",
              "frage": "Was ist eine Zutrittskontrollanlage (ZKA) und welche Identifikationstechnologien gibt es?",
              "antwort": "Eine ZKA regelt, wer wann welche Bereiche betreten darf. Identifikationsmedien: RFID-Transponder (berührungslos, Frequenzen 125 kHz / 13,56 MHz / 860 MHz), Magnetstreifenkarte (veraltet), PIN-Pad (Geheimzahl), Biometrie (Fingerabdruck, Iris, Gesichtserkennung). Kombination aus zwei Faktoren (2FA) erhöht Sicherheit. Anbindung: lokal (Standalone) oder vernetzt an Server (Online-ZKA). Protokollierung aller Zutrittsereignisse.",
              "stichworte": ["Zutrittskontrolle", "RFID", "Transponder", "13,56 MHz", "Biometrie", "2FA", "Protokollierung"],
              "falschantworten": ["RFID-Transponder arbeiten ausschließlich auf 2,4 GHz.", "Biometrische Systeme sind weniger sicher als PIN-Systeme.", "Zutrittskontrollanlagen benötigen keine Protokollierung."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ema-003",
              "frage": "Welche Alarmstufen gibt es bei einer EMA und was passiert bei Sabotage?",
              "antwort": "EMA-Alarmstufen: Voralarm (Melder angesprochen, Zentrale wartet auf Quittierung – reduziert Fehlalarme). Hauptalarm (bestätigt, Signalgeber laufen). Stiller Alarm (ohne Signalgeber, nur interne Meldung/Übertragung – z. B. bei Banken). Sabotage: jede Gehäuseöffnung der Zentrale, Melder oder Kabelunterbrechung löst Sabotagealarm aus (Sabotagekontakt). Übertragung: Alarm kann per ÜE an Wach- und Sicherheitsdienst übertragen werden.",
              "antwort_mc": "Voralarm → Hauptalarm → Stiller Alarm. Sabotagealarm bei Gehäuseöffnung/Kabelunterbrechung. Übertragung via ÜE.",
              "stichworte": ["EMA", "Voralarm", "Hauptalarm", "Stiller Alarm", "Sabotagealarm", "Sabotagekontakt", "ÜE"],
              "falschantworten": ["Ein Sabotagealarm kann bei EMA-Anlagen nicht auftreten.", "Stiller Alarm aktiviert immer die Außensirene.", "Voralarm und Hauptalarm sind bei EMA identisch."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "ema-004",
              "frage": "Was sind die Schärfungsarten bei EMA-Anlagen und was ist Scharfschalten?",
              "antwort": "Scharfschalten: Aktivieren der Anlage (alle Melder überwacht). Unschärfen: Deaktivierung für berechtigte Personen. Schärfungsarten: Vollscharf (alle Bereiche), Teilscharf (z. B. nur Außenhaut, Innen frei – bei Anwesenheit), Internscharf (Außenbereich scharf, Innenbereich frei für Personen im Gebäude). Scharfschaltmittel: Code-Bedienteil, Schlüsselschalter, Transponder/RFID, Fernbedienung (Funk). Verzögerungszeit: Anlage gibt Zeit zum Verlassen des Gebäudes (Ausgangs-/Eingangsverzögerung).",
              "antwort_mc": "Vollscharf, Teilscharf, Internscharf. Scharfschaltung per Code, Schlüssel oder RFID mit Verzögerungszeit.",
              "stichworte": ["Scharfschalten", "Vollscharf", "Teilscharf", "Internscharf", "Eingangsverzögerung", "Bedienteil"],
              "falschantworten": ["Teilscharf bedeutet, die gesamte Anlage ist inaktiv.", "Internscharf überwacht nur die Innenbereiche, nicht die Außenhaut.", "Scharfschalten ist nur per PIN-Code möglich."],
              "schwierigkeit": "mittel"
            }
          ]
        },
        {
          "id": "sicherheit-bma",
          "name": "Brandmeldeanlagen (BMA)",
          "karten": [
            {
              "id": "bma-001",
              "frage": "Was ist eine Brandmeldeanlage (BMA) und welche Norm gilt?",
              "antwort": "Eine BMA erkennt Brände frühzeitig und alarmiert Feuerwehr sowie Gebäudenutzer. Norm: DIN VDE 0833-2 / EN 54 (Brandmeldeanlagen). Komponenten: Brandmeldezentrale (BMZ), automatische Melder (Rauch-, Hitze-, Flammenmelder), Handmelder (Druckknopfmelder), Alarmierungseinrichtungen (Sirene, Blitzleuchte), Übertragungseinrichtung (zur Feuerwehrleitstelle). Leitungsüberwachung: alle Melderleitungen werden auf Kurzschluss und Unterbrechung überwacht.",
              "stichworte": ["BMA", "Brandmeldezentrale", "EN 54", "Rauchmelder", "Druckknopfmelder", "Leitungsüberwachung"],
              "falschantworten": ["BMA-Leitungen müssen nicht auf Kurzschluss überwacht werden.", "Handmelder sind automatische Melder.", "BMA-Normen sind national festgelegt, keine europäische Norm vorhanden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "bma-002",
              "frage": "Welche automatischen Brandmelder gibt es und wann werden sie eingesetzt?",
              "antwort": "Punktförmiger Rauchmelder (Ionisation oder Streulichtp): erkennt sichtbaren Rauch – am häufigsten eingesetzt. Wärmemelder: erkennt Temperaturanstieg (fest: z. B. 60 °C, oder Differenzial). Flammenmelder: erkennt UV-/IR-Strahlung offener Flammen – für Räume mit starker Rauchentwicklung (Küchen). Linienbrandmelder: über Laserlichtstrahl – für große Hallen. Aspirationsmelder (ASD): saugt Luft aktiv an, extrem empfindlich – für Serverräume.",
              "stichworte": ["Rauchmelder", "Wärmemelder", "Flammenmelder", "Aspirationsmelder", "Linienbrandmelder", "Streulichtp"],
              "falschantworten": ["Flammenmelder eignen sich am besten für Räume mit starker Staubentwicklung.", "Aspirationsmelder sind weniger empfindlich als Punktmelder.", "Wärmemelder erkennen Rauch, bevor Wärme entsteht."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "bma-003",
              "frage": "Wie ist eine BMA in Meldebereiche und Meldergruppen aufgeteilt und was ist eine Brandmeldezentrale (BMZ)?",
              "antwort": "BMA-Struktur: BMZ → Meldebereiche (z. B. Brandabschnitt) → Meldergruppen (Leitungskreise mit mehreren Meldern). Meldergruppe: alle Melder an einer Ringleitung; Ausfall eines Melders wird erkannt. BMZ: wertet alle Meldungen aus, aktiviert Alarmierung, steuert Abschottungen (Brandschutzklappen, Aufzüge), sendet Signal an Feuerwehr (Übertragungseinrichtung ÜE). Anzeige: Tableau zeigt betroffenen Meldebereich und Meldertyp.",
              "antwort_mc": "BMZ wertet Meldebereiche/Gruppen aus, aktiviert Alarm, steuert Brandschutzklappen und sendet ÜE-Signal.",
              "stichworte": ["BMZ", "Meldebereich", "Meldergruppe", "Ringleitung", "Brandschutzklappen", "Tableau"],
              "falschantworten": ["Alle Melder einer BMA sind direkt an der Zentrale angeschlossen, ohne Leitungskreise.", "Brandschutzklappen werden von Rauchmeldern direkt gesteuert.", "Ein Ausfall in einer Meldergruppe wird von der BMA nicht erkannt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "bma-004",
              "frage": "Was ist ein Falschalarm bei einer BMA und welche Maßnahmen reduzieren ihn?",
              "antwort": "Falschalarm: Alarm ohne echtes Brandereignis – verursacht durch Rauch (Kochen, Zigaretten), Staub, Dampf, Insekten oder Kabelfehler. Folgen: unnötige Feuerwehreinsätze (kostenpflichtig ab Richtwert), Betriebsunterbrechung. Reduzierung: Dualmelder (kombinierter Rauch + Temperatur), Aspirationsmelder mit Voralarm-Stufen, Plausibilitätsprüfung (zwei Melder müssen gleichzeitig ansprechen), regelmäßige Wartung (VDE 0833), Eignungsprüfung vor Installation.",
              "antwort_mc": "Falschalarme durch Dampf, Staub, Insekten. Reduktion: Dualmelder, Plausibilitätsprüfung, regelmäßige Wartung.",
              "stichworte": ["Falschalarm", "Dualmelder", "Plausibilitätsprüfung", "VDE 0833", "Wartung", "Aspirationsmelder"],
              "falschantworten": ["Falschalarme sind bei einer korrekt installierten BMA nicht möglich.", "Dualmelder erhöhen die Falschalarmrate.", "Feuerwehreinsätze bei Falschalarmen sind immer kostenfrei."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "bma-005",
              "frage": "Was ist eine Übertragungseinrichtung (ÜE) und welche Norm regelt die Aufschaltung zur Feuerwehr?",
              "antwort": "Die Übertragungseinrichtung (ÜE) übermittelt den Brandalarm automatisch an die Leitstelle der Feuerwehr. In Deutschland: Aufschaltung über konzessionierte ÜE-Betreiber (z. B. Deutsche Telekom, Bosch) auf die Integrierte Leitstelle (ILS). Norm: DIN VDE 0833-1 (Aufbau und Betrieb) und DIN 14675 (Planung, Errichtung, Betrieb von BMA). Auflagen: redundante Übertragungswege, regelmäßige Prüfung durch Sachverständigen.",
              "antwort_mc": "ÜE überträgt Alarm an Feuerwehr-Leitstelle (ILS). Norm: DIN VDE 0833-1, DIN 14675. Redundante Übertragungswege erforderlich.",
              "stichworte": ["Übertragungseinrichtung", "ÜE", "ILS", "DIN 14675", "VDE 0833", "Feuerwehr"],
              "falschantworten": ["Die ÜE überträgt Brandmeldungen per Mobilfunk ohne Normvorgaben.", "DIN 14675 gilt nur für EMA-Anlagen.", "Feuerwehr-Alarmierung erfolgt bei BMA immer manuell."],
              "schwierigkeit": "schwer"
            }
          ]
        },
        {
          "id": "sicherheit-video",
          "name": "Videoüberwachung & Türsprechanlagen",
          "karten": [
            {
              "id": "vid-001",
              "frage": "Was muss bei der Installation einer Videoüberwachungsanlage bezüglich Datenschutz beachtet werden?",
              "antwort": "Videoüberwachung erfasst personenbezogene Daten → DSGVO und BDSG gelten. Pflichten: Erkennbare Hinweisschilder (wer betreibt die Anlage, Zweck). Speicherung nur so lange wie nötig (max. 72 h bei einfacher Überwachung). Betriebsratsmitbestimmung bei Arbeitnehmerüberwachung. Berechtigtes Interesse muss überwiegen. Öffentliche Bereiche: zusätzliche Regelungen. Keine Überwachung von nicht eigenen Flächen (z. B. Gehwege, Nachbargrundstücke).",
              "stichworte": ["Videoüberwachung", "DSGVO", "Hinweisschild", "72 Stunden", "berechtigtes Interesse", "Betriebsrat"],
              "falschantworten": ["Videoüberwachung ist immer ohne Hinweisschild erlaubt.", "Speicherdauer von Videodaten ist gesetzlich unbegrenzt.", "DSGVO gilt nicht für Videoüberwachung in Unternehmen."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "tsp-001",
              "frage": "Was ist eine Türsprechanlage (Video-Gegensprechanlage) und welche Komponenten hat sie?",
              "antwort": "Eine Türsprechanlage ermöglicht die Kommunikation zwischen Tür und Innenstation sowie die Türöffnung. Komponenten: Außenstation (Klingeltaster, Mikrofon, Lautsprecher, Kamera, Nachtlicht), Innenstation(en) (Monitor, Sprechtaste, Türöffner-Taste), Netzgerät (12–24 V DC), Türöffner (elektromechanisch: stromlos offen/geschlossen). IP-Türstationen: Anbindung über LAN, Steuerung per App möglich. Bus-Systeme: bis zu 32 Innenstationen an einem Bus.",
              "stichworte": ["Türsprechanlage", "Außenstation", "Innenstation", "Türöffner", "IP-Türstation", "Bus"],
              "falschantworten": ["Türöffner arbeiten immer mit 230 V.", "IP-Türstationen benötigen kein Netzwerk.", "Eine Türsprechanlage kann nur eine Innenstation haben."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "vid-002",
              "frage": "Welche Kameratypen werden in der Videoüberwachung eingesetzt und wo werden sie verwendet?",
              "antwort": "Fixkamera: fester Blickwinkel, kompakt, für definierten Überwachungsbereich. PTZ-Kamera (Pan-Tilt-Zoom): schwenkbar, neigbar, zoombar – für große Bereiche, fernsteuerbar. Dome-Kamera: unauffällige Bauform (Halbkugel), Innenbereich, vandalismusresistenter. Bullet-Kamera: Außenbereich, Abschreckungswirkung, IP66/67. Fisheye-Kamera: 180°/360°-Übersicht, keine blinden Flecken in kleinen Räumen. Wärmebildkamera: erkennt Wärme, unabhängig von Lichtverhältnissen – für Perimeterschutz.",
              "antwort_mc": "Fix (definierter Bereich), PTZ (schwenkbar/zoom), Dome (Innern), Bullet (Außen), Fisheye (360°), Wärmebild (lichtunabhängig).",
              "stichworte": ["PTZ", "Dome-Kamera", "Bullet-Kamera", "Fisheye", "Wärmebildkamera", "IP66"],
              "falschantworten": ["PTZ-Kameras sind stationär und können nicht geschwenkt werden.", "Wärmebildkameras benötigen gute Beleuchtung.", "Fisheye-Kameras haben sehr eingeschränkten Sichtwinkel."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "tsp-002",
              "frage": "Was ist ein IP-Türkommunikationssystem (SIP-Türstation) und welche Vorteile bietet es?",
              "antwort": "IP-Türkommunikation überträgt Bild, Ton und Steuerbefehle (Türöffner) über das vorhandene LAN/WLAN. SIP-Protokoll (Session Initiation Protocol) ermöglicht Verbindung zu SIP-Telefonen, Smartphones und PCs weltweit. Vorteile: keine separate Kabelinfrastruktur nötig (CAT-Kabel), Fernzugriff per App, Integration in Videomanagementsysteme (VMS), mehrere gleichzeitige Verbindungen. PoE (Power over Ethernet) versorgt Station ohne zusätzliches Netzkabel.",
              "antwort_mc": "IP/SIP-Türstation per LAN: App-Fernzugriff, SIP-Telefon-Integration, PoE-Versorgung, kein separates Kabel nötig.",
              "stichworte": ["SIP", "IP-Türstation", "PoE", "LAN", "VMS", "App", "Fernzugriff"],
              "falschantworten": ["SIP-Türstationen benötigen immer eine eigene Kupferleitung für Audio.", "PoE versorgt Kameras mit Glasfaserkabel.", "IP-Türstationen sind auf lokale Kommunikation beschränkt."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "vid-003",
              "frage": "Was ist Videoanalyse und welche intelligenten Funktionen bietet sie?",
              "antwort": "Videoanalyse (Video Analytics) wertet Kamerabilder automatisch per Software aus. Funktionen: Bewegungserkennung (nur relevante Bewegungen, keine Fehlalarme durch Licht), Linienüberschreitung (virtuelle Grenze → Alarm), Loitering (Person hält sich zu lange auf), Gesichtserkennung (Abgleich mit Datenbank), Kennzeichenerfassung (LPR/ANPR), Personenzählung, Sabotage-Erkennung (Kamera verkabelt/übermalt). Voraussetzung: ausreichende Bildqualität und Auflösung (mind. 2 MP).",
              "antwort_mc": "Automatische Bildauswertung: Bewegung, Linienüberschreitung, Gesichtserkennung, Kennzeichenerfassung, Personenzählung.",
              "stichworte": ["Videoanalyse", "Bewegungserkennung", "Linienüberschreitung", "ANPR", "Gesichtserkennung", "Personenzählung"],
              "falschantworten": ["Videoanalyse kann nur Bewegungen erkennen, keine anderen Ereignisse.", "ANPR steht für Automatisches Netzwerk-Protokoll-Routing.", "Videoanalyse funktioniert auch bei sehr niedriger Bildauflösung."],
              "schwierigkeit": "schwer"
            }
          ]
        }
      ]
    },
    {
      "id": "hlk",
      "name": "HLK – Heizung, Lüftung, Klima",
      "themen": [
        {
          "id": "hlk-grundlagen",
          "name": "HLK-Steuerung & Raumautomation",
          "karten": [
            {
              "id": "hlk-001",
              "frage": "Was ist ein Raumtemperaturregler (RTR) und welche Betriebsarten hat er?",
              "antwort": "Ein RTR misst die Raumtemperatur und regelt Heizung/Kühlung auf den gewünschten Sollwert. Betriebsarten: Komfort (normale Nutzung, z. B. 21 °C), Standby (leichte Absenkung bei kurzer Abwesenheit, z. B. 18 °C), Nacht/Eco (starke Absenkung, z. B. 16 °C), Frost-/Hitzeschutz (Minimalschutz, z. B. 7 °C). In KNX-Anlagen wird der RTR über Gruppenadressen gesteuert und kann Präsenz-/Fensterkontakte einbinden.",
              "stichworte": ["Raumtemperaturregler", "RTR", "Komfort", "Standby", "Eco", "Sollwert", "KNX"],
              "falschantworten": ["Ein RTR kann nur zwischen Ein und Aus schalten, keine Temperaturregelung.", "Frostschutz bedeutet 0 °C Mindesttemperatur.", "Standby-Betrieb erhöht die Temperatur gegenüber dem Komfortbetrieb."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "hlk-002",
              "frage": "Wie funktioniert eine Wärmepumpe und welche Arten gibt es?",
              "antwort": "Eine Wärmepumpe entnimmt Umgebungswärme (Luft, Erde, Wasser) und hebt sie auf ein höheres Temperaturniveau für Heizung/Warmwasser. Funktionsprinzip: Kältemittel verdampft (nimmt Wärme auf), Kompressor verdichtet (Temperatur steigt), Kondensator gibt Wärme ab, Expansionsventil senkt Druck. COP (Coefficient of Performance) = abgegebene Wärmeleistung / aufgenommene el. Leistung (typisch 3–5). Arten: Luft-Wasser (häufigste), Sole-Wasser (Erdwärme), Wasser-Wasser.",
              "stichworte": ["Wärmepumpe", "COP", "Kältemittel", "Luft-Wasser", "Sole-Wasser", "Kompressor"],
              "falschantworten": ["Eine Wärmepumpe erzeugt Energie aus dem Nichts.", "COP 1 bedeutet, eine Wärmepumpe ist besonders effizient.", "Wärmepumpen können nur kühlen, nicht heizen."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "hlk-003",
              "frage": "Was ist eine Fußbodenheizung und welche Vor- und Nachteile hat sie?",
              "antwort": "Fußbodenheizung (FBH): Heizrohre im/unter dem Estrich – Wärmeabgabe über die gesamte Bodenfläche (Strahlungswärme). Vorteile: angenehme Wärmeverteilung, niedrige Vorlauftemperatur (30–45 °C, ideal für Wärmepumpen), unsichtbar, kein Heizkörper nötig. Nachteile: hohe thermische Trägheit (langsame Reaktion auf Sollwertänderung), schlechte Nachträglichkeit in Bestandsgebäuden, Übertemperaturgefahr bei falscher Regelung.",
              "stichworte": ["Fußbodenheizung", "Vorlauftemperatur", "Trägheit", "Strahlungswärme", "Wärmepumpe"],
              "falschantworten": ["Fußbodenheizungen benötigen Vorlauftemperaturen von 70–80 °C.", "FBH reagiert schneller auf Sollwertänderungen als Heizkörper.", "Fußbodenheizungen eignen sich nicht für Wärmepumpen."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "hlk-004",
              "frage": "Was ist ein Ventilantrieb und wie wird er in KNX-Systemen eingesetzt?",
              "antwort": "Ein Ventilantrieb (Thermoantrieb) öffnet/schließt das Heizungsventil am Heizkörper oder FBH-Verteiler. Typen: Zwei-Punkt (auf/zu), Stellantrieb (0–100% proportional). In KNX: Heizungsaktor sendet Stellsignal (1-Bit oder 1-Byte) an Ventilantrieb basierend auf RTR-Vorgabe. Typisch: Normaldruck offen (NO) – bei Stromausfall öffnet Ventil (Frostschutz). Normaldruck geschlossen (NC): sicherer bei Leckagegefahr.",
              "stichworte": ["Ventilantrieb", "Thermoantrieb", "Heizungsaktor", "KNX", "NO", "NC", "Stellsignal"],
              "falschantworten": ["Ventilanriebe können nur vollständig öffnen oder schließen.", "NC (Normaldruck geschlossen) öffnet bei Stromausfall.", "KNX-Heizungsaktoren sind identisch mit Schaltaktoren."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "hlk-005",
              "frage": "Was ist Sektorkopplung im Energiebereich?",
              "antwort": "Sektorkopplung bezeichnet die intelligente Verknüpfung der Energiesektoren Strom, Wärme und Mobilität. Beispiele: PV-Strom → Wärmepumpe (Strom zu Wärme), PV-Strom → Wallbox (Strom zu Mobilität), Power-to-Heat (Überschussstrom → Heizstab/Wärmespeicher). Ziel: Erneuerbaren Überschussstrom sinnvoll nutzen, Netz entlasten, CO₂ reduzieren. In EGS-Anlagen: Energiemanagementsystem koordiniert alle Verbraucher.",
              "stichworte": ["Sektorkopplung", "Wärmepumpe", "PV", "Wallbox", "Power-to-Heat", "Energiemanagement"],
              "falschantworten": ["Sektorkopplung bezeichnet die Verbindung von zwei Elektrokreisen.", "Power-to-Heat wandelt Wärme in Strom um.", "Sektorkopplung erhöht immer den Energieverbrauch."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "hlk-006",
              "frage": "Was ist ein Energiemanagementsystem (EMS) und welche Aufgaben hat es?",
              "antwort": "Ein EMS überwacht, steuert und optimiert den Energieverbrauch und die -erzeugung im Gebäude. Aufgaben: Echtzeit-Messung von Verbrauch und Erzeugung (PV, Speicher), Lastmanagement (Verbraucher priorisieren, Lastspitzen vermeiden), Eigenverbrauchsoptimierung (PV-Strom zuerst zu Wärmepumpe/Wallbox), Tarifspeicherung (günstigen Nachtstrom nutzen), Reporting/Auswertung. Anbindung: KNX, Modbus, BACnet, Cloud-API.",
              "stichworte": ["EMS", "Energiemanagementsystem", "Lastmanagement", "Eigenverbrauch", "Lastspitze", "Modbus"],
              "falschantworten": ["Ein EMS kann nur den Stromverbrauch messen, nicht steuern.", "Lastmanagement erhöht immer den Gesamtenergieverbrauch.", "EMS-Systeme sind nur für Industriegebäude geeignet."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "cybersecurity",
      "name": "IT-Sicherheit & Netzwerkpraxis",
      "themen": [
        {
          "id": "cyber-grundlagen",
          "name": "Cybersecurity & WLAN",
          "karten": [
            {
              "id": "sec-001",
              "frage": "Welche typischen Angriffsmethoden auf Netzwerke und Gebäudesysteme gibt es?",
              "antwort": "Phishing: gefälschte E-Mails/Webseiten, um Zugangsdaten zu stehlen. Man-in-the-Middle (MitM): Angreifer schaltet sich zwischen zwei Kommunikationspartner. Ransomware: Verschlüsselung von Daten, Lösegeld gefordert. Brute-Force: automatisches Ausprobieren von Passwörtern. DoS/DDoS: Überlastung eines Systems. In Gebäudesystemen: unbefugter Zugriff auf KNX-IP, Manipulation von Aktoren, Ausspähen von Bewegungsprofilen.",
              "stichworte": ["Phishing", "Man-in-the-Middle", "Ransomware", "Brute-Force", "DoS", "KNX-Sicherheit"],
              "falschantworten": ["Gebäudesysteme wie KNX sind nicht angreifbar, da sie kein IP nutzen.", "Phishing bezeichnet physisches Eindringen in ein Gebäude.", "Brute-Force Angriffe erraten immer sofort das Passwort."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sec-002",
              "frage": "Was ist eine Firewall und welche Arten gibt es?",
              "antwort": "Eine Firewall kontrolliert den Netzwerkverkehr anhand von Regeln (erlauben/sperren). Arten: Paketfilter-Firewall: prüft Quell-/Ziel-IP und Port (einfach, Layer 3/4). Stateful Inspection: verfolgt Verbindungszustände (merkt sich erlaubte Verbindungen). Application-Layer-Firewall (WAF): analysiert Inhalt bis Layer 7 (HTTP, FTP). Next-Gen Firewall (NGFW): kombiniert alle Methoden + IDS/IPS. Für Gebäudesysteme: Trennung von OT-Netz (KNX-IP, BACnet) und IT-Netz durch Firewall.",
              "stichworte": ["Firewall", "Paketfilter", "Stateful Inspection", "NGFW", "OT-Netz", "IT-Netz"],
              "falschantworten": ["Eine Firewall schützt nur vor Viren, nicht vor Netzwerkangriffen.", "Paketfilter analysieren den Anwendungsinhalt bis Layer 7.", "Gebäudesysteme müssen nicht vom IT-Netz getrennt werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sec-003",
              "frage": "Was ist ein VPN und warum wird es für den Fernzugriff auf Gebäudesysteme eingesetzt?",
              "antwort": "VPN (Virtual Private Network): verschlüsselte Tunnel-Verbindung über das Internet, die so wirkt als wäre der Nutzer direkt im lokalen Netz. Protokolle: OpenVPN, IPSec, WireGuard. Einsatz in der EGS: sicherer Fernzugriff auf KNX-IP-Schnittstelle, ETS-Fernprogrammierung, Wartungszugang für Techniker. Alternativen: SSL-VPN (über Browser), SD-WAN. Kein Fernzugriff ohne VPN = Sicherheitsrisiko (Ports offen im Internet).",
              "stichworte": ["VPN", "Fernzugriff", "OpenVPN", "IPSec", "WireGuard", "Verschlüsselung", "KNX"],
              "falschantworten": ["VPN macht Verbindungen langsamer und unsicherer.", "KNX-Anlagen sollten direkt aus dem Internet erreichbar sein.", "IPSec und HTTPS sind dasselbe Protokoll."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sec-004",
              "frage": "Was sind WLAN-Sicherheitsstandards und welcher ist aktuell empfohlen?",
              "antwort": "WEP (veraltet): einfache RC4-Verschlüsselung, leicht knackbar – nicht mehr verwenden. WPA (2003): verbessert, aber TKIP-Verschlüsselung ebenfalls unsicher. WPA2 (802.11i): AES-CCMP-Verschlüsselung, aktuell weit verbreitet. WPA3 (seit 2018): stärkstes Protokoll, SAE (Simultaneous Authentication of Equals), Schutz gegen Wörterbuchangriffe. Empfehlung: WPA3 oder mindestens WPA2. Passwortlänge: mindestens 12 Zeichen, Sonderzeichen, keine Wörterbuchwörter.",
              "stichworte": ["WPA2", "WPA3", "WEP", "AES", "SAE", "WLAN-Sicherheit", "802.11i"],
              "falschantworten": ["WEP ist der modernste WLAN-Sicherheitsstandard.", "WPA3 nutzt dieselbe Verschlüsselung wie WEP.", "Ein 8-stelliges WLAN-Passwort bietet ausreichend Sicherheit."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "sec-005",
              "frage": "Was sind WLAN-Standards (IEEE 802.11) und was bedeuten die Buchstaben?",
              "antwort": "802.11b (1999): 2,4 GHz, 11 Mbit/s. 802.11g (2003): 2,4 GHz, 54 Mbit/s. 802.11n (WiFi 4, 2009): 2,4 + 5 GHz, bis 600 Mbit/s, MIMO. 802.11ac (WiFi 5, 2013): 5 GHz, bis 3,5 Gbit/s, MU-MIMO. 802.11ax (WiFi 6, 2019): 2,4 + 5 + 6 GHz, bis 9,6 Gbit/s, OFDMA (besser bei vielen Geräten). 802.11be (WiFi 7, 2024): bis 46 Gbit/s. 2,4 GHz: bessere Reichweite. 5/6 GHz: höhere Geschwindigkeit, kürzere Reichweite.",
              "stichworte": ["WiFi 6", "802.11ax", "MIMO", "OFDMA", "2,4 GHz", "5 GHz"],
              "falschantworten": ["802.11ac arbeitet auf 2,4 GHz.", "5 GHz hat immer eine größere Reichweite als 2,4 GHz.", "WiFi 6 ist langsamer als WiFi 5."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "sec-006",
              "frage": "Was ist Glasfaser (LWL) und welche Typen gibt es?",
              "antwort": "Lichtwellenleiter (LWL/Glasfaser) überträgt Daten als Lichtimpulse durch Glasfasern. Multimode (MM): größerer Kerndurchmesser (50/62,5 µm), mehrere Lichtpfade, bis ca. 2 km, günstiger – für Gebäudeverkabelung. Singlemode (SM): kleinerer Kern (9 µm), ein Lichtpfad, bis 100+ km, teurer – für WAN/Backbone. Vorteile gegenüber Kupfer: keine EMV-Störungen, galvanische Trennung, höhere Bandbreite, abhörsicher. Stecker: LC, SC, ST.",
              "stichworte": ["Glasfaser", "LWL", "Multimode", "Singlemode", "LC-Stecker", "EMV", "galvanische Trennung"],
              "falschantworten": ["Singlemode-Fasern haben einen größeren Kerndurchmesser als Multimode.", "Glasfaser ist anfälliger für elektromagnetische Störungen als Kupfer.", "LWL kann keine galvanische Trennung zwischen Gebäudeteilen bieten."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    },
    {
      "id": "projektierung",
      "name": "Projektierung & Inbetriebnahme",
      "themen": [
        {
          "id": "proj-planung",
          "name": "Planung, Dokumentation & Übergabe",
          "karten": [
            {
              "id": "proj-001",
              "frage": "Was ist der Unterschied zwischen Lastenheft und Pflichtenheft?",
              "antwort": "Lastenheft (vom Auftraggeber): beschreibt WAS gefordert wird und WARUM – Anforderungen, Funktionen, Rahmenbedingungen ohne technische Lösung. Pflichtenheft (vom Auftragnehmer): beschreibt WIE und WOMIT die Anforderungen umgesetzt werden – technische Lösung, Materialien, Zeitplan. Merksatz: Lastenheft = Kundenwunsch, Pflichtenheft = technische Antwort. Das Pflichtenheft ist Vertragsgrundlage.",
              "stichworte": ["Lastenheft", "Pflichtenheft", "Auftraggeber", "Auftragnehmer", "Anforderungen"],
              "falschantworten": ["Das Lastenheft beschreibt die technische Umsetzung.", "Pflichtenheft und Lastenheft sind dasselbe Dokument.", "Das Pflichtenheft wird vom Auftraggeber erstellt."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "proj-002",
              "frage": "Welche Phasen hat ein typisches Elektroinstallationsprojekt?",
              "antwort": "1. Akquise/Anfrage: Kundenwunsch aufnehmen. 2. Planung/Projektierung: Lastenheft, Pflichtenheft, Materialplanung, Angebot. 3. Ausführung: Installation, Kabelverlegung, Montage. 4. Programmierung/Parametrierung: KNX/SPS-Programmierung, ETS-Download. 5. Inbetriebnahme: Prüfungen nach VDE 0100-600, Funktionstest. 6. Übergabe: Einweisung, Dokumentation, Abnahmeprotokoll. 7. Wartung/Service: regelmäßige Prüfungen, Updates, Erweiterungen.",
              "stichworte": ["Projektphasen", "Planung", "Inbetriebnahme", "Übergabe", "Wartung", "Abnahme"],
              "falschantworten": ["Inbetriebnahme erfolgt vor der Installation.", "Übergabe ist optional und nicht Teil des Projekts.", "Programmierung findet vor der Kabelverlegung statt."],
              "schwierigkeit": "leicht"
            },
            {
              "id": "proj-003",
              "frage": "Welche Dokumente gehören zur technischen Dokumentation einer EGS-Anlage?",
              "antwort": "Elektropläne: Stromlaufplan, Klemmenpläne, Übersichtsschaltplan. Netzwerkdokumentation: IP-Adresstabelle, VLAN-Übersicht, Netzwerktopologie. KNX-Dokumentation: ETS-Projektdatei, Datenpunktliste, Gruppenadressliste, physische Adressen. Sicherheitstechnik: BMA-Aufschaltplan, EMA-Zonenplan. Prüfprotokolle: VDE 0100-600, DGUV-Prüfung. Bedienungsanleitung: für den Nutzer. Revisionspläne: aktualisiert nach Abschluss.",
              "stichworte": ["Technische Dokumentation", "Stromlaufplan", "ETS-Projektdatei", "Datenpunktliste", "Prüfprotokoll", "Revisionsplan"],
              "falschantworten": ["Dokumentation wird erst nach der Übergabe erstellt.", "ETS-Projektdatei muss nicht archiviert werden.", "Prüfprotokolle nach VDE 0100-600 sind optional."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "proj-004",
              "frage": "Was ist bei der Inbetriebnahme einer KNX-Anlage zu prüfen?",
              "antwort": "1. Busspannung messen (24–30 V DC am Bus). 2. Alle Teilnehmer im ETS sichtbar (Kommunikationstest). 3. Physische Adressen korrekt übertragen. 4. Gruppenadressen und Applikationsparameter auf alle Geräte geladen. 5. Funktionstest jeder Gruppe: Taster → Aktor → Reaktion. 6. Szenen und Timer testen. 7. Visualisierung/App testen. 8. Dokumentation abgleichen. 9. Einweisung des Nutzers. Häufige Fehler: falsche Buslänge (max. 1.000 m je Linie), zu viele Teilnehmer (max. 64).",
              "stichworte": ["KNX Inbetriebnahme", "Busspannung", "ETS", "Funktionstest", "Gruppenadresse", "Einweisung"],
              "falschantworten": ["Die Busspannung bei KNX beträgt 230 V AC.", "Eine KNX-Linie darf max. 128 Teilnehmer haben.", "Physische Adressen werden automatisch vergeben ohne ETS."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "proj-005",
              "frage": "Was ist eine Abnahme und was muss beim Abnahmeprotokoll dokumentiert werden?",
              "antwort": "Die Abnahme ist die formelle Übergabe einer fertiggestellten Anlage vom Auftragnehmer an den Auftraggeber. Im Abnahmeprotokoll: Anlagenbezeichnung, Datum, Anwesende. Prüfergebnisse (VDE 0100-600: Isolationswiderstand, Schleifenimpedanz, FI-Auslösung). Mängelprotokoll (falls vorhanden). Bestätigung der Einweisung des Bedienpersonals. Übergabe der Dokumentation (Pläne, ETS-Datei, Bedienungsanleitung). Unterschriften beider Parteien. Nach Abnahme: Gewährleistungspflicht beginnt (2 Jahre BGB).",
              "stichworte": ["Abnahme", "Abnahmeprotokoll", "Gewährleistung", "Mängelprotokoll", "Einweisung", "VDE 0100-600"],
              "falschantworten": ["Abnahmeprotokoll enthält nur die Kosten des Projekts.", "Gewährleistung beginnt vor der Abnahme.", "Abnahme kann ohne Anwesenheit des Auftraggebers durchgeführt werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "proj-006",
              "frage": "Was ist bei der Wartung und Instandhaltung von Gebäudesystemen zu beachten?",
              "antwort": "Regelmäßige Prüfungen nach DGUV Vorschrift 3 (ortsfeste Anlagen alle 4 Jahre). BMA/EMA: jährliche Wartung nach DIN VDE 0833 und DIN 14675 (Funktionsprüfung aller Melder). KNX/SPS: Software-Backup sichern, Firmware-Updates prüfen, Batterie der Echtzeituhr tauschen. Dokumentation: Wartungsprotokoll führen, Mängel dokumentieren und terminieren. Notlichtsysteme: monatliche Funktionsprüfung (1 h), jährlicher Dauertest (3 h) nach EN 50172.",
              "stichworte": ["Wartung", "DGUV Vorschrift 3", "DIN 14675", "Wartungsprotokoll", "Firmware-Update", "Notlicht EN 50172"],
              "falschantworten": ["Wartungsintervalle für EMA sind gesetzlich nicht vorgeschrieben.", "KNX-Anlagen müssen nie aktualisiert werden.", "Notlichtsysteme müssen nur alle 5 Jahre geprüft werden."],
              "schwierigkeit": "mittel"
            },
            {
              "id": "proj-007",
              "frage": "Was sind Protokolle für die Gebäudeautomation (Modbus, BACnet) und wofür werden sie eingesetzt?",
              "antwort": "Modbus RTU/TCP: einfaches, weit verbreitetes Master-Slave-Protokoll für Industrie und GA. RTU: seriell (RS-485), TCP: über Ethernet. Typisch für: Wechselrichter, Zähler, HLK-Regler. BACnet (Building Automation and Control Networks, ISO 16484-5): standardisiertes Gebäudeautomationsprotokoll, objektbasiert, Peer-to-Peer. Einsatz: GLT-Systeme, HLK-Anlagen, Energiemanagement. KNX ↔ BACnet/Modbus: über Gateways verbinden. Vorteil: herstellerübergreifende Integration.",
              "stichworte": ["Modbus", "BACnet", "RS-485", "Gateway", "GLT", "HLK", "ISO 16484-5"],
              "falschantworten": ["Modbus ist ein Peer-to-Peer-Protokoll ohne Master.", "BACnet gilt nur für Beleuchtungsanlagen.", "Modbus und KNX können nicht miteinander kommunizieren."],
              "schwierigkeit": "schwer"
            },
            {
              "id": "proj-008",
              "frage": "Was versteht man unter einer Visualisierung in der Gebäudeautomation?",
              "antwort": "Eine Visualisierung stellt den Anlagenzustand grafisch dar und ermöglicht Bedienung und Überwachung. Ebenen: Lokal (Touchpanel im Gebäude), Remote (App, Webbrowser über VPN/Cloud). Inhalte: Grundriss mit Schaltflächen, Messwerte (Temperatur, Verbrauch), Alarmmeldungen, Zeitprogramme, Historische Daten/Trends. Systeme: KNX-Visualisierungsserver (z. B. iRidium, Loxone, Gira), GLT (Gebäudeleittechnik) für große Anlagen. Voraussetzung: alle Datenpunkte als Kommunikationsobjekte verfügbar.",
              "stichworte": ["Visualisierung", "Touchpanel", "App", "GLT", "Datenpunkte", "Trends", "Alarmmeldung"],
              "falschantworten": ["Visualisierung ist nur für industrielle Anlagen, nicht für Wohngebäude geeignet.", "Eine GLT kann keine historischen Daten speichern.", "Visualisierungen funktionieren ohne Kommunikationsobjekte."],
              "schwierigkeit": "mittel"
            }
          ]
        }
      ]
    }
  ]
};
