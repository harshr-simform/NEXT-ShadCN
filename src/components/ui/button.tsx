import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Filled variants
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",

        // Outline variants
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "outline-primary":
          "border border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-xs",
        "outline-secondary":
          "border border-secondary text-secondary-foreground bg-background hover:bg-secondary hover:text-secondary-foreground shadow-xs",
        "outline-destructive":
          "border border-destructive text-destructive bg-background hover:bg-destructive hover:text-white shadow-xs",

        // Ghost variants
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        "ghost-primary": "text-primary hover:bg-primary/10 hover:text-primary",
        "ghost-secondary":
          "text-secondary-foreground hover:bg-secondary/10 hover:text-secondary-foreground",
        "ghost-destructive":
          "text-destructive hover:bg-destructive/10 hover:text-destructive",

        // Link variant
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Text button sizes
        sm: "h-8 px-3 text-xs gap-1.5 has-[>svg]:px-2.5",
        default: "h-9 px-4 py-2 gap-2 has-[>svg]:px-3",
        lg: "h-10 px-6 text-base gap-2 has-[>svg]:px-5",
        xl: "h-12 px-8 text-lg gap-3 has-[>svg]:px-6",

        // Icon-only button sizes
        "icon-sm": "size-8 p-0",
        "icon-default": "size-9 p-0",
        "icon-lg": "size-10 p-0",
        "icon-xl": "size-12 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
