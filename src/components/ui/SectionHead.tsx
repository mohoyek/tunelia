import Reveal from './Reveal';

interface SectionHeadProps {
  title: string;
  titleId?: string;
  idx: string;
  subtitle?: string;
}

export default function SectionHead({ title, titleId, idx, subtitle }: SectionHeadProps) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="idx mono mb-3 inline-flex items-center gap-2 text-accent-bright text-[0.78rem]">
          <span className="inline-block w-8 h-px bg-accent" aria-hidden="true" />
          {idx}
        </span>
        <h2
          id={titleId}
          className="text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold text-steel leading-snug"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-steel-muted text-[1.02rem] max-w-[640px]">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
