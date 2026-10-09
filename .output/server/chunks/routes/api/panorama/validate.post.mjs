globalThis.__timing__.logStart('Load chunks/routes/api/panorama/validate.post');import { d as defineEventHandler, i as getHeader, r as readMultipartFormData, c as createError, a as readBody } from '../../../nitro/nitro.mjs';
import sharp from 'sharp';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const MIN_WIDTH = 4096;
const MIN_HEIGHT = 2048;
const IDEAL_WIDTH = 5760;
const IDEAL_RATIO_MIN = 1.9;
const IDEAL_RATIO_MAX = 2.1;
const MAX_FILE_SIZE_MB = 60;
const THUMBNAIL_MAX_PX = 1024;
const validate_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const errors = [];
  const warnings = [];
  const recommendations = [];
  let buffer;
  let filename = "unknown";
  let fileSizeKB = 0;
  const contentType = (_a = getHeader(event, "content-type")) != null ? _a : "";
  if (contentType.includes("multipart/form-data")) {
    const form = await readMultipartFormData(event);
    const file = form == null ? void 0 : form.find((f) => f.name === "file");
    if (!(file == null ? void 0 : file.data)) {
      throw createError({ statusCode: 400, statusMessage: 'Kh\xF4ng t\xECm th\u1EA5y file "file" trong form-data.' });
    }
    buffer = file.data;
    filename = (_b = file.filename) != null ? _b : "unknown";
    fileSizeKB = Math.round(buffer.length / 1024);
  } else {
    const body = await readBody(event);
    if (!(body == null ? void 0 : body.url)) {
      throw createError({ statusCode: 400, statusMessage: "C\u1EA7n g\u1EEDi url ho\u1EB7c file multipart." });
    }
    const res = await fetch(body.url);
    if (!res.ok) {
      throw createError({ statusCode: 400, statusMessage: `Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c URL: ${res.status}` });
    }
    const ab = await res.arrayBuffer();
    buffer = Buffer.from(ab);
    filename = (_c = body.url.split("/").pop()) != null ? _c : "unknown";
    fileSizeKB = Math.round(buffer.length / 1024);
  }
  const img = sharp(buffer);
  const meta = await img.metadata();
  const width = (_d = meta.width) != null ? _d : 0;
  const height = (_e = meta.height) != null ? _e : 0;
  const format = (_f = meta.format) != null ? _f : "unknown";
  const aspectRatio = height > 0 ? +(width / height).toFixed(3) : 0;
  if (fileSizeKB > MAX_FILE_SIZE_MB * 1024) {
    warnings.push(`File qu\xE1 l\u1EDBn (${(fileSizeKB / 1024).toFixed(1)} MB). Khuy\u1EBFn ngh\u1ECB d\u01B0\u1EDBi ${MAX_FILE_SIZE_MB} MB.`);
  }
  if (fileSizeKB < 500) {
    warnings.push(`File r\u1EA5t nh\u1ECF (${fileSizeKB} KB) \u2014 c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB n\xE9n qu\xE1 m\u1EA1nh.`);
  }
  if (width <= THUMBNAIL_MAX_PX || height <= THUMBNAIL_MAX_PX) {
    errors.push(`\u1EA2nh qu\xE1 nh\u1ECF (${width}\xD7${height}). \u0110\xE2y c\xF3 th\u1EC3 l\xE0 thumbnail, kh\xF4ng ph\u1EA3i panorama.`);
  }
  if (aspectRatio < IDEAL_RATIO_MIN || aspectRatio > IDEAL_RATIO_MAX) {
    errors.push(`T\u1EF7 l\u1EC7 ${aspectRatio}:1 kh\xF4ng ph\xF9 h\u1EE3p. Equirectangular c\u1EA7n t\u1EF7 l\u1EC7 2:1 (width = height \xD7 2).`);
  }
  if (width < MIN_WIDTH || height < MIN_HEIGHT) {
    errors.push(`\u0110\u1ED9 ph\xE2n gi\u1EA3i ${width}\xD7${height} th\u1EA5p h\u01A1n t\u1ED1i thi\u1EC3u ${MIN_WIDTH}\xD7${MIN_HEIGHT}.`);
  } else if (width < IDEAL_WIDTH) {
    warnings.push(`\u0110\u1ED9 ph\xE2n gi\u1EA3i ${width}px. Khuy\u1EBFn ngh\u1ECB ${IDEAL_WIDTH}px \u0111\u1EC3 tr\xE1nh m\u1EDD khi zoom.`);
  }
  if (format !== "jpeg" && format !== "webp") {
    warnings.push(`Format "${format}" \u2014 JPEG ho\u1EB7c WebP \u0111\u01B0\u1EE3c \u01B0u ti\xEAn cho panorama.`);
  }
  let jpegQualityEstimate = -1;
  if (format === "jpeg") {
    const reencoded = await sharp(buffer).jpeg({ quality: 95 }).toBuffer();
    const ratio = buffer.length / reencoded.length;
    if (ratio < 0.35) {
      jpegQualityEstimate = 50;
      warnings.push(`JPEG quality \u01B0\u1EDBc l\u01B0\u1EE3ng th\u1EA5p (~50) \u2014 \u1EA3nh c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB n\xE9n qu\xE1 m\u1EA1nh.`);
    } else if (ratio < 0.55) {
      jpegQualityEstimate = 65;
      warnings.push(`JPEG quality \u01B0\u1EDBc l\u01B0\u1EE3ng trung b\xECnh (~65).`);
    } else if (ratio < 0.75) {
      jpegQualityEstimate = 80;
    } else {
      jpegQualityEstimate = 90;
    }
  }
  let sharpnessScore = 0;
  try {
    const gray = await sharp(buffer).resize(512, 256, { fit: "fill" }).grayscale().raw().toBuffer({ resolveWithObject: true });
    const { data, info } = gray;
    const totalPx = info.width * info.height;
    let sum = 0, sumSq = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
      sumSq += data[i] * data[i];
    }
    const mean = sum / totalPx;
    const variance = sumSq / totalPx - mean * mean;
    sharpnessScore = +variance.toFixed(1);
    if (sharpnessScore < 150) {
      warnings.push(`\u0110\u1ED9 n\xE9t \u01B0\u1EDBc l\u01B0\u1EE3ng th\u1EA5p (score: ${sharpnessScore}). \u1EA2nh c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB denoise ho\u1EB7c over-smooth.`);
    } else if (sharpnessScore < 350) {
      recommendations.push(`\u0110\u1ED9 n\xE9t trung b\xECnh (score: ${sharpnessScore}). C\xF3 th\u1EC3 th\xEAm nh\u1EB9 sharpen.`);
    }
  } catch {
    warnings.push("Kh\xF4ng th\u1EC3 t\xEDnh to\xE1n \u0111\u1ED9 n\xE9t.");
  }
  if (errors.length === 0 && warnings.length === 0) {
    recommendations.push("\u2713 \u1EA2nh \u0111\u1EA1t ti\xEAu chu\u1EA9n panorama 360\xB0.");
  }
  if (width >= IDEAL_WIDTH && sharpnessScore >= 350) {
    recommendations.push("\u2713 Ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh r\u1EA5t t\u1ED1t.");
  }
  return {
    ok: errors.length === 0,
    filename,
    width,
    height,
    aspectRatio,
    format,
    fileSizeKB,
    jpegQualityEstimate,
    sharpnessScore,
    errors,
    warnings,
    recommendations
  };
});

export { validate_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/panorama/validate.post');
//# sourceMappingURL=validate.post.mjs.map
