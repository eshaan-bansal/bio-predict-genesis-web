
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
          className="w-[120%] h-[120%] object-cover opacity-85 scale-110"
          style={{ objectPosition: 'center center' }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
            {/* Left Column - Text Content positioned around laptop */}
            <div className="lg:col-span-5 text-center lg:text-left lg:pr-8">
              {/* Main Headline */}
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 mb-6 slide-up text-balance leading-tight">
                Unlock a $10B Market
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl xl:text-2xl text-blue-600 mb-8 leading-relaxed slide-up font-medium">
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

            {/* Right Column - Space for laptop integration */}
            <div className="lg:col-span-7 relative slide-up">
              {/* This space allows the background laptop image to show through and text to wrap around it */}
              <div className="h-96 lg:h-[500px] xl:h-[600px] relative">
                {/* Optional: Add subtle overlay text that appears to be part of the laptop screen */}
                <div className="absolute bottom-8 right-8 text-right hidden lg:block">
                  <p className="text-sm text-gray-600 font-medium opacity-75">
                    Real-time Analytics
                  </p>
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
