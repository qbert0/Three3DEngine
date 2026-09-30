/**
 * ─────────────────────────────────────────────────────────────────
 * Map2DStrategy — Canvas-based 2D floorplan map
 *
 * Renders nodes and connections on a 2D image.
 * Lightweight — no external dependencies.
 * ─────────────────────────────────────────────────────────────────
 */

import type { Camera } from 'three';
import type { IMapStrategy, MapConfig, Map2DConfig, MapNode } from './IMapStrategy';

export class Map2DStrategy implements IMapStrategy {
  private canvas!: HTMLCanvasElement;
  private ctx2d!: CanvasRenderingContext2D;
  private image: HTMLImageElement | null = null;
  private config!: Map2DConfig;
  private currentNodeId: string | null = null;
  private heading = { yaw: 0, pitch: 0, fov: 75 };

  onNodeClick?: (nodeId: string) => void;

  async init(config: MapConfig, container: HTMLElement): Promise<void> {
    this.config = config as Map2DConfig;
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = 'width:100%;height:100%;display:block;cursor:pointer';
    this.ctx2d = this.canvas.getContext('2d')!;
    container.appendChild(this.canvas);

    this.canvas.addEventListener('click', this.handleClick);

    if (this.config.imageUrl) {
      this.image = new Image();
      this.image.crossOrigin = 'anonymous';
      this.image.src = this.config.imageUrl;
      await new Promise<void>((resolve) => {
        this.image!.onload = () => resolve();
        this.image!.onerror = () => resolve(); // graceful fallback
      });
    }
    this.resize(container.clientWidth, container.clientHeight);
    this.draw();
  }

  update(_dt: number, _camera?: Camera): void {
    this.draw();
  }

  setCurrentNode(nodeId: string): void {
    this.currentNodeId = nodeId;
    this.draw();
  }

  setCameraHeading(yaw: number, pitch: number, fov?: number): void {
    this.heading = { yaw, pitch, fov: fov ?? 75 };
    this.draw();
  }

  setVisible(visible: boolean): void {
    this.canvas.style.display = visible ? 'block' : 'none';
  }

  resize(width: number, height: number): void {
    const dpr = Math.min(window.devicePixelRatio, 2);
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.ctx2d.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.draw();
  }

  dispose(): void {
    this.canvas.removeEventListener('click', this.handleClick);
    this.canvas.remove();
  }

  // ── Private ──────────────────────────────────────────────────

  private draw(): void {
    const ctx = this.ctx2d;
    const w = this.canvas.width / (Math.min(window.devicePixelRatio, 2));
    const h = this.canvas.height / (Math.min(window.devicePixelRatio, 2));
    ctx.clearRect(0, 0, w, h);

    // Background image
    if (this.image?.complete && this.image.naturalWidth > 0) {
      ctx.drawImage(this.image, 0, 0, w, h);
    } else {
      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, w, h);
    }

    const nodes = this.config.nodes;

    // Connections
    if (this.config.showConnections !== false) {
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.5;
      nodes.forEach((node) => {
        const pos = this.nodeScreenPos(node, w, h);
        if (!pos) return;
        node.neighbors.forEach((neighborId) => {
          const neighbor = nodes.find((n) => n.id === neighborId);
          const nPos = neighbor ? this.nodeScreenPos(neighbor, w, h) : null;
          if (!nPos) return;
          ctx.beginPath();
          ctx.moveTo(pos.x, pos.y);
          ctx.lineTo(nPos.x, nPos.y);
          ctx.stroke();
        });
      });
    }

    // Nodes
    nodes.forEach((node) => {
      const pos = this.nodeScreenPos(node, w, h);
      if (!pos) return;
      const isCurrent = node.id === this.currentNodeId;
      const r = isCurrent ? 8 : 5;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? '#f59e0b' : 'rgba(255,255,255,0.7)';
      ctx.fill();
      if (isCurrent) {
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });

    // Camera heading arrow
    if (this.config.showCameraArrow !== false && this.currentNodeId) {
      const curNode = nodes.find((n) => n.id === this.currentNodeId);
      const pos = curNode ? this.nodeScreenPos(curNode, w, h) : null;
      if (pos) {
        const angle = -this.heading.yaw - Math.PI / 2;
        const len = 18;
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(len, 0);
        ctx.lineTo(-6, -6);
        ctx.lineTo(-6, 6);
        ctx.closePath();
        ctx.fillStyle = 'rgba(245,158,11,0.8)';
        ctx.fill();
        ctx.restore();
      }
    }
  }

  private nodeScreenPos(node: MapNode, w: number, h: number): { x: number; y: number } | null {
    if (!node.mapPosition) return null;
    // mapPosition is assumed to be normalized (0..1) or absolute px.
    // If image, normalize to container size.
    const imgW = this.image?.naturalWidth ?? 1;
    const imgH = this.image?.naturalHeight ?? 1;
    return {
      x: (node.mapPosition.x / imgW) * w,
      y: (node.mapPosition.y / imgH) * h,
    };
  }

  private handleClick = (e: MouseEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    let closest: MapNode | null = null;
    let minDist = 20; // hit radius in px
    for (const node of this.config.nodes) {
      const pos = this.nodeScreenPos(node, w, h);
      if (!pos) continue;
      const dist = Math.hypot(mx - pos.x, my - pos.y);
      if (dist < minDist) {
        minDist = dist;
        closest = node;
      }
    }
    if (closest) this.onNodeClick?.(closest.id);
  };
}
