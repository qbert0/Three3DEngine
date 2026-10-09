globalThis.__timing__.logStart('Load chunks/routes/api/admin/panel-image.post');import { d as defineEventHandler, b as getRequestHeader, c as createError, e as readFormData } from '../../../nitro/nitro.mjs';
import { mkdir } from 'node:fs/promises';
import { extname, join } from 'node:path';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:crypto';
import 'node:url';

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set([".jpg", ".jpeg", ".png", ".webp"]);
const MAX_FILE_SIZE = 200 * 1024 * 1024;
const MAX_FILE_SIZE_LABEL = "200 MB";
const panelImage_post = defineEventHandler(async (event) => {
  var _a, _b;
  const contentLength = Number((_a = getRequestHeader(event, "content-length")) != null ? _a : 0);
  if (contentLength > MAX_FILE_SIZE + 1024 * 1024) {
    throw createError({ statusCode: 413, statusMessage: `\u1EA2nh 2D kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 ${MAX_FILE_SIZE_LABEL}.` });
  }
  const form = await readFormData(event);
  const uploaded = form.get("file");
  if (!uploaded || typeof uploaded === "string" || typeof uploaded.arrayBuffer !== "function") {
    throw createError({ statusCode: 400, statusMessage: "Kh\xF4ng c\xF3 \u1EA3nh n\xE0o \u0111\u01B0\u1EE3c g\u1EEDi l\xEAn." });
  }
  const extension = extname(uploaded.name).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    throw createError({ statusCode: 415, statusMessage: "Ch\u1EC9 h\u1ED7 tr\u1EE3 \u1EA3nh JPG, PNG ho\u1EB7c WebP." });
  }
  if (uploaded.size > MAX_FILE_SIZE) {
    throw createError({ statusCode: 413, statusMessage: `\u1EA2nh 2D kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 ${MAX_FILE_SIZE_LABEL}.` });
  }
  const imageData = Buffer.from(await uploaded.arrayBuffer());
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}-panel.webp`;
  await mkdir(UPLOAD_DIR, { recursive: true });
  try {
    await sharp(imageData, { failOn: "error", sequentialRead: true }).rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true }).webp({ quality: 86, effort: 4 }).toFile(join(UPLOAD_DIR, fileName));
  } catch (error) {
    throw createError({
      statusCode: 422,
      statusMessage: `Kh\xF4ng th\u1EC3 x\u1EED l\xFD \u1EA3nh 2D: ${(_b = error == null ? void 0 : error.message) != null ? _b : String(error)}`
    });
  }
  return { ok: true, file: { url: `/uploads/${fileName}` } };
});

export { panelImage_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/panel-image.post');
//# sourceMappingURL=panel-image.post.mjs.map
