import { useState, useEffect } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  name: string;
  message: string;
  colorVariant: 'white' | 'pink' | 'purple';
  badge: string;
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

const getRandomBadge = () => {
  return badges[Math.floor(Math.random() * badges.length)];
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
        badge: getRandomBadge()
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
        <div className="absolute -top-2 right-3 z-20">
          <span className={cn(
            "inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold shadow-lg animate-pulse",
            notification.colorVariant === 'pink' && "bg-pink-500 text-white",
            notification.colorVariant === 'purple' && "bg-purple-500 text-white",
            notification.colorVariant === 'white' && "bg-white text-primary"
          )}>
            {notification.badge}
          </span>
        </div>

        <div 
          className={cn(
            "bg-card/95 backdrop-blur-md border-2 rounded-2xl shadow-xl p-4 w-[320px] neon-glow relative overflow-hidden",
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
            <div className={cn("flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2", colorClasses.iconBg, colorClasses.border)}>
              <ShoppingBag className={colorClasses.iconColor} size={20} />
            </div>

            {/* Content - Right side */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate leading-tight mb-1">
                {notification.name}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-1">
                {notification.message}
              </p>
              <p className="text-[10px] text-primary/60">
                Just now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};