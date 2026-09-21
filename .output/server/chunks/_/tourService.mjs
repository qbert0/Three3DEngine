globalThis.__timing__.logStart('Load chunks/_/tourService');import { l as listTours, b as loadTour } from './yamlLoader.mjs';

const tourService = {
  /** Get a single tour by slug. Returns null if not found. */
  getTour(slug) {
    return loadTour(slug);
  },
  /** List all tours (lightweight, no scenes included). */
  listTours() {
    return listTours();
  },
  /**
   * Resolve media URLs.
   * If a mediaBaseUrl is set (e.g. MinIO), prefix all /images and /thumbnails paths.
   */
  withMedia(tour, baseUrl = "") {
    if (!baseUrl) return tour;
    const prefix = baseUrl.replace(/\/$/, "");
    const prefixUrl = (url) => url.startsWith("http") ? url : `${prefix}/${url.replace(/^\//, "")}`;
    return {
      ...tour,
      scenes: tour.scenes.map((scene) => ({
        ...scene,
        panorama: prefixUrl(scene.panorama),
        thumbnail: prefixUrl(scene.thumbnail)
      }))
    };
  }
};

export { tourService as t };;globalThis.__timing__.logEnd('Load chunks/_/tourService');
//# sourceMappingURL=tourService.mjs.map
