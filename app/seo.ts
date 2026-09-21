import type { Metadata } from 'next';

import { translations } from '@/components/translations';

import {
  alternateLanguages,
  localeUrl,
  OG_LOCALES,
  LANGUAGES,
  type Language,
} from './i18n';

/**
 * Per-locale page metadata.
 *
 * Server-only by construction (it reads the full dictionary), so it must never
 * be imported from a `"use client"` module.
 *
 * `path` is everything after the locale segment, so a future blog post only has
 * to call `pageMetadata({ language, path: '/blog/slug', title, description })`
 * and it inherits the canonical + hreflang wiring for free.
 */
export function pageMetadata({
  language,
  path = '',
  title,
  description,
}: {
  language: Language;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
  const dictionary = translations[language];

  // Copy comes from the existing translation data - no new strings invented.
  const resolvedTitle = title ?? `Riccardo Perniciano — ${dictionary.hero.title}`;
  const resolvedDescription = description ?? dictionary.hero.description;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: localeUrl(language, path),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: 'website',
      url: localeUrl(language, path),
      siteName: 'Riccardo Perniciano',
      title: resolvedTitle,
      description: resolvedDescription,
      locale: OG_LOCALES[language],
      alternateLocale: LANGUAGES.filter((other) => other !== language).map(
        (other) => OG_LOCALES[other],
      ),
      // NOTE: no `images` here on purpose. The old index.html pointed at
      // /og-image.png, which does not exist in public/. A 404ing og:image is
      // worse than none, so the tag is omitted until the asset is added.
    },
    twitter: {
      // 'summary' until public/og-image.png exists; a large-image card with no
      // image just renders as a plain summary anyway.
      card: 'summary',
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
