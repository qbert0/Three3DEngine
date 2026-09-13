import type { TourMarker, TourScene } from '../../../types/tour';

/** Context injected into every plugin */
export interface PluginContext {
  /** Trigger scene navigation */
  navigate: (sceneId: string) => void;
  /** Trigger info panel open */
  openInfo: (content: string, label: string) => void;
  /** Play audio */
  playAudio: (src: string, label: string) => void;
}

/** A single rendered marker returned by a plugin */
export interface PluginMarker {
  id: string;
  position: { yaw: number; pitch: number };
  html: string;
  anchor: string;
  /** Marker data forwarded to click handler */
  data: Record<string, unknown>;
}

/** Plugin interface — implement one per feature */
export interface View360Plugin {
  name: string;
  /** Return PSV markers for the given scene */
  getMarkers(scene: TourScene, ctx: PluginContext): PluginMarker[];
  /** Handle marker click */
  onMarkerClick(marker: TourMarker, ctx: PluginContext): void;
}
