/**
 * Font Loading Utilities
 * Helper functions for font preloading and optimization
 */

interface FontConfig {
  family: string;
  weight?: number | string;
  style?: 'normal' | 'italic';
  display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
}

/**
 * Preload a font file dynamically
 * Useful for fonts that need to be loaded on specific routes/pages
 */
export const preloadFont = (url: string, type: string = 'woff2'): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = `font/${type}`;
  link.href = url;
  link.crossOrigin = 'anonymous';
  
  // Only add if not already preloaded
  const existing = document.querySelector(`link[href="${url}"]`);
  if (!existing) {
    document.head.appendChild(link);
  }
};

/**
 * Check if a font is loaded
 * Uses the CSS Font Loading API
 */
export const isFontLoaded = async (fontFamily: string, weight: number | string = 400): Promise<boolean> => {
  if (!('fonts' in document)) {
    console.warn('CSS Font Loading API not supported');
    return false;
  }

  try {
    await document.fonts.load(`${weight} 12px ${fontFamily}`);
    return document.fonts.check(`${weight} 12px ${fontFamily}`);
  } catch (error) {
    console.error(`Error checking font ${fontFamily}:`, error);
    return false;
  }
};

/**
 * Wait for fonts to load before showing content
 * Prevents FOUT (Flash of Unstyled Text)
 */
export const waitForFonts = async (
  fonts: FontConfig[],
  timeout: number = 3000
): Promise<boolean> => {
  if (!('fonts' in document)) {
    return true; // Fallback to showing content immediately
  }

  try {
    const fontPromises = fonts.map(({ family, weight = 400, style = 'normal' }) => 
      document.fonts.load(`${style} ${weight} 12px ${family}`)
    );

    // Race between font loading and timeout
    await Promise.race([
      Promise.all(fontPromises),
      new Promise((resolve) => setTimeout(resolve, timeout))
    ]);

    return true;
  } catch (error) {
    console.error('Error loading fonts:', error);
    return true; // Show content anyway
  }
};

/**
 * Add font-display property to @font-face rules dynamically
 */
export const setFontDisplay = (display: 'swap' | 'block' | 'fallback' | 'optional' = 'swap'): void => {
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: ${display};
    }
  `;
  document.head.appendChild(style);
};

/**
 * Preload Google Fonts dynamically
 * Useful for lazy-loaded pages or code-split routes
 */
export const preloadGoogleFont = (
  families: string[],
  display: 'swap' | 'block' | 'fallback' = 'swap'
): void => {
  const familiesParam = families.join('&family=');
  const url = `https://fonts.googleapis.com/css2?family=${familiesParam}&display=${display}`;
  
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  
  const existing = document.querySelector(`link[href="${url}"]`);
  if (!existing) {
    document.head.appendChild(link);
  }
};

/**
 * Get the fallback font stack for a given font
 */
export const getFontFallback = (fontFamily: string): string => {
  const fallbacks: Record<string, string> = {
    'Orbitron': "'Orbitron', 'Trebuchet MS', 'Arial Black', sans-serif",
    'Poppins': "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    'Roboto': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    'Montserrat': "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  };

  return fallbacks[fontFamily] || `'${fontFamily}', sans-serif`;
};

/**
 * Detect if fonts failed to load and apply fallback
 */
export const detectFontLoadFailure = (
  fontFamily: string,
  fallbackClass: string,
  timeout: number = 3000
): void => {
  setTimeout(async () => {
    const loaded = await isFontLoaded(fontFamily);
    
    if (!loaded) {
      console.warn(`Font ${fontFamily} failed to load, applying fallback`);
      document.documentElement.classList.add(fallbackClass);
    }
  }, timeout);
};

/**
 * Initialize font loading with error handling
 */
export const initFontLoading = async (): Promise<void> => {
  if (!('fonts' in document)) {
    console.warn('CSS Font Loading API not supported');
    return;
  }

  try {
    // Wait for all fonts to load or timeout after 3s
    await Promise.race([
      document.fonts.ready,
      new Promise((resolve) => setTimeout(resolve, 3000))
    ]);

    console.log('✅ Fonts loaded successfully');
  } catch (error) {
    console.error('❌ Error loading fonts:', error);
  }
};

export default {
  preloadFont,
  isFontLoaded,
  waitForFonts,
  setFontDisplay,
  preloadGoogleFont,
  getFontFallback,
  detectFontLoadFailure,
  initFontLoading
};