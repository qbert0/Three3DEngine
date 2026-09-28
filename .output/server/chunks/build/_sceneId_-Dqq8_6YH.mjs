globalThis.__timing__.logStart('Load chunks/build/_sceneId_-Dqq8_6YH');import { _ as __nuxt_component_0 } from './nuxt-link-B0iADLum.mjs';
import { _ as _sfc_main$1 } from './Tooltip-DAoftVVK.mjs';
import { _ as _sfc_main$2 } from './Spinner-mjqtnuYo.mjs';
import { _ as _sfc_main$3 } from './Switch-BXmFqIoE.mjs';
import { defineComponent, withAsyncContext, ref, computed, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, shallowRef, readonly, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { V as View360Engine, H as HotspotPlugin } from './HotspotPlugin-BIrEsLUp.mjs';
import { _ as _export_sfc, u as useRoute, b as useRouter, a as useToast } from './server.mjs';
import { u as useFetch } from './fetch-BMHjmZvY.mjs';
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
      errorMessage.value = err instanceof Error ? err.message : "Kh\xF4ng th\u1EC3 kh\u1EDFi \u0111\u1ED9ng designer.";
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
    import('./HotspotPlugin-BIrEsLUp.mjs').then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
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
    var _a, _b;
    const hp = (_a = engine.value) == null ? void 0 : _a.getPlugin("hotspot");
    if (!hp) return;
    (_b = hp.onSceneReady) == null ? void 0 : _b.call(hp, scene);
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
      var _a;
      if ((_a = data.value) == null ? void 0 : _a.item) {
        tour.value = JSON.parse(JSON.stringify(data.value.item));
        historyStack.value = [JSON.parse(JSON.stringify(data.value.item))];
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
    const selectedHotspotId = ref(null);
    const selectedHotspot = computed(() => {
      var _a;
      if (!currentScene.value) return null;
      return (_a = currentScene.value.markers.find((m) => m.id === selectedHotspotId.value)) != null ? _a : null;
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
      var _a, _b, _c, _d, _e, _f;
      if (!tour.value) return;
      const id = `s${Date.now()}`;
      const newScene = {
        id,
        title: "C\u1EA3nh m\u1EDBi",
        subtitle: "M\xF4 t\u1EA3 c\u1EA3nh m\u1EDBi",
        panorama: (_b = (_a = currentScene.value) == null ? void 0 : _a.panorama) != null ? _b : "",
        thumbnail: (_f = (_e = (_c = currentScene.value) == null ? void 0 : _c.thumbnail) != null ? _e : (_d = currentScene.value) == null ? void 0 : _d.panorama) != null ? _f : "",
        initialYaw: 0,
        initialPitch: 0,
        brightness: 1.25,
        markers: []
      };
      tour.value.scenes.push(newScene);
      currentSceneIdx.value = tour.value.scenes.length - 1;
      markDirty();
      goToScene(currentSceneIdx.value);
      showToast({ message: "\u0110\xE3 th\xEAm c\u1EA3nh m\u1EDBi", variant: "success" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-8ad3afc1><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8ad3afc1><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-8ad3afc1><header class="topbar" data-v-8ad3afc1><div class="tb-logo" data-v-8ad3afc1><div class="tb-logo-mark" data-v-8ad3afc1>SV</div><div class="tb-logo-text" data-v-8ad3afc1><strong data-v-8ad3afc1>S\xF4ng V\xE2n Studio</strong><span data-v-8ad3afc1>${ssrInterpolate((_b = (_a = tour.value) == null ? void 0 : _a.title) != null ? _b : "Kh\xF4ng gian tri\u1EC3n l\xE3m")}</span></div></div><div class="tb-breadcrumb" data-v-8ad3afc1>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="m9 18 6-6-6-6" data-v-8ad3afc1></path></svg><strong id="breadcrumbTour" data-v-8ad3afc1>${ssrInterpolate((_c = tour.value) == null ? void 0 : _c.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="m9 18 6-6-6-6" data-v-8ad3afc1></path></svg><span id="breadcrumbScene" data-v-8ad3afc1>${ssrInterpolate((_d = currentScene.value) == null ? void 0 : _d.title)}</span></div><div class="tb-spacer" data-v-8ad3afc1></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-8ad3afc1><span class="dot" data-v-8ad3afc1></span><span id="saveText" data-v-8ad3afc1>${ssrInterpolate(saving.value ? "\u0110ang l\u01B0u..." : isDirty.value ? "C\xF3 thay \u0111\u1ED5i ch\u01B0a l\u01B0u" : "\u0110\xE3 l\u01B0u")}</span></div><div class="tb-actions" data-v-8ad3afc1>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Ho\xE0n t\xE1c (Ctrl+Z)",
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
        content: "L\xE0m l\u1EA1i (Ctrl+Y)",
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
      _push(`<span data-v-8ad3afc1>${ssrInterpolate(previewMode.value ? "Ch\u1EC9nh s\u1EEDa" : "Xem tr\u01B0\u1EDBc")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-8ad3afc1>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-8ad3afc1></path><path d="M17 21v-8H7v8" data-v-8ad3afc1></path><path d="M7 3v5h8" data-v-8ad3afc1></path></svg>`);
      }
      _push(`<span data-v-8ad3afc1>L\u01B0u</span></button></div></header><aside class="sidebar-left" data-v-8ad3afc1><div class="side-head" data-v-8ad3afc1><div class="side-head-row" data-v-8ad3afc1><h3 data-v-8ad3afc1>Danh s\xE1ch c\u1EA3nh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Th\xEAm c\u1EA3nh m\u1EDBi",
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
      _push(`</div><p id="sceneCount" data-v-8ad3afc1>${ssrInterpolate((_f = (_e = tour.value) == null ? void 0 : _e.scenes.length) != null ? _f : 0)} c\u1EA3nh \xB7 K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp</p></div><div class="scene-list" id="sceneList" data-v-8ad3afc1><!--[-->`);
      ssrRenderList((_h = (_g = tour.value) == null ? void 0 : _g.scenes) != null ? _h : [], (s, idx) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-8ad3afc1><span class="scene-drag" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="currentColor" data-v-8ad3afc1><circle cx="9" cy="6" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="6" r="1.5" data-v-8ad3afc1></circle><circle cx="9" cy="12" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="12" r="1.5" data-v-8ad3afc1></circle><circle cx="9" cy="18" r="1.5" data-v-8ad3afc1></circle><circle cx="15" cy="18" r="1.5" data-v-8ad3afc1></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail || s.panorama)}${ssrRenderAttr("alt", s.title)} data-v-8ad3afc1><div class="scene-info" data-v-8ad3afc1><strong data-v-8ad3afc1>${ssrInterpolate(s.title)}</strong><span data-v-8ad3afc1>${ssrInterpolate((_b2 = (_a2 = s.markers) == null ? void 0 : _a2.length) != null ? _b2 : 0)} \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c${ssrInterpolate(((_c2 = tour.value) == null ? void 0 : _c2.initialSceneId) === s.id ? " \xB7 \u2605 B\u1EAFt \u0111\u1EA7u" : "")}</span></div>`);
        if (((_d2 = tour.value) == null ? void 0 : _d2.initialSceneId) === s.id) {
          _push(`<span class="scene-badge" data-v-8ad3afc1>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng danh s\xE1ch c\u1EA3nh" data-v-8ad3afc1></div><main class="preview" data-v-8ad3afc1><div class="preview-toolbar" data-v-8ad3afc1><button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg><span data-v-8ad3afc1>${ssrInterpolate(isPlacingHotspot.value ? "\u0110ang \u0111\u1EB7t... (ESC)" : "\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c")}</span></button>`);
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-8ad3afc1>Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 ch\u1ECDn v\u1ECB tr\xED</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-8ad3afc1></div><div class="pt-zoom" data-v-8ad3afc1><button id="zoomOut" title="Thu nh\u1ECF" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M5 12h14" data-v-8ad3afc1></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-8ad3afc1>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Ph\xF3ng to" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-8ad3afc1><div class="h-full w-full" data-v-8ad3afc1></div><div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-8ad3afc1> Nh\u1EA5n l\xEAn \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c \xB7 ESC \u0111\u1EC3 h\u1EE7y </div><div class="preview-info" data-v-8ad3afc1><span class="preview-info-badge" data-v-8ad3afc1>C\u1EA2NH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate((_j = (_i = tour.value) == null ? void 0 : _i.scenes.length) != null ? _j : 1)}</span><span class="preview-info-title" id="infoTitle" data-v-8ad3afc1>${ssrInterpolate((_k = currentScene.value) == null ? void 0 : _k.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-8ad3afc1>${ssrInterpolate(isPlacingHotspot.value ? "Nh\u1EA5n v\u1ECB tr\xED b\u1EA5t k\u1EF3 \u0111\u1EC3 \u0111\u1EB7t" : "V\u1ECB tr\xED xem panorama")}</span></div></div></main><div class="resizer resizer-right" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng b\u1EA3ng thu\u1ED9c t\xEDnh" data-v-8ad3afc1></div><aside class="inspector sidebar-right" data-v-8ad3afc1><div class="insp-tabs" data-v-8ad3afc1><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-8ad3afc1> C\u1EA3nh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-8ad3afc1> \u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-8ad3afc1> C\xE0i \u0111\u1EB7t </button></div><div class="insp-body" id="inspBody" data-v-8ad3afc1>`);
      if (currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Th\xF4ng tin c\u1EA3nh</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>T\xEAn c\u1EA3nh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>M\xF4 t\u1EA3 ng\u1EAFn</label><textarea id="fieldDesc" data-v-8ad3afc1>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>\u1EA2nh panorama</div><div class="img-picker" id="imgPicker" title="Nh\u1EA5n \u0111\u1EC3 t\u1EA3i \u1EA3nh panorama t\u1EEB m\xE1y t\xEDnh" data-v-8ad3afc1>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} data-v-8ad3afc1>`);
        } else {
          _push(`<div class="image-error" data-v-8ad3afc1>Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh. H\xE3y ki\u1EC3m tra \u0111\u01B0\u1EDDng d\u1EABn ho\u1EB7c t\u1EA3i \u1EA3nh m\u1EDBi.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-8ad3afc1>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-8ad3afc1></path><polyline points="17 8 12 3 7 8" data-v-8ad3afc1></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-8ad3afc1></line></svg><span data-v-8ad3afc1>${ssrInterpolate(uploadingImage.value ? "\u0110ang t\u1EA3i l\xEAn..." : "\u0110\u1ED5i \u1EA3nh (T\u1EA3i l\xEAn)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-8ad3afc1><label data-v-8ad3afc1>URL \u1EA3nh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... ho\u1EB7c /uploads/..." data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>URL \u1EA3nh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... ho\u1EB7c /thumbnails/..." data-v-8ad3afc1></div><div class="hint-text" data-v-8ad3afc1>\u{1F4A1} Nh\u1EA5n v\xE0o \xF4 xem tr\u01B0\u1EDBc \u0111\u1EC3 ch\u1ECDn file t\u1EEB m\xE1y t\xEDnh ho\u1EB7c d\xE1n \u0111\u01B0\u1EDDng d\u1EABn URL tr\u1EF1c ti\u1EBFp.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>\xC1nh s\xE1ng h\xECnh \u1EA3nh</div><div class="brightness-control" data-v-8ad3afc1><input${ssrRenderAttr("value", (_l = currentScene.value.brightness) != null ? _l : 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-8ad3afc1><output data-v-8ad3afc1>${ssrInterpolate(Math.round(((_m = currentScene.value.brightness) != null ? _m : 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-8ad3afc1><button type="button" data-v-8ad3afc1>G\u1ED1c</button><button type="button" data-v-8ad3afc1>M\u1EB7c \u0111\u1ECBnh</button><button type="button" data-v-8ad3afc1>S\xE1ng r\xF5</button></div><div class="hint-text" data-v-8ad3afc1>\u0110i\u1EC1u ch\u1EC9nh ri\xEAng cho c\u1EA3nh n\xE0y, kh\xF4ng thay \u0111\u1ED5i file \u1EA3nh g\u1ED1c.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>V\u1ECB tr\xED trong tour</div><div class="field-row" data-v-8ad3afc1><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Th\u1EE9 t\u1EF1</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", (_n = tour.value) == null ? void 0 : _n.scenes.length)} data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-8ad3afc1></div></div><div class="toggle-row" data-v-8ad3afc1><label for="isStartToggle" data-v-8ad3afc1>\u0110\u1EB7t l\xE0m c\u1EA3nh b\u1EAFt \u0111\u1EA7u</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": ((_o = tour.value) == null ? void 0 : _o.initialSceneId) === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-8ad3afc1><button class="btn-block danger" id="deleteSceneBtn" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M3 6h18" data-v-8ad3afc1></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-8ad3afc1></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-8ad3afc1></path></svg> X\xF3a c\u1EA3nh n\xE0y </button></div><!--]-->`);
      } else if (currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1><span data-v-8ad3afc1>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c trong c\u1EA3nh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-8ad3afc1><circle cx="12" cy="12" r="10" data-v-8ad3afc1></circle><path d="M12 8v8M8 12h8" data-v-8ad3afc1></path></svg> Ch\u01B0a c\xF3 \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c n\xE0o.<br data-v-8ad3afc1>Nh\u1EA5n \u201C\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c\u201D \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u. </div>`);
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
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1><path d="M12 5v14M5 12h14" data-v-8ad3afc1></path></svg> Th\xEAm \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Ch\u1EC9nh s\u1EEDa \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Nh\xE3n hi\u1EC3n th\u1ECB</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-8ad3afc1></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>C\u1EA3nh \u0111\xEDch</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-8ad3afc1><option value="" disabled data-v-8ad3afc1>\u2014 Ch\u1ECDn c\u1EA3nh \u2014</option><!--[-->`);
            ssrRenderList((_q = (_p = tour.value) == null ? void 0 : _p.scenes) != null ? _q : [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-8ad3afc1>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Xoay (Z) \u2014 chi\u1EC1u nghi\xEAng <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round(((_s = (_r = selectedHotspot.value.rotZ) != null ? _r : selectedHotspot.value.rotation) != null ? _s : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round(((_u = (_t = selectedHotspot.value.rotZ) != null ? _t : selectedHotspot.value.rotation) != null ? _u : 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-8ad3afc1>\u21BA</button></div><div class="hint-text" data-v-8ad3afc1>0\xB0 = ^^ h\u01B0\u1EDBng l\xEAn. 90\xB0 = ph\u1EA3i. -90\xB0 = tr\xE1i.</div></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Nghi\xEAng (X) \u2014 \u0111\u1EE9ng / n\u1EB1m <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round(((_v = selectedHotspot.value.rotX) != null ? _v : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_w = selectedHotspot.value.rotX) != null ? _w : 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-8ad3afc1>\u21BA</button></div><div class="hint-text" data-v-8ad3afc1>0\xB0 = \u0111\u1EE9ng th\u1EB3ng. +45\xB0 = ng\u1EA3 v\u1EC1 ph\xEDa tr\u01B0\u1EDBc. -45\xB0 = ng\u1EA3 v\u1EC1 ph\xEDa sau.</div></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1> Xoay ngang (Y) \u2014 quay m\u1EB7t <span class="field-badge" data-v-8ad3afc1>${ssrInterpolate(Math.round(((_x = selectedHotspot.value.rotY) != null ? _x : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-8ad3afc1><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_y = selectedHotspot.value.rotY) != null ? _y : 0) * 180 / Math.PI))} data-v-8ad3afc1><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-8ad3afc1>\u21BA</button></div><div class="hint-text" data-v-8ad3afc1>Xoay m\u1EB7t m\u0169i t\xEAn sang tr\xE1i/ph\u1EA3i trong kh\xF4ng gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>N\u1ED9i dung th\xF4ng tin</label><textarea placeholder="M\xF4 t\u1EA3 chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m..." data-v-8ad3afc1>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>\u0110\u01B0\u1EDDng d\u1EABn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo ho\u1EB7c /video.mp4" data-v-8ad3afc1><div class="hint-text" data-v-8ad3afc1>D\xF9ng URL nh\xFAng (embed) cho YouTube/Vimeo ho\u1EB7c \u0111\u01B0\u1EDDng d\u1EABn file MP4 tr\u1EF1c ti\u1EBFp.</div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>\u1EA2nh 3D / \u1EA3nh 360\xB0 c\u1EE7a v\u1EADt th\u1EC3</label><button class="model-image-picker" type="button" data-v-8ad3afc1>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="\u1EA2nh v\u1EADt th\u1EC3" data-v-8ad3afc1>`);
            } else {
              _push(`<span data-v-8ad3afc1>Ch\u1ECDn \u1EA3nh \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF chu\u1EA9n b\u1ECB</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>M\xF4 t\u1EA3 v\u1EADt th\u1EC3</label><textarea placeholder="T\xEAn t\xE1c ph\u1EA9m, ch\u1EA5t li\u1EC7u, t\xE1c gi\u1EA3..." data-v-8ad3afc1>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-8ad3afc1>\u1EE8ng d\u1EE5ng ch\u1EC9 hi\u1EC3n th\u1ECB \u1EA3nh do ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF cung c\u1EA5p, kh\xF4ng t\u1EF1 t\u1EA1o m\xF4 h\xECnh 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-8ad3afc1><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-8ad3afc1></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-8ad3afc1></div></div><div class="hint-text" data-v-8ad3afc1>\u{1F4A1} K\xE9o tr\u1EF1c ti\u1EBFp \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c tr\xEAn \u1EA3nh panorama \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>Ch\u1EBF \u0111\u1ED9 tour</div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Ki\u1EC3u tr\u1EA3i nghi\u1EC7m</label><select${ssrRenderAttr("value", (_z = tour.value.mode) != null ? _z : "free")} data-v-8ad3afc1><option value="free" data-v-8ad3afc1>T\u1EF1 do kh\xE1m ph\xE1</option><option value="guided" data-v-8ad3afc1>C\xF3 h\u01B0\u1EDBng d\u1EABn (t\u1EF1 chuy\u1EC3n c\u1EA3nh)</option></select></div><div class="field" data-v-8ad3afc1><label data-v-8ad3afc1>Th\u1EDDi gian m\u1ED7i c\u1EA3nh (gi\xE2y)</label><input${ssrRenderAttr("value", (_A = tour.value.guidedDuration) != null ? _A : 8)} type="number" min="3" max="60" data-v-8ad3afc1></div><div class="hint-text" data-v-8ad3afc1>\u1EDE ch\u1EBF \u0111\u1ED9 c\xF3 h\u01B0\u1EDBng d\u1EABn, tour t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n sang c\u1EA3nh ti\u1EBFp theo sau th\u1EDDi gian n\xE0y.</div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>C\u1EA3nh b\u1EAFt \u0111\u1EA7u</div><div class="field" data-v-8ad3afc1><select${ssrRenderAttr("value", (_C = tour.value.initialSceneId) != null ? _C : (_B = tour.value.scenes[0]) == null ? void 0 : _B.id)} data-v-8ad3afc1><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-8ad3afc1>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-8ad3afc1><div class="insp-section-title" data-v-8ad3afc1>T\xF9y ch\u1ECDn hi\u1EC3n th\u1ECB</div><div class="toggle-row" data-v-8ad3afc1><label data-v-8ad3afc1>T\u1EF1 \u0111\u1ED9ng xoay \u1EA3nh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-8ad3afc1><label data-v-8ad3afc1>Hi\u1EC7n b\u1EA3n \u0111\u1ED3 nh\u1ECF</label>`);
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
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-8ad3afc1><div class="modal" data-v-8ad3afc1><div class="modal-head" data-v-8ad3afc1><div data-v-8ad3afc1><span class="modal-eyebrow" data-v-8ad3afc1>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c m\u1EDBi</span><h3 data-v-8ad3afc1>Ch\u1ECDn h\xE0nh \u0111\u1ED9ng khi ng\u01B0\u1EDDi xem nh\u1EA5n v\xE0o</h3></div><button class="modal-close" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-8ad3afc1><path d="M18 6 6 18" data-v-8ad3afc1></path><path d="m6 6 12 12" data-v-8ad3afc1></path></svg></button></div><div class="modal-body" data-v-8ad3afc1><div class="type-grid" data-v-8ad3afc1><div class="type-card nav" data-v-8ad3afc1><div class="type-card-icon nav" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-8ad3afc1><path d="M12 4 L12 18" data-v-8ad3afc1></path><path d="M6 11 L12 5 L18 11" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Chuy\u1EC3n c\u1EA3nh</strong><span data-v-8ad3afc1>\u0110i t\u1EDBi m\u1ED9t \u1EA3nh panorama kh\xE1c</span></div><div class="type-card video" data-v-8ad3afc1><div class="type-card-icon video" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="currentColor" data-v-8ad3afc1><path d="M8 5v14l11-7z" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem video</strong><span data-v-8ad3afc1>M\u1EDF video gi\u1EDBi thi\u1EC7u ho\u1EB7c t\u01B0 li\u1EC7u</span></div><div class="type-card info" data-v-8ad3afc1><div class="type-card-icon info" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-8ad3afc1><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-8ad3afc1></circle><path d="M12 11 L12 18" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem th\xF4ng tin</strong><span data-v-8ad3afc1>M\u1EDF n\u1ED9i dung m\xF4 t\u1EA3 chi ti\u1EBFt</span></div><div class="type-card model3d" data-v-8ad3afc1><div class="type-card-icon model3d" data-v-8ad3afc1><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-8ad3afc1><path d="M12 2 3 7v10l9 5 9-5V7z" data-v-8ad3afc1></path><path d="M12 22V12M3 7l9 5 9-5" data-v-8ad3afc1></path></svg></div><strong data-v-8ad3afc1>Xem \u1EA3nh 3D</strong><span data-v-8ad3afc1>Hi\u1EC7n \u1EA3nh v\u1EADt th\u1EC3 do ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF th\xEAm</span></div></div></div><div class="modal-foot" data-v-8ad3afc1><button class="tb-btn" data-v-8ad3afc1>H\u1EE7y</button></div></div></div><!--]-->`);
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

export { _sceneId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_sceneId_-Dqq8_6YH');
//# sourceMappingURL=_sceneId_-Dqq8_6YH.mjs.map
