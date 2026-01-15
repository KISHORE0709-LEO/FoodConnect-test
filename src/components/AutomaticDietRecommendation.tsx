import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

interface PersonData {
  age: number;
  height: number;
  weight: number;
  gender: string;
  activity: string;
  mealsPerDay: number;
  weightLossPlan: string;
}

interface MealComposition {
  breakfast: string;
  lunch: string;
  dinner: string;
}

interface BMIResult {
  bmi: string;
  category: string;
  color: string;
}

interface CaloriesPlan {
  name: string;
  calories: number;
  loss: string;
  weight: number;
}

interface Recipe {
  name: string;
  calories: number;
}

interface Results {
  bmi: BMIResult;
  calories: CaloriesPlan[];
  targetCalories: number;
  recipes: {
    breakfast: Recipe[];
    lunch: Recipe[];
    dinner: Recipe[];
  };
}

const AutomaticDietRecommendation = () => {
  const [formData, setFormData] = useState<PersonData>({
    age: 25,
    height: 170,
    weight: 70,
    gender: "Male",
    activity: "Moderate exercise (3-5 days/wk)",
    mealsPerDay: 3,
    weightLossPlan: "Maintain weight"
  });

  const [results, setResults] = useState<Results | null>(null);
  const [mealComposition, setMealComposition] = useState<MealComposition>({
    breakfast: "Ragi Semiya Upma",
    lunch: "Chettinad Vegetable...",
    dinner: "Vegetable Biryani"
  });

  const activities = [
    "Little/no exercise",
    "Light exercise", 
    "Moderate exercise (3-5 days/wk)",
    "Very active (6-7 days/wk)",
    "Extra active (very active & physical job)"
  ];

  const plans = [
    { name: "Maintain weight", weight: 1, loss: "-0 kg/week" },
    { name: "Mild weight loss", weight: 0.9, loss: "-0.25 kg/week" },
    { name: "Weight loss", weight: 0.8, loss: "-0.5 kg/week" },
    { name: "Extreme weight loss", weight: 0.6, loss: "-1 kg/week" }
  ];

  const calculateBMI = (): BMIResult => {
    const bmi = formData.weight / ((formData.height / 100) ** 2);
    let category = "";
    let color = "";
    
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-red-500";
    } else if (bmi < 25) {
      category = "Normal";
      color = "text-green-500";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-yellow-500";
    } else {
      category = "Obesity";
      color = "text-red-500";
    }
    
    return { bmi: bmi.toFixed(2), category, color };
  };

  const calculateBMR = (): number => {
    if (formData.gender === "Male") {
      return 10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
    }
    return 10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
  };

  const calculateCalories = (): number => {
    const weights = [1.2, 1.375, 1.55, 1.725, 1.9];
    const weight = weights[activities.indexOf(formData.activity)];
    return calculateBMR() * weight;
  };

  const handleGenerate = () => {
    const maintainCalories = calculateCalories();
    const bmiData = calculateBMI();
    const selectedPlan = plans.find(p => p.name === formData.weightLossPlan);
    
    const caloriesPlans = plans.map((plan) => ({
      ...plan,
      calories: Math.round(maintainCalories * plan.weight)
    }));

    const sampleRecipes = {
      breakfast: [
        { name: "Ragi Semiya Upma", calories: 250 },
        { name: "Poatha Khara Pongal", calories: 300 }
      ],
      lunch: [
        { name: "Chettinad Vegetable Casserole", calories: 400 },
        { name: "Dal Makhani with Rice", calories: 450 }
      ],
      dinner: [
        { name: "Vegetable Biryani", calories: 350 },
        { name: "Paneer Butter Masala with Roti", calories: 380 }
      ]
    };

    setResults({
      bmi: bmiData,
      calories: caloriesPlans,
      targetCalories: Math.round(maintainCalories * (selectedPlan?.weight || 1)),
      recipes: sampleRecipes
    });
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
          <CardTitle>Enter Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="activity">Activity Level</Label>
              <Select value={formData.activity} onValueChange={(value) => setFormData({ ...formData, activity: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {activities.map((act) => (
                    <SelectItem key={act} value={act}>{act}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="meals">Meals per Day</Label>
              <Select value={formData.mealsPerDay.toString()} onValueChange={(value) => setFormData({ ...formData, mealsPerDay: Number(value) })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 meals</SelectItem>
                  <SelectItem value="4">4 meals</SelectItem>
                  <SelectItem value="5">5 meals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="plan">Weight Loss Plan</Label>
              <Select value={formData.weightLossPlan} onValueChange={(value) => setFormData({ ...formData, weightLossPlan: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {plans.map((plan) => (
                    <SelectItem key={plan.name} value={plan.name}>{plan.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handleGenerate} className="w-full">
            Generate Recommendations
          </Button>
        </CardContent>
      </Card>

      {results && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>📊 BMI Calculator</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold mb-2">{results.bmi.bmi} kg/m²</div>
              <div className={`text-2xl font-semibold ${results.bmi.color}`}>{results.bmi.category}</div>
              <p className="text-muted-foreground mt-2">Healthy BMI range: 18.5 kg/m² - 25 kg/m²</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚡ Calories Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Daily calorie estimates for different weight management goals:</p>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {results.calories.map((plan, idx) => (
                  <div key={idx} className="text-center p-4 border rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">{plan.name}</div>
                    <div className="text-2xl font-bold text-blue-600">{plan.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories/day</div>
                    <div className="text-sm text-muted-foreground">{plan.loss}</div>
                  </div>
                ))}
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={results.calories}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="calories" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🍽️ Recommended Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(results.recipes).map(([meal, recipes]) => (
                  <div key={meal}>
                    <h4 className="text-lg font-semibold mb-3 uppercase">{meal}</h4>
                    {recipes.map((recipe, idx) => (
                      <div key={idx} className="bg-muted rounded-lg p-3 mb-2 flex justify-between items-center">
                        <span>{recipe.name}</span>
                        <span className="text-red-500 text-sm">▶</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Choose Your Meal Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <Label className="text-base font-medium mb-2 block">Breakfast</Label>
                  <Select value={mealComposition.breakfast} onValueChange={(value) => setMealComposition(prev => ({ ...prev, breakfast: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {mealOptions.breakfast.map((meal) => (
                        <SelectItem key={meal} value={meal}>{meal}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Lunch</Label>
                  <Select value={mealComposition.lunch} onValueChange={(value) => setMealComposition(prev => ({ ...prev, lunch: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {mealOptions.lunch.map((meal) => (
                        <SelectItem key={meal} value={meal}>{meal}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-base font-medium mb-2 block">Dinner</Label>
                  <Select value={mealComposition.dinner} onValueChange={(value) => setMealComposition(prev => ({ ...prev, dinner: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {mealOptions.dinner.map((meal) => (
                        <SelectItem key={meal} value={meal}>{meal}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Total Calories in Recipes vs Maintain weight Calories</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={calorieComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 2600]} />
                      <Tooltip />
                      <Bar dataKey="calories" fill="#4F8EF7" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Nutritional Values</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={nutritionalData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name} ${value}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {nutritionalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default AutomaticDietRecommendation;