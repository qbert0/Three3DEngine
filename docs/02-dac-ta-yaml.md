# 02. Đặc tả ngôn ngữ YAML View360 v1

## 1. Ngôn ngữ và công cụ

Đề xuất DSL khai báo tên **View360 Content v1**, sử dụng cú pháp YAML 1.2. Không tạo parser ngôn ngữ lập trình mới. TypeScript được dùng để hiện thực compiler, resolver, plugin và giao diện. JSON Schema draft 2020-12 là hợp đồng dữ liệu chuẩn; dùng Ajv với entry hỗ trợ draft này, không trộn validator draft khác trong cùng instance. [Tài liệu Ajv](https://ajv.js.org/json-schema.html)

Chọn package `yaml` với API `Document` để đọc/sửa cây tài liệu và giữ comment tốt hơn việc parse rồi dump toàn bộ. API có hỗ trợ comment và vị trí nguồn; vẫn cần kiểm thử round-trip cho những cấu trúc cho phép, không hứa bảo toàn byte tuyệt đối. [Tài liệu yaml](https://eemeli.org/yaml/)

V1 có bốn loại tài liệu: `Destination`, `Tour`, `Scene`, `Asset`. Mỗi tài liệu có `apiVersion: view360/v1` và `kind`. Schema nằm trong `schemas/v1/` của ứng dụng; không tải schema tùy ý từ URL trong nội dung.

## 2. Quy tắc cú pháp chung

| Quy tắc | Đặc tả |
| --- | --- |
| Mã hóa | UTF-8; một YAML document mỗi file; phần mở rộng `.yaml` |
| Thụt dòng | Editor ghi 2 spaces; không dùng tab để thụt dòng |
| ID | Chuỗi khớp `[a-z0-9][a-z0-9-]{0,63}`; ổn định, độc lập với tiêu đề |
| Key | Chỉ key kiểu chuỗi; duplicate key là lỗi |
| Kiểu dữ liệu | Chỉ object, array, string, boolean, số hữu hạn và null tại field cho phép |
| Scalar | Dùng `true/false`; ngày giờ phải là chuỗi ISO có quote; không tự ép chuỗi thành số/bool |
| Nội dung | `title`/`label` là text; nội dung dài dùng `|-` hoặc `>-`; v1 không nhận HTML thực thi |
| Trường lạ | Từ chối bằng schema, kể cả trong plugin config; namespace `extensions` dành cho dữ liệu có schema đăng ký |
| Anchor, alias, merge | Không cho phép `&anchor`, `*alias`, `<<`; dùng include/import để tránh ngữ nghĩa khó round-trip |
| Custom tag | Không có `!include`, `!!js/function`, tag tùy biến hay evaluation |
| Nội suy | Không có `${ENV}`, template JavaScript, vòng lặp hoặc điều kiện thực thi |
| Giới hạn ban đầu | 1 MiB/file YAML; nesting 32; 200 tour, 5.000 scene, 200 plugin instance/scene, 32 MiB YAML toàn snapshot |

Giới hạn là cấu hình server, kiểm tra trước và sau parse. Vượt giới hạn trả lỗi có hướng xử lý, không tải vô hạn. Compiler phải duyệt AST để chặn cú pháp bị cấm trước khi chuyển thành object. Bảo vệ key như `__proto__`, `constructor`, `prototype` trong map động; không merge object tùy ý từ nội dung.

## 3. Tour, file và định danh

File gốc `tours/<tourId>.yaml` đại diện cho một tour. `id` bên trong phải trùng `<tourId>`. Các file scene là phần của tour đó, không tự trở thành tour khác. File tour gốc là nơi đăng ký danh sách scene sở hữu.

```text
draft/
  destinations/trang-bay.yaml
  tours/trang-bay.yaml
  tours/doi-che.yaml
  scenes/trang-bay/cong-chinh.yaml
  scenes/trang-bay/trung-tam.yaml
  scenes/trang-bay/flycam.yaml
  scenes/doi-che/cong-doi.yaml
  scenes/doi-che/dinh-doi.yaml
  assets/asset-cong.yaml
  assets/asset-trung-tam.yaml
  assets/asset-flycam.yaml
  assets/asset-cong-doi.yaml
  assets/asset-dinh-doi.yaml
```

Khóa runtime chuẩn là `ownerTourId#sceneId`, ví dụ `doi-che#dinh-doi`. File/alias không tham gia định danh. Đổi vị trí file không đổi scene; đổi ID là migration cập nhật mọi tham chiếu.

## 4. Hai loại chia nhỏ nội dung

### 4.1. `$include`: tách scene của chính tour ra file

Trong `Tour.scenes`, một entry là **Scene inline đầy đủ** hoặc object chỉ có `$include`. Ví dụ:

```yaml
scenes:
  cong-chinh:
    $include: ../scenes/trang-bay/cong-chinh.yaml
```

Đường dẫn resolve tương đối với file tour đang chứa `$include`, không theo thư mục chạy ứng dụng. V1 chỉ cho include vào file `Scene` của tour sở hữu, không include vào scalar, mảng plugin hoặc `Destination`. Không cho include nối tiếp trong file Scene, glob, HTTP URL hay đường dẫn tuyệt đối.

Resolver chuẩn hóa đường dẫn và kiểm tra `realpath` nằm trong `draft/scenes/<ownerTourId>/` hoặc cây tương đương trong snapshot. Không cho symlink thoát root. File mới chưa tồn tại phải kiểm tra parent thật trước khi tạo. `Scene.id` phải khớp key trong `Tour.scenes`; một file scene không được khai báo là nguồn của hai scene.

Không cho sibling override như `$include` đi kèm `title`. Sửa scene phải sửa nguồn đúng owner; muốn biến thể thì dùng lệnh duplicate tạo scene mới. Quy tắc này tránh nhiều lớp ghi đè khó hiểu trong editor.

### 4.2. `imports`: dùng scene của tour khác

```yaml
imports:
  hill:
    tour: doi-che
    scenes: [dinh-doi]
```

Đây là liên kết tới scene `doi-che#dinh-doi`, không sao chép dữ liệu, không tạo file mới và không gọi `entryScene` của `doi-che`.

Tour nguồn phải khai báo `exports: [dinh-doi]`. Chỉ scene sở hữu trực tiếp mới được export, không re-export scene nhập. `exports` là hợp đồng liên kết giữa tour, **không phải cơ chế bảo mật**. Scene public vẫn được quyết định bởi release và graph runtime.

Alias chỉ có hiệu lực bên trong tour khai báo nó. `imports.<alias>.scenes` phải liệt kê tường minh các scene được phép tham chiếu trực tiếp; không có `*`, không nhập tất cả scene ngầm. Hai alias cùng trỏ một scene được deduplicate theo khóa canonical, không tạo hai instance nội dung.

Khi đã đi vào một scene nhập, các hotspot của scene đó resolve theo **tour sở hữu**, kể cả khi tiếp tục sang scene nội bộ khác của tour ấy. Danh sách import giới hạn điểm vào trực tiếp từ tour gọi, không cắt bỏ đường đi hợp lệ trong tour đích.

## 5. Ngữ pháp tham chiếu scene

Ba dạng dưới đây là toàn bộ cú pháp reference trong YAML v1. Dấu quote là bắt buộc theo quy ước ghi của editor.

| Dạng | Ví dụ | Ý nghĩa |
| --- | --- | --- |
| Local | `"#trung-tam"` | Scene sở hữu bởi tour chứa tham chiếu |
| Import alias | `"@hill#dinh-doi"` | Scene đã khai báo trong `imports.hill.scenes` |
| Tour tường minh | `"tour:doi-che#dinh-doi"` | Cùng đích canonical; vẫn phải có import tương ứng khi tham chiếu từ tour khác |

Ngữ pháp mô tả:

```text
id          = [a-z0-9][a-z0-9-]{0,63}
local-ref   = "#" id
alias-ref   = "@" id "#" id
tour-ref    = "tour:" id "#" id
scene-ref   = local-ref | alias-ref | tour-ref
asset-ref   = "asset:" id
```

Không có ref chỉ tên tour và không tự suy đoán scene bắt đầu khi thiếu sceneId. Muốn nút “Mở tour” trên catalog thì dùng trường `tourId` riêng; hotspot navigation v1 luôn chỉ tới scene chính xác.

`Destination.overview` chỉ nhận `tour-ref`: tour đó phải nằm trong `Destination.tours`; scene phải sở hữu trực tiếp và được export. Destination không có namespace import. `Tour.entryScene` v1 chỉ nhận local-ref để mỗi tour có điểm bắt đầu tự chủ.

## 6. Schema Tour

`R` là bắt buộc. Field tùy chọn không ghi sẽ nhận mặc định khi normalize; compiler không tự ghi mặc định trở lại file nguồn.

| Field | Kiểu / bắt buộc | Ngữ nghĩa |
| --- | --- | --- |
| `apiVersion`, `kind` | String, R | `view360/v1`, `Tour` |
| `id` | ID, R | Trùng tên file gốc |
| `destination` | ID, R | Destination sở hữu tour |
| `title` | Text 1–160, R | Tên tour |
| `summary` | Text ≤ 4.000 | Mặc định chuỗi rỗng |
| `cover` | AssetRef | Asset có rendition cover đã duyệt khi publish |
| `durationMinutes` | Integer ≥ 0 | Ước tính, không suy ra từ số scene |
| `entryScene` | LocalRef, R | Scene mở khi bắt đầu tour |
| `theme` | Theme ID | Mặc định `nature`, phải có trong registry |
| `imports` | Map alias → `{tour, scenes}` | Mặc định `{}` |
| `exports` | Array scene ID sở hữu | Mặc định `[]`, không lặp |
| `pluginDefaults` | Map plugin ID → `{version, config}` | Mặc định `{}`; chỉ cấu hình chung, không tự sinh instance |
| `scenes` | Map scene ID → Scene hoặc include, R | Ít nhất một scene |
| `sceneOrder` | Array SceneRef | Mặc định các scene sở hữu theo thứ tự key; không tự thêm imported scene vào danh sách |

`sceneOrder` không chứa trùng canonical key. Scene bị bỏ khỏi `sceneOrder` vẫn có thể tới qua hotspot. Cảnh báo nếu một scene không nằm trong danh sách và không thể đi đến từ entry, nhưng không luôn là lỗi: nó có thể là điểm vào chia sẻ trực tiếp.

## 7. Ví dụ hai tour có điều hướng qua lại

### 7.1. `tours/trang-bay.yaml`

```yaml
apiVersion: view360/v1
kind: Tour
id: trang-bay
destination: trang-bay
title: Khám phá Trảng Bay
summary: Hành trình từ cổng chính tới điểm nhìn toàn cảnh.
cover: asset:asset-cong
durationMinutes: 15
entryScene: "#cong-chinh"
theme: nature
imports:
  hill:
    tour: doi-che
    scenes: [dinh-doi]
exports: [trung-tam, flycam]
pluginDefaults:
  info:
    version: 1
    config:
      presentation: drawer
scenes:
  cong-chinh:
    $include: ../scenes/trang-bay/cong-chinh.yaml
  trung-tam:
    $include: ../scenes/trang-bay/trung-tam.yaml
  flycam:
    $include: ../scenes/trang-bay/flycam.yaml
sceneOrder:
  - "#cong-chinh"
  - "#trung-tam"
  - "#flycam"
  - "@hill#dinh-doi"
```

### 7.2. `tours/doi-che.yaml`

```yaml
apiVersion: view360/v1
kind: Tour
id: doi-che
destination: trang-bay
title: Đường lên đồi
entryScene: "#cong-doi"
imports:
  valley:
    tour: trang-bay
    scenes: [trung-tam]
exports: [dinh-doi]
scenes:
  cong-doi:
    $include: ../scenes/doi-che/cong-doi.yaml
  dinh-doi:
    $include: ../scenes/doi-che/dinh-doi.yaml
sceneOrder: ["#cong-doi", "#dinh-doi"]
```

### 7.3. `scenes/trang-bay/cong-chinh.yaml`

```yaml
apiVersion: view360/v1
kind: Scene
id: cong-chinh
title: Cổng chính
media:
  type: panorama
  projection: equirectangular
  asset: asset:asset-cong
viewpoint:
  type: ground
initialView:
  space: spherical
  yaw: 0
  pitch: 0
  fov: 75
plugins:
  - id: di-trung-tam
    type: navigation
    version: 1
    anchor:
      space: spherical
      yaw: 35
      pitch: -10
    config:
      label: Đi tới trung tâm
      target: "#trung-tam"
  - id: gioi-thieu
    type: info
    version: 1
    anchor:
      space: spherical
      yaw: -20
      pitch: 2
    config:
      label: Giới thiệu
      title: Chào mừng đến Trảng Bay
      text: |-
        Đây là điểm bắt đầu hành trình.
        Bạn có thể chọn góc nhìn trên cao trong danh sách điểm nhìn.
```

### 7.4. `scenes/trang-bay/trung-tam.yaml`

```yaml
apiVersion: view360/v1
kind: Scene
id: trung-tam
title: Trung tâm khu du lịch
media:
  type: panorama
  projection: equirectangular
  asset: asset:asset-trung-tam
plugins:
  - id: len-dinh-doi
    type: navigation
    version: 1
    anchor: { space: spherical, yaw: 60, pitch: -8 }
    config:
      label: Đi thẳng tới đỉnh đồi
      target: "@hill#dinh-doi"
      arrivalView: { space: spherical, yaw: -45, pitch: 0, fov: 70 }
  - id: xem-tu-tren-cao
    type: navigation
    version: 1
    anchor: { space: spherical, yaw: -70, pitch: 15 }
    config:
      label: Xem toàn khu từ trên cao
      target: "#flycam"
```

### 7.5. `scenes/doi-che/cong-doi.yaml`

```yaml
apiVersion: view360/v1
kind: Scene
id: cong-doi
title: Cổng đường lên đồi
media: { type: panorama, projection: equirectangular, asset: "asset:asset-cong-doi" }
plugins:
  - id: len-doi
    type: navigation
    version: 1
    anchor: { space: spherical, yaw: 0, pitch: -8 }
    config: { label: Lên đỉnh đồi, target: "#dinh-doi" }
```

### 7.6. `scenes/doi-che/dinh-doi.yaml`

```yaml
apiVersion: view360/v1
kind: Scene
id: dinh-doi
title: Đỉnh đồi
media: { type: panorama, projection: equirectangular, asset: "asset:asset-dinh-doi" }
initialView: { space: spherical, yaw: 15, pitch: -5, fov: 75 }
plugins:
  - id: ve-trung-tam
    type: navigation
    version: 1
    anchor: { space: spherical, yaw: 140, pitch: -12 }
    config: { label: Về trung tâm Trảng Bay, target: "@valley#trung-tam" }
```

Hai tour import qua lại là hợp lệ. Đường đi `trung-tam → dinh-doi → trung-tam` là graph có chu trình, không phải lỗi include. Compiler không đệ quy nối nội dung theo các cạnh này.

## 8. Scene flycam và tọa độ

### 8.1. `scenes/trang-bay/flycam.yaml`: ảnh phẳng chụp trên cao

```yaml
apiVersion: view360/v1
kind: Scene
id: flycam
title: Toàn cảnh khu du lịch từ trên cao
media:
  type: image
  projection: planar
  asset: asset:asset-flycam
viewpoint:
  type: aerial
  altitudeMeters: 100
initialView:
  space: image
  x: 0.5
  y: 0.5
  zoom: 1
plugins:
  - id: xuong-trung-tam
    type: navigation
    version: 1
    anchor: { space: image, x: 0.42, y: 0.68 }
    config:
      label: Vào khu trung tâm
      target: "#trung-tam"
      arrivalView: { space: spherical, yaw: 10, pitch: 0, fov: 75 }
  - id: len-doi-tu-flycam
    type: navigation
    version: 1
    anchor: { space: image, x: 0.74, y: 0.25 }
    config:
      label: Mở góc nhìn đỉnh đồi
      target: "@hill#dinh-doi"
```

`altitudeMeters: 100` chỉ là số minh họa, người tạo nội dung phải nhập độ cao thực nếu biết; không dùng để suy ra phép chiếu hay vị trí trên bản đồ.

Panorama flycam dùng `media.type: panorama`, `projection: equirectangular`, `viewpoint.type: aerial` và tọa độ spherical. Chỉ đổi `viewpoint` không biến ảnh phẳng thành panorama.

### 8.2. Schema Scene và hệ tọa độ

| Field | Đặc tả |
| --- | --- |
| `apiVersion`, `kind`, `id`, `title` | Bắt buộc; kind là `Scene`; title 1–160 ký tự |
| `description` | Text tùy chọn, tối đa 4.000 ký tự |
| `media` | Bắt buộc; union `panorama/equirectangular` hoặc `image/planar`; `asset` bắt buộc |
| `viewpoint` | `{type: ground|aerial, altitudeMeters?: number}`; mặc định ground; không thay đổi renderer |
| `initialView` | Theo hệ tọa độ của media; mặc định spherical `(0,0,75)` hoặc image `(0.5,0.5,1)` |
| `plugins` | Array PluginInstance, mặc định `[]`; ID instance duy nhất trong scene |

Panorama v1 nhận ảnh equirectangular đầy đủ 360° × 180°, tỷ lệ pixel 2:1. Ảnh cropped, cubemap, dual fisheye là extension sau; không tự kéo giãn ảnh không đúng projection.

Góc YAML luôn là **độ**, không phải radian: yaw trong `[-180, 180)`, pitch trong `[-90, 90]`, vertical FOV trong `[30, 100]`. Compiler từ chối số ngoài miền; editor normalize yaw trước khi ghi. Adapter đổi độ sang radian và ánh xạ đúng chiều yaw của engine. V1 lấy yaw 0 tại giữa ảnh chuẩn hóa, yaw tăng về phía phải; không ngầm coi yaw 0 là hướng Bắc.

Ảnh phẳng dùng `(x,y)` chuẩn hóa theo ảnh sau normalize orientation: gốc trái trên, x tăng sang phải, y tăng xuống dưới, mỗi giá trị thuộc `[0,1]`. `zoom` là hệ số so với trạng thái fit ảnh vào viewport, miền `[1,16]`; adapter dịch sang zoom riêng của engine. Không lưu pixel màn hình.

`arrivalView` của hotspot phải phù hợp **scene đích**. Khi không có, dùng initialView của scene đích. Back/forward có camera lịch sử thì ưu tiên camera lịch sử. Không trộn spherical/image và không dùng camera scene nguồn làm mặc định cho scene đích.

## 9. Schema plugin trong nội dung

Mỗi `PluginInstance` gồm `id`, `type`, `version` bắt buộc; `enabled` mặc định true; `anchor` tùy capability; `config` object bắt buộc. `version` là integer phiên bản schema config, không phải phiên bản npm. Plugin khai báo schema riêng cho config và nơi được phép gắn anchor.

| Plugin v1 | Config và mặc định |
| --- | --- |
| `navigation` | `label` bắt buộc, `target: SceneRef` bắt buộc, `arrivalView` tùy chọn; cần anchor |
| `info` | `label`, `title`, `text` bắt buộc; `presentation: drawer|popover` mặc định drawer; cần anchor |
| `audio` | `label`, `asset: AssetRef` audio bắt buộc; `transcript` tùy chọn; anchor tùy chọn; không có anchor thì thành nút toolbar |
| `speak` | `label`, `text` bắt buộc; `lang` mặc định `vi-VN`; anchor tùy chọn; chức năng đọc văn bản theo lựa chọn người xem |
| `chat` | `label`, `providerProfile` bắt buộc, `welcomeText` tùy chọn; không có secret; anchor tùy chọn, mặc định mở từ toolbar |

`pluginDefaults` chỉ cho chứa field được schema plugin đánh dấu có thể dùng chung. Ví dụ info cho mặc định `presentation`; navigation không cho mặc định `target`; audio không cho mặc định `asset`. Thứ tự lấy giá trị: mặc định schema → mặc định tour sở hữu scene → config instance. Merge theo **field cấp đầu**, object/array ở field được thay nguyên khối, không deep merge mơ hồ.

Instance plugin chưa biết hoặc config sai được giữ nguyên trong editor để người dùng sửa/xuất, nhưng chặn publish. Plugin bị disable không được mount; dữ liệu cấu hình vẫn phải đúng schema. Đăng ký code plugin mới cần build/deploy ứng dụng; YAML chỉ bật/config plugin có trong registry.

## 10. Destination

Ví dụ `destinations/trang-bay.yaml`:

```yaml
apiVersion: view360/v1
kind: Destination
id: trang-bay
title: Khu du lịch Trảng Bay
summary: Khám phá cảnh quan và những tuyến tham quan của khu du lịch.
cover: asset:asset-flycam
tours: [trang-bay, doi-che]
featuredTours: [trang-bay]
overview: "tour:trang-bay#flycam"
blocks:
  - id: loi-gioi-thieu
    type: text
    title: Một hành trình giữa thiên nhiên
    text: Chọn tour phù hợp hoặc bắt đầu bằng góc nhìn toàn khu từ trên cao.
  - id: thu-vien
    type: gallery
    title: Góc ảnh
    assets: ["asset:asset-cong", "asset:asset-flycam"]
```

Schema: `id`, `title`, `tours` bắt buộc; summary/cover/overview tùy chọn; featuredTours mặc định `[]` và phải là tập con tours; blocks mặc định `[]`. `tours` không lặp; mỗi Tour.destination phải trỏ ngược đúng Destination. Draft được phép có tours rỗng để khởi tạo, release hiển thị destination chỉ khi có ít nhất một tour đã hợp lệ.

V1 chỉ có block `text` (`title`, `text`) và `gallery` (`title`, `assets`); mỗi block có ID duy nhất. Hero và danh sách tour do layout dựng từ field cấp đầu, không phải nội dung HTML tùy ý. Có thể đăng ký thêm block bằng code/schema ở bản sau.

## 11. Asset: định danh thay cho URL và đường dẫn đĩa

Tour/Scene/Destination chỉ dùng `asset:<id>`. Asset Service tạo file metadata `assets/<id>.yaml`; không cho form YAML nội dung sửa các field hệ thống của asset.

Ví dụ cấu trúc metadata sau upload, trước khi xử lý:

```yaml
apiVersion: view360/v1
kind: Asset
id: asset-flycam
kindOfMedia: image
original:
  storageKey: originals/asset-flycam/source.jpg
  mime: image/jpeg
  width: 8000
  height: 6000
processing:
  revision: 1
  state: pending
  recipe:
    version: 1
    operations: []
review:
  state: pending
```

Ví dụ chưa publish được vì chưa có review/rendition. Asset Service phải bổ sung checksum SHA-256 của file thật, kích thước byte, orientation chuẩn hóa, recipe hash và records rendition khi job xong; không sử dụng checksum minh họa. `processing.state` có các giá trị `pending`, `processing`, `ready`, `failed`; `review.state` là `pending`, `approved`, `rejected`. Schema không yêu cầu rendition lúc mới upload, nhưng trạng thái ready phải có manifest đầu ra và approved phải gắn đúng recipe/rendition hash.

`storageKey` là key nội bộ tương đối với MEDIA_ROOT, không phải URL công khai và không được trả ra public DTO. Một asset có thể được nhiều scene sử dụng. Mỗi recipe revision tạo rendition bất biến; publish pin chính xác revision/hash, không lấy “latest” khi đang phục vụ release cũ. Chi tiết xử lý/duyệt nằm trong tài liệu 04.

## 12. Thuật toán compile và resolve

### 12.1. Compile toàn snapshot, không flatten theo đệ quy

1. Lấy bản chụp draft tại revision cố định, liệt kê tour/destination/asset dưới root được cho phép.
2. Parse từng file một lần; kiểm tra cú pháp YAML bị cấm, schema envelope và version.
3. Expand các `$include` Scene bằng đường dẫn đã kiểm tra; lưu provenance gồm owner, file, AST path, line/column.
4. Lập bảng tour và scene canonical; kiểm tra ID, ownership, entryScene và exports. Không duyệt imports để clone scene.
5. Resolve bảng alias/import sau khi mọi tour đã được index. Kiểm tra tour/scene đích tồn tại, export và allowlist import.
6. Validate media, plugin, theme; resolve target và arrivalView; xây cạnh navigation theo owner của từng scene.
7. Resolve sceneOrder, destination overview và liên kết catalog. Xây reverse index tham chiếu cho thao tác xóa/sửa.
8. Tính graph được phép cho từng entryTour: seed bằng scene sở hữu + scene được import trực tiếp; duyệt các cạnh navigation hợp lệ với visited set. Scene phát hiện từ cạnh tiếp tục dùng scope owner của nó.
9. Tạo runtime DTO và index bất biến, loại AST, đường dẫn file, recipe, original, thông tin xác thực. Ghi checksum/source revision của snapshot.

`imports` A ↔ B và navigation A ↔ B hợp lệ vì resolve qua symbol table. `$include` không được lồng nên không có vòng include hợp lệ; nếu gặp cấu trúc lồng, báo lỗi schema thay vì cố mở file vô hạn.

### 12.2. Mở tour và đi thẳng tới scene

Khi URL chỉ có entryTour, chọn canonical entryScene của nó. Khi URL có ownerTour/sceneId, kiểm tra canonical key có trong graph của entryTour tại release đang dùng, rồi load scene đó trực tiếp. Sai ref trả 404 hoặc thông báo không còn có trong hành trình; không âm thầm mở scene đầu tiên.

Với ví dụ này, `@hill#dinh-doi` resolve thành `doi-che#dinh-doi`. Compiler không lấy `doi-che.entryScene`. Các plugin ở đỉnh đồi lấy defaults và alias từ `doi-che`, nên `@valley#trung-tam` luôn quay về đúng `trang-bay#trung-tam`.

### 12.3. Cache và thay đổi phụ thuộc

Compiler cache parse theo hash file; cache scene theo hash nguồn + plugin/schema version. Khi thay đổi scene nguồn, invalidate tour sở hữu và các tour phụ thuộc qua reverse index. V1 publish toàn bộ snapshot để không có tour A ở revision mới trỏ B ở revision cũ. Dữ liệu JSON sinh ra là cache/release có thể tái tạo từ YAML và metadata asset, không trở thành nguồn dữ liệu thứ hai.

## 13. Diagnostics, lỗi và khả năng sửa bằng editor

Diagnostic gồm `code`, `severity`, `message`, `file`, `line`, `column`, `path`, `ownerTourId`, `sceneId`, `relatedLocations`. Vị trí lấy từ AST/provenance; lỗi field include phải dẫn tới file scene thực. Public chỉ nhận mã lỗi và thông điệp phù hợp, không lộ đường dẫn hệ thống.

| Code | Tình huống |
| --- | --- |
| `YAML_DUPLICATE_KEY` | Key trùng, không được im lặng lấy giá trị cuối |
| `SCHEMA_UNSUPPORTED_VERSION` | API/plugin version chưa được hỗ trợ |
| `INCLUDE_OUTSIDE_ROOT` | File include vượt thư mục scene của tour |
| `INCLUDE_OWNER_MISMATCH` | Scene ID/file bị gán sai owner |
| `REF_SCENE_NOT_FOUND` | Target không tồn tại |
| `REF_NOT_IMPORTED` | Tour gọi chưa import scene đích |
| `REF_NOT_EXPORTED` | Tour nguồn chưa export điểm vào |
| `ENTRY_SCENE_INVALID` | Scene bắt đầu không thuộc tour |
| `ANCHOR_SPACE_MISMATCH` | Gắn tọa độ ảnh phẳng vào panorama hoặc ngược lại |
| `PLUGIN_UNKNOWN` | Registry không có plugin này |
| `ASSET_NOT_READY` | Không có rendition đúng revision và review |
| `SCENE_UNREACHABLE` | Cảnh báo scene không tới được từ entry và không trong sceneOrder |

Form editor chỉ ghi bản cấu trúc hợp lệ. YAML text editor có thể lưu **working copy không hợp lệ** vào vùng riêng tư để không mất nội dung; không thay draft hợp lệ cho tới khi parse/schema qua. Referential errors tạm thời có thể lưu draft và hiện danh sách cần sửa, nhưng luôn chặn publish. Đổi version phải chạy migration có báo cáo diff, không tự coi v1 là version mới.

## 14. Ranh giới v1 và mở rộng sau

V1 có hai renderer, include một cấp cho scene và imports tường minh. Chưa hỗ trợ kế thừa tour, include plugin fragment, YAML template, runtime script, remote import hoặc scene clone có override. Các chức năng này chỉ nên thêm sau khi có yêu cầu cụ thể và schema version mới.

Nếu một scene có quá nhiều plugin, trước tiên tổ chức bằng nhóm UI trong editor. Không tự mở rộng `$include` sang mọi field vì khi đó cần thêm quy tắc owner, provenance và merge. Tách mỗi scene thành file riêng đã giải quyết file tour dài mà giữ ngữ nghĩa đơn giản.
