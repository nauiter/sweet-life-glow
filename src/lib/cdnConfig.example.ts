/**
 * CDN Configuration Example
 * 
 * Copy this file to cdnConfig.ts and add your CDN credentials
 * 
 * CLOUDINARY SETUP:
 * 1. Sign up at https://cloudinary.com
 * 2. Get your cloud name from dashboard
 * 3. Uncomment and fill in the cloudinary section below
 * 
 * IMGIX SETUP:
 * 1. Sign up at https://imgix.com
 * 2. Create a source and get your domain
 * 3. Uncomment and fill in the imgix section below
 */

import { configureCDN } from './imageOptimization';

// Initialize CDN configuration on app start
export const initCDN = () => {
  // Option 1: Cloudinary
  /*
  configureCDN('cloudinary', {
    cloudName: 'your-cloud-name-here'
  });
  */

  // Option 2: Imgix
  /*
  configureCDN('imgix', {
    domain: 'your-domain.imgix.net'
  });
  */

  // Option 3: No CDN (default - uses local images)
  configureCDN('none', {});
};

/**
 * HOW TO USE:
 * 
 * 1. Import in your main.tsx or App.tsx:
 *    import { initCDN } from './lib/cdnConfig';
 * 
 * 2. Call before rendering:
 *    initCDN();
 * 
 * 3. Use in components:
 *    import { getOptimizedImageUrl } from './lib/imageOptimization';
 *    
 *    const optimizedUrl = getOptimizedImageUrl('/images/artwork.jpg', {
 *      width: 800,
 *      quality: 80,
 *      format: 'auto'
 *    });
 */