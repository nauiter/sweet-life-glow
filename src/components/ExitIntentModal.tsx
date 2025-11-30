import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Zap, X, Gift, Heart, Sparkles, Palette, Users, BookOpen, Video } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const STORAGE_KEY = "sweet-life-exit-intent-shown";

  useEffect(() => {
    // Check if exit intent was already triggered
    const hasSeenExitIntent = localStorage.getItem(STORAGE_KEY);
    
    if (hasSeenExitIntent) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger only when mouse exits from the top of the page
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        localStorage.setItem(STORAGE_KEY, "true");
      }
    };

    // Add small delay before activating exit intent (5 seconds)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleCTA = () => {
    setIsOpen(false);
    window.open(EXTERNAL_LINKS.coursify, "_blank");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-[85%] sm:max-w-[65%] md:max-w-[55%] lg:max-w-[50%] xl:max-w-[45%] w-full bg-gradient-to-br from-destructive/10 via-background/95 to-primary/10 backdrop-blur-xl border-2 border-primary/50 p-0 shadow-2xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:duration-500 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-300"
        aria-describedby="exit-intent-description"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-50 p-1.5 rounded-full bg-background/50 hover:bg-background/80 transition-colors group"
          aria-label="Close exit intent modal"
        >
          <X className="text-muted-foreground group-hover:text-foreground" size={18} />
        </button>

        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-fade-in" style={{ animationDuration: '0.6s' }} />
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-parallax-1" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-3xl animate-parallax-2" />
        </div>

        {/* Content */}
        <div className="relative z-10 animate-fade-in" style={{ animationDuration: '0.6s', animationDelay: '0.2s' }}>
          {/* Main Content */}
          <div className="p-4 sm:p-5">
            <div className="space-y-3">
              {/* Offer Box */}
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border-2 border-primary/40 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 bg-destructive text-white text-[10px] font-bold rounded-full animate-pulse">
                    LIMITED TIME
                  </span>
                </div>
                
                <div className="mb-3">
                  <div className="text-xl sm:text-2xl gradient-text font-black mb-2">
                    LAST CHANCE: DECEMBER SALE
                  </div>
                  <div className="flex items-center justify-center gap-2 flex-wrap mb-2">
                    <div className="text-center">
                      <div className="text-[10px] text-muted-foreground mb-0.5">Was</div>
                      <div className="text-xl sm:text-2xl text-muted-foreground line-through font-bold">$297</div>
                    </div>
                    <div className="text-2xl text-primary">→</div>
                    <div className="inline-block px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white/20">
                      <div className="text-[10px] text-white/90 mb-0.5">Now Only</div>
                      <span className="text-3xl sm:text-4xl text-white font-black">
                        $29
                      </span>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-destructive text-white rounded-full animate-pulse">
                    <span className="text-xs font-black">
                      🔥 SAVE 90% - ENDS DEC 31
                    </span>
                  </div>
                </div>

                <p id="exit-intent-description" className="text-sm text-foreground font-semibold mb-3">
                  Full course + premium bonuses for just $29!
                </p>

                {/* Quick Benefits - 8 items in 2 columns */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <QuickBenefit 
                    icon={<Sparkles className="text-primary" size={14} />}
                    text="AI Art Pro"
                  />
                  <QuickBenefit 
                    icon={<Heart className="text-primary" fill="currentColor" size={14} />}
                    text="Lifetime Access"
                  />
                  <QuickBenefit 
                    icon={<Palette className="text-secondary" size={14} />}
                    text="100+ Brushes"
                  />
                  <QuickBenefit 
                    icon={<Zap className="text-accent" size={14} />}
                    text="Secret Class"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <QuickBenefit 
                    icon={<BookOpen className="text-accent" size={14} />}
                    text="Pro Techniques"
                  />
                  <QuickBenefit 
                    icon={<Gift className="text-primary" size={14} />}
                    text="Bonus Content"
                  />
                  <QuickBenefit 
                    icon={<Video className="text-secondary" size={14} />}
                    text="Video Tutorials"
                  />
                  <QuickBenefit 
                    icon={<Users className="text-accent" fill="currentColor" size={14} />}
                    text="Community"
                  />
                </div>
              </div>

              {/* Urgency Message - Simplified */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-2.5 text-center flex items-center justify-center min-h-[40px]">
                <p className="text-xs text-foreground font-bold leading-none my-0">
                  ⏰ 90% discount ends December 31st!
                </p>
              </div>

              {/* CTA Button - Focus */}
              <Button 
                onClick={handleCTA}
                variant="hero" 
                size="lg" 
                className="w-full group text-base font-black animate-pulse hover:animate-none"
              >
                <Gift className="group-hover:scale-110 transition-transform" size={18} />
                YES! Give Me 90% OFF ($29)
                <Zap className="group-hover:scale-110 transition-transform" size={18} />
              </Button>
              
              <button
                onClick={handleClose}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline text-center w-full py-1"
              >
                No thanks, I'll pay $297 later
              </button>

              {/* Trust Badge - Minimal */}
              <div className="text-center pt-2 border-t" style={{ borderTopColor: `hsl(var(--separator-color) / var(--separator-opacity))` }}>
                <div className="flex items-center justify-center gap-1.5 text-muted-foreground">
                  <Heart size={12} className="text-primary" fill="currentColor" />
                  <span className="text-[10px] italic">
                    500+ artists claimed this offer
                  </span>
                  <Heart size={12} className="text-primary" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const QuickBenefit = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-1.5 bg-background/50 backdrop-blur-sm rounded-lg p-2 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ animation: 'pulse 3s ease-in-out infinite' }}>
      {icon}
    </div>
    <span className="text-[10px] text-foreground font-semibold">
      {text}
    </span>
  </div>
);