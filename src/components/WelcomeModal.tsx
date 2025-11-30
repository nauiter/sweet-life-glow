import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, X, Heart } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const STORAGE_KEY = "sweet-life-welcome-modal-shown";
  const DELAY_MS = 3000; // Show after 3 seconds

  useEffect(() => {
    // Check if modal was already shown
    const hasSeenModal = localStorage.getItem(STORAGE_KEY);
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, DELAY_MS);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (dontShowAgain: boolean = false) => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const handleCTA = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.open(EXTERNAL_LINKS.coursify, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose(true)}>
      <DialogContent 
        className="max-w-2xl bg-gradient-to-br from-card/95 via-background/95 to-card/95 backdrop-blur-xl border-2 border-primary/40 p-0 overflow-hidden"
        aria-describedby="welcome-modal-description"
      >
        {/* Close Button */}
        <button
          onClick={() => handleClose(true)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors group"
          aria-label="Close welcome modal"
        >
          <X className="text-muted-foreground group-hover:text-foreground" size={20} />
        </button>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-primary via-secondary to-primary p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Sparkles className="absolute top-2 left-4 animate-sparkle" size={20} />
              <Sparkles className="absolute bottom-3 right-6 animate-sparkle" size={16} style={{ animationDelay: '0.5s' }} />
              <Heart className="absolute top-4 right-10 animate-sparkle" size={18} style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-3">
                <Gift className="text-white animate-bounce" size={20} />
                <span className="text-white font-bold text-sm uppercase tracking-wide">
                  Special Welcome Offer
                </span>
              </div>
              
              <h2 className={cn(TYPOGRAPHY.heading.h2, "text-white mb-2")}>
                Welcome, Creative Soul! 💜
              </h2>
              
              <p className={cn(TYPOGRAPHY.body.intro, "text-white/90")}>
                Your anime art journey starts here
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className={cn(SPACING.card.spacious)}>
            <div className={SPACING.stack.normal}>
              {/* Offer Details */}
              <div className="text-center">
              <div className="mb-4">
                <div className={cn(TYPOGRAPHY.heading.h2, "gradient-text font-black mb-2")}>
                  DECEMBER MEGA SALE
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className={cn(TYPOGRAPHY.heading.h2, "text-muted-foreground line-through")}>$297</span>
                  <span className={cn(TYPOGRAPHY.heading.h1, "text-primary font-black")}>→</span>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full">
                    <span className={cn(TYPOGRAPHY.heading.h1, "text-white font-black")}>
                      $29
                    </span>
                  </div>
                </div>
                <div className="inline-block px-4 py-2 bg-destructive/20 border border-destructive rounded-full">
                  <span className={cn(TYPOGRAPHY.body.default, "text-destructive font-bold")}>
                    Save 90% This December!
                  </span>
                </div>
              </div>
                
                <h3 id="welcome-modal-description" className={cn(TYPOGRAPHY.heading.h3, "mb-4")}>
                  December Special: 90% OFF + Free Bonuses!
                </h3>
                
                <p className={cn(TYPOGRAPHY.body.default, "text-muted-foreground mb-6 max-w-md mx-auto")}>
                  Enroll today for just <strong className="text-primary text-xl">$29</strong> (normally $297) and get instant access to the complete course PLUS exclusive bonus content!
                </p>
              </div>

              {/* Benefits List */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 space-y-3">
                <BenefitItem 
                  icon={<Sparkles className="text-primary" size={20} />}
                  text="Premium AI Tools Pack - Generate stunning anime art instantly"
                />
                <BenefitItem 
                  icon={<Gift className="text-secondary" size={20} />}
                  text="Exclusive Brush Collection - 50+ professional anime brushes"
                />
                <BenefitItem 
                  icon={<Heart className="text-accent" size={20} fill="currentColor" />}
                  text="Secret Techniques Guide - Advanced tips from Sweet herself"
                />
                <BenefitItem 
                  icon={<Sparkles className="text-primary" size={20} />}
                  text="VIP Discord Access - Priority support & feedback"
                />
              </div>

              {/* CTA Buttons */}
              <div className={cn("flex flex-col sm:flex-row gap-3", SPACING.margin.normal)}>
                <Button 
                  onClick={handleCTA}
                  variant="hero" 
                  size="xl" 
                  className="flex-1 group text-base sm:text-lg"
                >
                  <Gift className="group-hover:scale-110 transition-transform" />
                  Enroll for $29 (Save $268!)
                </Button>
              </div>

              {/* Footer Note */}
              <p className={cn(TYPOGRAPHY.body.small, "text-center text-muted-foreground italic")}>
                ⏰ December special pricing ends soon. <span className="font-bold text-primary">Pay with PayPal, Stripe, or PagSeguro</span>
              </p>

              {/* Skip Button */}
              <button
                onClick={() => handleClose(true)}
                className={cn(
                  TYPOGRAPHY.body.small,
                  "text-muted-foreground hover:text-foreground transition-colors underline mx-auto block"
                )}
              >
                Maybe later (Don't show this again)
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BenefitItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
      {icon}
    </div>
    <p className={cn(TYPOGRAPHY.body.default, "text-foreground flex-1 pt-2")}>
      {text}
    </p>
  </div>
);
