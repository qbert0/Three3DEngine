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
  /**
   * 3D rotation of the nav arrow (all in radians, applied AFTER lookAt toward sphere center).
   *
   * rotZ — spin around the camera-facing normal axis
   *         0 = ^^ points up, PI/2 = points right, PI = points down
   * rotX — tilt forward/backward (X axis = right on sphere surface)
   *         positive = tilt top away from camera (lay flat forward)
   * rotY — swivel left/right (Y axis = up on sphere surface)
   *         positive = face left, negative = face right
   *
   * `rotation` is kept for backward compatibility (alias for rotZ).
   */
  rotation?: number;   // backward compat = rotZ
  rotZ?: number;
  rotX?: number;
  rotY?: number;
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

/**
 * Video / Iframe marker — embeds an HTML element (YouTube, video, etc.)
 * directly inside the panorama at a specific yaw/pitch position.
 */
export interface VideoMarker {
  id: string;
  plugin: 'video';
  label: string;
  yaw: number;
  pitch: number;
  /** YouTube embed URL, video URL, or any iframe-compatible URL */
  src: string;
  /** Display width in pixels (default 480) */
  width?: number;
  /** Display height in pixels (default 270 = 16:9 at 480px) */
  height?: number;
  /** Yaw rotation offset of the panel in radians (default 0) */
  rotationYaw?: number;
}

/** Object showcase — opens a manually supplied 3D/360 render image and description. */
export interface Model3DMarker {
  id: string;
  plugin: 'model3d';
  label: string;
  yaw: number;
  pitch: number;
  /** Image/render supplied by the tour designer; the app does not generate it. */
  image: string;
  content?: string;
}

/** Union of all marker types */
export type TourMarker = NavigationMarker | InfoMarker | AudioMarker | AIChatMarker | VideoMarker | Model3DMarker;


/** A single 360° scene within a tour */
export interface TourScene {
  id: string;
  title: string;
  subtitle: string;
  panorama: string;
  thumbnail: string;
  initialYaw: number;
  initialPitch: number;
  /** Panorama brightness multiplier. 1 = original, recommended range 0.6–1.6. */
  brightness?: number;
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
