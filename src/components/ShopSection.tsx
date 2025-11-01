import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Package, Sparkles } from "lucide-react";

export const ShopSection = () => {
  const resources = [
    {
      icon: Package,
      title: "Pose Reference Pack",
      description: "100+ dynamic anime poses for your reference library",
      price: "Free",
      badge: "Popular"
    },
    {
      icon: Sparkles,
      title: "Color Palette Collection",
      description: "50 curated color schemes for anime aesthetics",
      price: "Free",
      badge: "New"
    },
    {
      icon: Download,
      title: "Brush Pack Bundle",
      description: "Essential digital brushes for anime art creation",
      price: "Free",
      badge: null
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
            Download these goodies to kickstart your creative journey! More premium packs coming soon. 🎨
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
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text">{resource.price}</span>
                  <Button variant="outline" size="sm" className="group-hover:border-primary">
                    Download
                  </Button>
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
              href="https://www.patreon.com/cw/SweetLifeAnimes" 
              target="_blank" 
              rel="noopener noreferrer"
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
