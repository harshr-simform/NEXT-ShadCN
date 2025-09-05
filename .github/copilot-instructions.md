# Copilot Instructions for ShadCN Component Library

## Architecture Overview

This is a Next.js 15 component library built with ShadCN UI featuring a **streamlined CSS-only theming system**. The architecture uses pure CSS custom properties for theming with no complex TypeScript abstractions.

### Key Features:

1. **Theme Mode**: Light/Dark switching via `next-themes`
2. **Color Palette**: Multiple custom color schemes managed via CSS variables
3. **CSS-Only Architecture**: Simple, performant theming without TypeScript complexity

## Core Theming System Pattern

### Theme Application Flow (Simplified Architecture)

```
CSS Variables → @theme directive → Tailwind classes → Components
```

**Performance-First Design**: Direct CSS variable application without JavaScript overhead, ensuring optimal performance and no flash of unstyled content.

### Key Files & Responsibilities

- **`src/app/globals.css`**: Complete theming system with CSS variables and @theme directive
- **`src/lib/theme-script.ts`**: Lightweight SSR theme application script
- **`src/components/theme-provider.tsx`**: React context wrapper for theme switching
- **`src/components/color-palette-switcher.tsx`**: Color palette switching component

## Development Patterns

### **CRITICAL: Variable Usage Rule**

**🚫 DO NOT USE STATIC COLORS**

```tsx
// ❌ NEVER use static colors
className="bg-[#2D6A5C] text-white"
style={{ backgroundColor: "#2D6A5C" }}
```

**✅ ALWAYS USE CSS VARIABLES FROM globals.css**

```tsx
// ✅ Correct: Use CSS variables
className="bg-primary text-primary-foreground"
style={{ backgroundColor: "var(--primary)" }}
```

### Available CSS Variables

All colors are defined in `src/app/globals.css` and available as:

- `--primary`, `--primary-foreground`
- `--secondary`, `--secondary-foreground`
- `--accent`, `--accent-foreground`
- `--muted`, `--muted-foreground`
- `--destructive`, `--destructive-foreground`
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--popover`, `--popover-foreground`
- `--border`, `--input`, `--ring`
- `--chart-1` through `--chart-5`

### Component Development Guidelines

- Use `@/` path aliases configured in `components.json`
- Components follow ShadCN "new-york" style with `data-slot` attributes
- **ONLY use CSS variables**: `var(--variable-name)` or Tailwind classes like `bg-primary`
- Utilize `cn()` utility from `@/lib/utils` for conditional classes
- Test in both light and dark modes

### Theme Integration Patterns

```tsx
// ✅ Preferred: Tailwind classes with CSS variables
<Button className="bg-primary text-primary-foreground hover:bg-primary/90" />

// ✅ Alternative: Direct CSS variables
<div style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }} />

// ✅ Conditional theming
<div className={cn(
  "bg-background text-foreground",
  isActive && "bg-accent text-accent-foreground"
)} />
```

## Development Workflow

### Local Development

```bash
npm run dev  # Starts Next.js dev server on :3000
```

### Component Testing

- Navigate to `/components` for theme-aware component showcase
- Use browser dev tools to verify CSS variable application
- Test all color palettes and light/dark modes
- Ensure no static colors are used in components

### Adding New Color Palettes

To add new color schemes:

1. **Update `src/lib/theme-script.ts`**: Add new palette to `colorPalettes` object
2. **Update `src/components/color-palette-switcher.tsx`**: Add new option with preview colors
3. **Test thoroughly**: Verify both light and dark variants work correctly
4. **No globals.css changes needed**: Variables are applied dynamically

### Debugging Theme Issues

1. Check browser localStorage for `theme` and `color-palette` keys
2. Verify CSS variables in dev tools Elements tab (should show current values)
3. Ensure no static colors are hardcoded in components
4. Test theme switching and palette changes

## Project-Specific Conventions

### File Organization

- **Route Groups**: `(main)` contains main application routes
- **UI Components**: `src/components/ui/` for base ShadCN components
- **Feature Components**: `src/components/` for app-specific components
- **Theme System**: `src/lib/theme-script.ts` and `src/app/globals.css`

### CSS Variable Usage Standards

- **Colors**: Always use semantic names (`primary`, `secondary`, etc.)
- **Foreground Pairing**: Each color has a foreground variant (`primary-foreground`)
- **Chart Colors**: Numbered variants (`chart-1` through `chart-5`)
- **Spacing**: Use `--radius` for border radius consistency

### Component Development Rules

1. **No Static Colors**: Never use hex codes, RGB values, or hardcoded colors
2. **CSS Variables Only**: Use `var(--variable-name)` or Tailwind classes
3. **Theme Testing**: Always test in both light and dark modes
4. **Palette Testing**: Verify component works with all color palettes

## Critical Integration Points

### Theme Persistence

- localStorage keys: `theme` (light/dark/system) and `color-palette` (palette name)
- Theme switching handled by `next-themes` package
- Color palette switching managed by custom logic in `theme-script.ts`

### CSS Variable Architecture

- **Source**: All variables defined in `globals.css`
- **Application**: Applied via `@theme` directive for Tailwind integration
- **Dynamic Updates**: JavaScript updates CSS custom properties on palette change
- **SSR Safe**: Default values provided for server-side rendering

### External Dependencies

- **next-themes**: Light/dark mode management
- **Radix UI**: Base component primitives
- **Lucide React**: Icon system
- **Tailwind CSS**: Utility classes with CSS variables integration

## Common Guidelines & Best Practices

### Color Usage Rules

1. **Static Colors Forbidden**: Never use `#hex`, `rgb()`, or `hsl()` values directly
2. **CSS Variables Required**: Always use `var(--variable-name)` or Tailwind classes
3. **Semantic Naming**: Use `primary`, `secondary`, `accent` instead of color names
4. **Testing**: Verify appearance in all themes and color palettes

### Component Enhancement Patterns

```tsx
// ✅ Correct approach
const Button = ({ variant = "primary" }) => (
  <button
    className={cn(
      "bg-primary text-primary-foreground hover:bg-primary/90",
      variant === "secondary" && "bg-secondary text-secondary-foreground"
    )}
  >
    Button
  </button>
);

// ❌ Incorrect approach
const Button = () => (
  <button style={{ backgroundColor: "#2D6A5C", color: "white" }}>Button</button>
);
```

### Performance Considerations

- CSS-only theming ensures optimal performance
- No JavaScript theme calculations during render
- Minimal bundle size impact
- Fast theme switching with pure CSS transitions
