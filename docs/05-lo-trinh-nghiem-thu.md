# 05. Lộ trình triển khai và tiêu chí nghiệm thu

## 1. Thứ tự triển khai

Mỗi giai đoạn phải cho ra một luồng chạy được và có tiêu chí kiểm tra. Không cần viết hết mọi plugin hoặc mọi màn hình trước khi kiểm chứng resolver và persistence.

| Giai đoạn | Việc làm | Điều kiện chuyển tiếp |
| --- | --- | --- |
| 1. Domain và DSL | Schema v1, parser, compiler, include/import, canonical ref, provenance, diagnostics | Fixture nhiều tour resolve đúng; schema lỗi có vị trí nguồn |
| 2. Repository bền vững | CONTENT_ROOT/MEDIA_ROOT, immutable draft revision, writer, conflict, public release repository | Restart không mất dữ liệu; lỗi đĩa không trả thành công |
| 3. Runtime và renderer | Tách PSV adapter, Tour Runtime, deep link, history, Plugin Host; navigation/info | Đi trực tiếp A → scene của B, back/forward và chuyển nhanh đúng |
| 4. Website giới thiệu | Destination/tour catalog SSR, layout, theme registry, Reka UI và UI cơ bản | Mở trang chủ không tải viewer; có đường vào tour và quay lại |
| 5. Editor và media | Scene CRUD, import/export picker, upload local, recipe/worker/review, publish toàn snapshot | Thêm ảnh → tạo scene → gắn hotspot → preview → publish thành công |
| 6. Flycam | FlatImage adapter, image anchors, overview và chuyển renderer | Ảnh phẳng trên cao dẫn đúng scene panorama, tọa độ đúng khi resize |
| 7. Hoàn thiện MVP | Graph, thống kê, conflict UI, backup/restore, redaction seam, accessibility, tiles khi cần | Đạt bảng nghiệm thu bên dưới |
| 8. Mở rộng | Audio/speak, rồi chat nếu có nhu cầu; map/3D sau cùng | Không thay đổi ownership/reference semantics đã ổn định |

Giai đoạn 1–7 là phạm vi MVP theo yêu cầu hiện tại, gồm flycam, editor, xử lý ảnh nhạy cảm và local storage. Audio/speak/chat có hợp đồng mở rộng từ đầu nhưng không phải lý do trì hoãn nền tảng; nếu cần ngay thì kéo các plugin tương ứng vào kế hoạch trước nghiệm thu sản phẩm.

## 2. Kế hoạch chuyển đổi mã hiện tại

### 2.1. Kiểm kê và chọn nguồn nội dung

Hiện `trang-bay` xuất hiện trong cả YAML và TypeScript. Trước migration cần xuất bản nội dung thực sự đang hiển thị và so diff với `tours/trang-bay.yaml`, `server/data/tours/trang-bay.ts`, `server/data/places.ts`. Không tự cho rằng một bản đầy đủ hơn chỉ vì có nhiều scene hoặc timestamp mới hơn.

Lưu backup các bản nguồn và ảnh liên quan, lập báo cáo scene/title/marker/asset khác nhau. Chọn một bản nguồn migration có xác nhận của người phụ trách nội dung nếu có mâu thuẫn. Đây là bước khi thực sự chuyển dữ liệu, không phải hành động đã làm trong bộ tài liệu này.

### 2.2. Chuyển trường dữ liệu

| Hiện tại | DSL mới |
| --- | --- |
| `slug` | `Tour.id` |
| `location`, phần mô tả địa điểm | Destination metadata/blocks sau khi rà nội dung |
| `initialSceneId` | `entryScene: "#<sceneId>"` |
| `scenes` array | Map theo ID, ưu tiên mỗi Scene một `$include` |
| `panorama` | `media: {type: panorama, projection: equirectangular, asset: ...}` |
| `thumbnail` | Rendition được tạo từ asset đã xử lý; không còn URL tùy ý trong Scene |
| `initialYaw`, `initialPitch` | `initialView.yaw/pitch` theo độ |
| `markers` | `plugins` instances có `type`, `version`, `anchor`, `config` |
| `marker.plugin` | `PluginInstance.type` |
| `targetScene` | `config.target` dùng SceneRef, local hay imported theo mapping owner |
| `content` của info | `config.text`; label/title được ánh xạ có kiểm tra |
| `plugins: [navigation, info]` cấp tour | Các instance trong Scene; default dùng `pluginDefaults` khi cần |

Góc hiện tại được gửi trực tiếp tới PSV và dữ liệu có giá trị dạng radian. Migration phải kiểm tra quy ước thực tế bằng một số scene đối chiếu trực quan. Nếu là radian: `degrees = radians × 180 / π`, sau đó normalize yaw về `[-180,180)`. Không chuyển đổi bằng cách chỉ đổi tên field hoặc đổi đơn vị hai lần.

Nhóm scene có thể tách thành tour `trang-bay`, `trang-bay-1`, `trang-bay-2` theo ý nghĩa nội dung; tiền tố `scene-c*`, `scene-tb1-*`, `scene-tb2-*` chỉ là gợi ý cần rà lại, không tự động quyết định cấu trúc du lịch. Lập bảng old ID → canonical new key; mọi hotspot xuyên nhóm phải tạo import/export và SceneRef tương ứng.

### 2.3. Media cũ và liên kết cũ

Với mỗi URL ảnh local đang dùng, xác nhận file tồn tại rồi nhập vào asset repository, giữ hash và bản gốc. URL ngoài chỉ tải về sau khi chọn cách chuyển phù hợp; không để migration âm thầm phụ thuộc một host ảnh bên ngoài trái yêu cầu local. Tạo lại thumbnail/cover theo pipeline mới, đặc biệt khi có vùng che.

File đang ở `public/images` vẫn có thể truy cập công khai dù Scene đã đổi URL. Sau khi chuyển xong và backup, bỏ phục vụ các đường dẫn original cũ trong deployment mới, kiểm tra cả CDN/cache nếu có. Không chỉ xóa đường link trong YAML.

Trang chủ mới là catalog; có thể gắn nút rõ ràng vào tour Trảng Bay. Route cũ dẫn tới tour/scene nếu đã chia sẻ cần mapping redirect, giữ ý nghĩa scene đích; không redirect tất cả về entryScene.

### 2.4. Thay thế từng thành phần

1. Thêm compiler/repository mới song song, dùng fixture và so sánh số scene/target với nguồn đã chọn.
2. Chuyển public API sang release DTO, loại nguồn hardcode khỏi đường đọc khi kết quả đã đúng.
3. Chuyển viewer sang runtime/adapter/plugin host; so sánh vị trí hotspot trên các scene đã biết.
4. Chuyển editor sang draft APIs; không dùng public DTO đã flatten làm nguồn ghi YAML.
5. Chuyển deploy sang Node + volumes; chỉ khi persistence đạt nghiệm thu mới bỏ cấu hình MariaDB/MinIO cũ.
6. Bỏ mô hình place/tour bị trùng và cập nhật README vận hành sau khi không còn consumer cũ.

Không cần rewrite toàn bộ giao diện một lần. Có thể giữ theme hiện tại làm component của theme registry, nhưng bỏ việc theme hoặc trang gọi thẳng dữ liệu hardcode.

## 3. Bộ fixture cho người triển khai

Tạo bộ nội dung kiểm thử riêng theo mẫu tài liệu 02, gồm hai tour A/B, scene ID trùng giữa hai tour, hai projection, một scene imported, một scene không có cạnh và một chu trình A ↔ B. Tất cả asset fixture phải có ảnh thực hoặc ảnh tổng hợp do nhóm tạo, metadata/hash thật và review đúng.

Các YAML trong tài liệu là ví dụ đặc tả; danh sách asset chưa phải bộ dữ liệu có ảnh đầy đủ. Không coi copy các code block là đã có một bản demo publish được.

Fixture lỗi nên độc lập, mỗi case làm sai một quy tắc: duplicate key, missing include, sai owner, ref chưa import, scene chưa export, plugin lạ, sai đơn vị/tọa độ, asset chưa duyệt và path traversal. Đừng chỉ kiểm thử happy path.

## 4. Nghiệm thu chức năng

| ID | Tình huống | Kết quả bắt buộc |
| --- | --- | --- |
| DSL-01 | Tour có 50 scene nằm ở 50 file | File tour ngắn, tất cả scene resolve đúng, provenance chỉ đúng nguồn |
| DSL-02 | Include thiếu file/sai ID/thoát root bằng `..` hoặc symlink | Lỗi rõ với vị trí nguồn; không đọc ngoài root |
| DSL-03 | A import một scene của B, B có entry khác | Click đi đúng scene đã chọn, không hiển thị entry B trước |
| DSL-04 | A ↔ B import và navigation vòng | Compiler kết thúc, không clone scene vô hạn |
| DSL-05 | A và B đều có scene `cong` | Canonical key phân biệt; không lẫn ảnh/plugin/history |
| DSL-06 | Imported scene dùng alias của tour B | Resolve theo B, không theo tour A đang mở |
| DSL-07 | B thay đổi scene đã được A dùng | Preview A thấy thay đổi theo draft mới; release đang xem không đổi trước publish |
| DSL-08 | Trỏ scene chưa import/export hoặc scene không tồn tại | Chặn publish, diagnostic chỉ marker/ref cụ thể |
| VIEW-01 | Mở trang chủ | Có giới thiệu/tour; không auto mount renderer |
| VIEW-02 | Reload deep link A/B/scene | Mở đúng scene, giữ entryTour A |
| VIEW-03 | Back/forward qua nhiều tour | Đúng scene và camera đã lưu |
| VIEW-04 | Chuyển 3 scene liên tiếp khi request về sai thứ tự | Chỉ scene mới nhất được commit; không có ảnh cũ ghi đè |
| VIEW-05 | Mất mạng hoặc ảnh bị lỗi | Có retry, giữ scene trước nếu có, không spinner vô hạn |
| FLY-01 | Upload panorama aerial 2:1 đúng projection | Xoay cầu và hotspot spherical đúng |
| FLY-02 | Upload ảnh flycam thường | Hiển thị phẳng, không kéo giãn lên cầu |
| FLY-03 | Từ ảnh tổng quan bấm một vị trí | Vào scene panorama cụ thể, arrivalView đúng |
| FLY-04 | Resize/zoom ảnh phẳng | Hotspot luôn nằm cùng vị trí trên ảnh |
| EDIT-01 | Thêm/xóa scene, đổi entry, undo/redo | YAML/source map và UI nhất quán |
| EDIT-02 | Chỉnh imported scene | Ghi vào nguồn B hoặc duplicate tường minh; không sinh bản sao ngầm |
| EDIT-03 | Xóa scene có ref từ tour khác | Hiện nơi sử dụng và chặn/xử lý trong transaction có chủ ý |
| EDIT-04 | Sửa một field trong Scene include có comment | Include vẫn nguyên, comment/field khác được giữ theo chính sách round-trip |
| EDIT-05 | Hai tab lưu cùng base revision | Tab sau nhận 412, không mất thay đổi tab trước |
| EDIT-06 | YAML chưa hợp lệ | Có thể lưu working copy riêng tư; không thay draft hợp lệ/public |
| MEDIA-01 | Upload lúc dev, restart Nuxt | Ảnh và metadata vẫn tồn tại, tiếp tục edit được |
| MEDIA-02 | Upload trong Docker, thay container | Ảnh còn trong volume, không phụ thuộc filesystem container cũ |
| MEDIA-03 | File giả extension/quá lớn/decode quá lớn | Bị chặn với mã đúng, không tràn RAM hoặc để asset ready giả |
| MEDIA-04 | Job cũ xong sau khi đổi recipe | Không ghi đè rendition/review của recipe mới |
| PRIV-01 | Vùng nhạy cảm được che và publish | Pixel bị che ở panorama, thumbnail, cover, preview và mọi tile |
| PRIV-02 | Khách đoán URL original/preview admin | Không tải được file; public manifest không chứa original path |
| PRIV-03 | Vùng nhạy cảm đi qua seam panorama | Cả hai biên đều che đúng, kiểm tra trên ảnh phẳng và viewer |
| PRIV-04 | Sửa che sau publish, thu hồi bản cũ | URL cũ bị từ chối khi revalidate; không chỉ ẩn khỏi catalog |
| PUB-01 | Publish khi asset chưa duyệt/graph lỗi | Không đổi published pointer |
| PUB-02 | Tắt tiến trình giữa staging và đổi pointer | Chỉ thấy bản cũ hoàn chỉnh hoặc bản mới hoàn chỉnh |
| PUB-03 | Đĩa đầy hoặc mất quyền ghi | API trả lỗi, editor vẫn báo chưa lưu; không báo thành công giả |
| PUB-04 | Draft tiếp tục thay đổi khi publish R | Public đúng R, UI báo thay đổi mới còn chưa công bố |
| PUB-05 | Khách đang xem release cũ khi công bố | Các request cùng phiên dùng release cũ nhất quán |
| PLUG-01 | Thiếu plugin/version/capability | Publish chặn với thông báo; lỗi thực thi được cô lập |
| PLUG-02 | Rời scene có audio/chat/timer | Tài nguyên dừng, không phát âm thanh/chạy stream ngầm |
| OPS-01 | Không đăng nhập gọi API admin | Bị chặn tại server dù gọi trực tiếp bằng HTTP |
| OPS-02 | Restore backup vào thư mục sạch | Mở được cả tour public, draft và media đúng revision |

## 5. Kiểm thử nào nên có khi triển khai

- Unit/contract tests cho parser subset, schema, reference resolver, provenance và plugin reference extraction. Đây là phần ngữ nghĩa dễ sai nhất.
- Integration tests với thư mục tạm cho transaction, compare-and-swap, publish pointer, lỗi đĩa giả lập, crash recovery, worker completion cũ và media allowlist.
- Browser E2E cho luồng chính: upload → Scene → hotspot → preview → publish → deep link → chuyển flycam/mặt đất. Thêm test viewport mobile và chuyển nhanh khi mạng chậm.
- Kiểm tra ảnh thực tế cho redaction/seam/derivative; snapshot UI không chứng minh pixel gốc đã được loại khỏi đầu ra.
- Kiểm tra SSR bundle/network: trang giới thiệu không tải WebGL/editor bundle.

Không cần test từng class Tailwind hay các component chỉ bọc UI đơn giản. Ưu tiên test điều kiện nghiệp vụ và lỗi gây mất dữ liệu hoặc lộ bản ảnh chưa xử lý.

## 6. Mục tiêu hiệu năng ban đầu

Đây là mục tiêu thiết kế cần benchmark, không phải kết quả đo của dự án hiện tại.

| Hạng mục | Mục tiêu khởi đầu / cách đo |
| --- | --- |
| Catalog | JSON danh sách không kèm full scene/plugin; phân trang khi nhiều tour |
| First preview | Cố gắng ≤ 2 giây ở profile mạng 10 Mbps/RTT 100 ms với preview ≤ 300 KiB; đo trên mobile thật |
| Điều khiển UI | Panel/nút có phản hồi trong khoảng 100 ms khi không chờ mạng |
| Metadata scene | p95 backend ≤ 150 ms khi đọc release đã cache trên server mục tiêu |
| Chuyển scene | Không đen màn hình kéo dài; ảnh cũ/preview tồn tại trong lúc tải |
| Bộ nhớ | Một renderer active; không tăng WebGL context/listener sau 100 lần chuyển |
| Prefetch | Tối đa 2 đích, có hủy và hạn mức; không tải mọi ảnh theo toàn graph |
| Compile | Đo với 200 tour/5.000 scene tại hạn mức đề xuất; publish chạy job nếu vượt thời gian HTTP thông thường |
| Worker | Một job ảnh lớn một lúc, không làm event loop API mất phản hồi |

Nếu ảnh mẫu thực vượt giới hạn texture hoặc RAM, đưa tile pipeline lên sớm trong giai đoạn 3/6. Không nâng độ phân giải toàn bộ ảnh và kỳ vọng animation sẽ giải quyết độ mượt.

## 7. Những quyết định chỉ mở lại khi có nhu cầu

| Nhu cầu mới | Thay đổi cần cân nhắc |
| --- | --- |
| Nhiều server writer | Shared storage + distributed coordination hoặc chuyển repository sang database; lock RAM v1 không đủ |
| Publish từng tour độc lập | Release theo dependency closure, pin version tour/scene/media; cần quy tắc tương thích nhập scene |
| Nhiều tổ chức quản lý | Tenant boundary cho ID, storage, auth và quota trước khi mở tài khoản rộng rãi |
| Cộng tác editor đồng thời | Document revision chi tiết/CRDT theo nhu cầu; không thêm ngay chỉ để kéo hotspot |
| Plugin do người dùng upload | Mô hình sandbox/signature/permission mới; khác hẳn registry code được tin cậy |
| Orthomosaic có GPS | Schema CRS/georeferencing và renderer map, không tái sử dụng x/y như lat/lon |
| Đi lại 3D | Dataset và renderer 3D chuyên dụng, không coi JPEG flycam là dữ liệu 3D |

## 8. Tài liệu người triển khai cần tạo tiếp

Sau khi bắt đầu hiện thực, bổ sung JSON Schema thật, type/interface thật, API/OpenAPI, fixture hợp lệ có asset, migration command có chế độ dry-run và hướng dẫn backup/restore theo hosting đã chọn. Các hợp đồng và quyết định trong bộ tài liệu này là đầu vào cho những sản phẩm đó; chưa có schema hoặc CLI nào được cài chỉ bằng việc viết đề xuất.
