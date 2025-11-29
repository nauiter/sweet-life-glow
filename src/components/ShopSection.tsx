import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Linkedin, Sparkles, Grid } from "lucide-react";
import { DOWNLOAD_LINKS, EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const ShopSection = () => {
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
    <section className={cn("relative overflow-hidden", SPACING.section.y)}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-40 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.margin.hero, SPACING.stack.normal)}>
          <h2 className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Free Resources & Tools
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Download these free creative packs to boost your artistic and professional journey. More exclusive content coming soon!
          </p>
        </div>

        {/* Resources Grid */}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3", SPACING.grid.normal, SPACING.container.wide)}>
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className={cn(SPACING.card.default, "bg-card/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up group")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={SPACING.stack.normal}>
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <resource.icon className="text-white" size={28} />
                  </div>
                  {resource.badge && (
                    <span className={cn(TYPOGRAPHY.badge, "px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/50")}>
                      {resource.badge}
                    </span>
                  )}
                </div>
                
                <div>
                  <h3 className={cn(TYPOGRAPHY.heading.h4, SPACING.margin.tight)}>{resource.title}</h3>
                  <p className={cn(TYPOGRAPHY.body.tiny, "text-muted-foreground opacity-80", SPACING.margin.tight)}>{resource.category}</p>
                  <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground", SPACING.margin.close)}>{resource.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={cn(TYPOGRAPHY.heading.h3, "gradient-text")}>{resource.price}</span>
                  <a href={resource.downloadUrl} download aria-label={`Download ${resource.title}`}>
                    <Button variant="outline" size="sm" className="group-hover:border-primary">
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
        <div className={cn("text-center animate-slide-up", SPACING.margin.hero, SPACING.stack.relaxed)} style={{ animationDelay: '0.3s' }}>
          <Card className={cn(SPACING.container.narrow, SPACING.card.spacious, "bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30 neon-glow")}>
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
