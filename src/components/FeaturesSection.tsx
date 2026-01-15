import { DollarSign, Heart, Brain, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: DollarSign,
    title: "AI Meal Budget Planner",
    description: "Eat healthy without breaking the bank – smart meal plans within your budget.",
    variant: "teal" as const,
    link: "/meal-planner"
  },
  {
    icon: Heart,
    title: "Healing Recipes",
    description: "Curated recipes for PCOD, diabetes, thyroid, anemia & more – tasty meals that heal.",
    variant: "blue" as const,
    link: "/healing-recipes"
  },
  {
    icon: Brain,
    title: "AI Health Forecast",
    description: "Predict future health risks from your eating patterns – and prevent them early.",
    variant: "teal" as const,
    link: "/health-forecast"
  },
  {
    icon: Shield,
    title: "Food Safety & Consumer Rights",
    description: "Stay protected with alerts on food fraud, adulteration, legal approvals & your consumer rights.",
    variant: "blue" as const,
    link: "/consumer-rights"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Why Choose Food Connect?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isTeal = feature.variant === "teal";

            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl hover:border-teal-500 transition-all">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isTeal ? "bg-gradient-to-br from-green-600 to-teal-500" : "bg-gradient-to-br from-green-500 to-blue-500"
                }`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link to={feature.link}>
                  <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-semibold text-white transition-colors ${
                    isTeal ? "bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600" : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  }`}>
                    Try Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;