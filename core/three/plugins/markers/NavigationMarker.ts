import * as THREE from 'three';
import { PlaneObject3DMarker } from './PlaneObject3DMarker';
import type { NavigationMarker as NavigationMarkerData } from '~/types/tour';

const PARALLAX_STRENGTH = 0.15;
const DEFAULT_PIN_SIZE = 65;
const CANVAS_SIZE = 256;

const cameraForward = new THREE.Vector3();
const markerAxis = new THREE.Vector3();
const markerNormal = new THREE.Vector3();
const leanEuler = new THREE.Euler();
const leanQuaternion = new THREE.Quaternion();

type MarkerMode = 'arrow' | 'location-1' | 'location-2';

interface NavigationMeshData {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  time: number;
  baseQuaternion: THREE.Quaternion;
  basePosition: THREE.Vector3;
  /** Arrow mặc định hoặc một trong hai dáng ghim vị trí. */
  mode: MarkerMode;
  /** Loaded inset image for pin / pin-top mode */
  pinImage?: HTMLImageElement;
  /** Label text cho pin-top */
  label: string;
}

export class NavigationMarker extends PlaneObject3DMarker<NavigationMarkerData> {
  readonly markerType = 'navigation' as const;
  protected readonly style = { color: '#1d6fa8', icon: '↑', label: 'Điểm đến' };

  private meshes = new Map<THREE.Mesh, NavigationMeshData>();
  /** Cache loaded images by URL to avoid re-downloading */
  private imageCache = new Map<string, HTMLImageElement>();

  // ═══════════════════════════════════════════════════════════════
  //  CREATE
  // ═══════════════════════════════════════════════════════════════

  override createObject(marker: NavigationMarkerData): THREE.Object3D {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    const context = canvas.getContext('2d')!;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    // ── Chọn mode ──
    // Ưu tiên marker.icon nếu có; nếu không thì auto dựa vào pitch.
    const mode = this.resolveMode(marker);

    const color = (marker as any).pinColor ?? '#171717';
    const label = (marker as any).label ?? (marker as any).name ?? '';

    // Kích thước mesh theo mode
    let size: number;
    let sizeY: number;
    if (mode === 'location-1') {
      size = (marker as any).iconSize ?? DEFAULT_PIN_SIZE;
      sizeY = size * 1.25;
    } else if (mode === 'location-2') {
      size = (marker as any).iconSize ?? DEFAULT_PIN_SIZE;
      sizeY = size * 1.35;
    } else {
      size = 62;
      sizeY = 65;
    }

    if (mode === 'arrow') {
      this.drawArrow(context, canvas, 0, false);
    } else if (mode === 'location-2') {
      this.drawLocation2(context, canvas, color, 0, false);
    } else {
      this.drawPin(context, canvas, color, 0, false);
    }

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(size, sizeY),
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

    const data: NavigationMeshData = {
      canvas,
      context,
      texture,
      time: 0,
      baseQuaternion: mesh.quaternion.clone(),
      basePosition: mesh.position.clone(),
      mode,
      label,
    };
    this.meshes.set(mesh, data);

    // Load ảnh inset bất đồng bộ
    if (mode !== 'arrow' && (marker as any).iconUrl) {
      this.loadIcon((marker as any).iconUrl).then((img) => {
        data.pinImage = img;
        if (mode === 'location-2') {
          this.drawLocation2(context, canvas, color, 0, false, img);
        } else {
          this.drawPin(context, canvas, color, 0, false, img);
        }
        texture.needsUpdate = true;
      });
    }

    return mesh;
  }

  // ═══════════════════════════════════════════════════════════════
  //  UPDATE
  // ═══════════════════════════════════════════════════════════════

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
    const marker = object.userData.marker as NavigationMarkerData;
    const color = (marker as any).pinColor ?? '#171717';
    const label = data.label;

    if (data.mode === 'location-1') {
      // ── Pin dưới đất: pulse + hover glow, KHÔNG parallax ──
      this.drawPin(data.context, data.canvas, color, data.time, hovered, data.pinImage);
      data.texture.needsUpdate = true;
      this.applyHoverScale(object, new THREE.Vector3(1, 1, 1), marker, hovered, hoverScale);
    } else if (data.mode === 'location-2') {
      this.drawLocation2(data.context, data.canvas, color, data.time, hovered, data.pinImage);
      data.texture.needsUpdate = true;
      this.applyHoverScale(object, new THREE.Vector3(1, 1, 1), marker, hovered, hoverScale);
    } else {
      // ── Arrow: giữ nguyên kích thước, chuyển động thật theo local Z ──
      this.drawArrow(data.context, data.canvas, data.time, hovered);
      data.texture.needsUpdate = true;
      this.applyHoverScale(object, new THREE.Vector3(1, 1, 1), marker, hovered, hoverScale);

      // Bắt đầu ở giữa hành trình với vận tốc lớn nhất. Dùng sin thay cho
      // 1-cos để marker mới tạo không có đoạn đứng yên ở đầu mỗi scene.
      const zProgress = (Math.sin(data.time * 2.4) + 1) * 0.5;
      markerNormal.set(0, 0, 1).applyQuaternion(data.baseQuaternion);
      object.position
        .copy(data.basePosition)
        .addScaledVector(markerNormal, zProgress * 12);

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
  }

  override repositionObject(object: THREE.Object3D, yaw: number, pitch: number): void {
    super.repositionObject(object, yaw, pitch);
    if (object instanceof THREE.Mesh) {
      const data = this.meshes.get(object);
      data?.baseQuaternion.copy(object.quaternion);
      data?.basePosition.copy(object.position);
    }
  }

  protected override getRotation(marker: NavigationMarkerData): THREE.Euler {
    const isArrow = this.resolveMode(marker) === 'arrow';
    return new THREE.Euler(
      marker.rotX ?? (isArrow ? Math.PI / 3 : 0),
      marker.rotY ?? 0,
      marker.rotZ ?? marker.rotation ?? 0,
      'ZXY',
    );
  }

  protected override getScale(marker: NavigationMarkerData): THREE.Vector3 {
    const isArrow = this.resolveMode(marker) === 'arrow';
    return new THREE.Vector3(
      this.normalizeScale(marker.scaleX ?? (isArrow ? 2 : 1)),
      this.normalizeScale(marker.scaleY ?? 1),
      1,
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

  // ═══════════════════════════════════════════════════════════════
  //  MODE RESOLUTION
  // ═══════════════════════════════════════════════════════════════

  private resolveMode(marker: NavigationMarkerData): MarkerMode {
    const icon = (marker as any).icon;
    if (icon === 'location-1' || icon === 'pin') return 'location-1';
    if (icon === 'location-2' || icon === 'pin-top' || icon === 'anchor') return 'location-2';
    // Giá trị arrow-1/arrow-2 từng được ghi bởi bản editor trước vẫn là mũi tên.
    return 'arrow';
  }

  // ═══════════════════════════════════════════════════════════════
  //  ARROW MODE — animated chevron
  // ═══════════════════════════════════════════════════════════════

  private drawArrow(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    _time: number,
    hovered: boolean,
  ): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Canvas chỉ vẽ một hình cố định; animation được thực hiện bằng vị trí
    // 3D của mesh, tuyệt đối không scale nét vẽ.
    this.drawChevron(ctx, 106, hovered ? 1 : 0.82, hovered);
  }

  private drawChevron(
    ctx: CanvasRenderingContext2D,
    tipY: number,
    pulse: number,
    hovered: boolean,
  ): void {
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.lineWidth = hovered ? 42 : 40;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#ffffff';
    ctx.shadowColor = `rgba(220, 240, 255, ${hovered ? 0.95 : 0.18 + pulse * 0.72})`;
    ctx.shadowBlur = hovered ? 22 : 3 + pulse * 18;
    ctx.beginPath();
    ctx.moveTo(37, tipY + 67);
    ctx.lineTo(128, tipY);
    ctx.lineTo(219, tipY + 67);
    ctx.stroke();
    ctx.restore();
  }

  // ═══════════════════════════════════════════════════════════════
  //  PIN MODE (dưới đất) — hình 1
  //  Ghim tròn + đuôi nhọn dài, ảnh inset lấp đầy, viền trắng dày
  // ═══════════════════════════════════════════════════════════════

  private drawPin(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    color: string,
    time: number,
    hovered: boolean,
    insetImage?: HTMLImageElement,
  ): void {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const pinRadius = 68;
    const pinCenterY = 82;
    const pinTipY = 228;
    const pulse = 1 + Math.sin(time * 3) * 0.02;

    ctx.save();
    ctx.translate(cx, h / 2);
    ctx.scale(pulse, pulse);
    ctx.translate(-cx, -h / 2);

    // ── Drop shadow ──
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 6;
    this.drawPinPath(ctx, cx, pinCenterY, pinRadius, pinTipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();

    // ── Hover glow ──
    if (hovered) {
      ctx.save();
      ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
      ctx.shadowBlur = 26;
      this.drawPinPath(ctx, cx, pinCenterY, pinRadius, pinTipY);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.restore();
    }

    // ── Pin body ──
    this.drawPinPath(ctx, cx, pinCenterY, pinRadius, pinTipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Viền trắng mảnh; thumbnail gần sát mép như icon tham chiếu.
    this.drawPinPath(ctx, cx, pinCenterY, pinRadius, pinTipY);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = hovered ? 4 : 2;
    ctx.stroke();

    // ── Ảnh inset lấp đầy phần tròn ──
    const innerRadius = pinRadius - 8;

    if (insetImage && insetImage.complete && insetImage.naturalWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, pinCenterY, innerRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      this.drawCoverImage(ctx, insetImage, cx, pinCenterY, innerRadius * 2, innerRadius * 2);
      ctx.restore();

      // Vòng trắng nhỏ ngăn thumbnail với thân pin.
      ctx.beginPath();
      ctx.arc(cx, pinCenterY, innerRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      // Fallback trung tính để vòng trắng vẫn đọc được khi chưa chọn ảnh.
      ctx.beginPath();
      ctx.arc(cx, pinCenterY, innerRadius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    ctx.restore();
  }

  /** Path pin dưới đất: hình tròn + đuôi nhọn dài. */
  private drawPinPath(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    r: number,
    tipY: number,
  ): void {
    const tangentAngle = Math.asin(Math.min(24 / r, 1));
    ctx.beginPath();
    ctx.arc(
      cx, cy, r,
      Math.PI / 2 + tangentAngle,
      Math.PI / 2 - tangentAngle,
      false,
    );
    ctx.lineTo(cx, tipY);
    ctx.closePath();
  }

  // ═══════════════════════════════════════════════════════════════
  //  LOCATION 2 — đầu nhỏ, vai mềm và đuôi dài như icon tham chiếu
  // ═══════════════════════════════════════════════════════════════

  private drawLocation2(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    color: string,
    time: number,
    hovered: boolean,
    insetImage?: HTMLImageElement,
  ): void {
    const cx = canvas.width / 2;
    const cy = 78;
    const radius = 56;
    const tipY = 236;
    const innerRadius = radius - 8;
    const pulse = 1 + Math.sin(time * 3) * 0.018;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(cx, 128);
    ctx.scale(pulse, pulse);
    ctx.translate(-cx, -128);

    ctx.save();
    ctx.shadowColor = hovered ? 'rgba(255,255,255,.75)' : 'rgba(0,0,0,.38)';
    ctx.shadowBlur = hovered ? 25 : 15;
    ctx.shadowOffsetY = hovered ? 0 : 6;
    this.drawLocation2Path(ctx, cx, cy, radius, tipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();

    this.drawLocation2Path(ctx, cx, cy, radius, tipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = hovered ? 4 : 2;
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.clip();
    if (insetImage?.complete && insetImage.naturalWidth > 0) {
      this.drawCoverImage(ctx, insetImage, cx, cy, innerRadius * 2, innerRadius * 2);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(cx - innerRadius, cy - innerRadius, innerRadius * 2, innerRadius * 2);
    }
    ctx.restore();
    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }

  private drawLocation2Path(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    radius: number,
    tipY: number,
  ): void {
    ctx.beginPath();
    ctx.moveTo(cx, cy - radius);
    ctx.bezierCurveTo(cx + radius * 0.9, cy - radius, cx + radius, cy - 4, cx + radius * 0.72, cy + 30);
    ctx.bezierCurveTo(cx + radius * 0.38, cy + 67, cx + 13, cy + 75, cx, tipY);
    ctx.bezierCurveTo(cx - 13, cy + 75, cx - radius * 0.38, cy + 67, cx - radius * 0.72, cy + 30);
    ctx.bezierCurveTo(cx - radius, cy - 4, cx - radius * 0.9, cy - radius, cx, cy - radius);
    ctx.closePath();
  }

  // ═══════════════════════════════════════════════════════════════
  //  PIN-TOP MODE (trên cao) — hình 2
  //  Label nền xám bo góc + oval pin + đuôi nhọn ngắn, viền trắng
  // ═══════════════════════════════════════════════════════════════

  private drawPinTop(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    color: string,
    label: string,
    time: number,
    hovered: boolean,
    insetImage?: HTMLImageElement,
  ): void {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;

    // ── Bố cục ──
    const labelH = 36;
    const labelY = 4;
    const labelGap = 8;

    const pinW = 130;
    const pinH = 150;
    const pinX = cx - pinW / 2;
    const pinY = labelY + labelH + labelGap;
    const tipY = pinY + pinH + 30;

    // ── 1. LABEL ──
    if (label) {
      ctx.save();
      const fontSize = 22;
      ctx.font = `bold ${fontSize}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const metrics = ctx.measureText(label);
      const padX = 18;
      const maxW = w - 12;
      const boxW = Math.min(metrics.width + padX * 2, maxW);
      const boxX = cx - boxW / 2;
      const boxY = labelY;

      // nền xám bo góc
      this.roundRect(ctx, boxX, boxY, boxW, labelH, 9);
      ctx.fillStyle = hovered
        ? 'rgba(70, 90, 110, 0.98)'
        : 'rgba(90, 110, 130, 0.88)';
      ctx.fill();

      // chữ trắng
      ctx.fillStyle = '#ffffff';
      ctx.fillText(label, cx, boxY + labelH / 2 + 1, boxW - padX * 2);
      ctx.restore();
    }

    // ── 2. PIN (oval + đuôi nhọn ngắn) ──
    const pulse = 1 + Math.sin(time * 3) * 0.015;
    const pinCx = cx;
    const pinCy = pinY + pinH / 2;

    ctx.save();
    ctx.translate(pinCx, pinCy);
    ctx.scale(pulse, pulse);
    ctx.translate(-pinCx, -pinCy);

    // shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.35)';
    ctx.shadowBlur = 14;
    ctx.shadowOffsetY = 5;
    this.drawOvalPinPath(ctx, pinX, pinY, pinW, pinH, tipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();

    // hover glow
    if (hovered) {
      ctx.save();
      ctx.shadowColor = 'rgba(255,255,255,0.7)';
      ctx.shadowBlur = 22;
      this.drawOvalPinPath(ctx, pinX, pinY, pinW, pinH, tipY);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.restore();
    }

    // thân trắng
    this.drawOvalPinPath(ctx, pinX, pinY, pinW, pinH, tipY);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // viền nhẹ
    this.drawOvalPinPath(ctx, pinX, pinY, pinW, pinH, tipY);
    ctx.strokeStyle = hovered
      ? 'rgba(170, 195, 220, 1)'
      : 'rgba(200, 210, 220, 0.9)';
    ctx.lineWidth = hovered ? 3 : 2;
    ctx.stroke();

    // ── 3. ẢNH INSET oval (chừa viền trắng đều) ──
    const pad = 8;
    const innerX = pinX + pad;
    const innerY = pinY + pad;
    const innerW = pinW - pad * 2;
    const innerH = pinH - pad * 2;

    ctx.save();
    this.ovalPath(ctx, innerX, innerY, innerW, innerH);
    ctx.clip();

    if (insetImage && insetImage.complete && insetImage.naturalWidth > 0) {
      this.drawCoverImage(ctx, insetImage, innerX + innerW / 2, innerY + innerH / 2, innerW, innerH);
    } else {
      // fallback: gradient xanh trời
      const g = ctx.createLinearGradient(innerX, innerY, innerX, innerY + innerH);
      g.addColorStop(0, '#4a90c4');
      g.addColorStop(0.55, '#7fb8dd');
      g.addColorStop(1, '#2a5a7a');
      ctx.fillStyle = g;
      ctx.fillRect(innerX, innerY, innerW, innerH);
    }
    ctx.restore();

    ctx.restore(); // pulse
  }

  /** Path oval + đuôi nhọn ngắn (hình 2). */
  private drawOvalPinPath(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    tipY: number,
  ): void {
    const cx = x + w / 2;
    const cy = y + h / 2;
    const rx = w / 2;
    const ry = h / 2;

    // Đuôi nhọn hẹp
    const tailHalf = 16;
    const tailBaseY = y + h - 6;

    ctx.beginPath();
    // Vẽ ellipse từ điểm dưới-phải, vòng qua trên, xuống dưới-trái
    // rồi tới tip và quay lại điểm bắt đầu.
    const startAngle = Math.PI / 2 - Math.asin(Math.min(tailHalf / rx, 1));
    const endAngle = Math.PI / 2 + Math.asin(Math.min(tailHalf / rx, 1));

    ctx.ellipse(cx, cy, rx, ry, 0, startAngle, endAngle, false);
    ctx.lineTo(cx, tipY);
    ctx.lineTo(cx + rx * Math.sin(Math.asin(Math.min(tailHalf / rx, 1))), tailBaseY);
    ctx.closePath();
  }

  /** Path oval thuần (dùng để clip ảnh inset). */
  private ovalPath(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
  ): void {
    ctx.beginPath();
    ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    ctx.closePath();
  }

  /** Bo góc chữ nhật. */
  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
  ): void {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  /** Vẽ ảnh theo kiểu "cover" vào 1 khung (đã clip trước đó). */
  private drawCoverImage(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    centerX: number,
    centerY: number,
    boxW: number,
    boxH: number,
  ): void {
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const boxAspect = boxW / boxH;
    let dw: number;
    let dh: number;
    if (imgAspect > boxAspect) {
      dh = boxH;
      dw = dh * imgAspect;
    } else {
      dw = boxW;
      dh = dw / imgAspect;
    }
    ctx.drawImage(img, centerX - dw / 2, centerY - dh / 2, dw, dh);
  }

  // ═══════════════════════════════════════════════════════════════
  //  IMAGE LOADING
  // ═══════════════════════════════════════════════════════════════

  private async loadIcon(url: string): Promise<HTMLImageElement> {
    const cached = this.imageCache.get(url);
    if (cached) return cached;

    return new Promise<HTMLImageElement>((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        this.imageCache.set(url, img);
        resolve(img);
      };
      img.onerror = () => {
        const fallback = new Image();
        fallback.src =
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        fallback.onload = () => resolve(fallback);
      };
      img.src = url;
    });
  }
}
