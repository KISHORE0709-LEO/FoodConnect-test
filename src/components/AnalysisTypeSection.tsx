import { Link } from "react-router-dom";
import { Search, UserPlus, Check, ArrowRight } from "lucide-react";

const AnalysisTypeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Choose Your Analysis Type
          </h2>
          <p className="text-gray-600 text-lg">
            Two powerful ways to understand your food products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Generic Analysis Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-2xl hover:border-teal-400 transition-all flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Generic Analysis
            </h3>
            <p className="text-gray-600 text-center text-[15px] mb-8 leading-relaxed px-2">
              Perfect for everyone! Upload any food product image and get
              instant ingredient breakdown, toxicity analysis, sugar/salt levels,
              and FSSAI verification. No registration required.
            </p>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-green-600 font-medium">Ingredient breakdown</span>
              </div>
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-green-600 font-medium">Safety scoring system</span>
              </div>
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-green-600 font-medium">FSSAI verification</span>
              </div>
            </div>

            <Link
              to="/generic"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 text-white font-semibold text-[15px] hover:bg-green-700 transition-colors mt-auto"
            >
              Try Generic Analysis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Customized Analysis Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-2xl hover:border-teal-400 transition-all flex flex-col">
            <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
              Customized Analysis
            </h3>
            <p className="text-gray-600 text-center text-[15px] mb-8 leading-relaxed px-2">
              Personalized for you! Set your allergies, health conditions, and
              dietary preferences. Get instant alerts when products contain
              ingredients that could harm you.
            </p>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-blue-500 font-medium">Personalized allergen warnings</span>
              </div>
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-blue-500 font-medium">Health condition alerts</span>
              </div>
              <div className="flex items-center gap-3 text-[15px]">
                <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-blue-500 font-medium">Custom dietary tracking</span>
              </div>
            </div>

            <Link
              to="/customized"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-500 text-white font-semibold text-[15px] hover:bg-blue-600 transition-colors mt-auto"
            >
              Start Personalized Scan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTypeSection;