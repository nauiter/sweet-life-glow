/**
 * Image Optimization Utilities
 * Supports Cloudinary and Imgix CDN integration
 * Includes WebP and AVIF format support with automatic fallbacks
 */

type CDNProvider = 'cloudinary' | 'imgix' | 'none';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down';
}

interface ModernImageFormats {
  avif: string;
  webp: string;
  fallback: string;
}

// Configure your CDN provider here
const CDN_CONFIG = {
  provider: 'none' as CDNProvider, // Change to 'cloudinary' or 'imgix' when ready
  cloudinary: {
    cloudName: '', // Add your Cloudinary cloud name
    baseUrl: 'https://res.cloudinary.com'
  },
  imgix: {
    domain: '', // Add your Imgix domain
    baseUrl: 'https://'
  }
};

/**
 * Generate optimized image URL using configured CDN
 */
export const getOptimizedImageUrl = (
  imagePath: string,
  options: ImageOptions = {}
): string => {
  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    fit = 'cover'
  } = options;

  // If no CDN is configured, return original path
  if (CDN_CONFIG.provider === 'none') {
    return imagePath;
  }

  // Cloudinary transformation
  if (CDN_CONFIG.provider === 'cloudinary' && CDN_CONFIG.cloudinary.cloudName) {
    const transformations: string[] = [];
    
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    if (quality) transformations.push(`q_${quality}`);
    if (format !== 'auto') transformations.push(`f_${format}`);
    if (fit) transformations.push(`c_${fit}`);
    
    // Add automatic format and quality optimization
    transformations.push('f_auto', 'q_auto');
    
    const transformString = transformations.join(',');
    const cleanPath = imagePath.replace(/^\//, '');
    
    return `${CDN_CONFIG.cloudinary.baseUrl}/${CDN_CONFIG.cloudinary.cloudName}/image/upload/${transformString}/${cleanPath}`;
  }

  // Imgix transformation
  if (CDN_CONFIG.provider === 'imgix' && CDN_CONFIG.imgix.domain) {
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (format !== 'auto') params.append('fm', format);
    if (fit) params.append('fit', fit);
    
    // Add automatic format optimization
    params.append('auto', 'format,compress');
    
    const cleanPath = imagePath.replace(/^\//, '');
    const queryString = params.toString();
    
    return `${CDN_CONFIG.imgix.baseUrl}${CDN_CONFIG.imgix.domain}/${cleanPath}?${queryString}`;
  }

  return imagePath;
};

/**
 * Generate responsive srcset for images
 */
export const generateSrcSet = (
  imagePath: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920]
): string => {
  return widths
    .map((width) => {
      const url = getOptimizedImageUrl(imagePath, { width, quality: 80 });
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Preload critical images for better LCP
 */
export const preloadImage = (src: string, options: ImageOptions = {}) => {
  const optimizedSrc = getOptimizedImageUrl(src, options);
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = optimizedSrc;
  
  // Add responsive srcset if width is specified
  if (options.width) {
    link.setAttribute('imagesrcset', generateSrcSet(src));
    link.setAttribute('imagesizes', '100vw');
  }
  
  document.head.appendChild(link);
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  options: ImageOptions = {}
) => {
  const optimizedSrc = getOptimizedImageUrl(src, options);
  
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading
    img.loading = 'lazy';
    img.src = optimizedSrc;
  } else {
    // Fallback to Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = optimizedSrc;
          observer.unobserve(img);
        }
      });
    });
    
    observer.observe(img);
  }
};

/**
 * Generate modern image format URLs (AVIF, WebP, fallback)
 * Perfect for use with <picture> element
 */
export const getModernImageFormats = (
  imagePath: string,
  options: ImageOptions = {}
): ModernImageFormats => {
  return {
    avif: getOptimizedImageUrl(imagePath, { ...options, format: 'avif' }),
    webp: getOptimizedImageUrl(imagePath, { ...options, format: 'webp' }),
    fallback: getOptimizedImageUrl(imagePath, { ...options, format: options.format === 'png' ? 'png' : 'jpg' })
  };
};

/**
 * Generate responsive srcset for multiple formats
 * Returns object with AVIF, WebP, and fallback srcsets
 */
export const generateModernSrcSets = (
  imagePath: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920],
  options: Omit<ImageOptions, 'width'> = {}
): ModernImageFormats => {
  const generateFormatSrcSet = (format: 'avif' | 'webp' | 'jpg') => {
    return widths
      .map((width) => {
        const url = getOptimizedImageUrl(imagePath, { 
          ...options, 
          width, 
          format: format === 'jpg' ? (options.format === 'png' ? 'png' : 'jpg') : format 
        });
        return `${url} ${width}w`;
      })
      .join(', ');
  };

  return {
    avif: generateFormatSrcSet('avif'),
    webp: generateFormatSrcSet('webp'),
    fallback: generateFormatSrcSet('jpg')
  };
};

/**
 * Preload critical images with modern formats
 */
export const preloadModernImage = (
  src: string,
  options: ImageOptions = {},
  formats: ('avif' | 'webp' | 'jpg')[] = ['avif', 'webp']
) => {
  formats.forEach((format) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = `image/${format}`;
    
    const optimizedSrc = getOptimizedImageUrl(src, { ...options, format });
    link.href = optimizedSrc;
    
    if (options.width) {
      const srcset = widths => widths
        .map(w => `${getOptimizedImageUrl(src, { ...options, width: w, format })} ${w}w`)
        .join(', ');
      link.setAttribute('imagesrcset', srcset([640, 750, 828, 1080, 1200, 1920]));
      link.setAttribute('imagesizes', '100vw');
    }
    
    document.head.appendChild(link);
  });
};

/**
 * Configure CDN provider (call this in your app initialization)
 */
export const configureCDN = (
  provider: CDNProvider,
  config: { cloudName?: string; domain?: string }
) => {
  CDN_CONFIG.provider = provider;
  
  if (provider === 'cloudinary' && config.cloudName) {
    CDN_CONFIG.cloudinary.cloudName = config.cloudName;
  }
  
  if (provider === 'imgix' && config.domain) {
    CDN_CONFIG.imgix.domain = config.domain;
  }
};

export default {
  getOptimizedImageUrl,
  generateSrcSet,
  getModernImageFormats,
  generateModernSrcSets,
  preloadImage,
  preloadModernImage,
  lazyLoadImage,
  configureCDN
};