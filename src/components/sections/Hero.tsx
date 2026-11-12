'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const MONITOR_LINES = [
  { text: 'ping core-switch — 1.2ms', tone: 'ok' },
  { text: 'backup.nas — 02:00 done', tone: 'ok' },
  { text: 'firewall — 0 threats', tone: 'ok' },
  { text: 'uptime — 99.98%', tone: 'pulse' },
] as const;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      const targets = itemsRef.current?.querySelectorAll('[data-hero-item]');
      if (!targets?.length) return;

      gsap.from(targets, {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="glow-top relative border-b border-line overflow-hidden"
    >
      <div
        ref={itemsRef}
        className="max-w-container mx-auto grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12 py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%] max-[1023px]:grid-cols-1"
      >
        {/* ── متن ── */}
        <div className="text-center lg:text-right">
          <span data-hero-item className="eyebrow-code">
            <span className="dot" />
            TUNELIA / IT SERVICES
          </span>
          <h1
            data-hero-item
            className="mt-7 font-extrabold tracking-[-0.01em] text-steel text-[clamp(2.3rem,5.2vw,3.9rem)] leading-[1.25]"
          >
            زیرساخت IT مجموعه‌ات،
            <br />
            <span className="text-accent-bright">پایدار و امن</span> بسپار به متخصص
          </h1>
          <p
            data-hero-item
            className="mx-auto lg:mx-0 mt-6 max-w-[560px] text-steel-muted text-[1.12rem] leading-relaxed"
          >
            از راه‌اندازی شبکه و سرور تا بکاپ‌گیری، امنیت اطلاعات و طراحی سایت —
            همهٔ دغدغه‌های فنی کسب‌وکارت را یک تیم پاسخگو مدیریت می‌کند.
          </p>
          <div data-hero-item className="mt-9 flex flex-wrap justify-center lg:justify-start gap-3.5">
            <a href="#contact" className="btn btn-primary">
              مشاورهٔ رایگان
            </a>
            <a href="#services" className="btn btn-ghost">
              مشاهدهٔ خدمات
            </a>
          </div>
          <dl
            data-hero-item
            className="mt-11 flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4"
          >
            {[
              ['۹', 'خدمت تخصصی'],
              ['۴', 'شهر تحت پوشش'],
              ['۲۴/۷', 'پشتیبانی و پاسخ‌گویی'],
            ].map(([value, label]) => (
              <div key={label} className="text-center lg:text-right">
                <dt className="sr-only">{label}</dt>
                <dd className="text-accent-bright text-[1.6rem] font-extrabold leading-none">
                  {value}
                </dd>
                <dd className="mt-1.5 text-steel-dim text-[0.85rem]">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── کارت مانیتورینگ تزئینی ── */}
        <div data-hero-item className="hidden sm:block relative max-[1023px]:max-w-[420px] max-[1023px]:mx-auto w-full">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[26px] opacity-70"
            style={{
              background:
                'radial-gradient(ellipse at 60% 40%, rgba(209,128,44,0.14), transparent 65%)',
            }}
          />
          <div className="relative rounded-2xl border border-line bg-panel/80 backdrop-blur-sm shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3d4650]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3d4650]" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="mono mr-auto text-[0.72rem] text-steel-dim [direction:ltr]">
                tunelia — monitor
              </span>
            </div>
            <div className="px-5 py-4 space-y-3.5 [direction:ltr]">
              {MONITOR_LINES.map((line) => (
                <div key={line.text} className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      line.tone === 'pulse' ? 'animate-net-pulse' : 'animate-pulse'
                    } bg-accent-bright`}
                  />
                  <span className="mono text-[0.82rem] text-steel-muted">{line.text}</span>
                </div>
              ))}
              <div className="border-t border-line pt-3.5 flex items-center gap-3">
                <span className="mono text-[0.82rem] text-accent-bright">›_</span>
                <span className="mono text-[0.82rem] text-steel-dim animate-pulse">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
