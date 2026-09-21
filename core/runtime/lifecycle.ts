/**
 * core/runtime/lifecycle.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Scene lifecycle event bus — pure TypeScript.
 * Docs: "core/runtime — Navigation, resolver client, scene lifecycle"
 *
 * Provides a lightweight pub/sub mechanism so plugins and components
 * can react to scene mount/unmount without tight coupling.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { SceneRef } from '~/core/domain';

export type LifecycleEvent =
  | { type: 'scene:before-leave';  scene: SceneRef }
  | { type: 'scene:enter';         scene: SceneRef }
  | { type: 'scene:ready';         scene: SceneRef }
  | { type: 'scene:error';         scene: SceneRef; error: Error }
  | { type: 'tour:enter';          tourId: string }
  | { type: 'audio:stop' }
  | { type: 'fullscreen:change';   active: boolean };

type Handler<T extends LifecycleEvent> = (event: T) => void;
type AnyHandler = (event: LifecycleEvent) => void;

/**
 * Minimal event bus for scene lifecycle events.
 * Create one instance per viewer session via `createLifecycleBus()`.
 */
export interface LifecycleBus {
  on(handler: AnyHandler): () => void;
  emit(event: LifecycleEvent): void;
  destroy(): void;
}

export function createLifecycleBus(): LifecycleBus {
  const handlers = new Set<AnyHandler>();

  return {
    on(handler) {
      handlers.add(handler);
      // Return unsubscribe function
      return () => handlers.delete(handler);
    },
    emit(event) {
      for (const h of handlers) {
        try { h(event); } catch (e) { console.error('[LifecycleBus]', e); }
      }
    },
    destroy() {
      handlers.clear();
    },
  };
}
