/**
 * Design System Tokens
 * Centralized design tokens for consistent spacing, typography, and layout
 * 
 * Usage:
 * import { TYPOGRAPHY, SPACING } from '@/constants/designTokens';
 * <h1 className={TYPOGRAPHY.heading.h1}>Title</h1>
 * <section className={SPACING.section.y}>...</section>
 */

export const TYPOGRAPHY = {
  heading: {
    // Hero title: 36px → 48px → 72px
    h1: 'text-4xl sm:text-5xl lg:text-7xl font-bold',
    // Section title: 30px → 36px → 48px
    h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
    // Card/Sub title: 20px → 24px
    h3: 'text-xl sm:text-2xl font-bold',
    // Small heading: 18px → 20px
    h4: 'text-lg sm:text-xl font-semibold',
  },
  body: {
    // Intro paragraph: 18px → 20px
    intro: 'text-lg sm:text-xl',
    // Default body: 16px (always)
    default: 'text-base',
    // Small text: 14px
    small: 'text-sm',
    // Tiny text: 12px
    tiny: 'text-xs',
  },
  stat: {
    // Large numbers: 24px → 30px
    number: 'text-2xl sm:text-3xl font-bold',
    // Stat labels: 12px → 14px
    label: 'text-xs sm:text-sm',
  },
  // Badge/chip: 12px → 14px
  badge: 'text-xs sm:text-sm font-medium',
} as const;

export const SPACING = {
  section: {
    // Vertical padding equilibrado: 48px → 64px → 80px → 96px
    y: 'py-12 sm:py-16 md:py-20 lg:py-24',
    // Horizontal padding: 16px → 20px → 24px → 32px
    x: 'px-4 sm:px-5 md:px-6 lg:px-8',
  },
  container: {
    // Narrow content (text, FAQs): 768px
    narrow: 'max-w-3xl mx-auto',
    // Standard content (benefits, cards): 896px
    content: 'max-w-4xl mx-auto',
    // Wide content (products, resources): 1024px
    wide: 'max-w-5xl mx-auto',
    // Full width (galleries, grids): 1152px
    full: 'max-w-6xl mx-auto',
  },
  card: {
    // Compact cards: 16px → 24px
    compact: 'p-4 sm:p-6',
    // Default cards: 24px → 32px
    default: 'p-6 sm:p-8',
    // Spacious/hero cards: 32px → 40px
    spacious: 'p-8 sm:p-10',
  },
  grid: {
    // Tight grid spacing: 12px → 16px
    tight: 'gap-3 sm:gap-4',
    // Normal grid spacing: 16px → 20px → 24px (mobile-optimized)
    normal: 'gap-4 sm:gap-5 md:gap-6',
    // Relaxed grid spacing: 24px → 32px
    relaxed: 'gap-6 md:gap-8',
    // Loose grid spacing: 32px → 48px
    loose: 'gap-8 md:gap-12',
  },
  stack: {
    // Tight vertical stack: 12px
    tight: 'space-y-3',
    // Normal vertical stack: 16px
    normal: 'space-y-4',
    // Relaxed vertical stack: 24px
    relaxed: 'space-y-6',
  },
  margin: {
    // Tight margin: 8px
    tight: 'mb-2',
    // Close margin: 12px → 16px
    close: 'mb-3 sm:mb-4',
    // Normal margin: 16px → 24px
    normal: 'mb-4 sm:mb-6',
    // Section margin: 24px → 32px
    section: 'mb-6 sm:mb-8',
    // Major margin: 32px → 48px
    major: 'mb-8 sm:mb-10 md:mb-12',
    // Hero margin: 48px → 64px
    hero: 'mb-12 sm:mb-14 md:mb-16',
  },
} as const;

/**
 * Utility function to combine design tokens
 * 
 * Example:
 * cn(TYPOGRAPHY.heading.h2, "gradient-text")
 */
export const combineTokens = (...tokens: string[]) => tokens.join(' ');
