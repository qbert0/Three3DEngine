globalThis.__timing__.logStart('Load chunks/build/_sceneId_-t1nOwGuk');import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { _ as _sfc_main$1, a as _sfc_main$3 } from './Switch-CNCj6PJD.mjs';
import { _ as _sfc_main$2 } from './Spinner-mjqtnuYo.mjs';
import { _ as _export_sfc, u as useRoute, b as useRouter, a as useToast, c as __nuxt_component_4 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, computed, watch, nextTick, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref, shallowRef, readonly, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { V as View360Engine, M as MarkerPlugin, A as AreaHighlightPlugin } from './AreaHighlightPlugin-DE6rqF-n.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

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
  const isDrawingArea = ref(false);
  const areaInteractionMode = ref("rotate");
  const areaDraftPoints = ref([]);
  const lastAreaDrawn = ref(null);
  const selectedAreaId = ref(null);
  const selectedAreaPoint = ref(null);
  const lastAreaPointMoved = ref(null);
  const lastAreaPointAdded = ref(null);
  const areaPointTargetId = ref(null);
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
      const areaHighlightPlugin = new AreaHighlightPlugin({ preview: true });
      e.use(areaHighlightPlugin);
      areaHighlightPlugin.setEditingEnabled(false);
      const unsub1 = e.bus.on("camera:move", ({ yaw, pitch }) => {
        cameraYaw.value = yaw;
        cameraPitch.value = pitch;
        cameraFov.value = e.camera.getFov();
      });
      const unsub2 = e.bus.on("camera:fov", ({ fov }) => {
        cameraFov.value = fov;
      });
      const unsub3 = e.bus.on("scene:loaded", ({ scene }) => {
        currentScene.value = scene;
        cameraYaw.value = e.camera.getYaw();
        cameraPitch.value = e.camera.getPitch();
        cameraFov.value = e.camera.getFov();
        isLoading.value = false;
      });
      unsubs.push(unsub1, unsub2, unsub3);
      const unsub4 = e.bus.on("marker:moved", ({ markerId, yaw, pitch }) => {
        lastMarkerMoved.value = { markerId, yaw, pitch };
      });
      const unsub5 = e.bus.on("marker:click", ({ marker }) => {
        if (placementMode.value === "none") lastMarkerClicked.value = marker;
      });
      const unsub6 = e.bus.on("area:point-moved", (payload) => {
        lastAreaPointMoved.value = payload;
      });
      const unsub7 = e.bus.on("area:selected", ({ areaId }) => {
        selectedAreaId.value = areaId;
      });
      const unsub8 = e.bus.on("area:point-selected", (payload) => {
        selectedAreaPoint.value = payload;
      });
      unsubs.push(unsub4, unsub5, unsub6, unsub7, unsub8);
      const canvas = e["renderer"].domElement;
      const onClick = (ev) => {
        if (isDrawingArea.value || areaPointTargetId.value) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
          handleAreaDrawingClick(ev, canvas, e);
          return;
        }
        if (placementMode.value === "none") return;
        handlePlacementClick(ev, canvas, e);
      };
      canvas.addEventListener("click", onClick, true);
      unsubs.push(() => canvas.removeEventListener("click", onClick, true));
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
  function startAreaDrawing() {
    setAreaInteractionMode("edit");
    placementMode.value = "none";
    areaPointTargetId.value = null;
    areaDraftPoints.value = [];
    isDrawingArea.value = true;
    refreshAreaHighlights();
  }
  function finishAreaDrawing() {
    if (areaDraftPoints.value.length < 3) return false;
    lastAreaDrawn.value = {
      id: `area-${Date.now()}`,
      points: areaDraftPoints.value.map((point) => ({ ...point })),
      color: "#22c55e",
      outlineColor: "#ffffff",
      opacity: 0.34,
      durationMs: 1400,
      mode: "fill-outline",
      lineWidth: 5
    };
    isDrawingArea.value = false;
    areaDraftPoints.value = [];
    return true;
  }
  function cancelAreaDrawing() {
    isDrawingArea.value = false;
    areaPointTargetId.value = null;
    areaDraftPoints.value = [];
    refreshAreaHighlights();
  }
  function startAreaPointPlacement(areaId) {
    setAreaInteractionMode("edit");
    isDrawingArea.value = false;
    areaDraftPoints.value = [];
    areaPointTargetId.value = areaId;
  }
  function setAreaInteractionMode(mode) {
    var _a;
    areaInteractionMode.value = mode;
    const currentEngine = engine.value;
    if (!currentEngine) return;
    (_a = currentEngine.getPlugin("area-highlight")) == null ? void 0 : _a.setEditingEnabled(mode === "edit");
    currentEngine.bus.emit(mode === "edit" ? "interaction:lock" : "interaction:unlock");
    currentEngine.renderer.domElement.style.cursor = mode === "edit" ? "crosshair" : "grab";
  }
  function selectAreaPoint(areaId, pointIndex) {
    var _a, _b;
    if (areaId !== null && pointIndex !== null) setAreaInteractionMode("edit");
    selectedAreaPoint.value = areaId !== null && pointIndex !== null ? { areaId, pointIndex } : null;
    (_b = (_a = engine.value) == null ? void 0 : _a.getPlugin("area-highlight")) == null ? void 0 : _b.selectPoint(areaId, pointIndex);
  }
  function handleAreaDrawingClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import('./AreaHighlightPlugin-DE6rqF-n.mjs').then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
      var _a, _b;
      if (!isDrawingArea.value && !areaPointTargetId.value) return;
      const raycaster = new Raycaster();
      raycaster.setFromCamera(new Vector2(ndcX, ndcY), e.camera.camera);
      const direction = raycaster.ray.direction.clone().normalize();
      direction.applyAxisAngle(new Vector3(0, 1, 0), -((_b = (_a = currentScene.value) == null ? void 0 : _a.panoramaRotation) != null ? _b : 0));
      const point = {
        yaw: Math.atan2(-direction.x, -direction.z),
        pitch: Math.asin(THREEClamp(direction.y))
      };
      if (areaPointTargetId.value) {
        lastAreaPointAdded.value = { areaId: areaPointTargetId.value, point };
        areaPointTargetId.value = null;
        return;
      }
      areaDraftPoints.value.push(point);
      refreshAreaHighlights();
    });
  }
  function THREEClamp(value) {
    return Math.max(-1, Math.min(1, value));
  }
  function refreshAreaHighlights(areas = ((_b) => (_b = ((_a) => (_a = currentScene.value) == null ? void 0 : _a.areaHighlights)()) != null ? _b : [])()) {
    var _a2, _b2, _c;
    const plugin = (_a2 = engine.value) == null ? void 0 : _a2.getPlugin("area-highlight");
    if (!plugin) return;
    const draft = areaDraftPoints.value.length ? [{ id: "__draft__", points: areaDraftPoints.value, color: "#22c55e", outlineColor: "#ffffff", opacity: 0.34 }] : [];
    plugin.setAreas([...areas, ...draft], (_c = (_b2 = currentScene.value) == null ? void 0 : _b2.panoramaRotation) != null ? _c : 0);
  }
  function handlePlacementClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import('./AreaHighlightPlugin-DE6rqF-n.mjs').then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
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
      Math.max(30, Math.min(150, fov))
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
    isDrawingArea: readonly(isDrawingArea),
    areaInteractionMode: readonly(areaInteractionMode),
    areaDraftPoints: readonly(areaDraftPoints),
    lastAreaDrawn: readonly(lastAreaDrawn),
    selectedAreaId: readonly(selectedAreaId),
    selectedAreaPoint: readonly(selectedAreaPoint),
    lastAreaPointMoved: readonly(lastAreaPointMoved),
    lastAreaPointAdded: readonly(lastAreaPointAdded),
    areaPointTargetId: readonly(areaPointTargetId),
    // Actions
    initEngine,
    loadScene,
    startPlacement,
    cancelPlacement,
    startAreaDrawing,
    finishAreaDrawing,
    cancelAreaDrawing,
    startAreaPointPlacement,
    setAreaInteractionMode,
    selectAreaPoint,
    refreshAreaHighlights,
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
    const selectedAreaId = ref(null);
    const selectedArea = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = currentScene.value) == null ? void 0 : _a.areaHighlights) == null ? void 0 : _b.find((area) => area.id === selectedAreaId.value)) != null ? _c : null;
    });
    const newAreaMode = ref("fill-outline");
    const newAreaLineWidth = ref(5);
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
          position: "bottom-left",
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
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (mode === "map") {
        ensureMapConfig();
        if ((_c = (_b = (_a = tour.value) == null ? void 0 : _a.map) == null ? void 0 : _b.floors) == null ? void 0 : _c[0]) {
          mapActiveFloorId.value = tour.value.map.floors[0].id;
        }
        nextTick(() => drawMapEditor());
      } else if (mode === "highlight") {
        (_h = selectedAreaId.value) != null ? _h : selectedAreaId.value = (_g = (_f = (_e = (_d = currentScene.value) == null ? void 0 : _d.areaHighlights) == null ? void 0 : _e[0]) == null ? void 0 : _f.id) != null ? _g : null;
        engineSetAreaInteractionMode("rotate");
        nextTick(() => {
          var _a2, _b2;
          return refreshAreaHighlights((_b2 = (_a2 = currentScene.value) == null ? void 0 : _a2.areaHighlights) != null ? _b2 : []);
        });
      } else {
        if (isDrawingArea.value || areaPointTargetId.value) engineCancelAreaDrawing();
        engineSetAreaInteractionMode("rotate");
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
    const panelImageTargetBlockId = ref(null);
    ref(null);
    const narrationTargetBlockId = ref(null);
    const uploadingImage = ref(false);
    const addingScene = ref(false);
    const uploadingNarration = ref(false);
    const uploadingPanelImage = ref(false);
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
      cameraPitch,
      cameraFov,
      interactionMode,
      lastPanoramaRotation,
      lastMarkerMoved,
      lastMarkerClicked,
      lastPlacement,
      isDrawingArea,
      areaInteractionMode,
      areaDraftPoints,
      lastAreaDrawn,
      selectedAreaId: engineSelectedAreaId,
      selectedAreaPoint,
      lastAreaPointMoved,
      lastAreaPointAdded,
      areaPointTargetId,
      loadScene: engineLoadScene,
      cancelAreaDrawing: engineCancelAreaDrawing,
      setAreaInteractionMode: engineSetAreaInteractionMode,
      selectAreaPoint: engineSelectAreaPoint,
      refreshAreaHighlights,
      refreshMarkers
    } = useDesignerEngine();
    watch(cameraFov, (fov) => {
      zoom.value = Math.round(50 + (150 - fov) / 120 * 150);
    });
    watch(lastPanoramaRotation, (rotation) => {
      if (rotation === null || !currentScene.value) return;
      currentScene.value.panoramaRotation = rotation;
      markDirty();
    });
    const lockVideoAspectRatio = ref(true);
    function navigationIsArrow(marker) {
      var _a;
      return !["local", "drone", "location-1", "location-2", "pin", "pin-top", "anchor"].includes((_a = marker.icon) != null ? _a : "arrow");
    }
    function navigationIsLocal(marker) {
      var _a;
      return ["local", "location-1", "pin"].includes((_a = marker.icon) != null ? _a : "");
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
      if (marker.plugin === "navigation" && axis === "scaleX" && navigationIsArrow(marker)) return 1.6;
      if (marker.plugin === "navigation" && axis === "scaleY" && navigationIsLocal(marker)) return 0.8;
      return 1;
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
    watch(lastAreaDrawn, (area) => {
      var _a, _b;
      if (!area || !currentScene.value) return;
      area.mode = newAreaMode.value;
      area.lineWidth = newAreaLineWidth.value;
      (_b = (_a = currentScene.value).areaHighlights) != null ? _b : _a.areaHighlights = [];
      currentScene.value.areaHighlights.push(area);
      selectedAreaId.value = area.id;
      refreshAreaHighlights(currentScene.value.areaHighlights);
      markDirty();
      showToast({ message: "\u0110\xE3 th\xEAm v\xF9ng l\xE0m n\u1ED5i b\u1EADt", variant: "default" });
    });
    watch(engineSelectedAreaId, (areaId) => {
      if (areaId) selectedAreaId.value = areaId;
    });
    let areaMoveHistoryTimer = null;
    watch(lastAreaPointMoved, (payload) => {
      if (!payload) return;
      selectedAreaId.value = payload.areaId;
      isDirty.value = true;
      if (areaMoveHistoryTimer) clearTimeout(areaMoveHistoryTimer);
      areaMoveHistoryTimer = setTimeout(() => markDirty(), 180);
    });
    watch(lastAreaPointAdded, (payload) => {
      var _a, _b;
      if (!payload || !currentScene.value) return;
      const area = (_a = currentScene.value.areaHighlights) == null ? void 0 : _a.find((item) => item.id === payload.areaId);
      if (!area) return;
      area.points.push(payload.point);
      selectedAreaId.value = area.id;
      refreshAreaHighlights((_b = currentScene.value.areaHighlights) != null ? _b : []);
      engineSelectAreaPoint(area.id, area.points.length - 1);
      markDirty();
    });
    watch(
      () => {
        var _a;
        return (_a = currentScene.value) == null ? void 0 : _a.areaHighlights;
      },
      (areas) => refreshAreaHighlights(areas != null ? areas : []),
      { deep: true }
    );
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_AdminRealMapEditor = __nuxt_component_4;
      const _component_AdminMapHeadingPreview = __nuxt_component_4;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-1f5895bc><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-1f5895bc><input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" class="hidden" data-v-1f5895bc><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-1f5895bc><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-1f5895bc><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-1f5895bc><header class="topbar" data-v-1f5895bc><div class="tb-logo" data-v-1f5895bc><div class="tb-logo-mark" data-v-1f5895bc>SV</div><div class="tb-logo-text" data-v-1f5895bc><strong data-v-1f5895bc>S\xF4ng V\xE2n Studio</strong><span data-v-1f5895bc>${ssrInterpolate((_b = (_a = tour.value) == null ? void 0 : _a.title) != null ? _b : "Kh\xF4ng gian tri\u1EC3n l\xE3m")}</span></div></div><div class="tb-breadcrumb" data-v-1f5895bc>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1f5895bc><path d="m9 18 6-6-6-6" data-v-1f5895bc></path></svg><strong id="breadcrumbTour" data-v-1f5895bc>${ssrInterpolate((_c = tour.value) == null ? void 0 : _c.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1f5895bc><path d="m9 18 6-6-6-6" data-v-1f5895bc></path></svg><span id="breadcrumbScene" data-v-1f5895bc>${ssrInterpolate((_d = currentScene.value) == null ? void 0 : _d.title)}</span></div><div class="tb-spacer" data-v-1f5895bc></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-1f5895bc><span class="dot" data-v-1f5895bc></span><span id="saveText" data-v-1f5895bc>${ssrInterpolate(saving.value ? "\u0110ang l\u01B0u..." : isDirty.value ? "C\xF3 thay \u0111\u1ED5i ch\u01B0a l\u01B0u" : "\u0110\xE3 l\u01B0u")}</span></div><div class="tb-actions" data-v-1f5895bc>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Ho\xE0n t\xE1c (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-1f5895bc${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc${_scopeId}><path d="M3 7v6h6" data-v-1f5895bc${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-1f5895bc${_scopeId}></path></svg></button>`);
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
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-1f5895bc${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc${_scopeId}><path d="M21 7v6h-6" data-v-1f5895bc${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-1f5895bc${_scopeId}></path></svg></button>`);
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
      _push(`<button class="tb-btn" id="previewBtn" data-v-1f5895bc>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-1f5895bc></path><circle cx="12" cy="12" r="3" data-v-1f5895bc></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-1f5895bc></path></svg>`);
      }
      _push(`<span data-v-1f5895bc>${ssrInterpolate(previewMode.value ? "Ch\u1EC9nh s\u1EEDa" : "Xem tr\u01B0\u1EDBc")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-1f5895bc>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-1f5895bc></path><path d="M17 21v-8H7v8" data-v-1f5895bc></path><path d="M7 3v5h8" data-v-1f5895bc></path></svg>`);
      }
      _push(`<span data-v-1f5895bc>L\u01B0u</span></button></div></header><aside class="sidebar-left" data-v-1f5895bc><div class="side-head" data-v-1f5895bc><div class="side-head-row" data-v-1f5895bc><h3 data-v-1f5895bc>Danh s\xE1ch c\u1EA3nh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Th\xEAm c\u1EA3nh m\u1EDBi",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn"${ssrIncludeBooleanAttr(addingScene.value) ? " disabled" : ""} data-v-1f5895bc${_scopeId}>`);
            if (addingScene.value) {
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "sm" }, null, _parent2, _scopeId));
            } else {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-1f5895bc${_scopeId}><path d="M12 5v14M5 12h14" data-v-1f5895bc${_scopeId}></path></svg>`);
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
      _push(`</div><p id="sceneCount" data-v-1f5895bc>${ssrInterpolate((_f = (_e = tour.value) == null ? void 0 : _e.scenes.length) != null ? _f : 0)} c\u1EA3nh \xB7 K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp</p></div><div class="scene-list" id="sceneList" data-v-1f5895bc><!--[-->`);
      ssrRenderList((_h = (_g = tour.value) == null ? void 0 : _g.scenes) != null ? _h : [], (s, idx) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-1f5895bc><span class="scene-drag" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="currentColor" data-v-1f5895bc><circle cx="9" cy="6" r="1.5" data-v-1f5895bc></circle><circle cx="15" cy="6" r="1.5" data-v-1f5895bc></circle><circle cx="9" cy="12" r="1.5" data-v-1f5895bc></circle><circle cx="15" cy="12" r="1.5" data-v-1f5895bc></circle><circle cx="9" cy="18" r="1.5" data-v-1f5895bc></circle><circle cx="15" cy="18" r="1.5" data-v-1f5895bc></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail)}${ssrRenderAttr("alt", s.title)} loading="lazy" decoding="async" data-v-1f5895bc><div class="scene-info" data-v-1f5895bc><strong data-v-1f5895bc>${ssrInterpolate(s.title)}</strong><span data-v-1f5895bc>${ssrInterpolate((_b2 = (_a2 = s.markers) == null ? void 0 : _a2.length) != null ? _b2 : 0)} \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c${ssrInterpolate(((_c2 = tour.value) == null ? void 0 : _c2.initialSceneId) === s.id ? " \xB7 \u2605 B\u1EAFt \u0111\u1EA7u" : "")}</span></div>`);
        if (((_d2 = tour.value) == null ? void 0 : _d2.initialSceneId) === s.id) {
          _push(`<span class="scene-badge" data-v-1f5895bc>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng danh s\xE1ch c\u1EA3nh" data-v-1f5895bc></div><main class="preview" data-v-1f5895bc><div class="preview-toolbar" data-v-1f5895bc><div class="editor-mode-switch" data-v-1f5895bc><button type="button" class="${ssrRenderClass({ active: editorMode.value === "panorama" })}" data-v-1f5895bc>Panorama</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "highlight" })}" data-v-1f5895bc>V\xF9ng s\xE1ng</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "map" })}" data-v-1f5895bc>B\u1EA3n \u0111\u1ED3</button></div>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-1f5895bc><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "camera" })}" data-v-1f5895bc>Xoay camera</button><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "panorama" })}" data-v-1f5895bc>Xoay panorama</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "highlight") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-1f5895bc><button type="button" class="${ssrRenderClass({ active: unref(areaInteractionMode) === "rotate" })}" data-v-1f5895bc>Xoay g\xF3c nh\xECn</button><button type="button" class="${ssrRenderClass({ active: unref(areaInteractionMode) === "edit" })}" data-v-1f5895bc>V\u1EBD / ch\u1EC9nh v\xF9ng</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="N\u1EBFu b\u1EADt, ng\u01B0\u1EDDi xem s\u1EBD quay v\u1EC1 g\xF3c n\xE0y m\u1ED7i khi \u0111i v\xE0o c\u1EA3nh" data-v-1f5895bc><label data-v-1f5895bc><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultCameraEnabled === true) ? " checked" : ""} data-v-1f5895bc><span data-v-1f5895bc>G\xF3c v\xE0o c\u1EA3nh</span></label>`);
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<button type="button" data-v-1f5895bc> L\u1EA5y g\xF3c hi\u1EC7n t\u1EA1i </button>`);
        } else {
          _push(`<!---->`);
        }
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<output data-v-1f5895bc>${ssrInterpolate(Math.round(currentScene.value.initialYaw * RAD_TO_DEG))}\xB0 / ${ssrInterpolate(Math.round(currentScene.value.initialPitch * RAD_TO_DEG))}\xB0 </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="N\u1EBFu b\u1EADt, c\u1EA3nh \xE1p d\u1EE5ng m\u1EE9c zoom n\xE0y nh\u01B0ng v\u1EABn gi\u1EEF nguy\xEAn h\u01B0\u1EDBng nh\xECn c\u1EE7a ng\u01B0\u1EDDi xem" data-v-1f5895bc><label data-v-1f5895bc><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultZoomEnabled === true) ? " checked" : ""} data-v-1f5895bc><span data-v-1f5895bc>Zoom v\xE0o c\u1EA3nh</span></label>`);
        if (currentScene.value.defaultZoomEnabled) {
          _push(`<button type="button" data-v-1f5895bc> L\u1EA5y zoom hi\u1EC7n t\u1EA1i </button>`);
        } else {
          _push(`<!---->`);
        }
        if (currentScene.value.defaultZoomEnabled) {
          _push(`<output data-v-1f5895bc>${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan(((_i = currentScene.value.initialFov) != null ? _i : 75) * Math.PI / 360)).toFixed(2))}\xD7 </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-1f5895bc><path d="M12 5v14M5 12h14" data-v-1f5895bc></path></svg><span data-v-1f5895bc>${ssrInterpolate(isPlacingHotspot.value ? "\u0110ang \u0111\u1EB7t... (ESC)" : "\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c")}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-1f5895bc>Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 ch\u1ECDn v\u1ECB tr\xED</span>`);
      } else if (unref(isDrawingArea)) {
        _push(`<span class="toolbar-hint" data-v-1f5895bc>Ch\u1ECDn \xEDt nh\u1EA5t 3 \u0111i\u1EC3m \xB7 ESC \u0111\u1EC3 h\u1EE7y</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-1f5895bc></div><div class="pt-zoom" data-v-1f5895bc><button id="zoomOut" title="Thu nh\u1ECF" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1f5895bc><path d="M5 12h14" data-v-1f5895bc></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-1f5895bc>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Ph\xF3ng to" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1f5895bc><path d="M12 5v14M5 12h14" data-v-1f5895bc></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-1f5895bc><div class="h-full w-full" style="${ssrRenderStyle({ visibility: editorMode.value === "panorama" || editorMode.value === "highlight" ? "visible" : "hidden" })}" data-v-1f5895bc></div>`);
      if (editorMode.value === "map" && tour.value) {
        _push(ssrRenderComponent(_component_AdminRealMapEditor, {
          scenes: tour.value.scenes,
          "current-scene-id": (_j = currentScene.value) == null ? void 0 : _j.id,
          onSelectScene: selectSceneFromGeoMap,
          onSetCoordinates: setSceneGeoCoordinates
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && ((_k = currentScene.value) == null ? void 0 : _k.coordinates)) {
        _push(ssrRenderComponent(_component_AdminMapHeadingPreview, {
          coordinates: currentScene.value.coordinates,
          "camera-yaw": unref(cameraYaw),
          "panorama-rotation": (_l = currentScene.value.panoramaRotation) != null ? _l : 0
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "panorama") {
        _push(`<div class="panorama-rotation-hint" data-v-1f5895bc> K\xE9o ngang \u0111\u1EC3 xoay panorama \xB7 Camera \u0111ang \u0111\u01B0\u1EE3c gi\u1EEF c\u1ED1 \u0111\u1ECBnh </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-1f5895bc> Nh\u1EA5n l\xEAn \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c \xB7 ESC \u0111\u1EC3 h\u1EE7y </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "highlight") {
        _push(`<div class="place-hint active" data-v-1f5895bc>`);
        if (unref(isDrawingArea)) {
          _push(`<!--[-->Click \u0111\u1EC3 th\xEAm node \xB7 K\xE9o node l\u1EDBn \u0111\u1EC3 ch\u1EC9nh \xB7 B\u1EA5m Ho\xE0n t\u1EA5t v\xF9ng<!--]-->`);
        } else if (unref(areaPointTargetId)) {
          _push(`<!--[-->Click v\u1ECB tr\xED mu\u1ED1n th\xEAm node \xB7 ESC \u0111\u1EC3 h\u1EE7y<!--]-->`);
        } else if (unref(areaInteractionMode) === "edit") {
          _push(`<!--[-->Camera \u0111ang kh\xF3a \xB7 K\xE9o node \u0111\u1EC3 ch\u1EC9nh h\xECnh d\u1EA1ng<!--]-->`);
        } else {
          _push(`<!--[-->K\xE9o \u0111\u1EC3 xoay g\xF3c nh\xECn \xB7 Ch\u1EBF \u0111\u1ED9 n\xE0y kh\xF4ng t\u1EA1o ho\u1EB7c k\xE9o node<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="preview-info" data-v-1f5895bc><span class="preview-info-badge" data-v-1f5895bc>C\u1EA2NH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate((_n = (_m = tour.value) == null ? void 0 : _m.scenes.length) != null ? _n : 1)}</span><span class="preview-info-title" id="infoTitle" data-v-1f5895bc>${ssrInterpolate((_o = currentScene.value) == null ? void 0 : _o.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-1f5895bc>`);
        if (isPlacingHotspot.value) {
          _push(`<!--[-->Nh\u1EA5n v\u1ECB tr\xED b\u1EA5t k\u1EF3 \u0111\u1EC3 \u0111\u1EB7t<!--]-->`);
        } else {
          _push(`<!--[--> Yaw ${ssrInterpolate((unref(cameraYaw) * RAD_TO_DEG).toFixed(1))}\xB0 \xB7 Pitch ${ssrInterpolate((unref(cameraPitch) * RAD_TO_DEG).toFixed(1))}\xB0 \xB7 Zoom ${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan(unref(cameraFov) * Math.PI / 360)).toFixed(2))}\xD7 \xB7 FOV ${ssrInterpolate(unref(cameraFov).toFixed(1))}\xB0 <!--]-->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="resizer resizer-right" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng b\u1EA3ng thu\u1ED9c t\xEDnh" data-v-1f5895bc></div><aside class="inspector sidebar-right" data-v-1f5895bc>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="insp-tabs" data-v-1f5895bc><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-1f5895bc> C\u1EA3nh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-1f5895bc> \u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-1f5895bc> C\xE0i \u0111\u1EB7t </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="insp-body" id="inspBody" data-v-1f5895bc>`);
      if (editorMode.value === "panorama" && currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Th\xF4ng tin c\u1EA3nh</div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>T\xEAn c\u1EA3nh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>M\xF4 t\u1EA3 ng\u1EAFn</label><textarea id="fieldDesc" data-v-1f5895bc>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>\u1EA2nh panorama</div><div class="img-picker" id="imgPicker" title="Nh\u1EA5n \u0111\u1EC3 t\u1EA3i \u1EA3nh panorama t\u1EEB m\xE1y t\xEDnh" data-v-1f5895bc>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.thumbnail || currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} decoding="async" data-v-1f5895bc>`);
        } else {
          _push(`<div class="image-error" data-v-1f5895bc>Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh. H\xE3y ki\u1EC3m tra \u0111\u01B0\u1EDDng d\u1EABn ho\u1EB7c t\u1EA3i \u1EA3nh m\u1EDBi.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-1f5895bc>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-1f5895bc></path><polyline points="17 8 12 3 7 8" data-v-1f5895bc></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-1f5895bc></line></svg><span data-v-1f5895bc>${ssrInterpolate(uploadingImage.value ? "\u0110ang t\u1EA3i l\xEAn..." : "\u0110\u1ED5i \u1EA3nh (T\u1EA3i l\xEAn)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-1f5895bc><label data-v-1f5895bc>URL \u1EA3nh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... ho\u1EB7c /uploads/..." data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>URL \u1EA3nh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... ho\u1EB7c /thumbnails/..." data-v-1f5895bc></div><div class="hint-text" data-v-1f5895bc>\u{1F4A1} Nh\u1EA5n v\xE0o \xF4 xem tr\u01B0\u1EDBc \u0111\u1EC3 ch\u1ECDn file t\u1EEB m\xE1y t\xEDnh ho\u1EB7c d\xE1n \u0111\u01B0\u1EDDng d\u1EABn URL tr\u1EF1c ti\u1EBFp.</div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>\xC1nh s\xE1ng h\xECnh \u1EA3nh</div><div class="brightness-control" data-v-1f5895bc><input${ssrRenderAttr("value", (_p = currentScene.value.brightness) != null ? _p : 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-1f5895bc><output data-v-1f5895bc>${ssrInterpolate(Math.round(((_q = currentScene.value.brightness) != null ? _q : 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-1f5895bc><button type="button" data-v-1f5895bc>G\u1ED1c</button><button type="button" data-v-1f5895bc>M\u1EB7c \u0111\u1ECBnh</button><button type="button" data-v-1f5895bc>S\xE1ng r\xF5</button></div><label class="sub-control-label" data-v-1f5895bc>Gi\u1EA3m v\xF9ng ch\xF3i</label><div class="brightness-control" data-v-1f5895bc><input${ssrRenderAttr("value", (_r = currentScene.value.highlightCompression) != null ? _r : 0)} type="range" min="0" max="1" step="0.05" data-v-1f5895bc><output data-v-1f5895bc>${ssrInterpolate(Math.round(((_s = currentScene.value.highlightCompression) != null ? _s : 0) * 100))}%</output></div><div class="brightness-presets" data-v-1f5895bc><button type="button" data-v-1f5895bc>T\u1EAFt</button><button type="button" data-v-1f5895bc>Nh\u1EB9</button><button type="button" data-v-1f5895bc>M\u1EA1nh</button></div><div class="hint-text" data-v-1f5895bc>Ch\u1EC9 n\xE9n v\xF9ng tr\u1EDDi v\xE0 ngu\u1ED3n s\xE1ng g\u1EAFt; kh\xF4ng thay \u0111\u1ED5i file \u1EA3nh g\u1ED1c.</div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>V\u1ECB tr\xED trong tour</div><div class="field-row" data-v-1f5895bc><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Th\u1EE9 t\u1EF1</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", (_t = tour.value) == null ? void 0 : _t.scenes.length)} data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-1f5895bc></div></div><div class="toggle-row" data-v-1f5895bc><label for="isStartToggle" data-v-1f5895bc>\u0110\u1EB7t l\xE0m c\u1EA3nh b\u1EAFt \u0111\u1EA7u</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": ((_u = tour.value) == null ? void 0 : _u.initialSceneId) === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-1f5895bc><button class="btn-block danger" id="deleteSceneBtn" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M3 6h18" data-v-1f5895bc></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-1f5895bc></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-1f5895bc></path></svg> X\xF3a c\u1EA3nh n\xE0y </button></div><!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc><span data-v-1f5895bc>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c trong c\u1EA3nh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-1f5895bc><circle cx="12" cy="12" r="10" data-v-1f5895bc></circle><path d="M12 8v8M8 12h8" data-v-1f5895bc></path></svg> Ch\u01B0a c\xF3 \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c n\xE0o.<br data-v-1f5895bc>Nh\u1EA5n \u201C\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c\u201D \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-1f5895bc><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-1f5895bc><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-1f5895bc>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M12 4 L12 18" data-v-1f5895bc></path><path d="M6 11 L12 5 L18 11" data-v-1f5895bc></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-1f5895bc><path d="M8 5v14l11-7z" data-v-1f5895bc></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-1f5895bc><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-1f5895bc></path><path d="M12 22V12M3 7l9 5 9-5" data-v-1f5895bc></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-1f5895bc><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-1f5895bc></circle><path d="M12 11 L12 18" data-v-1f5895bc></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-1f5895bc>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-1f5895bc><path d="M18 6 6 18" data-v-1f5895bc></path><path d="m6 6 12 12" data-v-1f5895bc></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-1f5895bc><path d="M12 5v14M5 12h14" data-v-1f5895bc></path></svg> Th\xEAm \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Ch\u1EC9nh s\u1EEDa \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c</div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Nh\xE3n hi\u1EC3n th\u1ECB</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-1f5895bc></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>C\u1EA3nh \u0111\xEDch</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-1f5895bc><option value="" disabled data-v-1f5895bc>\u2014 Ch\u1ECDn c\u1EA3nh \u2014</option><!--[-->`);
            ssrRenderList((_w = (_v = tour.value) == null ? void 0 : _v.scenes) != null ? _w : [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-1f5895bc>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Ki\u1EC3u hi\u1EC3n th\u1ECB</label><div class="nav-icon-mode-toggle" data-v-1f5895bc><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["arrow", "arrow-1", "arrow-2"].includes((_x = selectedHotspot.value.icon) != null ? _x : "arrow") }])}" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "width": "18px", "height": "18px" })}" data-v-1f5895bc><path d="m5 15 7-6 7 6" data-v-1f5895bc></path><path d="m5 21 7-6 7 6" data-v-1f5895bc></path></svg> M\u0169i t\xEAn </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["local", "location-1", "pin"].includes((_y = selectedHotspot.value.icon) != null ? _y : "") }])}" data-v-1f5895bc><svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "16px", "height": "20px" })}" data-v-1f5895bc><path d="M12 26S3 17.2 3 10a9 9 0 1 1 18 0c0 7.2-9 16-9 16Z" data-v-1f5895bc></path><circle cx="12" cy="10" r="3.5" data-v-1f5895bc></circle></svg> Local </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["drone", "location-2", "pin-top", "anchor"].includes((_z = selectedHotspot.value.icon) != null ? _z : "") }])}" data-v-1f5895bc><svg viewBox="0 0 24 30" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "15px", "height": "21px" })}" data-v-1f5895bc><path d="M12 28C10.5 21 4 17 4 9.5a8 8 0 1 1 16 0C20 17 13.5 21 12 28Z" data-v-1f5895bc></path><circle cx="12" cy="9.5" r="3" data-v-1f5895bc></circle></svg> Drone </button></div></div>`);
            if (!navigationIsArrow(selectedHotspot.value)) {
              _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>Font ti\xEAu \u0111\u1EC1 tr\xEAn View</label><select${ssrRenderAttr("value", (_A = selectedHotspot.value.labelFont) != null ? _A : "be-vietnam-pro")} data-v-1f5895bc><option value="be-vietnam-pro" data-v-1f5895bc>Be Vietnam Pro</option><option value="outfit" data-v-1f5895bc>Outfit</option><option value="montserrat" data-v-1f5895bc>Montserrat</option><option value="serif" data-v-1f5895bc>Serif ngh\u1EC7 thu\u1EADt</option></select><div class="hint-text" data-v-1f5895bc>Font ch\u1EC9 \xE1p d\u1EE5ng cho ti\xEAu \u0111\u1EC1 \u0111i k\xE8m leader line \u1EDF trang View.</div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (["local", "drone", "location-1", "location-2", "pin", "pin-top", "anchor"].includes((_B = selectedHotspot.value.icon) != null ? _B : "")) {
              _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>M\xE0u pin</label><div class="pin-color-row" data-v-1f5895bc><input type="color"${ssrRenderAttr("value", (_C = selectedHotspot.value.pinColor) != null ? _C : "#171717")} data-v-1f5895bc><div class="pin-color-presets" data-v-1f5895bc><!--[-->`);
              ssrRenderList(["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#1d6fa8", "#171717"], (c) => {
                _push(`<button type="button" style="${ssrRenderStyle({ background: c })}" class="${ssrRenderClass([{ active: selectedHotspot.value.pinColor === c }, "pin-color-swatch"])}" data-v-1f5895bc></button>`);
              });
              _push(`<!--]--></div></div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u1EA2nh b\xEAn trong pin <span style="${ssrRenderStyle({ "opacity": ".5", "font-weight": "400" })}" data-v-1f5895bc>(tu\u1EF3 ch\u1ECDn)</span></label><input${ssrRenderAttr("value", (_D = selectedHotspot.value.iconUrl) != null ? _D : "")} type="text" placeholder="/thumbnails/scene.jpg ho\u1EB7c \u0111\u1EC3 tr\u1ED1ng" data-v-1f5895bc><div class="hint-text" data-v-1f5895bc>\u0110\u1EC3 tr\u1ED1ng = pin tr\u1EAFng tr\u01A1n. C\xF3 \u1EA3nh = thumbnail tr\xF2n b\xEAn trong pin.</div></div>`);
              if (selectedHotspot.value.targetScene) {
                _push(`<div class="field" data-v-1f5895bc><button type="button" class="btn-fill-thumb" data-v-1f5895bc> \u{1F4F7} D\xF9ng thumbnail c\u1EA3nh \u0111\xEDch </button></div>`);
              } else {
                _push(`<!---->`);
              }
              if (selectedHotspot.value.iconUrl) {
                _push(`<div class="field nav-icon-preview" data-v-1f5895bc><label data-v-1f5895bc>Xem tr\u01B0\u1EDBc \u1EA3nh</label><div class="nav-icon-preview-frame" data-v-1f5895bc><img${ssrRenderAttr("src", selectedHotspot.value.iconUrl)} alt="Xem tr\u01B0\u1EDBc \u1EA3nh trong pin" data-v-1f5895bc></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc> K\xEDch th\u01B0\u1EDBc pin <span class="field-badge" data-v-1f5895bc>${ssrInterpolate((_E = selectedHotspot.value.iconSize) != null ? _E : 65)}px</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="35" max="150" step="5"${ssrRenderAttr("value", (_F = selectedHotspot.value.iconSize) != null ? _F : 65)} data-v-1f5895bc><button class="reset-btn" type="button" title="V\u1EC1 65" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>K\xEDch th\u01B0\u1EDBc pin trong kh\xF4ng gian 3D (world units). M\u1EB7c \u0111\u1ECBnh: 65.</div></div><!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc> \u0110\u1ED9 s\xE2u tr\xEAn m\u1EB7t c\u1EA7u 3D <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(Math.round((_G = selectedHotspot.value.sphereRadius) != null ? _G : 520))}</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="120" max="580" step="5"${ssrRenderAttr("value", (_H = selectedHotspot.value.sphereRadius) != null ? _H : 520)} data-v-1f5895bc><button class="reset-btn" type="button" title="V\u1EC1 m\u1EB7t c\u1EA7u m\u1EB7c \u0111\u1ECBnh" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>120 = g\u1EA7n camera; 520 = m\u1EB7c \u0111\u1ECBnh; 580 = s\xE1t b\u1EC1 m\u1EB7t panorama.</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" && ["arrow", "arrow-1", "arrow-2"].includes((_I = selectedHotspot.value.icon) != null ? _I : "arrow")) {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc> Xoay (Z) \u2014 chi\u1EC1u nghi\xEAng <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotZ"))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotZ"))} data-v-1f5895bc><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>0\xB0 = ^^ h\u01B0\u1EDBng l\xEAn. 90\xB0 = ph\u1EA3i. -90\xB0 = tr\xE1i.</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc> Nghi\xEAng (X) \u2014 \u0111\u1EE9ng / n\u1EB1m <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotX"))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotX"))} data-v-1f5895bc><button class="reset-btn" title="V\u1EC1 60\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>M\u1EB7c \u0111\u1ECBnh 60\xB0 \u0111\u1EC3 m\u0169i t\xEAn n\u1EB1m theo m\u1EB7t s\xE0n. 0\xB0 = \u0111\u1EE9ng th\u1EB3ng.</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc> Xoay ngang (Y) \u2014 quay m\u1EB7t <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotY"))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotY"))} data-v-1f5895bc><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>Xoay m\u1EB7t m\u0169i t\xEAn sang tr\xE1i/ph\u1EA3i trong kh\xF4ng gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc> Ph\xF3ng ngang (X) <span class="field-badge" data-v-1f5895bc>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleX") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleX"))} data-v-1f5895bc><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsArrow(selectedHotspot.value) ? "V\u1EC1 160%" : "V\u1EC1 100%")} data-v-1f5895bc>\u21BA</button></div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc> Ph\xF3ng d\u1ECDc (Y) <span class="field-badge" data-v-1f5895bc>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleY") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleY"))} data-v-1f5895bc><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsLocal(selectedHotspot.value) ? "V\u1EC1 80%" : "V\u1EC1 100%")} data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>X v\xE0 Y thay \u0111\u1ED5i \u0111\u1ED9c l\u1EADp; marker m\u1EB7t ph\u1EB3ng kh\xF4ng s\u1EED d\u1EE5ng chi\u1EC1u s\xE2u Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>H\u01B0\u1EDBng hi\u1EC3n th\u1ECB panel</label><select${ssrRenderAttr("value", (_J = selectedHotspot.value.placement) != null ? _J : "vertical")} data-v-1f5895bc><option value="vertical" data-v-1f5895bc>Chi\u1EC1u d\u1ECDc</option><option value="horizontal" data-v-1f5895bc>Chi\u1EC1u ngang</option></select><div class="hint-text" data-v-1f5895bc>H\u1EC7 th\u1ED1ng t\u1EF1 ch\u1ECDn tr\xEAn/d\u01B0\u1EDBi ho\u1EB7c tr\xE1i/ph\u1EA3i theo kho\u1EA3ng tr\u1ED1ng c\xF2n l\u1EA1i.</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>N\u1ED9i dung trong panel</label><div class="video-size-presets" data-v-1f5895bc><button type="button" data-v-1f5895bc>+ V\u0103n b\u1EA3n</button><button type="button" data-v-1f5895bc>+ \u1EA2nh 2D</button><button type="button" data-v-1f5895bc>+ \u1EA2nh 3D</button><button type="button" data-v-1f5895bc>+ \xC2m thanh</button><button type="button" data-v-1f5895bc>+ AI Chat</button></div><div class="hint-text" data-v-1f5895bc>C\xF3 th\u1EC3 k\u1EBFt h\u1EE3p nhi\u1EC1u lo\u1EA1i v\xE0 thay \u0111\u1ED5i th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2;
              _push(`<div class="field panel-block-editor" data-v-1f5895bc><label data-v-1f5895bc>${ssrInterpolate(block.type === "text" ? "V\u0103n b\u1EA3n" : block.type === "image" ? "\u1EA2nh 2D" : block.type === "image3d" ? "\u1EA2nh 3D" : block.type === "audio" ? "\xC2m thanh" : "AI Chat")} <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="N\u1ED9i dung m\xF4 t\u1EA3..." data-v-1f5895bc>${ssrInterpolate(block.content)}</textarea><label data-v-1f5895bc>Ch\u1EBF \u0111\u1ED9 hi\u1EC3n th\u1ECB</label><select${ssrRenderAttr("value", (_a2 = block.presentation) != null ? _a2 : "text-only")} data-v-1f5895bc><option value="text-only" data-v-1f5895bc>Ch\u1EC9 v\u0103n b\u1EA3n</option><option value="text-and-audio" data-v-1f5895bc>V\u0103n b\u1EA3n v\xE0 b\u1EA3n \u0111\u1ECDc</option><option value="audio-only" data-v-1f5895bc>Ch\u1EC9 b\u1EA3n \u0111\u1ECDc</option></select>`);
                if (((_b2 = block.presentation) != null ? _b2 : "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-1f5895bc>File b\u1EA3n \u0111\u1ECDc (VieNeu-TTS)</label><input${ssrRenderAttr("value", (_d2 = (_c2 = block.speech) == null ? void 0 : _c2.src) != null ? _d2 : "")} type="text" placeholder="/uploads/audio/ban-doc.wav ho\u1EB7c URL" data-v-1f5895bc><div class="video-size-presets" data-v-1f5895bc><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-1f5895bc>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "\u0110ang t\u1EA3i..." : "T\u1EA3i file b\u1EA3n \u0111\u1ECDc")}</button>`);
                  if ((_e2 = block.speech) == null ? void 0 : _e2.src) {
                    _push(`<button type="button" data-v-1f5895bc>B\u1ECF file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if ((_f2 = block.speech) == null ? void 0 : _f2.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-1f5895bc></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-1f5895bc>Xu\u1EA5t WAV/MP3 t\u1EEB VieNeu-TTS r\u1ED3i t\u1EA3i l\xEAn \u0111\xE2y. Khi c\xF3 file, thanh ti\u1EBFn tr\xECnh s\u1EBD d\xF9ng \u0111\xFAng th\u1EDDi l\u01B0\u1EE3ng audio.</div>`);
                  if (!((_g2 = block.speech) == null ? void 0 : _g2.src)) {
                    _push(`<details data-v-1f5895bc><summary data-v-1f5895bc>Gi\u1ECDng tr\xECnh duy\u1EC7t d\u1EF1 ph\xF2ng</summary><select${ssrRenderAttr("value", (_i2 = (_h2 = block.speech) == null ? void 0 : _h2.lang) != null ? _i2 : "vi-VN")} data-v-1f5895bc><option value="vi-VN" data-v-1f5895bc>Ti\u1EBFng Vi\u1EC7t</option><option value="en-US" data-v-1f5895bc>English (US)</option><option value="en-GB" data-v-1f5895bc>English (UK)</option><option value="fr-FR" data-v-1f5895bc>Fran\xE7ais</option><option value="ja-JP" data-v-1f5895bc>\u65E5\u672C\u8A9E</option><option value="ko-KR" data-v-1f5895bc>\uD55C\uAD6D\uC5B4</option></select><label data-v-1f5895bc>T\u1ED1c \u0111\u1ED9 <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(((_k2 = (_j2 = block.speech) == null ? void 0 : _j2.rate) != null ? _k2 : 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_m2 = (_l2 = block.speech) == null ? void 0 : _l2.rate) != null ? _m2 : 1)} data-v-1f5895bc><label data-v-1f5895bc>Cao \u0111\u1ED9 <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(((_o2 = (_n2 = block.speech) == null ? void 0 : _n2.pitch) != null ? _o2 : 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_q2 = (_p2 = block.speech) == null ? void 0 : _p2.pitch) != null ? _q2 : 1)} data-v-1f5895bc><div class="hint-text" data-v-1f5895bc>Gi\u1ECDng \u0111\u1ECDc th\u1EF1c t\u1EBF ph\u1EE5 thu\u1ED9c v\xE0o gi\u1ECDng c\xF3 s\u1EB5n tr\xEAn thi\u1EBFt b\u1ECB ng\u01B0\u1EDDi xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-1f5895bc><div class="video-size-presets" data-v-1f5895bc><button type="button"${ssrIncludeBooleanAttr(uploadingPanelImage.value) ? " disabled" : ""} data-v-1f5895bc>${ssrInterpolate(uploadingPanelImage.value && panelImageTargetBlockId.value === block.id ? "\u0110ang t\u1EA3i..." : "T\u1EA3i \u1EA3nh 2D")}</button>`);
                if (block.src) {
                  _push(`<button type="button" data-v-1f5895bc>B\u1ECF \u1EA3nh</button>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
                if (block.src) {
                  _push(`<img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt || block.caption || "\u1EA2nh xem tr\u01B0\u1EDBc")} class="max-h-48 w-full rounded-lg bg-black/20 object-contain" data-v-1f5895bc>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<input${ssrRenderAttr("value", block.alt)} type="text" placeholder="M\xF4 t\u1EA3 \u1EA3nh cho tr\u1EE3 n\u0103ng" data-v-1f5895bc><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Ch\xFA th\xEDch \u1EA3nh (kh\xF4ng b\u1EAFt bu\u1ED9c)" data-v-1f5895bc><!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-1f5895bc><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Ch\xFA th\xEDch \u1EA3nh (kh\xF4ng b\u1EAFt bu\u1ED9c)" data-v-1f5895bc><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 ho\u1EB7c URL" data-v-1f5895bc><div class="hint-text" data-v-1f5895bc>AudioBlock ch\u1EC9 ph\xE1t t\u1EC7p \xE2m thanh \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn ho\u1EB7c nh\u1EADp b\u1EB1ng URL; kh\u1ED1i n\xE0y kh\xF4ng t\u1EA1o gi\u1ECDng \u0111\u1ECDc t\u1EEB v\u0103n b\u1EA3n.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ng\u1EEF c\u1EA3nh d\xE0nh cho AI..." data-v-1f5895bc>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-1f5895bc><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-1f5895bc>\u2191 L\xEAn</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-1f5895bc>\u2193 Xu\u1ED1ng</button><button type="button" data-v-1f5895bc>X\xF3a</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>N\u1ED9i dung th\xF4ng tin</label><textarea placeholder="M\xF4 t\u1EA3 chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m..." data-v-1f5895bc>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u0110\u01B0\u1EDDng d\u1EABn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo ho\u1EB7c /video.mp4" data-v-1f5895bc><div class="hint-text" data-v-1f5895bc>YouTube, Vimeo v\xE0 video tr\u1EF1c ti\u1EBFp \u0111\u1EC1u hi\u1EC3n th\u1ECB ngay trong panorama.</div></div><div class="field video-panel-size" data-v-1f5895bc><label data-v-1f5895bc>K\xEDch th\u01B0\u1EDBc panel</label><div class="video-size-presets" data-v-1f5895bc><button type="button" data-v-1f5895bc>Nh\u1ECF</button><button type="button" data-v-1f5895bc>V\u1EEBa</button><button type="button" data-v-1f5895bc>L\u1EDBn</button><button type="button" data-v-1f5895bc>R\u1EA5t l\u1EDBn</button></div><div class="video-size-row" data-v-1f5895bc><span data-v-1f5895bc>R\u1ED9ng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", (_K = selectedHotspot.value.width) != null ? _K : 640)} data-v-1f5895bc><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", (_L = selectedHotspot.value.width) != null ? _L : 640)} data-v-1f5895bc></div><div class="video-size-row" data-v-1f5895bc><span data-v-1f5895bc>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", (_M = selectedHotspot.value.height) != null ? _M : 360)} data-v-1f5895bc><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", (_N = selectedHotspot.value.height) != null ? _N : 360)} data-v-1f5895bc></div><label class="video-ratio-lock" data-v-1f5895bc><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-1f5895bc> Gi\u1EEF nguy\xEAn t\u1EC9 l\u1EC7 khung h\xECnh </label><div class="hint-text" data-v-1f5895bc>K\xEDch th\u01B0\u1EDBc hi\u1EC7n t\u1EA1i: ${ssrInterpolate((_O = selectedHotspot.value.width) != null ? _O : 640)} \xD7 ${ssrInterpolate((_P = selectedHotspot.value.height) != null ? _P : 360)} px</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Xoay ngang (Y) <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(Math.round(((_Q = selectedHotspot.value.rotY) != null ? _Q : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_R = selectedHotspot.value.rotY) != null ? _R : 0) * 180 / Math.PI))} data-v-1f5895bc><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>Quay c\u1EA1nh tr\xE1i ho\u1EB7c ph\u1EA3i c\u1EE7a m\xE0n h\xECnh ra xa ng\u01B0\u1EDDi xem.</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Nghi\xEAng (X) <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(Math.round(((_S = selectedHotspot.value.rotX) != null ? _S : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_T = selectedHotspot.value.rotX) != null ? _T : 0) * 180 / Math.PI))} data-v-1f5895bc><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>Ng\u1EA3 m\xE0n h\xECnh l\xEAn ho\u1EB7c xu\u1ED1ng trong kh\xF4ng gian 3D.</div></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Xoay m\u1EB7t ph\u1EB3ng (Z) <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(Math.round(((_U = selectedHotspot.value.rotZ) != null ? _U : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-1f5895bc><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round(((_V = selectedHotspot.value.rotZ) != null ? _V : 0) * 180 / Math.PI))} data-v-1f5895bc><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-1f5895bc>\u21BA</button></div><div class="hint-text" data-v-1f5895bc>Xoay panel theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3 ho\u1EB7c ng\u01B0\u1EE3c l\u1EA1i.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u1EA2nh 3D / \u1EA3nh 360\xB0 c\u1EE7a v\u1EADt th\u1EC3</label><button class="model-image-picker" type="button" data-v-1f5895bc>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="\u1EA2nh v\u1EADt th\u1EC3" data-v-1f5895bc>`);
            } else {
              _push(`<span data-v-1f5895bc>Ch\u1ECDn \u1EA3nh \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF chu\u1EA9n b\u1ECB</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>M\xF4 t\u1EA3 v\u1EADt th\u1EC3</label><textarea placeholder="T\xEAn t\xE1c ph\u1EA9m, ch\u1EA5t li\u1EC7u, t\xE1c gi\u1EA3..." data-v-1f5895bc>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-1f5895bc>\u1EE8ng d\u1EE5ng ch\u1EC9 hi\u1EC3n th\u1ECB \u1EA3nh do ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF cung c\u1EA5p, kh\xF4ng t\u1EF1 t\u1EA1o m\xF4 h\xECnh 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-1f5895bc><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-1f5895bc></div></div><div class="hint-text" data-v-1f5895bc>\u{1F4A1} K\xE9o tr\u1EF1c ti\u1EBFp \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c tr\xEAn \u1EA3nh panorama \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Ch\u1EBF \u0111\u1ED9 tour</div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Ki\u1EC3u tr\u1EA3i nghi\u1EC7m</label><select${ssrRenderAttr("value", (_W = tour.value.mode) != null ? _W : "free")} data-v-1f5895bc><option value="free" data-v-1f5895bc>T\u1EF1 do kh\xE1m ph\xE1</option><option value="guided" data-v-1f5895bc>C\xF3 h\u01B0\u1EDBng d\u1EABn (t\u1EF1 chuy\u1EC3n c\u1EA3nh)</option></select></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Th\u1EDDi gian m\u1ED7i c\u1EA3nh (gi\xE2y)</label><input${ssrRenderAttr("value", (_X = tour.value.guidedDuration) != null ? _X : 8)} type="number" min="3" max="60" data-v-1f5895bc></div><div class="hint-text" data-v-1f5895bc>\u1EDE ch\u1EBF \u0111\u1ED9 c\xF3 h\u01B0\u1EDBng d\u1EABn, tour t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n sang c\u1EA3nh ti\u1EBFp theo sau th\u1EDDi gian n\xE0y.</div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>C\u1EA3nh b\u1EAFt \u0111\u1EA7u</div><div class="field" data-v-1f5895bc><select${ssrRenderAttr("value", (_Z = tour.value.initialSceneId) != null ? _Z : (_Y = tour.value.scenes[0]) == null ? void 0 : _Y.id)} data-v-1f5895bc><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-1f5895bc>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>T\xF9y ch\u1ECDn hi\u1EC3n th\u1ECB</div><div class="toggle-row" data-v-1f5895bc><label data-v-1f5895bc>T\u1EF1 \u0111\u1ED9ng xoay \u1EA3nh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-1f5895bc><label data-v-1f5895bc>Hi\u1EC7n b\u1EA3n \u0111\u1ED3 nh\u1ECF</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value.showMinimap !== false,
          "onUpdate:modelValue": (val) => {
            tour.value.showMinimap = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      } else if (editorMode.value === "highlight" && currentScene.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-1f5895bc><strong data-v-1f5895bc>Bi\xEAn t\u1EADp v\xF9ng s\xE1ng</strong><span data-v-1f5895bc>V\u1EBD v\xE0 k\xE9o c\xE1c node tr\u1EF1c ti\u1EBFp tr\xEAn panorama</span></div><div class="insp-section" data-v-1f5895bc>`);
        if (!unref(isDrawingArea)) {
          _push(`<!--[--><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Ki\u1EC3u v\xF9ng m\u1EDBi</label><select data-v-1f5895bc><option value="fill-outline" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "fill-outline") : ssrLooseEqual(newAreaMode.value, "fill-outline")) ? " selected" : ""}>T\xF4 khu v\u1EF1c v\xE0 s\xE1ng \u0111\u01B0\u1EDDng vi\u1EC1n</option><option value="fill" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "fill") : ssrLooseEqual(newAreaMode.value, "fill")) ? " selected" : ""}>Ch\u1EC9 t\xF4 s\xE1ng khu v\u1EF1c</option><option value="outline" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "outline") : ssrLooseEqual(newAreaMode.value, "outline")) ? " selected" : ""}>Ch\u1EC9 t\xF4 s\xE1ng \u0111\u01B0\u1EDDng vi\u1EC1n</option></select></div>`);
          if (newAreaMode.value !== "fill") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u0110\u1ED9 r\u1ED9ng vi\u1EC1n ban \u0111\u1EA7u <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(newAreaLineWidth.value)} px</span></label><input${ssrRenderAttr("value", newAreaLineWidth.value)} type="range" min="1" max="24" step="1" data-v-1f5895bc></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="btn-block primary" type="button" data-v-1f5895bc>${ssrInterpolate(unref(isDrawingArea) ? `Ho\xE0n t\u1EA5t v\xE0 l\u01B0u v\xF9ng (${unref(areaDraftPoints).length} node)` : "\uFF0B T\u1EA1o v\xF9ng")}</button>`);
        if (unref(isDrawingArea)) {
          _push(`<button class="btn-block mt-2" type="button" data-v-1f5895bc>H\u1EE7y t\u1EA1o v\xF9ng</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="hint-text" data-v-1f5895bc>Ch\u1ECDn ki\u1EC3u tr\u01B0\u1EDBc, sau \u0111\xF3 ch\u1EA5m \xEDt nh\u1EA5t 3 node. Sau khi t\u1EA1o, k\xE9o tr\u1EF1c ti\u1EBFp c\xE1c node tr\u1EAFng l\u1EDBn \u0111\u1EC3 s\u1EEDa \u0111i\u1EC3m v\u1EBD sai.</div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>V\xF9ng \u0111\xE3 t\u1EA1o (${ssrInterpolate((_$ = (__ = currentScene.value.areaHighlights) == null ? void 0 : __.length) != null ? _$ : 0)})</div>`);
        if (!((_aa = currentScene.value.areaHighlights) == null ? void 0 : _aa.length)) {
          _push(`<div class="empty-state-mini" data-v-1f5895bc>Ch\u01B0a c\xF3 v\xF9ng s\xE1ng.</div>`);
        } else {
          _push(`<div class="area-tree" data-v-1f5895bc><!--[-->`);
          ssrRenderList(currentScene.value.areaHighlights, (area, index) => {
            var _a2;
            _push(`<div class="area-tree-group" data-v-1f5895bc><button type="button" class="${ssrRenderClass([{ active: area.id === selectedAreaId.value }, "map-node-item area-list-item"])}" data-v-1f5895bc><span class="area-tree-chevron" data-v-1f5895bc>${ssrInterpolate(area.id === selectedAreaId.value ? "\u25BE" : "\u25B8")}</span><span class="map-node-dot" style="${ssrRenderStyle({ background: (_a2 = area.color) != null ? _a2 : "#22c55e" })}" data-v-1f5895bc></span><span class="map-node-name" data-v-1f5895bc>V\xF9ng ${ssrInterpolate(index + 1)}</span><span class="map-node-coords" data-v-1f5895bc>${ssrInterpolate(area.points.length)} node</span></button>`);
            if (area.id === selectedAreaId.value) {
              _push(`<div class="area-tree-nodes" data-v-1f5895bc><!--[-->`);
              ssrRenderList(area.points, (point, pointIndex) => {
                var _a3, _b2;
                _push(`<button type="button" class="${ssrRenderClass([{ active: ((_a3 = unref(selectedAreaPoint)) == null ? void 0 : _a3.areaId) === area.id && unref(selectedAreaPoint).pointIndex === pointIndex }, "map-node-item area-node-item"])}" data-v-1f5895bc><span class="map-node-dot" style="${ssrRenderStyle(((_b2 = unref(selectedAreaPoint)) == null ? void 0 : _b2.areaId) === area.id && unref(selectedAreaPoint).pointIndex === pointIndex ? { background: "#ff8a00" } : void 0)}" data-v-1f5895bc></span><span class="map-node-name" data-v-1f5895bc>Node ${ssrInterpolate(pointIndex + 1)}</span><span class="map-node-coords" data-v-1f5895bc>${ssrInterpolate((point.yaw * RAD_TO_DEG).toFixed(1))}\xB0 / ${ssrInterpolate((point.pitch * RAD_TO_DEG).toFixed(1))}\xB0</span><span class="hotspot-row-delete" role="button" tabindex="0" data-v-1f5895bc>\xD7</span></button>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
        if (selectedArea.value) {
          _push(`<!--[--><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Ki\u1EC3u l\xE0m n\u1ED5i b\u1EADt</div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Th\xE0nh ph\u1EA7n hi\u1EC3n th\u1ECB</label><select data-v-1f5895bc><option value="fill-outline" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "fill-outline") : ssrLooseEqual(selectedArea.value.mode, "fill-outline")) ? " selected" : ""}>T\xF4 khu v\u1EF1c v\xE0 s\xE1ng \u0111\u01B0\u1EDDng vi\u1EC1n</option><option value="fill" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "fill") : ssrLooseEqual(selectedArea.value.mode, "fill")) ? " selected" : ""}>Ch\u1EC9 t\xF4 s\xE1ng khu v\u1EF1c</option><option value="outline" data-v-1f5895bc${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "outline") : ssrLooseEqual(selectedArea.value.mode, "outline")) ? " selected" : ""}>Ch\u1EC9 l\xE0m s\xE1ng \u0111\u01B0\u1EDDng vi\u1EC1n</option></select></div><div class="field-row" data-v-1f5895bc>`);
          if (selectedArea.value.mode !== "outline") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>M\xE0u khu v\u1EF1c</label><input${ssrRenderAttr("value", selectedArea.value.color)} type="color" data-v-1f5895bc></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedArea.value.mode !== "fill") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>M\xE0u \u0111\u01B0\u1EDDng vi\u1EC1n</label><input${ssrRenderAttr("value", selectedArea.value.outlineColor)} type="color" data-v-1f5895bc></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (selectedArea.value.mode !== "outline") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u0110\u1ED9 s\xE1ng v\xF9ng <span class="field-badge" data-v-1f5895bc>${ssrInterpolate(Math.round(((_ba = selectedArea.value.opacity) != null ? _ba : 0.34) * 100))}%</span></label><input${ssrRenderAttr("value", selectedArea.value.opacity)} type="range" min="0.05" max="0.9" step="0.05" data-v-1f5895bc></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedArea.value.mode !== "fill") {
            _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>\u0110\u1ED9 r\u1ED9ng \u0111\u01B0\u1EDDng s\xE1ng <span class="field-badge" data-v-1f5895bc>${ssrInterpolate((_ca = selectedArea.value.lineWidth) != null ? _ca : 5)} px</span></label><input${ssrRenderAttr("value", selectedArea.value.lineWidth)} type="range" min="1" max="24" step="1" data-v-1f5895bc></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field" data-v-1f5895bc><label data-v-1f5895bc>Th\u1EDDi gian ch\u1EA1y \u0111\u01B0\u1EDDng s\xE1ng <span class="field-badge" data-v-1f5895bc>${ssrInterpolate((_da = selectedArea.value.durationMs) != null ? _da : 1400)} ms</span></label><input${ssrRenderAttr("value", selectedArea.value.durationMs)} type="range" min="400" max="4000" step="100" data-v-1f5895bc></div><div class="hint-text" data-v-1f5895bc>\u0110\u01B0\u1EDDng s\xE1ng ch\u1EA1y h\u1EBFt chu vi, sau \u0111\xF3 v\xF9ng \u0111\u01B0\u1EE3c gi\u1EEF s\xE1ng trong 3 gi\xE2y r\u1ED3i t\u1EAFt ho\xE0n to\xE0n. Trong tr\xECnh ch\u1EC9nh s\u1EEDa, v\xF9ng lu\xF4n hi\u1EC7n \u0111\u1EC3 b\u1EA1n c\u0103n node.</div></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Thao t\xE1c node</div><button class="btn-block" type="button" data-v-1f5895bc>${ssrInterpolate(unref(areaPointTargetId) === selectedArea.value.id ? "\u0110ang ch\u1EDD v\u1ECB tr\xED\u2026" : "\uFF0B Th\xEAm node b\u1EB1ng click")}</button><div class="hint-text" data-v-1f5895bc>Ch\u1ECDn node ngay trong c\xE2y \u201CV\xF9ng \u0111\xE3 t\u1EA1o\u201D \u1EDF ph\xEDa tr\xEAn. Node \u0111\u01B0\u1EE3c ch\u1ECDn s\u1EBD chuy\u1EC3n m\xE0u cam tr\xEAn panorama v\xE0 c\xF3 th\u1EC3 k\xE9o.</div><button class="btn-block danger mt-2" type="button" data-v-1f5895bc>X\xF3a v\xF9ng n\xE0y</button></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "map" && tour.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-1f5895bc><strong data-v-1f5895bc>B\u1EA3n \u0111\u1ED3 v\u1ECB tr\xED th\u1EF1c</strong><span data-v-1f5895bc>GPS c\u1EE7a t\u1EEBng c\u1EA3nh panorama</span></div><div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>C\u1EA3nh \u0111ang \u0111\u1EB7t</div><div class="geo-current-scene" data-v-1f5895bc>${ssrInterpolate((_ea = currentScene.value) == null ? void 0 : _ea.title)}</div>`);
        if (currentScene.value) {
          _push(`<div class="toggle-row" data-v-1f5895bc><label data-v-1f5895bc>Hi\u1EC7n c\u1ED1 \u0111\u1ECBnh tr\xEAn b\u1EA3n \u0111\u1ED3</label>`);
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
        _push(`<div class="field-row" data-v-1f5895bc><div class="field" data-v-1f5895bc><label data-v-1f5895bc>Kinh \u0111\u1ED9</label><input type="number" step="0.000001"${ssrRenderAttr("value", (_ha = (_ga = (_fa = currentScene.value) == null ? void 0 : _fa.coordinates) == null ? void 0 : _ga[0]) != null ? _ha : "")} placeholder="108.2022" data-v-1f5895bc></div><div class="field" data-v-1f5895bc><label data-v-1f5895bc>V\u0129 \u0111\u1ED9</label><input type="number" step="0.000001"${ssrRenderAttr("value", (_ka = (_ja = (_ia = currentScene.value) == null ? void 0 : _ia.coordinates) == null ? void 0 : _ja[1]) != null ? _ka : "")} placeholder="16.0544" data-v-1f5895bc></div></div><div class="hint-text" data-v-1f5895bc>T\u1ECDa \u0111\u1ED9 lu\xF4n d\xF9ng cho v\u1ECB tr\xED v\xE0 h\u01B0\u1EDBng camera. Ch\u1EC9 c\u1EA3nh b\u1EADt \u201CHi\u1EC7n c\u1ED1 \u0111\u1ECBnh\u201D m\u1EDBi xu\u1EA5t hi\u1EC7n khi n\xF3 kh\xF4ng ph\u1EA3i c\u1EA3nh hi\u1EC7n t\u1EA1i.</div></div>`);
        if (currentScene.value) {
          _push(`<div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>Xoay panorama tr\xEAn b\u1EA3n \u0111\u1ED3</div><div class="brightness-control" data-v-1f5895bc><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", ((_la = currentScene.value.panoramaRotation) != null ? _la : 0) * RAD_TO_DEG)} data-v-1f5895bc><output data-v-1f5895bc>${ssrInterpolate(Math.round(((_ma = currentScene.value.panoramaRotation) != null ? _ma : 0) * RAD_TO_DEG))}\xB0</output></div><div class="field mt-2" data-v-1f5895bc><label data-v-1f5895bc>G\xF3c xoay ch\xEDnh x\xE1c</label><input type="number" min="-180" max="180" step="0.1"${ssrRenderAttr("value", (((_na = currentScene.value.panoramaRotation) != null ? _na : 0) * RAD_TO_DEG).toFixed(1))} data-v-1f5895bc></div><div class="brightness-presets" data-v-1f5895bc><button type="button" data-v-1f5895bc>-90\xB0</button><button type="button" data-v-1f5895bc>\u0110\u1EB7t l\u1EA1i</button><button type="button" data-v-1f5895bc>+90\xB0</button></div><div class="hint-text" data-v-1f5895bc>Gi\xE1 tr\u1ECB n\xE0y xoay ch\xEDnh panorama v\xE0 to\xE0n b\u1ED9 marker c\u1EE7a c\u1EA3nh. N\xF3 kh\xF4ng thay \u0111\u1ED5i camera.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="insp-section" data-v-1f5895bc><div class="insp-section-title" data-v-1f5895bc>C\xE1c c\u1EA3nh tr\xEAn b\u1EA3n \u0111\u1ED3</div><!--[-->`);
        ssrRenderList(tour.value.scenes, (scene, index) => {
          var _a2;
          _push(`<button type="button" class="${ssrRenderClass([{ active: scene.id === ((_a2 = currentScene.value) == null ? void 0 : _a2.id) }, "geo-scene-row"])}" data-v-1f5895bc><span class="map-node-dot" style="${ssrRenderStyle({ background: scene.coordinates ? "#3b82f6" : "#64748b" })}" data-v-1f5895bc></span><span data-v-1f5895bc>${ssrInterpolate(scene.title)}</span><small data-v-1f5895bc>${ssrInterpolate(scene.coordinates ? `${scene.showOnMap === true ? "Hi\u1EC7n" : "\u1EA8n"} \xB7 ${scene.coordinates[1].toFixed(5)}, ${scene.coordinates[0].toFixed(5)}` : "Ch\u01B0a \u0111\u1EB7t")}</small></button>`);
        });
        _push(`<!--]--></div>`);
        {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-1f5895bc><div class="modal" data-v-1f5895bc><div class="modal-head" data-v-1f5895bc><div data-v-1f5895bc><span class="modal-eyebrow" data-v-1f5895bc>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c m\u1EDBi</span><h3 data-v-1f5895bc>Ch\u1ECDn h\xE0nh \u0111\u1ED9ng khi ng\u01B0\u1EDDi xem nh\u1EA5n v\xE0o</h3></div><button class="modal-close" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-1f5895bc><path d="M18 6 6 18" data-v-1f5895bc></path><path d="m6 6 12 12" data-v-1f5895bc></path></svg></button></div><div class="modal-body" data-v-1f5895bc><div class="type-grid" data-v-1f5895bc><div class="type-card nav" data-v-1f5895bc><div class="type-card-icon nav" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-1f5895bc><path d="M12 4 L12 18" data-v-1f5895bc></path><path d="M6 11 L12 5 L18 11" data-v-1f5895bc></path></svg></div><strong data-v-1f5895bc>Chuy\u1EC3n c\u1EA3nh</strong><span data-v-1f5895bc>\u0110i t\u1EDBi m\u1ED9t \u1EA3nh panorama kh\xE1c</span></div><div class="type-card video" data-v-1f5895bc><div class="type-card-icon video" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="currentColor" data-v-1f5895bc><path d="M8 5v14l11-7z" data-v-1f5895bc></path></svg></div><strong data-v-1f5895bc>Xem video</strong><span data-v-1f5895bc>M\u1EDF video gi\u1EDBi thi\u1EC7u ho\u1EB7c t\u01B0 li\u1EC7u</span></div><div class="type-card info" data-v-1f5895bc><div class="type-card-icon info" data-v-1f5895bc><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-1f5895bc><rect x="4" y="4" width="16" height="16" rx="3" data-v-1f5895bc></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-1f5895bc></path></svg></div><strong data-v-1f5895bc>Panel n\u1ED9i dung</strong><span data-v-1f5895bc>K\u1EBFt h\u1EE3p v\u0103n b\u1EA3n, \u1EA3nh 3D, \xE2m thanh v\xE0 AI</span></div></div></div><div class="modal-foot" data-v-1f5895bc><button class="tb-btn" data-v-1f5895bc>H\u1EE7y</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1f5895bc"]]);

export { _sceneId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_sceneId_-t1nOwGuk');
//# sourceMappingURL=_sceneId_-t1nOwGuk.mjs.map
