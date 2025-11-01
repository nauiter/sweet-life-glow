import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Sweet Life Animes</h3>
            <p className="text-muted-foreground">
              Your neon-lit creative universe where anime art meets emotion and technique. 💜
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#community" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#resources" className="hover:text-primary transition-colors">Resources</a></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Discord Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Patreon</a></li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
