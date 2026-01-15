import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Mail, 
  Lock, 
  AlertTriangle, 
  Heart, 
  Leaf,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('India');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [customAllergies, setCustomAllergies] = useState('');
  const [dislikedIngredients, setDislikedIngredients] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [productCategories, setProductCategories] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [age, setAge] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [healthGoal, setHealthGoal] = useState('');

  const allergyOptions = [
    'Peanuts', 'Tree Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs', 'Fish', 'Shellfish', 'Sesame'
  ];

  const countryOptions = [
    'India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Other'
  ];

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Low-Carb', 'Gluten-Free', 'Halal', 'Kosher'
  ];

  const activityOptions = [
    'Sedentary', 'Moderately Active', 'Very Active'
  ];

  const healthGoalOptions = [
    'Maintain Weight', 'Lose Weight', 'Gain Muscle', 'Manage Diabetes', 'Improve Immunity'
  ];

  const toggleAllergy = (allergy: string) => {
    setAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!firstName.trim() || !lastName.trim()) {
        alert('Please enter your first and last name.');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      // Combine predefined and custom allergies
      const allAllergies = [...allergies];
      if (customAllergies.trim()) {
        allAllergies.push(...customAllergies.split(',').map(item => item.trim()).filter(item => item));
      }
      
      const userData = {
        email,
        password,
        name: `${firstName.trim()} ${lastName.trim()}`,
        allergies: allAllergies,
        healthConditions: healthConditions.split(',').map(item => item.trim()).filter(item => item),
        age: parseInt(age),
        activityLevel,
        healthGoal,
        dislikedIngredients: dislikedIngredients.split(',').map(item => item.trim()).filter(item => item),
        cuisineType,
        dietaryPreferences,
        productCategories,
        emergencyContact,
        country
      };
      
      console.log('Registration data:', userData);
      alert('Account created successfully! (Demo mode)');
      
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 pb-12 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/login">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to Login</span>
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Create Your Health Profile</h1>
            <p className="text-gray-600">Help us provide personalized food analysis</p>
          </div>

          <Card className="shadow-xl border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Complete Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center space-x-2">
                      <User size={16} className="text-teal-600" />
                      <span>First Name *</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail size={16} className="text-teal-600" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Enter your age"
                      min="1"
                      max="120"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center space-x-2">
                      <Lock size={16} className="text-teal-600" />
                      <span>Password *</span>
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>

                <Separator />

                {/* Health Profile */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Heart className="text-red-500" size={20} />
                    Health Profile
                  </h3>

                  {/* Allergies */}
                  <div className="space-y-3">
                    <Label className="flex items-center space-x-2">
                      <AlertTriangle size={16} className="text-orange-500" />
                      <span>Known Allergies</span>
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {allergyOptions.map((allergy) => (
                        <label key={allergy} className="flex items-center space-x-2 p-2 border rounded-lg hover:border-teal-400 cursor-pointer">
                          <Checkbox 
                            checked={allergies.includes(allergy)}
                            onCheckedChange={() => toggleAllergy(allergy)}
                          />
                          <span className="text-sm">{allergy}</span>
                        </label>
                      ))}
                    </div>
                    <Input
                      placeholder="Other allergies (comma separated)"
                      value={customAllergies}
                      onChange={(e) => setCustomAllergies(e.target.value)}
                    />
                  </div>

                  {/* Health Conditions */}
                  <div className="space-y-2">
                    <Label>Health Conditions</Label>
                    <Textarea
                      placeholder="List any health conditions (comma separated)"
                      value={healthConditions}
                      onChange={(e) => setHealthConditions(e.target.value)}
                      rows={2}
                    />
                  </div>

                  {/* Dietary Preferences */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Dietary Preferences</Label>
                      <Select value={dietaryPreferences} onValueChange={setDietaryPreferences}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select dietary preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {dietaryOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Activity Level</Label>
                      <Select value={activityLevel} onValueChange={setActivityLevel}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          {activityOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Health Goal</Label>
                      <Select value={healthGoal} onValueChange={setHealthGoal}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select health goal" />
                        </SelectTrigger>
                        <SelectContent>
                          {healthGoalOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Country</Label>
                      <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Fields */}
                  <div className="space-y-2">
                    <Label>Disliked Ingredients</Label>
                    <Input
                      placeholder="Ingredients you prefer to avoid (comma separated)"
                      value={dislikedIngredients}
                      onChange={(e) => setDislikedIngredients(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Emergency Contact</Label>
                    <Input
                      placeholder="Emergency contact number"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-500 hover:from-green-700 hover:to-teal-600 text-white py-3 text-lg"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </Button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-teal-600 hover:text-teal-700 font-semibold">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}