import { Card } from "@/components/ui/card";
import artSample1 from "@/assets/art-sample-1.jpg";
import artSample2 from "@/assets/art-sample-2.jpg";
import artSample3 from "@/assets/art-sample-3.jpg";
import galleryBg from "@/assets/gallery-bg.jpg";

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
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={galleryBg} alt="" width={1701} height={1080} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      
      <div className="container relative z-10 px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Gallery Showcase
          </h2>
          <p className="text-xl text-muted-foreground">
            Check out what you'll be creating! These are real student works and examples from our community.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {artworks.map((artwork, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:neon-glow animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                    <p className="text-muted-foreground">{artwork.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every week, students share their amazing progress in our Discord community. You could be next! 💜
          </p>
        </div>
      </div>
    </section>
  );
};
