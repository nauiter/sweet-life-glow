import { useState, useEffect, useRef } from "react";
import { Sparkles, Heart, Star } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: 'sparkle' | 'heart' | 'star';
  color: string;
  scale: number;
  rotation: number;
}

export const MagicCursor = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const particleIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const throttleRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const colors = [
      'hsl(var(--primary))',
      'hsl(var(--secondary))',
      'hsl(var(--accent))',
    ];

    const icons: Array<'sparkle' | 'heart' | 'star'> = ['sparkle', 'heart', 'star'];

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Calculate distance from last position
      const dx = clientX - lastPositionRef.current.x;
      const dy = clientY - lastPositionRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Only create particles if mouse moved significantly
      if (distance < 10) return;
      
      lastPositionRef.current = { x: clientX, y: clientY };

      // Throttle particle creation
      if (throttleRef.current) return;
      
      throttleRef.current = setTimeout(() => {
        throttleRef.current = null;
      }, 50);

      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: clientX,
        y: clientY,
        icon: icons[Math.floor(Math.random() * icons.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: 0.5 + Math.random() * 0.5,
        rotation: Math.random() * 360,
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" aria-hidden="true">
      {particles.map((particle) => {
        const Icon = particle.icon === 'sparkle' 
          ? Sparkles 
          : particle.icon === 'heart' 
            ? Heart 
            : Star;

        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              left: particle.x,
              top: particle.y,
              transform: `translate(-50%, -50%) scale(${particle.scale}) rotate(${particle.rotation}deg)`,
              animation: 'particle-fade 1s ease-out forwards',
            }}
          >
            <Icon
              size={16}
              style={{ color: particle.color }}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );
};