import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
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

// Lazy load conditional/interactive components to reduce unused JavaScript
const WelcomeModal = lazy(() => import("@/components/WelcomeModal").then(m => ({ default: m.WelcomeModal })));
const ExitIntentModal = lazy(() => import("@/components/ExitIntentModal").then(m => ({ default: m.ExitIntentModal })));
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop").then(m => ({ default: m.ScrollToTop })));
const PurchaseNotifications = lazy(() => import("@/components/PurchaseNotifications").then(m => ({ default: m.PurchaseNotifications })));
const MobileCTABar = lazy(() => import("@/components/MobileCTABar").then(m => ({ default: m.MobileCTABar })));

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
      
      {/* Lazy load conditional/interactive components */}
      <Suspense fallback={null}>
        <ScrollToTop />
        <WelcomeModal />
        <ExitIntentModal />
        <CookieConsent />
        <PurchaseNotifications />
        <MobileCTABar />
      </Suspense>
    </div>
  );
};

export default Index;
