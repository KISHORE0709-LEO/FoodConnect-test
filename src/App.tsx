import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GenericAnalysis from "./pages/GenericAnalysis";
import CustomizedAnalysis from "./pages/CustomizedAnalysis";
import NotFound from "./pages/NotFound";
import AiHealthForecast from "./components/AiHealthForecast";
import AiMealBudgetPlanner from "./components/AiMealBudgetPlanner";
import HealingRecipes from "./components/HealingRecipes";
import ConsumerRights from "./components/ConsumerRights";
import FoodDatabase from "./pages/food-database";
import HealthInsights from "./pages/health-insights";
import About from "./pages/about";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedRoute from "./components/ProtectedRoute";
import { SplineChatbot } from "./components/SplineChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Protected Routes */}
          <Route path="/generic" element={<ProtectedRoute><GenericAnalysis /></ProtectedRoute>} />
          <Route path="/customized" element={<ProtectedRoute><CustomizedAnalysis /></ProtectedRoute>} />
          <Route path="/health-forecast" element={<ProtectedRoute><AiHealthForecast /></ProtectedRoute>} />
          <Route path="/meal-planner" element={<ProtectedRoute><AiMealBudgetPlanner /></ProtectedRoute>} />
          <Route path="/healing-recipes" element={<ProtectedRoute><HealingRecipes /></ProtectedRoute>} />
          <Route path="/consumer-rights" element={<ProtectedRoute><ConsumerRights /></ProtectedRoute>} />
          <Route path="/food-database" element={<ProtectedRoute><FoodDatabase /></ProtectedRoute>} />
          <Route path="/health-insights" element={<ProtectedRoute><HealthInsights /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SplineChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
