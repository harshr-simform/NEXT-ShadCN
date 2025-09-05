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

const colorPalettes = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Blue Ocean",
    value: "blue",
  },
  {
    name: "Purple Sage",
    value: "purple",
  },
  {
    name: "Rose Gold",
    value: "rose",
  },
];

export function ColorPaletteSwitcher() {
  const [activePalette, setActivePalette] = React.useState("default");

  React.useEffect(() => {
    // Load saved palette from localStorage
    const savedPalette = localStorage.getItem("color-palette") || "default";
    if (colorPalettes.find((p) => p.value === savedPalette)) {
      setActivePalette(savedPalette);
      // Apply theme class
      document.documentElement.className = document.documentElement.className
        .replace(/theme-\w+/g, "")
        .trim();
      if (savedPalette !== "default") {
        document.documentElement.classList.add(`theme-${savedPalette}`);
      }
    }
  }, []);

  const handlePaletteChange = (paletteValue: string) => {
    setActivePalette(paletteValue);
    localStorage.setItem("color-palette", paletteValue);

    // Remove existing theme classes
    document.documentElement.className = document.documentElement.className
      .replace(/theme-\w+/g, "")
      .trim();

    // Add new theme class (except for default)
    if (paletteValue !== "default") {
      document.documentElement.classList.add(`theme-${paletteValue}`);
    }
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
                <div className="w-3 h-3 rounded-full border border-border bg-primary" />
                <div className="w-3 h-3 rounded-full border border-border bg-secondary" />
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
