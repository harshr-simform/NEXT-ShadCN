# ShadCN Component Library with Advanced Theming

A comprehensive Next.js component library built with ShadCN UI, featuring an advanced dual theming system with light/dark mode and multiple color palettes.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with theme script injection
│   ├── globals.css             # Global styles and CSS variables
│   ├── page.tsx                # Home page
│   └── (main)/
│       ├── layout.tsx          # Main layout with sidebar and header
│       ├── components/
│       │   └── page.tsx        # Component showcase and color palette demo
│       └── forms/
│           └── page.tsx        # Form components demo
├── components/
│   ├── ui/                     # ShadCN UI components
│   │   └── button.tsx
│   ├── theme-provider.tsx      # Theme context provider
│   ├── mode-toggle.tsx         # Light/dark mode toggle
│   ├── color-palette-switcher.tsx  # Color palette switcher
│   ├── header.tsx              # Header with dual theme controls
│   └── app-sidebar.tsx         # Sidebar navigation
└── lib/
    ├── theming.ts              # Core theming system
    ├── theme-script.ts         # Inline theme script for SSR
    └── utils.ts                # Utility functions
```

## 🎨 Theming System Architecture

### Dual Theming Controls

The application features two independent theming controls:

1. **Theme Mode Toggle**: Light/Dark mode switching
2. **Color Palette Switcher**: 4 different color schemes

### Core Files

#### 1. `/src/lib/theming.ts`

The heart of the theming system containing:

- Theme interfaces and types
- Light and dark theme definitions
- Color palette configurations
- Utility functions for theme application

#### 2. `/src/lib/theme-script.ts`

Inline script that prevents FOUC (Flash of Unstyled Content):

- Runs before React hydration
- Applies saved themes immediately on page load
- Ensures consistent theming across page navigation

#### 3. `/src/app/globals.css`

CSS variable definitions:

- Default color values for SSR
- Light and dark theme variants
- Tailwind CSS integration

#### 4. `/src/components/theme-provider.tsx`

React context provider:

- Manages theme state
- Handles theme changes
- Coordinates with next-themes

## 🎨 Available Color Palettes

### 1. Default (Green & Gold)

```typescript
primary: "#3f756c"; // Forest green
secondary: "#e1c789"; // Warm gold
accent: "#dbe8e6"; // Light mint
```

### 2. Blue Ocean

```typescript
primary: "#0ea5e9"; // Sky blue
secondary: "#7dd3fc"; // Light blue
accent: "#e0f2fe"; // Pale blue
```

### 3. Purple Sage

```typescript
primary: "#8b5cf6"; // Purple
secondary: "#c4b5fd"; // Light purple
accent: "#f3f4f6"; // Soft gray
```

### 4. Rose Gold

```typescript
primary: "#f43f5e"; // Rose
secondary: "#fda4af"; // Pink
accent: "#fef2f2"; // Pale pink
```

## 🛠️ Customization Guide

### Adding a New Color Palette

#### Step 1: Define the Palette in `theming.ts`

```typescript
// Add to colorPalettes array in src/lib/theming.ts
{
  name: "Emerald",
  value: "emerald",
  colors: {
    light: {
      primary: "#10b981",
      primaryForeground: "#ffffff",
      secondary: "#6ee7b7",
      secondaryForeground: "#065f46",
      accent: "#d1fae5",
      accentForeground: "#047857",
      muted: "#f0fdf4",
      mutedForeground: "#6b7280",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      ring: "#059669",
    },
    dark: {
      primary: "#10b981",
      primaryForeground: "#ffffff",
      secondary: "#6ee7b7",
      secondaryForeground: "#065f46",
      accent: "#064e3b",
      accentForeground: "#ffffff",
      muted: "#1f2937",
      mutedForeground: "#9ca3af",
      destructive: "#ef4444",
      destructiveForeground: "#ffffff",
      ring: "#059669",
    },
  },
}
```

#### Step 2: Update the Inline Theme Script

Add the new palette to `theme-script.ts`:

```typescript
// Add to colorPalettes object in src/lib/theme-script.ts
emerald: {
  light: { /* light theme colors */ },
  dark: { /* dark theme colors */ }
}
```

#### Step 3: Update Color Palette Demo (Optional)

Add a preview card in `/src/app/(main)/components/page.tsx`:

```tsx
{
  /* Emerald Palette */
}
<div className="p-4 border rounded-lg bg-card">
  <div className="flex items-center gap-3 mb-3">
    <div className="flex gap-1">
      <div
        className="w-4 h-4 rounded-full border"
        style={{ backgroundColor: "#10b981" }}
      ></div>
      <div
        className="w-4 h-4 rounded-full border"
        style={{ backgroundColor: "#6ee7b7" }}
      ></div>
    </div>
    <h5 className="font-medium">Emerald</h5>
  </div>
  <p className="text-sm text-muted-foreground">
    Fresh emerald theme with natural green tones.
  </p>
</div>;
```

### Modifying Existing Colors

#### Option 1: Update Base Theme Colors

Edit light/dark theme objects in `src/lib/theming.ts`:

```typescript
export const lightTheme: Theme = {
  colors: {
    primary: "#your-new-color", // Change this
    // ... other colors
  },
};
```

#### Option 2: Modify Palette Colors

Update specific palette in the `colorPalettes` array:

```typescript
{
  name: "Default",
  value: "default",
  colors: {
    light: {
      primary: "#your-new-primary-color",
      // ... other colors
    }
  }
}
```

### Adding New Color Variables

#### Step 1: Update ThemeColors Interface

```typescript
// In src/lib/theming.ts
export interface ThemeColors {
  // ... existing colors
  newColor: string;
  newColorForeground: string;
}
```

#### Step 2: Add to Theme Definitions

```typescript
export const lightTheme: Theme = {
  colors: {
    // ... existing colors
    newColor: "#your-light-color",
    newColorForeground: "#your-light-foreground",
  },
};

export const darkTheme: Theme = {
  colors: {
    // ... existing colors
    newColor: "#your-dark-color",
    newColorForeground: "#your-dark-foreground",
  },
};
```

#### Step 3: Update CSS Variables

Add to `src/app/globals.css`:

```css
:root {
  /* ... existing variables */
  --new-color: #your-light-color;
  --new-color-foreground: #your-light-foreground;
}

.dark {
  /* ... existing variables */
  --new-color: #your-dark-color;
  --new-color-foreground: #your-dark-foreground;
}
```

#### Step 4: Update Inline Script

Add to `src/lib/theme-script.ts` color definitions.

#### Step 5: Update Color Palettes (if needed)

Add the new colors to each palette in the `colorPalettes` array.

## 🔧 Theme Application Flow

1. **SSR/Initial Load**: `theme-script.ts` applies saved theme immediately
2. **Hydration**: `theme-provider.tsx` takes over theme management
3. **User Changes**: Components call theme utilities from `theming.ts`
4. **Persistence**: Settings saved to localStorage automatically

## 📋 Key Features

- ✅ **Dual Theme Controls**: Independent light/dark and color palette switching
- ✅ **FOUC Prevention**: Inline script ensures no flash of unstyled content
- ✅ **Persistence**: Themes saved to localStorage across sessions
- ✅ **TypeScript**: Fully typed theme system with interfaces
- ✅ **SSR Compatible**: Works with Next.js server-side rendering
- ✅ **Responsive**: All components adapt to theme changes
- ✅ **Accessible**: Proper contrast ratios and semantic colors

## 🎯 Component Showcase

The `/components` page demonstrates:

- All available colors with live swatches
- Color palette switching demo
- Typography examples
- Component variants (buttons, badges, cards)
- Live theme change demonstrations

## 📚 Tech Stack

- **Framework**: Next.js 15.5.2
- **UI Library**: ShadCN UI
- **Styling**: Tailwind CSS
- **Theme Management**: next-themes + custom system
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono

## 🚀 Deployment

Deploy on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

```bash
npm run build
npm start
```

## 📝 Development Notes

- Theme changes are applied instantly without page refresh
- Color variables follow ShadCN naming conventions
- All components are fully responsive and accessible
- TypeScript ensures type safety across the theme system
- Custom hooks available for theme management in components

---

Built with ❤️ using Next.js and ShadCN UI
