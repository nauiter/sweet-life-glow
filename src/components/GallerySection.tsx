import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  { id: 30, image: artSample33, title: "Peaceful Embrace", description: "Soft mood rendering" },
  { id: 31, image: artSample34, title: "Action Hero", description: "Dynamic combat pose" },
  { id: 32, image: artSample35, title: "Tactical Style", description: "Modern character design" },
  { id: 33, image: artSample36, title: "Neon Aesthetic", description: "Cyberpunk vibes" },
  { id: 34, image: artSample37, title: "Cherry Blossom", description: "Spring atmosphere" }
];

const ITEMS_PER_BATCH = 8;
const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export const GallerySection = () => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryArtworks[0] | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalBatches = Math.ceil(galleryArtworks.length / ITEMS_PER_BATCH);
  const startIndex = currentBatch * ITEMS_PER_BATCH;
  const endIndex = startIndex + ITEMS_PER_BATCH;
  const currentArtworks = galleryArtworks.slice(startIndex, endIndex);

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

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="gallery" className={cn("relative overflow-hidden", SPACING.section.y)}>
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={galleryBg} 
          alt="" 
          width={1701} 
          height={1080} 
          loading="lazy"
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className={cn("container relative z-10", SPACING.section.x)}>
        {/* Header */}
        <div className={cn("text-center animate-slide-up", SPACING.container.narrow, SPACING.stack.normal, SPACING.margin.hero)}>
          <h2 className={cn(TYPOGRAPHY.heading.h2, "gradient-text")}>
            Gallery Showcase
          </h2>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground")}>
            Check out what you'll be creating! These are real student works and examples from our community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", SPACING.grid.normal, SPACING.container.full)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {currentArtworks.map((artwork, index) => (
            <Dialog key={`${artwork.id}-${currentBatch}`}>
              <DialogTrigger asChild>
                <Card 
                  className={cn(
                    "group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow cursor-pointer",
                    isTransitioning ? "opacity-0" : "opacity-100 animate-fade-in"
                  )}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transition: 'opacity 0.3s ease-in-out'
                  }}
                  onClick={() => setSelectedImage(artwork)}
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      width={1024}
                      height={1820}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className={cn(TYPOGRAPHY.heading.h4, SPACING.margin.tight)}>{artwork.title}</h3>
                        <p className={cn(TYPOGRAPHY.body.small, "text-muted-foreground")}>{artwork.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-primary/20">
                <div className="relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                  <div className="mt-6">
                    <h3 className={cn(TYPOGRAPHY.heading.h3, SPACING.margin.tight, "gradient-text")}>{artwork.title}</h3>
                    <p className={cn(TYPOGRAPHY.body.default, "text-muted-foreground")}>{artwork.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Progress Dots */}
        <div className={cn("flex justify-center gap-2", SPACING.margin.section)}>
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
                "w-2 h-2 rounded-full transition-all",
                currentBatch === i 
                  ? "bg-primary w-8" 
                  : "bg-primary/30 hover:bg-primary/50"
              )}
              aria-label={`Go to batch ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className={cn("text-center animate-slide-up", SPACING.margin.major)} style={{ animationDelay: '0.3s' }}>
          <p className={cn(TYPOGRAPHY.body.intro, "text-muted-foreground max-w-2xl mx-auto")}>
            Every week, students share their amazing progress in our Discord community. You could be next! 💜
          </p>
        </div>
      </div>
    </section>
  );
};
