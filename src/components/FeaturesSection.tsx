import { DollarSign, Heart, Brain, Shield, ArrowRight } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "AI Meal Budget Planner",
    description: "Eat healthy without breaking the bank – smart meal plans within your budget.",
    variant: "teal" as const,
  },
  {
    icon: Heart,
    title: "Healing Recipes",
    description: "Curated recipes for PCOD, diabetes, thyroid, anemia & more – tasty meals that heal.",
    variant: "blue" as const,
  },
  {
    icon: Brain,
    title: "AI Health Forecast",
    description: "Predict future health risks from your eating patterns – and prevent them early.",
    variant: "teal" as const,
  },
  {
    icon: Shield,
    title: "Food Safety & Consumer Rights",
    description: "Stay protected with alerts on food fraud, adulteration, legal approvals & your consumer rights.",
    variant: "blue" as const,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Why Choose Food Connect?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isTeal = feature.variant === "teal";

            return (
              <div key={index} className="feature-card text-center">
                <div className={`icon-circle ${isTeal ? "icon-circle-teal" : "icon-circle-blue"}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>
                <button className={`inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-sm font-medium ${isTeal ? "btn-teal" : "btn-blue"}`}>
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;