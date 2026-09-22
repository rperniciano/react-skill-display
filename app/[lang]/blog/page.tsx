import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { translations } from '@/components/translations';

import { isLanguage, LANGUAGES } from '../../i18n';
import { pageMetadata } from '../../seo';
import { publishedArticles } from '../../blog';

type BlogIndexProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: BlogIndexProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const dictionary = translations[lang];

  // The index route itself exists in every locale - it is legitimately
  // allowed to list zero articles - so unlike an individual article it keeps
  // the full hreflang set, the same as the home page.
  return pageMetadata({
    language: lang,
    path: '/blog',
    locales: LANGUAGES,
    title: `${dictionary.blog.title} | Riccardo Perniciano`,
    description: dictionary.blog.description,
  });
}

/**
 * Locale-scoped blog index. Not linked from the Navbar and not in
 * app/sitemap.ts while every article is a draft (see app/blog.ts) - reachable
 * only by visiting the URL directly, which is the point: it proves the
 * pipeline renders correctly without giving a real visitor an empty blog to
 * stumble into.
 */
export default async function BlogIndexPage({ params }: BlogIndexProps) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  const dictionary = translations[lang];
  const articles = publishedArticles()
    .filter((article) => article.locale === lang)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar locales={LANGUAGES} />
      <main className="container mx-auto max-w-3xl px-4 pb-20 pt-32">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          {dictionary.blog.title}
        </h1>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
          {dictionary.blog.description}
        </p>

        {articles.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">{dictionary.blog.empty}</p>
        ) : (
          <ul className="space-y-8">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/${lang}/blog/${article.slug}`}
                  className="text-2xl font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  {article.title}
                </Link>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
