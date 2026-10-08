import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { basename, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const toursDir = resolve(root, 'tours');
const target = resolve(root, 'server/data/tours/all.generated.json');
const files = (await readdir(toursDir))
  .filter(file => file.endsWith('.yaml'))
  .sort();

const tours = {};
for (const file of files) {
  const parsed = load(await readFile(resolve(toursDir, file), 'utf8'));
  const fallbackSlug = basename(file, '.yaml');
  const slug = parsed && typeof parsed === 'object' && typeof parsed.slug === 'string'
    ? parsed.slug
    : fallbackSlug;
  tours[slug] = parsed;
}

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(tours, null, 2)}\n`, 'utf8');
console.log(`[tour-data] Đồng bộ ${files.length} tour YAML → all.generated.json`);
