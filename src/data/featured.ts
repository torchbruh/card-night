// Featured spot pricing + helpers. Edit prices here only; /featured reads from this file.
// Locked Oct 30, 2026: Founding $2/mo (first 15, 6-mo lock), Featured $4/mo, Weekend Boost $2/weekend.
export const FEATURED_CONTACT = 'justintorch@mail.grokbot.com';
export const FEATURED_SUBJECT = 'Card Night Featured';
export const FEATURED_CAP_PER_CATEGORY = 3;
export const FOUNDING_SPOTS = 15;
export const FOUNDING_LOCK_MONTHS = 6;

export const PRICES = {
  founding: 2, // $/month, first FOUNDING_SPOTS spots, locked FOUNDING_LOCK_MONTHS months
  featured: 4, // $/month
  boost: 2, // $/weekend (Fri–Sun)
};

export const mailto = (subject = FEATURED_SUBJECT) =>
  `mailto:${FEATURED_CONTACT}?subject=${encodeURIComponent(subject)}`;

// A listing counts as featured if `featured: true` and `featuredUntil` (ISO date) is absent or not yet past.
// The site is static, so expiry is checked at build time (each deploy).
export function isFeatured(data: { featured?: boolean; featuredUntil?: string }, now = new Date()): boolean {
  if (!data.featured) return false;
  if (!data.featuredUntil) return true;
  const until = new Date(`${data.featuredUntil}T23:59:59-06:00`);
  return !Number.isNaN(until.getTime()) && until >= now;
}

// Stable sort: active featured listings first, otherwise original order.
export function pinFeatured<T extends { data: any }>(items: T[]): T[] {
  return items
    .map((item, i) => ({ item, i, f: isFeatured(item.data) ? 0 : 1 }))
    .sort((a, b) => a.f - b.f || a.i - b.i)
    .map((x) => x.item);
}
