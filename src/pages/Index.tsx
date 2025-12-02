import * as React from "react";
import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { MagicCursor } from "@/components/MagicCursor";
import { ParticleSystem } from "@/components/ParticleSystem";
import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { Section } from "@/components/ui/section";

// Lazy load below-the-fold components to reduce initial bundle size
const AboutSection = lazy(() => import("@/components/AboutSection").then(m => ({ default: m.AboutSection })));
const GallerySection = lazy(() => import("@/components/GallerySection").then(m => ({ default: m.GallerySection })));
const CommunitySection = lazy(() => import("@/components/CommunitySection").then(m => ({ default: m.CommunitySection })));
const ShopSection = lazy(() => import("@/components/ShopSection").then(m => ({ default: m.ShopSection })));
const UpdatesSection = lazy(() => import("@/components/UpdatesSection").then(m => ({ default: m.UpdatesSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Lazy load conditional/interactive components to reduce unused JavaScript
const ExitIntentModal = lazy(() => import("@/components/ExitIntentModal").then(m => ({ default: m.ExitIntentModal })));
const CookieConsent = lazy(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop").then(m => ({ default: m.ScrollToTop })));
const PurchaseNotifications = lazy(() => import("@/components/PurchaseNotifications").then(m => ({ default: m.PurchaseNotifications })));
const MobileCTABar = lazy(() => import("@/components/MobileCTABar").then(m => ({ default: m.MobileCTABar })));
const DonationButton = lazy(() => import("@/components/DonationButton").then(m => ({ default: m.DonationButton })));

const Index = () => {
  return (
    <div className="relative">
      {/* Magic Cursor Effect - Desktop Only */}
      <MagicCursor />
      
      {/* Particle System - Ambient Background Effect */}
      <ParticleSystem />
      
      {/* Fixed Navigation */}
      <Navigation />
      
      {/* Countdown Timer - Creates Urgency */}
      <CountdownTimer />
      
      {/* Main Content */}
      <main id="main-content">
        <HeroSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <Section variant="light">
          <AboutSection />
        </Section>
        
        <Section variant="dark">
          <GallerySection />
        </Section>
        
        <Section variant="highlight">
          <CommunitySection />
        </Section>
        
        <Section variant="light">
          <ShopSection />
        </Section>
        
        <Section variant="dark">
          <UpdatesSection />
        </Section>
        
        <Section variant="light">
          <FAQSection />
        </Section>
        
        <Footer />
      </Suspense>
      </main>
      
      {/* Lazy load conditional/interactive components */}
      <Suspense fallback={null}>
        <ScrollToTop />
        <ExitIntentModal />
        <CookieConsent />
        <PurchaseNotifications />
        <MobileCTABar />
        <DonationButton />
      </Suspense>
    </div>
  );
};

export default Index;
