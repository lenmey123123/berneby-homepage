"use client";

import React, { useRef, useState, useEffect } from "react";
import type { NarrativePhase, ScrollProgress, Panel as PanelType } from "../../types/scrollstory";
import { Panel } from "../../../../berneby-website/src/components/scroll-story/ui/Panel";

// Platzhalter für die SVG-Layer-Komponenten
const BlueprintLayers = ({ phase }: { phase: NarrativePhase }) => {
  // TODO: Später SVG-Layer je nach Phase rendern
  return (
    <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0">
      {/* Beispiel-Layer */}
      {phase === "LIVE_PRODUCT" && <rect x="100" y="100" width="1000" height="600" fill="#0A192F" stroke="#64FFDA" strokeWidth="8" rx="32" />}
      {phase === "UI_UX" && <circle cx="600" cy="400" r="300" fill="#112240" stroke="#64FFDA" strokeWidth="6" />}
      {phase === "ARCHITECTURE" && <polygon points="600,150 1050,650 150,650" fill="#8892B0" stroke="#64FFDA" strokeWidth="6" />}
      {phase === "CONCEPT" && <ellipse cx="600" cy="400" rx="200" ry="100" fill="#E6F1FF" stroke="#64FFDA" strokeWidth="4" />}
    </svg>
  );
};

// Platzhalter für Panels
const panels: PanelType[] = [
  { id: "panel-1", phase: "LIVE_PRODUCT", title: "Perfektion.", content: "Das finale, polierte Produkt. Jede Komponente arbeitet nahtlos zusammen, um eine makellose Nutzererfahrung zu schaffen.", visible: true },
  { id: "panel-2", phase: "UI_UX", title: "Präzision.", content: "Die technische Umsetzung. Sauberer Code, effiziente Prozesse und robuste Infrastruktur bilden das Fundament.", visible: false },
  { id: "panel-3", phase: "ARCHITECTURE", title: "Intuition.", content: "Das konzeptionelle Fundament. Systemdesign, Architektur-Planung und strukturelles Denken.", visible: false },
  { id: "panel-4", phase: "CONCEPT", title: "Potenzial.", content: "Die reine Idee. Kreativität, strategisches Denken und das Potenzial für Innovation.", visible: false },
];

export default function ScrollStoryContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<ScrollProgress>(0);
  const [currentPhase, setCurrentPhase] = useState<NarrativePhase>("LIVE_PRODUCT");

  // Scroll-Progress berechnen (analog zu vorherigem useScrollProgress)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const scrolledPast = windowHeight - rect.top;
      const totalScrollDistance = elementHeight + windowHeight;
      let newProgress = scrolledPast / totalScrollDistance;
      newProgress = Math.max(0, Math.min(1, newProgress));
      setProgress(newProgress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Phasenwechsel basierend auf Progress
  useEffect(() => {
    if (progress <= 0.25) setCurrentPhase("LIVE_PRODUCT");
    else if (progress <= 0.5) setCurrentPhase("UI_UX");
    else if (progress <= 0.75) setCurrentPhase("ARCHITECTURE");
    else setCurrentPhase("CONCEPT");
  }, [progress]);

  // Aktuelles Panel zur Phase finden
  const activePanel = panels.find((p) => p.phase === currentPhase);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
      {/* Sticky SVG-Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* SVG-Layer-Stack */}
        <BlueprintLayers phase={currentPhase} />
        {/* Panel-Overlay */}
        {activePanel && (
          <Panel title={activePanel.title}>
            {activePanel.content}
          </Panel>
        )}
        {/* Debug-Info */}
        <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-3 rounded-lg font-mono text-sm">
          <div>Progress: {(progress * 100).toFixed(1)}%</div>
          <div>Phase: {currentPhase}</div>
          <div>Scroll: {Math.round(progress * 400)}vh</div>
        </div>
      </div>
    </div>
  );
} 