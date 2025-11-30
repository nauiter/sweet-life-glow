/**
 * Responsive Image Utilities
 * 
 * IMPORTANT: For srcset to provide actual bandwidth savings, you need EITHER:
 * 1. A CDN with on-the-fly image resizing (recommended - see CDN_SETUP_GUIDE.md)
 *    - Cloudinary, Imgix, or similar
 *    - Automatically generates optimized sizes
 * 2. Pre-generated image files at each size (400w, 800w, 1200w)
 *    - Manual process but no CDN required
 *    - Increases repository size
 * 
 * Current setup provides the STRUCTURE but uses same image for all sizes.
 * Browser will still benefit from proper sizes attribute for layout.
 */

interface ImageSrcSetOptions {
  src: string;
  widths?: number[];
  cdnEnabled?: boolean;
  cdnBaseUrl?: string;
}

/**
 * Generates srcset string for responsive images
 * @param options - Image configuration
 * @returns srcset string for img element
 */
export const generateSrcSet = (options: ImageSrcSetOptions): string => {
  const { src, widths = [400, 800, 1200], cdnEnabled = false, cdnBaseUrl = '' } = options;

  if (!cdnEnabled || !cdnBaseUrl) {
    // Without CDN: Use same image for all sizes
    // Browser still benefits from proper sizes calculation
    return widths.map(width => `${src} ${width}w`).join(', ');
  }

  // With CDN: Generate URLs for each size
  // Example for Cloudinary: `${cdnBaseUrl}/w_${width}/${imagePath}`
  return widths.map(width => {
    const transformedUrl = `${cdnBaseUrl}/w_${width}${src}`;
    return `${transformedUrl} ${width}w`;
  }).join(', ');
};

/**
 * Standard sizes attribute for gallery images
 * Optimizes for mobile-first with proper breakpoints
 */
export const GALLERY_IMAGE_SIZES = "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";

/**
 * Sizes for hero/featured images
 */
export const HERO_IMAGE_SIZES = "(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px";

/**
 * Configuration object for CDN settings
 * Update this when CDN is configured
 */
export const CDN_CONFIG = {
  enabled: false, // Set to true when CDN is configured
  baseUrl: '', // e.g., 'https://res.cloudinary.com/your-account/image/upload'
  // Cloudinary example: 'https://res.cloudinary.com/sweetlifeanimes/image/upload'
  // Imgix example: 'https://sweetlifeanimes.imgix.net'
};
