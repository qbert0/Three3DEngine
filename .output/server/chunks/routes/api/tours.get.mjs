globalThis.__timing__.logStart('Load chunks/routes/api/tours.get');import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { t as tourService } from '../../_/tourService.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../_/yamlLoader.mjs';
import 'js-yaml';
import 'ajv';
import 'ajv-formats';

const tours_get = defineEventHandler(() => {
  return {
    service: "tour-catalog",
    items: tourService.listTours()
  };
});

export { tours_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/tours.get');
//# sourceMappingURL=tours.get.mjs.map
