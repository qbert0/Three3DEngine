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
import { runInWorker } from '~/workers/media/processor';

const UPLOAD_DIR    = join(process.cwd(), 'public', 'uploads');
const THUMBNAIL_DIR = join(process.cwd(), 'public', 'thumbnails');

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

    const ext      = extname(part.filename).toLowerCase() || '.jpg';
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${baseName}${ext}`;
    const thumbName = `${baseName}.webp`;

    const inputPath  = join(UPLOAD_DIR,    fileName);
    const thumbPath  = join(THUMBNAIL_DIR, thumbName);

    // Write uploaded file to disk
    writeFileSync(inputPath, part.data);

    // Get metadata
    const meta = await runInWorker({ op: 'metadata', inputPath });
    if (!meta.ok) {
      throw createError({ statusCode: 422, statusMessage: `Không thể đọc ảnh: ${meta.error}` });
    }

    // Generate thumbnail
    const thumb = await runInWorker({ op: 'thumbnail', inputPath, outputPath: thumbPath });
    if (!thumb.ok) {
      throw createError({ statusCode: 500, statusMessage: `Lỗi tạo thumbnail: ${thumb.error}` });
    }

    results.push({
      original:  `/uploads/${fileName}`,
      thumbnail: `/thumbnails/${thumbName}`,
      width:     meta.width,
      height:    meta.height,
    });
  }

  return { ok: true, files: results };
});
