<script setup lang="ts">
import { onMounted, ref, computed, watch } from 'vue';
import { useDesignerEngine } from '~/composables/designer/useDesignerEngine';
import type { TourConfig, TourScene, TourMarker, NavigationMarker, InfoMarker, VideoMarker, Model3DMarker, PanelMarkerData, PanelBlock } from '~/types/tour';

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
    const editableTour = JSON.parse(JSON.stringify(data.value.item)) as TourConfig;
    editableTour.scenes.forEach((scene) => {
      scene.markers = scene.markers.map((marker): TourMarker => {
        if (marker.plugin === 'panel') {
          const legacySpeechBlocks = (marker.contents as Array<PanelBlock | { id: string; type: 'text-to-speech'; content: string; lang?: string; rate?: number; pitch?: number }>);
          marker.contents = legacySpeechBlocks.reduce<PanelBlock[]>((blocks, block) => {
            if (block.type !== 'text-to-speech') {
              blocks.push(block);
              return blocks;
            }
            const previousText = [...blocks].reverse().find((item) => item.type === 'text' && item.content === block.content);
            if (previousText?.type === 'text') {
              previousText.presentation = 'text-and-audio';
              previousText.speech = { lang: block.lang, rate: block.rate, pitch: block.pitch };
            } else {
              blocks.push({ id: block.id, type: 'text', content: block.content, presentation: 'audio-only', speech: { lang: block.lang, rate: block.rate, pitch: block.pitch } });
            }
            return blocks;
          }, []);
          return marker;
        }
        if (marker.plugin === 'info') {
          return { id: marker.id, plugin: 'panel', label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-text`, type: 'text', content: marker.content }] };
        }
        if (marker.plugin === 'audio') {
          return { id: marker.id, plugin: 'panel', label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-audio`, type: 'audio', src: marker.src }] };
        }
        if (marker.plugin === 'model3d') {
          const contents: PanelBlock[] = [{ id: `${marker.id}-image`, type: 'image3d', image: marker.image, caption: '' }];
          if (marker.content) contents.push({ id: `${marker.id}-text`, type: 'text', content: marker.content });
          return { id: marker.id, plugin: 'panel', label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents };
        }
        if (marker.plugin === 'ai-chat') {
          return { id: marker.id, plugin: 'panel', label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-ai`, type: 'ai-chat', context: marker.context }] };
        }
        return marker;
      });
    });
    tour.value = editableTour;
    historyStack.value = [JSON.parse(JSON.stringify(editableTour))];
    historyIndex.value = 0;
  }
}
initTourState();
// NOTE: Do NOT watch data.value for changes — that would re-init state
// every time saveToServer() gets the server response, resetting the UI.

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
const modelImageInput = ref<HTMLInputElement | null>(null);
const narrationInput = ref<HTMLInputElement | null>(null);
const narrationTargetBlockId = ref<string | null>(null);
const uploadingImage = ref(false);
const uploadingNarration = ref(false);
const panoramaPreviewFailed = ref(false);

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
      panoramaPreviewFailed.value = false;
      if (uploaded.thumbnail) {
        currentScene.value.thumbnail = uploaded.thumbnail;
      }

      // Reload engine with new panorama
      await engineLoadScene(currentScene.value);
      markDirty();
      showToast({ message: 'Tải ảnh panorama mới thành công!', variant: 'success' });
    }
  } catch (err: any) {
    const message = err?.data?.statusMessage ?? err?.statusMessage ?? err?.message ?? 'Lỗi khi upload ảnh';
    showToast({ message, variant: 'error' });
  } finally {
    uploadingImage.value = false;
    if (target) target.value = '';
  }
}

async function handleModelImageChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file || selectedHotspot.value?.plugin !== 'model3d') return;
  const formData = new FormData();
  formData.append('file', file);
  uploadingImage.value = true;
  try {
    const res = await $fetch<{ ok: boolean; files: Array<{ original: string }> }>('/api/admin/media', {
      method: 'POST', body: formData,
    });
    if (res.ok && res.files?.[0]) {
      (selectedHotspot.value as Model3DMarker).image = res.files[0].original;
      markDirty();
      showToast({ message: 'Đã tải ảnh vật thể lên', variant: 'success' });
    }
  } catch (err: any) {
    showToast({ message: err?.statusMessage ?? 'Không thể tải ảnh vật thể', variant: 'error' });
  } finally {
    uploadingImage.value = false;
    target.value = '';
  }
}

function triggerNarrationUpload(blockId: string) {
  narrationTargetBlockId.value = blockId;
  narrationInput.value?.click();
}

async function handleNarrationChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  const blockId = narrationTargetBlockId.value;
  const marker = selectedHotspot.value?.plugin === 'panel' ? selectedHotspot.value as PanelMarkerData : null;
  const block = marker?.contents.find((item) => item.id === blockId && item.type === 'text');
  if (!file || !block || block.type !== 'text') {
    target.value = '';
    return;
  }

  const formData = new FormData();
  formData.append('file', file);
  uploadingNarration.value = true;
  try {
    const res = await $fetch<{ ok: boolean; file: { url: string } }>('/api/admin/audio', {
      method: 'POST', body: formData,
    });
    if (res.ok && res.file?.url) {
      block.speech = { ...(block.speech ?? {}), src: res.file.url };
      syncMarkersToViewer();
      markDirty();
      showToast({ message: 'Đã gắn bản đọc vào văn bản', variant: 'success' });
    }
  } catch (err: any) {
    showToast({ message: err?.statusMessage ?? 'Không thể tải bản đọc lên', variant: 'error' });
  } finally {
    uploadingNarration.value = false;
    narrationTargetBlockId.value = null;
    target.value = '';
  }
}

function handleThumbnailError(event: Event, panorama: string) {
  const img = event.target as HTMLImageElement;
  if (img.dataset.fallbackApplied === 'true') {
    img.style.visibility = 'hidden';
    return;
  }
  img.dataset.fallbackApplied = 'true';
  img.src = panorama;
}

// Editor toolbar state
const isPlacingHotspot = ref(false);
const showHotspotModal = ref(false);
const pendingHotspotCoords = ref<{ yaw: number; pitch: number } | null>(null);

const previewMode = ref(false);
const zoom = ref(100);
const modeTab = ref<'edit' | 'drag'>('edit');
const leftSidebarWidth = ref(320);
const rightSidebarWidth = ref(360);

function startResize(side: 'left' | 'right', event: PointerEvent) {
  const startX = event.clientX;
  const startLeft = leftSidebarWidth.value;
  const startRight = rightSidebarWidth.value;
  const target = event.currentTarget as HTMLElement;
  target.classList.add('dragging');
  target.setPointerCapture?.(event.pointerId);

  const onMove = (moveEvent: PointerEvent) => {
    if (side === 'left') leftSidebarWidth.value = Math.max(240, Math.min(480, startLeft + moveEvent.clientX - startX));
    else rightSidebarWidth.value = Math.max(300, Math.min(520, startRight - moveEvent.clientX + startX));
  };
  const onUp = () => {
    target.classList.remove('dragging');
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    localStorage.setItem('sv-sidebar-left', String(leftSidebarWidth.value));
    localStorage.setItem('sv-sidebar-right', String(rightSidebarWidth.value));
  };
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
}

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

// Engine canvas container
const container = ref<HTMLElement | null>(null);

// Designer engine (replaces PSV)
const {
  isLoading: engineLoading,
  cameraYaw,
  cameraPitch,
  isPlacing: engineIsPlacing,
  placementMode,
  lastMarkerMoved,
  lastMarkerClicked,
  lastPlacement,
  initEngine,
  loadScene: engineLoadScene,
  startPlacement: engineStartPlacement,
  cancelPlacement: engineCancelPlacement,
  getCameraAim,
  captureSnapshot,
  refreshMarkers,
  setFov,
  setBrightness,
} = useDesignerEngine();

function updateSceneBrightness(event: Event) {
  setSceneBrightness(Number((event.target as HTMLInputElement).value));
}

function setSceneBrightness(value: number) {
  if (!currentScene.value) return;
  currentScene.value.brightness = value;
  setBrightness(value);
  markDirty();
}

const lockVideoAspectRatio = ref(true);

function updateVideoPanelSize(dimension: 'width' | 'height', rawValue: string | number) {
  if (selectedHotspot.value?.plugin !== 'video' || !currentScene.value) return;
  const marker = selectedHotspot.value as VideoMarker;
  const oldWidth = marker.width ?? 640;
  const oldHeight = marker.height ?? 360;
  const aspect = oldWidth / oldHeight || 16 / 9;
  const value = Math.round(Number(rawValue));
  if (!Number.isFinite(value)) return;

  if (dimension === 'width') {
    marker.width = Math.max(240, Math.min(2560, value));
    if (lockVideoAspectRatio.value) marker.height = Math.round(marker.width / aspect);
  } else {
    marker.height = Math.max(135, Math.min(1440, value));
    if (lockVideoAspectRatio.value) marker.width = Math.round(marker.height * aspect);
  }
  markDirty();
}

function setVideoPanelSize(width: number, height: number) {
  if (selectedHotspot.value?.plugin !== 'video' || !currentScene.value) return;
  const marker = selectedHotspot.value as VideoMarker;
  marker.width = width;
  marker.height = height;
  markDirty();
}

function setVideoRotation(axis: 'rotX' | 'rotY' | 'rotZ', degrees: string | number) {
  if (selectedHotspot.value?.plugin !== 'video') return;
  const marker = selectedHotspot.value as VideoMarker;
  marker[axis] = Number(degrees) * Math.PI / 180;
  markDirty();
}

function setPlaneMarkerScale(axis: 'scaleX' | 'scaleY', rawValue: string | number) {
  const marker = selectedHotspot.value;
  if (!marker || (marker.plugin !== 'navigation' && marker.plugin !== 'video') || !currentScene.value) return;
  marker[axis] = Math.max(0.1, Math.min(10, Number(rawValue) || 1));
  refreshMarkers(currentScene.value);
  markDirty();
}

// ── Hotspot drag-to-reposition ───────────────────────────────────────────────
// Watch lastMarkerMoved (emitted by MarkerPlugin via bus)
watch(lastMarkerMoved, (moved) => {
  if (!moved || !currentScene.value) return;
  const idx = currentScene.value.markers.findIndex((m) => m.id === moved.markerId);
  if (idx === -1) return;
  currentScene.value.markers[idx].yaw   = moved.yaw;
  currentScene.value.markers[idx].pitch = moved.pitch;
  markDirty();
});

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

// ── Sync markers to engine ───────────────────────────────────────────────────
function syncMarkersToViewer() {
  if (!currentScene.value) return;
  refreshMarkers?.(currentScene.value);
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
async function onPanoramaUrlChange() {
  if (!currentScene.value) return;
  panoramaPreviewFailed.value = false;
  await engineLoadScene(currentScene.value);
  markDirty();
}

// ── Init Engine ───────────────────────────────────────────────────────────────
onMounted(async () => {
  leftSidebarWidth.value = Number(localStorage.getItem('sv-sidebar-left')) || 320;
  rightSidebarWidth.value = Number(localStorage.getItem('sv-sidebar-right')) || 360;
  if (!container.value || !currentScene.value) return;

  await initEngine(container.value, currentScene.value);

  // Placement click: engine emits a special navigate event with encoded coords
  // (see useDesignerEngine.handlePlacementClick)
  // We intercept it here to open the modal
  // Note: engine.bus is accessible via composable's internal engine ref
});

// Use the exact raycast coordinate clicked on the panorama.
watch(lastPlacement, (placement) => {
  if (placement && isPlacingHotspot.value) {
    pendingHotspotCoords.value = { yaw: placement.yaw, pitch: placement.pitch };
    isPlacingHotspot.value = false;
    showHotspotModal.value = true;
  }
});

// Clicking a marker in the panorama selects it in the inspector. In preview
// mode the same selection is rendered by ViewerHotspotPanel, so info markers
// now have the same visible behaviour as in the public viewer.
watch(lastMarkerClicked, (marker) => {
  if (!marker) return;
  selectedHotspotId.value = marker.id;
  if (!previewMode.value) currentTab.value = 'hotspots';
});

// ── Scene Navigation ──────────────────────────────────────────────────────────
async function goToScene(idx: number) {
  if (!tour.value || idx < 0 || idx >= tour.value.scenes.length) return;
  currentSceneIdx.value = idx;
  selectedHotspotId.value = null;
  panoramaPreviewFailed.value = false;

  const targetScene = tour.value.scenes[idx];
  if (targetScene) {
    await engineLoadScene(targetScene);
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
    panorama: currentScene.value?.panorama ?? '',
    thumbnail: currentScene.value?.thumbnail ?? currentScene.value?.panorama ?? '',
    initialYaw: 0,
    initialPitch: 0,
    brightness: 1.25,
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
    engineStartPlacement('navigation');
    showToast({ message: 'Nhấn lên ảnh panorama để đặt điểm tương tác', variant: 'default' });
  } else {
    engineCancelPlacement();
  }
}

function cancelPlacing() {
  isPlacingHotspot.value = false;
  showHotspotModal.value = false;
  pendingHotspotCoords.value = null;
  engineCancelPlacement();
}

function createHotspot(type: 'navigation' | 'video' | 'panel') {
  if (!pendingHotspotCoords.value || !currentScene.value) return;
  const id = `h${Date.now()}`;
  const base = {
    id,
    label: type === 'navigation' ? 'Chuyển cảnh' : type === 'video' ? 'Xem video' : 'Xem nội dung',
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
  } else if (type === 'panel') {
    currentScene.value.markers.push({
      ...base,
      plugin: 'panel',
      placement: 'vertical',
      contents: [{ id: `${id}-text`, type: 'text', content: '' }],
    } as PanelMarkerData);
  } else if (type === 'video') {
    currentScene.value.markers.push({ ...base, plugin: 'video', src: '', width: 720, height: 405 } as VideoMarker);
  }

  selectedHotspotId.value = id;
  currentTab.value = 'hotspots';
  markDirty();
  showHotspotModal.value = false;
  pendingHotspotCoords.value = null;
  showToast({ message: 'Đã thêm điểm tương tác mới', variant: 'success' });
}

function addPanelBlock(type: PanelBlock['type']) {
  if (selectedHotspot.value?.plugin !== 'panel') return;
  const id = `block-${Date.now()}`;
  const block: PanelBlock = type === 'text'
    ? { id, type, content: '', presentation: 'text-only', speech: { lang: 'vi-VN', rate: 1, pitch: 1 } }
    : type === 'audio'
      ? { id, type, src: '' }
      : type === 'image3d'
        ? { id, type, image: '', caption: '' }
        : { id, type, context: '' };
  selectedHotspot.value.contents.push(block);
  syncMarkersToViewer();
  markDirty();
}

function removePanelBlock(index: number) {
  if (selectedHotspot.value?.plugin !== 'panel') return;
  selectedHotspot.value.contents.splice(index, 1);
  syncMarkersToViewer();
  markDirty();
}

function movePanelBlock(index: number, direction: -1 | 1) {
  if (selectedHotspot.value?.plugin !== 'panel') return;
  const target = index + direction;
  if (target < 0 || target >= selectedHotspot.value.contents.length) return;
  const [block] = selectedHotspot.value.contents.splice(index, 1);
  selectedHotspot.value.contents.splice(target, 0, block);
  syncMarkersToViewer();
  markDirty();
}

function deleteHotspot(id: string) {
  if (!currentScene.value) return;
  currentScene.value.markers = currentScene.value.markers.filter((m) => m.id !== id);
  if (selectedHotspotId.value === id) selectedHotspotId.value = null;
  markDirty();
  showToast({ message: 'Đã xóa điểm tương tác', variant: 'default' });
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
  // zoom% 50→200 mapped to FOV 120→30 (inverse: more zoom = lower FOV)
  const fov = 120 - ((zoom.value - 50) / 150) * 90;
  setFov(fov);
}

// ── Save to server ────────────────────────────────────────────────────────────
async function saveToServer() {
  if (!tour.value) return;
  saving.value = true;
  try {
    await $fetch<{ ok: boolean; tour: TourConfig }>(`/api/admin/tours/${slug}`, {
      method: 'POST',
      body: tour.value,
    });
    // Frontend state is the source of truth.
    // We do NOT re-assign from server response — that would reset the UI.
    // Just mark the current state as saved and snapshot it into history.
    pushHistorySnapshot();
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
  <div
    :class="['admin-studio', { 'preview-mode': previewMode }]"
    :style="{ gridTemplateColumns: `${leftSidebarWidth}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth}px` }"
  >

    <!-- Hidden native file input for real image upload -->
    <input
      ref="fileInput"
      type="file"
      accept="image/jpeg,image/png,image/webp"
      class="hidden"
      @change="handleFileChange"
    >
    <input ref="modelImageInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden" @change="handleModelImageChange">
    <input
      ref="narrationInput"
      type="file"
      accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac"
      class="hidden"
      @change="handleNarrationChange"
    >

    <!-- ═══ TOPBAR ═══ -->
    <header class="topbar">
      <div class="tb-logo">
        <div class="tb-logo-mark">SV</div>
        <div class="tb-logo-text">
          <strong>Sông Vân Studio</strong>
          <span>{{ tour?.title ?? 'Không gian triển lãm' }}</span>
        </div>
      </div>

      <div class="tb-breadcrumb">
        <NuxtLink to="/admin" class="hover:text-white transition-colors">Quản lý tour</NuxtLink>
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
          <img
            class="scene-thumb-sm"
            :src="s.thumbnail || s.panorama"
            :alt="s.title"
            @error="handleThumbnailError($event, s.panorama)"
          >
          <div class="scene-info">
            <strong>{{ s.title }}</strong>
            <span>{{ s.markers?.length ?? 0 }} điểm tương tác{{ tour?.initialSceneId === s.id ? ' · ★ Bắt đầu' : '' }}</span>
          </div>
          <span v-if="tour?.initialSceneId === s.id" class="scene-badge">Start</span>
        </div>
      </div>
    </aside>

    <div class="resizer resizer-left" aria-label="Thay đổi chiều rộng danh sách cảnh" @pointerdown="startResize('left', $event)" />

    <!-- ═══ CENTER — PREVIEW ═══ -->
    <main class="preview">
      <div class="preview-toolbar">
        <button
          :class="['tb-btn marker-add-btn', { placing: isPlacingHotspot }]"
          id="placeHotspotBtn"
          @click="startPlacingHotspot"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span>{{ isPlacingHotspot ? 'Đang đặt... (ESC)' : 'Đặt điểm tương tác' }}</span>
        </button>

        <span v-if="isPlacingHotspot" class="toolbar-hint">Nhấn vào ảnh để chọn vị trí</span>

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

      </div>

      <div class="preview-canvas" id="previewCanvas">
        <div ref="container" class="h-full w-full" />

        <div class="place-hint" :class="{ active: isPlacingHotspot }" id="placeHint">
          Nhấn lên ảnh để đặt điểm tương tác · ESC để hủy
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

    <div class="resizer resizer-right" aria-label="Thay đổi chiều rộng bảng thuộc tính" @pointerdown="startResize('right', $event)" />

    <!-- ═══ SIDEBAR PHẢI — INSPECTOR ═══ -->
    <aside class="inspector sidebar-right">
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
          Điểm tương tác
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
              <img v-if="!panoramaPreviewFailed" :src="currentScene.panorama" :alt="currentScene.title" @error="panoramaPreviewFailed = true">
              <div v-else class="image-error">Không đọc được ảnh. Hãy kiểm tra đường dẫn hoặc tải ảnh mới.</div>
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
            <div class="insp-section-title">Ánh sáng hình ảnh</div>
            <div class="brightness-control">
              <input
                :value="currentScene.brightness ?? 1.25"
                type="range"
                min="0.5"
                max="1.6"
                step="0.05"
                @input="updateSceneBrightness"
              >
              <output>{{ Math.round((currentScene.brightness ?? 1.25) * 100) }}%</output>
            </div>
            <div class="brightness-presets">
              <button type="button" @click="setSceneBrightness(1)">Gốc</button>
              <button type="button" @click="setSceneBrightness(1.25)">Mặc định</button>
              <button type="button" @click="setSceneBrightness(1.4)">Sáng rõ</button>
            </div>
            <div class="hint-text">Điều chỉnh riêng cho cảnh này, không thay đổi file ảnh gốc.</div>
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

        <!-- ── TAB 2: ĐIỂM TƯƠNG TÁC ── -->
        <template v-else-if="currentTab === 'hotspots' && currentScene">
          <div class="insp-section">
            <div class="insp-section-title">
              <span>Điểm tương tác trong cảnh ({{ currentScene.markers.length }})</span>
            </div>

            <div v-if="!currentScene.markers.length" class="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/>
              </svg>
              Chưa có điểm tương tác nào.<br>Nhấn “Đặt điểm tương tác” để bắt đầu.
            </div>

            <div v-else class="hotspot-list">
              <div
                v-for="hs in currentScene.markers"
                :key="hs.id"
                :class="['hotspot-row', { selected: hs.id === selectedHotspotId }]"
                @click="selectedHotspotId = hs.id"
              >
                <div :class="['hotspot-row-icon', hs.plugin === 'navigation' ? 'nav' : hs.plugin]">
                  <svg v-if="hs.plugin === 'navigation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 4 L12 18"/><path d="M6 11 L12 5 L18 11"/>
                  </svg>
                  <svg v-else-if="hs.plugin === 'video'" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <svg v-else-if="hs.plugin === 'model3d'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M12 22V12M3 7l9 5 9-5"/></svg>
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
              Thêm điểm tương tác
            </button>
          </div>

          <!-- Edit Selected Hotspot Form -->
          <div v-if="selectedHotspot" class="insp-section border-t border-white/8 pt-4">
            <div class="insp-section-title">Chỉnh sửa điểm tương tác</div>

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

            <!-- Navigation arrow 3D rotation — 3 axes -->
            <template v-if="selectedHotspot.plugin === 'navigation'">
              <!-- rotZ: spin around normal (former single rotation) -->
              <div class="field">
                <label>
                  Xoay (Z) — chiều nghiêng
                  <span class="field-badge">{{ Math.round(((selectedHotspot as NavigationMarker).rotZ ?? (selectedHotspot as NavigationMarker).rotation ?? 0) * 180 / Math.PI) }}°</span>
                </label>
                <div class="rotation-control">
                  <input type="range" min="-180" max="180" step="1"
                    :value="Math.round(((selectedHotspot as NavigationMarker).rotZ ?? (selectedHotspot as NavigationMarker).rotation ?? 0) * 180 / Math.PI)"
                    @input="(e: any) => {
                      (selectedHotspot as NavigationMarker).rotZ = Number(e.target.value) * Math.PI / 180;
                      refreshMarkers?.(currentScene); markDirty();
                    }"
                  />
                  <button class="reset-btn" title="Về 0°" @click="() => { (selectedHotspot as NavigationMarker).rotZ = 0; refreshMarkers?.(currentScene); markDirty(); }">↺</button>
                </div>
                <div class="hint-text">0° = ^^ hướng lên. 90° = phải. -90° = trái.</div>
              </div>

              <!-- rotX: tilt forward/back -->
              <div class="field">
                <label>
                  Nghiêng (X) — đứng / nằm
                  <span class="field-badge">{{ Math.round(((selectedHotspot as NavigationMarker).rotX ?? 0) * 180 / Math.PI) }}°</span>
                </label>
                <div class="rotation-control">
                  <input type="range" min="-90" max="90" step="1"
                    :value="Math.round(((selectedHotspot as NavigationMarker).rotX ?? 0) * 180 / Math.PI)"
                    @input="(e: any) => {
                      (selectedHotspot as NavigationMarker).rotX = Number(e.target.value) * Math.PI / 180;
                      refreshMarkers?.(currentScene); markDirty();
                    }"
                  />
                  <button class="reset-btn" title="Về 0°" @click="() => { (selectedHotspot as NavigationMarker).rotX = 0; refreshMarkers?.(currentScene); markDirty(); }">↺</button>
                </div>
                <div class="hint-text">0° = đứng thẳng. +45° = ngả về phía trước. -45° = ngả về phía sau.</div>
              </div>

              <!-- rotY: swivel left/right -->
              <div class="field">
                <label>
                  Xoay ngang (Y) — quay mặt
                  <span class="field-badge">{{ Math.round(((selectedHotspot as NavigationMarker).rotY ?? 0) * 180 / Math.PI) }}°</span>
                </label>
                <div class="rotation-control">
                  <input type="range" min="-90" max="90" step="1"
                    :value="Math.round(((selectedHotspot as NavigationMarker).rotY ?? 0) * 180 / Math.PI)"
                    @input="(e: any) => {
                      (selectedHotspot as NavigationMarker).rotY = Number(e.target.value) * Math.PI / 180;
                      refreshMarkers?.(currentScene); markDirty();
                    }"
                  />
                  <button class="reset-btn" title="Về 0°" @click="() => { (selectedHotspot as NavigationMarker).rotY = 0; refreshMarkers?.(currentScene); markDirty(); }">↺</button>
                </div>
                <div class="hint-text">Xoay mặt mũi tên sang trái/phải trong không gian 3D.</div>
              </div>
            </template>

            <!-- Plane Object3D markers resize independently on X/Y. -->
            <template v-if="selectedHotspot.plugin === 'navigation' || selectedHotspot.plugin === 'video'">
              <div class="field">
                <label>
                  Phóng ngang (X)
                  <span class="field-badge">{{ ((selectedHotspot.scaleX ?? 1) * 100).toFixed(0) }}%</span>
                </label>
                <div class="rotation-control">
                  <input type="range" min="0.25" max="4" step="0.05"
                    :value="selectedHotspot.scaleX ?? 1"
                    @input="(e:any) => setPlaneMarkerScale('scaleX', e.target.value)"
                  >
                  <button class="reset-btn" type="button" title="Về 100%" @click="setPlaneMarkerScale('scaleX', 1)">↺</button>
                </div>
              </div>
              <div class="field">
                <label>
                  Phóng dọc (Y)
                  <span class="field-badge">{{ ((selectedHotspot.scaleY ?? 1) * 100).toFixed(0) }}%</span>
                </label>
                <div class="rotation-control">
                  <input type="range" min="0.25" max="4" step="0.05"
                    :value="selectedHotspot.scaleY ?? 1"
                    @input="(e:any) => setPlaneMarkerScale('scaleY', e.target.value)"
                  >
                  <button class="reset-btn" type="button" title="Về 100%" @click="setPlaneMarkerScale('scaleY', 1)">↺</button>
                </div>
                <div class="hint-text">X và Y thay đổi độc lập; marker mặt phẳng không sử dụng chiều sâu Z.</div>
              </div>
            </template>

            <template v-if="selectedHotspot.plugin === 'panel'">
              <div class="field">
                <label>Hướng hiển thị panel</label>
                <select
                  :value="(selectedHotspot as PanelMarkerData).placement ?? 'vertical'"
                  @change="(e:any) => { (selectedHotspot as PanelMarkerData).placement = e.target.value; markDirty(); }"
                >
                  <option value="vertical">Chiều dọc</option>
                  <option value="horizontal">Chiều ngang</option>
                </select>
                <div class="hint-text">Hệ thống tự chọn trên/dưới hoặc trái/phải theo khoảng trống còn lại.</div>
              </div>
              <div class="field">
                <label>Nội dung trong panel</label>
                <div class="video-size-presets">
                  <button type="button" @click="addPanelBlock('text')">+ Văn bản</button>
                  <button type="button" @click="addPanelBlock('image3d')">+ Ảnh 3D</button>
                  <button type="button" @click="addPanelBlock('audio')">+ Âm thanh</button>
                  <button type="button" @click="addPanelBlock('ai-chat')">+ AI Chat</button>
                </div>
                <div class="hint-text">Có thể kết hợp nhiều loại và thay đổi thứ tự hiển thị.</div>
              </div>

              <div
                v-for="(block, blockIndex) in (selectedHotspot as PanelMarkerData).contents"
                :key="block.id"
                class="field panel-block-editor"
              >
                <label>
                  {{ block.type === 'text' ? 'Văn bản' : block.type === 'image3d' ? 'Ảnh 3D' : block.type === 'audio' ? 'Âm thanh' : 'AI Chat' }}
                  <span class="field-badge">{{ blockIndex + 1 }}</span>
                </label>
                <template v-if="block.type === 'text'">
                  <textarea :value="block.content" placeholder="Nội dung mô tả..." @input="(e:any) => { block.content = e.target.value; markDirty(); }" />
                  <label>Chế độ hiển thị</label>
                  <select :value="block.presentation ?? 'text-only'" @change="(e:any) => { block.presentation = e.target.value; markDirty(); }">
                    <option value="text-only">Chỉ văn bản</option>
                    <option value="text-and-audio">Văn bản và bản đọc</option>
                    <option value="audio-only">Chỉ bản đọc</option>
                  </select>
                  <template v-if="(block.presentation ?? 'text-only') !== 'text-only'">
                  <label>File bản đọc (VieNeu-TTS)</label>
                  <input
                    :value="block.speech?.src ?? ''"
                    type="text"
                    placeholder="/uploads/audio/ban-doc.wav hoặc URL"
                    @change="(e:any) => { block.speech = { ...(block.speech ?? {}), src: e.target.value }; syncMarkersToViewer(); markDirty(); }"
                  >
                  <div class="video-size-presets">
                    <button type="button" :disabled="uploadingNarration" @click="triggerNarrationUpload(block.id)">
                      {{ uploadingNarration && narrationTargetBlockId === block.id ? 'Đang tải...' : 'Tải file bản đọc' }}
                    </button>
                    <button
                      v-if="block.speech?.src"
                      type="button"
                      @click="block.speech = { ...(block.speech ?? {}), src: undefined }; syncMarkersToViewer(); markDirty();"
                    >Bỏ file</button>
                  </div>
                  <audio v-if="block.speech?.src" :src="block.speech.src" controls preload="metadata" style="width:100%" />
                  <div class="hint-text">Xuất WAV/MP3 từ VieNeu-TTS rồi tải lên đây. Khi có file, thanh tiến trình sẽ dùng đúng thời lượng audio.</div>
                  <details v-if="!block.speech?.src">
                    <summary>Giọng trình duyệt dự phòng</summary>
                  <select :value="block.speech?.lang ?? 'vi-VN'" @change="(e:any) => { block.speech = { ...(block.speech ?? {}), lang: e.target.value }; markDirty(); }">
                    <option value="vi-VN">Tiếng Việt</option>
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="fr-FR">Français</option>
                    <option value="ja-JP">日本語</option>
                    <option value="ko-KR">한국어</option>
                  </select>
                  <label>Tốc độ <span class="field-badge">{{ (block.speech?.rate ?? 1).toFixed(1) }}x</span></label>
                  <input type="range" min="0.5" max="2" step="0.1" :value="block.speech?.rate ?? 1" @input="(e:any) => { block.speech = { ...(block.speech ?? {}), rate: Number(e.target.value) }; markDirty(); }">
                  <label>Cao độ <span class="field-badge">{{ (block.speech?.pitch ?? 1).toFixed(1) }}</span></label>
                  <input type="range" min="0.5" max="2" step="0.1" :value="block.speech?.pitch ?? 1" @input="(e:any) => { block.speech = { ...(block.speech ?? {}), pitch: Number(e.target.value) }; markDirty(); }">
                  <div class="hint-text">Giọng đọc thực tế phụ thuộc vào giọng có sẵn trên thiết bị người xem.</div>
                  </details>
                  </template>
                </template>
                <template v-else-if="block.type === 'image3d'">
                  <input :value="block.image" type="text" placeholder="/uploads/... hoặc https://..." @input="(e:any) => { block.image = e.target.value; markDirty(); }">
                  <input :value="block.caption" type="text" placeholder="Chú thích ảnh (không bắt buộc)" @input="(e:any) => { block.caption = e.target.value; markDirty(); }">
                </template>
                <template v-else-if="block.type === 'audio'">
                  <input :value="block.src" type="text" placeholder="/audio/file.mp3 hoặc URL" @input="(e:any) => { block.src = e.target.value; markDirty(); }">
                  <div class="hint-text">AudioBlock chỉ phát tệp âm thanh được tải lên hoặc nhập bằng URL; khối này không tạo giọng đọc từ văn bản.</div>
                </template>
                <textarea v-else :value="block.context" placeholder="Ngữ cảnh dành cho AI..." @input="(e:any) => { block.context = e.target.value; markDirty(); }" />
                <div class="video-size-presets">
                  <button type="button" :disabled="blockIndex === 0" @click="movePanelBlock(blockIndex, -1)">↑ Lên</button>
                  <button type="button" :disabled="blockIndex === (selectedHotspot as PanelMarkerData).contents.length - 1" @click="movePanelBlock(blockIndex, 1)">↓ Xuống</button>
                  <button type="button" @click="removePanelBlock(blockIndex)">Xóa</button>
                </div>
              </div>
            </template>

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

            <template v-if="selectedHotspot.plugin === 'video'">
              <div class="field">
                <label>Đường dẫn video</label>
                <input :value="(selectedHotspot as VideoMarker).src" type="url" placeholder="YouTube embed, Vimeo hoặc /video.mp4" @change="(e:any) => { (selectedHotspot as VideoMarker).src = e.target.value; markDirty(); }">
                <div class="hint-text">YouTube, Vimeo và video trực tiếp đều hiển thị ngay trong panorama.</div>
              </div>

              <div class="field video-panel-size">
                <label>Kích thước panel</label>
                <div class="video-size-presets">
                  <button type="button" @click="setVideoPanelSize(480, 270)">Nhỏ</button>
                  <button type="button" @click="setVideoPanelSize(640, 360)">Vừa</button>
                  <button type="button" @click="setVideoPanelSize(960, 540)">Lớn</button>
                  <button type="button" @click="setVideoPanelSize(1600, 900)">Rất lớn</button>
                </div>
                <div class="video-size-row">
                  <span>Rộng</span>
                  <input type="range" min="240" max="2560" step="10" :value="(selectedHotspot as VideoMarker).width ?? 640" @input="(e:any) => updateVideoPanelSize('width', e.target.value)">
                  <input class="video-size-number" type="number" min="240" max="2560" step="10" :value="(selectedHotspot as VideoMarker).width ?? 640" @change="(e:any) => updateVideoPanelSize('width', e.target.value)">
                </div>
                <div class="video-size-row">
                  <span>Cao</span>
                  <input type="range" min="135" max="1440" step="5" :value="(selectedHotspot as VideoMarker).height ?? 360" @input="(e:any) => updateVideoPanelSize('height', e.target.value)">
                  <input class="video-size-number" type="number" min="135" max="1440" step="5" :value="(selectedHotspot as VideoMarker).height ?? 360" @change="(e:any) => updateVideoPanelSize('height', e.target.value)">
                </div>
                <label class="video-ratio-lock">
                  <input v-model="lockVideoAspectRatio" type="checkbox">
                  Giữ nguyên tỉ lệ khung hình
                </label>
                <div class="hint-text">Kích thước hiện tại: {{ (selectedHotspot as VideoMarker).width ?? 640 }} × {{ (selectedHotspot as VideoMarker).height ?? 360 }} px</div>
              </div>

              <div class="field">
                <label>Xoay ngang (Y) <span class="field-badge">{{ Math.round(((selectedHotspot as VideoMarker).rotY ?? 0) * 180 / Math.PI) }}°</span></label>
                <div class="rotation-control">
                  <input type="range" min="-90" max="90" step="1" :value="Math.round(((selectedHotspot as VideoMarker).rotY ?? 0) * 180 / Math.PI)" @input="(e:any) => setVideoRotation('rotY', e.target.value)">
                  <button class="reset-btn" type="button" title="Về 0°" @click="setVideoRotation('rotY', 0)">↺</button>
                </div>
                <div class="hint-text">Quay cạnh trái hoặc phải của màn hình ra xa người xem.</div>
              </div>
              <div class="field">
                <label>Nghiêng (X) <span class="field-badge">{{ Math.round(((selectedHotspot as VideoMarker).rotX ?? 0) * 180 / Math.PI) }}°</span></label>
                <div class="rotation-control">
                  <input type="range" min="-90" max="90" step="1" :value="Math.round(((selectedHotspot as VideoMarker).rotX ?? 0) * 180 / Math.PI)" @input="(e:any) => setVideoRotation('rotX', e.target.value)">
                  <button class="reset-btn" type="button" title="Về 0°" @click="setVideoRotation('rotX', 0)">↺</button>
                </div>
                <div class="hint-text">Ngả màn hình lên hoặc xuống trong không gian 3D.</div>
              </div>
              <div class="field">
                <label>Xoay mặt phẳng (Z) <span class="field-badge">{{ Math.round(((selectedHotspot as VideoMarker).rotZ ?? 0) * 180 / Math.PI) }}°</span></label>
                <div class="rotation-control">
                  <input type="range" min="-180" max="180" step="1" :value="Math.round(((selectedHotspot as VideoMarker).rotZ ?? 0) * 180 / Math.PI)" @input="(e:any) => setVideoRotation('rotZ', e.target.value)">
                  <button class="reset-btn" type="button" title="Về 0°" @click="setVideoRotation('rotZ', 0)">↺</button>
                </div>
                <div class="hint-text">Xoay panel theo chiều kim đồng hồ hoặc ngược lại.</div>
              </div>
            </template>

            <template v-if="selectedHotspot.plugin === 'model3d'">
              <div class="field">
                <label>Ảnh 3D / ảnh 360° của vật thể</label>
                <button class="model-image-picker" type="button" @click="modelImageInput?.click()">
                  <img v-if="(selectedHotspot as Model3DMarker).image" :src="(selectedHotspot as Model3DMarker).image" alt="Ảnh vật thể">
                  <span v-else>Chọn ảnh được người thiết kế chuẩn bị</span>
                </button>
                <input :value="(selectedHotspot as Model3DMarker).image" type="text" placeholder="/uploads/... hoặc https://..." @input="(e:any) => { (selectedHotspot as Model3DMarker).image = e.target.value; markDirty(); }">
              </div>
              <div class="field">
                <label>Mô tả vật thể</label>
                <textarea :value="(selectedHotspot as Model3DMarker).content" placeholder="Tên tác phẩm, chất liệu, tác giả..." @input="(e:any) => { (selectedHotspot as Model3DMarker).content = e.target.value; markDirty(); }" />
              </div>
              <div class="hint-text">Ứng dụng chỉ hiển thị ảnh do người thiết kế cung cấp, không tự tạo mô hình 3D.</div>
            </template>

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
            <div class="hint-text">💡 Kéo trực tiếp điểm tương tác trên ảnh panorama để đổi vị trí.</div>
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

  <!-- ═══ MODAL: Chọn loại điểm tương tác ═══ -->
  <div class="modal-backdrop" :class="{ open: showHotspotModal }" @click.self="cancelPlacing">
    <div class="modal">
      <div class="modal-head">
        <div><span class="modal-eyebrow">Điểm tương tác mới</span><h3>Chọn hành động khi người xem nhấn vào</h3></div>
        <button class="modal-close" @click="cancelPlacing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <div class="type-grid">
          <div class="type-card nav" @click="createHotspot('navigation')">
            <div class="type-card-icon nav">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4 L12 18" />
                <path d="M6 11 L12 5 L18 11" />
              </svg>
            </div>
            <strong>Chuyển cảnh</strong>
            <span>Đi tới một ảnh panorama khác</span>
          </div>
          <div class="type-card video" @click="createHotspot('video')">
            <div class="type-card-icon video"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
            <strong>Xem video</strong><span>Mở video giới thiệu hoặc tư liệu</span>
          </div>
          <div class="type-card info" @click="createHotspot('panel')">
            <div class="type-card-icon info">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 9h8M8 13h8M8 17h5" />
              </svg>
            </div>
            <strong>Panel nội dung</strong>
            <span>Kết hợp văn bản, ảnh 3D, âm thanh và AI</span>
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

.brightness-control { display:grid; grid-template-columns:minmax(0,1fr) 52px; align-items:center; gap:12px; }
.brightness-control input[type='range'] { width:100%; accent-color:#f59e0b; }
.brightness-control output { padding:5px 7px; border:1px solid rgba(255,255,255,.1); border-radius:6px; background:#232833; color:#fbbf24; font:600 11px monospace; text-align:center; }
.brightness-presets { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
.brightness-presets button { padding:7px 5px; border:1px solid rgba(255,255,255,.08); border-radius:6px; background:#232833; color:rgba(255,255,255,.65); font-size:10.5px; transition:.15s; }
.brightness-presets button:hover { border-color:rgba(245,158,11,.5); color:#fff; background:rgba(245,158,11,.12); }

.video-panel-size { padding:10px; border:1px solid rgba(255,255,255,.08); border-radius:8px; background:rgba(255,255,255,.025); }
.video-size-presets { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
.video-size-presets button { padding:7px 5px; border:1px solid rgba(255,255,255,.1); border-radius:6px; background:#232833; color:rgba(255,255,255,.72); font-size:11px; cursor:pointer; }
.video-size-presets button:hover { border-color:rgba(220,38,38,.55); color:#fff; background:rgba(220,38,38,.14); }
.video-size-row { display:grid; grid-template-columns:34px minmax(0,1fr) 66px; align-items:center; gap:8px; }
.video-size-row > span { font-size:11px; color:rgba(255,255,255,.5); }
.video-size-row input[type='range'] { width:100%; accent-color:#dc2626; }
.field .video-size-number { padding:6px 7px; text-align:center; font-variant-numeric:tabular-nums; }
.video-ratio-lock { display:flex; align-items:center; gap:7px; cursor:pointer; }
.video-ratio-lock input { accent-color:#dc2626; }

/* Rotation control — slider + reset button inline */
.rotation-control {
  display: flex;
  align-items: center;
  gap: 8px;
}
.rotation-control input[type="range"] {
  flex: 1;
  accent-color: #3b82f6;
  cursor: pointer;
}
.reset-btn {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 6px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.7);
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}
.reset-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }

/* Badge next to label showing current value */
.field-badge {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 7px;
  border-radius: 10px;
  background: rgba(59,130,246,0.22);
  color: #93c5fd;
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  vertical-align: middle;
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

.image-error, .model-image-picker {
  width: 100%; height: 100%; display: grid; place-items: center;
  padding: 18px; text-align: center; color: rgba(255,255,255,.52);
}
.model-image-picker { min-height: 150px; border: 1px dashed rgba(255,255,255,.16); border-radius: 8px; background: rgba(255,255,255,.025); overflow: hidden; }
.model-image-picker:hover { border-color: #9333ea; }
.model-image-picker img { width: 100%; max-height: 220px; object-fit: contain; }

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
.hotspot-row-icon.video { background: rgba(239,68,68,.22); color: #fca5a5; }
.hotspot-row-icon.model3d { background: rgba(168,85,247,.22); color: #d8b4fe; }

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
.modal-eyebrow { display:block; margin-bottom:3px; color:#60a5fa; font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }

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
.type-card-icon.video { background: rgba(239,68,68,.24); color:#fca5a5; }
.type-card-icon.model3d { background: rgba(168,85,247,.24); color:#d8b4fe; }
.type-card.video:hover { border-color: rgba(239,68,68,.5); background:rgba(239,68,68,.06); }
.type-card.model3d:hover { border-color: rgba(168,85,247,.5); background:rgba(168,85,247,.06); }
.type-card.nav:hover { border-color:rgba(59,130,246,.5); background:rgba(59,130,246,.06); }
.type-card.info:hover { border-color:rgba(160,120,40,.5); background:rgba(160,120,40,.06); }

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

/* ═══ SÔNG VÂN STUDIO — đồng bộ với design/admin.html ═══ */
.admin-studio {
  --sv-bg-0: #0b0d10;
  --sv-bg-1: #14171c;
  --sv-bg-2: #1b1f26;
  --sv-bg-3: #232833;
  --sv-border: rgba(255,255,255,.07);
  --sv-border-strong: rgba(255,255,255,.14);
  --sv-accent: #3b82f6;
  --sv-brand: #2d6a4f;
  grid-template-rows: 60px minmax(0, 1fr);
  gap: 0;
  background: var(--sv-bg-0);
  color: #f5f7fa;
  font-size: 13.5px;
}

.admin-studio > * { background: var(--sv-bg-1); }
.topbar { grid-column: 1 / -1; grid-row: 1; height: 60px; padding: 0 20px; gap: 20px; background: linear-gradient(180deg,var(--sv-bg-2),var(--sv-bg-1)) !important; border-bottom:1px solid var(--sv-border); }
.sidebar-left { grid-column: 1; grid-row: 2; min-width:0; background:var(--sv-bg-1); }
.resizer-left { grid-column: 2; grid-row: 2; }
.preview { grid-column: 3; grid-row: 2; min-width:0; background:var(--sv-bg-1); }
.resizer-right { grid-column: 4; grid-row: 2; }
.sidebar-right { grid-column: 5; grid-row: 2; min-width:0; background:var(--sv-bg-1); }

.resizer { position:relative; z-index:20; background:var(--sv-bg-0) !important; cursor:col-resize; touch-action:none; transition:background .15s; }
.resizer::before { content:''; position:absolute; inset:0; margin:auto; width:1px; height:36px; border-radius:2px; background:var(--sv-border-strong); transition:all .15s; }
.resizer:hover,.resizer.dragging { background:rgba(59,130,246,.15) !important; }
.resizer:hover::before { height:60px; background:var(--sv-accent); }
.resizer.dragging::before { height:100%; background:var(--sv-accent); }

.tb-logo { height:40px; padding-right:20px; gap:12px; }
.tb-logo-mark { width:38px; height:38px; border-radius:10px; background:linear-gradient(135deg,var(--sv-brand),#1b4332); font-size:12px; box-shadow:0 0 0 3px rgba(45,106,79,.15); }
.tb-logo-text strong { font-size:14px; }
.tb-logo-text span { max-width:220px; font-size:11px; letter-spacing:0; text-transform:none; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.tb-breadcrumb { font-size:12.5px; }
.save-indicator { padding:6px 14px; border:1px solid var(--sv-border); border-radius:999px; background:var(--sv-bg-3); }
.tb-btn { height:36px; padding:0 14px; border-radius:6px; background:var(--sv-bg-3); border-color:var(--sv-border); }
.tb-btn.primary { background:var(--sv-accent); border-color:var(--sv-accent); box-shadow:0 2px 8px rgba(59,130,246,.35); }

.side-head { padding:18px 16px 14px; border-color:var(--sv-border); }
.side-add { width:28px; height:28px; background:rgba(45,106,79,.2); border-color:rgba(45,106,79,.4); color:#7ec8a0; }
.scene-list { padding:10px; gap:6px; }
.scene-item { padding:8px; border-radius:10px; }
.scene-item:hover { background:var(--sv-bg-3); }
.scene-item.active { background:linear-gradient(90deg,rgba(59,130,246,.14),rgba(59,130,246,.05)); border-color:rgba(59,130,246,.4); }
.scene-item.active::before { background:var(--sv-accent); box-shadow:0 0 12px rgba(59,130,246,.7); }
.scene-thumb-sm { width:56px; height:40px; border-radius:6px; background:#000; }

.preview-toolbar { min-height:57px; padding:10px 14px; gap:10px; background:var(--sv-bg-1); border-color:var(--sv-border); }
.marker-add-btn { color:#fff; background:var(--sv-brand); border-color:var(--sv-brand); font-weight:600; }
.marker-add-btn:hover { background:#3a8562; border-color:#3a8562; }
.marker-add-btn.placing { color:#1a1613; background:#f59e0b; border-color:#f59e0b; }
.toolbar-hint { color:#f59e0b; font-size:11.5px; font-weight:600; }
.pt-zoom { background:var(--sv-bg-3); border-color:var(--sv-border); }
.preview-canvas { background:radial-gradient(circle at 50% 40%,#1a1e26 0%,#0a0c10 80%); }
.preview-info { left:16px; right:16px; bottom:16px; width:auto; padding:12px 18px; gap:14px; border:1px solid var(--sv-border-strong); border-radius:10px; background:rgba(10,12,16,.85); backdrop-filter:blur(16px); box-shadow:0 16px 48px rgba(0,0,0,.5); }
.preview-info-badge { color:#60a5fa; background:rgba(59,130,246,.15); border-color:rgba(59,130,246,.3); }
.preview-info-coord { margin-left:auto; }

.insp-tabs { border-color:var(--sv-border); }
.insp-tab { padding:14px 8px; }
.insp-tab.active { border-bottom-color:var(--sv-accent); }
.insp-body { padding:18px; gap:18px; }
.insp-section { gap:12px; }
.field input,.field textarea,.field select { background:var(--sv-bg-3); border-color:var(--sv-border); border-radius:6px; }
.field input:focus,.field textarea:focus,.field select:focus { border-color:var(--sv-accent); box-shadow:0 0 0 3px rgba(59,130,246,.14); }
.hotspot-row { padding:10px 12px; background:var(--sv-bg-3); border-color:var(--sv-border); border-radius:10px; }

.modal { max-width:720px; background:var(--sv-bg-2); border-color:var(--sv-border-strong); border-radius:14px; box-shadow:0 16px 48px rgba(0,0,0,.5); }
.modal-head { padding:20px 22px; }
.modal-body { padding:22px; }
.type-grid { gap:12px; }
.type-card { padding:20px 16px; background:var(--sv-bg-3); }

@media (max-width: 980px) {
  .admin-studio { grid-template-columns:240px 4px minmax(0,1fr) !important; }
  .resizer-right,.sidebar-right { display:none; }
  .preview { grid-column:3; }
  .tb-breadcrumb,.save-indicator { display:none; }
}
</style>
