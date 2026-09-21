// ─────────────────────────────────────────────────────────────────────────────
// Tour type system — supports plugin-based markers
// ─────────────────────────────────────────────────────────────────────────────

/** Navigation marker — moves to another scene */
export interface NavigationMarker {
  id: string;
  plugin: 'navigation';
  label: string;
  yaw: number;
  pitch: number;
  targetScene: string;
}

/** Info marker — shows a text popup */
export interface InfoMarker {
  id: string;
  plugin: 'info';
  label: string;
  yaw: number;
  pitch: number;
  content: string;
}

/** Audio marker — plays an audio file */
export interface AudioMarker {
  id: string;
  plugin: 'audio';
  label: string;
  yaw: number;
  pitch: number;
  src: string;
}

/** AI Chat marker — opens AI Q&A panel */
export interface AIChatMarker {
  id: string;
  plugin: 'ai-chat';
  label: string;
  yaw: number;
  pitch: number;
  context?: string; // extra context to give the AI about this location
}

/** Union of all marker types */
export type TourMarker = NavigationMarker | InfoMarker | AudioMarker | AIChatMarker;

/** A single 360° scene within a tour */
export interface TourScene {
  id: string;
  title: string;
  subtitle: string;
  panorama: string;
  thumbnail: string;
  initialYaw: number;
  initialPitch: number;
  coordinates?: [number, number];
  markers: TourMarker[];
}

/** Full tour configuration — loaded from YAML */
export interface TourConfig {
  slug: string;
  title: string;
  location: string;
  summary: string;
  duration?: string;
  theme?: string;            // 'nature' | 'tourism' | 'minimal'
  initialSceneId?: string;   // optional: ID of initial scene to load
  plugins?: string[];        // enabled plugins list
  mode?: 'free' | 'guided';  // 'free' | 'guided'
  guidedDuration?: number;   // seconds per scene in guided mode
  autoRotate?: boolean;      // auto rotate panorama
  showMinimap?: boolean;     // show mini map
  transition?: 'crossfade-pan' | 'radial-blur' | 'mask-wipe' | 'vignette' | 'split-slide';
  transitionDuration?: number;
  transitionColor?: string;
  thumbnailFallbackAfterMs?: number;
  preloadEnabled?: boolean;
  preloadRadius?: number;
  minOverlayMs?: number;
  scenes: TourScene[];
}

/** Lightweight tour entry for listing (no scenes) */
export interface TourEntry {
  slug: string;
  title: string;
  location: string;
  summary: string;
  sceneCount: number;
  cover?: string;
  theme?: string;
}
