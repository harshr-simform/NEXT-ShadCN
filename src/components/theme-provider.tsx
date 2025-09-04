"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  applyTheme,
  applyColorPalette,
  getCurrentPalette,
  type ThemeMode,
} from "@/lib/theming";

interface ThemeProviderProps {
  children: React.ReactNode;
  [key: string]: any;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Apply theme changes to CSS variables
  React.useEffect(() => {
    const handleThemeChange = () => {
      try {
        const isDark = document.documentElement.classList.contains("dark");
        const theme = isDark ? "dark" : "light";

        // Apply base theme
        applyTheme(theme as ThemeMode);

        // Apply saved color palette
        const savedPalette = getCurrentPalette();
        applyColorPalette(savedPalette, isDark);
      } catch (error) {
        console.error("Error applying theme:", error);
      }
    };

    // Apply theme on component mount (after hydration)
    handleThemeChange();

    // Listen for theme changes (light/dark mode toggle)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
