import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

export { places_get as default };
//# sourceMappingURL=places.get.mjs.map
