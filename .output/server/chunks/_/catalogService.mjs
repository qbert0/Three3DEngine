globalThis.__timing__.logStart('Load chunks/_/catalogService');const places = [
  {
    slug: "heritage-ridge",
    title: "Heritage Ridge Walk",
    location: "Highland cultural trail",
    summary: "A calm 360 route through a ridge lookout, a timber gallery, and a lantern courtyard.",
    duration: "18 min",
    curator: "View360 Studio",
    scenes: [
      {
        id: "ridge-lookout",
        title: "Ridge Lookout",
        subtitle: "Start above the valley and scan the trail markers.",
        panorama: "/panoramas/heritage-ridge.jpg",
        thumbnail: "/thumbnails/ridge-lookout.jpg",
        initialYaw: 0,
        initialPitch: -0.08,
        hotspots: [
          {
            id: "old-map",
            label: "Trail map",
            yaw: 0.42,
            pitch: -0.08,
            note: "A carved map marks the old walking route between market houses."
          },
          {
            id: "watch-point",
            label: "Watch point",
            yaw: -1.1,
            pitch: 0.02,
            note: "The guide recommends stopping here at sunrise for clear valley light."
          }
        ]
      },
      {
        id: "timber-gallery",
        title: "Timber Gallery",
        subtitle: "A quiet room for local craft and archive photos.",
        panorama: "/panoramas/heritage-ridge.jpg",
        thumbnail: "/thumbnails/timber-gallery.jpg",
        initialYaw: 1.35,
        initialPitch: -0.12,
        hotspots: [
          {
            id: "archive-wall",
            label: "Archive wall",
            yaw: 1.8,
            pitch: 0.04,
            note: "Photos on this wall document how the ridge settlement changed over time."
          },
          {
            id: "craft-table",
            label: "Craft table",
            yaw: 2.75,
            pitch: -0.22,
            note: "The table is used for weaving demonstrations during weekend tours."
          }
        ]
      },
      {
        id: "lantern-court",
        title: "Lantern Courtyard",
        subtitle: "End at the courtyard where evening tours gather.",
        panorama: "/panoramas/heritage-ridge.jpg",
        thumbnail: "/thumbnails/lantern-court.jpg",
        initialYaw: -0.75,
        initialPitch: -0.1,
        hotspots: [
          {
            id: "tea-corner",
            label: "Tea corner",
            yaw: -0.35,
            pitch: -0.18,
            note: "Guests pause here before the final walk down from the ridge."
          },
          {
            id: "lantern-line",
            label: "Lantern line",
            yaw: -1.95,
            pitch: 0.18,
            note: "The lanterns are lit each evening to guide visitors through the courtyard."
          }
        ]
      }
    ]
  }
];

const catalogService = {
  listPlaces() {
    return places.map(({ scenes, ...place }) => {
      var _a;
      return {
        ...place,
        sceneCount: scenes.length,
        cover: (_a = scenes[0]) == null ? void 0 : _a.thumbnail
      };
    });
  },
  getPlace(slug) {
    return places.find((place) => place.slug === slug);
  }
};

export { catalogService as c };;globalThis.__timing__.logEnd('Load chunks/_/catalogService');
//# sourceMappingURL=catalogService.mjs.map
