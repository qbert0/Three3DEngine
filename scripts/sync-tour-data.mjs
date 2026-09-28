import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { load } from 'js-yaml';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'tours/trang-bay.yaml');
const target = resolve(root, 'server/data/tours/trang-bay.generated.json');
const parsed = load(await readFile(source, 'utf8'));

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8');
console.log('[tour-data] Đồng bộ trang-bay.yaml → trang-bay.generated.json');
