/**
 * Nauiter Master Footer Standard
 * Global reusable footer component for all Nauiter projects
 */

export const FooterNauiterMaster = () => {
  return (
    <footer 
      className="relative py-6 text-center border-t border-white/5 animate-fade-in-footer"
      style={{
        backgroundColor: 'hsl(0, 0%, 5.5%)',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Copyright Line */}
        <p 
          className="text-white mb-2 transition-colors hover:text-[hsl(194,100%,50%)]"
          style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)' }}
        >
          © 2025 Developer — Nauiter Master | All rights reserved
        </p>
        
        {/* Latin Phrase */}
        <p 
          className="text-white/70 italic"
          style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.9rem)' }}
        >
          Sic Mundus Creatus Est
        </p>
      </div>
    </footer>
  );
};
