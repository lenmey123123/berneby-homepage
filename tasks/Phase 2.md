Relevante Dateien
src/app/page.tsx - Wird modifiziert, um die neuen narrativen Hauptkomponenten zu integrieren und die Zustandslogik für den Übergang zu verwalten.

src/components/narrative/ScrollytellingContainer.tsx - Neue Datei. Eine Client-Komponente ('use client'), die die gesamte Scroll-Logik mit framer-motion steuert und die einzelnen Kapitel animiert.

src/components/narrative/NarrativeChapter.tsx - Neue Datei. Eine Komponente zur Darstellung eines einzelnen Kapitels der Geschichte, die Text und visuelle Elemente aufnimmt.

src/components/interactive/BlobCursor.tsx - Neue Datei. Eine Client-Komponente ('use client'), die den globalen, animierten Maus-Cursor implementiert.

src/components/gallery/ProjectGallery.tsx - Neue Datei. Eine Client-Komponente ('use client'), die die horizontal scrollbare Galerie enthält.

src/components/gallery/TiltedCard.tsx - Neue Datei. Die 3D-Karte für einzelne Projekte mit Parallax-Hover-Effekt.

src/hooks/useMousePosition.ts - Neue Datei. Ein optionaler, aber empfohlener Custom Hook, um die Mausposition effizient zu verfolgen und für mehrere Komponenten (Cursor, Karten) bereitzustellen.

Hinweise
Client-Komponenten sind der Schlüssel: Nahezu alle in dieser Phase erstellten Komponenten müssen mit 'use client'; markiert werden, da sie auf Browser-Events (Scrollen, Mausbewegungen) und Hooks (useState, useEffect) angewiesen sind.

Performance im Blick behalten: Achten Sie darauf, Animationen zu verwenden, die die GPU beschleunigt (wie transform und opacity). Framer Motion handhabt dies in der Regel sehr gut.

Iterative Entwicklung: Entwickeln Sie die komplexen Animationen (insbesondere den Übergang von vertikal zu horizontal) schrittweise. Nutzen Sie Platzhalter, um die Logik zu testen, bevor Sie das finale Design implementieren.

Tasks
[x] 1.0 Implementierung der Scrollytelling-Struktur

[x] 1.1 Erstellen Sie die ScrollytellingContainer.tsx Komponente. Markieren Sie sie als 'use client'. Sie sollte einen div mit einer sehr großen Höhe (z.B. 400vh) rendern, um den Scroll-Bereich zu definieren (Siehe PRD Phase 3, Abschnitt 5.1 - Core Feature 1: Narrative Scrollytelling Homepage).

[x] 1.2 Innerhalb dieser Komponente, verwenden Sie den useScroll Hook von framer-motion, um den scrollYProgress zu verfolgen (Siehe PRD Phase 3, Abschnitt 5.1 - Scroll-Mechanik).

[x] 1.3 Erstellen Sie die NarrativeChapter.tsx Komponente. Sie sollte title und content als Props annehmen (Siehe PRD Phase 3, Abschnitt 5.1 - Kapitel-Animation).

[x] 1.4 Mappen Sie die Kapitelinhalte (aus dem PRD 5.1) und rendern Sie mehrere NarrativeChapter Instanzen innerhalb eines sticky positionierten Containers im ScrollytellingContainer (Siehe PRD Phase 3, Abschnitt 5.1 - Kapitel-Animation).

[x] 1.5 Verwenden Sie den useTransform Hook, um den scrollYProgress auf die opacity und y-Position jedes Kapitels zu mappen. Dies erzeugt den Effekt, dass jedes Kapitel nacheinander ein- und ausblendet, während der Nutzer scrollt (Siehe PRD Phase 3, Abschnitt 5.1 - Kapitel-Animation).

[x] 1.6 Implementieren Sie den "Docking"-Übergang: Transformieren Sie scale und y des gesamten sticky Containers, wenn der scrollYProgress sich dem Ende nähert (z.B. zwischen 0.8 und 1.0), sodass er nach oben aus dem Bild schrumpft (Siehe PRD Phase 3, Abschnitt 5.1 - "Docking"-Übergang).

[x] 2.0 Entwicklung des BlobCursor

[x] 2.1 Erstellen Sie die BlobCursor.tsx Komponente ('use client'). Verwenden Sie framer-motion's useSpring Hook, um eine motion.div der Mausposition flüssig folgen zu lassen (Siehe PRD Phase 3, Abschnitt 6.1 - BlobCursor Physik).

[x] 2.2 Implementieren Sie die Logik, die die Größe und das Aussehen des Cursors ändert, wenn er über Elemente mit dem Attribut data-interactive="true" schwebt (Siehe PRD Phase 3, Abschnitt 6.1 - BlobCursor Physik).

[x] 2.3 Binden Sie den BlobCursor global in die layout.tsx ein, sodass er auf der gesamten Seite aktiv ist (Siehe PRD Phase 3, Abschnitt 6.1 - BlobCursor Physik).

[x] 3.0 Aufbau der interaktiven Projektgalerie

[x] 3.1 Erstellen Sie die ProjectGallery.tsx Komponente ('use client'). Positionieren Sie sie mit position: absolute und steuern Sie ihre Sichtbarkeit über einen isActive Prop, der vom page.tsx gesetzt wird, sobald der Scrollytelling-Übergang abgeschlossen ist (Siehe PRD Phase 3, Abschnitt 5.2 - Core Feature 2: Interaktive Projektgalerie).

[x] 3.2 Implementieren Sie das horizontale Scrolling mit einem Flexbox-Container und overflow-x: scroll. Nutzen Sie CSS Scroll Snap für ein sauberes Einrasten der Projekte (Siehe PRD Phase 3, Abschnitt 5.2 - Horizontales Scrolling).

[x] 3.3 Erstellen Sie die TiltedCard.tsx Komponente ('use client'). Verwenden Sie motion.div und transform-style: preserve-3d, um die 3D-Neigung zu ermöglichen (Siehe PRD Phase 3, Abschnitt 5.2 - 3D-Hover-Effekt (TiltedCard)).

[x] 3.4 Implementieren Sie den 3D-Hover-Effekt: Verfolgen Sie die Mausposition innerhalb der Karte und mappen Sie diese auf rotateX und rotateY Werte, die Sie an useSpring übergeben, um die Bewegung flüssig zu gestalten (Siehe PRD Phase 3, Abschnitt 5.2 - 3D-Hover-Effekt (TiltedCard)).

[x] 3.5 Implementieren Sie den Parallax-Effekt für das Bild innerhalb der Karte, indem Sie dessen Position entgegengesetzt zur Mausbewegung leicht verschieben (Siehe PRD Phase 3, Abschnitt 5.2 - Parallax-Effekt).

[x] 3.6 Fügen Sie die animierten Tech-Stack-Icons hinzu, die bei Hover mit einer AnimatePresence Komponente erscheinen (Siehe PRD Phase 3, Abschnitt 5.2 - Tech-Stack Icons).

[x] 3.7 Laden Sie zunächst statische Platzhalter-Daten für die Projekte. Die Anbindung an das CMS erfolgt in der nächsten Phase (Siehe PRD Phase 3, Abschnitt 5.2 - Technische Implementierung).