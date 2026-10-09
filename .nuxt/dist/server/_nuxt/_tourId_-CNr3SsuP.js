import { _ as _sfc_main$6 } from "./Spinner-mjqtnuYo.js";
import { _ as _sfc_main$7 } from "./EmptyState-CYLOXev5.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-AvfA4aCh.js";
import { _ as _sfc_main$8 } from "./Button-CeBG5qKU.js";
import { ref, computed, shallowRef, readonly, defineComponent, useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, withAsyncContext, watch, unref, createTextVNode } from "vue";
import { ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { defineStore } from "pinia";
import { P as PanelMarker, S as Sprite, M as MarkerPlugin, a as PluginBase, V as View360Engine, A as AreaHighlightPlugin } from "./AreaHighlightPlugin-DE6rqF-n.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { u as useFetch } from "./fetch-BTut8LNP.js";
import { u as useHead } from "./v3-vl98-hf4.js";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/perfect-debounce/dist/index.mjs";
import "/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@unhead/vue/dist/index.mjs";
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
  return initial ?? tour.scenes[0];
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
  const activeSceneId = computed(() => navState.value?.current.sceneId ?? "");
  const activeTourId = computed(() => navState.value?.current.tourId ?? "");
  const entryTourId = computed(() => navState.value?.entryTourId ?? "");
  const canGoBack = computed(() => navState.value ? canGoBackFn(navState.value) : false);
  const inGuestTour = computed(() => navState.value ? isInGuestTourFn(navState.value) : false);
  const scenes = computed(() => tour.value?.scenes ?? []);
  const sceneIndex = computed(() => {
    if (!navState.value || !tour.value) return 0;
    return tour.value.scenes.findIndex((s) => s.id === activeSceneId.value) + 1;
  });
  async function loadTour(tourId, preferredSceneId) {
    if (loading.value) return;
    loading.value = true;
    error.value = null;
    try {
      const res = await $fetch(`/api/tours/${tourId}`);
      if (!res.item) throw new Error("Tour không tồn tại.");
      tour.value = res.item;
      const initial = resolveInitialScene(res.item, preferredSceneId);
      navState.value = createNavigationState(tourId, initial.id);
    } catch (e) {
      error.value = e?.data?.statusMessage ?? e?.message ?? "Lỗi tải tour.";
    } finally {
      loading.value = false;
    }
  }
  function navigateTo(sceneId, tourId) {
    if (!navState.value) return;
    navState.value = navTo(navState.value, {
      tourId: tourId ?? tour.value?.slug ?? "",
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
  canvas;
  ctx2d;
  config;
  currentFloorId = null;
  currentNodeId = null;
  hoveredNodeId = null;
  heading = { yaw: 0, pitch: 0, fov: 75 };
  images = /* @__PURE__ */ new Map();
  dpr = 1;
  displayW = 0;
  displayH = 0;
  onNodeClick;
  onFloorChange;
  // ── Init ──────────────────────────────────────────────────────
  async init(config, container) {
    this.config = config;
    this.dpr = Math.min((void 0).devicePixelRatio, 2);
    this.canvas = (void 0).createElement("canvas");
    this.canvas.style.cssText = "width:100%;height:100%;display:block;cursor:default";
    this.ctx2d = this.canvas.getContext("2d");
    container.appendChild(this.canvas);
    this.currentFloorId = config.defaultFloorId ?? config.floors[0]?.id ?? null;
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
    this.currentNodeId = nodeId;
    if (this.config.autoSwitchFloor !== false) {
      const floor = this.findFloorForNode(nodeId);
      if (floor && floor.id !== this.currentFloorId) {
        this.currentFloorId = floor.id;
        this.onFloorChange?.(floor.id);
      }
    }
    this.draw();
  }
  setCameraHeading(yaw, pitch, fov) {
    this.heading = { yaw, pitch, fov: fov ?? 75 };
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
    if (img?.complete && img.naturalWidth > 0) {
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
      const label = floor.shortName ?? floor.name;
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
    const sourceW = image?.naturalWidth || floor.imageWidth || 1;
    const sourceH = image?.naturalHeight || floor.imageHeight || 1;
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
    const showTabs = this.config.showFloorTabs !== false && this.config.floors.length > 1;
    if (!showTabs || my > TAB_HEIGHT) return null;
    const tabW = this.displayW / this.config.floors.length;
    const index = Math.floor(mx / tabW);
    return this.config.floors[index] ?? null;
  }
  // ── Event handlers ────────────────────────────────────────────
  handleClick = (e) => {
    const { x, y } = this.canvasCoords(e);
    const tab = this.hitTestTab(x, y);
    if (tab) {
      this.currentFloorId = tab.id;
      this.onFloorChange?.(tab.id);
      this.draw();
      return;
    }
    const node = this.hitTestNode(x, y);
    if (node) this.onNodeClick?.(node.id);
  };
  handleMouseMove = (e) => {
    const { x, y } = this.canvasCoords(e);
    const node = this.hitTestNode(x, y);
    const tab = this.hitTestTab(x, y);
    const newHovered = node?.id ?? null;
    if (newHovered !== this.hoveredNodeId) {
      this.hoveredNodeId = newHovered;
      this.draw();
    }
    this.canvas.style.cursor = node || tab ? "pointer" : "default";
  };
  handleMouseLeave = () => {
    if (this.hoveredNodeId) {
      this.hoveredNodeId = null;
      this.draw();
    }
    this.canvas.style.cursor = "default";
  };
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
  map = null;
  leaflet = null;
  markers = /* @__PURE__ */ new Map();
  nodes = /* @__PURE__ */ new Map();
  currentNodeId = null;
  headingYaw = 0;
  container = null;
  onNodeClick;
  onFloorChange;
  async init(config, container) {
    this.container = container;
    this.leaflet = await import("leaflet/dist/leaflet-src.esm.js");
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
    this.leaflet.control.layers({ "Vệ tinh": satellite, "Đường phố": streets }, { "Tên địa điểm": labels }, { position: "topright" }).addTo(this.map);
    const bounds = [];
    for (const node of geoNodes) {
      const point = [node.latitude, node.longitude];
      if (node.visible === true) bounds.push(point);
      const marker = this.leaflet.marker(point, { icon: this.makeIcon(node.id) }).addTo(this.map);
      marker.bindTooltip(node.name, { direction: "top", offset: [0, -15] });
      marker.on("click", () => this.onNodeClick?.(node.id));
      this.markers.set(node.id, marker);
    }
    this.refreshIcons();
    if (bounds.length > 1) this.map.fitBounds(bounds, { padding: [35, 35], maxZoom: 20 });
    requestAnimationFrame(() => this.map?.invalidateSize());
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
    this.headingYaw = -yaw;
    if (this.currentNodeId) this.markers.get(this.currentNodeId)?.setIcon(this.makeIcon(this.currentNodeId));
  }
  setFloor(_floorId) {
  }
  setVisible(visible) {
    if (this.container) this.container.style.display = visible ? "block" : "none";
    if (visible) requestAnimationFrame(() => this.map?.invalidateSize());
  }
  resize(_width, _height) {
    this.map?.invalidateSize();
  }
  dispose() {
    this.markers.clear();
    this.nodes.clear();
    this.map?.remove();
    this.map = null;
    this.leaflet = null;
    this.container = null;
  }
  refreshIcons() {
    for (const [id, marker] of this.markers) {
      marker.setIcon(this.makeIcon(id));
      const shown = id === this.currentNodeId || this.nodes.get(id)?.visible === true;
      marker.setOpacity(shown ? 1 : 0);
      const element = marker.getElement();
      if (element) element.style.pointerEvents = shown ? "auto" : "none";
    }
  }
  makeIcon(nodeId) {
    if (!this.leaflet) throw new Error("Leaflet chưa được khởi tạo.");
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
    const hasGeoNodes = config?.floors.some((floor) => floor.nodes.some((node) => Number.isFinite(node.latitude) && Number.isFinite(node.longitude)));
    const hasFloorplan = config?.floors.some((floor) => Boolean(floor.imageUrl?.trim()));
    if (config?.mode === "real" || config?.mode !== "floorplan" && (hasGeoNodes || !hasFloorplan)) {
      return new LeafletMapStrategy();
    }
    return new Map2DStrategy();
  }
}
class MapMarker extends PanelMarker {
  // @ts-expect-error — narrowing literal type from parent's 'panel'
  markerType = "map";
  style = { color: "#2563eb", icon: "🗺", label: "Bản đồ" };
  strategy = null;
  panelEl = null;
  mapContainer = null;
  heading = { yaw: 0, pitch: 0, fov: 75 };
  _currentNodeId = null;
  _visible = true;
  lifecycle = 0;
  ready = false;
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
    if (this.panelEl && this.ready) {
      this.panelEl.style.display = this._visible ? "block" : "none";
      this.strategy?.setVisible(this._visible);
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
      this.positionCSS(marker.config.position ?? "bottom-left"),
      `width:${marker.config.width ?? 300}px`,
      `height:${marker.config.height ?? 220}px`
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
    loadingEl.textContent = "Đang tải bản đồ…";
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
    this.heading = { yaw, pitch, fov: fov ?? 75 };
    this.strategy?.setCameraHeading(yaw, pitch, fov);
  }
  syncCurrentNode(nodeId) {
    this._currentNodeId = nodeId;
    this.strategy?.setCurrentNode(nodeId);
  }
  setMapVisible(visible) {
    this._visible = visible;
    if (this.panelEl) this.panelEl.style.display = visible ? "block" : "none";
    this.strategy?.setVisible(visible);
  }
  isMapVisible() {
    return this._visible;
  }
  /**
   * Switch strategy at runtime. Disposes old, creates new.
   */
  async switchMode(marker, newConfig) {
    this.strategy?.dispose();
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
    this.lifecycle++;
    this.ready = false;
    this.strategy?.dispose();
    this.strategy = null;
    this.panelEl?.remove();
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
        return "bottom:16px;right:16px";
      default:
        return "bottom:16px;left:16px";
    }
  }
}
class MapPlugin extends MarkerPlugin {
  id = "map";
  name = "Map Plugin";
  mapMarker;
  defaultConfig;
  currentYaw = 0;
  currentPitch = 0;
  currentFov = 75;
  currentSceneId = null;
  /** Only mapped scenes are allowed to move the active pin/heading. */
  currentSceneIsMapped = false;
  /** Map belonging to the active scene, even when its DOM panel is hidden. */
  currentMapData = null;
  mapOpenTask = null;
  constructor(options = {}) {
    super(options);
    this.defaultConfig = options.defaultConfig;
    this.mapMarker = new MapMarker();
    this.mapMarker.setMapVisible(options.defaultConfig?.visible === true);
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
      const { nodeId, markerId } = e.detail;
      this.ctx.bus.emit("map:node:click", { markerId, nodeId });
      if (this.defaultConfig?.clickToNavigate !== false) {
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
    super.onSceneReady(scene);
    this.currentSceneId = scene.id;
    this.currentYaw = this.ctx.camera.getYaw();
    this.currentPitch = this.ctx.camera.getPitch();
    this.currentFov = this.ctx.camera.getFov();
    const explicitMap = scene.markers?.find(
      (marker) => marker.plugin === "map"
    );
    this.currentMapData = explicitMap ?? this.createDefaultMapData();
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
    return this.getMapMarkerData()?.config;
  }
  // ── Private helpers ─────────────────────────────────────────
  hasMapMarker(scene) {
    return !!scene.markers?.some((m) => m.plugin === "map");
  }
  getMapMarkerData() {
    if (this.currentMapData) return this.currentMapData;
    for (const child of this.group.children) {
      const marker = child.userData.marker;
      if (marker?.plugin === "map") return marker;
    }
    return void 0;
  }
  isSceneShownOnMap(sceneId) {
    return this.currentMapData?.config.floors.some(
      (floor) => floor.nodes.some((node) => node.id === sceneId && node.visible === true)
    ) === true;
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
      label: "Bản đồ",
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
      console.error("[MapPlugin] Không thể mở bản đồ:", error);
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
  id = "autorotate";
  name = "Autorotate Plugin";
  speed;
  idleDelayMs;
  direction;
  isActive = false;
  timer = null;
  rampProgress = 0;
  // 0–1, ramp-up factor
  unsubs = [];
  constructor(opts = {}) {
    super();
    this.speed = opts.speed ?? 0.3;
    this.idleDelayMs = opts.idleDelayMs ?? 12e4;
    this.direction = opts.direction ?? 1;
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
  let mobilePerformanceMode = false;
  function shouldUseMobileProfile() {
    return false;
  }
  async function initEngine(container, initialScene, tour) {
    isLoading.value = true;
    errorMessage.value = "";
    try {
      mobilePerformanceMode = shouldUseMobileProfile();
      const e = new View360Engine({
        container,
        antialias: false,
        // A phone with DPR 3 renders nine framebuffer pixels per CSS pixel.
        // DevTools mobile emulation does not reproduce that GPU cost.
        pixelRatio: mobilePerformanceMode ? Math.min((void 0).devicePixelRatio, 1.25) : Math.min((void 0).devicePixelRatio, 2),
        introDelay: options.introDelay ?? 0,
        pano: {
          defaultTransition: tour?.transition ?? options.transition ?? "crossfade",
          transitionDuration: tour?.transitionDuration ?? (mobilePerformanceMode ? 500 : 700),
          maxCachedTextures: mobilePerformanceMode ? 1 : 2,
          segments: mobilePerformanceMode ? 64 : 128
        }
      });
      e.use(new MarkerPlugin());
      e.use(new AreaHighlightPlugin());
      if (tour?.map) {
        try {
          const sceneById = new Map(tour.scenes.map((scene) => [scene.id, scene]));
          const viewerMap = JSON.parse(JSON.stringify(tour.map));
          if (viewerMap.floors.length === 0) {
            viewerMap.floors.push({
              id: "__geo__",
              name: "Bản đồ",
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
              const coordinates = scene?.coordinates;
              node.visible = scene?.showOnMap === true;
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
          console.error("[useViewerEngine] Không thể khởi tạo MapPlugin:", mapError);
        }
      }
      if (options.autorotate ?? tour?.autoRotate) {
        e.use(new AutorotatePlugin({ speed: 0.3 }));
      }
      e.bus.on("navigate", ({ sceneId, yaw, pitch }) => options.onNavigate(sceneId, yaw, pitch));
      e.bus.on("marker:click", ({ marker }) => {
        if (marker.plugin !== "navigation") {
          options.onMarkerClick?.(marker);
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
      const viewerInitialScene = forViewer(initialScene);
      await e.loadScene(viewerInitialScene, true);
      const viewerScenes = tour?.scenes.map(forViewer);
      if (viewerInitialScene.previewPanorama) {
        scheduleCurrentSceneUpgrade(viewerInitialScene, viewerScenes);
      } else if (viewerScenes) {
        preloadNeighbours(viewerInitialScene, viewerScenes);
      }
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Không thể khởi động viewer.";
      isLoading.value = false;
    }
  }
  async function navigateTo(scene, allScenes, flyYaw, flyPitch) {
    if (!engine.value) return;
    if (currentScene.value?.id === scene.id) return;
    isTransitioning.value = true;
    try {
      const viewerScene = forViewer(scene);
      await engine.value.navigateTo(viewerScene, void 0, flyYaw, flyPitch);
      const viewerScenes = allScenes?.map(forViewer);
      if (viewerScene.previewPanorama) {
        scheduleCurrentSceneUpgrade(viewerScene, viewerScenes);
      } else if (viewerScenes) {
        preloadNeighbours(viewerScene, viewerScenes);
      }
    } catch (err) {
      errorMessage.value = err instanceof Error ? err.message : "Lỗi chuyển cảnh.";
    } finally {
      isTransitioning.value = false;
    }
  }
  function preloadNeighbours(scene, allScenes) {
    if (!engine.value) return;
    if (mobilePerformanceMode) return;
    const navTargets = (scene.markers ?? []).filter((m) => m.plugin === "navigation" && "targetScene" in m).map((m) => allScenes.find((s) => s.id === m.targetScene)).filter((s) => !!s);
    const idx = allScenes.findIndex((s) => s.id === scene.id);
    const adjacent = [allScenes[idx - 1], allScenes[idx + 1]].filter(
      (s) => !!s
    );
    const targets = [.../* @__PURE__ */ new Set([...navTargets, ...adjacent])].slice(0, 3);
    const pending = targets.filter((target) => !preloaded.has(target.previewPanorama ?? target.panorama));
    const generation = ++preloadGeneration;
    lastUserInteractionAt = performance.now();
    scheduleNextPreload(pending, 0, generation);
  }
  function forViewer(scene) {
    return scene;
  }
  function scheduleCurrentSceneUpgrade(scene, allScenes) {
    const generation = ++preloadGeneration;
    lastUserInteractionAt = performance.now();
    const attempt = () => {
      if (generation !== preloadGeneration || !engine.value) return;
      const idleFor = performance.now() - lastUserInteractionAt;
      const requiredIdle = mobilePerformanceMode ? 2200 : 1200;
      if (isUserDragging || idleFor < requiredIdle) {
        preloadTimer = setTimeout(attempt, 250);
        return;
      }
      preloadTimer = null;
      void engine.value.upgradeCurrentPanorama(scene.id, scene.panorama).then(() => {
        if (generation !== preloadGeneration) return;
        if (allScenes) preloadNeighbours(scene, allScenes);
      }).catch(() => {
      });
    };
    preloadTimer = setTimeout(attempt, 250);
  }
  function scheduleNextPreload(targets, index, generation) {
    if (generation !== preloadGeneration || index >= targets.length) return;
    if (preloadTimer) clearTimeout(preloadTimer);
    preloadTimer = setTimeout(async () => {
      preloadTimer = null;
      if (generation !== preloadGeneration) return;
      const idleFor = performance.now() - lastUserInteractionAt;
      if (isUserDragging || idleFor < 1200) {
        scheduleNextPreload(targets, index, generation);
        return;
      }
      const target = targets[index];
      const pano = engine.value?.pano;
      if (!target || !pano) return;
      const targetUrl = target.previewPanorama ?? target.panorama;
      preloaded.add(targetUrl);
      try {
        await pano.preload(targetUrl);
      } catch {
        preloaded.delete(targetUrl);
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
    return engine.value?.getDiagnostics() ?? null;
  }
  function setQualityMode(mode) {
    engine.value?.setQualityMode(mode);
  }
  function toggleMap() {
    const plugin = engine.value?.getPlugin("map");
    if (!plugin) return;
    plugin.setVisible(!plugin.isVisible());
  }
  function destroyEngine() {
    cancelScheduledPreload();
    engine.value?.destroy();
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DevDiagnosticPanel",
  __ssrInlineRender: true,
  props: {
    getDiagnostics: { type: Function },
    setQualityMode: { type: Function },
    currentQuality: {},
    panoramaUrl: {},
    embedded: { type: Boolean }
  },
  emits: ["qualityChange", "compareMode"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(Boolean(props.embedded));
    const diag = ref(null);
    const compareMode = ref("panorama");
    const warnings = computed(() => {
      const d = diag.value;
      if (!d) return [];
      const w = [];
      if (d.isCapped) w.push(`⚠ GPU thu ảnh ${d.srcWidth}×${d.srcHeight} xuống ${d.gpuWidth}×${d.gpuHeight} (maxTextureSize: ${d.maxTexSize})`);
      if (d.dpr < 1.5) w.push(`⚠ DPR thấp (${d.dpr}) — màn hình nét hơn nếu tăng quality`);
      if (d.pixelDensity < 0.9) w.push(`⚠ Pixel density ${d.pixelDensity} — renderer đang upscale (ảnh nguồn không đủ nét)`);
      if (d.pixelDensity > 4) w.push(`ℹ Pixel density ${d.pixelDensity} — ảnh nguồn thừa chi tiết ở zoom này`);
      if (d.srcWidth < 4096) w.push(`⚠ Ảnh nguồn ${d.srcWidth}px — khuyến nghị tối thiểu 5760px`);
      return w;
    });
    const densityLabel = computed(() => {
      const d = diag.value?.pixelDensity ?? 0;
      if (d < 0.9) return { text: "Upscaling ↓ mờ", cls: "warn-red" };
      if (d < 1.5) return { text: "Vừa đủ", cls: "warn-yellow" };
      return { text: "Thừa chi tiết ✓", cls: "ok" };
    });
    const QUALITY_MODES = [
      { id: "performance", label: "Perf", desc: "DPR ≤ 1" },
      { id: "balanced", label: "Balanced", desc: "DPR ≤ 1.5" },
      { id: "quality", label: "Quality", desc: "DPR ≤ 2" },
      { id: "native", label: "Native", desc: "DPR gốc" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!__props.embedded) {
        _push(`<button id="dev-diag-toggle" class="${ssrRenderClass([{ "is-open": isOpen.value }, "diag-toggle"])}"${ssrRenderAttr("title", isOpen.value ? "Đóng bảng chẩn đoán (`)" : "Mở bảng chẩn đoán GPU (`)")} aria-label="Toggle diagnostic panel" data-v-61aeeef5><span aria-hidden="true" data-v-61aeeef5>🔬</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen.value) {
        _push(`<div class="${ssrRenderClass([{ "is-embedded": __props.embedded }, "diag-panel"])}" role="region" aria-label="Bảng chẩn đoán GPU" data-v-61aeeef5><div class="diag-header" data-v-61aeeef5><span class="diag-title" data-v-61aeeef5>🔬 GPU Diagnostics</span><span class="diag-env" data-v-61aeeef5>DEV</span></div>`);
        if (warnings.value.length) {
          _push(`<div class="diag-warnings" data-v-61aeeef5><!--[-->`);
          ssrRenderList(warnings.value, (w) => {
            _push(`<p class="warn-item" data-v-61aeeef5>${ssrInterpolate(w)}</p>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="diag-ok" data-v-61aeeef5>✓ Không có cảnh báo</div>`);
        }
        if (diag.value) {
          _push(`<div class="diag-grid" data-v-61aeeef5><div class="diag-section-title" data-v-61aeeef5>Ảnh nguồn</div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>Kích thước gốc</span><span class="${ssrRenderClass(diag.value.srcWidth >= 5760 ? "ok" : "warn-yellow")}" data-v-61aeeef5>${ssrInterpolate(diag.value.srcWidth)}×${ssrInterpolate(diag.value.srcHeight)}</span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>GPU max texture</span><span class="${ssrRenderClass(diag.value.maxTexSize >= 8192 ? "ok" : "warn-yellow")}" data-v-61aeeef5>${ssrInterpolate(diag.value.maxTexSize)}px </span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>Kích thước trên GPU</span><span class="${ssrRenderClass(diag.value.isCapped ? "warn-red" : "ok")}" data-v-61aeeef5>${ssrInterpolate(diag.value.gpuWidth)}×${ssrInterpolate(diag.value.gpuHeight)} ${ssrInterpolate(diag.value.isCapped ? "(bị cắt!)" : "")}</span></div><div class="diag-section-title" data-v-61aeeef5>Canvas / Renderer</div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>Canvas CSS</span><span data-v-61aeeef5>${ssrInterpolate(diag.value.canvasCssW)}×${ssrInterpolate(diag.value.canvasCssH)}</span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>Framebuffer (GL)</span><span data-v-61aeeef5>${ssrInterpolate(diag.value.canvasGlW)}×${ssrInterpolate(diag.value.canvasGlH)}</span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>DPR hiện tại</span><span class="${ssrRenderClass(diag.value.dpr >= 1.5 ? "ok" : "warn-yellow")}" data-v-61aeeef5>${ssrInterpolate(diag.value.dpr.toFixed(2))}</span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>DPR thiết bị</span><span data-v-61aeeef5>${ssrInterpolate(diag.value.deviceDpr.toFixed(2))}</span></div><div class="diag-section-title" data-v-61aeeef5>Chất lượng hình ảnh</div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>FOV</span><span data-v-61aeeef5>${ssrInterpolate(diag.value.fov.toFixed(1))}°</span></div><div class="diag-row" data-v-61aeeef5><span data-v-61aeeef5>Pixel density</span><span class="${ssrRenderClass(densityLabel.value.cls)}" data-v-61aeeef5>${ssrInterpolate(diag.value.pixelDensity)} — ${ssrInterpolate(densityLabel.value.text)}</span></div><div class="diag-section-title" data-v-61aeeef5>GPU</div><div class="diag-row diag-row--wrap" data-v-61aeeef5><span data-v-61aeeef5>Renderer</span><span class="diag-gpu-name" data-v-61aeeef5>${ssrInterpolate(diag.value.renderer || "—")}</span></div></div>`);
        } else {
          _push(`<div class="diag-empty" data-v-61aeeef5>Engine chưa sẵn sàng</div>`);
        }
        _push(`<div class="diag-section-title" style="${ssrRenderStyle({ "margin-top": "10px" })}" data-v-61aeeef5>Quality Mode</div><div class="quality-row" data-v-61aeeef5><!--[-->`);
        ssrRenderList(QUALITY_MODES, (q) => {
          _push(`<button class="${ssrRenderClass([{ "is-active": __props.currentQuality === q.id }, "quality-btn"])}"${ssrRenderAttr("title", q.desc)} data-v-61aeeef5>${ssrInterpolate(q.label)}</button>`);
        });
        _push(`<!--]--></div><div class="diag-section-title" style="${ssrRenderStyle({ "margin-top": "10px" })}" data-v-61aeeef5>So sánh ảnh</div><div class="quality-row" data-v-61aeeef5><button class="${ssrRenderClass([{ "is-active": compareMode.value === "panorama" }, "quality-btn"])}" data-v-61aeeef5>360°</button><button class="${ssrRenderClass([{ "is-active": compareMode.value === "flat-100" }, "quality-btn"])}" data-v-61aeeef5>Phẳng 100%</button><button class="${ssrRenderClass([{ "is-active": compareMode.value === "fit-screen" }, "quality-btn"])}" data-v-61aeeef5>Vừa màn hình</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewer/DevDiagnosticPanel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const DevDiagnosticPanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-61aeeef5"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DevImageComparison",
  __ssrInlineRender: true,
  props: {
    url: {},
    mode: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.url) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "compare-overlay",
          role: "dialog",
          "aria-label": "So sánh ảnh gốc"
        }, _attrs))} data-v-d0f9c498><div class="compare-bar" data-v-d0f9c498><span class="compare-label" data-v-d0f9c498>${ssrInterpolate(__props.mode === "flat-100" ? "🔍 Ảnh phẳng 100% — cuộn để xem chi tiết" : "🖼 Ảnh vừa màn hình")}</span><div class="compare-hint" data-v-d0f9c498> Nét ở đây nhưng mờ trong 360° → lỗi renderer | Mờ ở cả hai → file nguồn kém </div><button class="compare-close" aria-label="Trở lại panorama 360°" data-v-d0f9c498>← Panorama 360°</button></div><div class="${ssrRenderClass([__props.mode === "flat-100" ? "mode-scroll" : "mode-fit", "compare-viewport"])}" data-v-d0f9c498><img${ssrRenderAttr("src", __props.url)}${ssrRenderAttr("alt", "Ảnh gốc: " + __props.url)} class="${ssrRenderClass([__props.mode === "flat-100" ? "img-100" : "img-fit", "compare-img"])}" draggable="false" data-v-d0f9c498></div><div class="compare-badge" data-v-d0f9c498><span data-v-d0f9c498>${ssrInterpolate(__props.url.split("/").pop())}</span><span class="badge-sep" data-v-d0f9c498>·</span><span data-v-d0f9c498>${ssrInterpolate(__props.mode === "flat-100" ? "100% kích thước" : "Vừa màn hình")}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewer/DevImageComparison.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const DevImageComparison = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d0f9c498"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ViewerHUD",
  __ssrInlineRender: true,
  props: {
    isTransitioning: { type: Boolean },
    errorMessage: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.errorMessage) {
        _push(`<div class="hud-overlay hud-error" role="alert" data-v-224d5bbe><div class="hud-error-inner" data-v-224d5bbe><span class="hud-error-icon" aria-hidden="true" data-v-224d5bbe>⚠</span><p class="hud-error-title" data-v-224d5bbe>Không thể tải panorama</p><p class="hud-error-msg" data-v-224d5bbe>${ssrInterpolate(__props.errorMessage)}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isTransitioning) {
        _push(`<div class="hud-transition-vignette" aria-hidden="true" data-v-224d5bbe></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewer/ViewerHUD.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ViewerHUD = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-224d5bbe"]]);
const _imports_0 = publicAssetsURL("/icons/logo/memory gruop trắng.png");
const buttonClass = "grid size-[42px] place-items-center rounded-full border border-white/15 bg-black/55 text-white/70 shadow-md backdrop-blur-xl transition duration-200 hover:scale-110 hover:border-white/25 hover:bg-black/80 hover:text-white active:scale-95 max-sm:size-[38px]";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ViewerCornerControls",
  __ssrInlineRender: true,
  props: {
    mapAvailable: { type: Boolean },
    mapVisible: { type: Boolean },
    hidden: { type: Boolean },
    logoSize: { default: "large" }
  },
  emits: ["toggleMap", "toggleInfo", "share"],
  setup(__props) {
    const props = __props;
    const logoSizeClasses = {
      small: "w-[160px] max-sm:w-[96px]",
      medium: "w-[208px] max-sm:w-[120px]",
      large: "w-[264px] max-sm:w-[150px]"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["pointer-events-none absolute inset-0 z-[22] transition duration-300", __props.hidden ? "invisible pointer-events-none opacity-0" : ""]
      }, _attrs))} data-v-180d4fba><div class="${ssrRenderClass([__props.mapVisible ? "bottom-[252px]" : "bottom-5", "viewer-corner-buttons pointer-events-auto absolute left-5 flex flex-col gap-2 duration-300 max-sm:left-3"])}" data-v-180d4fba>`);
      if (__props.mapAvailable) {
        _push(`<button type="button" class="${ssrRenderClass([buttonClass, __props.mapVisible && "!border-white/30 !bg-[#1f6f8b] !text-white"])}" title="Bật/tắt bản đồ" aria-label="Bật/tắt bản đồ" data-v-180d4fba><svg class="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-180d4fba><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" data-v-180d4fba></polygon><line x1="9" y1="3" x2="9" y2="18" data-v-180d4fba></line><line x1="15" y1="6" x2="15" y2="21" data-v-180d4fba></line></svg></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="${ssrRenderClass(buttonClass)}" title="Thông tin địa điểm" aria-label="Thông tin địa điểm" data-v-180d4fba><svg class="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" data-v-180d4fba><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-180d4fba></circle><path d="M12 11 L12 18" data-v-180d4fba></path></svg></button><button type="button" class="${ssrRenderClass(buttonClass)}" title="Chia sẻ" aria-label="Chia sẻ" data-v-180d4fba><svg class="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-180d4fba><circle cx="18" cy="5" r="3" data-v-180d4fba></circle><circle cx="6" cy="12" r="3" data-v-180d4fba></circle><circle cx="18" cy="19" r="3" data-v-180d4fba></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-v-180d4fba></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-v-180d4fba></line></svg></button></div><div class="${ssrRenderClass([logoSizeClasses[props.logoSize], "viewer-corner-logo pointer-events-none absolute bottom-[1px] right-[1px]"])}" aria-label="Memory Group" data-v-180d4fba><img class="block h-auto w-full object-contain"${ssrRenderAttr("src", _imports_0)} alt="Memory Group" data-v-180d4fba></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewer/ViewerCornerControls.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ViewerCornerControls = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-180d4fba"]]);
const glassButton = "pointer-events-auto inline-flex size-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-black/55 text-white backdrop-blur-xl transition duration-200 hover:-translate-y-px hover:border-white/25 hover:bg-black/80 active:translate-y-0 max-sm:size-9 max-sm:rounded-[9px]";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ViewerTopbar",
  __ssrInlineRender: true,
  props: {
    sceneIndex: {},
    sceneCount: {},
    title: {},
    subtitle: {},
    hidden: { type: Boolean }
  },
  emits: ["help", "immersive"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center gap-3 bg-gradient-to-b from-black/65 to-transparent px-4 pb-3 pt-[calc(12px+env(safe-area-inset-top,0px))] transition duration-300 max-sm:gap-2 max-sm:px-2.5 max-sm:pb-2 max-sm:pt-[calc(8px+env(safe-area-inset-top,0px))]", __props.hidden ? "invisible pointer-events-none -translate-y-3 opacity-0" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: glassButton,
        "aria-label": "Quay lại danh mục",
        title: "Quay lại trang chủ"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m15 18-6-6 6-6"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "size-4",
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
      _push(`<div class="pointer-events-auto flex h-10 min-w-0 flex-1 items-center gap-2.5 overflow-hidden rounded-[10px] border border-white/15 bg-black/55 px-3.5 backdrop-blur-xl max-sm:h-9 max-sm:gap-2 max-sm:rounded-[9px] max-sm:px-2.5"><span class="inline-flex shrink-0 items-center rounded-full border border-[#1f6f8b]/40 bg-[#1f6f8b]/25 px-2 py-0.5 font-mono text-[10px] font-bold tracking-[.05em] text-[#7ec8e3]">${ssrInterpolate(__props.sceneIndex)}/${ssrInterpolate(__props.sceneCount)}</span><span class="truncate text-sm font-semibold text-white max-sm:text-[13px]">${ssrInterpolate(__props.title)}</span>`);
      if (__props.subtitle) {
        _push(`<span class="truncate text-xs text-white/40 max-[380px]:hidden max-sm:text-[11px]">· ${ssrInterpolate(__props.subtitle)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pointer-events-auto flex shrink-0 gap-2"><button type="button" class="${ssrRenderClass(glassButton)}" title="Hướng dẫn sử dụng"><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></button><button type="button" class="${ssrRenderClass(glassButton)}" title="Chế độ toàn cảnh (nhấn F)"><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></button></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/viewer/ViewerTopbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const sidePanelClass = "viewer-side-panel absolute right-4 top-[76px] z-[25] flex max-h-[calc(100vh-180px)] w-[360px] max-w-[calc(100vw-32px)] translate-x-[calc(100%+24px)] flex-col overflow-hidden rounded-2xl border border-white/20 bg-black/80 opacity-0 shadow-2xl backdrop-blur-[20px] pointer-events-none transition-[transform,opacity] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-sm:inset-x-2 max-sm:bottom-auto max-sm:top-[calc(60px+env(safe-area-inset-top,0px))] max-sm:max-h-[calc(100dvh-76px-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] max-sm:w-auto max-sm:max-w-none max-sm:translate-x-0 max-sm:-translate-y-3 max-sm:rounded-[14px]";
const panelHeadClass = "flex items-center justify-between gap-3 border-b border-white/[.08] px-[18px] py-4";
const panelBodyClass = "overflow-y-auto p-[18px] text-[13px] leading-[1.65] text-white/70 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-thumb]:bg-white/15";
const panelCloseClass = "grid size-[30px] shrink-0 place-items-center rounded-full bg-white/[.06] text-white/70 transition hover:bg-white/[.14] hover:text-white";
const guideItemClass = "flex items-start gap-3 rounded-[10px] border border-white/[.06] bg-white/[.035] p-3 transition hover:border-white/10 hover:bg-white/[.06]";
const guideIconClass = "grid size-9 shrink-0 place-items-center rounded-md bg-[#1f6f8b]/15 text-lg";
const guideTitleClass = "mb-[3px] text-xs font-semibold text-white";
const guideDescClass = "text-[11.5px] leading-normal text-white/40";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tourId]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const tourId = computed(() => route.params.tourId);
    const isDev = false;
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      computed(() => `/api/tours/${tourId.value}`),
      "$0YHbKkY3VX"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const tour = computed(() => data.value?.item);
    const scenes = computed(() => tour.value?.scenes ?? []);
    useHead({ title: computed(() => tour.value ? `${tour.value.title} — View360` : "View360") });
    const activeSceneId = ref("");
    const activeScene = computed(
      () => scenes.value.find((s) => s.id === activeSceneId.value) ?? scenes.value[0]
    );
    const queryScene = computed(() => route.query.scene);
    watch(scenes, (val) => {
      if (!val.length || activeSceneId.value) return;
      const preferred = queryScene.value || tour.value?.initialSceneId;
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
      isTransitioning,
      errorMessage: engineError,
      currentScene: engineScene,
      mapAvailable,
      isMapVisible,
      initEngine,
      navigateTo,
      toggleMap,
      getDiagnostics,
      setQualityMode
    } = useViewerEngine({
      onNavigate: (sceneId, yaw, pitch) => handleNavigate(sceneId, yaw, pitch),
      autorotate: computed(() => tour.value?.autoRotate ?? false).value,
      transition: "forward"
    });
    watch(canvasContainerRef, async (el) => {
      if (!el || !activeScene.value) return;
      await initEngine(el, activeScene.value, tour.value ?? void 0);
    }, { once: true });
    const pendingFlyDirection = ref(null);
    watch(activeSceneId, async (id) => {
      const scene = scenes.value.find((s) => s.id === id);
      if (!scene || !engineScene.value || engineScene.value.id === id) return;
      const direction = pendingFlyDirection.value;
      pendingFlyDirection.value = null;
      await navigateTo(scene, scenes.value, direction?.yaw, direction?.pitch);
    });
    const devQualityMode = ref("quality");
    const devCompareMode = ref("panorama");
    const devPanoUrl = computed(() => engineScene.value?.panorama ?? "");
    function handleDevQualityChange(mode) {
      devQualityMode.value = mode;
      setQualityMode(mode);
    }
    function handleDevCompareMode(mode) {
      devCompareMode.value = mode;
    }
    const isImmersive = ref(false);
    const showHelpPanel = ref(false);
    const showInfoPanel = ref(false);
    const infoPanelTitle = ref("");
    const infoPanelContent = ref("");
    const inputProfile = ref("desktop");
    const inputProfileLabel = computed(() => ({
      desktop: "Chuột và bàn phím",
      touch: "Màn hình cảm ứng",
      hybrid: "Cảm ứng và chuột"
    })[inputProfile.value]);
    const guideItems = computed(() => {
      const touch = inputProfile.value !== "desktop";
      const hybrid = inputProfile.value === "hybrid";
      const interactionItems = touch ? [
        {
          icon: "↔",
          title: "Thay đổi góc nhìn",
          description: hybrid ? "Vuốt trực tiếp trên ảnh hoặc kéo bằng chuột để quan sát toàn bộ không gian." : "Vuốt một ngón tay trên ảnh để quan sát toàn bộ không gian 360°."
        },
        {
          icon: "⌁",
          title: "Điều chỉnh tầm nhìn",
          description: "Chụm hoặc mở hai ngón tay để thu nhỏ và phóng to góc nhìn."
        }
      ] : [
        {
          icon: "↔",
          title: "Thay đổi góc nhìn",
          description: "Nhấn giữ chuột trái và kéo trên ảnh để quan sát toàn bộ không gian 360°."
        },
        {
          icon: "⌁",
          title: "Điều chỉnh tầm nhìn",
          description: "Sử dụng con lăn chuột để thu nhỏ hoặc phóng to góc nhìn."
        }
      ];
      return [
        ...interactionItems,
        {
          icon: "↑",
          title: "Di chuyển giữa các cảnh",
          description: "Chọn marker mũi tên màu trắng để tiếp tục đến không gian được ghi trên nhãn."
        },
        {
          icon: "i",
          title: "Khám phá nội dung",
          description: "Chọn marker thông tin để mở thuyết minh, âm thanh hoặc nội dung đa phương tiện tại vị trí đó."
        },
        ...touch ? [] : [{
          icon: "⌨",
          title: "Điều khiển nhanh",
          description: "F: toàn màn hình · H: ẩn giao diện · ← →: chuyển cảnh · Esc: đóng bảng đang mở."
        }]
      ];
    });
    const sceneIndex = computed(
      () => scenes.value.findIndex((s) => s.id === activeSceneId.value) + 1
    );
    function handleNavigate(sceneId, yaw, pitch) {
      if (sceneId === activeSceneId.value) return;
      pendingFlyDirection.value = { yaw, pitch };
      activeSceneId.value = sceneId;
    }
    function toggleHelpPanel() {
      showInfoPanel.value = false;
      showHelpPanel.value = !showHelpPanel.value;
    }
    function toggleInfoPanel() {
      showHelpPanel.value = false;
      showInfoPanel.value = !showInfoPanel.value;
    }
    async function shareTour() {
      const url = (void 0).location.href;
      try {
        if ((void 0).share) {
          await (void 0).share({ title: tour.value?.title ?? "Tour 360°", url });
        } else {
          await (void 0).clipboard.writeText(url);
        }
      } catch {
      }
    }
    function toggleImmersive() {
      isImmersive.value = !isImmersive.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSpinner = _sfc_main$6;
      const _component_UiEmptyState = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex h-dvh w-screen flex-col overflow-hidden bg-ink" }, _attrs))} data-v-574a971b>`);
      if (unref(pending)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink" data-v-574a971b><div class="flex flex-col items-center gap-5" data-v-574a971b><div class="relative" data-v-574a971b>`);
        _push(ssrRenderComponent(_component_UiSpinner, {
          size: "lg",
          color: "primary"
        }, null, _parent));
        _push(`<div class="absolute inset-0 animate-ping rounded-full bg-river/15" data-v-574a971b></div></div><div class="text-center" data-v-574a971b><p class="text-sm font-semibold text-white" data-v-574a971b>Đang tải trải nghiệm 360°</p><p class="mt-1 text-xs text-white/40" data-v-574a971b>${ssrInterpolate(unref(tourId))}</p></div></div></div>`);
      } else if (unref(error) || !unref(tour) || !unref(activeScene)) {
        _push(`<div class="grid h-screen w-full place-items-center bg-ink px-6" data-v-574a971b>`);
        _push(ssrRenderComponent(_component_UiEmptyState, {
          icon: "🌐",
          title: "Không thể tải tour",
          description: `Tour '${unref(tourId)}' không tồn tại hoặc lỗi kết nối.`
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Về trang chủ`);
                        } else {
                          return [
                            createTextVNode("Về trang chủ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("Về trang chủ")
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
                        createTextVNode("Về trang chủ")
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
        if (unref(isDev) && unref(devCompareMode) !== "panorama") {
          _push(ssrRenderComponent(DevImageComparison, {
            url: unref(devPanoUrl),
            mode: unref(devCompareMode),
            onClose: ($event) => devCompareMode.value = "panorama"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ invisible: unref(devCompareMode) !== "panorama" }, "absolute inset-0 h-full w-full"])}" aria-label="Panorama 360°" data-v-574a971b></div>`);
        _push(ssrRenderComponent(ViewerHUD, {
          "is-transitioning": unref(isTransitioning),
          "error-message": unref(engineError)
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          "scene-index": unref(sceneIndex),
          "scene-count": unref(scenes).length,
          title: unref(activeScene).title,
          subtitle: unref(activeScene).subtitle,
          hidden: unref(isImmersive),
          onHelp: toggleHelpPanel,
          onImmersive: toggleImmersive
        }, null, _parent));
        _push(`<aside class="${ssrRenderClass([
          sidePanelClass,
          unref(showHelpPanel) && !unref(isImmersive) && "!pointer-events-auto !translate-x-0 !translate-y-0 !opacity-100",
          unref(isImmersive) && "!-translate-y-3"
        ])}"${ssrRenderAttr("aria-hidden", !unref(showHelpPanel))} data-v-574a971b><div class="${ssrRenderClass(panelHeadClass)}" data-v-574a971b><div class="flex min-w-0 items-center gap-2.5" data-v-574a971b><div class="grid size-8 shrink-0 place-items-center rounded-full bg-[#1f6f8b]/25 text-[#7ec8e3]" data-v-574a971b><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-v-574a971b><circle cx="12" cy="12" r="10" data-v-574a971b></circle><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" data-v-574a971b></path><line x1="12" y1="17" x2="12.01" y2="17" data-v-574a971b></line></svg></div><div data-v-574a971b><div class="text-sm font-semibold text-white" data-v-574a971b>Hướng dẫn sử dụng</div><div class="mt-0.5 text-[11px] uppercase tracking-[.1em] text-white/40" data-v-574a971b>${ssrInterpolate(unref(inputProfileLabel))}</div></div></div><button type="button" class="${ssrRenderClass(panelCloseClass)}" aria-label="Đóng" data-v-574a971b><svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-574a971b><path d="M18 6 6 18" data-v-574a971b></path><path d="m6 6 12 12" data-v-574a971b></path></svg></button></div><div class="${ssrRenderClass(panelBodyClass)}" data-v-574a971b><ul class="grid list-none gap-3" data-v-574a971b><!--[-->`);
        ssrRenderList(unref(guideItems), (item) => {
          _push(`<li class="${ssrRenderClass(guideItemClass)}" data-v-574a971b><div class="${ssrRenderClass([guideIconClass, "font-semibold text-[#7ec8e3]"])}" data-v-574a971b>${ssrInterpolate(item.icon)}</div><div data-v-574a971b><div class="${ssrRenderClass(guideTitleClass)}" data-v-574a971b>${ssrInterpolate(item.title)}</div><div class="${ssrRenderClass(guideDescClass)}" data-v-574a971b>${ssrInterpolate(item.description)}</div></div></li>`);
        });
        _push(`<!--]--></ul>`);
        if (unref(isDev)) {
          _push(`<details class="mt-4 rounded-[10px] border border-white/[.06] bg-white/[.025]" data-v-574a971b><summary class="cursor-pointer select-none px-3 py-2.5 text-xs font-semibold text-white/55 transition hover:text-white/80" data-v-574a971b> Thông tin kỹ thuật </summary><div class="border-t border-white/[.06] p-2" data-v-574a971b>`);
          _push(ssrRenderComponent(DevDiagnosticPanel, {
            embedded: "",
            "get-diagnostics": unref(getDiagnostics),
            "set-quality-mode": unref(setQualityMode),
            "current-quality": unref(devQualityMode),
            "panorama-url": unref(devPanoUrl),
            onQualityChange: handleDevQualityChange,
            onCompareMode: handleDevCompareMode
          }, null, _parent));
          _push(`</div></details>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></aside><aside class="${ssrRenderClass([
          sidePanelClass,
          unref(showInfoPanel) && !unref(isImmersive) && "!pointer-events-auto !translate-x-0 !translate-y-0 !opacity-100",
          unref(isImmersive) && "!-translate-y-3"
        ])}"${ssrRenderAttr("aria-hidden", !unref(showInfoPanel))} data-v-574a971b><div class="${ssrRenderClass(panelHeadClass)}" data-v-574a971b><div class="flex min-w-0 items-center gap-2.5" data-v-574a971b><div class="grid size-8 shrink-0 place-items-center rounded-full bg-[#a8583f]/25 text-[#e0a58b]" data-v-574a971b><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" data-v-574a971b><circle cx="12" cy="7" r="1.8" fill="currentColor" stroke="none" data-v-574a971b></circle><path d="M12 11 L12 18" data-v-574a971b></path></svg></div><div data-v-574a971b><div class="text-sm font-semibold text-white" data-v-574a971b>${ssrInterpolate(unref(infoPanelTitle) || "Thông tin địa điểm")}</div><div class="mt-0.5 text-[11px] uppercase tracking-[.1em] text-white/40" data-v-574a971b>Chi tiết cảnh quan</div></div></div><button type="button" class="${ssrRenderClass(panelCloseClass)}" aria-label="Đóng" data-v-574a971b><svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" data-v-574a971b><path d="M18 6 6 18" data-v-574a971b></path><path d="m6 6 12 12" data-v-574a971b></path></svg></button></div><div class="${ssrRenderClass(panelBodyClass)}" data-v-574a971b>`);
        if (unref(infoPanelContent)) {
          _push(`<div class="space-y-3" data-v-574a971b>${unref(infoPanelContent) ?? ""}</div>`);
        } else {
          _push(`<div class="space-y-3" data-v-574a971b><p data-v-574a971b><strong data-v-574a971b>${ssrInterpolate(unref(activeScene).title)}</strong></p>`);
          if (unref(activeScene).subtitle) {
            _push(`<p data-v-574a971b>${ssrInterpolate(unref(activeScene).subtitle)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tour).summary) {
            _push(`<p data-v-574a971b>${ssrInterpolate(unref(tour).summary)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div></aside>`);
        _push(ssrRenderComponent(ViewerCornerControls, {
          "map-available": unref(mapAvailable),
          "map-visible": unref(isMapVisible),
          "logo-size": "small",
          hidden: unref(isImmersive),
          onToggleMap: unref(toggleMap),
          onToggleInfo: toggleInfoPanel,
          onShare: shareTour
        }, null, _parent));
        if (unref(isImmersive)) {
          _push(`<button type="button" class="fixed right-4 top-4 z-30 grid size-10 place-items-center rounded-[10px] border border-white/15 bg-black/55 text-white backdrop-blur-xl transition hover:border-white/25 hover:bg-black/80" title="Thoát chế độ toàn cảnh (Esc)" data-v-574a971b><svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-574a971b><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" data-v-574a971b></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
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
const _tourId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-574a971b"]]);
export {
  _tourId_ as default
};
//# sourceMappingURL=_tourId_-CNr3SsuP.js.map
