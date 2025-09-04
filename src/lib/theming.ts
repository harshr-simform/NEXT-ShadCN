// Design System Theme Configuration
// This file contains all theme variables and design tokens

export interface ThemeColors {
  // Base Colors
  background: string;
  foreground: string;

  // Surface Colors
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;

  // Brand Colors
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;

  // UI Colors
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;

  // Border & Input
  border: string;
  input: string;
  ring: string;

  // Chart Colors
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;

  // Status Colors
  red: string;
  green: string;
  yellow: string;
  lightblue: string;
  purple: string;

  // Sidebar Colors
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  colors: ThemeColors;
  radius: ThemeRadius;
}

// Light Theme
export const lightTheme: Theme = {
  colors: {
    // Base Colors
    background: "#f5f5f5",
    foreground: "#202020",

    // Surface Colors
    card: "#ffffff",
    cardForeground: "#202020",
    popover: "#ffffff",
    popoverForeground: "#202020",

    // Brand Colors
    primary: "#3f756c",
    primaryForeground: "#f6eecd",
    secondary: "#e1c789",
    secondaryForeground: "#c6743e",

    // UI Colors
    muted: "#f5f5f5",
    mutedForeground: "#737373",
    accent: "#dbe8e6",
    accentForeground: "#088570",
    destructive: "#db0a0a",
    destructiveForeground: "#f6eecd",

    // Border & Input
    border: "#e4e4e7",
    input: "#e4e4e7",
    ring: "#088570",

    // Chart Colors
    chart1: "#20467e",
    chart2: "#00bc7d",
    chart3: "#ffd000",
    chart4: "#ad46ff",
    chart5: "#180e10",

    // Status Colors
    red: "#db0a0a",
    green: "#06be25",
    yellow: "#ffd000",
    lightblue: "#00c3ff",
    purple: "#de49c5",

    // Sidebar Colors
    sidebar: "#ffffff",
    sidebarForeground: "#202020",
    sidebarPrimary: "#3f756c",
    sidebarPrimaryForeground: "#f6eecd",
    sidebarAccent: "#f5f5f5",
    sidebarAccentForeground: "#202020",
    sidebarBorder: "#e4e4e7",
    sidebarRing: "#088570",
  },
  radius: {
    sm: "calc(0.5rem - 4px)",
    md: "calc(0.5rem - 2px)",
    lg: "0.5rem",
    xl: "calc(0.5rem + 4px)",
  },
};

// Dark Theme
export const darkTheme: Theme = {
  colors: {
    // Base Colors
    background: "#202020",
    foreground: "#ffffff",

    // Surface Colors
    card: "#101010",
    cardForeground: "#ffffff",
    popover: "#101010",
    popoverForeground: "#ffffff",

    // Brand Colors
    primary: "#3f756c",
    primaryForeground: "#f6eecd",
    secondary: "#e1c789",
    secondaryForeground: "#c6743e",

    // UI Colors
    muted: "#404040",
    mutedForeground: "#a3a3a3",
    accent: "#404040",
    accentForeground: "#ffffff",
    destructive: "#db0a0a",
    destructiveForeground: "#ffffff",

    // Border & Input
    border: "#262626",
    input: "#404040",
    ring: "#088570",

    // Chart Colors
    chart1: "#20467e",
    chart2: "#00bc7d",
    chart3: "#ffd000",
    chart4: "#ad46ff",
    chart5: "#180e10",

    // Status Colors
    red: "#db0a0a",
    green: "#06be25",
    yellow: "#ffd000",
    lightblue: "#00c3ff",
    purple: "#de49c5",

    // Sidebar Colors
    sidebar: "#101010",
    sidebarForeground: "#ffffff",
    sidebarPrimary: "#3f756c",
    sidebarPrimaryForeground: "#f6eecd",
    sidebarAccent: "#404040",
    sidebarAccentForeground: "#ffffff",
    sidebarBorder: "#262626",
    sidebarRing: "#088570",
  },
  radius: {
    sm: "calc(0.5rem - 4px)",
    md: "calc(0.5rem - 2px)",
    lg: "0.5rem",
    xl: "calc(0.5rem + 4px)",
  },
};

// Theme utilities
export type ThemeMode = "light" | "dark";

export const getTheme = (mode: ThemeMode): Theme => {
  return mode === "dark" ? darkTheme : lightTheme;
};

// CSS Variable generators
export const generateCSSVariables = (theme: Theme): Record<string, string> => {
  const cssVars: Record<string, string> = {};

  // Convert theme colors to CSS variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case
    const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    cssVars[`--${cssKey}`] = value;
  });

  // Add radius variables
  Object.entries(theme.radius).forEach(([key, value]) => {
    cssVars[`--radius-${key}`] = value;
  });

  // Add base radius
  cssVars["--radius"] = theme.radius.lg;

  return cssVars;
};

// Apply theme to document
export const applyTheme = (mode: ThemeMode) => {
  if (typeof document === "undefined") return;

  const theme = getTheme(mode);
  const cssVars = generateCSSVariables(theme);

  Object.entries(cssVars).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
};

// Color palette for semantic use
export const semanticColors = {
  success: {
    light: "#06be25",
    background: "#f0f9f0",
    foreground: "#0f5f0f",
  },
  warning: {
    light: "#ffd000",
    background: "#fffaf0",
    foreground: "#b45309",
  },
  error: {
    light: "#db0a0a",
    background: "#fef2f2",
    foreground: "#7f1d1d",
  },
  info: {
    light: "#00c3ff",
    background: "#f0f9ff",
    foreground: "#1e3a8a",
  },
};

// Component-specific theme tokens
export const componentTokens = {
  button: {
    height: {
      sm: "32px",
      default: "40px",
      lg: "48px",
      xl: "56px",
    },
    padding: {
      sm: "8px 12px",
      default: "12px 16px",
      lg: "16px 24px",
      xl: "20px 32px",
    },
  },
  badge: {
    height: {
      sm: "20px",
      default: "24px",
      lg: "28px",
    },
    padding: {
      sm: "4px 8px",
      default: "6px 12px",
      lg: "8px 16px",
    },
  },
  card: {
    padding: {
      sm: "16px",
      default: "24px",
      lg: "32px",
    },
    shadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
  },
};

// Typography tokens
export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
};

// Spacing tokens
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
  "4xl": "96px",
};

// Animation tokens
export const animations = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// Breakpoints
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Color Palette System
export interface ColorPalette {
  name: string;
  value: string;
  colors: {
    light: {
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      accent: string;
      accentForeground: string;
      muted: string;
      mutedForeground: string;
      destructive: string;
      destructiveForeground: string;
      ring: string;
    };
    dark: {
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      accent: string;
      accentForeground: string;
      muted: string;
      mutedForeground: string;
      destructive: string;
      destructiveForeground: string;
      ring: string;
    };
  };
}

export const colorPalettes: ColorPalette[] = [
  {
    name: "Default",
    value: "default",
    colors: {
      light: {
        primary: "#3f756c",
        primaryForeground: "#f6eecd",
        secondary: "#e1c789",
        secondaryForeground: "#c6743e",
        accent: "#dbe8e6",
        accentForeground: "#088570",
        muted: "#f5f5f5",
        mutedForeground: "#737373",
        destructive: "#db0a0a",
        destructiveForeground: "#f6eecd",
        ring: "#088570",
      },
      dark: {
        primary: "#3f756c",
        primaryForeground: "#f6eecd",
        secondary: "#e1c789",
        secondaryForeground: "#c6743e",
        accent: "#404040",
        accentForeground: "#ffffff",
        muted: "#404040",
        mutedForeground: "#a3a3a3",
        destructive: "#db0a0a",
        destructiveForeground: "#ffffff",
        ring: "#088570",
      },
    },
  },
  {
    name: "Blue Ocean",
    value: "blue",
    colors: {
      light: {
        primary: "#0ea5e9",
        primaryForeground: "#ffffff",
        secondary: "#7dd3fc",
        secondaryForeground: "#0c4a6e",
        accent: "#e0f2fe",
        accentForeground: "#0284c7",
        muted: "#f1f5f9",
        mutedForeground: "#64748b",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        ring: "#0284c7",
      },
      dark: {
        primary: "#0ea5e9",
        primaryForeground: "#ffffff",
        secondary: "#7dd3fc",
        secondaryForeground: "#0c4a6e",
        accent: "#1e3a8a",
        accentForeground: "#ffffff",
        muted: "#334155",
        mutedForeground: "#94a3b8",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        ring: "#0284c7",
      },
    },
  },
  {
    name: "Purple Sage",
    value: "purple",
    colors: {
      light: {
        primary: "#8b5cf6",
        primaryForeground: "#ffffff",
        secondary: "#c4b5fd",
        secondaryForeground: "#581c87",
        accent: "#f3f4f6",
        accentForeground: "#7c3aed",
        muted: "#f9fafb",
        mutedForeground: "#6b7280",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        ring: "#7c3aed",
      },
      dark: {
        primary: "#8b5cf6",
        primaryForeground: "#ffffff",
        secondary: "#c4b5fd",
        secondaryForeground: "#581c87",
        accent: "#374151",
        accentForeground: "#ffffff",
        muted: "#374151",
        mutedForeground: "#9ca3af",
        destructive: "#ef4444",
        destructiveForeground: "#ffffff",
        ring: "#7c3aed",
      },
    },
  },
  {
    name: "Rose Gold",
    value: "rose",
    colors: {
      light: {
        primary: "#f43f5e",
        primaryForeground: "#ffffff",
        secondary: "#fda4af",
        secondaryForeground: "#9f1239",
        accent: "#fef2f2",
        accentForeground: "#e11d48",
        muted: "#fef7f7",
        mutedForeground: "#7f1d1d",
        destructive: "#dc2626",
        destructiveForeground: "#ffffff",
        ring: "#e11d48",
      },
      dark: {
        primary: "#f43f5e",
        primaryForeground: "#ffffff",
        secondary: "#fda4af",
        secondaryForeground: "#9f1239",
        accent: "#991b1b",
        accentForeground: "#ffffff",
        muted: "#7f1d1d",
        mutedForeground: "#fca5a5",
        destructive: "#dc2626",
        destructiveForeground: "#ffffff",
        ring: "#e11d48",
      },
    },
  },
];

// Color palette utilities
export const applyColorPalette = (
  paletteValue: string,
  isDark: boolean = false
) => {
  if (typeof document === "undefined") return;

  // Find the palette, fallback to default if not found
  const palette =
    colorPalettes.find((p) => p.value === paletteValue) ||
    colorPalettes.find((p) => p.value === "default");

  if (!palette) return;

  const colors = isDark ? palette.colors.dark : palette.colors.light;
  const root = document.documentElement;

  // Apply primary colors
  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--primary-foreground", colors.primaryForeground);

  // Apply secondary colors
  root.style.setProperty("--secondary", colors.secondary);
  root.style.setProperty("--secondary-foreground", colors.secondaryForeground);

  // Apply accent colors
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--accent-foreground", colors.accentForeground);

  // Apply muted colors
  root.style.setProperty("--muted", colors.muted);
  root.style.setProperty("--muted-foreground", colors.mutedForeground);

  // Apply destructive colors
  root.style.setProperty("--destructive", colors.destructive);
  root.style.setProperty(
    "--destructive-foreground",
    colors.destructiveForeground
  );

  // Apply ring color
  root.style.setProperty("--ring", colors.ring);

  // Update sidebar colors to match
  root.style.setProperty("--sidebar-primary", colors.primary);
  root.style.setProperty(
    "--sidebar-primary-foreground",
    colors.primaryForeground
  );
  root.style.setProperty("--sidebar-accent", colors.accent);
  root.style.setProperty(
    "--sidebar-accent-foreground",
    colors.accentForeground
  );
  root.style.setProperty("--sidebar-ring", colors.ring);
};

export const getCurrentPalette = (): string => {
  if (typeof localStorage === "undefined") return "default";
  const saved = localStorage.getItem("color-palette") || "default";
  // Ensure the saved palette exists in our colorPalettes array
  const exists = colorPalettes.find((p) => p.value === saved);
  return exists ? saved : "default";
};

export const saveColorPalette = (paletteValue: string) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem("color-palette", paletteValue);
};

// Export everything as default theme configuration
export const themeConfig = {
  lightTheme,
  darkTheme,
  getTheme,
  generateCSSVariables,
  applyTheme,
  semanticColors,
  componentTokens,
  typography,
  spacing,
  animations,
  breakpoints,
  colorPalettes,
  applyColorPalette,
  getCurrentPalette,
  saveColorPalette,
};

export default themeConfig;
