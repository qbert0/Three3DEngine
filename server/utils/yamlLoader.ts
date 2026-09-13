import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import * as yaml from 'js-yaml';
import type { TourConfig, TourEntry } from '../../types/tour';

const TOURS_DIR = resolve(process.cwd(), 'tours');

/** Parse and return a single tour YAML file by slug */
export function loadTour(slug: string): TourConfig | null {
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    const raw = readFileSync(filePath, 'utf-8');
    const data = yaml.load(raw) as TourConfig;
    return data ?? null;
  } catch {
    return null;
  }
}

/** List all available tours (lightweight — no scenes) */
export function listTours(): TourEntry[] {
  try {
    const files = readdirSync(TOURS_DIR).filter((f) => f.endsWith('.yaml'));
    return files
      .map((file) => {
        const slug = file.replace('.yaml', '');
        const tour = loadTour(slug);
        if (!tour) return null;
        return {
          slug: tour.slug,
          title: tour.title,
          location: tour.location,
          summary: tour.summary,
          theme: tour.theme,
          sceneCount: tour.scenes?.length ?? 0,
          cover: tour.scenes?.[0]?.thumbnail,
        } satisfies TourEntry;
      })
      .filter((t): t is TourEntry => t !== null);
  } catch {
    return [];
  }
}

/** Write a tour config back to disk (used by admin) */
export function saveTour(slug: string, config: TourConfig): void {
  const filePath = join(TOURS_DIR, `${slug}.yaml`);
  const content = yaml.dump(config, { indent: 2, lineWidth: 120 });
  writeFileSync(filePath, content, 'utf-8');
}

/** Atomically update markers for a specific scene in the YAML file on disk */
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
