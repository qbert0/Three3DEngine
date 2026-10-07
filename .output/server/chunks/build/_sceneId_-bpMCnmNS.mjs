globalThis.__timing__.logStart('Load chunks/build/_sceneId_-bpMCnmNS');import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { _ as _sfc_main$1, a as _sfc_main$3 } from './Switch-CNCj6PJD.mjs';
import { _ as _sfc_main$2 } from './Spinner-mjqtnuYo.mjs';
import { _ as _export_sfc, u as useRoute, b as useRouter, a as useToast, c as __nuxt_component_4 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, computed, watch, nextTick, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref, shallowRef, readonly, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { V as View360Engine, M as MarkerPlugin } from './MarkerPlugin-sWHzGcyn.mjs';
import { u as useFetch } from './fetch-BTut8LNP.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@vue/shared';
import 'perfect-debounce';

const _imports_0 = publicAssetsURL("/icons/navigation/location-1.svg");
const _imports_1 = publicAssetsURL("/icons/navigation/location-2.svg");
function useDesignerEngine() {
  const isLoading = ref(true);
  const errorMessage = ref("");
  const currentScene = ref(null);
  const cameraYaw = ref(0);
  const cameraPitch = ref(0);
  const cameraFov = ref(75);
  const interactionMode = ref("camera");
  const lastPanoramaRotation = ref(null);
  const placementMode = ref("none");
  const isPlacing = computed(() => placementMode.value !== "none");
  const lastMarkerMoved = ref(null);
  const lastMarkerClicked = ref(null);
  const lastPlacement = ref(null);
  const engine = shallowRef(null);
  const unsubs = [];
  function forDesigner(scene) {
    var _a;
    const editorSource = (_a = scene.editorPanorama) != null ? _a : scene.panorama.startsWith("/") ? `/api/admin/media/preview?path=${encodeURIComponent(scene.panorama)}` : scene.panorama;
    return { ...scene, panorama: editorSource };
  }
  async function initEngine(container, initialScene) {
    isLoading.value = true;
    errorMessage.value = "";
    try {
      const e = new View360Engine({
        container,
        // The designer only needs the active scene. A 5760×2880 decoded image
        // is roughly 63 MB before its GPU copy, so retaining viewer-style
        // neighbour caches here quickly exhausts memory.
        pixelRatio: 1,
        antialias: false,
        // No autorotate in designer — camera must stay where user puts it
        camera: {
          dampingFactor: 0.1
        },
        pano: {
          defaultTransition: "crossfade",
          transitionDuration: 500,
          // Admin never preloads neighbouring scenes. Only the active WebGL
          // texture exists; switching scenes destroys the previous one.
          maxCachedTextures: 0
        }
      });
      e.use(new MarkerPlugin({ pulseSpeed: 0, pulseAmplitude: 0, draggable: true }));
      const unsub1 = e.bus.on("camera:move", ({ yaw, pitch }) => {
        cameraYaw.value = yaw;
        cameraPitch.value = pitch;
      });
      const unsub2 = e.bus.on("camera:fov", ({ fov }) => {
        cameraFov.value = fov;
      });
      const unsub3 = e.bus.on("scene:loaded", ({ scene }) => {
        currentScene.value = scene;
        isLoading.value = false;
      });
      unsubs.push(unsub1, unsub2, unsub3);
      const unsub4 = e.bus.on("marker:moved", ({ markerId, yaw, pitch }) => {
        lastMarkerMoved.value = { markerId, yaw, pitch };
      });
      const unsub5 = e.bus.on("marker:click", ({ marker }) => {
        if (placementMode.value === "none") lastMarkerClicked.value = marker;
      });
      unsubs.push(unsub4, unsub5);
      const canvas = e["renderer"].domElement;
      const onClick = (ev) => {
        if (placementMode.value === "none") return;
        handlePlacementClick(ev, canvas, e);
      };
      canvas.addEventListener("click", onClick);
      unsubs.push(() => canvas.removeEventListener("click", onClick));
      let rotatingPanorama = false;
      let rotationStartX = 0;
      let rotationStart = 0;
      const onRotationDown = (ev) => {
        var _a, _b;
        if (interactionMode.value !== "panorama" || ev.button !== 0) return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        rotatingPanorama = true;
        rotationStartX = ev.clientX;
        rotationStart = (_b = (_a = currentScene.value) == null ? void 0 : _a.panoramaRotation) != null ? _b : 0;
        canvas.setPointerCapture(ev.pointerId);
        canvas.style.cursor = "ew-resize";
      };
      const onRotationMove = (ev) => {
        if (!rotatingPanorama || interactionMode.value !== "panorama") return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        const twoPi = Math.PI * 2;
        const raw = rotationStart + (ev.clientX - rotationStartX) * 3e-3;
        const rotation = ((raw + Math.PI) % twoPi + twoPi) % twoPi - Math.PI;
        if (currentScene.value) currentScene.value.panoramaRotation = rotation;
        e.setSceneRotation(rotation);
      };
      const onRotationUp = (ev) => {
        var _a, _b;
        if (!rotatingPanorama) return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        rotatingPanorama = false;
        canvas.style.cursor = interactionMode.value === "panorama" ? "ew-resize" : "grab";
        lastPanoramaRotation.value = (_b = (_a = currentScene.value) == null ? void 0 : _a.panoramaRotation) != null ? _b : 0;
      };
      canvas.addEventListener("pointerdown", onRotationDown, true);
      canvas.addEventListener("pointermove", onRotationMove, true);
      canvas.addEventListener("pointerup", onRotationUp, true);
      canvas.addEventListener("pointercancel", onRotationUp, true);
      unsubs.push(
        () => canvas.removeEventListener("pointerdown", onRotationDown, true),
        () => canvas.removeEventListener("pointermove", onRotationMove, true),
        () => canvas.removeEventListener("pointerup", onRotationUp, true),
        () => canvas.removeEventListener("pointercancel", onRotationUp, true)
      );
      engine.value = e;
      await e.loadScene(forDesigner(initialScene), false);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Kh\xF4ng th\u1EC3 kh\u1EDFi \u0111\u1ED9ng designer.";
      isLoading.value = false;
    }
  }
  async function loadScene(scene) {
    if (!engine.value) return;
    isLoading.value = true;
    try {
      await engine.value.loadScene(forDesigner(scene), false);
    } finally {
      isLoading.value = false;
    }
  }
  function startPlacement(type) {
    placementMode.value = type;
  }
  function cancelPlacement() {
    placementMode.value = "none";
  }
  function handlePlacementClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import('./MarkerPlugin-sWHzGcyn.mjs').then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
      var _a, _b;
      const raycaster = new Raycaster();
      const mouse = new Vector2(ndcX, ndcY);
      raycaster.setFromCamera(mouse, e.camera.camera);
      const dir = raycaster.ray.direction.clone().normalize();
      dir.applyAxisAngle(new Vector3(0, 1, 0), -((_b = (_a = currentScene.value) == null ? void 0 : _a.panoramaRotation) != null ? _b : 0));
      const yaw = Math.atan2(-dir.x, -dir.z);
      const pitch = Math.asin(dir.y);
      const type = placementMode.value;
      if (type === "none") return;
      lastPlacement.value = { type, yaw, pitch };
      placementMode.value = "none";
    });
  }
  function getCameraAim() {
    return { yaw: cameraYaw.value, pitch: cameraPitch.value };
  }
  function refreshMarkers(scene) {
    var _a, _b;
    const markerPlugin = (_a = engine.value) == null ? void 0 : _a.getPlugin("marker");
    if (!markerPlugin) return;
    (_b = markerPlugin.onSceneReady) == null ? void 0 : _b.call(markerPlugin, scene);
  }
  function setFov(fov) {
    if (!engine.value) return;
    engine.value.camera.setTarget(
      engine.value.camera.getTargetYaw(),
      engine.value.camera.getTargetPitch(),
      Math.max(30, Math.min(120, fov))
    );
  }
  function setBrightness(value) {
    var _a;
    (_a = engine.value) == null ? void 0 : _a.pano.setBrightness(value);
  }
  function setHighlightCompression(value) {
    var _a;
    (_a = engine.value) == null ? void 0 : _a.pano.setHighlightCompression(value);
  }
  function setPanoramaRotation(value) {
    if (!engine.value) return;
    engine.value.setSceneRotation(value);
  }
  function setInteractionMode(mode) {
    var _a;
    interactionMode.value = mode;
    const canvas = (_a = engine.value) == null ? void 0 : _a["renderer"].domElement;
    if (canvas) canvas.style.cursor = mode === "panorama" ? "ew-resize" : "grab";
  }
  function captureSnapshot() {
    if (!engine.value) return null;
    try {
      const canvas = engine.value["renderer"].domElement;
      return canvas.toDataURL("image/jpeg", 0.85);
    } catch {
      return null;
    }
  }
  function destroyEngine() {
    var _a;
    unsubs.forEach((fn) => fn());
    (_a = engine.value) == null ? void 0 : _a.destroy();
    engine.value = null;
    currentScene.value = null;
  }
  return {
    // State
    isLoading: readonly(isLoading),
    errorMessage: readonly(errorMessage),
    currentScene: readonly(currentScene),
    cameraYaw: readonly(cameraYaw),
    cameraPitch: readonly(cameraPitch),
    cameraFov: readonly(cameraFov),
    interactionMode: readonly(interactionMode),
    lastPanoramaRotation: readonly(lastPanoramaRotation),
    placementMode: readonly(placementMode),
    isPlacing,
    lastMarkerMoved: readonly(lastMarkerMoved),
    lastMarkerClicked: readonly(lastMarkerClicked),
    lastPlacement: readonly(lastPlacement),
    // Actions
    initEngine,
    loadScene,
    startPlacement,
    cancelPlacement,
    getCameraAim,
    captureSnapshot,
    refreshMarkers,
    setFov,
    setBrightness,
    setHighlightCompression,
    setPanoramaRotation,
    setInteractionMode,
    destroyEngine
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[sceneId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const slug = route.params.slug;
    const initialSceneIdParam = route.params.sceneId;
    const { show: showToast } = useToast();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/tours/${slug}`,
      "$YBMUQN6emw"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = ref(null);
    const historyStack = ref([]);
    const historyIndex = ref(-1);
    let isHistoryAction = false;
    function pushHistorySnapshot() {
      if (isHistoryAction || !tour.value) return;
      const currentSnap = JSON.stringify(tour.value);
      const lastSnap = historyIndex.value >= 0 ? JSON.stringify(historyStack.value[historyIndex.value]) : "";
      if (currentSnap === lastSnap) return;
      historyStack.value = historyStack.value.slice(0, historyIndex.value + 1);
      historyStack.value.push(JSON.parse(currentSnap));
      historyIndex.value = historyStack.value.length - 1;
    }
    function initTourState() {
      var _a;
      if ((_a = data.value) == null ? void 0 : _a.item) {
        const editableTour = JSON.parse(JSON.stringify(data.value.item));
        editableTour.scenes.forEach((scene) => {
          scene.markers = scene.markers.map((marker) => {
            if (marker.plugin === "panel") {
              const legacySpeechBlocks = marker.contents;
              marker.contents = legacySpeechBlocks.reduce((blocks, block) => {
                if (block.type !== "text-to-speech") {
                  blocks.push(block);
                  return blocks;
                }
                const previousText = [...blocks].reverse().find((item) => item.type === "text" && item.content === block.content);
                if ((previousText == null ? void 0 : previousText.type) === "text") {
                  previousText.presentation = "text-and-audio";
                  previousText.speech = { lang: block.lang, rate: block.rate, pitch: block.pitch };
                } else {
                  blocks.push({ id: block.id, type: "text", content: block.content, presentation: "audio-only", speech: { lang: block.lang, rate: block.rate, pitch: block.pitch } });
                }
                return blocks;
              }, []);
              return marker;
            }
            if (marker.plugin === "info") {
              return { id: marker.id, plugin: "panel", label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-text`, type: "text", content: marker.content }] };
            }
            if (marker.plugin === "audio") {
              return { id: marker.id, plugin: "panel", label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-audio`, type: "audio", src: marker.src }] };
            }
            if (marker.plugin === "model3d") {
              const contents = [{ id: `${marker.id}-image`, type: "image3d", image: marker.image, caption: "" }];
              if (marker.content) contents.push({ id: `${marker.id}-text`, type: "text", content: marker.content });
              return { id: marker.id, plugin: "panel", label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents };
            }
            if (marker.plugin === "ai-chat") {
              return { id: marker.id, plugin: "panel", label: marker.label, yaw: marker.yaw, pitch: marker.pitch, contents: [{ id: `${marker.id}-ai`, type: "ai-chat", context: marker.context }] };
            }
            return marker;
          });
        });
        tour.value = editableTour;
        historyStack.value = [JSON.parse(JSON.stringify(editableTour))];
        historyIndex.value = 0;
      }
    }
    initTourState();
    function undo() {
      var _a, _b;
      if (historyIndex.value > 0) {
        isHistoryAction = true;
        historyIndex.value--;
        tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
        isDirty.value = true;
        goToScene(Math.min(currentSceneIdx.value, ((_b = (_a = tour.value) == null ? void 0 : _a.scenes.length) != null ? _b : 1) - 1));
        isHistoryAction = false;
        showToast({ message: "\u0110\xE3 ho\xE0n t\xE1c (Undo)", variant: "default" });
      }
    }
    function redo() {
      var _a, _b;
      if (historyIndex.value < historyStack.value.length - 1) {
        isHistoryAction = true;
        historyIndex.value++;
        tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
        isDirty.value = true;
        goToScene(Math.min(currentSceneIdx.value, ((_b = (_a = tour.value) == null ? void 0 : _a.scenes.length) != null ? _b : 1) - 1));
        isHistoryAction = false;
        showToast({ message: "\u0110\xE3 l\xE0m l\u1EA1i (Redo)", variant: "default" });
      }
    }
    const canUndo = computed(() => historyIndex.value > 0);
    const canRedo = computed(() => historyIndex.value < historyStack.value.length - 1);
    const currentSceneIdx = ref(0);
    watch(
      () => tour.value,
      (t) => {
        var _a;
        if (!t || !((_a = t.scenes) == null ? void 0 : _a.length)) return;
        const foundIdx = t.scenes.findIndex((s) => s.id === initialSceneIdParam);
        if (foundIdx !== -1) {
          currentSceneIdx.value = foundIdx;
        } else if (t.initialSceneId) {
          const startIdx = t.scenes.findIndex((s) => s.id === t.initialSceneId);
          if (startIdx !== -1) currentSceneIdx.value = startIdx;
        }
      },
      { immediate: true }
    );
    const currentScene = computed(() => {
      var _a;
      if (!tour.value || !tour.value.scenes.length) return null;
      return (_a = tour.value.scenes[currentSceneIdx.value]) != null ? _a : tour.value.scenes[0];
    });
    const currentTab = ref("scene");
    const editorMode = ref("panorama");
    const mapEditorCanvas = ref(null);
    const mapDragNodeId = ref(null);
    ref(false);
    const mapEditorImages = /* @__PURE__ */ new Map();
    function mapEditorContentRect(floor, w, h) {
      const padding = 12;
      const image = mapEditorImages.get(floor.id);
      const sourceW = (image == null ? void 0 : image.naturalWidth) || floor.imageWidth || 1;
      const sourceH = (image == null ? void 0 : image.naturalHeight) || floor.imageHeight || 1;
      const scale = Math.min((w - padding * 2) / sourceW, (h - padding * 2) / sourceH);
      const width = sourceW * scale;
      const height = sourceH * scale;
      return { x: (w - width) / 2, y: (h - height) / 2, width, height };
    }
    function ensureMapEditorImage(floor) {
      if (!floor.imageUrl) return void 0;
      const cached = mapEditorImages.get(floor.id);
      if ((cached == null ? void 0 : cached.dataset.src) === floor.imageUrl) return cached;
      const image = new Image();
      image.dataset.src = floor.imageUrl;
      image.onload = () => {
        floor.imageWidth = image.naturalWidth;
        floor.imageHeight = image.naturalHeight;
        drawMapEditor();
      };
      image.src = floor.imageUrl;
      mapEditorImages.set(floor.id, image);
      return image;
    }
    function ensureMapConfig() {
      if (!tour.value) return;
      if (!tour.value.map) {
        tour.value.map = {
          floors: [{
            id: "main",
            name: "T\u1EA5t c\u1EA3",
            imageUrl: "",
            imageWidth: 800,
            imageHeight: 600,
            nodes: tour.value.scenes.map((s, i) => ({
              id: s.id,
              name: s.title,
              x: 100 + i % 5 * 140,
              y: 100 + Math.floor(i / 5) * 120,
              neighbors: []
            }))
          }],
          position: "bottom-right",
          width: 280,
          height: 200,
          showConnections: true,
          clickToNavigate: true,
          showFloorTabs: true,
          autoSwitchFloor: true
        };
        markDirty();
      }
    }
    const mapActiveFloorId = ref("");
    const mapActiveFloor = computed(() => {
      var _a, _b, _c, _d;
      const floors = (_c = (_b = (_a = tour.value) == null ? void 0 : _a.map) == null ? void 0 : _b.floors) != null ? _c : [];
      return (_d = floors.find((f) => f.id === mapActiveFloorId.value)) != null ? _d : floors[0];
    });
    function drawMapEditor() {
      var _a, _b, _c;
      const canvas = mapEditorCanvas.value;
      if (!canvas || !((_a = tour.value) == null ? void 0 : _a.map)) return;
      const floor = mapActiveFloor.value;
      if (!floor) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const w = rect.width;
      const h = 340;
      const dpr = Math.min((void 0).devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#14151f";
      ctx.fillRect(0, 0, w, h);
      const mapImage = ensureMapEditorImage(floor);
      if ((mapImage == null ? void 0 : mapImage.complete) && mapImage.naturalWidth > 0) {
        const imageRect = mapEditorContentRect(floor, w, h);
        ctx.globalAlpha = 0.86;
        ctx.drawImage(mapImage, imageRect.x, imageRect.y, imageRect.width, imageRect.height);
        ctx.globalAlpha = 1;
      }
      const spacing = 20;
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 0.5;
      for (let x = spacing; x < w; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = spacing; y < h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      for (let x = spacing; x < w; x += spacing) {
        for (let y = spacing; y < h; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      const mapRect = mapEditorContentRect(floor, w, h);
      const padX = mapRect.x, padY = mapRect.y;
      const aW = mapRect.width, aH = mapRect.height;
      ctx.strokeStyle = "rgba(255,255,255,0.2)";
      ctx.lineWidth = 1.5;
      for (const node of floor.nodes) {
        const sx = padX + node.x / floor.imageWidth * aW;
        const sy = padY + node.y / floor.imageHeight * aH;
        for (const nbrId of (_b = node.neighbors) != null ? _b : []) {
          const nbr = floor.nodes.find((n) => n.id === nbrId);
          if (!nbr) continue;
          const nx = padX + nbr.x / floor.imageWidth * aW;
          const ny = padY + nbr.y / floor.imageHeight * aH;
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(nx, ny);
          ctx.stroke();
        }
      }
      for (const node of floor.nodes) {
        const sx = padX + node.x / floor.imageWidth * aW;
        const sy = padY + node.y / floor.imageHeight * aH;
        const isCurrent = node.id === ((_c = currentScene.value) == null ? void 0 : _c.id);
        const isDragging = node.id === mapDragNodeId.value;
        const r = isCurrent ? 8 : 6;
        if (isCurrent) {
          ctx.save();
          ctx.shadowColor = "#f59e0b";
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fillStyle = "#f59e0b";
          ctx.fill();
          ctx.restore();
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 2;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fillStyle = isDragging ? "#93c5fd" : "rgba(255,255,255,0.7)";
          ctx.fill();
        }
        ctx.font = '500 10px "Be Vietnam Pro", sans-serif';
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const label = node.name || node.id;
        ctx.fillText(label.length > 14 ? label.slice(0, 13) + "\u2026" : label, sx, sy + r + 4);
      }
    }
    watch(editorMode, (mode) => {
      var _a, _b, _c;
      if (mode === "map") {
        ensureMapConfig();
        if ((_c = (_b = (_a = tour.value) == null ? void 0 : _a.map) == null ? void 0 : _b.floors) == null ? void 0 : _c[0]) {
          mapActiveFloorId.value = tour.value.map.floors[0].id;
        }
        nextTick(() => drawMapEditor());
      }
    });
    function selectSceneFromGeoMap(sceneId) {
      var _a, _b;
      const index = (_b = (_a = tour.value) == null ? void 0 : _a.scenes.findIndex((scene) => scene.id === sceneId)) != null ? _b : -1;
      if (index >= 0) goToScene(index);
    }
    function setSceneGeoCoordinates(payload) {
      var _a;
      const scene = (_a = tour.value) == null ? void 0 : _a.scenes.find((item) => item.id === payload.sceneId);
      if (!scene) return;
      scene.coordinates = payload.coordinates;
      markDirty();
    }
    const RAD_TO_DEG = 180 / Math.PI;
    watch(mapActiveFloorId, () => nextTick(() => drawMapEditor()));
    const selectedHotspotId = ref(null);
    const selectedHotspot = computed(() => {
      var _a;
      if (!currentScene.value) return null;
      return (_a = currentScene.value.markers.find((m) => m.id === selectedHotspotId.value)) != null ? _a : null;
    });
    ref(null);
    const newSceneInput = ref(null);
    ref(null);
    ref(null);
    const narrationTargetBlockId = ref(null);
    const uploadingImage = ref(false);
    const addingScene = ref(false);
    const uploadingNarration = ref(false);
    const panoramaPreviewFailed = ref(false);
    const isPlacingHotspot = ref(false);
    const showHotspotModal = ref(false);
    const pendingHotspotCoords = ref(null);
    const previewMode = ref(false);
    const zoom = ref(100);
    ref("edit");
    const leftSidebarWidth = ref(320);
    const rightSidebarWidth = ref(360);
    const isDirty = ref(false);
    const saving = ref(false);
    function markDirty() {
      isDirty.value = true;
      pushHistorySnapshot();
    }
    ref(null);
    const {
      cameraYaw,
      interactionMode,
      lastPanoramaRotation,
      lastMarkerMoved,
      lastMarkerClicked,
      lastPlacement,
      loadScene: engineLoadScene,
      refreshMarkers
    } = useDesignerEngine();
    watch(lastPanoramaRotation, (rotation) => {
      if (rotation === null || !currentScene.value) return;
      currentScene.value.panoramaRotation = rotation;
      markDirty();
    });
    const lockVideoAspectRatio = ref(true);
    function navigationIsArrow(marker) {
      var _a;
      return !["location-1", "location-2", "pin", "pin-top", "anchor"].includes((_a = marker.icon) != null ? _a : "arrow");
    }
    function navigationRotationDegrees(marker, axis) {
      var _a, _b, _c, _d;
      if (axis === "rotX") return Math.round(((_a = marker.rotX) != null ? _a : navigationIsArrow(marker) ? Math.PI / 3 : 0) * 180 / Math.PI);
      if (axis === "rotY") return Math.round(((_b = marker.rotY) != null ? _b : 0) * 180 / Math.PI);
      return Math.round(((_d = (_c = marker.rotZ) != null ? _c : marker.rotation) != null ? _d : 0) * 180 / Math.PI);
    }
    function planeMarkerScale(marker, axis) {
      const explicit = marker[axis];
      if (explicit !== void 0) return explicit;
      return marker.plugin === "navigation" && axis === "scaleX" && navigationIsArrow(marker) ? 2 : 1;
    }
    watch(lastMarkerMoved, (moved) => {
      if (!moved || !currentScene.value) return;
      const idx = currentScene.value.markers.findIndex((m) => m.id === moved.markerId);
      if (idx === -1) return;
      currentScene.value.markers[idx].yaw = moved.yaw;
      currentScene.value.markers[idx].pitch = moved.pitch;
      markDirty();
    });
    ref(null);
    const dragOverSceneIdx = ref(null);
    function syncMarkersToViewer() {
      if (!currentScene.value) return;
      refreshMarkers == null ? void 0 : refreshMarkers(currentScene.value);
    }
    watch(
      () => {
        var _a;
        return (_a = currentScene.value) == null ? void 0 : _a.markers;
      },
      () => {
        syncMarkersToViewer();
      },
      { deep: true }
    );
    watch(selectedHotspotId, () => {
      syncMarkersToViewer();
    });
    watch(lastPlacement, (placement) => {
      if (placement && isPlacingHotspot.value) {
        pendingHotspotCoords.value = { yaw: placement.yaw, pitch: placement.pitch };
        isPlacingHotspot.value = false;
        showHotspotModal.value = true;
      }
    });
    watch(lastMarkerClicked, (marker) => {
      if (!marker) return;
      selectedHotspotId.value = marker.id;
      if (!previewMode.value) currentTab.value = "hotspots";
    });
    async function goToScene(idx) {
      if (!tour.value || idx < 0 || idx >= tour.value.scenes.length) return;
      currentSceneIdx.value = idx;
      selectedHotspotId.value = null;
      panoramaPreviewFailed.value = false;
      const targetScene = tour.value.scenes[idx];
      if (targetScene) {
        await engineLoadScene(targetScene);
      }
    }
    function addScene() {
      var _a;
      if (!tour.value || addingScene.value) return;
      (_a = newSceneInput.value) == null ? void 0 : _a.click();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_AdminRealMapEditor = __nuxt_component_4;
      const _component_AdminMapHeadingPreview = __nuxt_component_4;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-8fd3c1f6><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8fd3c1f6><input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" class="hidden" data-v-8fd3c1f6><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8fd3c1f6><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-8fd3c1f6><header class="topbar" data-v-8fd3c1f6><div class="tb-logo" data-v-8fd3c1f6><div class="tb-logo-mark" data-v-8fd3c1f6>SV</div><div class="tb-logo-text" data-v-8fd3c1f6><strong data-v-8fd3c1f6>S\xF4ng V\xE2n Studio</strong><span data-v-8fd3c1f6>${ssrInterpolate((_b = (_a = tour.value) == null ? void 0 : _a.title) != null ? _b : "Kh\xF4ng gian tri\u1EC3n l\xE3m")}</span></div></div><div class="tb-breadcrumb" data-v-8fd3c1f6>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Qu\u1EA3n l\xFD tour`);
          } else {
            return [
              createTextVNode("Qu\u1EA3n l\xFD tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fd3c1f6><path d="m9 18 6-6-6-6" data-v-8fd3c1f6></path></svg><strong id="breadcrumbTour" data-v-8fd3c1f6>${ssrInterpolate((_c = tour.value) == null ? void 0 : _c.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fd3c1f6><path d="m9 18 6-6-6-6" data-v-8fd3c1f6></path></svg><span id="breadcrumbScene" data-v-8fd3c1f6>${ssrInterpolate((_d = currentScene.value) == null ? void 0 : _d.title)}</span></div><div class="tb-spacer" data-v-8fd3c1f6></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-8fd3c1f6><span class="dot" data-v-8fd3c1f6></span><span id="saveText" data-v-8fd3c1f6>${ssrInterpolate(saving.value ? "\u0110ang l\u01B0u..." : isDirty.value ? "C\xF3 thay \u0111\u1ED5i ch\u01B0a l\u01B0u" : "\u0110\xE3 l\u01B0u")}</span></div><div class="tb-actions" data-v-8fd3c1f6>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Ho\xE0n t\xE1c (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-8fd3c1f6${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6${_scopeId}><path d="M3 7v6h6" data-v-8fd3c1f6${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-8fd3c1f6${_scopeId}></path></svg></button>`);
          } else {
            return [
              createVNode("button", {
                class: "tb-btn",
                id: "undoBtn",
                disabled: !canUndo.value,
                style: { opacity: canUndo.value ? 1 : 0.4 },
                onClick: undo
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M3 7v6h6" }),
                  createVNode("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
                ]))
              ], 12, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "L\xE0m l\u1EA1i (Ctrl+Y)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-8fd3c1f6${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6${_scopeId}><path d="M21 7v6h-6" data-v-8fd3c1f6${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-8fd3c1f6${_scopeId}></path></svg></button>`);
          } else {
            return [
              createVNode("button", {
                class: "tb-btn",
                id: "redoBtn",
                disabled: !canRedo.value,
                style: { opacity: canRedo.value ? 1 : 0.4 },
                onClick: redo
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "M21 7v6h-6" }),
                  createVNode("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" })
                ]))
              ], 12, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="tb-btn" id="previewBtn" data-v-8fd3c1f6>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-8fd3c1f6></path><circle cx="12" cy="12" r="3" data-v-8fd3c1f6></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-8fd3c1f6></path></svg>`);
      }
      _push(`<span data-v-8fd3c1f6>${ssrInterpolate(previewMode.value ? "Ch\u1EC9nh s\u1EEDa" : "Xem tr\u01B0\u1EDBc")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-8fd3c1f6>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-8fd3c1f6></path><path d="M17 21v-8H7v8" data-v-8fd3c1f6></path><path d="M7 3v5h8" data-v-8fd3c1f6></path></svg>`);
      }
      _push(`<span data-v-8fd3c1f6>L\u01B0u</span></button></div></header><aside class="sidebar-left" data-v-8fd3c1f6><div class="side-head" data-v-8fd3c1f6><div class="side-head-row" data-v-8fd3c1f6><h3 data-v-8fd3c1f6>Danh s\xE1ch c\u1EA3nh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Th\xEAm c\u1EA3nh m\u1EDBi",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn"${ssrIncludeBooleanAttr(addingScene.value) ? " disabled" : ""} data-v-8fd3c1f6${_scopeId}>`);
            if (addingScene.value) {
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "sm" }, null, _parent2, _scopeId));
            } else {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8fd3c1f6${_scopeId}><path d="M12 5v14M5 12h14" data-v-8fd3c1f6${_scopeId}></path></svg>`);
            }
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", {
                class: "side-add",
                id: "addSceneBtn",
                disabled: addingScene.value,
                onClick: addScene
              }, [
                addingScene.value ? (openBlock(), createBlock(_component_UiSpinner, {
                  key: 0,
                  size: "sm"
                })) : (openBlock(), createBlock("svg", {
                  key: 1,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round"
                }, [
                  createVNode("path", { d: "M12 5v14M5 12h14" })
                ]))
              ], 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p id="sceneCount" data-v-8fd3c1f6>${ssrInterpolate((_f = (_e = tour.value) == null ? void 0 : _e.scenes.length) != null ? _f : 0)} c\u1EA3nh \xB7 K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp</p></div><div class="scene-list" id="sceneList" data-v-8fd3c1f6><!--[-->`);
      ssrRenderList((_h = (_g = tour.value) == null ? void 0 : _g.scenes) != null ? _h : [], (s, idx) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-8fd3c1f6><span class="scene-drag" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="currentColor" data-v-8fd3c1f6><circle cx="9" cy="6" r="1.5" data-v-8fd3c1f6></circle><circle cx="15" cy="6" r="1.5" data-v-8fd3c1f6></circle><circle cx="9" cy="12" r="1.5" data-v-8fd3c1f6></circle><circle cx="15" cy="12" r="1.5" data-v-8fd3c1f6></circle><circle cx="9" cy="18" r="1.5" data-v-8fd3c1f6></circle><circle cx="15" cy="18" r="1.5" data-v-8fd3c1f6></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail)}${ssrRenderAttr("alt", s.title)} loading="lazy" decoding="async" data-v-8fd3c1f6><div class="scene-info" data-v-8fd3c1f6><strong data-v-8fd3c1f6>${ssrInterpolate(s.title)}</strong><span data-v-8fd3c1f6>${ssrInterpolate((_b2 = (_a2 = s.markers) == null ? void 0 : _a2.length) != null ? _b2 : 0)} \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c${ssrInterpolate(((_c2 = tour.value) == null ? void 0 : _c2.initialSceneId) === s.id ? " \xB7 \u2605 B\u1EAFt \u0111\u1EA7u" : "")}</span></div>`);
        if (((_d2 = tour.value) == null ? void 0 : _d2.initialSceneId) === s.id) {
          _push(`<span class="scene-badge" data-v-8fd3c1f6>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng danh s\xE1ch c\u1EA3nh" data-v-8fd3c1f6></div><main class="preview" data-v-8fd3c1f6><div class="preview-toolbar" data-v-8fd3c1f6><div class="editor-mode-switch" data-v-8fd3c1f6><button type="button" class="${ssrRenderClass({ active: editorMode.value === "panorama" })}" data-v-8fd3c1f6>Panorama</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "map" })}" data-v-8fd3c1f6>B\u1EA3n \u0111\u1ED3</button></div>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-8fd3c1f6><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "camera" })}" data-v-8fd3c1f6>Xoay camera</button><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "panorama" })}" data-v-8fd3c1f6>Xoay panorama</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="N\u1EBFu b\u1EADt, ng\u01B0\u1EDDi xem s\u1EBD quay v\u1EC1 g\xF3c n\xE0y m\u1ED7i khi \u0111i v\xE0o c\u1EA3nh" data-v-8fd3c1f6><label data-v-8fd3c1f6><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultCameraEnabled === true) ? " checked" : ""} data-v-8fd3c1f6><span data-v-8fd3c1f6>G\xF3c v\xE0o c\u1EA3nh</span></label>`);
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<button type="button" data-v-8fd3c1f6> L\u1EA5y g\xF3c hi\u1EC7n t\u1EA1i </button>`);
        } else {
          _push(`<!---->`);
        }
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<output data-v-8fd3c1f6>${ssrInterpolate(Math.round(currentScene.value.initialYaw * RAD_TO_DEG))}\xB0 / ${ssrInterpolate(Math.round(currentScene.value.initialPitch * RAD_TO_DEG))}\xB0 </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8fd3c1f6><path d="M12 5v14M5 12h14" data-v-8fd3c1f6></path></svg><span data-v-8fd3c1f6>${ssrInterpolate(isPlacingHotspot.value ? "\u0110ang \u0111\u1EB7t... (ESC)" : "\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c")}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-8fd3c1f6>Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 ch\u1ECDn v\u1ECB tr\xED</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-8fd3c1f6></div><div class="pt-zoom" data-v-8fd3c1f6><button id="zoomOut" title="Thu nh\u1ECF" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fd3c1f6><path d="M5 12h14" data-v-8fd3c1f6></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-8fd3c1f6>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Ph\xF3ng to" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fd3c1f6><path d="M12 5v14M5 12h14" data-v-8fd3c1f6></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-8fd3c1f6><div class="h-full w-full" style="${ssrRenderStyle({ visibility: editorMode.value === "panorama" ? "visible" : "hidden" })}" data-v-8fd3c1f6></div>`);
      if (editorMode.value === "map" && tour.value) {
        _push(ssrRenderComponent(_component_AdminRealMapEditor, {
          scenes: tour.value.scenes,
          "current-scene-id": (_i = currentScene.value) == null ? void 0 : _i.id,
          onSelectScene: selectSceneFromGeoMap,
          onSetCoordinates: setSceneGeoCoordinates
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && ((_j = currentScene.value) == null ? void 0 : _j.coordinates)) {
        _push(ssrRenderComponent(_component_AdminMapHeadingPreview, {
          coordinates: currentScene.value.coordinates,
          "camera-yaw": unref(cameraYaw),
          "panorama-rotation": (_k = currentScene.value.panoramaRotation) != null ? _k : 0
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "panorama") {
        _push(`<div class="panorama-rotation-hint" data-v-8fd3c1f6> K\xE9o ngang \u0111\u1EC3 xoay panorama \xB7 Camera \u0111ang \u0111\u01B0\u1EE3c gi\u1EEF c\u1ED1 \u0111\u1ECBnh </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-8fd3c1f6> Nh\u1EA5n l\xEAn \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c \xB7 ESC \u0111\u1EC3 h\u1EE7y </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="preview-info" data-v-8fd3c1f6><span class="preview-info-badge" data-v-8fd3c1f6>C\u1EA2NH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate((_m = (_l = tour.value) == null ? void 0 : _l.scenes.length) != null ? _m : 1)}</span><span class="preview-info-title" id="infoTitle" data-v-8fd3c1f6>${ssrInterpolate((_n = currentScene.value) == null ? void 0 : _n.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-8fd3c1f6>${ssrInterpolate(isPlacingHotspot.value ? "Nh\u1EA5n v\u1ECB tr\xED b\u1EA5t k\u1EF3 \u0111\u1EC3 \u0111\u1EB7t" : "V\u1ECB tr\xED xem panorama")}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="resizer resizer-right" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng b\u1EA3ng thu\u1ED9c t\xEDnh" data-v-8fd3c1f6></div><aside class="inspector sidebar-right" data-v-8fd3c1f6>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="insp-tabs" data-v-8fd3c1f6><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-8fd3c1f6> C\u1EA3nh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-8fd3c1f6> \u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-8fd3c1f6> C\xE0i \u0111\u1EB7t </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="insp-body" id="inspBody" data-v-8fd3c1f6>`);
      if (editorMode.value === "panorama" && currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>Th\xF4ng tin c\u1EA3nh</div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>T\xEAn c\u1EA3nh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>M\xF4 t\u1EA3 ng\u1EAFn</label><textarea id="fieldDesc" data-v-8fd3c1f6>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>\u1EA2nh panorama</div><div class="img-picker" id="imgPicker" title="Nh\u1EA5n \u0111\u1EC3 t\u1EA3i \u1EA3nh panorama t\u1EEB m\xE1y t\xEDnh" data-v-8fd3c1f6>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.thumbnail || currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} decoding="async" data-v-8fd3c1f6>`);
        } else {
          _push(`<div class="image-error" data-v-8fd3c1f6>Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh. H\xE3y ki\u1EC3m tra \u0111\u01B0\u1EDDng d\u1EABn ho\u1EB7c t\u1EA3i \u1EA3nh m\u1EDBi.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-8fd3c1f6>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-8fd3c1f6></path><polyline points="17 8 12 3 7 8" data-v-8fd3c1f6></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-8fd3c1f6></line></svg><span data-v-8fd3c1f6>${ssrInterpolate(uploadingImage.value ? "\u0110ang t\u1EA3i l\xEAn..." : "\u0110\u1ED5i \u1EA3nh (T\u1EA3i l\xEAn)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-8fd3c1f6><label data-v-8fd3c1f6>URL \u1EA3nh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... ho\u1EB7c /uploads/..." data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>URL \u1EA3nh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... ho\u1EB7c /thumbnails/..." data-v-8fd3c1f6></div><div class="hint-text" data-v-8fd3c1f6>\u{1F4A1} Nh\u1EA5n v\xE0o \xF4 xem tr\u01B0\u1EDBc \u0111\u1EC3 ch\u1ECDn file t\u1EEB m\xE1y t\xEDnh ho\u1EB7c d\xE1n \u0111\u01B0\u1EDDng d\u1EABn URL tr\u1EF1c ti\u1EBFp.</div></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>\xC1nh s\xE1ng h\xECnh \u1EA3nh</div><div class="brightness-control" data-v-8fd3c1f6><input${ssrRenderAttr("value", (_o = currentScene.value.brightness) != null ? _o : 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-8fd3c1f6><output data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_p = currentScene.value.brightness) != null ? _p : 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-8fd3c1f6><button type="button" data-v-8fd3c1f6>G\u1ED1c</button><button type="button" data-v-8fd3c1f6>M\u1EB7c \u0111\u1ECBnh</button><button type="button" data-v-8fd3c1f6>S\xE1ng r\xF5</button></div><label class="sub-control-label" data-v-8fd3c1f6>Gi\u1EA3m v\xF9ng ch\xF3i</label><div class="brightness-control" data-v-8fd3c1f6><input${ssrRenderAttr("value", (_q = currentScene.value.highlightCompression) != null ? _q : 0)} type="range" min="0" max="1" step="0.05" data-v-8fd3c1f6><output data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_r = currentScene.value.highlightCompression) != null ? _r : 0) * 100))}%</output></div><div class="brightness-presets" data-v-8fd3c1f6><button type="button" data-v-8fd3c1f6>T\u1EAFt</button><button type="button" data-v-8fd3c1f6>Nh\u1EB9</button><button type="button" data-v-8fd3c1f6>M\u1EA1nh</button></div><div class="hint-text" data-v-8fd3c1f6>Ch\u1EC9 n\xE9n v\xF9ng tr\u1EDDi v\xE0 ngu\u1ED3n s\xE1ng g\u1EAFt; kh\xF4ng thay \u0111\u1ED5i file \u1EA3nh g\u1ED1c.</div></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>V\u1ECB tr\xED trong tour</div><div class="field-row" data-v-8fd3c1f6><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Th\u1EE9 t\u1EF1</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", (_s = tour.value) == null ? void 0 : _s.scenes.length)} data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-8fd3c1f6></div></div><div class="toggle-row" data-v-8fd3c1f6><label for="isStartToggle" data-v-8fd3c1f6>\u0110\u1EB7t l\xE0m c\u1EA3nh b\u1EAFt \u0111\u1EA7u</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": ((_t = tour.value) == null ? void 0 : _t.initialSceneId) === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-8fd3c1f6><button class="btn-block danger" id="deleteSceneBtn" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M3 6h18" data-v-8fd3c1f6></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-8fd3c1f6></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-8fd3c1f6></path></svg> X\xF3a c\u1EA3nh n\xE0y </button></div><!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6><span data-v-8fd3c1f6>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c trong c\u1EA3nh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-8fd3c1f6><circle cx="12" cy="12" r="10" data-v-8fd3c1f6></circle><path d="M12 8v8M8 12h8" data-v-8fd3c1f6></path></svg> Ch\u01B0a c\xF3 \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c n\xE0o.<br data-v-8fd3c1f6>Nh\u1EA5n \u201C\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c\u201D \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-8fd3c1f6><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-8fd3c1f6><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-8fd3c1f6>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M12 4 L12 18" data-v-8fd3c1f6></path><path d="M6 11 L12 5 L18 11" data-v-8fd3c1f6></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-8fd3c1f6><path d="M8 5v14l11-7z" data-v-8fd3c1f6></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8fd3c1f6><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-8fd3c1f6></path><path d="M12 22V12M3 7l9 5 9-5" data-v-8fd3c1f6></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-8fd3c1f6><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-8fd3c1f6></circle><path d="M12 11 L12 18" data-v-8fd3c1f6></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-8fd3c1f6>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8fd3c1f6><path d="M18 6 6 18" data-v-8fd3c1f6></path><path d="m6 6 12 12" data-v-8fd3c1f6></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8fd3c1f6><path d="M12 5v14M5 12h14" data-v-8fd3c1f6></path></svg> Th\xEAm \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>Ch\u1EC9nh s\u1EEDa \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c</div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Nh\xE3n hi\u1EC3n th\u1ECB</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-8fd3c1f6></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>C\u1EA3nh \u0111\xEDch</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-8fd3c1f6><option value="" disabled data-v-8fd3c1f6>\u2014 Ch\u1ECDn c\u1EA3nh \u2014</option><!--[-->`);
            ssrRenderList((_v = (_u = tour.value) == null ? void 0 : _u.scenes) != null ? _v : [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-8fd3c1f6>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Ki\u1EC3u hi\u1EC3n th\u1ECB</label><div class="nav-icon-mode-toggle" data-v-8fd3c1f6><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["arrow", "arrow-1", "arrow-2"].includes((_w = selectedHotspot.value.icon) != null ? _w : "arrow") }])}" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "width": "18px", "height": "18px" })}" data-v-8fd3c1f6><path d="m5 15 7-6 7 6" data-v-8fd3c1f6></path><path d="m5 21 7-6 7 6" data-v-8fd3c1f6></path></svg> M\u0169i t\xEAn </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["location-1", "pin"].includes((_x = selectedHotspot.value.icon) != null ? _x : "") }])}" data-v-8fd3c1f6><img${ssrRenderAttr("src", _imports_0)} alt="" style="${ssrRenderStyle({ "width": "16px", "height": "20px", "object-fit": "contain" })}" data-v-8fd3c1f6> V\u1ECB tr\xED 1 </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["location-2", "pin-top", "anchor"].includes((_y = selectedHotspot.value.icon) != null ? _y : "") }])}" data-v-8fd3c1f6><img${ssrRenderAttr("src", _imports_1)} alt="" style="${ssrRenderStyle({ "width": "15px", "height": "21px", "object-fit": "contain" })}" data-v-8fd3c1f6> V\u1ECB tr\xED 2 </button></div></div>`);
            if (["location-1", "location-2", "pin", "pin-top", "anchor"].includes((_z = selectedHotspot.value.icon) != null ? _z : "")) {
              _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>M\xE0u pin</label><div class="pin-color-row" data-v-8fd3c1f6><input type="color"${ssrRenderAttr("value", (_A = selectedHotspot.value.pinColor) != null ? _A : "#171717")} data-v-8fd3c1f6><div class="pin-color-presets" data-v-8fd3c1f6><!--[-->`);
              ssrRenderList(["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#1d6fa8", "#171717"], (c) => {
                _push(`<button type="button" style="${ssrRenderStyle({ background: c })}" class="${ssrRenderClass([{ active: selectedHotspot.value.pinColor === c }, "pin-color-swatch"])}" data-v-8fd3c1f6></button>`);
              });
              _push(`<!--]--></div></div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>\u1EA2nh b\xEAn trong pin <span style="${ssrRenderStyle({ "opacity": ".5", "font-weight": "400" })}" data-v-8fd3c1f6>(tu\u1EF3 ch\u1ECDn)</span></label><input${ssrRenderAttr("value", (_B = selectedHotspot.value.iconUrl) != null ? _B : "")} type="text" placeholder="/thumbnails/scene.jpg ho\u1EB7c \u0111\u1EC3 tr\u1ED1ng" data-v-8fd3c1f6><div class="hint-text" data-v-8fd3c1f6>\u0110\u1EC3 tr\u1ED1ng = pin tr\u1EAFng tr\u01A1n. C\xF3 \u1EA3nh = thumbnail tr\xF2n b\xEAn trong pin.</div></div>`);
              if (selectedHotspot.value.targetScene) {
                _push(`<div class="field" data-v-8fd3c1f6><button type="button" class="btn-fill-thumb" data-v-8fd3c1f6> \u{1F4F7} D\xF9ng thumbnail c\u1EA3nh \u0111\xEDch </button></div>`);
              } else {
                _push(`<!---->`);
              }
              if (selectedHotspot.value.iconUrl) {
                _push(`<div class="field nav-icon-preview" data-v-8fd3c1f6><label data-v-8fd3c1f6>Xem tr\u01B0\u1EDBc \u1EA3nh</label><div class="nav-icon-preview-frame" data-v-8fd3c1f6><img${ssrRenderAttr("src", selectedHotspot.value.iconUrl)} alt="Xem tr\u01B0\u1EDBc \u1EA3nh trong pin" data-v-8fd3c1f6></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> K\xEDch th\u01B0\u1EDBc pin <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate((_C = selectedHotspot.value.iconSize) != null ? _C : 65)}px</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="35" max="150" step="5"${ssrRenderAttr("value", (_D = selectedHotspot.value.iconSize) != null ? _D : 65)} data-v-8fd3c1f6><button class="reset-btn" type="button" title="V\u1EC1 65" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>K\xEDch th\u01B0\u1EDBc pin trong kh\xF4ng gian 3D (world units). M\u1EB7c \u0111\u1ECBnh: 65.</div></div><!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" && ["arrow", "arrow-1", "arrow-2"].includes((_E = selectedHotspot.value.icon) != null ? _E : "arrow")) {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> Xoay (Z) \u2014 chi\u1EC1u nghi\xEAng <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotZ"))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotZ"))} data-v-8fd3c1f6><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>0\xB0 = ^^ h\u01B0\u1EDBng l\xEAn. 90\xB0 = ph\u1EA3i. -90\xB0 = tr\xE1i.</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> Nghi\xEAng (X) \u2014 \u0111\u1EE9ng / n\u1EB1m <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotX"))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotX"))} data-v-8fd3c1f6><button class="reset-btn" title="V\u1EC1 60\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>M\u1EB7c \u0111\u1ECBnh 60\xB0 \u0111\u1EC3 m\u0169i t\xEAn n\u1EB1m theo m\u1EB7t s\xE0n. 0\xB0 = \u0111\u1EE9ng th\u1EB3ng.</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> Xoay ngang (Y) \u2014 quay m\u1EB7t <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotY"))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotY"))} data-v-8fd3c1f6><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>Xoay m\u1EB7t m\u0169i t\xEAn sang tr\xE1i/ph\u1EA3i trong kh\xF4ng gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> Ph\xF3ng ngang (X) <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleX") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleX"))} data-v-8fd3c1f6><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsArrow(selectedHotspot.value) ? "V\u1EC1 200%" : "V\u1EC1 100%")} data-v-8fd3c1f6>\u21BA</button></div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6> Ph\xF3ng d\u1ECDc (Y) <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleY") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleY"))} data-v-8fd3c1f6><button class="reset-btn" type="button" title="V\u1EC1 100%" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>X v\xE0 Y thay \u0111\u1ED5i \u0111\u1ED9c l\u1EADp; marker m\u1EB7t ph\u1EB3ng kh\xF4ng s\u1EED d\u1EE5ng chi\u1EC1u s\xE2u Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>H\u01B0\u1EDBng hi\u1EC3n th\u1ECB panel</label><select${ssrRenderAttr("value", (_F = selectedHotspot.value.placement) != null ? _F : "vertical")} data-v-8fd3c1f6><option value="vertical" data-v-8fd3c1f6>Chi\u1EC1u d\u1ECDc</option><option value="horizontal" data-v-8fd3c1f6>Chi\u1EC1u ngang</option></select><div class="hint-text" data-v-8fd3c1f6>H\u1EC7 th\u1ED1ng t\u1EF1 ch\u1ECDn tr\xEAn/d\u01B0\u1EDBi ho\u1EB7c tr\xE1i/ph\u1EA3i theo kho\u1EA3ng tr\u1ED1ng c\xF2n l\u1EA1i.</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>N\u1ED9i dung trong panel</label><div class="video-size-presets" data-v-8fd3c1f6><button type="button" data-v-8fd3c1f6>+ V\u0103n b\u1EA3n</button><button type="button" data-v-8fd3c1f6>+ \u1EA2nh 3D</button><button type="button" data-v-8fd3c1f6>+ \xC2m thanh</button><button type="button" data-v-8fd3c1f6>+ AI Chat</button></div><div class="hint-text" data-v-8fd3c1f6>C\xF3 th\u1EC3 k\u1EBFt h\u1EE3p nhi\u1EC1u lo\u1EA1i v\xE0 thay \u0111\u1ED5i th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2;
              _push(`<div class="field panel-block-editor" data-v-8fd3c1f6><label data-v-8fd3c1f6>${ssrInterpolate(block.type === "text" ? "V\u0103n b\u1EA3n" : block.type === "image3d" ? "\u1EA2nh 3D" : block.type === "audio" ? "\xC2m thanh" : "AI Chat")} <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="N\u1ED9i dung m\xF4 t\u1EA3..." data-v-8fd3c1f6>${ssrInterpolate(block.content)}</textarea><label data-v-8fd3c1f6>Ch\u1EBF \u0111\u1ED9 hi\u1EC3n th\u1ECB</label><select${ssrRenderAttr("value", (_a2 = block.presentation) != null ? _a2 : "text-only")} data-v-8fd3c1f6><option value="text-only" data-v-8fd3c1f6>Ch\u1EC9 v\u0103n b\u1EA3n</option><option value="text-and-audio" data-v-8fd3c1f6>V\u0103n b\u1EA3n v\xE0 b\u1EA3n \u0111\u1ECDc</option><option value="audio-only" data-v-8fd3c1f6>Ch\u1EC9 b\u1EA3n \u0111\u1ECDc</option></select>`);
                if (((_b2 = block.presentation) != null ? _b2 : "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-8fd3c1f6>File b\u1EA3n \u0111\u1ECDc (VieNeu-TTS)</label><input${ssrRenderAttr("value", (_d2 = (_c2 = block.speech) == null ? void 0 : _c2.src) != null ? _d2 : "")} type="text" placeholder="/uploads/audio/ban-doc.wav ho\u1EB7c URL" data-v-8fd3c1f6><div class="video-size-presets" data-v-8fd3c1f6><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-8fd3c1f6>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "\u0110ang t\u1EA3i..." : "T\u1EA3i file b\u1EA3n \u0111\u1ECDc")}</button>`);
                  if ((_e2 = block.speech) == null ? void 0 : _e2.src) {
                    _push(`<button type="button" data-v-8fd3c1f6>B\u1ECF file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if ((_f2 = block.speech) == null ? void 0 : _f2.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-8fd3c1f6></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-8fd3c1f6>Xu\u1EA5t WAV/MP3 t\u1EEB VieNeu-TTS r\u1ED3i t\u1EA3i l\xEAn \u0111\xE2y. Khi c\xF3 file, thanh ti\u1EBFn tr\xECnh s\u1EBD d\xF9ng \u0111\xFAng th\u1EDDi l\u01B0\u1EE3ng audio.</div>`);
                  if (!((_g2 = block.speech) == null ? void 0 : _g2.src)) {
                    _push(`<details data-v-8fd3c1f6><summary data-v-8fd3c1f6>Gi\u1ECDng tr\xECnh duy\u1EC7t d\u1EF1 ph\xF2ng</summary><select${ssrRenderAttr("value", (_i2 = (_h2 = block.speech) == null ? void 0 : _h2.lang) != null ? _i2 : "vi-VN")} data-v-8fd3c1f6><option value="vi-VN" data-v-8fd3c1f6>Ti\u1EBFng Vi\u1EC7t</option><option value="en-US" data-v-8fd3c1f6>English (US)</option><option value="en-GB" data-v-8fd3c1f6>English (UK)</option><option value="fr-FR" data-v-8fd3c1f6>Fran\xE7ais</option><option value="ja-JP" data-v-8fd3c1f6>\u65E5\u672C\u8A9E</option><option value="ko-KR" data-v-8fd3c1f6>\uD55C\uAD6D\uC5B4</option></select><label data-v-8fd3c1f6>T\u1ED1c \u0111\u1ED9 <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(((_k2 = (_j2 = block.speech) == null ? void 0 : _j2.rate) != null ? _k2 : 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_m2 = (_l2 = block.speech) == null ? void 0 : _l2.rate) != null ? _m2 : 1)} data-v-8fd3c1f6><label data-v-8fd3c1f6>Cao \u0111\u1ED9 <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(((_o2 = (_n2 = block.speech) == null ? void 0 : _n2.pitch) != null ? _o2 : 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_q2 = (_p2 = block.speech) == null ? void 0 : _p2.pitch) != null ? _q2 : 1)} data-v-8fd3c1f6><div class="hint-text" data-v-8fd3c1f6>Gi\u1ECDng \u0111\u1ECDc th\u1EF1c t\u1EBF ph\u1EE5 thu\u1ED9c v\xE0o gi\u1ECDng c\xF3 s\u1EB5n tr\xEAn thi\u1EBFt b\u1ECB ng\u01B0\u1EDDi xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-8fd3c1f6><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Ch\xFA th\xEDch \u1EA3nh (kh\xF4ng b\u1EAFt bu\u1ED9c)" data-v-8fd3c1f6><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 ho\u1EB7c URL" data-v-8fd3c1f6><div class="hint-text" data-v-8fd3c1f6>AudioBlock ch\u1EC9 ph\xE1t t\u1EC7p \xE2m thanh \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn ho\u1EB7c nh\u1EADp b\u1EB1ng URL; kh\u1ED1i n\xE0y kh\xF4ng t\u1EA1o gi\u1ECDng \u0111\u1ECDc t\u1EEB v\u0103n b\u1EA3n.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ng\u1EEF c\u1EA3nh d\xE0nh cho AI..." data-v-8fd3c1f6>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-8fd3c1f6><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-8fd3c1f6>\u2191 L\xEAn</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-8fd3c1f6>\u2193 Xu\u1ED1ng</button><button type="button" data-v-8fd3c1f6>X\xF3a</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>N\u1ED9i dung th\xF4ng tin</label><textarea placeholder="M\xF4 t\u1EA3 chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m..." data-v-8fd3c1f6>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>\u0110\u01B0\u1EDDng d\u1EABn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo ho\u1EB7c /video.mp4" data-v-8fd3c1f6><div class="hint-text" data-v-8fd3c1f6>YouTube, Vimeo v\xE0 video tr\u1EF1c ti\u1EBFp \u0111\u1EC1u hi\u1EC3n th\u1ECB ngay trong panorama.</div></div><div class="field video-panel-size" data-v-8fd3c1f6><label data-v-8fd3c1f6>K\xEDch th\u01B0\u1EDBc panel</label><div class="video-size-presets" data-v-8fd3c1f6><button type="button" data-v-8fd3c1f6>Nh\u1ECF</button><button type="button" data-v-8fd3c1f6>V\u1EEBa</button><button type="button" data-v-8fd3c1f6>L\u1EDBn</button><button type="button" data-v-8fd3c1f6>R\u1EA5t l\u1EDBn</button></div><div class="video-size-row" data-v-8fd3c1f6><span data-v-8fd3c1f6>R\u1ED9ng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", (_G = selectedHotspot.value.width) != null ? _G : 640)} data-v-8fd3c1f6><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", (_H = selectedHotspot.value.width) != null ? _H : 640)} data-v-8fd3c1f6></div><div class="video-size-row" data-v-8fd3c1f6><span data-v-8fd3c1f6>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", (_I = selectedHotspot.value.height) != null ? _I : 360)} data-v-8fd3c1f6><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", (_J = selectedHotspot.value.height) != null ? _J : 360)} data-v-8fd3c1f6></div><label class="video-ratio-lock" data-v-8fd3c1f6><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-8fd3c1f6> Gi\u1EEF nguy\xEAn t\u1EC9 l\u1EC7 khung h\xECnh </label><div class="hint-text" data-v-8fd3c1f6>K\xEDch th\u01B0\u1EDBc hi\u1EC7n t\u1EA1i: ${ssrInterpolate((_K = selectedHotspot.value.width) != null ? _K : 640)} \xD7 ${ssrInterpolate((_L = selectedHotspot.value.height) != null ? _L : 360)} px</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Xoay ngang (Y) <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_M = selectedHotspot.value.rotY) != null ? _M : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_N = selectedHotspot.value.rotY) != null ? _N : 0) * 180 / Math.PI))} data-v-8fd3c1f6><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>Quay c\u1EA1nh tr\xE1i ho\u1EB7c ph\u1EA3i c\u1EE7a m\xE0n h\xECnh ra xa ng\u01B0\u1EDDi xem.</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Nghi\xEAng (X) <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_O = selectedHotspot.value.rotX) != null ? _O : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_P = selectedHotspot.value.rotX) != null ? _P : 0) * 180 / Math.PI))} data-v-8fd3c1f6><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>Ng\u1EA3 m\xE0n h\xECnh l\xEAn ho\u1EB7c xu\u1ED1ng trong kh\xF4ng gian 3D.</div></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Xoay m\u1EB7t ph\u1EB3ng (Z) <span class="field-badge" data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_Q = selectedHotspot.value.rotZ) != null ? _Q : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8fd3c1f6><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round(((_R = selectedHotspot.value.rotZ) != null ? _R : 0) * 180 / Math.PI))} data-v-8fd3c1f6><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-8fd3c1f6>\u21BA</button></div><div class="hint-text" data-v-8fd3c1f6>Xoay panel theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3 ho\u1EB7c ng\u01B0\u1EE3c l\u1EA1i.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>\u1EA2nh 3D / \u1EA3nh 360\xB0 c\u1EE7a v\u1EADt th\u1EC3</label><button class="model-image-picker" type="button" data-v-8fd3c1f6>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="\u1EA2nh v\u1EADt th\u1EC3" data-v-8fd3c1f6>`);
            } else {
              _push(`<span data-v-8fd3c1f6>Ch\u1ECDn \u1EA3nh \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF chu\u1EA9n b\u1ECB</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>M\xF4 t\u1EA3 v\u1EADt th\u1EC3</label><textarea placeholder="T\xEAn t\xE1c ph\u1EA9m, ch\u1EA5t li\u1EC7u, t\xE1c gi\u1EA3..." data-v-8fd3c1f6>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-8fd3c1f6>\u1EE8ng d\u1EE5ng ch\u1EC9 hi\u1EC3n th\u1ECB \u1EA3nh do ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF cung c\u1EA5p, kh\xF4ng t\u1EF1 t\u1EA1o m\xF4 h\xECnh 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-8fd3c1f6><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-8fd3c1f6></div></div><div class="hint-text" data-v-8fd3c1f6>\u{1F4A1} K\xE9o tr\u1EF1c ti\u1EBFp \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c tr\xEAn \u1EA3nh panorama \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>Ch\u1EBF \u0111\u1ED9 tour</div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Ki\u1EC3u tr\u1EA3i nghi\u1EC7m</label><select${ssrRenderAttr("value", (_S = tour.value.mode) != null ? _S : "free")} data-v-8fd3c1f6><option value="free" data-v-8fd3c1f6>T\u1EF1 do kh\xE1m ph\xE1</option><option value="guided" data-v-8fd3c1f6>C\xF3 h\u01B0\u1EDBng d\u1EABn (t\u1EF1 chuy\u1EC3n c\u1EA3nh)</option></select></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Th\u1EDDi gian m\u1ED7i c\u1EA3nh (gi\xE2y)</label><input${ssrRenderAttr("value", (_T = tour.value.guidedDuration) != null ? _T : 8)} type="number" min="3" max="60" data-v-8fd3c1f6></div><div class="hint-text" data-v-8fd3c1f6>\u1EDE ch\u1EBF \u0111\u1ED9 c\xF3 h\u01B0\u1EDBng d\u1EABn, tour t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n sang c\u1EA3nh ti\u1EBFp theo sau th\u1EDDi gian n\xE0y.</div></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>C\u1EA3nh b\u1EAFt \u0111\u1EA7u</div><div class="field" data-v-8fd3c1f6><select${ssrRenderAttr("value", (_V = tour.value.initialSceneId) != null ? _V : (_U = tour.value.scenes[0]) == null ? void 0 : _U.id)} data-v-8fd3c1f6><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-8fd3c1f6>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>T\xF9y ch\u1ECDn hi\u1EC3n th\u1ECB</div><div class="toggle-row" data-v-8fd3c1f6><label data-v-8fd3c1f6>T\u1EF1 \u0111\u1ED9ng xoay \u1EA3nh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-8fd3c1f6><label data-v-8fd3c1f6>Hi\u1EC7n b\u1EA3n \u0111\u1ED3 nh\u1ECF</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value.showMinimap !== false,
          "onUpdate:modelValue": (val) => {
            tour.value.showMinimap = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      } else if (editorMode.value === "map" && tour.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-8fd3c1f6><strong data-v-8fd3c1f6>B\u1EA3n \u0111\u1ED3 v\u1ECB tr\xED th\u1EF1c</strong><span data-v-8fd3c1f6>GPS c\u1EE7a t\u1EEBng c\u1EA3nh panorama</span></div><div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>C\u1EA3nh \u0111ang \u0111\u1EB7t</div><div class="geo-current-scene" data-v-8fd3c1f6>${ssrInterpolate((_W = currentScene.value) == null ? void 0 : _W.title)}</div>`);
        if (currentScene.value) {
          _push(`<div class="toggle-row" data-v-8fd3c1f6><label data-v-8fd3c1f6>Hi\u1EC7n c\u1ED1 \u0111\u1ECBnh tr\xEAn b\u1EA3n \u0111\u1ED3</label>`);
          _push(ssrRenderComponent(_component_UiSwitch, {
            "model-value": currentScene.value.showOnMap === true,
            "onUpdate:modelValue": (value) => {
              currentScene.value.showOnMap = value;
              markDirty();
            }
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="field-row" data-v-8fd3c1f6><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>Kinh \u0111\u1ED9</label><input type="number" step="0.000001"${ssrRenderAttr("value", (_Z = (_Y = (_X = currentScene.value) == null ? void 0 : _X.coordinates) == null ? void 0 : _Y[0]) != null ? _Z : "")} placeholder="108.2022" data-v-8fd3c1f6></div><div class="field" data-v-8fd3c1f6><label data-v-8fd3c1f6>V\u0129 \u0111\u1ED9</label><input type="number" step="0.000001"${ssrRenderAttr("value", (_aa = (_$ = (__ = currentScene.value) == null ? void 0 : __.coordinates) == null ? void 0 : _$[1]) != null ? _aa : "")} placeholder="16.0544" data-v-8fd3c1f6></div></div><div class="hint-text" data-v-8fd3c1f6>T\u1ECDa \u0111\u1ED9 lu\xF4n d\xF9ng cho v\u1ECB tr\xED v\xE0 h\u01B0\u1EDBng camera. Ch\u1EC9 c\u1EA3nh b\u1EADt \u201CHi\u1EC7n c\u1ED1 \u0111\u1ECBnh\u201D m\u1EDBi xu\u1EA5t hi\u1EC7n khi n\xF3 kh\xF4ng ph\u1EA3i c\u1EA3nh hi\u1EC7n t\u1EA1i.</div></div>`);
        if (currentScene.value) {
          _push(`<div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>Xoay panorama tr\xEAn b\u1EA3n \u0111\u1ED3</div><div class="brightness-control" data-v-8fd3c1f6><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", ((_ba = currentScene.value.panoramaRotation) != null ? _ba : 0) * RAD_TO_DEG)} data-v-8fd3c1f6><output data-v-8fd3c1f6>${ssrInterpolate(Math.round(((_ca = currentScene.value.panoramaRotation) != null ? _ca : 0) * RAD_TO_DEG))}\xB0</output></div><div class="field mt-2" data-v-8fd3c1f6><label data-v-8fd3c1f6>G\xF3c xoay ch\xEDnh x\xE1c</label><input type="number" min="-180" max="180" step="0.1"${ssrRenderAttr("value", (((_da = currentScene.value.panoramaRotation) != null ? _da : 0) * RAD_TO_DEG).toFixed(1))} data-v-8fd3c1f6></div><div class="brightness-presets" data-v-8fd3c1f6><button type="button" data-v-8fd3c1f6>-90\xB0</button><button type="button" data-v-8fd3c1f6>\u0110\u1EB7t l\u1EA1i</button><button type="button" data-v-8fd3c1f6>+90\xB0</button></div><div class="hint-text" data-v-8fd3c1f6>Gi\xE1 tr\u1ECB n\xE0y xoay ch\xEDnh panorama v\xE0 to\xE0n b\u1ED9 marker c\u1EE7a c\u1EA3nh. N\xF3 kh\xF4ng thay \u0111\u1ED5i camera.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="insp-section" data-v-8fd3c1f6><div class="insp-section-title" data-v-8fd3c1f6>C\xE1c c\u1EA3nh tr\xEAn b\u1EA3n \u0111\u1ED3</div><!--[-->`);
        ssrRenderList(tour.value.scenes, (scene, index) => {
          var _a2;
          _push(`<button type="button" class="${ssrRenderClass([{ active: scene.id === ((_a2 = currentScene.value) == null ? void 0 : _a2.id) }, "geo-scene-row"])}" data-v-8fd3c1f6><span class="map-node-dot" style="${ssrRenderStyle({ background: scene.coordinates ? "#3b82f6" : "#64748b" })}" data-v-8fd3c1f6></span><span data-v-8fd3c1f6>${ssrInterpolate(scene.title)}</span><small data-v-8fd3c1f6>${ssrInterpolate(scene.coordinates ? `${scene.showOnMap === true ? "Hi\u1EC7n" : "\u1EA8n"} \xB7 ${scene.coordinates[1].toFixed(5)}, ${scene.coordinates[0].toFixed(5)}` : "Ch\u01B0a \u0111\u1EB7t")}</small></button>`);
        });
        _push(`<!--]--></div>`);
        {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-8fd3c1f6><div class="modal" data-v-8fd3c1f6><div class="modal-head" data-v-8fd3c1f6><div data-v-8fd3c1f6><span class="modal-eyebrow" data-v-8fd3c1f6>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c m\u1EDBi</span><h3 data-v-8fd3c1f6>Ch\u1ECDn h\xE0nh \u0111\u1ED9ng khi ng\u01B0\u1EDDi xem nh\u1EA5n v\xE0o</h3></div><button class="modal-close" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8fd3c1f6><path d="M18 6 6 18" data-v-8fd3c1f6></path><path d="m6 6 12 12" data-v-8fd3c1f6></path></svg></button></div><div class="modal-body" data-v-8fd3c1f6><div class="type-grid" data-v-8fd3c1f6><div class="type-card nav" data-v-8fd3c1f6><div class="type-card-icon nav" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-8fd3c1f6><path d="M12 4 L12 18" data-v-8fd3c1f6></path><path d="M6 11 L12 5 L18 11" data-v-8fd3c1f6></path></svg></div><strong data-v-8fd3c1f6>Chuy\u1EC3n c\u1EA3nh</strong><span data-v-8fd3c1f6>\u0110i t\u1EDBi m\u1ED9t \u1EA3nh panorama kh\xE1c</span></div><div class="type-card video" data-v-8fd3c1f6><div class="type-card-icon video" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="currentColor" data-v-8fd3c1f6><path d="M8 5v14l11-7z" data-v-8fd3c1f6></path></svg></div><strong data-v-8fd3c1f6>Xem video</strong><span data-v-8fd3c1f6>M\u1EDF video gi\u1EDBi thi\u1EC7u ho\u1EB7c t\u01B0 li\u1EC7u</span></div><div class="type-card info" data-v-8fd3c1f6><div class="type-card-icon info" data-v-8fd3c1f6><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-8fd3c1f6><rect x="4" y="4" width="16" height="16" rx="3" data-v-8fd3c1f6></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-8fd3c1f6></path></svg></div><strong data-v-8fd3c1f6>Panel n\u1ED9i dung</strong><span data-v-8fd3c1f6>K\u1EBFt h\u1EE3p v\u0103n b\u1EA3n, \u1EA3nh 3D, \xE2m thanh v\xE0 AI</span></div></div></div><div class="modal-foot" data-v-8fd3c1f6><button class="tb-btn" data-v-8fd3c1f6>H\u1EE7y</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fd3c1f6"]]);

export { _sceneId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_sceneId_-bpMCnmNS');
//# sourceMappingURL=_sceneId_-bpMCnmNS.mjs.map
