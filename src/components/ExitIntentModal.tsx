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
        className="max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[55%] xl:max-w-[50%] w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-destructive/10 via-background/95 to-primary/10 backdrop-blur-xl border-2 border-primary/50 p-0 shadow-2xl"
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
          <div className="bg-gradient-to-r from-destructive via-primary to-destructive p-4 sm:p-5 text-center relative overflow-hidden animate-pulse">
            <div className="absolute inset-0 opacity-30">
              <AlertTriangle className="absolute top-2 left-4 animate-bounce" size={24} />
              <Zap className="absolute bottom-3 right-6 animate-bounce" size={20} style={{ animationDelay: '0.3s' }} />
              <AlertTriangle className="absolute top-4 right-10 animate-bounce" size={18} style={{ animationDelay: '0.6s' }} />
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/30 rounded-full mb-2 animate-bounce">
                <AlertTriangle className="text-white" size={20} />
                <span className="text-white font-black text-sm uppercase tracking-wider">
                  ⚠️ WAIT! DON'T LEAVE YET!
                </span>
              </div>
              
              <h2 className={cn(TYPOGRAPHY.heading.h2, "text-white mb-1.5 text-shadow-lg")}>
                One-Time Offer!
              </h2>
              
              <p className={cn(TYPOGRAPHY.body.default, "text-white/95 font-semibold")}>
                Before you go... grab this exclusive deal! 🔥
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              {/* Offer Box */}
              <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border-2 border-primary/40 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-3 py-1 bg-destructive text-white text-xs font-bold rounded-full animate-pulse">
                    LIMITED TIME
                  </span>
                </div>
                
              <div className="mb-3 sm:mb-4">
                <div className={cn(TYPOGRAPHY.heading.h3, "gradient-text font-black mb-2")}>
                  LAST CHANCE: DECEMBER SALE
                </div>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <div className="text-center">
                    <div className={cn(TYPOGRAPHY.body.small, "text-muted-foreground mb-1")}>Was</div>
                    <div className={cn(TYPOGRAPHY.heading.h3, "text-muted-foreground line-through")}>$297</div>
                  </div>
                  <div className={cn(TYPOGRAPHY.heading.h2, "text-primary")}>→</div>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-white/20">
                    <div className={cn(TYPOGRAPHY.body.small, "text-white/90 mb-1")}>Now Only</div>
                    <span className={cn(TYPOGRAPHY.heading.h1, "text-white font-black text-4xl sm:text-5xl")}>
                      $29
                    </span>
                  </div>
                </div>
                <div className="inline-block px-4 py-1.5 bg-destructive text-white rounded-full mt-3 animate-pulse">
                  <span className={cn(TYPOGRAPHY.body.small, "font-black")}>
                    🔥 SAVE 90% - ENDS DECEMBER 31
                  </span>
                </div>
              </div>

                <p id="exit-intent-description" className={cn(TYPOGRAPHY.body.default, "text-foreground font-semibold mb-4")}>
                  Don't leave without grabbing the biggest discount of the year! Full course + premium bonuses for just $29!
                </p>

                {/* Quick Benefits */}
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
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
              <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-3 flex items-start gap-2">
                <AlertTriangle className="text-destructive flex-shrink-0 mt-1 animate-pulse" size={20} />
                <div>
                  <p className={cn(TYPOGRAPHY.body.small, "text-foreground font-bold mb-1")}>
                    ⏰ December special ends December 31st at midnight!
                  </p>
                  <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground text-xs")}>
                    This 90% discount ($297 → $29) is our biggest sale ever. After December, price returns to normal. Don't miss out!
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-card/50 rounded-lg p-2.5 border border-primary/20 text-center">
                <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground mb-1 text-xs")}>
                  💳 Secure Payment Options:
                </p>
                <p className={cn(TYPOGRAPHY.body.small, "text-foreground font-semibold")}>
                  PayPal • Stripe • PagSeguro
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5">
                <Button 
                  onClick={handleCTA}
                  variant="hero" 
                  size="lg" 
                  className="w-full group text-base sm:text-lg font-black animate-pulse hover:animate-none"
                >
                  <Gift className="group-hover:scale-110 transition-transform" size={20} />
                  YES! Give Me 90% OFF ($29 Only)
                  <Zap className="group-hover:scale-110 transition-transform" size={20} />
                </Button>
                
                <button
                  onClick={handleClose}
                  className={cn(
                    TYPOGRAPHY.body.small,
                    "text-muted-foreground hover:text-foreground transition-colors underline text-center py-2"
                  )}
                >
                  No thanks, I'll pay full price later ($297)
                </button>
              </div>

              {/* Trust Badge */}
              <div className="text-center pt-3 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Heart size={14} className="text-primary" fill="currentColor" />
                  <span className={cn(TYPOGRAPHY.body.small, "italic text-xs")}>
                    Join 500+ happy artists who claimed this offer
                  </span>
                  <Heart size={14} className="text-primary" fill="currentColor" />
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
  <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-lg p-2.5 border border-primary/20">
    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <span className={cn(TYPOGRAPHY.body.small, "text-foreground font-semibold text-xs")}>
      {text}
    </span>
  </div>
);
