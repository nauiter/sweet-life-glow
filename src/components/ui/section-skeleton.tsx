import { Card } from "@/components/ui/card";

/**
 * Section Skeleton Loader
 * A reusable placeholder component for lazy-loaded sections
 * Provides visual feedback during content loading with pulse animation
 */
export const SectionSkeleton = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 space-y-8 animate-pulse">
        {/* Header Skeleton */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="h-8 w-48 bg-muted/20 rounded-full mx-auto" />
          <div className="h-12 w-96 bg-muted/30 rounded-lg mx-auto" />
          <div className="h-6 w-80 bg-muted/20 rounded mx-auto" />
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <Card 
              key={i} 
              className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 space-y-4"
            >
              <div className="w-16 h-16 bg-muted/30 rounded-xl" />
              <div className="h-6 w-full bg-muted/20 rounded" />
              <div className="h-4 w-3/4 bg-muted/20 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-muted/15 rounded" />
                <div className="h-3 w-5/6 bg-muted/15 rounded" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
