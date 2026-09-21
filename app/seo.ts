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

  // Copy comes from the existing translation data.
  //
  // The title is `meta.title`, not `hero.title`: the hero heading is the on-page
  // H1 and is deliberately the same English job title in every locale, so
  // building the <title> from it shipped one identical string on /it, /en and
  // /es - three documents competing for the same query with no localised
  // signal. `meta.title` is written per locale and sized for the SERP.
  //
  // The description is `meta.description` for the mirror-image reason: it used
  // to be `hero.description`, which is the on-page hero paragraph, so the SERP
  // budget (150-160 characters) and the copy the owner actually wrote were
  // pulling on the same string - and the budget won, costing the Italian hero a
  // clause. Two keys, no tension.
  const resolvedTitle = title ?? dictionary.meta.title;
  const resolvedDescription = description ?? dictionary.meta.description;

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
      // Built from the profile photo. One image for all three locales: it
      // carries the name and the English job title, which the dictionaries
      // already share across it/en/es.
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Riccardo Perniciano — Solution Architect & .NET Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
