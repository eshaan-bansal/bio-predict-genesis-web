
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/d1f98438-48ff-4e51-8d82-01ca0d2f05fc.png" 
          alt="Laptop with analytics dashboard"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
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

            {/* Right Column - Empty space to let background show */}
            <div className="relative slide-up lg:block hidden">
              {/* This space allows the background laptop image to show through */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
