"use client";

import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ThemeDemo() {
  const theme = useTheme();

  // Example of using the theme system
  const demoStyles = theme.createStyles({
    container: {
      padding: "spacing(lg)",
      backgroundColor: "color(card)",
      borderRadius: "8px",
      border: "1px solid color(border)",
    },
    title: {
      fontSize: "typography(fontSize, lg)",
      fontWeight: "typography(fontWeight, semibold)",
      color: "color(foreground)",
      marginBottom: "spacing(md)",
    },
    colorBox: {
      width: "40px",
      height: "40px",
      borderRadius: "4px",
      border: "1px solid color(border)",
    },
    successBox: {
      backgroundColor: "semantic(success)",
      color: "white",
      padding: "spacing(sm)",
      borderRadius: "4px",
      textAlign: "center",
      fontSize: "typography(fontSize, sm)",
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Theme Demo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Theme State */}
        <div className="flex gap-2 text-sm">
          <span>Current theme:</span>
          <span className="font-medium">
            {theme.resolvedTheme} {theme.isSystem && "(system)"}
          </span>
        </div>

        {/* Dynamic Colors */}
        <div className="space-y-2">
          <h4 className="font-medium">Dynamic Colors</h4>
          <div className="flex gap-3">
            <div className="text-center">
              <div
                className="w-10 h-10 rounded border mb-1"
                style={{ backgroundColor: theme.getColor("primary") }}
              />
              <div className="text-xs">Primary</div>
            </div>
            <div className="text-center">
              <div
                className="w-10 h-10 rounded border mb-1"
                style={{ backgroundColor: theme.getColor("secondary") }}
              />
              <div className="text-xs">Secondary</div>
            </div>
            <div className="text-center">
              <div
                className="w-10 h-10 rounded border mb-1"
                style={{ backgroundColor: theme.getSemanticColor("success") }}
              />
              <div className="text-xs">Success</div>
            </div>
          </div>
        </div>

        {/* CSS-in-JS Example */}
        <div className="space-y-2">
          <h4 className="font-medium">CSS-in-JS Example</h4>
          <div style={demoStyles.successBox}>
            This box uses theme.createStyles()
          </div>
        </div>

        {/* Component Tokens */}
        <div className="space-y-2">
          <h4 className="font-medium">Component Tokens</h4>
          <div className="flex gap-2">
            <Button
              size="sm"
              style={{
                height: theme.getComponentToken("button", "height", "sm"),
                padding: theme.getComponentToken("button", "padding", "sm"),
              }}
            >
              Small
            </Button>
            <Button
              style={{
                height: theme.getComponentToken("button", "height", "lg"),
                padding: theme.getComponentToken("button", "padding", "lg"),
              }}
            >
              Large
            </Button>
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-2">
          <h4 className="font-medium">Typography Tokens</h4>
          <div className="space-y-1">
            <div style={{ fontSize: theme.getTypography("fontSize", "xs") }}>
              Extra Small Text ({theme.getTypography("fontSize", "xs")})
            </div>
            <div style={{ fontSize: theme.getTypography("fontSize", "sm") }}>
              Small Text ({theme.getTypography("fontSize", "sm")})
            </div>
            <div style={{ fontSize: theme.getTypography("fontSize", "lg") }}>
              Large Text ({theme.getTypography("fontSize", "lg")})
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="space-y-2">
          <h4 className="font-medium">Spacing Tokens</h4>
          <div className="space-y-1">
            <div
              className="bg-primary text-primary-foreground text-xs text-center rounded"
              style={{
                padding: theme.getSpacing("xs"),
                marginBottom: theme.getSpacing("xs"),
              }}
            >
              XS Padding ({theme.getSpacing("xs")})
            </div>
            <div
              className="bg-primary text-primary-foreground text-xs text-center rounded"
              style={{
                padding: theme.getSpacing("md"),
                marginBottom: theme.getSpacing("sm"),
              }}
            >
              MD Padding ({theme.getSpacing("md")})
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
