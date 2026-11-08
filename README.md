# Mầm non Tuổi Ngọc — trang Lộ trình Học & Chơi

Trang tĩnh (HTML/CSS/JS thuần), không có backend, không có form gửi dữ liệu.

## Deploy lên Vercel (tên project: mntuoingoc)
    npm i -g vercel
    vercel login
    vercel --prod --name mntuoingoc
Địa chỉ mặc định: https://mntuoingoc.vercel.app (nếu tên còn trống).
Tên miền riêng: Vercel → Project → Settings → Domains.

## Bảo mật đã bật (vercel.json)
- CSP chặt: chỉ chạy script của chính site, không inline script, Trusted Types bật.
- Chống nhúng iframe (clickjacking): frame-ancestors 'none' + X-Frame-Options DENY.
- HSTS 2 năm, chặn MIME sniffing, không gửi Referrer, tắt camera/mic/vị trí.
- JS chỉ dựng nội dung bằng textContent (không innerHTML/eval).
