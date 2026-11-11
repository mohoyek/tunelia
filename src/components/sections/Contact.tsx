import ContactButton from '../ui/ContactButton';
import Reveal from '../ui/Reveal';
import Image from 'next/image';

const TelegramIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M21 3L2 11l6 2m13-10l-4 17-7-5m11-12L8 13m0 0v6l3-3" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M3 6l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M4 5c0 8 7 15 15 15l2-4-5-2-2 2c-2-1-4-3-5-5l2-2-2-5z" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3a9 9 0 00-7.75 13.5L3 21l4.6-1.2A9 9 0 1012 3z" />
    <path
      d="M8.6 8.4c-.3 1 .2 2.4 1.3 3.7 1.2 1.4 2.6 2 3.7 1.8.5-.1 1.1-.5 1.3-1l.2-.6-1.8-1-.4.6c-.1.2-.4.2-.6.1-.6-.3-1.4-1-1.8-1.7-.1-.2-.1-.4 0-.6l.4-.5-.8-1.9-.5.1z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="mt-24" aria-labelledby="contact-title">
      <Reveal>
        <div className="glow-center relative overflow-hidden rounded-[22px] border border-line bg-panel py-14 px-8 text-center max-[640px]:p-7 max-[640px]:py-10">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[220px]"
            style={{
              background:
                'radial-gradient(ellipse 50% 100% at 50% 0%, rgba(209,128,44,0.14), transparent 70%)',
            }}
          />
          <div className="relative">
            <Image
              src="/tunelia-logo.png"
              alt="تونلیا"
              width={64}
              height={64}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl border border-line"
              priority
            />
            <h2
              id="contact-title"
              className="text-[clamp(1.7rem,3.4vw,2.4rem)] text-steel font-extrabold"
            >
              با ما در تماس باشید
            </h2>
            <p className="mt-4 text-steel-muted text-[1.02rem]">
              برای مشاوره و استعلام قیمت همین الان پیام بده.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <ContactButton href="https://t.me/mohoyek" variant="primary" external icon={TelegramIcon}>
                تلگرام: mohoyek@
              </ContactButton>
              <ContactButton href="mailto:info@tunelia.com" icon={MailIcon}>
                info@tunelia.com
              </ContactButton>
              <ContactButton href="tel:+989013365949" icon={PhoneIcon}>
                <span dir="ltr">0901&nbsp;336&nbsp;5949</span>
              </ContactButton>
              <ContactButton href="https://wa.me/989013365949" variant="primary" external icon={WhatsAppIcon}>
                واتس‌آپ: 09013365949
              </ContactButton>
            </div>
            <p className="mt-10 text-[1.15rem] font-bold text-accent-bright">
              یک مجموعه حرفه‌ای، یک پشتیبان حرفه‌ای می‌خواهد!
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
