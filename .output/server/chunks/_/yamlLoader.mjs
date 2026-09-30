globalThis.__timing__.logStart('Load chunks/_/yamlLoader');import { writeFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as yaml from 'js-yaml';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

var slug = "trang-bay";
var title = "Tour 360° Sông Vân Art Space";
var location = "Nam Hoa Lư, Ninh Bình";
var summary = "Khám phá Sông Vân Art Space giữa làng nghề đá Ninh Vân. Dạo qua không gian sống, xưởng sáng tác và những khoảng trưng bày điêu khắc đá đương đại bằng trải nghiệm panorama 360°.";
var duration = "Tự do";
var theme = "minimal";
var initialSceneId = "scene-c7";
var plugins = [
	"navigation",
	"info"
];
var scenes = [
	{
		id: "scene-c7",
		title: "Cổng Sông Vân Art Space",
		subtitle: "Điểm đón khách và cửa ngõ bước vào hành trình khám phá nghệ thuật.",
		panorama: "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
		thumbnail: "/thumbnails/trang-bay/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "marker-navigation-1789273190758",
				plugin: "navigation",
				label: "Lối vào",
				yaw: -3.0244,
				pitch: -0.4339,
				targetScene: "scene-c5",
				rotZ: -0.47123889803846897,
				rotX: 0.8552113334772214,
				rotY: 0
			},
			{
				id: "marker-info-1789274132769",
				plugin: "panel",
				label: "Cổng chính",
				yaw: 2.627,
				pitch: -0.0173,
				contents: [
					{
						id: "marker-info-1789274132769-text",
						type: "text",
						content: "Sông Vân Art space…\nKhông gian nghệ thuật cũng là tư gia của gia đình nghệ sỹ Lương Trịnh mang tên Lương gia Art space đã là nơi khởi động những hoạt động nghệ thuật điêu khắc đá đương đại từ năm 2018 với workshop đầu tiên mang tên ‘Về với đá’, năm 2021 workshop và triển lãm điêu khắc đá Biến Chuyển. Mong muốn mở rộng và tạo lập một không gian trưng bày hoàn chỉnh hơn. Vừa tìm đến sự mới mẻ, hoà đồng với không gian sống, vừa tạo nên sự hấp dẫn của một điểm đến giữa lòng làng nghề đá. Lương gia Art space đã quyết định đổi tên thành Sông Vân Art space.  Triển lãm của hai tác giả cũng là sự khai mở cho một không gian mới, một khát vọng tạo dựng không gian cho đá của Lương Trịnh.",
						presentation: "text-and-audio",
						speech: {
							lang: "vi-VN",
							rate: 1,
							pitch: 1,
							src: "/uploads/audio/1790759242766-58jae6uqv0h.wav"
						}
					},
					{
						id: "block-1790753456844",
						type: "image3d",
						image: "",
						caption: ""
					},
					{
						id: "block-1790753465322",
						type: "ai-chat",
						context: ""
					}
				],
				placement: "horizontal"
			},
			{
				id: "h1790652579044",
				plugin: "panel",
				label: "Xem ảnh 3D",
				yaw: -2.311,
				pitch: -0.053,
				contents: [
					{
						id: "h1790652579044-image",
						type: "image3d",
						image: "",
						caption: ""
					}
				]
			},
			{
				id: "h1790652586972",
				label: "Xem video",
				yaw: -2.89,
				pitch: 0.231,
				plugin: "video",
				src: "https://www.youtube.com/watch?v=ujf9KANJC8U",
				width: 720,
				height: 405
			}
		]
	},
	{
		id: "scene-c1",
		title: "Xưởng đá",
		subtitle: "Điểm nhìn mở đầu, nơi tác phẩm đá gặp ánh sáng và cảnh quan Sông Vân.",
		panorama: "/images/1788771876123.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876123.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007426579",
				label: "Cảnh mới",
				yaw: -2.9193,
				pitch: -0.3541,
				plugin: "navigation",
				targetScene: "scene-c2",
				rotation: 0.05235987755982988,
				rotZ: 0,
				rotX: 0.890117918517108,
				rotY: 0
			}
		]
	},
	{
		id: "scene-c2",
		title: "Vườn Tượng",
		subtitle: "Khoảng trưng bày ngoài trời kết nối cây xanh, mặt nước và điêu khắc.",
		panorama: "/images/1788771876132.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876132.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007374178",
				label: "Khoảng trưng bày mở",
				yaw: 2.3537,
				pitch: -0.3399,
				plugin: "navigation",
				targetScene: "scene-c4",
				rotX: 0.890117918517108
			},
			{
				id: "h1790589811645",
				label: "Xưởng đá",
				yaw: -0.7323,
				pitch: -0.3948,
				plugin: "navigation",
				targetScene: "scene-c1",
				rotX: 0.8726646259971648,
				rotZ: 0,
				rotY: 0
			},
			{
				id: "h1790592598215",
				label: "Cổng trừng bày 1",
				yaw: 0.3657,
				pitch: -0.3879,
				plugin: "navigation",
				targetScene: "scene-tb1-5",
				rotX: 0.8726646259971648
			}
		]
	},
	{
		id: "scene-c3",
		title: "Sảnh tân gia",
		subtitle: "Sân trước khu nhà tân gia",
		panorama: "/images/1788771876143.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876143.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007786937",
				label: "Không gian trừng bày mở",
				yaw: -2.7305,
				pitch: -0.3725,
				plugin: "navigation",
				targetScene: "scene-c4",
				rotX: 0.8726646259971648,
				rotZ: -0.6981317007977318,
				rotY: 0.6457718232379019
			},
			{
				id: "h1790007866785",
				label: "Khu trưng bày 2",
				yaw: 0.5523,
				pitch: -0.2379,
				plugin: "navigation",
				targetScene: "scene-tb2-3",
				rotX: 0.8726646259971648
			},
			{
				id: "h1790587903930",
				plugin: "panel",
				label: "Nhà tân gia",
				yaw: -0.5243,
				pitch: 0.4021,
				contents: [
					{
						id: "h1790587903930-text",
						type: "text",
						content: "Khung sảnh chính của tân gia. "
					}
				]
			}
		]
	},
	{
		id: "scene-c4",
		title: "Khoảng Trưng Bày Mở",
		subtitle: "Không gian ngoài trời với tầm nhìn rộng dành cho các tác phẩm điêu khắc.",
		panorama: "/images/1788771876162.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876162.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "c4-next",
				plugin: "navigation",
				label: "Không Gian Bên Sông",
				yaw: 1.9112,
				pitch: -0.3851,
				targetScene: "scene-c5",
				rotX: 0.8726646259971648
			},
			{
				id: "marker-navigation-1789271121754",
				plugin: "navigation",
				label: "Vườn tượng",
				yaw: -0.928,
				pitch: -0.2786,
				targetScene: "scene-c2",
				rotZ: 0.017453292519943295,
				rotX: 0.8726646259971648
			},
			{
				id: "marker-navigation-1789271195387",
				plugin: "navigation",
				label: "Sảnh tân gia",
				yaw: -0.5325,
				pitch: -0.2259,
				targetScene: "scene-c3",
				rotX: 0.890117918517108,
				rotY: 0.03490658503988659,
				rotZ: 0.20943951023931953
			}
		]
	},
	{
		id: "scene-c5",
		title: "Không Gian Bên Sông",
		subtitle: "Nơi cảnh quan Ninh Bình trở thành một phần của trải nghiệm nghệ thuật.",
		panorama: "/images/1788771876173.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876173.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "c5-next",
				plugin: "navigation",
				label: "Lỗi ra",
				yaw: 1.467,
				pitch: -0.2778,
				targetScene: "scene-c7",
				rotation: 0.5759586531581288,
				rotZ: 0.715584993317675,
				rotX: 0.8726646259971648,
				rotY: -0.47123889803846897
			},
			{
				id: "marker-navigation-1789273292044",
				plugin: "navigation",
				label: "Điểm đến mới",
				yaw: -0.1823,
				pitch: -0.3903,
				targetScene: "scene-c4",
				rotation: -0.9599310885968813,
				rotX: 0.890117918517108,
				rotZ: -1.2566370614359172,
				rotY: 0.6457718232379019
			}
		]
	},
	{
		id: "scene-c6",
		title: "Vườn Đá",
		subtitle: "Những hình khối đá hiện diện giữa cây xanh và nhịp sống thường nhật.",
		panorama: "/images/1788771876183.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876183.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
		]
	},
	{
		id: "scene-tb1-1",
		title: "Lối Vào Xưởng Đá",
		subtitle: "Bắt đầu hành trình tìm hiểu quá trình vật liệu đá trở thành tác phẩm.",
		panorama: "/images/trbay1/1788771876074.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876074.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007757751",
				label: "Cảnh mới",
				yaw: -0.5348,
				pitch: -0.3802,
				plugin: "navigation",
				targetScene: "scene-tb1-2",
				rotX: 0.8726646259971648
			}
		]
	},
	{
		id: "scene-tb1-2",
		title: "Sân Tập Kết Đá",
		subtitle: "Không gian lưu giữ vật liệu và những hình khối đang chờ được đánh thức.",
		panorama: "/images/trbay1/1788771876090.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876090.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007718913",
				label: "Góc chế tác",
				yaw: -0.6099,
				pitch: -0.3349,
				plugin: "navigation",
				targetScene: "scene-tb1-3",
				rotX: 0.8726646259971648
			},
			{
				id: "h1790593075340",
				label: "Lối",
				yaw: 2.3084,
				pitch: -0.3378,
				plugin: "navigation",
				targetScene: "scene-tb1-1",
				rotX: 0.8726646259971648
			}
		]
	},
	{
		id: "scene-tb1-3",
		title: "Góc Chế Tác",
		subtitle: "Nơi có thể quan sát dấu vết lao động và kỹ thuật của làng nghề đá.",
		panorama: "/images/trbay1/1788771876098.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876098.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007660078",
				plugin: "panel",
				label: "Thông tin",
				yaw: -2.3588,
				pitch: -96e-4,
				contents: [
					{
						id: "h1790007660078-text",
						type: "text",
						content: "Là một cái gì đó mà dùng để đựng đồ vật"
					}
				]
			},
			{
				id: "h1790007689339",
				label: "Trung tâm trừng bày 1",
				yaw: 1.0567,
				pitch: -0.4643,
				plugin: "navigation",
				targetScene: "scene-tb1-2",
				rotX: 0.8726646259971648
			},
			{
				id: "h1790592920728",
				label: "Trung tâm xưởng",
				yaw: -0.7255,
				pitch: -0.5227,
				plugin: "navigation",
				targetScene: "scene-tb1-4",
				rotX: 0.8726646259971648
			},
			{
				id: "h1790647902226",
				label: "Video",
				yaw: 2.79,
				pitch: -0.0368,
				plugin: "video",
				src: "https://www.youtube.com/watch?v=StfAHz2UdBY",
				width: 2560,
				height: 1440,
				rotY: -0.13962634015954636,
				rotZ: 0,
				rotX: 0.10471975511965977
			}
		]
	},
	{
		id: "scene-tb1-4",
		title: "Trung Tâm Xưởng",
		subtitle: "Điểm nhìn bao quát khu vực sáng tác và hoàn thiện tác phẩm.",
		panorama: "/images/trbay1/1788771876106.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876106.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007619346",
				label: "Cảnh mới",
				yaw: 1.1279,
				pitch: -0.2731,
				plugin: "navigation",
				targetScene: "scene-tb1-5",
				rotX: 0.8726646259971648,
				rotZ: -0.12217304763960307
			},
			{
				id: "h1790592823753",
				label: "Chuyển cảnh",
				yaw: 2.585,
				pitch: -0.266,
				plugin: "navigation",
				targetScene: "scene-tb1-3",
				rotX: 0.8726646259971648
			}
		]
	},
	{
		id: "scene-tb1-5",
		title: "Cổng trưng bày 1",
		subtitle: "Khoảng nối giữa quá trình chế tác và không gian trưng bày hoàn chỉnh.",
		panorama: "/images/trbay1/1788771876114.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876114.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007511095",
				label: "Vườn tượng",
				yaw: -1.3068,
				pitch: -0.3872,
				plugin: "navigation",
				targetScene: "scene-c2",
				rotX: 0.8726646259971648
			},
			{
				id: "h1790592743906",
				label: "Chuyển cảnh",
				yaw: -3.11,
				pitch: -0.171,
				plugin: "navigation",
				targetScene: "scene-tb1-4",
				rotX: 0.8726646259971648
			}
		]
	},
	{
		id: "scene-tb2-1",
		title: "Lối Vào Khu Trưng Bày",
		subtitle: "Cửa ngõ dẫn vào nhóm không gian trưng bày phía trong.",
		panorama: "/images/trbay2/1788771876042.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876042.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
		]
	},
	{
		id: "scene-tb2-2",
		title: "Hành Lang Tác Phẩm",
		subtitle: "Một nhịp chuyển chậm để quan sát hình khối, bề mặt và bóng đổ.",
		panorama: "/images/trbay2/1788771876050.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876050.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
		]
	},
	{
		id: "scene-tb2-3",
		title: "Không gian trừng bày 2",
		subtitle: "Góc thưởng lãm yên tĩnh, nơi ánh sáng làm thay đổi cảm nhận về đá.",
		panorama: "/images/trbay2/1788771876058.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876058.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "h1790007893330",
				label: "Cảnh mới",
				yaw: 0.4139,
				pitch: -0.4477,
				plugin: "navigation",
				targetScene: "scene-c3",
				rotX: 0.890117918517108
			}
		]
	},
	{
		id: "scene-tb2-4",
		title: "Điểm Kết Hành Trình",
		subtitle: "Điểm nhìn cuối để nhìn lại mối liên hệ giữa tác phẩm, làng nghề và cảnh quan.",
		panorama: "/images/trbay2/1788771876067.jpg",
		thumbnail: "/thumbnails/trang-bay/1788771876067.jpg",
		initialYaw: 0,
		initialPitch: -0.05,
		brightness: 1.3,
		markers: [
			{
				id: "tb2-4-prev",
				plugin: "navigation",
				label: "Khoảng Tĩnh",
				yaw: 3.14,
				pitch: -0.35,
				targetScene: "scene-tb2-3"
			},
			{
				id: "tb2-4-home",
				plugin: "navigation",
				label: "Sân Điêu Khắc Bên Sông",
				yaw: 1.57,
				pitch: -0.3,
				targetScene: "scene-c1"
			}
		]
	}
];
const trangBayGenerated = {
	slug: slug,
	title: title,
	location: location,
	summary: summary,
	duration: duration,
	theme: theme,
	initialSceneId: initialSceneId,
	plugins: plugins,
	scenes: scenes
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
      scenes: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["id", "title", "panorama", "thumbnail"],
          properties: {
            id: { type: "string" },
            title: { type: "string", minLength: 1 },
            subtitle: { type: "string", default: "" },
            panorama: { type: "string", minLength: 1 },
            thumbnail: { type: "string", minLength: 1 },
            initialYaw: { type: "number", default: 0 },
            initialPitch: { type: "number", default: 0 },
            brightness: { type: "number", minimum: 0.5, maximum: 2, default: 1.25 },
            coordinates: {
              type: "array",
              minItems: 2,
              maxItems: 2,
              items: { type: "number" }
            },
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
  var _a, _b, _c;
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
    var _a2, _b2, _c2, _d, _e;
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
      thumbnail: s.thumbnail,
      initialYaw: (_c2 = s.initialYaw) != null ? _c2 : 0,
      initialPitch: (_d = s.initialPitch) != null ? _d : 0,
      brightness: (_e = s.brightness) != null ? _e : 1.25,
      coordinates: s.coordinates,
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
    scenes
  };
  return { ok: true, tour, warnings };
}

const staticTours = {
  "trang-bay": trangBayGenerated
};
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
  var _a, _b, _c, _d;
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
      entries.push({
        slug: tour.slug,
        title: tour.title,
        location: tour.location,
        summary: tour.summary,
        theme: tour.theme,
        sceneCount: (_b = (_a = tour.scenes) == null ? void 0 : _a.length) != null ? _b : 0,
        cover: (_d = (_c = tour.scenes) == null ? void 0 : _c[0]) == null ? void 0 : _d.thumbnail
      });
    }
  }
  return entries;
}
function saveTour(slug, config) {
  if (staticTours[slug]) {
    staticTours[slug] = JSON.parse(JSON.stringify(config));
  }
  try {
    const filePath = join(TOURS_DIR, `${slug}.yaml`);
    writeFileSync(filePath, dumpYaml(config), "utf-8");
  } catch (err) {
    console.warn(`[saveTour] Disk write skipped (normal on Vercel): ${err}`);
  }
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

export { saveSceneMarkers as a, loadTour as b, listTours as l, saveTour as s };;globalThis.__timing__.logEnd('Load chunks/_/yamlLoader');
//# sourceMappingURL=yamlLoader.mjs.map
