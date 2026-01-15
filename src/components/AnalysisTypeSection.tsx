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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Generic Analysis Card */}
          <div className="feature-card flex flex-col">
            <div className="icon-circle icon-circle-primary">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center mb-3">
              Generic Analysis
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-6 px-2">
              Perfect for everyone! Upload any food product image and get
              instant ingredient breakdown, toxicity analysis, sugar/salt levels,
              and FSSAI verification. No registration required.
            </p>

            <div className="space-y-2 mb-6 flex-grow">
              <div className="flex items-center gap-2 text-sm border-b border-border pb-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-primary">Ingredient breakdown</span>
              </div>
              <div className="flex items-center gap-2 text-sm border-b border-border pb-2">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-primary">Safety scoring system</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-primary">FSSAI verification</span>
              </div>
            </div>

            <Link
              to="/generic"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md gradient-button text-primary-foreground font-medium hover:opacity-90 transition-opacity mt-auto"
            >
              Try Generic Analysis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Customized Analysis Card */}
          <div className="feature-card flex flex-col">
            <div className="icon-circle icon-circle-accent">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center mb-3">
              Customized Analysis
            </h3>
            <p className="text-muted-foreground text-center text-sm mb-6 px-2">
              Personalized for you! Set your allergies, health conditions, and
              dietary preferences. Get instant alerts when products contain
              ingredients that could harm you.
            </p>

            <div className="space-y-2 mb-6 flex-grow">
              <div className="flex items-center gap-2 text-sm border-b border-border pb-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-accent">Personalized allergen warnings</span>
              </div>
              <div className="flex items-center gap-2 text-sm border-b border-border pb-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-accent">Health condition alerts</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-accent">Custom dietary tracking</span>
              </div>
            </div>

            <Link
              to="/customized"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity mt-auto"
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
