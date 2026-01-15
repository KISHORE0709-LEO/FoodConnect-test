import { Link } from "react-router-dom";
import { Search, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground leading-tight animate-fade-in">
          Know What You're
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-food-yellow mb-4 animate-fade-in">
          Really Eating
        </h2>
        <p className="text-primary-foreground/90 text-base md:text-lg max-w-xl mx-auto mb-6 animate-fade-in">
          Upload any food product image and get instant safety analysis, allergen warnings, and
          ingredient breakdown in simple language.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up">
          <Link
            to="/generic"
            className="flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/30 rounded-full text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-all duration-200"
          >
            <Search className="w-4 h-4" />
            Generic Analysis
          </Link>
          <Link
            to="/customized"
            className="flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/30 rounded-full text-primary-foreground font-medium hover:bg-primary-foreground/20 transition-all duration-200"
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
