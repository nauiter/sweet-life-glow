import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Linkedin, Sparkles, Grid, ShoppingBag } from "lucide-react";
import { DOWNLOAD_LINKS, EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import { useParallax } from "@/hooks/useParallax";

export const ShopSection = () => {
  const parallaxOffset = useParallax(0.18);
  
  const resources = [
    {
      icon: Linkedin,
      title: "Master the Art of Crafting the Perfect LinkedIn Profile",
      description: "Unlock the secrets of building a professional presence that attracts opportunities! Expert tips on personal branding, storytelling, and visibility strategies.",
      category: "Career Growth / Personal Branding",
      price: "Free",
      badge: "Popular",
      downloadUrl: DOWNLOAD_LINKS.linkedInGuide
    },
    {
      icon: Sparkles,
      title: "Unlocking the Power of ChatGPT: A Guide for Digital Artists, Content Innovators, and Creators",
      description: "Learn how to use AI to supercharge your creative workflow. Practical ways to use ChatGPT for storytelling, art direction, translations, and beyond.",
      category: "AI for Creators / Productivity",
      price: "Free",
      badge: "New",
      downloadUrl: DOWNLOAD_LINKS.chatGPTGuide
    },
    {
      icon: Grid,
      title: "Master the Art of Grids and Layouts",
      description: "Discover the design principles behind balanced, eye-catching compositions. Layout grids, composition theory, and professional design techniques.",
      category: "Art & Design / Composition",
      price: "Free",
      badge: null,
      downloadUrl: DOWNLOAD_LINKS.gridsLayouts
    }
  ];

  return (
    <section id="resources" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="resources-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-background" aria-hidden="true" />
      <div 
        className="absolute top-40 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-transform duration-100" 
        aria-hidden="true"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <h2 id="resources-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Free Resources & Tools
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Download these free creative packs to boost your artistic and professional journey. More exclusive content coming soon!
          </p>
        </div>

        {/* Shop CTA */}
        <div className={cn("text-center animate-slide-up", SPACING.margin.normal)} style={{ animationDelay: '0.1s' }}>
          <Card className={cn(SPACING.container.narrow, SPACING.card.default, "card-highlight")}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-3">
                <ShoppingBag className="text-primary" size={32} />
                <h3 className={cn(TYPOGRAPHY.heading.h3, "gradient-text")}>Visit Our Shop</h3>
              </div>
              <p className={cn(TYPOGRAPHY.body.default, "text-muted-foreground")}>
                Explore exclusive digital products, brush packs, and premium resources!
              </p>
              <a 
                href={EXTERNAL_LINKS.payhipShop}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Sweet Life Animes Shop on Payhip"
              >
                <Button variant="hero" size="lg">
                  <ShoppingBag className="mr-2" />
                  Browse Shop
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Resources Grid */}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3", SPACING.grid.normal, SPACING.container.wide, SPACING.margin.hero)} role="list" aria-label="Free downloadable resources">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className={cn(SPACING.card.default, "card-elevated animate-slide-up group flex flex-col")}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              <div className={cn(SPACING.stack.normal, "flex-1 flex flex-col")}>
                <div className="flex items-start justify-between">
                  <div className="icon-wrapper-lg group-hover:scale-110 transition-transform" aria-hidden="true">
                    <resource.icon className="text-white" size={28} />
                  </div>
                  {resource.badge && (
                    <span className="badge-primary" role="status" aria-label={`${resource.badge} resource`}>
                      {resource.badge}
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className={cn(TYPOGRAPHY.heading.h4, SPACING.margin.tight)}>{resource.title}</h3>
                  <p className={cn(TYPOGRAPHY.body.tiny, "text-muted-foreground opacity-80", SPACING.margin.tight)}>{resource.category}</p>
                  <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground", SPACING.margin.close)}>{resource.description}</p>
                </div>
                
                <div className="flex flex-col gap-2 mt-auto pt-4">
                  <span className={cn(
                    TYPOGRAPHY.heading.h3, 
                    "gradient-text text-center px-4 py-2 border-2 border-primary/40 rounded-lg bg-primary/10"
                  )}>
                    {resource.price}
                  </span>
                  <a href={resource.downloadUrl} download aria-label={`Download ${resource.title}`} className="w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group-hover:border-primary w-full border-2"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn("text-center animate-slide-up mt-16", SPACING.stack.relaxed)} style={{ animationDelay: '0.3s' }}>
          <Card className={cn(SPACING.container.narrow, SPACING.card.spacious, "card-highlight")}>
            <h3 className={cn(TYPOGRAPHY.heading.h3, SPACING.margin.tight)}>Want Access to Everything?</h3>
            <p className={cn(TYPOGRAPHY.body.default, "text-muted-foreground", SPACING.margin.normal)}>
              Course members get all resources, exclusive brush packs, weekly art challenges, and priority support from Sweet!
            </p>
            <a 
              href={EXTERNAL_LINKS.coursify}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Enroll in Sweet Life Animes full anime art course"
            >
              <Button variant="hero" size="xl">
                Enroll in Full Course
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
