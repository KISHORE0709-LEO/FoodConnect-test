import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Sparkles, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface AnalysisResult {
  fssaiStatus: string;
  energy: string;
  protein: string;
  carbohydrate: string;
  totalFat: string;
  transFat: string;
  sodium: string;
  addedSugars: string;
  safetyScore: number;
  nutriScore: string;
  ingredientsFound: number;
  ingredients: string[];
}

const GenericAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResult({
        fssaiStatus: "Verified",
        energy: "N/A kcal",
        protein: "N/Ag",
        carbohydrate: "N/Ag",
        totalFat: "N/Ag",
        transFat: "0g",
        sodium: "N/Amg",
        addedSugars: "g",
        safetyScore: 70,
        nutriScore: "B",
        ingredientsFound: 2,
        ingredients: ["Potato", "No Ga"],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleChooseDifferent = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Generic Food Analysis
            </h1>
            <p className="text-muted-foreground">
              Scan any food label to get instant safety analysis and health insights
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            {!selectedImage ? (
              <label className="upload-zone block cursor-pointer">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Upload Food Label Image
                </h3>
                <p className="text-muted-foreground text-sm">
                  Take a photo or upload an image of the ingredient label
                </p>
                <button className="mt-6 px-6 py-3 rounded-lg gradient-button text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Choose Image
                </button>
              </label>
            ) : (
              <div className="text-center">
                <img
                  src={selectedImage}
                  alt="Uploaded food product"
                  className="max-h-64 mx-auto rounded-lg mb-6 object-contain"
                />
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={handleChooseDifferent}
                    className="px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    Choose Different Image
                  </button>
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg gradient-button text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4" />
                    {isAnalyzing ? "Analyzing..." : "Analyze Food Label"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Analysis Results */}
          {analysisResult && (
            <div className="space-y-6 animate-fade-in">
              {/* Product Information */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Product Information
                </h2>
                <div>
                  <p className="text-sm text-muted-foreground">FSSAI Status</p>
                  <p className="text-primary font-medium flex items-center gap-1">
                    {analysisResult.fssaiStatus} ✅
                  </p>
                </div>
              </div>

              {/* Nutritional Information */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Nutritional Information (per 100g)
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="info-card">
                    <p className="text-xs text-primary">Energy</p>
                    <p className="font-semibold text-primary">{analysisResult.energy}</p>
                  </div>
                  <div className="info-card">
                    <p className="text-xs text-primary">Protein</p>
                    <p className="font-semibold text-primary">{analysisResult.protein}</p>
                  </div>
                  <div className="info-card">
                    <p className="text-xs text-primary">Carbohydrate</p>
                    <p className="font-semibold text-primary">{analysisResult.carbohydrate}</p>
                  </div>
                  <div className="info-card">
                    <p className="text-xs text-primary">Total Fat</p>
                    <p className="font-semibold text-primary">{analysisResult.totalFat}</p>
                    <p className="text-xs text-primary">Trans: {analysisResult.transFat}</p>
                  </div>
                  <div className="info-card">
                    <p className="text-xs text-primary">Sodium</p>
                    <p className="font-semibold text-primary">{analysisResult.sodium}</p>
                  </div>
                  <div className="info-card">
                    <p className="text-xs text-primary">Added Sugars</p>
                    <p className="font-semibold text-primary">{analysisResult.addedSugars}</p>
                  </div>
                </div>
              </div>

              {/* Safety Analysis */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Safety Analysis
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="score-card bg-amber-50">
                    <p className="text-sm text-muted-foreground">Overall Safety Score</p>
                    <p className="text-2xl font-bold text-amber-600">{analysisResult.safetyScore}/100</p>
                  </div>
                  <div className="score-card bg-emerald-50">
                    <p className="text-sm text-muted-foreground">Nutri-Score</p>
                    <p className="text-2xl font-bold text-foreground">{analysisResult.nutriScore}</p>
                  </div>
                  <div className="score-card bg-slate-50">
                    <p className="text-sm text-muted-foreground">Ingredients Found</p>
                    <p className="text-2xl font-bold text-foreground">{analysisResult.ingredientsFound}</p>
                  </div>
                </div>
              </div>

              {/* Health Recommendations */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Health Recommendations
                </h2>
              </div>

              {/* Ingredients */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Ingredients
                </h2>
                <div className="space-y-2">
                  {analysisResult.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border-l-4 border-primary"
                    >
                      <span className="text-foreground">{ingredient}</span>
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenericAnalysis;
