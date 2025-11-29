import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Linkedin, Sparkles, Grid } from "lucide-react";
import { DOWNLOAD_LINKS, EXTERNAL_LINKS } from "@/constants/data";

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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-40 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Free Resources & Tools
          </h2>
          <p className="text-xl text-muted-foreground">
            Download these free creative packs to boost your artistic and professional journey. More exclusive content coming soon!
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform neon-glow">
                    <resource.icon className="text-white" size={28} />
                  </div>
                  {resource.badge && (
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/50">
                      {resource.badge}
                    </span>
                  )}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2 opacity-80">{resource.category}</p>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">{resource.price}</span>
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
        <div className="text-center mt-16 space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-primary/30 neon-glow">
            <h3 className="text-2xl font-bold mb-3">Want Access to Everything?</h3>
            <p className="text-muted-foreground mb-6">
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
