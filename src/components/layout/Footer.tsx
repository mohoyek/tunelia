import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-8">
      <div className="max-w-container mx-auto px-[5%] py-12 max-[640px]:px-[6%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/tunelia-logo.png"
              alt="تونلیا"
              width={34}
              height={34}
              className="rounded-lg"
            />
            <div>
              <p className="font-bold text-steel text-[1.02rem]">تونلیا</p>
              <p className="text-steel-dim text-[0.82rem]">شبکه، سرور، امنیت و وب — زیر یک سقف</p>
            </div>
          </div>
          <nav aria-label="نقشهٔ سایت" className="flex items-center gap-7">
            <a href="/#services" className="text-steel-muted text-[0.9rem] transition-colors hover:text-accent-bright">
              خدمات
            </a>
            <a href="/projects" className="text-steel-muted text-[0.9rem] transition-colors hover:text-accent-bright">
              نمونه‌کارها
            </a>
            <a href="/#safety" className="text-steel-muted text-[0.9rem] transition-colors hover:text-accent-bright">
              پشتیبانی
            </a>
            <a href="/#contact" className="text-steel-muted text-[0.9rem] transition-colors hover:text-accent-bright">
              تماس
            </a>
          </nav>
        </div>
        <p className="mono mt-10 pt-6 border-t border-line text-center text-steel-dim text-[0.8rem]">
          © ۱۴۰۴ TUNELIA — تونلیا | تمامی حقوق محفوظ است
        </p>
      </div>
    </footer>
  );
}
