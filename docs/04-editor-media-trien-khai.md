# 04. Editor, media, công bố và triển khai

## 1. Hai chế độ sử dụng, hai bề mặt dữ liệu

**View** chỉ đọc một release đã công bố, gồm JSON runtime và rendition đã duyệt. **Edit** đọc YAML draft qua API có xác thực, có quyền upload, thay nội dung, tạo rendition và công bố. Preview dùng runtime giống khách xem nhưng lấy DTO draft qua API admin.

Ẩn nút admin hoặc đặt `ENABLE_ADMIN=false` ở client không bảo vệ API. Mọi API quản trị, media gốc, job và working copy đều phải xác thực tại server.

## 2. Giao diện editor

### 2.1. Các màn hình

| Màn hình | Chức năng |
| --- | --- |
| Dashboard | Số destination/tour/scene/asset, lỗi tham chiếu, ảnh chờ xử lý, dung lượng, bản công bố hiện tại |
| Destination editor | Tiêu đề, giới thiệu, ảnh cover, block nội dung, thứ tự tour, tour nổi bật, overview |
| Tour editor | Metadata, entry scene, theme, exports/imports, scene list và graph |
| Scene editor | Viewer ở giữa, danh sách scene trái, inspector phải, toolbar thêm plugin/chọn camera |
| Asset library | Upload, lọc ảnh/audio, kích thước, trạng thái xử lý/duyệt, nơi đang sử dụng |
| Redaction editor | Chọn vùng ảnh nhạy cảm, preview trước/sau, chạy xử lý, duyệt rendition |
| Publish review | Diff, revision nguồn, lỗi/cảnh báo, ảnh chưa duyệt, preview, lịch sử release |

Desktop ưu tiên ba vùng khi chỉnh scene; mobile cho xem/đổi metadata cơ bản bằng panel. Biên tập hotspot và vùng che phức tạp nên có cảnh báo không gian làm việc nhỏ, không cần ép toàn bộ desktop editor vào một màn hình điện thoại.

### 2.2. Thống kê scene và graph

Phân biệt `ownedSceneCount`, `importedSceneCount` và `reachableSceneCount` đã deduplicate. Dashboard không cộng mỗi lần import thành một scene ảnh mới. Graph node có canonical key, loại renderer, owner, trạng thái asset; edge lấy từ plugin navigation, không nối giả theo thứ tự mảng.

Imported scene có nhãn “Dùng từ tour …”. Editor cung cấp “Mở scene nguồn” và “Tạo bản sao độc lập”. Khi sửa nguồn, báo các tour phụ thuộc; không âm thầm sửa một bản flatten rồi ghi vào tour đang xem.

### 2.3. Lệnh biên tập

Editor dùng command có thể undo/redo: thêm scene, đổi metadata, thay asset, thêm/sửa/xóa plugin, kéo anchor, đổi entry, thêm import/export, đổi sceneOrder. Một lần kéo marker là một command khi thả, không một command cho mỗi frame.

State làm việc cục bộ và DTO server tách nhau. Debounce autosave khoảng 800 ms là giá trị khởi đầu; hiển thị “Đang lưu”, “Đã lưu”, “Chưa lưu do lỗi”. Không dựa vào `onBeforeUnmount` để bảo đảm lưu vì browser có thể đóng đột ngột. Có cảnh báo rời trang khi còn thay đổi chưa lưu.

Các form thay đổi đúng field của source document qua provenance. Khi scene inline, ghi tại `Tour.scenes.<id>`; khi `$include`, ghi đúng file Scene. Đổi định dạng inline ↔ include là lệnh riêng có diff.

### 2.4. Xóa và đổi ID

Trước khi xóa scene, reverse index kiểm tra entryScene, exports/imports, navigation, sceneOrder, destination overview và reference do plugin đăng ký. Nếu còn dùng, trả danh sách và chặn xóa đơn lẻ. Người dùng có thể chọn scene thay thế hoặc transaction gỡ các tham chiếu có chủ ý rồi xóa cùng lần.

Xóa scene không xóa asset tự động. Xóa asset chỉ chuyển vào trạng thái chờ thu gom khi không còn draft/release/working job tham chiếu. Đổi ID là refactor toàn snapshot; đổi title không ảnh hưởng ID. Bản sao scene nhận ID mới, sửa local refs theo lựa chọn rõ ràng và import lại các ref ngoại cần thiết.

## 3. Cây lưu trữ bền vững

Hai biến server riêng tư: `CONTENT_ROOT` cho YAML, revision, release; `MEDIA_ROOT` cho binary. Trong Nuxt có thể ánh xạ bằng runtimeConfig riêng tư và biến `NUXT_CONTENT_ROOT`/`NUXT_MEDIA_ROOT`. Chọn một quy ước ánh xạ duy nhất khi hiện thực, không dùng đồng thời hai bộ đường dẫn độc lập.

```text
CONTENT_ROOT/
  draft/
    head.json                     # Con trỏ revision đang hoạt động
    revisions/<revision>/
      destinations/*.yaml
      tours/*.yaml
      scenes/<tourId>/*.yaml
      assets/*.yaml
  working-copies/                  # Text chưa hợp lệ, riêng tư theo người dùng
  staging/                        # Transaction chưa commit
  releases/<releaseId>/
    source/                       # Snapshot YAML để khôi phục/kiểm tra
    runtime/                      # JSON đã resolve cho catalog/tour/scene
    manifest.json                 # Hash, schema, plugin versions, media allowlist
  published.json                  # Con trỏ release hiện hành
  jobs/<jobId>.json                # Trạng thái job bền vững
  access/revocations.json          # Thu hồi release/rendition khi cần
  audit/                          # Nhật ký actor, action, revision, kết quả
MEDIA_ROOT/
  quarantine/<uploadId>/          # Upload chưa kiểm tra
  originals/<assetId>/            # File gốc riêng tư
  derived/<contentHash>/          # Preview, cover, panorama, tiles, audio
  staging/<jobId>/                # Kết quả chưa hoàn tất
  trash/                         # Chờ thu gom theo retention
```

Trong tài liệu 02, `draft/tours/...` là đường dẫn **logic trong revision đang được trỏ bởi draft/head.json**. Mỗi revision chứa nguyên cây nội dung tương đối; `$include` luôn resolve bên trong revision đó. Snapshot cũ bất biến, không sửa file bằng hardlink có thể làm thay đổi revision khác.

`head.json`, JSON index, job và manifest là metadata/cache của file repository; nội dung tác giả vẫn là YAML. Không cần cài một database để quản lý chúng. Snapshot chỉ copy YAML và reference/hash media, không copy lại ảnh lớn mỗi lần lưu.

MVP không cho tiến trình ngoài ứng dụng sửa trực tiếp revision đã commit. Khi muốn sửa bằng IDE: export checkout ra thư mục làm việc, chỉnh file, chạy validate/import với base revision. Có thể bổ sung watch/import ở dev sau, nhưng không để người dùng ghi trực tiếp vào snapshot bất biến.

## 4. Ghi file, revision và xung đột

### 4.1. Transaction draft

1. Request mang `If-Match` là revision nguồn của editor. Server kiểm tra xác thực và khóa writer trong tiến trình Node duy nhất.
2. Đọc lại head trong lock. Nếu khác base revision, trả `412 PRECONDITION_FAILED`, không ghi đè dữ liệu mới.
3. Copy YAML của head vào staging, áp dụng command lên AST đúng nguồn. Với đổi nhiều file, mọi thay đổi cùng staging.
4. Validate cú pháp/schema; thu diagnostics tham chiếu. Command phá reference phải được biểu diễn rõ, không tự sửa mọi target thành entryScene.
5. Ghi file staging, flush file và metadata cần thiết theo filesystem; rename thành revision bất biến trên cùng filesystem.
6. Tạo file head tạm chứa revision mới, flush, rename đè `draft/head.json`, đồng bộ directory khi nền tảng hỗ trợ. Đây là điểm commit.
7. Trả revision mới và diagnostics; giải phóng lock. Nếu ghi/rename thất bại, trả lỗi, head cũ vẫn được giữ.

Mọi reader chốt head một lần đầu request rồi đọc đúng revision bất biến. Crash trước đổi head để lại staging/orphan có thể dọn; crash sau đổi head phải phục hồi bằng revision hoàn chỉnh. Startup kiểm tra manifest revision trước khi phục vụ.

Toàn workspace dùng một revision trong MVP để làm đúng transaction liên tour. Điều này có thể tạo conflict giữa hai người sửa file khác nhau; UI reload/reapply command khi không đụng field, hoặc cho chọn diff thủ công. Không tự chọn last-write-wins. Nếu nhu cầu tăng mới bổ sung revision theo document cùng transaction coordinator.

Worker không được tự sửa head: nó gửi kết quả về repository writer qua kênh nội bộ có xác thực hoặc thư mục kết quả để Node nhận. Vì vậy chỉ một chủ thể commit draft. Không chạy Node cluster/nhiều replica writer với lock RAM này.

### 4.2. Bảo toàn YAML

Giữ AST/source map khi sửa field, tránh dump toàn tour làm mất comment và include. Một form patch không được đổi trường không liên quan. Text editor lưu nguyên text hợp lệ vào tài liệu đích; xung đột text/form dùng cùng revision protocol. Parser không được im lặng bỏ plugin lạ khi người dùng chỉ đang mở để sửa.

## 5. Hợp đồng API đề xuất

Các endpoint dưới đây là mục tiêu mới; API hiện tại cần migration. ID chỉ nhận pattern trong DSL. Admin response có revision/diagnostics; public DTO không trả source file, recipe hay bản gốc.

| API | Input / kết quả chính |
| --- | --- |
| `GET /api/catalog` | Release hiện hành, destination/tour summary, URL cover an toàn |
| `GET /api/destinations/:id` | Metadata/blocks/tour summary tại release được chọn |
| `GET /api/tours/:id` | Giới thiệu tour, entry canonical key, sceneOrder summary; không tải ảnh lớn |
| `GET /api/experiences/:entryTourId/bootstrap` | Query release và optional ownerTourId/sceneId; trả releaseId, theme, sceneOrder, activeScene DTO |
| `GET /api/experiences/:entryTourId/scenes/:ownerTourId/:sceneId` | Query release bắt buộc; kiểm tra graph membership; trả đúng scene DTO |
| `GET /media/:releaseId/:renditionHash/:variant` | Chỉ phục vụ variant trong manifest của release còn được phép |
| `GET /api/admin/workspace` | Head revision, tree, stats, diagnostics; xác thực |
| `GET /api/admin/documents/:documentId` | Text YAML + parsed model + provenance + revision; documentId do server cấp, không là path tùy ý |
| `POST /api/admin/commands` | Command tạo/sửa/xóa destination/tour/scene/plugin/import; If-Match bắt buộc; transaction nhiều file |
| `PUT /api/admin/documents/:documentId` | Text YAML, If-Match; schema pass mới commit draft; lỗi trả diagnostics |
| `PUT /api/admin/working-copies/:documentId` | Lưu text chưa hợp lệ riêng tư, không ảnh hưởng draft/release |
| `POST /api/admin/assets` | Multipart streaming; trả assetId và jobId sau khi upload/metadata được lưu |
| `PUT /api/admin/assets/:assetId/recipe` | Recipe + base revision; tạo processing revision, hủy review cũ |
| `POST /api/admin/assets/:assetId/review` | Duyệt rendition hash/recipe revision chính xác; If-Match |
| `GET /api/admin/jobs/:jobId` | Progress nếu đo được, trạng thái/error/retryable |
| `POST /api/admin/previews` | Revision → manifest preview có xác thực, dùng cùng compiler/runtime |
| `POST /api/admin/publications` | Revision đã xem diff + idempotency key; tạo release, trả job hoặc releaseId |
| `POST /api/admin/publications/:releaseId/activate` | Chuyển bản đang công bố/rollback; kiểm tra media và compatibility |
| `POST /api/admin/revocations` | Thu hồi release/rendition cũ, có danh sách ảnh hưởng để người quản trị xem |

Tiles cần route con có level/row/column đã validate, không truyền đường dẫn file qua query. API private media/preview dùng ID + variant cho phép và kiểm tra quyền; original chỉ có endpoint admin riêng cho công cụ xử lý ảnh. Chat về sau dùng `POST /api/chat` gắn release/scene/profile, không nhận URL provider từ client.

Lỗi chung: `400` request hỏng; `401/403` quyền; `404` không tồn tại/không công khai; `409` vi phạm quan hệ như scene còn được dùng; `412` revision cũ; `413` quá lớn; `415` định dạng không hỗ trợ; `422` validation; `503` storage/worker chưa sẵn sàng. Thiếu `If-Match` ở lệnh cần revision trả `428`. Response có `code`, `message`, `requestId`, diagnostics khi người gọi có quyền.

Idempotency key được ghi bền vững cho upload/publish để retry không tạo nhiều bản không chủ ý. Upload từ browser không gửi đường dẫn local; server tạo ID, tên file nội bộ và đường dẫn lưu.

## 6. Upload và quản lý media local

### 6.1. Luồng upload

1. Người dùng chọn file từ máy; browser gửi dữ liệu multipart đến **server đang phục vụ ứng dụng**.
2. Server stream vào quarantine với giới hạn byte, số file, thời gian và quota; không đọc toàn upload vào RAM.
3. Kiểm tra file signature/MIME và decode bằng thư viện ảnh, không tin extension hoặc Content-Type client.
4. Ghi original riêng tư bằng asset ID; tính hash, kích thước byte/pixel và metadata. Chỉ tạo asset chính thức sau khi file gốc có thể đọc lại.
5. Tạo job bền vững để normalize orientation, kiểm tra projection được khai báo, tạo preview riêng tư và đưa vào quy trình xử lý/duyệt.
6. Trả trạng thái upload/processing rõ ràng. Nếu người dùng chọn “Tạo scene từ ảnh”, scene draft có thể được tạo ngay, nhưng chưa publish khi asset chưa ready/reviewed.

Giá trị khởi đầu: 100 MiB/ảnh, tối đa 120 megapixel và cạnh 32.768 px; audio 50 MiB; tổng upload đồng thời 2; worker xử lý ảnh 1 job/lần. Cấu hình lại sau benchmark; một ảnh 120 MP có thể chiếm hàng trăm MiB khi decode. Cần kiểm tra free disk trước upload và trước tạo tiles.

MVP nhận JPEG/PNG/WebP tĩnh cho ảnh và MP3/WAV cho audio sau kiểm tra decoder. HEIC, RAW, SVG, ảnh động cần pipeline riêng; trả 415 kèm hướng dẫn chuyển đổi. Ảnh định dạng phẳng dùng extension asset/projection riêng; tỷ lệ 2:1 chỉ là điều kiện kỹ thuật của panorama v1, không phải detector chắc chắn.

Dev ở máy cá nhân: MEDIA_ROOT là `./var/media` tại máy chạy Nuxt. Deploy trên server: MEDIA_ROOT là volume như `/data/media`. File không tự đồng bộ từ máy dev lên server; phải upload lại hoặc chuyển snapshot+media qua backup/import.

### 6.2. Không lưu upload runtime vào thư mục bundle

`public/` phù hợp với tài nguyên ứng dụng đưa vào lúc build. Thiết kế này lưu upload ngoài `public/`/`.output`, phục vụ qua route media hoặc reverse proxy nội bộ có kiểm soát manifest. Nếu lưu vào filesystem container không mount volume, dữ liệu có thể mất khi thay container.

Không gán static file server vào toàn MEDIA_ROOT. Chỉ đọc file sau khi asset/release/variant đã qua allowlist, kiểm tra path và thu hồi. Binary có ETag theo hash, type đúng, chống MIME sniff; audio hỗ trợ Range. Nội dung nhạy cảm/admin trả `Cache-Control: private, no-store`.

Public rendition mặc định `Cache-Control: public, max-age=0, must-revalidate` cùng ETag để hỗ trợ kiểm tra thu hồi; URL vẫn có hash ổn định. Chỉ bật cache dài/CDN sau khi đã quyết định chính sách thu hồi. Bytes khách đã tải về không thể bị thu hồi khỏi thiết bị của họ.

## 7. Xử lý ảnh nhạy cảm trước khi công bố

### 7.1. Nguyên tắc

Che vùng nhạy cảm phải diễn ra trên pixel ở server trước khi sinh rendition public. Không chỉ vẽ lớp blur/CSS trong viewer: người xem vẫn có thể tải ảnh gốc nằm dưới lớp đó.

Original chỉ được phục vụ cho admin có quyền chỉnh ảnh. Không để original xuất hiện trong URL public, manifest, source YAML export public, thumbnail, preview public hoặc ảnh cover.

### 7.2. Recipe v1

Editor tạo recipe có version và danh sách operations theo thứ tự. Hỗ trợ `fill`, `blur`, `pixelate` trên rectangle chuẩn hóa `[x,y,width,height]` trong ảnh đã normalize orientation. Mỗi operation có ID; rectangle nằm trong `[0,1]`; `fill.color` là màu hex; `blur.sigmaPx` hoặc `pixelate.blockSizePx` là số dương có giới hạn server. Vùng che được đưa ra pixel theo floor trái/trên, ceil phải/dưới và clamp để không hở viền.

MVP dùng hình chữ nhật; polygon/brush là extension. Solid fill là lựa chọn chắc chắn hơn khi mục đích là loại bỏ thông tin; blur/pixelate cần duyệt mức che trực quan. Sharp có thao tác blur; ứng dụng vẫn phải tự xây mask/ROI/composite đúng vùng. [Sharp operations](https://sharp.pixelplumbing.com/api-operation/)

Panorama có seam trái/phải: một vùng che qua seam phải tách thành hai rectangle trên ảnh equirectangular. Redaction editor v1 nên cho sửa trên ảnh phẳng toàn kích thước và preview lại bằng panorama; không vẽ rectangle màn hình rồi coi đó là rectangle texture. Thao tác ở gần cực cần kiểm tra vùng sau khi chiếu lên cầu.

V1 không crop, đổi projection hoặc xoay hình học sau khi đã đặt hotspot; chỉ normalize orientation từ đầu. Nếu thay ảnh khiến hệ tọa độ thay đổi, đánh dấu toàn bộ anchor cần kiểm tra và hủy review cho tới khi duyệt lại.

### 7.3. Pipeline xử lý và duyệt

1. Đọc original, chuẩn hóa orientation thành hệ pixel gốc của recipe.
2. Áp dụng operations theo thứ tự, xóa metadata không cần công khai như GPS nhúng.
3. Tạo master đã xử lý; từ master này tạo preview, thumbnail, cover, panorama/tile hoặc DZI. Không tạo cover trực tiếp từ original.
4. Ghi tất cả đầu ra vào staging, tính hash từ input+recipe+processor version, kiểm tra có thể decode rồi chuyển sang derived bất biến.
5. Cập nhật metadata `processing.state=ready` cùng rendition manifest và recipe revision; review vẫn pending.
6. Người quản trị kiểm tra bản sau xử lý, chọn duyệt đúng recipe hash/rendition hash. Không có thao tác che vẫn phải xác nhận ảnh đủ điều kiện công bố.
7. Publish kiểm tra review khớp rendition dùng thực tế. Sửa recipe/thay original làm review cũ mất hiệu lực.

Audio cũng phải có review trước public; không áp dụng recipe che ảnh cho audio. Nếu sau này cần cắt/che âm thanh thì thêm processor/schema tương ứng.

### 7.4. Sửa ảnh đã công bố

Đổi recipe chỉ ảnh hưởng draft, release cũ vẫn pin rendition cũ. Nếu sửa vì nội dung nhạy cảm từng bị lọt, UI phải hiển thị mọi release tham chiếu và có lệnh thu hồi ngay các rendition đó; sau đó publish bản đã sửa. Media endpoint kiểm tra revocation cho cả release cũ, không chỉ con trỏ hiện hành.

Giữ backup riêng tư không đồng nghĩa giữ URL cũ public. Release đã thu hồi trả 410 hoặc nội dung thay thế theo chính sách; đang xem có thể được yêu cầu chuyển sang bản hiện hành. Việc thu hồi không thể xóa ảnh mà người xem đã tải trước đó.

## 8. Job xử lý không cần Redis

Mỗi job có file record: ID, loại, assetId, inputHash, recipeRevision, processorVersion, state, attempt, createdAt, heartbeat, result, lỗi. State là `queued → running → succeeded|failed`; job running có heartbeat hết hạn được đánh dấu interrupted rồi retry an toàn sau restart.

Một worker riêng để decode/tạo tile không chặn event loop API. Worker ghi output bất biến và báo completion; writer so sánh recipe revision hiện hành trước khi gắn kết quả. Job cũ hoàn thành sau recipe mới không được ghi đè trạng thái mới.

Khóa job/output theo hash để retry idempotent. Giới hạn retry, backoff và nút chạy lại; không retry vô hạn lỗi file hỏng. Kết quả orphan được thu gom theo chính sách retention. Chưa cần distributed queue khi chỉ có một server/worker.

## 9. Công bố release

### 9.1. Chọn snapshot toàn workspace

V1 công bố một snapshot toàn workspace hợp lệ. Điều này tránh tour A mới tham chiếu tour B chưa công bố hoặc media revision khác. Tradeoff: một draft tour lỗi có thể chặn lần publish toàn workspace; UI phải hiển thị rõ trước khi bắt đầu chỉnh. Tách publish từng tour có dependency closure là giai đoạn sau, không giả định đã được giải quyết trong v1.

### 9.2. Transaction publication

1. Người dùng mở diff/preview tại draft revision R, chọn công bố R; request mang R và idempotency key.
2. Chốt R bất biến. Chạy compiler toàn snapshot, xác nhận entry/import/export/graph/plugin/theme và mọi asset reachable/catalog đã có rendition được duyệt. Khóa chống hai publication activation chồng nhau.
3. Tạo release staging gồm source snapshot riêng tư, runtime JSON, media allowlist chính xác, hash nội dung, schema/plugin/processor versions. Manifest public riêng nếu cần; source snapshot không có route public.
4. Kiểm tra runtime có thể đọc bootstrap và từng scene, file rendition tồn tại. Đưa release thành bất biến bằng rename cùng filesystem.
5. Ghi con trỏ published tạm rồi atomic rename. API chỉ báo thành công sau khi con trỏ mới bền vững.
6. Khách mới đọc release mới. Phiên đang xem tiếp tục release đã pin cho tới reload/hết retention; không trộn scene từ hai release.

Draft mới hơn R vẫn có thể được lưu trong khi build release R. UI phải báo “Đã công bố R; còn thay đổi chưa công bố” nếu head đã tiến lên. Không tự lấy revision mới hơn mà người dùng chưa xem.

### 9.3. Rollback và retention

Rollback đổi con trỏ về release tương thích, chưa thu hồi và còn đầy đủ media; không sửa draft. Muốn tiếp tục biên tập từ release cũ dùng “Khôi phục thành draft mới”, có revision mới và diff.

Mặc định giữ tối thiểu 5 release gần nhất và các release trong 30 ngày; backup dài hạn riêng tư theo nhu cầu. Release hết hạn hoặc bị thu hồi không còn phục vụ scene/media; phiên cũ nhận 410 và đề nghị tải bản hiện hành. Garbage collector đánh dấu từ mọi draft/release còn giữ, job/working reference liên quan trước khi xóa derived/original. Chỉ xóa sau grace period và có bản backup theo chính sách.

## 10. Xác thực và vận hành

MVP một tài khoản admin cấu hình ở server bằng password hash và session secret, không trong YAML nội dung. Session cookie ký/mã hóa có thời hạn, HttpOnly, Secure khi HTTPS, SameSite phù hợp; server kiểm tra mọi mutation, origin/CSRF và giới hạn thử đăng nhập. Thay password/session secret phải vô hiệu session cũ. Nếu mở nhiều người dùng thì bổ sung provider đăng nhập và role trước khi mở quyền editor.

Không bắt buộc database để có session tối thiểu; nhưng không coi một biến public `enableAdmin` là lớp bảo vệ. Endpoint admin có thể tắt hoàn toàn từ cấu hình riêng tư server.

Deploy chọn Nuxt/Nitro Node server trên VPS hoặc máy chủ có volume. Nitro có preset `node_server` và entry `.output/server/index.mjs`. [Tài liệu triển khai Nitro](https://nitro.build/deploy/runtimes/node)

| Môi trường | Cách lưu |
| --- | --- |
| Dev | `var/content`, `var/media` trong máy chạy Nuxt, gitignore dữ liệu runtime |
| VPS trực tiếp | Thư mục dữ liệu riêng ngoài mã release, service account có quyền ghi |
| Docker | Bind mount/named volume cho `/data/content`, `/data/media`; web và worker cùng nhìn dữ liệu |
| Hosting chỉ phục vụ static | Chỉ có thể xem bản export; không đáp ứng editor/upload runtime |
| Serverless với filesystem chỉ đọc/tạm thời | Không đáp ứng local persistence như phương án này; chọn server/volume hoặc phải đổi storage architecture |

Chính sách cụ thể của từng nhà cung cấp phải kiểm tra khi chọn hosting. Không triển khai editor bằng cách bắt lỗi ghi filesystem rồi coi thành công như loader hiện tại.

Khi triển khai phương án mới, gỡ dependency vận hành MariaDB/MinIO và cấu hình liên quan, nhưng chỉ sau migration/kiểm tra dữ liệu. Reverse proxy terminate TLS, đặt upload size/timeout phù hợp; process Node không chạy root. Readiness kiểm tra head/release hợp lệ và storage có thể đọc/ghi; public có thể tiếp tục đọc release cũ khi worker xử lý ảnh lỗi.

Theo dõi free disk, upload failures, publish failures, job queue, p95 load scene metadata và requestId. Log không ghi password/session key/chat secret/nội dung binary. Backup phải bao gồm YAML revisions, published pointer, release manifests, media còn được tham chiếu và revocations; backup trên chính ổ đĩa server không bảo vệ khỏi hỏng ổ.

Trước khi lên production cần thử khôi phục backup vào thư mục sạch, restart và mở cả public tour lẫn draft editor. Chỉ copy mã nguồn lên server không đủ để khôi phục nội dung đã upload.
