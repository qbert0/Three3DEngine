import { a as useStorage } from '../nitro/nitro.mjs';
import { writeFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as yaml from 'js-yaml';

const TOURS_DIR = resolve(process.cwd(), "tours");
async function loadTour(slug) {
  try {
    const storage = useStorage("assets:tours");
    const rawAsset = await storage.getItem(`${slug}.yaml`);
    if (rawAsset) {
      const data = yaml.load(typeof rawAsset === "string" ? rawAsset : JSON.stringify(rawAsset));
      if (data) return data;
    }
  } catch {
  }
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    if (existsSync(filePath)) {
      const raw = readFileSync(filePath, "utf-8");
      const data = yaml.load(raw);
      return data != null ? data : null;
    }
  } catch {
  }
  return null;
}
async function listTours() {
  var _a, _b, _c, _d;
  const tourSlugs = /* @__PURE__ */ new Set();
  try {
    const storage = useStorage("assets:tours");
    const keys = await storage.getKeys();
    for (const key of keys) {
      if (key.endsWith(".yaml")) {
        tourSlugs.add(key.replace(/\.yaml$/, ""));
      }
    }
  } catch {
  }
  try {
    if (existsSync(TOURS_DIR)) {
      const files = readdirSync(TOURS_DIR).filter((f) => f.endsWith(".yaml"));
      for (const file of files) {
        tourSlugs.add(file.replace(/\.yaml$/, ""));
      }
    }
  } catch {
  }
  const entries = [];
  for (const slug of tourSlugs) {
    const tour = await loadTour(slug);
    if (tour) {
      entries.push({
        slug: tour.slug,
        title: tour.title,
        location: tour.location,
        summary: tour.summary,
        theme: tour.theme,
        sceneCount: (_b = (_a = tour.scenes) == null ? void 0 : _a.length) != null ? _b : 0,
        cover: (_d = (_c = tour.scenes) == null ? void 0 : _c[0]) == null ? void 0 : _d.thumbnail
      });
    }
  }
  return entries;
}
function saveTour(slug, config) {
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    const content = yaml.dump(config, { indent: 2, lineWidth: 120 });
    writeFileSync(filePath, content, "utf-8");
  } catch (err) {
    console.warn(`[saveTour] File write skipped on read-only filesystem (normal on Vercel): ${err}`);
  }
}
async function saveSceneMarkers(slug, sceneId, markers) {
  const tour = await loadTour(slug);
  if (!tour) return null;
  const sceneIndex = tour.scenes.findIndex((s) => s.id === sceneId);
  if (sceneIndex === -1) return null;
  tour.scenes[sceneIndex].markers = markers;
  saveTour(slug, tour);
  return tour;
}

export { saveSceneMarkers as a, loadTour as b, listTours as l, saveTour as s };
//# sourceMappingURL=yamlLoader.mjs.map
