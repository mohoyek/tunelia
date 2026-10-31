import SectionHead from '../ui/SectionHead';
import IconSvg from '../ui/IconSvg';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section className="mt-20" aria-labelledby="projects-title">
      <SectionHead title="نمونه پروژه‌ها" titleId="projects-title" idx="PROJECTS / 04" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-line border border-line">
        {projects.map((p) => (
          <div key={p.id} className="bg-panel p-7">
            <h3 className="text-steel text-[1.1rem] font-semibold mb-3 flex items-center gap-2.5">
              <span className="w-[22px] h-[22px] text-accent flex-shrink-0">
                <IconSvg name={p.iconKey} />
              </span>
              {p.title}
            </h3>
            <p className="text-steel-muted text-[0.92rem] leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
