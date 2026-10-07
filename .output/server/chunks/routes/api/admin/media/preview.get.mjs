globalThis.__timing__.logStart('Load chunks/routes/api/admin/media/preview.get');import { d as defineEventHandler, g as getQuery, c as createError, s as sendRedirect } from '../../../../nitro/nitro.mjs';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve, sep, join } from 'node:path';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';

const PUBLIC_DIR = resolve(process.cwd(), "public");
const PREVIEW_DIR = join(PUBLIC_DIR, "editor-previews");
sharp.cache(false);
sharp.concurrency(1);
const preview_get = defineEventHandler(async (event) => {
  var _a;
  const source = String((_a = getQuery(event).path) != null ? _a : "");
  if (!source.startsWith("/") || source.startsWith("//") || /^https?:/iu.test(source)) {
    throw createError({ statusCode: 400, statusMessage: "\u0110\u01B0\u1EDDng d\u1EABn panorama kh\xF4ng h\u1EE3p l\u1EC7." });
  }
  const cleanSource = source.split(/[?#]/u, 1)[0];
  const inputPath = resolve(PUBLIC_DIR, `.${cleanSource}`);
  if (!inputPath.startsWith(`${PUBLIC_DIR}${sep}`) || !existsSync(inputPath)) {
    throw createError({ statusCode: 404, statusMessage: "Kh\xF4ng t\xECm th\u1EA5y panorama ngu\u1ED3n." });
  }
  mkdirSync(PREVIEW_DIR, { recursive: true });
  const name = `${createHash("sha1").update(cleanSource).digest("hex")}.webp`;
  const outputPath = join(PREVIEW_DIR, name);
  if (!existsSync(outputPath)) {
    await sharp(inputPath, { sequentialRead: true }).resize(2048, 1024, { fit: "fill", withoutEnlargement: true }).webp({ quality: 86, effort: 3 }).toFile(outputPath);
  }
  return sendRedirect(event, `/editor-previews/${name}`, 302);
});

export { preview_get as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/media/preview.get');
//# sourceMappingURL=preview.get.mjs.map
