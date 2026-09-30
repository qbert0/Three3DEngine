import * as THREE from 'three';
import { PlaneObject3DMarker } from './PlaneObject3DMarker';
import type { NavigationMarker as NavigationMarkerData } from '~/types/tour';

const PARALLAX_STRENGTH = 0.15;
const cameraForward = new THREE.Vector3();
const markerAxis = new THREE.Vector3();
const leanEuler = new THREE.Euler();
const leanQuaternion = new THREE.Quaternion();

interface NavigationMeshData {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  time: number;
  baseQuaternion: THREE.Quaternion;
}

export class NavigationMarker extends PlaneObject3DMarker<NavigationMarkerData> {
  readonly markerType = 'navigation' as const;
  protected readonly style = { color: '#1d6fa8', icon: '↑', label: 'Điểm đến' };

  private meshes = new Map<THREE.Mesh, NavigationMeshData>();

  override createObject(marker: NavigationMarkerData): THREE.Object3D {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext('2d')!;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    this.drawArrow(context, canvas, 0, false);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(62, 65),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        depthTest: false,
        side: THREE.DoubleSide,
        opacity: 0,
      }),
    );
    mesh.renderOrder = 999;
    mesh.userData = { marker, markerType: this };
    this.repositionObject(mesh, marker.yaw, marker.pitch);
    this.meshes.set(mesh, {
      canvas,
      context,
      texture,
      time: 0,
      baseQuaternion: mesh.quaternion.clone(),
    });
    return mesh;
  }

  override updateObject(
    object: THREE.Object3D,
    delta: number,
    hovered: boolean,
    _pulse: number,
    hoverScale: number,
    camera: THREE.Camera,
  ): void {
    if (!(object instanceof THREE.Mesh)) return;
    const data = this.meshes.get(object);
    if (!data) return;

    data.time += delta;
    this.drawArrow(data.context, data.canvas, data.time, hovered);
    data.texture.needsUpdate = true;
    const marker = object.userData.marker as NavigationMarkerData;
    this.applyHoverScale(object, new THREE.Vector3(1, 1, 1), marker, hovered, hoverScale);

    cameraForward.set(0, 0, -1).applyQuaternion(camera.quaternion);
    markerAxis.set(1, 0, 0).applyQuaternion(data.baseQuaternion);
    const projectionX = cameraForward.dot(markerAxis);
    markerAxis.set(0, 1, 0).applyQuaternion(data.baseQuaternion);
    const projectionY = cameraForward.dot(markerAxis);
    leanEuler.set(
      projectionY * PARALLAX_STRENGTH,
      -projectionX * PARALLAX_STRENGTH,
      0,
    );
    leanQuaternion.setFromEuler(leanEuler);
    object.quaternion.copy(data.baseQuaternion).multiply(leanQuaternion);
  }

  override repositionObject(object: THREE.Object3D, yaw: number, pitch: number): void {
    super.repositionObject(object, yaw, pitch);
    if (object instanceof THREE.Mesh) {
      this.meshes.get(object)?.baseQuaternion.copy(object.quaternion);
    }
  }

  protected override getRotation(marker: NavigationMarkerData): THREE.Euler {
    return new THREE.Euler(
      marker.rotX ?? 0,
      marker.rotY ?? 0,
      marker.rotZ ?? marker.rotation ?? 0,
      'ZXY',
    );
  }

  override disposeObject(object: THREE.Object3D): void {
    if (!(object instanceof THREE.Mesh)) return;
    const material = object.material as THREE.MeshBasicMaterial;
    material.map?.dispose();
    material.dispose();
    object.geometry.dispose();
    this.meshes.delete(object);
  }

  private drawArrow(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    time: number,
    hovered: boolean,
  ): void {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const phase = (time * 1.5) % 1;
    const bottomAlpha = 0.45 + 0.55 * Math.max(0, Math.sin(phase * Math.PI * 2));
    const topAlpha = 0.45 + 0.55 * Math.max(0, Math.sin((phase - 0.5) * Math.PI * 2));
    if (hovered) {
      context.save();
      context.shadowColor = 'rgba(200, 230, 255, 0.8)';
      context.shadowBlur = 18;
      this.drawChevron(context, 51, 1, true);
      this.drawChevron(context, 143, 1, true);
      context.restore();
    }
    this.drawChevron(context, 51, topAlpha, hovered);
    this.drawChevron(context, 143, bottomAlpha, hovered);
  }

  private drawChevron(
    context: CanvasRenderingContext2D,
    tipY: number,
    alpha: number,
    hovered: boolean,
  ): void {
    context.save();
    context.globalAlpha = alpha;
    context.lineWidth = 38;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = hovered ? 'rgba(220, 240, 255, 1)' : '#fff';
    context.beginPath();
    context.moveTo(37, tipY + 67);
    context.lineTo(128, tipY);
    context.lineTo(219, tipY + 67);
    context.stroke();
    context.restore();
  }
}
