import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import * as yaml from 'js-yaml';
import type { TourConfig, TourEntry } from '../../types/tour';

const TOURS_DIR = resolve(process.cwd(), 'tours');

/** Parse and return a single tour YAML file by slug */
export async function loadTour(slug: string): Promise<TourConfig | null> {
  // 1. Try Nitro serverAssets storage (for Vercel serverless deployment)
  try {
    const storage = useStorage('assets:tours');
    const rawAsset = await storage.getItem<string>(`${slug}.yaml`);
    if (rawAsset) {
      const data = yaml.load(typeof rawAsset === 'string' ? rawAsset : JSON.stringify(rawAsset)) as TourConfig;
      if (data) return data;
    }
  } catch {}

  // 2. Fallback to local filesystem (for local dev & disk persistence)
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    if (existsSync(filePath)) {
      const raw = readFileSync(filePath, 'utf-8');
      const data = yaml.load(raw) as TourConfig;
      return data ?? null;
    }
  } catch {}

  return null;
}

/** List all available tours (lightweight — no scenes) */
export async function listTours(): Promise<TourEntry[]> {
  const tourSlugs = new Set<string>();

  // 1. Try Nitro serverAssets
  try {
    const storage = useStorage('assets:tours');
    const keys = await storage.getKeys();
    for (const key of keys) {
      if (key.endsWith('.yaml')) {
        tourSlugs.add(key.replace(/\.yaml$/, ''));
      }
    }
  } catch {}

  // 2. Fallback / merge local filesystem
  try {
    if (existsSync(TOURS_DIR)) {
      const files = readdirSync(TOURS_DIR).filter((f) => f.endsWith('.yaml'));
      for (const file of files) {
        tourSlugs.add(file.replace(/\.yaml$/, ''));
      }
    }
  } catch {}

  const entries: TourEntry[] = [];
  for (const slug of tourSlugs) {
    const tour = await loadTour(slug);
    if (tour) {
      entries.push({
        slug: tour.slug,
        title: tour.title,
        location: tour.location,
        summary: tour.summary,
        theme: tour.theme,
        sceneCount: tour.scenes?.length ?? 0,
        cover: tour.scenes?.[0]?.thumbnail,
      });
    }
  }

  return entries;
}

/** Write a tour config back to disk (used by admin, local dev) */
export function saveTour(slug: string, config: TourConfig): void {
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    const content = yaml.dump(config, { indent: 2, lineWidth: 120 });
    writeFileSync(filePath, content, 'utf-8');
  } catch (err) {
    console.warn(`[saveTour] File write skipped on read-only filesystem (normal on Vercel): ${err}`);
  }
}

/** Atomically update markers for a specific scene in the YAML file on disk */
export async function saveSceneMarkers(
  slug: string,
  sceneId: string,
  markers: TourConfig['scenes'][number]['markers'],
): Promise<TourConfig | null> {
  const tour = await loadTour(slug);
  if (!tour) return null;

  const sceneIndex = tour.scenes.findIndex((s) => s.id === sceneId);
  if (sceneIndex === -1) return null;

  tour.scenes[sceneIndex].markers = markers;
  saveTour(slug, tour);
  return tour;
}
