import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { writeFileSync, existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as yaml from 'js-yaml';

const tourModules = globalThis._importMeta_.glob("../../tours/*.yaml", {
  query: "?raw",
  import: "default",
  eager: true
});
const TOURS_DIR = resolve(process.cwd(), "tours");
function getRawYaml(slug) {
  for (const [path, content] of Object.entries(tourModules)) {
    if (path.endsWith(`/${slug}.yaml`)) {
      return content;
    }
  }
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    if (existsSync(filePath)) {
      return readFileSync(filePath, "utf-8");
    }
  } catch {
  }
  return null;
}
async function loadTour(slug) {
  const raw = getRawYaml(slug);
  if (!raw) return null;
  try {
    const data = yaml.load(raw);
    return data != null ? data : null;
  } catch {
    return null;
  }
}
async function listTours() {
  var _a, _b, _c, _d;
  const tourSlugs = /* @__PURE__ */ new Set();
  for (const path of Object.keys(tourModules)) {
    const fileName = path.split("/").pop() || "";
    if (fileName.endsWith(".yaml")) {
      tourSlugs.add(fileName.replace(/\.yaml$/, ""));
    }
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
