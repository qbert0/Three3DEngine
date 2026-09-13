import { loadTour, listTours } from '../utils/yamlLoader';
import type { TourConfig, TourEntry } from '../../types/tour';

export const tourService = {
  /** Get a single tour by slug. Returns null if not found. */
  async getTour(slug: string): Promise<TourConfig | null> {
    return await loadTour(slug);
  },

  /** List all tours (lightweight, no scenes included). */
  async listTours(): Promise<TourEntry[]> {
    return await listTours();
  },

  /**
   * Resolve media URLs.
   * If a mediaBaseUrl is set (e.g. MinIO), prefix all /images and /thumbnails paths.
   */
  withMedia(tour: TourConfig, baseUrl = ''): TourConfig {
    if (!baseUrl) return tour;
    const prefix = baseUrl.replace(/\/$/, '');
    const prefixUrl = (url: string) =>
      url.startsWith('http') ? url : `${prefix}/${url.replace(/^\//, '')}`;

    return {
      ...tour,
      scenes: tour.scenes.map((scene) => ({
        ...scene,
        panorama: prefixUrl(scene.panorama),
        thumbnail: prefixUrl(scene.thumbnail),
      })),
    };
  },
};
