# ScrollStory Implementierung - Protokoll
**Projekt:** berneby development Website - Interaktive 3D-Artefakt-DeKonstruktion  
**Status:** Phase 1-3 bereits implementiert, ScrollStory-Integration geplant  
**Datum:** 20.07.2025  
**Version:** 1.0

## 📊 **ANFANGSANALYSE - ABGESCHLOSSEN**

### **Bestehende Website-Architektur (Phase 1-3)**
✅ **Foundation & Design System (Phase 1)**
- Next.js 15 mit App Router und Server Components
- Tailwind CSS 4 mit "High-Tech Nostalgia" Design System
- Biome für Code-Qualität und Formatierung
- Storybook für Komponenten-Entwicklung
- CI/CD Pipeline mit GitHub Actions → Vercel

✅ **Narrative & Core Frontend (Phase 2)**
- ScrollytellingContainer mit Framer Motion
- NarrativeChapter-Komponenten für 4-Phasen-Story
- BlobCursor mit orbitaler Anziehung
- ProjectGallery mit horizontalem Scrolling
- TiltedCard mit 3D-Hover-Effekten

✅ **Backend & CMS Integration (Phase 3)**
- Strapi CMS für Projekt-Daten
- NestJS Backend für Kontakt-Logik
- CollaborativeBlueprintModal
- QuickConnectModal
- Docker-Compose für lokale Entwicklung

### **ScrollStory-Integration-Punkt**
Die ScrollStory wird **vor** dem bestehenden ScrollytellingContainer integriert:
```
Homepage Flow:
1. ScrollStory (neue 3D-Experience) - 400vh
2. ScrollytellingContainer (bestehend) - 400vh  
3. ProjectGallery (bestehend) - nach Scroll-Ende
```

### **Technologie-Stack für ScrollStory**
- **Three.js** + **React Three Fiber** für 3D-Rendering
- **GSAP** für Timeline-Animationen und Scroll-Synchronisation
- **Zustand** für State Management
- **Framer Motion** für UI-Animationen (bereits vorhanden)
- **Tailwind CSS** für UI-Styling (bereits vorhanden)

## 🏗️ **ARCHITEKTUR-ENTSCHEIDUNGEN**

### **1. Komponenten-Struktur**
```
src/
├── components/
│   └── scroll-story/
│       ├── 3d/
│       │   ├── Artefact.tsx          # 3D-Artefakt mit Schichten
│       │   └── Scene.tsx             # Three.js Canvas & Post-Processing
│       ├── ui/
│       │   ├── HolographicPanel.tsx  # Holografische Tafeln
│       │   └── ExpertInsight.tsx     # Detail-Modals
│       └── ScrollStoryContainer.tsx  # Haupt-Wrapper
├── hooks/
│   └── useScrollProgress.ts          # Scroll-Tracking Hook
├── lib/
│   └── three/
│       ├── materials.ts              # Three.js Materialien
│       └── animations.ts             # GSAP Animationen
└── types/
    └── scrollstory.ts                # TypeScript Typen
```

### **2. State Management**
```typescript
interface ScrollStoryState {
  progress: number;                    // 0-1 Scroll-Fortschritt
  currentPhase: NarrativePhase;       // LIVE_PRODUCT | UI_UX | ARCHITECTURE | CONCEPT
  isSandboxMode: boolean;             // Sandbox-Modus aktiviert
  activeInsight: ExpertInsight | null; // Aktueller Expert-Insight
  isWebGLSupported: boolean;          // WebGL-Fallback
}
```

### **3. Integration in bestehende Homepage**
```typescript
// src/app/page.tsx
export default async function Home() {
  const projects = await fetchProjects();
  
  return (
    <main className="relative min-h-screen">
      {/* Neue ScrollStory vor bestehendem Scrollytelling */}
      <ScrollStoryContainer />
      
      {/* Bestehender ScrollytellingContainer */}
      <ScrollytellingContainer projects={projects} />
    </main>
  );
}
```

## 🎯 **IMPLEMENTIERUNGS-PHASEN**

### **Phase 1: Foundation & Core Architecture (2-3 Wochen)**
**Ziel:** Grundlegende Three.js-Integration, Scroll-Tracking, Basis-Komponenten

**Tasks:**
- [ ] 1.1: Three.js + React Three Fiber Setup
- [ ] 1.2: ScrollStoryContainer mit Scroll-Tracking
- [ ] 1.3: useScrollProgress Hook
- [ ] 1.4: Basis 3D-Szene mit Platzhalter-Artefakt
- [ ] 1.5: Performance-Baseline und Testing

### **Phase 2: 3D Artefakt & Visual System (3-4 Wochen)**
**Ziel:** Komplexe 3D-Geometrie, Material-System, visuelle Effekte

**Tasks:**
- [ ] 2.1: Mehrschichtige Artefakt-Geometrie (Kern, Datenströme, Hülle)
- [ ] 2.2: Fortgeschrittene Materialien (Kristallglas, Datenstrom, Metall)
- [ ] 2.3: HolographicPanel UI-Komponente
- [ ] 2.4: Post-Processing (Bloom, Depth of Field)
- [ ] 2.5: Hologramm-Flicker-Effekte

### **Phase 3: Narrative & Scroll Integration (2-3 Wochen)**
**Ziel:** GSAP-Timeline-Synchronisation, Kamera-Choreografie, DeKonstruktions-Animationen

**Tasks:**
- [ ] 3.1: GSAP-Timeline mit Scroll-Synchronisation
- [ ] 3.2: Kamera-Animationen für jede narrative Phase
- [ ] 3.3: Artefakt-DeKonstruktions-Animationen
- [ ] 3.4: HolographicPanel-Übergänge
- [ ] 3.5: State Management für narrative Phasen

### **Phase 4: Interactivity & User Experience (2-3 Wochen)**
**Ziel:** Hover-Interaktionen, Expert-Insights, Sandbox-Modus

**Tasks:**
- [ ] 4.1: R3F-Event-Handler für Hover
- [ ] 4.2: ExpertInsight-Komponente
- [ ] 4.3: Sandbox-Modus mit Leva-UI
- [ ] 4.4: Material-Editor
- [ ] 4.5: Interface-Scan-Übergangsanimation

### **Phase 5: Optimization & Integration (1-2 Wochen)**
**Ziel:** Performance-Optimierung, Fallbacks, finale Integration

**Tasks:**
- [ ] 5.1: Bundle-Größe optimieren
- [ ] 5.2: 3D-Performance optimieren
- [ ] 5.3: WebGL-Fallbacks implementieren
- [ ] 5.4: Accessibility-Verbesserungen
- [ ] 5.5: Finale Integration in die Website

## 🔧 **TECHNISCHE SPEZIFIKATIONEN**

### **1. Three.js Setup**
```typescript
// Scene.tsx
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'

export function Scene() {
  return (
    <Canvas frameloop="demand">
      <EffectComposer>
        <Bloom intensity={1.5} />
        <DepthOfField focusDistance={0.02} focalLength={0.5} bokehScale={2} />
      </EffectComposer>
      <Artefact />
    </Canvas>
  )
}
```

### **2. GSAP Timeline-Synchronisation**
```typescript
// ScrollStoryContainer.tsx
useEffect(() => {
  if (timeline && progress !== undefined) {
    timeline.seek(progress * timeline.duration())
  }
}, [progress, timeline])
```

### **3. Zustand State Management**
```typescript
// store/scrollStoryStore.ts
import { create } from 'zustand'

interface ScrollStoryStore {
  progress: number
  currentPhase: NarrativePhase
  isSandboxMode: boolean
  activeInsight: ExpertInsight | null
  setProgress: (progress: number) => void
  setCurrentPhase: (phase: NarrativePhase) => void
  setSandboxMode: (active: boolean) => void
  setActiveInsight: (insight: ExpertInsight | null) => void
}
```

## 🎨 **DESIGN-SYSTEM INTEGRATION**

### **1. Farben (bereits definiert in Tailwind)**
```typescript
// Verwendung der bestehenden "High-Tech Nostalgia" Palette
const colors = {
  background: '#0A192F',      // --background
  surface: '#112240',         // --surface  
  textPrimary: '#E6F1FF',     // --text-primary
  textSecondary: '#8892B0',   // --text-secondary
  accent: '#64FFDA',          // --accent
  accentHover: '#52d3b4',     // --accent-hover
}
```

### **2. Typografie (bereits definiert)**
```typescript
// Verwendung der bestehenden Font-Familien
const fonts = {
  heading: 'var(--font-inter)',  // --font-heading
  body: 'var(--font-inter)',     // --font-body
}
```

### **3. Spacing (bereits definiert)**
```typescript
// Verwendung der bestehenden Spacing-Skala
const spacing = {
  1: '4px',   2: '8px',   3: '12px',  4: '16px',
  5: '20px',  6: '24px',  7: '28px',  8: '32px',
  // ... weitere Werte
}
```

## 🧪 **TESTING-STRATEGIE**

### **1. Unit-Tests**
- **Vitest** für alle neuen Komponenten
- **@testing-library/react** für React-Komponenten
- **Storybook** für visuelle Tests

### **2. Integration-Tests**
- **Playwright** für End-to-End-Tests
- ScrollStory-Integration mit bestehender Website
- Performance-Tests für 3D-Rendering

### **3. Performance-Tests**
- **Lighthouse** für Core Web Vitals
- **Bundle-Analyzer** für Code-Splitting
- **FPS-Monitoring** für 3D-Performance

## 🚀 **PERFORMANCE-ZIELE**

### **1. Core Web Vitals**
- **LCP:** < 2.5s
- **FID:** < 100ms  
- **CLS:** < 0.1
- **Lighthouse Score:** > 90

### **2. 3D-Performance**
- **Framerate:** Stabile 60 FPS
- **Bundle-Größe:** < 2MB (inkl. Three.js)
- **Ladezeit:** < 3 Sekunden

### **3. Browser-Kompatibilität**
- **Chrome:** Vollständige Unterstützung
- **Firefox:** Vollständige Unterstützung
- **Safari:** Vollständige Unterstützung
- **Edge:** Vollständige Unterstützung

## ♿ **ACCESSIBILITY (A11Y)**

### **1. WCAG 2.1 AA Compliance**
- **Tastaturnavigation** für alle interaktiven Elemente
- **Screenreader-Unterstützung** mit ARIA-Attributen
- **Reduzierte Animationen** für `prefers-reduced-motion`
- **Alternative Steuerung** für 3D-Interaktionen

### **2. WebGL-Fallbacks**
- **2D-SVG-Version** für leistungsschwache Geräte
- **Statische Bilder-Sequenz** für inkompatible Browser
- **Progressive Enhancement** von 2D zu 3D

## 📋 **NÄCHSTE SCHRITTE**

### **Sofortige Aktionen:**
1. **Dependencies installieren:** Three.js, React Three Fiber, GSAP, Zustand
2. **Verzeichnisstruktur erstellen:** ScrollStory-Komponenten und Hooks
3. **TypeScript-Typen definieren:** NarrativePhase, ScrollStoryState
4. **Basis-Scene erstellen:** Three.js Canvas mit Platzhalter-Artefakt

### **Phase 1 Start:**
- **Task 1.1:** Three.js + React Three Fiber Setup
- **Task 1.2:** ScrollStoryContainer mit Scroll-Tracking
- **Task 1.3:** useScrollProgress Hook

---

**Status:** ✅ Anfangsanalyse abgeschlossen  
**Nächster Schritt:** Freigabe für Phase 1, Task 1.1  
**Bereit für:** ScrollStory-Revolution! 🚀 