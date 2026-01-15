import { Link } from "react-router-dom";
import { Search, UserPlus, Check, ArrowRight } from "lucide-react";

const AnalysisTypeSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Choose Your Analysis Type
          </h2>
          <p className="text-muted-foreground">
            Two powerful ways to understand your food products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Generic Analysis Card */}
          <div className="feature-card flex flex-col">
            <div className="icon-circle icon-circle-teal">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center mb-3">
              Generic Analysis
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-6 leading-relaxed">
              Perfect for everyone! Upload any food product image and get
              instant ingredient breakdown, toxicity analysis, sugar/salt levels,
              and FSSAI verification. No registration required.
            </p>

            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center gap-3 text-sm border-b border-border pb-3">
                <Check className="w-4 h-4 text-food-teal flex-shrink-0" />
                <span className="text-food-teal font-medium">Ingredient breakdown</span>
              </div>
              <div className="flex items-center gap-3 text-sm border-b border-border pb-3">
                <Check className="w-4 h-4 text-food-teal flex-shrink-0" />
                <span className="text-food-teal font-medium">Safety scoring system</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-food-teal flex-shrink-0" />
                <span className="text-food-teal font-medium">FSSAI verification</span>
              </div>
            </div>

            <Link
              to="/generic"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg btn-teal mt-auto"
            >
              Try Generic Analysis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Customized Analysis Card */}
          <div className="feature-card flex flex-col">
            <div className="icon-circle icon-circle-blue">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center mb-3">
              Customized Analysis
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-6 leading-relaxed">
              Personalized for you! Set your allergies, health conditions, and
              dietary preferences. Get instant alerts when products contain
              ingredients that could harm you.
            </p>

            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center gap-3 text-sm border-b border-border pb-3">
                <Check className="w-4 h-4 text-food-blue flex-shrink-0" />
                <span className="text-food-blue font-medium">Personalized allergen warnings</span>
              </div>
              <div className="flex items-center gap-3 text-sm border-b border-border pb-3">
                <Check className="w-4 h-4 text-food-blue flex-shrink-0" />
                <span className="text-food-blue font-medium">Health condition alerts</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-food-blue flex-shrink-0" />
                <span className="text-food-blue font-medium">Custom dietary tracking</span>
              </div>
            </div>

            <Link
              to="/customized"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg btn-blue mt-auto"
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