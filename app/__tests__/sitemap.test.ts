import { describe, it, expect } from 'vitest';

import sitemap from '../sitemap';
import { SITE_URL } from '../i18n';

describe('sitemap', () => {
  it('still emits exactly the three home pages, each with the full hreflang set', () => {
    const entries = sitemap();
    const homeEntries = entries.filter((entry) => /^\/(it|en|es)$/.test(entry.url.replace(SITE_URL, '')));

    expect(homeEntries).toHaveLength(3);
    for (const entry of homeEntries) {
      expect(Object.keys(entry.alternates!.languages!).sort()).toEqual(['en', 'es', 'it', 'x-default']);
    }
  });

  it('gives a blog article route only the hreflang set for the locale(s) it is published in', () => {
    // Under vitest's NODE_ENV (not 'production'), publishedArticles()
    // includes the draft fixture - same as `next dev` - alongside the two
    // published Italian articles, so all three URLs are expected to show up
    // here. The production build excludes the draft entirely (see
    // app/__tests__/blog.test.ts for the draft-exclusion logic itself, and
    // the task's curl verification for the real production sitemap).
    const entries = sitemap();
    const articleEntries = entries.filter((entry) => entry.url.includes('/blog/'));

    expect(articleEntries).toHaveLength(3);

    const draftEntry = articleEntries.find((entry) =>
      entry.url.endsWith('/blog/model-context-protocol-a-practical-primer'),
    );
    expect(draftEntry?.url).toBe(`${SITE_URL}/en/blog/model-context-protocol-a-practical-primer`);
    expect(Object.keys(draftEntry!.alternates!.languages!).sort()).toEqual(['en', 'x-default']);

    for (const slug of ['ai-act-articolo-4-testo-aggiornato', 'ai-on-premise-pa']) {
      const entry = articleEntries.find((item) => item.url.endsWith(`/blog/${slug}`));
      expect(entry?.url).toBe(`${SITE_URL}/it/blog/${slug}`);
      expect(Object.keys(entry!.alternates!.languages!).sort()).toEqual(['it', 'x-default']);
    }
  });
});
