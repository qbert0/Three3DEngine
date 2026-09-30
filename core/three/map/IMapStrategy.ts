/**
 * ─────────────────────────────────────────────────────────────────
 * IMapStrategy — Strategy pattern for map rendering modes
 *
 * Each mode (2D, Real, 3D) implements this interface.
 * MapMarker delegates rendering/interaction to the active strategy.
 * ─────────────────────────────────────────────────────────────────
 */

import type { Camera } from 'three';

// ── Types ────────────────────────────────────────────────────────

export type MapMode = '2d' | 'real' | '3d';

export interface MapNode {
  id: string;
  name: string;
  panoramaUrl: string;
  neighbors: string[];
  /** Position on a 2D floorplan image (px from top-left). */
  mapPosition?: { x: number; y: number };
  /** Geo coordinates for real map mode. */
  geoPosition?: { lat: number; lng: number };
  /** World-space position for 3D top-down mode. */
  worldPosition?: { x: number; y: number; z: number };
}

// ── Config discriminated union ───────────────────────────────────

export interface MapConfigBase {
  mode: MapMode;
  nodes: MapNode[];
  currentNodeId?: string;

  // UI
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  width?: number;
  height?: number;
  visible?: boolean;

  // Behavior
  showConnections?: boolean;
  showCameraArrow?: boolean;
  clickToNavigate?: boolean;
  animateTransition?: boolean;
  transitionDuration?: number;
}

export interface Map2DConfig extends MapConfigBase {
  mode: '2d';
  /** URL of the 2D floorplan image. */
  imageUrl: string;
  /** Real-world width in meters (for scale bar). */
  widthMeters?: number;
  /** Real-world height in meters. */
  heightMeters?: number;
}

export interface MapRealConfig extends MapConfigBase {
  mode: 'real';
  provider: 'leaflet' | 'mapbox' | 'maplibre';
  apiKey?: string;
  styleUrl?: string;
  initialZoom?: number;
  initialCenter?: { lat: number; lng: number };
  tileUrl?: string;
}

export interface Map3DConfig extends MapConfigBase {
  mode: '3d';
  cameraHeight?: number;
  cameraAngle?: number;
  background?: string;
  showFloor?: boolean;
  showWalls?: boolean;
}

export type MapConfig = Map2DConfig | MapRealConfig | Map3DConfig;

// ── Strategy interface ───────────────────────────────────────────

export interface IMapStrategy {
  /** Initialize the strategy inside the given DOM container. */
  init(config: MapConfig, container: HTMLElement): Promise<void>;

  /** Called every frame. Strategies that need animation use this. */
  update(deltaTime: number, camera?: Camera): void;

  /** Highlight the current node and optionally animate the transition. */
  setCurrentNode(nodeId: string): void;

  /** Sync the camera heading indicator on the map. */
  setCameraHeading(yaw: number, pitch: number, fov?: number): void;

  /** Show/hide the map. */
  setVisible(visible: boolean): void;

  /** Resize the map container. */
  resize(width: number, height: number): void;

  /** Clean up all resources. */
  dispose(): void;

  /** Callback when user clicks a node on the map. */
  onNodeClick?: (nodeId: string) => void;
}
