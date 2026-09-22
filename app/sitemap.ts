import type { MetadataRoute } from 'next';

import { LANGUAGES, alternateLanguages, localeUrl, type Language } from './i18n';
import { publishedArticles, localesForSlug } from './blog';

/**
 * One entry per (route x locale it exists in), each carrying the hreflang set
 * for exactly that locale set - never a hardcoded fan-out over all three, so
 * a locale-restricted page (a blog article) cannot advertise a sitemap URL
 * alongside alternates that 404.
 *
 * Add future indexable pages to ROUTES the same way: `path` is everything
 * after the locale segment, `locales` is where it actually exists.
 */
type LocalisedRoute = {
  path: string;
  locales: readonly Language[];
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

const ROUTES: LocalisedRoute[] = [
  // The locale home pages.
  { path: '', locales: LANGUAGES, changeFrequency: 'monthly', priority: 1 },
  // Commercial service pages. Italian only by design - see CLAUDE.md - so
  // `locales` is `['it']`, not `LANGUAGES`: the same guard that keeps a
  // locale-restricted blog article from advertising an hreflang alternate
  // that 404s applies here too.
  {
    path: '/servizi/automazione-documentale-pa',
    locales: ['it'],
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/servizi/consulenza-ai-dotnet',
    locales: ['it'],
    changeFrequency: 'monthly',
    priority: 0.8,
  },
];

/**
 * One route per published slug (deduplicated - a slug published in more than
 * one locale is one sitemap URL per locale, not one per Article record). Goes
 * through `publishedArticles()`, the same draft-excluding path the blog index
 * and `generateStaticParams` use, so while every article is a draft this
 * contributes nothing and the sitemap is unchanged from before this file
 * existed.
 */
function articleRoutes(): LocalisedRoute[] {
  const slugs = Array.from(new Set(publishedArticles().map((article) => article.slug)));

  return slugs.map((slug) => ({
    path: `/blog/${slug}`,
    locales: localesForSlug(slug),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const builtAt = new Date();

  return [...ROUTES, ...articleRoutes()].flatMap((route) =>
    route.locales.map((language) => ({
      url: localeUrl(language, route.path),
      lastModified: route.lastModified ?? builtAt,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages(route.locales, route.path),
      },
    })),
  );
}
