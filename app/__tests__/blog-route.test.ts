import { describe, it, expect } from 'vitest';

import ArticlePage, {
  generateMetadata,
  generateStaticParams,
  dynamicParams,
} from '../[lang]/blog/[slug]/page';
import { getArticle } from '../blog';

const DRAFT_SLUG = 'model-context-protocol-a-practical-primer';

// The article route is fully static: `dynamicParams = false` means any (lang,
// slug) pair generateStaticParams did not return is a hard 404, with no
// on-demand render to fall back to. These tests call the page module's
// exported functions directly (they are plain async functions - Next never
// needs a running server to execute them), which is enough to exercise the
// notFound() paths: `notFound()` just throws a plain Error with a digest, see
// next/navigation.

describe('blog article route: dynamicParams', () => {
  it('is false, so nothing here is ever rendered on demand', () => {
    expect(dynamicParams).toBe(false);
  });
});

describe('blog article route: generateStaticParams', () => {
  it('only pairs a slug with the locale(s) it is actually published in', () => {
    const params = generateStaticParams();

    for (const { lang, slug } of params) {
      expect(slug).toBeTruthy();
      // The fixture is English-only; nothing in today's catalogue should
      // produce an 'it' or 'es' entry for it.
      if (slug === DRAFT_SLUG) {
        expect(lang).toBe('en');
      }
    }
  });
});

describe('blog article route: slug not published in the requested locale', () => {
  it('generateMetadata calls notFound() for /it/blog/<english-only-slug>', async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ lang: 'it', slug: DRAFT_SLUG }) }),
    ).rejects.toThrow();
  });

  it('the page component calls notFound() for /it/blog/<english-only-slug>', async () => {
    await expect(
      ArticlePage({ params: Promise.resolve({ lang: 'it', slug: DRAFT_SLUG }) }),
    ).rejects.toThrow();
  });

  it('both 404 for a slug that does not exist in any locale', async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ lang: 'en', slug: 'no-such-article' }) }),
    ).rejects.toThrow();
    await expect(
      ArticlePage({ params: Promise.resolve({ lang: 'en', slug: 'no-such-article' }) }),
    ).rejects.toThrow();
  });
});

describe('blog article route: the correct (locale, slug) pair', () => {
  it('generateMetadata resolves and carries a partial hreflang set', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ lang: 'en', slug: DRAFT_SLUG }),
    });

    const languages = metadata.alternates?.languages as Record<string, string>;
    expect(Object.keys(languages).sort()).toEqual(['en', 'x-default']);
    const openGraph = (metadata.openGraph ?? {}) as Record<string, unknown>;
    expect(openGraph.type).toBe('article');
  });

  it('resolves the article and wires up a loader for its MDX body', () => {
    // The page component's own render (which awaits article.Content(), i.e.
    // actually compiles the .mdx file) goes through Next's bundler - MDX
    // compilation is wired into next.config.ts, not into vitest.config.ts, so
    // it is exercised by `npm run build` / `npm run dev` instead of here.
    // What is unit-testable without that pipeline is that routing resolves
    // to the right article and that it carries a loader.
    const article = getArticle('en', DRAFT_SLUG);

    expect(article).toBeDefined();
    expect(typeof article?.Content).toBe('function');
  });
});
