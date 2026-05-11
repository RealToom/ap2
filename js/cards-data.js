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
  ]
};
