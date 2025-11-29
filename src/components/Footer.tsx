import { Heart } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sweet Life Animes</h3>
            <p className="text-muted-foreground">
              Your neon-lit creative universe where anime art meets emotion and technique. 💜
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect & Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Follow Sweet Life Animes on Instagram">Instagram</a></li>
              <li><a href={EXTERNAL_LINKS.deviantArt} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="View Sweet Life Animes Art Gallery on DeviantArt">Art Gallery (DeviantArt)</a></li>
              <li><a href={EXTERNAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Visit Sweet Life Animes Facebook Page">Facebook Page</a></li>
              <li><a href={EXTERNAL_LINKS.paypal} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Support Sweet Life Animes via PayPal">Donate via PayPal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
