import fr from './locales/fr.json';
import en from './locales/en.json';

export type Locale = 'fr' | 'en';

const dictionaries: Record<Locale, Record<string, string>> = { fr, en };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function t(key: string, locale: Locale): string {
  return dictionaries[locale]?.[key] ?? dictionaries['fr']?.[key] ?? key;
}

export function localePath(path: string, locale: Locale): string {
  if (locale === 'fr') return path;
  return `/en${path}`;
}
