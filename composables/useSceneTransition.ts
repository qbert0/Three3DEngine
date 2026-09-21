/**
 * composables/useSceneTransition.ts
 * Transition engine — 2-layer crossfade, KHÔNG tạo DOM mới mỗi lần switch.
 *
 * Cách hoạt động:
 *   [container]
 *     ├── <canvas PSV>              ← z-index 0
 *     ├── [overlay-old]  z-index 10 ← ảnh snapshot cảnh cũ
 *     └── [overlay-new]  z-index 11 ← ảnh cảnh mới (preload sẵn)
 */

export interface SceneTransitionHandle {
  /** Resolve khi overlay đã che kín — lúc này an toàn để swap PSV */
  atMidpoint: Promise<void>;
  /** Resolve khi overlay đã tan hoàn toàn */
  done: Promise<void>;
  /** Hủy giữa chừng (dùng khi user switch liên tục) */
  cancel: () => void;
}

interface LayerState {
  el: HTMLDivElement;
  img: HTMLImageElement | null;
}

const FADE_IN_RATIO = 0.45; // 45% thời gian đầu để che, 55% sau để tan

export function useSceneTransition() {
  /** Overlay cố định — tạo 1 lần, tái sử dụng */
  let root: HTMLDivElement | null = null;
  let oldLayer: LayerState | null = null;
  let newLayer: LayerState | null = null;

  function ensureRoot(container: HTMLElement) {
    if (root && root.parentElement === container) return root;

    // Nếu container đổi (component remount) → tạo lại
    if (root?.parentElement) root.parentElement.removeChild(root);

    root = document.createElement('div');
    root.className = 'psv-scene-transition';
    root.style.cssText = `
      position: absolute; inset: 0; pointer-events: none; z-index: 50;
      overflow: hidden; contain: strict;
    `;

    oldLayer = makeLayer(10);
    newLayer = makeLayer(11);
    root.appendChild(oldLayer.el);
    root.appendChild(newLayer.el);
    container.appendChild(root);
    return root;
  }

  function makeLayer(z: number): LayerState {
    const el = document.createElement('div');
    el.style.cssText = `
      position: absolute; inset: 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0;
      will-change: opacity;
      z-index: ${z};
      backface-visibility: hidden;
    `;
    return { el, img: null };
  }

  /**
   * Bắt đầu transition.
   * @param container  PSV container
   * @param snapshotUrl  URL ảnh snapshot cảnh cũ (đã có sẵn)
   * @param targetUrl    URL ảnh cảnh mới (đã preload xong)
   * @param duration     tổng thời gian (ms)
   */
  function run(
    container: HTMLElement,
    snapshotUrl: string,
    targetUrl: string,
    duration = 500,
  ): TransitionHandle {
    ensureRoot(container);
    if (!oldLayer || !newLayer) throw new Error('overlay init failed');

    const fadeIn = duration * FADE_IN_RATIO;
    const fadeOut = duration - fadeIn;

    // ── Setup: layer cũ = snapshot, layer mới = target ──
    oldLayer.el.style.backgroundImage = snapshotUrl ? `url("${snapshotUrl}")` : 'none';
    oldLayer.el.style.opacity = '1';
    oldLayer.el.style.transition = 'none';

    newLayer.el.style.backgroundImage = targetUrl ? `url("${targetUrl}")` : 'none';
    newLayer.el.style.opacity = '0';
    newLayer.el.style.transition = 'none';

    // Force reflow để transition ăn
    void oldLayer.el.offsetWidth;

    let resolveMid!: () => void;
    let resolveDone!: () => void;
    let cancelled = false;

    const atMidpoint = new Promise<void>((r) => (resolveMid = r));
    const done = new Promise<void>((r) => (resolveDone = r));

    // ── Phase 1: 2 layer cùng hiện (layer mới nổi lên trên layer cũ) ──
    newLayer.el.style.transition = `opacity ${fadeIn}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    newLayer.el.style.opacity = '1';

    const midTimer = setTimeout(() => {
      if (cancelled) return;
      resolveMid();

      // ── Phase 2: layer cũ & mới fade out (reveal canvas PSV mới bên dưới) ──
      oldLayer!.el.style.transition = `opacity ${fadeOut}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      oldLayer!.el.style.opacity = '0';

      newLayer!.el.style.transition = `opacity ${fadeOut}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      newLayer!.el.style.opacity = '0';

      const doneTimer = setTimeout(() => {
        if (cancelled) return;
        oldLayer!.el.style.transition = 'none';
        newLayer!.el.style.transition = 'none';
        oldLayer!.el.style.opacity = '0';
        newLayer!.el.style.opacity = '0';
        resolveDone();
      }, fadeOut);

      (handle as any)._doneTimer = doneTimer;
    }, fadeIn);

    const handle: TransitionHandle = {
      atMidpoint,
      done,
      cancel: () => {
        if (cancelled) return;
        cancelled = true;
        clearTimeout(midTimer);
        clearTimeout((handle as any)._doneTimer);
        if (oldLayer) {
          oldLayer.el.style.transition = 'none';
          oldLayer.el.style.opacity = '0';
        }
        if (newLayer) {
          newLayer.el.style.transition = 'none';
          newLayer.el.style.opacity = '0';
        }
        resolveMid();
        resolveDone();
      },
    };

    return handle;
  }

  function destroy() {
    root?.remove();
    root = null;
    oldLayer = null;
    newLayer = null;
  }

  return { run, destroy };
}
