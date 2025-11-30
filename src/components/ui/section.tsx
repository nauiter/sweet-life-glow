import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "dark" | "highlight" | "default";
  children: React.ReactNode;
}

const sectionVariants = {
  light: "",
  dark: "",
  highlight: "",
  default: ""
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
