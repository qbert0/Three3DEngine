globalThis.__timing__.logStart('Load chunks/build/_sceneId_-WZhf4ILr');import { _ as __nuxt_component_0 } from './nuxt-link-B0iADLum.mjs';
import { _ as _sfc_main$1 } from './Tooltip-DAoftVVK.mjs';
import { _ as _sfc_main$2 } from './Spinner-mjqtnuYo.mjs';
import { _ as _sfc_main$3 } from './Switch-BXmFqIoE.mjs';
import { defineComponent, withAsyncContext, ref, computed, watch, withCtx, createTextVNode, createVNode, openBlock, createBlock, shallowRef, readonly, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr, ssrLooseContain } from 'vue/server-renderer';
import { V as View360Engine, M as MarkerPlugin } from './MarkerPlugin-QHP1lcY2.mjs';
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
    import('./MarkerPlugin-QHP1lcY2.mjs').then((n) => n.t).then(({ Raycaster, Vector2, Vector3 }) => {
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
    const selectedHotspotId = ref(null);
    const selectedHotspot = computed(() => {
      var _a;
      if (!currentScene.value) return null;
      return (_a = currentScene.value.markers.find((m) => m.id === selectedHotspotId.value)) != null ? _a : null;
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiTooltip = _sfc_main$1;
      const _component_UiSpinner = _sfc_main$2;
      const _component_UiSwitch = _sfc_main$3;
      _push(`<!--[--><div class="${ssrRenderClass(["admin-studio", { "preview-mode": previewMode.value }])}" style="${ssrRenderStyle({ gridTemplateColumns: `${leftSidebarWidth.value}px 5px minmax(0, 1fr) 5px ${rightSidebarWidth.value}px` })}" data-v-195ed375><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-195ed375><input type="file" accept="image/jpeg,image/png,image/webp" class="hidden" data-v-195ed375><input type="file" accept="audio/wav,audio/mpeg,audio/mp4,audio/ogg,audio/aac,audio/flac,.wav,.mp3,.m4a,.ogg,.aac,.flac" class="hidden" data-v-195ed375><header class="topbar" data-v-195ed375><div class="tb-logo" data-v-195ed375><div class="tb-logo-mark" data-v-195ed375>SV</div><div class="tb-logo-text" data-v-195ed375><strong data-v-195ed375>S\xF4ng V\xE2n Studio</strong><span data-v-195ed375>${ssrInterpolate((_b = (_a = tour.value) == null ? void 0 : _a.title) != null ? _b : "Kh\xF4ng gian tri\u1EC3n l\xE3m")}</span></div></div><div class="tb-breadcrumb" data-v-195ed375>`);
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
      _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="m9 18 6-6-6-6" data-v-195ed375></path></svg><strong id="breadcrumbTour" data-v-195ed375>${ssrInterpolate((_c = tour.value) == null ? void 0 : _c.title)}</strong><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="m9 18 6-6-6-6" data-v-195ed375></path></svg><span id="breadcrumbScene" data-v-195ed375>${ssrInterpolate((_d = currentScene.value) == null ? void 0 : _d.title)}</span></div><div class="tb-spacer" data-v-195ed375></div><div class="${ssrRenderClass([{ saving: saving.value, dirty: isDirty.value }, "save-indicator"])}" data-v-195ed375><span class="dot" data-v-195ed375></span><span id="saveText" data-v-195ed375>${ssrInterpolate(saving.value ? "\u0110ang l\u01B0u..." : isDirty.value ? "C\xF3 thay \u0111\u1ED5i ch\u01B0a l\u01B0u" : "\u0110\xE3 l\u01B0u")}</span></div><div class="tb-actions" data-v-195ed375>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Ho\xE0n t\xE1c (Ctrl+Z)",
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
        content: "L\xE0m l\u1EA1i (Ctrl+Y)",
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
      _push(`<span data-v-195ed375>${ssrInterpolate(previewMode.value ? "Ch\u1EC9nh s\u1EEDa" : "Xem tr\u01B0\u1EDBc")}</span></button><button class="tb-btn primary" id="saveBtn"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-195ed375>`);
      if (saving.value) {
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "sm",
          color: "white"
        }, null, _parent));
      } else {
        _push(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" data-v-195ed375></path><path d="M17 21v-8H7v8" data-v-195ed375></path><path d="M7 3v5h8" data-v-195ed375></path></svg>`);
      }
      _push(`<span data-v-195ed375>L\u01B0u</span></button></div></header><aside class="sidebar-left" data-v-195ed375><div class="side-head" data-v-195ed375><div class="side-head-row" data-v-195ed375><h3 data-v-195ed375>Danh s\xE1ch c\u1EA3nh</h3>`);
      _push(ssrRenderComponent(_component_UiTooltip, {
        content: "Th\xEAm c\u1EA3nh m\u1EDBi",
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
      _push(`</div><p id="sceneCount" data-v-195ed375>${ssrInterpolate((_f = (_e = tour.value) == null ? void 0 : _e.scenes.length) != null ? _f : 0)} c\u1EA3nh \xB7 K\xE9o \u0111\u1EC3 s\u1EAFp x\u1EBFp</p></div><div class="scene-list" id="sceneList" data-v-195ed375><!--[-->`);
      ssrRenderList((_h = (_g = tour.value) == null ? void 0 : _g.scenes) != null ? _h : [], (s, idx) => {
        var _a2, _b2, _c2, _d2;
        _push(`<div class="${ssrRenderClass([
          "scene-item",
          { active: idx === currentSceneIdx.value },
          { "drag-over": dragOverSceneIdx.value === idx }
        ])}" draggable="true" data-v-195ed375><span class="scene-drag" data-v-195ed375><svg viewBox="0 0 24 24" fill="currentColor" data-v-195ed375><circle cx="9" cy="6" r="1.5" data-v-195ed375></circle><circle cx="15" cy="6" r="1.5" data-v-195ed375></circle><circle cx="9" cy="12" r="1.5" data-v-195ed375></circle><circle cx="15" cy="12" r="1.5" data-v-195ed375></circle><circle cx="9" cy="18" r="1.5" data-v-195ed375></circle><circle cx="15" cy="18" r="1.5" data-v-195ed375></circle></svg></span><img class="scene-thumb-sm"${ssrRenderAttr("src", s.thumbnail || s.panorama)}${ssrRenderAttr("alt", s.title)} data-v-195ed375><div class="scene-info" data-v-195ed375><strong data-v-195ed375>${ssrInterpolate(s.title)}</strong><span data-v-195ed375>${ssrInterpolate((_b2 = (_a2 = s.markers) == null ? void 0 : _a2.length) != null ? _b2 : 0)} \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c${ssrInterpolate(((_c2 = tour.value) == null ? void 0 : _c2.initialSceneId) === s.id ? " \xB7 \u2605 B\u1EAFt \u0111\u1EA7u" : "")}</span></div>`);
        if (((_d2 = tour.value) == null ? void 0 : _d2.initialSceneId) === s.id) {
          _push(`<span class="scene-badge" data-v-195ed375>Start</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></aside><div class="resizer resizer-left" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng danh s\xE1ch c\u1EA3nh" data-v-195ed375></div><main class="preview" data-v-195ed375><div class="preview-toolbar" data-v-195ed375><button class="${ssrRenderClass(["tb-btn marker-add-btn", { placing: isPlacingHotspot.value }])}" id="placeHotspotBtn" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg><span data-v-195ed375>${ssrInterpolate(isPlacingHotspot.value ? "\u0110ang \u0111\u1EB7t... (ESC)" : "\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c")}</span></button>`);
      if (isPlacingHotspot.value) {
        _push(`<span class="toolbar-hint" data-v-195ed375>Nh\u1EA5n v\xE0o \u1EA3nh \u0111\u1EC3 ch\u1ECDn v\u1ECB tr\xED</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-spacer" data-v-195ed375></div><div class="pt-zoom" data-v-195ed375><button id="zoomOut" title="Thu nh\u1ECF" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="M5 12h14" data-v-195ed375></path></svg></button><span class="pt-zoom-label" id="zoomLabel" data-v-195ed375>${ssrInterpolate(zoom.value)}%</span><button id="zoomIn" title="Ph\xF3ng to" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg></button></div></div><div class="preview-canvas" id="previewCanvas" data-v-195ed375><div class="h-full w-full" data-v-195ed375></div><div class="${ssrRenderClass([{ active: isPlacingHotspot.value }, "place-hint"])}" id="placeHint" data-v-195ed375> Nh\u1EA5n l\xEAn \u1EA3nh \u0111\u1EC3 \u0111\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c \xB7 ESC \u0111\u1EC3 h\u1EE7y </div><div class="preview-info" data-v-195ed375><span class="preview-info-badge" data-v-195ed375>C\u1EA2NH ${ssrInterpolate(currentSceneIdx.value + 1)}/${ssrInterpolate((_j = (_i = tour.value) == null ? void 0 : _i.scenes.length) != null ? _j : 1)}</span><span class="preview-info-title" id="infoTitle" data-v-195ed375>${ssrInterpolate((_k = currentScene.value) == null ? void 0 : _k.title)}</span><span class="preview-info-coord" id="infoCoord" data-v-195ed375>${ssrInterpolate(isPlacingHotspot.value ? "Nh\u1EA5n v\u1ECB tr\xED b\u1EA5t k\u1EF3 \u0111\u1EC3 \u0111\u1EB7t" : "V\u1ECB tr\xED xem panorama")}</span></div></div></main><div class="resizer resizer-right" aria-label="Thay \u0111\u1ED5i chi\u1EC1u r\u1ED9ng b\u1EA3ng thu\u1ED9c t\xEDnh" data-v-195ed375></div><aside class="inspector sidebar-right" data-v-195ed375><div class="insp-tabs" data-v-195ed375><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "scene" }])}" data-v-195ed375> C\u1EA3nh </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "hotspots" }])}" data-v-195ed375> \u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c </button><button class="${ssrRenderClass(["insp-tab", { active: currentTab.value === "settings" }])}" data-v-195ed375> C\xE0i \u0111\u1EB7t </button></div><div class="insp-body" id="inspBody" data-v-195ed375>`);
      if (currentTab.value === "scene" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Th\xF4ng tin c\u1EA3nh</div><div class="field" data-v-195ed375><label data-v-195ed375>T\xEAn c\u1EA3nh</label><input${ssrRenderAttr("value", currentScene.value.title)} type="text" id="fieldName" data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>M\xF4 t\u1EA3 ng\u1EAFn</label><textarea id="fieldDesc" data-v-195ed375>${ssrInterpolate(currentScene.value.subtitle)}</textarea></div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>\u1EA2nh panorama</div><div class="img-picker" id="imgPicker" title="Nh\u1EA5n \u0111\u1EC3 t\u1EA3i \u1EA3nh panorama t\u1EEB m\xE1y t\xEDnh" data-v-195ed375>`);
        if (!panoramaPreviewFailed.value) {
          _push(`<img${ssrRenderAttr("src", currentScene.value.panorama)}${ssrRenderAttr("alt", currentScene.value.title)} data-v-195ed375>`);
        } else {
          _push(`<div class="image-error" data-v-195ed375>Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh. H\xE3y ki\u1EC3m tra \u0111\u01B0\u1EDDng d\u1EABn ho\u1EB7c t\u1EA3i \u1EA3nh m\u1EDBi.</div>`);
        }
        _push(`<div class="img-picker-overlay" data-v-195ed375>`);
        if (uploadingImage.value) {
          _push(ssrRenderComponent(_component_UiSpinner, {
            size: "md",
            color: "white"
          }, null, _parent));
        } else {
          _push(`<!--[--><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-195ed375></path><polyline points="17 8 12 3 7 8" data-v-195ed375></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-195ed375></line></svg><span data-v-195ed375>${ssrInterpolate(uploadingImage.value ? "\u0110ang t\u1EA3i l\xEAn..." : "\u0110\u1ED5i \u1EA3nh (T\u1EA3i l\xEAn)")}</span><!--]-->`);
        }
        _push(`</div></div><div class="field mt-2" data-v-195ed375><label data-v-195ed375>URL \u1EA3nh panorama (2:1)</label><input${ssrRenderAttr("value", currentScene.value.panorama)} type="text" placeholder="https://... ho\u1EB7c /uploads/..." data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>URL \u1EA3nh thumbnail</label><input${ssrRenderAttr("value", currentScene.value.thumbnail)} type="text" placeholder="https://... ho\u1EB7c /thumbnails/..." data-v-195ed375></div><div class="hint-text" data-v-195ed375>\u{1F4A1} Nh\u1EA5n v\xE0o \xF4 xem tr\u01B0\u1EDBc \u0111\u1EC3 ch\u1ECDn file t\u1EEB m\xE1y t\xEDnh ho\u1EB7c d\xE1n \u0111\u01B0\u1EDDng d\u1EABn URL tr\u1EF1c ti\u1EBFp.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>\xC1nh s\xE1ng h\xECnh \u1EA3nh</div><div class="brightness-control" data-v-195ed375><input${ssrRenderAttr("value", (_l = currentScene.value.brightness) != null ? _l : 1.25)} type="range" min="0.5" max="1.6" step="0.05" data-v-195ed375><output data-v-195ed375>${ssrInterpolate(Math.round(((_m = currentScene.value.brightness) != null ? _m : 1.25) * 100))}%</output></div><div class="brightness-presets" data-v-195ed375><button type="button" data-v-195ed375>G\u1ED1c</button><button type="button" data-v-195ed375>M\u1EB7c \u0111\u1ECBnh</button><button type="button" data-v-195ed375>S\xE1ng r\xF5</button></div><div class="hint-text" data-v-195ed375>\u0110i\u1EC1u ch\u1EC9nh ri\xEAng cho c\u1EA3nh n\xE0y, kh\xF4ng thay \u0111\u1ED5i file \u1EA3nh g\u1ED1c.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>V\u1ECB tr\xED trong tour</div><div class="field-row" data-v-195ed375><div class="field" data-v-195ed375><label data-v-195ed375>Th\u1EE9 t\u1EF1</label><input${ssrRenderAttr("value", currentSceneIdx.value + 1)} type="number" min="1"${ssrRenderAttr("max", (_n = tour.value) == null ? void 0 : _n.scenes.length)} data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>ID</label><input type="text"${ssrRenderAttr("value", currentScene.value.id)} readonly style="${ssrRenderStyle({ "opacity": "0.5" })}" data-v-195ed375></div></div><div class="toggle-row" data-v-195ed375><label for="isStartToggle" data-v-195ed375>\u0110\u1EB7t l\xE0m c\u1EA3nh b\u1EAFt \u0111\u1EA7u</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": ((_o = tour.value) == null ? void 0 : _o.initialSceneId) === currentScene.value.id,
          "onUpdate:modelValue": (val) => {
            if (tour.value) {
              tour.value.initialSceneId = val ? currentScene.value.id : void 0;
              markDirty();
            }
          }
        }, null, _parent));
        _push(`</div></div><div class="insp-section" data-v-195ed375><button class="btn-block danger" id="deleteSceneBtn" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M3 6h18" data-v-195ed375></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" data-v-195ed375></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" data-v-195ed375></path></svg> X\xF3a c\u1EA3nh n\xE0y </button></div><!--]-->`);
      } else if (currentTab.value === "hotspots" && currentScene.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375><span data-v-195ed375>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c trong c\u1EA3nh (${ssrInterpolate(currentScene.value.markers.length)})</span></div>`);
        if (!currentScene.value.markers.length) {
          _push(`<div class="empty-state" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-195ed375><circle cx="12" cy="12" r="10" data-v-195ed375></circle><path d="M12 8v8M8 12h8" data-v-195ed375></path></svg> Ch\u01B0a c\xF3 \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c n\xE0o.<br data-v-195ed375>Nh\u1EA5n \u201C\u0110\u1EB7t \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c\u201D \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u. </div>`);
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
        _push(`<button class="btn-block primary" id="quickAddHotspot" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375><path d="M12 5v14M5 12h14" data-v-195ed375></path></svg> Th\xEAm \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c </button></div>`);
        if (selectedHotspot.value) {
          _push(`<div class="insp-section border-t border-white/8 pt-4" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Ch\u1EC9nh s\u1EEDa \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c</div><div class="field" data-v-195ed375><label data-v-195ed375>Nh\xE3n hi\u1EC3n th\u1ECB</label><input${ssrRenderAttr("value", selectedHotspot.value.label)} type="text" data-v-195ed375></div>`);
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<div class="field" data-v-195ed375><label data-v-195ed375>C\u1EA3nh \u0111\xEDch</label><select${ssrRenderAttr("value", selectedHotspot.value.targetScene)} data-v-195ed375><option value="" disabled data-v-195ed375>\u2014 Ch\u1ECDn c\u1EA3nh \u2014</option><!--[-->`);
            ssrRenderList((_q = (_p = tour.value) == null ? void 0 : _p.scenes) != null ? _q : [], (s) => {
              _push(`<option${ssrRenderAttr("value", s.id)} data-v-195ed375>${ssrInterpolate(s.title)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375> Xoay (Z) \u2014 chi\u1EC1u nghi\xEAng <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_s = (_r = selectedHotspot.value.rotZ) != null ? _r : selectedHotspot.value.rotation) != null ? _s : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round(((_u = (_t = selectedHotspot.value.rotZ) != null ? _t : selectedHotspot.value.rotation) != null ? _u : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>0\xB0 = ^^ h\u01B0\u1EDBng l\xEAn. 90\xB0 = ph\u1EA3i. -90\xB0 = tr\xE1i.</div></div><div class="field" data-v-195ed375><label data-v-195ed375> Nghi\xEAng (X) \u2014 \u0111\u1EE9ng / n\u1EB1m <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_v = selectedHotspot.value.rotX) != null ? _v : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_w = selectedHotspot.value.rotX) != null ? _w : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>0\xB0 = \u0111\u1EE9ng th\u1EB3ng. +45\xB0 = ng\u1EA3 v\u1EC1 ph\xEDa tr\u01B0\u1EDBc. -45\xB0 = ng\u1EA3 v\u1EC1 ph\xEDa sau.</div></div><div class="field" data-v-195ed375><label data-v-195ed375> Xoay ngang (Y) \u2014 quay m\u1EB7t <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_x = selectedHotspot.value.rotY) != null ? _x : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_y = selectedHotspot.value.rotY) != null ? _y : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>Xoay m\u1EB7t m\u0169i t\xEAn sang tr\xE1i/ph\u1EA3i trong kh\xF4ng gian 3D.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "navigation" || selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375> Ph\xF3ng ngang (X) <span class="field-badge" data-v-195ed375>${ssrInterpolate((((_z = selectedHotspot.value.scaleX) != null ? _z : 1) * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", (_A = selectedHotspot.value.scaleX) != null ? _A : 1)} data-v-195ed375><button class="reset-btn" type="button" title="V\u1EC1 100%" data-v-195ed375>\u21BA</button></div></div><div class="field" data-v-195ed375><label data-v-195ed375> Ph\xF3ng d\u1ECDc (Y) <span class="field-badge" data-v-195ed375>${ssrInterpolate((((_B = selectedHotspot.value.scaleY) != null ? _B : 1) * 100).toFixed(0))}%</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="0.25" max="4" step="0.05"${ssrRenderAttr("value", (_C = selectedHotspot.value.scaleY) != null ? _C : 1)} data-v-195ed375><button class="reset-btn" type="button" title="V\u1EC1 100%" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>X v\xE0 Y thay \u0111\u1ED5i \u0111\u1ED9c l\u1EADp; marker m\u1EB7t ph\u1EB3ng kh\xF4ng s\u1EED d\u1EE5ng chi\u1EC1u s\xE2u Z.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "panel") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>H\u01B0\u1EDBng hi\u1EC3n th\u1ECB panel</label><select${ssrRenderAttr("value", (_D = selectedHotspot.value.placement) != null ? _D : "vertical")} data-v-195ed375><option value="vertical" data-v-195ed375>Chi\u1EC1u d\u1ECDc</option><option value="horizontal" data-v-195ed375>Chi\u1EC1u ngang</option></select><div class="hint-text" data-v-195ed375>H\u1EC7 th\u1ED1ng t\u1EF1 ch\u1ECDn tr\xEAn/d\u01B0\u1EDBi ho\u1EB7c tr\xE1i/ph\u1EA3i theo kho\u1EA3ng tr\u1ED1ng c\xF2n l\u1EA1i.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>N\u1ED9i dung trong panel</label><div class="video-size-presets" data-v-195ed375><button type="button" data-v-195ed375>+ V\u0103n b\u1EA3n</button><button type="button" data-v-195ed375>+ \u1EA2nh 3D</button><button type="button" data-v-195ed375>+ \xC2m thanh</button><button type="button" data-v-195ed375>+ AI Chat</button></div><div class="hint-text" data-v-195ed375>C\xF3 th\u1EC3 k\u1EBFt h\u1EE3p nhi\u1EC1u lo\u1EA1i v\xE0 thay \u0111\u1ED5i th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB.</div></div><!--[-->`);
            ssrRenderList(selectedHotspot.value.contents, (block, blockIndex) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2;
              _push(`<div class="field panel-block-editor" data-v-195ed375><label data-v-195ed375>${ssrInterpolate(block.type === "text" ? "V\u0103n b\u1EA3n" : block.type === "image3d" ? "\u1EA2nh 3D" : block.type === "audio" ? "\xC2m thanh" : "AI Chat")} <span class="field-badge" data-v-195ed375>${ssrInterpolate(blockIndex + 1)}</span></label>`);
              if (block.type === "text") {
                _push(`<!--[--><textarea placeholder="N\u1ED9i dung m\xF4 t\u1EA3..." data-v-195ed375>${ssrInterpolate(block.content)}</textarea><label data-v-195ed375>Ch\u1EBF \u0111\u1ED9 hi\u1EC3n th\u1ECB</label><select${ssrRenderAttr("value", (_a2 = block.presentation) != null ? _a2 : "text-only")} data-v-195ed375><option value="text-only" data-v-195ed375>Ch\u1EC9 v\u0103n b\u1EA3n</option><option value="text-and-audio" data-v-195ed375>V\u0103n b\u1EA3n v\xE0 b\u1EA3n \u0111\u1ECDc</option><option value="audio-only" data-v-195ed375>Ch\u1EC9 b\u1EA3n \u0111\u1ECDc</option></select>`);
                if (((_b2 = block.presentation) != null ? _b2 : "text-only") !== "text-only") {
                  _push(`<!--[--><label data-v-195ed375>File b\u1EA3n \u0111\u1ECDc (VieNeu-TTS)</label><input${ssrRenderAttr("value", (_d2 = (_c2 = block.speech) == null ? void 0 : _c2.src) != null ? _d2 : "")} type="text" placeholder="/uploads/audio/ban-doc.wav ho\u1EB7c URL" data-v-195ed375><div class="video-size-presets" data-v-195ed375><button type="button"${ssrIncludeBooleanAttr(uploadingNarration.value) ? " disabled" : ""} data-v-195ed375>${ssrInterpolate(uploadingNarration.value && narrationTargetBlockId.value === block.id ? "\u0110ang t\u1EA3i..." : "T\u1EA3i file b\u1EA3n \u0111\u1ECDc")}</button>`);
                  if ((_e2 = block.speech) == null ? void 0 : _e2.src) {
                    _push(`<button type="button" data-v-195ed375>B\u1ECF file</button>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`</div>`);
                  if ((_f2 = block.speech) == null ? void 0 : _f2.src) {
                    _push(`<audio${ssrRenderAttr("src", block.speech.src)} controls preload="metadata" style="${ssrRenderStyle({ "width": "100%" })}" data-v-195ed375></audio>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<div class="hint-text" data-v-195ed375>Xu\u1EA5t WAV/MP3 t\u1EEB VieNeu-TTS r\u1ED3i t\u1EA3i l\xEAn \u0111\xE2y. Khi c\xF3 file, thanh ti\u1EBFn tr\xECnh s\u1EBD d\xF9ng \u0111\xFAng th\u1EDDi l\u01B0\u1EE3ng audio.</div>`);
                  if (!((_g2 = block.speech) == null ? void 0 : _g2.src)) {
                    _push(`<details data-v-195ed375><summary data-v-195ed375>Gi\u1ECDng tr\xECnh duy\u1EC7t d\u1EF1 ph\xF2ng</summary><select${ssrRenderAttr("value", (_i2 = (_h2 = block.speech) == null ? void 0 : _h2.lang) != null ? _i2 : "vi-VN")} data-v-195ed375><option value="vi-VN" data-v-195ed375>Ti\u1EBFng Vi\u1EC7t</option><option value="en-US" data-v-195ed375>English (US)</option><option value="en-GB" data-v-195ed375>English (UK)</option><option value="fr-FR" data-v-195ed375>Fran\xE7ais</option><option value="ja-JP" data-v-195ed375>\u65E5\u672C\u8A9E</option><option value="ko-KR" data-v-195ed375>\uD55C\uAD6D\uC5B4</option></select><label data-v-195ed375>T\u1ED1c \u0111\u1ED9 <span class="field-badge" data-v-195ed375>${ssrInterpolate(((_k2 = (_j2 = block.speech) == null ? void 0 : _j2.rate) != null ? _k2 : 1).toFixed(1))}x</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_m2 = (_l2 = block.speech) == null ? void 0 : _l2.rate) != null ? _m2 : 1)} data-v-195ed375><label data-v-195ed375>Cao \u0111\u1ED9 <span class="field-badge" data-v-195ed375>${ssrInterpolate(((_o2 = (_n2 = block.speech) == null ? void 0 : _n2.pitch) != null ? _o2 : 1).toFixed(1))}</span></label><input type="range" min="0.5" max="2" step="0.1"${ssrRenderAttr("value", (_q2 = (_p2 = block.speech) == null ? void 0 : _p2.pitch) != null ? _q2 : 1)} data-v-195ed375><div class="hint-text" data-v-195ed375>Gi\u1ECDng \u0111\u1ECDc th\u1EF1c t\u1EBF ph\u1EE5 thu\u1ED9c v\xE0o gi\u1ECDng c\xF3 s\u1EB5n tr\xEAn thi\u1EBFt b\u1ECB ng\u01B0\u1EDDi xem.</div></details>`);
                  } else {
                    _push(`<!---->`);
                  }
                  _push(`<!--]-->`);
                } else {
                  _push(`<!---->`);
                }
                _push(`<!--]-->`);
              } else if (block.type === "image3d") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-195ed375><input${ssrRenderAttr("value", block.caption)} type="text" placeholder="Ch\xFA th\xEDch \u1EA3nh (kh\xF4ng b\u1EAFt bu\u1ED9c)" data-v-195ed375><!--]-->`);
              } else if (block.type === "audio") {
                _push(`<!--[--><input${ssrRenderAttr("value", block.src)} type="text" placeholder="/audio/file.mp3 ho\u1EB7c URL" data-v-195ed375><div class="hint-text" data-v-195ed375>AudioBlock ch\u1EC9 ph\xE1t t\u1EC7p \xE2m thanh \u0111\u01B0\u1EE3c t\u1EA3i l\xEAn ho\u1EB7c nh\u1EADp b\u1EB1ng URL; kh\u1ED1i n\xE0y kh\xF4ng t\u1EA1o gi\u1ECDng \u0111\u1ECDc t\u1EEB v\u0103n b\u1EA3n.</div><!--]-->`);
              } else {
                _push(`<textarea placeholder="Ng\u1EEF c\u1EA3nh d\xE0nh cho AI..." data-v-195ed375>${ssrInterpolate(block.context)}</textarea>`);
              }
              _push(`<div class="video-size-presets" data-v-195ed375><button type="button"${ssrIncludeBooleanAttr(blockIndex === 0) ? " disabled" : ""} data-v-195ed375>\u2191 L\xEAn</button><button type="button"${ssrIncludeBooleanAttr(blockIndex === selectedHotspot.value.contents.length - 1) ? " disabled" : ""} data-v-195ed375>\u2193 Xu\u1ED1ng</button><button type="button" data-v-195ed375>X\xF3a</button></div></div>`);
            });
            _push(`<!--]--><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "info") {
            _push(`<div class="field" data-v-195ed375><label data-v-195ed375>N\u1ED9i dung th\xF4ng tin</label><textarea placeholder="M\xF4 t\u1EA3 chi ti\u1EBFt \u0111\u1ECBa \u0111i\u1EC3m..." data-v-195ed375>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div>`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "video") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>\u0110\u01B0\u1EDDng d\u1EABn video</label><input${ssrRenderAttr("value", selectedHotspot.value.src)} type="url" placeholder="YouTube embed, Vimeo ho\u1EB7c /video.mp4" data-v-195ed375><div class="hint-text" data-v-195ed375>YouTube, Vimeo v\xE0 video tr\u1EF1c ti\u1EBFp \u0111\u1EC1u hi\u1EC3n th\u1ECB ngay trong panorama.</div></div><div class="field video-panel-size" data-v-195ed375><label data-v-195ed375>K\xEDch th\u01B0\u1EDBc panel</label><div class="video-size-presets" data-v-195ed375><button type="button" data-v-195ed375>Nh\u1ECF</button><button type="button" data-v-195ed375>V\u1EEBa</button><button type="button" data-v-195ed375>L\u1EDBn</button><button type="button" data-v-195ed375>R\u1EA5t l\u1EDBn</button></div><div class="video-size-row" data-v-195ed375><span data-v-195ed375>R\u1ED9ng</span><input type="range" min="240" max="2560" step="10"${ssrRenderAttr("value", (_E = selectedHotspot.value.width) != null ? _E : 640)} data-v-195ed375><input class="video-size-number" type="number" min="240" max="2560" step="10"${ssrRenderAttr("value", (_F = selectedHotspot.value.width) != null ? _F : 640)} data-v-195ed375></div><div class="video-size-row" data-v-195ed375><span data-v-195ed375>Cao</span><input type="range" min="135" max="1440" step="5"${ssrRenderAttr("value", (_G = selectedHotspot.value.height) != null ? _G : 360)} data-v-195ed375><input class="video-size-number" type="number" min="135" max="1440" step="5"${ssrRenderAttr("value", (_H = selectedHotspot.value.height) != null ? _H : 360)} data-v-195ed375></div><label class="video-ratio-lock" data-v-195ed375><input${ssrIncludeBooleanAttr(Array.isArray(lockVideoAspectRatio.value) ? ssrLooseContain(lockVideoAspectRatio.value, null) : lockVideoAspectRatio.value) ? " checked" : ""} type="checkbox" data-v-195ed375> Gi\u1EEF nguy\xEAn t\u1EC9 l\u1EC7 khung h\xECnh </label><div class="hint-text" data-v-195ed375>K\xEDch th\u01B0\u1EDBc hi\u1EC7n t\u1EA1i: ${ssrInterpolate((_I = selectedHotspot.value.width) != null ? _I : 640)} \xD7 ${ssrInterpolate((_J = selectedHotspot.value.height) != null ? _J : 360)} px</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Xoay ngang (Y) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_K = selectedHotspot.value.rotY) != null ? _K : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_L = selectedHotspot.value.rotY) != null ? _L : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>Quay c\u1EA1nh tr\xE1i ho\u1EB7c ph\u1EA3i c\u1EE7a m\xE0n h\xECnh ra xa ng\u01B0\u1EDDi xem.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Nghi\xEAng (X) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_M = selectedHotspot.value.rotX) != null ? _M : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-90" max="90" step="1"${ssrRenderAttr("value", Math.round(((_N = selectedHotspot.value.rotX) != null ? _N : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>Ng\u1EA3 m\xE0n h\xECnh l\xEAn ho\u1EB7c xu\u1ED1ng trong kh\xF4ng gian 3D.</div></div><div class="field" data-v-195ed375><label data-v-195ed375>Xoay m\u1EB7t ph\u1EB3ng (Z) <span class="field-badge" data-v-195ed375>${ssrInterpolate(Math.round(((_O = selectedHotspot.value.rotZ) != null ? _O : 0) * 180 / Math.PI))}\xB0</span></label><div class="rotation-control" data-v-195ed375><input type="range" min="-180" max="180" step="1"${ssrRenderAttr("value", Math.round(((_P = selectedHotspot.value.rotZ) != null ? _P : 0) * 180 / Math.PI))} data-v-195ed375><button class="reset-btn" type="button" title="V\u1EC1 0\xB0" data-v-195ed375>\u21BA</button></div><div class="hint-text" data-v-195ed375>Xoay panel theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3 ho\u1EB7c ng\u01B0\u1EE3c l\u1EA1i.</div></div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (selectedHotspot.value.plugin === "model3d") {
            _push(`<!--[--><div class="field" data-v-195ed375><label data-v-195ed375>\u1EA2nh 3D / \u1EA3nh 360\xB0 c\u1EE7a v\u1EADt th\u1EC3</label><button class="model-image-picker" type="button" data-v-195ed375>`);
            if (selectedHotspot.value.image) {
              _push(`<img${ssrRenderAttr("src", selectedHotspot.value.image)} alt="\u1EA2nh v\u1EADt th\u1EC3" data-v-195ed375>`);
            } else {
              _push(`<span data-v-195ed375>Ch\u1ECDn \u1EA3nh \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF chu\u1EA9n b\u1ECB</span>`);
            }
            _push(`</button><input${ssrRenderAttr("value", selectedHotspot.value.image)} type="text" placeholder="/uploads/... ho\u1EB7c https://..." data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>M\xF4 t\u1EA3 v\u1EADt th\u1EC3</label><textarea placeholder="T\xEAn t\xE1c ph\u1EA9m, ch\u1EA5t li\u1EC7u, t\xE1c gi\u1EA3..." data-v-195ed375>${ssrInterpolate(selectedHotspot.value.content)}</textarea></div><div class="hint-text" data-v-195ed375>\u1EE8ng d\u1EE5ng ch\u1EC9 hi\u1EC3n th\u1ECB \u1EA3nh do ng\u01B0\u1EDDi thi\u1EBFt k\u1EBF cung c\u1EA5p, kh\xF4ng t\u1EF1 t\u1EA1o m\xF4 h\xECnh 3D.</div><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="field-row" data-v-195ed375><div class="field" data-v-195ed375><label data-v-195ed375>Yaw (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.yaw.toFixed(2))} type="number" step="0.05" data-v-195ed375></div><div class="field" data-v-195ed375><label data-v-195ed375>Pitch (rad)</label><input${ssrRenderAttr("value", selectedHotspot.value.pitch.toFixed(2))} type="number" step="0.05" data-v-195ed375></div></div><div class="hint-text" data-v-195ed375>\u{1F4A1} K\xE9o tr\u1EF1c ti\u1EBFp \u0111i\u1EC3m t\u01B0\u01A1ng t\xE1c tr\xEAn \u1EA3nh panorama \u0111\u1EC3 \u0111\u1ED5i v\u1ECB tr\xED.</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else if (currentTab.value === "settings" && tour.value) {
        _push(`<!--[--><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>Ch\u1EBF \u0111\u1ED9 tour</div><div class="field" data-v-195ed375><label data-v-195ed375>Ki\u1EC3u tr\u1EA3i nghi\u1EC7m</label><select${ssrRenderAttr("value", (_Q = tour.value.mode) != null ? _Q : "free")} data-v-195ed375><option value="free" data-v-195ed375>T\u1EF1 do kh\xE1m ph\xE1</option><option value="guided" data-v-195ed375>C\xF3 h\u01B0\u1EDBng d\u1EABn (t\u1EF1 chuy\u1EC3n c\u1EA3nh)</option></select></div><div class="field" data-v-195ed375><label data-v-195ed375>Th\u1EDDi gian m\u1ED7i c\u1EA3nh (gi\xE2y)</label><input${ssrRenderAttr("value", (_R = tour.value.guidedDuration) != null ? _R : 8)} type="number" min="3" max="60" data-v-195ed375></div><div class="hint-text" data-v-195ed375>\u1EDE ch\u1EBF \u0111\u1ED9 c\xF3 h\u01B0\u1EDBng d\u1EABn, tour t\u1EF1 \u0111\u1ED9ng chuy\u1EC3n sang c\u1EA3nh ti\u1EBFp theo sau th\u1EDDi gian n\xE0y.</div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>C\u1EA3nh b\u1EAFt \u0111\u1EA7u</div><div class="field" data-v-195ed375><select${ssrRenderAttr("value", (_T = tour.value.initialSceneId) != null ? _T : (_S = tour.value.scenes[0]) == null ? void 0 : _S.id)} data-v-195ed375><!--[-->`);
        ssrRenderList(tour.value.scenes, (s) => {
          _push(`<option${ssrRenderAttr("value", s.id)} data-v-195ed375>${ssrInterpolate(s.title)}</option>`);
        });
        _push(`<!--]--></select></div></div><div class="insp-section" data-v-195ed375><div class="insp-section-title" data-v-195ed375>T\xF9y ch\u1ECDn hi\u1EC3n th\u1ECB</div><div class="toggle-row" data-v-195ed375><label data-v-195ed375>T\u1EF1 \u0111\u1ED9ng xoay \u1EA3nh</label>`);
        _push(ssrRenderComponent(_component_UiSwitch, {
          "model-value": !!tour.value.autoRotate,
          "onUpdate:modelValue": (val) => {
            tour.value.autoRotate = val;
            markDirty();
          }
        }, null, _parent));
        _push(`</div><div class="toggle-row" data-v-195ed375><label data-v-195ed375>Hi\u1EC7n b\u1EA3n \u0111\u1ED3 nh\u1ECF</label>`);
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
      _push(`</div></aside></div><div class="${ssrRenderClass([{ open: showHotspotModal.value }, "modal-backdrop"])}" data-v-195ed375><div class="modal" data-v-195ed375><div class="modal-head" data-v-195ed375><div data-v-195ed375><span class="modal-eyebrow" data-v-195ed375>\u0110i\u1EC3m t\u01B0\u01A1ng t\xE1c m\u1EDBi</span><h3 data-v-195ed375>Ch\u1ECDn h\xE0nh \u0111\u1ED9ng khi ng\u01B0\u1EDDi xem nh\u1EA5n v\xE0o</h3></div><button class="modal-close" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-195ed375><path d="M18 6 6 18" data-v-195ed375></path><path d="m6 6 12 12" data-v-195ed375></path></svg></button></div><div class="modal-body" data-v-195ed375><div class="type-grid" data-v-195ed375><div class="type-card nav" data-v-195ed375><div class="type-card-icon nav" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" data-v-195ed375><path d="M12 4 L12 18" data-v-195ed375></path><path d="M6 11 L12 5 L18 11" data-v-195ed375></path></svg></div><strong data-v-195ed375>Chuy\u1EC3n c\u1EA3nh</strong><span data-v-195ed375>\u0110i t\u1EDBi m\u1ED9t \u1EA3nh panorama kh\xE1c</span></div><div class="type-card video" data-v-195ed375><div class="type-card-icon video" data-v-195ed375><svg viewBox="0 0 24 24" fill="currentColor" data-v-195ed375><path d="M8 5v14l11-7z" data-v-195ed375></path></svg></div><strong data-v-195ed375>Xem video</strong><span data-v-195ed375>M\u1EDF video gi\u1EDBi thi\u1EC7u ho\u1EB7c t\u01B0 li\u1EC7u</span></div><div class="type-card info" data-v-195ed375><div class="type-card-icon info" data-v-195ed375><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-195ed375><rect x="4" y="4" width="16" height="16" rx="3" data-v-195ed375></rect><path d="M8 9h8M8 13h8M8 17h5" data-v-195ed375></path></svg></div><strong data-v-195ed375>Panel n\u1ED9i dung</strong><span data-v-195ed375>K\u1EBFt h\u1EE3p v\u0103n b\u1EA3n, \u1EA3nh 3D, \xE2m thanh v\xE0 AI</span></div></div></div><div class="modal-foot" data-v-195ed375><button class="tb-btn" data-v-195ed375>H\u1EE7y</button></div></div></div><!--]-->`);
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

export { _sceneId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_sceneId_-WZhf4ILr');
//# sourceMappingURL=_sceneId_-WZhf4ILr.mjs.map
