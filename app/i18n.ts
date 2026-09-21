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
 * hreflang map for one logical page, across exactly the locales it exists in,
 * plus `x-default`.
 *
 * `locales` has no default. It used to be implicitly "all three" - fine for
 * the home page, wrong for a page that is deliberately locale-restricted
 * (a legal/public-sector blog article that only exists in Italian, a Model
 * Context Protocol article that only exists in English): that page would
 * advertise an alternate at a URL that 404s, and a broken hreflang can make
 * search engines distrust the whole cluster, including the three home pages
 * that are correct. Making the parameter required rather than defaulted means
 * a caller who forgets it gets a compile error, not a silently broken
 * three-locale hreflang set on a one-locale page - "hard to misuse" here means
 * "impossible to omit", not "defaults to something safe-looking but wrong".
 *
 * The return type reflects that partiality: only locales present in `locales`
 * get a key. `x-default` still needs exactly one target - FALLBACK_LANGUAGE
 * when the page exists in it (matching where the `/` proxy sends an unmatched
 * visitor), otherwise the first locale the page *does* exist in, in
 * `LANGUAGES` order. Pointing `x-default` at a locale outside `locales` would
 * reintroduce the exact problem this function exists to prevent.
 */
export function alternateLanguages(
  locales: readonly Language[],
  path = '',
): Partial<Record<Language, string>> & { 'x-default': string } {
  const present = LANGUAGES.filter((language) => locales.includes(language));

  if (present.length === 0) {
    // Defence in depth beneath the type system: an empty array (or one full
    // of values that aren't actually in LANGUAGES) is a caller bug, not a
    // page with no hreflang.
    throw new Error('alternateLanguages: locales must include at least one known language');
  }

  const languages = Object.fromEntries(
    present.map((language) => [language, localeUrl(language, path)]),
  ) as Partial<Record<Language, string>>;

  const xDefaultLanguage = present.includes(FALLBACK_LANGUAGE) ? FALLBACK_LANGUAGE : present[0];

  return {
    ...languages,
    'x-default': localeUrl(xDefaultLanguage, path),
  };
}
