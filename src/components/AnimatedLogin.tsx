import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Leaf, Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AnimatedLogin() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Handle existing user login
      console.log('Login:', { email, password });
      navigate('/');
    } else {
      // Redirect to registration for health profile
      navigate('/register');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-teal-500 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center space-x-2 text-white hover:bg-white/20">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>

        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
        }`}>
          <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
            <div className="text-center pt-8 pb-4">
              <div className={`w-16 h-16 bg-gradient-to-br from-green-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-1500 delay-300 ${
                isVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-0'
              }`}>
                <Leaf className="text-white" size={32} />
              </div>
              <h1 className={`text-2xl font-bold text-gray-900 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                FoodConnect
              </h1>
              <p className={`text-gray-600 transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                Know What You Eat
              </p>
            </div>

            <CardHeader>
              <CardTitle className={`text-center text-xl transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                {isLogin ? 'Welcome Back!' : 'Create Your Health Profile'}
              </CardTitle>
              {!isLogin && (
                <p className={`text-center text-gray-600 text-sm transform transition-all duration-1000 delay-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  Registration required for personalized food analysis
                </p>
              )}
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className={`space-y-2 transform transition-all duration-1000 delay-1100 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}>
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail size={16} className="text-teal-600" />
                    <span>Email Address</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border-2 focus:border-teal-400 transition-colors"
                    required
                  />
                </div>

                <div className={`space-y-2 transform transition-all duration-1000 delay-1300 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  <Label htmlFor="password" className="flex items-center space-x-2">
                    <Lock size={16} className="text-teal-600" />
                    <span>Password</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isLogin ? "Enter your password" : "Create a password"}
                    className="border-2 focus:border-teal-400 transition-colors"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className={`w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white py-3 text-lg transform transition-all duration-1000 delay-1500 ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                  }`}
                >
                  {isLogin ? 'Sign In' : 'Continue to Health Profile →'}
                </Button>

                <div className={`text-center transform transition-all duration-1000 delay-1700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {!isLogin && (
                    <p className="text-xs text-gray-500 mb-2">
                      ⚠️ Health profile is required for food safety analysis
                    </p>
                  )}
                  <p className="text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already registered?"}{' '}
                    <button 
                      type="button"
                      onClick={toggleMode}
                      className="text-teal-600 hover:text-teal-700 font-semibold"
                    >
                      {isLogin ? 'Create account' : 'Sign in here'}
                    </button>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}