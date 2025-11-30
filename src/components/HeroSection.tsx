import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ShoppingBag } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only track scroll on desktop
      if (window.innerWidth >= 1024) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-8 md:pt-[220px] md:pb-0" aria-label="Hero section - Welcome to Sweet Life Animes">
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" aria-hidden="true" />
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-float"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s ease-out"
          }}
        />
        <div 
          className="absolute bottom-32 right-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${scrollY * -0.2}px)`,
            transition: "transform 0.1s ease-out"
          }} 
        />
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.1s ease-out"
          }} 
        />
      </div>
      
      {/* Sparkles with Parallax */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Sparkles 
          className="absolute top-1/4 left-1/4 text-primary animate-sparkle" 
          size={20}
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            transition: "transform 0.1s ease-out"
          }}
        />
        <Sparkles 
          className="absolute top-1/3 right-1/3 text-secondary animate-sparkle" 
          size={16} 
          style={{ 
            animationDelay: '0.5s',
            transform: `translateY(${scrollY * -0.15}px)`,
            transition: "transform 0.1s ease-out"
          }} 
        />
        <Sparkles 
          className="absolute bottom-1/3 left-1/2 text-accent animate-sparkle" 
          size={18} 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out"
          }} 
        />
        <Heart 
          className="absolute top-1/2 right-1/4 text-primary animate-sparkle" 
          size={16} 
          style={{ 
            animationDelay: '1.5s',
            transform: `translateY(${scrollY * -0.25}px)`,
            transition: "transform 0.1s ease-out"
          }} 
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-6 sm:py-8 md:py-12 px-4 sm:px-6 max-w-[1200px] mx-auto lg:px-8">
        {/* Title - Centered Below Countdown */}
        <div className="text-center mb-12 md:mb-16 mt-8 md:mt-12">
          <h1 className="font-bold leading-[1.3]" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            <span className="gradient-text neon-text">Learn Anime Art with Sweet</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center relative">
          {/* Left: Character Image (Desktop) */}
          <div className="hidden lg:block relative animate-slide-up order-1">
            <div className="relative rounded-3xl overflow-hidden neon-glow">
              <img 
                src="/images/sweet-character.jpg" 
                alt="Sweet - Your Anime Art Sensei and Creative Mentor"
                width={600}
                height={600}
                sizes="(max-width: 1024px) 0vw, 45vw"
                loading="eager"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Hearts */}
            <Heart className="absolute -top-4 -right-4 text-primary w-8 h-8 animate-float" fill="currentColor" />
            <Heart className="absolute bottom-20 -left-4 text-secondary w-6 h-6 animate-float" fill="currentColor" style={{ animationDelay: '1s' }} />
            
            {/* Speech Bubble - Desktop: Beside Character's Face */}
            <div className="absolute top-[15%] -right-[45%] w-[280px] bg-card/90 backdrop-blur-sm p-5 rounded-2xl border-2 border-primary/50 shadow-2xl shadow-primary/30 animate-glow-pulse" role="complementary" aria-label="Sweet's message to students">
              <p className="text-foreground italic text-sm leading-relaxed">
                "I'll be your sensei and bestie on this creative journey. Let's make something magical together!"
              </p>
              <div className="absolute left-[-12px] top-[25%] w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[15px] border-r-primary/50" aria-hidden="true" />
              <div className="absolute left-[-8px] top-[25%] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[12px] border-r-card/90" aria-hidden="true" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className={cn("animate-slide-up order-2 lg:pl-8", SPACING.stack.normal)}>
            <div className="space-y-4 mb-8 lg:mb-10">
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-auto lg:mx-0 px-4 md:px-0 lg:px-0 text-center md:text-center lg:text-left leading-relaxed text-sm sm:text-base lg:text-[18px] lg:leading-[1.6]">
                Hey cutie! 💜 Ready to level up your art skills?
              </p>
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-auto lg:mx-0 px-4 md:px-0 lg:px-0 text-center md:text-center lg:text-left leading-relaxed text-sm sm:text-base lg:text-[18px] lg:leading-[1.6]">
                Join 500+ creative otakus in my neon-lit universe where emotion meets technique.
              </p>
            </div>
            
            {/* Speech Bubble - Mobile/Tablet */}
            <div className="lg:hidden relative bg-card/90 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border-2 border-primary/50 shadow-lg shadow-primary/20 max-w-md mx-auto mb-8 animate-glow-pulse" role="complementary" aria-label="Sweet's message to students">
              <p className="text-foreground italic text-xs sm:text-sm leading-relaxed">
                "I'll be your sensei and bestie on this creative journey. Let's make something magical together!"
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/90 border-l-2 border-b-2 border-primary/50 transform rotate-45" aria-hidden="true" />
            </div>
            
            {/* CTAs - Desktop: Centralized */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 mb-8 lg:mb-10 px-4 md:px-0 lg:px-0 justify-center lg:justify-center items-center">
              <a 
                href={EXTERNAL_LINKS.coursify}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Enroll in Sweet Life Animes anime art course"
                className="w-full sm:w-auto md:w-[80%] md:mx-auto lg:w-[300px]"
              >
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group w-full min-h-[48px] text-base sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/50"
                >
                  Enroll Now 💜
                  <Heart className="group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a 
                href={EXTERNAL_LINKS.payhipShop}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit Sweet Life Animes Shop"
                className="w-full sm:w-auto md:w-[80%] md:mx-auto lg:w-[300px]"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-primary/50 hover:border-primary hover:bg-primary/10 w-full min-h-[48px] text-base sm:text-lg border-2 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl shadow-md hover:shadow-lg"
                >
                  <ShoppingBag className="group-hover:scale-110 transition-transform" />
                  Browse Shop
                </Button>
              </a>
            </div>
            
            {/* December Offer Card - Below CTA Area */}
            <div className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl border border-primary/40 shadow-2xl shadow-primary/20 mt-8 md:mt-10 mx-4 md:mx-0 lg:mx-0 max-w-3xl lg:max-w-none overflow-hidden" role="region" aria-label="Special December offer">
              <div className="absolute -top-2.5 -right-2 sm:-right-2.5 z-10">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-1 bg-gradient-to-r from-destructive to-primary rounded-full text-white text-[10px] sm:text-xs font-bold shadow-lg animate-pulse" role="status" aria-label="Limited time sale: 90% off in December">
                  🔥 90% OFF
                </span>
              </div>
              
              {/* Desktop/Tablet: 2-Column Layout */}
              <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 p-6 md:p-8 bg-[#2c1e4a] rounded-2xl items-center">
                {/* Left: Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="/images/sweet-character.jpg" 
                    alt="December Special Offer - Anime Art Course"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c1e4a]/80 to-transparent" />
                </div>
                
                {/* Right: Text Block */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-primary flex-shrink-0" size={24} />
                    <h3 className="text-2xl lg:text-3xl font-bold gradient-text">December Sale!</h3>
                  </div>
                  <p className="text-base text-white/90 leading-relaxed">
                    Complete course, AI magic, premium brushes & lifetime access. ✨
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-xl text-white/70 line-through">$297</span>
                    <span className="text-4xl lg:text-5xl text-white font-black">$29</span>
                  </div>
                  <a 
                    href={EXTERNAL_LINKS.coursify}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Enroll in December special for $29"
                    className="block"
                  >
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="group hover:scale-105 active:scale-95 transition-all duration-300 font-bold w-full md:w-auto px-8 py-6 text-base lg:text-lg shadow-2xl hover:shadow-primary/50 bg-primary hover:bg-primary/90"
                    >
                      Enroll for $29 (Save $268!)
                      <Sparkles className="group-hover:scale-110 transition-transform" size={18} />
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Mobile Layout: Vertical */}
              <div className="md:hidden space-y-3 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold gradient-text flex items-center gap-2">
                    <Sparkles className="text-primary flex-shrink-0" size={20} />
                    <span>December Sale!</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg text-muted-foreground line-through">$297</span>
                    <span className="text-3xl sm:text-4xl text-primary font-black">$29</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-3">
                  Complete course, AI magic, premium brushes & lifetime access. ✨
                </p>
                <a 
                  href={EXTERNAL_LINKS.coursify}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Enroll in December special for $29"
                  className="block w-full"
                >
                  <Button 
                    variant="hero" 
                    size="default" 
                    className="group hover:scale-105 active:scale-95 transition-all duration-200 font-bold w-full min-h-[48px] text-sm sm:text-base"
                  >
                    Enroll for $29 (Save $268!)
                    <Sparkles className="group-hover:scale-110 transition-transform" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Mobile Image (shown only on mobile/tablet) */}
          <div className="lg:hidden relative animate-slide-up max-w-2xl mx-auto order-3" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden neon-glow">
              <img 
                src="/images/sweet-character.jpg" 
                alt="Sweet - Your Anime Art Sensei and Creative Mentor"
                width={800}
                height={450}
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 0vw"
                loading="eager"
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px]"
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
