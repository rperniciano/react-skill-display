# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Riccardo Perniciano's professional portfolio - a Next.js App Router application showcasing a Mid-Senior Full Stack Developer's skills, experience, and projects. The portfolio features multi-language support (Italian, English, Spanish) as three server-rendered routes, dark/light theme switching, interactive data visualizations, and a component-based architecture.

It was migrated from a Vite + React SPA to Next.js. Anything that still reads like a Vite project (a `vite.config.ts`, an `index.html`, a client-side router, a `preview` script) is gone - do not reintroduce it.

## Development Commands

### Core Development Commands
- `npm run dev` - Start the Next dev server (`next dev`) on port 3000
- `npm run build` - Production build (`next build`), prerenders `/it`, `/en`, `/es`
- `npm run start` - Serve the production build (`next start`)
- `npm run lint` - Run ESLint (`eslint-config-next`)
- `npm run test` - Run tests with Vitest
- `npx tsc --noEmit` - Type-check `app/`, `src/` and `proxy.ts`

Note: Next 16 removed lint-during-build, so `npm run lint` is the only place ESLint runs and it can never block a deploy. `next build` does run the TypeScript check.

### Testing Commands
- `npm run test` - Run all tests with Vitest (watch mode); `npx vitest run` for a single pass
- Tests are located in `src/components/__tests__/` and `src/hooks/__tests__/`
- Test setup configuration in `src/test/setup.ts`; the provider wrapper is `src/test/utils.tsx`
- `renderWithProviders()` mounts the app in **Italian**, passing `language="it"` and `dictionary={translations.it}` explicitly. Assertions must match the Italian copy.

## Architecture & Code Structure

### Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS with custom design system, Radix UI components
- **State Management**: React Context API for language; `next-themes` for theme
- **Routing**: App Router file-system routing under `app/[lang]/`; no client-side router
- **Testing**: Vitest with React Testing Library
- **Data Visualization**: Recharts for interactive charts
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms, driven by IntersectionObserver

### Routing & `[lang]`

- `/` has no page. `proxy.ts` (the Next 16 `proxy` convention that replaced `middleware.ts`) reads `Accept-Language` and issues a **307** to `/it`, `/en` or `/es`; anything with a file extension, `/_next/*` and `/api/*` pass straight through. Its `config.matcher` is `'/((?!_next/|api/)[^.]*)'` - written with `[^.]*` rather than an escaped `\.`, because a single backslash inside a JS string literal is swallowed and the exclusion silently stops working.
- **`app/[lang]/layout.tsx` IS the root layout. There is deliberately no `app/layout.tsx`.** Only a root layout may render `<html>`/`<body>`, and only a layout inside `[lang]` receives the locale segment - which is the only way to emit a dynamic `<html lang>`.
- `dynamicParams = false` + `generateStaticParams()` means the three locales are prerendered as static HTML and any other segment 404s.
- `app/sitemap.ts` and `app/robots.ts` sit outside `[lang]` because metadata routes take no layout.
- `app/favicon.ico` uses the metadata file convention, so Next emits the `<link rel="icon">` itself. Do not put a favicon in `public/` - it conflicts with the app route.

### Key Architectural Patterns

#### Multi-Language System
- **Translations**: `src/components/translations.ts` holds all text content in Italian, English and Spanish, keyed by locale.
- **Server slices the dictionary**: `app/[lang]/layout.tsx` reads the `[lang]` segment and passes `language` plus `translations[lang]` to `<LanguageProvider>`. **Both props are required.** Only the active locale's slice crosses the server → client boundary.
- **Never import `translations` from a `"use client"` module as a value.** `LanguageContext.tsx` imports it with `import type` only; a value import there drags all three dictionaries (~31 kB) into the client bundle.
- **Language Context**: `src/components/LanguageContext.tsx` exposes `useLanguage() => { language, setLanguage, t }`. `setLanguage` is a navigation to the sibling locale URL, not state.
- **Browser detection** happens once, server-side, in `proxy.ts` - not from `navigator.language`.
- **Per-locale SEO**: `app/seo.ts` (`pageMetadata()`) builds title, description, canonical and the four `hreflang` alternates from `app/i18n.ts`. It reads the full dictionary, so it is server-only.

#### Theme System
- **Theme Provider**: `src/components/theme-provider.tsx`, a thin wrapper over `next-themes`, mounted once in the root layout. It injects a blocking inline script so there is no flash of the wrong theme; `<html>` carries `suppressHydrationWarning` for that reason.
- **Adapter**: `src/hooks/useTheme.tsx` exposes the original `{ theme, toggleTheme }` API over `next-themes`. Import `ThemeProvider` from `@/components/theme-provider` - the hook file no longer re-exports it.
- **Dark/Light Mode**: Persisted under the `theme` localStorage key; Tailwind is `darkMode: 'class'`.

#### Component Architecture
- **UI Components**: Reusable design system components in `src/components/ui/`
- **Section Components**: Main portfolio sections (Hero, Skills, Experience, Projects, About, Contact), mounted directly by `app/[lang]/page.tsx`
- **Layout Components**: Navigation and Footer
- **Data Components**: Portfolio data and skill definitions in `src/components/portfolio-data.ts`
- Every component that uses hooks, state or browser APIs needs `"use client"` at the top. The section components all have it.

### File Structure Conventions
```
app/                     # App Router
├── [lang]/
│   ├── layout.tsx       # ROOT layout: <html lang>, providers, base metadata
│   ├── page.tsx         # Locale home page (mounts every section)
│   └── not-found.tsx    # 404 boundary under /[lang]
├── globals.css          # The single global stylesheet
├── i18n.ts              # LANGUAGES, SITE_URL, canonical + hreflang helpers
├── seo.ts               # pageMetadata() (server-only)
├── sitemap.ts           # -> /sitemap.xml
├── robots.ts            # -> /robots.txt
└── favicon.ico          # Metadata file convention
proxy.ts                 # Accept-Language -> 307 to /it | /en | /es
src/
├── components/          # React components (client)
│   ├── ui/              # Reusable UI components (buttons, cards, etc.)
│   ├── __tests__/       # Component tests
│   ├── LanguageContext.tsx    # Language management
│   ├── translations.ts        # All translation strings
│   ├── portfolio-data.ts      # Static skill/experience/project data
│   └── [ComponentName].tsx    # Main portfolio sections
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── test/                # Test configuration and the provider wrapper
```

### Component Naming Conventions
- Use PascalCase for component files: `Hero.tsx`, `SkillCard.tsx`
- Use descriptive names that indicate the component's purpose
- UI components follow shadcn/ui naming conventions in lowercase with hyphens

### Styling Conventions
- **Tailwind CSS**: Utility-first approach with custom design tokens
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Dark Mode**: Uses `dark:` prefix for dark mode styles
- **Custom Colors**: Portfolio uses gradient-based color scheme with blue/purple theme

### State Management Patterns
- **Language State**: Global context for language switching
- **Theme State**: Custom hook with localStorage persistence  
- **Local State**: useState for component-specific state
- **No External State Library**: Uses React's built-in state management

### Data Management
- **Static Data**: Portfolio content, skills, and experience data in TypeScript files
- **Type Definitions**: Strong typing for skills, experience items, project data
- **Translation Data**: Structured translation objects with type safety

## Important Notes

### Multi-Language Support
- All user-facing text must be added to `src/components/translations.ts`, in all three locales
- Use the `useLanguage()` hook to access translations: `const { t } = useLanguage()`
- Language switching is handled by the LanguageSelector component, which navigates to the sibling locale URL
- Some sections (notably `Skills.tsx`) still carry copy inline as `language === 'it' ? … : …` ternaries rather than in `translations.ts`. Check there too before concluding a string is missing.
- Adding a locale means editing `LANGUAGES` in **both** `app/i18n.ts` and `src/components/LanguageContext.tsx`, plus `OG_LOCALES` and `alternateLanguages()`

### Theme System Integration
- Components should support both light and dark themes using Tailwind's `dark:` prefix
- Theme switching is handled by the ThemeToggle component in the Navbar

### Performance Considerations
- Components use React.memo() where appropriate for performance optimization
- Images should be optimized and use appropriate loading strategies
- Turbopack handles code splitting and bundling optimization
- Keep the server/client boundary honest: the biggest single win available was keeping `translations.ts` out of the client bundle

### Testing Guidelines
- Tests are set up with Vitest and React Testing Library
- Component tests focus on user interactions and accessibility
- Test files use `.test.tsx` extension
- The suite renders in Italian (see `src/test/utils.tsx`). When a test fails on copy, fix the assertion - do not edit the translation string to make a test pass.

### Portfolio Content Updates
- Skills and experience data can be updated in `src/components/portfolio-data.ts`
- New sections should follow the established component patterns
- Ensure all new content is properly translated in all three languages