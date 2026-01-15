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
          <Route path="/generic" element={<GenericAnalysis />} />
          <Route path="/customized" element={<CustomizedAnalysis />} />
          <Route path="/health-forecast" element={<AiHealthForecast />} />
          <Route path="/meal-planner" element={<AiMealBudgetPlanner />} />
          <Route path="/healing-recipes" element={<HealingRecipes />} />
          <Route path="/consumer-rights" element={<ConsumerRights />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SplineChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
