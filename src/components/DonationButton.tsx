import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXTERNAL_LINKS } from "@/constants/data";

export const DonationButton = () => {
  return (
    <div className="hidden md:block fixed bottom-20 md:bottom-6 right-3 md:right-6 z-40">
      <a
        href={EXTERNAL_LINKS.paypal}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Support Sweet Life Animes with a donation"
        className="block"
      >
        <Button
          variant="hero"
          size="default"
          className="group px-3 py-2 md:px-6 md:py-6 rounded-xl md:rounded-2xl text-xs md:text-base"
        >
          <Heart className="group-hover:scale-110 transition-transform fill-current" size={16} />
          <span className="hidden sm:inline">Support the Project</span>
          <span className="sm:hidden">Donate</span>
        </Button>
      </a>
    </div>
  );
};
