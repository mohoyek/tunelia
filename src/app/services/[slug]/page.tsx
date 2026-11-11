import type { Metadata } from 'next';
import { services } from '@/data/services';
import { professionalServiceJsonLd, webSiteJsonLd, breadcrumbJsonLd } from '@/lib/metadata';
import { SLUG_TO_ID, ID_TO_SLUG, getAllSlugs } from '@/lib/serviceSlugs';
import IconSvg from '@/components/ui/IconSvg';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const SERVICE_DETAILS: Record<number, { summary: string; details: string[]; faq: { q: string; a: string }[] }> = {
  1: {
    summary: 'راه‌اندازی، نظارت و بازیابی بکاپ‌گیری داده‌های حیاتی سازمانی با سیاست‌های نگهداری انعطاف‌پذیر و تست دوره‌ای بازیابی.',
    details: [
      'پیکربندی بکاپ‌گیری خودکار روزانه/هفتگی با Veeam، Veritas یا اسکریپت‌های سفارشی.',
      'ذخیره در مقاصد متنوع: NAS محلی، استوریج ابری (S3، Azure Blob)، نوار مغناطیسی.',
      'شامل بکاپ کامل، افزایشی و تفاضلی با سیاست نگهداری (GFS) قابل تنظیم.',
      'تست بازیابی ماهانه و گزارش WORM برای اطمینان از یکپارچگی داده.',
      'پشتیبانی از ماشین‌های مجازی (VMware/Hyper-V)، دیتابیس (SQL، PostgreSQL، Oracle) و فایل‌سرورها.',
      'رمزنگاری AES-256 در حال انتقال و در حالت استراحت، احراز هویت چندعاملی برای کنسول مدیریت.',
    ],
    faq: [
      { q: 'بازگشت به کدام نقطه زمانی امکان‌پذیر است؟', a: 'هر نقطه در بازه نگهداری (روزانه تا سالانه) با RPO نزدیک به صفر.' },
      { q: 'آیا بکاپ ابری امن است؟', a: 'بله، با رمزنگاری سمت کلاینت و کلید مدیریت توسط مشتری (BYOK).' },
      { q: 'زمان بازیابی چقدر طول می‌کشد؟', a: 'بسته به حجم، از چند دقیقه (فایل) تا چند ساعت (VM کامل).' },
    ],
  },
  2: {
    summary: 'پیاده‌سازی حسابداری شبکه (AAA) با RADIUS/TACACS+ برای کنترل دسترسی متمرکز، لاگ‌گیری حسابرسی و انطباق با استانداردها.',
    details: [
      'نصب و پیکربندی سرور RADIUS (Cisco ISE، Aruba ClearPass، FreeRADIUS، Microsoft NPS).',
      'احراز هویت ۸۰۲.۱X برای وایرلس و وایر، MAB برای دستگاه‌های بدون Supplicant.',
      'احراز هویت چندعاملی (MFA) با توکن سخت‌افزاری، Push، SMS یا WebAuthn.',
      'احراز هویت مجوزها بر اساس گروه AD/LDAP، VLAN پویا و ACL دانلودشده.',
      'حسابرسی کامل: لاگ ورود/خروج، تغییرات پیکربندی، شکست‌های احراز هویت با نگهداری ۱ سال.',
      'انطباق با ISO 27001، PCI-DSS و مقررات داخلی سازمان.',
    ],
    faq: [
      { q: 'تفاوت RADIUS و TACACS+ چیست؟', a: 'RADIUS برای AAA شبکه (احراز/مجوز/حسابداری) و TACACS+ برای مدیریت دستگاه (CLI) با رمزنگاری کامل پکت.' },
      { q: 'آیا می‌توان با Azure AD یکپارچه شد؟', a: 'بله، از طریق SAML/OIDC یا Azure MFA Extension برای NPS.' },
      { q: 'چگونه دسترسی مهمان کنترل می‌شود؟', a: 'پورتال مهمان (Guest Portal) با تأیید SMS/ایمیل، VLAN جداگانه و انقضای خودکار.' },
    ],
  },
  3: {
    summary: 'راه‌اندازی، امن‌سازی و بهینه‌سازی سرورهای ویندوز و لینوکس برای میزبانی کاربردهای سازمانی با تسلط بر مجازی‌سازی و کانتینر.',
    details: [
      'نصب و سخت‌سازی OS (Windows Server 2019/2022، RHEL، Ubuntu LTS، Debian) بر اساس CIS Benchmarks.',
      'مجازی‌سازی با Hyper-V، VMware vSphere یا Proxmox؛ خوشه HA و DRS.',
      'کانتینرها با Docker، Podman و ارکستراسیون Kubernetes (RKE2، kubeadm، AKS/EKS/GKE).',
      'پیکربندی ذخیره‌سازی: iSCSI، NFS، Ceph، Storage Spaces Direct، multipathing.',
      'مونیتورینگ و هشداردهی: Zabbix، Prometheus+Grafana، Windows Exporter، Node Exporter.',
      'اتوماسیون با Ansible، PowerShell DSC، Terraform برای IaC.',
    ],
    faq: [
      { q: 'سرور فیزیکی یا مجازی بهتر است؟', a: 'مجازی برای انعطاف و HA؛ فیزیکی برای لایسنس‌های گران، GPU یا latency حساس.' },
      { q: 'پچ‌گری امنیتی چگونه مدیریت می‌شود؟', a: 'چرخه ماهانه با WSUS/Apt/Yum/DNF، تست در استیجینگ، رول‌بک خودکار در صورت خطا.' },
      { q: 'آیا مهاجرت از VMware به Hyper-V امکان‌پذیر است؟', a: 'بله، با ابزارهای StarWind V2V، Microsoft MVMC یا کانتینر. زمان‌بندی در پنجره حفظ.' },
    ],
  },
  4: {
    summary: 'معماری دفاع در عمق: فایروال لایه ۳–۷، IPS/IDS، WAF، امنیت ایمیل، Segment و مدیریت رخداد (SIEM/SOAR).',
    details: [
      'فایروال Next-Gen: Palo Alto، FortiGate، Cisco Firepower، Sophos XG، OPNsense — با App-ID، SSL Decryption، Threat Prevention.',
      'IPS/IDS شبکه و هاست: Suricata، Zeek، CrowdSec، Wazuh Agent.',
      'WAF برای وب‌اپلیکیشن: ModSecurity، Coraza، Cloudflare WAF، Azure Front Door WAF.',
      'امنیت ایمیل: DMARC/DKIM/SPF، Proofpoint، Microsoft Defender for Office 365، SpamAssassin.',
      'Segmentation: Zero Trust با MikroTik/Cisco، VRF، VXLAN، Cisco TrustSec، SD-Access.',
      'SIEM: Splunk، Elastic، Wazuh Manager، Graylog — قانون‌های MITRE ATT&CK، UEBA، SOAR با Shuffle/Cortex XSOAR.',
    ],
    faq: [
      { q: 'تفاوت IPS و IDS چیست؟', a: 'IDS فقط شناسایی و هشدار می‌دهد؛ IPS در خط داده سیت و جلوی ترافیک مخرب را می‌گیرد.' },
      { q: 'آیا SSL Decryption قانونی است؟', a: 'بله، با سیاست سازمانی، گواهی ریشه داخلی و استثناهای بانکی/پزشکی.' },
      { q: 'Zero Trust از کجا آغاز شود؟', a: 'شناسایی موجودیت (Identity)، بررسی سلامت دستگاه (Device Health) و کمینه‌سازی سطح حمله (Micro-segmentation).' },
    ],
  },
  5: {
    summary: 'طراحی، پیاده‌سازی و پشتیبانی شبکه‌های LAN/WAN/Wi-Fi سازمانی با تجهیزات Cisco، MikroTik، Ubiquiti و Aruba از لایه فیزیکی تا هسته.',
    details: [
      'توپولوژی: Core-Distribution-Access، Collapsed Core، Leaf-Spine برای دیتاسنتر.',
      'سوییچینگ: VLAN، Trunk، LACP، Stacking/VSS/VCF، Spanning Tree (RSTP/MSTP)، Storm Control.',
      'مسیردهی: OSPF، EIGRP، BGP، Static، VRF-Lite، Policy-Based Routing، Route Redistribution.',
      'وایرلس: Site Survey (Ekahau)، کنترلر WLC/Cloud، Roaming 802.11r/k/v، WPA3-Enterprise، RF Profiling.',
      'WAN: MPLS، SD-WAN (Meraki، FortiGate SD-WAN، Viptela)، IPsec/GRE/DMVPN، QoS برای صدا/ویدیو.',
      'مستندسازی: NetBox، Visio، IPAM، Runbookهای disaster recovery.',
    ],
    faq: [
      { q: 'معدات پیشنهادی برای ۲۰۰ کاربر چیست؟', a: 'Core: ۲× Catalyst 9500/9400؛ Access: ۹۵۰۰/۹۳۰۰ PoE+؛ Wireless: Catalyst 9130/9120 یا Meraki MR.' },
      { q: 'SD-WAN یا MPLS؟', a: 'SD-WAN ارزان‌تر و چابک‌تر؛ MPLS برای SLA تضمینی و jitter پایین. ترکیبی رایج است.' },
      { q: 'چگونه پوشش وایرلس تضمین می‌شود؟', a: 'Site Survey پیش/پس از اجرا، تنظیم TX Power/Channel Plan، اعتبارسنجی با Ekahau Sidekick.' },
    ],
  },
  6: {
    summary: 'پشتیبانی سطح ۱ تا ۳، مانیتورینگ ۲۴/۷، پاسخ رویداد، مدیریت تغییر و قراردادهای SLA برای زیرساخت IT پایدار.',
    details: [
      'دسک سرویس (ServiceNow/Jira/GLPI): دسته‌بندی رویداد، اولویت، اسکالشن، SLA (Response/Resolution).',
      'مانیتورینگ پیشگیرانه: زنده‌بودن سرویس، دیسک، CPU، حافظه، بکاپ، گواهی SSL، انقضای لایسنس.',
      'مدیریت پچ: WSUS، SCCM/Intune، Ansible، یارانه‌های امنیتی ماهانه Microsoft/Red Hat.',
      'تغییرات: CAB هفتگی، RFC، rollback plan، تست در استیجینگ، اطلاع‌رسانی stakeholders.',
      'مستندات: Network Diagram، IPAM، Password Vault (Bitwarden/1Password/Thycotic)، Runbook DR.',
      'آموزش و انتقال دانش: جلسات QBR، اسناد هانداوفر، تمارین بازیابی فاجعه.',
    ],
    faq: [
      { q: 'تفاوت L1/L2/L3 چیست؟', a: 'L1: تریاژ و کلاس؛ L2: عیب‌یابی تخصصی؛ L3: مهندسی/معماری و توسعه.' },
      { q: 'SLA معمول ۹۹.۹٪ چگونه محاسبه می‌شود؟', a: 'دسترس‌پذیری سالانه: ۸.۷۶ ساعت downtime مجاز. محاسبه روی سرویس‌های کریتیکال.' },
      { q: 'آیا پشتیبانی دورکاری کامل است؟', a: 'بله، با VPN مخصوص، Jump Host، PAM و جلسات رکوردشده. روی‌سایت در صورت لزوم.' },
    ],
  },
  7: {
    summary: 'راه‌اندازی اشتراک‌گذاری امن فایل، پرینتر و منبع شبکه با کنترل دسترسی بر پایه حداقل امتیاز و حسابرسی کامل.',
    details: [
      'فایل‌سرور: Windows File Server (SMB 3.1.1، DFS-R، FSRM Quota/File Screen)، Samba/AD DC، TrueNAS (ZFS، SMB/NFS/iSCSI).',
      'کنترل دسترسی: NTFS ACL، DACL/SACL، Dynamic Access Control، Claims-based، ABAC.',
      'پرینتر: Print Server متمرکز، Driver Management، Pull Printing (UniFlow، PaperCut، YSoft)، Find-Me Print.',
      'موبایل/ریموت: WebDAV، Nextcloud، SharePoint/OneDrive Sync، VPN + Mapped Drive.',
      'حیثیت و پیشگیری از نشت: FSRM File Screen، DLP (Microsoft Purview، OpenDLP)، Watermarking، RMS/AIP.',
      'حسابرسی: فعال‌سازی SACL، لاگ ۴۶۶۳/۴۶۷۰، ارسال به SIEM، گزارش ماهانه دسترسی‌های پرiviliged.',
    ],
    faq: [
      { q: 'DFS-R یا DFS-N؟', a: 'DFS-N: namespace واحد، referrals. DFS-R: replication 멀تی‌مستر. هر دو ترکیبی برای HA.' },
      { q: 'چگونه از Ransomware در Share محافظت کنیم؟', a: 'Blocklist اکستنشن‌های مخرب، FSRM Quota سخت، Versioning، Backup immutable، Canary files.' },
      { q: 'Pull Printing چیست؟', a: 'کاربر چاپ می‌کند، در هر پرینتر با کارت/پین/موبایل آزاد می‌کند. کاهش ضایعه و امنیت.' },
    ],
  },
  8: {
    summary: 'قراردادهای نگهداری پیشگیرانه و اصلاحی ماهانه/فصلی: بازرسی سخت‌افزاری، به‌روزرسانی فیم‌ور/OS، تمیزکاری، تست بکاپ و گزارش‌دهی.',
    details: [
      'بازرسی فیزیکی: دمای سرور، فن‌ها، منبع تغذیه، کابل‌کشی، برچسب‌گذاری، UPS/باتری، راک پچ.',
      'فیم‌ور/BIOS/DRAC/iLO/iDRAC: به‌روزرسانی امن، تنظیمات امنیتی، گواهی SSL مدیریت.',
      'پچ OS و اپلیکیشن: ماهانه با تست پیشین، مدیریت lifecycle درایورها.',
      'تست بکاپ: بازیابی نمونه فایل/VM، چک checksum، تأیید RPO/RTO.',
      'مانیتورینگ پیشگیرانه: تحلیل ترند سهمیه دیسک، SMART دیسک، هشدار پیش‌بینانه (Predictive Failure).',
      'گزارش: چک‌لیست امضا شده، عکس‌های قبل/بعد، پیشنهادهای ارتقا، امتیازدهی ریسک.',
    ],
    faq: [
      { q: 'تفاوت پیشگیرانه و اصلاحی چیست؟', a: 'پیشگیرانه: برنامه‌ریزی، دوره‌ای، جلوگیری. اصلاحی: واکنش به خرابی، جایگزینی قطعه، Troubleshooting.' },
      { q: 'چقدر طول می‌کشد؟', a: 'بسته به تعداد سرور/دستگاه، ۲–۸ ساعت در سایت. پنجره حفظ (معمولاً شب/آخر هفته).' },
      { q: 'آیا قطعات یدکی تامین می‌شود؟', a: 'سبد یدکی (Spare Pool) در قراردادهای سطح بالا شامل می‌شود یا SLA تامین <۴ ساعت.' },
    ],
  },
  9: {
    summary: 'طراحی و توسعه وب‌سایت‌های شرکتی، پورتال سازمانی و فروشگاه آنلاین با Next.js، React، سئو تکنیکی، CMS(headless) و بهینه‌سازی Core Web Vitals.',
    details: [
      'معماری: Next.js 14 App Router (RSC، Streaming، Server Actions)، TypeScript، Tailwind CSS.',
      'رندرینگ: SSR/ISR/SSG ترکیبی، Edge Runtime برای latency پایین، Middleware برای i18n/Auth.',
      'CMS: Sanity، Contentful، Strapi، Payload یا WordPress Headless با Preview Mode.',
      'سئو: JSON-LD (Organization, WebSite, Product, Breadcrumb)، Sitemap.xml، Robots.txt، Canonical، hreflang، OG/Twitter.',
      'عملکرد: Image Optimization (next/image)، Font Optimization، Code Splitting، Prefetching، LCP < 2.5s، CLS < 0.1، INP < 200ms.',
      'دسترسی‌پذیری: WCAG 2.1 AA، Semantic HTML، ARIA، Focus Management، RTL کامل، Contrast Ratio.',
      'امنیت: CSP، HSTS، Referrer-Policy، Permissions-Policy، Rate Limiting، WAF، Dependency Scanning (Snyk/Dependabot).',
      'دیپلوی: Vercel/Netlify/Cloudflare Pages، CI/CD با GitHub Actions، Preview Deployments، Rollback فوری.',
    ],
    faq: [
      { q: 'زمان تحویل یک سایت شرکتی چقدر است؟', a: '۴–۸ هفته بسته به تعداد صفحات، پیچیدگی CMS، یکپارچه‌سازی‌ها و محتوای موجود.' },
      { q: 'آیا پس از تحویل پشتیبانی دارید؟', a: 'بله، ۳ ماه پشتیبانی رایگان (باگ، محتوای جزئی، مانیتورینگ CWV). پس از آن قرارداد نگهداری ماهانه.' },
      { q: 'مهاجرت از وردپرس کلاسیک امکان‌پذیر است؟', a: 'بله، با WPGraphQL/REST API، اسکریپت مهاجر محتوا، Redirect Map ۳۰۱، حفظ سئو.' },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const serviceId = SLUG_TO_ID[params.slug];
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: 'خدمت یافت نشد | تونلیا',
      description: 'خدمت مورد نظر یافت نشد.',
    };
  }

  const title = `${service.title} | تونلیا`;
  const description =
    service.description +
    ' — خدمات حرفه‌ای شبکه، سرور و امنیت اطلاعات با پشتیبانی تخصصی تونلیا.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://tunelia.ir/services/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://tunelia.ir/services/${params.slug}`,
      type: 'website',
      images: [
        {
          url: '/og-card.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-card.png'],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceId = SLUG_TO_ID[params.slug];
  const service = services.find((s) => s.id === serviceId);
  const detail = SERVICE_DETAILS[serviceId];

  if (!service) {
    return (
      <section className="max-w-container mx-auto py-20 px-[5%]">
        <h1 className="text-steel font-bold text-2xl">خدمت یافت نشد</h1>
        <p className="text-steel-muted mt-4">خدمت مورد نظر در سایت تونلیا موجود نیست.</p>
      </section>
    );
  }

  return (
    <section className="max-w-container mx-auto py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'صفحه اصلی', url: '/' },
              { name: 'خدمات', url: '/services' },
              { name: service.title, url: `/services/${params.slug}` },
            ])
          ),
        }}
      />
      <nav className="mb-12" aria-label="مسیر صفحه">
        <ol className="flex items-center gap-2 text-[0.85rem] text-steel-muted font-mono">
          <li>
            <a href="/" className="hover:text-accent transition-colors">
              صفحه اصلی
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/#services" className="hover:text-accent transition-colors">
              خدمات
            </a>
          </li>
          <li>/</li>
          <li className="text-accent">{service.title}</li>
        </ol>
      </nav>

      <h1 className="text-[2.2rem] font-extrabold text-steel mb-6 leading-tight">
        {service.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-steel-muted leading-relaxed font-medium">
            {detail.summary}
          </p>
          <ul className="space-y-4">
            {detail.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-steel-muted text-[1rem] leading-relaxed">
                <span className="text-accent font-bold mt-0.5">•</span>
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-panel border border-line rounded-[2px]">
            <h3 className="text-accent font-bold mb-4 font-mono">ویژگی‌های کلیدی</h3>
            <ul className="space-y-3 text-steel-muted text-[0.95rem]">
              {service.tags.map((tag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent font-mono text-sm mt-0.5">✓</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[340px]">
          <div className="bg-panel border border-line p-8 rounded-[2px] sticky top-24">
            <h3 className="text-steel font-bold mb-6 text-[1.1rem]">تماس سریع</h3>
            <p className="text-steel-muted text-[0.95rem] mb-6">
              برای دریافت استعلام قیمت و راهنمایی درباره{' '}
              <span className="text-accent font-bold">{service.title}</span>، با ما تماس بگیرید.
            </p>
            <div className="space-y-4">
              <a
                href="https://t.me/mohoyek"
                className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                تلگرام: mohoyek@
              </a>
              <a
                href="mailto:info@tunelia.ir"
                className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
              >
                info@tunelia.ir
              </a>
              <a
                href="tel:+989013365949"
                className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
                dir="ltr"
              >
                0901 336 5949
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px bg-line border border-line mb-16">
        {services.map((s) => (
          <a
            key={s.id}
            href={`/services/${ID_TO_SLUG[s.id] || s.id}`}
            className="bg-panel p-6 transition-colors hover:bg-panel-2 border-b border-line last:border-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-[24px] h-[24px] text-accent flex-shrink-0">
                <IconSvg name={s.iconKey} />
              </span>
              <span className="font-mono text-accent text-[0.75rem]">{s.num}</span>
            </div>
            <h3 className="text-steel font-semibold text-[1.05rem] mb-2">{s.title}</h3>
            <p className="text-steel-muted text-[0.9rem]">{s.description}</p>
          </a>
        ))}
      </div>

      <section className="mb-16 border-t border-line pt-12">
        <h2 className="text-[1.7rem] font-bold text-steel mb-8">سوالات متداول</h2>
        <div className="space-y-4">
          {detail.faq.map((item, i) => (
            <div key={i} className="bg-panel border border-line p-6 rounded-[2px]">
              <h3 className="text-accent font-semibold mb-2 text-[1rem]">{item.q}</h3>
              <p className="text-steel-muted text-[0.95rem] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
