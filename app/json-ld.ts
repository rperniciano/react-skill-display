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
