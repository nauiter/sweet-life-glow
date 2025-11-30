import { useState, useEffect } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  name: string;
  message: string;
  colorVariant: 'white' | 'pink' | 'purple';
  badge: string;
  cta: string;
}

const firstNames = [
  "Emma", "Olivia", "Ava", "Sophia", "Isabella",
  "Mia", "Charlotte", "Amelia", "Harper", "Evelyn",
  "Liam", "Noah", "William", "James", "Oliver",
  "Benjamin", "Elijah", "Lucas", "Mason", "Logan",
  "Emily", "Madison", "Abigail", "Ella", "Avery",
  "Jackson", "Sebastian", "Aiden", "Matthew", "Samuel"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones",
  "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "White", "Harris", "Clark", "Lewis",
  "Robinson", "Walker", "Young", "Allen", "King"
];

const messages = [
  "just enrolled in the course! 🎉",
  "grabbed the 90% OFF deal! ✨",
  "just joined Sweet Life Academy! 💜",
  "claimed the December special! 🔥",
  "is now learning anime art! 🎨",
  "just secured their spot! ⚡",
  "joined the creative journey! 💫"
];

const getRandomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const badges = ['🔥 HOT', '⚡ NEW', '✨ JUST IN', '💫 FRESH'];

const ctas = [
  'Welcome aboard! 🎉',
  "Let's go! 💜",
  'Amazing choice! ✨',
  "You're in! 🚀",
  'Great decision! 💫',
  'Hell yeah! 🔥',
  'Perfect timing! ⚡',
  'Awesome move! 🌟'
];

const getRandomBadge = () => {
  return badges[Math.floor(Math.random() * badges.length)];
};

const getRandomCta = () => {
  return ctas[Math.floor(Math.random() * ctas.length)];
};

const getBadgeColorClasses = (badge: string) => {
  if (badge.includes('HOT')) {
    return {
      bg: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
      text: 'text-white',
      glow: '0 0 25px rgba(251, 146, 60, 1), 0 0 50px rgba(239, 68, 68, 0.6), 0 0 75px rgba(236, 72, 153, 0.4)'
    };
  }
  if (badge.includes('NEW')) {
    return {
      bg: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400',
      text: 'text-white',
      glow: '0 0 25px rgba(59, 130, 246, 1), 0 0 50px rgba(6, 182, 212, 0.6), 0 0 75px rgba(20, 184, 166, 0.4)'
    };
  }
  if (badge.includes('JUST IN')) {
    return {
      bg: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
      text: 'text-white',
      glow: '0 0 25px rgba(168, 85, 247, 1), 0 0 50px rgba(236, 72, 153, 0.6), 0 0 75px rgba(244, 63, 94, 0.4)'
    };
  }
  // FRESH
  return {
    bg: 'bg-gradient-to-r from-lime-400 via-green-500 to-emerald-500',
    text: 'text-white',
    glow: '0 0 25px rgba(163, 230, 53, 1), 0 0 50px rgba(34, 197, 94, 0.6), 0 0 75px rgba(16, 185, 129, 0.4)'
  };
};

const getRandomColor = (): 'white' | 'pink' | 'purple' => {
  const colors: ('white' | 'pink' | 'purple')[] = ['white', 'pink', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getColorClasses = (variant: 'white' | 'pink' | 'purple') => {
  switch (variant) {
    case 'white':
      return {
        border: 'border-white/40',
        shadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
        iconBg: 'bg-white/20',
        iconColor: 'text-white'
      };
    case 'pink':
      return {
        border: 'border-pink-400/50',
        shadow: '0 0 20px rgba(244, 114, 182, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
        iconBg: 'bg-pink-500/20',
        iconColor: 'text-pink-400'
      };
    case 'purple':
      return {
        border: 'border-purple-400/50',
        shadow: '0 0 20px rgba(192, 132, 252, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3)',
        iconBg: 'bg-purple-500/20',
        iconColor: 'text-purple-400'
      };
  }
};

// Create a subtle notification sound using Web Audio API
const playNotificationSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a soft, pleasant notification sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Set frequency for a pleasant "ding" sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
    
    // Set volume - keep it subtle
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.type = 'sine'; // Smooth sine wave
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (error) {
    console.log('Could not play notification sound:', error);
  }
};

export const PurchaseNotifications = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const newNotification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        name: getRandomName(),
        message: getRandomMessage(),
        colorVariant: getRandomColor(),
        badge: getRandomBadge(),
        cta: getRandomCta()
      };

      setNotification(newNotification);
      setIsVisible(true);
      
      // Play notification sound
      playNotificationSound();

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 10000);

    // Show notifications every 20-40 seconds (random interval)
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 20000 + 20000; // 20-40 seconds
      setTimeout(showNotification, randomDelay);
    }, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  const colorClasses = getColorClasses(notification.colorVariant);
  const badgeColors = getBadgeColorClasses(notification.badge);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-6 z-50 transition-all duration-500 ease-out",
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      )}
    >
      <div className="relative">
        {/* Badge - Positioned above card */}
        <div className="absolute -top-2 right-4 z-20">
          <span 
            className={cn(
              "inline-flex items-center px-2 py-1 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm",
              badgeColors.bg,
              badgeColors.text
            )}
            style={{
              animation: 'badge-pulse 2s ease-in-out infinite',
              boxShadow: badgeColors.glow
            }}
          >
            {notification.badge}
          </span>
        </div>

        <div 
          className={cn(
            "bg-card/95 backdrop-blur-md border-2 rounded-xl shadow-xl py-2 px-3 w-[340px] min-h-[72px] neon-glow relative overflow-hidden flex flex-col justify-center",
            colorClasses.border,
            "transition-all duration-700 ease-in-out"
          )}
          style={{ boxShadow: colorClasses.shadow }}
        >
          {/* Animated gradient background overlay */}
          <div 
            className="absolute inset-0 opacity-10 animate-pulse"
            style={{
              background: notification.colorVariant === 'pink' 
                ? 'linear-gradient(135deg, rgba(244, 114, 182, 0.3), transparent)'
                : notification.colorVariant === 'purple'
                ? 'linear-gradient(135deg, rgba(192, 132, 252, 0.3), transparent)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent)'
            }}
          />

          <div className="flex items-center gap-3 relative z-10">
            {/* Icon - Left side */}
            <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2", colorClasses.iconBg, colorClasses.border)}>
              <ShoppingBag className={colorClasses.iconColor} size={18} />
            </div>

            {/* Content - Right side with perfect vertical symmetry around middle line */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              {/* Line 1: Name */}
              <p className="text-sm font-bold text-foreground truncate leading-none mb-[2px]">
                {notification.name}
              </p>
              {/* Line 2: Message - Center Axis */}
              <p className="text-[11px] text-muted-foreground line-clamp-1 leading-none">
                {notification.message}
              </p>
              {/* Line 3: CTA */}
              <p className="text-[10px] font-extrabold uppercase tracking-wider gradient-text leading-none mt-[2px]">
                {notification.cta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};