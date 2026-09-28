<script setup lang="ts">
/**
 * ViewerHUD — Heads-up display overlay cho viewer
 *
 * Hiển thị: loading spinner, tên cảnh, lỗi.
 * KHÔNG chứa engine logic — nhận data qua props.
 */
import type { TourScene } from '~/types/tour';

defineProps<{
  isLoading: boolean;
  isTransitioning: boolean;
  errorMessage: string;
  currentScene: TourScene | null;
}>();
</script>

<template>
  <!-- Loading Overlay -->
  <Transition name="hud-fade">
    <div
      v-if="isLoading"
      class="hud-overlay hud-loading"
      aria-live="polite"
      aria-label="Đang tải panorama"
    >
      <div class="hud-loading-inner">
        <span class="hud-spinner" aria-hidden="true" />
        <span class="hud-loading-text">Đang tải panorama 360°…</span>
      </div>
    </div>
  </Transition>

  <!-- Error Overlay -->
  <Transition name="hud-fade">
    <div
      v-if="errorMessage"
      class="hud-overlay hud-error"
      role="alert"
    >
      <div class="hud-error-inner">
        <span class="hud-error-icon" aria-hidden="true">⚠</span>
        <p class="hud-error-title">Không thể tải panorama</p>
        <p class="hud-error-msg">{{ errorMessage }}</p>
      </div>
    </div>
  </Transition>

  <!-- Scene name badge (top-left) -->
  <Transition name="hud-slide-up">
    <div
      v-if="currentScene && !isLoading"
      class="hud-scene-badge"
      aria-label="Cảnh hiện tại"
    >
      <span class="hud-scene-title">{{ currentScene.title }}</span>
      <span v-if="currentScene.subtitle" class="hud-scene-sub">
        {{ currentScene.subtitle }}
      </span>
    </div>
  </Transition>

  <!-- Transition flash (subtle vignette while switching scenes) -->
  <Transition name="hud-fade">
    <div v-if="isTransitioning" class="hud-transition-vignette" aria-hidden="true" />
  </Transition>
</template>

<style scoped>
/* ── Base overlays ─────────────────────────────────────────── */
.hud-overlay {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  pointer-events: none;
}

/* ── Loading ───────────────────────────────────────────────── */
.hud-loading {
  background: rgba(8, 8, 12, 0.82);
  backdrop-filter: blur(8px);
}

.hud-loading-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.hud-spinner {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2.5px solid rgba(255, 255, 255, 0.12);
  border-top-color: #4fa8d5;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.hud-loading-text {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.04em;
  font-family: 'Be Vietnam Pro', sans-serif;
}

/* ── Error ─────────────────────────────────────────────────── */
.hud-error {
  background: rgba(8, 8, 12, 0.9);
  backdrop-filter: blur(8px);
}

.hud-error-inner {
  text-align: center;
  max-width: 340px;
  padding: 0 24px;
}

.hud-error-icon {
  font-size: 28px;
  color: #e05252;
  display: block;
  margin-bottom: 10px;
}

.hud-error-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px;
}

.hud-error-msg {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin: 0;
}

/* ── Scene badge ───────────────────────────────────────────── */
.hud-scene-badge {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: rgba(8, 8, 12, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px 16px;
  backdrop-filter: blur(12px);
  max-width: 260px;
  pointer-events: none;
}

.hud-scene-title {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Be Vietnam Pro', sans-serif;
}

.hud-scene-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Vignette during transition ────────────────────────────── */
.hud-transition-vignette {
  position: absolute;
  inset: 0;
  z-index: 15;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.35) 100%
  );
  pointer-events: none;
}

/* ── Transitions ───────────────────────────────────────────── */
.hud-fade-enter-active,
.hud-fade-leave-active {
  transition: opacity 0.3s ease;
}
.hud-fade-enter-from,
.hud-fade-leave-to {
  opacity: 0;
}

.hud-slide-up-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: 0.1s;
}
.hud-slide-up-leave-active {
  transition: opacity 0.2s ease;
}
.hud-slide-up-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.hud-slide-up-leave-to {
  opacity: 0;
}
</style>
