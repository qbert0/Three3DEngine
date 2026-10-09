globalThis.__timing__.logStart('Load chunks/routes/api/admin/tours/_slug_.delete');import { d as defineEventHandler, f as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { d as deleteTour } from '../../../../_/yamlLoader.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'js-yaml';
import 'ajv';
import 'ajv-formats';

const _slug__delete = defineEventHandler((event) => {
  var _a;
  const slug = (_a = getRouterParam(event, "slug")) != null ? _a : "";
  const result = deleteTour(slug);
  if (result === "protected") {
    throw createError({
      statusCode: 409,
      statusMessage: "\u0110\xE2y l\xE0 tour h\u1EC7 th\u1ED1ng n\xEAn kh\xF4ng th\u1EC3 x\xF3a t\u1EEB trang qu\u1EA3n tr\u1ECB."
    });
  }
  if (result === "not-found") {
    throw createError({ statusCode: 404, statusMessage: "Kh\xF4ng t\xECm th\u1EA5y tour c\u1EA7n x\xF3a." });
  }
  return { ok: true, slug };
});

export { _slug__delete as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/tours/_slug_.delete');
//# sourceMappingURL=_slug_.delete.mjs.map
