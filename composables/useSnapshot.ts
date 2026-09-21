/**
 * composables/useSnapshot.ts
 * Snapshot cảnh hiện tại từ PSV WebGL canvas.
 *
 * TẠI SAO KHÔNG DÙNG toDataURL():
 *   - toDataURL() encode JPEG trên CPU, block main thread 100-200ms
 *   - drawImage() sang canvas 2D nhỏ (1280px) + toBlob() async = nhanh hơn 10x
 */

import type { Viewer } from '@photo-sphere-viewer/core';

const SNAPSHOT_MAX_WIDTH = 1280;

export function useSnapshot() {
  /** Cache URL gần nhất để tránh GC pressure */
  let lastObjectUrl: string | null = null;

  /**
   * Lấy snapshot cảnh hiện tại.
   * @returns Promise<string> — objectURL hoặc fallback URL
   */
  async function capture(viewer: Viewer | null, fallbackThumb?: string): Promise<string> {
    // Giải phóng URL cũ
    if (lastObjectUrl) {
      URL.revokeObjectURL(lastObjectUrl);
      lastObjectUrl = null;
    }

    if (!viewer) return fallbackThumb ?? '';

    try {
      const srcCanvas = findWebGLCanvas(viewer);
      if (!srcCanvas) return fallbackThumb ?? '';

      // ── Vẽ sang canvas 2D nhỏ ──
      const w = Math.min(SNAPSHOT_MAX_WIDTH, srcCanvas.width);
      const h = Math.round((srcCanvas.height / srcCanvas.width) * w);

      const c2d = document.createElement('canvas');
      c2d.width = w;
      c2d.height = h;
      const ctx = c2d.getContext('2d', { alpha: false });
      if (!ctx) return fallbackThumb ?? '';

      ctx.drawImage(srcCanvas, 0, 0, w, h);

      // ── toBlob async (không block main thread) ──
      const blob = await new Promise<Blob | null>((resolve) => {
        c2d.toBlob((b) => resolve(b), 'image/jpeg', 0.85);
      });

      if (!blob) return fallbackThumb ?? '';

      lastObjectUrl = URL.createObjectURL(blob);
      return lastObjectUrl;
    } catch (err) {
      console.warn('[snapshot] capture failed:', err);
      return fallbackThumb ?? '';
    }
  }

  function findWebGLCanvas(viewer: Viewer): HTMLCanvasElement | null {
    const anyViewer = viewer as any;

    // Cách 1: viewer.renderer.domElement (Three.js WebGLRenderer)
    const threeCanvas = anyViewer?.renderer?.domElement;
    if (threeCanvas instanceof HTMLCanvasElement) return threeCanvas;

    // Cách 2: querySelector từ container của PSV
    const container = viewer.container as HTMLElement | undefined;
    if (container) {
      const c = container.querySelector('canvas');
      if (c) return c;
    }

    return null;
  }

  function destroy() {
    if (lastObjectUrl) {
      URL.revokeObjectURL(lastObjectUrl);
      lastObjectUrl = null;
    }
  }

  return { capture, destroy };
}
