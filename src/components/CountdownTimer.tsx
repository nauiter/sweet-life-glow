import * as React from "react";
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
        "fixed z-40 bg-gradient-to-r from-primary via-secondary to-primary backdrop-blur-md",
        "border-2 border-white/30 rounded-lg md:rounded-xl",
        "w-[92%] sm:w-[95%] max-w-4xl",
        "top-2 sm:top-3 md:top-20",
        "transition-all duration-700 ease-out"
      )}
      style={{
        left: "50%",
        transform: isVisible 
          ? "translateX(-50%) translateY(0) scale(1)" 
          : "translateX(-50%) translateY(-20px) scale(0.95)",
        opacity: isVisible ? 1 : 0,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.3)",
        position: "fixed",
        maxHeight: "40vh",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out"
      }}
      role="region"
      aria-label="Limited time offer countdown"
    >
      <div className="px-2.5 py-2.5 sm:py-3 md:px-6 md:py-3">
        {/* Desktop Layout - Apenas Timer + Botão */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <Clock className="text-white" size={24} />
            <div className="flex items-center gap-1.5">
              <TimeBlock value={timeLeft.days} label="Days" />
              <span className="text-white/50 font-bold pb-4">:</span>
              <TimeBlock value={timeLeft.hours} label="Hrs" />
              <span className="text-white/50 font-bold pb-4">:</span>
              <TimeBlock value={timeLeft.minutes} label="Min" />
              <span className="text-white/50 font-bold pb-4">:</span>
              <TimeBlock value={timeLeft.seconds} label="Sec" />
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Enroll now in December special"
            className="flex-shrink-0"
          >
            <Button 
              variant="outline" 
              size="default"
              className="bg-white text-primary hover:bg-white/90 border-0 font-bold shadow-xl hover:scale-105 transition-transform whitespace-nowrap relative overflow-hidden px-8"
            >
              <span className="relative z-10">Enroll Now! 🚀</span>
              <span 
                className="absolute inset-0 w-[50%] h-full opacity-30"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  animation: "shimmer 3s ease-in-out infinite",
                  animationDelay: "1s"
                }}
              />
            </Button>
          </a>
        </div>

        {/* Mobile Layout - Simplificado: Apenas Timer + Botão */}
        <div className="flex md:hidden flex-col items-center justify-center gap-3 py-3">
          {/* Timer: Contador de tempo */}
          <div className="flex items-center gap-1.5">
            <TimeBlockMobile value={timeLeft.days} label="D" />
            <span className="text-white/60 text-sm font-bold">:</span>
            <TimeBlockMobile value={timeLeft.hours} label="H" />
            <span className="text-white/60 text-sm font-bold">:</span>
            <TimeBlockMobile value={timeLeft.minutes} label="M" />
            <span className="text-white/60 text-sm font-bold">:</span>
            <TimeBlockMobile value={timeLeft.seconds} label="S" />
          </div>

          {/* Botão CTA - 80% width, 48px height */}
          <a 
            href={EXTERNAL_LINKS.coursify}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Enroll now in the anime art course"
            className="w-[80%] max-w-[320px] px-4"
          >
            <Button 
              variant="outline" 
              size="default"
              className="w-full bg-white text-primary hover:bg-white/95 active:bg-white/90 border-0 font-bold shadow-xl text-base h-[48px] rounded-xl transition-all duration-200 relative overflow-hidden"
              style={{
                animation: "pulse-cta 2.5s ease-in-out infinite"
              }}
            >
              <span className="relative z-10">Enroll Now! 🚀</span>
              <span 
                className="absolute inset-0 w-[50%] h-full opacity-30"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                  animation: "shimmer 3s ease-in-out infinite",
                  animationDelay: "1s"
                }}
              />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[40px]">
    <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 border border-white/30">
      <div className="text-lg text-white font-bold tabular-nums text-center leading-none">
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <div className="text-[9px] text-white/80 font-medium mt-0.5 uppercase tracking-wide">
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
  <div className="flex flex-col items-center gap-1">
    <div className="bg-white/25 backdrop-blur-sm rounded-md px-2.5 py-1 border border-white/40 min-w-[32px]">
      <div className="text-lg text-white font-bold tabular-nums text-center leading-none">
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <div className="text-[9px] text-white/80 font-medium uppercase tracking-wider">
      {label}
    </div>
  </div>
);
