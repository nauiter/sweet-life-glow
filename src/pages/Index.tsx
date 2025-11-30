import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { EXTERNAL_LINKS } from "@/constants/data";

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const CommunitySection = lazy(() => import("@/components/CommunitySection").then(m => ({ default: m.CommunitySection })));
const ShopSection = lazy(() => import("@/components/ShopSection").then(m => ({ default: m.ShopSection })));
const UpdatesSection = lazy(() => import("@/components/UpdatesSection").then(m => ({ default: m.UpdatesSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const FooterNauiterMaster = lazy(() => import("@/components/shared/FooterNauiterMaster").then(m => ({ default: m.FooterNauiterMaster })));

const Index = () => {
  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Breadcrumbs */}
      <Breadcrumbs />
      
      {/* Main Content */}
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
        <GallerySection />
        <CommunitySection />
        <ShopSection />
        <UpdatesSection />
        <FAQSection />
        <Footer />
        <FooterNauiterMaster />
      </Suspense>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-gradient-to-r from-primary to-secondary md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
        <a 
          href={EXTERNAL_LINKS.coursify}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Enroll now in Sweet Life Animes anime art course - Join 500+ artists"
          className="block w-full py-2.5 sm:py-3 bg-white text-primary font-bold rounded-lg neon-glow hover:scale-105 transition-transform text-center text-sm sm:text-base"
        >
          💜 Enroll Now - Join 500+ Artists
        </a>
      </div>
    </div>
  );
};

export default Index;
