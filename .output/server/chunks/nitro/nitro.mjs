import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};globalThis.__timing__.logStart('Load chunks/nitro/nitro');import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promises, existsSync } from 'node:fs';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
const ENC_ENC_SLASH_RE = /%252f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = /* @__PURE__ */ Object.create(null);
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map(
      (_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`
    ).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex !== -1) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    const nextChar = input[_base.length];
    if (!nextChar || nextChar === "/" || nextChar === "?") {
      return input;
    }
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const nextChar = input[_base.length];
  if (nextChar && nextChar !== "/" && nextChar !== "?") {
    return input;
  }
  const trimmed = input.slice(_base.length).replace(/^\/+/, "");
  return "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = { ...defaults };
  for (const key of Object.keys(baseObject)) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;writableAborted=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return Promise.resolve()}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=m(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function m(...n){return function(...e){for(const t of n)t(...e);}}const g=_();class A extends g{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function v(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const S=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(S.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function C(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:v(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function parse(multipartBodyBuffer, boundary) {
  let lastline = "";
  let state = 0 /* INIT */;
  let buffer = [];
  const allParts = [];
  let currentPartHeaders = [];
  for (let i = 0; i < multipartBodyBuffer.length; i++) {
    const prevByte = i > 0 ? multipartBodyBuffer[i - 1] : null;
    const currByte = multipartBodyBuffer[i];
    const newLineChar = currByte === 10 || currByte === 13;
    if (!newLineChar) {
      lastline += String.fromCodePoint(currByte);
    }
    const newLineDetected = currByte === 10 && prevByte === 13;
    if (0 /* INIT */ === state && newLineDetected) {
      if ("--" + boundary === lastline) {
        state = 1 /* READING_HEADERS */;
      }
      lastline = "";
    } else if (1 /* READING_HEADERS */ === state && newLineDetected) {
      if (lastline.length > 0) {
        const i2 = lastline.indexOf(":");
        if (i2 > 0) {
          const name = lastline.slice(0, i2).toLowerCase();
          const value = lastline.slice(i2 + 1).trim();
          currentPartHeaders.push([name, value]);
        }
      } else {
        state = 2 /* READING_DATA */;
        buffer = [];
      }
      lastline = "";
    } else if (2 /* READING_DATA */ === state) {
      if (lastline.length > boundary.length + 4) {
        lastline = "";
      }
      if ("--" + boundary === lastline) {
        const j = buffer.length - lastline.length;
        const part = buffer.slice(0, j - 1);
        allParts.push(process$1(part, currentPartHeaders));
        buffer = [];
        currentPartHeaders = [];
        lastline = "";
        state = 3 /* READING_PART_SEPARATOR */;
      } else {
        buffer.push(currByte);
      }
      if (newLineDetected) {
        lastline = "";
      }
    } else if (3 /* READING_PART_SEPARATOR */ === state && newLineDetected) {
      state = 1 /* READING_HEADERS */;
    }
  }
  return allParts;
}
function process$1(data, headers) {
  const dataObj = {};
  const contentDispositionHeader = headers.find((h) => h[0] === "content-disposition")?.[1] || "";
  for (const i of contentDispositionHeader.split(";")) {
    const s = i.split("=");
    if (s.length !== 2) {
      continue;
    }
    const key = (s[0] || "").trim();
    if (key === "name" || key === "filename") {
      const _value = (s[1] || "").trim().replace(/"/g, "");
      dataObj[key] = Buffer.from(_value, "latin1").toString("utf8");
    }
  }
  const contentType = headers.find((h) => h[0] === "content-type")?.[1] || "";
  if (contentType) {
    dataObj.type = contentType;
  }
  dataObj.data = Buffer.from(data);
  return dataObj;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
const getHeader = getRequestHeader;
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const _header = event.node.req.headers["x-forwarded-host"];
    const xForwardedHost = (_header || "").split(",").shift()?.trim();
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      if (_resolved instanceof FormData) {
        return new Response(_resolved).bytes().then((uint8arr) => Buffer.from(uint8arr));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !/\bchunked\b/i.test(
    String(event.node.req.headers["transfer-encoding"] ?? "")
  )) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
async function readMultipartFormData(event) {
  const contentType = getRequestHeader(event, "content-type");
  if (!contentType || !contentType.startsWith("multipart/form-data")) {
    return;
  }
  const boundary = contentType.match(/boundary=([^;]*)(;|$)/i)?.[1];
  if (!boundary) {
    return;
  }
  const body = await readRawBody(event, false);
  if (!body) {
    return;
  }
  return parse(body, boundary);
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    const entries = Array.isArray(input) ? input : typeof input.entries === "function" ? input.entries() : Object.entries(input);
    for (const [key, value] of entries) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _rawReqUrl = event.node.req.url || "/";
    const _reqPath = _decodePath(event._path || _rawReqUrl);
    event._path = _reqPath;
    const _needsRawUrl = _reqPath !== _rawReqUrl;
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _needsRawUrl ? layer.route.length > 1 ? _rawReqUrl.slice(layer.route.length) || "/" : _rawReqUrl : _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function _decodePath(url) {
  const qIndex = url.indexOf("?");
  const path = qIndex === -1 ? url : url.slice(0, qIndex);
  const query = qIndex === -1 ? "" : url.slice(qIndex);
  const decodedPath = path.includes("%25") ? decodePath(path.replace(/%25/g, "%2525")) : decodePath(path);
  return decodedPath + query;
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const isBrowser = "undefined" !== "undefined";
function createDebugger(hooks, _options = {}) {
  const options = {
    inspect: isBrowser,
    group: isBrowser,
    filter: () => true,
    ..._options
  };
  const _filter = options.filter;
  const filter = typeof _filter === "string" ? (name) => name.startsWith(_filter) : _filter;
  const _tag = options.tag ? `[${options.tag}] ` : "";
  const logPrefix = (event) => _tag + event.name + "".padEnd(event._id, "\0");
  const _idCtr = {};
  const unsubscribeBefore = hooks.beforeEach((event) => {
    if (filter !== void 0 && !filter(event.name)) {
      return;
    }
    _idCtr[event.name] = _idCtr[event.name] || 0;
    event._id = _idCtr[event.name]++;
    console.time(logPrefix(event));
  });
  const unsubscribeAfter = hooks.afterEach((event) => {
    if (filter !== void 0 && !filter(event.name)) {
      return;
    }
    if (options.group) {
      console.groupCollapsed(event.name);
    }
    if (options.inspect) {
      console.timeLog(logPrefix(event), event.args);
    } else {
      console.timeEnd(logPrefix(event));
    }
    if (options.group) {
      console.groupEnd();
    }
    _idCtr[event.name]--;
  });
  return {
    /** Stop debugging and remove listeners */
    close: () => {
      unsubscribeBefore();
      unsubscribeAfter();
    }
  };
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  if (value instanceof FormData || value instanceof URLSearchParams) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (contentType === "text/event-stream") {
    return "stream";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
      if (!(context.options.headers instanceof Headers)) {
        context.options.headers = new Headers(
          context.options.headers || {}
          /* compat */
        );
      }
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        const contentType = context.options.headers.get("content-type");
        if (typeof context.options.body !== "string") {
          context.options.body = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(
            context.options.body
          ).toString() : JSON.stringify(context.options.body);
        }
        if (!contentType) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  nsStorage.keys = nsStorage.getKeys;
  nsStorage.getItems = async (items, commonOptions) => {
    const prefixedItems = items.map(
      (item) => typeof item === "string" ? base + item : { ...item, key: base + item.key }
    );
    const results = await storage.getItems(prefixedItems, commonOptions);
    return results.map((entry) => ({
      key: entry.key.slice(base.length),
      value: entry.value
    }));
  };
  nsStorage.setItems = async (items, commonOptions) => {
    const prefixedItems = items.map((item) => ({
      key: base + item.key,
      value: item.value,
      options: item.options
    }));
    return storage.setItems(prefixedItems, commonOptions);
  };
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "c104de0a-8002-494e-ab43-d2e9c12f3554",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/images/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/uploads/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/thumbnails/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "mediaBaseUrl": ""
  },
  "minioEndpoint": "http://minio:9000",
  "mariadbHost": "mariadb",
  "enableAdmin": true,
  "adminKey": ""
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError$1({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
	
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		
		return;
	}
	
	const defaultRes = await defaultHandler(error, event, { json: true });
	
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	const errorObject = defaultRes.body;
	
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	
	const reqHeaders = getRequestHeaders(event);
	
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"] || !!event.context.nuxt?.["~rendering-error"];
	if (!isRenderingError) {
		event.context.nuxt ||= {};
		event.context.nuxt["~rendering-error"] = true;
	}
	
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	
	if (!res) {
		const { template } = await import('../_/error-500.mjs');
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

function defineNitroPlugin(def) {
  return def;
}

const _cxk1U3wNAx6ggC_RyHFm8F53ntKLmIFx7baWVJKPXNM = defineNitroPlugin((nitro) => {
  createDebugger(nitro.hooks, { tag: "nitro-runtime" });
});

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.node.res.end;
  event.node.res.end = function(chunk, encoding, cb) {
    const metrics = [
      ["Generate", globalTiming.end(start)],
      ...globalTiming.metrics
    ];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.node.res.headersSent) {
      event.node.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.node.res, chunk, encoding, cb);
    return this;
  }.bind(event.node.res);
});
const _6WrNatFVoGm6wUrtUtHtf5oPY97EzBCWE861SnDw = defineNitroPlugin((nitro) => {
  nitro.h3App.stack.unshift({
    route: "/",
    handler: timingMiddleware
  });
});

const plugins = [
  _cxk1U3wNAx6ggC_RyHFm8F53ntKLmIFx7baWVJKPXNM,
_6WrNatFVoGm6wUrtUtHtf5oPY97EzBCWE861SnDw
];

const assets = {
  "/test-css3d-iframe.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d18-tZR4jYqCjQ+WdiM8Ns0lTCktsvw\"",
    "mtime": "2026-10-07T14:46:00.296Z",
    "size": 3352,
    "path": "../public/test-css3d-iframe.html"
  },
  "/doc/360.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"16fa-Aajd+xIFZQ7BLKeCeGkd2CBw00E\"",
    "mtime": "2026-10-07T14:45:57.148Z",
    "size": 5882,
    "path": "../public/doc/360.md"
  },
  "/figures/95.jpg": {
    "type": "image/jpeg",
    "etag": "\"11fb7-x5ynWF0cyQS5mHdFeiJ3SRBV06E\"",
    "mtime": "2026-10-07T14:45:57.148Z",
    "size": 73655,
    "path": "../public/figures/95.jpg"
  },
  "/figures/97.jpg": {
    "type": "image/jpeg",
    "etag": "\"11546-y9lwuPY4GXP1LQ/o5t2XaZhGG44\"",
    "mtime": "2026-10-07T14:45:57.181Z",
    "size": 70982,
    "path": "../public/figures/97.jpg"
  },
  "/figures/99.jpg": {
    "type": "image/jpeg",
    "etag": "\"179a5-8R9qcnaPMtby7441Qb32QTdhbt4\"",
    "mtime": "2026-10-07T14:45:57.183Z",
    "size": 96677,
    "path": "../public/figures/99.jpg"
  },
  "/figures/a.jpg": {
    "type": "image/jpeg",
    "etag": "\"150b8-llMynJJawv/3STC4MyEuecFJBsg\"",
    "mtime": "2026-10-07T14:45:57.184Z",
    "size": 86200,
    "path": "../public/figures/a.jpg"
  },
  "/figures/98.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d35a-Pj9DDEm/6aaDHZIld4xpHxxRvYo\"",
    "mtime": "2026-10-07T14:45:57.184Z",
    "size": 381786,
    "path": "../public/figures/98.jpg"
  },
  "/figures/b.jpg": {
    "type": "image/jpeg",
    "etag": "\"47b4a-++SIsHKczWqSbUGgGwyZFENsrZI\"",
    "mtime": "2026-10-07T14:45:57.186Z",
    "size": 293706,
    "path": "../public/figures/b.jpg"
  },
  "/figures/c.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a5f0-uwQTCIBIfid4kSAr+M4H6co5WoM\"",
    "mtime": "2026-10-07T14:45:57.184Z",
    "size": 108016,
    "path": "../public/figures/c.jpg"
  },
  "/figures/e.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cc6a-Ajp7sAjcPWosr/TycMA717yAFXI\"",
    "mtime": "2026-10-07T14:45:57.185Z",
    "size": 117866,
    "path": "../public/figures/e.jpg"
  },
  "/figures/dua-dieu-khac-duong-dai-vao-khong-gian-lang-nghe-truyen-8d10.jpg": {
    "type": "image/jpeg",
    "etag": "\"35e53-NxCZLTFhbRu3joe/fmxmy6Cwv8U\"",
    "mtime": "2026-10-07T14:45:57.186Z",
    "size": 220755,
    "path": "../public/figures/dua-dieu-khac-duong-dai-vao-khong-gian-lang-nghe-truyen-8d10.jpg"
  },
  "/figures/dua-dieu-khac-duong-dai-vao-khong-gian-lang-nghe-truyen-2d3b.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bb6b-A5oYF/4nr9RG6DfOUfDRUHdr3KU\"",
    "mtime": "2026-10-07T14:45:57.186Z",
    "size": 244587,
    "path": "../public/figures/dua-dieu-khac-duong-dai-vao-khong-gian-lang-nghe-truyen-2d3b.jpg"
  },
  "/editor-previews/01e2364cf1dfb34cd04aa596b36793cedd07f72c.webp": {
    "type": "image/webp",
    "etag": "\"5cf8a-RXuMS2OPgZuin/VRa5FMBJAsHw0\"",
    "mtime": "2026-10-07T14:45:57.149Z",
    "size": 380810,
    "path": "../public/editor-previews/01e2364cf1dfb34cd04aa596b36793cedd07f72c.webp"
  },
  "/editor-previews/1791370873981-zy2t135moj.webp": {
    "type": "image/webp",
    "etag": "\"59580-Y80NIngRlVHI4pd+m+wwzm0fF5E\"",
    "mtime": "2026-10-07T14:45:57.188Z",
    "size": 365952,
    "path": "../public/editor-previews/1791370873981-zy2t135moj.webp"
  },
  "/editor-previews/1791370838724-8dg485jluu8.webp": {
    "type": "image/webp",
    "etag": "\"673c4-TYy+udiuPyS/FauQ287AxQkTWKQ\"",
    "mtime": "2026-10-07T14:45:57.188Z",
    "size": 422852,
    "path": "../public/editor-previews/1791370838724-8dg485jluu8.webp"
  },
  "/editor-previews/1791370865551-z0836imf9m.webp": {
    "type": "image/webp",
    "etag": "\"6ffea-+fwx61E57tDa7Z0tNxRNzQ71DwU\"",
    "mtime": "2026-10-07T14:45:57.187Z",
    "size": 458730,
    "path": "../public/editor-previews/1791370865551-z0836imf9m.webp"
  },
  "/editor-previews/1791370883431-47q760webjq.webp": {
    "type": "image/webp",
    "etag": "\"64be8-s+e0FuFHbfod0yK/kLNRPrrjjJs\"",
    "mtime": "2026-10-07T14:45:57.188Z",
    "size": 412648,
    "path": "../public/editor-previews/1791370883431-47q760webjq.webp"
  },
  "/editor-previews/1791372743999-mc9nfi1vhz.webp": {
    "type": "image/webp",
    "etag": "\"1a924-IevYeqz8Id5XxnBDEKKhjzFo5o0\"",
    "mtime": "2026-10-07T14:45:57.189Z",
    "size": 108836,
    "path": "../public/editor-previews/1791372743999-mc9nfi1vhz.webp"
  },
  "/editor-previews/1791372759191-pm63036bo4h.webp": {
    "type": "image/webp",
    "etag": "\"1b4e0-EKAM/Vg+/WYQZLXVOpfPmj5rbmU\"",
    "mtime": "2026-10-07T14:45:57.189Z",
    "size": 111840,
    "path": "../public/editor-previews/1791372759191-pm63036bo4h.webp"
  },
  "/editor-previews/1791372766244-yirii93ny8e.webp": {
    "type": "image/webp",
    "etag": "\"20e80-ierrqf5SMpUdvTC0+WbjVwdhAxw\"",
    "mtime": "2026-10-07T14:45:57.189Z",
    "size": 134784,
    "path": "../public/editor-previews/1791372766244-yirii93ny8e.webp"
  },
  "/editor-previews/1791372780871-9ozia4yzmfj.webp": {
    "type": "image/webp",
    "etag": "\"23824-0AjJ6froQoDoRVLjjVkcQ16gjfM\"",
    "mtime": "2026-10-07T14:45:57.190Z",
    "size": 145444,
    "path": "../public/editor-previews/1791372780871-9ozia4yzmfj.webp"
  },
  "/editor-previews/1791374723872-ve0sy9rwb9p.webp": {
    "type": "image/webp",
    "etag": "\"2fe68-zS1fZrqz9yruju5YS0GljKQzksg\"",
    "mtime": "2026-10-07T14:45:57.191Z",
    "size": 196200,
    "path": "../public/editor-previews/1791374723872-ve0sy9rwb9p.webp"
  },
  "/editor-previews/1791374687320-qp74k2s456.webp": {
    "type": "image/webp",
    "etag": "\"36b00-MZ/FeWuF0P/83MvT6f712GKMNfU\"",
    "mtime": "2026-10-07T14:45:57.190Z",
    "size": 224000,
    "path": "../public/editor-previews/1791374687320-qp74k2s456.webp"
  },
  "/editor-previews/1791374679999-qb06gn55i3r.webp": {
    "type": "image/webp",
    "etag": "\"50608-GjCeLAlm579GRlSN87yTJWK4jCY\"",
    "mtime": "2026-10-07T14:45:57.190Z",
    "size": 329224,
    "path": "../public/editor-previews/1791374679999-qb06gn55i3r.webp"
  },
  "/editor-previews/1791374750110-9o5fa6w6uhl.webp": {
    "type": "image/webp",
    "etag": "\"2fe68-zS1fZrqz9yruju5YS0GljKQzksg\"",
    "mtime": "2026-10-07T14:45:57.190Z",
    "size": 196200,
    "path": "../public/editor-previews/1791374750110-9o5fa6w6uhl.webp"
  },
  "/editor-previews/1af6b973444d07dc0d60a36e57f00ec543a98342.webp": {
    "type": "image/webp",
    "etag": "\"6a31e-8VcH5/GpZhVgWY6YiqJg5H2+QZA\"",
    "mtime": "2026-10-07T14:45:57.192Z",
    "size": 434974,
    "path": "../public/editor-previews/1af6b973444d07dc0d60a36e57f00ec543a98342.webp"
  },
  "/editor-previews/2ed2434dd33be1e0eb797f33df9c05d13df871cd.webp": {
    "type": "image/webp",
    "etag": "\"5ea6c-mQIR7xGhBWsLilx2kmdx0EuZSb4\"",
    "mtime": "2026-10-07T14:45:57.193Z",
    "size": 387692,
    "path": "../public/editor-previews/2ed2434dd33be1e0eb797f33df9c05d13df871cd.webp"
  },
  "/editor-previews/2f7a69d79cca70a4b492ad5576398fe56e1bcb60.webp": {
    "type": "image/webp",
    "etag": "\"6732c-gYptfZOp3A8huyrRKzu+JVS2KFg\"",
    "mtime": "2026-10-07T14:45:57.193Z",
    "size": 422700,
    "path": "../public/editor-previews/2f7a69d79cca70a4b492ad5576398fe56e1bcb60.webp"
  },
  "/editor-previews/3bf1c26c2c448ba31aa0640643f340d48a3caad2.webp": {
    "type": "image/webp",
    "etag": "\"7eb2a-M/jKc5blLy4MgGQeBbuQu065PbE\"",
    "mtime": "2026-10-07T14:45:57.196Z",
    "size": 518954,
    "path": "../public/editor-previews/3bf1c26c2c448ba31aa0640643f340d48a3caad2.webp"
  },
  "/editor-previews/4b0043f6f012d78cf68808b51d79a4b46d7595d8.webp": {
    "type": "image/webp",
    "etag": "\"1ee0c-J7/Ink+eoVdaO91oTbDfWd72rhs\"",
    "mtime": "2026-10-07T14:45:57.197Z",
    "size": 126476,
    "path": "../public/editor-previews/4b0043f6f012d78cf68808b51d79a4b46d7595d8.webp"
  },
  "/editor-previews/40f20f752c2340e4b54ca1f9e4a04685d39ab7e1.webp": {
    "type": "image/webp",
    "etag": "\"755f6-B9zFmCJKeC7i8YAMmIu3cV1zztk\"",
    "mtime": "2026-10-07T14:45:57.194Z",
    "size": 480758,
    "path": "../public/editor-previews/40f20f752c2340e4b54ca1f9e4a04685d39ab7e1.webp"
  },
  "/editor-previews/722be813bb5a83d361751c35a52ac4f4462036f3.webp": {
    "type": "image/webp",
    "etag": "\"785c0-vqFU9A26S1lipZX5LTM4SnbedkM\"",
    "mtime": "2026-10-07T14:45:57.196Z",
    "size": 492992,
    "path": "../public/editor-previews/722be813bb5a83d361751c35a52ac4f4462036f3.webp"
  },
  "/editor-previews/8de7976cd19ad502cfead98de3fc47f15dba1fa6.webp": {
    "type": "image/webp",
    "etag": "\"6a74a-1OdUUVqNQ05jUO6grrLLdyLdD1I\"",
    "mtime": "2026-10-07T14:45:57.197Z",
    "size": 436042,
    "path": "../public/editor-previews/8de7976cd19ad502cfead98de3fc47f15dba1fa6.webp"
  },
  "/editor-previews/a516f33b3d1c4a3adc952e1b6b6e5c980f0ea03d.webp": {
    "type": "image/webp",
    "etag": "\"40a66-8M6RUa9D/OEerj3JQTwq+EdIRlo\"",
    "mtime": "2026-10-07T14:45:57.196Z",
    "size": 264806,
    "path": "../public/editor-previews/a516f33b3d1c4a3adc952e1b6b6e5c980f0ea03d.webp"
  },
  "/editor-previews/c7d26b3ac3301568ed087f1b106b34e541c413d7.webp": {
    "type": "image/webp",
    "etag": "\"470ca-K+pwPHPJYGmpv4KjtB5lvuRNk5M\"",
    "mtime": "2026-10-07T14:45:57.198Z",
    "size": 291018,
    "path": "../public/editor-previews/c7d26b3ac3301568ed087f1b106b34e541c413d7.webp"
  },
  "/editor-previews/cd51d4e70d81154eea650abc3135b7c4a044762d.webp": {
    "type": "image/webp",
    "etag": "\"1ab26-1trDPkMv5/d/K8a5CRPSUXjZzPM\"",
    "mtime": "2026-10-07T14:45:57.198Z",
    "size": 109350,
    "path": "../public/editor-previews/cd51d4e70d81154eea650abc3135b7c4a044762d.webp"
  },
  "/editor-previews/ce982795774ba03cf851593a15724368df374b73.webp": {
    "type": "image/webp",
    "etag": "\"69ac6-tDSBN3m9qd1yNgw/pzvSDu3F8Vw\"",
    "mtime": "2026-10-07T14:45:57.200Z",
    "size": 432838,
    "path": "../public/editor-previews/ce982795774ba03cf851593a15724368df374b73.webp"
  },
  "/_nuxt/B6c5Lu9W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e5-L7E9P6RyflShciSEWlmCmYzO2Ks\"",
    "mtime": "2026-10-07T14:45:57.123Z",
    "size": 229,
    "path": "../public/_nuxt/B6c5Lu9W.js"
  },
  "/_nuxt/0wM_ZGxA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"94b3-4eu/Qy1ceVQRDUp8t7RV1wnE/CA\"",
    "mtime": "2026-10-07T14:45:57.123Z",
    "size": 38067,
    "path": "../public/_nuxt/0wM_ZGxA.js"
  },
  "/_nuxt/-pVJv_2N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1623-2gPI0TJoe8MC/u/waxNhEn1WS8U\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 5667,
    "path": "../public/_nuxt/-pVJv_2N.js"
  },
  "/_nuxt/BDINbaqL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"239-T0DilxrVaw18D1FRA+4ST8z9m6E\"",
    "mtime": "2026-10-07T14:45:57.123Z",
    "size": 569,
    "path": "../public/_nuxt/BDINbaqL.js"
  },
  "/_nuxt/BP91ubAD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"82e-aLqXnRTMeGp3nTX70l2hgQUyjac\"",
    "mtime": "2026-10-07T14:45:57.123Z",
    "size": 2094,
    "path": "../public/_nuxt/BP91ubAD.js"
  },
  "/_nuxt/BZ62yXwe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b44-zFR40cv3YcVMH6d1468b/P5gsVQ\"",
    "mtime": "2026-10-07T14:45:57.123Z",
    "size": 23364,
    "path": "../public/_nuxt/BZ62yXwe.js"
  },
  "/_nuxt/Bd5tps_c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1868-NQ3MtjIGfVxreNnxAGG+FObj6zw\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 6248,
    "path": "../public/_nuxt/Bd5tps_c.js"
  },
  "/_nuxt/BiNQa6pQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cfb-dwcJyNGFtO/GDRkdjtKeDJIRU0c\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 11515,
    "path": "../public/_nuxt/BiNQa6pQ.js"
  },
  "/_nuxt/BkybLv_5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7fb0-7P1r1VHVMa29pUOjQ8UpSGFzOk4\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 32688,
    "path": "../public/_nuxt/BkybLv_5.js"
  },
  "/_nuxt/C-xY1vKQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea9-pr6l1W2tFHixyGpn09t2Zb8OYnk\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 16041,
    "path": "../public/_nuxt/C-xY1vKQ.js"
  },
  "/_nuxt/C210bVOb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24705-QTJGblZB2sJK7O5ZclHHopm91FI\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 149253,
    "path": "../public/_nuxt/C210bVOb.js"
  },
  "/_nuxt/CBMwAmhx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"387d-Q9+Bmva1to0R/z5grQh4AjPPnMc\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 14461,
    "path": "../public/_nuxt/CBMwAmhx.js"
  },
  "/editor-previews/cdf76ad3c8e6093a7401b21eb1f1f91f0dbd5c0b.webp": {
    "type": "image/webp",
    "etag": "\"97b40-E0DdgwoG7+EJ/u0XKKijkLLwvvo\"",
    "mtime": "2026-10-07T14:45:57.199Z",
    "size": 621376,
    "path": "../public/editor-previews/cdf76ad3c8e6093a7401b21eb1f1f91f0dbd5c0b.webp"
  },
  "/editor-previews/f767b43b8229921d8369f4554bcb5bb10e770310.webp": {
    "type": "image/webp",
    "etag": "\"80d04-OJdU/TX781lEAk1NCvQ+C6WTA+A\"",
    "mtime": "2026-10-07T14:45:57.200Z",
    "size": 527620,
    "path": "../public/editor-previews/f767b43b8229921d8369f4554bcb5bb10e770310.webp"
  },
  "/_nuxt/CRG9R_wU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39f-9y8Uvfl3phPoVbWBb6O7cPRmBz4\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 927,
    "path": "../public/_nuxt/CRG9R_wU.js"
  },
  "/_nuxt/CZh8sAPg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12765-NlN9DGqd5hvoV7WCvLmWOY7BXjQ\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 75621,
    "path": "../public/_nuxt/CZh8sAPg.js"
  },
  "/_nuxt/CTh3lFD2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32af2-MZ2FWW3rR/jNViD7Q3UROCessME\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 207602,
    "path": "../public/_nuxt/CTh3lFD2.js"
  },
  "/_nuxt/C_LosTb9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a74-fERt7M8Muvh2lAbTo6am4S4fvkU\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 2676,
    "path": "../public/_nuxt/C_LosTb9.js"
  },
  "/_nuxt/C_Xx4cVJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f7-hq8LIWF/6qUULRCMAxkM8b5NbAU\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 247,
    "path": "../public/_nuxt/C_Xx4cVJ.js"
  },
  "/_nuxt/DRnswIYu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13c3-9jzN5DZ1/J4xtRRvJvZ+I31e7SY\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 5059,
    "path": "../public/_nuxt/DRnswIYu.js"
  },
  "/_nuxt/DVjmxFgY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2020-8W44FqDSPviFcqSZ+51CfP8O844\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 8224,
    "path": "../public/_nuxt/DVjmxFgY.js"
  },
  "/_nuxt/DXlGhl8G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eb2-0waDln6H7/sFhQOoAsvFswmoxp4\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 3762,
    "path": "../public/_nuxt/DXlGhl8G.js"
  },
  "/_nuxt/D_0bGVmA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a5a-MhKKrqs1eVycEBGkJ3v9FufI9jo\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 6746,
    "path": "../public/_nuxt/D_0bGVmA.js"
  },
  "/_nuxt/Dl7AYy5Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d40-H/Vcl1ScbvUPstW+qNilyApPdLs\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 3392,
    "path": "../public/_nuxt/Dl7AYy5Q.js"
  },
  "/_nuxt/DnEEUKzB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"436-9pFhbc5eAqCWIApd9ZwKiqmj53Y\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 1078,
    "path": "../public/_nuxt/DnEEUKzB.js"
  },
  "/_nuxt/DrbXwyR9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-Jk0iwf5c6s8mldqgpcsP+s7Efxc\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 64,
    "path": "../public/_nuxt/DrbXwyR9.js"
  },
  "/_nuxt/Dnb4CYHA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e06-WI0d7O7nTarNW+UDpINvKYUKJFo\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 3590,
    "path": "../public/_nuxt/Dnb4CYHA.js"
  },
  "/_nuxt/Dty8cyYE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"948-8JTLi8PPuxyHwViAS74x6yg328Q\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 2376,
    "path": "../public/_nuxt/Dty8cyYE.js"
  },
  "/_nuxt/E6e7frxu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1843-k3JI/nBnR8Dq1biz/Vr7pgBp/iY\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 6211,
    "path": "../public/_nuxt/E6e7frxu.js"
  },
  "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg": {
    "type": "image/jpeg",
    "etag": "\"5efaff-/NtF8OwhQRu9Ld2/SgjHRN0SScg\"",
    "mtime": "2026-10-07T14:45:57.232Z",
    "size": 6224639,
    "path": "../public/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg"
  },
  "/_nuxt/IDKuIbBm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f0-ByNFSBb4CEPRQW4gzkLCaD7I/P0\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 752,
    "path": "../public/_nuxt/IDKuIbBm.js"
  },
  "/_nuxt/NXQju0zI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25e-uf9AvlnGYoSZ3XSko1kzlNBQp4A\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 606,
    "path": "../public/_nuxt/NXQju0zI.js"
  },
  "/_nuxt/QlASa48x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34a6-T/J7TzmjLJN89MWVdDpjCIgB67U\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 13478,
    "path": "../public/_nuxt/QlASa48x.js"
  },
  "/_nuxt/DYalyejP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"90fe5-SboI7tz2M/R3qtInyGnc9JOK9mY\"",
    "mtime": "2026-10-07T14:45:57.124Z",
    "size": 593893,
    "path": "../public/_nuxt/DYalyejP.js"
  },
  "/_nuxt/RRc0rVLo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"55a-SDpDz6JXkFin6ySiJpnDnLVYvPw\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 1370,
    "path": "../public/_nuxt/RRc0rVLo.js"
  },
  "/_nuxt/_sceneId_.BQ5agvaP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c03d-Cl1/IJ/fbPE6Sf7AhoxjrTgUCnw\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 49213,
    "path": "../public/_nuxt/_sceneId_.BQ5agvaP.css"
  },
  "/images/1788771876183.jpg": {
    "type": "image/jpeg",
    "etag": "\"6aacce-LzEXldaOQvNSmiXf4EItGAO2//8\"",
    "mtime": "2026-10-07T14:45:57.278Z",
    "size": 6991054,
    "path": "../public/images/1788771876183.jpg"
  },
  "/images/1788771876123.jpg": {
    "type": "image/jpeg",
    "etag": "\"760f55-2PHtR9R5EKip9vz+3qavSCAvRn0\"",
    "mtime": "2026-10-07T14:45:57.183Z",
    "size": 7737173,
    "path": "../public/images/1788771876123.jpg"
  },
  "/_nuxt/_tourId_.BdKT9k5s.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"451-1QKHuBkVyxQmPc5mKEbGOgzFyQE\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 1105,
    "path": "../public/_nuxt/_tourId_.BdKT9k5s.css"
  },
  "/_nuxt/default.BWxprYPa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b1-qrc+1TPUeEG5qZlX2FHJpqCgnBI\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 433,
    "path": "../public/_nuxt/default.BWxprYPa.css"
  },
  "/_nuxt/_tourId_.BnR1om8J.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"31ca-ApXFsQKzbipnAvoQ539C1hlkvGQ\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 12746,
    "path": "../public/_nuxt/_tourId_.BnR1om8J.css"
  },
  "/_nuxt/error-404.DL_4WIao.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"dca-KnjyV0UbpsrliiJzZx69defY74k\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 3530,
    "path": "../public/_nuxt/error-404.DL_4WIao.css"
  },
  "/_nuxt/error-500.I1Dtv2V5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75a-vEGyJqldBVJrnMfcLsrGaHcxYl0\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 1882,
    "path": "../public/_nuxt/error-500.I1Dtv2V5.css"
  },
  "/_nuxt/index.D7O8bXrR.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"14c-WdvEeZn2l1Spb9AvY7FIdjywzR4\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 332,
    "path": "../public/_nuxt/index.D7O8bXrR.css"
  },
  "/_nuxt/jiSQ3l1J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13ea-NqGxS8Z3CkwlZHugA82f/noBPmQ\"",
    "mtime": "2026-10-07T14:45:57.125Z",
    "size": 5098,
    "path": "../public/_nuxt/jiSQ3l1J.js"
  },
  "/thumbnails/1790786456939-kcpnrw9zkiq.webp": {
    "type": "image/webp",
    "etag": "\"332e-s6bibJxa07+zjVsnAEw8i/pVSFg\"",
    "mtime": "2026-10-07T14:45:57.149Z",
    "size": 13102,
    "path": "../public/thumbnails/1790786456939-kcpnrw9zkiq.webp"
  },
  "/thumbnails/1790786504095-y04xqsn9269.webp": {
    "type": "image/webp",
    "etag": "\"332e-s6bibJxa07+zjVsnAEw8i/pVSFg\"",
    "mtime": "2026-10-07T14:45:57.241Z",
    "size": 13102,
    "path": "../public/thumbnails/1790786504095-y04xqsn9269.webp"
  },
  "/thumbnails/1790824250331-qio05vkbfmp.webp": {
    "type": "image/webp",
    "etag": "\"29e0-meBXLplXOu3rdJwA2RbWtv+VlXs\"",
    "mtime": "2026-10-07T14:45:57.242Z",
    "size": 10720,
    "path": "../public/thumbnails/1790824250331-qio05vkbfmp.webp"
  },
  "/thumbnails/1790824855329-skbl9vjrscr.webp": {
    "type": "image/webp",
    "etag": "\"4af8-NrurciuGnS7OLlOrjH4dJUW0xqw\"",
    "mtime": "2026-10-07T14:45:57.251Z",
    "size": 19192,
    "path": "../public/thumbnails/1790824855329-skbl9vjrscr.webp"
  },
  "/thumbnails/1790824297084-1d2tbw5trnb.webp": {
    "type": "image/webp",
    "etag": "\"29e0-meBXLplXOu3rdJwA2RbWtv+VlXs\"",
    "mtime": "2026-10-07T14:45:57.243Z",
    "size": 10720,
    "path": "../public/thumbnails/1790824297084-1d2tbw5trnb.webp"
  },
  "/thumbnails/1790825393143-7qjndefvpbc.webp": {
    "type": "image/webp",
    "etag": "\"4af8-NrurciuGnS7OLlOrjH4dJUW0xqw\"",
    "mtime": "2026-10-07T14:45:57.247Z",
    "size": 19192,
    "path": "../public/thumbnails/1790825393143-7qjndefvpbc.webp"
  },
  "/thumbnails/1790824871428-qk6b0x0xjif.webp": {
    "type": "image/webp",
    "etag": "\"4af8-NrurciuGnS7OLlOrjH4dJUW0xqw\"",
    "mtime": "2026-10-07T14:45:57.244Z",
    "size": 19192,
    "path": "../public/thumbnails/1790824871428-qk6b0x0xjif.webp"
  },
  "/images/1788771876132.jpg": {
    "type": "image/jpeg",
    "etag": "\"7816c6-SdyJHfFF8vNdnX6ZozP7ftgqBoE\"",
    "mtime": "2026-10-07T14:45:57.236Z",
    "size": 7870150,
    "path": "../public/images/1788771876132.jpg"
  },
  "/thumbnails/1790826055784-cr1jlml4xur.webp": {
    "type": "image/webp",
    "etag": "\"5afa-JpK/mTHNHFm5a0I/RsDxRmKLdLQ\"",
    "mtime": "2026-10-07T14:45:57.246Z",
    "size": 23290,
    "path": "../public/thumbnails/1790826055784-cr1jlml4xur.webp"
  },
  "/thumbnails/1790826067720-i8tcqjgqf6.webp": {
    "type": "image/webp",
    "etag": "\"5afa-JpK/mTHNHFm5a0I/RsDxRmKLdLQ\"",
    "mtime": "2026-10-07T14:45:57.248Z",
    "size": 23290,
    "path": "../public/thumbnails/1790826067720-i8tcqjgqf6.webp"
  },
  "/thumbnails/1790828283399-ywq1ijooop8.webp": {
    "type": "image/webp",
    "etag": "\"4c34-6T+3QiwZXll+bMykeP/+ES6jvqk\"",
    "mtime": "2026-10-07T14:45:57.250Z",
    "size": 19508,
    "path": "../public/thumbnails/1790828283399-ywq1ijooop8.webp"
  },
  "/thumbnails/1790828936346-8s7vag87rvm.webp": {
    "type": "image/webp",
    "etag": "\"5328-kS7fPAXAQUNWZdrgFwOlectm+/0\"",
    "mtime": "2026-10-07T14:45:57.252Z",
    "size": 21288,
    "path": "../public/thumbnails/1790828936346-8s7vag87rvm.webp"
  },
  "/thumbnails/1790829740508-og9k4fih94.webp": {
    "type": "image/webp",
    "etag": "\"43d4-UJgV4KphbU2qUsbUfZiBD8KlsY4\"",
    "mtime": "2026-10-07T14:45:57.255Z",
    "size": 17364,
    "path": "../public/thumbnails/1790829740508-og9k4fih94.webp"
  },
  "/images/1788771876143.jpg": {
    "type": "image/jpeg",
    "etag": "\"855659-FAYXIJRcMHOBm9e1NH9BPZqZ6Bk\"",
    "mtime": "2026-10-07T14:45:57.241Z",
    "size": 8738393,
    "path": "../public/images/1788771876143.jpg"
  },
  "/thumbnails/1790829749494-otvj53ud2l.webp": {
    "type": "image/webp",
    "etag": "\"4c48-I23507RwX3wFwOgprtRp5D6JI4s\"",
    "mtime": "2026-10-07T14:45:57.254Z",
    "size": 19528,
    "path": "../public/thumbnails/1790829749494-otvj53ud2l.webp"
  },
  "/images/1788771876162.jpg": {
    "type": "image/jpeg",
    "etag": "\"89a9e2-LIibNT3HL6isI+SpfjQ8AEsyx6k\"",
    "mtime": "2026-10-07T14:45:57.240Z",
    "size": 9021922,
    "path": "../public/images/1788771876162.jpg"
  },
  "/thumbnails/1790833687282-w5klks8uzd.webp": {
    "type": "image/webp",
    "etag": "\"28b6-Q1q9bQkbUQSd6oupG+LSfTNPLqM\"",
    "mtime": "2026-10-07T14:45:57.256Z",
    "size": 10422,
    "path": "../public/thumbnails/1790833687282-w5klks8uzd.webp"
  },
  "/thumbnails/1791363635779-44yjura05ei.webp": {
    "type": "image/webp",
    "etag": "\"314e-TNWYPSRTJ0cAiVhnFlBSxCPe9BM\"",
    "mtime": "2026-10-07T14:45:57.258Z",
    "size": 12622,
    "path": "../public/thumbnails/1791363635779-44yjura05ei.webp"
  },
  "/thumbnails/1791363817761-8md8wy2v15q.webp": {
    "type": "image/webp",
    "etag": "\"4b7e-uovpJK1QEaGI5hZPRX1T1iDiJdQ\"",
    "mtime": "2026-10-07T14:45:57.259Z",
    "size": 19326,
    "path": "../public/thumbnails/1791363817761-8md8wy2v15q.webp"
  },
  "/thumbnails/1791364188155-3d3emmjckkg.webp": {
    "type": "image/webp",
    "etag": "\"3c14-06sWJFtyve3MXlYXFoAWR+FaMfg\"",
    "mtime": "2026-10-07T14:45:57.264Z",
    "size": 15380,
    "path": "../public/thumbnails/1791364188155-3d3emmjckkg.webp"
  },
  "/thumbnails/1791363839591-afu6f9tqbxn.webp": {
    "type": "image/webp",
    "etag": "\"4c80-B2Gp/gPKS1XEFjd998GpCr7slX8\"",
    "mtime": "2026-10-07T14:45:57.261Z",
    "size": 19584,
    "path": "../public/thumbnails/1791363839591-afu6f9tqbxn.webp"
  },
  "/thumbnails/1791363884550-otcz1232qvm.webp": {
    "type": "image/webp",
    "etag": "\"3414-+Cjj+PvmYJOtikQ8mByAoYL+BCI\"",
    "mtime": "2026-10-07T14:45:57.263Z",
    "size": 13332,
    "path": "../public/thumbnails/1791363884550-otcz1232qvm.webp"
  },
  "/thumbnails/1791365297467-b1dptc71mv9.webp": {
    "type": "image/webp",
    "etag": "\"490a-CzyozPCCx7Psqh0IoRkkLArbQqA\"",
    "mtime": "2026-10-07T14:45:57.265Z",
    "size": 18698,
    "path": "../public/thumbnails/1791365297467-b1dptc71mv9.webp"
  },
  "/thumbnails/1791365312935-jxwx0865xya.webp": {
    "type": "image/webp",
    "etag": "\"5eb0-klbcXs2LgLIkFEClu3nGKrjxjJI\"",
    "mtime": "2026-10-07T14:45:57.267Z",
    "size": 24240,
    "path": "../public/thumbnails/1791365312935-jxwx0865xya.webp"
  },
  "/thumbnails/1791365325140-3hi8ecj0hj9.webp": {
    "type": "image/webp",
    "etag": "\"4a0c-XPR+K3a/PcBU8EMo7LQ5IiHkbI8\"",
    "mtime": "2026-10-07T14:45:57.270Z",
    "size": 18956,
    "path": "../public/thumbnails/1791365325140-3hi8ecj0hj9.webp"
  },
  "/thumbnails/1791365584178-n40gdw9885d.webp": {
    "type": "image/webp",
    "etag": "\"490a-CzyozPCCx7Psqh0IoRkkLArbQqA\"",
    "mtime": "2026-10-07T14:45:57.269Z",
    "size": 18698,
    "path": "../public/thumbnails/1791365584178-n40gdw9885d.webp"
  },
  "/thumbnails/1791368261710-snm5n8lytlr.webp": {
    "type": "image/webp",
    "etag": "\"21d6-zC4Ld6HEnAh7Cz04YXiw/0OKQIg\"",
    "mtime": "2026-10-07T14:45:57.272Z",
    "size": 8662,
    "path": "../public/thumbnails/1791368261710-snm5n8lytlr.webp"
  },
  "/thumbnails/1791368312299-zfdxc5svjsj.webp": {
    "type": "image/webp",
    "etag": "\"206c-MKFyd20fTvxcFE+fUdymx/jrVDM\"",
    "mtime": "2026-10-07T14:45:57.271Z",
    "size": 8300,
    "path": "../public/thumbnails/1791368312299-zfdxc5svjsj.webp"
  },
  "/images/1788771876173.jpg": {
    "type": "image/jpeg",
    "etag": "\"931e75-DD6Thyvh8QcauNr14Sg7UYeEPhM\"",
    "mtime": "2026-10-07T14:45:57.288Z",
    "size": 9641589,
    "path": "../public/images/1788771876173.jpg"
  },
  "/thumbnails/1791369505710-lftwo6im5ii.webp": {
    "type": "image/webp",
    "etag": "\"5eae-8kyq/50EjS6FLkb4OJ3gy9CZH9c\"",
    "mtime": "2026-10-07T14:45:57.274Z",
    "size": 24238,
    "path": "../public/thumbnails/1791369505710-lftwo6im5ii.webp"
  },
  "/thumbnails/1791369541302-k5x54val0l.webp": {
    "type": "image/webp",
    "etag": "\"54d2-JdQl6yyf0w44t4NAqzooVcqpHP0\"",
    "mtime": "2026-10-07T14:45:57.277Z",
    "size": 21714,
    "path": "../public/thumbnails/1791369541302-k5x54val0l.webp"
  },
  "/thumbnails/1791370838724-8dg485jluu8.webp": {
    "type": "image/webp",
    "etag": "\"56e6-Yv2qTKl0wISFFeJAxwge/wCMgRI\"",
    "mtime": "2026-10-07T14:45:57.276Z",
    "size": 22246,
    "path": "../public/thumbnails/1791370838724-8dg485jluu8.webp"
  },
  "/thumbnails/1791370865551-z0836imf9m.webp": {
    "type": "image/webp",
    "etag": "\"5ec2-AkpImFLHAaQMOQLjPCwTRwW1Fpg\"",
    "mtime": "2026-10-07T14:45:57.279Z",
    "size": 24258,
    "path": "../public/thumbnails/1791370865551-z0836imf9m.webp"
  },
  "/thumbnails/1791370873981-zy2t135moj.webp": {
    "type": "image/webp",
    "etag": "\"4236-xxtim6gR5Y10Y4wXCBIjdE7xEC0\"",
    "mtime": "2026-10-07T14:45:57.280Z",
    "size": 16950,
    "path": "../public/thumbnails/1791370873981-zy2t135moj.webp"
  },
  "/thumbnails/1791372743999-mc9nfi1vhz.webp": {
    "type": "image/webp",
    "etag": "\"1fec-OsxMpfpd9iKr3cY4ybg7SaqrhJs\"",
    "mtime": "2026-10-07T14:45:57.281Z",
    "size": 8172,
    "path": "../public/thumbnails/1791372743999-mc9nfi1vhz.webp"
  },
  "/thumbnails/1791370883431-47q760webjq.webp": {
    "type": "image/webp",
    "etag": "\"4f48-G/qJ/6qjhKUIEa9wKyW3gJEdeM4\"",
    "mtime": "2026-10-07T14:45:57.280Z",
    "size": 20296,
    "path": "../public/thumbnails/1791370883431-47q760webjq.webp"
  },
  "/thumbnails/1791372759191-pm63036bo4h.webp": {
    "type": "image/webp",
    "etag": "\"2148-YmGPz3H7FL5g7RneNqT5tofWfxg\"",
    "mtime": "2026-10-07T14:45:57.282Z",
    "size": 8520,
    "path": "../public/thumbnails/1791372759191-pm63036bo4h.webp"
  },
  "/thumbnails/1791372766244-yirii93ny8e.webp": {
    "type": "image/webp",
    "etag": "\"23a4-dIbDzhTryoIDAY5kq7G+6/L79kA\"",
    "mtime": "2026-10-07T14:45:57.284Z",
    "size": 9124,
    "path": "../public/thumbnails/1791372766244-yirii93ny8e.webp"
  },
  "/thumbnails/1791372780871-9ozia4yzmfj.webp": {
    "type": "image/webp",
    "etag": "\"22b4-7Usy4T+7fXM9ibT/5CaqkReJc3Q\"",
    "mtime": "2026-10-07T14:45:57.283Z",
    "size": 8884,
    "path": "../public/thumbnails/1791372780871-9ozia4yzmfj.webp"
  },
  "/thumbnails/1791374679999-qb06gn55i3r.webp": {
    "type": "image/webp",
    "etag": "\"409c-5gfugNSWQ65ouM+w7xCb/IwFc/M\"",
    "mtime": "2026-10-07T14:45:57.284Z",
    "size": 16540,
    "path": "../public/thumbnails/1791374679999-qb06gn55i3r.webp"
  },
  "/thumbnails/1791374687320-qp74k2s456.webp": {
    "type": "image/webp",
    "etag": "\"2a38-xNHwXcS6UOrwgvJCKDLKRoosbR4\"",
    "mtime": "2026-10-07T14:45:57.286Z",
    "size": 10808,
    "path": "../public/thumbnails/1791374687320-qp74k2s456.webp"
  },
  "/thumbnails/1791374723872-ve0sy9rwb9p.webp": {
    "type": "image/webp",
    "etag": "\"24ae-FO9S4nzYbKWPWf0OgUTwyOzdAek\"",
    "mtime": "2026-10-07T14:45:57.286Z",
    "size": 9390,
    "path": "../public/thumbnails/1791374723872-ve0sy9rwb9p.webp"
  },
  "/thumbnails/1791374750110-9o5fa6w6uhl.webp": {
    "type": "image/webp",
    "etag": "\"24ae-FO9S4nzYbKWPWf0OgUTwyOzdAek\"",
    "mtime": "2026-10-07T14:45:57.286Z",
    "size": 9390,
    "path": "../public/thumbnails/1791374750110-9o5fa6w6uhl.webp"
  },
  "/uploads/1790824871428-qk6b0x0xjif.jpg": {
    "type": "image/jpeg",
    "etag": "\"c886e-SSNpOHYSg/jfiA0Lb99j9VeDjqo\"",
    "mtime": "2026-10-07T14:45:57.304Z",
    "size": 821358,
    "path": "../public/uploads/1790824871428-qk6b0x0xjif.jpg"
  },
  "/uploads/1790824855329-skbl9vjrscr.jpg": {
    "type": "image/jpeg",
    "etag": "\"c886e-SSNpOHYSg/jfiA0Lb99j9VeDjqo\"",
    "mtime": "2026-10-07T14:45:57.302Z",
    "size": 821358,
    "path": "../public/uploads/1790824855329-skbl9vjrscr.jpg"
  },
  "/uploads/1790825393143-7qjndefvpbc.jpg": {
    "type": "image/jpeg",
    "etag": "\"c886e-SSNpOHYSg/jfiA0Lb99j9VeDjqo\"",
    "mtime": "2026-10-07T14:45:57.313Z",
    "size": 821358,
    "path": "../public/uploads/1790825393143-7qjndefvpbc.jpg"
  },
  "/uploads/1790786117747-p560183vk8.jpg": {
    "type": "image/jpeg",
    "etag": "\"51bcc2-AbBC2mU2wlb1AQD/doa28QhLWms\"",
    "mtime": "2026-10-07T14:45:57.294Z",
    "size": 5356738,
    "path": "../public/uploads/1790786117747-p560183vk8.jpg"
  },
  "/uploads/1790786104741-10gvng0k86b.jpg": {
    "type": "image/jpeg",
    "etag": "\"598583-7PIqL0Wb1CNW2WPW33ln/SFYpqw\"",
    "mtime": "2026-10-07T14:45:57.153Z",
    "size": 5866883,
    "path": "../public/uploads/1790786104741-10gvng0k86b.jpg"
  },
  "/uploads/1790824297084-1d2tbw5trnb.jpg": {
    "type": "image/jpeg",
    "etag": "\"51bcc2-AbBC2mU2wlb1AQD/doa28QhLWms\"",
    "mtime": "2026-10-07T14:45:57.340Z",
    "size": 5356738,
    "path": "../public/uploads/1790824297084-1d2tbw5trnb.jpg"
  },
  "/uploads/1790824250331-qio05vkbfmp.jpg": {
    "type": "image/jpeg",
    "etag": "\"51bcc2-AbBC2mU2wlb1AQD/doa28QhLWms\"",
    "mtime": "2026-10-07T14:45:57.329Z",
    "size": 5356738,
    "path": "../public/uploads/1790824250331-qio05vkbfmp.jpg"
  },
  "/uploads/1790786456939-kcpnrw9zkiq.jpg": {
    "type": "image/jpeg",
    "etag": "\"598583-7PIqL0Wb1CNW2WPW33ln/SFYpqw\"",
    "mtime": "2026-10-07T14:45:57.294Z",
    "size": 5866883,
    "path": "../public/uploads/1790786456939-kcpnrw9zkiq.jpg"
  },
  "/uploads/1791363635779-44yjura05ei.jpg": {
    "type": "image/jpeg",
    "etag": "\"59db37-uJVl+KHnIYe8WUCLrTioqFlLEjY\"",
    "mtime": "2026-10-07T14:45:57.770Z",
    "size": 5888823,
    "path": "../public/uploads/1791363635779-44yjura05ei.jpg"
  },
  "/uploads/1790786504095-y04xqsn9269.jpg": {
    "type": "image/jpeg",
    "etag": "\"598583-7PIqL0Wb1CNW2WPW33ln/SFYpqw\"",
    "mtime": "2026-10-07T14:45:57.294Z",
    "size": 5866883,
    "path": "../public/uploads/1790786504095-y04xqsn9269.jpg"
  },
  "/uploads/1790829740508-og9k4fih94.jpg": {
    "type": "image/jpeg",
    "etag": "\"13cc310-QhsycnNt/pfx5TRuUB2lDz61iTM\"",
    "mtime": "2026-10-07T14:45:57.799Z",
    "size": 20759312,
    "path": "../public/uploads/1790829740508-og9k4fih94.jpg"
  },
  "/uploads/1790828936346-8s7vag87rvm.jpg": {
    "type": "image/jpeg",
    "etag": "\"1531dc3-L1DMTHlu5x38xD5FnMb2wMRqtFs\"",
    "mtime": "2026-10-07T14:45:57.610Z",
    "size": 22224323,
    "path": "../public/uploads/1790828936346-8s7vag87rvm.jpg"
  },
  "/uploads/1790828283399-ywq1ijooop8.jpg": {
    "type": "image/jpeg",
    "etag": "\"15275de-6vV3sKO+Z7eGzMi2H5pIaeJ2D4M\"",
    "mtime": "2026-10-07T14:45:57.621Z",
    "size": 22181342,
    "path": "../public/uploads/1790828283399-ywq1ijooop8.jpg"
  },
  "/uploads/1790829749494-otvj53ud2l.jpg": {
    "type": "image/jpeg",
    "etag": "\"15e6cb1-n4QMg7uWISiVJutuAvshBu/fXBw\"",
    "mtime": "2026-10-07T14:45:57.952Z",
    "size": 22965425,
    "path": "../public/uploads/1790829749494-otvj53ud2l.jpg"
  },
  "/uploads/1791368312299-zfdxc5svjsj.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b83a4e-0sMHR/sJPcmo76sYI8/IXh/89Nw\"",
    "mtime": "2026-10-07T14:45:59.113Z",
    "size": 28850766,
    "path": "../public/uploads/1791368312299-zfdxc5svjsj.jpg"
  },
  "/uploads/1790833687282-w5klks8uzd.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e09726-ixuWhyJ4djcV8mxYwVLytm/50Xo\"",
    "mtime": "2026-10-07T14:45:57.952Z",
    "size": 31495974,
    "path": "../public/uploads/1790833687282-w5klks8uzd.jpg"
  },
  "/uploads/1791368261710-snm5n8lytlr.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cdd140-PSC63AcX1UvmP5qcSg3sriiIuv0\"",
    "mtime": "2026-10-07T14:45:59.090Z",
    "size": 30265664,
    "path": "../public/uploads/1791368261710-snm5n8lytlr.jpg"
  },
  "/uploads/1791372759191-pm63036bo4h.jpg": {
    "type": "image/jpeg",
    "etag": "\"1918efa-X0prFYm29WqKX9ecffzb30ySRZo\"",
    "mtime": "2026-10-07T14:46:00.064Z",
    "size": 26316538,
    "path": "../public/uploads/1791372759191-pm63036bo4h.jpg"
  },
  "/uploads/1790826067720-i8tcqjgqf6.jpg": {
    "type": "image/jpeg",
    "etag": "\"200cd0f-Bf1AYgTADXtRd3FjbgQGY1l1vMI\"",
    "mtime": "2026-10-07T14:45:57.724Z",
    "size": 33606927,
    "path": "../public/uploads/1790826067720-i8tcqjgqf6.jpg"
  },
  "/uploads/1790826055784-cr1jlml4xur.jpg": {
    "type": "image/jpeg",
    "etag": "\"200cd0f-Bf1AYgTADXtRd3FjbgQGY1l1vMI\"",
    "mtime": "2026-10-07T14:45:57.689Z",
    "size": 33606927,
    "path": "../public/uploads/1790826055784-cr1jlml4xur.jpg"
  },
  "/uploads/1791363884550-otcz1232qvm.jpg": {
    "type": "image/jpeg",
    "etag": "\"207405a-zpZYe3UZ4eYXMoynV0IaLlYPZEs\"",
    "mtime": "2026-10-07T14:45:58.140Z",
    "size": 34029658,
    "path": "../public/uploads/1791363884550-otcz1232qvm.jpg"
  },
  "/icons/navigation/location-1.svg": {
    "type": "image/svg+xml",
    "etag": "\"121-k0hQi6hJN9Re/Gf7lO0ojVjw+TY\"",
    "mtime": "2026-10-07T14:46:00.295Z",
    "size": 289,
    "path": "../public/icons/navigation/location-1.svg"
  },
  "/icons/navigation/location-2.svg": {
    "type": "image/svg+xml",
    "etag": "\"13d-M54Mq+GRC/ETOp4nx273XHPE6XU\"",
    "mtime": "2026-10-07T14:46:00.294Z",
    "size": 317,
    "path": "../public/icons/navigation/location-2.svg"
  },
  "/icons/navigation/navigation-type-1.png": {
    "type": "image/png",
    "etag": "\"412cf-ZeBuXwAcn6lNQjI4fX1FF/XjFrY\"",
    "mtime": "2026-10-07T14:46:00.296Z",
    "size": 266959,
    "path": "../public/icons/navigation/navigation-type-1.png"
  },
  "/icons/navigation/navigation-type-2.png": {
    "type": "image/png",
    "etag": "\"42e40-LU4cxvljK+9D2VbAauw70N0fK9U\"",
    "mtime": "2026-10-07T14:46:00.296Z",
    "size": 273984,
    "path": "../public/icons/navigation/navigation-type-2.png"
  },
  "/uploads/1791374687320-qp74k2s456.jpg": {
    "type": "image/jpeg",
    "etag": "\"a845f3-VJKqQ/FuIQtB4PiXMA7V1+YpNiM\"",
    "mtime": "2026-10-07T14:45:59.958Z",
    "size": 11027955,
    "path": "../public/uploads/1791374687320-qp74k2s456.jpg"
  },
  "/uploads/1791372743999-mc9nfi1vhz.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b1878a-f82H6a1JE2A9lTr/uXj1zQ/wEuE\"",
    "mtime": "2026-10-07T14:45:59.821Z",
    "size": 28411786,
    "path": "../public/uploads/1791372743999-mc9nfi1vhz.jpg"
  },
  "/uploads/1791374679999-qb06gn55i3r.jpg": {
    "type": "image/jpeg",
    "etag": "\"bba689-YQ8rKexyNWhakrrN8EfpWPG3Boo\"",
    "mtime": "2026-10-07T14:45:59.969Z",
    "size": 12297865,
    "path": "../public/uploads/1791374679999-qb06gn55i3r.jpg"
  },
  "/images/song-van/SOURCES.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"437-H4G/oi+ftWoudRFK5pRpyHiQtiY\"",
    "mtime": "2026-10-07T14:45:57.150Z",
    "size": 1079,
    "path": "../public/images/song-van/SOURCES.md"
  },
  "/images/song-van/aerial-view.jpg": {
    "type": "image/jpeg",
    "etag": "\"46f26-GTf07fdP2imWtVh4YrYreB0knsA\"",
    "mtime": "2026-10-07T14:46:00.013Z",
    "size": 290598,
    "path": "../public/images/song-van/aerial-view.jpg"
  },
  "/images/song-van/bong-nui.jpg": {
    "type": "image/jpeg",
    "etag": "\"35e53-NxCZLTFhbRu3joe/fmxmy6Cwv8U\"",
    "mtime": "2026-10-07T14:46:00.016Z",
    "size": 220755,
    "path": "../public/images/song-van/bong-nui.jpg"
  },
  "/uploads/1791364188155-3d3emmjckkg.jpg": {
    "type": "image/jpeg",
    "etag": "\"251f367-CxOrG4hhqVAYbxWp6SAA1gpBBIc\"",
    "mtime": "2026-10-07T14:45:58.290Z",
    "size": 38925159,
    "path": "../public/uploads/1791364188155-3d3emmjckkg.jpg"
  },
  "/images/song-van/exhibition-visitors.jpg": {
    "type": "image/jpeg",
    "etag": "\"9cdb-X/xTDpveholyvcJ+6yewgJYDLxs\"",
    "mtime": "2026-10-07T14:46:00.018Z",
    "size": 40155,
    "path": "../public/images/song-van/exhibition-visitors.jpg"
  },
  "/images/song-van/gallery-interior.jpg": {
    "type": "image/jpeg",
    "etag": "\"8831-wLSyR5DcEkwvbgYGvsCPNF5IqHE\"",
    "mtime": "2026-10-07T14:46:00.020Z",
    "size": 34865,
    "path": "../public/images/song-van/gallery-interior.jpg"
  },
  "/images/song-van/le-thi-hien.jpg": {
    "type": "image/jpeg",
    "etag": "\"36645-k4nuSoKUuCGlC4JbEUeO/U2ljXU\"",
    "mtime": "2026-10-07T14:46:00.024Z",
    "size": 222789,
    "path": "../public/images/song-van/le-thi-hien.jpg"
  },
  "/images/trbay1/1788771876074.jpg": {
    "type": "image/jpeg",
    "etag": "\"50d124-1D0OKNV/O5W6U+DvoxQfNWoM8x0\"",
    "mtime": "2026-10-07T14:45:57.179Z",
    "size": 5296420,
    "path": "../public/images/trbay1/1788771876074.jpg"
  },
  "/images/song-van/luong-trinh.jpg": {
    "type": "image/jpeg",
    "etag": "\"3bb6b-A5oYF/4nr9RG6DfOUfDRUHdr3KU\"",
    "mtime": "2026-10-07T14:46:00.028Z",
    "size": 244587,
    "path": "../public/images/song-van/luong-trinh.jpg"
  },
  "/images/trbay1/1788771876090.jpg": {
    "type": "image/jpeg",
    "etag": "\"51e00c-D6XkmlKiqXe61ynlKy2hEvYFtqA\"",
    "mtime": "2026-10-07T14:46:00.118Z",
    "size": 5365772,
    "path": "../public/images/trbay1/1788771876090.jpg"
  },
  "/images/song-van/waterside-sculpture.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e6ab-aMwOhgsfJ0caPode3ArwbTBPnDs\"",
    "mtime": "2026-10-07T14:46:00.032Z",
    "size": 255659,
    "path": "../public/images/song-van/waterside-sculpture.jpg"
  },
  "/images/song-van/sculpture-garden.jpg": {
    "type": "image/jpeg",
    "etag": "\"7540e-olTh4PikgMlbgIHltXfZaKcLNtY\"",
    "mtime": "2026-10-07T14:46:00.037Z",
    "size": 480270,
    "path": "../public/images/song-van/sculpture-garden.jpg"
  },
  "/uploads/1791363817761-8md8wy2v15q.jpg": {
    "type": "image/jpeg",
    "etag": "\"284f6b6-g7wbllpl4I1Xsfd+uxutNxKfFfg\"",
    "mtime": "2026-10-07T14:45:58.166Z",
    "size": 42268342,
    "path": "../public/uploads/1791363817761-8md8wy2v15q.jpg"
  },
  "/images/trbay1/1788771876098.jpg": {
    "type": "image/jpeg",
    "etag": "\"501d8b-f5zfQ2OCSMutWo8xU6HYyNa5+ho\"",
    "mtime": "2026-10-07T14:46:00.157Z",
    "size": 5250443,
    "path": "../public/images/trbay1/1788771876098.jpg"
  },
  "/uploads/1791363839591-afu6f9tqbxn.jpg": {
    "type": "image/jpeg",
    "etag": "\"289f5c7-/g9dku83Aqkitn+2psnxWrx0m9o\"",
    "mtime": "2026-10-07T14:45:58.320Z",
    "size": 42595783,
    "path": "../public/uploads/1791363839591-afu6f9tqbxn.jpg"
  },
  "/uploads/1791365297467-b1dptc71mv9.jpg": {
    "type": "image/jpeg",
    "etag": "\"28bdcf1-+4JXURFAOYbKD3FrA902PhJxaJU\"",
    "mtime": "2026-10-07T14:45:58.723Z",
    "size": 42720497,
    "path": "../public/uploads/1791365297467-b1dptc71mv9.jpg"
  },
  "/uploads/1791374723872-ve0sy9rwb9p.jpg": {
    "type": "image/jpeg",
    "etag": "\"9bc943-BO+/qJkuood8D6/XSIBoRwNgbEA\"",
    "mtime": "2026-10-07T14:46:00.008Z",
    "size": 10209603,
    "path": "../public/uploads/1791374723872-ve0sy9rwb9p.jpg"
  },
  "/uploads/1791370838724-8dg485jluu8.jpg": {
    "type": "image/jpeg",
    "etag": "\"231b59d-JIjDnf72lrXKiY36AkfhfVYM8gw\"",
    "mtime": "2026-10-07T14:45:59.441Z",
    "size": 36812189,
    "path": "../public/uploads/1791370838724-8dg485jluu8.jpg"
  },
  "/uploads/1791365584178-n40gdw9885d.jpg": {
    "type": "image/jpeg",
    "etag": "\"28bdcf1-+4JXURFAOYbKD3FrA902PhJxaJU\"",
    "mtime": "2026-10-07T14:45:58.984Z",
    "size": 42720497,
    "path": "../public/uploads/1791365584178-n40gdw9885d.jpg"
  },
  "/uploads/1791370873981-zy2t135moj.jpg": {
    "type": "image/jpeg",
    "etag": "\"2298c3a-YGKD5KwudZLxIPep+7mzqqL+Ws4\"",
    "mtime": "2026-10-07T14:45:59.816Z",
    "size": 36277306,
    "path": "../public/uploads/1791370873981-zy2t135moj.jpg"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-MgT/xeVigCPDihmhDZkpnvZREUo\"",
    "mtime": "2026-10-07T14:45:57.113Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/uploads/1791374750110-9o5fa6w6uhl.jpg": {
    "type": "image/jpeg",
    "etag": "\"9bc943-BO+/qJkuood8D6/XSIBoRwNgbEA\"",
    "mtime": "2026-10-07T14:46:00.054Z",
    "size": 10209603,
    "path": "../public/uploads/1791374750110-9o5fa6w6uhl.jpg"
  },
  "/thumbnails/trang-bay/1788771876042.jpg": {
    "type": "image/jpeg",
    "etag": "\"79b0-L095VXGqbZK/KFCuS81g1bbO8Kw\"",
    "mtime": "2026-10-07T14:45:57.180Z",
    "size": 31152,
    "path": "../public/thumbnails/trang-bay/1788771876042.jpg"
  },
  "/thumbnails/trang-bay/1788771876050.jpg": {
    "type": "image/jpeg",
    "etag": "\"9034-rVWDOL26WoHykmds6Ojl+y2Ky/U\"",
    "mtime": "2026-10-07T14:46:00.288Z",
    "size": 36916,
    "path": "../public/thumbnails/trang-bay/1788771876050.jpg"
  },
  "/uploads/1791369505710-lftwo6im5ii.jpg": {
    "type": "image/jpeg",
    "etag": "\"27808f8-pHJzSeU04DN8bMVcIxBjb6gBtCM\"",
    "mtime": "2026-10-07T14:45:59.466Z",
    "size": 41421048,
    "path": "../public/uploads/1791369505710-lftwo6im5ii.jpg"
  },
  "/uploads/1791365325140-3hi8ecj0hj9.jpg": {
    "type": "image/jpeg",
    "etag": "\"299743d-JNqQe0xkV0DlKFCiPXkLY61za5U\"",
    "mtime": "2026-10-07T14:45:58.654Z",
    "size": 43611197,
    "path": "../public/uploads/1791365325140-3hi8ecj0hj9.jpg"
  },
  "/thumbnails/trang-bay/1788771876058.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ad8-nm0V4lunFPeIP8eJt2lm2A7cDdo\"",
    "mtime": "2026-10-07T14:46:00.289Z",
    "size": 35544,
    "path": "../public/thumbnails/trang-bay/1788771876058.jpg"
  },
  "/images/trbay1/1788771876114.jpg": {
    "type": "image/jpeg",
    "etag": "\"76c4f4-1KNHc+ltwjEtYxiTEaCgU/TSvEo\"",
    "mtime": "2026-10-07T14:46:00.285Z",
    "size": 7783668,
    "path": "../public/images/trbay1/1788771876114.jpg"
  },
  "/images/trbay1/1788771876106.jpg": {
    "type": "image/jpeg",
    "etag": "\"7abbeb-alb1Apj0vX+eMC1uKAHDO2yLZdc\"",
    "mtime": "2026-10-07T14:46:00.285Z",
    "size": 8043499,
    "path": "../public/images/trbay1/1788771876106.jpg"
  },
  "/uploads/1791369541302-k5x54val0l.jpg": {
    "type": "image/jpeg",
    "etag": "\"24d248e-u3N3rmBWUmYRVpVKSXqIVFsmkPM\"",
    "mtime": "2026-10-07T14:45:59.519Z",
    "size": 38610062,
    "path": "../public/uploads/1791369541302-k5x54val0l.jpg"
  },
  "/thumbnails/trang-bay/1788771876067.jpg": {
    "type": "image/jpeg",
    "etag": "\"aa5f-jUyWvVP1cXQ/INGiSZved2A98gA\"",
    "mtime": "2026-10-07T14:46:00.290Z",
    "size": 43615,
    "path": "../public/thumbnails/trang-bay/1788771876067.jpg"
  },
  "/thumbnails/trang-bay/1788771876074.jpg": {
    "type": "image/jpeg",
    "etag": "\"7a3f-MYF65UCLqMIESwlP8ypIwgr7EYE\"",
    "mtime": "2026-10-07T14:46:00.291Z",
    "size": 31295,
    "path": "../public/thumbnails/trang-bay/1788771876074.jpg"
  },
  "/thumbnails/trang-bay/1788771876090.jpg": {
    "type": "image/jpeg",
    "etag": "\"78f5-m3DDiSF7cbQQN2zjeGqPvmwMhUA\"",
    "mtime": "2026-10-07T14:46:00.290Z",
    "size": 30965,
    "path": "../public/thumbnails/trang-bay/1788771876090.jpg"
  },
  "/thumbnails/trang-bay/1788771876098.jpg": {
    "type": "image/jpeg",
    "etag": "\"72de-X2fNT7DKg8ReMF3aZ+CzuyPYfcs\"",
    "mtime": "2026-10-07T14:46:00.291Z",
    "size": 29406,
    "path": "../public/thumbnails/trang-bay/1788771876098.jpg"
  },
  "/thumbnails/trang-bay/1788771876106.jpg": {
    "type": "image/jpeg",
    "etag": "\"10537-hR7cbuwVdSiXTU+3YTd87t+GlJI\"",
    "mtime": "2026-10-07T14:46:00.291Z",
    "size": 66871,
    "path": "../public/thumbnails/trang-bay/1788771876106.jpg"
  },
  "/thumbnails/trang-bay/1788771876114.jpg": {
    "type": "image/jpeg",
    "etag": "\"f037-Z9WRv2KiGHZ3RnQVo2nQRdKQFVg\"",
    "mtime": "2026-10-07T14:46:00.292Z",
    "size": 61495,
    "path": "../public/thumbnails/trang-bay/1788771876114.jpg"
  },
  "/thumbnails/trang-bay/1788771876123.jpg": {
    "type": "image/jpeg",
    "etag": "\"bb69-1zJcG7/Ty8txdfpEITpOpH+7TYU\"",
    "mtime": "2026-10-07T14:46:00.292Z",
    "size": 47977,
    "path": "../public/thumbnails/trang-bay/1788771876123.jpg"
  },
  "/thumbnails/trang-bay/1788771876132.jpg": {
    "type": "image/jpeg",
    "etag": "\"93f8-hxinkofoiCQJr+r7258pLaPgeBU\"",
    "mtime": "2026-10-07T14:46:00.292Z",
    "size": 37880,
    "path": "../public/thumbnails/trang-bay/1788771876132.jpg"
  },
  "/thumbnails/trang-bay/1788771876143.jpg": {
    "type": "image/jpeg",
    "etag": "\"b7d3-YjDE4JOyuRNdW+JT1VtRFVgdFq8\"",
    "mtime": "2026-10-07T14:46:00.294Z",
    "size": 47059,
    "path": "../public/thumbnails/trang-bay/1788771876143.jpg"
  },
  "/thumbnails/trang-bay/1788771876162.jpg": {
    "type": "image/jpeg",
    "etag": "\"c578-tr23daRFGHmc1DANgDFPnIZfX3Q\"",
    "mtime": "2026-10-07T14:46:00.293Z",
    "size": 50552,
    "path": "../public/thumbnails/trang-bay/1788771876162.jpg"
  },
  "/uploads/1791370883431-47q760webjq.jpg": {
    "type": "image/jpeg",
    "etag": "\"2498545-93fgO5hnr9Q94NkLQIPxhStJ+YI\"",
    "mtime": "2026-10-07T14:45:59.834Z",
    "size": 38372677,
    "path": "../public/uploads/1791370883431-47q760webjq.jpg"
  },
  "/thumbnails/trang-bay/1788771876173.jpg": {
    "type": "image/jpeg",
    "etag": "\"112e8-rBsIlJ+jqXADhxfd2ZJVXexkPQo\"",
    "mtime": "2026-10-07T14:46:00.293Z",
    "size": 70376,
    "path": "../public/thumbnails/trang-bay/1788771876173.jpg"
  },
  "/thumbnails/trang-bay/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg": {
    "type": "image/jpeg",
    "etag": "\"877d-iisTR+82iYwvmM64Mp3dzHwuJHs\"",
    "mtime": "2026-10-07T14:46:00.294Z",
    "size": 34685,
    "path": "../public/thumbnails/trang-bay/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg"
  },
  "/thumbnails/trang-bay/1788771876183.jpg": {
    "type": "image/jpeg",
    "etag": "\"ad4e-8OyX7QoZvuPl+KPzWBg7rg8t/rk\"",
    "mtime": "2026-10-07T14:46:00.294Z",
    "size": 44366,
    "path": "../public/thumbnails/trang-bay/1788771876183.jpg"
  },
  "/images/trbay2/1788771876042.jpg": {
    "type": "image/jpeg",
    "etag": "\"56323e-25fewooIpELwurr+AibDKN8BNes\"",
    "mtime": "2026-10-07T14:45:57.179Z",
    "size": 5648958,
    "path": "../public/images/trbay2/1788771876042.jpg"
  },
  "/_nuxt/builds/meta/c104de0a-8002-494e-ab43-d2e9c12f3554.json": {
    "type": "application/json",
    "etag": "\"58-zySsS8apWqNtmttOaxbP6cEbi7o\"",
    "mtime": "2026-10-07T14:45:57.109Z",
    "size": 88,
    "path": "../public/_nuxt/builds/meta/c104de0a-8002-494e-ab43-d2e9c12f3554.json"
  },
  "/uploads/1791370865551-z0836imf9m.jpg": {
    "type": "image/jpeg",
    "etag": "\"26fb6c9-h2E0v3QHrae2Cvhs5Um2mNNkzKs\"",
    "mtime": "2026-10-07T14:45:59.531Z",
    "size": 40875721,
    "path": "../public/uploads/1791370865551-z0836imf9m.jpg"
  },
  "/images/trbay2/1788771876050.jpg": {
    "type": "image/jpeg",
    "etag": "\"5848b2-22goLLI852C2gmLrEJV5gu871x4\"",
    "mtime": "2026-10-07T14:46:00.076Z",
    "size": 5785778,
    "path": "../public/images/trbay2/1788771876050.jpg"
  },
  "/images/trbay3/1788771876025.jpg": {
    "type": "image/jpeg",
    "etag": "\"51bcc2-AbBC2mU2wlb1AQD/doa28QhLWms\"",
    "mtime": "2026-10-07T14:45:57.182Z",
    "size": 5356738,
    "path": "../public/images/trbay3/1788771876025.jpg"
  },
  "/images/trbay2/1788771876058.jpg": {
    "type": "image/jpeg",
    "etag": "\"59db37-uJVl+KHnIYe8WUCLrTioqFlLEjY\"",
    "mtime": "2026-10-07T14:46:00.093Z",
    "size": 5888823,
    "path": "../public/images/trbay2/1788771876058.jpg"
  },
  "/images/trbay3/1788771876033.jpg": {
    "type": "image/jpeg",
    "etag": "\"598583-7PIqL0Wb1CNW2WPW33ln/SFYpqw\"",
    "mtime": "2026-10-07T14:46:00.289Z",
    "size": 5866883,
    "path": "../public/images/trbay3/1788771876033.jpg"
  },
  "/uploads/audio/1790759242766-58jae6uqv0h.wav": {
    "type": "audio/wav",
    "etag": "\"3cf3ec-r2IG2gkMa08yBaxuL7PuP0VytXw\"",
    "mtime": "2026-10-07T14:45:57.182Z",
    "size": 3994604,
    "path": "../public/uploads/audio/1790759242766-58jae6uqv0h.wav"
  },
  "/images/trbay2/1788771876067.jpg": {
    "type": "image/jpeg",
    "etag": "\"73df74-wzFi0o2Pg0T8PRwbELwDJooVKUE\"",
    "mtime": "2026-10-07T14:46:00.122Z",
    "size": 7593844,
    "path": "../public/images/trbay2/1788771876067.jpg"
  },
  "/uploads/1791372766244-yirii93ny8e.jpg": {
    "type": "image/jpeg",
    "etag": "\"1c6581e-lDMANKomENKqfjIEBmgljd2Zetg\"",
    "mtime": "2026-10-07T14:46:00.293Z",
    "size": 29775902,
    "path": "../public/uploads/1791372766244-yirii93ny8e.jpg"
  },
  "/uploads/1791365312935-jxwx0865xya.jpg": {
    "type": "image/jpeg",
    "etag": "\"31545f4-aG3nS4ygE/AhlRtosrjZE+JGq+k\"",
    "mtime": "2026-10-07T14:45:58.990Z",
    "size": 51725812,
    "path": "../public/uploads/1791365312935-jxwx0865xya.jpg"
  },
  "/uploads/1791372780871-9ozia4yzmfj.jpg": {
    "type": "image/jpeg",
    "etag": "\"1da0435-AhR2lQ++PjgsQ58JdckkONLUAUg\"",
    "mtime": "2026-10-07T14:45:59.849Z",
    "size": 31065141,
    "path": "../public/uploads/1791372780871-9ozia4yzmfj.jpg"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _qee9ua = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _NurYPu = defineEventHandler((event) => {
  var _a;
  const url = (_a = event.node.req.url) != null ? _a : "";
  if (!url.startsWith("/api/admin")) return;
  const config = useRuntimeConfig();
  if (!config.enableAdmin) {
    throw createError$1({
      statusCode: 403,
      statusMessage: "Admin API b\u1ECB t\u1EAFt. Set ENABLE_ADMIN=true \u0111\u1EC3 k\xEDch ho\u1EA1t."
    });
  }
  if (config.adminKey) {
    const provided = getHeader(event, "x-admin-key");
    if (provided !== config.adminKey) {
      throw createError$1({
        statusCode: 401,
        statusMessage: "Thi\u1EBFu ho\u1EB7c sai X-Admin-Key header."
      });
    }
  }
});

const _SxA8c9 = defineEventHandler(() => {});

const _lazy_uLSXPe = () => import('../routes/api/admin/audio.post.mjs');
const _lazy_zdetgu = () => import('../routes/api/admin/media.delete.mjs');
const _lazy_xXCZDw = () => import('../routes/api/admin/media.post.mjs');
const _lazy_UuwSPz = () => import('../routes/api/admin/media/preview.get.mjs');
const _lazy_uaOLQC = () => import('../routes/api/admin/tours/_slug_.delete.mjs');
const _lazy_PGQEaE = () => import('../routes/api/admin/tours/_slug_.post.mjs');
const _lazy_VypIyW = () => import('../routes/api/admin/tours/_slug/scenes/_sceneId/markers.post.mjs');
const _lazy_1c_JYJ = () => import('../routes/api/admin/index.post.mjs');
const _lazy_rMCeiW = () => import('../routes/api/panorama/validate.post.mjs');
const _lazy_Cu4gt4 = () => import('../routes/api/places.get.mjs');
const _lazy_5853ui = () => import('../routes/api/places/_slug_.get.mjs');
const _lazy_exYNoq = () => import('../routes/api/tours.get.mjs');
const _lazy_K0uFYU = () => import('../routes/api/tours/_slug_.get.mjs');
const _lazy_nNil0X = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _qee9ua, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _NurYPu, lazy: false, middleware: true, method: undefined },
  { route: '/api/admin/audio', handler: _lazy_uLSXPe, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/media', handler: _lazy_zdetgu, lazy: true, middleware: false, method: "delete" },
  { route: '/api/admin/media', handler: _lazy_xXCZDw, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/media/preview', handler: _lazy_UuwSPz, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/tours/:slug', handler: _lazy_uaOLQC, lazy: true, middleware: false, method: "delete" },
  { route: '/api/admin/tours/:slug', handler: _lazy_PGQEaE, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/tours/:slug/scenes/:sceneId/markers', handler: _lazy_VypIyW, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/tours', handler: _lazy_1c_JYJ, lazy: true, middleware: false, method: "post" },
  { route: '/api/panorama/validate', handler: _lazy_rMCeiW, lazy: true, middleware: false, method: "post" },
  { route: '/api/places', handler: _lazy_Cu4gt4, lazy: true, middleware: false, method: "get" },
  { route: '/api/places/:slug', handler: _lazy_5853ui, lazy: true, middleware: false, method: "get" },
  { route: '/api/tours', handler: _lazy_exYNoq, lazy: true, middleware: false, method: "get" },
  { route: '/api/tours/:slug', handler: _lazy_K0uFYU, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_nNil0X, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: _SxA8c9, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nNil0X, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return C(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, createHooks as A, executeAsync as B, createDebugger as C, parseQuery as D, withTrailingSlash as E, withoutTrailingSlash as F, hash$1 as G, nodeServer as H, readBody as a, getRouterParam as b, createError$1 as c, defineEventHandler as d, setResponseStatus as e, getHeader as f, getQuery as g, encodePath as h, defineRenderHandler as i, joinRelativeURL as j, getRouteRules as k, getResponseStatusText as l, getResponseStatus as m, useNitroApp as n, decodePath as o, parseURL as p, hasProtocol as q, readMultipartFormData as r, sendRedirect as s, isScriptProtocol as t, useRuntimeConfig as u, joinURL as v, withQuery as w, sanitizeStatusCode as x, getContext as y, defu as z };;globalThis.__timing__.logEnd('Load chunks/nitro/nitro');
//# sourceMappingURL=nitro.mjs.map
