<script setup lang="ts">
import { EquirectangularAdapter, Viewer, events, utils } from '@photo-sphere-viewer/core';
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { TourScene, TourConfig, TourMarker } from '~/types/tour';

const props = defineProps<{
  tour: TourConfig;
  scene: TourScene;
}>();

const emit = defineEmits<{
  navigate: [sceneId: string];
  infoOpen: [content: string, label: string];
}>();

const container = ref<HTMLElement | null>(null);
const isLoading = ref(true);
const errorMessage = ref('');
let viewer: Viewer | null = null;
let introTimer: ReturnType<typeof setTimeout> | null = null;
let introAnimation: { cancel: () => void } | null = null;
let isIntroPending = false;
let sceneSwitchId = 0;

const INTRO_DELAY = 5000;
const INTRO_DURATION = 2500;
const INTRO_START = {
  pitch: -Math.PI / 2,
  yaw: Math.PI / 2,
  zoom: 0,
  maxFov: 130,
  fisheye: 2,
};
const INTRO_END = {
  zoom: 50,
  maxFov: 90,
  fisheye: 0,
};

/** Only animate the scene configured as the tour entry point. */
const isEntryScene = () => {
  const entrySceneId = props.tour.initialSceneId ?? props.tour.scenes[0]?.id;
  return props.scene.id === entrySceneId;
};

const clearIntroTimer = () => {
  if (introTimer) {
    clearTimeout(introTimer);
    introTimer = null;
  }
};

const finishIntro = async () => {
  if (!viewer) return;
  viewer.setOptions({
    fisheye: INTRO_END.fisheye,
    maxFov: INTRO_END.maxFov,
    mousemove: true,
    mousewheel: true,
  });
  const { MarkersPlugin } = await import('@photo-sphere-viewer/markers-plugin');
  viewer.getPlugin<typeof MarkersPlugin>(MarkersPlugin as any)?.showAllMarkers();
};

const runIntro = (pitch: number, yaw: number) => {
  if (!viewer || !isIntroPending) return;

  isIntroPending = false;
  clearIntroTimer();

  const animation = new utils.Animation({
    properties: {
      pitch: { start: INTRO_START.pitch, end: pitch },
      yaw: { start: INTRO_START.yaw, end: yaw },
      zoom: { start: INTRO_START.zoom, end: INTRO_END.zoom },
      maxFov: { start: INTRO_START.maxFov, end: INTRO_END.maxFov },
      fisheye: { start: INTRO_START.fisheye, end: INTRO_END.fisheye },
    },
    duration: INTRO_DURATION,
    easing: 'inOutQuad',
    onTick: (values) => {
      if (!viewer) return;
      viewer.setOptions({ fisheye: values.fisheye, maxFov: values.maxFov });
      viewer.rotate({ yaw: values.yaw, pitch: values.pitch });
      viewer.zoom(values.zoom);
    },
  });
  introAnimation = animation;

  animation.then((completed) => {
    introAnimation = null;
    if (completed) finishIntro();
  });
};

const navMarkerHtml = (label: string) => `
  <div class="psv-hotspot-btn" style="position:relative;width:48px;height:48px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
    <div style="
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(31, 111, 139, 0.92);
      border: 2.5px solid #ffffff;
      box-shadow: 0 4px 20px rgba(31, 111, 139, 0.5), 0 0 0 6px rgba(31, 111, 139, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(6px);
      transition: transform 0.2s ease;
    ">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 4 L12 18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M6 10 L12 4 L18 10" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <span style="
      position: absolute;
      top: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      font-weight: 700;
      color: #ffffff;
      background: rgba(15, 15, 15, 0.85);
      padding: 4px 10px;
      border-radius: 20px;
      white-space: nowrap;
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      pointer-events: none;
    ">${label}</span>
  </div>
`;

const infoMarkerHtml = (label: string) => `
  <div class="psv-hotspot-btn" style="position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;">
    <div style="
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(168, 88, 63, 0.92);
      border: 2.5px solid #ffffff;
      box-shadow: 0 4px 20px rgba(168, 88, 63, 0.5), 0 0 0 6px rgba(168, 88, 63, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(6px);
      color: #ffffff;
      font-family: sans-serif;
      font-weight: 900;
      font-size: 20px;
    ">
      i
    </div>
    <span style="
      position: absolute;
      top: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      font-weight: 700;
      color: #ffffff;
      background: rgba(15, 15, 15, 0.85);
      padding: 4px 10px;
      border-radius: 20px;
      white-space: nowrap;
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      pointer-events: none;
    ">${label}</span>
  </div>
`;

const markersForScene = (scene: TourScene) => {
  if (!scene.markers) return [];
  const sceneCoords = scene.coordinates ?? [105.8342, 21.0278];
  return scene.markers.map((m) => {
    const isNav = m.plugin === 'navigation';
    return {
      id: m.id,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: isNav ? navMarkerHtml(m.label || 'Điểm đến mới') : infoMarkerHtml(m.label || 'Thông tin'),
      anchor: 'center center',
      data: {
        marker: m,
        plan: {
          coordinates: sceneCoords,
          size: 24,
        },
      },
    };
  });
};

const initViewer = async () => {
  await nextTick();
  if (!container.value) return;
  try {
    isLoading.value = true;
    errorMessage.value = '';

    // Dynamic import for SSR safety
    const { MarkersPlugin } = await import('@photo-sphere-viewer/markers-plugin');

    const playIntro = isEntryScene();
    const sceneCoords = props.scene.coordinates ?? [105.8342, 21.0278];
    const plugins: any[] = [
      [MarkersPlugin, { markers: markersForScene(props.scene) }],
    ];

    // The map is optional. A Leaflet/PlanPlugin loading problem must never
    // prevent the panorama itself from starting.
    if (props.tour.showMinimap) {
      const { PlanPlugin } = await import('@photo-sphere-viewer/plan-plugin');
      plugins.unshift([PlanPlugin, {
        defaultZoom: 14,
        coordinates: sceneCoords,
        bearing: '120deg',
        size: { width: '280px', height: '280px' },
        visibleOnLoad: false,
      }]);
    }

    viewer = new Viewer({
      container: container.value,
      panorama: props.scene.panorama,
      // Hotspot yaw/pitch is authored against the pixels' 0° seam. Some source
      // JPEGs contain a GPano PoseHeadingDegrees value which rotates only the
      // sphere and makes every marker appear horizontally offset.
      adapter: [EquirectangularAdapter, { useXmpData: false }],
      caption: props.scene.title,
      defaultYaw: playIntro ? INTRO_START.yaw : (props.scene.initialYaw || 0),
      defaultPitch: playIntro ? INTRO_START.pitch : (props.scene.initialPitch || 0),
      defaultZoomLvl: playIntro ? INTRO_START.zoom : INTRO_END.zoom,
      maxFov: playIntro ? INTRO_START.maxFov : INTRO_END.maxFov,
      fisheye: playIntro ? INTRO_START.fisheye : INTRO_END.fisheye,
      mousemove: !playIntro,
      mousewheel: !playIntro,
      touchmoveTwoFingers: false,
      mousewheelCtrlKey: false,
      navbar: false, // Clean full-bleed UI matching design/viewer1.html
      plugins,
    });

    viewer.addEventListener(events.PanoramaLoadedEvent.type, () => {
      isLoading.value = false;
    });

    viewer.addEventListener(events.ReadyEvent.type, () => {
      if (!viewer || !playIntro) return;

      isIntroPending = true;
      const markersPlugin = viewer.getPlugin<typeof MarkersPlugin>(MarkersPlugin as any);
      markersPlugin?.hideAllMarkers();

      introTimer = setTimeout(() => {
        runIntro(props.scene.initialPitch || 0, props.scene.initialYaw || 0);
      }, INTRO_DELAY);
    }, { once: true });

    viewer.addEventListener(events.ClickEvent.type, ({ data }) => {
      if (isIntroPending) runIntro(data.pitch, data.yaw);
    });

    viewer.addEventListener(events.PanoramaErrorEvent.type, ({ error }) => {
      isLoading.value = false;
      errorMessage.value = error.message || 'Không thể tải ảnh panorama.';
    });

    const markersPlugin = viewer.getPlugin<typeof MarkersPlugin>(MarkersPlugin as any);
    markersPlugin?.addEventListener('select-marker', ({ marker }: any) => {
      const data = marker.data?.marker as TourMarker | undefined;
      if (data) {
        if (data.plugin === 'navigation' && data.targetScene) {
          emit('navigate', data.targetScene);
        } else if (data.plugin === 'info') {
          emit('infoOpen', data.content, data.label || 'Thông tin');
        }
      }
    });
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Không thể khởi tạo 360 Viewer.';
    isLoading.value = false;
  }
};

const switchScene = async (scene: TourScene) => {
  if (!viewer) return;
  const switchId = ++sceneSwitchId;
  if (isIntroPending || introAnimation) {
    isIntroPending = false;
    clearIntroTimer();
    introAnimation?.cancel();
    introAnimation = null;
    finishIntro();
  }
  isLoading.value = true;

  const { MarkersPlugin } = await import('@photo-sphere-viewer/markers-plugin');
  const markersPlugin = viewer.getPlugin<typeof MarkersPlugin>(MarkersPlugin as any);

  // Marker coordinates belong to one panorama only. Remove the old scene's
  // markers before the crossfade so they cannot be projected over the new
  // panorama while the camera orientation is preserved.
  markersPlugin?.clearMarkers();

  // Preserve the direction the visitor is looking at, independently from the
  // marker coordinates of the destination scene.
  const viewerPosition = viewer.getPosition();

  if (props.tour.showMinimap) {
    const { PlanPlugin } = await import('@photo-sphere-viewer/plan-plugin');
    const planPlugin = viewer.getPlugin<typeof PlanPlugin>(PlanPlugin as any);
    if (planPlugin && scene.coordinates) {
      planPlugin.setCoordinates(scene.coordinates);
    }
  }

  const loaded = await viewer.setPanorama(scene.panorama, {
    caption: scene.title,
    position: viewerPosition,
    transition: 500, // Smooth 500ms PSV crossfade transition
  });
  if (switchId !== sceneSwitchId) return;
  isLoading.value = false;
  if (!loaded) return;

  // Add destination markers only after its panorama has become active.
  markersPlugin?.setMarkers(markersForScene(scene));
};

onMounted(initViewer);
watch(() => props.scene.id, () => switchScene(props.scene));
onBeforeUnmount(() => {
  clearIntroTimer();
  introAnimation?.cancel();
  introAnimation = null;
  viewer?.destroy();
  viewer = null;
});
</script>

<template>
  <div
    ref="container"
    class="absolute inset-0 h-full w-full overflow-hidden bg-ink"
  >
    <!-- Loading overlay -->
    <Transition name="fade">
      <div
        v-if="isLoading"
        class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/80 text-white backdrop-blur-sm z-10"
      >
        <div class="text-center">
          <div class="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-river" />
          <p class="text-xs font-semibold text-white/70">Đang tải panorama 360°…</p>
        </div>
      </div>
    </Transition>

    <!-- Error overlay -->
    <div
      v-if="errorMessage"
      class="pointer-events-none absolute inset-0 grid place-items-center bg-ink/90 px-6 text-center text-white z-10"
    >
      <div>
        <p class="text-sm font-semibold">Lỗi Panorama</p>
        <p class="mt-2 max-w-md text-xs leading-5 text-white/60">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,
.fade-leave-to     { opacity: 0; }
</style>
