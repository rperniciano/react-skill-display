'use client';

// Enhanced Language Selector Component with responsive design
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languageHref, useLanguage, useOptionalRouter, type Language } from './LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  /**
   * Locales the CURRENT page actually exists in. `Navbar` just forwards
   * whatever its own caller passed it - every page that mounts `<Navbar/>`
   * already computes this same list for its own `pageMetadata({ locales })`
   * call (see app/[lang]/page.tsx, the blog article route, the /servizi
   * pages), so this prop is simply the second consumer of a value each page
   * already has - nothing new to fetch or thread through context.
   *
   * Omitted (the default) means "all three": the safe assumption for a page
   * that says nothing about its locale coverage, and what keeps the home
   * page's selector working unchanged without passing anything.
   */
  locales?: readonly Language[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ locales }) => {
  const { language } = useLanguage();
  const pathname = usePathname();
  const router = useOptionalRouter();

  const languages = [
    { code: 'it', name: 'Italiano', shortName: 'IT', flag: '🇮🇹' },
    { code: 'en', name: 'English', shortName: 'EN', flag: '🇬🇧' },
    { code: 'es', name: 'Español', shortName: 'ES', flag: '🇪🇸' }
  ] as const;

  const currentLang = languages.find(l => l.code === language);

  // Everything this page actually exists in. Falls back to every locale in
  // `languages` above (not a separately-maintained list) so there is exactly
  // one place in this file that says what "all three" means.
  const availableLocales = locales ?? languages.map((lang) => lang.code);

  /**
   * Where picking `target` should go. When this page exists in `target`,
   * that's the sibling URL, same as always. When it doesn't - a blog article
   * or a /servizi page published in a subset of locales - swapping the path
   * the way `languageHref` does would land on a 404, so this falls back to
   * that locale's home page instead: a visitor who can't read the current
   * page but can read `target` gets a working site in their language rather
   * than a dead end.
   */
  const hrefFor = (target: Language): string =>
    availableLocales.includes(target) ? languageHref(pathname, target) : `/${target}`;

  // Same "no App Router above us" degrade `setLanguage` uses in
  // LanguageContext, reused via `useOptionalRouter` rather than going through
  // `setLanguage` itself: `setLanguage` always swaps the path segment and has
  // no notion of a locale the current page doesn't have, which is exactly
  // what `hrefFor` above accounts for.
  const navigateTo = (href: string) => {
    if (router) {
      router.push(href);
      return;
    }

    if (typeof window !== 'undefined') {
      window.location.assign(href);
    }
  };

  return (
    <>
      {/*
        Picking a language is a navigation: to the sibling URL when this page
        exists in the target locale, or to that locale's home page when it
        doesn't (see hrefFor above) - either way the URL (and therefore the
        rendered language) is shareable instead of living in component state.
      */}
      <Select value={language} onValueChange={(value) => navigateTo(hrefFor(value as Language))}>
        <SelectTrigger className="w-[110px] sm:w-[140px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
          <SelectValue>
            {currentLang && (
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span className="hidden sm:inline font-medium">{currentLang.name}</span>
                <span className="sm:hidden font-medium">{currentLang.shortName}</span>
              </span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 shadow-lg">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:bg-purple-50 dark:focus:bg-purple-900/20 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/*
        The Radix listbox only exists in the DOM while it is open, so a crawler
        never sees the other two locales. These are the same destinations as
        the Select above (see hrefFor): no visual change (sr-only), but the
        alternates are discoverable and keyboard/no-JS reachable.

        `hrefLang` is set only when the link actually lands on a translation
        of this page. It asserts a translation relationship, and a fallback
        link to another locale's home page isn't one - tagging it anyway would
        repeat, in the body, the same false claim app/i18n.ts's
        alternateLanguages() exists to prevent in the <head>.
      */}
      <nav aria-label="Language" className="sr-only">
        {languages.map((lang) => {
          const isTranslation = availableLocales.includes(lang.code);
          return (
            <Link
              key={lang.code}
              href={hrefFor(lang.code)}
              hrefLang={isTranslation ? lang.code : undefined}
              prefetch={false}
            >
              {lang.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default LanguageSelector;
