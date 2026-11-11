'use client';

import { useRef, useState } from 'react';
import { services } from '@/data/services';
import IconSvg from '../ui/IconSvg';

const WEDGE_PATHS = [
  'M200,130 L200,10 A190,190 0 0,1 322.13,54.45 L245,146.38 A70,70 0 0,0 200,130 Z',
  'M245,146.38 L322.13,54.45 A190,190 0 0,1 387.11,167.01 L268.94,187.84 A70,70 0 0,0 245,146.38 Z',
  'M268.94,187.84 L387.11,167.01 A190,190 0 0,1 364.54,295 L260.62,235 A70,70 0 0,0 268.94,187.84 Z',
  'M260.62,235 L364.54,295 A190,190 0 0,1 264.98,378.54 L223.94,265.78 A70,70 0 0,0 260.62,235 Z',
  'M223.94,265.78 L264.98,378.54 A190,190 0 0,1 135.02,378.54 L176.06,265.78 A70,70 0 0,0 223.94,265.78 Z',
  'M176.06,265.78 L135.02,378.54 A190,190 0 0,1 35.46,295 L139.38,235 A70,70 0 0,0 176.06,265.78 Z',
  'M139.38,235 L35.46,295 A190,190 0 0,1 12.89,167.01 L131.06,187.84 A70,70 0 0,0 139.38,235 Z',
  'M131.06,187.84 L12.89,167.01 A190,190 0 0,1 77.87,54.45 L155,146.38 A70,70 0 0,0 131.06,187.84 Z',
  'M155,146.38 L77.87,54.45 A190,190 0 0,1 200,10 L200,130 A70,70 0 0,0 155,146.38 Z',
];

const LABEL_COORDS = [
  { x: 242.75, y: 82.5 },
  { x: 308.25, y: 137.5 },
  { x: 323.1, y: 221.7 },
  { x: 280.35, y: 295.75 },
  { x: 200, y: 325 },
  { x: 119.65, y: 295.75 },
  { x: 76.9, y: 221.7 },
  { x: 91.75, y: 137.5 },
  { x: 157.25, y: 82.5 },
];

const ICON_COORDS = [
  { x: 256.4, y: 45 },
  { x: 342.9, y: 117.5 },
  { x: 362.5, y: 228.7 },
  { x: 306.1, y: 326.4 },
  { x: 200, y: 365 },
  { x: 93.9, y: 326.4 },
  { x: 37.5, y: 228.7 },
  { x: 57.1, y: 117.5 },
  { x: 143.6, y: 45 },
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
          aria-label="دایره ۹ بخشی خدمات تونلیا"
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
                  <span className="font-mono text-accent text-[13px]">تونلیا</span>
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