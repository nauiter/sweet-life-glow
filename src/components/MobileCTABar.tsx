import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";
import { cn } from "@/lib/utils";

export const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the bar before
    const dismissed = localStorage.getItem('mobile-cta-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('mobile-cta-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4 bg-gradient-to-r from-primary to-secondary md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.3)] animate-slide-up hidden">
      <div className="relative">
        {/* Dismiss Button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-border hover:bg-background transition-colors z-10"
          aria-label="Dismiss enrollment banner"
        >
          <X size={14} className="text-muted-foreground" />
        </button>

        {/* CTA Button */}
        <a 
          href={EXTERNAL_LINKS.coursify}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Enroll now in Sweet Life Animes anime art course - Join 500+ artists"
          className="block w-full"
        >
          <Button 
            variant="hero"
            size="lg"
            className="w-full"
          >
            💜 Enroll Now - Join 500+ Artists
          </Button>
        </a>
      </div>
    </div>
  );
};