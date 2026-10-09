globalThis.__timing__.logStart('Load chunks/_/yamlLoader');import { existsSync, unlinkSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import * as yaml from 'js-yaml';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

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
			initialYaw: 13.102584589524053,
			initialPitch: 0.11842820794221985,
			initialFov: 99.95058220101286,
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			initialFov: 99.95178963634699,
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
			],
			areaHighlights: [
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
			initialYaw: 52.27935608182125,
			initialPitch: 0.14140456882487196,
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
				},
				{
					id: "h1791474195474",
					label: "Xem nội dung",
					yaw: 1.6709,
					pitch: 0.0877,
					plugin: "panel",
					placement: "horizontal",
					contents: [
						{
							id: "block-1791474202069",
							type: "image",
							src: "/uploads/1791475775090-vptl3sa6rd9-panel.webp",
							alt: "",
							caption: ""
						},
						{
							id: "block-1791474209766",
							type: "text",
							content: "hòn đá triết gia. Tác phẩm điêu khắc đá cẩm thạch trắng với hình khối hình học tối giản, mạnh mẽ. Tảng đá được chế tác thành một khối đặc có dạng như một cánh cổng hoặc mái vòm cách điệu — phần trên là một khối hình thang vát chéo, tạo thành cạnh nghiêng sắc nét, trong khi phần dưới được khoét rỗng một khoảng hình chữ nhật đứng, tạo nên một \"lối đi\" hoặc khung cửa mở giữa hai trụ đá. Bề mặt đá trắng ngà với những vân xám tự nhiên chạy dọc, để lộ rõ chất liệu cẩm thạch nguyên khối. Ánh sáng ban ngày đổ xuống tạo nên sự tương phản rõ rệt giữa mặt phẳng sáng và các cạnh tối, làm nổi bật tính khối và góc cạnh của tác phẩm.",
							presentation: "text-and-audio",
							speech: {
								lang: "vi-VN",
								rate: 1,
								pitch: 1
							}
						}
					]
				}
			],
			areaHighlights: [
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
			initialYaw: -3.202392624525395,
			initialPitch: -0.02079971359628697,
			initialFov: 99.95226325930089,
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			initialFov: 99.95323942257737,
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
			],
			areaHighlights: [
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
			initialFov: 100,
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
					label: "Ngã ba dinh thự ",
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
			],
			areaHighlights: [
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
			initialFov: 100,
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
			],
			areaHighlights: [
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
			initialFov: 99.95072023106175,
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			],
			areaHighlights: [
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
			initialYaw: 49.297413643979624,
			initialPitch: -0.10785707257868,
			initialFov: 99.95327051665711,
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
			],
			areaHighlights: [
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
			initialFov: 99.95215233834136,
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
			],
			areaHighlights: [
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
			initialFov: 100,
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
			],
			areaHighlights: [
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
			initialFov: 99.95331957281981,
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
			],
			areaHighlights: [
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
			initialFov: 100,
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
			],
			areaHighlights: [
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
			initialYaw: 19.555935468590953,
			initialPitch: -0.326867215533473,
			initialFov: 94.20226400072634,
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
			],
			areaHighlights: [
				{
					id: "area-1791528235657",
					points: [
						{
							yaw: -2.7027417068811217,
							pitch: -0.4411408414339755
						},
						{
							yaw: 3.0449780571489207,
							pitch: -0.17973677276696054
						},
						{
							yaw: 2.9151854685989362,
							pitch: -0.6989168105248231
						}
					],
					color: "#22c55e",
					outlineColor: "#ffffff",
					opacity: 0.34,
					durationMs: 1400,
					mode: "fill-outline",
					lineWidth: 5
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
			initialFov: 95.24606587403942,
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
			],
			areaHighlights: [
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
			initialYaw: 4.142402357778277,
			initialPitch: -0.15894822739777975,
			initialFov: 99.95429953424204,
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
			],
			areaHighlights: [
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
            defaultZoomEnabled: { type: "boolean", default: false },
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
            markers: { type: "array", default: [] },
            areaHighlights: {
              type: "array",
              default: [],
              items: {
                type: "object",
                required: ["id", "points"],
                properties: {
                  id: { type: "string", minLength: 1 },
                  points: {
                    type: "array",
                    minItems: 3,
                    items: {
                      type: "object",
                      required: ["yaw", "pitch"],
                      properties: {
                        yaw: { type: "number" },
                        pitch: { type: "number", minimum: -1.5708, maximum: 1.5708 }
                      }
                    }
                  },
                  color: { type: "string" },
                  outlineColor: { type: "string" },
                  opacity: { type: "number", minimum: 0, maximum: 1 },
                  delayMs: { type: "number", minimum: 0 },
                  durationMs: { type: "number", minimum: 250 },
                  radius: { type: "number", minimum: 100, maximum: 595 },
                  mode: { type: "string", enum: ["fill", "outline", "fill-outline"] },
                  lineWidth: { type: "number", minimum: 1, maximum: 24 }
                }
              }
            }
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
    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
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
      // Existing tours historically stored zoom under defaultCameraEnabled.
      // Preserve that behaviour while allowing new scenes to control it alone.
      defaultZoomEnabled: (_i = (_h = s.defaultZoomEnabled) != null ? _h : s.defaultCameraEnabled) != null ? _i : false,
      panoramaRotation: (_j = s.panoramaRotation) != null ? _j : 0,
      brightness: (_k = s.brightness) != null ? _k : 1.25,
      highlightCompression: (_l = s.highlightCompression) != null ? _l : 0,
      coordinates: s.coordinates,
      showOnMap: (_m = s.showOnMap) != null ? _m : false,
      markers,
      areaHighlights: (_n = s.areaHighlights) != null ? _n : []
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

export { saveSceneMarkers as a, listTours as b, deleteTour as d, loadTour as l, saveTour as s };;globalThis.__timing__.logEnd('Load chunks/_/yamlLoader');
//# sourceMappingURL=yamlLoader.mjs.map
