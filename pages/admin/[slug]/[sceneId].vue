<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, computed, watch } from 'vue';
import { Viewer, events } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import * as yaml from 'js-yaml';
import type { TourConfig, TourScene, TourMarker, NavigationMarker, InfoMarker } from '~/types/tour';

definePageMeta({ ssr: false });

const route = useRoute();
const slug = route.params.slug as string;
const sceneId = route.params.sceneId as string;

// ── Fetch tour data ───────────────────────────────────────────────────────────
const { data, refresh } = await useFetch<{ item: TourConfig }>(`/api/tours/${slug}`);
const tour = computed(() => data.value?.item);
const scene = computed<TourScene | undefined>(
  () => tour.value?.scenes.find((s) => s.id === sceneId),
);
const otherScenes = computed(() =>
  tour.value?.scenes.filter((s) => s.id !== sceneId) ?? [],
);

// ── Local editable markers (deep copy from scene) ─────────────────────────────
const localMarkers = ref<TourMarker[]>([]);
watch(scene, (s) => {
  if (s) localMarkers.value = JSON.parse(JSON.stringify(s.markers));
}, { immediate: true });

// ── Toolbar mode: what happens when user clicks the panorama ─────────────────
type AddMode = 'view' | 'add-navigation' | 'add-info';
const addMode = ref<AddMode>('view');

// ── PSV refs ─────────────────────────────────────────────────────────────────
const container = ref<HTMLElement | null>(null);
let viewer: Viewer | null = null;
let markersPlugin: MarkersPlugin | null = null;

// ── Selected marker for editing ───────────────────────────────────────────────
const selectedId = ref<string | null>(null);
const selectedMarker = computed(() =>
  localMarkers.value.find((m) => m.id === selectedId.value) ?? null,
);

// Edit form state (mirrors selectedMarker, editable)
const editLabel = ref('');
const editTargetScene = ref('');
const editContent = ref('');
const editYaw = ref(0);
const editPitch = ref(0);

watch(selectedMarker, (m) => {
  if (!m) return;
  editLabel.value = m.label;
  editYaw.value = m.yaw;
  editPitch.value = m.pitch;
  editTargetScene.value = m.plugin === 'navigation' ? (m as NavigationMarker).targetScene : '';
  editContent.value = m.plugin === 'info' ? (m as InfoMarker).content : '';
});

// ── PSV marker HTML — distinct icons per plugin ───────────────────────────────
const navHtml = (label: string) => `
  <div class="admin-marker admin-marker--nav" title="${label}">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 4 L12 18" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M6 11 L12 5 L18 11" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="20.5" r="1.6" fill="rgba(255,255,255,0.7)"/>
      <circle cx="15" cy="20.5" r="1.6" fill="rgba(255,255,255,0.7)"/>
    </svg>
    <span class="admin-marker__label">${label}</span>
  </div>`;

const infoHtml = (label: string) => `
  <div class="admin-marker admin-marker--info" title="${label}">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="4.5" r="1.5" fill="white"/>
      <path d="M9 7.5 L9 13.5" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    </svg>
    <span class="admin-marker__label">${label}</span>
  </div>`;

function markerHtml(m: TourMarker) {
  return m.plugin === 'navigation' ? navHtml(m.label) : infoHtml(m.label);
}

// ── Sync local markers → PSV viewer ──────────────────────────────────────────
function syncMarkersToViewer() {
  if (!markersPlugin) return;
  markersPlugin.clearMarkers();
  markersPlugin.setMarkers(
    localMarkers.value.map((m) => ({
      id: m.id,
      position: { yaw: m.yaw, pitch: m.pitch },
      html: markerHtml(m),
      anchor: 'bottom center',
      draggable: true,          // ← enable drag to move
      data: { plugin: m.plugin },
    })),
  );
}

watch(localMarkers, syncMarkersToViewer, { deep: true });

// ── Init PSV ──────────────────────────────────────────────────────────────────
onMounted(async () => {
  await nextTick();
  if (!container.value || !scene.value) return;

  viewer = new Viewer({
    container: container.value,
    panorama: scene.value.panorama,
    loadingImg: scene.value.thumbnail,
    defaultYaw: scene.value.initialYaw,
    defaultPitch: scene.value.initialPitch,
    touchmoveTwoFingers: false,
    mousewheelCtrlKey: false,
    navbar: ['zoom', 'move', 'fullscreen'],
    plugins: [[MarkersPlugin, { markers: [] }]],
  });

  markersPlugin = viewer.getPlugin<MarkersPlugin>(MarkersPlugin);

  // Render initial markers once PSV is ready
  viewer.addEventListener(events.ReadyEvent.type, () => {
    syncMarkersToViewer();
  });

  // ── Click on panorama ─────────────────────────────────────────────────────
  viewer.addEventListener('click', (e: any) => {
    const { yaw, pitch } = e.data as { yaw: number; pitch: number };

    if (addMode.value === 'add-navigation') {
      addMarker('navigation', yaw, pitch);
      addMode.value = 'view'; // reset mode after placing
    } else if (addMode.value === 'add-info') {
      addMarker('info', yaw, pitch);
      addMode.value = 'view';
    }
    // view mode: deselect
    else {
      selectedId.value = null;
    }
  });

  // ── Select marker → open edit panel ────────────────────────────────────────
  markersPlugin.addEventListener('select-marker', ({ marker }) => {
    selectedId.value = marker.id;
    addMode.value = 'view';
  });

  // ── Drag marker → update yaw/pitch in real-time ─────────────────────────────
  markersPlugin.addEventListener('marker-moved' as any, (e: any) => {
    const id: string = e.marker?.id ?? e.markerId;
    const pos = e.position ?? e.markerData?.position;
    if (!id || !pos) return;
    const idx = localMarkers.value.findIndex((m) => m.id === id);
    if (idx === -1) return;
    const updated = {
      ...localMarkers.value[idx],
      yaw: parseFloat((pos.yaw as number).toFixed(3)),
      pitch: parseFloat((pos.pitch as number).toFixed(3)),
    };
    localMarkers.value[idx] = updated;
    // If this marker is selected, update edit fields too
    if (selectedId.value === id) {
      editYaw.value = updated.yaw;
      editPitch.value = updated.pitch;
    }
  });
});

onBeforeUnmount(() => {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveToServer();
  }
  viewer?.destroy();
  viewer = null;
});

// ── Add a new marker ──────────────────────────────────────────────────────────
function addMarker(plugin: 'navigation' | 'info', yaw: number, pitch: number) {
  const id = `marker-${plugin}-${Date.now()}`;
  const base = {
    id,
    label: plugin === 'navigation' ? 'Điểm đến mới' : 'Thông tin',
    yaw: parseFloat(yaw.toFixed(3)),
    pitch: parseFloat(pitch.toFixed(3)),
  };
  if (plugin === 'navigation') {
    localMarkers.value.push({ ...base, plugin: 'navigation', targetScene: '' } as NavigationMarker);
  } else {
    localMarkers.value.push({ ...base, plugin: 'info', content: '' } as InfoMarker);
  }
  // Auto-select to edit immediately
  selectedId.value = id;
}

// ── Save edit form back to marker list ────────────────────────────────────────
function saveEdit() {
  const idx = localMarkers.value.findIndex((m) => m.id === selectedId.value);
  if (idx === -1) return;
  const base = {
    id: localMarkers.value[idx].id,
    plugin: localMarkers.value[idx].plugin,
    label: editLabel.value.trim() || 'Marker',
    yaw: editYaw.value,
    pitch: editPitch.value,
  };
  if (base.plugin === 'navigation') {
    localMarkers.value[idx] = { ...base, plugin: 'navigation', targetScene: editTargetScene.value };
  } else {
    localMarkers.value[idx] = { ...base, plugin: 'info', content: editContent.value };
  }
  selectedId.value = null;
}

function deleteMarker(id: string) {
  localMarkers.value = localMarkers.value.filter((m) => m.id !== id);
  if (selectedId.value === id) selectedId.value = null;
}

// ── Focus marker in viewer ────────────────────────────────────────────────────
function focusMarker(m: TourMarker) {
  selectedId.value = m.id;
  viewer?.rotate({ yaw: m.yaw, pitch: m.pitch });
}

// ── Auto-save (debounced) ─────────────────────────────────────────────────────
const saving = ref(false);
const saveMsg = ref('');
let saveTimer: ReturnType<typeof setTimeout> | null = null;

/** Auto-save markers whenever they change (1.5s debounce) */
watch(
  localMarkers,
  () => {
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(saveToServer, 1500);
  },
  { deep: true },
);

async function saveToServer() {
  if (!tour.value) return;
  saving.value = true;
  saveMsg.value = '';
  try {
    const res = await $fetch<{ ok: boolean; tour: TourConfig }>(
      `/api/admin/tours/${slug}/scenes/${sceneId}/markers`,
      {
        method: 'POST',
        body: { markers: localMarkers.value },
      },
    );
    if (res.tour) {
      data.value = { item: res.tour };
    }
    saveMsg.value = '✓ Đã lưu';
  } catch (err: any) {
    saveMsg.value = `✗ ${err?.statusMessage ?? 'Lỗi lưu file'}`;
  } finally {
    saving.value = false;
    setTimeout(() => { saveMsg.value = ''; }, 2500);
  }
}

function exportYaml() {
  if (!tour.value) return;
  const updated = {
    ...tour.value,
    scenes: tour.value.scenes.map((s) =>
      s.id === sceneId ? { ...s, markers: localMarkers.value } : s,
    ),
  };
  const blob = new Blob([yaml.dump(updated, { indent: 2, lineWidth: 120 })], { type: 'text/yaml' });
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    download: `${slug}.yaml`,
  });
  a.click();
  URL.revokeObjectURL(a.href);
}
</script>

<template>
  <main class="flex h-screen overflow-hidden bg-[#0d0d0d] text-white">

    <!-- ── Left panel ──────────────────────────────────────────────────────── -->
    <aside class="flex h-full w-[290px] shrink-0 flex-col border-r border-white/8 bg-ink">

      <!-- Scene header -->
      <div class="border-b border-white/8 px-5 py-4">
        <NuxtLink :to="`/admin/${slug}`" class="text-xs text-white/40 hover:text-white/70">
          ← {{ tour?.title }}
        </NuxtLink>
        <h1 class="mt-1.5 text-sm font-bold leading-snug text-white">{{ scene?.title }}</h1>
        <p class="mt-0.5 text-xs text-white/40">{{ localMarkers.length }} marker</p>
      </div>

      <!-- ── Toolbar: Add mode ─────────────────────────────────────────────── -->
      <div class="border-b border-white/8 px-4 py-3">
        <p class="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/30">Thêm marker</p>
        <div class="flex gap-2">
          <!-- Add Navigation -->
          <button
            class="flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"
            :class="addMode === 'add-navigation'
              ? 'border-river bg-river/20 text-river'
              : 'border-white/15 text-white/50 hover:border-river/50 hover:text-white/80'"
            @click="addMode = addMode === 'add-navigation' ? 'view' : 'add-navigation'"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 L12 17" :stroke="addMode === 'add-navigation' ? 'currentColor' : '#6b7280'" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M6 10 L12 4 L18 10" :stroke="addMode === 'add-navigation' ? 'currentColor' : '#6b7280'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Navigation
          </button>
          <!-- Add Info -->
          <button
            class="flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2 text-xs font-semibold transition-all"
            :class="addMode === 'add-info'
              ? 'border-clay bg-clay/20 text-clay'
              : 'border-white/15 text-white/50 hover:border-clay/50 hover:text-white/80'"
            @click="addMode = addMode === 'add-info' ? 'view' : 'add-info'"
          >
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="4.5" r="1.5" :fill="addMode === 'add-info' ? 'currentColor' : '#6b7280'"/>
              <path d="M9 7.5 L9 13.5" :stroke="addMode === 'add-info' ? 'currentColor' : '#6b7280'" stroke-width="2.2" stroke-linecap="round"/>
            </svg>
            Info
          </button>
        </div>
        <!-- Mode hint -->
        <p
          v-if="addMode !== 'view'"
          class="mt-2 rounded-lg px-2 py-1.5 text-[11px] text-center font-medium"
          :class="addMode === 'add-navigation' ? 'bg-river/10 text-river' : 'bg-clay/10 text-clay'"
        >
          {{ addMode === 'add-navigation' ? '↑ Nhấn vào ảnh để đặt marker điều hướng' : 'ⓘ Nhấn vào ảnh để đặt marker thông tin' }}
        </p>
      </div>

      <!-- ── Marker list ────────────────────────────────────────────────────── -->
      <div class="flex-1 overflow-y-auto px-3 py-3">
        <p v-if="!localMarkers.length" class="px-1 py-4 text-center text-xs italic text-white/30">
          Chưa có marker nào.<br/>Dùng nút ở trên rồi nhấn vào ảnh để thêm.
        </p>

        <div class="space-y-1.5">
          <div
            v-for="m in localMarkers"
            :key="m.id"
            class="group flex items-center gap-2 rounded-lg border px-3 py-2.5 cursor-pointer transition-all"
            :class="selectedId === m.id
              ? (m.plugin === 'navigation' ? 'border-river/60 bg-river/10' : 'border-clay/60 bg-clay/10')
              : 'border-white/8 bg-white/3 hover:border-white/20'"
            @click="focusMarker(m)"
          >
            <!-- Icon -->
            <div
              class="grid h-7 w-7 shrink-0 place-items-center rounded-full"
              :class="m.plugin === 'navigation' ? 'bg-river/25' : 'bg-clay/25'"
            >
              <svg v-if="m.plugin === 'navigation'" width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 4 L12 17" stroke="#1f6f8b" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M7 10 L12 5 L17 10" stroke="#1f6f8b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="10" height="12" viewBox="0 0 14 16" fill="none">
                <circle cx="7" cy="3" r="1.4" fill="#a8583f"/>
                <path d="M7 6 L7 13" stroke="#a8583f" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>

            <!-- Info -->
            <div class="min-w-0 flex-1">
              <p class="truncate text-xs font-semibold text-white">{{ m.label }}</p>
              <p class="text-[10px] text-white/35">
                yaw {{ m.yaw.toFixed(2) }} · pitch {{ m.pitch.toFixed(2) }}
              </p>
            </div>

            <!-- Delete button (visible on hover/select) -->
            <button
              class="shrink-0 rounded p-1 text-white/30 opacity-0 hover:text-clay group-hover:opacity-100 transition-all"
              :class="selectedId === m.id ? 'opacity-100' : ''"
              title="Xoá marker"
              @click.stop="deleteMarker(m.id)"
            >✕</button>
          </div>
        </div>
      </div>

      <!-- ── Auto-save status + Export ─────────────────────────────────────── -->
      <div class="border-t border-white/8 px-4 py-4 space-y-2">
        <!-- Auto-save status -->
        <div class="flex items-center gap-2 rounded-lg bg-white/4 px-3 py-2">
          <span v-if="saving" class="h-2 w-2 rounded-full bg-river animate-pulse shrink-0" />
          <span v-else-if="saveMsg.startsWith('✓')" class="h-2 w-2 rounded-full bg-[#4caf50] shrink-0" />
          <span v-else-if="saveMsg.startsWith('✗')" class="h-2 w-2 rounded-full bg-clay shrink-0" />
          <span v-else class="h-2 w-2 rounded-full bg-white/20 shrink-0" />
          <p class="text-xs"
            :class="{
              'text-river': saving,
              'text-[#4caf50]': !saving && saveMsg.startsWith('✓'),
              'text-clay': !saving && saveMsg.startsWith('✗'),
              'text-white/35': !saving && !saveMsg,
            }"
          >
            {{ saving ? 'Đang lưu…' : saveMsg || 'Tự động lưu khi thay đổi' }}
          </p>
        </div>
        <button
          class="w-full rounded-lg border border-white/15 px-4 py-2 text-xs text-white/55 hover:text-white hover:border-white/30 transition"
          @click="exportYaml"
        >📥 Xuất YAML</button>
      </div>

    </aside>

    <!-- ── Right: Panorama viewer ──────────────────────────────────────────── -->
    <div class="relative flex-1">
      <div ref="container" class="h-full w-full" />

      <!-- Cursor hint overlay (changes based on mode) -->
      <div
        class="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-xs backdrop-blur-sm ring-1 transition-all"
        :class="addMode === 'view'
          ? 'bg-ink/70 text-white/40 ring-white/10'
          : addMode === 'add-navigation'
            ? 'bg-river/20 text-river ring-river/40'
            : 'bg-clay/20 text-clay ring-clay/40'"
      >
        <span v-if="addMode === 'view'">🖱️ Kéo marker để di chuyển · Nhấn marker để chỉnh · Nhấn ảnh để bỏ chọn</span>
        <span v-else-if="addMode === 'add-navigation'">↑ Nhấn vào điểm trong ảnh để đặt marker Navigation</span>
        <span v-else>ⓘ Nhấn vào điểm trong ảnh để đặt marker Info</span>
      </div>

      <!-- ── Edit panel (slide up when marker selected) ───────────────────── -->
      <Transition name="slide-up">
        <div
          v-if="selectedMarker"
          class="absolute bottom-0 left-0 right-0 rounded-t-2xl border-t border-white/10 bg-ink/97 px-5 pb-6 pt-4 backdrop-blur-md shadow-2xl"
        >
          <div class="mb-4 flex items-center gap-3">
            <!-- Plugin type badge -->
            <span
              class="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              :class="selectedMarker.plugin === 'navigation' ? 'bg-river/20 text-river' : 'bg-clay/20 text-clay'"
            >
              {{ selectedMarker.plugin === 'navigation' ? '↑ Navigation' : 'ⓘ Info' }}
            </span>
            <h2 class="flex-1 text-sm font-semibold text-white">Chỉnh sửa Marker</h2>
            <button class="text-white/40 hover:text-white text-sm" @click="selectedId = null">✕</button>
          </div>

          <div class="grid gap-3">
            <!-- Label -->
            <div>
              <label class="mb-1 block text-[11px] text-white/50">Tên hiển thị</label>
              <input
                v-model="editLabel"
                placeholder="Tên marker"
                class="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-river focus:outline-none"
              />
            </div>

            <!-- Coordinates (read-only — drag to change) -->
            <div class="flex gap-2">
              <div class="flex-1">
                <label class="mb-1 block text-[11px] text-white/50">Yaw (kéo để thay đổi)</label>
                <div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">
                  {{ editYaw.toFixed(3) }}
                </div>
              </div>
              <div class="flex-1">
                <label class="mb-1 block text-[11px] text-white/50">Pitch (kéo để thay đổi)</label>
                <div class="rounded-lg border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/50 font-mono">
                  {{ editPitch.toFixed(3) }}
                </div>
              </div>
            </div>

            <!-- Navigation: target scene -->
            <div v-if="selectedMarker.plugin === 'navigation'">
              <label class="mb-1 block text-[11px] text-white/50">Cảnh đích</label>
              <select
                v-model="editTargetScene"
                class="w-full rounded-lg border border-white/15 bg-ink px-3 py-2 text-sm text-white focus:border-river focus:outline-none"
              >
                <option value="" disabled>Chọn cảnh đích...</option>
                <option v-for="s in otherScenes" :key="s.id" :value="s.id">{{ s.title }}</option>
              </select>
            </div>

            <!-- Info: content -->
            <div v-if="selectedMarker.plugin === 'info'">
              <label class="mb-1 block text-[11px] text-white/50">Nội dung thông tin</label>
              <textarea
                v-model="editContent"
                rows="2"
                placeholder="Mô tả về địa điểm..."
                class="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-clay focus:outline-none"
              />
            </div>

            <!-- Actions -->
            <div class="flex gap-2 pt-1">
              <button
                class="flex-1 rounded-lg py-2.5 text-sm font-bold transition"
                :class="selectedMarker.plugin === 'navigation' ? 'bg-river hover:bg-river/80 text-white' : 'bg-clay hover:bg-clay/80 text-white'"
                @click="saveEdit"
              >Lưu thay đổi</button>
              <button
                class="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-white/50 hover:border-clay/40 hover:text-clay transition"
                @click="deleteMarker(selectedMarker.id)"
              >Xoá</button>
            </div>
          </div>
        </div>
      </Transition>
    </div>

  </main>
</template>

<style>
/* ── Admin marker icon styles ──────────────────────────────────────────────── */
.admin-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: grab;
  user-select: none;
}
.admin-marker:active { cursor: grabbing; }

.admin-marker--nav > div {
  width: 46px; height: 46px;
  border-radius: 50%;
  background: rgba(31, 111, 139, 0.9);
  border: 2.5px solid rgba(255,255,255,0.85);
  box-shadow: 0 4px 20px rgba(31,111,139,0.55), 0 0 0 5px rgba(31,111,139,0.2);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.admin-marker--nav:hover > div {
  transform: scale(1.12);
  box-shadow: 0 6px 28px rgba(31,111,139,0.75), 0 0 0 7px rgba(31,111,139,0.28);
}

.admin-marker--info > div {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: rgba(168, 88, 63, 0.9);
  border: 2.5px solid rgba(255,255,255,0.85);
  box-shadow: 0 4px 20px rgba(168,88,63,0.5), 0 0 0 5px rgba(168,88,63,0.18);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.admin-marker--info:hover > div {
  transform: scale(1.12);
  box-shadow: 0 6px 28px rgba(168,88,63,0.7), 0 0 0 7px rgba(168,88,63,0.26);
}

.admin-marker__label {
  font-size: 10px; font-weight: 700;
  color: #fff;
  background: rgba(12,12,12,0.75);
  padding: 2px 8px;
  border-radius: 20px;
  white-space: nowrap;
  max-width: 120px;
  overflow: hidden; text-overflow: ellipsis;
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(4px);
}

/* ── Slide-up transition ────────────────────────────────────────────────────── */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%); opacity: 0;
}
</style>
