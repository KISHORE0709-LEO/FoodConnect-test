import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Sparkles, UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CustomizedAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
              Customized Food Analysis
            </h1>
            <p className="text-muted-foreground">
              Get personalized health insights based on your dietary preferences
            </p>
          </div>

          {/* Profile Setup Card */}
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="icon-circle icon-circle-accent mx-auto mb-4">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Set Up Your Health Profile
              </h3>
              <p className="text-muted-foreground text-sm">
                Configure your allergies, health conditions, and dietary preferences for personalized analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Allergies
                </label>
                <input
                  type="text"
                  placeholder="e.g., Peanuts, Shellfish, Gluten..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Health Conditions
                </label>
                <input
                  type="text"
                  placeholder="e.g., Diabetes, PCOD, Thyroid..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dietary Preferences
                </label>
                <input
                  type="text"
                  placeholder="e.g., Vegetarian, Vegan, Keto..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Avoid Ingredients
                </label>
                <input
                  type="text"
                  placeholder="e.g., MSG, Artificial Colors..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <button className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
              Save Health Profile
            </button>
          </div>

          {/* Upload Area */}
          <div className="bg-card border border-border rounded-xl p-8">
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
                <button className="mt-6 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
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
                    onClick={() => {
                      setSelectedImage(null);
                      fileInputRef.current?.click();
                    }}
                    className="px-6 py-3 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    Choose Different Image
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity">
                    <Sparkles className="w-4 h-4" />
                    Analyze with My Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomizedAnalysis;
