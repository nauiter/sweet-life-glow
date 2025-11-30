import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import artSample1 from "@/assets/art-sample-1.jpg";
import artSample2 from "@/assets/art-sample-2.jpg";
import artSample3 from "@/assets/art-sample-3.jpg";
import galleryBg from "@/assets/gallery-bg.jpg";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

// Mock data: Generate 36 items by repeating the 3 existing images
const baseArtworks = [
  { image: artSample1, title: "Digital Workspace Magic", description: "Learn professional workflow" },
  { image: artSample2, title: "Character Design Mastery", description: "Express emotions through poses" },
  { image: artSample3, title: "Creative Process", description: "From sketch to masterpiece" }
];

const generateMockArtworks = () => {
  return Array.from({ length: 36 }, (_, index) => {
    const baseIndex = index % 3;
    return {
      id: index + 1,
      image: baseArtworks[baseIndex].image,
      title: `${baseArtworks[baseIndex].title} #${index + 1}`,
      description: baseArtworks[baseIndex].description
    };
  });
};

const ITEMS_PER_PAGE = 9;

export const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  
  const artworks = generateMockArtworks();
  const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentArtworks = artworks.slice(startIndex, endIndex);

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
                  <div className="relative aspect-square overflow-hidden">
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
