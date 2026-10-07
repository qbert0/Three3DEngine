globalThis.__timing__.logStart('Load chunks/routes/api/admin/media.delete');import { d as defineEventHandler, a as readBody } from '../../../nitro/nitro.mjs';
import { existsSync } from 'node:fs';
import { unlink } from 'node:fs/promises';
import { basename, join } from 'node:path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';
import 'node:url';

const MANAGED_MEDIA_DIRS = {
  "/uploads/": join(process.cwd(), "public", "uploads"),
  "/thumbnails/": join(process.cwd(), "public", "thumbnails"),
  "/editor-previews/": join(process.cwd(), "public", "editor-previews")
};
const media_delete = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  const paths = [...new Set((_a = body == null ? void 0 : body.paths) != null ? _a : [])];
  const deleted = [];
  const skipped = [];
  for (const publicPath of paths) {
    const prefix = Object.keys(MANAGED_MEDIA_DIRS).find((candidate) => publicPath.startsWith(candidate));
    if (!prefix) {
      skipped.push(publicPath);
      continue;
    }
    const fileName = basename((_b = publicPath.split(/[?#]/u, 1)[0]) != null ? _b : "");
    if (!fileName || fileName === "." || fileName === "..") {
      skipped.push(publicPath);
      continue;
    }
    const filePath = join(MANAGED_MEDIA_DIRS[prefix], fileName);
    if (!existsSync(filePath)) {
      skipped.push(publicPath);
      continue;
    }
    await unlink(filePath);
    deleted.push(publicPath);
  }
  return { ok: true, deleted, skipped };
});

export { media_delete as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/media.delete');
//# sourceMappingURL=media.delete.mjs.map
