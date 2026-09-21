import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Nothing to configure yet. Kept as the seam for Phase 2/3 (i18n rewrites,
  // redirects, image domains). Note: Next 16 no longer runs ESLint during
  // `next build`, so there is no `eslint.ignoreDuringBuilds` to set here.
};

export default nextConfig;
