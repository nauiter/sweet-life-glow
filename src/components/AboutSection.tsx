import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Palette, Users, Zap, Lock, Send } from "lucide-react";

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
      title: "Private Community (Patreon Members)",
      description: "Get exclusive access to Sweet's inner circle. Chat, share, and grow inside our private creative space just for supporters."
    },
    {
      icon: Send,
      title: "Telegram Access (Private Channel)",
      description: "Join the secret Telegram group for real-time updates, drops, and Sweet's behind-the-scenes moments."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About the Course</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            This isn't just another art course—it's your creative awakening. I'm Sweet, and I'll be your sensei and friend on this journey.
          </p>
        </div>

        {/* Who's Sweet Card */}
        <Card className="max-w-4xl mx-auto mb-16 p-8 bg-card/70 backdrop-blur-sm border-primary/30 neon-glow animate-slide-up">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow">
              <Heart size={40} className="text-white" fill="currentColor" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Who's Sweet? 💜</h3>
              <p className="text-foreground leading-relaxed">
                I'm a self-taught anime artist who turned passion into profession. After years of practice and building a community of thousands, I created this course to share everything I wish I knew when I started. Think of me as your fun sensei who keeps it real—no boring lectures, just practical skills and genuine support.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/50">VTuber Artist</span>
                <span className="px-3 py-1 bg-secondary/20 rounded-full text-sm border border-secondary/50">Digital Illustrator</span>
                <span className="px-3 py-1 bg-accent/20 rounded-full text-sm border border-accent/50">Creative Mentor</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://www.patreon.com/cw/SweetLifeAnimes" 
            target="_blank" 
            rel="noopener noreferrer"
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
