import { ImageResponse } from 'next/og';

import { getArticle } from '../../../blog';
import { isLanguage } from '../../../i18n';

/**
 * Per-article Open Graph image, generated at build time via `ImageResponse`
 * (next/og - satori + resvg under the hood, see node_modules/next/dist/docs/
 * 01-app/03-api-reference/04-functions/image-response.md). Co-located with
 * page.tsx so it inherits this segment's dynamic params; the (lang, slug)
 * pairs actually rendered are the same ones page.tsx's `generateStaticParams`
 * returns and `dynamicParams = false` locks in - an unpublished or unknown
 * pair 404s on the page itself before a crawler ever requests this image.
 *
 * Neither function below calls `notFound()` for a pair with no article, even
 * though page.tsx does exactly that. `next build`'s "Collecting page data"
 * step calls `generateImageMetadata` itself, outside of rendering a real
 * request, to enumerate this route's static params; `notFound()` throws
 * `NEXT_HTTP_ERROR_FALLBACK` expecting a Next request/render context to catch
 * it and produce a 404 response, and that context isn't there during
 * collection - the throw is uncaught and fails the whole build. Returning an
 * empty array (no images for that pair) and, in the exported `Image`
 * component, a plain fallback card are the non-throwing equivalents.
 *
 * `alt` is generated per article/locale via `generateImageMetadata`, not a
 * plain `export const alt = '...'`: a static export is one string shared by
 * every slug this file matches (both /it/blog/<slug> and /en/blog/<slug> for
 * the fusion article), which cannot "describe the image usefully for the
 * article it belongs to" the way a per-route value can. Returning a single
 * item is enough - this route only ever needs one image, not a set - but
 * `generateImageMetadata` is the documented way to make that one item's
 * metadata (`alt` here) depend on `params`; a static `alt` export cannot.
 *
 * No custom font: next/og's default is Geist Regular, bundled inside Next
 * itself (node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf) -
 * already on disk, so using it adds no dependency and no build-time network
 * fetch. It ships as a single weight, so `fontWeight` below has no visible
 * effect; hierarchy comes from `fontSize` and color instead.
 */

export const size = { width: 1200, height: 630 };

export const contentType = 'image/png';

const SITE_NAME = 'Riccardo Perniciano';
const DOMAIN = 'riccardoperniciano.com';

// Dark navy -> purple gradient, matching public/og-image.png (the static
// card every non-article page still uses) so a shared article link and a
// shared home-page link read as the same visual system. #9333ea is
// Tailwind's purple-600, the site's accent color - see tailwind.config.ts
// and e.g. the purple-600 accents in src/components/About.tsx.
const BACKGROUND = 'linear-gradient(135deg, #0b0714 0%, #1b0e34 45%, #3a1268 85%, #4c1d95 100%)';

type ImageParams = { lang: string; slug: string };

function resolveArticle({ lang, slug }: ImageParams) {
  if (!isLanguage(lang)) {
    return undefined;
  }

  return getArticle(lang, slug);
}

export async function generateImageMetadata({ params }: { params: ImageParams }) {
  const article = resolveArticle(params);

  // No article for this (lang, slug) - nothing to generate an id for. See
  // the file-level comment on why this returns instead of calling
  // `notFound()`. Unreachable in practice for a real request either way:
  // page.tsx's own `dynamicParams = false` 404s an unpublished or unknown
  // pair before a crawler ever gets far enough to request this image.
  if (!article) {
    return [];
  }

  return [
    {
      id: 'default',
      alt: `${article.title} — ${SITE_NAME}`,
      size,
      contentType,
    },
  ];
}

type ImageProps = {
  params: Promise<ImageParams>;
};

function frame(children: React.ReactNode) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '76px 84px',
        background: BACKGROUND,
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          width: 72,
          height: 7,
          borderRadius: 4,
          background: '#9333ea',
        }}
      />
      {children}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#d8b4fe' }}>{SITE_NAME}</div>
        <div style={{ fontSize: 22, fontWeight: 600, color: '#9333ea', marginTop: 6 }}>
          {DOMAIN}
        </div>
      </div>
    </div>
  );
}

export default async function Image({ params }: ImageProps) {
  const article = resolveArticle(await params);

  // See the file-level comment: no `notFound()` here either, so a stray
  // build-time call with an unresolved pair renders a plain fallback card
  // instead of crashing the build. A real request never reaches this branch
  // - `generateImageMetadata` above only mints an id for a real article, and
  // page.tsx 404s anything else first.
  return new ImageResponse(
    frame(
      <div style={{ display: 'flex', maxWidth: 1000 }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#ffffff',
            letterSpacing: -1,
          }}
        >
          {article ? article.title : SITE_NAME}
        </div>
      </div>,
    ),
    { ...size },
  );
}
