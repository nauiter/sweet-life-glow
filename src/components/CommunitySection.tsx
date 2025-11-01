import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote, Star, Users } from "lucide-react";

export const CommunitySection = () => {
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
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm border-primary/30 neon-glow animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">1K+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg text-muted-foreground">
            Ready to become part of this amazing community?
          </p>
          <Button variant="hero" size="xl">
            Join Sweet's Circle
          </Button>
        </div>
      </div>
    </section>
  );
};
