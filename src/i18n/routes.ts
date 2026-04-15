import type { Locale } from './utils';

export const routeMap: Record<string, Record<Locale, string>> = {
  home:              { fr: '/',                             en: '/en/' },
  features:          { fr: '/fonctionnalites',              en: '/en/features' },
  pricing:           { fr: '/tarifs',                       en: '/en/pricing' },
  download:          { fr: '/telecharger',                  en: '/en/download' },
  legalNotice:       { fr: '/mentions-legales',             en: '/en/legal-notice' },
  privacy:           { fr: '/confidentialite',              en: '/en/privacy' },
  terms:             { fr: '/conditions-generales',         en: '/en/terms' },
  guide:             { fr: '/guide',                        en: '/en/guide' },
  guideInstallation: { fr: '/guide/installation',           en: '/en/guide/installation' },
  guideFirstRec:     { fr: '/guide/premier-enregistrement', en: '/en/guide/first-recording' },
  guideTranscript:   { fr: '/guide/transcription',          en: '/en/guide/transcription' },
  guideSummaries:    { fr: '/guide/resumes-ia',             en: '/en/guide/ai-summaries' },
  guideShortcuts:    { fr: '/guide/raccourcis',             en: '/en/guide/shortcuts' },
  guideFaq:          { fr: '/guide/faq',                    en: '/en/guide/faq' },
};

/** Get URL for a named route in a specific locale. */
export function getRouteHref(routeKey: string, locale: Locale): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const path = routeMap[routeKey]?.[locale] ?? '/';
  if (path === '/') return base;
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

/** Given a current page path, return the equivalent path in the target locale. */
export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  const base = import.meta.env.BASE_URL ?? '/';
  // Strip base prefix for matching
  const stripped = currentPath.startsWith(base) ? currentPath.slice(base.length - 1) : currentPath;
  // Normalize: remove trailing slash (except for root)
  const normalized = stripped.length > 1 ? stripped.replace(/\/$/, '') : stripped;

  for (const routes of Object.values(routeMap)) {
    if (routes.fr === normalized) return getRouteHref(Object.keys(routeMap).find(k => routeMap[k] === routes)!, targetLocale);
    if (routes.en === normalized || routes.en.replace(/\/$/, '') === normalized) {
      return getRouteHref(Object.keys(routeMap).find(k => routeMap[k] === routes)!, targetLocale);
    }
  }

  // Fallback
  if (targetLocale === 'fr' && normalized.startsWith('/en/')) {
    return `${base}${(normalized.slice(4) || '')}`;
  }
  if (targetLocale === 'en' && !normalized.startsWith('/en')) {
    return `${base}en${normalized}`;
  }

  return `${base}${normalized.startsWith('/') ? normalized.slice(1) : normalized}`;
}
