import { portfolioData } from '@/components/portfolio-data';

import { localeUrl, SITE_URL, type Language } from './i18n';
import type { Article } from './blog';

/**
 * Structured data builders. Both are deliberately built only from facts that
 * already exist elsewhere on the site (portfolio-data.ts, an article's own
 * validated metadata) - no invented bio copy, no rating, no fabricated count.
 */

/** `Person`, rendered once on the home page (see app/[lang]/page.tsx). */
export function personJsonLd(language: Language) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.title,
    url: localeUrl(language),
    image: `${SITE_URL}/og-image.png`,
    email: `mailto:${portfolioData.personal.email}`,
    worksFor: {
      '@type': 'Organization',
      name: 'FEDRO Software',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cagliari',
      postalCode: '09128',
      addressCountry: 'IT',
    },
    sameAs: [portfolioData.personal.linkedin, portfolioData.personal.github],
  };
}

/**
 * `Service`, rendered on each Italian-only commercial page under
 * /it/servizi/<slug>. Built only from facts already written on that page -
 * no price, no `Offer`, no `AggregateRating`: nothing about pricing or
 * commercial terms is published anywhere else on the site either, so there
 * is nothing sourced to put here.
 *
 * `language` is not a parameter: every page this is called from exists in
 * Italian only (see CLAUDE.md's "who this is for" section), so the URL and
 * the provider link are always built against 'it'.
 */
export function serviceJsonLd({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: localeUrl('it', path),
    provider: {
      '@type': 'Person',
      name: portfolioData.personal.name,
      url: localeUrl('it'),
    },
    areaServed: 'IT',
  };
}

/** `BlogPosting`, rendered on each article page. */
export function blogPostingJsonLd(
  article: Pick<Article, 'title' | 'description' | 'date' | 'modifiedDate' | 'locale'>,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.modifiedDate ?? article.date,
    inLanguage: article.locale,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: portfolioData.personal.name,
      url: localeUrl(article.locale),
    },
    publisher: {
      '@type': 'Person',
      name: portfolioData.personal.name,
    },
  };
}
