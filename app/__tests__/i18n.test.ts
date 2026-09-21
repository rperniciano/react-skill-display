import { describe, it, expect } from 'vitest';

import { alternateLanguages, localeUrl, LANGUAGES } from '../i18n';

// alternateLanguages() is the fix for the actual regression this task exists
// to prevent: a page that only exists in some locales must never advertise an
// hreflang alternate at a URL that 404s. These tests exercise the partial
// sets a locale-restricted blog article or service page will pass, plus the
// full set the home page passes, to pin both the "only present locales get a
// key" behaviour and the x-default fallback rule.

describe('alternateLanguages', () => {
  it('returns every locale plus x-default for the full set (the home page case)', () => {
    const result = alternateLanguages(LANGUAGES);

    expect(Object.keys(result).sort()).toEqual(['en', 'es', 'it', 'x-default']);
    expect(result.it).toBe(localeUrl('it'));
    expect(result.en).toBe(localeUrl('en'));
    expect(result.es).toBe(localeUrl('es'));
    // FALLBACK_LANGUAGE is 'en', matching where the `/` proxy sends an
    // unmatched visitor.
    expect(result['x-default']).toBe(localeUrl('en'));
  });

  it('emits only the given locale for a one-locale page, never the other two', () => {
    const result = alternateLanguages(['it']);

    expect(Object.keys(result).sort()).toEqual(['it', 'x-default']);
    expect(result.en).toBeUndefined();
    expect(result.es).toBeUndefined();
    expect(result.it).toBe(localeUrl('it'));
  });

  it('points x-default at the fallback language when the page exists in it', () => {
    const result = alternateLanguages(['it', 'en']);

    expect(Object.keys(result).sort()).toEqual(['en', 'it', 'x-default']);
    expect(result['x-default']).toBe(localeUrl('en'));
  });

  it('falls back to the first present locale, in LANGUAGES order, when the fallback language is absent', () => {
    // 'en' (FALLBACK_LANGUAGE) is not in this set, so x-default cannot point
    // at it without advertising a locale the page does not exist in.
    const result = alternateLanguages(['it', 'es']);

    expect(Object.keys(result).sort()).toEqual(['es', 'it', 'x-default']);
    expect(result['x-default']).toBe(localeUrl('it'));
  });

  it('deduplicates and ignores ordering of the input locales', () => {
    const result = alternateLanguages(['es', 'it', 'it']);

    expect(Object.keys(result).sort()).toEqual(['es', 'it', 'x-default']);
  });

  it('carries the path through to every URL, including x-default', () => {
    const result = alternateLanguages(['it'], '/blog/example');

    expect(result.it).toBe(localeUrl('it', '/blog/example'));
    expect(result['x-default']).toBe(localeUrl('it', '/blog/example'));
  });

  it('throws rather than silently emitting an empty hreflang set', () => {
    expect(() => alternateLanguages([])).toThrow();
  });
});
