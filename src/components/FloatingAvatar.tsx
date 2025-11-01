import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const FloatingAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow glow-pulse hover:scale-110 transition-transform shadow-lg"
        aria-label="Chat with Sweet"
      >
        {isOpen ? (
          <X className="text-white" size={28} />
        ) : (
          <MessageCircle className="text-white" size={28} />
        )}
      </button>

      {/* Chat Bubble */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 p-6 bg-card/95 backdrop-blur-md border-primary/30 neon-glow animate-slide-up">
          <div className="space-y-4">
            {/* Avatar Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center neon-glow">
                <span className="text-2xl">💜</span>
              </div>
              <div>
                <h4 className="font-bold">Sweet</h4>
                <p className="text-xs text-muted-foreground">Your Creative Sensei</p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-muted/30 p-4 rounded-2xl rounded-tl-none">
              <p className="text-sm leading-relaxed">
                Hey cutie! 👋 Need help with anything? I'm here to guide you through your creative journey. Click below to start a chat or join our Discord!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button variant="hero" className="w-full" size="sm">
                💬 Talk to Sweet
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Join Discord
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
