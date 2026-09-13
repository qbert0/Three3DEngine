import { d as defineEventHandler, g as getRouterParam, c as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import { t as tourService } from '../../../_/tourService.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../../_/yamlLoader.mjs';
import 'js-yaml';

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug") || "";
  const tour = tourService.getTour(slug);
  if (!tour) {
    throw createError({ statusCode: 404, statusMessage: `Tour '${slug}' not found` });
  }
  const config = useRuntimeConfig(event);
  return {
    service: "tour-experience",
    item: tourService.withMedia(tour, config.public.mediaBaseUrl)
  };
});

export { _slug__get as default };
//# sourceMappingURL=_slug_.get.mjs.map
