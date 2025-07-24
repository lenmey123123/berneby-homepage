Relevante Dateien
package.json - Definiert alle Projekt-Abhängigkeiten und Skripte.

next.config.mjs - Konfiguration für Next.js 15, inklusive Compiler-Optionen.

tailwind.config.ts - Zentrale Konfigurationsdatei für Tailwind CSS; hier werden alle Design-Tokens (Farben, Schriftarten, Abstände) definiert.

biome.json - Konfiguration für das Biome-Toolchain (Linter, Formatter), um einen einheitlichen Code-Stil sicherzustellen.

src/app/layout.tsx - Das Haupt-Layout der Anwendung. Hier werden globale Stile, Schriftarten und die grundlegende Seitenstruktur (Header, Footer) eingebunden.

src/app/page.tsx - Die Komponente für die Startseite, die später die Scrollytelling-Logik enthalten wird.

src/components/ui/ - Ein Verzeichnis für alle wiederverwendbaren, atomaren UI-Komponenten (z.B. Buttons, Inputs).

src/components/ui/Button.tsx - Die primäre Button-Komponente für die gesamte Seite.

src/components/ui/Button.stories.tsx - Die Storybook-Datei zur isolierten Entwicklung und Dokumentation der Button-Komponente.

.github/workflows/ci-cd.yml - Die Konfigurationsdatei für den GitHub Actions Workflow, der den Code automatisch testet und auf Vercel deployt.

Hinweise
Dieses Projekt nutzt Next.js 15 mit React Server Components (RSC) als Standard. Das bedeutet, jede Komponente ist standardmäßig eine Server-Komponente, es sei denn, sie wird explizit mit 'use client'; markiert.

Der Code-Stil wird durch Biome erzwungen. Richten Sie Ihren Editor so ein, dass er beim Speichern automatisch formatiert, um Konflikte zu vermeiden.

Die Komponentenentwicklung erfolgt "isoliert" in Storybook. Bevor eine Komponente in die Hauptanwendung integriert wird, muss sie im Storybook mit all ihren Varianten und Zuständen einwandfrei funktionieren.

Tasks
[x] 1.0 Projekt-Setup und Konfiguration der Entwicklungsumgebung

[x] 1.1 Initialisieren Sie ein neues Next.js 15 Projekt mit dem Befehl npx create-next-app@latest --typescript --tailwind --eslint. Wählen Sie die App Router Konfiguration (Siehe PRD Phase 1, Abschnitt 3.2 - Frontend-Architektur: Die "Serverseitige Renaissance" mit Next.js 15).

[x] 1.2 Installieren Sie die zusätzlichen Kern-Abhängigkeiten für Animationen und das Styling: npm install framer-motion gsap @headlessui/react (Siehe PRD Phase 2, Abschnitt 4.3 - Ladeerlebnis & Übergänge).

[x] 1.3 Ersetzen Sie ESLint durch Biome: npm uninstall eslint && npm install --save-dev @biomejs/biome. Initialisieren Sie Biome mit npx @biomejs/biome init und erstellen Sie eine biome.json Konfigurationsdatei (Siehe PRD Phase 1, Abschnitt 3.5 - Tooling: Performance und Produktivität durch die "Rustification").

[x] 1.4 Richten Sie Git-Hooks mit husky ein, um sicherzustellen, dass Biome den Code vor jedem Commit prüft und formatiert. Fügen Sie dazu ein pre-commit Skript hinzu, das npx @biomejs/biome check --apply . ausführt (Siehe PRD Phase 1, Abschnitt 3.5 - Tooling).

[x] 1.5 Initialisieren Sie Storybook für Next.js mit dem Befehl npx storybook@latest init. Stellen Sie sicher, dass es korrekt mit dem Next.js App Router und Tailwind CSS funktioniert (Siehe PRD Phase 4, Abschnitt 7.1 - Unit- & Komponenten-Tests).

[x] 2.0 Aufbau des grundlegenden UI-Layouts und der Navigation

[x] 2.1 Passen Sie die globale src/app/layout.tsx Datei an. Importieren und konfigurieren Sie die Schriftarten "Playfair Display" und "Inter" aus next/font/google gemäß der PRD-Spezifikation (4.3). Weisen Sie diese den entsprechenden CSS-Variablen zu (Siehe PRD Phase 2, Abschnitt 4.2.1 - Typografie-Tokens).

[x] 2.2 Erstellen Sie eine Header Komponente (src/components/layout/Header.tsx). Diese soll das "berneby"-Logo (als Text) und die Navigationslinks ("Leistungen", "Über Uns", "Projekt Starten") enthalten. Gestalten Sie sie mit Tailwind CSS gemäß dem "Strukturierter Retro-Futurismus"-Stil (Siehe PRD Phase 2, Abschnitt 4.1 - Visuelle Identität: "Strukturierter Retro-Futurismus").

[x] 2.3 Erstellen Sie eine Footer Komponente (src/components/layout/Footer.tsx), die Links zum Impressum und Datenschutz enthält (Siehe PRD Phase 2, Abschnitt 4.2.4 - Organismen: Footer).

[x] 2.4 Binden Sie den Header und Footer in die layout.tsx ein, sodass sie auf allen Seiten sichtbar sind (Siehe PRD Phase 2, Abschnitt 4.2.4 - Organismen: Header).

[x] 2.5 Erstellen Sie die leeren Unterseiten (/leistungen, /ueber-uns, /impressum, /datenschutz) durch Anlegen der entsprechenden Verzeichnisse und page.tsx Dateien im src/app Verzeichnis (Siehe PRD Phase 3, Abschnitt 5.4 - Anbindung des Frontends an das CMS).

[x] 3.0 Definition und Implementierung der Design-Tokens

[x] 3.1 Öffnen Sie die tailwind.config.ts Datei. Erweitern Sie das theme Objekt, um die "High-Tech Nostalgia" Farbpalette (PRD 4.2) zu definieren. Verwenden Sie dabei aussagekräftige Namen wie background, text-primary, accent (Siehe PRD Phase 2, Abschnitt 4.2.1 - Farb-Tokens ("High-Tech Nostalgia")).

[x] 3.2 Fügen Sie die konfigurierten Schriftart-Variablen ("Inter") in das fontFamily Objekt der Tailwind-Konfiguration ein, z.B. heading: ['var(--font-inter)', 'sans-serif'] (Siehe PRD Phase 2, Abschnitt 4.2.1 - Typografie-Tokens).

[x] 3.3 Definieren Sie eine konsistente Skala für Abstände und Größen (z.B. spacing: { '1': '0.25rem', '2': '0.5rem', ... }). Dies stellt sicher, dass das gesamte Layout einem harmonischen Raster folgt (Siehe PRD Phase 2, Abschnitt 4.2.1 - Spacing-Tokens).

[x] 3.4 Definieren Sie die borderRadius Tokens, um den "Gefüllte Retro-Formen"-Stil (PRD 4.4) mit leicht abgerundeten Ecken umzusetzen (Siehe PRD Phase 2, Abschnitt 4.2.1 - Weitere Tokens: border-radius).

[x] 4.0 Entwicklung der atomaren UI-Komponenten im Storybook

[x] 4.1 Erstellen Sie die Button Komponente (src/components/ui/Button.tsx). Sie soll Varianten für "primary" (gefüllt mit Akzentfarbe) und "secondary" (Outline-Stil) unterstützen. Die Stile sollen auf den in Tailwind definierten Tokens basieren (Siehe PRD Phase 2, Abschnitt 4.2.2 - Atome: Buttons).

[x] 4.2 Erstellen Sie die zugehörige Story (Button.stories.tsx). Dokumentieren Sie alle Varianten und Zustände (default, hover, focus, disabled) interaktiv (Siehe PRD Phase 4, Abschnitt 7.1 - Unit- & Komponenten-Tests).

[x] 4.3 Erstellen Sie eine Icon Komponente (src/components/ui/Icon.tsx), die SVGs rendert. Implementieren Sie 2-3 Beispiel-Icons im "Gefüllte Retro-Formen"-Stil (PRD 4.4) als separate React-Komponenten (z.B. src/components/icons/TechIcon.tsx) (Siehe PRD Phase 2, Abschnitt 4.2.2 - Atome: Icons).

[x] 4.4 Erstellen Sie eine Storybook-Story für die Icons, um deren konsistente Darstellung zu überprüfen (Siehe PRD Phase 4, Abschnitt 7.1 - Unit- & Komponenten-Tests).

[x] 4.5 Erstellen Sie eine Modal Komponente (src/components/ui/Modal.tsx) als Basis für den späteren "Quick-Connect"-Dialog. Stellen Sie sicher, dass sie per Tastatur bedienbar (Fokus-Falle) und über die Escape-Taste schließbar ist (WCAG-Anforderung) (Siehe PRD Phase 2, Abschnitt 4.4 - Barrierefreiheit im Design-System).

[x] 5.0 Einrichtung der Continuous Integration & Deployment (CI/CD) Pipeline

[x] 5.1 Erstellen Sie ein neues GitHub-Repository und pushen Sie den initialen Code (Siehe PRD Phase 4, Abschnitt 9.3 - Success Metrics & KPI Tracking).

[x] 5.2 Erstellen Sie ein neues Projekt auf Vercel und verknüpfen Sie es mit dem GitHub-Repository. Stellen Sie sicher, dass die Build-Einstellungen (Next.js) korrekt erkannt werden (Siehe PRD Phase 4, Abschnitt 7.3 - Deployment-Pipeline).

[x] 5.3 Erstellen Sie die Workflow-Datei .github/workflows/ci-cd.yml (Siehe PRD Phase 4, Abschnitt 7.3 - CI/CD: GitHub Actions → Vercel).

[x] 5.4 Konfigurieren Sie den Workflow so, dass er bei jedem Push zum main-Branch ausgelöst wird. Die Schritte müssen sein: 1. Code auschecken, 2. Node.js-Umgebung einrichten, 3. Abhängigkeiten installieren (npm install), 4. Code-Qualität prüfen (npx @biomejs/biome check .), 5. (Optional, später) Tests ausführen (Siehe PRD Phase 4, Abschnitt 7.3 - Pre-deployment: Lighthouse Audit, Bundle Analysis).

[x] 5.5 Stellen Sie sicher, dass Vercel so konfiguriert ist, dass es automatisch nur dann ein Production-Deployment startet, wenn der GitHub Actions Workflow erfolgreich durchgelaufen ist (Siehe PRD Phase 4, Abschnitt 7.3 - Post-deployment: Health Checks, Performance Monitoring).