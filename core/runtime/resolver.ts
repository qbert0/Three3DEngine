/**
 * core/runtime/resolver.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Client-side scene reference resolver.
 * Docs: "core/runtime — resolver client"
 *
 * Resolves a SceneKey ("tourId#sceneId") or SceneRef to a concrete
 * fetch URL and validates that a scene exists within a loaded tour.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { SceneRef, SceneKey } from '~/core/domain';
import type { TourConfig, TourScene } from '~/types/tour';

/** Parse a "tourId#sceneId" key into SceneRef */
export function parseSceneKey(key: SceneKey): SceneRef {
  const sep = key.indexOf('#');
  if (sep === -1) throw new Error(`Invalid SceneKey: '${key}' — expected 'tourId#sceneId'`);
  return {
    tourId:  key.slice(0, sep),
    sceneId: key.slice(sep + 1),
  };
}

/** Serialize a SceneRef to "tourId#sceneId" key */
export function toSceneKey(ref: SceneRef): SceneKey {
  return `${ref.tourId}#${ref.sceneId}` as SceneKey;
}

/** Build the API URL to fetch a tour by slug */
export function tourApiUrl(tourId: string): string {
  return `/api/tours/${tourId}`;
}

/**
 * Find a scene within a loaded TourConfig.
 * Returns undefined if the scene does not exist.
 */
export function resolveScene(tour: TourConfig, sceneId: string): TourScene | undefined {
  return tour.scenes.find(s => s.id === sceneId);
}

/**
 * Resolve the initial scene for a tour.
 * Prefers initialSceneId → falls back to first scene.
 */
export function resolveInitialScene(tour: TourConfig, preferredId?: string): TourScene {
  if (preferredId) {
    const found = resolveScene(tour, preferredId);
    if (found) return found;
  }
  if (tour.initialSceneId) {
    const found = resolveScene(tour, tour.initialSceneId);
    if (found) return found;
  }
  return tour.scenes[0];
}
