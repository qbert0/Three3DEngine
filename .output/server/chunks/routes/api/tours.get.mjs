import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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

const tours_get = defineEventHandler(() => {
  return {
    service: "tour-catalog",
    items: tourService.listTours()
  };
});

export { tours_get as default };
//# sourceMappingURL=tours.get.mjs.map
