# Background Colors Audit - Sweet Life Animes

## Design System Variables (from index.css)
- `--background: 276 65% 11%` - Main dark purple background
- `--card: 276 50% 15%` - Card background (slightly lighter purple)
- `--primary: 328 100% 64%` - Hot pink
- `--secondary: 270 60% 50%` - Purple
- `--accent: 180 100% 60%` - Cyan

## Current Background Usage Analysis

### Section Backgrounds (Should be consistent)
✅ **Standardized to**: `bg-background` or subtle gradients with `via-card/5`

#### AboutSection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`
- Blob: `bg-primary/10`

#### CommunitySection  
- Main: `bg-background`
- Blob: `bg-secondary/10`

#### FAQSection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`
- Blob: `bg-primary/10`

#### GallerySection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`

#### HeroSection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`
- Blobs: `bg-primary/30`, `bg-secondary/30`, `bg-accent/30`

#### ShopSection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`
- Blob: `bg-primary/10`

#### UpdatesSection
- Main: `bg-gradient-to-b from-background via-card/5 to-background`

### Card Backgrounds (Should use design system classes)
✅ **Standardized to**: card variants from tailwind.config.ts
- `card-elevated`: `bg-card/70`
- `card-gradient`: `bg-card/70`
- `card-highlight`: `bg-gradient-to-br from-primary/10 to-secondary/10`
- `card-solid`: `bg-card/70`

### Component-Specific Backgrounds

#### Tooltips/Popovers
- Should use: `bg-background/95` with `backdrop-blur-sm`

#### Buttons
- Hero variant: `bg-gradient-to-r from-primary via-secondary to-primary`
- White variant: `bg-white`

#### Decorative Elements
- Badges: `bg-card/50` or `bg-primary/20` variants
- Icons: `bg-gradient-to-br from-primary to-secondary`

## Recommended Standards

### 1. Section Backgrounds
```css
/* Main sections - subtle gradient */
bg-gradient-to-b from-background via-card/5 to-background

/* Decorative blobs */
bg-primary/10 or bg-secondary/10 (max 10% opacity)
```

### 2. Card Backgrounds
```css
/* Use design system classes only */
card-elevated, card-gradient, card-highlight, card-solid
```

### 3. Overlay Backgrounds
```css
/* Semi-transparent overlays */
bg-background/95 backdrop-blur-sm
bg-background/80 backdrop-blur-md
```

### 4. Interactive Elements
```css
/* Hover states */
hover:bg-primary/10
hover:bg-card/80

/* Active states */  
active:bg-primary/20
```

## Action Items
1. ✅ Remove Section wrapper backgrounds
2. ✅ Standardize all card backgrounds to use design system classes
3. ✅ Ensure all section backgrounds use consistent gradient pattern
4. ✅ Standardize blob opacities to 10%
5. ✅ Use semantic color variables instead of hardcoded values
