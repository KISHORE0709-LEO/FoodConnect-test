import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-footer py-8 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground text-sm font-medium">
          © 2025 Food Connect. All rights reserved.
        </p>
        <p className="text-primary-foreground/80 text-sm mt-1">
          Empowering healthier food choices through AI technology.
        </p>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-hero shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Robot Mascot */}
      <div className="absolute bottom-2 right-20 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <ellipse cx="32" cy="40" rx="18" ry="16" fill="#2d3748" />
          <circle cx="32" cy="28" r="14" fill="#4a5568" />
          <circle cx="26" cy="26" r="4" fill="#fff" />
          <circle cx="38" cy="26" r="4" fill="#fff" />
          <circle cx="27" cy="26" r="2" fill="#1a202c" />
          <circle cx="39" cy="26" r="2" fill="#1a202c" />
          <ellipse cx="32" cy="34" rx="3" ry="2" fill="#718096" />
          <rect x="20" y="44" width="6" height="10" rx="3" fill="#4a5568" />
          <rect x="38" y="44" width="6" height="10" rx="3" fill="#4a5568" />
          <circle cx="48" cy="20" r="4" fill="#48bb78" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
