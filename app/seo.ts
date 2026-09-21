import type { Metadata } from 'next';

import { translations } from '@/components/translations';

import {
  alternateLanguages,
  localeUrl,
  OG_LOCALES,
  type Language,
} from './i18n';

/**
 * Per-locale page metadata.
 *
 * Server-only by construction (it reads the full dictionary), so it must never
 * be imported from a `"use client"` module.
 *
 * `path` is everything after the locale segment. `locales` is every locale the
 * page exists in - required, not defaulted to the full set, for the same
 * reason `alternateLanguages()` in app/i18n.ts requires it: a blog post that
 * only exists in Italian must not silently get a three-locale hreflang. The
 * home page passes `locales: LANGUAGES`; a blog article passes the locale(s)
 * it is actually published in.
 */
export function pageMetadata({
  language,
  path = '',
  locales,
  title,
  description,
  article,
}: {
  language: Language;
  path?: string;
  locales: readonly Language[];
  title?: string;
  description?: string;
  /**
   * Present only for a blog article: switches OpenGraph to `type: 'article'`
   * and carries the dates a crawler expects for one. Absent (the default)
   * keeps `type: 'website'`, correct for the home page and, later, the
   * service pages.
   */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
  };
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

  // OpenGraph `alternateLocale` advertises the *other* language versions of
  // this document. Built from `locales`, not from the full `LANGUAGES` list,
  // for the same reason as the hreflang set below it: a page that only exists
  // in one locale has no other version to point at.
  const alternateLocale = locales
    .filter((other) => other !== language)
    .map((other) => OG_LOCALES[other]);

  const openGraphBase = {
    url: localeUrl(language, path),
    siteName: 'Riccardo Perniciano',
    title: resolvedTitle,
    description: resolvedDescription,
    locale: OG_LOCALES[language],
    ...(alternateLocale.length > 0 ? { alternateLocale } : {}),
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
  };

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: localeUrl(language, path),
      languages: alternateLanguages(locales, path),
    },
    openGraph: article
      ? {
          type: 'article',
          ...openGraphBase,
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime,
        }
      : {
          type: 'website',
          ...openGraphBase,
        },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
