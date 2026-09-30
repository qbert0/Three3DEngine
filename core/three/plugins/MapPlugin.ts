/**
 * ─────────────────────────────────────────────────────────────────
 * MapPlugin — extends MarkerPlugin
 *
 * Adds a map overlay to the 360° viewer. Inherits ALL of
 * MarkerPlugin's infrastructure (CSS3D, raycasting, panels,
 * drag, fade, hover) and adds:
 *   - MapMarker type registration
 *   - Camera heading → map sync
 *   - Current node → map sync
 *   - switchMode() / setVisible() / updateConfig() APIs
 * ─────────────────────────────────────────────────────────────────
 */

import { MarkerPlugin, type MarkerPluginOptions } from './MarkerPlugin';
import { MapMarker } from './markers/MapMarker';
import type { MapConfig, MapMode } from '../map/IMapStrategy';
import type { TourScene, TourMarker, MapMarkerData } from '~/types/tour';

export interface MapPluginOptions extends MarkerPluginOptions {
  /** Default map config — auto-injected into every scene if no map marker exists. */
  defaultConfig?: MapConfig;
}

/**
 * MapPlugin — extends MarkerPlugin.
 *
 * Usage:
 * ```ts
 * engine.addPlugin(new MapPlugin({ defaultConfig: { mode: '2d', ... } }));
 * ```
 */
export class MapPlugin extends MarkerPlugin {
  override readonly id: string = 'map';
  override readonly name: string = 'Map Plugin';

  private readonly mapMarker: MapMarker;
  private readonly defaultConfig?: MapConfig;
  private currentYaw = 0;
  private currentPitch = 0;
  private currentFov = 75;
  private currentSceneId: string | null = null;

  constructor(options: MapPluginOptions = {}) {
    super(options);

    this.defaultConfig = options.defaultConfig;
    this.mapMarker = new MapMarker();

    // Register the 'map' marker type so MarkerPlugin recognizes it.
    this.registerMarkerType(this.mapMarker);
  }

  // ── Lifecycle overrides ─────────────────────────────────────

  protected override onInit(): void {
    super.onInit();

    // Sync camera heading to map every frame via the bus
    this.unsubs.push(
      this.ctx.bus.on('camera:move', ({ yaw, pitch }) => {
        this.currentYaw = yaw;
        this.currentPitch = pitch;
        this.mapMarker.syncCameraHeading(yaw, pitch, this.currentFov);
      }),

      this.ctx.bus.on('camera:fov', ({ fov }) => {
        this.currentFov = fov;
        this.mapMarker.syncCameraHeading(this.currentYaw, this.currentPitch, fov);
      }),
    );

    // Listen for map node clicks dispatched as DOM CustomEvents
    const handleNodeClick = (e: Event) => {
      const { nodeId, node, markerId } = (e as CustomEvent).detail;
      this.ctx.bus.emit('map:node:click', { markerId, nodeId, node });
      if (this.defaultConfig?.clickToNavigate !== false) {
        this.ctx.bus.emit('navigate', { sceneId: nodeId });
      }
    };
    document.addEventListener('map:node:click', handleNodeClick);
    this.unsubs.push(() => document.removeEventListener('map:node:click', handleNodeClick));

    this.ctx.bus.emit('map:ready', { mode: this.defaultConfig?.mode });
  }

  protected override onUpdate(delta: number): void {
    super.onUpdate(delta);
    // Strategy.update() is handled internally by MapMarker via
    // PanelMarker.updatePanels() which MarkerPlugin already calls.
  }

  protected override onDestroy(): void {
    this.mapMarker.disposeMap();
    super.onDestroy();
    this.ctx.bus.emit('map:destroyed');
  }

  override onSceneLoad(scene: TourScene): void {
    // Don't hide the map panel during transitions — it should persist.
    // But let base class fade out the 3D sprite markers.
    super.onSceneLoad(scene);
  }

  override onSceneReady(scene: TourScene): void {
    super.onSceneReady(scene);
    this.currentSceneId = scene.id;

    // If defaultConfig exists and scene has no explicit map marker, inject one
    if (this.defaultConfig && !this.hasMapMarker(scene)) {
      this.injectMapMarker(scene);
    }

    // Sync current node on the map
    this.mapMarker.syncCurrentNode(scene.id);
  }

  // ── Public API ──────────────────────────────────────────────

  /** Toggle map visibility. */
  setVisible(visible: boolean): void {
    this.mapMarker.setMapVisible(visible);
    this.ctx.bus.emit('map:visibility', { visible });
  }

  /** Get current visibility state. */
  isVisible(): boolean {
    return this.mapMarker.isMapVisible();
  }

  /** Switch map mode at runtime (e.g. '2d' → 'real'). */
  async switchMode(newConfig: MapConfig): Promise<void> {
    const markerData = this.getMapMarkerData();
    if (!markerData) {
      console.warn('[MapPlugin] No map marker found to switch mode.');
      return;
    }
    Object.assign(markerData.config, newConfig);
    await this.mapMarker.switchMode(markerData, newConfig);
    this.ctx.bus.emit('map:mode:changed', { mode: newConfig.mode });
  }

  /** Update config without changing mode. */
  updateConfig(partial: Partial<MapConfig>): void {
    const markerData = this.getMapMarkerData();
    if (!markerData) return;
    Object.assign(markerData.config, partial);
    this.ctx.bus.emit('map:config:updated', { config: markerData.config });
  }

  /** Get current map config (for Vue bindings). */
  getConfig(): MapConfig | undefined {
    return this.getMapMarkerData()?.config;
  }

  /** Get current map mode. */
  getMode(): MapMode | undefined {
    return this.getConfig()?.mode;
  }

  // ── Private helpers ─────────────────────────────────────────

  private hasMapMarker(scene: TourScene): boolean {
    return !!scene.markers?.some((m) => m.plugin === 'map');
  }

  private getMapMarkerData(): MapMarkerData | undefined {
    for (const child of this.group.children) {
      const marker = child.userData.marker as TourMarker | undefined;
      if (marker?.plugin === 'map') return marker as MapMarkerData;
    }
    return undefined;
  }

  /**
   * Inject a virtual map marker into the scene and immediately open
   * its panel. The marker is hidden (no 3D sprite) — only the panel
   * overlay is shown.
   */
  private async injectMapMarker(scene: TourScene): Promise<void> {
    if (!this.defaultConfig) return;

    const markerData: MapMarkerData = {
      id: '__map__',
      plugin: 'map',
      label: 'Bản đồ',
      yaw: 0,
      pitch: 0,
      config: {
        ...this.defaultConfig,
        currentNodeId: scene.id,
      },
    };

    const object = this.mapMarker.createObject(markerData);
    this.addMarkerObject(object);

    // Auto-open the map panel
    await this.mapMarker.openMapPanel(markerData, this.ctx.container);
  }
}
