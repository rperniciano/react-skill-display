import { describe, it, expect } from 'vitest';

import { ARTICLES, selectPublished, publishedArticles, getArticle, localesForSlug } from '../blog';

const DRAFT_SLUG = 'model-context-protocol-a-practical-primer';

describe('the article fixture', () => {
  it('is the one draft used to prove the pipeline, in English', () => {
    const fixture = ARTICLES.find((article) => article.slug === DRAFT_SLUG);

    expect(fixture).toBeDefined();
    expect(fixture?.draft).toBe(true);
    expect(fixture?.locale).toBe('en');
  });
});

describe('selectPublished (draft exclusion, independent of NODE_ENV)', () => {
  it('drops every draft when includeDrafts is false', () => {
    const result = selectPublished(ARTICLES, { includeDrafts: false });

    expect(result.some((article) => article.draft)).toBe(false);
    // The only fixture article today is a draft, so filtering it out leaves
    // nothing published at all - this is the state the production build
    // ships in.
    expect(result).toHaveLength(0);
  });

  it('keeps drafts when includeDrafts is true', () => {
    const result = selectPublished(ARTICLES, { includeDrafts: true });

    expect(result.some((article) => article.slug === DRAFT_SLUG)).toBe(true);
  });

  it('never mutates the input array', () => {
    const before = [...ARTICLES];
    selectPublished(ARTICLES, { includeDrafts: false });
    expect(ARTICLES).toEqual(before);
  });
});

describe('publishedArticles() under the test environment', () => {
  // Vitest runs with NODE_ENV=test, not 'production', so this exercises the
  // same "drafts are visible for preview" branch `next dev` uses. The
  // production branch (drafts excluded) is covered directly via
  // selectPublished() above, and end to end via `npm run build && npm run
  // start` in the task's verification pass.
  it('assumes a non-production NODE_ENV', () => {
    expect(process.env.NODE_ENV).not.toBe('production');
  });

  it('includes the draft fixture here, matching next dev', () => {
    expect(publishedArticles().some((article) => article.slug === DRAFT_SLUG)).toBe(true);
  });
});

describe('getArticle (slug-not-in-locale)', () => {
  it('finds the fixture at its real (locale, slug) pair', () => {
    expect(getArticle('en', DRAFT_SLUG)).toBeDefined();
  });

  it('returns undefined when the slug exists, but not in the requested locale', () => {
    // The fixture is English-only, so asking for it under /it or /es must
    // miss - this is exactly the data-layer condition that makes the article
    // route call notFound() for a slug requested in the wrong locale.
    expect(getArticle('it', DRAFT_SLUG)).toBeUndefined();
    expect(getArticle('es', DRAFT_SLUG)).toBeUndefined();
  });

  it('returns undefined for a slug that does not exist at all', () => {
    expect(getArticle('en', 'no-such-article')).toBeUndefined();
  });
});

describe('localesForSlug', () => {
  it('reports only the locale(s) actually publishing that slug', () => {
    expect(localesForSlug(DRAFT_SLUG)).toEqual(['en']);
  });

  it('is empty for an unknown slug', () => {
    expect(localesForSlug('no-such-article')).toEqual([]);
  });
});
