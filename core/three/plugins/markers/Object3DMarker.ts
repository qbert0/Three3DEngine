import * as THREE from 'three';
import { MarkerBase } from './MarkerBase';
import type { TourMarker } from '~/types/tour';

export interface Object3DTransform {
  rotX?: number;
  rotY?: number;
  rotZ?: number;
  scaleX?: number;
  scaleY?: number;
  scaleZ?: number;
}

/**
 * Shared base for world-anchored 3D markers.
 *
 * Owns spherical placement, camera-facing base orientation, local XYZ
 * rotation, independent XYZ resizing and hover scaling.
 */
export abstract class Object3DMarker<
  TMarker extends TourMarker & Object3DTransform,
> extends MarkerBase<TMarker> {
  override repositionObject(object: THREE.Object3D, yaw: number, pitch: number): void {
    this.positionOnSphere(object, yaw, pitch);
    object.lookAt(0, 0, 0);

    const marker = object.userData.marker as TMarker | undefined;
    if (marker) this.applyRotation(object, marker);
  }

  protected applyRotation(object: THREE.Object3D, marker: TMarker): void {
    const rotation = this.getRotation(marker);
    if (rotation.z) object.rotateZ(rotation.z);
    if (rotation.x) object.rotateX(rotation.x);
    if (rotation.y) object.rotateY(rotation.y);
  }

  protected getRotation(marker: TMarker): THREE.Euler {
    return new THREE.Euler(marker.rotX ?? 0, marker.rotY ?? 0, marker.rotZ ?? 0, 'ZXY');
  }

  protected getScale(marker: TMarker): THREE.Vector3 {
    return new THREE.Vector3(
      this.normalizeScale(marker.scaleX),
      this.normalizeScale(marker.scaleY),
      this.normalizeScale(marker.scaleZ),
    );
  }

  protected normalizeScale(value: number | undefined): number {
    return THREE.MathUtils.clamp(Number.isFinite(value) ? value! : 1, 0.1, 10);
  }

  protected applyHoverScale(
    object: THREE.Object3D,
    baseScale: THREE.Vector3,
    marker: TMarker,
    hovered: boolean,
    hoverScale: number,
  ): void {
    object.scale.copy(baseScale).multiply(this.getScale(marker));
    if (hovered) object.scale.multiplyScalar(hoverScale);
  }
}
