globalThis.__timing__.logStart('Load chunks/routes/api/places/_slug_.get');import { d as defineEventHandler, f as getRouterParam, c as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { c as catalogService } from '../../../_/catalogService.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const mediaService = {
  withPublicMedia(place, baseUrl = "") {
    if (!baseUrl) {
      return place;
    }
    return {
      ...place,
      scenes: place.scenes.map((scene) => ({
        ...scene,
        panorama: scene.panorama.startsWith("http") ? scene.panorama : `${baseUrl.replace(/\/$/, "")}/${scene.panorama.replace(/^\//, "")}`
      }))
    };
  }
};

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug") || "";
  const place = catalogService.getPlace(slug);
  if (!place) {
    throw createError({
      statusCode: 404,
      statusMessage: "Experience not found"
    });
  }
  const config = useRuntimeConfig(event);
  return {
    service: "experience-service",
    item: mediaService.withPublicMedia(place, config.public.mediaBaseUrl)
  };
});

export { _slug__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/places/_slug_.get');
//# sourceMappingURL=_slug_.get.mjs.map
