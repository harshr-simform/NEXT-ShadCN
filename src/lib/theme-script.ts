// Inline script to apply theme immediately on page load
// This prevents flash of unstyled content (FOUC) during navigation

export const getThemeScript = () => {
  return `
    (function() {
      try {
        // Get saved theme values from localStorage
        const theme = localStorage.getItem('theme') || 'system';
        const colorPalette = localStorage.getItem('color-palette') || 'default';
        
        // Determine if dark mode should be applied
        const isDark = theme === 'dark' || 
          (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        // Apply dark class immediately
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        
        // Define color palettes
        const colorPalettes = {
          default: {
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
          blue: {
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
          purple: {
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
          rose: {
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
        };
        
        // Apply color palette
        const palette = colorPalettes[colorPalette] || colorPalettes.default;
        const colors = isDark ? palette.dark : palette.light;
        const root = document.documentElement;
        
        // Apply all colors immediately
        root.style.setProperty("--primary", colors.primary);
        root.style.setProperty("--primary-foreground", colors.primaryForeground);
        root.style.setProperty("--secondary", colors.secondary);
        root.style.setProperty("--secondary-foreground", colors.secondaryForeground);
        root.style.setProperty("--accent", colors.accent);
        root.style.setProperty("--accent-foreground", colors.accentForeground);
        root.style.setProperty("--muted", colors.muted);
        root.style.setProperty("--muted-foreground", colors.mutedForeground);
        root.style.setProperty("--destructive", colors.destructive);
        root.style.setProperty("--destructive-foreground", colors.destructiveForeground);
        root.style.setProperty("--ring", colors.ring);
        
        // Apply sidebar colors
        root.style.setProperty("--sidebar-primary", colors.primary);
        root.style.setProperty("--sidebar-primary-foreground", colors.primaryForeground);
        root.style.setProperty("--sidebar-accent", colors.accent);
        root.style.setProperty("--sidebar-accent-foreground", colors.accentForeground);
        root.style.setProperty("--sidebar-ring", colors.ring);
        
      } catch (error) {
        console.error('Theme script error:', error);
      }
    })();
  `;
};
