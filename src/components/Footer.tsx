import { Heart } from "lucide-react";
import { EXTERNAL_LINKS } from "@/constants/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-6 pb-8 border-t" style={{ borderTopColor: `hsl(var(--separator-color) / var(--separator-opacity))` }}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8 max-w-6xl mx-auto items-start">
          {/* Brand */}
          <div className="flex flex-col">
            <h3 className="font-bold mb-4 text-foreground text-base gradient-text">Sweet Life Animes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your neon-lit creative universe where anime art meets emotion and technique. 💜
            </p>
          </div>
          
          {/* Connect & Support */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-4 text-foreground text-base">Connect & Support</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a 
                  href={EXTERNAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-block"
                  aria-label="Follow Sweet Life Animes on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href={EXTERNAL_LINKS.deviantArt} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-block"
                  aria-label="View Sweet Life Animes Art Gallery on DeviantArt"
                >
                  Art Gallery (DeviantArt)
                </a>
              </li>
              <li>
                <a 
                  href={EXTERNAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-block"
                  aria-label="Visit Sweet Life Animes Facebook Page"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a 
                  href={EXTERNAL_LINKS.iwara} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-block"
                  aria-label="Visit Sweet Life Animes on Iwara.tv"
                >
                  Iwara.tv
                </a>
              </li>
              <li>
                <a 
                  href={EXTERNAL_LINKS.paypal} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors inline-block"
                  aria-label="Support Sweet Life Animes via PayPal"
                >
                  Donate via PayPal
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-4 text-foreground text-base">Legal</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a 
                  href="/privacy" 
                  className="hover:text-primary transition-colors inline-block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="hover:text-primary transition-colors inline-block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t pt-8 text-center" style={{ borderTopColor: `hsl(var(--separator-color) / var(--separator-opacity))` }}>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Sweet Life Animes. Made with <Heart className="text-primary w-4 h-4" fill="currentColor" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
