import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <div className="mb-6">
      <Link to="/">
        <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Button>
      </Link>
    </div>
  );
};