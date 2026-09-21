import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  // No @vitejs/plugin-react here: the Vite plugins were dropped with the Vite
  // build. Vitest's built-in esbuild transform handles JSX on its own. The root
  // tsconfig no longer `include`s src/** (it is app-scoped for Next's type
  // check), so the automatic runtime is requested explicitly rather than
  // inferred from tsconfig for test files.
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    css: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
