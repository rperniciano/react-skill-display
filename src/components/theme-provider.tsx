"use client";

// The single source of truth for theming in the app.
//
// This is a thin wrapper around next-themes. next-themes injects a blocking
// inline <script> that reads localStorage and sets the `dark` class on <html>
// *before first paint*, which is what removes the flash-of-wrong-theme the
// hand-rolled provider used to cause. The root layout sets
// `suppressHydrationWarning` on <html> so React does not complain about that
// pre-hydration class mutation.
//
// Rendered from a Server Component (the root layout) is safe: this file is a
// Client Component, so `children` are passed straight through as a server-
// rendered tree.

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      // Tailwind is configured with `darkMode: 'class'`, so the theme has to be
      // expressed as a class on <html>.
      attribute="class"
      // Honour the OS preference when the visitor has never chosen explicitly.
      defaultTheme="system"
      enableSystem
      // Same localStorage key the previous hand-rolled provider wrote, so an
      // existing visitor's saved 'light' / 'dark' preference carries over.
      storageKey="theme"
      // Avoid the colour-transition sweep when flipping the theme.
      disableTransitionOnChange
      // Callers may still override any of the above.
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
