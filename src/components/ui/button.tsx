import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow active:scale-95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-95",
        outline: "border border-input bg-card/50 hover:bg-card hover:border-primary/50 active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-primary text-primary-foreground hover:bg-primary/90 glow-pulse font-bold active:scale-95",
        hero: "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transform transition-all neon-glow font-bold active:scale-95 shadow-lg hover:shadow-xl border-2 border-white/20 hover:border-white/40",
        premium: "bg-gradient-to-r from-secondary to-primary text-white hover:scale-105 transform transition-all font-bold active:scale-95 shadow-2xl hover:shadow-[0_0_40px_hsl(270_100%_70%/0.8),0_0_80px_hsl(328_100%_64%/0.6)] hover:shadow-2xl border-2 border-white/20 hover:border-white/40",
      },
      size: {
        default: "h-10 px-4 py-2 min-h-[44px]", // Área de toque mínima mobile
        sm: "h-9 rounded-md px-3 min-h-[40px]",
        lg: "h-12 rounded-lg px-8 text-base min-h-[48px]",
        xl: "h-14 rounded-lg px-10 text-lg min-h-[52px]",
        icon: "h-10 w-10 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
