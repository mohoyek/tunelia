# پلن: رفع خطاها و آماده‌سازی tunelia.ir برای دیپلوی Vercel

##状ت فعلی (تایید‌شده)
- `src/app/page.tsx`: NetworkDiagram و Projects **حذف شده‌اند** (فقط ServicesSection, RiskSection, WhyUs, Contact باقی‌مانده‌اند).
- `src/components/sections/ServicesCircle.tsx`: GSAP rotation حذف شده است. فعلاً wedge hover `hover:fill-[var(--accent-soft)] hover:stroke-[var(--accent)]` دارد.
- `next.config.mjs`: `output: 'export'` (static export) — سازگار با Vercel.
- `package.json`: `@gsap/react` + `gsap` نصب شده‌اند.
- فایل‌های brand و og-card در `public/` وجود دارند.

## وظایف اجرا (به ترتیب)

### ۱. اصلاح انیمیشن دایره خدمات (ServicesCircle.tsx)
- ✅ Rotation GSAP — قبلاً حذف شده است (تکرار نکن).
- تغییر hover روی wedgeها: فقط **stroke bright** شود. `hover:fill-[var(--accent-soft)]` را حذف و فقط `hover:stroke-[var(--accent)]` نگه دار تا رنگ نارنجی بزرگ/عجیب نمایش داده نشود.
- اطمینان از عدم وجود `xmlns` غیرمجاز بر روی `<div>` داخل `<foreignObject>` (نوع TypeScript).

### ۲. تایید حذف بخش‌های Network Topology و Projects
- `page.tsx`: ایمپورت و render NetworkDiagram/Projects فعلاً غیرفعال است.
- فایل‌های `NetworkDiagram.tsx` و `Projects.tsx` **حذف نشوند** (فقط از صفحه حذف شده‌اند).

### ۳. آماده‌سازی برای دیپلوی Vercel
- `next.config.mjs` با `output: 'export'` و `images.unoptimized: true` — برای static export آماده است.
- فونت Vazirmatn از Google CDN در `layout.tsx` لود می‌شود (CDN عمومی، مشکل در Vercel ندارد).
- GSAP فقط در Client Components (`'use client'`) استفاده شده است — سازگار با static export.
- اگر کاربر بعداً خطای Vercel خاصی داشت، با این پایه roller-back قابل رفع است.

### ۴. اجرا و اعتبارسنجی
- `npm install`
- `npm run build` باید بدون خطا TypeScript و بدون خطای webpack تکمیل شود.
- پوشه `out/` تولید شود (static export).
- بررسی بصری: دایره خدمات بدون چرخش؛ hover فقط stroke bright (رنگ نارنجی تنها روی border wedge، نه fill بزرگ).
- صفحه اصلی: Network Topology و Projects نمایش داده نمی‌شوند.

## تعریف «done»
- `npm run build` exit code 0.
- دایره خدمات: بدون rotation، hover فقط stroke accent.
- صفحه اصلی: 네트워ک topology و پروژه نمایش داده نمی‌شوند.
- پروژه آماده دیپلوی روی Vercel است.

## فایل‌های کلیدی
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/sections/ServicesCircle.tsx`
- `next.config.mjs`
- `package.json`
