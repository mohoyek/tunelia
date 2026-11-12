# TUNELIA — وب‌سایت خدمات شبکه، سرور و امنیت اطلاعات

## معرفی
تونلیا (tunelia.ir) ارائه‌دهنده خدمات حرفه‌ای IT شامل: بکاپ‌گیری داده، حسابداری شبکه (AAA)، مدیریت سرور، امنیت سایبری، شبکه‌های کامپیوتری، پشتیبانی و نگهداری، اشتراک‌گذاری منابع، قراردادهای نگهداری و طراحی وب‌سایت شرکتی است.

## استک تکنولوژیک
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Custom Design Tokens)
- **Animation**: GSAP + ScrollTrigger (Client Components)
- **Font**: Vazirmatn (فارسی) + JetBrains Mono (مونواسپیس) via Google Fonts CDN
- **Deployment**: Static Export (`output: 'export'`) → Vercel / Static Hosting
- **SEO**: JSON-LD (Organization, ProfessionalService, WebSite, LocalBusiness, BreadcrumbList), Sitemap.xml, Robots.txt, Open Graph, Twitter Cards

## ساختار پوشه‌ها
```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, global metadata
│   ├── page.tsx             # Homepage (Hero, ServicesCircle, WhyUs, Contact, RiskSection)
│   ├── [city]/page.tsx      # City landing pages (Dezful, Shush, Andimeshk, Khuzestan)
│   └── services/[slug]/page.tsx  # 9 Service detail pages
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, ServicesCircle, WhyUs, Contact, RiskSection
│   └── ui/                  # ServiceCard, IconSvg, Button, etc.
├── data/
│   ├── services.ts          # 9 services (id, num, title, description, tags, iconKey)
│   ├── whyUs.ts             # Why choose us items
│   └── cities.ts            # 4 city data for local SEO
├── lib/
│   ├── metadata.ts          # All JSON-LD generators, metadata helpers
│   └── serviceSlugs.ts      # Unified slug/id mapping for services
├── types/
│   └── content.ts           # TypeScript interfaces
└── styles/
    └── globals.css          # Tailwind + custom CSS variables
public/
├── sitemap.xml              # 14 URLs (home + 9 services + 4 cities)
├── robots.txt
├── tunelia-logo.png         # Logo + favicon (needs WebP optimization)
├── brand-180.png            # Apple touch icon 180x180
└── og-card.png              # OG/Twitter card 1200x630
```

## اسکریپت‌ها
```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production static export → out/
npm run lint     # ESLint + TypeScript check
npm run start    # Serve out/ (requires serve package)
```

## نکات مهم
- **Static Export**: تمام صفحات در build به HTML استاتیک تبدیل می‌شوند (`out/`). API Routes پشتیبانی نمی‌شوند.
- **Client Components**: انیمیشن‌های GSAP در `'use client'` components جداگانه (Hero، ServicesCircle).
- **Fonts**: از CDN در `<head>` لود می‌شوند (محدودیت بیلد در CI).
- **Images**: `next/image` با `unoptimized: true` برای استاتیک اکسپورت.

## راهنمای افزودن خدمت جدید
1. خدمت را به `src/data/services.ts` اضافه کنید (id، num، title، description، tags، iconKey، slug).
2. آرایه `SLUG_TO_ID` و `ID_TO_SLUG` در `src/lib/serviceSlugs.ts` به‌روزرسانی می‌شوند (یا از داده services.ts تولید می‌شوند).
3. جزئیات خدمت (summary، details، faq) را در `src/app/services/[slug]/page.tsx` در `SERVICE_DETAILS` اضافه کنید.
4. آیکون جدید را در `src/components/ui/IconSvg.tsx` اضافه کنید.
5. `npm run build` برای تست.

## راهنمای افزودن شهر جدید
1. شهر را به `src/data/cities.ts` اضافه کنید (slug، name، description).
2. `npm run build` به‌صورت خودکار صفحه استاتیک جدید تولید می‌کند.

## دیپلوی روی Vercel
1. Push به GitHub
2. Import Project در Vercel
3. Build Command: `npm run build`
4. Output Directory: `out`
5. Framework Preset: Next.js (Static Export)
6. Environment Variables: هیچکدام الزامی نیست

## سئو محلی (Local SEO)
- ۴ صفحه شهر: `/dezful`، `/shush`، `/andimeshk`، `/khuzestan`
- `LocalBusiness.areaServed` شامل ۴ شهر
- Google Business Profile پیشنهاد می‌شود