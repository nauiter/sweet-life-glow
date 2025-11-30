import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "#home" },
    ...(items.length > 0 ? items : [{ label: "Sweet Life Animes", href: "#home", current: true }])
  ];

  return (
    <nav 
      aria-label="Breadcrumb navigation" 
      className="fixed top-16 left-0 right-0 z-30 bg-background/80 backdrop-blur-md border-b border-primary/20 hidden md:block"
    >
      <div className="container px-4 sm:px-6 lg:px-8 py-2">
        <ol 
          className="flex items-center gap-2 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {defaultItems.map((item, index) => (
            <li 
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <ChevronRight className="text-muted-foreground" size={16} aria-hidden="true" />
              )}
              
              {index === 0 ? (
                <a
                  href={item.href}
                  itemProp="item"
                  className={cn(
                    "flex items-center gap-1 transition-colors",
                    item.current 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Home size={16} aria-hidden="true" />
                  <span itemProp="name">{item.label}</span>
                </a>
              ) : (
                <a
                  href={item.href}
                  itemProp="item"
                  className={cn(
                    "transition-colors",
                    item.current 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span itemProp="name">{item.label}</span>
                </a>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
