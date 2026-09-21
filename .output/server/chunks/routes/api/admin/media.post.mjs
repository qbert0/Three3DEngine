import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};globalThis.__timing__.logStart('Load chunks/routes/api/admin/media.post');import { d as defineEventHandler, r as readMultipartFormData, c as createError } from '../../../nitro/nitro.mjs';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { Worker, workerData, parentPort } from 'node:worker_threads';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';

async function runTask(task) {
  var _a;
  if (!existsSync(task.inputPath)) {
    return { ok: false, error: `File kh\xF4ng t\u1ED3n t\u1EA1i: ${task.inputPath}` };
  }
  try {
    if (task.op === "metadata") {
      const meta = await sharp(task.inputPath).metadata();
      return { ok: true, width: meta.width, height: meta.height, format: meta.format };
    }
    if (task.op === "thumbnail") {
      await sharp(task.inputPath).resize(400, 225, { fit: "cover", position: "centre" }).webp({ quality: 82, effort: 4 }).toFile(task.outputPath);
      return { ok: true, outputPath: task.outputPath };
    }
    if (task.op === "resize") {
      await sharp(task.inputPath).resize(task.width, task.height, { fit: "inside", withoutEnlargement: true }).webp({ quality: 88, effort: 4 }).toFile(task.outputPath);
      return { ok: true, outputPath: task.outputPath };
    }
    return { ok: false, error: `Unknown op: ${task.op}` };
  } catch (e) {
    return { ok: false, error: (_a = e == null ? void 0 : e.message) != null ? _a : String(e) };
  }
}
if (workerData && parentPort) {
  runTask(workerData).then((result) => parentPort.postMessage(result)).catch((e) => parentPort.postMessage({ ok: false, error: String(e) }));
}
const __filename$1 = fileURLToPath(globalThis._importMeta_.url);
function runInWorker(task) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename$1, { workerData: task });
    worker.once("message", resolve);
    worker.once("error", reject);
    worker.once("exit", (code) => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}`));
    });
  });
}

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const THUMBNAIL_DIR = join(process.cwd(), "public", "thumbnails");
const media_post = defineEventHandler(async (event) => {
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
    const ext = extname(part.filename).toLowerCase() || ".jpg";
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${baseName}${ext}`;
    const thumbName = `${baseName}.webp`;
    const inputPath = join(UPLOAD_DIR, fileName);
    const thumbPath = join(THUMBNAIL_DIR, thumbName);
    writeFileSync(inputPath, part.data);
    const meta = await runInWorker({ op: "metadata", inputPath });
    if (!meta.ok) {
      throw createError({ statusCode: 422, statusMessage: `Kh\xF4ng th\u1EC3 \u0111\u1ECDc \u1EA3nh: ${meta.error}` });
    }
    const thumb = await runInWorker({ op: "thumbnail", inputPath, outputPath: thumbPath });
    if (!thumb.ok) {
      throw createError({ statusCode: 500, statusMessage: `L\u1ED7i t\u1EA1o thumbnail: ${thumb.error}` });
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
