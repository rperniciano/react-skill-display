'use client';

// Language context.
//
// The language is no longer React state fed by `navigator.language` (which does
// not exist while the page is rendered on the server): it is the `[lang]`
// segment of the URL. The server layout reads that segment and hands this
// provider the active language plus *that language's* dictionary slice, and
// `setLanguage` navigates to the sibling locale instead of mutating state.
//
// The value returned by `useLanguage()` is unchanged - `{ language, setLanguage,
// t }` - so every consuming section component keeps working untouched.

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Type-only import: erased at compile time, so the ~39 kB all-locale dictionary
// never reaches the client bundle. The *value* is imported only by server
// modules (app/[lang]/layout.tsx, app/seo.ts), and the layout hands this
// provider one locale's slice as the `dictionary` prop.
import type { translations } from './translations';

// Keep in sync with LANGUAGES in app/i18n.ts (which proxy.ts imports and
// must stay free of this module's React/dictionary weight).
const LANGUAGES = ['it', 'en', 'es'] as const;

export type Language = (typeof LANGUAGES)[number];
export type TranslationType = (typeof translations)['it'];

export function isLanguage(value: string | undefined | null): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  /** Active language, i.e. the `[lang]` route segment. */
  language: Language;
  /** That language's slice of `translations`, passed down by the server layout. */
  dictionary: TranslationType;
}

/**
 * Swap the locale segment of `pathname`, keeping any deeper path intact:
 * ('/it', 'es') -> '/es'   ('/it/blog/post', 'en') -> '/en/blog/post'
 * Exported so <LanguageSelector /> can render real hrefs for the other locales.
 */
export function languageHref(pathname: string | null | undefined, language: Language): string {
  if (!pathname || pathname === '/') {
    return `/${language}`;
  }

  const segments = pathname.split('/');

  if (isLanguage(segments[1])) {
    segments[1] = language;
    return segments.join('/');
  }

  return `/${language}${pathname}`;
}

/**
 * `useRouter()` throws when no App Router is mounted above it, which is the case
 * in the vitest render helper (src/test/utils.tsx). It is a single `useContext`
 * call, so the hook count stays stable whether it returns or throws, and the
 * provider can degrade to a plain document navigation.
 *
 * Exported so <LanguageSelector /> can reuse the same degrade-to-`window.location`
 * behaviour for the locale-fallback links it computes itself (a target locale
 * the current page doesn't exist in), instead of going through `setLanguage`,
 * which always swaps the path and has no notion of "this locale isn't
 * available here".
 */
export function useOptionalRouter(): ReturnType<typeof useRouter> | null {
  try {
    return useRouter();
  } catch {
    return null;
  }
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  language,
  dictionary,
}) => {
  const router = useOptionalRouter();
  const pathname = usePathname();

  // Changing language is a navigation: the URL is the state, so the choice is
  // shareable and indexable.
  const setLanguage = useCallback(
    (next: Language) => {
      const href = languageHref(pathname, next);

      if (router) {
        router.push(href);
        return;
      }

      if (typeof window !== 'undefined') {
        window.location.assign(href);
      }
    },
    [pathname, router],
  );

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage,
      // The active locale's dictionary slice, handed down by the server layout.
      t: dictionary,
    }),
    [dictionary, language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
