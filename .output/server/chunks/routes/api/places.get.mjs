globalThis.__timing__.logStart('Load chunks/routes/api/places.get');import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { c as catalogService } from '../../_/catalogService.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const places_get = defineEventHandler(() => {
  return {
    service: "catalog-service",
    items: catalogService.listPlaces()
  };
});

export { places_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/places.get');
//# sourceMappingURL=places.get.mjs.map
