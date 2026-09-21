/**
 * Single source of truth for the locale set and the canonical origin.
 *
 * Deliberately free of any dependency on the translation dictionaries: this
 * module is imported by `proxy.ts`, which runs on the edge runtime for
 * every request, and dragging the ~45 kB `translations.ts` into that bundle
 * would be pure dead weight. Anything that needs copy goes through `app/seo.ts`
 * (server-only) or through the provider's `dictionary` prop.
 */

export const LANGUAGES = ['it', 'en', 'es'] as const;

export type Language = (typeof LANGUAGES)[number];

/**
 * Locale served when the visitor's `Accept-Language` matches none of ours, and
 * the target of the `x-default` hreflang. Mirrors the old client-side rule in
 * LanguageContext.tsx ("everything else -> en").
 */
export const FALLBACK_LANGUAGE: Language = 'en';

export function isLanguage(value: string | undefined | null): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

/**
 * Canonical origin. `NEXT_PUBLIC_SITE_URL` wins so preview deployments can
 * self-reference; the fallback is the production domain (riccardoperniciano.com).
 * Any trailing slash is stripped so `${SITE_URL}/${lang}` never doubles up.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://riccardoperniciano.com'
).replace(/\/+$/, '');

/** OpenGraph `locale` values, keyed by our route segment. */
export const OG_LOCALES: Record<Language, string> = {
  it: 'it_IT',
  en: 'en_GB',
  es: 'es_ES',
};

/**
 * Absolute URL of `path` in `language`.
 * `path` is the part *after* the locale segment: '' for a locale home page,
 * '/blog/some-post' for a future blog entry.
 */
export function localeUrl(language: Language, path = ''): string {
  return `${SITE_URL}/${language}${path}`;
}

/**
 * hreflang map for one logical page across every locale, plus `x-default`.
 *
 * The return type is keyed by `Language`, so adding a locale to LANGUAGES makes
 * the compiler point straight at this object instead of silently shipping an
 * incomplete hreflang set. The shape is accepted as-is by both Next's
 * `alternates.languages` and the sitemap's `alternates.languages`.
 */
export function alternateLanguages(path = ''): Record<Language | 'x-default', string> {
  return {
    it: localeUrl('it', path),
    en: localeUrl('en', path),
    es: localeUrl('es', path),
    // Visitors whose language we do not target: the `/` proxy sends them
    // to FALLBACK_LANGUAGE, so x-default points at the same document.
    'x-default': localeUrl(FALLBACK_LANGUAGE, path),
  };
}
