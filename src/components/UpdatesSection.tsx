import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Clock } from "lucide-react";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const UpdatesSection = () => {
  const updates = [
    {
      type: "New Release",
      title: "Pose Reference Pack Vol. 2 Released!",
      date: "Nov 5, 2025",
      badge: "New",
      urgent: false
    },
    {
      type: "Limited Time",
      title: "Next Class Enrollment Opens in 3 Days",
      date: "Nov 8, 2025",
      badge: "Urgent",
      urgent: true
    },
    {
      type: "Weekly Event",
      title: "Live Art Session This Saturday",
      date: "Nov 9, 2025",
      badge: "Event",
      urgent: false
    }
  ];

  return (
    <section id="updates" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="updates-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" aria-hidden="true" />
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow glow-pulse", SPACING.margin.close)}>
            <Bell className="text-primary" size={20} />
            <span className={cn(TYPOGRAPHY.badge, "gradient-text")}>Stay Updated</span>
          </div>
          <h2 id="updates-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Latest Updates
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Fresh content, events, and announcements! The Sweet Life never stops evolving. ✨
          </p>
        </div>

        {/* Updates List */}
        <div className={cn(SPACING.container.content, SPACING.stack.normal)} role="feed" aria-label="Latest updates and announcements" aria-live="polite">
          {updates.map((update, index) => (
            <Card 
              key={index}
              className={cn(SPACING.card.default, `card-elevated transition-all animate-slide-up group cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                update.urgent 
                  ? 'border-primary/50 neon-glow hover:border-primary' 
                  : 'hover:neon-glow'
              }`)}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="article"
              tabIndex={0}
              aria-label={`${update.type}: ${update.title}, dated ${update.date}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className={cn("flex-1", SPACING.stack.tight)}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge 
                      variant={update.urgent ? "default" : "secondary"}
                      className={update.urgent ? "glow-pulse" : ""}
                      role={update.urgent ? "status" : undefined}
                      aria-label={update.urgent ? `Urgent: ${update.badge}` : update.badge}
                    >
                      {update.badge}
                    </Badge>
                    <span className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>{update.type}</span>
                  </div>
                  
                  <h3 className={cn(TYPOGRAPHY.heading.h4, "group-hover:gradient-text transition-all")}>
                    {update.title}
                  </h3>
                  
                  <div className={cn(TYPOGRAPHY.body.small, "flex items-center gap-2 text-muted-foreground")}>
                    <Calendar size={16} />
                    <span>{update.date}</span>
                  </div>
                </div>
                
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  update.urgent ? 'bg-primary/20 neon-glow' : 'bg-secondary/20'
                }`} aria-hidden="true">
                  {update.urgent ? (
                    <Clock className="text-primary" size={24} />
                  ) : (
                    <Bell className="text-secondary" size={24} />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
