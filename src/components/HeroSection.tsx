import { Link } from "react-router-dom";
import { Search, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero py-14 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight animate-fade-in">
          Know What You're
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-highlight mb-5 animate-fade-in">
          Really Eating
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-8 animate-fade-in">
          Upload any food product image and get instant safety analysis, allergen warnings, and
          ingredient breakdown in simple language.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link
            to="/generic"
            className="flex items-center gap-2 px-7 py-3 btn-teal rounded-full text-white font-medium hover:opacity-90 transition-all duration-200 shadow-md"
          >
            <Search className="w-4 h-4" />
            Generic Analysis
          </Link>
          <Link
            to="/customized"
            className="flex items-center gap-2 px-7 py-3 btn-blue rounded-full text-white font-medium hover:opacity-90 transition-all duration-200 shadow-md"
          >
            <Users className="w-4 h-4" />
            Customized Analysis
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;