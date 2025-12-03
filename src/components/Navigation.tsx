import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
    { id: "community", label: "Community", href: "#community" },
    { id: "resources", label: "Resources", href: "#resources" },
    { id: "updates", label: "Updates", href: "#updates" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      // Use requestAnimationFrame to batch layout reads
      requestAnimationFrame(() => {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/20"
            : "bg-transparent"
        )}
      >
        <div className="container px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
          <div className="flex items-center md:justify-center lg:justify-between h-16">
            {/* Logo - Hidden on tablets (md), visible on desktop (lg+) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="hidden lg:block text-xl font-bold gradient-text hover:scale-105 transition-transform"
              aria-label="Sweet Life Animes - Go to home"
            >
              Sweet Life Animes
            </a>

            {/* Desktop/Tablet Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    activeSection === item.id
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={EXTERNAL_LINKS.coursify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enroll in course"
              >
                <Button variant="hero" size="sm" className="ml-2 lg:ml-4">
                  Enroll Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {/* Menu hambúrguer removido para mobile mais limpo */}
    </>
  );
};
