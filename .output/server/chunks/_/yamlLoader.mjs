import { writeFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as yaml from 'js-yaml';

const trangBayTour = {
  slug: "trang-bay",
  title: "Tour 360\xB0 Tr\u1EA3ng Bay",
  location: "R\u1EEBng N\xFAi Tr\u1EA3ng Bay",
  summary: "Kh\xE1m ph\xE1 to\xE0n c\u1EA3nh 360\xB0 t\u1EA1i khu v\u1EF1c Tr\u1EA3ng Bay v\xE0 v\xF9ng l\xE2n c\u1EADn. Xoay \u1EA3nh \u0111\u1EC3 quan s\xE1t chi ti\u1EBFt \u0111\u1ECBa h\xECnh, th\u1EA3m th\u1EF1c v\u1EADt v\xE0 c\u1EA3nh quan thi\xEAn nhi\xEAn.",
  duration: "T\u1EF1 do",
  theme: "nature",
  initialSceneId: "scene-c7",
  plugins: ["navigation", "info"],
  scenes: [
    {
      id: "scene-c1",
      title: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
      subtitle: "To\xE0n c\u1EA3nh khu v\u1EF1c trung t\xE2m, \u0111i\u1EC3m kh\u1EDFi \u0111\u1EA7u c\u1EE7a h\xE0nh tr\xECnh.",
      panorama: "/images/1788771876123.jpg",
      thumbnail: "/thumbnails/new/1788771876123.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789271284325",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 3.952,
          pitch: -0.178,
          targetScene: "scene-c2"
        }
      ]
    },
    {
      id: "scene-c2",
      title: "R\xECa R\u1EEBng Th\u01B0a",
      subtitle: "Ranh gi\u1EDBi gi\u1EEFa r\u1EEBng v\xE0 tr\u1EA3ng c\u1ECF, \xE1nh s\xE1ng l\u1ECDc qua t\xE1n l\xE1.",
      panorama: "/images/1788771876132.jpg",
      thumbnail: "/thumbnails/new/1788771876132.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789273532238",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 5.624,
          pitch: -0.134,
          targetScene: "scene-c4"
        },
        {
          id: "marker-navigation-1789273566997",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 2.384,
          pitch: -0.154,
          targetScene: "scene-c1"
        },
        {
          id: "marker-navigation-1789273577503",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 1.453,
          pitch: -0.178,
          targetScene: "scene-tb1-5"
        }
      ]
    },
    {
      id: "scene-c3",
      title: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
      subtitle: "Con \u0111\u01B0\u1EDDng nh\u1ECF xuy\xEAn qua th\u1EA3m th\u1EF1c v\u1EADt, d\u1EA5u ch\xE2n ng\u01B0\u1EDDi \u0111i tr\u01B0\u1EDBc.",
      panorama: "/images/1788771876143.jpg",
      thumbnail: "/thumbnails/new/1788771876143.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "c3-next",
          plugin: "navigation",
          label: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
          yaw: 0,
          pitch: -0.35,
          targetScene: "scene-c4"
        },
        {
          id: "marker-navigation-1789273324054",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 1.961,
          pitch: -0.054,
          targetScene: "scene-tb2-3"
        }
      ]
    },
    {
      id: "scene-c4",
      title: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
      subtitle: "Kh\xF4ng gian m\u1EDF r\u1ED9ng, t\u1EA7m nh\xECn 360\xB0 kh\xF4ng b\u1ECB che khu\u1EA5t.",
      panorama: "/images/1788771876162.jpg",
      thumbnail: "/thumbnails/new/1788771876162.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "c4-next",
          plugin: "navigation",
          label: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
          yaw: 0,
          pitch: -0.35,
          targetScene: "scene-c5"
        },
        {
          id: "marker-navigation-1789271121754",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 2.796,
          pitch: -0.093,
          targetScene: "scene-c2"
        },
        {
          id: "marker-navigation-1789271195387",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 1.562,
          pitch: -0.078,
          targetScene: "scene-c3"
        }
      ]
    },
    {
      id: "scene-c5",
      title: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
      subtitle: "D\xE3y n\xFAi xa ph\xEDa ch\xE2n tr\u1EDDi, m\xE2y tr\xF4i nh\u1EB9 tr\xEAn \u0111\u1EC9nh.",
      panorama: "/images/1788771876173.jpg",
      thumbnail: "/thumbnails/new/1788771876173.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "c5-next",
          plugin: "navigation",
          label: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
          yaw: 0,
          pitch: -0.35,
          targetScene: "scene-c7"
        },
        {
          id: "marker-navigation-1789273292044",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 2.069,
          pitch: -0.189,
          targetScene: "scene-c4"
        }
      ]
    },
    {
      id: "scene-c6",
      title: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
      subtitle: "Th\u1EA3m c\xE2y b\u1EE5i d\xE0y \u0111\u1EB7c, n\u01A1i chuy\u1EC3n ti\u1EBFp gi\u1EEFa r\u1EEBng v\xE0 tr\u1EA3ng.",
      panorama: "/images/1788771876183.jpg",
      thumbnail: "/thumbnails/new/1788771876183.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: []
    },
    {
      id: "scene-c7",
      title: "\u0110i\u1EC3m H\u1EE3p L\u01B0u",
      subtitle: "N\u01A1i ba h\u01B0\u1EDBng \u0111i g\u1EB7p nhau \u2013 c\u1EEDa ng\xF5 v\xE0o khu Tr\u1EA3ng Bay.",
      panorama: "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
      thumbnail: "/thumbnails/new/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789273190758",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 0.536,
          pitch: -0.257,
          targetScene: "scene-c5"
        },
        {
          id: "marker-info-1789274132769",
          plugin: "info",
          label: "Th\xF4ng tin",
          yaw: 0.955,
          pitch: 0.016,
          content: "Khu du l\u1ECBch \u0111\u1ED3ng v\u0103n. (\u0110ang trong th\u1EDDi gian tu s\u1EEDa)"
        }
      ]
    },
    {
      id: "scene-tb1-1",
      title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1",
      subtitle: "B\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh t\u1EA1i c\u1EEDa ng\xF5 c\u1EE7a Tr\u1EA3ng Bay 1.",
      panorama: "/images/trbay1/1788771876074.jpg",
      thumbnail: "/thumbnails/new/1788771876074.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789273970389",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 4.077,
          pitch: -0.252,
          targetScene: "scene-tb1-2"
        }
      ]
    },
    {
      id: "scene-tb1-2",
      title: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
      subtitle: "M\u1EB7t tr\u1EA3ng ph\u1EB3ng r\u1ED9ng, c\u1ECF xanh m\u01B0\u1EDBt tr\u1EA3i d\xE0i t\u1EDBi t\u1EADn ch\xE2n tr\u1EDDi.",
      panorama: "/images/trbay1/1788771876090.jpg",
      thumbnail: "/thumbnails/new/1788771876090.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789270414069",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 1.495,
          pitch: -0.242,
          targetScene: "scene-tb1-1"
        },
        {
          id: "marker-navigation-1789270462666",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 4.29,
          pitch: -0.182,
          targetScene: "scene-tb1-3"
        }
      ]
    },
    {
      id: "scene-tb1-3",
      title: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
      subtitle: "H\u01B0\u1EDBng nh\xECn ph\xEDa \u0110\xF4ng, n\u01A1i n\u1EAFng s\xE1ng chi\u1EBFu r\xF5 t\u1EEBng c\u1ECDng c\u1ECF.",
      panorama: "/images/trbay1/1788771876098.jpg",
      thumbnail: "/thumbnails/new/1788771876098.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789270498796",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 4.039,
          pitch: -0.211,
          targetScene: "scene-tb1-2"
        },
        {
          id: "marker-navigation-1789271486659",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 5.916,
          pitch: -0.276,
          targetScene: "scene-tb1-4"
        },
        {
          id: "marker-info-1789274077392",
          plugin: "info",
          label: "Th\xF4ng tin",
          yaw: 0.911,
          pitch: -0.151,
          content: "L\xE0 m\u1ED9t c\xE1i g\xEC \u0111\xF3 m\xE0 d\xF9ng \u0111\u1EC3 \u0111\u1EF1ng \u0111\u1ED3 v\u1EADt"
        }
      ]
    },
    {
      id: "scene-tb1-4",
      title: "Trung T\xE2m Tr\u1EA3ng Bay 1",
      subtitle: "\u0110i\u1EC3m gi\u1EEFa c\u1EE7a Tr\u1EA3ng Bay 1, to\xE0n c\u1EA3nh t\u1EE9 ph\xEDa kh\xF4ng b\u1ECB che.",
      panorama: "/images/trbay1/1788771876106.jpg",
      thumbnail: "/thumbnails/new/1788771876106.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789271449611",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 2.752,
          pitch: -0.386,
          targetScene: "scene-tb1-3"
        },
        {
          id: "marker-navigation-1789271561280",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 4.266,
          pitch: -0.107,
          targetScene: "scene-tb1-5"
        }
      ]
    },
    {
      id: "scene-tb1-5",
      title: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
      subtitle: "Ranh gi\u1EDBi t\u1EF1 nhi\xEAn gi\u1EEFa Tr\u1EA3ng Bay 1 v\xE0 Tr\u1EA3ng Bay 2.",
      panorama: "/images/trbay1/1788771876114.jpg",
      thumbnail: "/thumbnails/new/1788771876114.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "tb1-5-next",
          plugin: "navigation",
          label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
          yaw: 1.57,
          pitch: -0.3,
          targetScene: "scene-c2"
        },
        {
          id: "marker-navigation-1789273840125",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 3.511,
          pitch: -0.072,
          targetScene: "scene-tb1-4"
        }
      ]
    },
    {
      id: "scene-tb2-1",
      title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
      subtitle: "B\u1EAFt \u0111\u1EA7u kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 2, \u0111\u1ECBa h\xECnh l\u1EA1 h\u01A1n.",
      panorama: "/images/trbay2/1788771876042.jpg",
      thumbnail: "/thumbnails/new/1788771876042.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: []
    },
    {
      id: "scene-tb2-2",
      title: "V\xF9ng C\u1ECF Lau Cao",
      subtitle: "C\u1ECF lau cao v\xFAt che ph\u1EE7, t\u1EA1o h\xE0nh lang xanh t\u1EF1 nhi\xEAn.",
      panorama: "/images/trbay2/1788771876050.jpg",
      thumbnail: "/thumbnails/new/1788771876050.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: []
    },
    {
      id: "scene-tb2-3",
      title: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
      subtitle: "C\xE2y r\u1EEBng cao v\xFAt ph\xEDa T\xE2y, b\xF3ng m\xE1t che ph\u1EE7 m\u1EB7t tr\u1EA3ng.",
      panorama: "/images/trbay2/1788771876058.jpg",
      thumbnail: "/thumbnails/new/1788771876058.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "marker-navigation-1789273467238",
          plugin: "navigation",
          label: "\u0110i\u1EC3m \u0111\u1EBFn m\u1EDBi",
          yaw: 4.835,
          pitch: -0.184,
          targetScene: "scene-c3"
        }
      ]
    },
    {
      id: "scene-tb2-4",
      title: "Cu\u1ED1i Tr\u1EA3ng Bay 2",
      subtitle: "\u0110i\u1EC3m k\u1EBFt th\xFAc h\xE0nh tr\xECnh \u2013 nh\xECn l\u1EA1i to\xE0n b\u1ED9 con \u0111\u01B0\u1EDDng \u0111\xE3 \u0111i.",
      panorama: "/images/trbay2/1788771876067.jpg",
      thumbnail: "/thumbnails/new/1788771876067.jpg",
      initialYaw: 0,
      initialPitch: -0.05,
      markers: [
        {
          id: "tb2-4-prev",
          plugin: "navigation",
          label: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
          yaw: 3.14,
          pitch: -0.35,
          targetScene: "scene-tb2-3"
        },
        {
          id: "tb2-4-home",
          plugin: "navigation",
          label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
          yaw: 1.57,
          pitch: -0.3,
          targetScene: "scene-c1"
        }
      ]
    }
  ]
};

const staticTours = {
  "trang-bay": trangBayTour
};
const TOURS_DIR = resolve(process.cwd(), "tours");
function loadTour(slug) {
  if (staticTours[slug]) {
    return JSON.parse(JSON.stringify(staticTours[slug]));
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
function listTours() {
  var _a, _b, _c, _d;
  const tourSlugs = new Set(Object.keys(staticTours));
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
    const tour = loadTour(slug);
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
  if (staticTours[slug]) {
    staticTours[slug] = JSON.parse(JSON.stringify(config));
  }
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    const content = yaml.dump(config, { indent: 2, lineWidth: 120 });
    writeFileSync(filePath, content, "utf-8");
  } catch (err) {
    console.warn(`[saveTour] Disk write skipped (normal on Vercel): ${err}`);
  }
}
function saveSceneMarkers(slug, sceneId, markers) {
  const tour = loadTour(slug);
  if (!tour) return null;
  const sceneIndex = tour.scenes.findIndex((s) => s.id === sceneId);
  if (sceneIndex === -1) return null;
  tour.scenes[sceneIndex].markers = markers;
  saveTour(slug, tour);
  return tour;
}

export { saveSceneMarkers as a, loadTour as b, listTours as l, saveTour as s };
//# sourceMappingURL=yamlLoader.mjs.map
