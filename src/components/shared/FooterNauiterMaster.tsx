/**
 * Nauiter Master Footer Standard
 * Global reusable footer component for all Nauiter projects
 */

export const FooterNauiterMaster = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="relative py-6 text-center border-t border-white/5 bg-[#0e0e0e] shadow-[0_-2px_10px_rgba(0,0,0,0.4)] animate-fade-in-footer"
    >
      <div className="container mx-auto px-4">
        {/* Copyright Line */}
        <p 
          className="text-white mb-2 transition-colors hover:text-[hsl(194,100%,50%)] text-sm md:text-base"
        >
          © {currentYear} Developer — Nauiter Master | All rights reserved
        </p>
        
        {/* Latin Phrase */}
        <p 
          className="text-white/70 italic text-xs md:text-sm"
        >
          Sic Mundus Creatus Est
        </p>
      </div>
    </footer>
  );
};
