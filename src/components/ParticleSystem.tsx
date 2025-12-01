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
}

export const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const icons: Array<'sparkle' | 'star' | 'heart' | 'circle'> = ['sparkle', 'star', 'heart', 'circle'];
    const particleCount = 25; // Número de partículas

    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Posição X em %
      y: Math.random() * 100, // Posição Y em %
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: 12 + Math.random() * 12, // Tamanho entre 12-24px
      duration: 8 + Math.random() * 12, // Duração animação 8-20s
      delay: Math.random() * 5, // Delay inicial 0-5s
      opacity: 0.15 + Math.random() * 0.25, // Opacidade 0.15-0.4
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
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={particle.id}
            className="absolute animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          >
            <Icon
              size={particle.size}
              style={{ 
                color,
                filter: 'drop-shadow(0 0 8px currentColor)',
              }}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );
};
