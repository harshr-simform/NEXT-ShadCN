"use client";

import * as React from "react";
import { Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  colorPalettes,
  applyColorPalette,
  getCurrentPalette,
  saveColorPalette,
} from "@/lib/theming";

export function ColorPaletteSwitcher() {
  const [activePalette, setActivePalette] = React.useState("default");

  React.useEffect(() => {
    // Load saved palette from localStorage for UI state only
    const savedPalette = getCurrentPalette();
    if (savedPalette && colorPalettes.find((p) => p.value === savedPalette)) {
      setActivePalette(savedPalette);
    }
  }, []);

  const handlePaletteChange = (paletteValue: string) => {
    const isDark = document.documentElement.classList.contains("dark");
    applyColorPalette(paletteValue, isDark);
    saveColorPalette(paletteValue);
    setActivePalette(paletteValue);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-default">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Switch color palette</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Color Palette</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {colorPalettes.map((palette) => (
          <DropdownMenuItem
            key={palette.value}
            onClick={() => handlePaletteChange(palette.value)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: palette.colors.light.primary }}
                />
                <div
                  className="w-3 h-3 rounded-full border border-border"
                  style={{ backgroundColor: palette.colors.light.secondary }}
                />
              </div>
              <span>{palette.name}</span>
            </div>
            {activePalette === palette.value && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
