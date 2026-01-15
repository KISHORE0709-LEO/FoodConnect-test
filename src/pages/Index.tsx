import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AnalysisTypeSection from "@/components/AnalysisTypeSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AnalysisTypeSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
