import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Shield, 
  AlertTriangle, 
  Heart, 
  Save,
  History,
  Settings,
  LogOut
} from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [allergies, setAllergies] = useState<string[]>([]);
  const [healthConditions, setHealthConditions] = useState<string[]>([]);

  const allergyOptions = [
    'Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs', 'Fish', 'Shellfish', 'Sesame'
  ];

  const healthConditionOptions = [
    'Diabetes', 'Hypertension', 'Heart Disease', 'Celiac Disease', 'Lactose Intolerance'
  ];

  const toggleAllergy = (allergy: string) => {
    setAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  const toggleHealthCondition = (condition: string) => {
    setHealthConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto space-y-8">
          
          <Card className="border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-2xl">
                <div className="flex items-center">
                  <User className="text-teal-600 mr-3" />
                  Profile
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/')}
                  className="text-red-600 hover:text-red-700 hover:border-red-300"
                >
                  <LogOut size={16} className="mr-1" />
                  Logout
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    John Doe
                  </h3>
                  <p className="text-gray-600 text-sm">
                    john.doe@example.com
                  </p>
                  <p className="text-gray-500 text-xs">
                    Member since January 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="text-green-600 mr-3" />
                Health Profile
              </CardTitle>
              <p className="text-gray-600">
                Configure your allergies and health conditions for personalized analysis
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              
              <div>
                <div className="text-base font-semibold flex items-center mb-4">
                  <AlertTriangle className="text-orange-500 mr-2" size={20} />
                  Allergies & Intolerances
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {allergyOptions.map((allergy) => (
                    <label 
                      key={allergy}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-teal-400 transition-colors cursor-pointer"
                    >
                      <Checkbox 
                        checked={allergies.includes(allergy)}
                        onCheckedChange={() => toggleAllergy(allergy)}
                      />
                      <span className="text-sm font-medium">{allergy}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <div className="text-base font-semibold flex items-center mb-4">
                  <Heart className="text-red-500 mr-2" size={20} />
                  Health Conditions
                </div>
                <div className="space-y-3">
                  {healthConditionOptions.map((condition) => (
                    <label 
                      key={condition}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-xl hover:border-teal-400 transition-colors cursor-pointer"
                    >
                      <Checkbox 
                        checked={healthConditions.includes(condition)}
                        onCheckedChange={() => toggleHealthCondition(condition)}
                      />
                      <span className="text-sm font-medium">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-teal-500 text-white hover:from-green-700 hover:to-teal-600 py-3 text-lg"
              >
                <Save className="mr-2" size={20} />
                Save Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <History className="text-blue-500 mr-3" />
                Scan History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <History className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No scans yet</h3>
                <p className="text-gray-600">Start scanning products to see your history here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}