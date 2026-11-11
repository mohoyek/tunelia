import Link from 'next/link';
import type { Service } from '@/types/content';
import IconSvg from './IconSvg';
import { getSlugById } from '@/lib/serviceSlugs';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const slug = getSlugById(service.id);
  return (
    <Link href={`/services/${slug}`} className="block">
      <div className="bg-panel p-8 transition-colors duration-300 hover:bg-panel-2 border-b border-line last:border-0">
        <span className="block mb-2.5 text-accent-line font-mono text-[0.78rem] [direction:ltr]">
          {service.num}
        </span>
        <div className="w-[34px] h-[34px] text-accent mb-4">
          <IconSvg name={service.iconKey} />
        </div>
        <h3 className="text-steel mb-2 text-[1.25rem] font-semibold">{service.title}</h3>
        <p className="text-steel-muted text-[0.96rem] leading-relaxed">{service.description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono bg-ink text-steel-muted border border-line px-3 py-1 text-[0.75rem] [direction:ltr]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
