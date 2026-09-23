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
    //
    // A blog article (`article` present) is the one case that omits this key
    // entirely, rather than setting it to some other value - not the same
    // thing, and the difference is the whole mechanism. Next's metadata
    // resolver only lets a co-located opengraph-image.tsx (the file
    // convention, see app/[lang]/blog/[slug]/opengraph-image.tsx) supply
    // `openGraph.images` when this segment's own metadata has no *own*
    // `images` property at all - `hasOwnProperty`, checked before this
    // object is even merged with anything else (mergeStaticMetadata in
    // node_modules/next/dist/lib/metadata/resolve-metadata.js). Setting
    // `images: undefined` would still count as "has the property" and the
    // static file would silently lose to nothing; only leaving the key out
    // lets the per-article generated image through. Every non-article page
    // keeps the static card explicitly, exactly as before.
    //
    // twitter.images is never set anywhere in this file (see the returned
    // `twitter` object below), for any page - so Next's own metadata
    // resolver (the "inherit from openGraph" step in postProcessMetadata,
    // same file) copies the *final* resolved openGraph.images into
    // twitter.images afterwards. That already made twitter:image mirror the
    // static og:image on every page before this change; now it's what makes
    // twitter:image mirror the per-article generated image too, with no
    // separate twitter-image.tsx needed.
    ...(article
      ? {}
      : {
          images: [
            {
              url: '/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Riccardo Perniciano — Solution Architect & .NET Developer',
            },
          ],
        }),
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
