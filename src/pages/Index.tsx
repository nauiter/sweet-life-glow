import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { WelcomeModal } from "@/components/WelcomeModal";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PurchaseNotifications } from "@/components/PurchaseNotifications";
import { MobileCTABar } from "@/components/MobileCTABar";
import { SectionSkeleton } from "@/components/ui/section-skeleton";

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
      
      {/* Countdown Timer - Creates Urgency */}
      <CountdownTimer />
      
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
      
      {/* Welcome Modal - First Time Visitors */}
      <WelcomeModal />
      
      {/* Exit Intent Modal - Last Chance Offer */}
      <ExitIntentModal />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
      
      {/* Purchase Notifications - Social Proof */}
      <PurchaseNotifications />
      
      {/* Mobile CTA Bar with Dismiss */}
      <MobileCTABar />
    </div>
  );
};

export default Index;
