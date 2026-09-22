import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Nothing else to configure yet. Kept as the seam for Phase 2/3 (i18n
  // rewrites, redirects, image domains). Note: Next 16 no longer runs ESLint
  // during `next build`, so there is no `eslint.ignoreDuringBuilds` to set
  // here.
  //
  // `pageExtensions` is deliberately left at its default (no 'mdx'/'md'):
  // article content lives under content/blog/, not under app/, and is loaded
  // with a plain `import()` from app/blog.ts - it is never itself a route
  // file, so there is nothing for Next's page scanner to pick up.
};

// Registers the MDX loader (webpack) / MDX rule (Turbopack - see
// node_modules/@next/mdx, gated on `process.env.TURBOPACK`) so that any
// `.mdx` file reachable from an import - specifically the files under
// content/blog/ - compiles to a React component. No plugin options: the
// article body is plain Markdown-in-JSX (headings, tables, code fences,
// paragraphs); nothing here needs remark/rehype plugins yet.
// remark-gfm is named as a STRING, not imported as a function. Turbopack runs
// the MDX pipeline in Rust and cannot receive a JavaScript function, so the
// widely documented remarkPlugins: [remarkGfm] form does not apply here - see
// node_modules/next/dist/docs/01-app/02-guides/mdx.md, "Using Plugins with
// Turbopack". Without gfm, a pipe-syntax Markdown table in an article renders
// as literal text, with no error and no warning.
const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
  },
});

export default withMDX(nextConfig);
