<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, computed, watch } from 'vue';
import { EquirectangularAdapter, Viewer, events } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import type { TourConfig, TourScene, TourMarker, NavigationMarker, InfoMarker } from '~/types/tour';

definePageMeta({ layout: false, ssr: false });

const route = useRoute();
const router = useRouter();
const slug = route.params.slug as string;
const initialSceneIdParam = route.params.sceneId as string;

const { show: showToast } = useToast();

// ── Fetch tour data ───────────────────────────────────────────────────────────
const { data } = await useFetch<{ item: TourConfig }>(`/api/tours/${slug}`);

// Deep copy tour into reactive local state
const tour = ref<TourConfig | null>(null);

// Undo/Redo history stack
const historyStack = ref<TourConfig[]>([]);
const historyIndex = ref<number>(-1);
let isHistoryAction = false;

function pushHistorySnapshot() {
  if (isHistoryAction || !tour.value) return;
  const currentSnap = JSON.stringify(tour.value);
  const lastSnap = historyIndex.value >= 0 ? JSON.stringify(historyStack.value[historyIndex.value]) : '';
  if (currentSnap === lastSnap) return;

  historyStack.value = historyStack.value.slice(0, historyIndex.value + 1);
  historyStack.value.push(JSON.parse(currentSnap));
  historyIndex.value = historyStack.value.length - 1;
}

function initTourState() {
  if (data.value?.item) {
    tour.value = JSON.parse(JSON.stringify(data.value.item));
    historyStack.value = [JSON.parse(JSON.stringify(data.value.item))];
    historyIndex.value = 0;
  }
}
initTourState();
watch(() => data.value?.item, () => initTourState(), { deep: true });

function undo() {
  if (historyIndex.value > 0) {
    isHistoryAction = true;
    historyIndex.value--;
    tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
    isDirty.value = true;
    goToScene(Math.min(currentSceneIdx.value, (tour.value?.scenes.length ?? 1) - 1));
    isHistoryAction = false;
    showToast({ message: 'Đã hoàn tác (Undo)', variant: 'default' });
  }
}

function redo() {
  if (historyIndex.value < historyStack.value.length - 1) {
    isHistoryAction = true;
    historyIndex.value++;
    tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
    isDirty.value = true;
    goToScene(Math.min(currentSceneIdx.value, (tour.value?.scenes.length ?? 1) - 1));
    isHistoryAction = false;
    showToast({ message: 'Đã làm lại (Redo)', variant: 'default' });
  }
}

const canUndo = computed(() => historyIndex.value > 0);
const canRedo = computed(() => historyIndex.value < historyStack.value.length - 1);

// Active scene index
const currentSceneIdx = ref<number>(0);

// Synchronize initial scene index based on route param or initialSceneId
watch(
  () => tour.value,
  (t) => {
    if (!t || !t.scenes?.length) return;
    const foundIdx = t.scenes.findIndex((s) => s.id === initialSceneIdParam);
    if (foundIdx !== -1) {
      currentSceneIdx.value = foundIdx;
    } else if (t.initialSceneId) {
      const startIdx = t.scenes.findIndex((s) => s.id === t.initialSceneId);
      if (startIdx !== -1) currentSceneIdx.value = startIdx;
    }
  },
  { immediate: true },
);

const currentScene = computed<TourScene | null>(() => {
  if (!tour.value || !tour.value.scenes.length) return null;
  return tour.value.scenes[currentSceneIdx.value] ?? tour.value.scenes[0];
});

// Inspector tabs & state
type InspectorTab = 'scene' | 'hotspots' | 'settings';
const currentTab = ref<InspectorTab>('scene');

const selectedHotspotId = ref<string | null>(null);
const selectedHotspot = computed<TourMarker | null>(() => {
  if (!currentScene.value) return null;
  return currentScene.value.markers.find((m) => m.id === selectedHotspotId.value) ?? null;
});

// Real Upload State
const fileInput = ref<HTMLInputElement | null>(null);
const uploadingImage = ref(false);

function triggerImageUpload() {
  fileInput.value?.click();
}

async function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (!files || !files.length || !currentScene.value) return;

  const file = files[0];
  const formData = new FormData();
  formData.append('file', file);

  uploadingImage.value = true;
  try {
    const res = await $fetch<{ ok: boolean; files: Array<{ original: string; thumbnail: string }> }>(
      '/api/admin/media',
      {
        method: 'POST',
        body: formData,
      },
    );

    if (res.ok && res.files?.length) {
      const uploaded = res.files[0];
      currentScene.value.panorama = uploaded.original;
      if (uploaded.thumbnail) {
        currentScene.value.thumbnail = uploaded.thumbnail;
      }

      // Update PSV viewer panorama
      if (viewer) {
        viewer.setPanorama(uploaded.original).then(() => {
          syncMarkersToViewer();
        });
      }
      markDirty();
      showToast({ message: 'Tải ảnh panorama mới thành công!', variant: 'success' });
    }
  } catch (err: any) {
    showToast({ message: err?.statusMessage ?? 'Lỗi khi upload ảnh', variant: 'error' });
  } finally {
    uploadingImage.value = false;
    if (target) target.value = '';
  }
}

// Editor toolbar state
const isPlacingHotspot = ref(false);
const showHotspotModal = ref(false);
const pendingHotspotCoords = ref<{ yaw: number; pitch: number } | null>(null);

const previewMode = ref(false);
const zoom = ref(100);
const modeTab = ref<'edit' | 'drag'>('edit');

// Dirty & saving state
const isDirty = ref(false);
const saving = ref(false);

function markDirty() {
  isDirty.value = true;
  pushHistorySnapshot();
}

function markSaved() {
  isDirty.value = false;
}

// PSV Viewer refs
const container = ref<HTMLElement | null>(null);
let viewer: Viewer | null = null;
let markersPlugin: MarkersPlugin | null = null;

// Guided mode timer
let guidedTimer: ReturnType<typeof setInterval> | null = null;

// Drag & drop state for scene list reordering
const draggingSceneIdx = ref<number | null>(null);
const dragOverSceneIdx = ref<number | null>(null);

// ── PSV marker HTML helpers ───────────────────────────────────────────────────
const navHtml = (label: string, isSelected: boolean) => `
  <div class="edit-hotspot nav ${isSelected ? 'selected' : ''}">
    <div class="hs-circle">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 4 L12 18"/><path d="M6 11 L12 5 L18 11"/>
      </svg>
    </div>
    <span class="hs-label">${label}</span>
  </div>`;

const infoHtml = (label: string, isSelected: boolean) => `
  <div class="edit-hotspot info ${isSelected ? 'selected' : ''}">
    <div class="hs-circle">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.4" stroke-linecap="round">
        <circle cx="12" cy="7" r="1.8" fill="white" stroke="none"/>
        <path d="M12 11 L12 18"/>
      </svg>
    </div>
    <span class="hs-label">${label}</span>
  </div>`;

function getMarkerHtml(m: TourMarker) {
  const isSelected = m.id === selectedHotspotId.value;
  return m.plugin === 'navigation' ? navHtml(m.label, isSelected) : infoHtml(m.label, isSelected);
}

// ── Sync markers to PSV ───────────────────────────────────────────────────────
function syncMarkersToViewer() {
  if (!markersPlugin || !currentScene.value) return;
  markersPlugin.clearMarkers();
  markersPlugin.setMarkers(
    currentScene.value.markers.map((m) => ({
      id: m.id,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: getMarkerHtml(m),
      anchor: 'center center',
      draggable: true,
      data: { plugin: m.plugin },
    })),
  );
}

watch(
  () => currentScene.value?.markers,
  () => {
    syncMarkersToViewer();
  },
  { deep: true },
);

watch(selectedHotspotId, () => {
  syncMarkersToViewer();
});

// Update panorama if URL changed via text input
function onPanoramaUrlChange() {
  if (!currentScene.value || !viewer) return;
  viewer.setPanorama(currentScene.value.panorama).then(() => {
    syncMarkersToViewer();
  });
  markDirty();
}

// ── Init PSV Viewer ───────────────────────────────────────────────────────────
onMounted(async () => {
  await nextTick();
  if (!container.value || !currentScene.value) return;

  viewer = new Viewer({
    container: container.value,
    panorama: currentScene.value.panorama,
    // Use the same raw image seam as the public viewer when placing markers.
    adapter: [EquirectangularAdapter, { useXmpData: false }],
    loadingImg: currentScene.value.thumbnail,
    defaultYaw: currentScene.value.initialYaw || 0,
    defaultPitch: currentScene.value.initialPitch || 0,
    touchmoveTwoFingers: false,
    mousewheelCtrlKey: false,
    navbar: false, // minimalist studio canvas
    plugins: [[MarkersPlugin, { markers: [] }]],
  });

  markersPlugin = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);

  viewer.addEventListener(events.ReadyEvent.type, () => {
    syncMarkersToViewer();
  });

  // Click canvas
  viewer.addEventListener('click', (e: any) => {
    const { yaw, pitch } = e.data as { yaw: number; pitch: number };

    if (isPlacingHotspot.value) {
      pendingHotspotCoords.value = { yaw, pitch };
      isPlacingHotspot.value = false;
      showHotspotModal.value = true;
    } else {
      selectedHotspotId.value = null;
    }
  });

  // Select marker
  markersPlugin.addEventListener('select-marker', ({ marker }) => {
    if (isPlacingHotspot.value) return;
    selectedHotspotId.value = marker.id;
    currentTab.value = 'hotspots';
  });

  // Drag marker
  markersPlugin.addEventListener('marker-moved' as any, (e: any) => {
    const id: string = e.marker?.id ?? e.markerId;
    const pos = e.position ?? e.markerData?.position;
    if (!id || !pos || !currentScene.value) return;

    const idx = currentScene.value.markers.findIndex((m) => m.id === id);
    if (idx === -1) return;

    currentScene.value.markers[idx].yaw = parseFloat((pos.yaw as number).toFixed(3));
    currentScene.value.markers[idx].pitch = parseFloat((pos.pitch as number).toFixed(3));
    markDirty();
  });
});

onBeforeUnmount(() => {
  stopGuidedMode();
  viewer?.destroy();
  viewer = null;
});

// ── Scene Navigation ──────────────────────────────────────────────────────────
function goToScene(idx: number) {
  if (!tour.value || idx < 0 || idx >= tour.value.scenes.length) return;
  currentSceneIdx.value = idx;
  selectedHotspotId.value = null;

  const targetScene = tour.value.scenes[idx];
  if (viewer && targetScene) {
    viewer.setPanorama(targetScene.panorama).then(() => {
      viewer?.rotate({ yaw: targetScene.initialYaw || 0, pitch: targetScene.initialPitch || 0 });
      syncMarkersToViewer();
    });
  }
}

// ── Add & Delete Scenes ───────────────────────────────────────────────────────
function addScene() {
  if (!tour.value) return;
  const id = `s${Date.now()}`;
  const newScene: TourScene = {
    id,
    title: 'Cảnh mới',
    subtitle: 'Mô tả cảnh mới',
    panorama: 'https://picsum.photos/id/1036/2400/1200',
    thumbnail: 'https://picsum.photos/id/1036/200/120',
    initialYaw: 0,
    initialPitch: 0,
    markers: [],
  };
  tour.value.scenes.push(newScene);
  currentSceneIdx.value = tour.value.scenes.length - 1;
  markDirty();
  goToScene(currentSceneIdx.value);
  showToast({ message: 'Đã thêm cảnh mới', variant: 'success' });
}

function deleteCurrentScene() {
  if (!tour.value || !currentScene.value) return;
  if (tour.value.scenes.length <= 1) {
    showToast({ message: 'Không thể xóa cảnh cuối cùng', variant: 'error' });
    return;
  }
  if (!confirm(`Xóa cảnh "${currentScene.value.title}"?`)) return;

  tour.value.scenes.splice(currentSceneIdx.value, 1);
  currentSceneIdx.value = Math.max(0, currentSceneIdx.value - 1);
  markDirty();
  goToScene(currentSceneIdx.value);
  showToast({ message: 'Đã xóa cảnh', variant: 'success' });
}

// ── Reorder Scenes (Drag & Drop) ──────────────────────────────────────────────
function handleSceneDragStart(idx: number, e: DragEvent) {
  draggingSceneIdx.value = idx;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(idx));
  }
}

function handleSceneDragOver(idx: number, e: DragEvent) {
  e.preventDefault();
  dragOverSceneIdx.value = idx;
}

function handleSceneDrop(idx: number, e: DragEvent) {
  e.preventDefault();
  dragOverSceneIdx.value = null;
  const from = draggingSceneIdx.value;
  draggingSceneIdx.value = null;
  if (from === null || from === idx || !tour.value) return;

  const [moved] = tour.value.scenes.splice(from, 1);
  tour.value.scenes.splice(idx, 0, moved);

  if (from === currentSceneIdx.value) currentSceneIdx.value = idx;
  else if (from < currentSceneIdx.value && idx >= currentSceneIdx.value) currentSceneIdx.value--;
  else if (from > currentSceneIdx.value && idx <= currentSceneIdx.value) currentSceneIdx.value++;

  markDirty();
  showToast({ message: 'Đã sắp xếp lại danh sách cảnh', variant: 'default' });
}

// ── Hotspot Placement Flow ────────────────────────────────────────────────────
function startPlacingHotspot() {
  isPlacingHotspot.value = !isPlacingHotspot.value;
  if (isPlacingHotspot.value) {
    showToast({ message: 'Click lên ảnh panorama để đặt hotspot', variant: 'default' });
  }
}

function cancelPlacing() {
  isPlacingHotspot.value = false;
  showHotspotModal.value = false;
  pendingHotspotCoords.value = null;
}

function createHotspot(type: 'navigation' | 'info') {
  if (!pendingHotspotCoords.value || !currentScene.value) return;
  const id = `h${Date.now()}`;
  const base = {
    id,
    label: type === 'navigation' ? 'Cảnh mới' : 'Thông tin',
    yaw: parseFloat(pendingHotspotCoords.value.yaw.toFixed(3)),
    pitch: parseFloat(pendingHotspotCoords.value.pitch.toFixed(3)),
  };

  if (type === 'navigation') {
    const firstOther = tour.value?.scenes.find((s) => s.id !== currentScene.value?.id);
    currentScene.value.markers.push({
      ...base,
      plugin: 'navigation',
      targetScene: firstOther ? firstOther.id : '',
    } as NavigationMarker);
  } else {
    currentScene.value.markers.push({
      ...base,
      plugin: 'info',
      content: '',
    } as InfoMarker);
  }

  selectedHotspotId.value = id;
  currentTab.value = 'hotspots';
  markDirty();
  showHotspotModal.value = false;
  pendingHotspotCoords.value = null;
  showToast({ message: 'Đã thêm hotspot mới', variant: 'success' });
}

function deleteHotspot(id: string) {
  if (!currentScene.value) return;
  currentScene.value.markers = currentScene.value.markers.filter((m) => m.id !== id);
  if (selectedHotspotId.value === id) selectedHotspotId.value = null;
  markDirty();
  showToast({ message: 'Đã xóa hotspot', variant: 'default' });
}

// ── Guided & Preview Mode ─────────────────────────────────────────────────────
function togglePreviewMode() {
  previewMode.value = !previewMode.value;
  if (previewMode.value) {
    showToast({ message: 'Đang ở chế độ xem trước — như người dùng thấy', variant: 'success' });
    if (tour.value?.mode === 'guided') startGuidedMode();
  } else {
    stopGuidedMode();
  }
}

function startGuidedMode() {
  stopGuidedMode();
  const dur = (tour.value?.guidedDuration || 8) * 1000;
  guidedTimer = setInterval(() => {
    if (!tour.value) return;
    const next = (currentSceneIdx.value + 1) % tour.value.scenes.length;
    goToScene(next);
  }, dur);
}

function stopGuidedMode() {
  if (guidedTimer) clearInterval(guidedTimer);
  guidedTimer = null;
}

// ── Zoom controls ─────────────────────────────────────────────────────────────
function changeZoom(delta: number) {
  zoom.value = Math.max(50, Math.min(200, zoom.value + delta));
  if (viewer) {
    viewer.zoom(zoom.value);
  }
}

// ── Save to server ────────────────────────────────────────────────────────────
async function saveToServer() {
  if (!tour.value) return;
  saving.value = true;
  try {
    const res = await $fetch<{ ok: boolean; tour: TourConfig }>(`/api/admin/tours/${slug}`, {
      method: 'POST',
      body: tour.value,
    });
    if (res.tour) {
      data.value = { item: res.tour };
      tour.value = JSON.parse(JSON.stringify(res.tour));
    }
    markSaved();
    showToast({ message: 'Đã lưu thay đổi thành công', variant: 'success' });
  } catch (err: any) {
    showToast({ message: err?.statusMessage ?? 'Lỗi khi lưu tour', variant: 'error' });
  } finally {
    saving.value = false;
  }
}

// ── Keyboard Shortcuts ────────────────────────────────────────────────────────
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      return;
    }

    if (e.key === 'Escape') {
      if (showHotspotModal.value) cancelPlacing();
      else if (isPlacingHotspot.value) cancelPlacing();
      else if (selectedHotspotId.value) selectedHotspotId.value = null;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      saveToServer();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      e.preventDefault();
      if (e.shiftKey) redo();
      else undo();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
      e.preventDefault();
      redo();
    }
    if (e.key === 'ArrowDown' && e.altKey) {
      e.preventDefault();
      if (tour.value) goToScene(Math.min(tour.value.scenes.length - 1, currentSceneIdx.value + 1));
    }
    if (e.key === 'ArrowUp' && e.altKey) {
      e.preventDefault();
      goToScene(Math.max(0, currentSceneIdx.value - 1));
    }
  };

  window.addEventListener('keydown', handleKeydown);
  onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown));
});
</script>

<template>
  <div :class="['admin-studio', { 'preview-mode': previewMode }]">

    <!-- Hidden native file input for real image upload -->
    <input
      ref="fileInput"
      type="file"
      accept="image/jpeg,image/png,image/webp"
      class="hidden"
      @change="handleFileChange"
    >

    <!-- ═══ TOPBAR ═══ -->
    <header class="topbar">
      <div class="tb-logo">
        <div class="tb-logo-mark">V</div>
        <div class="tb-logo-text">
          <strong>Admin Studio</strong>
          <span>{{ tour?.title ?? 'View360' }}</span>
        </div>
      </div>

      <div class="tb-breadcrumb">
        <NuxtLink to="/admin" class="hover:text-white transition-colors">Tour 360°</NuxtLink>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m9 18 6-6-6-6" />
        </svg>
        <strong id="breadcrumbTour">{{ tour?.title }}</strong>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span id="breadcrumbScene">{{ currentScene?.title }}</span>
      </div>

      <div class="tb-spacer"></div>

      <!-- Save Indicator -->
      <div class="save-indicator" :class="{ saving, dirty: isDirty }">
        <span class="dot"></span>
        <span id="saveText">{{ saving ? 'Đang lưu...' : isDirty ? 'Có thay đổi chưa lưu' : 'Đã lưu' }}</span>
      </div>

      <div class="tb-actions">
        <UiTooltip content="Hoàn tác (Ctrl+Z)" placement="bottom">
          <button
            class="tb-btn"
            id="undoBtn"
            :disabled="!canUndo"
            :style="{ opacity: canUndo ? 1 : 0.4 }"
            @click="undo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
          </button>
        </UiTooltip>

        <UiTooltip content="Làm lại (Ctrl+Y)" placement="bottom">
          <button
            class="tb-btn"
            id="redoBtn"
            :disabled="!canRedo"
            :style="{ opacity: canRedo ? 1 : 0.4 }"
            @click="redo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" />
            </svg>
          </button>
        </UiTooltip>

        <button class="tb-btn" id="previewBtn" @click="togglePreviewMode">
          <svg v-if="!previewMode" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
          </svg>
          <span>{{ previewMode ? 'Chỉnh sửa' : 'Xem trước' }}</span>
        </button>

        <button class="tb-btn primary" id="saveBtn" :disabled="saving" @click="saveToServer">
          <UiSpinner v-if="saving" size="sm" color="white" />
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <path d="M17 21v-8H7v8" />
            <path d="M7 3v5h8" />
          </svg>
          <span>Lưu</span>
        </button>
      </div>
    </header>

    <!-- ═══ SIDEBAR TRÁI — SCENE LIST ═══ -->
    <aside class="sidebar-left">
      <div class="side-head">
        <div class="side-head-row">
          <h3>Danh sách cảnh</h3>
          <UiTooltip content="Thêm cảnh mới" placement="right">
            <button class="side-add" id="addSceneBtn" @click="addScene">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </UiTooltip>
        </div>
        <p id="sceneCount">{{ tour?.scenes.length ?? 0 }} cảnh · Kéo để sắp xếp</p>
      </div>

      <div class="scene-list" id="sceneList">
        <div
          v-for="(s, idx) in tour?.scenes ?? []"
          :key="s.id"
          :class="[
            'scene-item',
            { active: idx === currentSceneIdx },
            { 'drag-over': dragOverSceneIdx === idx }
          ]"
          draggable="true"
          @dragstart="handleSceneDragStart(idx, $event)"
          @dragover="handleSceneDragOver(idx, $event)"
          @drop="handleSceneDrop(idx, $event)"
          @click="goToScene(idx)"
        >
          <span class="scene-drag">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/>
              <circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
              <circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/>
            </svg>
          </span>
          <img class="scene-thumb-sm" :src="s.thumbnail" :alt="s.title">
          <div class="scene-info">
            <strong>{{ s.title }}</strong>
            <span>{{ s.markers?.length ?? 0 }} hotspot{{ tour?.initialSceneId === s.id ? ' · ★ Bắt đầu' : '' }}</span>
          </div>
          <span v-if="tour?.initialSceneId === s.id" class="scene-badge">Start</span>
        </div>
      </div>
    </aside>

    <!-- ═══ CENTER — PREVIEW ═══ -->
    <main class="preview">
      <div class="preview-toolbar">
        <div class="pt-tabs">
          <button
            :class="['pt-tab', { active: modeTab === 'edit' }]"
            @click="modeTab = 'edit'"
          >
            Chỉnh sửa
          </button>
          <button
            :class="['pt-tab', { active: modeTab === 'drag' }]"
            @click="modeTab = 'drag'"
          >
            Xoay ảnh
          </button>
        </div>

        <div class="pt-spacer"></div>

        <div class="pt-zoom">
          <button id="zoomOut" title="Thu nhỏ" @click="changeZoom(-10)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14" />
            </svg>
          </button>
          <span class="pt-zoom-label" id="zoomLabel">{{ zoom }}%</span>
          <button id="zoomIn" title="Phóng to" @click="changeZoom(10)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>

        <button
          :class="['tb-btn', { primary: isPlacingHotspot }]"
          id="placeHotspotBtn"
          @click="startPlacingHotspot"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span>{{ isPlacingHotspot ? 'Đang đặt...' : 'Đặt hotspot' }}</span>
        </button>
      </div>

      <div class="preview-canvas" id="previewCanvas">
        <div ref="container" class="h-full w-full" />

        <div class="place-hint" :class="{ active: isPlacingHotspot }" id="placeHint">
          Click lên ảnh để đặt hotspot · ESC để hủy
        </div>

        <div class="preview-info">
          <span class="preview-info-badge">CẢNH {{ currentSceneIdx + 1 }}/{{ tour?.scenes.length ?? 1 }}</span>
          <span class="preview-info-title" id="infoTitle">{{ currentScene?.title }}</span>
          <span class="preview-info-coord" id="infoCoord">
            {{ isPlacingHotspot ? 'Nhấn vị trí bất kỳ để đặt' : 'Vị trí xem panorama' }}
          </span>
        </div>
      </div>
    </main>

    <!-- ═══ SIDEBAR PHẢI — INSPECTOR ═══ -->
    <aside class="inspector">
      <div class="insp-tabs">
        <button
          :class="['insp-tab', { active: currentTab === 'scene' }]"
          @click="currentTab = 'scene'"
        >
          Cảnh
        </button>
        <button
          :class="['insp-tab', { active: currentTab === 'hotspots' }]"
          @click="currentTab = 'hotspots'"
        >
          Hotspots
        </button>
        <button
          :class="['insp-tab', { active: currentTab === 'settings' }]"
          @click="currentTab = 'settings'"
        >
          Cài đặt
        </button>
      </div>

      <div class="insp-body" id="inspBody">

        <!-- ── TAB 1: CẢNH ── -->
        <template v-if="currentTab === 'scene' && currentScene">
          <div class="insp-section">
            <div class="insp-section-title">Thông tin cảnh</div>
            <div class="field">
              <label>Tên cảnh</label>
              <input
                v-model="currentScene.title"
                type="text"
                id="fieldName"
                @input="markDirty"
              >
            </div>
            <div class="field">
              <label>Mô tả ngắn</label>
              <textarea
                v-model="currentScene.subtitle"
                id="fieldDesc"
                @input="markDirty"
              />
            </div>
          </div>

          <!-- Real Image Picker with Upload & Direct URL -->
          <div class="insp-section">
            <div class="insp-section-title">Ảnh panorama</div>
            <div
              class="img-picker"
              id="imgPicker"
              title="Nhấn để tải ảnh panorama từ máy tính"
              @click="triggerImageUpload"
            >
              <img :src="currentScene.panorama" :alt="currentScene.title">
              <div class="img-picker-overlay">
                <UiSpinner v-if="uploadingImage" size="md" color="white" />
                <template v-else>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                  <span>{{ uploadingImage ? 'Đang tải lên...' : 'Đổi ảnh (Tải lên)' }}</span>
                </template>
              </div>
            </div>

            <!-- Direct Panorama & Thumbnail URL Fields -->
            <div class="field mt-2">
              <label>URL ảnh panorama (2:1)</label>
              <input
                v-model="currentScene.panorama"
                type="text"
                placeholder="https://... hoặc /uploads/..."
                @change="onPanoramaUrlChange"
              >
            </div>
            <div class="field">
              <label>URL ảnh thumbnail</label>
              <input
                v-model="currentScene.thumbnail"
                type="text"
                placeholder="https://... hoặc /thumbnails/..."
                @input="markDirty"
              >
            </div>

            <div class="hint-text">💡 Nhấn vào ô xem trước để chọn file từ máy tính hoặc dán đường dẫn URL trực tiếp.</div>
          </div>

          <div class="insp-section">
            <div class="insp-section-title">Vị trí trong tour</div>
            <div class="field-row">
              <div class="field">
                <label>Thứ tự</label>
                <input
                  :value="currentSceneIdx + 1"
                  type="number"
                  min="1"
                  :max="tour?.scenes.length"
                  @change="(e: any) => {
                    const newOrder = Math.max(0, Math.min((tour?.scenes.length ?? 1) - 1, parseInt(e.target.value) - 1));
                    if (newOrder !== currentSceneIdx && tour) {
                      const [moved] = tour.scenes.splice(currentSceneIdx, 1);
                      tour.scenes.splice(newOrder, 0, moved);
                      currentSceneIdx = newOrder;
                      markDirty();
                    }
                  }"
                >
              </div>
              <div class="field">
                <label>ID</label>
                <input type="text" :value="currentScene.id" readonly style="opacity:0.5">
              </div>
            </div>

            <div class="toggle-row">
              <label for="isStartToggle">Đặt làm cảnh bắt đầu</label>
              <UiSwitch
                :model-value="tour?.initialSceneId === currentScene.id"
                @update:model-value="(val) => {
                  if (tour) {
                    tour.initialSceneId = val ? currentScene.id : undefined;
                    markDirty();
                  }
                }"
              />
            </div>
          </div>

          <div class="insp-section">
            <button class="btn-block danger" id="deleteSceneBtn" @click="deleteCurrentScene">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
              Xóa cảnh này
            </button>
          </div>
        </template>

        <!-- ── TAB 2: HOTSPOTS ── -->
        <template v-else-if="currentTab === 'hotspots' && currentScene">
          <div class="insp-section">
            <div class="insp-section-title">
              <span>Hotspots trong cảnh ({{ currentScene.markers.length }})</span>
            </div>

            <div v-if="!currentScene.markers.length" class="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
              </svg>
              Chưa có hotspot nào.<br>Nhấn "Đặt hotspot" để bắt đầu.
            </div>

            <div v-else class="hotspot-list">
              <div
                v-for="hs in currentScene.markers"
                :key="hs.id"
                :class="['hotspot-row', { selected: hs.id === selectedHotspotId }]"
                @click="selectedHotspotId = hs.id"
              >
                <div :class="['hotspot-row-icon', hs.plugin === 'navigation' ? 'nav' : 'info']">
                  <svg v-if="hs.plugin === 'navigation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 4 L12 18"/><path d="M6 11 L12 5 L18 11"/>
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                    <circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none"/>
                    <path d="M12 11 L12 18"/>
                  </svg>
                </div>
                <span class="hotspot-row-name">{{ hs.label }}</span>
                <button class="hotspot-row-delete" @click.stop="deleteHotspot(hs.id)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <button class="btn-block primary" id="quickAddHotspot" @click="startPlacingHotspot">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Thêm hotspot
            </button>
          </div>

          <!-- Edit Selected Hotspot Form -->
          <div v-if="selectedHotspot" class="insp-section border-t border-white/8 pt-4">
            <div class="insp-section-title">Chỉnh sửa hotspot</div>

            <div class="field">
              <label>Nhãn hiển thị</label>
              <input
                v-model="selectedHotspot.label"
                type="text"
                @input="markDirty"
              >
            </div>

            <!-- Navigation target scene dropdown -->
            <div v-if="selectedHotspot.plugin === 'navigation'" class="field">
              <label>Cảnh đích</label>
              <select
                :value="(selectedHotspot as NavigationMarker).targetScene"
                @change="(e: any) => {
                  (selectedHotspot as NavigationMarker).targetScene = e.target.value;
                  markDirty();
                }"
              >
                <option value="" disabled>— Chọn cảnh —</option>
                <option
                  v-for="s in tour?.scenes ?? []"
                  :key="s.id"
                  :value="s.id"
                >
                  {{ s.title }}
                </option>
              </select>
            </div>

            <!-- Info content textarea -->
            <div v-if="selectedHotspot.plugin === 'info'" class="field">
              <label>Nội dung thông tin</label>
              <textarea
                :value="(selectedHotspot as InfoMarker).content"
                placeholder="Mô tả chi tiết địa điểm..."
                @input="(e: any) => {
                  (selectedHotspot as InfoMarker).content = e.target.value;
                  markDirty();
                }"
              />
            </div>

            <!-- Position Yaw & Pitch -->
            <div class="field-row">
              <div class="field">
                <label>Yaw (rad)</label>
                <input
                  :value="selectedHotspot.yaw.toFixed(2)"
                  type="number"
                  step="0.05"
                  @change="(e: any) => {
                    selectedHotspot!.yaw = parseFloat(e.target.value);
                    syncMarkersToViewer();
                    markDirty();
                  }"
                >
              </div>
              <div class="field">
                <label>Pitch (rad)</label>
                <input
                  :value="selectedHotspot.pitch.toFixed(2)"
                  type="number"
                  step="0.05"
                  @change="(e: any) => {
                    selectedHotspot!.pitch = parseFloat(e.target.value);
                    syncMarkersToViewer();
                    markDirty();
                  }"
                >
              </div>
            </div>
            <div class="hint-text">💡 Kéo trực tiếp hotspot trên ảnh panorama để di chuyển nhanh.</div>
          </div>
        </template>

        <!-- ── TAB 3: CÀI ĐẶT (TÙY CHỈNH PROJECT) ── -->
        <template v-else-if="currentTab === 'settings' && tour">
          <div class="insp-section">
            <div class="insp-section-title">Chế độ tour</div>
            <div class="field">
              <label>Kiểu trải nghiệm</label>
              <select
                :value="tour.mode ?? 'free'"
                @change="(e: any) => {
                  tour!.mode = e.target.value;
                  markDirty();
                }"
              >
                <option value="free">Tự do khám phá</option>
                <option value="guided">Có hướng dẫn (tự chuyển cảnh)</option>
              </select>
            </div>
            <div class="field">
              <label>Thời gian mỗi cảnh (giây)</label>
              <input
                :value="tour.guidedDuration ?? 8"
                type="number"
                min="3"
                max="60"
                @input="(e: any) => {
                  tour!.guidedDuration = parseInt(e.target.value) || 8;
                  markDirty();
                }"
              >
            </div>
            <div class="hint-text">Ở chế độ có hướng dẫn, tour tự động chuyển sang cảnh tiếp theo sau thời gian này.</div>
          </div>

          <div class="insp-section">
            <div class="insp-section-title">Cảnh bắt đầu</div>
            <div class="field">
              <select
                :value="tour.initialSceneId ?? tour.scenes[0]?.id"
                @change="(e: any) => {
                  tour!.initialSceneId = e.target.value;
                  markDirty();
                }"
              >
                <option
                  v-for="s in tour.scenes"
                  :key="s.id"
                  :value="s.id"
                >
                  {{ s.title }}
                </option>
              </select>
            </div>
          </div>

          <div class="insp-section">
            <div class="insp-section-title">Tùy chọn hiển thị</div>
            <div class="toggle-row">
              <label>Tự động xoay ảnh</label>
              <UiSwitch
                :model-value="!!tour.autoRotate"
                @update:model-value="(val) => {
                  tour!.autoRotate = val;
                  markDirty();
                }"
              />
            </div>
            <div class="toggle-row">
              <label>Hiện bản đồ nhỏ</label>
              <UiSwitch
                :model-value="tour.showMinimap !== false"
                @update:model-value="(val) => {
                  tour!.showMinimap = val;
                  markDirty();
                }"
              />
            </div>
          </div>
        </template>

      </div>
    </aside>

  </div>

  <!-- ═══ MODAL: Chọn loại hotspot ═══ -->
  <div class="modal-backdrop" :class="{ open: showHotspotModal }" @click.self="cancelPlacing">
    <div class="modal">
      <div class="modal-head">
        <h3>Chọn loại hotspot</h3>
        <button class="modal-close" @click="cancelPlacing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="type-grid">
          <div class="type-card" @click="createHotspot('navigation')">
            <div class="type-card-icon nav">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4 L12 18" />
                <path d="M6 11 L12 5 L18 11" />
              </svg>
            </div>
            <strong>Di chuyển</strong>
            <span>Dẫn đến cảnh khác</span>
          </div>
          <div class="type-card" @click="createHotspot('info')">
            <div class="type-card-icon info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                <circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" />
                <path d="M12 11 L12 18" />
              </svg>
            </div>
            <strong>Thông tin</strong>
            <span>Hiện panel thông tin</span>
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button class="tb-btn" @click="cancelPlacing">Hủy</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ═══ ROOT LAYOUT ═══ */
.admin-studio {
  display: grid;
  grid-template-columns: 300px 1fr 340px;
  grid-template-rows: 56px 1fr;
  height: 100vh;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  font-family: 'Be Vietnam Pro', system-ui, sans-serif;
  color: #ffffff;
  font-size: 14px;
}

.admin-studio > * {
  background: #141414;
}

/* ═══ TOPBAR ═══ */
.topbar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  background: #141414 !important;
}

.tb-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-right: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  height: 32px;
}

.tb-logo-mark {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1f6f8b, #155d75);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 0 0 3px rgba(31, 111, 139, 0.15);
}

.tb-logo-text {
  font-size: 13px;
  line-height: 1.2;
}

.tb-logo-text strong {
  display: block;
  font-weight: 600;
}

.tb-logo-text span {
  color: rgba(255, 255, 255, 0.42);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.tb-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.42);
}

.tb-breadcrumb strong {
  color: #ffffff;
  font-weight: 500;
}

.tb-breadcrumb svg {
  width: 12px;
  height: 12px;
  opacity: 0.4;
}

.tb-spacer {
  flex: 1;
}

.tb-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.tb-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  font-weight: 500;
  transition: all 0.15s;
  white-space: nowrap;
}

.tb-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.16);
}

.tb-btn svg {
  width: 14px;
  height: 14px;
}

.tb-btn.primary {
  background: #1f6f8b;
  border-color: #1f6f8b;
  color: #fff;
}

.tb-btn.primary:hover {
  background: #2d8fb0;
  border-color: #2d8fb0;
}

.save-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.42);
  padding: 0 12px;
}

.save-indicator .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

.save-indicator.saving .dot {
  background: #c9a227;
  animation: pulse 1s infinite;
}

.save-indicator.dirty .dot {
  background: #a8583f;
}

@keyframes pulse {
  50% { opacity: 0.4; }
}

/* ═══ SIDEBAR TRÁI — SCENE LIST ═══ */
.sidebar-left {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.side-head {
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.side-head-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.side-head h3 {
  font-size: 13px;
  font-weight: 600;
}

.side-head p {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.42);
}

.side-add {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: rgba(31, 111, 139, 0.2);
  border: 1px solid rgba(31, 111, 139, 0.35);
  color: #7ec8e3;
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

.side-add:hover {
  background: rgba(31, 111, 139, 0.35);
  color: #fff;
}

.side-add svg {
  width: 14px;
  height: 14px;
}

.scene-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.scene-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid transparent;
  position: relative;
}

.scene-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.scene-item.active {
  background: rgba(31, 111, 139, 0.14);
  border-color: rgba(31, 111, 139, 0.4);
}

.scene-item.active::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 20%;
  bottom: 20%;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: #1f6f8b;
}

.scene-item.drag-over {
  border-top: 2px solid #1f6f8b;
}

.scene-drag {
  cursor: grab;
  color: rgba(255, 255, 255, 0.25);
  padding: 0 2px;
  flex-shrink: 0;
}

.scene-drag svg {
  width: 12px;
  height: 12px;
}

.scene-thumb-sm {
  width: 44px;
  height: 30px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.scene-info {
  flex: 1;
  min-width: 0;
}

.scene-info strong {
  display: block;
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scene-info span {
  display: block;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.42);
  font-family: monospace;
  margin-top: 2px;
}

.scene-badge {
  font-size: 9px;
  padding: 1px 6px;
  border-radius: 999px;
  background: rgba(201, 162, 39, 0.2);
  color: #c9a227;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ═══ CENTER — PREVIEW ═══ */
.preview {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: #141414;
  flex-shrink: 0;
}

.pt-tabs {
  display: flex;
  gap: 2px;
  background: rgba(255, 255, 255, 0.04);
  padding: 3px;
  border-radius: 6px;
}

.pt-tab {
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.42);
  transition: all 0.15s;
}

.pt-tab.active {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.pt-spacer {
  flex: 1;
}

.pt-zoom {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
}

.pt-zoom button {
  width: 26px;
  height: 26px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.42);
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

.pt-zoom button:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.pt-zoom svg {
  width: 14px;
  height: 14px;
}

.pt-zoom-label {
  font-size: 11px;
  font-family: monospace;
  color: rgba(255, 255, 255, 0.42);
  padding: 0 6px;
  min-width: 42px;
  text-align: center;
}

/* Preview canvas */
.preview-canvas {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #000;
}

/* Hotspots in PSV */
:deep(.edit-hotspot) {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  user-select: none;
}

:deep(.edit-hotspot.info) {
  width: 40px;
  height: 40px;
}

:deep(.edit-hotspot .hs-circle) {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(31, 111, 139, 0.9);
  border: 2.5px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 24px rgba(31, 111, 139, 0.6), 0 0 0 6px rgba(31, 111, 139, 0.2);
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

:deep(.edit-hotspot.info .hs-circle) {
  background: rgba(168, 88, 63, 0.9);
  box-shadow: 0 4px 20px rgba(168, 88, 63, 0.55), 0 0 0 6px rgba(168, 88, 63, 0.18);
}

:deep(.edit-hotspot.selected .hs-circle) {
  box-shadow: 0 0 0 3px #c9a227, 0 6px 32px rgba(201, 162, 39, 0.6);
}

:deep(.edit-hotspot .hs-circle svg) {
  width: 18px;
  height: 18px;
}

:deep(.edit-hotspot .hs-label) {
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  background: rgba(10, 10, 10, 0.78);
  padding: 3px 8px;
  border-radius: 999px;
  white-space: nowrap;
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

/* Preview bottom info */
.preview-info {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  backdrop-filter: blur(14px);
  z-index: 6;
  pointer-events: none;
}

.preview-info-badge {
  font-size: 10px;
  font-family: monospace;
  padding: 3px 8px;
  background: rgba(31, 111, 139, 0.3);
  color: #7ec8e3;
  border-radius: 999px;
  font-weight: 600;
}

.preview-info-title {
  font-size: 13px;
  font-weight: 600;
  flex: 1;
}

.preview-info-coord {
  font-size: 11px;
  font-family: monospace;
  color: rgba(255, 255, 255, 0.42);
}

/* Hint overlay */
.place-hint {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background: rgba(201, 162, 39, 0.95);
  color: #1a1613;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  z-index: 10;
  display: none;
  box-shadow: 0 8px 24px rgba(201, 162, 39, 0.4);
}

.place-hint.active {
  display: block;
  animation: hint-pulse 1.5s infinite;
}

@keyframes hint-pulse {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.03); }
}

/* ═══ SIDEBAR PHẢI — INSPECTOR ═══ */
.inspector {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #141414 !important;
}

.insp-tabs {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  background: #141414;
}

.insp-tab {
  flex: 1;
  padding: 14px 8px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.42);
  border-bottom: 2px solid transparent;
  transition: all 0.15s;
}

.insp-tab:hover {
  color: rgba(255, 255, 255, 0.68);
}

.insp-tab.active {
  color: #ffffff;
  border-bottom-color: #1f6f8b;
}

.insp-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.insp-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.insp-section-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.68);
  font-weight: 500;
}

.field input[type="text"],
.field input[type="number"],
.field textarea,
.field select {
  width: 100%;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  color: #ffffff;
  font-size: 13px;
  outline: none;
  transition: all 0.15s;
}

.field input:focus,
.field textarea:focus,
.field select:focus {
  border-color: #1f6f8b;
  background: rgba(31, 111, 139, 0.08);
  box-shadow: 0 0 0 3px rgba(31, 111, 139, 0.15);
}

.field textarea {
  resize: vertical;
  min-height: 70px;
}

.field select option {
  background: #1c1c1c;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.hint-text {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  line-height: 1.5;
}

/* Image picker */
.img-picker {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: 6px;
  overflow: hidden;
  border: 1px dashed rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: all 0.15s;
}

.img-picker:hover {
  border-color: #1f6f8b;
  background: rgba(31, 111, 139, 0.06);
}

.img-picker img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-picker-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  opacity: 0;
  transition: opacity 0.15s;
  font-size: 12px;
}

.img-picker:hover .img-picker-overlay {
  opacity: 1;
}

.img-picker-overlay svg {
  width: 20px;
  height: 20px;
}

/* Hotspot list */
.hotspot-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hotspot-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  font-size: 12px;
}

.hotspot-row:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.16);
}

.hotspot-row.selected {
  background: rgba(31, 111, 139, 0.14);
  border-color: rgba(31, 111, 139, 0.4);
}

.hotspot-row-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.hotspot-row-icon.nav {
  background: rgba(31, 111, 139, 0.25);
  color: #7ec8e3;
}

.hotspot-row-icon.info {
  background: rgba(168, 88, 63, 0.25);
  color: #e0a58b;
}

.hotspot-row-icon svg {
  width: 12px;
  height: 12px;
}

.hotspot-row-name {
  flex: 1;
  font-weight: 500;
}

.hotspot-row-delete {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.25);
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

.hotspot-row-delete:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
}

.hotspot-row-delete svg {
  width: 12px;
  height: 12px;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 24px 16px;
  color: rgba(255, 255, 255, 0.25);
  font-size: 12px;
  line-height: 1.6;
}

.empty-state svg {
  width: 32px;
  height: 32px;
  margin: 0 auto 8px;
  opacity: 0.3;
}

/* Buttons */
.btn-block {
  width: 100%;
  padding: 9px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s;
}

.btn-block:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.16);
}

.btn-block svg {
  width: 14px;
  height: 14px;
}

.btn-block.primary {
  background: rgba(31, 111, 139, 0.2);
  border-color: rgba(31, 111, 139, 0.4);
  color: #7ec8e3;
}

.btn-block.primary:hover {
  background: rgba(31, 111, 139, 0.35);
  color: #fff;
}

.btn-block.danger {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}

.btn-block.danger:hover {
  background: rgba(239, 68, 68, 0.22);
  color: #fff;
}

/* Toggle row */
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
}

.toggle-row label {
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.68);
}

/* ═══ PREVIEW MODE — Hide sidebars & toolbar ═══ */
.admin-studio.preview-mode {
  grid-template-columns: 1fr;
  grid-template-rows: 56px 1fr;
}

.admin-studio.preview-mode .sidebar-left,
.admin-studio.preview-mode .inspector,
.admin-studio.preview-mode .preview-toolbar {
  display: none !important;
}

/* ═══ MODAL ═══ */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-backdrop.open {
  display: flex;
}

.modal {
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 14px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.55);
  overflow: hidden;
  color: #fff;
}

.modal-head {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-head h3 {
  font-size: 15px;
  font-weight: 600;
}

.modal-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.modal-foot {
  padding: 14px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.modal-close {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.42);
  display: grid;
  place-items: center;
  transition: all 0.15s;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.modal-close svg {
  width: 14px;
  height: 14px;
}

.type-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.type-card {
  padding: 16px;
  border-radius: 10px;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
  transition: all 0.15s;
  text-align: center;
}

.type-card:hover {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
}

.type-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: grid;
  place-items: center;
}

.type-card-icon.nav {
  background: rgba(31, 111, 139, 0.3);
  color: #7ec8e3;
}

.type-card-icon.info {
  background: rgba(168, 88, 63, 0.3);
  color: #e0a58b;
}

.type-card-icon svg {
  width: 20px;
  height: 20px;
}

.type-card strong {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
}

.type-card span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.42);
  line-height: 1.4;
}
</style>
