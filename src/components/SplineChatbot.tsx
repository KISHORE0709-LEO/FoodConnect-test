import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SplineChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I\'m your FoodConnect assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    setTimeout(() => {
      const responses = [
        "I can help you analyze food ingredients and provide health insights!",
        "Try scanning a food label for personalized analysis.",
        "Would you like to know about nutrition facts or ingredient safety?",
        "I'm here to help with your food safety questions!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'bot', content: randomResponse }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <div 
          className="w-24 h-24 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Spline scene="https://prod.spline.design/rU2-Ks0SC0T5od9B/scene.splinecode" />
        </div>
        
        {!isOpen && (
          <div className="absolute -top-2 -left-2 bg-green-600 text-white rounded-full p-2 animate-pulse">
            <MessageCircle size={16} />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-36 right-8 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-t-2xl">
            <h3 className="font-semibold text-lg">FoodConnect Assistant</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-green-700"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage} size="sm" className="bg-green-600 hover:bg-green-700">
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}