"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  type Theme,
  type ThemeMode,
  getTheme,
  applyTheme,
  lightTheme,
  darkTheme,
  semanticColors,
  componentTokens,
  typography,
  spacing,
  animations,
} from "@/lib/theming";

export function useTheme() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we're mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the current theme object
  const currentTheme: Theme = mounted
    ? getTheme((resolvedTheme as ThemeMode) || "light")
    : lightTheme;

  // Apply theme variables to document
  useEffect(() => {
    if (mounted && resolvedTheme) {
      applyTheme(resolvedTheme as ThemeMode);
    }
  }, [mounted, resolvedTheme]);

  // Theme utilities
  const getColor = (colorPath: string): string => {
    if (!mounted) return lightTheme.colors.primary;

    const paths = colorPath.split(".");
    let current: any = currentTheme.colors;

    for (const path of paths) {
      current = current?.[path];
      if (!current) break;
    }

    return current || lightTheme.colors.primary;
  };

  const getSemanticColor = (
    type: keyof typeof semanticColors,
    variant: "light" | "background" | "foreground" = "light"
  ): string => {
    return semanticColors[type][variant];
  };

  const getComponentToken = (
    component: keyof typeof componentTokens,
    property: string,
    size: string = "default"
  ): string => {
    const componentToken = componentTokens[component] as any;
    return componentToken?.[property]?.[size] || "";
  };

  const getTypography = (
    property: keyof typeof typography,
    size: string = "base"
  ): string => {
    const typographyProperty = typography[property] as any;
    return typographyProperty?.[size] || typographyProperty;
  };

  const getSpacing = (size: keyof typeof spacing): string => {
    return spacing[size];
  };

  const getAnimation = (
    property: keyof typeof animations,
    value: string = "normal"
  ): string => {
    const animationProperty = animations[property] as any;
    return animationProperty?.[value] || animationProperty;
  };

  // CSS-in-JS style generator
  const createStyles = (
    styles: Record<string, string | Record<string, string>>
  ): Record<string, any> => {
    const processedStyles: Record<string, any> = {};

    Object.entries(styles).forEach(([key, value]) => {
      if (typeof value === "string") {
        // Replace theme function calls with actual values
        let processedValue = value;

        // Replace color() function calls
        processedValue = processedValue.replace(
          /color\(([^)]+)\)/g,
          (_, colorPath) => {
            return getColor(colorPath.trim());
          }
        );

        // Replace semantic() function calls
        processedValue = processedValue.replace(
          /semantic\(([^,)]+)(?:,\s*([^)]+))?\)/g,
          (_, type, variant) => {
            return getSemanticColor(type.trim(), variant?.trim() || "light");
          }
        );

        // Replace component() function calls
        processedValue = processedValue.replace(
          /component\(([^,)]+),\s*([^,)]+)(?:,\s*([^)]+))?\)/g,
          (_, component, property, size) => {
            return getComponentToken(
              component.trim(),
              property.trim(),
              size?.trim()
            );
          }
        );

        // Replace typography() function calls
        processedValue = processedValue.replace(
          /typography\(([^,)]+)(?:,\s*([^)]+))?\)/g,
          (_, property, size) => {
            return getTypography(property.trim(), size?.trim());
          }
        );

        // Replace spacing() function calls
        processedValue = processedValue.replace(
          /spacing\(([^)]+)\)/g,
          (_, size) => {
            return getSpacing(size.trim());
          }
        );

        // Replace animation() function calls
        processedValue = processedValue.replace(
          /animation\(([^,)]+)(?:,\s*([^)]+))?\)/g,
          (_, property, value) => {
            return getAnimation(property.trim(), value?.trim());
          }
        );

        processedStyles[key] = processedValue;
      } else {
        processedStyles[key] = createStyles(value);
      }
    });

    return processedStyles;
  };

  return {
    // Next-themes integration
    theme,
    setTheme,
    resolvedTheme,
    systemTheme,
    mounted,

    // Theme objects
    currentTheme,
    lightTheme,
    darkTheme,

    // Utility functions
    getColor,
    getSemanticColor,
    getComponentToken,
    getTypography,
    getSpacing,
    getAnimation,
    createStyles,

    // Theme state
    isDark: resolvedTheme === "dark",
    isLight: resolvedTheme === "light",
    isSystem: theme === "system",
  };
}

// CSS-in-JS helper for styled components
export const styled = {
  create: (styles: Record<string, string | Record<string, string>>) => {
    return (props: { theme?: ReturnType<typeof useTheme> }) => {
      const themeHook = props.theme || useTheme();
      return themeHook.createStyles(styles);
    };
  },
};

// Theme provider context for direct access
export { type Theme, type ThemeMode } from "@/lib/theming";
