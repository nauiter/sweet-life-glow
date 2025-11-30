import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { TYPOGRAPHY } from "@/constants/designTokens";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = "sweet-life-cookie-consent";

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-1.5 px-4 bg-gradient-to-r from-card/95 via-background/95 to-card/95 backdrop-blur-xl border-t shadow-2xl hidden md:block animate-blur-in" style={{ borderTopColor: `hsl(var(--separator-color) / var(--separator-opacity))` }}>
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Left: Message */}
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-0.5">
              🍪 We use cookies
            </h3>
            <p className="text-xs text-muted-foreground max-w-2xl leading-snug">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              Read our{" "}
              <a 
                href="/privacy" 
                className="text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/privacy";
                }}
              >
                Privacy Policy
              </a>
              {" "}and{" "}
              <a 
                href="/terms" 
                className="text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/terms";
                }}
              >
                Terms of Service
              </a>
              .
            </p>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="border-primary/30 hover:border-primary/50 h-8 text-xs px-3"
            >
              Decline
            </Button>
            <Button
              variant="hero"
              size="sm"
              onClick={handleAccept}
              className="whitespace-nowrap h-8 text-xs px-3"
            >
              Accept All
            </Button>
            <button
              onClick={handleDecline}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
              aria-label="Close cookie banner"
            >
              <X size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
