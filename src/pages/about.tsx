import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Brain, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const features = [
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: 'Instant Analysis',
      description: 'Real-time food safety analysis using advanced OCR and ML algorithms'
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: 'FSSAI Verification',
      description: 'Automated verification of food safety licenses and compliance'
    },
    {
      icon: <Brain className="text-blue-500" size={32} />,
      title: 'AI-Powered Insights',
      description: 'Machine learning models for personalized health recommendations'
    },
    {
      icon: <Target className="text-teal-500" size={32} />,
      title: 'Personalized Analysis',
      description: 'Custom health profiles with allergen detection and dietary preferences'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About FoodConnect
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              FoodConnect is an intelligent food safety analysis platform that combines computer vision, 
              natural language processing, and machine learning to provide personalized health insights 
              and safety ratings for food products.
            </p>
          </div>

          <Card className="mb-12 bg-gradient-to-r from-green-50 via-teal-50 to-blue-50 border-2">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                To empower consumers with intelligent food analysis tools that promote healthier eating habits, 
                ensure food safety compliance, and provide personalized nutrition guidance through cutting-edge AI technology.
              </p>
            </CardContent>
          </Card>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}