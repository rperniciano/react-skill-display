import type { MDXComponents } from 'mdx/types';

/**
 * Required by @next/mdx under the App Router: without this file, its
 * Turbopack rule falls back to a provider-import path that throws
 * (`createContext is not a function`) the moment a real article's MDX
 * component is evaluated as its own chunk - see the `Content: () =>
 * import(...)` lazy loader in app/blog.ts. That path had never actually run
 * in a production build before, because the only fixture article predating
 * this file was an English draft, and drafts are excluded from
 * generateStaticParams once NODE_ENV is 'production' (see
 * `INCLUDE_DRAFTS` in app/blog.ts) - so `next build` never previously
 * prerendered any article body.
 *
 * No custom component mapping is needed: article bodies are styled by the
 * `.prose` wrapper in app/[lang]/blog/[slug]/page.tsx, not by overriding
 * individual MDX elements here.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return components;
}
