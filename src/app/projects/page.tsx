import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionHead from '@/components/ui/SectionHead';
import IconSvg from '@/components/ui/IconSvg';
import Reveal from '@/components/ui/Reveal';
import { breadcrumbJsonLd } from '@/lib/metadata';
import { networkProjects, softwareProjects, type Project } from '@/data/projects';

export const metadata: Metadata = {
  title: 'نمونه‌کارهای شبکه، نرم‌افزار و وب | تونلیا',
  description:
    'نمونه‌کارهای واقعی تونلیا: زیرساخت شبکهٔ پسیو و اکتیو دو شعبه با تونل اختصاصی ایرانسل، تجمیع باند با میکروتیک، وب‌سایت شرکتی، ابزار تولید کلید سامانهٔ مودیان و ریموت دسکتاپ اختصاصی راینو دسک.',
  alternates: {
    canonical: 'https://tunelia.ir/projects',
  },
  openGraph: {
    title: 'نمونه‌کارهای شبکه، نرم‌افزار و وب | تونلیا',
    description:
      'از زیرساخت شبکه تا محصولات نرم‌افزاری — پروژه‌های واقعی تونلیا با خلاصهٔ کار انجام‌شده و لینک نسخهٔ زنده.',
    url: 'https://tunelia.ir/projects',
    type: 'website',
    images: [{ url: '/og-card.svg', type: 'image/svg+xml', width: 1200, height: 630, alt: 'نمونه‌کارهای تونلیا' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نمونه‌کارهای شبکه، نرم‌افزار و وب | تونلیا',
    description:
      'از زیرساخت شبکه تا محصولات نرم‌افزاری — پروژه‌های واقعی تونلیا با خلاصهٔ کار انجام‌شده و لینک نسخهٔ زنده.',
    images: ['/og-card.svg'],
  },
};

/* ---------- استایل مشترک کاشی‌ها (هم‌خانوادهٔ بنتوی صفحهٔ اصلی) ---------- */
const TILE_BASE =
  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line hover:shadow-[0_14px_48px_-16px_rgba(209,128,44,0.4)] max-[400px]:p-5';

function KindChip({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-ink border border-line px-3 py-1 text-[0.7rem] text-steel-dim">
      {children}
    </span>
  );
}

function DomainChip({ code }: { code: string }) {
  return (
    <span className="mono inline-flex items-center rounded-lg bg-ink border border-accent-line px-3 py-1.5 text-[0.76rem] font-semibold text-accent-bright [direction:ltr]">
      {code}
    </span>
  );
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-xl bg-ink border border-line px-4 py-2.5 text-[0.82rem] font-semibold text-steel-muted transition-all duration-200 hover:border-accent-line hover:text-accent-bright [direction:ltr]"
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        width="13"
        height="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className={TILE_BASE}>
        <span className="ghost-num" aria-hidden="true">
          {project.num}
        </span>

        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft border border-accent-line text-accent-bright transition-colors duration-300 group-hover:bg-accent group-hover:text-[#191008]">
            <IconSvg name={project.iconKey} width={23} height={23} />
          </div>
          <KindChip>{project.kind === 'network' ? 'زیرساخت شبکه' : 'نرم‌افزار و وب'}</KindChip>
        </div>

        <h3 className="text-[1.2rem] font-extrabold text-steel leading-snug">{project.title}</h3>
        <p className="mt-1.5 text-accent-bright text-[0.88rem] font-semibold">{project.role}</p>

        <p className="mt-3.5 text-steel-muted text-[0.92rem] leading-relaxed">{project.description}</p>

        <ul className="mt-4 list-none space-y-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[0.88rem] text-steel-muted">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-ink px-3 py-1 text-[0.72rem] text-steel-muted border border-line"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          {project.code ? <DomainChip code={project.code} /> : null}
          {project.links?.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'صفحه اصلی', url: '/' },
              { name: 'نمونه‌کارها', url: '/projects' },
            ])
          ),
        }}
      />
      <Navbar />

      {/* ── هدر صفحه ── */}
      <header className="glow-top relative max-w-container mx-auto px-[5%] pt-16 pb-6 max-[640px]:pt-12 max-[640px]:px-[6%]">
        <Reveal>
          <span className="eyebrow-code">
            <span className="dot" aria-hidden="true" />
            TUNELIA / PORTFOLIO
          </span>
          <h1 className="mt-6 text-[clamp(2rem,4.6vw,3rem)] font-extrabold leading-[1.25] text-steel">
            نمونه‌کارهای تونلیا
          </h1>
          <p className="mt-4 max-w-[700px] text-steel-muted text-[1.05rem] leading-relaxed">
            از زیرساخت شبکهٔ پسیو و اکتیو تا محصولات نرم‌افزاری و وب — فهرست پروژه‌های واقعی
            تحویل‌داده‌شده، همراه با خلاصهٔ کار انجام‌شده و لینک نسخهٔ زنده و سورس.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {[
              { n: '۰۵', t: 'پروژهٔ تحویل‌شده' },
              { n: '۰۲', t: 'زیرساخت شبکه' },
              { n: '۰۳', t: 'محصول نرم‌افزاری' },
            ].map((s) => (
              <div key={s.t} className="flex items-baseline gap-2.5">
                <span className="mono text-[1.5rem] font-bold text-accent-bright">{s.n}</span>
                <span className="text-[0.88rem] text-steel-muted">{s.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </header>

      <main className="max-w-container mx-auto px-[5%] pb-20 max-[640px]:px-[6%] max-[640px]:pb-14">
        {/* ── پروژه‌های شبکه ── */}
        <section className="pt-14" aria-labelledby="projects-network">
          <SectionHead
            idx="۰۱"
            titleId="projects-network"
            title="پروژه‌های شبکه"
            subtitle="زیرساخت فیزیکی و منطقی شبکه — از کابل‌کشی و تجهیزات اکتیو تا اتصال امن بین شعب و بهینه‌سازی پهنای باند."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            {networkProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 90} />
            ))}
          </div>
        </section>

        {/* ── پروژه‌های نرم‌افزاری و وب ── */}
        <section className="pt-20" aria-labelledby="projects-software">
          <SectionHead
            idx="۰۲"
            titleId="projects-software"
            title="پروژه‌های نرم‌افزاری و وب"
            subtitle="محصولاتی که خودمان طراحی و توسعه داده‌ایم؛ سورس همه روی گیت‌هاب عمومی است و نسخهٔ زنده‌شان در دسترس."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {softwareProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 90} />
            ))}
          </div>
        </section>

        {/* ── فراخوان تماس ── */}
        <Reveal className="mt-20">
          <div className="glow-center rounded-2xl border border-line bg-panel px-8 py-12 text-center max-[640px]:px-6 max-[640px]:py-9">
            <h2 className="text-[1.6rem] font-extrabold text-steel max-[640px]:text-[1.3rem]">
              پروژه‌ای شبیه این‌ها در ذهن دارید؟
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-steel-muted text-[1rem]">
              از راه‌اندازی زیرساخت شبکه تا ساخت محصول وب و نرم‌افزار — بگویید چه نیاز دارید،
              راهکار مشخص با هزینهٔ شفاف پیشنهاد می‌دهیم.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/mohoyek"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                شروع گفت‌وگو در تلگرام
              </a>
              <a href="tel:+989013365949" className="btn btn-ghost" dir="ltr">
                0901 336 5949
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
