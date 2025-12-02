import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";

export const DonationButton = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 left-3 md:left-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <a
        href={EXTERNAL_LINKS.paypal}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Support Sweet Life Animes with a donation"
        className="block"
      >
        <Button
          size="default"
          className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 active:scale-95 transition-all duration-300 px-3 py-2 md:px-6 md:py-6 rounded-xl md:rounded-2xl border-2 border-yellow-400 text-xs md:text-base"
        >
          <Heart className="group-hover:scale-125 transition-transform fill-current animate-pulse" size={16} />
          <span className="hidden sm:inline">Support the Project</span>
          <span className="sm:hidden">Donate</span>
        </Button>
      </a>
    </div>
  );
};
