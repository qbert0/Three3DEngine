globalThis.__timing__.logStart('Load chunks/routes/api/tours/_slug_.get');import { d as defineEventHandler, f as getRouterParam, c as createError, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
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
import 'ajv';
import 'ajv-formats';

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

export { _slug__get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/tours/_slug_.get');
//# sourceMappingURL=_slug_.get.mjs.map
