import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import artSample4 from "@/assets/art-sample-4.jpg";
import artSample5 from "@/assets/art-sample-5.jpg";
import artSample6 from "@/assets/art-sample-6.jpg";
import artSample7 from "@/assets/art-sample-7.jpg";
import artSample8 from "@/assets/art-sample-8.jpg";
import artSample9 from "@/assets/art-sample-9.jpg";
import artSample10 from "@/assets/art-sample-10.jpg";
import artSample11 from "@/assets/art-sample-11.jpg";
import artSample12 from "@/assets/art-sample-12.jpg";
import artSample13 from "@/assets/art-sample-13.jpg";
import artSample14 from "@/assets/art-sample-14.jpg";
import artSample15 from "@/assets/art-sample-15.jpg";
import artSample16 from "@/assets/art-sample-16.jpg";
import artSample17 from "@/assets/art-sample-17.jpg";
import artSample18 from "@/assets/art-sample-18.jpg";
import artSample19 from "@/assets/art-sample-19.jpg";
import artSample20 from "@/assets/art-sample-20.jpg";
import artSample21 from "@/assets/art-sample-21.jpg";
import artSample22 from "@/assets/art-sample-22.jpg";
import artSample23 from "@/assets/art-sample-23.jpg";
import artSample24 from "@/assets/art-sample-24.jpg";
import artSample25 from "@/assets/art-sample-25.jpg";
import artSample26 from "@/assets/art-sample-26.jpg";
import artSample27 from "@/assets/art-sample-27.jpg";
import artSample28 from "@/assets/art-sample-28.jpg";
import artSample29 from "@/assets/art-sample-29.jpg";
import artSample30 from "@/assets/art-sample-30.jpg";
import artSample31 from "@/assets/art-sample-31.jpg";
import artSample32 from "@/assets/art-sample-32.jpg";
import artSample33 from "@/assets/art-sample-33.jpg";
import artSample34 from "@/assets/art-sample-34.jpg";
import artSample35 from "@/assets/art-sample-35.jpg";
import artSample36 from "@/assets/art-sample-36.jpg";
import artSample37 from "@/assets/art-sample-37.jpg";
import galleryBg from "@/assets/gallery-bg.jpg";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";
import { generateSrcSet, GALLERY_IMAGE_SIZES, GALLERY_MOBILE_SIZES, GALLERY_DESKTOP_SIZES, CDN_CONFIG } from "@/lib/responsiveImage";

// Gallery artworks collection
const galleryArtworks = [
  { id: 1, image: artSample4, title: "Fashion Elegance", description: "Master clothing design and details" },
  { id: 2, image: artSample5, title: "Outdoor Adventure", description: "Dynamic poses in natural settings" },
  { id: 3, image: artSample6, title: "Indoor Portrait", description: "Perfect lighting and composition" },
  { id: 4, image: artSample7, title: "Night Scene Mood", description: "Atmospheric lighting techniques" },
  { id: 5, image: artSample8, title: "Dynamic Action Pose", description: "Movement and energy expression" },
  { id: 6, image: artSample9, title: "Perspective Mastery", description: "Advanced angle techniques" },
  { id: 7, image: artSample10, title: "Gaming Vibes", description: "Modern character personality" },
  { id: 8, image: artSample11, title: "Energetic Expression", description: "Capturing emotion and life" },
  { id: 9, image: artSample12, title: "Workspace Focus", description: "Digital artist lifestyle" },
  { id: 10, image: artSample13, title: "Mystical Atmosphere", description: "Fantasy lighting and mood" },
  { id: 11, image: artSample14, title: "Elegant Poses", description: "Graceful character positioning" },
  { id: 12, image: artSample15, title: "Cozy Moments", description: "Intimate scene composition" },
  { id: 13, image: artSample16, title: "Power Action", description: "Dynamic energy and motion" },
  { id: 14, image: artSample17, title: "Combat Scene", description: "Action-packed illustration" },
  { id: 15, image: artSample18, title: "Fierce Character", description: "Strong personality design" },
  { id: 16, image: artSample19, title: "Spring Fantasy", description: "Colorful seasonal art" },
  { id: 17, image: artSample20, title: "Moonlit Elegance", description: "Night scene composition" },
  { id: 18, image: artSample21, title: "Dreamy Perspective", description: "Creative angle work" },
  { id: 19, image: artSample22, title: "Bold Character", description: "Confident pose design" },
  { id: 20, image: artSample23, title: "Gothic Style", description: "Dark fantasy aesthetic" },
  { id: 21, image: artSample24, title: "Dramatic Lighting", description: "Atmospheric mood setting" },
  { id: 22, image: artSample25, title: "Bunny Charm", description: "Playful costume design" },
  { id: 23, image: artSample26, title: "Pink Dreams", description: "Soft color palette mastery" },
  { id: 24, image: artSample27, title: "Urban Night", description: "City lights and neon" },
  { id: 25, image: artSample28, title: "Maid Elegance", description: "Classic outfit design" },
  { id: 26, image: artSample29, title: "Garden Scene", description: "Outdoor atmosphere" },
  { id: 27, image: artSample30, title: "Sunset Portrait", description: "Warm lighting techniques" },
  { id: 28, image: artSample31, title: "Romantic Moment", description: "Dual character interaction" },
  { id: 29, image: artSample32, title: "Sweet Connection", description: "Emotional storytelling" },
  { id: 30, image: artSample35, title: "Tactical Style", description: "Modern character design" },
  { id: 33, image: artSample36, title: "Neon Aesthetic", description: "Cyberpunk vibes" },
  { id: 34, image: artSample37, title: "Cherry Blossom", description: "Spring atmosphere" }
];

const ITEMS_PER_BATCH_DESKTOP = 8;
const ITEMS_PER_BATCH_MOBILE = 4;
const AUTO_ROTATE_INTERVAL = 10000; // 10 seconds - slower rotation

// Neon border style for gallery items - white only with smooth transitions
const neonStyle = {
  border: 'border-white/40',
  shadow: '0 0 20px rgba(255, 255, 255, 0.4)',
  glow: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
};

// Shuffle function to randomize array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const GallerySection = () => {
  const isMobile = useIsMobile();
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryArtworks[0] | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [shuffledArtworks] = useState(() => shuffleArray(galleryArtworks));
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ITEMS_PER_BATCH = isMobile ? ITEMS_PER_BATCH_MOBILE : ITEMS_PER_BATCH_DESKTOP;
  const totalBatches = Math.ceil(shuffledArtworks.length / ITEMS_PER_BATCH);
  const startIndex = currentBatch * ITEMS_PER_BATCH;
  const endIndex = startIndex + ITEMS_PER_BATCH;
  const currentArtworks = shuffledArtworks.slice(startIndex, endIndex);

  // Reset to first batch when switching between mobile/desktop
  useEffect(() => {
    setCurrentBatch(0);
  }, [ITEMS_PER_BATCH]);

  // Prefetch next batch images
  useEffect(() => {
    const nextBatch = (currentBatch + 1) % totalBatches;
    const nextStartIndex = nextBatch * ITEMS_PER_BATCH;
    const nextEndIndex = nextStartIndex + ITEMS_PER_BATCH;
    const nextArtworks = shuffledArtworks.slice(nextStartIndex, nextEndIndex);

    // Prefetch images from next batch - only first 2 on mobile for performance
    const prefetchImages = () => {
      const itemsToPrefetch = isMobile ? nextArtworks.slice(0, 2) : nextArtworks;
      itemsToPrefetch.forEach((artwork) => {
        const img = new Image();
        img.src = artwork.image;
      });
    };

    // Delay prefetch to not interfere with current batch loading
    const prefetchTimer = setTimeout(prefetchImages, isMobile ? 3000 : 2000);

    return () => clearTimeout(prefetchTimer);
  }, [currentBatch, totalBatches, shuffledArtworks, ITEMS_PER_BATCH, isMobile]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentBatch((prev) => (prev + 1) % totalBatches);
        setIsTransitioning(false);
      }, 300);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, totalBatches]);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setLoadedImages(prev => new Set([...prev, index]));
          }
        });
      },
      {
        rootMargin: '50px', // Load images 50px before they're visible
        threshold: 0.01
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentBatch]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = document.getElementById('gallery');
          if (section) {
            const rect = section.getBoundingClientRect();
            const scrollProgress = -rect.top;
            setScrollY(scrollProgress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (isMobile) return; // Disable 3D effect on mobile for performance
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation values (max ±15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(index);
  }, [isMobile]);

  const handleCardMouseLeave = useCallback(() => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <section id="gallery" className={cn("relative overflow-hidden", SPACING.section.y)} aria-labelledby="gallery-heading">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={galleryBg} 
          alt="" 
          width={1600} 
          height={900} 
          sizes={isMobile ? "100vw" : "100vw"}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-20 transition-transform duration-100 ease-out" 
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-background" />
      </div>
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <h2 id="gallery-heading" className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Gallery Showcase
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Check out what you'll be creating! These are real student works and examples from our community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          className={cn("grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-10 mb-12 md:mb-16", SPACING.container.full)}
          style={{ perspective: '1000px' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="list"
          aria-label="Anime artwork gallery"
        >
          {currentArtworks.map((artwork, index) => {
            const globalIndex = startIndex + index;
            const isImageLoaded = loadedImages.has(globalIndex);
            const isHovered = hoveredCard === index;
            
            // Calculate 3D transform
            const transform3D = isHovered && !isMobile
              ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px) scale(1.05)`
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
            
            return (
              <Dialog key={`${artwork.id}-${currentBatch}`}>
                <DialogTrigger asChild>
                  <Card 
                    ref={(el) => (imageRefs.current[index] = el)}
                    data-index={globalIndex}
                    className={cn(
                      "group overflow-hidden bg-card/50 backdrop-blur-sm border-2 cursor-pointer h-full",
                      "transition-all duration-300 ease-out will-change-transform",
                      neonStyle.border,
                      neonStyle.glow,
                      isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100 animate-fade-in"
                    )}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: transform3D,
                      transition: isHovered 
                        ? 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
                        : 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                      willChange: isHovered ? 'transform' : 'auto',
                      boxShadow: isHovered 
                        ? '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 30px rgba(255, 255, 255, 0.6)' 
                        : neonStyle.shadow,
                      transformStyle: 'preserve-3d'
                    }}
                    onMouseMove={(e) => handleCardMouseMove(e, index)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => setSelectedImage(artwork)}
                  >
                    <div 
                      className="relative aspect-[9/16] overflow-hidden bg-muted"
                      style={{
                        transform: isHovered ? 'translateZ(10px)' : 'translateZ(0)',
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      {isImageLoaded ? (
                        <img 
                          src={artwork.image} 
                          srcSet={generateSrcSet({ 
                            src: artwork.image, 
                            widths: isMobile ? [300, 600] : [400, 800, 1200],
                            cdnEnabled: CDN_CONFIG.enabled,
                            cdnBaseUrl: CDN_CONFIG.baseUrl
                          })}
                          alt={artwork.title}
                          width={isMobile ? 300 : 400}
                          height={isMobile ? 533 : 710}
                          sizes={isMobile ? GALLERY_MOBILE_SIZES : GALLERY_DESKTOP_SIZES}
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-500"
                          style={{ willChange: 'transform' }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="animate-pulse w-12 h-12 rounded-full bg-primary/20" />
                        </div>
                      )}
                      {/* Text overlay - always visible on touch devices, hover on desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                        <div className="w-full">
                          <h3 className={cn(TYPOGRAPHY.heading.h4, SPACING.margin.tight, "text-foreground")}>{artwork.title}</h3>
                          <p className={cn(TYPOGRAPHY.body.small, "text-foreground/90")}>{artwork.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-primary/20">
                  <div className="relative">
                    <img 
                      src={artwork.image}
                      srcSet={generateSrcSet({ 
                        src: artwork.image, 
                        widths: isMobile ? [600, 900] : [800, 1200, 1600],
                        cdnEnabled: CDN_CONFIG.enabled,
                        cdnBaseUrl: CDN_CONFIG.baseUrl
                      })} 
                      alt={artwork.title}
                      sizes={isMobile ? "90vw" : "(max-width: 1200px) 90vw, 1200px"}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="mt-6">
                      <h3 className={cn(TYPOGRAPHY.heading.h3, SPACING.margin.tight, "gradient-text")}>{artwork.title}</h3>
                      <p className={cn(TYPOGRAPHY.body.default, "text-muted-foreground")}>{artwork.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Progress Dots */}
        <div className={cn("flex justify-center gap-3 md:gap-4 mb-12 md:mb-16")}>
          {Array.from({ length: totalBatches }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentBatch(i);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={cn(
                "rounded-full transition-all duration-300",
                "w-2 h-2 md:w-3 md:h-3",
                currentBatch === i 
                  ? "bg-primary w-8 md:w-12 shadow-[0_0_10px_hsl(var(--primary))]" 
                  : "bg-primary/30 hover:bg-primary/50 hover:scale-110"
              )}
              aria-label={`Go to batch ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className={cn("text-center animate-slide-up")} style={{ animationDelay: '0.3s' }}>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground max-w-2xl mx-auto")}>
            Every week, students share their amazing progress in our Discord community. You could be next! 💜
          </p>
        </div>
      </div>
    </section>
  );
};
