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
  const [isVisible, setIsVisible] = useState(false);
  
  // Get or set the user's timer start time (24-hour countdown)
  const getTargetDate = (): Date => {
    const storedTime = localStorage.getItem('timer_start');
    
    if (storedTime) {
      // User has visited before, calculate target from stored start
      const startTime = parseInt(storedTime, 10);
      return new Date(startTime + 24 * 60 * 60 * 1000); // 24 hours from start
    } else {
      // First visit - set start time to now
      const now = Date.now();
      localStorage.setItem('timer_start', now.toString());
      return new Date(now + 24 * 60 * 60 * 1000); // 24 hours from now
    }
  };
  
  const [targetDate] = useState<Date>(getTargetDate());
  
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
    // Show timer with animation after 1 second
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate total hours remaining for urgency check
  const totalHoursRemaining = timeLeft.days * 24 + timeLeft.hours;
  const isUrgent = totalHoursRemaining < 12;

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-primary via-secondary to-primary backdrop-blur-md transition-all duration-500",
        "border-b-2 border-white/30",
        isUrgent && "animate-pulse",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      style={{
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3)"
      }}
    >
      <div className="container px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-3 lg:gap-4">
          {/* Left: Urgency Message */}
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
              <Zap className="text-white" size={20} fill="currentColor" />
            </div>
            <div>
              <div className={cn(TYPOGRAPHY.body.small, "text-white/90 font-medium uppercase tracking-wide")}>
                {isUrgent ? "⚡ Last Hours!" : "🔥 December Special Offer"}
              </div>
              <div className={cn(TYPOGRAPHY.heading.h4, "text-white font-bold leading-tight")}>
                {isUrgent ? "Hurry! Your 90% OFF Expires Soon!" : "90% OFF - Limited Time Only!"}
              </div>
            </div>
          </div>

          {/* Center: Price + Countdown */}
          <div className="flex items-center gap-4">
            {/* Price Box */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30 text-center">
              <div className="flex items-center gap-2">
                <span className={cn(TYPOGRAPHY.body.small, "text-white/70 line-through")}>$297</span>
                <span className={cn(TYPOGRAPHY.heading.h2, "text-white font-black")}>$29</span>
              </div>
              <div className={cn(TYPOGRAPHY.body.tiny, "text-white/80 uppercase tracking-wide font-semibold")}>
                90% Savings!
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2">
              <TimeBlock value={timeLeft.days} label="Days" />
              <Separator />
              <TimeBlock value={timeLeft.hours} label="Hours" />
              <Separator />
              <TimeBlock value={timeLeft.minutes} label="Mins" />
              <Separator />
              <TimeBlock value={timeLeft.seconds} label="Secs" />
            </div>
          </div>

          {/* Right: CTA Button */}
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Enroll now in December special - 90% OFF"
            className="flex-shrink-0"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 border-0 font-bold shadow-xl hover:scale-105 transition-transform group whitespace-nowrap"
            >
              <Clock className="group-hover:rotate-12 transition-transform" size={18} />
              Enroll for $29 Now!
            </Button>
          </a>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="flex md:hidden flex-col items-center gap-3 text-center">
          {/* Urgency Message */}
          <div className="flex items-center gap-2">
            <Zap className="text-white animate-pulse" size={18} fill="currentColor" />
            <div className={cn(TYPOGRAPHY.body.small, "text-white font-bold uppercase tracking-wide")}>
              {isUrgent ? "⚡ Last Hours!" : "🔥 December Special"}
            </div>
          </div>

          {/* Price Row */}
          <div className="flex items-center gap-2">
            <span className={cn(TYPOGRAPHY.body.default, "text-white/70 line-through")}>$297</span>
            <span className={cn(TYPOGRAPHY.heading.h1, "text-white font-black")}>$29</span>
            <span className={cn(TYPOGRAPHY.body.tiny, "text-white/80 uppercase font-semibold px-2 py-1 bg-white/20 rounded")}>
              90% OFF
            </span>
          </div>

          {/* Countdown - Compact Mobile */}
          <div className="flex items-center gap-2">
            <TimeBlockMobile value={timeLeft.days} label="Days" />
            <span className="text-white/50 font-bold">:</span>
            <TimeBlockMobile value={timeLeft.hours} label="Hrs" />
            <span className="text-white/50 font-bold">:</span>
            <TimeBlockMobile value={timeLeft.minutes} label="Min" />
            <span className="text-white/50 font-bold">:</span>
            <TimeBlockMobile value={timeLeft.seconds} label="Sec" />
          </div>

          {/* CTA Button */}
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Enroll now for $29"
            className="w-full"
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full bg-white text-primary hover:bg-white/90 border-0 font-bold shadow-xl"
            >
              <Clock size={16} />
              Enroll Now!
            </Button>
          </a>
        </div>

        {/* Payment Methods Badge */}
        <div className="text-center mt-2 pt-2 border-t border-white/20">
          <p className={cn(TYPOGRAPHY.body.tiny, "text-white/80")}>
            💳 Pay with <span className="font-semibold">PayPal, Stripe, or PagSeguro</span>
          </p>
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
  <div className={cn(TYPOGRAPHY.heading.h2, "text-white/50 font-bold pb-5")}>
    :
  </div>
);

const TimeBlockMobile = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 border border-white/30 min-w-[36px]">
      <div className={cn(TYPOGRAPHY.body.default, "text-white font-bold tabular-nums text-center leading-none")}>
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <div className={cn(TYPOGRAPHY.body.tiny, "text-white/70 font-medium mt-0.5 uppercase text-[9px]")}>
      {label}
    </div>
  </div>
);
