import { Heart } from "lucide-react";

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
          
          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Connect & Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="https://www.instagram.com/sweetlifeanimes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://t.me/sweetlifeanimes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Telegram Channel</a></li>
              <li><a href="https://www.deviantart.com/latthy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Art Gallery (DeviantArt)</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61581047814185" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook Page</a></li>
              <li><a href="https://www.paypal.com/donate/?hosted_button_id=FXDHDJ5B3LPS2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Donate via PayPal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
