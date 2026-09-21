import Link from 'next/link';

import { LANGUAGES } from '../i18n';

const LANGUAGE_NAMES: Record<(typeof LANGUAGES)[number], string> = {
  it: 'Italiano',
  en: 'English',
  es: 'Español',
};

/**
 * 404 boundary for everything under /[lang].
 *
 * It cannot read the route params (not-found.tsx receives no props), and an
 * unknown locale segment is exactly one of the cases that lands here - so the
 * copy stays language-neutral and offers all three locale home pages instead of
 * guessing.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">404</h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-400">Page not found</p>
        <nav aria-label="Available languages" className="flex items-center justify-center gap-4">
          {LANGUAGES.map((language) => (
            <Link
              key={language}
              href={`/${language}`}
              hrefLang={language}
              className="text-purple-600 underline hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              {LANGUAGE_NAMES[language]}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
