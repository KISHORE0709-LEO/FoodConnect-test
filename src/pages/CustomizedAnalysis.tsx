import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Utensils, ChefHat } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutomaticDietRecommendation from "@/components/AutomaticDietRecommendation";
import CustomFoodRecommendation from "@/components/CustomFoodRecommendation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomizedAnalysis = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              FoodConnect - Personalized Nutrition Hub
            </h1>
            <p className="text-muted-foreground">
              Your customized health and wellness companion for smart food choices
            </p>
          </div>

          <Tabs defaultValue="diet" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="diet" className="flex items-center gap-2">
                <Utensils className="w-4 h-4" />
                Automatic Diet Recommendation
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2">
                <ChefHat className="w-4 h-4" />
                Custom Food Recommendation
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="diet" className="mt-6">
              <AutomaticDietRecommendation />
            </TabsContent>
            
            <TabsContent value="custom" className="mt-6">
              <CustomFoodRecommendation />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomizedAnalysis;