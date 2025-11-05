import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const CommunitySection = lazy(() => import("@/components/CommunitySection").then(m => ({ default: m.CommunitySection })));
const ShopSection = lazy(() => import("@/components/ShopSection").then(m => ({ default: m.ShopSection })));
const UpdatesSection = lazy(() => import("@/components/UpdatesSection").then(m => ({ default: m.UpdatesSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FooterNauiterMaster = lazy(() => import("@/components/shared/FooterNauiterMaster").then(m => ({ default: m.FooterNauiterMaster })));

const Index = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <HeroSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AboutSection />
        <GallerySection />
        <CommunitySection />
        <ShopSection />
        <UpdatesSection />
        <Footer />
        <FooterNauiterMaster />
      </Suspense>
      
      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-r from-primary to-secondary md:hidden">
        <a 
          href="https://sweetlifeacademy.coursify.me/courses/anime-ai-mastery-create-grow-monetize-your-brand" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-3 bg-white text-primary font-bold rounded-lg neon-glow hover:scale-105 transition-transform text-center"
        >
          💜 Enroll Now - Join 500+ Artists
        </a>
      </div>
    </div>
  );
};

export default Index;
