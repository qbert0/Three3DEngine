/**
 * server/api/admin/media.post.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Admin API: Upload image → process with Sharp worker → return URLs.
 * Route: POST /api/admin/media
 * Protected by server/middleware/admin-auth.ts
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const UPLOAD_DIR    = join(process.cwd(), 'public', 'uploads');
const THUMBNAIL_DIR = join(process.cwd(), 'public', 'thumbnails');
const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const MAX_FILE_SIZE = 60 * 1024 * 1024;

export default defineEventHandler(async (event) => {
  // Ensure directories exist
  try { mkdirSync(UPLOAD_DIR,    { recursive: true }); } catch {}
  try { mkdirSync(THUMBNAIL_DIR, { recursive: true }); } catch {}

  // Read multipart body
  const body = await readMultipartFormData(event);
  if (!body?.length) {
    throw createError({ statusCode: 400, statusMessage: 'Không có file nào được gửi lên.' });
  }

  const results: Array<{
    original:  string;
    thumbnail: string;
    width?:    number;
    height?:   number;
  }> = [];

  for (const part of body) {
    if (!part.data || !part.filename) continue;

    const ext = extname(part.filename).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      throw createError({ statusCode: 415, statusMessage: 'Chỉ hỗ trợ ảnh JPG, PNG hoặc WebP.' });
    }
    if (part.data.byteLength > MAX_FILE_SIZE) {
      throw createError({ statusCode: 413, statusMessage: 'Ảnh không được vượt quá 60 MB.' });
    }

    let meta: sharp.Metadata;
    try {
      meta = await sharp(part.data, { failOn: 'error' }).metadata();
    } catch (error: any) {
      throw createError({ statusCode: 422, statusMessage: `Không thể đọc ảnh: ${error?.message ?? String(error)}` });
    }
    if (!meta.width || !meta.height) {
      throw createError({ statusCode: 422, statusMessage: 'Ảnh không có kích thước hợp lệ.' });
    }

    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${baseName}${ext}`;
    const thumbName = `${baseName}.webp`;

    const inputPath  = join(UPLOAD_DIR,    fileName);
    const thumbPath  = join(THUMBNAIL_DIR, thumbName);

    // Keep the original panorama untouched and generate only a lightweight preview.
    writeFileSync(inputPath, part.data);
    try {
      await sharp(part.data)
        .resize(400, 225, { fit: 'cover', position: 'centre' })
        .webp({ quality: 82, effort: 4 })
        .toFile(thumbPath);
    } catch (error: any) {
      throw createError({ statusCode: 500, statusMessage: `Lỗi tạo thumbnail: ${error?.message ?? String(error)}` });
    }

    results.push({
      original:  `/uploads/${fileName}`,
      thumbnail: `/thumbnails/${thumbName}`,
      width: meta.width,
      height: meta.height,
    });
  }

  return { ok: true, files: results };
});
