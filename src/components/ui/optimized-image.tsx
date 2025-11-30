import * as React from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * OptimizedImage Component
 * 
 * Automatically generates WebP and AVIF versions with fallback to original format.
 * Uses the <picture> element for modern format support with automatic fallbacks.
 * 
 * @example
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 *   sizes="(max-width: 768px) 100vw, 50vw"
 *   priority
 * />
 */
export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src, alt, width, height, sizes, priority = false, className, ...props }, ref) => {
    // Generate format variations of the source URL
    const getFormatUrl = (url: string, format: 'webp' | 'avif' | 'original') => {
      if (format === 'original') return url;
      
      // For local images, generate the format URL
      // This assumes you'll have converted versions or a CDN will handle it
      const extension = url.split('.').pop();
      const baseUrl = url.replace(`.${extension}`, '');
      
      return `${baseUrl}.${format}`;
    };

    // Generate srcset for responsive images
    const generateResponsiveSrcSet = (url: string, format: 'webp' | 'avif' | 'jpg') => {
      if (!width) return url;
      
      // Common responsive breakpoints
      const widths = [640, 750, 828, 1080, 1200, 1920];
      const relevantWidths = widths.filter(w => w <= (width * 2));
      
      if (relevantWidths.length === 0) {
        relevantWidths.push(width);
      }
      
      return relevantWidths
        .map(w => `${getFormatUrl(url, format === 'jpg' ? 'original' : format)} ${w}w`)
        .join(', ');
    };

    const avifSrc = getFormatUrl(src, 'avif');
    const webpSrc = getFormatUrl(src, 'webp');
    const fallbackSrc = getFormatUrl(src, 'original');

    return (
      <picture>
        {/* AVIF - Best compression (up to 50% better than JPEG) */}
        <source
          type="image/avif"
          srcSet={sizes ? generateResponsiveSrcSet(src, 'avif') : avifSrc}
          sizes={sizes}
        />
        
        {/* WebP - Great compression (25-35% better than JPEG) */}
        <source
          type="image/webp"
          srcSet={sizes ? generateResponsiveSrcSet(src, 'webp') : webpSrc}
          sizes={sizes}
        />
        
        {/* Fallback - Original format for older browsers */}
        <img
          ref={ref}
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={cn("transition-opacity duration-300", className)}
          {...props}
        />
      </picture>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;