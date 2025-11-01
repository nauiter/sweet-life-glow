import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, Clock } from "lucide-react";

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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/30 neon-glow glow-pulse">
            <Bell className="text-primary" size={20} />
            <span className="text-sm font-medium gradient-text">Stay Updated</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Latest Updates
          </h2>
          <p className="text-xl text-muted-foreground">
            Fresh content, events, and announcements! The Sweet Life never stops evolving. ✨
          </p>
        </div>

        {/* Updates List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {updates.map((update, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/70 backdrop-blur-sm transition-all animate-slide-up group cursor-pointer ${
                update.urgent 
                  ? 'border-primary/50 neon-glow hover:border-primary' 
                  : 'border-primary/20 hover:border-primary/50 hover:neon-glow'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge 
                      variant={update.urgent ? "default" : "secondary"}
                      className={update.urgent ? "glow-pulse" : ""}
                    >
                      {update.badge}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{update.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                    {update.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{update.date}</span>
                  </div>
                </div>
                
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  update.urgent ? 'bg-primary/20 neon-glow' : 'bg-secondary/20'
                }`}>
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
