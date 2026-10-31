export default function Navbar() {
  return (
    <nav
      aria-label="ناوبری اصلی"
      className="sticky top-0 z-50 flex items-center justify-between px-[6%] py-4 border-b border-line bg-ink/86 backdrop-blur-md"
    >
      <div className="flex items-center gap-2.5 font-bold text-steel text-[1.05rem]">
        <span className="w-[26px] h-[26px] border-[1.5px] border-accent flex items-center justify-center text-accent font-mono text-[0.7rem]">
          T
        </span>
        تونلیها
      </div>
      <ul className="flex gap-8 list-none max-[720px]:hidden">
        <li>
          <a
            href="#services"
            className="text-steel-muted text-[0.92rem] transition-colors duration-200 hover:text-accent"
          >
            خدمات
          </a>
        </li>
        <li>
          <a
            href="#safety"
            className="text-steel-muted text-[0.92rem] transition-colors duration-200 hover:text-accent"
          >
            پشتیبانی
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-steel-muted text-[0.92rem] transition-colors duration-200 hover:text-accent"
          >
            تماس
          </a>
        </li>
      </ul>
    </nav>
  );
}
