import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Palette, Users, Zap, Lock, Send } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import sweetPhoto from "@/assets/sweet5.webp";
import { AnimatedSection } from "@/components/AnimatedSection";

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
    <section id="about" className="relative overflow-hidden py-12 md:py-24" aria-labelledby="about-heading">
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
        <Card className={cn(SPACING.container.content, "p-4 sm:p-6 md:p-8", "card-solid animate-slide-up", SPACING.margin.hero)}>
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-start gap-4 md:gap-6 lg:gap-8">
            {/* Left Column - Text Content */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4 md:gap-6 w-full">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow mx-auto sm:mx-0 lg:mx-0">
                <Heart size={24} className="text-white md:w-8 md:h-8" fill="currentColor" />
              </div>
              <div className="flex-1 text-center sm:text-left space-y-4 w-full">
                <h3 className={cn(TYPOGRAPHY.heading.h3, "gradient-text")}>Who's Sweet? 💜</h3>
                
                <div className="space-y-3 max-w-2xl mx-auto sm:mx-0 md:text-[18px]">
                  <p className="text-foreground leading-relaxed text-base">
                    I'm a self-taught anime artist who turned passion into profession. After years of practice and building a community of thousands, I created this course to share everything I wish I knew when I started.
                  </p>
                  <p className="text-foreground leading-relaxed text-base">
                    Think of me as your fun sensei who keeps it real—no boring lectures, just practical skills and genuine support.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/30 border-2 border-primary/40 rounded-full text-foreground text-sm font-semibold backdrop-blur-sm hover:scale-105 transition-transform relative group cursor-pointer"
                    data-tooltip="VTuber Artist"
                  >
                    <span className="md:hidden lg:inline">VTuber Artist</span>
                    <span className="hidden md:inline lg:hidden">🎨</span>
                    <span className="hidden md:group-hover:block absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/95 border border-primary/40 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-10 shadow-lg">
                      VTuber Artist
                    </span>
                  </span>
                  <span 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary/20 to-secondary/30 border-2 border-secondary/40 rounded-full text-foreground text-sm font-semibold backdrop-blur-sm hover:scale-105 transition-transform relative group cursor-pointer"
                    data-tooltip="Digital Illustrator"
                  >
                    <span className="md:hidden lg:inline">Digital Illustrator</span>
                    <span className="hidden md:inline lg:hidden">✏️</span>
                    <span className="hidden md:group-hover:block absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/95 border border-secondary/40 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-10 shadow-lg">
                      Digital Illustrator
                    </span>
                  </span>
                  <span 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/30 border-2 border-accent/40 rounded-full text-foreground text-sm font-semibold backdrop-blur-sm hover:scale-105 transition-transform relative group cursor-pointer"
                    data-tooltip="Creative Mentor"
                  >
                    <span className="md:hidden lg:inline">Creative Mentor</span>
                    <span className="hidden md:inline lg:hidden">💡</span>
                    <span className="hidden md:group-hover:block absolute -bottom-12 left-1/2 -translate-x-1/2 bg-background/95 border border-accent/40 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-10 shadow-lg">
                      Creative Mentor
                    </span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image/Illustration */}
            <div className="hidden lg:block relative w-full h-full min-h-[300px]">
              <div className="relative rounded-2xl overflow-hidden neon-glow h-full group/image">
                <img 
                  src={sweetPhoto} 
                  alt="Sweet - Your Creative Mentor"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/image:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent transition-opacity duration-500 group-hover/image:opacity-80" />
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </div>
              <Heart className="absolute -top-3 -right-3 text-primary w-8 h-8 animate-float" fill="currentColor" />
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6", SPACING.container.wide, SPACING.margin.major)}>
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card 
                className={cn(SPACING.card.default, "card-elevated group h-full")}
              >
                <div className="flex items-start gap-4">
                  <div className="icon-wrapper group-hover:scale-110 transition-transform will-change-transform">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div className={SPACING.stack.tight}>
                    <h3 className={cn(TYPOGRAPHY.heading.h4, "font-bold")}>{benefit.title}</h3>
                    <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>{benefit.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
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
