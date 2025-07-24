// Narrative Phasen der DeKonstruktion
export type NarrativePhase = 'LIVE_PRODUCT' | 'UI_UX' | 'ARCHITECTURE' | 'CONCEPT';

// Scroll-Fortschritt (0-1)
export type ScrollProgress = number;

// Zentrale State-Schnittstelle für das Storytelling
export interface ScrollStoryState {
  progress: ScrollProgress;
  currentPhase: NarrativePhase;
  activePanel: string | null;
  activeInsight: Insight | null;
}

// SVG-Layer für die 2.5D-Blueprint-Architektur
export interface BlueprintLayer {
  id: string;
  name: string;
  visible: boolean;
  opacity: number;
  zIndex: number;
}

// Panel-Konfiguration (z.B. für HolographicPanel)
export interface Panel {
  id: string;
  phase: NarrativePhase;
  title: string;
  content: string;
  visible: boolean;
}

// Insight für technische Details
export interface Insight {
  id: string;
  title: string;
  content: string;
  phase: NarrativePhase;
  category: 'frontend' | 'backend' | 'architecture' | 'concept';
} 