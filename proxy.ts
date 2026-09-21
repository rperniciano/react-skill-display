import { NextResponse, type NextRequest } from 'next/server';

import { FALLBACK_LANGUAGE, isLanguage, type Language } from './app/i18n';

/**
 * Locale entry point.
 *
 * `/` has no page of its own (the root layout lives at `app/[lang]/layout.tsx`),
 * so this sends the visitor to `/it`, `/en` or `/es`. Locale-prefixed URLs and
 * anything asset-shaped are passed straight through.
 *
 * This is the Next 16 `proxy` file convention (`middleware.ts` + `export
 * function middleware` are deprecated); same runtime, same `config.matcher`.
 */

/** Anything with a file extension: the five CV PDFs, favicon.ico, images... */
const HAS_EXTENSION = /\.[^/]+$/;

/**
 * Same rules the old client-side `detectBrowserLanguage()` applied to
 * `navigator.language`: starts-with `it` -> it, starts-with `es` -> es,
 * everything else -> en.
 *
 * `Accept-Language` is a q-weighted list rather than a single tag, so the
 * highest-priority tag is the one that stands in for `navigator.language`.
 */
export function detectLanguage(acceptLanguage: string | null): Language {
  if (!acceptLanguage) {
    return FALLBACK_LANGUAGE;
  }

  const preferred = acceptLanguage
    .split(',')
    .map((part, index) => {
      const [tag, ...parameters] = part.trim().split(';');
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='));

      return {
        tag: tag.trim().toLowerCase(),
        // Missing q means 1 (RFC 9110); `index` keeps the sort stable so ties
        // resolve to the order the browser sent.
        quality: quality ? Number.parseFloat(quality.slice(2)) || 0 : 1,
        index,
      };
    })
    .filter((entry) => entry.tag.length > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)[0];

  if (!preferred) {
    return FALLBACK_LANGUAGE;
  }

  if (preferred.tag.startsWith('it')) return 'it';
  if (preferred.tag.startsWith('es')) return 'es';

  return FALLBACK_LANGUAGE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Belt and braces: the matcher below already excludes these, but a proxy that
  // can accidentally rewrite /CV_Riccardo_Perniciano_2026_ITA.pdf is not worth
  // the risk.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    HAS_EXTENSION.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already locale-prefixed (/it, /en/blog/...): nothing to do.
  const firstSegment = pathname.split('/')[1];
  if (isLanguage(firstSegment)) {
    return NextResponse.next();
  }

  const language = detectLanguage(request.headers.get('accept-language'));

  const url = request.nextUrl.clone();
  // '/' -> '/en'; a future locale-less '/blog' -> '/en/blog'. Search params and
  // hash survive the clone.
  url.pathname = pathname === '/' ? `/${language}` : `/${language}${pathname}`;

  // 307: the destination depends on the visitor, so it must not be cached as a
  // permanent redirect, and shared caches have to key on the header.
  const response = NextResponse.redirect(url);
  response.headers.set('Vary', 'Accept-Language');

  return response;
}

export const config = {
  matcher: [
    // Everything except Next internals, API routes and anything containing a
    // dot, i.e. a file in public/ (the five CV PDFs, favicon.ico, the images)
    // plus the generated /sitemap.xml and /robots.txt.
    //
    // `[^.]*` rather than a lookahead on an escaped dot on purpose: the matcher
    // is a path-to-regexp *string*, so a single-\ escape is swallowed by the
    // JS string literal and the exclusion silently stops working.
    '/((?!_next/|api/)[^.]*)',
  ],
};
