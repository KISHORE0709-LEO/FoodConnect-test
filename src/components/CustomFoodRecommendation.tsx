import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

interface NutritionValues {
  calories: number;
  fatContent: number;
  saturatedFatContent: number;
  cholesterolContent: number;
  sodiumContent: number;
  carbohydrateContent: number;
  fiberContent: number;
  sugarContent: number;
  proteinContent: number;
  recommendations: number;
  ingredients: string;
}

interface Recipe {
  name: string;
  calories: number;
  nutritionValues: Record<string, number>;
}

interface MealComposition {
  breakfast: string;
  lunch: string;
  dinner: string;
}

const CustomFoodRecommendation = () => {
  const [nutritionValues, setNutritionValues] = useState<NutritionValues>({
    calories: 500,
    fatContent: 50,
    saturatedFatContent: 0,
    cholesterolContent: 0,
    sodiumContent: 400,
    carbohydrateContent: 100,
    fiberContent: 10,
    sugarContent: 10,
    proteinContent: 10,
    recommendations: 10,
    ingredients: ""
  });

  const [customResults, setCustomResults] = useState<Recipe[] | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<string>("");
  const [mealComposition, setMealComposition] = useState<MealComposition>({
    breakfast: "Ragi Semiya Upma",
    lunch: "Chettinad Vegetable...",
    dinner: "Vegetable Biryani"
  });

  const handleCustomGenerate = () => {
    const sampleCustomRecipes: Recipe[] = [
      { 
        name: "Healthy Chicken Bowl", 
        calories: nutritionValues.calories * 0.3,
        nutritionValues: {
          calories: nutritionValues.calories * 0.3,
          fatContent: nutritionValues.fatContent * 0.4,
          protein: nutritionValues.proteinContent * 0.6,
          carbs: nutritionValues.carbohydrateContent * 0.3
        }
      },
      { 
        name: "Vegetarian Pasta", 
        calories: nutritionValues.calories * 0.4,
        nutritionValues: {
          calories: nutritionValues.calories * 0.4,
          fatContent: nutritionValues.fatContent * 0.2,
          protein: nutritionValues.proteinContent * 0.3,
          carbs: nutritionValues.carbohydrateContent * 0.7
        }
      },
      { 
        name: "Salmon with Quinoa", 
        calories: nutritionValues.calories * 0.3,
        nutritionValues: {
          calories: nutritionValues.calories * 0.3,
          fatContent: nutritionValues.fatContent * 0.5,
          protein: nutritionValues.proteinContent * 0.8,
          carbs: nutritionValues.carbohydrateContent * 0.4
        }
      }
    ].slice(0, Math.min(nutritionValues.recommendations, 20));
    
    setCustomResults(sampleCustomRecipes);
    if (sampleCustomRecipes.length > 0) {
      setSelectedRecipe(sampleCustomRecipes[0].name);
    }
  };

  const updateNutritionValue = (key: keyof NutritionValues, value: number) => {
    setNutritionValues(prev => ({ ...prev, [key]: value }));
  };

  const getSelectedRecipeData = () => {
    if (!customResults || !selectedRecipe) return null;
    return customResults.find(recipe => recipe.name === selectedRecipe);
  };

  const mealOptions = {
    breakfast: ["Ragi Semiya Upma", "Poatha Khara Pongal", "Oats Porridge", "Wheat Dosa", "Poha"],
    lunch: ["Chettinad Vegetable Casserole", "Dal Makhani with Rice", "Rajma Chawal", "Sambar Rice", "Palak Paneer"],
    dinner: ["Vegetable Biryani", "Paneer Butter Masala with Roti", "Khichdi", "Quinoa Bowl", "Mixed Vegetable Curry"]
  };

  const calorieComparisonData = [
    { name: "Your Selected Meals", calories: 2200 },
    { name: "Maintain weight Target", calories: 2400 }
  ];

  const nutritionalData = [
    { name: "Calories", value: 65, color: "#4F8EF7" },
    { name: "Sodium", value: 25, color: "#8B5CF6" },
    { name: "Sugar", value: 2, color: "#F97316" },
    { name: "Carbs", value: 5, color: "#10B981" },
    { name: "Saturated Fat", value: 1, color: "#F59E0B" },
    { name: "Cholesterol", value: 2, color: "#EF4444" }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Nutritional Values</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label>Calories: {nutritionValues.calories}</Label>
              <Slider
                value={[nutritionValues.calories]}
                onValueChange={(value) => updateNutritionValue('calories', value[0])}
                max={2000}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Fat Content: {nutritionValues.fatContent}g</Label>
              <Slider
                value={[nutritionValues.fatContent]}
                onValueChange={(value) => updateNutritionValue('fatContent', value[0])}
                max={100}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Saturated Fat: {nutritionValues.saturatedFatContent}g</Label>
              <Slider
                value={[nutritionValues.saturatedFatContent]}
                onValueChange={(value) => updateNutritionValue('saturatedFatContent', value[0])}
                max={13}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Cholesterol: {nutritionValues.cholesterolContent}mg</Label>
              <Slider
                value={[nutritionValues.cholesterolContent]}
                onValueChange={(value) => updateNutritionValue('cholesterolContent', value[0])}
                max={300}
                step={5}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Sodium: {nutritionValues.sodiumContent}mg</Label>
              <Slider
                value={[nutritionValues.sodiumContent]}
                onValueChange={(value) => updateNutritionValue('sodiumContent', value[0])}
                max={2300}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Carbohydrates: {nutritionValues.carbohydrateContent}g</Label>
              <Slider
                value={[nutritionValues.carbohydrateContent]}
                onValueChange={(value) => updateNutritionValue('carbohydrateContent', value[0])}
                max={325}
                step={5}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Fiber: {nutritionValues.fiberContent}g</Label>
              <Slider
                value={[nutritionValues.fiberContent]}
                onValueChange={(value) => updateNutritionValue('fiberContent', value[0])}
                max={50}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Sugar: {nutritionValues.sugarContent}g</Label>
              <Slider
                value={[nutritionValues.sugarContent]}
                onValueChange={(value) => updateNutritionValue('sugarContent', value[0])}
                max={40}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Protein: {nutritionValues.proteinContent}g</Label>
              <Slider
                value={[nutritionValues.proteinContent]}
                onValueChange={(value) => updateNutritionValue('proteinContent', value[0])}
                max={40}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Number of Recommendations: {nutritionValues.recommendations}</Label>
              <Slider
                value={[nutritionValues.recommendations]}
                onValueChange={(value) => updateNutritionValue('recommendations', value[0])}
                min={5}
                max={20}
                step={5}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="ingredients">Specify ingredients (separated by ",")</Label>
            <Input
              id="ingredients"
              placeholder="Milk,eggs,butter,chicken..."
              value={nutritionValues.ingredients}
              onChange={(e) => setNutritionValues(prev => ({ ...prev, ingredients: e.target.value }))}
              className="mt-2"
            />
          </div>

          <Button onClick={handleCustomGenerate} className="w-full">
            Generate Custom Recommendations
          </Button>
        </CardContent>
      </Card>

      {customResults && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {customResults.map((recipe, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <span className="font-medium">{recipe.name}</span>
                      <div className="text-sm text-muted-foreground">
                        {Math.round(recipe.calories)} calories
                      </div>
                    </div>
                    <span className="text-red-500 text-sm">▶</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="recipe-select">Select a recipe for detailed analysis:</Label>
                <Select value={selectedRecipe} onValueChange={setSelectedRecipe}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {customResults.map((recipe) => (
                      <SelectItem key={recipe.name} value={recipe.name}>
                        {recipe.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">
                  Nutritional Values - {selectedRecipe}
                </h4>
                {getSelectedRecipeData() && (
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={Object.entries(getSelectedRecipeData()!.nutritionValues).map(([key, value]) => ({
                            name: key,
                            value: Math.round(value as number)
                          }))}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {Object.entries(getSelectedRecipeData()!.nutritionValues).map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )}
                <p className="text-muted-foreground mt-4">
                  You can select/deselect an item (nutrition value) from the legend.
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default CustomFoodRecommendation;