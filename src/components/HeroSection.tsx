import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ShoppingBag } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-8 md:pt-[200px] md:pb-0" aria-label="Hero section - Welcome to Sweet Life Animes">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Sparkles className="absolute top-1/4 left-1/4 text-primary animate-sparkle" size={20} />
        <Sparkles className="absolute top-1/3 right-1/3 text-secondary animate-sparkle" size={16} style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-1/3 left-1/2 text-accent animate-sparkle" size={18} style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-1/2 right-1/4 text-primary animate-sparkle" size={16} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className={cn("container relative z-10 py-6 sm:py-8 md:py-12 px-4 sm:px-6", SPACING.section.x)}>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left: Text Content */}
          <div className={cn("animate-slide-up", SPACING.stack.normal)}>
            <h1 className={cn("text-2xl sm:text-3xl md:text-7xl font-bold leading-[1.4] mb-5 sm:mb-6 md:mb-6 text-center lg:text-left mt-8 sm:mt-0")}>
              <span className="gradient-text block mb-2">Learn Anime Art</span>
              <span className="neon-text block">with Sweet</span>
            </h1>
            
            <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-6 md:mb-8 px-4 lg:px-0 text-center lg:text-left leading-relaxed text-sm sm:text-base")}>
              Hey cutie! 💜 Ready to level up your art skills? Join 500+ creative otakus in my neon-lit universe where emotion meets technique.
            </p>
            
            {/* Speech Bubble */}
            <div className={cn("relative bg-card/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-primary/30 neon-glow max-w-md mx-auto lg:mx-0 mb-5 sm:mb-6 md:mb-8")} role="complementary" aria-label="Sweet's message to students">
              <p className="text-foreground italic text-xs sm:text-sm leading-relaxed">
                "I'll be your sensei and bestie on this creative journey. Let's make something magical together!"
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/70 border-l border-b border-primary/30 transform rotate-45" aria-hidden="true" />
            </div>
            
            {/* CTAs */}
            <div className={cn("flex flex-col sm:flex-row flex-wrap gap-3 mb-5 sm:mb-6 md:mb-8 px-4 lg:px-0")}>
              <a 
                href={EXTERNAL_LINKS.coursify}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Enroll in Sweet Life Animes anime art course"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Enroll Now
                  <Heart className="group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a 
                href={EXTERNAL_LINKS.payhipShop}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Sweet Life Animes Shop"
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-primary/50 hover:border-primary hover:bg-primary/10 w-full sm:w-auto min-h-[48px] text-base sm:text-lg border-2 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <ShoppingBag className="group-hover:scale-110 transition-transform" />
                  Browse Shop
                </Button>
              </a>
            </div>
            
            {/* Curiosity CTA + Bonus */}
            <div className={cn("relative bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-primary/40 neon-glow mt-5 sm:mt-6 mx-4 lg:mx-0")} role="region" aria-label="Special December offer">
              <div className="absolute -top-2.5 -right-2 sm:-right-2.5">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 bg-gradient-to-r from-destructive to-primary rounded-full text-white text-[10px] sm:text-xs font-bold shadow-lg animate-pulse" role="status" aria-label="Limited time sale: 90% off in December">
                  🔥 90% OFF
                </span>
              </div>
              <div className={SPACING.stack.tight}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between flex-wrap gap-2 mb-2">
                  <h3 className={cn("text-lg sm:text-xl md:text-2xl font-bold gradient-text flex items-center gap-2")}>
                    <Sparkles className="text-primary flex-shrink-0" size={20} />
                    <span>December Sale!</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={cn("text-base sm:text-lg", "text-muted-foreground line-through")}>$297</span>
                    <span className={cn("text-3xl sm:text-4xl", "text-primary font-black")}>$29</span>
                  </div>
                </div>
                <p className={cn("text-xs sm:text-sm", "text-foreground leading-relaxed mb-3")}>
                  Complete course, AI magic, premium brushes & lifetime access. ✨
                </p>
                <a 
                  href={EXTERNAL_LINKS.coursify}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Enroll in December special for $29"
                  className="block w-full sm:w-auto"
                >
                  <Button 
                    variant="hero" 
                    size="default" 
                    className="group hover:scale-105 active:scale-95 transition-all duration-200 font-bold w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                  >
                    Enroll for $29 (Save $268!)
                    <Sparkles className="group-hover:scale-110 transition-transform" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Character Image */}
          <div className="relative animate-slide-up max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden neon-glow">
              <img 
                src="/images/sweet-character.jpg" 
                alt="Sweet - Your Anime Art Sensei and Creative Mentor"
                width={800}
                height={450}
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 550px"
                loading="eager"
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-none"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
