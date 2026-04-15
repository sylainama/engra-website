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
  return routeMap[routeKey]?.[locale] ?? '/';
}

/** Given a current page path, return the equivalent path in the target locale. */
export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  // Normalize: remove trailing slash (except for root)
  const normalized = currentPath.length > 1 ? currentPath.replace(/\/$/, '') : currentPath;

  for (const routes of Object.values(routeMap)) {
    // Check both locales
    if (routes.fr === normalized) return routes[targetLocale];
    // For EN root, also match '/en'
    if (routes.en === normalized || routes.en.replace(/\/$/, '') === normalized) {
      return routes[targetLocale];
    }
  }

  // Fallback: if the path starts with /en/, strip the prefix for FR, or add it for EN
  if (targetLocale === 'fr' && normalized.startsWith('/en/')) {
    return normalized.slice(3) || '/';
  }
  if (targetLocale === 'en' && !normalized.startsWith('/en')) {
    return `/en${normalized}`;
  }

  return normalized;
}
