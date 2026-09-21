/**
 * server/content/resolver.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Layer 3: Resolve media URLs (panorama / thumbnail) to absolute URLs.
 * Supports: local dev (relative), MinIO (env prefix), CDN (absolute passthrough).
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { TourConfig } from '~/types/tour';

/**
 * Resolve all media URLs in a TourConfig to absolute URLs.
 * If baseUrl is empty, returns the tour unchanged (local dev mode).
 */
export function resolveMediaUrls(tour: TourConfig, baseUrl: string): TourConfig {
  if (!baseUrl) return tour;

  const prefix = baseUrl.replace(/\/$/, '');
  const resolve = (url: string): string => {
    if (!url || url.startsWith('http://') || url.startsWith('https://')) return url;
    return `${prefix}/${url.replace(/^\/+/, '')}`;
  };

  return {
    ...tour,
    scenes: tour.scenes.map(scene => ({
      ...scene,
      panorama:  resolve(scene.panorama),
      thumbnail: resolve(scene.thumbnail),
    })),
  };
}

/**
 * Given a scene ID, return the full external URL to share it.
 * Format: /experience/:tourId?scene=:sceneId
 */
export function buildSceneShareUrl(
  baseAppUrl: string,
  tourId: string,
  sceneId: string,
): string {
  const base = baseAppUrl.replace(/\/$/, '');
  return `${base}/experience/${tourId}?scene=${sceneId}`;
}
