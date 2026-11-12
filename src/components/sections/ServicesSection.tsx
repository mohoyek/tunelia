import SectionHead from '../ui/SectionHead';
import ServicesBento from './ServicesBento';

export default function ServicesSection() {
  return (
    <section className="mb-24" id="services" aria-labelledby="services-title">
      <SectionHead
        title="هر چیزی که IT مجموعه‌ات لازم دارد، یک‌جا"
        titleId="services-title"
        idx="SERVICES / 01–09"
        subtitle="از شبکه و سرور تا بکاپ‌گیری و طراحی سایت — روی هر کاشی کلیک کن تا جزئیات و تعرفه هر خدمت را ببینی."
      />
      <ServicesBento />
    </section>
  );
}
