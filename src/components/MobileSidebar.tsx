import * as React from "react";
import { Home, Info, Image, Users, Package, Bell, HelpCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  activeSection: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const MobileSidebar = ({ activeSection, onNavClick }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "#home", icon: Home },
    { id: "about", label: "About", href: "#about", icon: Info },
    { id: "gallery", label: "Gallery", href: "#gallery", icon: Image },
    { id: "community", label: "Community", href: "#community", icon: Users },
    { id: "resources", label: "Resources", href: "#resources", icon: Package },
    { id: "updates", label: "Updates", href: "#updates", icon: Bell },
    { id: "faq", label: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onNavClick(e, href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hambúrguer Button - Área de toque 48x48px */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-3 right-3 z-[60] md:hidden",
          "w-12 h-12 rounded-lg",
          "flex items-center justify-center",
          "bg-primary/90 backdrop-blur-sm",
          "border-2 border-white/30",
          "shadow-lg hover:scale-110 active:scale-95",
          "transition-all duration-200",
          isOpen && "bg-destructive"
        )}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-[55] md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[280px] z-[56] md:hidden",
          "bg-gradient-to-b from-card via-card to-background",
          "border-l-2 border-primary/30",
          "shadow-2xl",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          {/* Logo/Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold gradient-text text-center">
              Sweet Life Animes 💜
            </h2>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Your anime art sensei
            </p>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg",
                    "text-base font-medium",
                    "transition-all duration-200",
                    "active:scale-95",
                    "min-h-[48px]", // Área de toque adequada
                    isActive
                      ? "bg-primary/20 text-primary border-2 border-primary/40"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-2 border-transparent"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="pt-6 border-t border-primary/20">
            <a
              href={EXTERNAL_LINKS.coursify}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <Button
                variant="default"
                size="lg"
                className={cn(
                  "w-full min-h-[52px]",
                  "bg-gradient-to-r from-primary via-secondary to-primary",
                  "text-white font-bold text-lg",
                  "shadow-lg hover:shadow-xl",
                  "hover:scale-105 active:scale-95",
                  "transition-all duration-200"
                )}
              >
                Enroll Now 🚀
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
