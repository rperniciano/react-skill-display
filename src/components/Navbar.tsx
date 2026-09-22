"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Every anchor below is a section id that only exists on the locale home
  // page (app/[lang]/page.tsx). Prefixing each with `/${language}` - instead
  // of leaving a bare "#hero" - means these links still resolve correctly
  // when Navbar is mounted somewhere that isn't the home page (the two
  // /servizi pages, and the /servizi hub): next/link takes the visitor back
  // to the home page and the browser scrolls to the section once it loads.
  // On the home page itself this is still an in-place hash navigation, same
  // as before.
  const homeHref = (hash: string) => `/${language}${hash}`;

  const navItems = [
    { href: homeHref("#hero"), label: t.nav.home },
    { href: homeHref("#about"), label: t.nav.about },
    { href: homeHref("#skills"), label: t.nav.skills },
    { href: homeHref("#solutions"), label: t.nav.solutions },
    // Route link, not a section anchor - and Italian-only, because /servizi
    // and its two children don't exist under /en or /es (see CLAUDE.md).
    // Gating on `language` rather than always rendering it keeps an English
    // or Spanish visitor's navbar exactly as it was before this page existed
    // - no dead link, no 404 behind the menu.
    ...(language === "it" ? [{ href: "/it/servizi", label: t.nav.servizi }] : []),
    { href: homeHref("#experience"), label: t.nav.experience },
    { href: homeHref("#projects"), label: t.nav.projects },
    { href: homeHref("#contact"), label: t.nav.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo. Points at the *current* locale's home page: a bare href="/"
              would full-reload and then be re-detected by proxy.ts from
              Accept-Language, which can drop the visitor into a different
              language than the one they are reading. */}
          <Link href={`/${language}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline">
              Riccardo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            
            {/* CTA Button - Desktop */}
            <Button 
              className="hidden lg:inline-flex bg-purple-600 hover:bg-purple-700 text-white"
              asChild
            >
              <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                {t.nav.bookCall}
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
                asChild
              >
                <a href="https://calendly.com/riccardo-perniciano/free-call" target="_blank" rel="noopener noreferrer">
                  {t.hero.bookFreeCall}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;