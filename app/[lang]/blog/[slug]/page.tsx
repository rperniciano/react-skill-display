import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations } from '@/components/translations';

import { isLanguage, localeUrl } from '../../../i18n';
import { pageMetadata } from '../../../seo';
import { getArticle, localesForSlug, publishedArticles } from '../../../blog';
import { blogPostingJsonLd } from '../../../json-ld';
import JsonLd from '../../../JsonLd';

type ArticlePageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

/**
 * Only the real (locale, slug) pairs that are actually published - see
 * app/blog.ts for what "published" means in and out of production. Combined
 * with `dynamicParams = false` below, a slug that exists but not in the
 * requested locale, or a draft slug in a production build, is a hard 404
 * rather than an on-demand render: nothing about this route is ever server-
 * rendered on request, matching the "everything is SSG" shape of the rest of
 * the site.
 */
export function generateStaticParams() {
  return publishedArticles().map((article) => ({ lang: article.locale, slug: article.slug }));
}

/**
 * Any (lang, slug) not returned by generateStaticParams 404s outright instead
 * of falling through to an on-demand render. This is what actually makes a
 * draft unreachable in production (see app/blog.ts): the slug is absent from
 * generateStaticParams there, so there is no dynamic fallback path left for a
 * direct visit to hit.
 */
export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const article = getArticle(lang, slug);

  if (!article) {
    notFound();
  }

  return pageMetadata({
    language: lang,
    path: `/blog/${slug}`,
    // Derived from what is actually published under this slug, not
    // hand-written per article - see the comment on localesForSlug().
    locales: localesForSlug(slug),
    title: `${article.title} | Riccardo Perniciano`,
    description: article.description,
    article: {
      publishedTime: article.date,
      modifiedTime: article.modifiedDate,
    },
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { lang, slug } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const article = getArticle(lang, slug);

  // Covers both "this slug does not exist" and "this slug exists, but not in
  // `lang`" - getArticle() only matches on the exact (locale, slug) pair, so
  // /it/blog/<an-english-only-slug> lands here same as a slug that does not
  // exist at all.
  if (!article) {
    notFound();
  }

  const dictionary = translations[lang];
  const { default: ArticleBody } = await article.Content();
  const url = localeUrl(lang, `/blog/${slug}`);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <JsonLd data={blogPostingJsonLd(article, url)} />
      {/* Same source generateMetadata() uses for its hreflang set - this
          article's real locale coverage, not the full LANGUAGES list, so the
          selector never links to a translation that doesn't exist. */}
      <Navbar locales={localesForSlug(slug)} />
      <main className="pb-20 pt-32">
        <article className="prose prose-gray mx-auto max-w-3xl px-4 dark:prose-invert">
          <p>
            <Link
              href={`/${lang}/blog`}
              className="text-purple-600 no-underline dark:text-purple-400"
            >
              {dictionary.blog.backToBlog}
            </Link>
          </p>
          <h1>{article.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {dictionary.blog.publishedOn} {article.date}
          </p>
          <ArticleBody />
        </article>
      </main>
      <Footer />
    </div>
  );
}
