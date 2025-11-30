import { useState, useEffect } from "react";
import { Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  // Set target date: 7 days from now (adjust as needed)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 6;

  return (
    <div className={cn("sticky top-16 md:top-20 z-40 bg-gradient-to-r from-primary via-secondary to-primary backdrop-blur-md border-b border-primary/30 shadow-lg animate-slide-up", isUrgent && "animate-pulse")}>
      <div className="container px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: Urgency Message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
              <Zap className="text-white" size={20} fill="currentColor" />
            </div>
            <div className="text-center sm:text-left">
              <div className={cn(TYPOGRAPHY.body.small, "text-white/90 font-medium uppercase tracking-wide")}>
                {isUrgent ? "⚡ Last Chance!" : "🔥 Limited Spots"}
              </div>
              <div className={cn(TYPOGRAPHY.heading.h4, "text-white font-bold leading-tight")}>
                Next Class Enrollment Closes In:
              </div>
            </div>
          </div>

          {/* Center: Countdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            <TimeBlock value={timeLeft.days} label="Days" />
            <Separator />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <Separator />
            <TimeBlock value={timeLeft.minutes} label="Mins" />
            <Separator />
            <TimeBlock value={timeLeft.seconds} label="Secs" />
          </div>

          {/* Right: CTA Button */}
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Secure your spot in Sweet Life Animes course"
            className="flex-shrink-0"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-0 font-bold shadow-xl hover:scale-105 transition-transform group whitespace-nowrap"
            >
              <Clock className="group-hover:rotate-12 transition-transform" size={18} />
              Secure My Spot
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-white/30 shadow-lg min-w-[44px] sm:min-w-[52px]">
      <div className={cn(TYPOGRAPHY.heading.h3, "text-white font-bold tabular-nums text-center leading-none")}>
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <div className={cn(TYPOGRAPHY.body.tiny, "text-white/80 font-medium mt-1 uppercase tracking-wide")}>
      {label}
    </div>
  </div>
);

const Separator = () => (
  <div className={cn(TYPOGRAPHY.heading.h2, "text-white/50 font-bold pb-5 hidden sm:block")}>
    :
  </div>
);
