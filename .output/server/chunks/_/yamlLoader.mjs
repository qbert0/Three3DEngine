globalThis.__timing__.logStart('Load chunks/_/yamlLoader');import { existsSync, unlinkSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
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
var transition = "forward";
var map = {
	position: "bottom-right",
	width: 300,
	height: 220,
	showConnections: true,
	showCameraArrow: true,
	clickToNavigate: true,
	showFloorTabs: true,
	autoSwitchFloor: true,
	defaultFloorId: "outdoor",
	floors: [
		{
			id: "outdoor",
			name: "Ngoài trời",
			shortName: "Sân",
			imageUrl: "",
			imageWidth: 800,
			imageHeight: 600,
			nodes: [
				{
					id: "scene-c7",
					name: "Cổng chính",
					x: 700,
					y: 520,
					neighbors: [
						"scene-c5"
					]
				},
				{
					id: "scene-c5",
					name: "Bên sông",
					x: 580,
					y: 420,
					neighbors: [
						"scene-c7",
						"scene-c4"
					]
				},
				{
					id: "scene-c4",
					name: "Trưng bày mở",
					x: 400,
					y: 340,
					neighbors: [
						"scene-c5",
						"scene-c2",
						"scene-c3"
					]
				},
				{
					id: "scene-c2",
					name: "Vườn tượng",
					x: 240,
					y: 300,
					neighbors: [
						"scene-c4",
						"scene-c1"
					],
					exitTo: {
						floorId: "tb1",
						nodeId: "scene-tb1-5"
					}
				},
				{
					id: "scene-c1",
					name: "Xưởng đá",
					x: 120,
					y: 240,
					neighbors: [
						"scene-c2"
					]
				},
				{
					id: "scene-c3",
					name: "Sảnh tân gia",
					x: 400,
					y: 180,
					neighbors: [
						"scene-c4"
					],
					exitTo: {
						floorId: "tb2",
						nodeId: "scene-tb2-3"
					}
				},
				{
					id: "scene-c6",
					name: "Vườn đá",
					x: 100,
					y: 440,
					neighbors: [
					]
				},
				{
					id: "s1790786479857",
					name: "Cảnh mới",
					x: 520,
					y: 130,
					neighbors: [
						"scene-c3"
					]
				}
			]
		},
		{
			id: "tb1",
			name: "Khu Xưởng & TB1",
			shortName: "Xưởng",
			imageUrl: "",
			imageWidth: 800,
			imageHeight: 300,
			nodes: [
				{
					id: "scene-tb1-1",
					name: "Lối vào xưởng",
					x: 80,
					y: 150,
					neighbors: [
						"scene-tb1-2"
					]
				},
				{
					id: "scene-tb1-2",
					name: "Sân tập kết",
					x: 230,
					y: 150,
					neighbors: [
						"scene-tb1-1",
						"scene-tb1-3"
					]
				},
				{
					id: "scene-tb1-3",
					name: "Góc chế tác",
					x: 400,
					y: 150,
					neighbors: [
						"scene-tb1-2",
						"scene-tb1-4"
					]
				},
				{
					id: "scene-tb1-4",
					name: "Trung tâm xưởng",
					x: 570,
					y: 150,
					neighbors: [
						"scene-tb1-3",
						"scene-tb1-5"
					]
				},
				{
					id: "scene-tb1-5",
					name: "Cổng trưng bày",
					x: 720,
					y: 150,
					neighbors: [
						"scene-tb1-4"
					],
					exitTo: {
						floorId: "outdoor",
						nodeId: "scene-c2"
					}
				}
			]
		},
		{
			id: "tb2",
			name: "Khu Trưng Bày 2",
			shortName: "TB2",
			imageUrl: "",
			imageWidth: 800,
			imageHeight: 300,
			nodes: [
				{
					id: "scene-tb2-1",
					name: "Lối vào",
					x: 100,
					y: 150,
					neighbors: [
						"scene-tb2-2"
					]
				},
				{
					id: "scene-tb2-2",
					name: "Hành lang",
					x: 300,
					y: 150,
					neighbors: [
						"scene-tb2-1",
						"scene-tb2-3"
					]
				},
				{
					id: "scene-tb2-3",
					name: "Trưng bày 2",
					x: 500,
					y: 150,
					neighbors: [
						"scene-tb2-2",
						"scene-tb2-4"
					],
					exitTo: {
						floorId: "outdoor",
						nodeId: "scene-c3"
					}
				},
				{
					id: "scene-tb2-4",
					name: "Kết hành trình",
					x: 700,
					y: 150,
					neighbors: [
						"scene-tb2-3"
					]
				}
			]
		}
	]
};
var scenes = [
	{
		id: "scene-c7",
		title: "Cổng Sông Vân Art Space",
		subtitle: "Điểm đón khách và cửa ngõ bước vào hành trình khám phá nghệ thuật.",
		panorama: "/images/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
		thumbnail: "/thumbnails/trang-bay/_storage_emulated_0_Pictures_AdobeLightroom_1788771876194.jpg",
		initialYaw: 3.16509577797931,
		initialPitch: -0.06799836111822648,
		panoramaRotation: -2.39200153826361,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95356464385529,
			20.208159298343244
		],
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
				rotY: 0,
				icon: "arrow"
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
		panoramaRotation: -0.21000000000000085,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95325686037542,
			20.20851687272049
		],
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
		panoramaRotation: 0.9116921905584121,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95330312848093,
			20.20845397804675
		],
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
		panoramaRotation: 2.2286784082777906,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95325317233804,
			20.208376303089604
		],
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
				yaw: 0.542,
				pitch: -0.4688,
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
			},
			{
				id: "h1790786542380",
				label: "Chuyển cảnh",
				yaw: 0.9424,
				pitch: -0.4937,
				plugin: "navigation",
				targetScene: "s1790786479857",
				rotY: 0,
				rotX: 0.8552113334772214
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
		panoramaRotation: 1.294598775598299,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95333464443684,
			20.208403976762998
		],
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
		panoramaRotation: 1.0723047484373343,
		brightness: 1.3,
		highlightCompression: 0,
		coordinates: [
			105.95340371131168,
			20.208310372092086
		],
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
		markers: [
			{
				id: "h1790007893330",
				label: "Cảnh mới",
				yaw: 0.4073,
				pitch: -0.6937,
				plugin: "navigation",
				targetScene: "scene-c3",
				rotX: 0.890117918517108
			},
			{
				id: "h1790838747657",
				label: "Chuyển cảnh",
				yaw: -0.3165,
				pitch: -0.8018,
				plugin: "navigation",
				targetScene: "s1790786479857",
				scaleX: 1.45
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
		panoramaRotation: 0,
		brightness: 1.3,
		highlightCompression: 0,
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
	},
	{
		id: "s1790786479857",
		title: "Cảnh mới",
		subtitle: "Mô tả cảnh mới",
		panorama: "/uploads/1790786504095-y04xqsn9269.jpg",
		thumbnail: "/thumbnails/1790786504095-y04xqsn9269.webp",
		initialYaw: 0,
		initialPitch: 0,
		panoramaRotation: 0,
		brightness: 1.25,
		highlightCompression: 0,
		markers: [
			{
				id: "h1790838679145",
				label: "Chuyển cảnh",
				yaw: 2.9684,
				pitch: -0.8937,
				plugin: "navigation",
				targetScene: "scene-c3",
				scaleX: 2.45,
				scaleY: 1.45
			},
			{
				id: "h1790838716073",
				label: "Chuyển cảnh",
				yaw: -1.305,
				pitch: -0.6048,
				plugin: "navigation",
				targetScene: "scene-tb2-3",
				rotZ: -0.12217304763960307
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
	transition: transition,
	map: map,
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
    position: "bottom-right",
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
            thumbnail: { type: "string", minLength: 1 },
            editorPanorama: { type: "string", minLength: 1 },
            initialYaw: { type: "number", default: 0 },
            initialPitch: { type: "number", default: 0 },
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
    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i;
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
      editorPanorama: s.editorPanorama,
      initialYaw: (_c2 = s.initialYaw) != null ? _c2 : 0,
      initialPitch: (_d2 = s.initialPitch) != null ? _d2 : 0,
      defaultCameraEnabled: (_e = s.defaultCameraEnabled) != null ? _e : false,
      panoramaRotation: (_f = s.panoramaRotation) != null ? _f : 0,
      brightness: (_g = s.brightness) != null ? _g : 1.25,
      highlightCompression: (_h = s.highlightCompression) != null ? _h : 0,
      coordinates: s.coordinates,
      showOnMap: (_i = s.showOnMap) != null ? _i : false,
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

export { saveSceneMarkers as a, listTours as b, deleteTour as d, loadTour as l, saveTour as s };;globalThis.__timing__.logEnd('Load chunks/_/yamlLoader');
//# sourceMappingURL=yamlLoader.mjs.map
