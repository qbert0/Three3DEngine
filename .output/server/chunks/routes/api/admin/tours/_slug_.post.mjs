import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError } from '../../../../nitro/nitro.mjs';
import { s as saveTour } from '../../../../_/yamlLoader.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'js-yaml';

const _slug__post = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const body = await readBody(event);
  if (!body || !body.slug || !Array.isArray(body.scenes)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid tour config body" });
  }
  try {
    saveTour(slug, body);
    return { ok: true, slug };
  } catch (err) {
    throw createError({ statusCode: 500, statusMessage: `Could not save tour: ${err}` });
  }
});

export { _slug__post as default };
//# sourceMappingURL=_slug_.post.mjs.map
