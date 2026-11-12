# وظیفه: رفع باگ‌ها و ایرادات پروژه تونلیا (tunelia)

تو یک ایجنت برنامه‌نویسی هستی که روی این مخزن (وب‌سایت Next.js 14 / TypeScript / Tailwind — سایت خدمات IT «تونلیا») کار می‌کنی. تمام موارد زیر را دقیقاً و کامل انجام بده. هیچ چیز را نیمه‌کاره رها نکن.

## قوانین کلی (غیرقابل نقض)

- هیچ تغییری در طراحی، رنگ‌ها، توکن‌های CSS، ساختار بصری یا چیدمان صفحه نده. این یک وظیفه رفع باگ است، نه بازطراحی.
- فایل‌های `src/components/sections/NetworkDiagram.tsx`، `src/components/sections/Projects.tsx` و `src/data/projects.ts` را حذف نکن — عمداً رندر نمی‌شوند و باید باقی بمانند.
- تنظیم `output: 'export'` در `next.config.mjs` و استاتیک بودن سایت باید حفظ شود.
- محتوای فارسی باید روان و بدون غلط باشد؛ اصطلاحات فنی انگلیسی معتبر (Cisco، MikroTik، VLAN، DHCP، DNS، Windows، Linux، هلو، سپیدار، پارسا) مجازند.
- در انتهای کار، گزارش تغییرات بده: فهرست فایل‌های تغییر یافته + خلاصه هر تغییر.

---

## ۱. 🔴 باگ بحرانی: جابجایی اسلاگ دو خدمت network و backup

**فایل:** `src/app/services/[slug]/page.tsx` (خطوط ۷ تا ۱۷)

**مشکل:** آبجکت `SLUG_TO_ID` مقدار `network: 1` و `backup: 5` دارد، در حالی که در `src/data/services.ts` آی‌دی **۱ = بکاپ‌گیری** و آی‌دی **۵ = شبکه‌های کامپیوتری** است. آبجکت `ID_TO_SLUG` در همان فایل درست است (`1: 'backup'`, `5: 'network'`).

**نتیجه فعلی باگ:** صفحه `/services/backup` عنوان و متادیتای «شبکه‌های کامپیوتری» را با محتوای متفاوت نشان می‌دهد و برعکس — عنوان و متن این دو صفحه قاطی شده است.

**راه‌حل:** در `SLUG_TO_ID` فقط این دو خط را اصلاح کن: `network: 5` و `backup: 1`. بقیه ۷ مقدار دست نخورده بماند.

**تأیید:** پس از build، فایل `out/services/backup/index.html` باید شامل «بکاپ‌گیری» و `out/services/network/index.html` باید شامل «شبکه‌های کامپیوتری» باشد.

---

## ۲. 🟠 بازنویسی متن‌های خراب در SERVICE_DETAILS

**فایل:** همان `src/app/services/[slug]/page.tsx` — بخش `SERVICE_DETAILS` (حدود خطوط ۳۱ تا ۱۶۰) شامل متن فارسی ۹ خدمت.

**مشکل:** متن‌ها پر از توکن‌های خارجی و به‌هم‌ریختهٔ ترجمه ماشینی هستند. نمونه‌های واقعی که باید حتماً اصلاح شوند:

- خط ~۳۴: «قابلیت ergänzt» (آلمانی)
- خط ~۳۶: «طراحی-topولوجيا» (آمیخته یونانی)
- خط ~۳۸: «وrietِ دسترسی»
- خط ~۳۹: «رفع سریع गिरه در disconnected» (دواناگاری + انگلیسی)
- خط ~۲۳۹: `aria-label="نمای nurture"`

**اقدام:**

1. کل متن فارسی ۹ خدمت را بازنویسی کن: برای هر خدمت یک `summary` روان (۱–۲ جمله)، ۴ تا ۶ مورد `details`، و ۳ پرسش‌وپاسخ `faq` حرفه‌ای و بدون غلط.
2. هیچ کلمه غیرفارسی در متن نماند مگر اصطلاحات فنی معتبر (بند «قوانین کلی»).
3. `aria-label="نمای nurture"` را به `aria-label="مسیر صفحه"` تغییر بده.
4. بقیه `aria-label` ها و متن‌های صفحه را هم چک کن که خرابی مشابه نداشته باشند.

**تأیید:** اجرای دستور زیر باید خالی باشد:
```bash
grep -rnE "ergänzt|गिरे|topolog|nurture|rietِ|مستقبل|دوست دوستانه|neva" src/
```

---

## ۳. 🟡 برند قدیمی در Hero

**فایل:** `src/components/sections/Hero.tsx` (خط ~۷۳)

«NevDev / IT SERVICES» → «TUNELIA / IT SERVICES». بعد بگرد مطمئن شو «NevDev» جای دیگری هم نیست.

---

## ۴. 🟡 اصلاحات SEO

1. **`public/sitemap.xml`** — آدرس `https://tunelia.ir/services/web` جا افتاده؛ مثل بقیه ورودی‌ها (با lastmod امروز) اضافه کن تا تعداد URL ها به ۱۴ برسد.
2. **`src/lib/metadata.ts`** (حدود خط ۸۲) — بلوک `'SearchAction'` را از JSON-LD سایت حذف کن، چون صفحه `/search` وجود ندارد. ساختار WebSite بدون it باید معتبر بماند.
3. **ایمیل اشتباه** — `info@tunelia.com` را در هر ۴ فایل به `info@tunelia.ir` تغییر بده:
   - `src/components/sections/Contact.tsx` (۲ مورد)
   - `src/lib/metadata.ts` (۲ مورد)
   - `src/app/[city]/page.tsx` (۲ مورد)
   - `src/app/services/[slug]/page.tsx` (۲ مورد)
4. **تصویر OG** — یک تصویر PNG با ابعاد ۱۲۰۰×۶۳۰ و نام `public/og-card.png` بساز که همان طراحی `og-card.svg` را دارد (پس‌زمینه تیره `#0a0c0e`، لوگو، نام TUNELIA و شعار خدمات شبکه/سرور/امنیت با اکسنت نارنجی `#d1802c`). ارجاع‌های OG/Twitter در `src/app/layout.tsx` و `src/lib/metadata.ts` را به فایل PNG تغییر بده. فایل SVG را هم می‌توانی نگه داری.
5. **JSON-LD آدرس** — در `src/lib/metadata.ts` آدرس «تهران» را با خوزستان/دزفول سازگار کن تا با `areaServed` و صفحات شهر تناقض نداشته باشد.

---

## ۵. 🟡 پاکسازی کد

1. **import های بی‌استفاده** را حذف کن:
   - `Image` از `next/image` در `src/app/[city]/page.tsx` و `src/app/services/[slug]/page.tsx`
   - `professionalServiceJsonLd`، `webSiteJsonLd` و `organizationJsonLd` بی‌استفاده در `src/app/[city]/page.tsx`
   - ثابت بی‌استفاده `CITY_TO_ID` در همان فایل
   - هر import بی‌استفاده دیگری که lint گزارش می‌دهد
2. **کلاس نامعتبر Tailwind** — در `src/components/ui/ServiceCard.tsx` (خط ~۲۵): `duration-250` → `duration-300`.
3. **کلاس با اوپاسیتی نامعتبر** — در `src/components/layout/Navbar.tsx` (خط ~۷): `bg-ink/86` → `bg-ink/[0.86]` (عدد ۸۶ در اسکیل پیش‌فرض نیست).
4. **کلاس‌های CSS مرده** — نام کلاس‌هایی که در JSX آمده ولی در `globals.css` تعریف نشده‌اند حذف کن (`.hub` و `.wedge` و `seg1..9` در `ServicesCircle.tsx`، `.contact-logo` و `.lead` در `Contact.tsx`) — یا اگر کاربرد واقعی دارند، در `globals.css` تعریفشان را اضافه کن.
5. **README.md** — جایگزین کن (`# MY_Site` فعلی placeholder است) با: معرفی کوتاه پروژه تونلیا، استک (Next.js 14 App Router، TS، Tailwind، GSAP)، ساختار پوشه‌ها، اسکریپت‌ها (`dev`/`build`/`lint`)، نکته خروجی استاتیک `out/` و دیپلوی روی Vercel.
6. **آیکون‌ها** — در `src/app/layout.tsx` برای `apple-touch-icon` از `brand-180.png` (۱۸۰×۱۸۰) استفاده کن؛ فعلاً PNG بزرگ ۵۵۶×۵۹۰ برای همه آیکون‌ها به‌کار رفته.

---

## ۶. ✅ تأیید نهایی (الزامی — قبل از گزارش پایان کار)

همه این‌ها باید پاس شوند:

```bash
npm install
npm run lint          # صفر خطا، صفر هشدار
npm run build         # بدون خطا؛ پوشه out/ ساخته شود
grep -l "بکاپ‌گیری" out/services/backup/index.html      # باید پیدا شود
grep -l "شبکه‌های کامپیوتری" out/services/network/index.html  # باید پیدا شود
grep -rnE "ergänzt|गिरे|nurture|NevDev|duration-250|tunelia\.com" src/ public/   # باید خالی باشد
grep -c "<url>" out/sitemap.xml 2>/dev/null || grep -c "<url>" public/sitemap.xml   # باید ۱۴ باشد
```

اگر هر تأیید شکست خورد، ریشه مشکل را پیدا و اصلاح کن و دوباره اجرا کن. هیچ موردی را «احتمالاً درست است» گزارش نکن — فقط نتیجه واقعی اجرای دستورات را گزارش بده.

## ۷. ⚪ اختیاری (اگر زمان باقی بود — در اولویت بعد از موارد الزامی)

- افزودن `src/app/not-found.tsx` فارسی و هم‌سبک با تم سایت
- منوی همبرگر برای موبایل در Navbar (لینک‌ها زیر ۷۲۰px مخفی‌اند و جایگزینی ندارند)
- صفحه ایندکس `/services` برای لینک «خدمات» breadcrumb

ترتیب اجرا: ۱ ← ۲ ← ۳ ← ۴ ← ۵ ← ۶. بعد از هر بخش، build بگیر تا رگرسیون زودتر پیدا شود.
