import * as React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type IconButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive";
type IconButtonSize = "sm" | "default" | "lg";

interface IconButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "variant" | "size"> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  "aria-label": string; // Required for accessibility
}

const sizeClasses = {
  sm: "size-8",
  default: "size-9",
  lg: "size-10",
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, variant = "primary", size = "default", children, ...props },
    ref
  ) => {
    const iconButtonVariant = `icon-${variant}` as const;

    return (
      <Button
        ref={ref}
        variant={iconButtonVariant as any}
        className={cn(sizeClasses[size], "p-0 shrink-0", className)}
        {...props}
      >
        <span
          className={cn(
            size === "sm" ? "size-3" : size === "lg" ? "size-4" : "size-4"
          )}
        >
          {children}
        </span>
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton, type IconButtonProps };
