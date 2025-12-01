import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(328 100% 64% / 0.3)" },
          "50%": { boxShadow: "0 0 30px hsl(328 100% 64% / 0.5), 0 0 60px hsl(270 100% 70% / 0.3)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-footer": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-in": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.9) translateY(20px)" 
          },
          "60%": { 
            opacity: "1", 
            transform: "scale(1.02) translateY(-5px)" 
          },
          "80%": { 
            transform: "scale(0.98) translateY(2px)" 
          },
          "100%": { 
            transform: "scale(1) translateY(0)" 
          },
        },
        "parallax-1": {
          "0%": { 
            opacity: "0", 
            transform: "translate(40px, -40px) scale(0.8)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translate(0, 0) scale(1)" 
          },
        },
        "parallax-2": {
          "0%": { 
            opacity: "0", 
            transform: "translate(-40px, 40px) scale(0.8)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translate(0, 0) scale(1)" 
          },
        },
        "blur-in": {
          "0%": {
            opacity: "0",
            filter: "blur(20px)",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateY(0)"
          },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in-footer": "fade-in-footer 0.8s ease-out",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "parallax-1": "parallax-1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "parallax-2": "parallax-2 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "blur-in": "blur-in 0.8s ease-out",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents }: any) {
      addComponents({
        // Card Variants
        '.card-elevated': {
          '@apply bg-card/70 backdrop-blur-sm border border-primary/20 hover:border-primary/30 transition-all duration-300': {},
        },
        '.card-glass': {
          '@apply bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/30 cursor-pointer transition-all duration-300': {},
        },
        '.card-gradient': {
          '@apply bg-card/70 backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10': {},
        },
        '.card-highlight': {
          '@apply bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/30 transition-all duration-300 hover:from-primary/15 hover:to-secondary/15': {},
        },
        '.card-solid': {
          '@apply bg-card/70 backdrop-blur-sm border border-primary/20 transition-all duration-300': {},
        },
        
        // Badge Variants
        '.badge-primary': {
          '@apply px-3 py-1 bg-primary/20 rounded-full border border-primary/50 text-sm': {},
        },
        '.badge-secondary': {
          '@apply px-3 py-1 bg-secondary/20 rounded-full border border-secondary/50 text-sm': {},
        },
        '.badge-accent': {
          '@apply px-3 py-1 bg-accent/20 rounded-full border border-accent/50 text-sm': {},
        },
        
        // Container Variants
        '.container-narrow': {
          '@apply max-w-2xl mx-auto': {},
        },
        '.container-content': {
          '@apply max-w-4xl mx-auto': {},
        },
        '.container-wide': {
          '@apply max-w-6xl mx-auto': {},
        },
        
        // Icon Wrapper
        '.icon-wrapper': {
          '@apply w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center': {},
        },
        '.icon-wrapper-lg': {
          '@apply w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center neon-glow': {},
        },
      });
    },
  ],
} satisfies Config;
