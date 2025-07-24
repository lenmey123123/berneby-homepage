# Phase 2: SVG Blueprint & Visuelles System

**Ziel:** Entwicklung des visuellen Kerns der ScrollStory als SVG-Layer-Stack. Gestaltung und Animation der Layer, Panels und Interaktionspunkte.

**Technologie:**
- SVG als Haupt-Rendering-Technologie
- Framer Motion für Layer- und Panel-Animationen
- Tailwind CSS für Styling

**Kernaufgaben:**
- Für jede Story-Phase eine eigene SVG-Layer-Komponente (BlueprintLayer1-4)
- Panels als Overlays, die synchron zur Phase erscheinen
- Animierte Übergänge zwischen den Layern (Fade, Slide, Morph)
- Interaktive Hotspots für Insights/Tooltips (SVG- oder HTML-basiert)
- Responsives und barrierefreies Design

**Deliverables:**
- Vier SVG-Layer-Komponenten mit individuellen Motiven und Animationen
- Panel-Komponente mit animiertem Overlay
- Beispielhafte Insights/Tooltips für mindestens eine Phase
- Storybook-Stories und Unit-Tests für alle Layer und Panels

**Abschlusskriterium:**
- Die ScrollStory zeigt einen animierten SVG-Layer-Stack, Panels und mindestens einen interaktiven Insight.
- Die Architektur ist performant, responsiv und bereit für die Erweiterung um weitere Interaktionen und Sandbox-Modus.