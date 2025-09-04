# Copilot Instructions for ShadCN Component Library

## Architecture Overview

This is a Next.js 15 component library built with ShadCN UI featuring a **dual theming system** - the key architectural pattern that differentiates this project. Two independent theme controls operate simultaneously:

1. **Theme Mode**: Light/Dark switching via `next-themes`
2. **Color Palette**: 4 custom color schemes (Default, Blue Ocean, Purple Sage, Rose Gold)

## Core Theming System Pattern

### Theme Application Flow (Critical Understanding)

```
SSR → theme-script.ts (inline) → theme-provider.tsx (hydration) → theming.ts (utilities)
```

**Anti-FOUC Architecture**: The `src/lib/theme-script.ts` contains an inline script injected into `<head>` that applies themes **before React hydration** to prevent flash of unstyled content during navigation.

### Key Files & Responsibilities

- **`src/lib/theming.ts`**: Core theme engine with TypeScript interfaces, color palettes, and application utilities
- **`src/lib/theme-script.ts`**: Inline script duplicating theme logic for SSR (must stay in sync with theming.ts)
- **`src/components/theme-provider.tsx`**: React context wrapper managing post-hydration theme changes
- **`src/app/globals.css`**: CSS variables (managed by TS, not manually edited)

## Development Patterns

### Adding New Color Palettes

Follow the **5-step pattern** when adding color schemes:

1. Update `colorPalettes` array in `theming.ts` with full interface compliance
2. Mirror the palette in `theme-script.ts` colorPalettes object
3. Update `applyColorPalette` function if new color properties added
4. Test both SSR and client-side rendering
5. Optional: Add preview in `/components` showcase page

### Component Development

- Use `@/` path aliases configured in `components.json`
- Components follow ShadCN "new-york" style with `data-slot` attributes
- Theme-aware components use `var(--color-name)` CSS variables, not `hsl()` wrappers
- Utilize `cn()` utility from `@/lib/utils` for conditional classes

### Theme Integration Patterns

```tsx
// Preferred: CSS variables
style={{ backgroundColor: "var(--primary)" }}

// Hook-based (advanced)
const theme = useTheme();
const color = theme.getColor("primary");
```

## Development Workflow

### Local Development

```bash
npm run dev  # Starts Next.js dev server on :3000
```

### Component Testing

- Navigate to `/components` for theme-aware component showcase
- Navigate to `/forms` for form element demonstrations
- Use browser dev tools to verify CSS variable application

### Debugging Theme Issues

1. Check browser localStorage for `theme` and `color-palette` keys
2. Verify CSS variables in dev tools Elements tab
3. Ensure `theme-script.ts` and `theming.ts` palette definitions match
4. Test page navigation to confirm no FOUC

## Project-Specific Conventions

### File Organization

- **Route Groups**: `(main)` contains authenticated/main app routes
- **UI Components**: `src/components/ui/` for base ShadCN components
- **Feature Components**: `src/components/` for app-specific components
- **Hooks**: `src/hooks/` for theme and utility hooks

### TypeScript Patterns

- All theme interfaces in `theming.ts` are strictly typed
- Color palette interface requires both light/dark variants with full color spectrum
- Hook `useTheme()` provides type-safe theme utilities and CSS-in-JS helpers

### CSS Variable Naming

- Follow `--kebab-case` naming (auto-generated from camelCase TypeScript)
- Foreground colors always paired: `--primary` + `--primary-foreground`
- Chart colors numbered: `--chart-1` through `--chart-5`

## Critical Integration Points

### Theme Persistence

- localStorage keys: `theme` (light/dark/system) and `color-palette` (palette value)
- `getCurrentPalette()` and `saveColorPalette()` handle persistence
- Theme state managed by next-themes, palette state custom-managed

### SSR Compatibility

- `theme-script.ts` must execute synchronously in `<head>`
- Never modify theme on server-side - client-only operations
- `suppressHydrationWarning` required on `<html>` tag

### External Dependencies

- **next-themes**: Light/dark mode management
- **Radix UI**: Base component primitives
- **Lucide React**: Icon system
- **Tailwind CSS**: Utility classes with CSS variables integration

## Common Gotchas

1. **Palette Sync**: When updating color palettes, both `theming.ts` and `theme-script.ts` must be updated
2. **CSS Variable Format**: Use `var(--color)` not `hsl(var(--color))` - variables store hex values
3. **Hydration Timing**: Theme changes only work post-hydration; inline script handles pre-hydration
4. **Component Slots**: ShadCN components use `data-slot` attributes - preserve when customizing
