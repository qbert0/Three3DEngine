import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, getHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, readMultipartFormData, getResponseStatusText } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join, extname, basename, sep } from 'node:path';
import crypto$1, { createHash } from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { promises, mkdirSync, writeFileSync, existsSync, unlinkSync, readFileSync, readdirSync } from 'node:fs';
import { readFile, unlink } from 'node:fs/promises';
import sharp from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/sharp/dist/index.mjs';
import * as yaml from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/js-yaml/dist/js-yaml.mjs';
import Ajv from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ajv/dist/ajv.js';
import addFormats from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ajv-formats/dist/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, encodePath, joinRelativeURL } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ufo/dist/index.mjs';
import { renderToString } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/vue/server-renderer/index.mjs';
import destr, { destr as destr$1 } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unstorage/drivers/lru-cache.mjs';
import { digest, hash as hash$1 } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/radix3/dist/index.mjs';
import consola, { consola as consola$1 } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/errx/dist/index.mjs';
import { isVNode, isRef, toValue } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/vue/index.mjs';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unhead/dist/server.mjs';
import { DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unhead/dist/plugins.mjs';
import { walkResolver } from 'file:///run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"tours","dir":"/run/media/qbert/1C8099B8809998BA/codedao/view360/server/tours"},{"baseName":"server","dir":"/run/media/qbert/1C8099B8809998BA/codedao/view360/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
function normalizeFsKey (item) {
  const safe = item.replace(/[^\w.-]/g, '_');
  const prefix = safe.slice(0, 20);
  const hash = crypto$1.createHash('sha256').update(item).digest('hex');
  return `${prefix}-${hash}`
}

const _47run_47media_47qbert_471C8099B8809998BA_47codedao_47view360_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js = defineDriver(
  /**
   * @param {{ base?: string }} opts
   */
  (opts) => {
    const fs = fsDriver({ base: opts.base });
    const lru = lruCache({ max: 1000 });

    return {
      ...fs, // fall back to file system - only the bottom three methods are used in renderer
      async setItem (key, value, opts) {
        await Promise.all([
          fs.setItem?.(normalizeFsKey(key), value, opts),
          lru.setItem?.(key, value, opts),
        ]);
      },
      async hasItem (key, opts) {
        return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
      },
      async getItem (key, opts) {
        return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
      },
    }
  },
);

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/run/media/qbert/1C8099B8809998BA/codedao/view360","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/run/media/qbert/1C8099B8809998BA/codedao/view360/server","watchOptions":{"ignored":[null]}}));
storage.mount('cache:nuxt:payload', _47run_47media_47qbert_471C8099B8809998BA_47codedao_47view360_47node_modules_47_64nuxt_47nitro_45server_47dist_47runtime_47utils_47cache_45driver_46js({"driver":"/run/media/qbert/1C8099B8809998BA/codedao/view360/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js","base":"/run/media/qbert/1C8099B8809998BA/codedao/view360/.nuxt/cache/nuxt/payload"}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/run/media/qbert/1C8099B8809998BA/codedao/view360/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/run/media/qbert/1C8099B8809998BA/codedao/view360/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/run/media/qbert/1C8099B8809998BA/codedao/view360/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
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

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

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
    "buildId": "dev",
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
  createRouter({ routes: config.nitro.routeRules })
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
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
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
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
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

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e.data) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
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
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
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
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			
			errorObject.description = errorObject.message;
		}
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
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
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
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
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

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _q1ZScfGbj9qCMgFQOe8zWkedPEk9DBJBLIHVGM7K5V8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const rootDir = "/run/media/qbert/1C8099B8809998BA/codedao/view360";

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"},{"name":"description","content":"Khám phá Sông Vân Art Space tại Ninh Bình qua tour panorama 360° — nơi điêu khắc đá đương đại đối thoại với làng nghề Ninh Vân."}],"link":[{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;1,500&display=swap"}],"style":[],"script":[],"noscript":[],"title":"Sông Vân Art Space — Không gian nghệ thuật tại Ninh Bình"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _IUzsoUA93K60YASEe0I2h44TtPPB44dUuxIQoFr5XDQ = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			
			filename,
			
			stack: trace
		};
		
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _q1ZScfGbj9qCMgFQOe8zWkedPEk9DBJBLIHVGM7K5V8,
_IUzsoUA93K60YASEe0I2h44TtPPB44dUuxIQoFr5XDQ,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {};

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
      throw createError({ statusCode: 404 });
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
    throw createError({
      statusCode: 403,
      statusMessage: "Admin API b\u1ECB t\u1EAFt. Set ENABLE_ADMIN=true \u0111\u1EC3 k\xEDch ho\u1EA1t."
    });
  }
  if (config.adminKey) {
    const provided = getHeader(event, "x-admin-key");
    if (provided !== config.adminKey) {
      throw createError({
        statusCode: 401,
        statusMessage: "Thi\u1EBFu ho\u1EB7c sai X-Admin-Key header."
      });
    }
  }
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

function filterIslandProps(props) {
  if (!props) {
    return {};
  }
  const out = {};
  for (const key in props) {
    if (!key.startsWith("data-v-")) {
      out[key] = props[key];
    }
  }
  return out;
}
function computeIslandHash(name, filteredProps, context, source) {
  return hash$1([name, filteredProps, context, source]).replace(/[-_]/g, "");
}

const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
  disableCapoSorting: false,
  plugins: [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin],
};

function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) {
		return encodePath(path);
	}
	return encodePath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function createSSRContext(event) {
	const url = encodeEventPath(event.path);
	const ssrContext = {
		url,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => Promise.resolve().then(function () { return server; }).then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => Promise.resolve().then(function () { return client_manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);

const getSSRRenderer = lazyCachedFunction(async () => {
	
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	
	const precomputed = undefined ;
	
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		
		
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});

const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			return APP_ROOT_OPEN_TAG + r + APP_ROOT_CLOSE_TAG;
		}
	});
	
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);

function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") {
			return {};
		}
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	
	
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) {
			throw createError({
				statusCode: response.statusCode,
				statusMessage: response.statusMessage
			});
		}
		return returnIslandResponse(event, response);
	}
	
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			
			
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	
	islandHead.link ||= [];
	islandHead.style ||= [];
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) {
		setResponseHeader(event, header, response.headers[header]);
	}
	if (response.statusCode) {
		setResponseStatus(event, response.statusCode, response.statusMessage);
	}
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	const rawProps = destr$1(rawContext?.props) || {};
	const filteredProps = filterIslandProps(rawProps);
	
	
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) {
			if (key !== "props") {
				clientContext[key] = rawContext[key];
			}
		}
	}
	
	
	const expectedHash = computeIslandHash(componentName, filteredProps, clientContext, undefined);
	if (!hashId || hashId !== expectedHash) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request hash"
		});
	}
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: rawProps,
		slots: {},
		components: {}
	};
}

const _lazy_uLSXPe = () => Promise.resolve().then(function () { return audio_post$1; });
const _lazy_zdetgu = () => Promise.resolve().then(function () { return media_delete$1; });
const _lazy_xXCZDw = () => Promise.resolve().then(function () { return media_post$1; });
const _lazy_UuwSPz = () => Promise.resolve().then(function () { return preview_get$1; });
const _lazy_uaOLQC = () => Promise.resolve().then(function () { return _slug__delete$1; });
const _lazy_PGQEaE = () => Promise.resolve().then(function () { return _slug__post$1; });
const _lazy_VypIyW = () => Promise.resolve().then(function () { return markers_post$1; });
const _lazy_1c_JYJ = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_rMCeiW = () => Promise.resolve().then(function () { return validate_post$1; });
const _lazy_Cu4gt4 = () => Promise.resolve().then(function () { return places_get$1; });
const _lazy_5853ui = () => Promise.resolve().then(function () { return _slug__get$3; });
const _lazy_exYNoq = () => Promise.resolve().then(function () { return tours_get$1; });
const _lazy_K0uFYU = () => Promise.resolve().then(function () { return _slug__get$1; });
const _lazy_nNil0X = () => Promise.resolve().then(function () { return renderer; });

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
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
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
    debug: destr(true),
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
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
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

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = crypto$1.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server$1 = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server$1.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server$1.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server$1.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"version": "",
	"status": 500,
	"statusText": "Server error",
	"description": "This page is temporarily unavailable."
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><style>.spotlight{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.fixed{position:fixed}.-bottom-1\\/2{bottom:-50%}.left-0{left:0}.right-0{right:0}.grid{display:grid}.mb-16{margin-bottom:4rem}.mb-8{margin-bottom:2rem}.h-1\\/2{height:50%}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-8{padding-left:2rem;padding-right:2rem}.text-center{text-align:center}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-black{--un-text-opacity:1;color:rgb(0 0 0/var(--un-text-opacity))}.font-light{font-weight:300}.font-medium{font-weight:500}.leading-tight{line-height:1.25}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-black{--un-bg-opacity:1;background-color:rgb(0 0 0/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}</style><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script></head><body class=\"antialiased bg-white dark:bg-black dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-black\"><div class=\"-bottom-1/2 fixed h-1/2 left-0 right-0 spotlight\"></div><div class=\"max-w-520px text-center\"><h1 class=\"font-medium mb-8 sm:text-10xl text-8xl\">" + escapeHtml(messages.status) + "</h1><p class=\"font-light leading-tight mb-16 px-8 sm:px-0 sm:text-4xl text-xl\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const server = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const client_manifest = () => viteNodeFetch.getManifest();

const client_manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: client_manifest
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const AUDIO_DIR = join(process.cwd(), "public", "uploads", "audio");
const ALLOWED_EXTENSIONS$1 = /* @__PURE__ */ new Set([".wav", ".mp3", ".m4a", ".ogg", ".aac", ".flac"]);
const MAX_FILE_SIZE$1 = 25 * 1024 * 1024;
const audio_post = defineEventHandler(async (event) => {
  var _a;
  const parts = await readMultipartFormData(event);
  const part = parts == null ? void 0 : parts.find((item) => item.filename && item.data);
  if (!(part == null ? void 0 : part.filename) || !part.data) {
    throw createError({ statusCode: 400, statusMessage: "Kh\xF4ng c\xF3 file \xE2m thanh \u0111\u01B0\u1EE3c g\u1EEDi l\xEAn." });
  }
  const extension = extname(part.filename).toLowerCase();
  const isAudioMime = ((_a = part.type) == null ? void 0 : _a.startsWith("audio/")) || part.type === "application/octet-stream";
  if (!ALLOWED_EXTENSIONS$1.has(extension) || !isAudioMime) {
    throw createError({ statusCode: 415, statusMessage: "Ch\u1EC9 h\u1ED7 tr\u1EE3 WAV, MP3, M4A, OGG, AAC ho\u1EB7c FLAC." });
  }
  if (part.data.byteLength > MAX_FILE_SIZE$1) {
    throw createError({ statusCode: 413, statusMessage: "File \xE2m thanh kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 25 MB." });
  }
  mkdirSync(AUDIO_DIR, { recursive: true });
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`;
  writeFileSync(join(AUDIO_DIR, fileName), part.data);
  return {
    ok: true,
    file: {
      url: `/uploads/audio/${fileName}`,
      name: part.filename,
      size: part.data.byteLength,
      mimeType: part.type
    }
  };
});

const audio_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: audio_post
}, Symbol.toStringTag, { value: 'Module' }));

const MANAGED_MEDIA_DIRS = {
  "/uploads/": join(process.cwd(), "public", "uploads"),
  "/thumbnails/": join(process.cwd(), "public", "thumbnails"),
  "/editor-previews/": join(process.cwd(), "public", "editor-previews"),
  "/panorama-previews/": join(process.cwd(), "public", "panorama-previews"),
  "/panoramas/": join(process.cwd(), "public", "panoramas"),
  "/panoramas-mobile/": join(process.cwd(), "public", "panoramas-mobile")
};
const media_delete = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  const paths = [...new Set((_a = body == null ? void 0 : body.paths) != null ? _a : [])];
  const deleted = [];
  const skipped = [];
  for (const publicPath of paths) {
    const prefix = Object.keys(MANAGED_MEDIA_DIRS).find((candidate) => publicPath.startsWith(candidate));
    if (!prefix) {
      skipped.push(publicPath);
      continue;
    }
    const fileName = basename((_b = publicPath.split(/[?#]/u, 1)[0]) != null ? _b : "");
    if (!fileName || fileName === "." || fileName === "..") {
      skipped.push(publicPath);
      continue;
    }
    const filePath = join(MANAGED_MEDIA_DIRS[prefix], fileName);
    if (!existsSync(filePath)) {
      skipped.push(publicPath);
      continue;
    }
    await unlink(filePath);
    deleted.push(publicPath);
  }
  return { ok: true, deleted, skipped };
});

const media_delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: media_delete
}, Symbol.toStringTag, { value: 'Module' }));

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const THUMBNAIL_DIR = join(process.cwd(), "public", "thumbnails");
const EDITOR_PREVIEW_DIR = join(process.cwd(), "public", "editor-previews");
const PANORAMA_PREVIEW_DIR = join(process.cwd(), "public", "panorama-previews");
const PANORAMA_DIR = join(process.cwd(), "public", "panoramas");
const MOBILE_PANORAMA_DIR = join(process.cwd(), "public", "panoramas-mobile");
const ALLOWED_EXTENSIONS = /* @__PURE__ */ new Set([".jpg", ".jpeg", ".png", ".webp"]);
const MAX_FILE_SIZE = 60 * 1024 * 1024;
sharp.cache(false);
sharp.concurrency(1);
const media_post = defineEventHandler(async (event) => {
  var _a, _b;
  try {
    mkdirSync(UPLOAD_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(THUMBNAIL_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(EDITOR_PREVIEW_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(PANORAMA_PREVIEW_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(PANORAMA_DIR, { recursive: true });
  } catch {
  }
  try {
    mkdirSync(MOBILE_PANORAMA_DIR, { recursive: true });
  } catch {
  }
  const body = await readMultipartFormData(event);
  if (!(body == null ? void 0 : body.length)) {
    throw createError({ statusCode: 400, statusMessage: "Kh\xF4ng c\xF3 file n\xE0o \u0111\u01B0\u1EE3c g\u1EEDi l\xEAn." });
  }
  const results = [];
  for (const part of body) {
    if (!part.data || !part.filename) continue;
    const ext = extname(part.filename).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      throw createError({ statusCode: 415, statusMessage: "Ch\u1EC9 h\u1ED7 tr\u1EE3 \u1EA3nh JPG, PNG ho\u1EB7c WebP." });
    }
    if (part.data.byteLength > MAX_FILE_SIZE) {
      throw createError({ statusCode: 413, statusMessage: "\u1EA2nh kh\xF4ng \u0111\u01B0\u1EE3c v\u01B0\u1EE3t qu\xE1 60 MB." });
    }
    let meta;
    try {
      meta = await sharp(part.data, { failOn: "error" }).metadata();
    } catch (error) {
      throw createError({ statusCode: 422, statusMessage: `Kh\xF4ng th\u1EC3 \u0111\u1ECDc \u1EA3nh: ${(_a = error == null ? void 0 : error.message) != null ? _a : String(error)}` });
    }
    if (!meta.width || !meta.height) {
      throw createError({ statusCode: 422, statusMessage: "\u1EA2nh kh\xF4ng c\xF3 k\xEDch th\u01B0\u1EDBc h\u1EE3p l\u1EC7." });
    }
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const fileName = `${baseName}${ext}`;
    const thumbName = `${baseName}.webp`;
    const editorPreviewName = `${baseName}.webp`;
    const panoramaPreviewName = `${baseName}.webp`;
    const viewerPanoramaName = `${baseName}.webp`;
    const mobilePanoramaName = `${baseName}.webp`;
    const inputPath = join(UPLOAD_DIR, fileName);
    const thumbPath = join(THUMBNAIL_DIR, thumbName);
    const editorPreviewPath = join(EDITOR_PREVIEW_DIR, editorPreviewName);
    const panoramaPreviewPath = join(PANORAMA_PREVIEW_DIR, panoramaPreviewName);
    const viewerPanoramaPath = join(PANORAMA_DIR, viewerPanoramaName);
    const mobilePanoramaPath = join(MOBILE_PANORAMA_DIR, mobilePanoramaName);
    writeFileSync(inputPath, part.data);
    try {
      await sharp(part.data).resize(400, 225, { fit: "cover", position: "centre" }).webp({ quality: 82, effort: 4 }).toFile(thumbPath);
      await sharp(part.data, { sequentialRead: true }).resize(2048, 1024, { fit: "fill", withoutEnlargement: true }).webp({ quality: 86, effort: 3 }).toFile(editorPreviewPath);
      await sharp(part.data, { sequentialRead: true }).resize(2048, 1024, { fit: "fill", withoutEnlargement: true }).webp({ quality: 68, effort: 4 }).toFile(panoramaPreviewPath);
      await sharp(part.data, { sequentialRead: true }).resize(5760, 2880, { fit: "fill", withoutEnlargement: true }).webp({ quality: 84, effort: 4 }).toFile(viewerPanoramaPath);
      await sharp(part.data, { sequentialRead: true }).resize(4096, 2048, { fit: "fill", withoutEnlargement: true }).webp({ quality: 80, effort: 4 }).toFile(mobilePanoramaPath);
    } catch (error) {
      throw createError({ statusCode: 500, statusMessage: `L\u1ED7i t\u1EA1o thumbnail: ${(_b = error == null ? void 0 : error.message) != null ? _b : String(error)}` });
    }
    results.push({
      original: `/uploads/${fileName}`,
      thumbnail: `/thumbnails/${thumbName}`,
      editorPreview: `/editor-previews/${editorPreviewName}`,
      previewPanorama: `/panorama-previews/${panoramaPreviewName}`,
      viewerPanorama: `/panoramas/${viewerPanoramaName}`,
      mobilePanorama: `/panoramas-mobile/${mobilePanoramaName}`,
      width: meta.width,
      height: meta.height
    });
  }
  return { ok: true, files: results };
});

const media_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: media_post
}, Symbol.toStringTag, { value: 'Module' }));

const PUBLIC_DIR = resolve(process.cwd(), "public");
const PREVIEW_DIR = join(PUBLIC_DIR, "editor-previews");
sharp.cache(false);
sharp.concurrency(1);
const preview_get = defineEventHandler(async (event) => {
  var _a;
  const source = String((_a = getQuery$1(event).path) != null ? _a : "");
  if (!source.startsWith("/") || source.startsWith("//") || /^https?:/iu.test(source)) {
    throw createError({ statusCode: 400, statusMessage: "\u0110\u01B0\u1EDDng d\u1EABn panorama kh\xF4ng h\u1EE3p l\u1EC7." });
  }
  const cleanSource = source.split(/[?#]/u, 1)[0];
  const inputPath = resolve(PUBLIC_DIR, `.${cleanSource}`);
  if (!inputPath.startsWith(`${PUBLIC_DIR}${sep}`) || !existsSync(inputPath)) {
    throw createError({ statusCode: 404, statusMessage: "Kh\xF4ng t\xECm th\u1EA5y panorama ngu\u1ED3n." });
  }
  mkdirSync(PREVIEW_DIR, { recursive: true });
  const name = `${createHash("sha1").update(cleanSource).digest("hex")}.webp`;
  const outputPath = join(PREVIEW_DIR, name);
  if (!existsSync(outputPath)) {
    await sharp(inputPath, { sequentialRead: true }).resize(2048, 1024, { fit: "fill", withoutEnlargement: true }).webp({ quality: 86, effort: 3 }).toFile(outputPath);
  }
  return sendRedirect(event, `/editor-previews/${name}`, 302);
});

const preview_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: preview_get
}, Symbol.toStringTag, { value: 'Module' }));

const generatedTours = {
	"tour-moi-muoy6j08": {
	slug: "tour-moi-muoy6j08",
	title: "Tour mới",
	location: "Chưa cập nhật",
	summary: "Tour mới chưa có nội dung.",
	theme: "nature",
	initialSceneId: "scene-muy28efw",
	plugins: [
	],
	mode: "free",
	autoRotate: false,
	showMinimap: false,
	map: {
		floors: [
		],
		visible: false,
		position: "bottom-left"
	},
	scenes: [
		{
			id: "scene-muxvt079",
			title: "Sông vân",
			subtitle: "",
			panorama: "/panoramas/1791363884550-otcz1232qvm-c7d26b3ac3.webp",
			previewPanorama: "/panorama-previews/1791363884550-otcz1232qvm-c7d26b3ac3.webp",
			mobilePanorama: "/panoramas-mobile/1791363884550-otcz1232qvm-c7d26b3ac3.webp",
			thumbnail: "/thumbnails/1791363884550-otcz1232qvm.webp",
			initialYaw: 13.156679695098585,
			initialPitch: 0.12742673763635304,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: 0.3359999999999985,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95346741378309,
				20.20822096283133
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791363976191",
					label: "Sông Vân Art space",
					yaw: -0.5513,
					pitch: 0.0406,
					plugin: "panel",
					placement: "horizontal",
					contents: [
						{
							id: "h1791363976191-text",
							type: "text",
							content: "Sông Vân Art space…\nKhông gian nghệ thuật cũng là tư gia của gia đình nghệ sỹ Lương Trịnh mang tên Lương gia Art space đã là nơi khởi động những hoạt động nghệ thuật điêu khắc đá đương đại từ năm 2018 với workshop đầu tiên mang tên ‘Về với đá’, năm 2021 workshop và triển lãm điêu khắc đá Biến Chuyển. Mong muốn mở rộng và tạo lập một không gian trưng bày hoàn chỉnh hơn. Vừa tìm đến sự mới mẻ, hoà đồng với không gian sống, vừa tạo nên sự hấp dẫn của một điểm đến giữa lòng làng nghề đá. Lương gia Art space đã quyết định đổi tên thành Sông Vân Art space.  Triển lãm của hai tác giả cũng là sự khai mở cho một không gian mới, một khát vọng tạo dựng không gian cho đá của Lương Trịnh.",
							presentation: "text-and-audio"
						}
					]
				},
				{
					id: "h1791364572700",
					label: "Lối vào",
					yaw: 0.1396,
					pitch: -0.31,
					plugin: "navigation",
					targetScene: "scene-muxvs1p9",
					rotX: 1.0995574287564276,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxvs1p9",
			title: "Bờ sông Vân",
			subtitle: "",
			panorama: "/panoramas/1791363839591-afu6f9tqbxn-f767b43b82.webp",
			previewPanorama: "/panorama-previews/1791363839591-afu6f9tqbxn-f767b43b82.webp",
			mobilePanorama: "/panoramas-mobile/1791363839591-afu6f9tqbxn-f767b43b82.webp",
			thumbnail: "/thumbnails/1791363839591-afu6f9tqbxn.webp",
			initialYaw: 0,
			initialPitch: 0,
			initialFov: 75,
			defaultCameraEnabled: false,
			panoramaRotation: -2.443185307179588,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95339365303519,
				20.20837319121125
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791364668908",
					label: "Lối ra",
					yaw: -0.2559,
					pitch: -0.3225,
					plugin: "navigation",
					targetScene: "scene-muxvt079",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791364735195",
					label: "Ngã ba dinh thự",
					yaw: 3.007,
					pitch: -0.2662,
					plugin: "navigation",
					targetScene: "scene-muxvrkpl",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1,
					rotZ: 0,
					rotY: 0.10471975511965977
				}
			]
		},
		{
			id: "scene-muxvrkpl",
			title: "Ngã ba dinh thự",
			subtitle: "",
			panorama: "/panoramas/1791363817761-8md8wy2v15q-3bf1c26c2c.webp",
			previewPanorama: "/panorama-previews/1791363817761-8md8wy2v15q-3bf1c26c2c.webp",
			mobilePanorama: "/panoramas-mobile/1791363817761-8md8wy2v15q-3bf1c26c2c.webp",
			thumbnail: "/thumbnails/1791363817761-8md8wy2v15q.webp",
			initialYaw: 52.42350433648388,
			initialPitch: 0.07821308284518984,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: 1.9380000000000006,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.9533400088549,
				20.208432396391295
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791364794679",
					label: "Bờ sông Vân",
					yaw: 1.8474,
					pitch: -0.3505,
					plugin: "navigation",
					targetScene: "scene-muxvs1p9",
					rotX: 1.064650843716541,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791364818593",
					label: "Sảnh tân gia",
					yaw: 0.1073,
					pitch: -0.3095,
					plugin: "navigation",
					targetScene: "scene-muxvzikj",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1,
					rotY: -0.17453292519943295
				},
				{
					id: "h1791364851805",
					label: "Vườn đá",
					yaw: -1.2337,
					pitch: -0.3883,
					plugin: "navigation",
					targetScene: "scene-muxwtgdv",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxvzikj",
			title: "Sảnh tân gia",
			subtitle: "",
			panorama: "/panoramas/1791364188155-3d3emmjckkg-ce98279577.webp",
			previewPanorama: "/panorama-previews/1791364188155-3d3emmjckkg-ce98279577.webp",
			mobilePanorama: "/panoramas-mobile/1791364188155-3d3emmjckkg-ce98279577.webp",
			thumbnail: "/thumbnails/1791364188155-3d3emmjckkg.webp",
			initialYaw: 52.39940184251776,
			initialPitch: 0.09930865576602246,
			initialFov: 99.95498728952235,
			defaultCameraEnabled: true,
			panoramaRotation: 1.9200000000000017,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95323607325554,
				20.208378274063932
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791365890729",
					label: "Ngã ba dinh thự",
					yaw: -2.0682,
					pitch: -0.3816,
					plugin: "navigation",
					targetScene: "scene-muxvrkpl",
					rotX: 1.064650843716541,
					scaleX: 1.6,
					scaleY: 1,
					rotY: -0.24434609527920614,
					sphereRadius: 430
				},
				{
					id: "h1791365961588",
					label: "Khu triển lãm 2",
					yaw: 0.9876,
					pitch: -0.2912,
					plugin: "navigation",
					targetScene: "scene-muxvnnpk",
					rotX: 1.0297442586766543,
					scaleX: 1.6,
					scaleY: 1,
					sphereRadius: 430
				},
				{
					id: "h1791365983533",
					label: "Khu triển lãm 1",
					yaw: 1.9954,
					pitch: -0.3761,
					plugin: "navigation",
					targetScene: "scene-muxyfx7u",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1,
					rotY: -0.3490658503988659,
					sphereRadius: 430
				},
				{
					id: "h1791372602964",
					label: "Sảnh tiếp khách",
					yaw: -1.2332,
					pitch: -0.3761,
					plugin: "navigation",
					targetScene: "scene-muxzz1f4",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1,
					sphereRadius: 430
				}
			]
		},
		{
			id: "scene-muxvnnpk",
			title: "Khu triển lãm 2",
			subtitle: "",
			panorama: "/panoramas/1791363635779-44yjura05ei-a516f33b3d.webp",
			previewPanorama: "/panorama-previews/1791363635779-44yjura05ei-a516f33b3d.webp",
			mobilePanorama: "/panoramas-mobile/1791363635779-44yjura05ei-a516f33b3d.webp",
			thumbnail: "/thumbnails/1791363635779-44yjura05ei.webp",
			initialYaw: -3.259301727885268,
			initialPitch: 0.009177571916662191,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: 0,
			brightness: 1.25,
			highlightCompression: 0,
			showOnMap: false,
			markers: [
				{
					id: "h1791366051697",
					label: "Sảnh tân gia",
					yaw: 0.0374,
					pitch: -0.5153,
					plugin: "navigation",
					targetScene: "scene-muxvzikj",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1,
					rotY: 0.5759586531581288
				},
				{
					id: "h1791366118997",
					label: "Khu triển lãm 3 ",
					yaw: -0.3431,
					pitch: -0.5123,
					plugin: "navigation",
					targetScene: "scene-muxyetn4",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxwnmgu",
			title: "Trung tâm vườn đá",
			subtitle: "",
			panorama: "/panoramas/1791365312935-jxwx0865xya-cdf76ad3c8.webp",
			previewPanorama: "/panorama-previews/1791365312935-jxwx0865xya-cdf76ad3c8.webp",
			mobilePanorama: "/panoramas-mobile/1791365312935-jxwx0865xya-cdf76ad3c8.webp",
			thumbnail: "/thumbnails/1791365312935-jxwx0865xya.webp",
			initialYaw: 0,
			initialPitch: 0,
			initialFov: 75,
			defaultCameraEnabled: false,
			panoramaRotation: -0.6600000000000001,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95312744379045,
				20.208530556594823
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791366286027",
					label: "Ngoài vườn đá",
					yaw: 0.0815,
					pitch: -0.33,
					plugin: "navigation",
					targetScene: "scene-muxwtgdv",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxwnvwr",
			title: "Xưởng chế tác",
			subtitle: "",
			panorama: "/panoramas/1791365325140-3hi8ecj0hj9-40f20f752c.webp",
			previewPanorama: "/panorama-previews/1791365325140-3hi8ecj0hj9-40f20f752c.webp",
			mobilePanorama: "/panoramas-mobile/1791365325140-3hi8ecj0hj9-40f20f752c.webp",
			thumbnail: "/thumbnails/1791365325140-3hi8ecj0hj9.webp",
			initialYaw: 26.724650860755446,
			initialPitch: 0.07807083650312939,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: -1.2750000000000004,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95312241464853,
				20.20866896639382
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791366229657",
					label: "Vườn đá",
					yaw: -0.561,
					pitch: -0.3229,
					plugin: "navigation",
					targetScene: "scene-muxwtgdv",
					scaleX: 1.6,
					scaleY: 1,
					rotX: 1.0471975511965976
				},
				{
					id: "h1791369872912",
					label: "Khu chế tác",
					yaw: -3.1156,
					pitch: -0.2976,
					plugin: "navigation",
					targetScene: "scene-muxz694t",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791371567758",
					label: "Bên hổng xưởng",
					yaw: -1.4096,
					pitch: -0.4545,
					plugin: "navigation",
					targetScene: "scene-muxzy2ve",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxwtgdv",
			title: "Vườn đá",
			subtitle: "",
			panorama: "/panoramas/1791365584178-n40gdw9885d-722be813bb.webp",
			previewPanorama: "/panorama-previews/1791365584178-n40gdw9885d-722be813bb.webp",
			mobilePanorama: "/panoramas-mobile/1791365584178-n40gdw9885d-722be813bb.webp",
			thumbnail: "/thumbnails/1791365584178-n40gdw9885d.webp",
			initialYaw: 2.077119538688537,
			initialPitch: -3664959906456124e-19,
			initialFov: 99.95245094594205,
			defaultCameraEnabled: true,
			panoramaRotation: -1.029,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95320388674739,
				20.208567046328746
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791365672086",
					label: "Chuyển cảnh",
					yaw: -0.9948,
					pitch: -0.3254,
					plugin: "navigation",
					targetScene: "scene-muxvrkpl",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791366164920",
					label: "Trung tâm vườn đá",
					yaw: -3.1409,
					pitch: -0.3698,
					plugin: "navigation",
					targetScene: "scene-muxwnmgu",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791366181890",
					label: "Xưởng chế tác",
					yaw: 1.7409,
					pitch: -0.3223,
					plugin: "navigation",
					targetScene: "scene-muxwnvwr",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxyetn4",
			title: "Khu triển lãm 1 (2)",
			subtitle: "",
			panorama: "/panoramas/1791368261710-snm5n8lytlr-4b0043f6f0.webp",
			previewPanorama: "/panorama-previews/1791368261710-snm5n8lytlr-4b0043f6f0.webp",
			mobilePanorama: "/panoramas-mobile/1791368261710-snm5n8lytlr-4b0043f6f0.webp",
			thumbnail: "/thumbnails/1791368261710-snm5n8lytlr.webp",
			initialYaw: -6.784291137679468,
			initialPitch: 0.02435219470441974,
			initialFov: 94.15024443925522,
			defaultCameraEnabled: true,
			panoramaRotation: 0.3539999999999992,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95323909074071,
				20.20828797530887
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791368542115",
					label: "Khu triển lãm 2",
					yaw: 1.568,
					pitch: -0.572,
					plugin: "navigation",
					targetScene: "scene-muxvnnpk",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791368570816",
					label: "Sảnh tân gia",
					yaw: -1.0013,
					pitch: -0.478,
					plugin: "navigation",
					targetScene: "scene-muxvzikj",
					rotX: 1.0471975511965976,
					scaleX: 1.6,
					scaleY: 1,
					rotY: 0.12217304763960307,
					rotZ: 0.017453292519943295
				},
				{
					id: "h1791368626921",
					label: "Khu trong",
					yaw: -1.5597,
					pitch: -0.3834,
					plugin: "navigation",
					targetScene: "scene-muxyfx7u",
					rotX: 1.0297442586766543,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxyfx7u",
			title: "Khu triển lãm 1 (1)",
			subtitle: "",
			panorama: "/panoramas/1791368312299-zfdxc5svjsj-cd51d4e70d.webp",
			previewPanorama: "/panorama-previews/1791368312299-zfdxc5svjsj-cd51d4e70d.webp",
			mobilePanorama: "/panoramas-mobile/1791368312299-zfdxc5svjsj-cd51d4e70d.webp",
			thumbnail: "/thumbnails/1791368312299-zfdxc5svjsj.webp",
			initialYaw: 1.7042968588582186,
			initialPitch: 0.02688421883676339,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: -1.08,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95330111682416,
				20.20829081175536
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791368763417",
					label: "Cổng khu",
					yaw: 2.8545,
					pitch: -0.3624,
					plugin: "navigation",
					targetScene: "scene-muxyetn4",
					rotX: 1.0297442586766543,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxz5hlz",
			title: "Khu quan sát",
			subtitle: "",
			panorama: "/panoramas/1791369505710-lftwo6im5ii-1af6b97344.webp",
			previewPanorama: "/panorama-previews/1791369505710-lftwo6im5ii-1af6b97344.webp",
			mobilePanorama: "/panoramas-mobile/1791369505710-lftwo6im5ii-1af6b97344.webp",
			thumbnail: "/thumbnails/1791369505710-lftwo6im5ii.webp",
			initialYaw: 14.812739360502702,
			initialPitch: -0.06327752357172817,
			initialFov: 99.95468573974509,
			defaultCameraEnabled: true,
			panoramaRotation: -0.8550000000000004,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95302551984788,
				20.208707591534562
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791369993534",
					label: "Khu chế tác",
					yaw: -2.3215,
					pitch: -0.3455,
					plugin: "navigation",
					targetScene: "scene-muxz694t",
					scaleX: 1,
					scaleY: 0.8,
					icon: "location-1",
					pinColor: "#171717"
				}
			]
		},
		{
			id: "scene-muxz694t",
			title: "Khu chế tác",
			subtitle: "",
			panorama: "/panoramas/1791369541302-k5x54val0l-2f7a69d79c.webp",
			previewPanorama: "/panorama-previews/1791369541302-k5x54val0l-2f7a69d79c.webp",
			mobilePanorama: "/panoramas-mobile/1791369541302-k5x54val0l-2f7a69d79c.webp",
			thumbnail: "/thumbnails/1791369541302-k5x54val0l.webp",
			initialYaw: 19.321749340855334,
			initialPitch: -22657842283153255e-20,
			initialFov: 99.95392443017141,
			defaultCameraEnabled: true,
			panoramaRotation: 0.7740000000000009,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95301982015373,
				20.208694697863965
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791369906847",
					label: "Không gian xưởng",
					yaw: -2.6923,
					pitch: -0.6148,
					plugin: "navigation",
					targetScene: "scene-muxwnvwr",
					rotX: 1.0297442586766543,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791369934532",
					label: "Góc quan sát",
					yaw: -1.0298,
					pitch: 0.1705,
					plugin: "navigation",
					targetScene: "scene-muxz5hlz",
					scaleX: 1,
					scaleY: 0.8,
					icon: "location-1",
					pinColor: "#171717"
				}
			]
		},
		{
			id: "scene-muxzy2ve",
			title: "Bên hông xưởng",
			subtitle: "",
			panorama: "/panoramas/1791370838724-8dg485jluu8-0c5fd0a1b8.webp",
			previewPanorama: "/panorama-previews/1791370838724-8dg485jluu8-0c5fd0a1b8.webp",
			mobilePanorama: "/panoramas-mobile/1791370838724-8dg485jluu8-0c5fd0a1b8.webp",
			thumbnail: "/thumbnails/1791370838724-8dg485jluu8.webp",
			editorPanorama: "/editor-previews/1791370838724-8dg485jluu8.webp",
			initialYaw: 22.447660265527343,
			initialPitch: 0.032679566689811805,
			initialFov: 99.95392443017141,
			defaultCameraEnabled: true,
			panoramaRotation: 0.48900000000000077,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95302719622852,
				20.208639998147703
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791371623078",
					label: "Xưởng chế tác",
					yaw: -1.121,
					pitch: -0.661,
					plugin: "navigation",
					targetScene: "scene-muxwnvwr",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791371636547",
					label: "Hành lang triển lãm",
					yaw: -3.0951,
					pitch: -0.5054,
					plugin: "navigation",
					targetScene: "scene-muxzynnf",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxzynnf",
			title: "Hành lang triển lãm",
			subtitle: "",
			panorama: "/panoramas/1791370865551-z0836imf9m-a0c65fa688.webp",
			previewPanorama: "/panorama-previews/1791370865551-z0836imf9m-a0c65fa688.webp",
			mobilePanorama: "/panoramas-mobile/1791370865551-z0836imf9m-a0c65fa688.webp",
			thumbnail: "/thumbnails/1791370865551-z0836imf9m.webp",
			editorPanorama: "/editor-previews/1791370865551-z0836imf9m.webp",
			initialYaw: 52.351316457476635,
			initialPitch: 0.05710375261822427,
			initialFov: 99.9522068354564,
			defaultCameraEnabled: true,
			panoramaRotation: -0.9089999999999989,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.9530456364155,
				20.208592506967904
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791371655152",
					label: "bên hổng xưởng",
					yaw: 1.492,
					pitch: -0.624,
					plugin: "navigation",
					targetScene: "scene-muxzy2ve",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791371669948",
					label: "Góc tân gia",
					yaw: -1.6307,
					pitch: -0.7129,
					plugin: "navigation",
					targetScene: "scene-muxzyu0r",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791373488676",
					label: "Khu triển lãm 3",
					yaw: 3.0909,
					pitch: -0.4417,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxzyu0r",
			title: "Góc tân gia",
			subtitle: "",
			panorama: "/panoramas/1791370873981-zy2t135moj-6eae97d826.webp",
			previewPanorama: "/panorama-previews/1791370873981-zy2t135moj-6eae97d826.webp",
			mobilePanorama: "/panoramas-mobile/1791370873981-zy2t135moj-6eae97d826.webp",
			thumbnail: "/thumbnails/1791370873981-zy2t135moj.webp",
			editorPanorama: "/editor-previews/1791370873981-zy2t135moj.webp",
			initialYaw: 50.12835431713641,
			initialPitch: 0.012050380482422358,
			initialFov: 99.9522068354564,
			defaultCameraEnabled: true,
			panoramaRotation: -1.2029999999999994,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95305670052768,
				20.208564832726324
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791371685866",
					label: "Sảnh tiếp khách ",
					yaw: 0.1684,
					pitch: -0.4632,
					plugin: "navigation",
					targetScene: "scene-muxzz1f4",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791371691814",
					label: "Hành lang triển lãm",
					yaw: 1.9117,
					pitch: -0.4754,
					plugin: "navigation",
					targetScene: "scene-muxzynnf",
					icon: "arrow",
					rotZ: -0.29670597283903605,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muxzz1f4",
			title: "Sảnh tiếp khách",
			subtitle: "",
			panorama: "/panoramas/1791370883431-47q760webjq-e2cb9e4246.webp",
			previewPanorama: "/panorama-previews/1791370883431-47q760webjq-e2cb9e4246.webp",
			mobilePanorama: "/panoramas-mobile/1791370883431-47q760webjq-e2cb9e4246.webp",
			thumbnail: "/thumbnails/1791370883431-47q760webjq.webp",
			editorPanorama: "/editor-previews/1791370883431-47q760webjq.webp",
			initialYaw: 49.339315956125795,
			initialPitch: -0.12882682501107923,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: -0.9390000000000001,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95309861004353,
				20.208575786635297
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791372545343",
					label: "Góc tân gia",
					yaw: 2.7804,
					pitch: -0.3001,
					plugin: "navigation",
					targetScene: "scene-muxzyu0r",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791372567902",
					label: "Sảnh tân gia",
					yaw: -1.7165,
					pitch: -0.5184,
					plugin: "navigation",
					targetScene: "scene-muxvzikj",
					icon: "arrow",
					rotZ: 0.19198621771937624,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muy12wxo",
			title: "Triển lãm 3 (1)",
			subtitle: "",
			panorama: "/panoramas/1791372743999-mc9nfi1vhz-41729234a2.webp",
			previewPanorama: "/panorama-previews/1791372743999-mc9nfi1vhz-41729234a2.webp",
			mobilePanorama: "/panoramas-mobile/1791372743999-mc9nfi1vhz-41729234a2.webp",
			thumbnail: "/thumbnails/1791372743999-mc9nfi1vhz.webp",
			editorPanorama: "/editor-previews/1791372743999-mc9nfi1vhz.webp",
			initialYaw: 47.488021399771704,
			initialPitch: 0.04520205497695087,
			initialFov: 94.15410045323439,
			defaultCameraEnabled: true,
			panoramaRotation: -2.6771853071795864,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95301378518344,
				20.208579851489965
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791372892485",
					label: "Hành lang triển lãm",
					yaw: 1.6843,
					pitch: -0.6659,
					plugin: "navigation",
					targetScene: "scene-muxzynnf",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791372911158",
					label: "Bia đá",
					yaw: -2.5868,
					pitch: -0.459,
					plugin: "navigation",
					targetScene: "scene-muy13pai",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791372913863",
					label: "Ghế đá nghệ thuật",
					yaw: 3.0827,
					pitch: -0.4353,
					plugin: "navigation",
					targetScene: "scene-muy138jo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muy138jo",
			title: "Triển lãm 3 (3)",
			subtitle: "",
			panorama: "/panoramas/1791372759191-pm63036bo4h-42459c569a.webp",
			previewPanorama: "/panorama-previews/1791372759191-pm63036bo4h-42459c569a.webp",
			mobilePanorama: "/panoramas-mobile/1791372759191-pm63036bo4h-42459c569a.webp",
			thumbnail: "/thumbnails/1791372759191-pm63036bo4h.webp",
			editorPanorama: "/editor-previews/1791372759191-pm63036bo4h.webp",
			initialYaw: 49.015141407387226,
			initialPitch: 0.0359995252892606,
			initialFov: 99.95451159878264,
			defaultCameraEnabled: true,
			panoramaRotation: 1.9379999999999988,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95301009714605,
				20.208602808529424
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791373107882",
					label: "Bia đá",
					yaw: 0.8689,
					pitch: -0.4688,
					plugin: "navigation",
					targetScene: "scene-muy13pai",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791373110230",
					label: "Đá tảng",
					yaw: 1.5513,
					pitch: -0.3362,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791373138343",
					label: "Phiến đá",
					yaw: -1.593,
					pitch: -0.404,
					plugin: "navigation",
					targetScene: "scene-muy13e1t",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muy13e1t",
			title: "triển lãm 3 (4)",
			subtitle: "",
			panorama: "/panoramas/1791372766244-yirii93ny8e-a89669515a.webp",
			previewPanorama: "/panorama-previews/1791372766244-yirii93ny8e-a89669515a.webp",
			mobilePanorama: "/panoramas-mobile/1791372766244-yirii93ny8e-a89669515a.webp",
			thumbnail: "/thumbnails/1791372766244-yirii93ny8e.webp",
			editorPanorama: "/editor-previews/1791372766244-yirii93ny8e.webp",
			initialYaw: 52.30957163204661,
			initialPitch: -0.0027850746746205936,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: 2.1270000000000007,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95299165695907,
				20.20861884700705
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791373029443",
					label: "Ghế đá nghệ thuật",
					yaw: 1.6676,
					pitch: -0.4057,
					plugin: "navigation",
					targetScene: "scene-muy138jo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791373036059",
					label: "Tảng đá",
					yaw: 1.1771,
					pitch: -0.2398,
					plugin: "navigation",
					targetScene: "scene-muy13pai",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muy13pai",
			title: "Triển lãm 3 (2)",
			subtitle: "",
			panorama: "/panoramas/1791372780871-9ozia4yzmfj-90c291d8c3.webp",
			previewPanorama: "/panorama-previews/1791372780871-9ozia4yzmfj-90c291d8c3.webp",
			mobilePanorama: "/panoramas-mobile/1791372780871-9ozia4yzmfj-90c291d8c3.webp",
			thumbnail: "/thumbnails/1791372780871-9ozia4yzmfj.webp",
			editorPanorama: "/editor-previews/1791372780871-9ozia4yzmfj.webp",
			initialYaw: 52.327589826048715,
			initialPitch: -0.0025318258504717257,
			initialFov: 99.9500338171303,
			defaultCameraEnabled: true,
			panoramaRotation: 2.2170000000000005,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.9529846161604,
				20.208595261009986
			],
			showOnMap: false,
			markers: [
				{
					id: "h1791372955268",
					label: "Ghế đá nghệ thuật",
					yaw: -2.4229,
					pitch: -0.4815,
					plugin: "navigation",
					targetScene: "scene-muy138jo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791372958286",
					label: "Khúc đá",
					yaw: -1.8459,
					pitch: -0.4969,
					plugin: "navigation",
					targetScene: "scene-muy13e1t",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				},
				{
					id: "h1791372967532",
					label: "Đá tảng",
					yaw: 1.8288,
					pitch: -0.5265,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "arrow",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.6,
					scaleY: 1
				}
			]
		},
		{
			id: "scene-muy28efw",
			title: "Không gian trước",
			subtitle: "",
			panorama: "/panoramas/1791374679999-qb06gn55i3r-c99a7d39d1.webp",
			previewPanorama: "/panorama-previews/1791374679999-qb06gn55i3r-c99a7d39d1.webp",
			mobilePanorama: "/panoramas-mobile/1791374679999-qb06gn55i3r-c99a7d39d1.webp",
			thumbnail: "/thumbnails/1791374679999-qb06gn55i3r.webp",
			editorPanorama: "/editor-previews/1791374679999-qb06gn55i3r.webp",
			initialYaw: 19.516842360065187,
			initialPitch: -0.29684906854110565,
			initialFov: 75,
			defaultCameraEnabled: true,
			panoramaRotation: -2.4941853071795865,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95351636409761,
				20.208171874321298
			],
			showOnMap: true,
			markers: [
				{
					id: "h1791383593701",
					label: "Cổng vào",
					yaw: 3.1079,
					pitch: -0.7424,
					plugin: "navigation",
					targetScene: "scene-muxvt079",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363884550-otcz1232qvm.webp"
				},
				{
					id: "h1791384047895",
					label: "Không gian sông Vân",
					yaw: 2.7057,
					pitch: -0.3026,
					plugin: "navigation",
					targetScene: "scene-muy28jkw",
					icon: "location-2",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 1,
					pinColor: "#ef4444",
					iconUrl: "/thumbnails/1791374687320-qp74k2s456.webp"
				},
				{
					id: "h1791387598748",
					label: "Khu triển lãm 1",
					yaw: -3.0261,
					pitch: -0.472,
					plugin: "navigation",
					targetScene: "scene-muxyfx7u",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363884550-otcz1232qvm.webp"
				},
				{
					id: "h1791387630961",
					label: "Khu triển lãm 2",
					yaw: -2.8014,
					pitch: -0.3345,
					plugin: "navigation",
					targetScene: "scene-muxvnnpk",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363635779-44yjura05ei.webp"
				},
				{
					id: "h1791387680963",
					label: "Khu triển lãm 3",
					yaw: -3.0804,
					pitch: -0.2442,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 0.95,
					scaleY: 0.85,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791372743999-mc9nfi1vhz.webp"
				},
				{
					id: "h1791388042656",
					label: "Xưởng sản xuất",
					yaw: 3.1094,
					pitch: -0.145,
					plugin: "navigation",
					targetScene: "scene-muxz5hlz",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 0.85,
					scaleY: 0.7,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791369505710-lftwo6im5ii.webp"
				},
				{
					id: "h1791453371462",
					label: "Không gian xưởng",
					yaw: 2.7444,
					pitch: -0.1309,
					plugin: "navigation",
					targetScene: "scene-muy29vy6",
					icon: "drone",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 0.9,
					scaleY: 0.85,
					sphereRadius: 520,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363884550-otcz1232qvm.webp"
				}
			]
		},
		{
			id: "scene-muy28jkw",
			title: "Không gian sông Vân",
			subtitle: "",
			panorama: "/panoramas/1791374687320-qp74k2s456-67987efee1.webp",
			previewPanorama: "/panorama-previews/1791374687320-qp74k2s456-67987efee1.webp",
			mobilePanorama: "/panoramas-mobile/1791374687320-qp74k2s456-67987efee1.webp",
			thumbnail: "/thumbnails/1791374687320-qp74k2s456.webp",
			editorPanorama: "/editor-previews/1791374687320-qp74k2s456.webp",
			initialYaw: 3.8561909723148386,
			initialPitch: -0.2905629619153496,
			initialFov: 90.44699611509506,
			defaultCameraEnabled: true,
			panoramaRotation: 0.8339999999999996,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95347076654436,
				20.20848081212994
			],
			showOnMap: true,
			markers: [
				{
					id: "h1791383747256",
					label: "Sảnh tân gia ",
					yaw: 3.1359,
					pitch: -0.4008,
					plugin: "navigation",
					targetScene: "scene-muxvzikj",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717"
				},
				{
					id: "h1791383769204",
					label: "Vườn đá",
					yaw: 2.2541,
					pitch: -0.2855,
					plugin: "navigation",
					targetScene: "scene-muxwtgdv",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717"
				},
				{
					id: "h1791384078480",
					label: "Không gian xưởng",
					yaw: 1.8525,
					pitch: -0.0145,
					plugin: "navigation",
					targetScene: "scene-muy29vy6",
					icon: "location-2",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 1,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791374750110-9o5fa6w6uhl.webp"
				},
				{
					id: "h1791384094609",
					label: "Không gian trước",
					yaw: -1.675,
					pitch: 0.0561,
					plugin: "navigation",
					targetScene: "scene-muy28efw",
					icon: "location-2",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 1,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791374679999-qb06gn55i3r.webp"
				},
				{
					id: "h1791445732791",
					label: "Không gian triển lãm 1",
					yaw: -2.588,
					pitch: -0.2517,
					plugin: "navigation",
					targetScene: "scene-muxyfx7u",
					icon: "local",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					sphereRadius: 520,
					pinColor: "#171717"
				},
				{
					id: "h1791452418729",
					label: "Không gian triển lãm 2",
					yaw: -2.866,
					pitch: -0.026,
					plugin: "navigation",
					targetScene: "scene-muxvnnpk",
					icon: "local",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					sphereRadius: 520,
					pinColor: "#171717"
				},
				{
					id: "h1791452440656",
					label: "Không gian triển lãm 3",
					yaw: 2.623,
					pitch: -0.081,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "local",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					sphereRadius: 520,
					pinColor: "#171717"
				}
			]
		},
		{
			id: "scene-muy29vy6",
			title: "Không gian xưởng",
			subtitle: "",
			panorama: "/panoramas/1791374750110-9o5fa6w6uhl-7f201ca019.webp",
			previewPanorama: "/panorama-previews/1791374750110-9o5fa6w6uhl-7f201ca019.webp",
			mobilePanorama: "/panoramas-mobile/1791374750110-9o5fa6w6uhl-7f201ca019.webp",
			thumbnail: "/thumbnails/1791374750110-9o5fa6w6uhl.webp",
			editorPanorama: "/editor-previews/1791374750110-9o5fa6w6uhl.webp",
			initialYaw: 3.980500585454933,
			initialPitch: -0.12593753281084308,
			initialFov: 89.35182338391104,
			defaultCameraEnabled: true,
			panoramaRotation: 1.7339999999999982,
			brightness: 1.25,
			highlightCompression: 0,
			coordinates: [
				105.95315158367158,
				20.20880787121085
			],
			showOnMap: true,
			markers: [
				{
					id: "h1791383841326",
					label: "Khu quan sát",
					yaw: 1.766,
					pitch: -0.207,
					plugin: "navigation",
					targetScene: "scene-muxz5hlz",
					icon: "location-1",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					pinColor: "#171717"
				},
				{
					id: "h1791384113346",
					label: "Không gian sông Vân",
					yaw: -2.1059,
					pitch: 0.0758,
					plugin: "navigation",
					targetScene: "scene-muy28jkw",
					icon: "location-2",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1.35,
					scaleY: 1.35,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791374687320-qp74k2s456.webp"
				},
				{
					id: "h1791446010013",
					label: "Vườn đá",
					yaw: -2.766,
					pitch: -0.326,
					plugin: "navigation",
					targetScene: "scene-muxwtgdv",
					icon: "local",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					sphereRadius: 520,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363884550-otcz1232qvm.webp"
				},
				{
					id: "h1791452470656",
					label: "Không gian triển lãm 3",
					yaw: 3.0137,
					pitch: -0.0621,
					plugin: "navigation",
					targetScene: "scene-muy12wxo",
					icon: "local",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 0.8,
					sphereRadius: 520,
					pinColor: "#171717"
				},
				{
					id: "h1791453510859",
					label: "Không gian trước",
					yaw: -2.4956,
					pitch: 0.2987,
					plugin: "navigation",
					targetScene: "scene-muy28efw",
					icon: "drone",
					rotZ: 0,
					rotX: 1.0471975511965976,
					rotY: 0,
					scaleX: 1,
					scaleY: 1,
					sphereRadius: 520,
					pinColor: "#171717",
					iconUrl: "/thumbnails/1791363884550-otcz1232qvm.webp"
				}
			]
		}
	]
}
};

function parseYaml(raw) {
  var _a;
  try {
    const data = yaml.load(raw);
    if (data === null || data === void 0) {
      return { ok: false, error: "YAML file r\u1ED7ng ho\u1EB7c ch\u1EC9 ch\u1EE9a null." };
    }
    if (typeof data !== "object" || Array.isArray(data)) {
      return { ok: false, error: "YAML root ph\u1EA3i l\xE0 object, kh\xF4ng ph\u1EA3i array hay scalar." };
    }
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: `YAML parse error: ${(_a = e == null ? void 0 : e.message) != null ? _a : String(e)}` };
  }
}
function dumpYaml(data) {
  return yaml.dump(data, { indent: 2, lineWidth: 120, quotingType: '"' });
}

const CANVAS_W = 800;
const CANVAS_H = 600;
const PADDING = 80;
const MIN_DIST = 90;
function generateAutoMap(scenes) {
  var _a, _b, _c;
  if (scenes.length === 0) {
    return { floors: [], visible: false };
  }
  const sceneIds = new Set(scenes.map((s) => s.id));
  const neighbors = /* @__PURE__ */ new Map();
  for (const scene of scenes) {
    if (!neighbors.has(scene.id)) neighbors.set(scene.id, /* @__PURE__ */ new Set());
    for (const marker of (_a = scene.markers) != null ? _a : []) {
      if (marker.plugin === "navigation") {
        const nav = marker;
        if (nav.targetScene && sceneIds.has(nav.targetScene)) {
          neighbors.get(scene.id).add(nav.targetScene);
          if (!neighbors.has(nav.targetScene)) neighbors.set(nav.targetScene, /* @__PURE__ */ new Set());
          neighbors.get(nav.targetScene).add(scene.id);
        }
      }
    }
  }
  const visited = /* @__PURE__ */ new Set();
  const components = [];
  for (const scene of scenes) {
    if (visited.has(scene.id)) continue;
    const component = [];
    const stack = [scene.id];
    while (stack.length > 0) {
      const id = stack.pop();
      if (visited.has(id)) continue;
      visited.add(id);
      component.push(id);
      for (const nbr of (_b = neighbors.get(id)) != null ? _b : []) {
        if (!visited.has(nbr)) stack.push(nbr);
      }
    }
    components.push(component);
  }
  const sceneMap = new Map(scenes.map((s) => [s.id, s]));
  const floors = components.map((component, idx) => {
    const positions = layoutNodes(component, neighbors);
    const floorId = components.length === 1 ? "main" : `floor-${idx + 1}`;
    const floorName = components.length === 1 ? "T\u1EA5t c\u1EA3" : `Khu v\u1EF1c ${idx + 1}`;
    const nodes = component.map((id) => {
      var _a2, _b2, _c2;
      const scene = sceneMap.get(id);
      const pos = positions.get(id);
      const nodeNeighbors = [...(_a2 = neighbors.get(id)) != null ? _a2 : []].filter(
        (n) => component.includes(n)
      );
      const crossFloorNeighbors = [...(_b2 = neighbors.get(id)) != null ? _b2 : []].filter(
        (n) => !component.includes(n)
      );
      let exitTo;
      if (crossFloorNeighbors.length > 0) {
        const targetId = crossFloorNeighbors[0];
        const targetFloorIdx = components.findIndex((c) => c.includes(targetId));
        if (targetFloorIdx >= 0) {
          exitTo = {
            floorId: components.length === 1 ? "main" : `floor-${targetFloorIdx + 1}`,
            nodeId: targetId
          };
        }
      }
      return {
        id,
        name: (_c2 = scene == null ? void 0 : scene.title) != null ? _c2 : id,
        x: Math.round(pos.x),
        y: Math.round(pos.y),
        neighbors: nodeNeighbors,
        visible: (scene == null ? void 0 : scene.showOnMap) === true,
        exitTo
      };
    });
    return {
      id: floorId,
      name: floorName,
      shortName: components.length === 1 ? void 0 : `KV${idx + 1}`,
      imageUrl: "",
      imageWidth: CANVAS_W,
      imageHeight: CANVAS_H,
      nodes
    };
  });
  return {
    floors,
    defaultFloorId: (_c = floors[0]) == null ? void 0 : _c.id,
    position: "bottom-left",
    width: 280,
    height: 200,
    showConnections: true,
    showCameraArrow: true,
    clickToNavigate: true,
    showFloorTabs: floors.length > 1,
    autoSwitchFloor: true,
    visible: true
  };
}
function layoutNodes(nodeIds, neighbors) {
  var _a;
  const n = nodeIds.length;
  if (n === 0) return /* @__PURE__ */ new Map();
  if (n === 1) return /* @__PURE__ */ new Map([[nodeIds[0], { x: CANVAS_W / 2, y: CANVAS_H / 2 }]]);
  const positions = /* @__PURE__ */ new Map();
  const cx = CANVAS_W / 2;
  const cy = CANVAS_H / 2;
  const initRadius = Math.min(cx, cy) - PADDING;
  nodeIds.forEach((id, i) => {
    const angle = i / n * Math.PI * 2 - Math.PI / 2;
    positions.set(id, {
      x: cx + Math.cos(angle) * initRadius,
      y: cy + Math.sin(angle) * initRadius
    });
  });
  const ITERATIONS = 80;
  const REPULSION = 5e3;
  const ATTRACTION = 0.05;
  const DAMPING = 0.85;
  const velocities = /* @__PURE__ */ new Map();
  for (const id of nodeIds) velocities.set(id, { x: 0, y: 0 });
  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = positions.get(nodeIds[i]);
        const b = positions.get(nodeIds[j]);
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) {
          dx = 1;
          dy = 1;
          dist = 1.41;
        }
        const force = REPULSION / (dist * dist);
        const fx = dx / dist * force;
        const fy = dy / dist * force;
        velocities.get(nodeIds[i]).x += fx;
        velocities.get(nodeIds[i]).y += fy;
        velocities.get(nodeIds[j]).x -= fx;
        velocities.get(nodeIds[j]).y -= fy;
      }
    }
    for (const id of nodeIds) {
      const pos = positions.get(id);
      for (const nbr of (_a = neighbors.get(id)) != null ? _a : []) {
        if (!positions.has(nbr)) continue;
        const nbrPos = positions.get(nbr);
        const dx = nbrPos.x - pos.x;
        const dy = nbrPos.y - pos.y;
        velocities.get(id).x += dx * ATTRACTION;
        velocities.get(id).y += dy * ATTRACTION;
      }
    }
    for (const id of nodeIds) {
      const pos = positions.get(id);
      velocities.get(id).x += (cx - pos.x) * 5e-3;
      velocities.get(id).y += (cy - pos.y) * 5e-3;
    }
    for (const id of nodeIds) {
      const pos = positions.get(id);
      const vel = velocities.get(id);
      pos.x += vel.x;
      pos.y += vel.y;
      vel.x *= DAMPING;
      vel.y *= DAMPING;
      pos.x = Math.max(PADDING, Math.min(CANVAS_W - PADDING, pos.x));
      pos.y = Math.max(PADDING, Math.min(CANVAS_H - PADDING, pos.y));
    }
  }
  for (let pass = 0; pass < 5; pass++) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = positions.get(nodeIds[i]);
        const b = positions.get(nodeIds[j]);
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MIN_DIST && dist > 0) {
          const push = (MIN_DIST - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;
          a.x -= nx * push;
          a.y -= ny * push;
          b.x += nx * push;
          b.y += ny * push;
        }
      }
    }
  }
  return positions;
}

let _ajv = null;
let _validate = null;
function getValidator() {
  if (_validate) return _validate;
  _ajv = new Ajv({ allErrors: true, useDefaults: true });
  addFormats(_ajv);
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    required: ["slug", "title", "location", "summary", "scenes"],
    properties: {
      slug: { type: "string" },
      title: { type: "string", minLength: 1 },
      location: { type: "string", minLength: 1 },
      summary: { type: "string", minLength: 1 },
      duration: { type: "string" },
      theme: { type: "string", enum: ["nature", "minimal", "tourism", "urban"], default: "nature" },
      initialSceneId: { type: "string" },
      plugins: { type: "array", items: { type: "string" } },
      mode: { type: "string", enum: ["free", "guided"] },
      guidedDuration: { type: "number", minimum: 0 },
      autoRotate: { type: "boolean" },
      showMinimap: { type: "boolean" },
      transition: { type: "string", enum: ["crossfade", "forward", "fly-through", "crossfade-pan"] },
      transitionDuration: { type: "number", minimum: 0 },
      transitionColor: { type: "string" },
      thumbnailFallbackAfterMs: { type: "number", minimum: 0 },
      preloadEnabled: { type: "boolean" },
      preloadRadius: { type: "number", minimum: 0 },
      minOverlayMs: { type: "number", minimum: 0 },
      scenes: {
        type: "array",
        minItems: 0,
        items: {
          type: "object",
          required: ["id", "title", "panorama", "thumbnail"],
          properties: {
            id: { type: "string" },
            title: { type: "string", minLength: 1 },
            subtitle: { type: "string", default: "" },
            panorama: { type: "string", minLength: 1 },
            previewPanorama: { type: "string", minLength: 1 },
            mobilePanorama: { type: "string", minLength: 1 },
            thumbnail: { type: "string", minLength: 1 },
            editorPanorama: { type: "string", minLength: 1 },
            initialYaw: { type: "number", default: 0 },
            initialPitch: { type: "number", default: 0 },
            initialFov: { type: "number", minimum: 30, maximum: 120, default: 75 },
            defaultCameraEnabled: { type: "boolean", default: false },
            panoramaRotation: { type: "number", default: 0 },
            brightness: { type: "number", minimum: 0.5, maximum: 2, default: 1.25 },
            highlightCompression: { type: "number", minimum: 0, maximum: 1, default: 0 },
            coordinates: {
              type: "array",
              minItems: 2,
              maxItems: 2,
              items: { type: "number" }
            },
            showOnMap: { type: "boolean", default: false },
            markers: { type: "array", default: [] }
          }
        }
      }
    }
  };
  _validate = _ajv.compile(schema);
  return _validate;
}
function compileTour(raw) {
  var _a, _b, _c, _d;
  const validate = getValidator();
  const valid = validate(raw);
  if (!valid) {
    const errors = ((_a = validate.errors) != null ? _a : []).map(
      (e) => `[${e.instancePath || "(root)"}] ${e.message}`
    );
    return { ok: false, errors };
  }
  const data = raw;
  const warnings = [];
  const scenes = data.scenes.map((s, i) => {
    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k;
    const markers = ((_a2 = s.markers) != null ? _a2 : []).map((m) => {
      if (!m.id || !m.plugin || !m.label) {
        warnings.push(`Scene[${i}].markers: marker thi\u1EBFu id/plugin/label \u2014 b\u1ECB b\u1ECF qua.`);
        return null;
      }
      return m;
    }).filter(Boolean);
    return {
      id: s.id,
      title: s.title,
      subtitle: (_b2 = s.subtitle) != null ? _b2 : "",
      panorama: s.panorama,
      // Existing uploaded scenes already have a 2K editor panorama. Reuse it
      // as the progressive viewer preview until the tour is uploaded again.
      previewPanorama: (_c2 = s.previewPanorama) != null ? _c2 : s.editorPanorama,
      mobilePanorama: s.mobilePanorama,
      thumbnail: s.thumbnail,
      editorPanorama: s.editorPanorama,
      initialYaw: (_d2 = s.initialYaw) != null ? _d2 : 0,
      initialPitch: (_e = s.initialPitch) != null ? _e : 0,
      initialFov: (_f = s.initialFov) != null ? _f : 75,
      defaultCameraEnabled: (_g = s.defaultCameraEnabled) != null ? _g : false,
      panoramaRotation: (_h = s.panoramaRotation) != null ? _h : 0,
      brightness: (_i = s.brightness) != null ? _i : 1.25,
      highlightCompression: (_j = s.highlightCompression) != null ? _j : 0,
      coordinates: s.coordinates,
      showOnMap: (_k = s.showOnMap) != null ? _k : false,
      markers
    };
  });
  if (data.initialSceneId) {
    const exists = scenes.some((s) => s.id === data.initialSceneId);
    if (!exists) {
      warnings.push(`initialSceneId '${data.initialSceneId}' kh\xF4ng t\u1ED3n t\u1EA1i trong scenes \u2014 s\u1EBD d\xF9ng scene \u0111\u1EA7u ti\xEAn.`);
    }
  }
  const tour = {
    slug: data.slug,
    title: data.title,
    location: data.location,
    summary: data.summary,
    duration: data.duration,
    theme: (_b = data.theme) != null ? _b : "nature",
    initialSceneId: data.initialSceneId,
    plugins: (_c = data.plugins) != null ? _c : [],
    mode: data.mode,
    guidedDuration: data.guidedDuration,
    autoRotate: data.autoRotate,
    showMinimap: data.showMinimap,
    transition: data.transition,
    transitionDuration: data.transitionDuration,
    transitionColor: data.transitionColor,
    thumbnailFallbackAfterMs: data.thumbnailFallbackAfterMs,
    preloadEnabled: data.preloadEnabled,
    preloadRadius: data.preloadRadius,
    minOverlayMs: data.minOverlayMs,
    map: (_d = data.map) != null ? _d : generateAutoMap(scenes),
    scenes
  };
  return { ok: true, tour, warnings };
}

const staticTours = generatedTours;
const TOURS_DIR = resolve(process.cwd(), "tours");
function loadTour(slug) {
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    if (existsSync(filePath)) {
      const raw = readFileSync(filePath, "utf-8");
      const parsed = parseYaml(raw);
      if (parsed.ok) {
        const compiled = compileTour(parsed.data);
        if (compiled.ok) {
          return compiled.tour;
        } else {
          console.error(`[yamlLoader] Schema validation failed (${slug}):`, compiled.errors);
        }
      } else {
        console.error(`[yamlLoader] YAML parse error (${slug}):`, parsed.error);
      }
    }
  } catch (e) {
    console.error(`[yamlLoader] Failed to read ${slug}.yaml from disk:`, e);
  }
  if (staticTours[slug]) {
    return JSON.parse(JSON.stringify(staticTours[slug]));
  }
  return null;
}
function listTours() {
  var _a, _b, _c, _d, _e, _f, _g;
  const tourSlugs = new Set(Object.keys(staticTours));
  try {
    if (existsSync(TOURS_DIR)) {
      const files = readdirSync(TOURS_DIR).filter((f) => f.endsWith(".yaml"));
      for (const file of files) {
        tourSlugs.add(file.replace(/\.yaml$/, ""));
      }
    }
  } catch {
  }
  const entries = [];
  for (const slug of tourSlugs) {
    const tour = loadTour(slug);
    if (tour) {
      const preferredScene = (_c = (_a = tour.scenes) == null ? void 0 : _a.find((scene) => scene.id === tour.initialSceneId)) != null ? _c : (_b = tour.scenes) == null ? void 0 : _b[0];
      entries.push({
        slug: tour.slug,
        title: tour.title,
        location: tour.location,
        summary: tour.summary,
        theme: tour.theme,
        sceneCount: (_e = (_d = tour.scenes) == null ? void 0 : _d.length) != null ? _e : 0,
        firstSceneId: preferredScene == null ? void 0 : preferredScene.id,
        cover: (_g = (_f = tour.scenes) == null ? void 0 : _f[0]) == null ? void 0 : _g.thumbnail
      });
    }
  }
  return entries;
}
function saveTour(slug, config) {
  if (staticTours[slug]) {
    staticTours[slug] = JSON.parse(JSON.stringify(config));
  }
  const filePath = join(TOURS_DIR, `${slug}.yaml`);
  writeFileSync(filePath, dumpYaml(config), "utf-8");
}
function deleteTour(slug) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return "not-found";
  if (Object.prototype.hasOwnProperty.call(staticTours, slug)) return "protected";
  const filePath = join(TOURS_DIR, `${slug}.yaml`);
  if (!existsSync(filePath)) return "not-found";
  unlinkSync(filePath);
  return "deleted";
}
function saveSceneMarkers(slug, sceneId, markers) {
  const tour = loadTour(slug);
  if (!tour) return null;
  const sceneIndex = tour.scenes.findIndex((s) => s.id === sceneId);
  if (sceneIndex === -1) return null;
  tour.scenes[sceneIndex].markers = markers;
  saveTour(slug, tour);
  return tour;
}

const _slug__delete = defineEventHandler((event) => {
  var _a;
  const slug = (_a = getRouterParam(event, "slug")) != null ? _a : "";
  const result = deleteTour(slug);
  if (result === "protected") {
    throw createError({
      statusCode: 409,
      statusMessage: "\u0110\xE2y l\xE0 tour h\u1EC7 th\u1ED1ng n\xEAn kh\xF4ng th\u1EC3 x\xF3a t\u1EEB trang qu\u1EA3n tr\u1ECB."
    });
  }
  if (result === "not-found") {
    throw createError({ statusCode: 404, statusMessage: "Kh\xF4ng t\xECm th\u1EA5y tour c\u1EA7n x\xF3a." });
  }
  return { ok: true, slug };
});

const _slug__delete$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__delete
}, Symbol.toStringTag, { value: 'Module' }));

const _slug__post = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const body = await readBody(event);
  if (!body || !body.slug || !Array.isArray(body.scenes)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid tour config body" });
  }
  try {
    saveTour(slug, body);
    return { ok: true, slug, tour: body };
  } catch (err) {
    throw createError({ statusCode: 500, statusMessage: `Could not save tour: ${err}` });
  }
});

const _slug__post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__post
}, Symbol.toStringTag, { value: 'Module' }));

const markers_post = defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug") || "";
  const sceneId = getRouterParam(event, "sceneId") || "";
  const body = await readBody(event);
  if (!body || !Array.isArray(body.markers)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid markers body" });
  }
  const updatedTour = saveSceneMarkers(slug, sceneId, body.markers);
  if (!updatedTour) {
    throw createError({ statusCode: 404, statusMessage: `Scene '${sceneId}' or Tour '${slug}' not found` });
  }
  return { ok: true, slug, sceneId, tour: updatedTour };
});

const markers_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: markers_post
}, Symbol.toStringTag, { value: 'Module' }));

function createUniqueSlug() {
  const base = `tour-moi-${Date.now().toString(36)}`;
  let slug = base;
  let suffix = 2;
  while (loadTour(slug)) slug = `${base}-${suffix++}`;
  return slug;
}
const index_post = defineEventHandler((event) => {
  const slug = createUniqueSlug();
  const tour = {
    slug,
    title: "Tour m\u1EDBi",
    location: "Ch\u01B0a c\u1EADp nh\u1EADt",
    summary: "Tour m\u1EDBi ch\u01B0a c\xF3 n\u1ED9i dung.",
    theme: "nature",
    plugins: [],
    mode: "free",
    autoRotate: false,
    showMinimap: false,
    scenes: []
  };
  saveTour(slug, tour);
  if (!loadTour(slug)) {
    throw createError({
      statusCode: 500,
      statusMessage: "File tour \u0111\xE3 \u0111\u01B0\u1EE3c ghi nh\u01B0ng c\u1EA5u h\xECnh kh\xF4ng th\u1EC3 t\u1EA3i l\u1EA1i. H\xE3y ki\u1EC3m tra schema tour."
    });
  }
  setResponseStatus(event, 201);
  return { ok: true, slug, tour };
});

const index_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post
}, Symbol.toStringTag, { value: 'Module' }));

const MIN_WIDTH = 4096;
const MIN_HEIGHT = 2048;
const IDEAL_WIDTH = 5760;
const IDEAL_RATIO_MIN = 1.9;
const IDEAL_RATIO_MAX = 2.1;
const MAX_FILE_SIZE_MB = 60;
const THUMBNAIL_MAX_PX = 1024;
const validate_post = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const errors = [];
  const warnings = [];
  const recommendations = [];
  let buffer;
  let filename = "unknown";
  let fileSizeKB = 0;
  const contentType = (_a = getHeader(event, "content-type")) != null ? _a : "";
  if (contentType.includes("multipart/form-data")) {
    const form = await readMultipartFormData(event);
    const file = form == null ? void 0 : form.find((f) => f.name === "file");
    if (!(file == null ? void 0 : file.data)) {
      throw createError({ statusCode: 400, statusMessage: 'Kh\xF4ng t\xECm th\u1EA5y file "file" trong form-data.' });
    }
    buffer = file.data;
    filename = (_b = file.filename) != null ? _b : "unknown";
    fileSizeKB = Math.round(buffer.length / 1024);
  } else {
    const body = await readBody(event);
    if (!(body == null ? void 0 : body.url)) {
      throw createError({ statusCode: 400, statusMessage: "C\u1EA7n g\u1EEDi url ho\u1EB7c file multipart." });
    }
    const res = await fetch(body.url);
    if (!res.ok) {
      throw createError({ statusCode: 400, statusMessage: `Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c URL: ${res.status}` });
    }
    const ab = await res.arrayBuffer();
    buffer = Buffer.from(ab);
    filename = (_c = body.url.split("/").pop()) != null ? _c : "unknown";
    fileSizeKB = Math.round(buffer.length / 1024);
  }
  const img = sharp(buffer);
  const meta = await img.metadata();
  const width = (_d = meta.width) != null ? _d : 0;
  const height = (_e = meta.height) != null ? _e : 0;
  const format = (_f = meta.format) != null ? _f : "unknown";
  const aspectRatio = height > 0 ? +(width / height).toFixed(3) : 0;
  if (fileSizeKB > MAX_FILE_SIZE_MB * 1024) {
    warnings.push(`File qu\xE1 l\u1EDBn (${(fileSizeKB / 1024).toFixed(1)} MB). Khuy\u1EBFn ngh\u1ECB d\u01B0\u1EDBi ${MAX_FILE_SIZE_MB} MB.`);
  }
  if (fileSizeKB < 500) {
    warnings.push(`File r\u1EA5t nh\u1ECF (${fileSizeKB} KB) \u2014 c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB n\xE9n qu\xE1 m\u1EA1nh.`);
  }
  if (width <= THUMBNAIL_MAX_PX || height <= THUMBNAIL_MAX_PX) {
    errors.push(`\u1EA2nh qu\xE1 nh\u1ECF (${width}\xD7${height}). \u0110\xE2y c\xF3 th\u1EC3 l\xE0 thumbnail, kh\xF4ng ph\u1EA3i panorama.`);
  }
  if (aspectRatio < IDEAL_RATIO_MIN || aspectRatio > IDEAL_RATIO_MAX) {
    errors.push(`T\u1EF7 l\u1EC7 ${aspectRatio}:1 kh\xF4ng ph\xF9 h\u1EE3p. Equirectangular c\u1EA7n t\u1EF7 l\u1EC7 2:1 (width = height \xD7 2).`);
  }
  if (width < MIN_WIDTH || height < MIN_HEIGHT) {
    errors.push(`\u0110\u1ED9 ph\xE2n gi\u1EA3i ${width}\xD7${height} th\u1EA5p h\u01A1n t\u1ED1i thi\u1EC3u ${MIN_WIDTH}\xD7${MIN_HEIGHT}.`);
  } else if (width < IDEAL_WIDTH) {
    warnings.push(`\u0110\u1ED9 ph\xE2n gi\u1EA3i ${width}px. Khuy\u1EBFn ngh\u1ECB ${IDEAL_WIDTH}px \u0111\u1EC3 tr\xE1nh m\u1EDD khi zoom.`);
  }
  if (format !== "jpeg" && format !== "webp") {
    warnings.push(`Format "${format}" \u2014 JPEG ho\u1EB7c WebP \u0111\u01B0\u1EE3c \u01B0u ti\xEAn cho panorama.`);
  }
  let jpegQualityEstimate = -1;
  if (format === "jpeg") {
    const reencoded = await sharp(buffer).jpeg({ quality: 95 }).toBuffer();
    const ratio = buffer.length / reencoded.length;
    if (ratio < 0.35) {
      jpegQualityEstimate = 50;
      warnings.push(`JPEG quality \u01B0\u1EDBc l\u01B0\u1EE3ng th\u1EA5p (~50) \u2014 \u1EA3nh c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB n\xE9n qu\xE1 m\u1EA1nh.`);
    } else if (ratio < 0.55) {
      jpegQualityEstimate = 65;
      warnings.push(`JPEG quality \u01B0\u1EDBc l\u01B0\u1EE3ng trung b\xECnh (~65).`);
    } else if (ratio < 0.75) {
      jpegQualityEstimate = 80;
    } else {
      jpegQualityEstimate = 90;
    }
  }
  let sharpnessScore = 0;
  try {
    const gray = await sharp(buffer).resize(512, 256, { fit: "fill" }).grayscale().raw().toBuffer({ resolveWithObject: true });
    const { data, info } = gray;
    const totalPx = info.width * info.height;
    let sum = 0, sumSq = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
      sumSq += data[i] * data[i];
    }
    const mean = sum / totalPx;
    const variance = sumSq / totalPx - mean * mean;
    sharpnessScore = +variance.toFixed(1);
    if (sharpnessScore < 150) {
      warnings.push(`\u0110\u1ED9 n\xE9t \u01B0\u1EDBc l\u01B0\u1EE3ng th\u1EA5p (score: ${sharpnessScore}). \u1EA2nh c\xF3 th\u1EC3 \u0111\xE3 b\u1ECB denoise ho\u1EB7c over-smooth.`);
    } else if (sharpnessScore < 350) {
      recommendations.push(`\u0110\u1ED9 n\xE9t trung b\xECnh (score: ${sharpnessScore}). C\xF3 th\u1EC3 th\xEAm nh\u1EB9 sharpen.`);
    }
  } catch {
    warnings.push("Kh\xF4ng th\u1EC3 t\xEDnh to\xE1n \u0111\u1ED9 n\xE9t.");
  }
  if (errors.length === 0 && warnings.length === 0) {
    recommendations.push("\u2713 \u1EA2nh \u0111\u1EA1t ti\xEAu chu\u1EA9n panorama 360\xB0.");
  }
  if (width >= IDEAL_WIDTH && sharpnessScore >= 350) {
    recommendations.push("\u2713 Ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh r\u1EA5t t\u1ED1t.");
  }
  return {
    ok: errors.length === 0,
    filename,
    width,
    height,
    aspectRatio,
    format,
    fileSizeKB,
    jpegQualityEstimate,
    sharpnessScore,
    errors,
    warnings,
    recommendations
  };
});

const validate_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: validate_post
}, Symbol.toStringTag, { value: 'Module' }));

const places = [
  {
    slug: "heritage-ridge",
    title: "Tour 360\xB0 Th\u1EF1c \u0110\u1ECBa",
    location: "S\xF4ng V\xE2n Art Space \u2013 Nam Hoa L\u01B0, Ninh B\xECnh",
    summary: "Kh\xE1m ph\xE1 kh\xF4ng gian \u0111i\xEAu kh\u1EAFc \u0111\xE1 \u0111\u01B0\u01A1ng \u0111\u1EA1i S\xF4ng V\xE2n gi\u1EEFa l\xE0ng ngh\u1EC1 Ninh V\xE2n qua panorama 360\xB0.",
    duration: "T\u1EF1 do",
    curator: "View360 Studio",
    scenes: [
      // ── Khu vực trung tâm – 7 ảnh ──────────────────────────────────
      {
        id: "scene-c1",
        title: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
        subtitle: "To\xE0n c\u1EA3nh khu v\u1EF1c trung t\xE2m, \u0111i\u1EC3m kh\u1EDFi \u0111\u1EA7u c\u1EE7a h\xE0nh tr\xECnh.",
        panorama: "/images/1788771876123.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876123.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c1-next",
            label: "R\xECa R\u1EEBng Th\u01B0a",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn R\xECa R\u1EEBng Th\u01B0a.",
            targetSceneId: "scene-c2"
          },
          {
            id: "c1-trbay1",
            label: "Tr\u1EA3ng Bay 1",
            yaw: -1.57,
            pitch: -0.3,
            note: "Kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-1"
          }
        ]
      },
      {
        id: "scene-c2",
        title: "R\xECa R\u1EEBng Th\u01B0a",
        subtitle: "Ranh gi\u1EDBi gi\u1EEFa r\u1EEBng v\xE0 tr\u1EA3ng c\u1ECF, \xE1nh s\xE1ng l\u1ECDc qua t\xE1n l\xE1.",
        panorama: "/images/1788771876132.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876132.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c2-prev",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i \u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng.",
            targetSceneId: "scene-c1"
          },
          {
            id: "c2-next",
            label: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng.",
            targetSceneId: "scene-c3"
          }
        ]
      },
      {
        id: "scene-c3",
        title: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
        subtitle: "Con \u0111\u01B0\u1EDDng nh\u1ECF xuy\xEAn qua th\u1EA3m th\u1EF1c v\u1EADt, d\u1EA5u ch\xE2n ng\u01B0\u1EDDi \u0111i tr\u01B0\u1EDBc.",
        panorama: "/images/1788771876143.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876143.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c3-prev",
            label: "R\xECa R\u1EEBng Th\u01B0a",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i R\xECa R\u1EEBng Th\u01B0a.",
            targetSceneId: "scene-c2"
          },
          {
            id: "c3-next",
            label: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng.",
            targetSceneId: "scene-c4"
          }
        ]
      },
      {
        id: "scene-c4",
        title: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
        subtitle: "Kh\xF4ng gian m\u1EDF r\u1ED9ng, t\u1EA7m nh\xECn 360\xB0 kh\xF4ng b\u1ECB che khu\u1EA5t.",
        panorama: "/images/1788771876162.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876162.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c4-prev",
            label: "L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i L\u1ED1i M\xF2n Gi\u1EEFa Tr\u1EA3ng.",
            targetSceneId: "scene-c3"
          },
          {
            id: "c4-next",
            label: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn G\xF3c Nh\xECn Ph\xEDa N\xFAi.",
            targetSceneId: "scene-c5"
          }
        ]
      },
      {
        id: "scene-c5",
        title: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
        subtitle: "D\xE3y n\xFAi xa ph\xEDa ch\xE2n tr\u1EDDi, m\xE2y tr\xF4i nh\u1EB9 tr\xEAn \u0111\u1EC9nh.",
        panorama: "/images/1788771876173.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876173.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c5-prev",
            label: "B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i B\xE3i C\u1ECF Tho\xE1ng \u0110\xE3ng.",
            targetSceneId: "scene-c4"
          },
          {
            id: "c5-next",
            label: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p.",
            targetSceneId: "scene-c6"
          }
        ]
      },
      {
        id: "scene-c6",
        title: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
        subtitle: "Th\u1EA3m c\xE2y b\u1EE5i d\xE0y \u0111\u1EB7c, n\u01A1i chuy\u1EC3n ti\u1EBFp gi\u1EEFa r\u1EEBng v\xE0 tr\u1EA3ng.",
        panorama: "/images/1788771876183.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876183.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c6-prev",
            label: "G\xF3c Nh\xECn Ph\xEDa N\xFAi",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i G\xF3c Nh\xECn Ph\xEDa N\xFAi.",
            targetSceneId: "scene-c5"
          },
          {
            id: "c6-next",
            label: "\u0110i\u1EC3m H\u1EE3p L\u01B0u",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn \u0110i\u1EC3m H\u1EE3p L\u01B0u.",
            targetSceneId: "scene-c7"
          }
        ]
      },
      {
        id: "scene-c7",
        title: "\u0110i\u1EC3m H\u1EE3p L\u01B0u",
        subtitle: "N\u01A1i ba h\u01B0\u1EDBng \u0111i g\u1EB7p nhau \u2013 c\u1EEDa ng\xF5 v\xE0o khu Tr\u1EA3ng Bay.",
        panorama: "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
        thumbnail: "/thumbnails/trang-bay/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "c7-prev",
            label: "V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i V\xF9ng C\xE2y B\u1EE5i Th\u1EA5p.",
            targetSceneId: "scene-c6"
          },
          {
            id: "c7-trbay2",
            label: "Tr\u1EA3ng Bay 2",
            yaw: 1.57,
            pitch: -0.3,
            note: "Kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          }
        ]
      },
      // ── Trảng Bay 1 – 5 ảnh ────────────────────────────────────────
      {
        id: "scene-tb1-1",
        title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1",
        subtitle: "B\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh t\u1EA1i c\u1EEDa ng\xF5 c\u1EE7a Tr\u1EA3ng Bay 1.",
        panorama: "/images/trbay1/1788771876074.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876074.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-1-back",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 3.14,
            pitch: -0.3,
            note: "Quay l\u1EA1i \u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng.",
            targetSceneId: "scene-c1"
          },
          {
            id: "tb1-1-next",
            label: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn \u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng.",
            targetSceneId: "scene-tb1-2"
          }
        ]
      },
      {
        id: "scene-tb1-2",
        title: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
        subtitle: "M\u1EB7t tr\u1EA3ng ph\u1EB3ng r\u1ED9ng, c\u1ECF xanh m\u01B0\u1EDBt tr\u1EA3i d\xE0i t\u1EDBi t\u1EADn ch\xE2n tr\u1EDDi.",
        panorama: "/images/trbay1/1788771876090.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876090.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-2-prev",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-1"
          },
          {
            id: "tb1-2-next",
            label: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-3"
          }
        ]
      },
      {
        id: "scene-tb1-3",
        title: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
        subtitle: "H\u01B0\u1EDBng nh\xECn ph\xEDa \u0110\xF4ng, n\u01A1i n\u1EAFng s\xE1ng chi\u1EBFu r\xF5 t\u1EEBng c\u1ECDng c\u1ECF.",
        panorama: "/images/trbay1/1788771876098.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876098.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-3-prev",
            label: "\u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i \u0110\u1ED3ng Tr\u1EA3ng R\u1ED9ng.",
            targetSceneId: "scene-tb1-2"
          },
          {
            id: "tb1-3-next",
            label: "Trung T\xE2m Tr\u1EA3ng Bay 1",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Trung T\xE2m Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-4"
          }
        ]
      },
      {
        id: "scene-tb1-4",
        title: "Trung T\xE2m Tr\u1EA3ng Bay 1",
        subtitle: "\u0110i\u1EC3m gi\u1EEFa c\u1EE7a Tr\u1EA3ng Bay 1, to\xE0n c\u1EA3nh t\u1EE9 ph\xEDa kh\xF4ng b\u1ECB che.",
        panorama: "/images/trbay1/1788771876106.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876106.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-4-prev",
            label: "G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i G\xF3c Ph\xEDa \u0110\xF4ng Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-3"
          },
          {
            id: "tb1-4-next",
            label: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-5"
          }
        ]
      },
      {
        id: "scene-tb1-5",
        title: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
        subtitle: "Ranh gi\u1EDBi t\u1EF1 nhi\xEAn gi\u1EEFa Tr\u1EA3ng Bay 1 v\xE0 Tr\u1EA3ng Bay 2.",
        panorama: "/images/trbay1/1788771876114.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876114.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb1-5-prev",
            label: "Trung T\xE2m Tr\u1EA3ng Bay 1",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i Trung T\xE2m Tr\u1EA3ng Bay 1.",
            targetSceneId: "scene-tb1-4"
          },
          {
            id: "tb1-5-trbay2",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
            yaw: 1.57,
            pitch: -0.3,
            note: "Ti\u1EBFp t\u1EE5c sang C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          }
        ]
      },
      // ── Trảng Bay 2 – 4 ảnh ────────────────────────────────────────
      {
        id: "scene-tb2-1",
        title: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
        subtitle: "B\u1EAFt \u0111\u1EA7u kh\xE1m ph\xE1 khu v\u1EF1c Tr\u1EA3ng Bay 2, \u0111\u1ECBa h\xECnh l\u1EA1 h\u01A1n.",
        panorama: "/images/trbay2/1788771876042.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876042.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-1-back",
            label: "Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng",
            yaw: 3.14,
            pitch: -0.3,
            note: "Quay l\u1EA1i Bi\xEAn Gi\u1EDBi Hai Tr\u1EA3ng.",
            targetSceneId: "scene-tb1-5"
          },
          {
            id: "tb2-1-next",
            label: "V\xF9ng C\u1ECF Lau Cao",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn V\xF9ng C\u1ECF Lau Cao.",
            targetSceneId: "scene-tb2-2"
          }
        ]
      },
      {
        id: "scene-tb2-2",
        title: "V\xF9ng C\u1ECF Lau Cao",
        subtitle: "C\u1ECF lau cao v\xFAt che ph\u1EE7, t\u1EA1o h\xE0nh lang xanh t\u1EF1 nhi\xEAn.",
        panorama: "/images/trbay2/1788771876050.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876050.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-2-prev",
            label: "C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i C\u1ED5ng V\xE0o Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-1"
          },
          {
            id: "tb2-2-next",
            label: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn B\u1EDD R\u1EEBng Ph\xEDa T\xE2y.",
            targetSceneId: "scene-tb2-3"
          }
        ]
      },
      {
        id: "scene-tb2-3",
        title: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
        subtitle: "C\xE2y r\u1EEBng cao v\xFAt ph\xEDa T\xE2y, b\xF3ng m\xE1t che ph\u1EE7 m\u1EB7t tr\u1EA3ng.",
        panorama: "/images/trbay2/1788771876058.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876058.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-3-prev",
            label: "V\xF9ng C\u1ECF Lau Cao",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i V\xF9ng C\u1ECF Lau Cao.",
            targetSceneId: "scene-tb2-2"
          },
          {
            id: "tb2-3-next",
            label: "Cu\u1ED1i Tr\u1EA3ng Bay 2",
            yaw: 0,
            pitch: -0.35,
            note: "Di chuy\u1EC3n \u0111\u1EBFn Cu\u1ED1i Tr\u1EA3ng Bay 2.",
            targetSceneId: "scene-tb2-4"
          }
        ]
      },
      {
        id: "scene-tb2-4",
        title: "Cu\u1ED1i Tr\u1EA3ng Bay 2",
        subtitle: "\u0110i\u1EC3m k\u1EBFt th\xFAc h\xE0nh tr\xECnh \u2013 nh\xECn l\u1EA1i to\xE0n b\u1ED9 con \u0111\u01B0\u1EDDng \u0111\xE3 \u0111i.",
        panorama: "/images/trbay2/1788771876067.jpg",
        thumbnail: "/thumbnails/trang-bay/1788771876067.jpg",
        initialYaw: 0,
        initialPitch: -0.05,
        hotspots: [
          {
            id: "tb2-4-prev",
            label: "B\u1EDD R\u1EEBng Ph\xEDa T\xE2y",
            yaw: 3.14,
            pitch: -0.35,
            note: "Quay l\u1EA1i B\u1EDD R\u1EEBng Ph\xEDa T\xE2y.",
            targetSceneId: "scene-tb2-3"
          },
          {
            id: "tb2-4-start",
            label: "\u0110\u1EC9nh Nh\xECn Ra Thung L\u0169ng",
            yaw: 1.57,
            pitch: -0.3,
            note: "Quay l\u1EA1i \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u c\u1EE7a tour.",
            targetSceneId: "scene-c1"
          }
        ]
      }
    ]
  }
];

const catalogService = {
  listPlaces() {
    return places.map(({ scenes, ...place }) => {
      var _a;
      return {
        ...place,
        sceneCount: scenes.length,
        cover: (_a = scenes[0]) == null ? void 0 : _a.thumbnail
      };
    });
  },
  getPlace(slug) {
    return places.find((place) => place.slug === slug);
  }
};

const places_get = defineEventHandler(() => {
  return {
    service: "catalog-service",
    items: catalogService.listPlaces()
  };
});

const places_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: places_get
}, Symbol.toStringTag, { value: 'Module' }));

const mediaService = {
  withPublicMedia(place, baseUrl = "") {
    if (!baseUrl) {
      return place;
    }
    return {
      ...place,
      scenes: place.scenes.map((scene) => ({
        ...scene,
        panorama: scene.panorama.startsWith("http") ? scene.panorama : `${baseUrl.replace(/\/$/, "")}/${scene.panorama.replace(/^\//, "")}`
      }))
    };
  }
};

const _slug__get$2 = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug") || "";
  const place = catalogService.getPlace(slug);
  if (!place) {
    throw createError({
      statusCode: 404,
      statusMessage: "Experience not found"
    });
  }
  const config = useRuntimeConfig(event);
  return {
    service: "experience-service",
    item: mediaService.withPublicMedia(place, config.public.mediaBaseUrl)
  };
});

const _slug__get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__get$2
}, Symbol.toStringTag, { value: 'Module' }));

const tourService = {
  /** Get a single tour by slug. Returns null if not found. */
  getTour(slug) {
    return loadTour(slug);
  },
  /** List all tours (lightweight, no scenes included). */
  listTours() {
    return listTours();
  },
  /**
   * Resolve media URLs.
   * If a mediaBaseUrl is set (e.g. MinIO), prefix all /images and /thumbnails paths.
   */
  withMedia(tour, baseUrl = "") {
    if (!baseUrl) return tour;
    const prefix = baseUrl.replace(/\/$/, "");
    const prefixUrl = (url) => url.startsWith("http") ? url : `${prefix}/${url.replace(/^\//, "")}`;
    return {
      ...tour,
      scenes: tour.scenes.map((scene) => ({
        ...scene,
        panorama: prefixUrl(scene.panorama),
        thumbnail: prefixUrl(scene.thumbnail)
      }))
    };
  }
};

const tours_get = defineEventHandler(() => {
  return {
    service: "tour-catalog",
    items: tourService.listTours()
  };
});

const tours_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: tours_get
}, Symbol.toStringTag, { value: 'Module' }));

const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug") || "";
  const tour = tourService.getTour(slug);
  if (!tour) {
    throw createError({ statusCode: 404, statusMessage: `Tour '${slug}' not found` });
  }
  const config = useRuntimeConfig(event);
  return {
    service: "tour-experience",
    item: tourService.withMedia(tour, config.public.mediaBaseUrl)
  };
});

const _slug__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__get
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}

function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":false};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const handler = defineRenderHandler((event) => {
	
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	return renderRoute(event, ssrError);
});
async function renderRoute(event, ssrError) {
	const nitroApp = useNitroApp();
	
	const ssrContext = createSSRContext(event);
	
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		setSSRError(ssrContext, ssrError);
	}
	
	const routeOptions = getRouteRules(event);
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	
	!ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	const isRenderingPayload = (routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		
		
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	
	
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		
		
		
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		
		
		
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		
		ssrContext.head.push({ script: renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  }, {
			...headEntryOptions,
			
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			
			
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
