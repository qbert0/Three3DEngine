globalThis.__timing__.logStart('Load chunks/routes/api/admin/audio.post');import { d as defineEventHandler, r as readMultipartFormData, c as createError } from '../../../nitro/nitro.mjs';
import { mkdirSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';
import 'node:url';

const AUDIO_DIR = join(process.cwd(), "public", "uploads", "audio");
const ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set([".wav", ".mp3", ".m4a", ".ogg", ".aac", ".flac"]);
const MAX_FILE_SIZE = 25 * 1024 * 1024;
const audio_post = defineEventHandler(async (event) => {
  var _a;
  const parts = await readMultipartFormData(event);
  const part = parts == null ? void 0 : parts.find((item) => item.filename && item.data);
  if (!(part == null ? void 0 : part.filename) || !part.data) {
    throw createError({ statusCode: 400, statusMessage: "Kh\xF4ng c\xF3 file \xE2m thanh \u0111\u01B0\u1EE3c g\u1EEDi l\xEAn." });
  }
  const extension = extname(part.filename).toLowerCase();
  const isAudioMime = ((_a = part.type) == null ? void 0 : _a.startsWith("audio/")) || part.type === "application/octet-stream";
  if (!ALLOWED_EXTENSIONS.has(extension) || !isAudioMime) {
    throw createError({ statusCode: 415, statusMessage: "Ch\u1EC9 h\u1ED7 tr\u1EE3 WAV, MP3, M4A, OGG, AAC ho\u1EB7c FLAC." });
  }
  if (part.data.byteLength > MAX_FILE_SIZE) {
    throw createError({ statusCode: 413, statusMessage: "File \xE2m thanh kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 25 MB." });
  }
  mkdirSync(AUDIO_DIR, { recursive: true });
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`;
  writeFileSync(join(AUDIO_DIR, fileName), part.data);
  return {
    ok: true,
    file: {
      url: `/uploads/audio/${fileName}`,
      name: part.filename,
      size: part.data.byteLength,
      mimeType: part.type
    }
  };
});

export { audio_post as default };;globalThis.__timing__.logEnd('Load chunks/routes/api/admin/audio.post');
//# sourceMappingURL=audio.post.mjs.map
