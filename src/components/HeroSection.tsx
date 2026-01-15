import { Link } from "react-router-dom";
import { Search, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-white leading-tight mb-1">
          Know What You're
        </h1>
        <h2 className="text-5xl font-bold text-yellow-400 mb-6">
          Really Eating
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload any food product image and get instant safety analysis, allergen warnings, and
          ingredient breakdown in simple language.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/generic"
            className="flex items-center gap-2 px-8 py-3.5 bg-white rounded-full text-teal-600 font-semibold text-[15px] hover:bg-gray-50 transition-all shadow-md"
          >
            <Search className="w-4 h-4" />
            Generic Analysis
          </Link>
          <Link
            to="/customized"
            className="flex items-center gap-2 px-8 py-3.5 bg-white rounded-full text-blue-500 font-semibold text-[15px] hover:bg-gray-50 transition-all shadow-md"
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