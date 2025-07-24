# Phase 1: Foundation & Core Architecture (SVG/2.5D)

**Ziel:** Aufbau der grundlegenden Projektinfrastruktur für die SVG-basierte ScrollStory. Einrichtung des SVG/2.5D-Layer-Stacks, der Panel-Overlays und der zentralen State- und Scroll-Logik.

**Technologie:**
- React (Next.js 15)
- Tailwind CSS
- Framer Motion (für SVG- und Panel-Animationen)
- Keine 3D-/Three.js-Abhängigkeiten mehr

**Kernaufgaben:**
- SVG-Layer-Stack als zentrales visuelles Element
- Panel-Overlay für die Schlüsselwörter und Inhalte jeder Phase
- Scroll-Tracking und Phasensteuerung
- Performance-Baseline und Testing

**Deliverables:**
- `ScrollStoryContainer.tsx` als zentrales Storytelling-Wrapper
- SVG-Layer-Komponenten für jede Phase (BlueprintLayer1-4)
- Panel-Komponente für Overlays
- Typen für Phasen, Panels, Layer
- Unit- und Integrationstests für Scroll-Logik und Rendering

**Abschlusskriterium:**
- Die Seite zeigt einen SVG-Layer-Stack und ein Panel-Overlay, die sich beim Scrollen synchron zur Phase verändern.
- Die Architektur ist performant, testbar und bereit für die Erweiterung um Interaktivität und Animationen.
