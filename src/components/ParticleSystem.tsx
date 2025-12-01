import { useEffect, useState } from "react";
import { Sparkles, Star, Heart, Circle } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: 'sparkle' | 'star' | 'heart' | 'circle';
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
  rotation: number;
  layer: number;
}

export const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const icons: Array<'sparkle' | 'star' | 'heart' | 'circle'> = ['sparkle', 'star', 'heart', 'circle'];
    const particleCount = 30;

    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: 10 + Math.random() * 14,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      opacity: 0.2 + Math.random() * 0.3,
      drift: -20 + Math.random() * 40, // Drift horizontal -20 a 20px
      rotation: Math.random() * 360, // Rotação inicial aleatória
      layer: Math.floor(Math.random() * 3), // 3 camadas para parallax
    }));

    setParticles(newParticles);
  }, []);

  const getIcon = (type: Particle['icon']) => {
    switch (type) {
      case 'sparkle':
        return Sparkles;
      case 'star':
        return Star;
      case 'heart':
        return Heart;
      case 'circle':
        return Circle;
    }
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => {
        const Icon = getIcon(particle.icon);
        const colors = [
          'hsl(var(--primary))',
          'hsl(var(--secondary))',
          'hsl(var(--accent))',
        ];
        const color = colors[particle.id % colors.length];
        
        // Parallax baseado na camada
        const parallaxSpeed = [0.1, 0.2, 0.3][particle.layer];
        const parallaxOffset = scrollY * parallaxSpeed;

        return (
          <div
            key={particle.id}
            className="absolute particle-ambient"
            style={{
              left: `${particle.x}%`,
              top: `calc(${particle.y}% - ${parallaxOffset}px)`,
              animationDuration: `${particle.duration}s, ${particle.duration * 0.7}s, ${particle.duration * 1.2}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          >
            <Icon
              size={particle.size}
              style={{ 
                color,
                filter: 'drop-shadow(0 0 6px currentColor)',
              }}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );
};
