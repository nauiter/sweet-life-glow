import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initFontLoading } from "./lib/fontUtils";

// Register Service Worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('✅ Service Worker registered:', registration.scope);
        
        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
      })
      .catch((error) => {
        console.log('❌ Service Worker registration failed:', error);
      });
  });
}

// Initialize font loading
initFontLoading().then(() => {
  console.log('🔤 Font system initialized');
});

createRoot(document.getElementById("root")!).render(<App />);
