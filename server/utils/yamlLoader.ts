import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import * as yaml from 'js-yaml';
import type { TourConfig, TourEntry } from '../../types/tour';
import { trangBayTour } from '../data/tours/trang-bay';

// In-memory backend data source — compiled natively into Nitro server on Vercel
const staticTours: Record<string, TourConfig> = {
  'trang-bay': trangBayTour,
};

const TOURS_DIR = resolve(process.cwd(), 'tours');

/** Parse and return a single tour config by slug */
export function loadTour(slug: string): TourConfig | null {
  // 1. Check native backend TypeScript data (100% reliable on Vercel & serverless)
  if (staticTours[slug]) {
    return JSON.parse(JSON.stringify(staticTours[slug]));
  }

  // 2. Fallback to reading disk (for local dev custom YAML files)
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
export function listTours(): TourEntry[] {
  const tourSlugs = new Set<string>(Object.keys(staticTours));

  // Merge local disk YAML files if available
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
    const tour = loadTour(slug);
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

/** Write a tour config back to disk (used by admin in local dev) */
export function saveTour(slug: string, config: TourConfig): void {
  // Update in-memory static tour if present
  if (staticTours[slug]) {
    staticTours[slug] = JSON.parse(JSON.stringify(config));
  }

  // Write to YAML file on disk (if disk is writable)
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    const content = yaml.dump(config, { indent: 2, lineWidth: 120 });
    writeFileSync(filePath, content, 'utf-8');
  } catch (err) {
    console.warn(`[saveTour] Disk write skipped (normal on Vercel): ${err}`);
  }
}

/** Atomically update markers for a specific scene in the tour config */
export function saveSceneMarkers(
  slug: string,
  sceneId: string,
  markers: TourConfig['scenes'][number]['markers'],
): TourConfig | null {
  const tour = loadTour(slug);
  if (!tour) return null;

  const sceneIndex = tour.scenes.findIndex((s) => s.id === sceneId);
  if (sceneIndex === -1) return null;

  tour.scenes[sceneIndex].markers = markers;
  saveTour(slug, tour);
  return tour;
}
