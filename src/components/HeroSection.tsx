import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ShoppingBag } from "lucide-react";
import sweetCharacter from "@/assets/sweet-character.jpg";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 sm:pt-52 md:pt-56" aria-label="Hero section - Welcome to Sweet Life Animes">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 text-primary animate-sparkle" size={20} />
        <Sparkles className="absolute top-1/3 right-1/3 text-secondary animate-sparkle" size={16} style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/2 text-accent animate-sparkle" size={18} style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-1/2 right-1/4 text-primary animate-sparkle" size={16} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className={cn("container relative z-10 py-8 sm:py-12 md:pb-20", SPACING.section.x)}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className={cn("animate-slide-up", SPACING.stack.normal)}>
            <div className={cn("inline-block px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow", SPACING.margin.close)}>
              <span className={cn(TYPOGRAPHY.badge, "gradient-text")}>✨ Welcome to Your Sweet Creative Life</span>
            </div>
            
            <h1 className={cn(TYPOGRAPHY.heading.h1, "leading-tight", SPACING.margin.normal)}>
              <span className="gradient-text">Learn Anime Art</span>
              <br />
              <span className="neon-text">with Sweet</span>
            </h1>
            
            <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground max-w-xl", SPACING.margin.normal)}>
              Hey cutie! 💜 Ready to level up your art skills? Join 500+ creative otakus in my neon-lit universe where emotion meets technique.
            </p>
            
            {/* Speech Bubble */}
            <div className={cn("relative bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-primary/30 neon-glow max-w-md", SPACING.margin.normal)}>
              <p className="text-foreground italic">
                "I'll be your sensei and bestie on this creative journey. Let's make something magical together!"
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/70 border-l border-b border-primary/30 transform rotate-45" />
            </div>
            
            {/* CTAs */}
            <div className={cn("flex flex-wrap gap-4", SPACING.margin.normal)}>
              <a 
                href={EXTERNAL_LINKS.coursify}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Enroll in Sweet Life Animes anime art course"
              >
                <Button variant="hero" size="xl" className="group">
                  Enroll Now
                  <Heart className="group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a 
                href={EXTERNAL_LINKS.payhipShop}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Sweet Life Animes Shop"
              >
                <Button variant="outline" size="xl" className="group border-primary/50 hover:border-primary">
                  <ShoppingBag className="group-hover:scale-110 transition-transform" />
                  Browse Shop
                </Button>
              </a>
            </div>
            
            {/* Curiosity CTA + Bonus */}
            <div className={cn("relative bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm p-6 rounded-2xl border border-primary/40 neon-glow", SPACING.margin.normal)}>
              <div className="absolute -top-3 -right-3">
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-destructive to-primary rounded-full text-white text-xs font-bold shadow-lg animate-pulse">
                  🔥 90% OFF DECEMBER
                </span>
              </div>
              <div className={SPACING.stack.tight}>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <h3 className={cn(TYPOGRAPHY.heading.h4, "gradient-text flex items-center gap-2")}>
                    <Sparkles className="text-primary" size={20} />
                    December Mega Sale!
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={cn(TYPOGRAPHY.body.default, "text-muted-foreground line-through")}>$297</span>
                    <span className={cn(TYPOGRAPHY.heading.h2, "text-primary font-black")}>$29</span>
                  </div>
                </div>
                <p className={cn(TYPOGRAPHY.body.default, "text-foreground")}>
                  Join 500+ artists at our <span className="font-bold text-primary">lowest price ever</span>! 
                  Complete course + AI tools + premium brushes + lifetime access. 
                  <span className="font-bold text-secondary"> Pay with PayPal, Stripe, or PagSeguro</span> 💜
                </p>
                <a 
                  href={EXTERNAL_LINKS.coursify}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Enroll in December special for $29"
                  className="inline-block"
                >
                  <Button variant="hero" size="lg" className="group hover:scale-105 transition-transform mt-2 font-bold">
                    Enroll for $29 (Save $268!)
                    <Sparkles className="group-hover:scale-110 transition-transform" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Character Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden neon-glow">
              <img 
                src={sweetCharacter} 
                alt="Sweet - Your Anime Art Sensei and Creative Mentor"
                width={1920}
                height={1080}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Hearts */}
            <Heart className="absolute -top-4 -right-4 text-primary w-8 h-8 animate-float" fill="currentColor" />
            <Heart className="absolute bottom-20 -left-4 text-secondary w-6 h-6 animate-float" fill="currentColor" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
