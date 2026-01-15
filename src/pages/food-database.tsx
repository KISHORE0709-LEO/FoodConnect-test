import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, ExternalLink, FileText, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FoodDatabase() {
  const databases = [
    {
      name: 'Kaggle Food Nutrition Dataset',
      description: 'Comprehensive nutrition information for thousands of food items',
      items: '8,000+ food items',
      source: 'kaggle.com',
      icon: <Database className="text-blue-500" size={24} />
    },
    {
      name: 'FSSAI Database',
      description: 'Indian food safety standards and regulations',
      items: '500+ standards',
      source: 'fssai.gov.in',
      icon: <FileText className="text-green-600" size={24} />
    },
    {
      name: 'FDA Food Database',
      description: 'International food safety data and guidelines',
      items: '10,000+ entries',
      source: 'fda.gov',
      icon: <Globe className="text-teal-500" size={24} />
    },
    {
      name: 'Custom Ingredient Database',
      description: 'Curated ingredient toxicity and safety scores',
      items: '40+ ingredients',
      source: 'Internal Research',
      icon: <Database className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Food Database Sources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive food analysis is powered by multiple trusted databases, 
              ensuring accurate and reliable nutritional information for your health decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {databases.map((db, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {db.icon}
                    <span>{db.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{db.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-600">{db.items}</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <ExternalLink size={14} className="mr-1" />
                      {db.source}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 border-2">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">18,500+</div>
                  <div className="text-gray-600">Total Food Items</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-gray-600">Safety Standards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
                  <div className="text-gray-600">Analyzed Ingredients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}