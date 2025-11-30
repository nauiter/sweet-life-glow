import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import artSample1 from "@/assets/art-sample-1.jpg";
import artSample2 from "@/assets/art-sample-2.jpg";
import artSample3 from "@/assets/art-sample-3.jpg";
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
import galleryBg from "@/assets/gallery-bg.jpg";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

// Gallery artworks collection
const galleryArtworks = [
  { id: 1, image: artSample1, title: "Digital Workspace Magic", description: "Learn professional workflow" },
  { id: 2, image: artSample2, title: "Character Design Mastery", description: "Express emotions through poses" },
  { id: 3, image: artSample3, title: "Creative Process", description: "From sketch to masterpiece" },
  { id: 4, image: artSample4, title: "Fashion Elegance", description: "Master clothing design and details" },
  { id: 5, image: artSample5, title: "Outdoor Adventure", description: "Dynamic poses in natural settings" },
  { id: 6, image: artSample6, title: "Indoor Portrait", description: "Perfect lighting and composition" },
  { id: 7, image: artSample7, title: "Night Scene Mood", description: "Atmospheric lighting techniques" },
  { id: 8, image: artSample8, title: "Dynamic Action Pose", description: "Movement and energy expression" },
  { id: 9, image: artSample9, title: "Perspective Mastery", description: "Advanced angle techniques" },
  { id: 10, image: artSample10, title: "Gaming Vibes", description: "Modern character personality" },
  { id: 11, image: artSample11, title: "Energetic Expression", description: "Capturing emotion and life" },
  { id: 12, image: artSample12, title: "Workspace Focus", description: "Digital artist lifestyle" },
  { id: 13, image: artSample13, title: "Mystical Atmosphere", description: "Fantasy lighting and mood" },
  { id: 14, image: artSample14, title: "Elegant Poses", description: "Graceful character positioning" },
  { id: 15, image: artSample15, title: "Cozy Moments", description: "Intimate scene composition" },
  { id: 16, image: artSample16, title: "Power Action", description: "Dynamic energy and motion" },
  { id: 17, image: artSample17, title: "Combat Scene", description: "Action-packed illustration" },
  { id: 18, image: artSample18, title: "Fierce Character", description: "Strong personality design" },
  { id: 19, image: artSample19, title: "Spring Fantasy", description: "Colorful seasonal art" }
];

const ITEMS_PER_PAGE = 9;

export const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<typeof galleryArtworks[0] | null>(null);
  
  const totalPages = Math.ceil(galleryArtworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArtworks = galleryArtworks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", SPACING.grid.normal, SPACING.container.full)}>
          {currentArtworks.map((artwork, index) => (
            <Dialog key={artwork.id}>
              <DialogTrigger asChild>
                <Card 
                  className={cn("group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up cursor-pointer")}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(artwork)}
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      width={1024}
                      height={1024}
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

        {/* Pagination */}
        <div className={cn("flex justify-center", SPACING.margin.major)}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                  className={cn(
                    currentPage === 1 && "pointer-events-none opacity-50",
                    "cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                  )}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => handlePageChange(page)}
                    isActive={currentPage === page}
                    className={cn(
                      "cursor-pointer transition-all",
                      currentPage === page 
                        ? "bg-primary/20 text-primary border-primary/50 hover:bg-primary/30" 
                        : "hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={cn(
                    currentPage === totalPages && "pointer-events-none opacity-50",
                    "cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
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
