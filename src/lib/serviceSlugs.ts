import { services } from '@/data/services';

export const SLUG_TO_ID: Record<string, number> = {
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

export const ID_TO_SLUG: Record<number, string> = {
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

export function getSlugById(id: number): string {
  return ID_TO_SLUG[id] || String(id);
}

export function getIdBySlug(slug: string): number | undefined {
  return SLUG_TO_ID[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(SLUG_TO_ID);
}

export function getServiceBySlug(slug: string) {
  const id = SLUG_TO_ID[slug];
  return services.find((s) => s.id === id);
}