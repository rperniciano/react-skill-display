"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // The resolved theme is only knowable in the browser, so the first render
  // (server + hydration) must not depend on it. Until mounted we render a
  // same-sized, icon-less button: identical markup on both sides, no mismatch,
  // and no layout shift when the real icon appears.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const label =
    theme === "light" ? "Attiva modalità scura" : "Attiva modalità chiara";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={mounted ? label : undefined}
      aria-label={mounted ? label : "Cambia tema"}
    >
      {!mounted ? (
        <span className="h-5 w-5" aria-hidden="true" />
      ) : theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
