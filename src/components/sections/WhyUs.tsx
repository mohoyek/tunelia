import SectionHead from '../ui/SectionHead';
import IconSvg from '../ui/IconSvg';
import Reveal from '../ui/Reveal';
import { whyUs } from '@/data/whyUs';

export default function WhyUs() {
  return (
    <section className="mt-24" aria-labelledby="why-title">
      <SectionHead
        title="چرا تونلیا؟"
        titleId="why-title"
        idx="WHY / 02"
        subtitle="چون به جای وعده، خروجی قابل اندازه‌گیری تحویل می‌دهیم."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {whyUs.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <div className="group h-full rounded-2xl border border-line bg-panel p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-line hover:shadow-[0_14px_44px_-18px_rgba(209,128,44,0.35)]">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft border border-accent-line text-accent-bright transition-colors duration-300 group-hover:bg-accent group-hover:text-[#191008]">
                <IconSvg name={item.iconKey} width={22} height={22} />
              </div>
              <p className="font-bold text-steel">{item.title}</p>
              <p className="text-[0.86rem] text-steel-dim mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
