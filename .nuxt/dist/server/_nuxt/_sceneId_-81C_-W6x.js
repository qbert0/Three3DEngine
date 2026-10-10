import { _ as __nuxt_component_0 } from "./nuxt-link-AvfA4aCh.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Switch-CNCj6PJD.js";
import { _ as _sfc_main$2 } from "./Spinner-mjqtnuYo.js";
import { u as useRoute, b as useRouter, a as useToast, c as __nuxt_component_4, _ as _export_sfc } from "../server.mjs";
import { ref, computed, shallowRef, readonly, defineComponent, withAsyncContext, watch, nextTick, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { V as View360Engine, M as MarkerPlugin, A as AreaHighlightPlugin } from "./AreaHighlightPlugin-BTpXi-Xe.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-BTut8LNP.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "pinia";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
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
    const editorSource = scene.editorPanorama ?? (scene.panorama.startsWith("/") ? `/api/admin/media/preview?path=${encodeURIComponent(scene.panorama)}` : scene.panorama);
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
        enableTiling: false,
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
        if (interactionMode.value !== "panorama" || ev.button !== 0) return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        rotatingPanorama = true;
        rotationStartX = ev.clientX;
        rotationStart = currentScene.value?.panoramaRotation ?? 0;
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
        if (!rotatingPanorama) return;
        ev.preventDefault();
        ev.stopImmediatePropagation();
        rotatingPanorama = false;
        canvas.style.cursor = interactionMode.value === "panorama" ? "ew-resize" : "grab";
        lastPanoramaRotation.value = currentScene.value?.panoramaRotation ?? 0;
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
      errorMessage.value = err instanceof Error ? err.message : "Không thể khởi động designer.";
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
    areaInteractionMode.value = mode;
    const currentEngine = engine.value;
    if (!currentEngine) return;
    currentEngine.getPlugin("area-highlight")?.setEditingEnabled(mode === "edit");
    currentEngine.bus.emit(mode === "edit" ? "interaction:lock" : "interaction:unlock");
    currentEngine.renderer.domElement.style.cursor = mode === "edit" ? "crosshair" : "grab";
  }
  function selectAreaPoint(areaId, pointIndex) {
    if (areaId !== null && pointIndex !== null) setAreaInteractionMode("edit");
    selectedAreaPoint.value = areaId !== null && pointIndex !== null ? { areaId, pointIndex } : null;
    engine.value?.getPlugin("area-highlight")?.selectPoint(areaId, pointIndex);
  }
  function handleAreaDrawingClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import("./AreaHighlightPlugin-BTpXi-Xe.js").then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
      if (!isDrawingArea.value && !areaPointTargetId.value) return;
      const raycaster = new Raycaster();
      raycaster.setFromCamera(new Vector2(ndcX, ndcY), e.camera.camera);
      const direction = raycaster.ray.direction.clone().normalize();
      direction.applyAxisAngle(new Vector3(0, 1, 0), -(currentScene.value?.panoramaRotation ?? 0));
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
  function refreshAreaHighlights(areas = currentScene.value?.areaHighlights ?? []) {
    const plugin = engine.value?.getPlugin("area-highlight");
    if (!plugin) return;
    const draft = areaDraftPoints.value.length ? [{ id: "__draft__", points: areaDraftPoints.value, color: "#22c55e", outlineColor: "#ffffff", opacity: 0.34 }] : [];
    plugin.setAreas([...areas, ...draft], currentScene.value?.panoramaRotation ?? 0);
  }
  function handlePlacementClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import("./AreaHighlightPlugin-BTpXi-Xe.js").then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
      const raycaster = new Raycaster();
      const mouse = new Vector2(ndcX, ndcY);
      raycaster.setFromCamera(mouse, e.camera.camera);
      const dir = raycaster.ray.direction.clone().normalize();
      dir.applyAxisAngle(new Vector3(0, 1, 0), -(currentScene.value?.panoramaRotation ?? 0));
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
    const markerPlugin = engine.value?.getPlugin("marker");
    if (!markerPlugin) return;
    markerPlugin.onSceneReady?.(scene);
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
    engine.value?.pano.setBrightness(value);
  }
  function setHighlightCompression(value) {
    engine.value?.pano.setHighlightCompression(value);
  }
  function setPanoramaRotation(value) {
    if (!engine.value) return;
    engine.value.setSceneRotation(value);
  }
  function setInteractionMode(mode) {
    interactionMode.value = mode;
    const canvas = engine.value?.["renderer"].domElement;
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
    unsubs.forEach((fn) => fn());
    engine.value?.destroy();
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
      if (data.value?.item) {
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
                if (previousText?.type === "text") {
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
      if (historyIndex.value > 0) {
        isHistoryAction = true;
        historyIndex.value--;
        tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
        isDirty.value = true;
        goToScene(Math.min(currentSceneIdx.value, (tour.value?.scenes.length ?? 1) - 1));
        isHistoryAction = false;
        showToast({ message: "Đã hoàn tác (Undo)", variant: "default" });
      }
    }
    function redo() {
      if (historyIndex.value < historyStack.value.length - 1) {
        isHistoryAction = true;
        historyIndex.value++;
        tour.value = JSON.parse(JSON.stringify(historyStack.value[historyIndex.value]));
        isDirty.value = true;
        goToScene(Math.min(currentSceneIdx.value, (tour.value?.scenes.length ?? 1) - 1));
        isHistoryAction = false;
        showToast({ message: "Đã làm lại (Redo)", variant: "default" });
      }
    }
    const canUndo = computed(() => historyIndex.value > 0);
    const canRedo = computed(() => historyIndex.value < historyStack.value.length - 1);
    const currentSceneIdx = ref(0);
    watch(
      () => tour.value,
      (t) => {
        if (!t || !t.scenes?.length) return;
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
      if (!tour.value || !tour.value.scenes.length) return null;
      return tour.value.scenes[currentSceneIdx.value] ?? tour.value.scenes[0];
    });
    const currentTab = ref("scene");
    const editorMode = ref("panorama");
    const selectedAreaId = ref(null);
    const selectedArea = computed(() => currentScene.value?.areaHighlights?.find((area) => area.id === selectedAreaId.value) ?? null);
    const newAreaMode = ref("fill-outline");
    const newAreaLineWidth = ref(5);
    const mapEditorCanvas = ref(null);
    const mapDragNodeId = ref(null);
    ref(false);
    const mapEditorImages = /* @__PURE__ */ new Map();
    function mapEditorContentRect(floor, w, h) {
      const padding = 12;
      const image = mapEditorImages.get(floor.id);
      const sourceW = image?.naturalWidth || floor.imageWidth || 1;
      const sourceH = image?.naturalHeight || floor.imageHeight || 1;
      const scale = Math.min((w - padding * 2) / sourceW, (h - padding * 2) / sourceH);
      const width = sourceW * scale;
      const height = sourceH * scale;
      return { x: (w - width) / 2, y: (h - height) / 2, width, height };
    }
    function ensureMapEditorImage(floor) {
      if (!floor.imageUrl) return void 0;
      const cached = mapEditorImages.get(floor.id);
      if (cached?.dataset.src === floor.imageUrl) return cached;
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
            name: "Tất cả",
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
      const floors = tour.value?.map?.floors ?? [];
      return floors.find((f) => f.id === mapActiveFloorId.value) ?? floors[0];
    });
    function drawMapEditor() {
      const canvas = mapEditorCanvas.value;
      if (!canvas || !tour.value?.map) return;
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
      if (mapImage?.complete && mapImage.naturalWidth > 0) {
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
        for (const nbrId of node.neighbors ?? []) {
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
        const isCurrent = node.id === currentScene.value?.id;
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
        ctx.fillText(label.length > 14 ? label.slice(0, 13) + "…" : label, sx, sy + r + 4);
      }
    }
    watch(editorMode, (mode) => {
      if (mode === "map") {
        ensureMapConfig();
        if (tour.value?.map?.floors?.[0]) {
          mapActiveFloorId.value = tour.value.map.floors[0].id;
        }
        nextTick(() => drawMapEditor());
      } else if (mode === "highlight") {
        selectedAreaId.value ??= currentScene.value?.areaHighlights?.[0]?.id ?? null;
        engineSetAreaInteractionMode("rotate");
        nextTick(() => refreshAreaHighlights(currentScene.value?.areaHighlights ?? []));
      } else {
        if (isDrawingArea.value || areaPointTargetId.value) engineCancelAreaDrawing();
        engineSetAreaInteractionMode("rotate");
      }
    });
    function selectSceneFromGeoMap(sceneId) {
      const index = tour.value?.scenes.findIndex((scene) => scene.id === sceneId) ?? -1;
      if (index >= 0) goToScene(index);
    }
    function setSceneGeoCoordinates(payload) {
      const scene = tour.value?.scenes.find((item) => item.id === payload.sceneId);
      if (!scene) return;
      scene.coordinates = payload.coordinates;
      markDirty();
    }
    const RAD_TO_DEG = 180 / Math.PI;
    watch(mapActiveFloorId, () => nextTick(() => drawMapEditor()));
    const selectedHotspotId = ref(null);
    const selectedHotspot = computed(() => {
      if (!currentScene.value) return null;
      return currentScene.value.markers.find((m) => m.id === selectedHotspotId.value) ?? null;
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
      return !["local", "drone", "location-1", "location-2", "pin", "pin-top", "anchor"].includes(marker.icon ?? "arrow");
    }
    function navigationIsLocal(marker) {
      return ["local", "location-1", "pin"].includes(marker.icon ?? "");
    }
    function navigationRotationDegrees(marker, axis) {
      if (axis === "rotX") return Math.round((marker.rotX ?? (navigationIsArrow(marker) ? Math.PI / 3 : 0)) * 180 / Math.PI);
      if (axis === "rotY") return Math.round((marker.rotY ?? 0) * 180 / Math.PI);
      return Math.round((marker.rotZ ?? marker.rotation ?? 0) * 180 / Math.PI);
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
      refreshMarkers?.(currentScene.value);
    }
    watch(
      () => currentScene.value?.markers,
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
      if (!area || !currentScene.value) return;
      area.mode = newAreaMode.value;
      area.lineWidth = newAreaLineWidth.value;
      currentScene.value.areaHighlights ??= [];
      currentScene.value.areaHighlights.push(area);
      selectedAreaId.value = area.id;
      refreshAreaHighlights(currentScene.value.areaHighlights);
      markDirty();
      showToast({ message: "Đã thêm vùng làm nổi bật", variant: "default" });
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
      if (!payload || !currentScene.value) return;
      const area = currentScene.value.areaHighlights?.find((item) => item.id === payload.areaId);
      if (!area) return;
      area.points.push(payload.point);
      selectedAreaId.value = area.id;
      refreshAreaHighlights(currentScene.value.areaHighlights ?? []);
      engineSelectAreaPoint(area.id, area.points.length - 1);
      markDirty();
    });
    watch(
      () => currentScene.value?.areaHighlights,
      (areas) => refreshAreaHighlights(areas ?? []),
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
      if (!tour.value || addingScene.value) return;
      newSceneInput.value?.click();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_AdminRealMapEditor = __nuxt_component_4;
      const _component_AdminMapHeadingPreview = __nuxt_component_4;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-31181c59><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-31181c59><input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" class="hidden" data-v-31181c59><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-31181c59><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-31181c59><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-31181c59><header class="topbar" data-v-31181c59><div class="tb-logo" data-v-31181c59><div class="tb-logo-mark" data-v-31181c59>SV</div><div class="tb-logo-text" data-v-31181c59><strong data-v-31181c59>Sông Vân Studio</strong><span data-v-31181c59>${ssrInterpolate(tour.value?.title ?? "Không gian triển lãm")}</span></div></div><div class="tb-breadcrumb" data-v-31181c59>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Quản lý tour`);
          } else {
            return [
              createTextVNode("Quản lý tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-31181c59><path d="m9 18 6-6-6-6" data-v-31181c59></path></svg><strong id="breadcrumbTour" data-v-31181c59>${ssrInterpolate(tour.value?.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-31181c59><path d="m9 18 6-6-6-6" data-v-31181c59></path></svg><span id="breadcrumbScene" data-v-31181c59>${ssrInterpolate(currentScene.value?.title)}</span></div><div class="tb-spacer" data-v-31181c59></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-31181c59><span class="dot" data-v-31181c59></span><span id="saveText" data-v-31181c59>${ssrInterpolate(saving.value ? "Đang lưu..." : isDirty.value ? "Có thay đổi chưa lưu" : "Đã lưu")}</span></div><div class="tb-actions" data-v-31181c59>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Hoàn tác (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-31181c59${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59${_scopeId}><path d="M3 7v6h6" data-v-31181c59${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-31181c59${_scopeId}></path></svg></button>`);
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
        content: "Làm lại (Ctrl+Y)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-31181c59${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59${_scopeId}><path d="M21 7v6h-6" data-v-31181c59${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-31181c59${_scopeId}></path></svg></button>`);
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
      _push(`<button class="tb-btn" id="previewBtn" data-v-31181c59>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-31181c59></path><circle cx="12" cy="12" r="3" data-v-31181c59></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-31181c59></path></svg>`);
      }
      _push(`<span data-v-31181c59>${ssrInterpolate(previewMode.value ? "Chỉnh sửa" : "Xem trước")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-31181c59>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-31181c59></path><path d="M17 21v-8H7v8" data-v-31181c59></path><path d="M7 3v5h8" data-v-31181c59></path></svg>`);
      }
      _push(`<span data-v-31181c59>Lưu</span></button></div></header><aside class="sidebar-left" data-v-31181c59><div class="side-head" data-v-31181c59><div class="side-head-row" data-v-31181c59><h3 data-v-31181c59>Danh sách cảnh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Thêm cảnh mới",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn"${ssrIncludeBooleanAttr(addingScene.value) ? " disabled" : ""} data-v-31181c59${_scopeId}>`);
            if (addingScene.value) {
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "sm" }, null, _parent2, _scopeId));
            } else {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-31181c59${_scopeId}><path d="M12 5v14M5 12h14" data-v-31181c59${_scopeId}></path></svg>`);
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
      _push(`</div><p id="sceneCount" data-v-31181c59>${ssrInterpolate(tour.value?.scenes.length ?? 0)} cảnh · Kéo để sắp xếp</p></div><div class="scene-list" id="sceneList" data-v-31181c59><!--[-->`);
      ssrRenderList(tour.value?.scenes ?? [], (s, idx) => {
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-31181c59><span class="scene-drag" data-v-31181c59><svg viewBox="0 0 24 24" fill="currentColor" data-v-31181c59><circle cx="9" cy="6" r="1.5" data-v-31181c59></circle><circle cx="15" cy="6" r="1.5" data-v-31181c59></circle><circle cx="9" cy="12" r="1.5" data-v-31181c59></circle><circle cx="15" cy="12" r="1.5" data-v-31181c59></circle><circle cx="9" cy="18" r="1.5" data-v-31181c59></circle><circle cx="15" cy="18" r="1.5" data-v-31181c59></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail)}${ssrRenderAttr("alt", s.title)} loading="lazy" decoding="async" data-v-31181c59><div class="scene-info" data-v-31181c59><strong data-v-31181c59>${ssrInterpolate(s.title)}</strong><span data-v-31181c59>${ssrInterpolate(s.markers?.length ?? 0)} điểm tương tác${ssrInterpolate(tour.value?.initialSceneId === s.id ? " · ★ Bắt đầu" : "")}</span></div>`);
        if (tour.value?.initialSceneId === s.id) {
          _push(`<span class="scene-badge" data-v-31181c59>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay đổi chiều rộng danh sách cảnh" data-v-31181c59></div><main class="preview" data-v-31181c59><div class="preview-toolbar" data-v-31181c59><div class="editor-mode-switch" data-v-31181c59><button type="button" class="${ssrRenderClass({ active: editorMode.value === "panorama" })}" data-v-31181c59>Panorama</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "highlight" })}" data-v-31181c59>Vùng sáng</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "map" })}" data-v-31181c59>Bản đồ</button></div>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-31181c59><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "camera" })}" data-v-31181c59>Xoay camera</button><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "panorama" })}" data-v-31181c59>Xoay panorama</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "highlight") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-31181c59><button type="button" class="${ssrRenderClass({ active: unref(areaInteractionMode) === "rotate" })}" data-v-31181c59>Xoay góc nhìn</button><button type="button" class="${ssrRenderClass({ active: unref(areaInteractionMode) === "edit" })}" data-v-31181c59>Vẽ / chỉnh vùng</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="Nếu bật, người xem sẽ quay về góc này mỗi khi đi vào cảnh" data-v-31181c59><label data-v-31181c59><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultCameraEnabled === true) ? " checked" : ""} data-v-31181c59><span data-v-31181c59>Góc vào cảnh</span></label>`);
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<button type="button" data-v-31181c59> Lấy góc hiện tại </button>`);
        } else {
          _push(`<!---->`);
        }
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<output data-v-31181c59>${ssrInterpolate(Math.round(currentScene.value.initialYaw * RAD_TO_DEG))}° / ${ssrInterpolate(Math.round(currentScene.value.initialPitch * RAD_TO_DEG))}° </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="Nếu bật, cảnh áp dụng mức zoom này nhưng vẫn giữ nguyên hướng nhìn của người xem" data-v-31181c59><label data-v-31181c59><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultZoomEnabled === true) ? " checked" : ""} data-v-31181c59><span data-v-31181c59>Zoom vào cảnh</span></label><button type="button"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-31181c59>${ssrInterpolate(saving.value ? "Đang lưu zoom..." : "Lưu zoom hiện tại")}</button>`);
        if (currentScene.value.defaultZoomEnabled) {
          _push(`<output data-v-31181c59>${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan((currentScene.value.initialFov ?? 75) * Math.PI / 360)).toFixed(2))}× </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-31181c59><path d="M12 5v14M5 12h14" data-v-31181c59></path></svg><span data-v-31181c59>${ssrInterpolate(isPlacingHotspot.value ? "Đang đặt... (ESC)" : "Đặt điểm tương tác")}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-31181c59>Nhấn vào ảnh để chọn vị trí</span>`);
      } else if (unref(isDrawingArea)) {
        _push(`<span class="toolbar-hint" data-v-31181c59>Chọn ít nhất 3 điểm · ESC để hủy</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-31181c59></div><div class="pt-zoom" data-v-31181c59><button id="zoomOut" title="Thu nhỏ" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-31181c59><path d="M5 12h14" data-v-31181c59></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-31181c59>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Phóng to" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-31181c59><path d="M12 5v14M5 12h14" data-v-31181c59></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-31181c59><div class="h-full w-full" style="${ssrRenderStyle({ visibility: editorMode.value === "panorama" || editorMode.value === "highlight" ? "visible" : "hidden" })}" data-v-31181c59></div>`);
      if (editorMode.value === "map" && tour.value) {
        _push(ssrRenderComponent(_component_AdminRealMapEditor, {
          scenes: tour.value.scenes,
          "current-scene-id": currentScene.value?.id,
          onSelectScene: selectSceneFromGeoMap,
          onSetCoordinates: setSceneGeoCoordinates
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && currentScene.value?.coordinates) {
        _push(ssrRenderComponent(_component_AdminMapHeadingPreview, {
          coordinates: currentScene.value.coordinates,
          "camera-yaw": unref(cameraYaw),
          "panorama-rotation": currentScene.value.panoramaRotation ?? 0
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "panorama") {
        _push(`<div class="panorama-rotation-hint" data-v-31181c59> Kéo ngang để xoay panorama · Camera đang được giữ cố định </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-31181c59> Nhấn lên ảnh để đặt điểm tương tác · ESC để hủy </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "highlight") {
        _push(`<div class="place-hint active" data-v-31181c59>`);
        if (unref(isDrawingArea)) {
          _push(`<!--[-->Click để thêm node · Kéo node lớn để chỉnh · Bấm Hoàn tất vùng<!--]-->`);
        } else if (unref(areaPointTargetId)) {
          _push(`<!--[-->Click vị trí muốn thêm node · ESC để hủy<!--]-->`);
        } else if (unref(areaInteractionMode) === "edit") {
          _push(`<!--[-->Camera đang khóa · Kéo node để chỉnh hình dạng<!--]-->`);
        } else {
          _push(`<!--[-->Kéo để xoay góc nhìn · Chế độ này không tạo hoặc kéo node<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="preview-info" data-v-31181c59><span class="preview-info-badge" data-v-31181c59>CẢNH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate(tour.value?.scenes.length ?? 1)}</span><span class="preview-info-title" id="infoTitle" data-v-31181c59>${ssrInterpolate(currentScene.value?.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-31181c59>`);
        if (isPlacingHotspot.value) {
          _push(`<!--[-->Nhấn vị trí bất kỳ để đặt<!--]-->`);
        } else {
          _push(`<!--[--> Yaw ${ssrInterpolate((unref(cameraYaw) * RAD_TO_DEG).toFixed(1))}° · Pitch ${ssrInterpolate((unref(cameraPitch) * RAD_TO_DEG).toFixed(1))}° · Zoom ${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan(unref(cameraFov) * Math.PI / 360)).toFixed(2))}× · FOV ${ssrInterpolate(unref(cameraFov).toFixed(1))}° <!--]-->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="resizer resizer-right" aria-label="Thay đổi chiều rộng bảng thuộc tính" data-v-31181c59></div><aside class="inspector sidebar-right" data-v-31181c59>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="insp-tabs" data-v-31181c59><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-31181c59> Cảnh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-31181c59> Điểm tương tác </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-31181c59> Cài đặt </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="insp-body" id="inspBody" data-v-31181c59>`);
      if (editorMode.value === "panorama" && currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Thông tin cảnh</div><div class="field" data-v-31181c59><label data-v-31181c59>Tên cảnh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>Mô tả ngắn</label><textarea id="fieldDesc" data-v-31181c59>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Ảnh panorama</div><div class="img-picker" id="imgPicker" title="Nhấn để tải ảnh panorama từ máy tính" data-v-31181c59>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.thumbnail || currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} decoding="async" data-v-31181c59>`);
        } else {
          _push(`<div class="image-error" data-v-31181c59>Không đọc được ảnh. Hãy kiểm tra đường dẫn hoặc tải ảnh mới.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-31181c59>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-31181c59></path><polyline points="17 8 12 3 7 8" data-v-31181c59></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-31181c59></line></svg><span data-v-31181c59>${ssrInterpolate(uploadingImage.value ? "Đang tải lên..." : "Đổi ảnh (Tải lên)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-31181c59><label data-v-31181c59>URL ảnh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... hoặc /uploads/..." data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>URL ảnh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... hoặc /thumbnails/..." data-v-31181c59></div><div class="hint-text" data-v-31181c59>💡 Nhấn vào ô xem trước để chọn file từ máy tính hoặc dán đường dẫn URL trực tiếp.</div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Ánh sáng hình ảnh</div><div class="brightness-control" data-v-31181c59><input${ssrRenderAttr("value", currentScene.value.brightness ?? 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-31181c59><output data-v-31181c59>${ssrInterpolate(Math.round((currentScene.value.brightness ?? 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-31181c59><button type="button" data-v-31181c59>Gốc</button><button type="button" data-v-31181c59>Mặc định</button><button type="button" data-v-31181c59>Sáng rõ</button></div><label class="sub-control-label" data-v-31181c59>Giảm vùng chói</label><div class="brightness-control" data-v-31181c59><input${ssrRenderAttr("value", currentScene.value.highlightCompression ?? 0)} type="range" min="0" max="1" step="0.05" data-v-31181c59><output data-v-31181c59>${ssrInterpolate(Math.round((currentScene.value.highlightCompression ?? 0) * 100))}%</output></div><div class="brightness-presets" data-v-31181c59><button type="button" data-v-31181c59>Tắt</button><button type="button" data-v-31181c59>Nhẹ</button><button type="button" data-v-31181c59>Mạnh</button></div><div class="hint-text" data-v-31181c59>Chỉ nén vùng trời và nguồn sáng gắt; không thay đổi file ảnh gốc.</div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Vị trí trong tour</div><div class="field-row" data-v-31181c59><div class="field" data-v-31181c59><label data-v-31181c59>Thứ tự</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", tour.value?.scenes.length)} data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-31181c59></div></div><div class="toggle-row" data-v-31181c59><label for="isStartToggle" data-v-31181c59>Đặt làm cảnh bắt đầu</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value?.initialSceneId === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-31181c59><button class="btn-block danger" id="deleteSceneBtn" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M3 6h18" data-v-31181c59></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-31181c59></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-31181c59></path></svg> Xóa cảnh này </button></div><!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59><span data-v-31181c59>Điểm tương tác trong cảnh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-31181c59><circle cx="12" cy="12" r="10" data-v-31181c59></circle><path d="M12 8v8M8 12h8" data-v-31181c59></path></svg> Chưa có điểm tương tác nào.<br data-v-31181c59>Nhấn “Đặt điểm tương tác” để bắt đầu. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-31181c59><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-31181c59><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-31181c59>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M12 4 L12 18" data-v-31181c59></path><path d="M6 11 L12 5 L18 11" data-v-31181c59></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-31181c59><path d="M8 5v14l11-7z" data-v-31181c59></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-31181c59><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-31181c59></path><path d="M12 22V12M3 7l9 5 9-5" data-v-31181c59></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-31181c59><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-31181c59></circle><path d="M12 11 L12 18" data-v-31181c59></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-31181c59>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-31181c59><path d="M18 6 6 18" data-v-31181c59></path><path d="m6 6 12 12" data-v-31181c59></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-31181c59><path d="M12 5v14M5 12h14" data-v-31181c59></path></svg> Thêm điểm tương tác </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Chỉnh sửa điểm tương tác</div><div class="field" data-v-31181c59><label data-v-31181c59>Nhãn hiển thị</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-31181c59></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Cảnh đích</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-31181c59><option value="" disabled data-v-31181c59>— Chọn cảnh —</option><!--[-->`);
            ssrRenderList(tour.value?.scenes ?? [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-31181c59>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Kiểu hiển thị</label><div class="nav-icon-mode-toggle" data-v-31181c59><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["arrow", "arrow-1", "arrow-2"].includes(selectedHotspot.value.icon ?? "arrow") }])}" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "width": "18px", "height": "18px" })}" data-v-31181c59><path d="m5 15 7-6 7 6" data-v-31181c59></path><path d="m5 21 7-6 7 6" data-v-31181c59></path></svg> Mũi tên </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["local", "location-1", "pin"].includes(selectedHotspot.value.icon ?? "") }])}" data-v-31181c59><svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "16px", "height": "20px" })}" data-v-31181c59><path d="M12 26S3 17.2 3 10a9 9 0 1 1 18 0c0 7.2-9 16-9 16Z" data-v-31181c59></path><circle cx="12" cy="10" r="3.5" data-v-31181c59></circle></svg> Local </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["drone", "location-2", "pin-top", "anchor"].includes(selectedHotspot.value.icon ?? "") }])}" data-v-31181c59><svg viewBox="0 0 24 30" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "15px", "height": "21px" })}" data-v-31181c59><path d="M12 28C10.5 21 4 17 4 9.5a8 8 0 1 1 16 0C20 17 13.5 21 12 28Z" data-v-31181c59></path><circle cx="12" cy="9.5" r="3" data-v-31181c59></circle></svg> Drone </button></div></div>`);
            if (!navigationIsArrow(selectedHotspot.value)) {
              _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Font tiêu đề trên View</label><select${ssrRenderAttr("value", selectedHotspot.value.labelFont ?? "be-vietnam-pro")} data-v-31181c59><option value="be-vietnam-pro" data-v-31181c59>Be Vietnam Pro</option><option value="outfit" data-v-31181c59>Outfit</option><option value="montserrat" data-v-31181c59>Montserrat</option><option value="serif" data-v-31181c59>Serif nghệ thuật</option></select><div class="hint-text" data-v-31181c59>Font chỉ áp dụng cho tiêu đề đi kèm leader line ở trang View.</div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (["local", "drone", "location-1", "location-2", "pin", "pin-top", "anchor"].includes(selectedHotspot.value.icon ?? "")) {
              _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Màu pin</label><div class="pin-color-row" data-v-31181c59><input type="color"${ssrRenderAttr("value", selectedHotspot.value.pinColor ?? "#171717")} data-v-31181c59><div class="pin-color-presets" data-v-31181c59><!--[-->`);
              ssrRenderList(["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#1d6fa8", "#171717"], (c) => {
                _push(`<button type="button" style="${ssrRenderStyle({ background: c })}" class="${ssrRenderClass([{ active: selectedHotspot.value.pinColor === c }, "pin-color-swatch"])}" data-v-31181c59></button>`);
              });
              _push(`<!--]--></div></div></div><div class="field" data-v-31181c59><label data-v-31181c59>Ảnh bên trong pin <span style="${ssrRenderStyle({ "opacity": ".5", "font-weight": "400" })}" data-v-31181c59>(tuỳ chọn)</span></label><input${ssrRenderAttr("value", selectedHotspot.value.iconUrl ?? "")} type="text" placeholder="/thumbnails/scene.jpg hoặc để trống" data-v-31181c59><div class="hint-text" data-v-31181c59>Để trống = pin trắng trơn. Có ảnh = thumbnail tròn bên trong pin.</div></div>`);
              if (selectedHotspot.value.targetScene) {
                _push(`<div class="field" data-v-31181c59><button type="button" class="btn-fill-thumb" data-v-31181c59> 📷 Dùng thumbnail cảnh đích </button></div>`);
              } else {
                _push(`<!---->`);
              }
              if (selectedHotspot.value.iconUrl) {
                _push(`<div class="field nav-icon-preview" data-v-31181c59><label data-v-31181c59>Xem trước ảnh</label><div class="nav-icon-preview-frame" data-v-31181c59><img${ssrRenderAttr("src", selectedHotspot.value.iconUrl)} alt="Xem trước ảnh trong pin" data-v-31181c59></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="field" data-v-31181c59><label data-v-31181c59> Kích thước pin <span class="field-badge" data-v-31181c59>${ssrInterpolate(selectedHotspot.value.iconSize ?? 65)}px</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="35" max="150" step="5"${ssrRenderAttr("value", selectedHotspot.value.iconSize ?? 65)} data-v-31181c59><button class="reset-btn" type="button" title="Về 65" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Kích thước pin trong không gian 3D (world units). Mặc định: 65.</div></div><!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59> Độ sâu trên mặt cầu 3D <span class="field-badge" data-v-31181c59>${ssrInterpolate(Math.round(selectedHotspot.value.sphereRadius ?? 520))}</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="120" max="580" step="5"${ssrRenderAttr("value", selectedHotspot.value.sphereRadius ?? 520)} data-v-31181c59><button class="reset-btn" type="button" title="Về mặt cầu mặc định" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>120 = gần camera; 520 = mặc định; 580 = sát bề mặt panorama.</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" && ["arrow", "arrow-1", "arrow-2"].includes(selectedHotspot.value.icon ?? "arrow")) {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59> Xoay (Z) — chiều nghiêng <span class="field-badge" data-v-31181c59>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotZ"))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotZ"))} data-v-31181c59><button class="reset-btn" title="Về 0°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>0° = ^^ hướng lên. 90° = phải. -90° = trái.</div></div><div class="field" data-v-31181c59><label data-v-31181c59> Nghiêng (X) — đứng / nằm <span class="field-badge" data-v-31181c59>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotX"))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotX"))} data-v-31181c59><button class="reset-btn" title="Về 60°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Mặc định 60° để mũi tên nằm theo mặt sàn. 0° = đứng thẳng.</div></div><div class="field" data-v-31181c59><label data-v-31181c59> Xoay ngang (Y) — quay mặt <span class="field-badge" data-v-31181c59>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotY"))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotY"))} data-v-31181c59><button class="reset-btn" title="Về 0°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Xoay mặt mũi tên sang trái/phải trong không gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59> Phóng ngang (X) <span class="field-badge" data-v-31181c59>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleX") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleX"))} data-v-31181c59><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsArrow(selectedHotspot.value) ? "Về 160%" : "Về 100%")} data-v-31181c59>↺</button></div></div><div class="field" data-v-31181c59><label data-v-31181c59> Phóng dọc (Y) <span class="field-badge" data-v-31181c59>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleY") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleY"))} data-v-31181c59><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsLocal(selectedHotspot.value) ? "Về 80%" : "Về 100%")} data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>X và Y thay đổi độc lập; marker mặt phẳng không sử dụng chiều sâu Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Hướng hiển thị panel</label><select${ssrRenderAttr("value", selectedHotspot.value.placement ?? "vertical")} data-v-31181c59><option value="vertical" data-v-31181c59>Chiều dọc</option><option value="horizontal" data-v-31181c59>Chiều ngang</option></select><div class="hint-text" data-v-31181c59>Hệ thống tự chọn trên/dưới hoặc trái/phải theo khoảng trống còn lại.</div></div><div class="field" data-v-31181c59><label data-v-31181c59>Nội dung trong panel</label><div class="video-size-presets" data-v-31181c59><button type="button" data-v-31181c59>+ Văn bản</button><button type="button" data-v-31181c59>+ Ảnh 2D</button><button type="button" data-v-31181c59>+ Ảnh 3D</button><button type="button" data-v-31181c59>+ Âm thanh</button><button type="button" data-v-31181c59>+ AI Chat</button></div><div class="hint-text" data-v-31181c59>Có thể kết hợp nhiều loại và thay đổi thứ tự hiển thị.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              _push(`<div class="field panel-block-editor" data-v-31181c59><label data-v-31181c59>${ssrInterpolate(block.type === "text" ? "Văn bản" : block.type === "image" ? "Ảnh 2D" : block.type === "image3d" ? "Ảnh 3D" : block.type === "audio" ? "Âm thanh" : "AI Chat")} <span class="field-badge" data-v-31181c59>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="Nội dung mô tả..." data-v-31181c59>${ssrInterpolate(block.content)}</textarea><label data-v-31181c59>Chế độ hiển thị</label><select${ssrRenderAttr("value", block.presentation ?? "text-only")} data-v-31181c59><option value="text-only" data-v-31181c59>Chỉ văn bản</option><option value="text-and-audio" data-v-31181c59>Văn bản và bản đọc</option><option value="audio-only" data-v-31181c59>Chỉ bản đọc</option></select>`);
                if ((block.presentation ?? "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-31181c59>File bản đọc (VieNeu-TTS)</label><input${ssrRenderAttr("value", block.speech?.src ?? "")} type="text" placeholder="/uploads/audio/ban-doc.wav hoặc URL" data-v-31181c59><div class="video-size-presets" data-v-31181c59><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-31181c59>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "Đang tải..." : "Tải file bản đọc")}</button>`);
                  if (block.speech?.src) {
                    _push(`<button type="button" data-v-31181c59>Bỏ file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if (block.speech?.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-31181c59></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-31181c59>Xuất WAV/MP3 từ VieNeu-TTS rồi tải lên đây. Khi có file, thanh tiến trình sẽ dùng đúng thời lượng audio.</div>`);
                  if (!block.speech?.src) {
                    _push(`<details data-v-31181c59><summary data-v-31181c59>Giọng trình duyệt dự phòng</summary><select${ssrRenderAttr("value", block.speech?.lang ?? "vi-VN")} data-v-31181c59><option value="vi-VN" data-v-31181c59>Tiếng Việt</option><option value="en-US" data-v-31181c59>English (US)</option><option value="en-GB" data-v-31181c59>English (UK)</option><option value="fr-FR" data-v-31181c59>Français</option><option value="ja-JP" data-v-31181c59>日本語</option><option value="ko-KR" data-v-31181c59>한국어</option></select><label data-v-31181c59>Tốc độ <span class="field-badge" data-v-31181c59>${ssrInterpolate((block.speech?.rate ?? 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.rate ?? 1)} data-v-31181c59><label data-v-31181c59>Cao độ <span class="field-badge" data-v-31181c59>${ssrInterpolate((block.speech?.pitch ?? 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.pitch ?? 1)} data-v-31181c59><div class="hint-text" data-v-31181c59>Giọng đọc thực tế phụ thuộc vào giọng có sẵn trên thiết bị người xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/uploads/... hoặc https://..." data-v-31181c59><div class="video-size-presets" data-v-31181c59><button type="button"${ssrIncludeBooleanAttr(uploadingPanelImage.value) ? " disabled" : ""} data-v-31181c59>${ssrInterpolate(uploadingPanelImage.value && panelImageTargetBlockId.value === block.id ? "Đang tải..." : "Tải ảnh 2D")}</button>`);
                if (block.src) {
                  _push(`<button type="button" data-v-31181c59>Bỏ ảnh</button>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`</div>`);
                if (block.src) {
                  _push(`<img${ssrRenderAttr("src", block.src)}${ssrRenderAttr("alt", block.alt || block.caption || "Ảnh xem trước")} class="max-h-48 w-full rounded-lg bg-black/20 object-contain" data-v-31181c59>`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<input${ssrRenderAttr("value", block.alt)} type="text" placeholder="Mô tả ảnh cho trợ năng" data-v-31181c59><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Chú thích ảnh (không bắt buộc)" data-v-31181c59><!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-31181c59><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Chú thích ảnh (không bắt buộc)" data-v-31181c59><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 hoặc URL" data-v-31181c59><div class="hint-text" data-v-31181c59>AudioBlock chỉ phát tệp âm thanh được tải lên hoặc nhập bằng URL; khối này không tạo giọng đọc từ văn bản.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ngữ cảnh dành cho AI..." data-v-31181c59>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-31181c59><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-31181c59>↑ Lên</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-31181c59>↓ Xuống</button><button type="button" data-v-31181c59>Xóa</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Nội dung thông tin</label><textarea placeholder="Mô tả chi tiết địa điểm..." data-v-31181c59>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Đường dẫn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo hoặc /video.mp4" data-v-31181c59><div class="hint-text" data-v-31181c59>YouTube, Vimeo và video trực tiếp đều hiển thị ngay trong panorama.</div></div><div class="field video-panel-size" data-v-31181c59><label data-v-31181c59>Kích thước panel</label><div class="video-size-presets" data-v-31181c59><button type="button" data-v-31181c59>Nhỏ</button><button type="button" data-v-31181c59>Vừa</button><button type="button" data-v-31181c59>Lớn</button><button type="button" data-v-31181c59>Rất lớn</button></div><div class="video-size-row" data-v-31181c59><span data-v-31181c59>Rộng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-31181c59><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-31181c59></div><div class="video-size-row" data-v-31181c59><span data-v-31181c59>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-31181c59><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-31181c59></div><label class="video-ratio-lock" data-v-31181c59><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-31181c59> Giữ nguyên tỉ lệ khung hình </label><div class="hint-text" data-v-31181c59>Kích thước hiện tại: ${ssrInterpolate(selectedHotspot.value.width ?? 640)} × ${ssrInterpolate(selectedHotspot.value.height ?? 360)} px</div></div><div class="field" data-v-31181c59><label data-v-31181c59>Xoay ngang (Y) <span class="field-badge" data-v-31181c59>${ssrInterpolate(Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))} data-v-31181c59><button class="reset-btn" type="button" title="Về 0°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Quay cạnh trái hoặc phải của màn hình ra xa người xem.</div></div><div class="field" data-v-31181c59><label data-v-31181c59>Nghiêng (X) <span class="field-badge" data-v-31181c59>${ssrInterpolate(Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))} data-v-31181c59><button class="reset-btn" type="button" title="Về 0°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Ngả màn hình lên hoặc xuống trong không gian 3D.</div></div><div class="field" data-v-31181c59><label data-v-31181c59>Xoay mặt phẳng (Z) <span class="field-badge" data-v-31181c59>${ssrInterpolate(Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-31181c59><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))} data-v-31181c59><button class="reset-btn" type="button" title="Về 0°" data-v-31181c59>↺</button></div><div class="hint-text" data-v-31181c59>Xoay panel theo chiều kim đồng hồ hoặc ngược lại.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Ảnh 3D / ảnh 360° của vật thể</label><button class="model-image-picker" type="button" data-v-31181c59>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="Ảnh vật thể" data-v-31181c59>`);
            } else {
              _push(`<span data-v-31181c59>Chọn ảnh được người thiết kế chuẩn bị</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>Mô tả vật thể</label><textarea placeholder="Tên tác phẩm, chất liệu, tác giả..." data-v-31181c59>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-31181c59>Ứng dụng chỉ hiển thị ảnh do người thiết kế cung cấp, không tự tạo mô hình 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-31181c59><div class="field" data-v-31181c59><label data-v-31181c59>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-31181c59></div></div><div class="hint-text" data-v-31181c59>💡 Kéo trực tiếp điểm tương tác trên ảnh panorama để đổi vị trí.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Chế độ tour</div><div class="field" data-v-31181c59><label data-v-31181c59>Kiểu trải nghiệm</label><select${ssrRenderAttr("value", tour.value.mode ?? "free")} data-v-31181c59><option value="free" data-v-31181c59>Tự do khám phá</option><option value="guided" data-v-31181c59>Có hướng dẫn (tự chuyển cảnh)</option></select></div><div class="field" data-v-31181c59><label data-v-31181c59>Thời gian mỗi cảnh (giây)</label><input${ssrRenderAttr("value", tour.value.guidedDuration ?? 8)} type="number" min="3" max="60" data-v-31181c59></div><div class="hint-text" data-v-31181c59>Ở chế độ có hướng dẫn, tour tự động chuyển sang cảnh tiếp theo sau thời gian này.</div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Cảnh bắt đầu</div><div class="field" data-v-31181c59><select${ssrRenderAttr("value", tour.value.initialSceneId ?? tour.value.scenes[0]?.id)} data-v-31181c59><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-31181c59>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Tùy chọn hiển thị</div><div class="toggle-row" data-v-31181c59><label data-v-31181c59>Tự động xoay ảnh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-31181c59><label data-v-31181c59>Hiện bản đồ nhỏ</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value.showMinimap !== false,
          "onUpdate:modelValue": (val) => {
            tour.value.showMinimap = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      } else if (editorMode.value === "highlight" && currentScene.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-31181c59><strong data-v-31181c59>Biên tập vùng sáng</strong><span data-v-31181c59>Vẽ và kéo các node trực tiếp trên panorama</span></div><div class="insp-section" data-v-31181c59>`);
        if (!unref(isDrawingArea)) {
          _push(`<!--[--><div class="field" data-v-31181c59><label data-v-31181c59>Kiểu vùng mới</label><select data-v-31181c59><option value="fill-outline" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "fill-outline") : ssrLooseEqual(newAreaMode.value, "fill-outline")) ? " selected" : ""}>Tô khu vực và sáng đường viền</option><option value="fill" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "fill") : ssrLooseEqual(newAreaMode.value, "fill")) ? " selected" : ""}>Chỉ tô sáng khu vực</option><option value="outline" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(newAreaMode.value) ? ssrLooseContain(newAreaMode.value, "outline") : ssrLooseEqual(newAreaMode.value, "outline")) ? " selected" : ""}>Chỉ tô sáng đường viền</option></select></div>`);
          if (newAreaMode.value !== "fill") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Độ rộng viền ban đầu <span class="field-badge" data-v-31181c59>${ssrInterpolate(newAreaLineWidth.value)} px</span></label><input${ssrRenderAttr("value", newAreaLineWidth.value)} type="range" min="1" max="24" step="1" data-v-31181c59></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="btn-block primary" type="button" data-v-31181c59>${ssrInterpolate(unref(isDrawingArea) ? `Hoàn tất và lưu vùng (${unref(areaDraftPoints).length} node)` : "＋ Tạo vùng")}</button>`);
        if (unref(isDrawingArea)) {
          _push(`<button class="btn-block mt-2" type="button" data-v-31181c59>Hủy tạo vùng</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="hint-text" data-v-31181c59>Chọn kiểu trước, sau đó chấm ít nhất 3 node. Sau khi tạo, kéo trực tiếp các node trắng lớn để sửa điểm vẽ sai.</div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Vùng đã tạo (${ssrInterpolate(currentScene.value.areaHighlights?.length ?? 0)})</div>`);
        if (!currentScene.value.areaHighlights?.length) {
          _push(`<div class="empty-state-mini" data-v-31181c59>Chưa có vùng sáng.</div>`);
        } else {
          _push(`<div class="area-tree" data-v-31181c59><!--[-->`);
          ssrRenderList(currentScene.value.areaHighlights, (area, index) => {
            _push(`<div class="area-tree-group" data-v-31181c59><button type="button" class="${ssrRenderClass([{ active: area.id === selectedAreaId.value }, "map-node-item area-list-item"])}" data-v-31181c59><span class="area-tree-chevron" data-v-31181c59>${ssrInterpolate(area.id === selectedAreaId.value ? "▾" : "▸")}</span><span class="map-node-dot" style="${ssrRenderStyle({ background: area.color ?? "#22c55e" })}" data-v-31181c59></span><span class="map-node-name" data-v-31181c59>Vùng ${ssrInterpolate(index + 1)}</span><span class="map-node-coords" data-v-31181c59>${ssrInterpolate(area.points.length)} node</span></button>`);
            if (area.id === selectedAreaId.value) {
              _push(`<div class="area-tree-nodes" data-v-31181c59><!--[-->`);
              ssrRenderList(area.points, (point, pointIndex) => {
                _push(`<button type="button" class="${ssrRenderClass([{ active: unref(selectedAreaPoint)?.areaId === area.id && unref(selectedAreaPoint).pointIndex === pointIndex }, "map-node-item area-node-item"])}" data-v-31181c59><span class="map-node-dot" style="${ssrRenderStyle(unref(selectedAreaPoint)?.areaId === area.id && unref(selectedAreaPoint).pointIndex === pointIndex ? { background: "#ff8a00" } : void 0)}" data-v-31181c59></span><span class="map-node-name" data-v-31181c59>Node ${ssrInterpolate(pointIndex + 1)}</span><span class="map-node-coords" data-v-31181c59>${ssrInterpolate((point.yaw * RAD_TO_DEG).toFixed(1))}° / ${ssrInterpolate((point.pitch * RAD_TO_DEG).toFixed(1))}°</span><span class="hotspot-row-delete" role="button" tabindex="0" data-v-31181c59>×</span></button>`);
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
          _push(`<!--[--><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Kiểu làm nổi bật</div><div class="field" data-v-31181c59><label data-v-31181c59>Thành phần hiển thị</label><select data-v-31181c59><option value="fill-outline" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "fill-outline") : ssrLooseEqual(selectedArea.value.mode, "fill-outline")) ? " selected" : ""}>Tô khu vực và sáng đường viền</option><option value="fill" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "fill") : ssrLooseEqual(selectedArea.value.mode, "fill")) ? " selected" : ""}>Chỉ tô sáng khu vực</option><option value="outline" data-v-31181c59${ssrIncludeBooleanAttr(Array.isArray(selectedArea.value.mode) ? ssrLooseContain(selectedArea.value.mode, "outline") : ssrLooseEqual(selectedArea.value.mode, "outline")) ? " selected" : ""}>Chỉ làm sáng đường viền</option></select></div><div class="field-row" data-v-31181c59>`);
          if (selectedArea.value.mode !== "outline") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Màu khu vực</label><input${ssrRenderAttr("value", selectedArea.value.color)} type="color" data-v-31181c59></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedArea.value.mode !== "fill") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Màu đường viền</label><input${ssrRenderAttr("value", selectedArea.value.outlineColor)} type="color" data-v-31181c59></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (selectedArea.value.mode !== "outline") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Độ sáng vùng <span class="field-badge" data-v-31181c59>${ssrInterpolate(Math.round((selectedArea.value.opacity ?? 0.34) * 100))}%</span></label><input${ssrRenderAttr("value", selectedArea.value.opacity)} type="range" min="0.05" max="0.9" step="0.05" data-v-31181c59></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedArea.value.mode !== "fill") {
            _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Độ rộng đường sáng <span class="field-badge" data-v-31181c59>${ssrInterpolate(selectedArea.value.lineWidth ?? 5)} px</span></label><input${ssrRenderAttr("value", selectedArea.value.lineWidth)} type="range" min="1" max="24" step="1" data-v-31181c59></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field" data-v-31181c59><label data-v-31181c59>Thời gian chạy đường sáng <span class="field-badge" data-v-31181c59>${ssrInterpolate(selectedArea.value.durationMs ?? 1400)} ms</span></label><input${ssrRenderAttr("value", selectedArea.value.durationMs)} type="range" min="400" max="4000" step="100" data-v-31181c59></div><div class="hint-text" data-v-31181c59>Đường sáng chạy hết chu vi, sau đó vùng được giữ sáng trong 3 giây rồi tắt hoàn toàn. Trong trình chỉnh sửa, vùng luôn hiện để bạn căn node.</div></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Thao tác node</div><button class="btn-block" type="button" data-v-31181c59>${ssrInterpolate(unref(areaPointTargetId) === selectedArea.value.id ? "Đang chờ vị trí…" : "＋ Thêm node bằng click")}</button><div class="hint-text" data-v-31181c59>Chọn node ngay trong cây “Vùng đã tạo” ở phía trên. Node được chọn sẽ chuyển màu cam trên panorama và có thể kéo.</div><button class="btn-block danger mt-2" type="button" data-v-31181c59>Xóa vùng này</button></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "map" && tour.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-31181c59><strong data-v-31181c59>Bản đồ vị trí thực</strong><span data-v-31181c59>GPS của từng cảnh panorama</span></div><div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Cảnh đang đặt</div><div class="geo-current-scene" data-v-31181c59>${ssrInterpolate(currentScene.value?.title)}</div>`);
        if (currentScene.value) {
          _push(`<div class="toggle-row" data-v-31181c59><label data-v-31181c59>Hiện cố định trên bản đồ</label>`);
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
        _push(`<div class="field-row" data-v-31181c59><div class="field" data-v-31181c59><label data-v-31181c59>Kinh độ</label><input type="number" step="0.000001"${ssrRenderAttr("value", currentScene.value?.coordinates?.[0] ?? "")} placeholder="108.2022" data-v-31181c59></div><div class="field" data-v-31181c59><label data-v-31181c59>Vĩ độ</label><input type="number" step="0.000001"${ssrRenderAttr("value", currentScene.value?.coordinates?.[1] ?? "")} placeholder="16.0544" data-v-31181c59></div></div><div class="hint-text" data-v-31181c59>Tọa độ luôn dùng cho vị trí và hướng camera. Chỉ cảnh bật “Hiện cố định” mới xuất hiện khi nó không phải cảnh hiện tại.</div></div>`);
        if (currentScene.value) {
          _push(`<div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Xoay panorama trên bản đồ</div><div class="brightness-control" data-v-31181c59><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", (currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG)} data-v-31181c59><output data-v-31181c59>${ssrInterpolate(Math.round((currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG))}°</output></div><div class="field mt-2" data-v-31181c59><label data-v-31181c59>Góc xoay chính xác</label><input type="number" min="-180" max="180" step="0.1"${ssrRenderAttr("value", ((currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG).toFixed(1))} data-v-31181c59></div><div class="brightness-presets" data-v-31181c59><button type="button" data-v-31181c59>-90°</button><button type="button" data-v-31181c59>Đặt lại</button><button type="button" data-v-31181c59>+90°</button></div><div class="hint-text" data-v-31181c59>Giá trị này xoay chính panorama và toàn bộ marker của cảnh. Nó không thay đổi camera.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="insp-section" data-v-31181c59><div class="insp-section-title" data-v-31181c59>Các cảnh trên bản đồ</div><!--[-->`);
        ssrRenderList(tour.value.scenes, (scene, index) => {
          _push(`<button type="button" class="${ssrRenderClass([{ active: scene.id === currentScene.value?.id }, "geo-scene-row"])}" data-v-31181c59><span class="map-node-dot" style="${ssrRenderStyle({ background: scene.coordinates ? "#3b82f6" : "#64748b" })}" data-v-31181c59></span><span data-v-31181c59>${ssrInterpolate(scene.title)}</span><small data-v-31181c59>${ssrInterpolate(scene.coordinates ? `${scene.showOnMap === true ? "Hiện" : "Ẩn"} · ${scene.coordinates[1].toFixed(5)}, ${scene.coordinates[0].toFixed(5)}` : "Chưa đặt")}</small></button>`);
        });
        _push(`<!--]--></div>`);
        {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-31181c59><div class="modal" data-v-31181c59><div class="modal-head" data-v-31181c59><div data-v-31181c59><span class="modal-eyebrow" data-v-31181c59>Điểm tương tác mới</span><h3 data-v-31181c59>Chọn hành động khi người xem nhấn vào</h3></div><button class="modal-close" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-31181c59><path d="M18 6 6 18" data-v-31181c59></path><path d="m6 6 12 12" data-v-31181c59></path></svg></button></div><div class="modal-body" data-v-31181c59><div class="type-grid" data-v-31181c59><div class="type-card nav" data-v-31181c59><div class="type-card-icon nav" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-31181c59><path d="M12 4 L12 18" data-v-31181c59></path><path d="M6 11 L12 5 L18 11" data-v-31181c59></path></svg></div><strong data-v-31181c59>Chuyển cảnh</strong><span data-v-31181c59>Đi tới một ảnh panorama khác</span></div><div class="type-card video" data-v-31181c59><div class="type-card-icon video" data-v-31181c59><svg viewBox="0 0 24 24" fill="currentColor" data-v-31181c59><path d="M8 5v14l11-7z" data-v-31181c59></path></svg></div><strong data-v-31181c59>Xem video</strong><span data-v-31181c59>Mở video giới thiệu hoặc tư liệu</span></div><div class="type-card info" data-v-31181c59><div class="type-card-icon info" data-v-31181c59><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-31181c59><rect x="4" y="4" width="16" height="16" rx="3" data-v-31181c59></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-31181c59></path></svg></div><strong data-v-31181c59>Panel nội dung</strong><span data-v-31181c59>Kết hợp văn bản, ảnh 3D, âm thanh và AI</span></div></div></div><div class="modal-foot" data-v-31181c59><button class="tb-btn" data-v-31181c59>Hủy</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-31181c59"]]);
export {
  _sceneId_ as default
};
//# sourceMappingURL=_sceneId_-81C_-W6x.js.map
