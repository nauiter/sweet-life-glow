import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Palette, Users, Zap, Lock, Send } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const benefits = [
    {
      icon: Palette,
      title: "Master Anime Techniques",
      description: "From basic anatomy to advanced shading, I'll teach you everything about anime art creation."
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "Learn to infuse your art with feeling and create characters that resonate with viewers."
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Join a supportive crew of fellow artists. Share, learn, and grow together in our Discord."
    },
    {
      icon: Zap,
      title: "Weekly Updates",
      description: "Fresh content every week. New lessons, art packs, and challenges to keep you inspired."
    },
    {
      icon: Lock,
      title: "Private Community",
      description: "Get exclusive access to Sweet's inner circle. Chat, share, and grow inside our private creative space just for supporters."
    },
    {
      icon: Send,
      title: "Direct Support",
      description: "Get priority support and personalized feedback from Sweet to accelerate your artistic growth."
    }
  ];

  return (
    <section id="about" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="about-heading">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Section Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <h2 id="about-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            About the Course
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            This isn't just another art course—it's your creative awakening. I'm Sweet, and I'll be your sensei and friend on this journey.
          </p>
        </div>

        {/* Who's Sweet Card */}
        <Card className={cn(SPACING.container.content, SPACING.card.spacious, "card-solid animate-slide-up", SPACING.margin.hero)}>
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow">
              <Heart size={40} className="text-white" fill="currentColor" />
            </div>
            <div className={SPACING.stack.normal}>
              <h3 className={cn(TYPOGRAPHY.heading.h3, "gradient-text")}>Who's Sweet? 💜</h3>
              <p className="text-foreground leading-relaxed">
                I'm a self-taught anime artist who turned passion into profession. After years of practice and building a community of thousands, I created this course to share everything I wish I knew when I started. Think of me as your fun sensei who keeps it real—no boring lectures, just practical skills and genuine support.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="badge-primary">VTuber Artist</span>
                <span className="badge-secondary">Digital Illustrator</span>
                <span className="badge-accent">Creative Mentor</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-2", SPACING.grid.normal, SPACING.container.wide, SPACING.margin.major)}>
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={cn(SPACING.card.default, "card-elevated animate-slide-up group")}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="icon-wrapper group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div className={SPACING.stack.tight}>
                  <h3 className={cn(TYPOGRAPHY.heading.h4, "font-bold")}>{benefit.title}</h3>
                  <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Start your anime art journey with Sweet Life Animes"
          >
            <Button variant="hero" size="xl">
              Start Your Journey
              <Heart fill="currentColor" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
