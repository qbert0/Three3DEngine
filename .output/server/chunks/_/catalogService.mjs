const places = [
  {
    slug: "heritage-ridge",
    title: "Tour 360\xB0 Th\u1EF1c \u0110\u1ECBa",
    location: "Tr\u1EA3ng Bay \u2013 Khu V\u1EF1c R\u1EEBng N\xFAi",
    summary: "Kh\xE1m ph\xE1 to\xE0n c\u1EA3nh 360\xB0 t\u1EA1i khu v\u1EF1c Tr\u1EA3ng Bay v\xE0 v\xF9ng l\xE2n c\u1EADn. Xoay \u1EA3nh \u0111\u1EC3 quan s\xE1t chi ti\u1EBFt \u0111\u1ECBa h\xECnh, th\u1EA3m th\u1EF1c v\u1EADt v\xE0 c\u1EA3nh quan thi\xEAn nhi\xEAn.",
    duration: "T\u1EF1 do",
    curator: "View360 Studio",
    scenes: [
      // ── Khu vực trung tâm – 7 ảnh ──────────────────────────────────
      {
        id: "scene-c1",
        title: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
        subtitle: "To\xE0n c\u1EA3nh khu v\u1EF1c trung t\xE2m, \u0111i\u1EC3m kh\u1EDFi \u0111\u1EA7u c\u1EE7a h\xE0nh tr\xECnh.",
        panorama: "/images/1788771876123.jpg",
        thumbnail: "/thumbnails/new/1788771876123.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c1-next",
            label: "R\xECa R\u1EEBng Th\u01B0a",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn R\xECa R\u1EEBng Th\u01B0a.",
            targetSceneId: "scene-c2"
          },
          {
            id: "c1-trbay1",
            label: "Tr\u1EA3ng Bay 1",
            yaw: -1.57,
            pitch: -0.3,
            note: "Kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-1"
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
        hotspots: [
          {
            id: "c2-prev",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i \u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng.",
            targetSceneId: "scene-c1"
          },
          {
            id: "c2-next",
            label: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng.",
            targetSceneId: "scene-c3"
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
        hotspots: [
          {
            id: "c3-prev",
            label: "R\xECa R\u1EEBng Th\u01B0a",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i R\xECa R\u1EEBng Th\u01B0a.",
            targetSceneId: "scene-c2"
          },
          {
            id: "c3-next",
            label: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng.",
            targetSceneId: "scene-c4"
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
        hotspots: [
          {
            id: "c4-prev",
            label: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng.",
            targetSceneId: "scene-c3"
          },
          {
            id: "c4-next",
            label: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn G\xF3c Nh\xECn Ph\xEDa N\xFAi.",
            targetSceneId: "scene-c5"
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
        hotspots: [
          {
            id: "c5-prev",
            label: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng.",
            targetSceneId: "scene-c4"
          },
          {
            id: "c5-next",
            label: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p.",
            targetSceneId: "scene-c6"
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
        hotspots: [
          {
            id: "c6-prev",
            label: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i G\xF3c Nh\xECn Ph\xEDa N\xFAi.",
            targetSceneId: "scene-c5"
          },
          {
            id: "c6-next",
            label: "\u0110i\u1EC3m H\u1EE3p L\u01B0u",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn \u0110i\u1EC3m H\u1EE3p L\u01B0u.",
            targetSceneId: "scene-c7"
          }
        ]
      },
      {
        id: "scene-c7",
        title: "\u0110i\u1EC3m H\u1EE3p L\u01B0u",
        subtitle: "N\u01A1i ba h\u01B0\u1EDBng \u0111i g\u1EB7p nhau \u2013 c\u1EEDa ng\xF5 v\xE0o khu Tr\u1EA3ng Bay.",
        panorama: "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
        thumbnail: "/thumbnails/new/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c7-prev",
            label: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p.",
            targetSceneId: "scene-c6"
          },
          {
            id: "c7-trbay2",
            label: "Tr\u1EA3ng Bay 2",
            yaw: 1.57,
            pitch: -0.3,
            note: "Kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          }
        ]
      },
      // ── Trảng Bay 1 – 5 ảnh ────────────────────────────────────────
      {
        id: "scene-tb1-1",
        title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1",
        subtitle: "B\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh t\u1EA1i c\u1EEDa ng\xF5 c\u1EE7a Tr\u1EA3ng Bay 1.",
        panorama: "/images/trbay1/1788771876074.jpg",
        thumbnail: "/thumbnails/new/1788771876074.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-1-back",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 3.14,
            pitch: -0.3,
            note: "Quay l\u1EA1i \u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng.",
            targetSceneId: "scene-c1"
          },
          {
            id: "tb1-1-next",
            label: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn \u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng.",
            targetSceneId: "scene-tb1-2"
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
        hotspots: [
          {
            id: "tb1-2-prev",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-1"
          },
          {
            id: "tb1-2-next",
            label: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-3"
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
        hotspots: [
          {
            id: "tb1-3-prev",
            label: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i \u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng.",
            targetSceneId: "scene-tb1-2"
          },
          {
            id: "tb1-3-next",
            label: "Trung T\xE2m Tr\u1EA3ng Bay 1",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Trung T\xE2m Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-4"
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
        hotspots: [
          {
            id: "tb1-4-prev",
            label: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-3"
          },
          {
            id: "tb1-4-next",
            label: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-5"
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
        hotspots: [
          {
            id: "tb1-5-prev",
            label: "Trung T\xE2m Tr\u1EA3ng Bay 1",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i Trung T\xE2m Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-4"
          },
          {
            id: "tb1-5-trbay2",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
            yaw: 1.57,
            pitch: -0.3,
            note: "Ti\u1EBFp t\u1EE5c sang C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          }
        ]
      },
      // ── Trảng Bay 2 – 4 ảnh ────────────────────────────────────────
      {
        id: "scene-tb2-1",
        title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
        subtitle: "B\u1EAFt \u0111\u1EA7u kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 2, \u0111\u1ECBa h\xECnh l\u1EA1 h\u01A1n.",
        panorama: "/images/trbay2/1788771876042.jpg",
        thumbnail: "/thumbnails/new/1788771876042.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-1-back",
            label: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.3,
            note: "Quay l\u1EA1i Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-5"
          },
          {
            id: "tb2-1-next",
            label: "V\xF9ng C\u1ECF Lau Cao",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn V\xF9ng C\u1ECF Lau Cao.",
            targetSceneId: "scene-tb2-2"
          }
        ]
      },
      {
        id: "scene-tb2-2",
        title: "V\xF9ng C\u1ECF Lau Cao",
        subtitle: "C\u1ECF lau cao v\xFAt che ph\u1EE7, t\u1EA1o h\xE0nh lang xanh t\u1EF1 nhi\xEAn.",
        panorama: "/images/trbay2/1788771876050.jpg",
        thumbnail: "/thumbnails/new/1788771876050.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-2-prev",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          },
          {
            id: "tb2-2-next",
            label: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn B\u1EDD R\u1EEBng Ph\xEDa T\xE2y.",
            targetSceneId: "scene-tb2-3"
          }
        ]
      },
      {
        id: "scene-tb2-3",
        title: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
        subtitle: "C\xE2y r\u1EEBng cao v\xFAt ph\xEDa T\xE2y, b\xF3ng m\xE1t che ph\u1EE7 m\u1EB7t tr\u1EA3ng.",
        panorama: "/images/trbay2/1788771876058.jpg",
        thumbnail: "/thumbnails/new/1788771876058.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-3-prev",
            label: "V\xF9ng C\u1ECF Lau Cao",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i V\xF9ng C\u1ECF Lau Cao.",
            targetSceneId: "scene-tb2-2"
          },
          {
            id: "tb2-3-next",
            label: "Cu\u1ED1i Tr\u1EA3ng Bay 2",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Cu\u1ED1i Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-4"
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
        hotspots: [
          {
            id: "tb2-4-prev",
            label: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i B\u1EDD R\u1EEBng Ph\xEDa T\xE2y.",
            targetSceneId: "scene-tb2-3"
          },
          {
            id: "tb2-4-start",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 1.57,
            pitch: -0.3,
            note: "Quay l\u1EA1i \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u c\u1EE7a tour.",
            targetSceneId: "scene-c1"
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

export { catalogService as c };
//# sourceMappingURL=catalogService.mjs.map
