/**
 * ─────────────────────────────────────────────────────────────────
 * EventBus — Typed pub/sub for the View360 engine
 * All engine events are declared here for full type safety.
 * ─────────────────────────────────────────────────────────────────
 */

import type { TourScene, TourMarker } from '~/types/tour';

// ── Event map: key → payload type ────────────────────────────────
export interface EngineEventMap {
  /** Camera yaw/pitch changed (fires every frame while moving) */
  'camera:move': { yaw: number; pitch: number };
  /** FOV changed via zoom */
  'camera:fov': { fov: number };
  /** Pointer drag started */
  'interaction:dragstart': { x: number; y: number };
  /** Pointer drag ended */
  'interaction:dragend': void;
  /** Scene fully loaded (texture on GPU, hotspots ready) */
  'scene:loaded': { scene: TourScene };
  /** Scene transition started */
  'scene:transition:start': { from: TourScene | null; to: TourScene };
  /** Scene transition completed */
  'scene:transition:end': { scene: TourScene };
  /** Intro animation finished */
  'intro:end': void;
  /** Little Planet countdown started (before auto-play) */
  'intro:countdown:start': { delayMs: number };
  /** Countdown skipped by user click */
  'intro:countdown:skip': { yaw: number; pitch: number };
  /** Hotspot clicked */
  'hotspot:click': { marker: TourMarker };
  /** Hotspot hovered */
  'hotspot:hover': { marker: TourMarker | null };
  /** Navigate to another scene (from nav hotspot) */
  'navigate': { sceneId: string };
  /** Hotspot dragged to new position (designer only) */
  'hotspot:moved': { markerId: string; yaw: number; pitch: number };
  /** Lock camera input (e.g. while dragging a hotspot) */
  'interaction:lock': void;
  /** Unlock camera input */
  'interaction:unlock': void;
  /** Engine destroyed */
  'destroy': void;
}

type Listener<T> = T extends void ? () => void : (payload: T) => void;

export class EventBus {
  private listeners = new Map<string, Set<Listener<any>>>();

  on<K extends keyof EngineEventMap>(event: K, listener: Listener<EngineEventMap[K]>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(listener);
    // Return unsubscribe function
    return () => this.off(event, listener);
  }

  off<K extends keyof EngineEventMap>(event: K, listener: Listener<EngineEventMap[K]>): void {
    this.listeners.get(event)?.delete(listener);
  }

  emit<K extends keyof EngineEventMap>(
    event: K,
    ...args: EngineEventMap[K] extends void ? [] : [payload: EngineEventMap[K]]
  ): void {
    this.listeners.get(event)?.forEach((fn) => (fn as any)(...args));
  }

  once<K extends keyof EngineEventMap>(event: K, listener: Listener<EngineEventMap[K]>): void {
    const unsub = this.on(event, ((...args: any[]) => {
      (listener as any)(...args);
      unsub();
    }) as Listener<EngineEventMap[K]>);
  }

  clear(): void {
    this.listeners.clear();
  }
}
