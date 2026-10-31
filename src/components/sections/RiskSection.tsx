import SectionHead from '../ui/SectionHead';

const BADGES = ['شبکه پایدار', 'سرور امن', 'حسابداری منظم', 'اطلاعات محفوظ'];

export default function RiskSection() {
  return (
    <section className="mt-20" id="safety" aria-labelledby="safety-title">
      <SectionHead title="اطلاعاتت رو به شانس نسپار!" titleId="safety-title" idx="RISK / 00" />
      <div className="bg-panel border border-line p-12 text-center max-[640px]:p-7">
        <p className="text-steel-muted text-[1.12rem] max-w-[760px] mx-auto">
          یک خرابی ساده یا حمله امنیتی می‌تونه کلی <strong>هزینه و دردسر</strong> ایجاد کنه.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {BADGES.map((b) => (
            <span
              key={b}
              className="inline-block text-accent border border-accent-line bg-accent-soft px-5 py-2 text-[0.95rem] font-semibold"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
