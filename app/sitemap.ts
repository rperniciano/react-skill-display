import type { MetadataRoute } from 'next';

import { LANGUAGES, alternateLanguages, localeUrl } from './i18n';

/**
 * One entry per (route x locale), each carrying the full hreflang set.
 *
 * Add future indexable pages to ROUTES - `path` is everything after the locale
 * segment - and the locale fan-out plus alternates come for free. A blog would
 * be `...ROUTES, ...posts.map((post) => ({ path: `/blog/${post.slug}`, ... }))`.
 */
type LocalisedRoute = {
  path: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

const ROUTES: LocalisedRoute[] = [
  // The locale home pages.
  { path: '', changeFrequency: 'monthly', priority: 1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const builtAt = new Date();

  return ROUTES.flatMap((route) =>
    LANGUAGES.map((language) => ({
      url: localeUrl(language, route.path),
      lastModified: route.lastModified ?? builtAt,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: alternateLanguages(route.path),
      },
    })),
  );
}
