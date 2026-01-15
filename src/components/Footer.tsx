import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 py-12 relative">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white text-[15px] font-medium">
          © 2025 Food Connect. All rights reserved.
        </p>
        <p className="text-white/90 text-[14px] mt-2">
          Empowering healthier food choices through AI technology.
        </p>
      </div>
    </footer>
  );
};

export default Footer;