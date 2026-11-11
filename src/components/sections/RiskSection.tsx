import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';

const BADGES = ['شبکه پایدار', 'سرور امن', 'حسابداری منظم', 'اطلاعات محفوظ'];

export default function RiskSection() {
  return (
    <section className="mt-24" id="safety" aria-labelledby="safety-title">
      <SectionHead
        title="اطلاعاتت رو به شانس نسپار!"
        titleId="safety-title"
        idx="RISK / 00"
        subtitle="یک خرابی ساده یا حمله امنیتی می‌تواند ساعت‌ها توقف کار و هزینه‌های سنگین برای کسب‌وکار ایجاد کند."
      />
      <Reveal>
        <div className="glow-center relative rounded-2xl border border-line bg-panel px-8 py-12 text-center max-[640px]:px-6 max-[640px]:py-9">
          <div className="relative">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft border border-accent-line text-accent-bright">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <p className="text-steel text-[1.18rem] font-semibold max-w-[680px] mx-auto leading-relaxed">
              با یک قرارداد ساده، خیالت از{' '}
              <span className="text-accent-bright">پایداری، امنیت و بکاپ</span> راحت می‌شود.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-5 py-2 text-[0.92rem] font-semibold text-accent-bright"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-bright" aria-hidden="true" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
