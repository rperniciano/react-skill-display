import type { ComponentType } from 'react';
import { z } from 'zod';

import { LANGUAGES, type Language } from './i18n';

/**
 * Blog content plumbing.
 *
 * There is no CMS and no filesystem scan: every article is one entry in
 * `SOURCES` below, pointing at one MDX file under content/blog/<locale>/. That
 * keeps `Content` a plain `import()` with a literal string argument, which is
 * the form both webpack and Turbopack's MDX rule can statically analyse -
 * a templated path (`import(`../content/blog/${locale}/${slug}.mdx`)`) is not
 * guaranteed to work under Turbopack and was deliberately avoided.
 *
 * Metadata lives here, not inside the MDX file as a `export const meta = …`.
 * That keeps it synchronously readable (the index and the sitemap need the
 * whole list without compiling every article body) and, combined with
 * `articleMetaSchema.parse()` below, validated: a malformed entry throws the
 * moment this module is evaluated, which happens during `next build` (every
 * consumer - the index, the article route, the sitemap - imports it), so a
 * broken article fails the build instead of shipping.
 */

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const articleMetaSchema = z.object({
  slug: z.string().regex(SLUG_PATTERN, 'slug must be lowercase kebab-case'),
  /**
   * The single locale this MDX file's prose is written in. (Not "locales,
   * plural": one MDX file is one language's content. A slug published as
   * separate files in more than one locale - not the case for anything
   * planned today - is handled generically by `localesForSlug()` below,
   * which is what actually feeds `alternateLanguages()`.)
   */
  locale: z.enum(LANGUAGES),
  title: z.string().min(1),
  description: z.string().min(1).max(300),
  date: z.string().regex(ISO_DATE_PATTERN, 'date must be an ISO YYYY-MM-DD string'),
  modifiedDate: z
    .string()
    .regex(ISO_DATE_PATTERN, 'modifiedDate must be an ISO YYYY-MM-DD string')
    .optional(),
  draft: z.boolean(),
});

export type ArticleMeta = z.infer<typeof articleMetaSchema>;

export interface Article extends ArticleMeta {
  /** Lazily loads the compiled MDX component for this article's body. */
  Content: () => Promise<{ default: ComponentType }>;
}

interface ArticleSource {
  meta: z.input<typeof articleMetaSchema>;
  Content: Article['Content'];
}

const SOURCES: ArticleSource[] = [
  {
    meta: {
      slug: 'model-context-protocol-a-practical-primer',
      locale: 'en',
      title: 'Model Context Protocol: a practical primer',
      description:
        'Draft fixture for the blog pipeline: what MCP is, why it matters for AI tooling, and how a .NET backend exposes tools to a model through it. Not published.',
      date: '2026-09-21',
      draft: true,
    },
    Content: () => import('../content/blog/en/model-context-protocol-a-practical-primer.mdx'),
  },
  {
    meta: {
      slug: 'ai-act-articolo-4-testo-aggiornato',
      locale: 'it',
      title: "Articolo 4 dell'AI Act: il testo è cambiato il 27 luglio 2026",
      description:
        "L'articolo 4 dell'AI Act sull'alfabetizzazione in materia di IA è cambiato il 27 luglio 2026 con il Digital Omnibus. Cosa dice oggi il testo, da quando si applica davvero e cosa serve in pratica per dimostrare le misure adottate.",
      date: '2026-09-22',
      draft: false,
    },
    Content: () => import('../content/blog/it/ai-act-articolo-4-testo-aggiornato.mdx'),
  },
  {
    meta: {
      slug: 'ai-on-premise-pa',
      locale: 'it',
      title: "Perché un'AI per la pubblica amministrazione deve girare on-premise",
      description:
        "Perché un ente pubblico che automatizza documenti con l'IA finisce per aver bisogno di un'infrastruttura on-premise, un server MCP di dominio senza SQL diretto, un secondo server MCP per i file con permessi NTFS, e cosa costa davvero quella scelta.",
      date: '2026-09-22',
      draft: false,
    },
    Content: () => import('../content/blog/it/ai-on-premise-pa.mdx'),
  },
  {
    meta: {
      slug: 'fusing-360-panoramas-into-walkable-3d-space',
      locale: 'en',
      title: 'Reconstructing a Walkable 3D Space From 360° Panoramas, Without Inventing Geometry',
      description:
        'Filling the blind spots of a single 360° panorama by fusing it with a second one of the same room: verifying the match with dense feature matching and MAGSAC, then aligning with RANSAC, Umeyama and ICP - real photographed geometry, not invented, with measured results.',
      date: '2026-09-22',
      draft: false,
    },
    Content: () => import('../content/blog/en/fusing-360-panoramas-into-walkable-3d-space.mdx'),
  },
  {
    meta: {
      slug: 'fusing-360-panoramas-into-walkable-3d-space',
      locale: 'it',
      title: 'Ricostruire uno spazio 3D esplorabile da panoramiche a 360°, senza inventare geometria',
      description:
        "Riempire i punti ciechi di una panoramica a 360° fondendola con una seconda panoramica della stessa stanza: verifico la corrispondenza con feature matching denso e MAGSAC, poi allineo con RANSAC, Umeyama e ICP - geometria realmente fotografata, non inventata, con risultati misurati.",
      date: '2026-09-22',
      draft: false,
    },
    Content: () => import('../content/blog/it/fusing-360-panoramas-into-walkable-3d-space.mdx'),
  },
];

/** The full catalogue, drafts included, metadata-validated at import time. */
export const ARTICLES: Article[] = SOURCES.map((source) => ({
  ...articleMetaSchema.parse(source.meta),
  Content: source.Content,
}));

/**
 * Pure filtering, deliberately kept apart from `process.env` so it is trivial
 * to unit test without stubbing the environment: given a fixed list and a
 * flag, which items are published. `publishedArticles()` below is the only
 * caller that actually reads `NODE_ENV`.
 */
export function selectPublished(
  items: readonly Article[],
  { includeDrafts }: { includeDrafts: boolean },
): Article[] {
  return items.filter((item) => includeDrafts || !item.draft);
}

/**
 * Drafts are visible in `next dev` (and any non-production build) so they can
 * be previewed, and genuinely gone - not just unlisted, but unreachable, see
 * `dynamicParams = false` in app/[lang]/blog/[slug]/page.tsx - once
 * `next build`/`next start` runs with `NODE_ENV=production`. This is the one
 * spot that decision is made; the index, the sitemap and
 * `generateStaticParams` all go through `publishedArticles()`.
 */
const INCLUDE_DRAFTS = process.env.NODE_ENV !== 'production';

export function publishedArticles(): Article[] {
  return selectPublished(ARTICLES, { includeDrafts: INCLUDE_DRAFTS });
}

/** The published article at (locale, slug), or `undefined` if there is none. */
export function getArticle(locale: Language, slug: string): Article | undefined {
  return publishedArticles().find(
    (article) => article.locale === locale && article.slug === slug,
  );
}

/**
 * Every locale a given slug is published in, in canonical `LANGUAGES` order.
 * Almost always a single-element array today - every planned article exists
 * in exactly one locale - but a slug published in more than one locale falls
 * out of the same logic rather than needing a special case. This is what
 * `generateMetadata` for an article passes to `pageMetadata({ locales })`, so
 * the hreflang set is derived from what is actually published rather than
 * hand-maintained per article.
 */
export function localesForSlug(slug: string): Language[] {
  const published = publishedArticles();
  return LANGUAGES.filter((language) =>
    published.some((article) => article.locale === language && article.slug === slug),
  );
}
