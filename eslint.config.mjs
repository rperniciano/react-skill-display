// Next.js flat ESLint config (replaces the old Vite/react-refresh config).
// eslint-config-next 16 ships flat-config arrays directly, so no FlatCompat needed.
//
// This is intentionally NOT wired into `next build`: Next 16 removed
// lint-during-build entirely (there is no `eslint` key in next.config any more),
// so linting only ever runs via `npm run lint` and can never block a deploy.
import next from 'eslint-config-next/core-web-vitals';

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'dist/**', 'next-env.d.ts'],
  },
  ...next,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

export default config;
