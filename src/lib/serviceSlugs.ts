/**
 * منبع واحد نگاشت id ↔ slug خدمات.
 * هر جای پروژه که به slug یا id نیاز است، فقط از این فایل استفاده شود
 * تا مثل باگ قبلی (جابجایی network/backup) تکرار نشود.
 * این دو مپ باید آینهٔ هم باشند — هر تغییر در یکی باید در دیگری هم اعمال شود.
 */

const ID_TO_SLUG_MAP: Record<number, string> = {
  1: 'backup',
  2: 'accounting',
  3: 'server',
  4: 'security',
  5: 'network',
  6: 'support',
  7: 'sharing',
  8: 'maintenance',
  9: 'web',
};

const SLUG_TO_ID_MAP: Record<string, number> = {
  backup: 1,
  accounting: 2,
  server: 3,
  security: 4,
  network: 5,
  support: 6,
  sharing: 7,
  maintenance: 8,
  web: 9,
};

export const ID_TO_SLUG = ID_TO_SLUG_MAP;
export const SLUG_TO_ID = SLUG_TO_ID_MAP;

export function serviceSlug(id: number): string {
  return ID_TO_SLUG_MAP[id] ?? String(id);
}

/** همه slugهای معتبر — برای generateStaticParams و اعتبارسنجی */
export const SERVICE_SLUGS = Object.values(ID_TO_SLUG_MAP);
