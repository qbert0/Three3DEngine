/**
 * composables/useTransition.ts
 * Visual transition overlays: crossfade-pan, radial-blur, mask-wipe, vignette, split-slide.
 */

export type TransitionStyle =
  | 'crossfade-pan'
  | 'radial-blur'
  | 'mask-wipe'
  | 'vignette'
  | 'split-slide';

export interface TransitionHandle {
  /** Resolve khi overlay đã che kín (đã đến lúc swap) */
  atMidpoint: Promise<void>;
  /** Resolve khi overlay đã tan hoàn toàn */
  done: Promise<void>;
  /** Hủy transition giữa chừng */
  cancel: () => void;
  /** Đổi nội dung overlay giữa chừng (dùng cho thumbnail fallback) */
  updateBackground: (cssValue: string) => void;
}

export interface TransitionOptions {
  style?: TransitionStyle;
  duration?: number;
  direction?: number;
  color?: string;
}

export function useTransition() {
  function runTransition(
    container: HTMLElement,
    opts: TransitionOptions = {},
  ): TransitionHandle {
    const style = opts.style ?? 'crossfade-pan';
    const duration = opts.duration ?? 600;
    const midMs = duration * 0.5;

    const overlay = document.createElement('div');
    overlay.className = `psv-transition-overlay psv-transition-${style}`;
    overlay.style.cssText = `
      position: absolute; inset: 0; pointer-events: none; z-index: 100;
      opacity: 1; will-change: opacity, transform, backdrop-filter, background;
      overflow: hidden;
    `;
    container.appendChild(overlay);

    let resolveMid!: () => void;
    let resolveDone!: () => void;
    const atMidpoint = new Promise<void>((r) => (resolveMid = r));
    const done = new Promise<void>((r) => (resolveDone = r));
    let cancelled = false;

    const finish = () => {
      if (!cancelled) {
        cancelled = true;
        overlay.remove();
        resolveDone();
      }
    };

    const mid = () => {
      if (!cancelled) resolveMid();
    };

    switch (style) {
      case 'crossfade-pan':
        runCrossfadePan(overlay, container, midMs, duration, opts.direction ?? 0, mid, finish);
        break;
      case 'radial-blur':
        runRadialBlur(overlay, midMs, duration, mid, finish);
        break;
      case 'mask-wipe':
        runMaskWipe(overlay, midMs, duration, opts.direction ?? 0, opts.color ?? '#1f6f8b', mid, finish);
        break;
      case 'vignette':
        runVignette(overlay, midMs, duration, mid, finish);
        break;
      case 'split-slide':
        runSplitSlide(overlay, midMs, duration, mid, finish);
        break;
      default:
        runCrossfadePan(overlay, container, midMs, duration, opts.direction ?? 0, mid, finish);
    }

    return {
      atMidpoint,
      done,
      cancel: () => {
        cancelled = true;
        overlay.remove();
      },
      updateBackground: (css) => {
        overlay.style.background = css;
      },
    };
  }

  return { runTransition };
}

/* ═══════════════════════════════════════════════════════════
   CROSSFADE + DIRECTIONAL PAN
   ═══════════════════════════════════════════════════════════ */
function runCrossfadePan(
  overlay: HTMLElement,
  container: HTMLElement,
  midMs: number,
  duration: number,
  direction: number,
  onMid: () => void,
  onDone: () => void,
) {
  const panSign = Math.cos(direction) > 0 ? 1 : -1;
  const panPx = panSign * container.clientWidth * 0.35;

  overlay.style.background =
    'linear-gradient(90deg, rgba(0,0,0,0.15), transparent 30%, transparent 70%, rgba(0,0,0,0.15))';
  overlay.style.transform = 'translateX(0)';

  requestAnimationFrame(() => {
    overlay.style.transition = `transform ${midMs}ms cubic-bezier(0.4,0,0.2,1), opacity ${midMs}ms ease-in`;
    overlay.style.transform = `translateX(${-panPx}px)`;
    overlay.style.opacity = '0.85';
  });

  setTimeout(() => {
    onMid();
    overlay.style.transition = 'none';
    overlay.style.transform = `translateX(${panPx}px)`;
    overlay.style.opacity = '0.85';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.transition = `transform ${duration - midMs}ms cubic-bezier(0.16,1,0.3,1), opacity ${duration - midMs}ms ease-out`;
        overlay.style.transform = 'translateX(0)';
        overlay.style.opacity = '1';
      });
    });
    setTimeout(onDone, duration - midMs);
  }, midMs);
}

/* ═══════════════════════════════════════════════════════════
   RADIAL BLUR
   ═══════════════════════════════════════════════════════════ */
function runRadialBlur(
  overlay: HTMLElement,
  midMs: number,
  duration: number,
  onMid: () => void,
  onDone: () => void,
) {
  overlay.style.backdropFilter = 'blur(0px)';
  overlay.style.background = 'rgba(0,0,0,0)';

  requestAnimationFrame(() => {
    overlay.style.transition = `backdrop-filter ${midMs}ms cubic-bezier(0.4,0,1,1), background ${midMs}ms ease-in`;
    overlay.style.backdropFilter = 'blur(18px)';
    overlay.style.background = 'rgba(0,0,0,0.25)';
  });

  setTimeout(() => {
    onMid();
    requestAnimationFrame(() => {
      overlay.style.transition = `backdrop-filter ${duration - midMs}ms cubic-bezier(0,0,0.2,1), background ${duration - midMs}ms ease-out`;
      overlay.style.backdropFilter = 'blur(0px)';
      overlay.style.background = 'rgba(0,0,0,0)';
    });
    setTimeout(onDone, duration - midMs);
  }, midMs);
}

/* ═══════════════════════════════════════════════════════════
   MASK WIPE
   ═══════════════════════════════════════════════════════════ */
function runMaskWipe(
  overlay: HTMLElement,
  midMs: number,
  duration: number,
  direction: number,
  color: string,
  onMid: () => void,
  onDone: () => void,
) {
  const angleDeg = (direction * 180) / Math.PI + 90;

  overlay.style.background = `linear-gradient(${angleDeg}deg, transparent 0%, transparent 40%, ${color} 50%, transparent 60%, transparent 100%)`;
  overlay.style.backgroundSize = '300% 100%';
  overlay.style.backgroundPosition = '100% 0';

  requestAnimationFrame(() => {
    overlay.style.transition = `background-position ${midMs}ms cubic-bezier(0.4,0,0.6,1)`;
    overlay.style.backgroundPosition = '50% 0';
  });

  setTimeout(() => {
    onMid();
    requestAnimationFrame(() => {
      overlay.style.transition = `background-position ${duration - midMs}ms cubic-bezier(0.4,0,0.6,1)`;
      overlay.style.backgroundPosition = '0% 0';
    });
    setTimeout(onDone, duration - midMs);
  }, midMs);
}

/* ═══════════════════════════════════════════════════════════
   VIGNETTE
   ═══════════════════════════════════════════════════════════ */
function runVignette(
  overlay: HTMLElement,
  midMs: number,
  duration: number,
  onMid: () => void,
  onDone: () => void,
) {
  overlay.style.background =
    'radial-gradient(ellipse at center, transparent 0%, transparent 100%)';

  requestAnimationFrame(() => {
    overlay.style.transition = `background ${midMs}ms ease-in`;
    overlay.style.background =
      'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.95) 75%)';
  });

  setTimeout(() => {
    onMid();
    requestAnimationFrame(() => {
      overlay.style.transition = `background ${duration - midMs}ms ease-out`;
      overlay.style.background =
        'radial-gradient(ellipse at center, transparent 0%, transparent 100%)';
    });
    setTimeout(onDone, duration - midMs);
  }, midMs);
}

/* ═══════════════════════════════════════════════════════════
   SPLIT-SLIDE
   ═══════════════════════════════════════════════════════════ */
function runSplitSlide(
  overlay: HTMLElement,
  midMs: number,
  duration: number,
  onMid: () => void,
  onDone: () => void,
) {
  const strips = 6;
  overlay.style.background = 'none';
  overlay.innerHTML = '';

  const stripEls: HTMLElement[] = [];
  for (let i = 0; i < strips; i++) {
    const s = document.createElement('div');
    s.style.cssText = `
      position: absolute; top: 0; bottom: 0;
      left: ${(i * 100) / strips}%; width: ${100 / strips + 1}%;
      background: #0a0a0a; transform: translateY(100%);
      will-change: transform;
    `;
    overlay.appendChild(s);
    stripEls.push(s);
  }

  stripEls.forEach((s, i) => {
    setTimeout(() => {
      s.style.transition = `transform ${midMs * 0.8}ms cubic-bezier(0.16,1,0.3,1)`;
      s.style.transform = 'translateY(0)';
    }, i * (midMs / strips) * 0.5);
  });

  setTimeout(() => {
    onMid();
    stripEls.forEach((s, i) => {
      setTimeout(() => {
        s.style.transition = `transform ${(duration - midMs) * 0.8}ms cubic-bezier(0.4,0,0.6,1)`;
        s.style.transform = 'translateY(-100%)';
      }, i * ((duration - midMs) / strips) * 0.5);
    });
    setTimeout(onDone, duration - midMs);
  }, midMs);
}
