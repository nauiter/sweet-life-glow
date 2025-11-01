import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, Star, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const CommunitySection = () => {
  const [counts, setCounts] = useState({ rating: 0, students: 0, lessons: 0, artworks: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('rating', 4.9, 1500, true);
          animateCount('students', 500, 1800);
          animateCount('lessons', 50, 1200);
          animateCount('artworks', 1000, 1800);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key: 'rating' | 'students' | 'lessons' | 'artworks', target: number, duration: number, isDecimal = false) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        const value = isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current);
        setCounts(prev => ({ ...prev, [key]: value }));
      }
    }, 16);
  };
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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow">
            <Users className="text-primary" size={20} />
            <span className="text-sm font-medium">Join 500+ Creative Otakus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Community Love
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take my word for it—here's what the fam is saying! ✨
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-foreground mb-4 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div ref={statsRef} className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-primary/30 neon-glow animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">{counts.rating.toFixed(1)}/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">{counts.students}+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">{counts.lessons}+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">{counts.artworks >= 1000 ? '1K+' : `${counts.artworks}+`}</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg text-muted-foreground">
            Ready to become part of this amazing community?
          </p>
          <a 
            href="https://www.patreon.com/cw/SweetLifeAnimes" 
            target="_blank" 
            rel="noopener noreferrer"
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
