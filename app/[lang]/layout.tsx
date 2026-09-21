import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Analytics } from '@vercel/analytics/next';

import { LanguageProvider } from '@/components/LanguageContext';
import { ThemeProvider } from '@/components/theme-provider';
import { translations } from '@/components/translations';

import { LANGUAGES, SITE_URL, isLanguage } from '../i18n';

// The single global stylesheet, imported exactly once in the whole app.
import '../globals.css';

/**
 * THIS IS THE ROOT LAYOUT.
 *
 * There is no `app/layout.tsx` on purpose. A root layout is the only place that
 * may render <html>/<body>, and it cannot receive route params - so with the
 * language in the path the only way to emit a *dynamic* `<html lang>` is to let
 * the `[lang]` layout be the root one. This is the shape Next's own i18n guide
 * uses; `app/sitemap.ts` / `app/robots.ts` sit outside the segment because they
 * are metadata routes and need no layout.
 */

// Only the three locales exist. Anything else 404s instead of being rendered on
// demand, which also keeps the three pages fully static.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

/**
 * Site-wide defaults. Page-specific metadata (localised title/description,
 * canonical, hreflang, OpenGraph) is produced per route by `pageMetadata()` in
 * `app/seo.ts`; these values only survive where a page sets nothing.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Riccardo Perniciano Portfolio',
  description: 'Riccardo Perniciano Portfolio',
  authors: [{ name: 'Riccardo Perniciano' }],
};

// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isLanguage(lang)) {
    notFound();
  }

  return (
    // suppressHydrationWarning: next-themes sets the `dark` class on <html>
    // before hydration, which would otherwise trip a mismatch warning.
    <html lang={lang} suppressHydrationWarning>
      <body>
        {/*
          Only the active locale's slice of the dictionary crosses the server ->
          client boundary, instead of all three.
        */}
        <LanguageProvider language={lang} dictionary={translations[lang]}>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
