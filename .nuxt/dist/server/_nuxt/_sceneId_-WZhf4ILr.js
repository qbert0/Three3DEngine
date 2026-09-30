import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$1 } from "./Tooltip-DAoftVVK.js";
import { _ as _sfc_main$2 } from "./Spinner-mjqtnuYo.js";
import { _ as _sfc_main$3 } from "./Switch-BXmFqIoE.js";
import { ref, computed, shallowRef, readonly, defineComponent, withAsyncContext, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain } from "vue/server-renderer";
import { V as View360Engine, M as MarkerPlugin } from "./MarkerPlugin-QHP1lcY2.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { u as useRoute, b as useRouter, a as useToast, _ as _export_sfc } from "../server.mjs";
import { u as useFetch } from "./fetch-BMHjmZvY.js";
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
  const placementMode = ref("none");
  const isPlacing = computed(() => placementMode.value !== "none");
  const lastMarkerMoved = ref(null);
  const lastMarkerClicked = ref(null);
  const lastPlacement = ref(null);
  const engine = shallowRef(null);
  const unsubs = [];
  async function initEngine(container, initialScene) {
    isLoading.value = true;
    errorMessage.value = "";
    try {
      const e = new View360Engine({
        container,
        // No autorotate in designer — camera must stay where user puts it
        camera: {
          dampingFactor: 0.1
        },
        pano: {
          defaultTransition: "crossfade",
          transitionDuration: 500
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
      engine.value = e;
      await e.loadScene(initialScene, false);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Không thể khởi động designer.";
      isLoading.value = false;
    }
  }
  async function loadScene(scene) {
    if (!engine.value) return;
    isLoading.value = true;
    try {
      await engine.value.loadScene(scene, false);
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
    import("./MarkerPlugin-QHP1lcY2.js").then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
      const raycaster = new Raycaster();
      const mouse = new Vector2(ndcX, ndcY);
      raycaster.setFromCamera(mouse, e.camera.camera);
      const dir = raycaster.ray.direction.clone().normalize();
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
    const selectedHotspotId = ref(null);
    const selectedHotspot = computed(() => {
      if (!currentScene.value) return null;
      return currentScene.value.markers.find((m) => m.id === selectedHotspotId.value) ?? null;
    });
    ref(null);
    ref(null);
    ref(null);
    const narrationTargetBlockId = ref(null);
    const uploadingImage = ref(false);
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
      lastMarkerMoved,
      lastMarkerClicked,
      lastPlacement,
      loadScene: engineLoadScene,
      refreshMarkers
    } = useDesignerEngine();
    const lockVideoAspectRatio = ref(true);
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
      if (!tour.value) return;
      const id = `s${Date.now()}`;
      const newScene = {
        id,
        title: "Cảnh mới",
        subtitle: "Mô tả cảnh mới",
        panorama: currentScene.value?.panorama ?? "",
        thumbnail: currentScene.value?.thumbnail ?? currentScene.value?.panorama ?? "",
        initialYaw: 0,
        initialPitch: 0,
        brightness: 1.25,
        markers: []
      };
      tour.value.scenes.push(newScene);
      currentSceneIdx.value = tour.value.scenes.length - 1;
      markDirty();
      goToScene(currentSceneIdx.value);
      showToast({ message: "Đã thêm cảnh mới", variant: "success" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-195ed375><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-195ed375><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-195ed375><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-195ed375><header class="topbar" data-v-195ed375><div class="tb-logo" data-v-195ed375><div class="tb-logo-mark" data-v-195ed375>SV</div><div class="tb-logo-text" data-v-195ed375><strong data-v-195ed375>Sông Vân Studio</strong><span data-v-195ed375>${ssrInterpolate(tour.value?.title ?? "Không gian triển lãm")}</span></div></div><div class="tb-breadcrumb" data-v-195ed375>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="m9 18 6-6-6-6" data-v-195ed375></path></svg><strong id="breadcrumbTour" data-v-195ed375>${ssrInterpolate(tour.value?.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="m9 18 6-6-6-6" data-v-195ed375></path></svg><span id="breadcrumbScene" data-v-195ed375>${ssrInterpolate(currentScene.value?.title)}</span></div><div class="tb-spacer" data-v-195ed375></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-195ed375><span class="dot" data-v-195ed375></span><span id="saveText" data-v-195ed375>${ssrInterpolate(saving.value ? "Đang lưu..." : isDirty.value ? "Có thay đổi chưa lưu" : "Đã lưu")}</span></div><div class="tb-actions" data-v-195ed375>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Hoàn tác (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-195ed375${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375${_scopeId}><path d="M3 7v6h6" data-v-195ed375${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-195ed375${_scopeId}></path></svg></button>`);
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
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-195ed375${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375${_scopeId}><path d="M21 7v6h-6" data-v-195ed375${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-195ed375${_scopeId}></path></svg></button>`);
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
      _push(`<button class="tb-btn" id="previewBtn" data-v-195ed375>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-195ed375></path><circle cx="12" cy="12" r="3" data-v-195ed375></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-195ed375></path></svg>`);
      }
      _push(`<span data-v-195ed375>${ssrInterpolate(previewMode.value ? "Chỉnh sửa" : "Xem trước")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-195ed375>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-195ed375></path><path d="M17 21v-8H7v8" data-v-195ed375></path><path d="M7 3v5h8" data-v-195ed375></path></svg>`);
      }
      _push(`<span data-v-195ed375>Lưu</span></button></div></header><aside class="sidebar-left" data-v-195ed375><div class="side-head" data-v-195ed375><div class="side-head-row" data-v-195ed375><h3 data-v-195ed375>Danh sách cảnh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Thêm cảnh mới",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn" data-v-195ed375${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375${_scopeId}><path d="M12 5v14M5 12h14" data-v-195ed375${_scopeId}></path></svg></button>`);
          } else {
            return [
              createVNode("button", {
                class: "side-add",
                id: "addSceneBtn",
                onClick: addScene
              }, [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round"
                }, [
                  createVNode("path", { d: "M12 5v14M5 12h14" })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p id="sceneCount" data-v-195ed375>${ssrInterpolate(tour.value?.scenes.length ?? 0)} cảnh · Kéo để sắp xếp</p></div><div class="scene-list" id="sceneList" data-v-195ed375><!--[-->`);
      ssrRenderList(tour.value?.scenes ?? [], (s, idx) => {
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-195ed375><span class="scene-drag" data-v-195ed375><svg viewBox="0 0 24 24" fill="currentColor" data-v-195ed375><circle cx="9" cy="6" r="1.5" data-v-195ed375></circle><circle cx="15" cy="6" r="1.5" data-v-195ed375></circle><circle cx="9" cy="12" r="1.5" data-v-195ed375></circle><circle cx="15" cy="12" r="1.5" data-v-195ed375></circle><circle cx="9" cy="18" r="1.5" data-v-195ed375></circle><circle cx="15" cy="18" r="1.5" data-v-195ed375></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail || s.panorama)}${ssrRenderAttr("alt", s.title)} data-v-195ed375><div class="scene-info" data-v-195ed375><strong data-v-195ed375>${ssrInterpolate(s.title)}</strong><span data-v-195ed375>${ssrInterpolate(s.markers?.length ?? 0)} điểm tương tác${ssrInterpolate(tour.value?.initialSceneId === s.id ? " · ★ Bắt đầu" : "")}</span></div>`);
        if (tour.value?.initialSceneId === s.id) {
          _push(`<span class="scene-badge" data-v-195ed375>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay đổi chiều rộng danh sách cảnh" data-v-195ed375></div><main class="preview" data-v-195ed375><div class="preview-toolbar" data-v-195ed375><button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg><span data-v-195ed375>${ssrInterpolate(isPlacingHotspot.value ? "Đang đặt... (ESC)" : "Đặt điểm tương tác")}</span></button>`);
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-195ed375>Nhấn vào ảnh để chọn vị trí</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-195ed375></div><div class="pt-zoom" data-v-195ed375><button id="zoomOut" title="Thu nhỏ" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="M5 12h14" data-v-195ed375></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-195ed375>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Phóng to" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-195ed375><div class="h-full w-full" data-v-195ed375></div><div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-195ed375> Nhấn lên ảnh để đặt điểm tương tác · ESC để hủy </div><div class="preview-info" data-v-195ed375><span class="preview-info-badge" data-v-195ed375>CẢNH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate(tour.value?.scenes.length ?? 1)}</span><span class="preview-info-title" id="infoTitle" data-v-195ed375>${ssrInterpolate(currentScene.value?.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-195ed375>${ssrInterpolate(isPlacingHotspot.value ? "Nhấn vị trí bất kỳ để đặt" : "Vị trí xem panorama")}</span></div></div></main><div class="resizer resizer-right" aria-label="Thay đổi chiều rộng bảng thuộc tính" data-v-195ed375></div><aside class="inspector sidebar-right" data-v-195ed375><div class="insp-tabs" data-v-195ed375><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-195ed375> Cảnh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-195ed375> Điểm tương tác </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-195ed375> Cài đặt </button></div><div class="insp-body" id="inspBody" data-v-195ed375>`);
      if (currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Thông tin cảnh</div><div class="field" data-v-195ed375><label data-v-195ed375>Tên cảnh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>Mô tả ngắn</label><textarea id="fieldDesc" data-v-195ed375>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Ảnh panorama</div><div class="img-picker" id="imgPicker" title="Nhấn để tải ảnh panorama từ máy tính" data-v-195ed375>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} data-v-195ed375>`);
        } else {
          _push(`<div class="image-error" data-v-195ed375>Không đọc được ảnh. Hãy kiểm tra đường dẫn hoặc tải ảnh mới.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-195ed375>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-195ed375></path><polyline points="17 8 12 3 7 8" data-v-195ed375></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-195ed375></line></svg><span data-v-195ed375>${ssrInterpolate(uploadingImage.value ? "Đang tải lên..." : "Đổi ảnh (Tải lên)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-195ed375><label data-v-195ed375>URL ảnh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... hoặc /uploads/..." data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>URL ảnh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... hoặc /thumbnails/..." data-v-195ed375></div><div class="hint-text" data-v-195ed375>💡 Nhấn vào ô xem trước để chọn file từ máy tính hoặc dán đường dẫn URL trực tiếp.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Ánh sáng hình ảnh</div><div class="brightness-control" data-v-195ed375><input${ssrRenderAttr("value", currentScene.value.brightness ?? 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-195ed375><output data-v-195ed375>${ssrInterpolate(Math.round((currentScene.value.brightness ?? 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-195ed375><button type="button" data-v-195ed375>Gốc</button><button type="button" data-v-195ed375>Mặc định</button><button type="button" data-v-195ed375>Sáng rõ</button></div><div class="hint-text" data-v-195ed375>Điều chỉnh riêng cho cảnh này, không thay đổi file ảnh gốc.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Vị trí trong tour</div><div class="field-row" data-v-195ed375><div class="field" data-v-195ed375><label data-v-195ed375>Thứ tự</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", tour.value?.scenes.length)} data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-195ed375></div></div><div class="toggle-row" data-v-195ed375><label for="isStartToggle" data-v-195ed375>Đặt làm cảnh bắt đầu</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value?.initialSceneId === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-195ed375><button class="btn-block danger" id="deleteSceneBtn" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M3 6h18" data-v-195ed375></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-195ed375></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-195ed375></path></svg> Xóa cảnh này </button></div><!--]-->`);
      } else if (currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375><span data-v-195ed375>Điểm tương tác trong cảnh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-195ed375><circle cx="12" cy="12" r="10" data-v-195ed375></circle><path d="M12 8v8M8 12h8" data-v-195ed375></path></svg> Chưa có điểm tương tác nào.<br data-v-195ed375>Nhấn “Đặt điểm tương tác” để bắt đầu. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-195ed375><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-195ed375><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-195ed375>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M12 4 L12 18" data-v-195ed375></path><path d="M6 11 L12 5 L18 11" data-v-195ed375></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-195ed375><path d="M8 5v14l11-7z" data-v-195ed375></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-195ed375></path><path d="M12 22V12M3 7l9 5 9-5" data-v-195ed375></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-195ed375><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-195ed375></circle><path d="M12 11 L12 18" data-v-195ed375></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-195ed375>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375><path d="M18 6 6 18" data-v-195ed375></path><path d="m6 6 12 12" data-v-195ed375></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg> Thêm điểm tương tác </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Chỉnh sửa điểm tương tác</div><div class="field" data-v-195ed375><label data-v-195ed375>Nhãn hiển thị</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-195ed375></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-195ed375><label data-v-195ed375>Cảnh đích</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-195ed375><option value="" disabled data-v-195ed375>— Chọn cảnh —</option><!--[-->`);
            ssrRenderList(tour.value?.scenes ?? [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-195ed375>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375> Xoay (Z) — chiều nghiêng <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotZ ?? selectedHotspot.value.rotation ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotZ ?? selectedHotspot.value.rotation ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>0° = ^^ hướng lên. 90° = phải. -90° = trái.</div></div><div class="field" data-v-195ed375><label data-v-195ed375> Nghiêng (X) — đứng / nằm <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>0° = đứng thẳng. +45° = ngả về phía trước. -45° = ngả về phía sau.</div></div><div class="field" data-v-195ed375><label data-v-195ed375> Xoay ngang (Y) — quay mặt <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>Xoay mặt mũi tên sang trái/phải trong không gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375> Phóng ngang (X) <span class="field-badge" data-v-195ed375>${ssrInterpolate(((selectedHotspot.value.scaleX ?? 1) * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", selectedHotspot.value.scaleX ?? 1)} data-v-195ed375><button class="reset-btn" type="button" title="Về 100%" data-v-195ed375>↺</button></div></div><div class="field" data-v-195ed375><label data-v-195ed375> Phóng dọc (Y) <span class="field-badge" data-v-195ed375>${ssrInterpolate(((selectedHotspot.value.scaleY ?? 1) * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", selectedHotspot.value.scaleY ?? 1)} data-v-195ed375><button class="reset-btn" type="button" title="Về 100%" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>X và Y thay đổi độc lập; marker mặt phẳng không sử dụng chiều sâu Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>Hướng hiển thị panel</label><select${ssrRenderAttr("value", selectedHotspot.value.placement ?? "vertical")} data-v-195ed375><option value="vertical" data-v-195ed375>Chiều dọc</option><option value="horizontal" data-v-195ed375>Chiều ngang</option></select><div class="hint-text" data-v-195ed375>Hệ thống tự chọn trên/dưới hoặc trái/phải theo khoảng trống còn lại.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Nội dung trong panel</label><div class="video-size-presets" data-v-195ed375><button type="button" data-v-195ed375>+ Văn bản</button><button type="button" data-v-195ed375>+ Ảnh 3D</button><button type="button" data-v-195ed375>+ Âm thanh</button><button type="button" data-v-195ed375>+ AI Chat</button></div><div class="hint-text" data-v-195ed375>Có thể kết hợp nhiều loại và thay đổi thứ tự hiển thị.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              _push(`<div class="field panel-block-editor" data-v-195ed375><label data-v-195ed375>${ssrInterpolate(block.type === "text" ? "Văn bản" : block.type === "image3d" ? "Ảnh 3D" : block.type === "audio" ? "Âm thanh" : "AI Chat")} <span class="field-badge" data-v-195ed375>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="Nội dung mô tả..." data-v-195ed375>${ssrInterpolate(block.content)}</textarea><label data-v-195ed375>Chế độ hiển thị</label><select${ssrRenderAttr("value", block.presentation ?? "text-only")} data-v-195ed375><option value="text-only" data-v-195ed375>Chỉ văn bản</option><option value="text-and-audio" data-v-195ed375>Văn bản và bản đọc</option><option value="audio-only" data-v-195ed375>Chỉ bản đọc</option></select>`);
                if ((block.presentation ?? "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-195ed375>File bản đọc (VieNeu-TTS)</label><input${ssrRenderAttr("value", block.speech?.src ?? "")} type="text" placeholder="/uploads/audio/ban-doc.wav hoặc URL" data-v-195ed375><div class="video-size-presets" data-v-195ed375><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-195ed375>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "Đang tải..." : "Tải file bản đọc")}</button>`);
                  if (block.speech?.src) {
                    _push(`<button type="button" data-v-195ed375>Bỏ file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if (block.speech?.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-195ed375></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-195ed375>Xuất WAV/MP3 từ VieNeu-TTS rồi tải lên đây. Khi có file, thanh tiến trình sẽ dùng đúng thời lượng audio.</div>`);
                  if (!block.speech?.src) {
                    _push(`<details data-v-195ed375><summary data-v-195ed375>Giọng trình duyệt dự phòng</summary><select${ssrRenderAttr("value", block.speech?.lang ?? "vi-VN")} data-v-195ed375><option value="vi-VN" data-v-195ed375>Tiếng Việt</option><option value="en-US" data-v-195ed375>English (US)</option><option value="en-GB" data-v-195ed375>English (UK)</option><option value="fr-FR" data-v-195ed375>Français</option><option value="ja-JP" data-v-195ed375>日本語</option><option value="ko-KR" data-v-195ed375>한국어</option></select><label data-v-195ed375>Tốc độ <span class="field-badge" data-v-195ed375>${ssrInterpolate((block.speech?.rate ?? 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.rate ?? 1)} data-v-195ed375><label data-v-195ed375>Cao độ <span class="field-badge" data-v-195ed375>${ssrInterpolate((block.speech?.pitch ?? 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", block.speech?.pitch ?? 1)} data-v-195ed375><div class="hint-text" data-v-195ed375>Giọng đọc thực tế phụ thuộc vào giọng có sẵn trên thiết bị người xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-195ed375><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Chú thích ảnh (không bắt buộc)" data-v-195ed375><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 hoặc URL" data-v-195ed375><div class="hint-text" data-v-195ed375>AudioBlock chỉ phát tệp âm thanh được tải lên hoặc nhập bằng URL; khối này không tạo giọng đọc từ văn bản.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ngữ cảnh dành cho AI..." data-v-195ed375>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-195ed375><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-195ed375>↑ Lên</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-195ed375>↓ Xuống</button><button type="button" data-v-195ed375>Xóa</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-195ed375><label data-v-195ed375>Nội dung thông tin</label><textarea placeholder="Mô tả chi tiết địa điểm..." data-v-195ed375>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>Đường dẫn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo hoặc /video.mp4" data-v-195ed375><div class="hint-text" data-v-195ed375>YouTube, Vimeo và video trực tiếp đều hiển thị ngay trong panorama.</div></div><div class="field video-panel-size" data-v-195ed375><label data-v-195ed375>Kích thước panel</label><div class="video-size-presets" data-v-195ed375><button type="button" data-v-195ed375>Nhỏ</button><button type="button" data-v-195ed375>Vừa</button><button type="button" data-v-195ed375>Lớn</button><button type="button" data-v-195ed375>Rất lớn</button></div><div class="video-size-row" data-v-195ed375><span data-v-195ed375>Rộng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-195ed375><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", selectedHotspot.value.width ?? 640)} data-v-195ed375></div><div class="video-size-row" data-v-195ed375><span data-v-195ed375>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-195ed375><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", selectedHotspot.value.height ?? 360)} data-v-195ed375></div><label class="video-ratio-lock" data-v-195ed375><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-195ed375> Giữ nguyên tỉ lệ khung hình </label><div class="hint-text" data-v-195ed375>Kích thước hiện tại: ${ssrInterpolate(selectedHotspot.value.width ?? 640)} × ${ssrInterpolate(selectedHotspot.value.height ?? 360)} px</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Xoay ngang (Y) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>Quay cạnh trái hoặc phải của màn hình ra xa người xem.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Nghiêng (X) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>Ngả màn hình lên hoặc xuống trong không gian 3D.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Xoay mặt phẳng (Z) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotZ ?? 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="Về 0°" data-v-195ed375>↺</button></div><div class="hint-text" data-v-195ed375>Xoay panel theo chiều kim đồng hồ hoặc ngược lại.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>Ảnh 3D / ảnh 360° của vật thể</label><button class="model-image-picker" type="button" data-v-195ed375>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="Ảnh vật thể" data-v-195ed375>`);
            } else {
              _push(`<span data-v-195ed375>Chọn ảnh được người thiết kế chuẩn bị</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>Mô tả vật thể</label><textarea placeholder="Tên tác phẩm, chất liệu, tác giả..." data-v-195ed375>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-195ed375>Ứng dụng chỉ hiển thị ảnh do người thiết kế cung cấp, không tự tạo mô hình 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-195ed375><div class="field" data-v-195ed375><label data-v-195ed375>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-195ed375></div></div><div class="hint-text" data-v-195ed375>💡 Kéo trực tiếp điểm tương tác trên ảnh panorama để đổi vị trí.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Chế độ tour</div><div class="field" data-v-195ed375><label data-v-195ed375>Kiểu trải nghiệm</label><select${ssrRenderAttr("value", tour.value.mode ?? "free")} data-v-195ed375><option value="free" data-v-195ed375>Tự do khám phá</option><option value="guided" data-v-195ed375>Có hướng dẫn (tự chuyển cảnh)</option></select></div><div class="field" data-v-195ed375><label data-v-195ed375>Thời gian mỗi cảnh (giây)</label><input${ssrRenderAttr("value", tour.value.guidedDuration ?? 8)} type="number" min="3" max="60" data-v-195ed375></div><div class="hint-text" data-v-195ed375>Ở chế độ có hướng dẫn, tour tự động chuyển sang cảnh tiếp theo sau thời gian này.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Cảnh bắt đầu</div><div class="field" data-v-195ed375><select${ssrRenderAttr("value", tour.value.initialSceneId ?? tour.value.scenes[0]?.id)} data-v-195ed375><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-195ed375>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Tùy chọn hiển thị</div><div class="toggle-row" data-v-195ed375><label data-v-195ed375>Tự động xoay ảnh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-195ed375><label data-v-195ed375>Hiện bản đồ nhỏ</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value.showMinimap !== false,
          "onUpdate:modelValue": (val) => {
            tour.value.showMinimap = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-195ed375><div class="modal" data-v-195ed375><div class="modal-head" data-v-195ed375><div data-v-195ed375><span class="modal-eyebrow" data-v-195ed375>Điểm tương tác mới</span><h3 data-v-195ed375>Chọn hành động khi người xem nhấn vào</h3></div><button class="modal-close" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375><path d="M18 6 6 18" data-v-195ed375></path><path d="m6 6 12 12" data-v-195ed375></path></svg></button></div><div class="modal-body" data-v-195ed375><div class="type-grid" data-v-195ed375><div class="type-card nav" data-v-195ed375><div class="type-card-icon nav" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M12 4 L12 18" data-v-195ed375></path><path d="M6 11 L12 5 L18 11" data-v-195ed375></path></svg></div><strong data-v-195ed375>Chuyển cảnh</strong><span data-v-195ed375>Đi tới một ảnh panorama khác</span></div><div class="type-card video" data-v-195ed375><div class="type-card-icon video" data-v-195ed375><svg viewBox="0 0 24 24" fill="currentColor" data-v-195ed375><path d="M8 5v14l11-7z" data-v-195ed375></path></svg></div><strong data-v-195ed375>Xem video</strong><span data-v-195ed375>Mở video giới thiệu hoặc tư liệu</span></div><div class="type-card info" data-v-195ed375><div class="type-card-icon info" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-195ed375><rect x="4" y="4" width="16" height="16" rx="3" data-v-195ed375></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-195ed375></path></svg></div><strong data-v-195ed375>Panel nội dung</strong><span data-v-195ed375>Kết hợp văn bản, ảnh 3D, âm thanh và AI</span></div></div></div><div class="modal-foot" data-v-195ed375><button class="tb-btn" data-v-195ed375>Hủy</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-195ed375"]]);
export {
  _sceneId_ as default
};
//# sourceMappingURL=_sceneId_-WZhf4ILr.js.map
