import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";

export const DonationButton = () => {
  const [donationCount, setDonationCount] = useState(0);

  useEffect(() => {
    // Generate random donation amount between $1 and $15
    const randomAmount = Math.floor(Math.random() * 15) + 1;
    setDonationCount(randomAmount);
  }, []);

  return (
    <div className="fixed bottom-20 md:bottom-6 left-3 md:left-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative">
        {/* Motivational message with counter */}
        <div className="absolute -top-16 md:-top-14 left-0 bg-gray-900/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-yellow-400/50 whitespace-nowrap animate-bounce">
          <p className="text-white text-xs md:text-sm font-semibold mb-0.5">
            💛 Help us grow!
          </p>
          <p className="text-yellow-400 text-[10px] md:text-xs font-bold">
            ${donationCount.toLocaleString()} raised this month
          </p>
        </div>
        
        {/* Animated pulse ring */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-yellow-400 animate-ping opacity-75" />
        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-yellow-400 animate-pulse opacity-50" />
        
        <a
          href={EXTERNAL_LINKS.paypal}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Support Sweet Life Animes with a donation"
          className="block relative"
        >
          <Button
            size="default"
            className="group bg-yellow-500 hover:bg-yellow-600 text-white font-bold shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 active:scale-95 transition-all duration-300 px-3 py-2 md:px-6 md:py-6 rounded-xl md:rounded-2xl border-2 border-yellow-400 text-xs md:text-base animate-pulse"
          >
            <Heart className="group-hover:scale-125 transition-transform fill-current animate-pulse" size={16} />
            <span className="hidden sm:inline">Support the Project</span>
            <span className="sm:hidden">Donate</span>
          </Button>
        </a>
      </div>
    </div>
  );
};
