globalThis.__timing__.logStart('Load chunks/routes/api/admin/media.post');import { d as defineEventHandler, r as readMultipartFormData, c as createError } from '../../../nitro/nitro.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';
import 'node:url';

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const THUMBNAIL_DIR = join(process.cwd(), "public", "thumbnails");
const ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set([".jpg", ".jpeg", ".png", ".webp"]);
const MAX_FILE_SIZE = 60 * 1024 * 1024;
const media_post = defineEventHandler(async (event) => {
  var _a, _b;
  try {
    mkdirSync(UPLOAD_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(THUMBNAIL_DIR, { recursive: true });
  } catch {
  }
  const body = await readMultipartFormData(event);
  if (!(body == null ? void 0 : body.length)) {
    throw createError({ statusCode: 400, statusMessage: "Kh\xF4ng c\xF3 file n\xE0o \u0111\u01B0\u1EE3c g\u1EEDi l\xEAn." });
  }
  const results = [];
  for (const part of body) {
    if (!part.data || !part.filename) continue;
    const ext = extname(part.filename).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      throw createError({ statusCode: 415, statusMessage: "Ch\u1EC9 h\u1ED7 tr\u1EE3 \u1EA3nh JPG, PNG ho\u1EB7c WebP." });
    }
    if (part.data.byteLength > MAX_FILE_SIZE) {
      throw createError({ statusCode: 413, statusMessage: "\u1EA2nh kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 60 MB." });
    }
    let meta;
    try {
      meta = await sharp(part.data, { failOn: "error" }).metadata();
    } catch (error) {
      throw createError({ statusCode: 422, statusMessage: `Kh\xF4ng th\u1EC3 \u0111\u1ECDc \u1EA3nh: ${(_a = error == null ? void 0 : error.message) != null ? _a : String(error)}` });
    }
    if (!meta.width || !meta.height) {
      throw createError({ statusCode: 422, statusMessage: "\u1EA2nh kh\xF4ng c\xF3 k\xEDch th\u01B0\u1EDBc h\u1EE3p l\u1EC7." });
    }
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${baseName}${ext}`;
    const thumbName = `${baseName}.webp`;
    const inputPath = join(UPLOAD_DIR, fileName);
    const thumbPath = join(THUMBNAIL_DIR, thumbName);
    writeFileSync(inputPath, part.data);
    try {
      await sharp(part.data).resize(400, 225, { fit: "cover", position: "centre" }).webp({ quality: 82, effort: 4 }).toFile(thumbPath);
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: `L\u1ED7i t\u1EA1o thumbnail: ${(_b = error == null ? void 0 : error.message) != null ? _b : String(error)}` });
    }
    results.push({
      original: `/uploads/${fileName}`,
      thumbnail: `/thumbnails/${thumbName}`,
      width: meta.width,
      height: meta.height
    });
  }
  return { ok: true, files: results };
});

export { media_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/media.post');
//# sourceMappingURL=media.post.mjs.map
