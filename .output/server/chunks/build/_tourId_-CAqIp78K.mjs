globalThis.__timing__.logStart('Load chunks/build/_tourId_-CAqIp78K');import { _ as _sfc_main$1 } from './Spinner-mjqtnuYo.mjs';
import { _ as _sfc_main$2 } from './EmptyState-CYLOXev5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-AvfA4aCh.mjs';
import { _ as _sfc_main$3 } from './Button-CeBG5qKU.mjs';
import { defineComponent, computed, withAsyncContext, ref, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, shallowRef, readonly, useSSRContext, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { _ as _export_sfc, u as useRoute, a as useToast } from './server.mjs';
import { V as View360Engine, M as MarkerPlugin, a as PluginBase, P as PanelMarker, S as Sprite } from './MarkerPlugin-CaJqpyxo.mjs';
import { u as useFetch } from './fetch-BTut8LNP.mjs';
import { u as useHead } from './v3-vl98-hf4.mjs';
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
import 'vue-router';
import '@vue/shared';
import 'perfect-debounce';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
function createNavigationState(tourId, sceneId) {
  return { entryTourId: tourId, current: { tourId, sceneId }, history: [] };
}
function navTo(state, dest) {
  return {
    ...state,
    current: dest,
    history: state.history.length < 50 ? [...state.history, state.current] : [...state.history.slice(1), state.current]
  };
}
function navBack(state) {
  if (!state.history.length) return state;
  const prev = state.history[state.history.length - 1];
  return { ...state, current: prev, history: state.history.slice(0, -1) };
}
function canGoBackFn(state) {
  return state.history.length > 0;
}
function isInGuestTourFn(state) {
  return state.current.tourId !== state.entryTourId;
}
function resolveScene(tour, sceneId) {
  return tour.scenes.find((s) => s.id === sceneId);
}
function resolveInitialScene(tour, preferredId) {
  if (preferredId) {
    const found = tour.scenes.find((s) => s.id === preferredId);
    if (found) return found;
  }
  const initial = tour.initialSceneId ? tour.scenes.find((s) => s.id === tour.initialSceneId) : void 0;
  return initial != null ? initial : tour.scenes[0];
}
const useRuntimeStore = defineStore("runtime", () => {
  const tour = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const navState = ref(null);
  const activeScene = computed(() => {
    if (!tour.value || !navState.value) return void 0;
    if (navState.value.current.tourId === tour.value.slug) {
      return resolveScene(tour.value, navState.value.current.sceneId);
    }
    return void 0;
  });
  const activeSceneId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.current.sceneId) != null ? _b : "";
  });
  const activeTourId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.current.tourId) != null ? _b : "";
  });
  const entryTourId = computed(() => {
    var _a, _b;
    return (_b = (_a = navState.value) == null ? void 0 : _a.entryTourId) != null ? _b : "";
  });
  const canGoBack = computed(() => navState.value ? canGoBackFn(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTourFn(navState.value) : false);
  const scenes = computed(() => {
    var _a, _b;
    return (_b = (_a = tour.value) == null ? void 0 : _a.scenes) != null ? _b : [];
  });
  const sceneIndex = computed(() => {
    if (!navState.value || !tour.value) return 0;
    return tour.value.scenes.findIndex((s) => s.id === activeSceneId.value) + 1;
  });
  async function loadTour(tourId, preferredSceneId) {
    var _a, _b, _c;
    if (loading.value) return;
    loading.value = true;
    error.value = null;
    try {
      const res = await $fetch(`/api/tours/${tourId}`);
      if (!res.item) throw new Error("Tour kh\xF4ng t\u1ED3n t\u1EA1i.");
      tour.value = res.item;
      const initial = resolveInitialScene(res.item, preferredSceneId);
      navState.value = createNavigationState(tourId, initial.id);
    } catch (e) {
      error.value = (_c = (_b = (_a = e == null ? void 0 : e.data) == null ? void 0 : _a.statusMessage) != null ? _b : e == null ? void 0 : e.message) != null ? _c : "L\u1ED7i t\u1EA3i tour.";
    } finally {
      loading.value = false;
    }
  }
  function navigateTo(sceneId, tourId) {
    var _a, _b;
    if (!navState.value) return;
    navState.value = navTo(navState.value, {
      tourId: (_b = tourId != null ? tourId : (_a = tour.value) == null ? void 0 : _a.slug) != null ? _b : "",
      sceneId
    });
  }
  function goBack() {
    if (!navState.value) return;
    navState.value = navBack(navState.value);
  }
  function reset() {
    tour.value = null;
    navState.value = null;
    loading.value = false;
    error.value = null;
  }
  return {
    // State
    tour,
    loading,
    error,
    navState,
    // Computed
    activeScene,
    activeSceneId,
    activeTourId,
    entryTourId,
    canGoBack,
    inGuestTour,
    scenes,
    sceneIndex,
    // Actions
    loadTour,
    navigateTo,
    goBack,
    reset
  };
});
const TAB_HEIGHT = 32;
const NODE_RADIUS = 6;
const NODE_RADIUS_CURRENT = 9;
const ARROW_LENGTH = 20;
const TOOLTIP_FONT = '600 11px "Be Vietnam Pro", sans-serif';
const TAB_FONT = '600 11px "Be Vietnam Pro", sans-serif';
const COLORS = {
  bg: "#14151f",
  tabBg: "rgba(255,255,255,0.06)",
  tabActive: "rgba(59,130,246,0.25)",
  tabBorder: "rgba(59,130,246,0.6)",
  tabText: "rgba(255,255,255,0.5)",
  tabTextActive: "#93c5fd",
  node: "rgba(255,255,255,0.65)",
  nodeHover: "#fff",
  nodeCurrent: "#f59e0b",
  nodeCurrentBorder: "#fff",
  connection: "rgba(255,255,255,0.18)",
  connectionExit: "rgba(59,130,246,0.35)",
  arrow: "rgba(245,158,11,0.85)",
  tooltipBg: "rgba(10,10,20,0.88)",
  tooltipText: "#fff",
  tooltipBorder: "rgba(255,255,255,0.15)"
};
class Map2DStrategy {
  constructor() {
    __publicField(this, "canvas");
    __publicField(this, "ctx2d");
    __publicField(this, "config");
    __publicField(this, "currentFloorId", null);
    __publicField(this, "currentNodeId", null);
    __publicField(this, "hoveredNodeId", null);
    __publicField(this, "heading", { yaw: 0, pitch: 0, fov: 75 });
    __publicField(this, "images", /* @__PURE__ */ new Map());
    __publicField(this, "dpr", 1);
    __publicField(this, "displayW", 0);
    __publicField(this, "displayH", 0);
    __publicField(this, "onNodeClick");
    __publicField(this, "onFloorChange");
    // ── Event handlers ────────────────────────────────────────────
    __publicField(this, "handleClick", (e) => {
      var _a, _b;
      const { x, y } = this.canvasCoords(e);
      const tab = this.hitTestTab(x, y);
      if (tab) {
        this.currentFloorId = tab.id;
        (_a = this.onFloorChange) == null ? void 0 : _a.call(this, tab.id);
        this.draw();
        return;
      }
      const node = this.hitTestNode(x, y);
      if (node) (_b = this.onNodeClick) == null ? void 0 : _b.call(this, node.id);
    });
    __publicField(this, "handleMouseMove", (e) => {
      var _a;
      const { x, y } = this.canvasCoords(e);
      const node = this.hitTestNode(x, y);
      const tab = this.hitTestTab(x, y);
      const newHovered = (_a = node == null ? void 0 : node.id) != null ? _a : null;
      if (newHovered !== this.hoveredNodeId) {
        this.hoveredNodeId = newHovered;
        this.draw();
      }
      this.canvas.style.cursor = node || tab ? "pointer" : "default";
    });
    __publicField(this, "handleMouseLeave", () => {
      if (this.hoveredNodeId) {
        this.hoveredNodeId = null;
        this.draw();
      }
      this.canvas.style.cursor = "default";
    });
  }
  // ── Init ──────────────────────────────────────────────────────
  async init(config, container) {
    var _a, _b, _c;
    this.config = config;
    this.dpr = Math.min((void 0).devicePixelRatio, 2);
    this.canvas = (void 0).createElement("canvas");
    this.canvas.style.cssText = "width:100%;height:100%;display:block;cursor:default";
    this.ctx2d = this.canvas.getContext("2d");
    container.appendChild(this.canvas);
    this.currentFloorId = (_c = (_b = config.defaultFloorId) != null ? _b : (_a = config.floors[0]) == null ? void 0 : _a.id) != null ? _c : null;
    await Promise.all(
      config.floors.map((floor) => this.loadImage(floor.id, floor.imageUrl))
    );
    this.canvas.addEventListener("click", this.handleClick);
    this.canvas.addEventListener("mousemove", this.handleMouseMove);
    this.canvas.addEventListener("mouseleave", this.handleMouseLeave);
    this.resize(container.clientWidth, container.clientHeight);
  }
  // ── API ───────────────────────────────────────────────────────
  update(_dt, _camera) {
    this.draw();
  }
  setCurrentNode(nodeId) {
    var _a;
    this.currentNodeId = nodeId;
    if (this.config.autoSwitchFloor !== false) {
      const floor = this.findFloorForNode(nodeId);
      if (floor && floor.id !== this.currentFloorId) {
        this.currentFloorId = floor.id;
        (_a = this.onFloorChange) == null ? void 0 : _a.call(this, floor.id);
      }
    }
    this.draw();
  }
  setCameraHeading(yaw, pitch, fov) {
    this.heading = { yaw, pitch, fov: fov != null ? fov : 75 };
    this.draw();
  }
  setFloor(floorId) {
    if (this.config.floors.some((f) => f.id === floorId)) {
      this.currentFloorId = floorId;
      this.draw();
    }
  }
  setVisible(visible) {
    this.canvas.style.display = visible ? "block" : "none";
  }
  resize(width, height) {
    this.displayW = width;
    this.displayH = height;
    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;
    this.draw();
  }
  dispose() {
    this.canvas.removeEventListener("click", this.handleClick);
    this.canvas.removeEventListener("mousemove", this.handleMouseMove);
    this.canvas.removeEventListener("mouseleave", this.handleMouseLeave);
    this.canvas.remove();
  }
  // ── Drawing ───────────────────────────────────────────────────
  draw() {
    const ctx = this.ctx2d;
    const w = this.displayW;
    const h = this.displayH;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, w, h);
    const showTabs = this.config.showFloorTabs !== false && this.config.floors.length > 1;
    const tabH = showTabs ? TAB_HEIGHT : 0;
    const mapY = tabH;
    const mapH = h - tabH;
    if (showTabs) this.drawTabs(ctx, w);
    const floor = this.currentFloor();
    if (!floor) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, mapY, w, mapH);
    ctx.clip();
    const img = this.images.get(floor.id);
    const mapRect = this.contentRect(floor, w, mapH, mapY, img);
    if ((img == null ? void 0 : img.complete) && img.naturalWidth > 0) {
      ctx.globalAlpha = 0.82;
      ctx.drawImage(img, mapRect.x, mapRect.y, mapRect.width, mapRect.height);
      ctx.globalAlpha = 1;
    } else {
      this.drawGridPattern(ctx, w, mapH, mapY);
    }
    if (this.config.showConnections !== false) {
      this.drawConnections(ctx, floor, w, mapH, mapY);
    }
    this.drawNodes(ctx, floor, w, mapH, mapY);
    if (this.config.showCameraArrow !== false && this.currentNodeId) {
      this.drawCameraArrow(ctx, floor, w, mapH, mapY);
    }
    if (this.hoveredNodeId) {
      this.drawTooltip(ctx, floor, w, mapH, mapY);
    }
    ctx.restore();
  }
  drawTabs(ctx, w) {
    const floors = this.config.floors;
    const tabW = w / floors.length;
    ctx.fillStyle = COLORS.tabBg;
    ctx.fillRect(0, 0, w, TAB_HEIGHT);
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, TAB_HEIGHT);
    ctx.lineTo(w, TAB_HEIGHT);
    ctx.stroke();
    floors.forEach((floor, i) => {
      var _a;
      const x = i * tabW;
      const isActive = floor.id === this.currentFloorId;
      if (isActive) {
        ctx.fillStyle = COLORS.tabActive;
        ctx.fillRect(x, 0, tabW, TAB_HEIGHT);
        ctx.fillStyle = COLORS.tabBorder;
        ctx.fillRect(x, TAB_HEIGHT - 2.5, tabW, 2.5);
      }
      const hasCurrentNode = floor.nodes.some((n) => n.id === this.currentNodeId);
      ctx.font = TAB_FONT;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = isActive ? COLORS.tabTextActive : COLORS.tabText;
      const label = (_a = floor.shortName) != null ? _a : floor.name;
      ctx.fillText(label, x + tabW / 2, TAB_HEIGHT / 2);
      if (hasCurrentNode && !isActive) {
        const textW = ctx.measureText(label).width;
        ctx.beginPath();
        ctx.arc(x + tabW / 2 + textW / 2 + 6, TAB_HEIGHT / 2, 3, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.nodeCurrent;
        ctx.fill();
      }
    });
  }
  drawConnections(ctx, floor, w, h, offsetY) {
    floor.nodes.forEach((node) => {
      if (!this.isNodeVisible(node)) return;
      const pos = this.nodeScreen(node, floor, w, h, offsetY);
      node.neighbors.forEach((nId) => {
        const neighbor = floor.nodes.find((n) => n.id === nId);
        if (!neighbor || !this.isNodeVisible(neighbor)) return;
        const nPos = this.nodeScreen(neighbor, floor, w, h, offsetY);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(nPos.x, nPos.y);
        ctx.strokeStyle = COLORS.connection;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.stroke();
      });
      if (node.exitTo) {
        const pos2 = this.nodeScreen(node, floor, w, h, offsetY);
        ctx.beginPath();
        ctx.arc(pos2.x, pos2.y, NODE_RADIUS + 5, 0, Math.PI * 2);
        ctx.strokeStyle = COLORS.connectionExit;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }
  drawNodes(ctx, floor, w, h, offsetY) {
    floor.nodes.forEach((node) => {
      if (!this.isNodeVisible(node)) return;
      const pos = this.nodeScreen(node, floor, w, h, offsetY);
      const isCurrent = node.id === this.currentNodeId;
      const isHovered = node.id === this.hoveredNodeId;
      const r = isCurrent ? NODE_RADIUS_CURRENT : isHovered ? NODE_RADIUS + 1 : NODE_RADIUS;
      if (isCurrent) {
        ctx.save();
        ctx.shadowColor = COLORS.nodeCurrent;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.nodeCurrent;
        ctx.fill();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? COLORS.nodeCurrent : isHovered ? COLORS.nodeHover : COLORS.node;
      ctx.fill();
      if (isCurrent) {
        ctx.strokeStyle = COLORS.nodeCurrentBorder;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      } else if (isHovered) {
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });
  }
  drawCameraArrow(ctx, floor, w, h, offsetY) {
    const curNode = floor.nodes.find((n) => n.id === this.currentNodeId);
    if (!curNode) return;
    const pos = this.nodeScreen(curNode, floor, w, h, offsetY);
    const angle = -this.heading.yaw;
    const tipX = pos.x + Math.sin(angle) * ARROW_LENGTH;
    const tipY = pos.y - Math.cos(angle) * ARROW_LENGTH;
    ctx.save();
    ctx.translate(tipX, tipY);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(-5, 4);
    ctx.lineTo(5, 4);
    ctx.closePath();
    ctx.fillStyle = COLORS.arrow;
    ctx.fill();
    ctx.restore();
  }
  drawTooltip(ctx, floor, w, h, offsetY) {
    const node = floor.nodes.find((n) => n.id === this.hoveredNodeId);
    if (!node) return;
    const pos = this.nodeScreen(node, floor, w, h, offsetY);
    ctx.font = TOOLTIP_FONT;
    const text = node.name;
    const textW = ctx.measureText(text).width;
    const padX = 8;
    const tipW = textW + padX * 2;
    const tipH = 22;
    let tx = pos.x - tipW / 2;
    let ty = pos.y - NODE_RADIUS_CURRENT - tipH - 6;
    tx = Math.max(4, Math.min(w - tipW - 4, tx));
    if (ty < offsetY + 4) ty = pos.y + NODE_RADIUS_CURRENT + 6;
    ctx.fillStyle = COLORS.tooltipBg;
    ctx.strokeStyle = COLORS.tooltipBorder;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(tx, ty, tipW, tipH, 5);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = COLORS.tooltipText;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, tx + tipW / 2, ty + tipH / 2);
  }
  drawGridPattern(ctx, w, h, offsetY) {
    const spacing = 24;
    ctx.strokeStyle = "rgba(255,255,255,0.04)";
    ctx.lineWidth = 0.5;
    for (let x = spacing; x < w; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, offsetY);
      ctx.lineTo(x, offsetY + h);
      ctx.stroke();
    }
    for (let y = offsetY + spacing; y < offsetY + h; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    for (let x = spacing; x < w; x += spacing) {
      for (let y = offsetY + spacing; y < offsetY + h; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    ctx.strokeRect(8, offsetY + 4, w - 16, h - 8);
  }
  // ── Coordinate helpers ────────────────────────────────────────
  nodeScreen(node, floor, w, h, offsetY) {
    const rect = this.contentRect(floor, w, h, offsetY, this.images.get(floor.id));
    return {
      x: rect.x + node.x / floor.imageWidth * rect.width,
      y: rect.y + node.y / floor.imageHeight * rect.height
    };
  }
  contentRect(floor, w, h, offsetY, image) {
    const padding = 12;
    const availableW = Math.max(1, w - padding * 2);
    const availableH = Math.max(1, h - padding * 2);
    const sourceW = (image == null ? void 0 : image.naturalWidth) || floor.imageWidth || 1;
    const sourceH = (image == null ? void 0 : image.naturalHeight) || floor.imageHeight || 1;
    const scale = Math.min(availableW / sourceW, availableH / sourceH);
    const width = sourceW * scale;
    const height = sourceH * scale;
    return { x: (w - width) / 2, y: offsetY + (h - height) / 2, width, height };
  }
  currentFloor() {
    return this.config.floors.find((f) => f.id === this.currentFloorId);
  }
  findFloorForNode(nodeId) {
    return this.config.floors.find((f) => f.nodes.some((n) => n.id === nodeId));
  }
  isNodeVisible(node) {
    return node.visible === true || node.id === this.currentNodeId;
  }
  // ── Hit testing ───────────────────────────────────────────────
  hitTestNode(mx, my) {
    const floor = this.currentFloor();
    if (!floor) return null;
    const showTabs = this.config.showFloorTabs !== false && this.config.floors.length > 1;
    const tabH = showTabs ? TAB_HEIGHT : 0;
    const mapH = this.displayH - tabH;
    let closest = null;
    let minDist = 18;
    for (const node of floor.nodes) {
      if (!this.isNodeVisible(node)) continue;
      const pos = this.nodeScreen(node, floor, this.displayW, mapH, tabH);
      const dist = Math.hypot(mx - pos.x, my - pos.y);
      if (dist < minDist) {
        minDist = dist;
        closest = node;
      }
    }
    return closest;
  }
  hitTestTab(mx, my) {
    var _a;
    const showTabs = this.config.showFloorTabs !== false && this.config.floors.length > 1;
    if (!showTabs || my > TAB_HEIGHT) return null;
    const tabW = this.displayW / this.config.floors.length;
    const index = Math.floor(mx / tabW);
    return (_a = this.config.floors[index]) != null ? _a : null;
  }
  canvasCoords(e) {
    const rect = this.canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }
  // ── Image loading ─────────────────────────────────────────────
  async loadImage(key, url) {
    if (!url) return;
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        this.images.set(key, img);
        resolve();
      };
      img.onerror = () => resolve();
      img.src = url;
    });
  }
}
class LeafletMapStrategy {
  constructor() {
    __publicField(this, "map", null);
    __publicField(this, "leaflet", null);
    __publicField(this, "markers", /* @__PURE__ */ new Map());
    __publicField(this, "nodes", /* @__PURE__ */ new Map());
    __publicField(this, "currentNodeId", null);
    __publicField(this, "headingYaw", 0);
    __publicField(this, "container", null);
    __publicField(this, "onNodeClick");
    __publicField(this, "onFloorChange");
  }
  async init(config, container) {
    this.container = container;
    this.leaflet = await import('../_/leaflet-src.esm.mjs');
    const geoNodes = config.floors.flatMap((floor) => floor.nodes).filter((node) => Number.isFinite(node.latitude) && Number.isFinite(node.longitude));
    geoNodes.forEach((node) => this.nodes.set(node.id, node));
    const center = geoNodes.length ? [geoNodes[0].latitude, geoNodes[0].longitude] : [16.0544, 108.2022];
    this.map = this.leaflet.map(container, { center, zoom: 18, minZoom: 3, maxZoom: 22, zoomControl: true });
    const satellite = this.leaflet.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution: "Imagery &copy; Esri",
      maxNativeZoom: 19,
      maxZoom: 22
    }).addTo(this.map);
    const streets = this.leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxNativeZoom: 19,
      maxZoom: 22
    });
    const labels = this.leaflet.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {
      attribution: "&copy; Esri",
      maxNativeZoom: 19,
      maxZoom: 22
    }).addTo(this.map);
    this.leaflet.control.layers({ "V\u1EC7 tinh": satellite, "\u0110\u01B0\u1EDDng ph\u1ED1": streets }, { "T\xEAn \u0111\u1ECBa \u0111i\u1EC3m": labels }, { position: "topright" }).addTo(this.map);
    const bounds = [];
    for (const node of geoNodes) {
      const point = [node.latitude, node.longitude];
      if (node.visible === true) bounds.push(point);
      const marker = this.leaflet.marker(point, { icon: this.makeIcon(node.id) }).addTo(this.map);
      marker.bindTooltip(node.name, { direction: "top", offset: [0, -15] });
      marker.on("click", () => {
        var _a;
        return (_a = this.onNodeClick) == null ? void 0 : _a.call(this, node.id);
      });
      this.markers.set(node.id, marker);
    }
    this.refreshIcons();
    if (bounds.length > 1) this.map.fitBounds(bounds, { padding: [35, 35], maxZoom: 20 });
    requestAnimationFrame(() => {
      var _a;
      return (_a = this.map) == null ? void 0 : _a.invalidateSize();
    });
  }
  update(_dt, _camera) {
  }
  setCurrentNode(nodeId) {
    this.currentNodeId = nodeId;
    this.refreshIcons();
    const node = this.nodes.get(nodeId);
    if (node && this.map) this.map.panTo([node.latitude, node.longitude], { animate: true });
  }
  setCameraHeading(yaw, _pitch, _fov) {
    var _a;
    this.headingYaw = -yaw;
    if (this.currentNodeId) (_a = this.markers.get(this.currentNodeId)) == null ? void 0 : _a.setIcon(this.makeIcon(this.currentNodeId));
  }
  setFloor(_floorId) {
  }
  setVisible(visible) {
    if (this.container) this.container.style.display = visible ? "block" : "none";
    if (visible) requestAnimationFrame(() => {
      var _a;
      return (_a = this.map) == null ? void 0 : _a.invalidateSize();
    });
  }
  resize(_width, _height) {
    var _a;
    (_a = this.map) == null ? void 0 : _a.invalidateSize();
  }
  dispose() {
    var _a;
    this.markers.clear();
    this.nodes.clear();
    (_a = this.map) == null ? void 0 : _a.remove();
    this.map = null;
    this.leaflet = null;
    this.container = null;
  }
  refreshIcons() {
    var _a;
    for (const [id, marker] of this.markers) {
      marker.setIcon(this.makeIcon(id));
      const shown = id === this.currentNodeId || ((_a = this.nodes.get(id)) == null ? void 0 : _a.visible) === true;
      marker.setOpacity(shown ? 1 : 0);
      const element = marker.getElement();
      if (element) element.style.pointerEvents = shown ? "auto" : "none";
    }
  }
  makeIcon(nodeId) {
    if (!this.leaflet) throw new Error("Leaflet ch\u01B0a \u0111\u01B0\u1EE3c kh\u1EDFi t\u1EA1o.");
    const active = nodeId === this.currentNodeId;
    const arrow = active ? `<span class="v360-map-heading" style="transform:translateX(-50%) rotate(${this.headingYaw}rad)"></span>` : "";
    return this.leaflet.divIcon({
      className: "v360-map-marker-wrap",
      html: `<span class="v360-map-dot${active ? " is-active" : ""}"></span>${arrow}`,
      iconSize: active ? [34, 42] : [24, 24],
      iconAnchor: active ? [17, 21] : [12, 12]
    });
  }
}
class MapStrategyFactory {
  static create(config) {
    const hasGeoNodes = config == null ? void 0 : config.floors.some((floor) => floor.nodes.some((node) => Number.isFinite(node.latitude) && Number.isFinite(node.longitude)));
    const hasFloorplan = config == null ? void 0 : config.floors.some((floor) => {
      var _a;
      return Boolean((_a = floor.imageUrl) == null ? void 0 : _a.trim());
    });
    if ((config == null ? void 0 : config.mode) === "real" || (config == null ? void 0 : config.mode) !== "floorplan" && (hasGeoNodes || !hasFloorplan)) {
      return new LeafletMapStrategy();
    }
    return new Map2DStrategy();
  }
}
class MapMarker extends PanelMarker {
  constructor() {
    super(...arguments);
    // @ts-expect-error — narrowing literal type from parent's 'panel'
    __publicField(this, "markerType", "map");
    __publicField(this, "style", { color: "#2563eb", icon: "\u{1F5FA}", label: "B\u1EA3n \u0111\u1ED3" });
    __publicField(this, "strategy", null);
    __publicField(this, "panelEl", null);
    __publicField(this, "mapContainer", null);
    __publicField(this, "heading", { yaw: 0, pitch: 0, fov: 75 });
    __publicField(this, "_currentNodeId", null);
    __publicField(this, "_visible", true);
    __publicField(this, "lifecycle", 0);
    __publicField(this, "ready", false);
  }
  // ── Type guard ───────────────────────────────────────────────
  supports(marker) {
    return marker.plugin === "map";
  }
  // ── Sprite anchor ───────────────────────────────────────────
  createObject(marker) {
    const sprite = super.createObject(marker);
    if (sprite instanceof Sprite) {
      sprite.material.opacity = 0;
      sprite.material.depthTest = false;
      sprite.visible = false;
    }
    return sprite;
  }
  // ── Panel lifecycle ─────────────────────────────────────────
  /**
   * Open or close the map panel. Called from MapPlugin, not from
   * the regular marker-click flow.
   */
  async openMapPanel(marker, container) {
    var _a, _b, _c, _d;
    if (this.panelEl && this.ready) {
      this.panelEl.style.display = this._visible ? "block" : "none";
      (_a = this.strategy) == null ? void 0 : _a.setVisible(this._visible);
      return true;
    }
    const lifecycle = ++this.lifecycle;
    this.ready = false;
    this.panelEl = (void 0).createElement("div");
    this.panelEl.className = "view360-map-panel";
    this.panelEl.style.cssText = [
      "position:absolute",
      "z-index:50",
      "pointer-events:auto",
      "border-radius:12px",
      "overflow:hidden",
      "box-shadow:0 8px 32px rgba(0,0,0,0.35)",
      "border:1px solid rgba(255,255,255,0.12)",
      "backdrop-filter:blur(8px)",
      "background:rgba(10,10,20,0.85)",
      "transition:opacity .2s ease",
      this.positionCSS((_b = marker.config.position) != null ? _b : "bottom-right"),
      `width:${(_c = marker.config.width) != null ? _c : 300}px`,
      `height:${(_d = marker.config.height) != null ? _d : 220}px`
    ].join(";");
    if (!(void 0).getElementById("view360-leaflet-map-style")) {
      const style = (void 0).createElement("style");
      style.id = "view360-leaflet-map-style";
      style.textContent = `
        .view360-map-panel .leaflet-control-layers{font:11px "Be Vietnam Pro",sans-serif;border:0;border-radius:8px;box-shadow:0 3px 14px rgba(0,0,0,.28)}
        .view360-map-panel .leaflet-control-attribution{font-size:8px;background:rgba(255,255,255,.78)}
        .v360-map-marker-wrap{background:none!important;border:0!important}
        .v360-map-dot{position:absolute;left:50%;top:50%;width:16px;height:16px;transform:translate(-50%,-50%);border:3px solid #fff;border-radius:50%;background:#3b82f6;box-shadow:0 2px 8px rgba(0,0,0,.55)}
        .v360-map-dot.is-active{width:22px;height:22px;background:#f59e0b;box-shadow:0 0 0 4px rgba(245,158,11,.28),0 2px 9px rgba(0,0,0,.55)}
        .v360-map-heading{position:absolute;left:50%;top:-9px;width:0;height:0;transform-origin:50% 30px;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:15px solid #f59e0b;filter:drop-shadow(0 1px 2px rgba(0,0,0,.65))}
      `;
      (void 0).head.appendChild(style);
    }
    ["pointerdown", "pointerup", "click", "wheel", "touchstart", "touchend"].forEach((name) => {
      this.panelEl.addEventListener(name, (e) => e.stopPropagation());
    });
    this.mapContainer = (void 0).createElement("div");
    this.mapContainer.style.cssText = "width:100%;height:100%";
    this.panelEl.appendChild(this.mapContainer);
    const loadingEl = (void 0).createElement("div");
    loadingEl.textContent = "\u0110ang t\u1EA3i b\u1EA3n \u0111\u1ED3\u2026";
    loadingEl.style.cssText = 'position:absolute;inset:0;display:grid;place-items:center;color:rgba(255,255,255,.7);font:500 12px "Be Vietnam Pro",sans-serif;pointer-events:none';
    this.panelEl.appendChild(loadingEl);
    container.appendChild(this.panelEl);
    const panelEl = this.panelEl;
    const mapContainer = this.mapContainer;
    const strategy = MapStrategyFactory.create(marker.config);
    this.strategy = strategy;
    strategy.onNodeClick = (nodeId) => {
      (void 0).dispatchEvent(
        new CustomEvent("map:node:click", {
          detail: { markerId: marker.id, nodeId },
          bubbles: true
        })
      );
    };
    await strategy.init(marker.config, mapContainer);
    if (lifecycle !== this.lifecycle || this.panelEl !== panelEl) {
      strategy.dispose();
      panelEl.remove();
      return false;
    }
    loadingEl.remove();
    this.ready = true;
    if (this._currentNodeId) strategy.setCurrentNode(this._currentNodeId);
    strategy.setCameraHeading(this.heading.yaw, this.heading.pitch, this.heading.fov);
    if (!this._visible) this.panelEl.style.display = "none";
    else strategy.setVisible(true);
    return true;
  }
  // ── Sync methods (called by MapPlugin) ──────────────────────
  syncCameraHeading(yaw, pitch, fov) {
    var _a;
    this.heading = { yaw, pitch, fov: fov != null ? fov : 75 };
    (_a = this.strategy) == null ? void 0 : _a.setCameraHeading(yaw, pitch, fov);
  }
  syncCurrentNode(nodeId) {
    var _a;
    this._currentNodeId = nodeId;
    (_a = this.strategy) == null ? void 0 : _a.setCurrentNode(nodeId);
  }
  setMapVisible(visible) {
    var _a;
    this._visible = visible;
    if (this.panelEl) this.panelEl.style.display = visible ? "block" : "none";
    (_a = this.strategy) == null ? void 0 : _a.setVisible(visible);
  }
  isMapVisible() {
    return this._visible;
  }
  /**
   * Switch strategy at runtime. Disposes old, creates new.
   */
  async switchMode(marker, newConfig) {
    var _a;
    (_a = this.strategy) == null ? void 0 : _a.dispose();
    this.strategy = null;
    if (this.mapContainer) this.mapContainer.innerHTML = "";
    this.strategy = MapStrategyFactory.create(newConfig);
    this.strategy.onNodeClick = (nodeId) => {
      (void 0).dispatchEvent(
        new CustomEvent("map:node:click", {
          detail: { markerId: marker.id, nodeId },
          bubbles: true
        })
      );
    };
    if (this.mapContainer) {
      await this.strategy.init(newConfig, this.mapContainer);
      if (this._currentNodeId) this.strategy.setCurrentNode(this._currentNodeId);
      this.strategy.setCameraHeading(this.heading.yaw, this.heading.pitch, this.heading.fov);
    }
  }
  // ── Dispose ─────────────────────────────────────────────────
  disposeObject(object) {
    super.disposeObject(object);
    this.disposeMap();
  }
  disposeMap() {
    var _a, _b;
    this.lifecycle++;
    this.ready = false;
    (_a = this.strategy) == null ? void 0 : _a.dispose();
    this.strategy = null;
    (_b = this.panelEl) == null ? void 0 : _b.remove();
    this.panelEl = null;
    this.mapContainer = null;
  }
  // ── Helpers ─────────────────────────────────────────────────
  positionCSS(pos) {
    switch (pos) {
      case "top-left":
        return "top:16px;left:16px";
      case "top-right":
        return "top:16px;right:16px";
      case "bottom-left":
        return "bottom:16px;left:16px";
      case "bottom-right":
      default:
        return "bottom:16px;right:16px";
    }
  }
}
class MapPlugin extends MarkerPlugin {
  constructor(options = {}) {
    var _a;
    super(options);
    __publicField(this, "id", "map");
    __publicField(this, "name", "Map Plugin");
    __publicField(this, "mapMarker");
    __publicField(this, "defaultConfig");
    __publicField(this, "currentYaw", 0);
    __publicField(this, "currentPitch", 0);
    __publicField(this, "currentFov", 75);
    __publicField(this, "currentSceneId", null);
    /** Only mapped scenes are allowed to move the active pin/heading. */
    __publicField(this, "currentSceneIsMapped", false);
    /** Map belonging to the active scene, even when its DOM panel is hidden. */
    __publicField(this, "currentMapData", null);
    __publicField(this, "mapOpenTask", null);
    this.defaultConfig = options.defaultConfig;
    this.mapMarker = new MapMarker();
    this.mapMarker.setMapVisible(((_a = options.defaultConfig) == null ? void 0 : _a.visible) === true);
    this.registerMarkerType(this.mapMarker);
  }
  // ── Lifecycle overrides ─────────────────────────────────────
  onInit() {
    super.onInit();
    this.unsubs.push(
      this.ctx.bus.on("camera:move", ({ yaw, pitch }) => {
        this.currentYaw = yaw;
        this.currentPitch = pitch;
        if (this.currentSceneIsMapped) {
          this.mapMarker.syncCameraHeading(yaw, pitch, this.currentFov);
        }
      }),
      this.ctx.bus.on("camera:fov", ({ fov }) => {
        this.currentFov = fov;
        if (this.currentSceneIsMapped) {
          this.mapMarker.syncCameraHeading(this.currentYaw, this.currentPitch, fov);
        }
      })
    );
    const handleNodeClick = (e) => {
      var _a;
      const { nodeId, markerId } = e.detail;
      this.ctx.bus.emit("map:node:click", { markerId, nodeId });
      if (((_a = this.defaultConfig) == null ? void 0 : _a.clickToNavigate) !== false) {
        this.ctx.bus.emit("navigate", { sceneId: nodeId });
      }
    };
    (void 0).addEventListener("map:node:click", handleNodeClick);
    this.unsubs.push(() => (void 0).removeEventListener("map:node:click", handleNodeClick));
    this.ctx.bus.emit("map:ready", {});
  }
  onUpdate(delta) {
    super.onUpdate(delta);
  }
  onDestroy() {
    this.mapMarker.disposeMap();
    super.onDestroy();
    this.ctx.bus.emit("map:destroyed");
  }
  onSceneLoad(scene) {
    super.onSceneLoad(scene);
  }
  onSceneReady(scene) {
    var _a;
    super.onSceneReady(scene);
    this.currentSceneId = scene.id;
    this.currentYaw = this.ctx.camera.getYaw();
    this.currentPitch = this.ctx.camera.getPitch();
    this.currentFov = this.ctx.camera.getFov();
    const explicitMap = (_a = scene.markers) == null ? void 0 : _a.find(
      (marker) => marker.plugin === "map"
    );
    this.currentMapData = explicitMap != null ? explicitMap : this.createDefaultMapData();
    this.currentSceneIsMapped = this.isSceneShownOnMap(scene.id);
    if (this.currentMapData && !explicitMap) {
      this.addMarkerObject(this.mapMarker.createObject(this.currentMapData));
    }
    if (this.mapMarker.isMapVisible()) void this.ensureMapPanel();
    if (this.currentSceneIsMapped) {
      this.mapMarker.syncCurrentNode(scene.id);
      this.mapMarker.syncCameraHeading(this.currentYaw, this.currentPitch, this.currentFov);
    }
  }
  // ── Public API ──────────────────────────────────────────────
  /** Toggle map visibility. */
  setVisible(visible) {
    this.mapMarker.setMapVisible(visible);
    if (visible) void this.ensureMapPanel();
    this.ctx.bus.emit("map:visibility", { visible });
  }
  /** Get current visibility state. */
  isVisible() {
    return this.mapMarker.isMapVisible();
  }
  /** Switch map strategy at runtime. */
  async switchMode(newConfig) {
    const markerData = this.getMapMarkerData();
    if (!markerData) {
      console.warn("[MapPlugin] No map marker found to switch mode.");
      return;
    }
    Object.assign(markerData.config, newConfig);
    await this.mapMarker.switchMode(markerData, newConfig);
    this.ctx.bus.emit("map:config:updated", { config: newConfig });
  }
  /** Update config without changing strategy. */
  updateConfig(partial) {
    const markerData = this.getMapMarkerData();
    if (!markerData) return;
    Object.assign(markerData.config, partial);
    this.ctx.bus.emit("map:config:updated", { config: markerData.config });
  }
  /** Get current map config (for Vue bindings). */
  getConfig() {
    var _a;
    return (_a = this.getMapMarkerData()) == null ? void 0 : _a.config;
  }
  // ── Private helpers ─────────────────────────────────────────
  hasMapMarker(scene) {
    var _a;
    return !!((_a = scene.markers) == null ? void 0 : _a.some((m) => m.plugin === "map"));
  }
  getMapMarkerData() {
    if (this.currentMapData) return this.currentMapData;
    for (const child of this.group.children) {
      const marker = child.userData.marker;
      if ((marker == null ? void 0 : marker.plugin) === "map") return marker;
    }
    return void 0;
  }
  isSceneShownOnMap(sceneId) {
    var _a;
    return ((_a = this.currentMapData) == null ? void 0 : _a.config.floors.some(
      (floor) => floor.nodes.some((node) => node.id === sceneId && node.visible === true)
    )) === true;
  }
  /**
   * Inject a virtual map marker into the scene and immediately open
   * its panel. The marker is hidden (no 3D sprite) — only the panel
   * overlay is shown.
   */
  createDefaultMapData() {
    if (!this.defaultConfig) return null;
    return {
      id: "__map__",
      plugin: "map",
      label: "B\u1EA3n \u0111\u1ED3",
      yaw: 0,
      pitch: 0,
      config: { ...this.defaultConfig }
    };
  }
  /** Ensure that toggling the map on also creates its DOM/Leaflet panel. */
  ensureMapPanel() {
    if (this.mapOpenTask) return this.mapOpenTask;
    const markerData = this.currentMapData;
    if (!markerData) return Promise.resolve();
    let cancelled = false;
    this.mapOpenTask = this.mapMarker.openMapPanel(markerData, this.ctx.container).then((opened) => {
      cancelled = !opened;
    }).catch((error) => {
      console.error("[MapPlugin] Kh\xF4ng th\u1EC3 m\u1EDF b\u1EA3n \u0111\u1ED3:", error);
      this.mapMarker.disposeMap();
    }).finally(() => {
      this.mapOpenTask = null;
      if (cancelled && this.mapMarker.isMapVisible()) {
        void this.ensureMapPanel();
      }
    });
    return this.mapOpenTask;
  }
}
class AutorotatePlugin extends PluginBase {
  constructor(opts = {}) {
    var _a, _b, _c;
    super();
    __publicField(this, "id", "autorotate");
    __publicField(this, "name", "Autorotate Plugin");
    __publicField(this, "speed");
    __publicField(this, "idleDelayMs");
    __publicField(this, "direction");
    __publicField(this, "isActive", false);
    __publicField(this, "timer", null);
    __publicField(this, "rampProgress", 0);
    // 0–1, ramp-up factor
    __publicField(this, "unsubs", []);
    this.speed = (_a = opts.speed) != null ? _a : 0.3;
    this.idleDelayMs = (_b = opts.idleDelayMs) != null ? _b : 12e4;
    this.direction = (_c = opts.direction) != null ? _c : 1;
  }
  onInit() {
    this.scheduleStart();
    const stopOnDrag = () => {
      this.isActive = false;
      this.rampProgress = 0;
      this.scheduleStart();
    };
    const unsub1 = this.ctx.bus.on("interaction:dragstart", stopOnDrag);
    const unsub2 = this.ctx.bus.on("scene:transition:start", stopOnDrag);
    this.unsubs.push(unsub1, unsub2);
  }
  onUpdate(delta) {
    if (!this.isActive) return;
    this.rampProgress = Math.min(1, this.rampProgress + delta * 0.5);
    const ease = this.rampProgress * this.rampProgress;
    const yaw = this.ctx.camera.getTargetYaw() + this.direction * this.speed * delta * ease;
    this.ctx.camera.setTarget(yaw, this.ctx.camera.getTargetPitch());
  }
  onDestroy() {
    if (this.timer) clearTimeout(this.timer);
    this.unsubs.forEach((fn) => fn());
  }
  scheduleStart() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.isActive = true;
      this.rampProgress = 0;
    }, this.idleDelayMs);
  }
}
function useViewerEngine(options) {
  const isLoading = ref(true);
  const isTransitioning = ref(false);
  const errorMessage = ref("");
  const currentScene = ref(null);
  const mapAvailable = ref(false);
  const isMapVisible = ref(false);
  const isInCountdown = ref(false);
  const countdownRemaining = ref(0);
  const engine = shallowRef(null);
  const preloaded = /* @__PURE__ */ new Set();
  let preloadTimer = null;
  let preloadGeneration = 0;
  let isUserDragging = false;
  let lastUserInteractionAt = 0;
  async function initEngine(container, initialScene, tour) {
    var _a, _b, _c, _d, _e;
    isLoading.value = true;
    errorMessage.value = "";
    try {
      const e = new View360Engine({
        container,
        introDelay: (_a = options.introDelay) != null ? _a : 0,
        pano: {
          defaultTransition: (_c = (_b = tour == null ? void 0 : tour.transition) != null ? _b : options.transition) != null ? _c : "crossfade",
          transitionDuration: (_d = tour == null ? void 0 : tour.transitionDuration) != null ? _d : 1200
        }
      });
      e.use(new MarkerPlugin());
      if (tour == null ? void 0 : tour.map) {
        try {
          const sceneById = new Map(tour.scenes.map((scene) => [scene.id, scene]));
          const viewerMap = JSON.parse(JSON.stringify(tour.map));
          if (viewerMap.floors.length === 0) {
            viewerMap.floors.push({
              id: "__geo__",
              name: "B\u1EA3n \u0111\u1ED3",
              shortName: "Map",
              imageUrl: "",
              imageWidth: 1,
              imageHeight: 1,
              nodes: []
            });
          }
          const configuredNodeIds = new Set(
            viewerMap.floors.flatMap((floor) => floor.nodes.map((node) => node.id))
          );
          const geoFloor = viewerMap.floors[0];
          for (const scene of tour.scenes) {
            if (scene.showOnMap === true && scene.coordinates && !configuredNodeIds.has(scene.id)) {
              geoFloor.nodes.push({
                id: scene.id,
                name: scene.title,
                x: 0,
                y: 0,
                longitude: scene.coordinates[0],
                latitude: scene.coordinates[1],
                visible: true,
                neighbors: []
              });
              configuredNodeIds.add(scene.id);
            }
          }
          for (const floor of viewerMap.floors) {
            for (const node of floor.nodes) {
              const scene = sceneById.get(node.id);
              const coordinates = scene == null ? void 0 : scene.coordinates;
              node.visible = (scene == null ? void 0 : scene.showOnMap) === true;
              if (coordinates) {
                node.longitude = coordinates[0];
                node.latitude = coordinates[1];
              }
            }
          }
          const mapPlugin = new MapPlugin({ defaultConfig: viewerMap });
          e.use(mapPlugin);
          mapAvailable.value = true;
          isMapVisible.value = mapPlugin.isVisible();
        } catch (mapError) {
          console.error("[useViewerEngine] Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o MapPlugin:", mapError);
        }
      }
      if ((_e = options.autorotate) != null ? _e : tour == null ? void 0 : tour.autoRotate) {
        e.use(new AutorotatePlugin({ speed: 0.3 }));
      }
      e.bus.on("navigate", ({ sceneId, yaw, pitch }) => options.onNavigate(sceneId, yaw, pitch));
      e.bus.on("marker:click", ({ marker }) => {
        var _a2;
        if (marker.plugin !== "navigation") {
          (_a2 = options.onMarkerClick) == null ? void 0 : _a2.call(options, marker);
        }
      });
      e.bus.on("scene:transition:start", () => {
        isTransitioning.value = true;
        cancelScheduledPreload();
      });
      e.bus.on("scene:transition:end", ({ scene }) => {
        isTransitioning.value = false;
        currentScene.value = scene;
      });
      e.bus.on("scene:loaded", ({ scene }) => {
        currentScene.value = scene;
        isLoading.value = false;
      });
      e.bus.on("interaction:dragstart", () => {
        isUserDragging = true;
        lastUserInteractionAt = performance.now();
      });
      e.bus.on("interaction:dragend", () => {
        isUserDragging = false;
        lastUserInteractionAt = performance.now();
      });
      e.bus.on("camera:fov", () => {
        lastUserInteractionAt = performance.now();
      });
      e.bus.on("map:visibility", ({ visible }) => {
        isMapVisible.value = visible;
      });
      let countdownInterval = null;
      e.bus.on("intro:countdown:start", ({ delayMs }) => {
        isInCountdown.value = true;
        countdownRemaining.value = delayMs;
        countdownInterval = setInterval(() => {
          countdownRemaining.value = Math.max(0, countdownRemaining.value - 100);
        }, 100);
      });
      e.bus.on("intro:end", () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
      });
      e.bus.on("intro:countdown:skip", () => {
        isInCountdown.value = false;
        countdownRemaining.value = 0;
        if (countdownInterval) {
          clearInterval(countdownInterval);
          countdownInterval = null;
        }
      });
      engine.value = e;
      await e.loadScene(initialScene, true);
      if (tour) preloadNeighbours(initialScene, tour.scenes);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Kh\xF4ng th\u1EC3 kh\u1EDFi \u0111\u1ED9ng viewer.";
      isLoading.value = false;
    }
  }
  async function navigateTo(scene, allScenes, flyYaw, flyPitch) {
    var _a;
    if (!engine.value) return;
    if (((_a = currentScene.value) == null ? void 0 : _a.id) === scene.id) return;
    isTransitioning.value = true;
    try {
      await engine.value.navigateTo(scene, void 0, flyYaw, flyPitch);
      if (allScenes) preloadNeighbours(scene, allScenes);
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "L\u1ED7i chuy\u1EC3n c\u1EA3nh.";
    } finally {
      isTransitioning.value = false;
    }
  }
  function preloadNeighbours(scene, allScenes) {
    var _a;
    if (!engine.value) return;
    const navTargets = ((_a = scene.markers) != null ? _a : []).filter((m) => m.plugin === "navigation" && "targetScene" in m).map((m) => allScenes.find((s) => s.id === m.targetScene)).filter((s) => !!s);
    const idx = allScenes.findIndex((s) => s.id === scene.id);
    const adjacent = [allScenes[idx - 1], allScenes[idx + 1]].filter(
      (s) => !!s
    );
    const targets = [.../* @__PURE__ */ new Set([...navTargets, ...adjacent])].slice(0, 3);
    const pending = targets.filter((target) => !preloaded.has(target.panorama));
    const generation = ++preloadGeneration;
    lastUserInteractionAt = performance.now();
    scheduleNextPreload(pending, 0, generation);
  }
  function scheduleNextPreload(targets, index, generation) {
    if (generation !== preloadGeneration || index >= targets.length) return;
    if (preloadTimer) clearTimeout(preloadTimer);
    preloadTimer = setTimeout(async () => {
      var _a;
      preloadTimer = null;
      if (generation !== preloadGeneration) return;
      const idleFor = performance.now() - lastUserInteractionAt;
      if (isUserDragging || idleFor < 1200) {
        scheduleNextPreload(targets, index, generation);
        return;
      }
      const target = targets[index];
      const pano = (_a = engine.value) == null ? void 0 : _a.pano;
      if (!target || !pano) return;
      preloaded.add(target.panorama);
      try {
        await pano.preload(target.panorama);
      } catch {
        preloaded.delete(target.panorama);
      }
      lastUserInteractionAt = performance.now() - 700;
      scheduleNextPreload(targets, index + 1, generation);
    }, 250);
  }
  function cancelScheduledPreload() {
    preloadGeneration++;
    if (preloadTimer) {
      clearTimeout(preloadTimer);
      preloadTimer = null;
    }
  }
  function getDiagnostics() {
    var _a, _b;
    return (_b = (_a = engine.value) == null ? void 0 : _a.getDiagnostics()) != null ? _b : null;
  }
  function setQualityMode(mode) {
    var _a;
    (_a = engine.value) == null ? void 0 : _a.setQualityMode(mode);
  }
  function toggleMap() {
    var _a;
    const plugin = (_a = engine.value) == null ? void 0 : _a.getPlugin("map");
    if (!plugin) return;
    plugin.setVisible(!plugin.isVisible());
  }
  function destroyEngine() {
    var _a;
    cancelScheduledPreload();
    (_a = engine.value) == null ? void 0 : _a.destroy();
    engine.value = null;
    preloaded.clear();
    currentScene.value = null;
    mapAvailable.value = false;
    isMapVisible.value = false;
  }
  return {
    // State — readonly so UI cannot mutate directly
    isLoading: readonly(isLoading),
    isTransitioning: readonly(isTransitioning),
    errorMessage: readonly(errorMessage),
    currentScene: readonly(currentScene),
    mapAvailable: readonly(mapAvailable),
    isMapVisible: readonly(isMapVisible),
    // Actions
    initEngine,
    navigateTo,
    destroyEngine,
    // Dev tools
    getDiagnostics,
    setQualityMode,
    toggleMap
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tourId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const tourId = computed(() => route.params.tourId);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      computed(() => `/api/tours/${tourId.value}`),
      "$0YHbKkY3VX"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.item;
    });
    const scenes = computed(() => {
      var _a, _b;
      return (_b = (_a = tour.value) == null ? void 0 : _a.scenes) != null ? _b : [];
    });
    useHead({ title: computed(() => tour.value ? `${tour.value.title} \u2014 View360` : "View360") });
    const activeSceneId = ref("");
    const activeScene = computed(
      () => {
        var _a;
        return (_a = scenes.value.find((s) => s.id === activeSceneId.value)) != null ? _a : scenes.value[0];
      }
    );
    const queryScene = computed(() => route.query.scene);
    watch(scenes, (val) => {
      var _a;
      if (!val.length || activeSceneId.value) return;
      const preferred = queryScene.value || ((_a = tour.value) == null ? void 0 : _a.initialSceneId);
      const exists = preferred && val.some((s) => s.id === preferred);
      activeSceneId.value = exists ? preferred : val[0].id;
    }, { immediate: true });
    const store = useRuntimeStore();
    watch(activeSceneId, (sceneId) => {
      if (sceneId && tour.value) {
        store.navigateTo(sceneId, tour.value.slug);
      }
    });
    watch(tour, (t) => {
      if (t && !store.tour) store.tour = t;
    }, { immediate: true });
    const canvasContainerRef = ref(null);
    const {
      isLoading: engineLoading,
      isTransitioning,
      errorMessage: engineError,
      currentScene: engineScene,
      mapAvailable,
      isMapVisible,
      initEngine,
      navigateTo,
      getDiagnostics,
      setQualityMode
    } = useViewerEngine({
      onNavigate: (sceneId, yaw, pitch) => handleNavigate(sceneId, yaw, pitch),
      autorotate: computed(() => {
        var _a, _b;
        return (_b = (_a = tour.value) == null ? void 0 : _a.autoRotate) != null ? _b : false;
      }).value,
      transition: "forward"
    });
    watch(canvasContainerRef, async (el) => {
      var _a;
      if (!el || !activeScene.value) return;
      await initEngine(el, activeScene.value, (_a = tour.value) != null ? _a : void 0);
    }, { once: true });
    const pendingFlyDirection = ref(null);
    watch(activeSceneId, async (id) => {
      const scene = scenes.value.find((s) => s.id === id);
      if (!scene || !engineScene.value || engineScene.value.id === id) return;
      const direction = pendingFlyDirection.value;
      pendingFlyDirection.value = null;
      await navigateTo(scene, scenes.value, direction == null ? void 0 : direction.yaw, direction == null ? void 0 : direction.pitch);
    });
    const devQualityMode = ref("quality");
    const devCompareMode = ref("panorama");
    const devPanoUrl = computed(() => {
      var _a, _b;
      return (_b = (_a = engineScene.value) == null ? void 0 : _a.panorama) != null ? _b : "";
    });
    function handleDevQualityChange(mode) {
      devQualityMode.value = mode;
      setQualityMode(mode);
    }
    function handleDevCompareMode(mode) {
      devCompareMode.value = mode;
    }
    const toast = useToast();
    const isImmersive = ref(false);
    const showHelpPanel = ref(false);
    const showInfoPanel = ref(false);
    const infoPanelTitle = ref("");
    const infoPanelContent = ref("");
    ref(true);
    const sceneStripEl = ref(null);
    const sceneIndex = computed(
      () => scenes.value.findIndex((s) => s.id === activeSceneId.value) + 1
    );
    function scrollStripTo(idx) {
      nextTick(() => {
        if (!sceneStripEl.value) return;
        const thumb = sceneStripEl.value.querySelector(`[data-idx="${idx}"]`);
        if (thumb) {
          thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      });
    }
    function handleNavigate(sceneId, yaw, pitch) {
      if (sceneId === activeSceneId.value) return;
      pendingFlyDirection.value = { yaw, pitch };
      const targetScene = scenes.value.find((s) => s.id === sceneId);
      activeSceneId.value = sceneId;
      const idx = scenes.value.findIndex((s) => s.id === sceneId);
      if (idx >= 0) scrollStripTo(idx);
      if (targetScene) {
        toast.show({ message: `\u0110\xE3 chuy\u1EC3n \u0111\u1EBFn: ${targetScene.title}` });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiSpinner = _sfc_main$1;
      const _component_UiEmptyState = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$3;
      const _component_DevImageComparison = resolveComponent("DevImageComparison");
      const _component_ViewerHUD = resolveComponent("ViewerHUD");
      const _component_DevDiagnosticPanel = resolveComponent("DevDiagnosticPanel");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["viewer-root bg-ink", { immersive: unref(isImmersive) }]
      }, _attrs))} data-v-e42f8594>`);
      if (unref(pending)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink" data-v-e42f8594><div class="flex flex-col items-center gap-5" data-v-e42f8594><div class="relative" data-v-e42f8594>`);
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "lg",
          color: "primary"
        }, null, _parent));
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-e42f8594></div></div><div class="text-center" data-v-e42f8594><p class="text-sm font-semibold text-white" data-v-e42f8594>\u0110ang t\u1EA3i tr\u1EA3i nghi\u1EC7m 360\xB0</p><p class="mt-1 text-xs text-white/40" data-v-e42f8594>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-e42f8594>`);
        _push(ssrRenderComponent(_component_UiEmptyState, {
          icon: "\u{1F310}",
          title: "Kh\xF4ng th\u1EC3 t\u1EA3i tour",
          description: `Tour '${unref(tourId)}' kh\xF4ng t\u1ED3n t\u1EA1i ho\u1EB7c l\u1ED7i k\u1EBFt n\u1ED1i.`
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`V\u1EC1 trang ch\u1EE7`);
                        } else {
                          return [
                            createTextVNode("V\u1EC1 trang ch\u1EE7")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("V\u1EC1 trang ch\u1EE7")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtLink, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, { variant: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("V\u1EC1 trang ch\u1EE7")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        if (_ctx.$dev && unref(devCompareMode) !== "panorama") {
          _push(ssrRenderComponent(_component_DevImageComparison, {
            url: unref(devPanoUrl),
            mode: unref(devCompareMode),
            onClose: ($event) => devCompareMode.value = "panorama"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 h-full w-full" style="${ssrRenderStyle({ visibility: unref(devCompareMode) !== "panorama" ? "hidden" : "visible" })}" aria-label="Panorama 360\xB0" data-v-e42f8594></div>`);
        _push(ssrRenderComponent(_component_ViewerHUD, {
          "is-loading": unref(engineLoading),
          "is-transitioning": unref(isTransitioning),
          "error-message": unref(engineError),
          "current-scene": unref(engineScene)
        }, null, _parent));
        if (_ctx.$dev) {
          _push(ssrRenderComponent(_component_DevDiagnosticPanel, {
            "get-diagnostics": unref(getDiagnostics),
            "set-quality-mode": unref(setQualityMode),
            "current-quality": unref(devQualityMode),
            "panorama-url": unref(devPanoUrl),
            onQualityChange: handleDevQualityChange,
            onCompareMode: handleDevCompareMode
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="topbar" data-v-e42f8594>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "tb-btn icon-only",
          "aria-label": "Quay l\u1EA1i danh m\u1EE5c",
          title: "Quay l\u1EA1i trang ch\u1EE7"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-e42f8594${_scopeId}><path d="m15 18-6-6 6-6" data-v-e42f8594${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  createVNode("path", { d: "m15 18-6-6 6-6" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="tb-scene" data-v-e42f8594><span class="tb-scene-badge" data-v-e42f8594>${ssrInterpolate(unref(sceneIndex))}/${ssrInterpolate(unref(scenes).length)}</span><span class="tb-scene-title" data-v-e42f8594>${ssrInterpolate(unref(activeScene).title)}</span><span class="tb-scene-desc" data-v-e42f8594>${ssrInterpolate(unref(activeScene).subtitle ? `\xB7 ${unref(activeScene).subtitle}` : "")}</span></div><div class="tb-actions" data-v-e42f8594><button type="button" class="tb-btn hide-mobile" title="H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-e42f8594><circle cx="12" cy="12" r="10" data-v-e42f8594></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-e42f8594></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-e42f8594></line></svg></button><button type="button" class="tb-btn icon-only" title="Ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (nh\u1EA5n F)" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e42f8594><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" data-v-e42f8594></path></svg></button></div></div><aside class="${ssrRenderClass(["side-panel", { open: unref(showHelpPanel) }])}" aria-hidden="true" data-v-e42f8594><div class="panel-head" data-v-e42f8594><div class="panel-head-left" data-v-e42f8594><div class="panel-icon river" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-e42f8594><circle cx="12" cy="12" r="10" data-v-e42f8594></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-e42f8594></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-e42f8594></line></svg></div><div data-v-e42f8594><div class="panel-title" data-v-e42f8594>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</div><div class="panel-subtitle" data-v-e42f8594>\u0110i\u1EC1u khi\u1EC3n tour 360\xB0</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-e42f8594><path d="M18 6 6 18" data-v-e42f8594></path><path d="m6 6 12 12" data-v-e42f8594></path></svg></button></div><div class="panel-body" data-v-e42f8594><ul class="guide-list" data-v-e42f8594><li class="guide-item" data-v-e42f8594><div class="guide-icon" data-v-e42f8594>\u{1F5B1}\uFE0F</div><div data-v-e42f8594><div class="guide-title" data-v-e42f8594>K\xE9o \u0111\u1EC3 xoay \u1EA3nh 360\xB0</div><div class="guide-desc" data-v-e42f8594>Nh\u1EA5n gi\u1EEF v\xE0 k\xE9o chu\u1ED9t (ho\u1EB7c vu\u1ED1t tr\xEAn \u0111i\u1EC7n tho\u1EA1i) \u0111\u1EC3 xoay g\xF3c nh\xECn.</div></div></li><li class="guide-item" data-v-e42f8594><div class="guide-icon river-icon" data-v-e42f8594>\u{1F535}</div><div data-v-e42f8594><div class="guide-title" data-v-e42f8594>N\xFAt xanh \u2014 Di chuy\u1EC3n</div><div class="guide-desc" data-v-e42f8594>Nh\u1EA5n v\xE0o marker xanh \u0111\u1EC3 di chuy\u1EC3n \u0111\u1EBFn c\u1EA3nh ti\u1EBFp theo.</div></div></li><li class="guide-item" data-v-e42f8594><div class="guide-icon info-icon" data-v-e42f8594>\u{1F7E0}</div><div data-v-e42f8594><div class="guide-title" data-v-e42f8594>N\xFAt cam \u2014 Xem th\xF4ng tin</div><div class="guide-desc" data-v-e42f8594>Nh\u1EA5n v\xE0o marker cam \u0111\u1EC3 xem th\xF4ng tin chi ti\u1EBFt v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m.</div></div></li><li class="guide-item" data-v-e42f8594><div class="guide-icon" data-v-e42f8594>\u{1F50D}</div><div data-v-e42f8594><div class="guide-title" data-v-e42f8594>Cu\u1ED9n \u0111\u1EC3 zoom</div><div class="guide-desc" data-v-e42f8594>D\xF9ng con l\u0103n chu\u1ED9t ho\u1EB7c ch\u1EE5m 2 ng\xF3n \u0111\u1EC3 ph\xF3ng to / thu nh\u1ECF.</div></div></li><li class="guide-item" data-v-e42f8594><div class="guide-icon" data-v-e42f8594>\u2328\uFE0F</div><div data-v-e42f8594><div class="guide-title" data-v-e42f8594>Ph\xEDm t\u1EAFt</div><div class="guide-desc" data-v-e42f8594><strong data-v-e42f8594>F</strong> \u2014 B\u1EADt/t\u1EAFt to\xE0n c\u1EA3nh \xB7 <strong data-v-e42f8594>H</strong> \u2014 \u1EA8n/hi\u1EC7n giao di\u1EC7n \xB7 <strong data-v-e42f8594>D</strong> \u2014 Thu g\u1ECDn/m\u1EDF dock \xB7 <strong data-v-e42f8594>\u2190 \u2192</strong> \u2014 Chuy\u1EC3n c\u1EA3nh </div></div></li></ul></div></aside><aside class="${ssrRenderClass(["side-panel", { open: unref(showInfoPanel) }])}" aria-hidden="true" data-v-e42f8594><div class="panel-head" data-v-e42f8594><div class="panel-head-left" data-v-e42f8594><div class="panel-icon clay" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-e42f8594><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-e42f8594></circle><path d="M12 11 L12 18" data-v-e42f8594></path></svg></div><div data-v-e42f8594><div class="panel-title" data-v-e42f8594>${ssrInterpolate(unref(infoPanelTitle) || "Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m")}</div><div class="panel-subtitle" data-v-e42f8594>Chi ti\u1EBFt c\u1EA3nh quan</div></div></div><button type="button" class="panel-close" aria-label="\u0110\xF3ng" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-e42f8594><path d="M18 6 6 18" data-v-e42f8594></path><path d="m6 6 12 12" data-v-e42f8594></path></svg></button></div><div class="panel-body" data-v-e42f8594>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-e42f8594>${(_a = unref(infoPanelContent)) != null ? _a : ""}</div>`);
        } else {
          _push(`<div class="space-y-3" data-v-e42f8594><p data-v-e42f8594><strong data-v-e42f8594>${ssrInterpolate(unref(activeScene).title)}</strong></p>`);
          if (unref(activeScene).subtitle) {
            _push(`<p data-v-e42f8594>${ssrInterpolate(unref(activeScene).subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tour).summary) {
            _push(`<p data-v-e42f8594>${ssrInterpolate(unref(tour).summary)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></aside><div class="${ssrRenderClass(["fab-stack", { "map-open": unref(isMapVisible) }])}" data-v-e42f8594>`);
        if (unref(mapAvailable)) {
          _push(`<button type="button" class="${ssrRenderClass(["fab", { active: unref(isMapVisible) }])}" title="B\u1EADt/t\u1EAFt b\u1EA3n \u0111\u1ED3" aria-label="B\u1EADt/t\u1EAFt b\u1EA3n \u0111\u1ED3" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e42f8594><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" data-v-e42f8594></polygon><line x1="9" y1="3" x2="9" y2="18" data-v-e42f8594></line><line x1="15" y1="6" x2="15" y2="21" data-v-e42f8594></line></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="fab" title="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" aria-label="Th\xF4ng tin \u0111\u1ECBa \u0111i\u1EC3m" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-e42f8594><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-e42f8594></circle><path d="M12 11 L12 18" data-v-e42f8594></path></svg></button><button type="button" class="fab" title="Chia s\u1EBB" aria-label="Chia s\u1EBB" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e42f8594><circle cx="18" cy="5" r="3" data-v-e42f8594></circle><circle cx="6" cy="12" r="3" data-v-e42f8594></circle><circle cx="18" cy="19" r="3" data-v-e42f8594></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-e42f8594></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-e42f8594></line></svg></button></div><button type="button" class="tb-btn icon-only immersive-exit" title="Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n c\u1EA3nh (Esc)" data-v-e42f8594><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e42f8594><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-e42f8594></path></svg></button><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience/[tourId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _tourId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e42f8594"]]);

export { _tourId_ as default };;globalThis.__timing__.logEnd('Load chunks/build/_tourId_-CAqIp78K');
//# sourceMappingURL=_tourId_-CAqIp78K.mjs.map
