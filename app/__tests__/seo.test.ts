import { describe, it, expect } from 'vitest';

import { pageMetadata } from '../seo';

// Next's `Metadata['openGraph']` type is a loose union meant for input, not a
// narrowable discriminated union, so reading `.type` / `.publishedTime` off
// it needs a cast in test code. The runtime object is a plain JS object built
// by pageMetadata() either way.
function openGraphOf(metadata: ReturnType<typeof pageMetadata>): Record<string, unknown> {
  return (metadata.openGraph ?? {}) as Record<string, unknown>;
}

describe('pageMetadata locales', () => {
  it('requires locales to be passed through to alternateLanguages (partial set)', () => {
    const metadata = pageMetadata({
      language: 'it',
      path: '/servizi/automazione-documentale-pa',
      locales: ['it'],
      title: 'Titolo',
      description: 'Descrizione',
    });

    const languages = metadata.alternates?.languages as Record<string, string>;
    expect(Object.keys(languages).sort()).toEqual(['it', 'x-default']);
    expect(openGraphOf(metadata).type).toBe('website');
  });

  it('drops alternateLocale entirely for a page that exists in only one locale', () => {
    const metadata = pageMetadata({
      language: 'it',
      locales: ['it'],
    });

    expect('alternateLocale' in openGraphOf(metadata)).toBe(false);
  });

  it('keeps the full three-locale hreflang and alternateLocale for the home page shape', () => {
    const metadata = pageMetadata({
      language: 'en',
      locales: ['it', 'en', 'es'],
    });

    const languages = metadata.alternates?.languages as Record<string, string>;
    expect(Object.keys(languages).sort()).toEqual(['en', 'es', 'it', 'x-default']);
    expect(openGraphOf(metadata).alternateLocale).toEqual(['it_IT', 'es_ES']);
  });

  it('switches to an article OpenGraph type with dates when `article` is given', () => {
    const metadata = pageMetadata({
      language: 'en',
      path: '/blog/example',
      locales: ['en'],
      title: 'Example',
      description: 'Example description',
      article: { publishedTime: '2026-09-21', modifiedTime: '2026-09-22' },
    });

    expect(openGraphOf(metadata).type).toBe('article');
    expect(openGraphOf(metadata).publishedTime).toBe('2026-09-21');
  });
});
