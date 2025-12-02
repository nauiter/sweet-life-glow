import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";

export const DonationButton = () => {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-3 md:right-6 z-40">
      <a
        href={EXTERNAL_LINKS.paypal}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Support Sweet Life Animes with a donation"
        className="block"
      >
        <Button
          size="default"
          className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 px-3 py-2 md:px-6 md:py-6 rounded-xl md:rounded-2xl border-2 border-primary/60 text-xs md:text-base"
        >
          <Heart className="group-hover:scale-110 transition-transform fill-current" size={16} />
          <span className="hidden sm:inline">Support the Project</span>
          <span className="sm:hidden">Donate</span>
        </Button>
      </a>
    </div>
  );
};
