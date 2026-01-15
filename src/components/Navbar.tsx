import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, User, Leaf } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isAnalysisActive = location.pathname.includes("/generic") || location.pathname.includes("/customized");

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[17px] text-gray-900 leading-tight">FoodConnect</span>
              <span className="text-[11px] text-gray-600 leading-tight">Know What You Eat</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-gray-50 rounded-full p-1 gap-0.5">
              <Link
                to="/"
                className={`nav-pill ${isActive("/") ? "nav-pill-active" : "nav-pill-inactive"}`}
              >
                HOME
              </Link>

              <DropdownMenu open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`nav-pill flex items-center gap-1 ${isAnalysisActive ? "nav-pill-active" : "nav-pill-inactive"}`}
                  >
                    ANALYSIS
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/generic" className="cursor-pointer">
                      Generic Analysis
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/customized" className="cursor-pointer">
                      Customized Analysis
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/food-database"
                className={`nav-pill ${isActive("/food-database") ? "nav-pill-active" : "nav-pill-inactive"}`}
              >
                FOOD DATABASE
              </Link>

              <Link
                to="/health-insights"
                className={`nav-pill ${isActive("/health-insights") ? "nav-pill-active" : "nav-pill-inactive"}`}
              >
                HEALTH INSIGHTS
              </Link>

              <Link
                to="/about"
                className={`nav-pill ${isActive("/about") ? "nav-pill-active" : "nav-pill-inactive"}`}
              >
                ABOUT US
              </Link>

              <Link
                to="/contact"
                className={`nav-pill ${isActive("/contact") ? "nav-pill-active" : "nav-pill-inactive"}`}
              >
                CONTACT US
              </Link>
            </div>
          </nav>

          {/* Profile */}
          <button className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline text-[13px] font-semibold">PROFILE</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;