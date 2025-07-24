Relevante Dateien
src/lib/cms.ts - Neue Datei. Ein zentrales Service-Modul im Frontend, das alle API-Anfragen an das Headless CMS kapselt.

src/lib/api.ts - Neue Datei. Ein Service-Modul im Frontend für die Kommunikation mit dem eigenen Backend (Modular Monolith).

src/app/page.tsx - Wird modifiziert, um die Projekt-Daten nun serverseitig vom CMS abzurufen und an die ProjectGallery zu übergeben.

src/app/leistungen/page.tsx - Wird modifiziert, um den Inhalt serverseitig vom CMS abzurufen.

backend/src/contact/contact.controller.ts - Neue Datei (im Backend-Projekt). Der API-Controller, der die Endpunkte für die Kontaktanfragen (/blueprint, /quick-connect) definiert.

backend/src/contact/contact.service.ts - Neue Datei (im Backend-Projekt). Enthält die Geschäftslogik zur Validierung und Verarbeitung der Kontaktdaten.

cms/src/api/project/content-types/project/schema.json - Die Konfigurationsdatei im Strapi CMS, die die Struktur der "Project"-Daten definiert.

Dockerfile - Neue Datei. Wird im Root-Verzeichnis des Backend-Projekts erstellt, um es zu containerisieren.

docker-compose.yml - Neue Datei. Wird im Haupt-Projektverzeichnis erstellt, um die lokale Entwicklung von Frontend, Backend, CMS und Datenbank zu orchestrieren.

Hinweise
Server-Side Data Fetching (RSC): Das Abrufen von Daten aus dem CMS und dem Backend sollte primär in Server-Komponenten (page.tsx, layout.tsx) stattfinden. Dies ist eine Kernanforderung des PRDs, um die Performance zu maximieren. Die Daten werden dann als Props an die Client-Komponenten ('use client') weitergegeben.

Umgebungsvariablen: Speichern Sie die URLs für das CMS und das Backend-API in Umgebungsvariablen (.env.local), anstatt sie fest im Code zu verankern (z.B. NEXT_PUBLIC_STRAPI_API_URL).

Backend-Struktur: Die Verwendung eines Frameworks wie NestJS für den modularen Monolithen wird dringend empfohlen, da es von Haus aus eine saubere, modulare Architektur und Features wie Dependency Injection und Validierung bietet.

Tasks
[ ] 1.0 Setup des Headless CMS (Strapi)

[ ] 1.1 Initialisieren Sie ein neues Strapi-Projekt in einem separaten cms-Verzeichnis mit npx create-strapi-app@latest cms --quickstart (Siehe PRD Phase 1, Abschnitt 3.4 - Content-Management: Agilität durch ein Headless CMS).

[ ] 1.2 Erstellen Sie über das Strapi Admin Panel einen neuen "Collection Type" namens Project (Siehe PRD Phase 1, Abschnitt 3.4 - Content-Management).

[ ] 1.3 Fügen Sie dem Project Collection Type die im PRD (3.2) definierten Felder hinzu: title (Text), description (Text), cover_image (Media), tech_stack (JSON), project_url (Text) (Siehe PRD Phase 3, Abschnitt 5.2 - Technische Implementierung: Projekt-Karte (TiltedCard)).

[ ] 1.4 Erstellen Sie "Single Types" für die statischen Seiten Leistungen und UeberUns, jeweils mit einem Rich-Text-Feld für den Inhalt (Siehe PRD Phase 3, Abschnitt 5.4 - Anbindung des Frontends an das CMS).

[ ] 1.5 Gehen Sie zu Settings > Roles > Public und erlauben Sie die find und findOne Aktionen für alle erstellten Content-Typen, damit das Frontend die Daten lesen kann (Siehe PRD Phase 1, Abschnitt 3.4 - Content-Management).

[ ] 1.6 Füllen Sie das CMS mit 3-4 Beispiel-Projekten und Inhalten für die statischen Seiten, um eine realistische Testumgebung für das Frontend zu schaffen (Siehe PRD Phase 3, Abschnitt 5.2 - Laden Sie zunächst statische Platzhalter-Daten für die Projekte).

[ ] 2.0 Entwicklung des modularen Monolithen für die Kontakt-Logik

[ ] 2.1 Initialisieren Sie in einem backend-Verzeichnis ein neues Node.js/TypeScript-Projekt (Empfehlung: npx @nestjs/cli new backend) (Siehe PRD Phase 1, Abschnitt 3.1 - Fundamentales Architekturmuster: Der pragmatische Modular Monolith).

[ ] 2.2 Erstellen Sie ein ContactModule, das die gesamte Logik für die Kontaktaufnahme kapselt (Siehe PRD Phase 1, Abschnitt 3.1 - Modular Monolith).

[ ] 2.3 Implementieren Sie einen ContactController mit zwei POST-Endpunkten: /api/blueprint und /api/quick-connect (Siehe PRD Phase 3, Abschnitt 5.3 - Core Feature 3: Interaktiver Projekt-Blueprint & Kontakt).

[ ] 2.4 Erstellen Sie DTOs (Data Transfer Objects) mit class-validator für beide Endpunkte, um die eingehenden Daten (Name, E-Mail, Projekt-Features etc.) serverseitig strikt zu validieren (Siehe PRD Phase 4, Abschnitt 9.2 - Sicherheitsanforderungen: Serverseitige Validierung).

[ ] 2.5 Implementieren Sie im ContactService die Logik, die nach erfolgreicher Validierung eine E-Mail-Benachrichtigung (z.B. mit Nodemailer) versendet oder die Anfrage in der PostgreSQL-Datenbank speichert (Siehe PRD Phase 3, Abschnitt 5.3 - Datenübermittlung).

[ ] 3.0 Anbindung des Frontends an das CMS und die Backend-API

[ ] 3.1 Erstellen Sie im Next.js-Projekt die Service-Datei src/lib/cms.ts. Implementieren Sie hier fetch-Funktionen, um Projekte und Seitendaten von Ihrer Strapi-Instanz abzurufen (Siehe PRD Phase 3, Abschnitt 5.4 - Anbindung des Frontends an das CMS).

[ ] 3.2 Modifizieren Sie die src/app/page.tsx. Rufen Sie die Projekt-Daten innerhalb der Page-Komponente (die eine Server-Komponente ist) mit await fetchProjects() ab (Siehe PRD Phase 1, Abschnitt 3.2 - Datenabruf: Der Datenabruf aus dem Headless CMS erfolgt direkt und elegant innerhalb der Server-Komponenten).

[ ] 3.3 Reichen Sie die abgerufenen Projektdaten als Prop an die <ProjectGallery /> Client-Komponente weiter und ersetzen Sie dort die statischen Platzhalter-Daten (Siehe PRD Phase 3, Abschnitt 5.4 - Reichen Sie die abgerufenen Projektdaten als Prop an die ProjectGallery weiter).

[ ] 3.4 Binden Sie die Inhalte der statischen Seiten (/leistungen, /ueber-uns) an die entsprechenden page.tsx Dateien, indem Sie auch hier die Daten serverseitig abrufen (Siehe PRD Phase 3, Abschnitt 5.4 - Binden Sie die Inhalte der statischen Seiten an die entsprechenden page.tsx Dateien).

[ ] 3.5 Erstellen Sie die Service-Datei src/lib/api.ts und implementieren Sie die POST-Anfragen für den "Collaborative Blueprint" und das "Quick-Connect"-Formular, die auf Ihr Backend-API zielen (Siehe PRD Phase 3, Abschnitt 5.3 - Datenübermittlung).

[ ] 4.0 Containerisierung und lokale Entwicklungsumgebung

[ ] 4.1 Erstellen Sie eine Dockerfile für die Node.js-Backend-Anwendung, die die Anwendung baut und in einem schlanken Node.js-Image ausführt (Siehe PRD Phase 3, Abschnitt 5.4 - Containerisierung und lokale Entwicklungsumgebung).

[ ] 4.2 Erstellen Sie eine docker-compose.yml-Datei im Hauptverzeichnis des Projekts (Siehe PRD Phase 3, Abschnitt 5.4 - Containerisierung).

[ ] 4.3 Definieren Sie in der docker-compose.yml Services für:

frontend (das Next.js-Projekt)

backend (das Node.js-Projekt, das die Dockerfile nutzt)

cms (das Strapi-Projekt)

database (ein offizielles postgres Image) (Siehe PRD Phase 3, Abschnitt 5.4 - Definieren Sie in der docker-compose.yml Services).

[ ] 4.4 Konfigurieren Sie die Services so, dass sie miteinander kommunizieren können und die Daten der Datenbank persistent in einem Docker-Volume gespeichert werden (Siehe PRD Phase 3, Abschnitt 5.4 - Konfigurieren Sie die Services so, dass sie miteinander kommunizieren können).

[ ] 4.5 Dokumentieren Sie in der README.md, wie ein neuer Entwickler mit einem einzigen Befehl (docker-compose up) die gesamte Entwicklungsumgebung starten kann (Siehe PRD Phase 3, Abschnitt 5.4 - Dokumentieren Sie in der README.md).