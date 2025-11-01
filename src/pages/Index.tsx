import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { CommunitySection } from "@/components/CommunitySection";
import { ShopSection } from "@/components/ShopSection";
import { UpdatesSection } from "@/components/UpdatesSection";
import { Footer } from "@/components/Footer";
import { FooterNauiterMaster } from "@/components/shared/FooterNauiterMaster";
import { FloatingAvatar } from "@/components/FloatingAvatar";

const Index = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <CommunitySection />
      <ShopSection />
      <UpdatesSection />
      <Footer />
      <FooterNauiterMaster />
      
      {/* Floating Interactive Elements */}
      <FloatingAvatar />
      
      {/* Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-r from-primary to-secondary md:hidden">
        <button className="w-full py-3 bg-white text-primary font-bold rounded-lg neon-glow hover:scale-105 transition-transform">
          💜 Enroll Now - Join 500+ Artists
        </button>
      </div>
    </div>
  );
};

export default Index;
