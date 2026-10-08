import { _ as __nuxt_component_0 } from "./nuxt-link-AvfA4aCh.js";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Switch-CNCj6PJD.js";
import { _ as _sfc_main$2 } from "./Spinner-mjqtnuYo.js";
import { u as useRoute, b as useRouter, a as useToast, c as __nuxt_component_4, _ as _export_sfc } from "../server.mjs";
import { ref, computed, shallowRef, readonly, defineComponent, withAsyncContext, watch, nextTick, withCtx, createTextVNode, createVNode, openBlock, createBlock, unref, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain } from "vue/server-renderer";
import { V as View360Engine, M as MarkerPlugin } from "./MarkerPlugin-BvNdmFSc.js";
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
  function handlePlacementClick(ev, canvas, e) {
    const rect = canvas.getBoundingClientRect();
    const ndcX = (ev.clientX - rect.left) / rect.width * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    import("./MarkerPlugin-BvNdmFSc.js").then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
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
      Math.max(30, Math.min(120, fov))
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
      cameraPitch,
      cameraFov,
      interactionMode,
      lastPanoramaRotation,
      lastMarkerMoved,
      lastMarkerClicked,
      lastPlacement,
      loadScene: engineLoadScene,
      refreshMarkers
    } = useDesignerEngine();
    watch(cameraFov, (fov) => {
      zoom.value = Math.round(50 + (120 - fov) / 90 * 150);
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
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-6846f4fe><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-6846f4fe><input type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" class="hidden" data-v-6846f4fe><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-6846f4fe><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-6846f4fe><header class="topbar" data-v-6846f4fe><div class="tb-logo" data-v-6846f4fe><div class="tb-logo-mark" data-v-6846f4fe>SV</div><div class="tb-logo-text" data-v-6846f4fe><strong data-v-6846f4fe>Sông Vân Studio</strong><span data-v-6846f4fe>${ssrInterpolate(tour.value?.title ?? "Không gian triển lãm")}</span></div></div><div class="tb-breadcrumb" data-v-6846f4fe>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6846f4fe><path d="m9 18 6-6-6-6" data-v-6846f4fe></path></svg><strong id="breadcrumbTour" data-v-6846f4fe>${ssrInterpolate(tour.value?.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6846f4fe><path d="m9 18 6-6-6-6" data-v-6846f4fe></path></svg><span id="breadcrumbScene" data-v-6846f4fe>${ssrInterpolate(currentScene.value?.title)}</span></div><div class="tb-spacer" data-v-6846f4fe></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-6846f4fe><span class="dot" data-v-6846f4fe></span><span id="saveText" data-v-6846f4fe>${ssrInterpolate(saving.value ? "Đang lưu..." : isDirty.value ? "Có thay đổi chưa lưu" : "Đã lưu")}</span></div><div class="tb-actions" data-v-6846f4fe>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Hoàn tác (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-6846f4fe${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe${_scopeId}><path d="M3 7v6h6" data-v-6846f4fe${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-6846f4fe${_scopeId}></path></svg></button>`);
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
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-6846f4fe${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe${_scopeId}><path d="M21 7v6h-6" data-v-6846f4fe${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-6846f4fe${_scopeId}></path></svg></button>`);
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
      _push(`<button class="tb-btn" id="previewBtn" data-v-6846f4fe>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-6846f4fe></path><circle cx="12" cy="12" r="3" data-v-6846f4fe></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-6846f4fe></path></svg>`);
      }
      _push(`<span data-v-6846f4fe>${ssrInterpolate(previewMode.value ? "Chỉnh sửa" : "Xem trước")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-6846f4fe>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-6846f4fe></path><path d="M17 21v-8H7v8" data-v-6846f4fe></path><path d="M7 3v5h8" data-v-6846f4fe></path></svg>`);
      }
      _push(`<span data-v-6846f4fe>Lưu</span></button></div></header><aside class="sidebar-left" data-v-6846f4fe><div class="side-head" data-v-6846f4fe><div class="side-head-row" data-v-6846f4fe><h3 data-v-6846f4fe>Danh sách cảnh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Thêm cảnh mới",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn"${ssrIncludeBooleanAttr(addingScene.value) ? " disabled" : ""} data-v-6846f4fe${_scopeId}>`);
            if (addingScene.value) {
              _push2(ssrRenderComponent(_component_UiSpinner, { size: "sm" }, null, _parent2, _scopeId));
            } else {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-6846f4fe${_scopeId}><path d="M12 5v14M5 12h14" data-v-6846f4fe${_scopeId}></path></svg>`);
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
      _push(`</div><p id="sceneCount" data-v-6846f4fe>${ssrInterpolate(tour.value?.scenes.length ?? 0)} cảnh · Kéo để sắp xếp</p></div><div class="scene-list" id="sceneList" data-v-6846f4fe><!--[-->`);
      ssrRenderList(tour.value?.scenes ?? [], (s, idx) => {
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-6846f4fe><span class="scene-drag" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="currentColor" data-v-6846f4fe><circle cx="9" cy="6" r="1.5" data-v-6846f4fe></circle><circle cx="15" cy="6" r="1.5" data-v-6846f4fe></circle><circle cx="9" cy="12" r="1.5" data-v-6846f4fe></circle><circle cx="15" cy="12" r="1.5" data-v-6846f4fe></circle><circle cx="9" cy="18" r="1.5" data-v-6846f4fe></circle><circle cx="15" cy="18" r="1.5" data-v-6846f4fe></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail)}${ssrRenderAttr("alt", s.title)} loading="lazy" decoding="async" data-v-6846f4fe><div class="scene-info" data-v-6846f4fe><strong data-v-6846f4fe>${ssrInterpolate(s.title)}</strong><span data-v-6846f4fe>${ssrInterpolate(s.markers?.length ?? 0)} điểm tương tác${ssrInterpolate(tour.value?.initialSceneId === s.id ? " · ★ Bắt đầu" : "")}</span></div>`);
        if (tour.value?.initialSceneId === s.id) {
          _push(`<span class="scene-badge" data-v-6846f4fe>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay đổi chiều rộng danh sách cảnh" data-v-6846f4fe></div><main class="preview" data-v-6846f4fe><div class="preview-toolbar" data-v-6846f4fe><div class="editor-mode-switch" data-v-6846f4fe><button type="button" class="${ssrRenderClass({ active: editorMode.value === "panorama" })}" data-v-6846f4fe>Panorama</button><button type="button" class="${ssrRenderClass({ active: editorMode.value === "map" })}" data-v-6846f4fe>Bản đồ</button></div>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="editor-mode-switch alignment-mode-switch" data-v-6846f4fe><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "camera" })}" data-v-6846f4fe>Xoay camera</button><button type="button" class="${ssrRenderClass({ active: unref(interactionMode) === "panorama" })}" data-v-6846f4fe>Xoay panorama</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama" && unref(interactionMode) === "camera" && currentScene.value) {
        _push(`<div class="default-camera-control" title="Nếu bật, người xem sẽ quay về góc này mỗi khi đi vào cảnh" data-v-6846f4fe><label data-v-6846f4fe><input type="checkbox"${ssrIncludeBooleanAttr(currentScene.value.defaultCameraEnabled === true) ? " checked" : ""} data-v-6846f4fe><span data-v-6846f4fe>Góc vào cảnh</span></label>`);
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<button type="button" data-v-6846f4fe> Lấy góc hiện tại </button>`);
        } else {
          _push(`<!---->`);
        }
        if (currentScene.value.defaultCameraEnabled) {
          _push(`<output data-v-6846f4fe>${ssrInterpolate(Math.round(currentScene.value.initialYaw * RAD_TO_DEG))}° / ${ssrInterpolate(Math.round(currentScene.value.initialPitch * RAD_TO_DEG))}° / Zoom ${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan((currentScene.value.initialFov ?? 75) * Math.PI / 360)).toFixed(2))}× </output>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-6846f4fe><path d="M12 5v14M5 12h14" data-v-6846f4fe></path></svg><span data-v-6846f4fe>${ssrInterpolate(isPlacingHotspot.value ? "Đang đặt... (ESC)" : "Đặt điểm tương tác")}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-6846f4fe>Nhấn vào ảnh để chọn vị trí</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-6846f4fe></div><div class="pt-zoom" data-v-6846f4fe><button id="zoomOut" title="Thu nhỏ" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6846f4fe><path d="M5 12h14" data-v-6846f4fe></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-6846f4fe>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Phóng to" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6846f4fe><path d="M12 5v14M5 12h14" data-v-6846f4fe></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-6846f4fe><div class="h-full w-full" style="${ssrRenderStyle({ visibility: editorMode.value === "panorama" ? "visible" : "hidden" })}" data-v-6846f4fe></div>`);
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
        _push(`<div class="panorama-rotation-hint" data-v-6846f4fe> Kéo ngang để xoay panorama · Camera đang được giữ cố định </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-6846f4fe> Nhấn lên ảnh để đặt điểm tương tác · ESC để hủy </div>`);
      } else {
        _push(`<!---->`);
      }
      if (editorMode.value === "panorama") {
        _push(`<div class="preview-info" data-v-6846f4fe><span class="preview-info-badge" data-v-6846f4fe>CẢNH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate(tour.value?.scenes.length ?? 1)}</span><span class="preview-info-title" id="infoTitle" data-v-6846f4fe>${ssrInterpolate(currentScene.value?.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-6846f4fe>`);
        if (isPlacingHotspot.value) {
          _push(`<!--[-->Nhấn vị trí bất kỳ để đặt<!--]-->`);
        } else {
          _push(`<!--[--> Yaw ${ssrInterpolate((unref(cameraYaw) * RAD_TO_DEG).toFixed(1))}° · Pitch ${ssrInterpolate((unref(cameraPitch) * RAD_TO_DEG).toFixed(1))}° · Zoom ${ssrInterpolate((Math.tan(75 * Math.PI / 360) / Math.tan(unref(cameraFov) * Math.PI / 360)).toFixed(2))}× · FOV ${ssrInterpolate(unref(cameraFov).toFixed(1))}° <!--]-->`);
        }
        _push(`</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><div class="resizer resizer-right" aria-label="Thay đổi chiều rộng bảng thuộc tính" data-v-6846f4fe></div><aside class="inspector sidebar-right" data-v-6846f4fe>`);
      if (editorMode.value === "panorama") {
        _push(`<div class="insp-tabs" data-v-6846f4fe><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-6846f4fe> Cảnh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-6846f4fe> Điểm tương tác </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-6846f4fe> Cài đặt </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="insp-body" id="inspBody" data-v-6846f4fe>`);
      if (editorMode.value === "panorama" && currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Thông tin cảnh</div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Tên cảnh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Mô tả ngắn</label><textarea id="fieldDesc" data-v-6846f4fe>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Ảnh panorama</div><div class="img-picker" id="imgPicker" title="Nhấn để tải ảnh panorama từ máy tính" data-v-6846f4fe>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.thumbnail || currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} decoding="async" data-v-6846f4fe>`);
        } else {
          _push(`<div class="image-error" data-v-6846f4fe>Không đọc được ảnh. Hãy kiểm tra đường dẫn hoặc tải ảnh mới.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-6846f4fe>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-6846f4fe></path><polyline points="17 8 12 3 7 8" data-v-6846f4fe></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-6846f4fe></line></svg><span data-v-6846f4fe>${ssrInterpolate(uploadingImage.value ? "Đang tải lên..." : "Đổi ảnh (Tải lên)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-6846f4fe><label data-v-6846f4fe>URL ảnh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... hoặc /uploads/..." data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>URL ảnh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... hoặc /thumbnails/..." data-v-6846f4fe></div><div class="hint-text" data-v-6846f4fe>💡 Nhấn vào ô xem trước để chọn file từ máy tính hoặc dán đường dẫn URL trực tiếp.</div></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Ánh sáng hình ảnh</div><div class="brightness-control" data-v-6846f4fe><input${ssrRenderAttr("value", currentScene.value.brightness ?? 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-6846f4fe><output data-v-6846f4fe>${ssrInterpolate(Math.round((currentScene.value.brightness ?? 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-6846f4fe><button type="button" data-v-6846f4fe>Gốc</button><button type="button" data-v-6846f4fe>Mặc định</button><button type="button" data-v-6846f4fe>Sáng rõ</button></div><label class="sub-control-label" data-v-6846f4fe>Giảm vùng chói</label><div class="brightness-control" data-v-6846f4fe><input${ssrRenderAttr("value", currentScene.value.highlightCompression ?? 0)} type="range" min="0" max="1" step="0.05" data-v-6846f4fe><output data-v-6846f4fe>${ssrInterpolate(Math.round((currentScene.value.highlightCompression ?? 0) * 100))}%</output></div><div class="brightness-presets" data-v-6846f4fe><button type="button" data-v-6846f4fe>Tắt</button><button type="button" data-v-6846f4fe>Nhẹ</button><button type="button" data-v-6846f4fe>Mạnh</button></div><div class="hint-text" data-v-6846f4fe>Chỉ nén vùng trời và nguồn sáng gắt; không thay đổi file ảnh gốc.</div></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Vị trí trong tour</div><div class="field-row" data-v-6846f4fe><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Thứ tự</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", tour.value?.scenes.length)} data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-6846f4fe></div></div><div class="toggle-row" data-v-6846f4fe><label for="isStartToggle" data-v-6846f4fe>Đặt làm cảnh bắt đầu</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value?.initialSceneId === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-6846f4fe><button class="btn-block danger" id="deleteSceneBtn" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M3 6h18" data-v-6846f4fe></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-6846f4fe></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-6846f4fe></path></svg> Xóa cảnh này </button></div><!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe><span data-v-6846f4fe>Điểm tương tác trong cảnh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-6846f4fe><circle cx="12" cy="12" r="10" data-v-6846f4fe></circle><path d="M12 8v8M8 12h8" data-v-6846f4fe></path></svg> Chưa có điểm tương tác nào.<br data-v-6846f4fe>Nhấn “Đặt điểm tương tác” để bắt đầu. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-6846f4fe><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-6846f4fe><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-6846f4fe>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M12 4 L12 18" data-v-6846f4fe></path><path d="M6 11 L12 5 L18 11" data-v-6846f4fe></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-6846f4fe><path d="M8 5v14l11-7z" data-v-6846f4fe></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-6846f4fe><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-6846f4fe></path><path d="M12 22V12M3 7l9 5 9-5" data-v-6846f4fe></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-6846f4fe><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-6846f4fe></circle><path d="M12 11 L12 18" data-v-6846f4fe></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-6846f4fe>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-6846f4fe><path d="M18 6 6 18" data-v-6846f4fe></path><path d="m6 6 12 12" data-v-6846f4fe></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-6846f4fe><path d="M12 5v14M5 12h14" data-v-6846f4fe></path></svg> Thêm điểm tương tác </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Chỉnh sửa điểm tương tác</div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Nhãn hiển thị</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-6846f4fe></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-6846f4fe><label data-v-6846f4fe>Cảnh đích</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-6846f4fe><option value="" disabled data-v-6846f4fe>— Chọn cảnh —</option><!--[-->`);
            ssrRenderList(tour.value?.scenes ?? [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-6846f4fe>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Kiểu hiển thị</label><div class="nav-icon-mode-toggle" data-v-6846f4fe><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["arrow", "arrow-1", "arrow-2"].includes(selectedHotspot.value.icon ?? "arrow") }])}" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle({ "width": "18px", "height": "18px" })}" data-v-6846f4fe><path d="m5 15 7-6 7 6" data-v-6846f4fe></path><path d="m5 21 7-6 7 6" data-v-6846f4fe></path></svg> Mũi tên </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["local", "location-1", "pin"].includes(selectedHotspot.value.icon ?? "") }])}" data-v-6846f4fe><svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "16px", "height": "20px" })}" data-v-6846f4fe><path d="M12 26S3 17.2 3 10a9 9 0 1 1 18 0c0 7.2-9 16-9 16Z" data-v-6846f4fe></path><circle cx="12" cy="10" r="3.5" data-v-6846f4fe></circle></svg> Local </button><button type="button" class="${ssrRenderClass(["nav-mode-btn", { active: ["drone", "location-2", "pin-top", "anchor"].includes(selectedHotspot.value.icon ?? "") }])}" data-v-6846f4fe><svg viewBox="0 0 24 30" fill="none" stroke="currentColor" stroke-width="2" style="${ssrRenderStyle({ "width": "15px", "height": "21px" })}" data-v-6846f4fe><path d="M12 28C10.5 21 4 17 4 9.5a8 8 0 1 1 16 0C20 17 13.5 21 12 28Z" data-v-6846f4fe></path><circle cx="12" cy="9.5" r="3" data-v-6846f4fe></circle></svg> Drone </button></div></div>`);
            if (!navigationIsArrow(selectedHotspot.value)) {
              _push(`<div class="field" data-v-6846f4fe><label data-v-6846f4fe>Font tiêu đề trên View</label><select${ssrRenderAttr("value", selectedHotspot.value.labelFont ?? "be-vietnam-pro")} data-v-6846f4fe><option value="be-vietnam-pro" data-v-6846f4fe>Be Vietnam Pro</option><option value="outfit" data-v-6846f4fe>Outfit</option><option value="montserrat" data-v-6846f4fe>Montserrat</option><option value="serif" data-v-6846f4fe>Serif nghệ thuật</option></select><div class="hint-text" data-v-6846f4fe>Font chỉ áp dụng cho tiêu đề đi kèm leader line ở trang View.</div></div>`);
            } else {
              _push(`<!---->`);
            }
            if (["local", "drone", "location-1", "location-2", "pin", "pin-top", "anchor"].includes(selectedHotspot.value.icon ?? "")) {
              _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Màu pin</label><div class="pin-color-row" data-v-6846f4fe><input type="color"${ssrRenderAttr("value", selectedHotspot.value.pinColor ?? "#171717")} data-v-6846f4fe><div class="pin-color-presets" data-v-6846f4fe><!--[-->`);
              ssrRenderList(["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#1d6fa8", "#171717"], (c) => {
                _push(`<button type="button" style="${ssrRenderStyle({ background: c })}" class="${ssrRenderClass([{ active: selectedHotspot.value.pinColor === c }, "pin-color-swatch"])}" data-v-6846f4fe></button>`);
              });
              _push(`<!--]--></div></div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Ảnh bên trong pin <span style="${ssrRenderStyle({ "opacity": ".5", "font-weight": "400" })}" data-v-6846f4fe>(tuỳ chọn)</span></label><input${ssrRenderAttr("value", selectedHotspot.value.iconUrl ?? "")} type="text" placeholder="/thumbnails/scene.jpg hoặc để trống" data-v-6846f4fe><div class="hint-text" data-v-6846f4fe>Để trống = pin trắng trơn. Có ảnh = thumbnail tròn bên trong pin.</div></div>`);
              if (selectedHotspot.value.targetScene) {
                _push(`<div class="field" data-v-6846f4fe><button type="button" class="btn-fill-thumb" data-v-6846f4fe> 📷 Dùng thumbnail cảnh đích </button></div>`);
              } else {
                _push(`<!---->`);
              }
              if (selectedHotspot.value.iconUrl) {
                _push(`<div class="field nav-icon-preview" data-v-6846f4fe><label data-v-6846f4fe>Xem trước ảnh</label><div class="nav-icon-preview-frame" data-v-6846f4fe><img${ssrRenderAttr("src", selectedHotspot.value.iconUrl)} alt="Xem trước ảnh trong pin" data-v-6846f4fe></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<div class="field" data-v-6846f4fe><label data-v-6846f4fe> Kích thước pin <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(selectedHotspot.value.iconSize ?? 65)}px</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="35" max="150" step="5"${ssrRenderAttr("value", selectedHotspot.value.iconSize ?? 65)} data-v-6846f4fe><button class="reset-btn" type="button" title="Về 65" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Kích thước pin trong không gian 3D (world units). Mặc định: 65.</div></div><!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-6846f4fe><label data-v-6846f4fe> Độ sâu trên mặt cầu 3D <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(Math.round(selectedHotspot.value.sphereRadius ?? 520))}</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="120" max="580" step="5"${ssrRenderAttr("value", selectedHotspot.value.sphereRadius ?? 520)} data-v-6846f4fe><button class="reset-btn" type="button" title="Về mặt cầu mặc định" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>120 = gần camera; 520 = mặc định; 580 = sát bề mặt panorama.</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" && ["arrow", "arrow-1", "arrow-2"].includes(selectedHotspot.value.icon ?? "arrow")) {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe> Xoay (Z) — chiều nghiêng <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotZ"))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotZ"))} data-v-6846f4fe><button class="reset-btn" title="Về 0°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>0° = ^^ hướng lên. 90° = phải. -90° = trái.</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe> Nghiêng (X) — đứng / nằm <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotX"))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotX"))} data-v-6846f4fe><button class="reset-btn" title="Về 60°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Mặc định 60° để mũi tên nằm theo mặt sàn. 0° = đứng thẳng.</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe> Xoay ngang (Y) — quay mặt <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(navigationRotationDegrees(selectedHotspot.value, "rotY"))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", navigationRotationDegrees(selectedHotspot.value, "rotY"))} data-v-6846f4fe><button class="reset-btn" title="Về 0°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Xoay mặt mũi tên sang trái/phải trong không gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe> Phóng ngang (X) <span class="field-badge" data-v-6846f4fe>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleX") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleX"))} data-v-6846f4fe><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsArrow(selectedHotspot.value) ? "Về 160%" : "Về 100%")} data-v-6846f4fe>↺</button></div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe> Phóng dọc (Y) <span class="field-badge" data-v-6846f4fe>${ssrInterpolate((planeMarkerScale(selectedHotspot.value, "scaleY") * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", planeMarkerScale(selectedHotspot.value, "scaleY"))} data-v-6846f4fe><button class="reset-btn" type="button"${ssrRenderAttr("title", selectedHotspot.value.plugin === "navigation" && navigationIsLocal(selectedHotspot.value) ? "Về 80%" : "Về 100%")} data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>X và Y thay đổi độc lập; marker mặt phẳng không sử dụng chiều sâu Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Hướng hiển thị panel</label><select${ssrRenderAttr("value", selectedHotspot.value.placement ?? "vertical")} data-v-6846f4fe><option value="vertical" data-v-6846f4fe>Chiều dọc</option><option value="horizontal" data-v-6846f4fe>Chiều ngang</option></select><div class="hint-text" data-v-6846f4fe>Hệ thống tự chọn trên/dưới hoặc trái/phải theo khoảng trống còn lại.</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Nội dung trong panel</label><div class="video-size-presets" data-v-6846f4fe><button type="button" data-v-6846f4fe>+ Văn bản</button><button type="button" data-v-6846f4fe>+ Ảnh 3D</button><button type="button" data-v-6846f4fe>+ Âm thanh</button><button type="button" data-v-6846f4fe>+ AI Chat</button></div><div class="hint-text" data-v-6846f4fe>Có thể kết hợp nhiều loại và thay đổi thứ tự hiển thị.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              _push(`<div class="field panel-block-editor" data-v-6846f4fe><label data-v-6846f4fe>${ssrInterpolate(block.type === "text" ? "Văn bản" : block.type === "image3d" ? "Ảnh 3D" : block.type === "audio" ? "Âm thanh" : "AI Chat")} <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="Nội dung mô tả..." data-v-6846f4fe>${ssrInterpolate(block.content)}</textarea><label data-v-6846f4fe>Chế độ hiển thị</label><select${ssrRenderAttr("value", block.presentation ?? "text-only")} data-v-6846f4fe><option value="text-only" data-v-6846f4fe>Chỉ văn bản</option><option value="text-and-audio" data-v-6846f4fe>Văn bản và bản đọc</option><option value="audio-only" data-v-6846f4fe>Chỉ bản đọc</option></select>`);
                if ((block.presentation ?? "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-6846f4fe>File bản đọc (VieNeu-TTS)</label><input${ssrRenderAttr("value", block.speech?.src ?? "")} type="text" placeholder="/uploads/audio/ban-doc.wav hoặc URL" data-v-6846f4fe><div class="video-size-presets" data-v-6846f4fe><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-6846f4fe>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "Đang tải..." : "Tải file bản đọc")}</button>`);
                  if (block.speech?.src) {
                    _push(`<button type="button" data-v-6846f4fe>Bỏ file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if (block.speech?.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-6846f4fe></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-6846f4fe>Xuất WAV/MP3 từ VieNeu-TTS rồi tải lên đây. Khi có file, thanh tiến trình sẽ dùng đúng thời lượng audio.</div>`);
                  if (!block.speech?.src) {
                    _push(`<details data-v-6846f4fe><summary data-v-6846f4fe>Giọng trình duyệt dự phòng</summary><select${ssrRenderAttr("value", block.speech?.lang ?? "vi-VN")} data-v-6846f4fe><option value="vi-VN" data-v-6846f4fe>Tiếng Việt</option><option value="en-US" data-v-6846f4fe>English (US)</option><option value="en-GB" data-v-6846f4fe>English (UK)</option><option value="fr-FR" data-v-6846f4fe>Français</option><option value="ja-JP" data-v-6846f4fe>日本語</option><option value="ko-KR" data-v-6846f4fe>한국어</option></select><label data-v-6846f4fe>Tốc độ <span class="field-badge" data-v-6846f4fe>${ssrInterpolate((block.speech?.rate ?? 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.rate ?? 1)} data-v-6846f4fe><label data-v-6846f4fe>Cao độ <span class="field-badge" data-v-6846f4fe>${ssrInterpolate((block.speech?.pitch ?? 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.pitch ?? 1)} data-v-6846f4fe><div class="hint-text" data-v-6846f4fe>Giọng đọc thực tế phụ thuộc vào giọng có sẵn trên thiết bị người xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-6846f4fe><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Chú thích ảnh (không bắt buộc)" data-v-6846f4fe><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 hoặc URL" data-v-6846f4fe><div class="hint-text" data-v-6846f4fe>AudioBlock chỉ phát tệp âm thanh được tải lên hoặc nhập bằng URL; khối này không tạo giọng đọc từ văn bản.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ngữ cảnh dành cho AI..." data-v-6846f4fe>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-6846f4fe><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-6846f4fe>↑ Lên</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-6846f4fe>↓ Xuống</button><button type="button" data-v-6846f4fe>Xóa</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-6846f4fe><label data-v-6846f4fe>Nội dung thông tin</label><textarea placeholder="Mô tả chi tiết địa điểm..." data-v-6846f4fe>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Đường dẫn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo hoặc /video.mp4" data-v-6846f4fe><div class="hint-text" data-v-6846f4fe>YouTube, Vimeo và video trực tiếp đều hiển thị ngay trong panorama.</div></div><div class="field video-panel-size" data-v-6846f4fe><label data-v-6846f4fe>Kích thước panel</label><div class="video-size-presets" data-v-6846f4fe><button type="button" data-v-6846f4fe>Nhỏ</button><button type="button" data-v-6846f4fe>Vừa</button><button type="button" data-v-6846f4fe>Lớn</button><button type="button" data-v-6846f4fe>Rất lớn</button></div><div class="video-size-row" data-v-6846f4fe><span data-v-6846f4fe>Rộng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-6846f4fe><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-6846f4fe></div><div class="video-size-row" data-v-6846f4fe><span data-v-6846f4fe>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-6846f4fe><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-6846f4fe></div><label class="video-ratio-lock" data-v-6846f4fe><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-6846f4fe> Giữ nguyên tỉ lệ khung hình </label><div class="hint-text" data-v-6846f4fe>Kích thước hiện tại: ${ssrInterpolate(selectedHotspot.value.width ?? 640)} × ${ssrInterpolate(selectedHotspot.value.height ?? 360)} px</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Xoay ngang (Y) <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))} data-v-6846f4fe><button class="reset-btn" type="button" title="Về 0°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Quay cạnh trái hoặc phải của màn hình ra xa người xem.</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Nghiêng (X) <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))} data-v-6846f4fe><button class="reset-btn" type="button" title="Về 0°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Ngả màn hình lên hoặc xuống trong không gian 3D.</div></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Xoay mặt phẳng (Z) <span class="field-badge" data-v-6846f4fe>${ssrInterpolate(Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-6846f4fe><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))} data-v-6846f4fe><button class="reset-btn" type="button" title="Về 0°" data-v-6846f4fe>↺</button></div><div class="hint-text" data-v-6846f4fe>Xoay panel theo chiều kim đồng hồ hoặc ngược lại.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Ảnh 3D / ảnh 360° của vật thể</label><button class="model-image-picker" type="button" data-v-6846f4fe>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="Ảnh vật thể" data-v-6846f4fe>`);
            } else {
              _push(`<span data-v-6846f4fe>Chọn ảnh được người thiết kế chuẩn bị</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Mô tả vật thể</label><textarea placeholder="Tên tác phẩm, chất liệu, tác giả..." data-v-6846f4fe>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-6846f4fe>Ứng dụng chỉ hiển thị ảnh do người thiết kế cung cấp, không tự tạo mô hình 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-6846f4fe><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-6846f4fe></div></div><div class="hint-text" data-v-6846f4fe>💡 Kéo trực tiếp điểm tương tác trên ảnh panorama để đổi vị trí.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (editorMode.value === "panorama" && currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Chế độ tour</div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Kiểu trải nghiệm</label><select${ssrRenderAttr("value", tour.value.mode ?? "free")} data-v-6846f4fe><option value="free" data-v-6846f4fe>Tự do khám phá</option><option value="guided" data-v-6846f4fe>Có hướng dẫn (tự chuyển cảnh)</option></select></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Thời gian mỗi cảnh (giây)</label><input${ssrRenderAttr("value", tour.value.guidedDuration ?? 8)} type="number" min="3" max="60" data-v-6846f4fe></div><div class="hint-text" data-v-6846f4fe>Ở chế độ có hướng dẫn, tour tự động chuyển sang cảnh tiếp theo sau thời gian này.</div></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Cảnh bắt đầu</div><div class="field" data-v-6846f4fe><select${ssrRenderAttr("value", tour.value.initialSceneId ?? tour.value.scenes[0]?.id)} data-v-6846f4fe><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-6846f4fe>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Tùy chọn hiển thị</div><div class="toggle-row" data-v-6846f4fe><label data-v-6846f4fe>Tự động xoay ảnh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-6846f4fe><label data-v-6846f4fe>Hiện bản đồ nhỏ</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value.showMinimap !== false,
          "onUpdate:modelValue": (val) => {
            tour.value.showMinimap = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      } else if (editorMode.value === "map" && tour.value) {
        _push(`<!--[--><div class="map-mode-heading" data-v-6846f4fe><strong data-v-6846f4fe>Bản đồ vị trí thực</strong><span data-v-6846f4fe>GPS của từng cảnh panorama</span></div><div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Cảnh đang đặt</div><div class="geo-current-scene" data-v-6846f4fe>${ssrInterpolate(currentScene.value?.title)}</div>`);
        if (currentScene.value) {
          _push(`<div class="toggle-row" data-v-6846f4fe><label data-v-6846f4fe>Hiện cố định trên bản đồ</label>`);
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
        _push(`<div class="field-row" data-v-6846f4fe><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Kinh độ</label><input type="number" step="0.000001"${ssrRenderAttr("value", currentScene.value?.coordinates?.[0] ?? "")} placeholder="108.2022" data-v-6846f4fe></div><div class="field" data-v-6846f4fe><label data-v-6846f4fe>Vĩ độ</label><input type="number" step="0.000001"${ssrRenderAttr("value", currentScene.value?.coordinates?.[1] ?? "")} placeholder="16.0544" data-v-6846f4fe></div></div><div class="hint-text" data-v-6846f4fe>Tọa độ luôn dùng cho vị trí và hướng camera. Chỉ cảnh bật “Hiện cố định” mới xuất hiện khi nó không phải cảnh hiện tại.</div></div>`);
        if (currentScene.value) {
          _push(`<div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Xoay panorama trên bản đồ</div><div class="brightness-control" data-v-6846f4fe><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", (currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG)} data-v-6846f4fe><output data-v-6846f4fe>${ssrInterpolate(Math.round((currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG))}°</output></div><div class="field mt-2" data-v-6846f4fe><label data-v-6846f4fe>Góc xoay chính xác</label><input type="number" min="-180" max="180" step="0.1"${ssrRenderAttr("value", ((currentScene.value.panoramaRotation ?? 0) * RAD_TO_DEG).toFixed(1))} data-v-6846f4fe></div><div class="brightness-presets" data-v-6846f4fe><button type="button" data-v-6846f4fe>-90°</button><button type="button" data-v-6846f4fe>Đặt lại</button><button type="button" data-v-6846f4fe>+90°</button></div><div class="hint-text" data-v-6846f4fe>Giá trị này xoay chính panorama và toàn bộ marker của cảnh. Nó không thay đổi camera.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="insp-section" data-v-6846f4fe><div class="insp-section-title" data-v-6846f4fe>Các cảnh trên bản đồ</div><!--[-->`);
        ssrRenderList(tour.value.scenes, (scene, index) => {
          _push(`<button type="button" class="${ssrRenderClass([{ active: scene.id === currentScene.value?.id }, "geo-scene-row"])}" data-v-6846f4fe><span class="map-node-dot" style="${ssrRenderStyle({ background: scene.coordinates ? "#3b82f6" : "#64748b" })}" data-v-6846f4fe></span><span data-v-6846f4fe>${ssrInterpolate(scene.title)}</span><small data-v-6846f4fe>${ssrInterpolate(scene.coordinates ? `${scene.showOnMap === true ? "Hiện" : "Ẩn"} · ${scene.coordinates[1].toFixed(5)}, ${scene.coordinates[0].toFixed(5)}` : "Chưa đặt")}</small></button>`);
        });
        _push(`<!--]--></div>`);
        {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-6846f4fe><div class="modal" data-v-6846f4fe><div class="modal-head" data-v-6846f4fe><div data-v-6846f4fe><span class="modal-eyebrow" data-v-6846f4fe>Điểm tương tác mới</span><h3 data-v-6846f4fe>Chọn hành động khi người xem nhấn vào</h3></div><button class="modal-close" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-6846f4fe><path d="M18 6 6 18" data-v-6846f4fe></path><path d="m6 6 12 12" data-v-6846f4fe></path></svg></button></div><div class="modal-body" data-v-6846f4fe><div class="type-grid" data-v-6846f4fe><div class="type-card nav" data-v-6846f4fe><div class="type-card-icon nav" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-6846f4fe><path d="M12 4 L12 18" data-v-6846f4fe></path><path d="M6 11 L12 5 L18 11" data-v-6846f4fe></path></svg></div><strong data-v-6846f4fe>Chuyển cảnh</strong><span data-v-6846f4fe>Đi tới một ảnh panorama khác</span></div><div class="type-card video" data-v-6846f4fe><div class="type-card-icon video" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="currentColor" data-v-6846f4fe><path d="M8 5v14l11-7z" data-v-6846f4fe></path></svg></div><strong data-v-6846f4fe>Xem video</strong><span data-v-6846f4fe>Mở video giới thiệu hoặc tư liệu</span></div><div class="type-card info" data-v-6846f4fe><div class="type-card-icon info" data-v-6846f4fe><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-6846f4fe><rect x="4" y="4" width="16" height="16" rx="3" data-v-6846f4fe></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-6846f4fe></path></svg></div><strong data-v-6846f4fe>Panel nội dung</strong><span data-v-6846f4fe>Kết hợp văn bản, ảnh 3D, âm thanh và AI</span></div></div></div><div class="modal-foot" data-v-6846f4fe><button class="tb-btn" data-v-6846f4fe>Hủy</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6846f4fe"]]);
export {
  _sceneId_ as default
};
//# sourceMappingURL=_sceneId_-C3PyXgyo.js.map
