import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number;
  isDecimal?: boolean;
  enabled?: boolean;
}

/**
 * Custom hook for animating numerical counters using requestAnimationFrame
 * More performant than setInterval as it syncs with browser paint cycle
 * 
 * @param target - The final number to count to
 * @param duration - Animation duration in milliseconds (default: 1500ms)
 * @param isDecimal - Whether to show decimal places (default: false)
 * @param enabled - Whether to start the animation (default: true)
 * @returns The current animated value
 */
export const useAnimatedCounter = ({
  target,
  duration = 1500,
  isDecimal = false,
  enabled = true,
}: UseAnimatedCounterOptions): number => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = target * easeOutQuart;

      if (isDecimal) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, duration, isDecimal, enabled]);

  return count;
};
