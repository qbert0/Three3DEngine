/**
 * ─────────────────────────────────────────────────────────────────
 * MapMarker — extends PanelMarker
 *
 * Renders an interactive map overlay panel in a corner of the viewer.
 * Delegates rendering to IMapStrategy (2D / real / 3D).
 *
 * Because it extends PanelMarker, MarkerPlugin automatically:
 *  - calls updatePanels() every frame
 *  - includes it in panelMarkerTypes()
 *  - closes it on scene transition via hideAllPanels()
 * ─────────────────────────────────────────────────────────────────
 */

import * as THREE from 'three';
import { PanelMarker } from './PanelMarker';
import { MapStrategyFactory } from '../../map/MapStrategyFactory';
import type { IMapStrategy, MapConfig } from '../../map/IMapStrategy';
import type { TourMarker, MapMarkerData } from '~/types/tour';

/**
 * MapMarker — panel-based marker that displays a map overlay.
 *
 * Unlike other PanelMarker subclasses, MapMarker does NOT anchor to a
 * 3D world-space position. Instead it renders a fixed-position panel
 * in a corner of the viewer container.
 */
export class MapMarker extends PanelMarker {
  // @ts-expect-error — narrowing literal type from parent's 'panel'
  override readonly markerType = 'map' as const;
  protected override readonly style = { color: '#2563eb', icon: '🗺', label: 'Bản đồ' };

  private strategy: IMapStrategy | null = null;
  private panelEl: HTMLElement | null = null;
  private mapContainer: HTMLElement | null = null;
  private heading = { yaw: 0, pitch: 0, fov: 75 };
  private _currentNodeId: string | null = null;
  private _visible = true;

  // ── Type guard ───────────────────────────────────────────────

  override supports(marker: TourMarker): marker is MapMarkerData {
    return marker.plugin === 'map';
  }

  // ── Sprite anchor ───────────────────────────────────────────

  override createObject(marker: MapMarkerData): THREE.Object3D {
    // Map doesn't appear as a 3D sprite — create a minimal invisible anchor.
    // The actual map UI is a DOM overlay managed separately.
    const sprite = super.createObject(marker);
    // Make the sprite invisible — map is shown via DOM overlay.
    if (sprite instanceof THREE.Sprite) {
      sprite.material.opacity = 0;
      sprite.material.depthTest = false;
      sprite.visible = false;
    }
    return sprite;
  }

  // ── Panel lifecycle ─────────────────────────────────────────

  /**
   * Open or close the map panel. Called from MapPlugin, not from
   * the regular marker-click flow.
   */
  async openMapPanel(
    marker: MapMarkerData,
    container: HTMLElement,
  ): Promise<void> {
    if (this.panelEl) {
      // Already open — just ensure visible
      this.panelEl.style.display = this._visible ? 'block' : 'none';
      return;
    }

    // Create fixed-position panel
    this.panelEl = document.createElement('div');
    this.panelEl.className = 'view360-map-panel';
    this.panelEl.style.cssText = [
      'position:absolute',
      'z-index:50',
      'pointer-events:auto',
      'border-radius:12px',
      'overflow:hidden',
      'box-shadow:0 8px 32px rgba(0,0,0,0.35)',
      'border:1px solid rgba(255,255,255,0.12)',
      'backdrop-filter:blur(8px)',
      'background:rgba(10,10,20,0.85)',
      'transition:opacity .2s ease',
      this.positionCSS(marker.config.position ?? 'bottom-right'),
      `width:${marker.config.width ?? 280}px`,
      `height:${marker.config.height ?? 200}px`,
    ].join(';');

    // Prevent panorama drag when interacting with map
    ['pointerdown', 'pointerup', 'click', 'wheel', 'touchstart', 'touchend'].forEach((name) => {
      this.panelEl!.addEventListener(name, (e) => e.stopPropagation());
    });

    this.mapContainer = document.createElement('div');
    this.mapContainer.style.cssText = 'width:100%;height:100%';
    this.panelEl.appendChild(this.mapContainer);
    container.appendChild(this.panelEl);

    // Initialize strategy
    this.strategy = MapStrategyFactory.create(marker.config);
    this.strategy.onNodeClick = (nodeId: string) => {
      const node = marker.config.nodes.find((n) => n.id === nodeId);
      if (!node) return;
      document.dispatchEvent(
        new CustomEvent('map:node:click', {
          detail: { markerId: marker.id, nodeId, node },
          bubbles: true,
        }),
      );
    };

    await this.strategy.init(marker.config, this.mapContainer);

    if (this._currentNodeId) this.strategy.setCurrentNode(this._currentNodeId);
    this.strategy.setCameraHeading(this.heading.yaw, this.heading.pitch, this.heading.fov);

    if (!this._visible) this.panelEl.style.display = 'none';
  }

  // ── Sync methods (called by MapPlugin) ──────────────────────

  syncCameraHeading(yaw: number, pitch: number, fov?: number): void {
    this.heading = { yaw, pitch, fov: fov ?? 75 };
    this.strategy?.setCameraHeading(yaw, pitch, fov);
  }

  syncCurrentNode(nodeId: string): void {
    this._currentNodeId = nodeId;
    this.strategy?.setCurrentNode(nodeId);
  }

  setMapVisible(visible: boolean): void {
    this._visible = visible;
    if (this.panelEl) this.panelEl.style.display = visible ? 'block' : 'none';
    this.strategy?.setVisible(visible);
  }

  isMapVisible(): boolean {
    return this._visible;
  }

  /**
   * Switch strategy at runtime. Disposes old, creates new.
   */
  async switchMode(marker: MapMarkerData, newConfig: MapConfig): Promise<void> {
    this.strategy?.dispose();
    this.strategy = null;
    if (this.mapContainer) this.mapContainer.innerHTML = '';

    this.strategy = MapStrategyFactory.create(newConfig);
    this.strategy.onNodeClick = (nodeId: string) => {
      const node = newConfig.nodes.find((n) => n.id === nodeId);
      if (!node) return;
      document.dispatchEvent(
        new CustomEvent('map:node:click', {
          detail: { markerId: marker.id, nodeId, node },
          bubbles: true,
        }),
      );
    };

    if (this.mapContainer) {
      await this.strategy.init(newConfig, this.mapContainer);
      if (this._currentNodeId) this.strategy.setCurrentNode(this._currentNodeId);
      this.strategy.setCameraHeading(this.heading.yaw, this.heading.pitch, this.heading.fov);
    }
  }

  // ── Dispose ─────────────────────────────────────────────────

  override disposeObject(object: THREE.Object3D): void {
    super.disposeObject(object);
    this.disposeMap();
  }

  disposeMap(): void {
    this.strategy?.dispose();
    this.strategy = null;
    this.panelEl?.remove();
    this.panelEl = null;
    this.mapContainer = null;
  }

  // ── Helpers ─────────────────────────────────────────────────

  private positionCSS(pos: string): string {
    switch (pos) {
      case 'top-left':     return 'top:16px;left:16px';
      case 'top-right':    return 'top:16px;right:16px';
      case 'bottom-left':  return 'bottom:16px;left:16px';
      case 'bottom-right':
      default:             return 'bottom:16px;right:16px';
    }
  }
}
