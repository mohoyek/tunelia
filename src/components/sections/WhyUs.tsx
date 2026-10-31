import SectionHead from '../ui/SectionHead';
import IconSvg from '../ui/IconSvg';
import { whyUs } from '@/data/whyUs';

export default function WhyUs() {
  return (
    <section className="mt-20 border border-line p-12 max-[640px]:p-7" aria-labelledby="why-title">
      <SectionHead title="چرا تونلیها؟" titleId="why-title" idx="WHY / 02" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-8 mt-8">
        {whyUs.map((item) => (
          <div key={item.id} className="text-center px-2">
            <div className="w-[30px] h-[30px] text-accent mx-auto mb-3.5">
              <IconSvg name={item.iconKey} />
            </div>
            <p className="font-semibold text-steel">{item.title}</p>
            <p className="text-[0.88rem] text-steel-dim mt-1.5">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
