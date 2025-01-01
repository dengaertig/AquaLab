# AquaLab - Aquarium Wasserwerte Visualisierung

AquaLab ist eine React-Anwendung, die Aquarium-Wasserwerte aus einer API abruft und sie visuell darstellt. Die Anwendung zeigt verschiedene Wasserparameter wie pH-Wert, Karbonathärte, Nitrat, Nitrit, Phosphat, Kalium, Eisen und Ammonium über Zeit in interaktiven Liniendiagrammen an. Außerdem können Wasserwerte hinzugefügt und gelöscht werden.

## Features

- **Datenvisualisierung**: Anzeige von Wasserwerten über Zeit mit Liniendiagrammen, unter Verwendung von **Chart.js**.
- **API-Integration**: Daten werden aus einer REST API geladen, die Wasserwerte liefert.
- **Interaktive Diagramme**: Jedes Diagramm zeigt den Trend für eine bestimmte Wasserqualität wie pH-Wert, Nitrat, etc.
- **Europäisches Datumsformat**: Das Datum wird im Format `dd.MM.yyyy` angezeigt.
- **Datenoperationen**: Es gibt eine Möglichkeit, neue Wasserwerte hinzuzufügen und bestehende zu löschen.

Backend-API realisiert mit Django

Features im Detail

    Liniendiagramme: Jedes Diagramm zeigt die Entwicklung eines Wasserwerts über die Zeit. Die X-Achse zeigt das Datum im europäischen Format an (dd.MM.yyyy).
    Daten hinzufügen: Es gibt ein Formular, mit dem neue Wasserwerte zum System hinzugefügt werden können.
    Daten löschen: Jeder Eintrag in der Tabelle hat einen Lösch-Button, um den entsprechenden Wasserwert zu entfernen.

Technologien

    React: Frontend-Bibliothek für den Aufbau der Benutzeroberfläche.
    Axios: Zum Abrufen von Daten aus der API.
    Chart.js: Für das Erstellen interaktiver Liniendiagramme.
    Django: Als Framework für Python.
    RESTFramework: Zum realisieren der API.
    Bootstrap: Für ein responsives Layout und ansprechende Gestaltung.

## Screenshots
![23231](https://github.com/user-attachments/assets/4e382c1a-5a1e-4d73-b4b7-29ba0450774c)

API
![332](https://github.com/user-attachments/assets/c10aa77e-e128-4e05-91ba-e654fcc050bf)

