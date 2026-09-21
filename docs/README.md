# Kiến trúc View360

Bộ đề xuất ngày 14/09/2026, dựa trên mã nguồn hiện tại. Đây là **thiết kế để triển khai**, chưa phải các chức năng đã có. Không thay đổi mã ứng dụng hoặc cài thư viện trong đợt viết tài liệu này.

## Phương án được chọn

Giữ Nuxt + Vue + TypeScript, tổ chức thành một ứng dụng có các module độc lập. YAML là nguồn dữ liệu nội dung chính. Ảnh được lưu trên filesystem của máy chạy server. Một tour có một file khai báo chính, có thể tách scene thành file riêng và tham chiếu scene thuộc tour khác.

Ba giao diện dùng chung nền tảng: trang giới thiệu khu du lịch, trải nghiệm xem tour và trình biên tập. Module renderer chỉ hiển thị hình ảnh; module plugin bổ sung tương tác; Tour Runtime chịu trách nhiệm điều hướng. Panorama flycam và ảnh flycam phẳng dùng hai renderer khác nhau.

## Thứ tự đọc

| Tài liệu | Nội dung và người triển khai chính |
| --- | --- |
| [01 — Kiến trúc tổng thể](01-kien-truc-tong-the.md) | Ranh giới module, tổ chức thư mục, trang web, Vue UI; frontend và người phụ trách kiến trúc |
| [02 — Ngôn ngữ YAML](02-dac-ta-yaml.md) | Ngữ pháp, ví dụ nhiều file, include/import, resolve liên kết, kiểm tra lỗi; người viết compiler và editor |
| [03 — Viewer, plugin và flycam](03-viewer-plugin-flycam.md) | Hợp đồng renderer/plugin, vòng đời, điều hướng, tọa độ và UX; frontend runtime |
| [04 — Editor, media và triển khai](04-editor-media-trien-khai.md) | API, ghi file an toàn, upload, xử lý ảnh nhạy cảm, publish, vận hành; backend và editor |
| [05 — Lộ trình và nghiệm thu](05-lo-trinh-nghiem-thu.md) | Chuyển đổi từ hiện trạng, thứ tự làm, tình huống kiểm thử; người quản lý triển khai |

## Các quyết định phải giữ nhất quán

1. Một scene có khóa đầy đủ `tourId#sceneId` và chỉ một nguồn sở hữu.
2. `$include` tách nội dung ra file; `imports` tái sử dụng scene của tour khác. Hai thao tác có ý nghĩa khác nhau.
3. Liên kết đến scene cụ thể bỏ qua `entryScene` của tour đích.
4. YAML chứa dữ liệu khai báo, không chứa JavaScript, đường dẫn module thực thi hay khóa API.
5. Bản nháp và bản công bố tách biệt. Public chỉ nhận dữ liệu đã công bố và media đã xử lý.
6. Ghi YAML/upload phải bền vững trên đĩa; lỗi ghi không được trả thành công.
7. MVP chạy một Node server và một worker xử lý media, dùng chung ổ đĩa local bền vững. Không cần MariaDB, MinIO hay Redis.
8. Public catalog có SSR; viewer và editor đồ họa được tải ở client khi cần.

Các từ **phải**, **không được**, **mặc định** trong bộ tài liệu là quy tắc của thiết kế đề xuất. Các hạn mức và mục tiêu hiệu năng là giá trị khởi đầu cần đo lại trên ảnh và thiết bị thật. Ví dụ YAML là mẫu đặc tả, không phải dữ liệu đã cài vào ứng dụng.
