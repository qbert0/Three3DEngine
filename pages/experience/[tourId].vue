<script setup lang="ts">
/**
 * pages/experience/[tourId].vue
 * ──────────────────────────────────────────────────────────────────────────────
 * Route: /experience/:tourId
 * Immersive 360° Viewer page — Three.js core engine via useViewerEngine bridge.
 * ──────────────────────────────────────────────────────────────────────────────
 */
import type { TourConfig, TourScene } from '~/types/tour';
import { useRuntimeStore } from '~/stores/runtime';
import { useToast } from '~/composables/useToast';
import { useViewerEngine } from '~/composables/viewer/useViewerEngine';

definePageMeta({ layout: 'experience', ssr: false });

const route  = useRoute();
const tourId = computed(() => route.params.tourId as string);

// ── Fetch tour data ───────────────────────────────────────────────────────────
const { data, pending, error } = await useFetch<{ item: TourConfig }>(
  computed(() => `/api/tours/${tourId.value}`),
);

const tour   = computed(() => data.value?.item);
const scenes = computed<TourScene[]>(() => tour.value?.scenes ?? []);

useHead({ title: computed(() => tour.value ? `${tour.value.title} — View360` : 'View360') });

// ── Active scene — local ref ──────────────────────────────────────────────────
const activeSceneId = ref('');
const activeScene   = computed<TourScene | undefined>(
  () => scenes.value.find(s => s.id === activeSceneId.value) ?? scenes.value[0],
);

// Set initial scene after tour loads (or from ?scene= query)
const queryScene = computed(() => route.query.scene as string | undefined);
watch(scenes, (val) => {
  if (!val.length || activeSceneId.value) return;
  const preferred = queryScene.value || tour.value?.initialSceneId;
  const exists    = preferred && val.some(s => s.id === preferred);
  activeSceneId.value = exists ? preferred! : val[0].id;
}, { immediate: true });

// ── Pinia store — for navigation history & back button only ──────────────────
const store = useRuntimeStore();
watch(activeSceneId, (sceneId) => {
  if (sceneId && tour.value) {
    store.navigateTo(sceneId, tour.value.slug);
  }
});
watch(tour, (t) => {
  if (t && !store.tour) store.tour = t;
}, { immediate: true });

onBeforeUnmount(() => store.reset());

// ── Three.js Engine Bridge ────────────────────────────────────────────────────
const canvasContainerRef = ref<HTMLElement | null>(null);
const { isLoading: engineLoading, isTransitioning, errorMessage: engineError,
        currentScene: engineScene, initEngine, navigateTo,
        getDiagnostics, setQualityMode } = useViewerEngine({
  onNavigate: (sceneId) => handleNavigate(sceneId),
  autorotate: computed(() => tour.value?.autoRotate ?? false).value,
  transition: 'crossfade',
});

// Mount engine once canvas container is available
watch(canvasContainerRef, async (el) => {
  if (!el || !activeScene.value) return;
  await initEngine(el, activeScene.value, tour.value ?? undefined);
}, { once: true });

// Navigate engine when activeSceneId changes (from UI)
watch(activeSceneId, async (id) => {
  const scene = scenes.value.find(s => s.id === id);
  if (!scene || !engineScene.value || engineScene.value.id === id) return;
  await navigateTo(scene, scenes.value);
});

// ── Dev tools state (chỉ dùng trong development) ───────────────────────────
const devQualityMode = ref<import('~/composables/viewer/useViewerEngine').QualityMode>('quality');
const devCompareMode = ref<'panorama' | 'flat-100' | 'fit-screen'>('panorama');
const devPanoUrl    = computed(() => engineScene.value?.panorama ?? '');

function handleDevQualityChange(mode: typeof devQualityMode.value) {
  devQualityMode.value = mode;
  setQualityMode(mode);
}
function handleDevCompareMode(mode: typeof devCompareMode.value) {
  devCompareMode.value = mode;
}

// ── UI State ──────────────────────────────────────────────────────────────────
const toast = useToast();

const isImmersive = ref(false);
const showHelpPanel = ref(false);
const showInfoPanel = ref(false);
const infoPanelTitle = ref('');
const infoPanelContent = ref('');
const isCompassActive = ref(false);

const isDockCollapsed = ref(true); // Collapsed by default as in design/viewer.html
const dockEl = ref<HTMLElement | null>(null);
const sceneStripEl = ref<HTMLElement | null>(null);
let dockAutoCollapseTimer: ReturnType<typeof setTimeout> | null = null;

const sceneIndex = computed(() =>
  scenes.value.findIndex(s => s.id === activeSceneId.value) + 1,
);

// ── Dock Collapsibility & Timers ──────────────────────────────────────────────
function setDockCollapsed(collapsed: boolean) {
  isDockCollapsed.value = collapsed;
  if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
  if (!collapsed) {
    // Auto collapse after 6s of no interaction
    dockAutoCollapseTimer = setTimeout(() => {
      if (dockEl.value && !dockEl.value.matches(':hover')) {
        setDockCollapsed(true);
      }
    }, 6000);
  }
}

function toggleDock() {
  setDockCollapsed(!isDockCollapsed.value);
}

function handleDockMouseEnter() {
  if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
}

function handleDockMouseLeave() {
  if (!isDockCollapsed.value) {
    dockAutoCollapseTimer = setTimeout(() => setDockCollapsed(true), 2000);
  }
}

function flashDock() {
  if (isDockCollapsed.value) {
    isDockCollapsed.value = false;
    if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
    dockAutoCollapseTimer = setTimeout(() => setDockCollapsed(true), 4000);
  }
}

function scrollStripTo(idx: number) {
  nextTick(() => {
    if (!sceneStripEl.value) return;
    const thumb = sceneStripEl.value.querySelector(`[data-idx="${idx}"]`);
    if (thumb) {
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

// ── Navigation handlers ───────────────────────────────────────────────────────
function handleNavigate(sceneId: string) {
  if (sceneId === activeSceneId.value) return;
  const targetScene = scenes.value.find(s => s.id === sceneId);
  activeSceneId.value = sceneId;
  const idx = scenes.value.findIndex(s => s.id === sceneId);
  if (idx >= 0) scrollStripTo(idx);
  flashDock();
  if (targetScene) {
    toast.show({ message: `Đã chuyển đến: ${targetScene.title}` });
  }
}

function goToPrevScene() {
  if (!scenes.value.length) return;
  const currIdx = scenes.value.findIndex(s => s.id === activeSceneId.value);
  const prevIdx = (currIdx - 1 + scenes.value.length) % scenes.value.length;
  handleNavigate(scenes.value[prevIdx].id);
}

function goToNextScene() {
  if (!scenes.value.length) return;
  const currIdx = scenes.value.findIndex(s => s.id === activeSceneId.value);
  const nextIdx = (currIdx + 1) % scenes.value.length;
  handleNavigate(scenes.value[nextIdx].id);
}

// ── Panel Toggles ─────────────────────────────────────────────────────────────
function toggleHelpPanel() {
  showInfoPanel.value = false;
  showHelpPanel.value = !showHelpPanel.value;
}

function toggleInfoPanel() {
  showHelpPanel.value = false;
  showInfoPanel.value = !showInfoPanel.value;
}

function handleInfoOpen(content: string, label: string) {
  infoPanelTitle.value = label;
  infoPanelContent.value = content;
  showHelpPanel.value = false;
  showInfoPanel.value = true;
}

function triggerLightEffect() {
  toast.show({ message: '✨ Đã đổi hiệu ứng ánh sáng' });
}

function toggleCompass() {
  isCompassActive.value = !isCompassActive.value;
  toast.show({
    message: isCompassActive.value ? '🧭 Đã bật la bàn' : '🧭 Đã tắt la bàn',
  });
}

async function shareTour() {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: tour.value?.title ?? 'Tour 360°', url });
    } else {
      await navigator.clipboard.writeText(url);
      toast.show({ message: '🔗 Đã sao chép liên kết' });
    }
  } catch (e) {
    toast.show({ message: '🔗 Đã sao chép liên kết' });
  }
}

function toggleImmersive() {
  isImmersive.value = !isImmersive.value;
  if (isImmersive.value) {
    toast.show({ message: 'Chế độ toàn cảnh — nhấn Esc để thoát', duration: 2600 });
  }
}

// ── Keyboard Shortcuts ────────────────────────────────────────────────────────
function handleKeyDown(e: KeyboardEvent) {
  if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

  switch (e.key) {
    case 'Escape':
      if (isImmersive.value) {
        isImmersive.value = false;
      } else {
        showHelpPanel.value = false;
        showInfoPanel.value = false;
      }
      break;
    case 'ArrowRight':
      e.preventDefault();
      goToNextScene();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      goToPrevScene();
      break;
    case 'd':
    case 'D':
      toggleDock();
      break;
    case 'f':
    case 'F':
      toggleImmersive();
      break;
    case 'h':
    case 'H':
      isImmersive.value = !isImmersive.value;
      break;
    case '?':
      toggleHelpPanel();
      break;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  if (dockAutoCollapseTimer) clearTimeout(dockAutoCollapseTimer);
});
</script>

<template>
  <div :class="['viewer-root bg-ink', { immersive: isImmersive }]">
    <!-- Loading -->
    <div v-if="pending" class="grid h-screen w-full place-items-center bg-ink">
      <div class="flex flex-col items-center gap-5">
        <div class="relative">
          <UiSpinner size="lg" color="primary" />
          <div class="absolute inset-0 animate-ping rounded-full bg-river/15" />
        </div>
        <div class="text-center">
          <p class="text-sm font-semibold text-white">Đang tải trải nghiệm 360°</p>
          <p class="mt-1 text-xs text-white/40">{{ tourId }}</p>
        </div>
      </div>
    </div>

    <!-- Error -->
    <div v-else-if="error || !tour || !activeScene"
      class="grid h-screen w-full place-items-center bg-ink px-6">
      <UiEmptyState icon="🌐" title="Không thể tải tour"
        :description="`Tour '${tourId}' không tồn tại hoặc lỗi kết nối.`">
        <template #actions>
          <NuxtLink to="/"><UiButton variant="primary">Về trang chủ</UiButton></NuxtLink>
        </template>
      </UiEmptyState>
    </div>

    <!-- Main 360 Full-Bleed Viewer -->
    <template v-else>
      <!-- ═══ 360 PANORAMA — Three.js Engine ═══ -->
      <!-- Image comparison overlay (dev) -->
      <DevImageComparison
        v-if="$dev && devCompareMode !== 'panorama'"
        :url="devPanoUrl"
        :mode="devCompareMode as 'flat-100' | 'fit-screen'"
        @close="devCompareMode = 'panorama'"
      />

      <!-- Canvas (always rendered, hidden when compare overlay is active) -->
      <div
        ref="canvasContainerRef"
        class="absolute inset-0 h-full w-full"
        :style="{ visibility: devCompareMode !== 'panorama' ? 'hidden' : 'visible' }"
        aria-label="Panorama 360°"
      />

      <!-- Engine HUD (loading / error / scene badge) -->
      <ViewerHUD
        :is-loading="engineLoading"
        :is-transitioning="isTransitioning"
        :error-message="engineError"
        :current-scene="engineScene"
      />

      <!-- ═══ DEV TOOLS (only in development) ═══ -->
      <DevDiagnosticPanel
        v-if="$dev"
        :get-diagnostics="getDiagnostics"
        :set-quality-mode="setQualityMode"
        :current-quality="devQualityMode"
        :panorama-url="devPanoUrl"
        @quality-change="handleDevQualityChange"
        @compare-mode="handleDevCompareMode"
      />


      <!-- ═══ TOP BAR ═══ -->
      <div class="topbar">
        <NuxtLink to="/" class="tb-btn icon-only" aria-label="Quay lại danh mục" title="Quay lại trang chủ">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </NuxtLink>

        <div class="tb-scene">
          <span class="tb-scene-badge">{{ sceneIndex }}/{{ scenes.length }}</span>
          <span class="tb-scene-title">{{ activeScene.title }}</span>
          <span class="tb-scene-desc">{{ activeScene.subtitle ? `· ${activeScene.subtitle}` : '' }}</span>
        </div>

        <div class="tb-actions">
          <button type="button" class="tb-btn hide-mobile" title="Hướng dẫn sử dụng" @click="toggleHelpPanel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </button>
          <button type="button" class="tb-btn hide-mobile" title="Đổi hiệu ứng" @click="triggerLightEffect">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"/>
            </svg>
          </button>
          <button type="button" class="tb-btn icon-only" title="Chế độ toàn cảnh (nhấn F)" @click="toggleImmersive">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- ═══ SIDE PANEL: HELP ═══ -->
      <aside :class="['side-panel', { open: showHelpPanel }]" aria-hidden="true">
        <div class="panel-head">
          <div class="panel-head-left">
            <div class="panel-icon river">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <div>
              <div class="panel-title">Hướng dẫn sử dụng</div>
              <div class="panel-subtitle">Điều khiển tour 360°</div>
            </div>
          </div>
          <button type="button" class="panel-close" aria-label="Đóng" @click="showHelpPanel = false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <div class="panel-body">
          <ul class="guide-list">
            <li class="guide-item">
              <div class="guide-icon">🖱️</div>
              <div>
                <div class="guide-title">Kéo để xoay ảnh 360°</div>
                <div class="guide-desc">Nhấn giữ và kéo chuột (hoặc vuốt trên điện thoại) để xoay góc nhìn.</div>
              </div>
            </li>
            <li class="guide-item">
              <div class="guide-icon river-icon">🔵</div>
              <div>
                <div class="guide-title">Nút xanh — Di chuyển</div>
                <div class="guide-desc">Nhấn vào marker xanh để di chuyển đến cảnh tiếp theo.</div>
              </div>
            </li>
            <li class="guide-item">
              <div class="guide-icon info-icon">🟠</div>
              <div>
                <div class="guide-title">Nút cam — Xem thông tin</div>
                <div class="guide-desc">Nhấn vào marker cam để xem thông tin chi tiết về địa điểm.</div>
              </div>
            </li>
            <li class="guide-item">
              <div class="guide-icon">🔍</div>
              <div>
                <div class="guide-title">Cuộn để zoom</div>
                <div class="guide-desc">Dùng con lăn chuột hoặc chụm 2 ngón để phóng to / thu nhỏ.</div>
              </div>
            </li>
            <li class="guide-item">
              <div class="guide-icon">⌨️</div>
              <div>
                <div class="guide-title">Phím tắt</div>
                <div class="guide-desc">
                  <strong>F</strong> — Bật/tắt toàn cảnh ·
                  <strong>H</strong> — Ẩn/hiện giao diện ·
                  <strong>D</strong> — Thu gọn/mở dock ·
                  <strong>← →</strong> — Chuyển cảnh
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <!-- ═══ SIDE PANEL: INFO ═══ -->
      <aside :class="['side-panel', { open: showInfoPanel }]" aria-hidden="true">
        <div class="panel-head">
          <div class="panel-head-left">
            <div class="panel-icon clay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
                <circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none"/>
                <path d="M12 11 L12 18"/>
              </svg>
            </div>
            <div>
              <div class="panel-title">{{ infoPanelTitle || 'Thông tin địa điểm' }}</div>
              <div class="panel-subtitle">Chi tiết cảnh quan</div>
            </div>
          </div>
          <button type="button" class="panel-close" aria-label="Đóng" @click="showInfoPanel = false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <div class="panel-body">
          <div v-if="infoPanelContent" class="space-y-3" v-html="infoPanelContent"></div>
          <div v-else class="space-y-3">
            <p><strong>{{ activeScene.title }}</strong></p>
            <p v-if="activeScene.subtitle">{{ activeScene.subtitle }}</p>
            <p v-if="tour.summary">{{ tour.summary }}</p>
          </div>
        </div>
      </aside>

      <!-- ═══ FLOATING ACTIONS ═══ -->
      <div class="fab-stack">
        <button type="button" class="fab" title="Thông tin địa điểm" aria-label="Thông tin địa điểm" @click="toggleInfoPanel">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none"/>
            <path d="M12 11 L12 18"/>
          </svg>
        </button>
        <button type="button" :class="['fab', { active: isCompassActive }]" title="La bàn" aria-label="La bàn" @click="toggleCompass">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.6"/>
          </svg>
        </button>
        <button type="button" class="fab" title="Chia sẻ" aria-label="Chia sẻ" @click="shareTour">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>

      <!-- ═══ IMMERSIVE EXIT ═══ -->
      <button type="button" class="tb-btn icon-only immersive-exit" title="Thoát chế độ toàn cảnh (Esc)" @click="isImmersive = false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
        </svg>
      </button>

      <!-- ═══ BOTTOM DOCK ═══ -->
      <div
        ref="dockEl"
        :class="['dock', { collapsed: isDockCollapsed }]"
        @mouseenter="handleDockMouseEnter"
        @mouseleave="handleDockMouseLeave"
      >
        <!-- Nút toggle -->
        <button
          type="button"
          class="dock-toggle"
          aria-label="Mở/đóng danh sách cảnh"
          title="Mở/đóng danh sách cảnh (D)"
          @click.stop="toggleDock"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>

        <div class="dock-head">
          <div class="dock-label">
            <span class="dock-label-dot"></span>
            <span>{{ scenes.length }} cảnh · {{ tour.title }}</span>
          </div>
          <div class="dock-actions">
            <button type="button" class="dock-btn" title="Cảnh trước" @click="goToPrevScene">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>Trước</span>
            </button>
            <button type="button" class="dock-btn" title="Cảnh sau" @click="goToNextScene">
              <span>Sau</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div ref="sceneStripEl" class="scene-strip">
          <button
            v-for="(scene, idx) in scenes"
            :key="scene.id"
            type="button"
            :data-idx="idx"
            :class="['scene-thumb', { active: scene.id === activeSceneId }]"
            :aria-label="`Xem: ${scene.title}`"
            :title="scene.title"
            @click="handleNavigate(scene.id)"
          >
            <img :src="scene.thumbnail" :alt="scene.title" loading="lazy" />
            <span class="scene-thumb-num">{{ idx + 1 }}</span>
            <span class="scene-thumb-name">{{ scene.title }}</span>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
/* ═══ ROOT LAYOUT: full-bleed viewer ═══ */
.viewer-root {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  --glass-bg: rgba(10, 10, 10, 0.55);
  --glass-bg-strong: rgba(10, 10, 10, 0.78);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-border-strong: rgba(255, 255, 255, 0.22);
  --text-1: #ffffff;
  --text-2: rgba(255, 255, 255, 0.68);
  --text-3: rgba(255, 255, 255, 0.42);
  --river: #1f6f8b;
  --river-glow: rgba(31, 111, 139, 0.55);
  --clay: #a8583f;
  --clay-glow: rgba(168, 88, 63, 0.5);
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 999px;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.25);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.5);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ═══ TOP BAR ═══ */
.topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, transparent 100%);
  pointer-events: none;
}
.topbar > * {
  pointer-events: auto;
}

.tb-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 40px;
  min-width: 40px;
  padding: 0 12px;
  border-radius: var(--radius-md);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-1);
  font-size: 13px;
  font-weight: 500;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: all 0.2s var(--ease-out);
  white-space: nowrap;
}
.tb-btn:hover {
  background: var(--glass-bg-strong);
  border-color: var(--glass-border-strong);
  transform: translateY(-1px);
}
.tb-btn:active {
  transform: translateY(0);
}
.tb-btn svg {
  width: 16px;
  height: 16px;
}
.tb-btn.icon-only {
  padding: 0;
  min-width: 40px;
}

.tb-scene {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 14px;
  border-radius: var(--radius-md);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  overflow: hidden;
}

.tb-scene-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: var(--radius-full);
  background: rgba(31, 111, 139, 0.22);
  color: #7ec8e3;
  border: 1px solid rgba(31, 111, 139, 0.4);
  font-size: 10px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em;
  flex-shrink: 0;
}

.tb-scene-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tb-scene-desc {
  font-size: 12px;
  color: var(--text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;
}
@media (min-width: 640px) {
  .tb-scene-desc {
    display: block;
  }
}

.tb-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

/* ═══ SIDE PANELS (Info / Help) ═══ */
.side-panel {
  position: absolute;
  top: 76px;
  right: 16px;
  width: 360px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 180px);
  z-index: 25;
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border-strong);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: translateX(calc(100% + 24px));
  opacity: 0;
  transition: transform 0.35s var(--ease-out), opacity 0.35s var(--ease-out);
  pointer-events: none;
}
.side-panel.open {
  transform: translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.panel-head-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.panel-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.panel-icon.river {
  background: rgba(31, 111, 139, 0.22);
  color: #7ec8e3;
}
.panel-icon.clay {
  background: rgba(168, 88, 63, 0.22);
  color: #e0a58b;
}
.panel-icon svg {
  width: 16px;
  height: 16px;
}

.panel-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}
.panel-subtitle {
  font-size: 11px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 2px;
}

.panel-close {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-2);
  transition: all 0.2s;
  flex-shrink: 0;
}
.panel-close:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}
.panel-close svg {
  width: 14px;
  height: 14px;
}

.panel-body {
  padding: 18px;
  overflow-y: auto;
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
}
.panel-body::-webkit-scrollbar {
  width: 6px;
}
.panel-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
}

.guide-list {
  list-style: none;
  display: grid;
  gap: 12px;
}
.guide-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  transition: all 0.2s;
}
.guide-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}
.guide-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  background: rgba(31, 111, 139, 0.16);
  font-size: 18px;
  flex-shrink: 0;
}
.guide-title {
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 3px;
}
.guide-desc {
  font-size: 11.5px;
  color: var(--text-3);
  line-height: 1.5;
}

/* ═══ BOTTOM DOCK (Scene strip) ═══ */
.dock {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  padding: 16px 16px 14px;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
  pointer-events: none;
}
.dock > * {
  pointer-events: auto;
}

.dock.collapsed {
  transform: translateY(calc(100% - 28px));
  opacity: 0.85;
}
.dock.collapsed:hover {
  opacity: 1;
}

.dock-toggle {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 28px;
  border-radius: var(--radius-full) var(--radius-full) 0 0;
  background: var(--glass-bg-strong);
  border: 1px solid var(--glass-border);
  border-bottom: none;
  color: var(--text-2);
  display: grid;
  place-items: center;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: all 0.25s var(--ease-out);
  cursor: pointer;
  z-index: 2;
}
.dock-toggle:hover {
  color: #fff;
  background: rgba(10, 10, 10, 0.9);
  transform: translateX(-50%) translateY(-2px);
}
.dock-toggle:active {
  transform: translateX(-50%) translateY(0);
}
.dock-toggle svg {
  width: 16px;
  height: 16px;
  transition: transform 0.35s var(--ease-out);
}
.dock.collapsed .dock-toggle svg {
  transform: rotate(180deg);
}

.dock.collapsed .dock-head,
.dock.collapsed .scene-strip {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
.dock-head,
.scene-strip {
  transition: opacity 0.25s 0.1s;
}

.dock-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}
.dock-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-3);
}
.dock-label-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--river);
  box-shadow: 0 0 0 4px rgba(31, 111, 139, 0.2);
}
.dock-actions {
  display: flex;
  gap: 6px;
}
.dock-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-2);
  font-size: 11px;
  font-weight: 500;
  transition: all 0.2s;
}
.dock-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
}
.dock-btn svg {
  width: 12px;
  height: 12px;
}

.scene-strip {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 4px 0 8px;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}
.scene-strip::-webkit-scrollbar {
  display: none;
}

.scene-thumb {
  flex-shrink: 0;
  position: relative;
  width: 84px;
  height: 52px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  background: #000;
  scroll-snap-align: center;
  transition: all 0.25s var(--ease-out);
  cursor: pointer;
}
.scene-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  transition: opacity 0.25s;
}
.scene-thumb:hover {
  border-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}
.scene-thumb:hover img {
  opacity: 0.85;
}
.scene-thumb.active {
  border-color: var(--river);
  border-width: 2px;
  box-shadow: 0 0 0 3px rgba(31, 111, 139, 0.25), 0 4px 16px rgba(31, 111, 139, 0.35);
}
.scene-thumb.active img {
  opacity: 1;
}

.scene-thumb-num {
  position: absolute;
  top: 3px;
  left: 4px;
  font-size: 9px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  padding: 1px 5px;
  border-radius: 3px;
  backdrop-filter: blur(4px);
}
.scene-thumb-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 6px;
  font-size: 9px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

/* ═══ FLOATING ACTION BUTTONS ═══ */
.fab-stack {
  position: absolute;
  right: 16px;
  bottom: 110px;
  z-index: 22;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: opacity 0.3s, transform 0.3s;
}
.fab {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-2);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: var(--shadow-sm);
  transition: all 0.2s var(--ease-out);
}
.fab:hover {
  background: var(--glass-bg-strong);
  color: #fff;
  border-color: var(--glass-border-strong);
  transform: scale(1.08);
}
.fab:active {
  transform: scale(0.94);
}
.fab svg {
  width: 18px;
  height: 18px;
}
.fab.active {
  background: var(--river);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

/* ═══ IMMERSIVE MODE ═══ */
.viewer-root.immersive .topbar,
.viewer-root.immersive .dock,
.viewer-root.immersive .fab-stack,
.viewer-root.immersive .side-panel {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-12px);
}
.viewer-root.immersive .dock {
  transform: translateY(100%);
}
.viewer-root.immersive .fab-stack {
  transform: translateX(24px);
}
.viewer-root.immersive .dock-toggle {
  opacity: 0;
  pointer-events: none;
}

.immersive-exit {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 30;
  display: none;
}
.viewer-root.immersive .immersive-exit {
  display: grid;
}

/* ═══ MOBILE ═══ */
@media (max-width: 640px) {
  .topbar {
    padding: 10px 12px;
    gap: 8px;
  }
  .tb-scene {
    padding: 0 10px;
  }
  .tb-scene-title {
    font-size: 13px;
  }
  .tb-btn.hide-mobile {
    display: none;
  }
  .side-panel {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    max-height: 70vh;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    transform: translateY(100%);
  }
  .side-panel.open {
    transform: translateY(0);
  }
  .fab-stack {
    bottom: 130px;
    right: 12px;
  }
  .dock {
    padding: 12px 12px 10px;
  }
  .scene-thumb {
    width: 72px;
    height: 46px;
  }
}
</style>
