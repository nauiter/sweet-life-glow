import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Zap, X, Gift, Heart, Sparkles } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

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
        className="max-w-3xl bg-gradient-to-br from-destructive/10 via-background/95 to-primary/10 backdrop-blur-xl border-2 border-primary/50 p-0 overflow-hidden shadow-2xl"
        aria-describedby="exit-intent-description"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors group"
          aria-label="Close exit intent modal"
        >
          <X className="text-muted-foreground group-hover:text-foreground" size={20} />
        </button>

        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Urgent Header */}
          <div className="bg-gradient-to-r from-destructive via-primary to-destructive p-6 text-center relative overflow-hidden animate-pulse">
            <div className="absolute inset-0 opacity-30">
              <AlertTriangle className="absolute top-2 left-4 animate-bounce" size={24} />
              <Zap className="absolute bottom-3 right-6 animate-bounce" size={20} style={{ animationDelay: '0.3s' }} />
              <AlertTriangle className="absolute top-4 right-10 animate-bounce" size={18} style={{ animationDelay: '0.6s' }} />
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/30 rounded-full mb-3 animate-bounce">
                <AlertTriangle className="text-white" size={24} />
                <span className="text-white font-black text-base uppercase tracking-wider">
                  ⚠️ WAIT! DON'T LEAVE YET!
                </span>
              </div>
              
              <h2 className={cn(TYPOGRAPHY.heading.h1, "text-white mb-2 text-shadow-lg")}>
                One-Time Offer!
              </h2>
              
              <p className={cn(TYPOGRAPHY.body.intro, "text-white/95 font-semibold")}>
                Before you go... grab this exclusive deal! 🔥
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className={cn(SPACING.card.spacious)}>
            <div className={SPACING.stack.normal}>
              {/* Offer Box */}
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-primary/40 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-3 py-1 bg-destructive text-white text-xs font-bold rounded-full animate-pulse">
                    LIMITED TIME
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className={cn(TYPOGRAPHY.heading.h2, "gradient-text font-black mb-2")}>
                    LAST CHANCE BONUS
                  </div>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full">
                    <span className={cn(TYPOGRAPHY.heading.h1, "text-white font-black")}>
                      $297 FREE
                    </span>
                  </div>
                </div>

                <p id="exit-intent-description" className={cn(TYPOGRAPHY.body.intro, "text-foreground font-semibold mb-6")}>
                  Enroll NOW and get instant access to our complete Premium Bundle - absolutely FREE!
                </p>

                {/* Quick Benefits */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <QuickBenefit 
                    icon={<Sparkles className="text-primary" />}
                    text="AI Art Generator Pro"
                  />
                  <QuickBenefit 
                    icon={<Gift className="text-secondary" />}
                    text="100+ Premium Brushes"
                  />
                  <QuickBenefit 
                    icon={<Zap className="text-accent" />}
                    text="Secret Masterclass"
                  />
                  <QuickBenefit 
                    icon={<Heart className="text-primary" fill="currentColor" />}
                    text="Lifetime Updates"
                  />
                </div>
              </div>

              {/* Urgency Message */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="text-destructive flex-shrink-0 mt-1 animate-pulse" size={24} />
                <div>
                  <p className={cn(TYPOGRAPHY.body.default, "text-foreground font-bold mb-1")}>
                    ⏰ This offer disappears if you leave this page!
                  </p>
                  <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>
                    Don't miss out on $297 worth of premium content. Join 500+ artists who already claimed their bonus!
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleCTA}
                  variant="hero" 
                  size="xl" 
                  className="w-full group text-lg font-black animate-pulse hover:animate-none"
                >
                  <Gift className="group-hover:scale-110 transition-transform" size={24} />
                  YES! Claim My $297 Bonus Now
                  <Zap className="group-hover:scale-110 transition-transform" size={24} />
                </Button>
                
                <button
                  onClick={handleClose}
                  className={cn(
                    TYPOGRAPHY.body.small,
                    "text-muted-foreground hover:text-foreground transition-colors underline text-center py-2"
                  )}
                >
                  No thanks, I don't want premium content for free
                </button>
              </div>

              {/* Trust Badge */}
              <div className="text-center pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Heart size={16} className="text-primary" fill="currentColor" />
                  <span className={cn(TYPOGRAPHY.body.small, "italic")}>
                    Join 500+ happy artists who claimed this offer
                  </span>
                  <Heart size={16} className="text-primary" fill="currentColor" />
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
  <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <span className={cn(TYPOGRAPHY.body.small, "text-foreground font-semibold")}>
      {text}
    </span>
  </div>
);
