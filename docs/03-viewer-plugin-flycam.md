# 03. Viewer, plugin và ảnh flycam

## 1. Phân biệt ba lớp mở rộng

1. **Renderer adapter**: hiển thị một loại media, ví dụ panorama cầu hoặc ảnh phẳng. Đây là module 1 của yêu cầu.
2. **Feature plugin**: thông tin, điều hướng, audio, đọc văn bản, chat, thanh công cụ. Đây là module 2; làm việc qua context chung và capability của renderer.
3. **UI component/theme**: bố trí website, sidebar, dialog, bảng scene. Đây là thư viện Vue và hệ theme, không phải plugin xử lý panorama.

Một feature plugin có thể bọc plugin có sẵn của Photo Sphere Viewer, nhưng schema công khai không dùng trực tiếp cấu hình của PSV. Nhờ đó flat-image vẫn dùng được navigation/info mà không phụ thuộc engine cầu.

## 2. Hợp đồng Renderer Adapter

Các tên dưới đây là hợp đồng cần hiện thực bằng TypeScript, không phải API đã tồn tại trong repository.

| Thành phần | Input / output và yêu cầu |
| --- | --- |
| `id` | `panorama360` hoặc `flat-image`; renderer registry ánh xạ từ `Scene.media` |
| `capabilities` | Tập khả năng: spherical/image anchors, camera, zoom, fullscreen, picking; không dựa vào tên thư viện |
| `mount(container)` | Tạo engine tại DOM container đã mount; chỉ ở client |
| `load(sceneMedia, initialView, requestToken)` | Promise hoàn tất khi ảnh đầu tiên có thể hiển thị; trả lỗi typed; không tự điều hướng |
| `getView()` / `setView(view)` | Camera theo hệ tọa độ chuẩn của domain; không lộ kiểu PSV/OpenSeadragon |
| `project(anchor)` | Đổi anchor thành tọa độ màn hình + trạng thái nhìn thấy; phục vụ overlay |
| `pick(screenPoint)` | Đổi click thành spherical hoặc image anchor; dùng chung view/editor |
| `setOverlays(items)` | Nhận ID, anchor và nội dung UI an toàn; không nhận chuỗi HTML từ YAML |
| `resize()` | Cập nhật theo container thay đổi, không khởi tạo lại toàn bộ |
| `dispose()` | Hủy listener, request thuộc adapter, texture/canvas/WebGL context; gọi nhiều lần an toàn |

Sự kiện chuẩn: `ready`, `load-progress` nếu đo được, `view-change`, `background-click`, `overlay-select`, `error`. Event chứa `requestToken`/scene key để runtime bỏ kết quả cũ. Nếu engine không hủy load giữa chừng, adapter phải serialize hoặc dùng instance staging cô lập; chỉ bỏ event cũ là chưa đủ để ngăn ảnh cũ ghi đè ảnh mới.

Trong editor, click mặc định chọn vị trí/instance. Chỉ chạy navigation khi bật công cụ “Thử trải nghiệm”, tránh đang đặt marker lại bị chuyển scene. Mode là state editor, không ghi vào YAML scene.

### Panorama360 Adapter

Giữ Photo Sphere Viewer để tận dụng phần hiển thị hiện có. Engine mặc định cần projection equirectangular; ảnh chưa phủ toàn cầu cần metadata/cơ chế riêng, không thể chỉ đổi tên file. [Hướng dẫn PSV](https://photo-sphere-viewer.js.org/guide/)

Adapter đổi độ trong domain thành đơn vị engine, ánh xạ FOV và quản lý texture. Có thể dùng PSV Markers làm cầu nối anchor/click, còn panel/toolbar là Vue component bên ngoài. Khi chuyển ảnh cùng loại, ưu tiên tái sử dụng instance; chỉ reset nội dung/overlay theo scene.

### FlatImage Adapter

Dùng OpenSeadragon cho ảnh flycam phẳng, ảnh sơ đồ và ảnh chi tiết lớn. Engine hỗ trợ image source đơn; ảnh lớn nên tạo pyramid thay vì buộc client tải cả ảnh. [Image Tile Source](https://openseadragon.github.io/examples/tilesource-image/)

Tọa độ domain `(x,y)` nhân với width/height ảnh chuẩn hóa trước khi đổi sang viewport engine. Không dùng trực tiếp hệ tọa độ normalized theo chiều rộng riêng của engine làm format YAML. Zoom 1 là fit ảnh; click ngoài vùng ảnh không tạo anchor.

## 3. Tour Runtime và navigation

Runtime giữ các state: `entryTourId`, `activeSceneKey`, `activeOwnerTourId`, `releaseId`, `navigationSequence`, `loadingState`, `history` và camera hiện tại. UI selected hotspot thuộc Plugin Host/editor, không trộn vào scene model.

### Trình tự chuyển scene

1. Nhận target canonical đã resolve từ plugin hoặc router. Kiểm tra membership trong graph của entryTour.
2. Tăng sequence, đánh dấu chuyển cảnh và hủy request trước nếu còn chạy. Giữ scene cũ hiển thị đến khi scene mới sẵn sàng.
3. Lấy DTO scene tại đúng release; resolve effective plugin configs theo tour sở hữu.
4. Tải renderer/plugin module cần thiết. Cùng loại có thể tái sử dụng adapter; khác loại tạo adapter mới có kiểm soát.
5. Lấy arrivalView theo thứ tự: camera back/forward → arrivalView của hành động → initialView scene đích.
6. Load preview/ảnh; đảm bảo kết quả vẫn thuộc sequence mới nhất. Engine không hủy được phải có hàng đợi hoặc staging như phần 2.
7. Rời plugin scene cũ, chuyển scene/overlay mới, mount plugin mới; cập nhật activeSceneKey và URL sau commit thành công.
8. Dừng audio/chat stream scene cũ; giải phóng renderer cũ nếu đổi loại; prefetch có giới hạn các đích gần nhất.

Nếu load lỗi, giữ scene trước và báo retry/đổi điểm nhìn. Không push URL lỗi vào lịch sử như đã chuyển thành công. Với deep link lần đầu không có scene trước, hiển thị lỗi và link tới trang tour.

Back/forward phải dùng lịch sử route; mỗi item lưu camera theo canonical scene key. Bấm chuyển qua hai tour có cùng sceneId vẫn là hai lần đổi scene khác nhau. Không dùng watcher chỉ theo `scene.id` như hiện trạng.

## 4. Hợp đồng plugin

Một plugin đăng ký **definition** tại build và được tạo **instance** từ YAML. Registry toàn cục chỉ giữ definition bất biến; state instance nằm trong session, không dùng singleton có thể rò giữa request SSR/người xem.

| Phần definition | Yêu cầu |
| --- | --- |
| Identity | `id`, phiên bản package, `supportedConfigVersions`, `hostApiVersion` |
| Schema | Schema config trên client/server; field nào cho default cấp tour; schema anchor nếu cần |
| Capabilities | Renderer capability bắt buộc; loại slot hỗ trợ; có cần backend không |
| References | Hàm khai báo/thu thập SceneRef, AssetRef trong config để compiler và deletion index thấy hết phụ thuộc |
| Runtime factory | Lazy import để tạo instance riêng cho viewer session |
| Editor extension | Form inspector, công cụ đặt anchor, summary label, lệnh edit có thể undo |
| Server extension | Tùy chọn, validate sâu hoặc xử lý backend; không được import vào client bundle |
| Dependencies | Danh sách plugin/capability yêu cầu; lỗi thiếu/vòng phụ thuộc phải phát hiện trước publish |

Thêm plugin mới phải đăng ký cùng ID/schema/version ở compiler và runtime. Không tải module từ `src`/URL do YAML cung cấp. Plugin tích hợp được tin cậy như mã ứng dụng; không tuyên bố đây là sandbox cho mã người dùng bất kỳ.

### Context runtime cấp cho plugin

- Scene DTO chỉ đọc, canonical key, release và mode `view|preview`.
- `navigate(target, arrivalView)` thông qua Tour Runtime.
- `panels.open/close`, đăng ký slot toolbar, toast và dialog dùng chung.
- Asset resolver chỉ trả rendition public hoặc preview URL được cấp quyền.
- Audio manager dùng chung để kiểm soát dừng/phát, tránh nhiều audio chồng nhau.
- Abort signal, đăng ký event với cleanup, logger có plugin/instance ID.
- Renderer facade giới hạn theo capability; không lộ raw engine hay toàn bộ editor store.

### Vòng đời instance

`create → mount → sceneReady → update → dispose`. `dispose` phải hủy timer, subscription, overlay, audio và network request. `update` dùng khi form preview thay config mà vẫn giữ cùng scene; thay ID/type/version cần dispose rồi tạo mới.

Ưu tiên mỗi scene là một phạm vi plugin instance; toolbar toàn hành trình là UI shell hoặc một phạm vi riêng có lifecycle rõ. Trong v1, tất cả instance khai báo trong Scene đều kết thúc khi rời Scene.

Lỗi plugin tùy chọn không được làm sập renderer: hiển thị chức năng tạm không dùng được và log. Với navigation lỗi, vẫn phải có ScenePicker cơ bản trong shell. Publish luôn chặn plugin không biết/schema không hợp lệ; degrade runtime chỉ xử lý lỗi mạng hoặc lỗi thực thi ngoài dự kiến.

## 5. Các plugin cần triển khai

| Plugin | Runtime | Editor | Backend |
| --- | --- | --- | --- |
| `navigation` | Hotspot/nhãn, gọi runtime tới scene canonical | Scene picker nhóm theo owner, lọc import/export, đặt arrivalView | Validate đích, xây cạnh graph/reverse index |
| `info` | Popover/drawer với text an toàn | Title/text, vị trí, presentation | Validate độ dài/schema; nếu sau này nhận Markdown thì sanitize |
| `audio` | Phát audio file, pause/stop và transcript | Chọn/upload asset, nghe thử | Kiểm tra MIME, asset đã duyệt; hỗ trợ byte range |
| `speak` | Đọc text bằng speech synthesis nếu khả dụng | Văn bản, ngôn ngữ, nghe thử | Không cần backend trong phương án trình duyệt |
| `chat` | Mở panel, trạng thái gửi/lỗi, hủy stream khi rời scene | Chọn profile backend có sẵn, lời chào | Proxy provider, chỉ đưa ngữ cảnh release public, rate limit và giới hạn ngân sách |

Speech synthesis của browser phụ thuộc voice sẵn có trên thiết bị. UI phải kiểm tra hỗ trợ và danh sách giọng, không hứa luôn có giọng Việt. Audio thu sẵn là phương án ổn định khi nội dung cần giọng nhất quán. [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

Chat là extension tùy chọn sau MVP; `providerProfile` ánh xạ đến cấu hình riêng tư trên server. Không gửi key AI ra YAML/DTO/client. Mặc định chỉ giữ hội thoại trong phiên browser; chưa lưu lịch sử trên server. Preview chat phải dùng API admin riêng và không gửi bản gốc media/recipe/secret làm ngữ cảnh.

Image redaction là **editor/server extension**, không phải overlay runtime có thể tắt. Chức năng này bắt buộc tạo lại pixel của ảnh đầu ra; chi tiết ở tài liệu 04.

## 6. Theme và slot giao diện

Theme registry nhận ID như `nature`, `minimal`. Mỗi theme có token màu/font/spacing và component cho các slot `catalog.hero`, `experience.sidebar`, `experience.toolbar`, `experience.panel`. Có component mặc định cho mọi slot; theme không có slot thì dùng mặc định.

V1 YAML chỉ chọn theme ID; không nhập CSS/JavaScript tùy ý. Theme phải dùng context chỉ đọc và phát event theo shell. Theme không tải scene hoặc gọi filesystem. Khi đi sang scene imported, theme của entryTour giữ ổn định, còn nội dung/plugin defaults theo owner scene.

Editor dùng design system riêng ổn định. Preview có thể bọc theme khách xem, nhưng thanh công cụ chỉnh sửa và nút publish nằm ngoài theme.

## 7. Kiến trúc ảnh flycam

| Dữ liệu đầu vào | Renderer | Khả năng có được | Điều không thể suy ra từ ảnh đó |
| --- | --- | --- | --- |
| Panorama equirectangular 360 × 180 chụp trên cao | Panorama360 | Xoay cầu, nhìn xuống, hotspot spherical | Đi lại 3D tự do hoặc chiều sâu chính xác |
| Một ảnh flycam thường, nhìn xiên hoặc nhìn xuống | FlatImage | Zoom/pan, pin vị trí trên ảnh, nhảy vào scene mặt đất | Nhìn các hướng không nằm trong ảnh |
| Ảnh orthomosaic đã georeference | Extension bản đồ ở giai đoạn sau | Chồng tọa độ địa lý khi có phép biến đổi/CRS phù hợp | GPS của mọi pixel chỉ từ GPS tâm ảnh |
| Mesh/point cloud/3D tiles | Renderer 3D riêng ở giai đoạn sau | Điều hướng không gian theo dataset | Không tự có chỉ vì đã upload JPEG |

V1 ưu tiên hai dòng đầu. Người upload chọn projection và xem preview; metadata tỷ lệ chỉ hỗ trợ cảnh báo, không đủ chứng minh ảnh 2:1 là panorama đúng.

### Góc nhìn trung tâm

`Destination.overview` trỏ tới một Scene bình thường, có thể là aerial panorama hoặc ảnh phẳng. Hotspot ở tổng quan dẫn vào scene của từng tour, tạo cách khám phá toàn khu. Không cần một hệ navigation thứ hai riêng cho flycam.

Luồng khách: trang khu du lịch → “Khám phá từ trên cao” → Scene flycam → chọn vị trí → Scene mặt đất → trở lại tổng quan bằng hotspot hoặc lịch sử. Nút mở overview dùng tour sở hữu overview làm entryTour; imports của tour này quyết định các điểm vào trực tiếp ở tour khác.

### Độ phân giải lớn và tiles

- Panorama: tạo preview/base image và lưới tile theo adapter PSV. Có thể mở rộng nhiều mức chi tiết. Engine có equirectangular tiles adapter cho mục đích này. [PSV tiles](https://photo-sphere-viewer.js.org/guide/adapters/equirectangular-tiles.html)
- Ảnh phẳng: dùng DZI/pyramid và OpenSeadragon. Worker tạo manifest kích thước/mức zoom/tile; browser không cần biết đường dẫn đĩa. Sharp có output tiling phục vụ quá trình sinh ảnh. [Sharp output](https://sharp.pixelplumbing.com/api-output/)
- Hai format tile có quy ước khác nhau. Không lấy DZI đưa nguyên vào PSV; dùng processor riêng cho từng renderer.
- Chọn tile theo ngưỡng kích thước, giới hạn texture thiết bị và đo RAM. Không chỉ dựa vào kích thước JPEG nén.
- Mọi preview, tile và thumbnail phải sinh từ cùng bản ảnh đã xử lý thông tin nhạy cảm.

Nếu sau này cần bản đồ phẳng không có tọa độ địa lý, Leaflet có CRS.Simple, nhưng đơn vị bản đồ và pixel ảnh cần chuyển đổi riêng. Chưa cần cài thêm Leaflet khi OpenSeadragon đã đáp ứng ảnh tổng quan. [Ví dụ CRS.Simple](https://leafletjs.com/examples/crs-simple/crs-simple.html)

## 8. UX mượt và khả năng truy cập

- Giữ frame cũ trong lúc tải scene mới, có progress hoặc loading không giả số phần trăm nếu không đo được.
- Khi đổi loại renderer, fade ngắn 150–250 ms sau khi nội dung sẵn sàng; với reduced motion dùng cut hoặc opacity nhẹ.
- Hit area hotspot tối thiểu khoảng 44 CSS px trên thiết bị chạm; nhãn có độ tương phản và trạng thái focus.
- Không để wheel của viewer bắt cuộn toàn trang giới thiệu; viewer tương tác chỉ sau khi mở trải nghiệm.
- Mở dialog phải quản lý focus, Esc đóng, trả focus về nút mở; không để plugin panel giành focus lẫn nhau.
- Dùng ResizeObserver để thích ứng sidebar/mobile; không reload ảnh chỉ vì container đổi kích thước.
- Giới hạn prefetch theo mạng/RAM; ảnh decoded 8.192 × 4.096 × 4 byte đã khoảng 128 MiB trước phần overhead của engine.
- Fallback khi không có WebGL: hiển thị poster đã duyệt, thông báo ngắn và vẫn cho xem danh sách/nội dung tour.

## 9. Điều kiện hoàn thành một plugin mới

Definition/schema có version; capability rõ; form editor; thu thập references; render được trên các adapter đã khai báo; dispose đầy đủ; không nhận HTML/script tùy ý; có kiểm thử config lỗi và chuyển scene. Plugin có backend phải có đường API, quyền truy cập, hành vi timeout và chặn gọi bên ngoài khi cấu hình chưa sẵn sàng.
