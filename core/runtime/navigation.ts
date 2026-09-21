/**
 * core/runtime/navigation.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Scene navigation business logic — pure TypeScript, zero Vue/PSV deps.
 * Docs: "core/runtime — Navigation, resolver client, scene lifecycle"
 *
 * Tracks a navigation history stack so users can go "back" across scenes,
 * including cross-tour traversal (entryTourId stays fixed).
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { SceneRef } from '~/core/domain';

export interface NavigationState {
  /** The tour the user originally entered from */
  entryTourId: string;
  /** Current position in the stack */
  current: SceneRef;
  /** Back stack — most recent at end */
  history: SceneRef[];
}

/**
 * Create initial navigation state when entering a tour.
 */
export function createNavigationState(tourId: string, sceneId: string): NavigationState {
  return {
    entryTourId: tourId,
    current: { tourId, sceneId },
    history: [],
  };
}

/**
 * Navigate to a scene (may be in a different tour — cross-tour).
 * Returns a new state — does NOT mutate.
 */
export function navigateTo(state: NavigationState, target: SceneRef): NavigationState {
  // Don't push if navigating to the same scene
  if (
    state.current.tourId === target.tourId &&
    state.current.sceneId === target.sceneId
  ) {
    return state;
  }

  return {
    ...state,
    current: target,
    history: [...state.history, state.current],
  };
}

/**
 * Go back one step in history.
 * Returns a new state or the same state if already at start.
 */
export function navigateBack(state: NavigationState): NavigationState {
  if (state.history.length === 0) return state;

  const history  = [...state.history];
  const previous = history.pop()!;

  return {
    ...state,
    current: previous,
    history,
  };
}

/** Whether there is a scene to go back to. */
export function canGoBack(state: NavigationState): boolean {
  return state.history.length > 0;
}

/**
 * Whether the current scene belongs to a different tour than the entry tour.
 * Used to show "Back to original tour" button.
 */
export function isInGuestTour(state: NavigationState): boolean {
  return state.current.tourId !== state.entryTourId;
}
