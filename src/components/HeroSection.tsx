
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 slide-up">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                AI-Powered Manufacturing Intelligence
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl lg:text-6xl font-medium text-gray-900 mb-6 slide-up text-balance leading-tight">
                Unlock a $10B Market
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-blue-600 mb-8 leading-relaxed slide-up font-medium">
                AI-Powered Process Optimization Delivering 30% Higher Yields and 50% Lower Costs
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start slide-up">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-300 text-blue-700 hover:bg-blue-50">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative slide-up">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f88c2efe-5981-450a-ae29-1ecc6fc2ef24.png" 
                  alt="AI-powered analytics dashboard"
                  className="w-full h-auto max-w-lg mx-auto lg:max-w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
