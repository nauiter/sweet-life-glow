import { Card } from "@/components/ui/card";
import artSample1 from "@/assets/art-sample-1.jpg";
import artSample2 from "@/assets/art-sample-2.jpg";
import artSample3 from "@/assets/art-sample-3.jpg";
import galleryBg from "@/assets/gallery-bg.jpg";
import { TYPOGRAPHY, SPACING } from "@/constants/designTokens";
import { cn } from "@/lib/utils";

export const GallerySection = () => {
  const artworks = [
    {
      image: artSample1,
      title: "Digital Workspace Magic",
      description: "Learn professional workflow"
    },
    {
      image: artSample2,
      title: "Character Design Mastery",
      description: "Express emotions through poses"
    },
    {
      image: artSample3,
      title: "Creative Process",
      description: "From sketch to masterpiece"
    }
  ];

  return (
    <section className={cn("relative overflow-hidden", SPACING.section.y)}>
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
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3", SPACING.grid.normal, SPACING.container.full)}>
          {artworks.map((artwork, index) => (
            <Card 
              key={index}
              className={cn("group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up cursor-pointer")}
              style={{ animationDelay: `${index * 0.1}s` }}
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
