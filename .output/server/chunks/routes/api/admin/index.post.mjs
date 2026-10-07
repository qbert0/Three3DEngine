globalThis.__timing__.logStart('Load chunks/routes/api/admin/index.post');import { d as defineEventHandler, c as createError, e as setResponseStatus } from '../../../nitro/nitro.mjs';
import { s as saveTour, l as loadTour } from '../../../_/yamlLoader.mjs';
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

function createUniqueSlug() {
  const base = `tour-moi-${Date.now().toString(36)}`;
  let slug = base;
  let suffix = 2;
  while (loadTour(slug)) slug = `${base}-${suffix++}`;
  return slug;
}
const index_post = defineEventHandler((event) => {
  const slug = createUniqueSlug();
  const tour = {
    slug,
    title: "Tour m\u1EDBi",
    location: "Ch\u01B0a c\u1EADp nh\u1EADt",
    summary: "Tour m\u1EDBi ch\u01B0a c\xF3 n\u1ED9i dung.",
    theme: "nature",
    plugins: [],
    mode: "free",
    autoRotate: false,
    showMinimap: false,
    scenes: []
  };
  saveTour(slug, tour);
  if (!loadTour(slug)) {
    throw createError({
      statusCode: 500,
      statusMessage: "File tour \u0111\xE3 \u0111\u01B0\u1EE3c ghi nh\u01B0ng c\u1EA5u h\xECnh kh\xF4ng th\u1EC3 t\u1EA3i l\u1EA1i. H\xE3y ki\u1EC3m tra schema tour."
    });
  }
  setResponseStatus(event, 201);
  return { ok: true, slug, tour };
});

export { index_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/index.post');
//# sourceMappingURL=index.post.mjs.map
