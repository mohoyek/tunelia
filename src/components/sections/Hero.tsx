'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.3'
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        );

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 80,
        repeat: -1,
        ease: 'none',
      });
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="relative py-[5.5rem] px-[6%] pb-20 text-center border-b border-line overflow-hidden max-[640px]:py-[4.5rem] max-[640px]:px-[6%] max-[640px]:pb-14"
    >
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full"
        style={{
          background:
            'repeating-radial-gradient(circle at center, transparent 0 54px, rgba(209,128,44,0.05) 54px 55px)',
          WebkitMaskImage: 'radial-gradient(circle at center, #000 45%, transparent 72%)',
          maskImage: 'radial-gradient(circle at center, #000 45%, transparent 72%)',
        }}
      />
      <span ref={eyebrowRef} className="eyebrow-code">
        <span className="dot" />
        NevDev / IT SERVICES
      </span>
      <h1
        ref={titleRef}
        className="mt-7 font-extrabold tracking-[-0.01em] text-steel text-[clamp(2.6rem,6vw,4.4rem)]"
      >
        تونلیها
        <span className="visually-hidden"> — خدمات شبکه، سرور و فناوری اطلاعات</span>
      </h1>
      <p
        ref={subtitleRef}
        className="mx-auto mt-5 max-w-[640px] text-steel-muted text-[1.15rem] font-light"
      >
        ارائه‌دهنده خدمات حرفه‌ای <strong>شبکه، زیرساخت و فناوری اطلاعات</strong>
      </p>
    </header>
  );
}
