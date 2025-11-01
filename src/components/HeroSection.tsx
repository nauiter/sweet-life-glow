import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import sweetCharacter from "@/assets/sweet-character.jpg";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [counts, setCounts] = useState({ otakus: 0, artworks: 0, updates: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('otakus', 500, 1500);
          animateCount('artworks', 1000, 1800);
          animateCount('updates', 50, 1200);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key: 'otakus' | 'artworks' | 'updates', target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow">
              <span className="text-sm font-medium gradient-text">✨ Welcome to Your Sweet Creative Life</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Learn Anime Art</span>
              <br />
              <span className="neon-text">with Sweet</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Hey cutie! 💜 Ready to level up your art skills? Join 500+ creative otakus in my neon-lit universe where emotion meets technique.
            </p>
            
            {/* Speech Bubble */}
            <div className="relative bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-primary/30 neon-glow max-w-md">
              <p className="text-foreground italic">
                "I'll be your sensei and bestie on this creative journey. Let's make something magical together!"
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/70 border-l border-b border-primary/30 transform rotate-45" />
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.patreon.com/c/SweetLifeAnimes" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="xl" className="group">
                  Enroll Now
                  <Heart className="group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a 
                href="https://youtube.com/@sweetlifeacademy" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="xl">
                  Watch Free Class
                </Button>
              </a>
            </div>
            
            {/* Stats */}
            <div ref={statsRef} className="flex gap-8 pt-6">
              <div>
                <div className="text-3xl font-bold gradient-text">{counts.otakus}+</div>
                <div className="text-sm text-muted-foreground">Creative Otakus</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">{counts.artworks}+</div>
                <div className="text-sm text-muted-foreground">Artworks Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">{counts.updates}+</div>
                <div className="text-sm text-muted-foreground">Weekly Updates</div>
              </div>
            </div>
          </div>
          
          {/* Right: Character Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden neon-glow">
              <img 
                src={sweetCharacter} 
                alt="Sweet - Your Anime Art Sensei"
                className="w-full h-auto object-cover float-animation"
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
