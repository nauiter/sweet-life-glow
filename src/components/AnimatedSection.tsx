import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'slide' | 'scale' | 'fade';
  delay?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = 'slide',
  delay = 0 
}: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true
  });

  const animationClass = animation === 'scale' ? 'scroll-animate-scale' : 'scroll-animate';

  return (
    <div
      ref={ref}
      className={cn(
        animationClass,
        isIntersecting && 'is-visible',
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
