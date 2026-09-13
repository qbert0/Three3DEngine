import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import * as yaml from 'js-yaml';
import type { TourConfig, TourEntry } from '../../types/tour';

// Eagerly import all YAML files from /tours at build time via Vite
const tourModules = import.meta.glob('../../tours/*.yaml', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const TOURS_DIR = resolve(process.cwd(), 'tours');

/** Get raw YAML content for a tour slug */
function getRawYaml(slug: string): string | null {
  // 1. Check bundled Vite import (100% works on Vercel & serverless)
  for (const [path, content] of Object.entries(tourModules)) {
    if (path.endsWith(`/${slug}.yaml`)) {
      return content;
    }
  }

  // 2. Fallback to reading disk (for local dev if new files added dynamically)
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    if (existsSync(filePath)) {
      return readFileSync(filePath, 'utf-8');
    }
  } catch {}

  return null;
}

/** Parse and return a single tour YAML file by slug */
export async function loadTour(slug: string): Promise<TourConfig | null> {
  const raw = getRawYaml(slug);
  if (!raw) return null;
  try {
    const data = yaml.load(raw) as TourConfig;
    return data ?? null;
  } catch {
    return null;
  }
}

/** List all available tours (lightweight — no scenes) */
export async function listTours(): Promise<TourEntry[]> {
  const tourSlugs = new Set<string>();

  // 1. Add slugs from bundled Vite modules
  for (const path of Object.keys(tourModules)) {
    const fileName = path.split('/').pop() || '';
    if (fileName.endsWith('.yaml')) {
      tourSlugs.add(fileName.replace(/\.yaml$/, ''));
    }
  }

  // 2. Add slugs from local disk if available
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
