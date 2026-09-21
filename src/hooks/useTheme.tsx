"use client";

// Thin adapter over next-themes so the rest of the app keeps consuming the
// original `{ theme, toggleTheme }` API. The provider itself lives only in
// `@/components/theme-provider` now; the hand-rolled context that used to be
// here (initialise to 'light', then read localStorage/matchMedia in an effect)
// is gone — it was the source of the white flash and the hydration mismatch.

import { useCallback } from "react";
import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark";

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  // `resolvedTheme` collapses 'system' down to a concrete 'light' | 'dark'.
  // It is `undefined` on the server and on the very first client render, which
  // is deliberate: both sides agree on the same value, so there is no
  // hydration mismatch. Components that render theme-dependent output should
  // gate on a `mounted` flag (see ThemeToggle) rather than on this value.
  const { resolvedTheme, setTheme } = useNextTheme();

  const theme: Theme = resolvedTheme === "dark" ? "dark" : "light";

  const toggleTheme = useCallback(() => {
    // Writes a concrete theme, so toggling out of 'system' pins the choice.
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return { theme, toggleTheme };
}

export default useTheme;
