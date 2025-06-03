
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
          className="w-[150%] h-[150%] object-cover opacity-90 scale-125"
          style={{ objectPosition: 'center center' }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
            {/* Left Column - Text Content positioned to the left of laptop */}
            <div className="lg:col-span-4 text-center lg:text-left lg:pr-4">
              {/* Main Headline */}
              <h1 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 mb-6 slide-up text-balance leading-tight">
                Unlock a $10B Market
              </h1>

              {/* Subheadline */}
              <p className="text-base lg:text-lg xl:text-xl text-blue-600 mb-8 leading-relaxed slide-up font-medium">
                AI-Powered Process Optimization Delivering 30% Higher Yields and 50% Lower Costs
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start slide-up">
                <Button variant="outline" size="lg" className="text-base px-6 py-3 border-blue-300 text-blue-700 hover:bg-blue-50">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Center - Laptop space */}
            <div className="lg:col-span-5 relative slide-up">
              {/* This space is for the laptop to show through */}
              <div className="h-80 lg:h-[400px] xl:h-[500px] relative">
                {/* Screen overlay text */}
                <div className="absolute top-8 left-8 text-left hidden lg:block">
                  <p className="text-xs text-gray-500 font-medium opacity-60">
                    Dashboard Analytics
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Additional text */}
            <div className="lg:col-span-3 text-center lg:text-right slide-up">
              <div className="space-y-4">
                <div className="text-sm text-gray-600 font-medium">
                  Real-time Insights
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Process Optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
