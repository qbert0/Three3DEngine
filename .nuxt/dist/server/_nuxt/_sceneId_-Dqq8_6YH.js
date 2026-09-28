import { _ as __nuxt_component_0 } from "./nuxt-link-B0iADLum.js";
import { _ as _sfc_main$1 } from "./Tooltip-DAoftVVK.js";
import { _ as _sfc_main$2 } from "./Spinner-mjqtnuYo.js";
import { _ as _sfc_main$3 } from "./Switch-BXmFqIoE.js";
import { ref, computed, shallowRef, readonly, defineComponent, withAsyncContext, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { V as View360Engine, H as HotspotPlugin } from "./HotspotPlugin-BIrEsLUp.js";
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
      e.use(new HotspotPlugin({ pulseSpeed: 0, pulseAmplitude: 0, draggable: true }));
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
      const unsub4 = e.bus.on("hotspot:moved", ({ markerId, yaw, pitch }) => {
        lastMarkerMoved.value = { markerId, yaw, pitch };
      });
      unsubs.push(unsub4);
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
    import("./HotspotPlugin-BIrEsLUp.js").then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
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
    const hp = engine.value?.getPlugin("hotspot");
    if (!hp) return;
    hp.onSceneReady?.(scene);
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
        tour.value = JSON.parse(JSON.stringify(data.value.item));
        historyStack.value = [JSON.parse(JSON.stringify(data.value.item))];
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
    const uploadingImage = ref(false);
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
      lastPlacement,
      loadScene: engineLoadScene,
      refreshMarkers
    } = useDesignerEngine();
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
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-8ad3afc1><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8ad3afc1><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8ad3afc1><header class="topbar" data-v-8ad3afc1><div class="tb-logo" data-v-8ad3afc1><div class="tb-logo-mark" data-v-8ad3afc1>SV</div><div class="tb-logo-text" data-v-8ad3afc1><strong data-v-8ad3afc1>Sông Vân Studio</strong><span data-v-8ad3afc1>${ssrInterpolate(tour.value?.title ?? "Không gian triển lãm")}</span></div></div><div class="tb-breadcrumb" data-v-8ad3afc1>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="m9 18 6-6-6-6" data-v-8ad3afc1></path></svg><strong id="breadcrumbTour" data-v-8ad3afc1>${ssrInterpolate(tour.value?.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="m9 18 6-6-6-6" data-v-8ad3afc1></path></svg><span id="breadcrumbScene" data-v-8ad3afc1>${ssrInterpolate(currentScene.value?.title)}</span></div><div class="tb-spacer" data-v-8ad3afc1></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-8ad3afc1><span class="dot" data-v-8ad3afc1></span><span id="saveText" data-v-8ad3afc1>${ssrInterpolate(saving.value ? "Đang lưu..." : isDirty.value ? "Có thay đổi chưa lưu" : "Đã lưu")}</span></div><div class="tb-actions" data-v-8ad3afc1>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Hoàn tác (Ctrl+Z)",
        placement: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="tb-btn" id="undoBtn"${ssrIncludeBooleanAttr(!canUndo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canUndo.value ? 1 : 0.4 })}" data-v-8ad3afc1${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1${_scopeId}><path d="M3 7v6h6" data-v-8ad3afc1${_scopeId}></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" data-v-8ad3afc1${_scopeId}></path></svg></button>`);
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
            _push2(`<button class="tb-btn" id="redoBtn"${ssrIncludeBooleanAttr(!canRedo.value) ? " disabled" : ""} style="${ssrRenderStyle({ opacity: canRedo.value ? 1 : 0.4 })}" data-v-8ad3afc1${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1${_scopeId}><path d="M21 7v6h-6" data-v-8ad3afc1${_scopeId}></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" data-v-8ad3afc1${_scopeId}></path></svg></button>`);
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
      _push(`<button class="tb-btn" id="previewBtn" data-v-8ad3afc1>`);
      if (!previewMode.value) {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" data-v-8ad3afc1></path><circle cx="12" cy="12" r="3" data-v-8ad3afc1></circle></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-8ad3afc1></path></svg>`);
      }
      _push(`<span data-v-8ad3afc1>${ssrInterpolate(previewMode.value ? "Chỉnh sửa" : "Xem trước")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-8ad3afc1>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-8ad3afc1></path><path d="M17 21v-8H7v8" data-v-8ad3afc1></path><path d="M7 3v5h8" data-v-8ad3afc1></path></svg>`);
      }
      _push(`<span data-v-8ad3afc1>Lưu</span></button></div></header><aside class="sidebar-left" data-v-8ad3afc1><div class="side-head" data-v-8ad3afc1><div class="side-head-row" data-v-8ad3afc1><h3 data-v-8ad3afc1>Danh sách cảnh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Thêm cảnh mới",
        placement: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="side-add" id="addSceneBtn" data-v-8ad3afc1${_scopeId}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1${_scopeId}><path d="M12 5v14M5 12h14" data-v-8ad3afc1${_scopeId}></path></svg></button>`);
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
      _push(`</div><p id="sceneCount" data-v-8ad3afc1>${ssrInterpolate(tour.value?.scenes.length ?? 0)} cảnh · Kéo để sắp xếp</p></div><div class="scene-list" id="sceneList" data-v-8ad3afc1><!--[-->`);
      ssrRenderList(tour.value?.scenes ?? [], (s, idx) => {
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-8ad3afc1><span class="scene-drag" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="currentColor" data-v-8ad3afc1><circle cx="9" cy="6" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="6" r="1.5" data-v-8ad3afc1></circle><circle cx="9" cy="12" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="12" r="1.5" data-v-8ad3afc1></circle><circle cx="9" cy="18" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="18" r="1.5" data-v-8ad3afc1></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail || s.panorama)}${ssrRenderAttr("alt", s.title)} data-v-8ad3afc1><div class="scene-info" data-v-8ad3afc1><strong data-v-8ad3afc1>${ssrInterpolate(s.title)}</strong><span data-v-8ad3afc1>${ssrInterpolate(s.markers?.length ?? 0)} điểm tương tác${ssrInterpolate(tour.value?.initialSceneId === s.id ? " · ★ Bắt đầu" : "")}</span></div>`);
        if (tour.value?.initialSceneId === s.id) {
          _push(`<span class="scene-badge" data-v-8ad3afc1>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay đổi chiều rộng danh sách cảnh" data-v-8ad3afc1></div><main class="preview" data-v-8ad3afc1><div class="preview-toolbar" data-v-8ad3afc1><button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg><span data-v-8ad3afc1>${ssrInterpolate(isPlacingHotspot.value ? "Đang đặt... (ESC)" : "Đặt điểm tương tác")}</span></button>`);
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-8ad3afc1>Nhấn vào ảnh để chọn vị trí</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-8ad3afc1></div><div class="pt-zoom" data-v-8ad3afc1><button id="zoomOut" title="Thu nhỏ" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M5 12h14" data-v-8ad3afc1></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-8ad3afc1>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Phóng to" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-8ad3afc1><div class="h-full w-full" data-v-8ad3afc1></div><div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-8ad3afc1> Nhấn lên ảnh để đặt điểm tương tác · ESC để hủy </div><div class="preview-info" data-v-8ad3afc1><span class="preview-info-badge" data-v-8ad3afc1>CẢNH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate(tour.value?.scenes.length ?? 1)}</span><span class="preview-info-title" id="infoTitle" data-v-8ad3afc1>${ssrInterpolate(currentScene.value?.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-8ad3afc1>${ssrInterpolate(isPlacingHotspot.value ? "Nhấn vị trí bất kỳ để đặt" : "Vị trí xem panorama")}</span></div></div></main><div class="resizer resizer-right" aria-label="Thay đổi chiều rộng bảng thuộc tính" data-v-8ad3afc1></div><aside class="inspector sidebar-right" data-v-8ad3afc1><div class="insp-tabs" data-v-8ad3afc1><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-8ad3afc1> Cảnh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-8ad3afc1> Điểm tương tác </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-8ad3afc1> Cài đặt </button></div><div class="insp-body" id="inspBody" data-v-8ad3afc1>`);
      if (currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Thông tin cảnh</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Tên cảnh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Mô tả ngắn</label><textarea id="fieldDesc" data-v-8ad3afc1>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Ảnh panorama</div><div class="img-picker" id="imgPicker" title="Nhấn để tải ảnh panorama từ máy tính" data-v-8ad3afc1>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} data-v-8ad3afc1>`);
        } else {
          _push(`<div class="image-error" data-v-8ad3afc1>Không đọc được ảnh. Hãy kiểm tra đường dẫn hoặc tải ảnh mới.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-8ad3afc1>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-8ad3afc1></path><polyline points="17 8 12 3 7 8" data-v-8ad3afc1></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-8ad3afc1></line></svg><span data-v-8ad3afc1>${ssrInterpolate(uploadingImage.value ? "Đang tải lên..." : "Đổi ảnh (Tải lên)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-8ad3afc1><label data-v-8ad3afc1>URL ảnh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... hoặc /uploads/..." data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>URL ảnh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... hoặc /thumbnails/..." data-v-8ad3afc1></div><div class="hint-text" data-v-8ad3afc1>💡 Nhấn vào ô xem trước để chọn file từ máy tính hoặc dán đường dẫn URL trực tiếp.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Ánh sáng hình ảnh</div><div class="brightness-control" data-v-8ad3afc1><input${ssrRenderAttr("value", currentScene.value.brightness ?? 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-8ad3afc1><output data-v-8ad3afc1>${ssrInterpolate(Math.round((currentScene.value.brightness ?? 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-8ad3afc1><button type="button" data-v-8ad3afc1>Gốc</button><button type="button" data-v-8ad3afc1>Mặc định</button><button type="button" data-v-8ad3afc1>Sáng rõ</button></div><div class="hint-text" data-v-8ad3afc1>Điều chỉnh riêng cho cảnh này, không thay đổi file ảnh gốc.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Vị trí trong tour</div><div class="field-row" data-v-8ad3afc1><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Thứ tự</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", tour.value?.scenes.length)} data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-8ad3afc1></div></div><div class="toggle-row" data-v-8ad3afc1><label for="isStartToggle" data-v-8ad3afc1>Đặt làm cảnh bắt đầu</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": tour.value?.initialSceneId === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-8ad3afc1><button class="btn-block danger" id="deleteSceneBtn" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M3 6h18" data-v-8ad3afc1></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-8ad3afc1></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-8ad3afc1></path></svg> Xóa cảnh này </button></div><!--]-->`);
      } else if (currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1><span data-v-8ad3afc1>Điểm tương tác trong cảnh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-8ad3afc1><circle cx="12" cy="12" r="10" data-v-8ad3afc1></circle><path d="M12 8v8M8 12h8" data-v-8ad3afc1></path></svg> Chưa có điểm tương tác nào.<br data-v-8ad3afc1>Nhấn “Đặt điểm tương tác” để bắt đầu. </div>`);
        } else {
          _push(`<div class="hotspot-list" data-v-8ad3afc1><!--[-->`);
          ssrRenderList(currentScene.value.markers, (hs) => {
            _push(`<div class="${ssrRenderClass(["hotspot-row", { selected: hs.id === selectedHotspotId.value }])}" data-v-8ad3afc1><div class="${ssrRenderClass(["hotspot-row-icon", hs.plugin === "navigation" ? "nav" : hs.plugin])}" data-v-8ad3afc1>`);
            if (hs.plugin === "navigation") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M12 4 L12 18" data-v-8ad3afc1></path><path d="M6 11 L12 5 L18 11" data-v-8ad3afc1></path></svg>`);
            } else if (hs.plugin === "video") {
              _push(`<svg viewBox="0 0 24 24" fill="currentColor" data-v-8ad3afc1><path d="M8 5v14l11-7z" data-v-8ad3afc1></path></svg>`);
            } else if (hs.plugin === "model3d") {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-8ad3afc1></path><path d="M12 22V12M3 7l9 5 9-5" data-v-8ad3afc1></path></svg>`);
            } else {
              _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-8ad3afc1><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-8ad3afc1></circle><path d="M12 11 L12 18" data-v-8ad3afc1></path></svg>`);
            }
            _push(`</div><span class="hotspot-row-name" data-v-8ad3afc1>${ssrInterpolate(hs.label)}</span><button class="hotspot-row-delete" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1><path d="M18 6 6 18" data-v-8ad3afc1></path><path d="m6 6 12 12" data-v-8ad3afc1></path></svg></button></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg> Thêm điểm tương tác </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Chỉnh sửa điểm tương tác</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Nhãn hiển thị</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-8ad3afc1></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Cảnh đích</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-8ad3afc1><option value="" disabled data-v-8ad3afc1>— Chọn cảnh —</option><!--[-->`);
            ssrRenderList(tour.value?.scenes ?? [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-8ad3afc1>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Xoay (Z) — chiều nghiêng <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round((selectedHotspot.value.rotZ ?? selectedHotspot.value.rotation ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotZ ?? selectedHotspot.value.rotation ?? 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="Về 0°" data-v-8ad3afc1>↺</button></div><div class="hint-text" data-v-8ad3afc1>0° = ^^ hướng lên. 90° = phải. -90° = trái.</div></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Nghiêng (X) — đứng / nằm <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotX ?? 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="Về 0°" data-v-8ad3afc1>↺</button></div><div class="hint-text" data-v-8ad3afc1>0° = đứng thẳng. +45° = ngả về phía trước. -45° = ngả về phía sau.</div></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Xoay ngang (Y) — quay mặt <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))}°</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round((selectedHotspot.value.rotY ?? 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="Về 0°" data-v-8ad3afc1>↺</button></div><div class="hint-text" data-v-8ad3afc1>Xoay mặt mũi tên sang trái/phải trong không gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Nội dung thông tin</label><textarea placeholder="Mô tả chi tiết địa điểm..." data-v-8ad3afc1>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Đường dẫn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo hoặc /video.mp4" data-v-8ad3afc1><div class="hint-text" data-v-8ad3afc1>Dùng URL nhúng (embed) cho YouTube/Vimeo hoặc đường dẫn file MP4 trực tiếp.</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Ảnh 3D / ảnh 360° của vật thể</label><button class="model-image-picker" type="button" data-v-8ad3afc1>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="Ảnh vật thể" data-v-8ad3afc1>`);
            } else {
              _push(`<span data-v-8ad3afc1>Chọn ảnh được người thiết kế chuẩn bị</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... hoặc https://..." data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Mô tả vật thể</label><textarea placeholder="Tên tác phẩm, chất liệu, tác giả..." data-v-8ad3afc1>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-8ad3afc1>Ứng dụng chỉ hiển thị ảnh do người thiết kế cung cấp, không tự tạo mô hình 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-8ad3afc1><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-8ad3afc1></div></div><div class="hint-text" data-v-8ad3afc1>💡 Kéo trực tiếp điểm tương tác trên ảnh panorama để đổi vị trí.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Chế độ tour</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Kiểu trải nghiệm</label><select${ssrRenderAttr("value", tour.value.mode ?? "free")} data-v-8ad3afc1><option value="free" data-v-8ad3afc1>Tự do khám phá</option><option value="guided" data-v-8ad3afc1>Có hướng dẫn (tự chuyển cảnh)</option></select></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Thời gian mỗi cảnh (giây)</label><input${ssrRenderAttr("value", tour.value.guidedDuration ?? 8)} type="number" min="3" max="60" data-v-8ad3afc1></div><div class="hint-text" data-v-8ad3afc1>Ở chế độ có hướng dẫn, tour tự động chuyển sang cảnh tiếp theo sau thời gian này.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Cảnh bắt đầu</div><div class="field" data-v-8ad3afc1><select${ssrRenderAttr("value", tour.value.initialSceneId ?? tour.value.scenes[0]?.id)} data-v-8ad3afc1><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-8ad3afc1>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Tùy chọn hiển thị</div><div class="toggle-row" data-v-8ad3afc1><label data-v-8ad3afc1>Tự động xoay ảnh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-8ad3afc1><label data-v-8ad3afc1>Hiện bản đồ nhỏ</label>`);
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
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-8ad3afc1><div class="modal" data-v-8ad3afc1><div class="modal-head" data-v-8ad3afc1><div data-v-8ad3afc1><span class="modal-eyebrow" data-v-8ad3afc1>Điểm tương tác mới</span><h3 data-v-8ad3afc1>Chọn hành động khi người xem nhấn vào</h3></div><button class="modal-close" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1><path d="M18 6 6 18" data-v-8ad3afc1></path><path d="m6 6 12 12" data-v-8ad3afc1></path></svg></button></div><div class="modal-body" data-v-8ad3afc1><div class="type-grid" data-v-8ad3afc1><div class="type-card nav" data-v-8ad3afc1><div class="type-card-icon nav" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M12 4 L12 18" data-v-8ad3afc1></path><path d="M6 11 L12 5 L18 11" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Chuyển cảnh</strong><span data-v-8ad3afc1>Đi tới một ảnh panorama khác</span></div><div class="type-card video" data-v-8ad3afc1><div class="type-card-icon video" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="currentColor" data-v-8ad3afc1><path d="M8 5v14l11-7z" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem video</strong><span data-v-8ad3afc1>Mở video giới thiệu hoặc tư liệu</span></div><div class="type-card info" data-v-8ad3afc1><div class="type-card-icon info" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-8ad3afc1><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-8ad3afc1></circle><path d="M12 11 L12 18" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem thông tin</strong><span data-v-8ad3afc1>Mở nội dung mô tả chi tiết</span></div><div class="type-card model3d" data-v-8ad3afc1><div class="type-card-icon model3d" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-8ad3afc1></path><path d="M12 22V12M3 7l9 5 9-5" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem ảnh 3D</strong><span data-v-8ad3afc1>Hiện ảnh vật thể do người thiết kế thêm</span></div></div></div><div class="modal-foot" data-v-8ad3afc1><button class="tb-btn" data-v-8ad3afc1>Hủy</button></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[slug]/[sceneId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sceneId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ad3afc1"]]);
export {
  _sceneId_ as default
};
//# sourceMappingURL=_sceneId_-Dqq8_6YH.js.map
