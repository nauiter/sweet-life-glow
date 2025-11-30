import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "dark" | "highlight" | "default";
  children: React.ReactNode;
}

const sectionVariants = {
  light: "bg-card/30",
  dark: "bg-gradient-to-b from-background via-card/50 to-background",
  highlight: "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10",
  default: "bg-background"
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative",
          sectionVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
