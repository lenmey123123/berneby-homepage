# Phase 3: Narrative & Scroll Integration (SVG/2.5D)

**Ziel:** Die Verbindung zwischen dem Scroll-Fortschritt des Nutzers und den SVG-Layern herstellen. Dies beinhaltet die Implementierung der "DeKonstruktions"-Animationen, die Steuerung der Layer-Transitions und die dynamische Anzeige der narrativen Inhalte basierend auf der Scroll-Position.

**Technologie:**
- SVG als Haupt-Rendering-Technologie
- Framer Motion für Timeline- und Layer-Animationen
- Zustand/React Context für State Management

**Kernaufgaben:**
- Scroll-Progress steuert die Sichtbarkeit und Animation der SVG-Layer
- Layer-Transitions (Morph, Fade, Slide) mit Framer Motion
- Dynamische Panels/Overlays für jede Phase
- State-Management für aktuelle Phase und Insights
- Sandbox-Modus: Nach Abschluss der Story kann der Nutzer die Layer und Animationen manuell steuern

**Deliverables:**
- ScrollStoryContainer mit synchronisiertem SVG-Layer-Stack
- Animierte Layer-Transitions
- Panel-Overlay für jede Phase
- Sandbox-Modus mit manueller Steuerung der Layer und Animationen

