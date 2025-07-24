Relevante Dateien
src/components/contact/CollaborativeBlueprintModal.tsx - Die Hauptkomponente für das interaktive Projektskizzierungs-Tool.

src/components/contact/QuickConnectModal.tsx - Die Komponente für das einfache, modale Kontaktformular.

src/app/contact/confirmation/page.tsx - Eine dynamische Seite, die die personalisierte "Projekt-Echo"-Bestätigung anzeigt.

src/lib/api.ts - Wird erweitert, um die Zustandslogik (Laden, Erfolg, Fehler) für die Formularübermittlungen zu handhaben.

e2e/contact.spec.ts - Neue Datei. Der Playwright End-to-End-Test, der die vollständigen Kontakt-Flows simuliert.

src/components/contact/CollaborativeBlueprint.test.tsx - Neue Datei. Unit- und Komponententests für die Blueprint-Logik mit Vitest.

MANUAL_TESTING_CHECKLIST.md - Neue Datei. Eine Markdown-Datei zur Dokumentation der manuellen Testfälle für Barrierefreiheit und Cross-Browser-Kompatibilität.

Hinweise
Zustandsmanagement ist entscheidend: Bei den Kontaktformularen ist es extrem wichtig, dem Nutzer klares Feedback zu geben. Implementieren Sie Lade-Indikatoren (z.B. Deaktivieren des Senden-Buttons und Anzeigen eines Spinners) und zeigen Sie Erfolgs- oder Fehlermeldungen an.

Barrierefreiheit bei Interaktionen: Der "Collaborative Blueprint" ist eine komplexe interaktive Komponente. Gemäß PRD (10) muss eine alternative, tastaturgesteuerte Bedienungsmöglichkeit geschaffen werden, um die WCAG-Anforderung "Dragging Movements" zu erfüllen.

End-to-End-Tests sind das Sicherheitsnetz: Die Playwright-Tests sind entscheidend, um sicherzustellen, dass die Kernfunktionalität (die Conversion-Pfade) auch nach zukünftigen Änderungen stabil bleibt.

Tasks
[ ] 1.0 Entwicklung des "Collaborative Blueprint"

[ ] 1.1 Erstellen Sie die CollaborativeBlueprintModal.tsx Komponente und markieren Sie sie als 'use client' (Siehe PRD Phase 3, Abschnitt 5.3 - Core Feature 3: Interaktiver Projekt-Blueprint & Kontakt).

[ ] 1.2 Bauen Sie das statische Layout: Links die Palette der "Feature-Blöcke", rechts die "Drop Zone" und darunter das Formular für die Kontaktdaten (Siehe PRD Phase 3, Abschnitt 5.3 - Technische Implementierung).

[ ] 1.3 Implementieren Sie die Drag-and-Drop-Funktionalität. Machen Sie die Feature-Blöcke draggable und implementieren Sie die onDrop und onDragOver Handler für die Drop Zone (Siehe PRD Phase 3, Abschnitt 5.3 - Drag & Drop Logik).

[ ] 1.4 Verwalten Sie den Zustand der abgelegten Blöcke mit einem useState Array. Stellen Sie sicher, dass keine Duplikate abgelegt werden können (Siehe PRD Phase 3, Abschnitt 5.3 - Zustandsmanagement).

[ ] 1.5 Barrierefreiheits-Alternative (WCAG): Fügen Sie zu jedem Feature-Block in der Palette einen "Hinzufügen"-Button hinzu. Ein Klick auf diesen Button fügt den Block ebenfalls zur Drop Zone hinzu. Dies stellt die Bedienbarkeit ohne Maus sicher (Siehe PRD Phase 3, Abschnitt 5.3 - Barrierefreiheits-Alternative (WCAG)).

[ ] 1.6 Binden Sie den onSubmit Handler des Formulars an die entsprechende Funktion in src/lib/api.ts. Übergeben Sie die Kontaktdaten und die Liste der Namen der abgelegten Blöcke (Siehe PRD Phase 3, Abschnitt 5.3 - Datenübermittlung).

[ ] 1.7 Implementieren Sie die Weiterleitung zur Bestätigungsseite bei erfolgreicher Übermittlung. Übergeben Sie die Projektdaten als URL-Parameter (Siehe PRD Phase 3, Abschnitt 5.4 - Core Feature 4: Personalisierte Bestätigung ("Projekt-Echo")).

[ ] 2.0 Implementierung des "Quick-Connect"-Modals

[ ] 2.1 Erstellen Sie die QuickConnectModal.tsx Komponente ('use client'). Nutzen Sie die zuvor erstellte Modal-Basiskomponente (Siehe PRD Phase 3, Abschnitt 5.3 - Core Feature 3: Interaktiver Projekt-Blueprint & Kontakt).

[ ] 2.2 Bauen Sie das minimalistische Formular (Name, E-Mail, Nachricht) gemäß dem PRD (Siehe PRD Phase 3, Abschnitt 5.3 - Technische Implementierung).

[ ] 2.3 Implementieren Sie die clientseitige Validierung (z.B. für eine gültige E-Mail-Adresse), um dem Nutzer sofortiges Feedback zu geben (Siehe PRD Phase 4, Abschnitt 9.2 - Sicherheitsanforderungen).

[ ] 2.4 Binden Sie den onSubmit Handler an die API-Funktion in src/lib/api.ts (Siehe PRD Phase 3, Abschnitt 5.3 - Datenübermittlung).

[ ] 2.5 Bei erfolgreicher Übermittlung: Schließen Sie das Modal und zeigen Sie eine Erfolgsmeldung an.

[ ] 3.0 Entwicklung der personalisierten "Projekt-Echo"-Bestätigungsseite

[ ] 3.1 Erstellen Sie die Seite src/app/contact/confirmation/page.tsx. Da sie URL-Parameter lesen muss, wird sie als Client-Komponente ('use client') implementiert, die Daten aber initial vom Server erhält (Siehe PRD Phase 3, Abschnitt 5.4 - Technische Implementierung).

[ ] 3.2 Verwenden Sie den useSearchParams Hook von next/navigation, um die übergebenen Projektdaten aus der URL zu lesen (Siehe PRD Phase 3, Abschnitt 5.4 - Logik).

[ ] 3.3 Zeigen Sie eine personalisierte "Danke"-Nachricht an, die den Namen des Nutzers und eine Zusammenfassung der gewählten Features anzeigt (Siehe PRD Phase 3, Abschnitt 5.4 - Technische Implementierung).

[ ] 4.0 Implementierung der umfassenden Teststrategie

[ ] 4.1 Unit-Tests (Vitest): Schreiben Sie Tests für die clientseitige Validierungslogik im QuickConnectModal (Siehe PRD Phase 4, Abschnitt 7.1 - Unit- & Komponenten-Tests).

[ ] 4.2 Komponenten-Tests (Vitest & Testing Library): Schreiben Sie einen Test für den CollaborativeBlueprint, der simuliert, wie ein Nutzer einen Block per Klick (die barrierefreie Alternative) hinzufügt und überprüft, ob der Zustand korrekt aktualisiert wird (Siehe PRD Phase 4, Abschnitt 7.1 - Logik in Client-Komponenten).

[ ] 4.3 End-to-End-Tests (Playwright): Erstellen Sie die e2e/contact.spec.ts Datei (Siehe PRD Phase 4, Abschnitt 7.3 - End-to-End-Tests (Playwright)).

[ ] 4.3.1 Schreiben Sie einen Testfall, der den gesamten "Happy Path" für den Collaborative Blueprint durchläuft: Seite laden, zum Kontaktbereich navigieren, einen Block hinzufügen, Formular ausfüllen, absenden und auf der Bestätigungsseite landen (Siehe PRD Phase 4, Abschnitt 7.3 - "Collaborative Blueprint" Happy Path).

[ ] 4.3.2 Schreiben Sie einen zweiten Testfall für den Quick-Connect-Flow: Seite laden, Button klicken, Modal öffnen, Formular ausfüllen, absenden und das Erscheinen der Erfolgsmeldung überprüfen (Siehe PRD Phase 4, Abschnitt 7.3 - "Quick Connect" Validierung).

[ ] 5.0 Finale Audits und Qualitäts-Checks

[ ] 5.1 Führen Sie einen vollständigen Lighthouse-Audit in einer Produktions-Vorschauumgebung (z.B. Vercel Preview Deployment) durch. Dokumentieren Sie die Ergebnisse für Performance, Accessibility, Best Practices und SEO (Siehe PRD Phase 4, Abschnitt 9.1 - Performance-Anforderungen & Monitoring: Lighthouse CI).

[ ] 5.2 Erstellen Sie die MANUAL_TESTING_CHECKLIST.md und führen Sie alle Tests durch:

Tastaturnavigation: Navigieren Sie durch die gesamte Seite, einschließlich aller interaktiven Elemente und Formulare, nur mit der Tab- und Enter-Taste.

Screenreader-Test: Überprüfen Sie die wichtigsten Seiten (Homepage, Kontakt) mit NVDA oder VoiceOver.

Cross-Browser-Test: Überprüfen Sie die Darstellung und Funktionalität auf den neuesten Versionen von Chrome, Firefox und Safari (Siehe PRD Phase 4, Abschnitt 8.2 - Cross-Browser & Cross-Device Testing).

[ ] 5.3 Führen Sie einen finalen Security-Check durch: Überprüfen Sie die HTTP-Header der deployten Seite und führen Sie npm audit --production aus, um nach bekannten Schwachstellen zu suchen (Siehe PRD Phase 4, Abschnitt 9.2 - Sicherheitsanforderungen: Dependency Scanning).