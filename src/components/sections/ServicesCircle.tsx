'use client';

import { useRef, useState } from 'react';
import { services } from '@/data/services';
import IconSvg from '../ui/IconSvg';

const WEDGE_PATHS = [
  'M200,130 L200,10 A190,190 0 0,1 334.35,65.65 L249.5,150.5 A70,70 0 0,0 200,130 Z',
  'M249.5,150.5 L334.35,65.65 A190,190 0 0,1 390,200 L270,200 A70,70 0 0,0 249.5,150.5 Z',
  'M270,200 L390,200 A190,190 0 0,1 334.35,334.35 L249.5,249.5 A70,70 0 0,0 270,200 Z',
  'M249.5,249.5 L334.35,334.35 A190,190 0 0,1 200,390 L200,270 A70,70 0 0,0 249.5,249.5 Z',
  'M200,270 L200,390 A190,190 0 0,1 65.65,334.35 L150.5,249.5 A70,70 0 0,0 200,270 Z',
  'M150.5,249.5 L65.65,334.35 A190,190 0 0,1 10,200 L130,200 A70,70 0 0,0 150.5,249.5 Z',
  'M130,200 L10,200 A190,190 0 0,1 65.65,65.65 L150.5,150.5 A70,70 0 0,0 130,200 Z',
  'M150.5,150.5 L65.65,65.65 A190,190 0 0,1 200,10 L200,130 A70,70 0 0,0 150.5,150.5 Z',
];

const LABEL_COORDS = [
  { x: 249.75, y: 90 },
  { x: 320.1, y: 158 },
  { x: 320.1, y: 257 },
  { x: 249.75, y: 328 },
  { x: 150.25, y: 328 },
  { x: 79.9, y: 257 },
  { x: 79.9, y: 158 },
  { x: 150.25, y: 90 },
];

const ICON_COORDS = [
  { x: 249.75, y: 69.9 },
  { x: 320.1, y: 140.25 },
  { x: 320.1, y: 239.75 },
  { x: 249.75, y: 310.1 },
  { x: 150.25, y: 310.1 },
  { x: 79.9, y: 239.75 },
  { x: 79.9, y: 140.25 },
  { x: 150.25, y: 69.9 },
];

export default function ServicesCircle() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const handleEnter = (id: number) => setActive(id);
  const handleLeave = () => setActive(null);
  const handleTap = (id: number) => setActive((cur) => (cur === id ? null : id));

  return (
    <>
      <div ref={wrapperRef} className="flex justify-center mb-5">
        <svg
          className="w-[min(520px,92vw)] h-auto overflow-visible"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="دایره ۸ بخشی خدمات تونلیها"
        >
          <g>
            {WEDGE_PATHS.map((d, i) => (
              <path
                key={i}
                d={d}
                className={`wedge seg${i + 1} cursor-pointer transition-all duration-300 ease-out hover:stroke-[var(--accent)]`}
                fill="var(--panel)"
                stroke="var(--line)"
                strokeWidth={1.5}
                onMouseEnter={() => handleEnter(i + 1)}
                onMouseLeave={handleLeave}
                onFocus={() => handleEnter(i + 1)}
                onBlur={handleLeave}
                onClick={() => handleTap(i + 1)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTap(i + 1);
                  }
                }}
                tabIndex={0}
              />
            ))}
          </g>

          <circle className="hub" cx="200" cy="200" r="68" fill="var(--ink)" stroke="var(--line)" strokeWidth={1} />

          <foreignObject x="134" y="134" width="132" height="132">
            <div
              className="w-full h-full flex items-center justify-center relative text-center"
              dir="rtl"
            >
              {active === null ? (
                <div className="absolute inset-1.5 flex flex-col items-center justify-center gap-0.5">
                  <span className="font-mono text-accent text-[13px]">خدمات</span>
                  <span className="font-mono text-accent text-[13px]">تونلیها</span>
                </div>
              ) : (
                <div className="absolute inset-1.5 flex items-center justify-center text-[11px] leading-[1.55] text-steel max-[480px]:text-[9.5px]">
                  {services[active - 1].description}
                </div>
              )}
            </div>
          </foreignObject>

          {services.map((s, i) => {
            const c = ICON_COORDS[i];
            return (
              <g
                key={`icon-${s.id}`}
                transform={`translate(${c.x}, ${c.y}) scale(0.85) translate(-12,-12)`}
                className="text-accent pointer-events-none"
              >
                <IconSvg name={s.iconKey} width={24} height={24} />
              </g>
            );
          })}

          {services.map((s, i) => {
            const c = LABEL_COORDS[i];
            return (
              <text
                key={`label-${s.id}`}
                x={c.x}
                y={c.y}
                className="fill-[var(--steel-muted)] text-[11.5px] font-[Vazirmatn,Tahoma,sans-serif] pointer-events-none"
                textAnchor="middle"
              >
                <tspan x={c.x}>{s.title.split(' ').slice(0, Math.ceil(s.title.length / 6)).join(' ')}</tspan>
                <tspan x={c.x} dy="13">
                  {s.title.split(' ').slice(Math.ceil(s.title.length / 6)).join(' ') || '\u00A0'}
                </tspan>
              </text>
            );
          })}
        </svg>
      </div>
      <p className="text-center text-steel-dim text-[0.82rem] mb-10">
        نشانگر ماوس را روی هر بخش از دایره نگه دارید تا توضیحات آن نمایش داده شود
      </p>
    </>
  );
}
