import SectionHead from '../ui/SectionHead';
import ServiceCard from '../ui/ServiceCard';
import { services } from '@/data/services';
import ServicesCircle from './ServicesCircle';

export default function ServicesSection() {
  return (
    <section className="mb-20" id="services" aria-labelledby="services-title">
      <SectionHead
        title="کسب‌وکارت رو حرفه‌ای‌تر مدیریت کن!"
        titleId="services-title"
        idx="SERVICES / 01–08"
      />
      <p className="text-[1.15rem] text-steel-muted max-w-[820px] mb-10">
        از شبکه و سرور گرفته تا حسابداری و امنیت اطلاعات، همه‌چیز رو یکجا بسپار به{' '}
        <strong>متخصص</strong>!
      </p>

      <ServicesCircle />

      <div className="mt-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px bg-line border border-line">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
