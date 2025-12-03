import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, Star, Users } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useParallax } from "@/hooks/useParallax";

export const CommunitySection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(0.2);


  // Use custom hook for animated counters
  const ratingCount = useAnimatedCounter({ target: 4.9, duration: 1500, isDecimal: true, enabled: hasAnimated });
  const studentsCount = useAnimatedCounter({ target: 500, duration: 1800, enabled: hasAnimated });
  const lessonsCount = useAnimatedCounter({ target: 50, duration: 1200, enabled: hasAnimated });
  const artworksCount = useAnimatedCounter({ target: 1000, duration: 1800, enabled: hasAnimated });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);
  const testimonials = [
    {
      name: "Mika Chen",
      role: "Digital Artist",
      content: "Sweet's teaching style is incredible! She makes complex techniques feel approachable and fun. My art improved more in 3 months than in years of self-teaching.",
      rating: 5
    },
    {
      name: "Alex Rivera",
      role: "Aspiring Animator",
      content: "The community alone is worth it. Everyone's so supportive and Sweet is always there to help. Plus the weekly updates keep me motivated!",
      rating: 5
    },
    {
      name: "Sarah Kim",
      role: "Hobby Artist",
      content: "I was nervous about joining, but Sweet made me feel welcome instantly. The course structure is perfect for beginners like me. Love it! 💜",
      rating: 5
    }
  ];

  return (
    <section id="community" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="community-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl transition-transform duration-100" 
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow", SPACING.margin.close)}>
            <Users className="text-primary" size={20} />
            <span className={cn(TYPOGRAPHY.badge)}>Join 500+ Creative Otakus</span>
          </div>
          <h2 id="community-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Community Love
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Don't just take my word for it. Here's what the fam is saying! ✨
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3", SPACING.grid.normal, SPACING.container.full, SPACING.margin.hero)}>
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card 
                className={cn(SPACING.card.default, "card-elevated h-full")}
              >
                <Quote className={cn("text-primary", SPACING.margin.close)} size={32} />
                <p className={cn(TYPOGRAPHY.body.small, "text-foreground leading-relaxed italic", SPACING.margin.close)}>
                  "{testimonial.content}"
                </p>
                <div className={cn("flex items-center gap-1", SPACING.margin.tight)}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>{testimonial.role}</div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div ref={statsRef} className={SPACING.container.content}>
          <Card className={cn(SPACING.card.spacious, "card-gradient animate-slide-up group")}>
            <div className={cn("grid grid-cols-2 lg:grid-cols-4", SPACING.grid.normal, "text-center")} style={{ contain: 'layout style paint' }}>
              <div className="transition-transform duration-300 hover:scale-105" style={{ willChange: hasAnimated ? 'auto' : 'contents' }}>
                <div className={cn(TYPOGRAPHY.stat.number, "gradient-text", SPACING.margin.tight)}>{ratingCount.toFixed(1)}/5</div>
                <div className={cn(TYPOGRAPHY.stat.label, "text-muted-foreground")}>Average Rating</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-105" style={{ willChange: hasAnimated ? 'auto' : 'contents' }}>
                <div className={cn(TYPOGRAPHY.stat.number, "gradient-text", SPACING.margin.tight)}>{studentsCount}+</div>
                <div className={cn(TYPOGRAPHY.stat.label, "text-muted-foreground")}>Active Students</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-105" style={{ willChange: hasAnimated ? 'auto' : 'contents' }}>
                <div className={cn(TYPOGRAPHY.stat.number, "gradient-text", SPACING.margin.tight)}>{lessonsCount}+</div>
                <div className={cn(TYPOGRAPHY.stat.label, "text-muted-foreground")}>Lessons</div>
              </div>
              <div className="transition-transform duration-300 hover:scale-105" style={{ willChange: hasAnimated ? 'auto' : 'contents' }}>
                <div className={cn(TYPOGRAPHY.stat.number, "gradient-text", SPACING.margin.tight)}>{artworksCount >= 1000 ? '1K+' : `${artworksCount}+`}</div>
                <div className={cn(TYPOGRAPHY.stat.label, "text-muted-foreground")}>Artworks</div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className={cn("text-center animate-slide-up", SPACING.margin.normal)} style={{ animationDelay: '0.3s' }}>
          <p className={cn(TYPOGRAPHY.body.intro, "gradient-text", SPACING.margin.close)}>
            Ready to become part of this amazing community?
          </p>
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Join Sweet Life Animes creative community"
          >
            <Button variant="hero" size="xl">
              Join Sweet's Circle
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
