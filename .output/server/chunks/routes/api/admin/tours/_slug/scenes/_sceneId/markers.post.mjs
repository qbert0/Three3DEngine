globalThis.__timing__.logStart('Load chunks/routes/api/admin/tours/_slug/scenes/_sceneId/markers.post');import { d as defineEventHandler, f as getRouterParam, a as readBody, c as createError } from '../../../../../../../nitro/nitro.mjs';
import { a as saveSceneMarkers } from '../../../../../../../_/yamlLoader.mjs';
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

const markers_post = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const sceneId = getRouterParam(event, "sceneId") || "";
  const body = await readBody(event);
  if (!body || !Array.isArray(body.markers)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid markers body" });
  }
  const updatedTour = saveSceneMarkers(slug, sceneId, body.markers);
  if (!updatedTour) {
    throw createError({ statusCode: 404, statusMessage: `Scene '${sceneId}' or Tour '${slug}' not found` });
  }
  return { ok: true, slug, sceneId, tour: updatedTour };
});

export { markers_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/tours/_slug/scenes/_sceneId/markers.post');
//# sourceMappingURL=markers.post.mjs.map
