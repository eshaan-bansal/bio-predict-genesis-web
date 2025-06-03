
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import FuturisticCube from './FuturisticCube';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
            {/* Left Column - Text Content */}
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

            {/* Center - 3D Graphic */}
            <div className="lg:col-span-5 relative slide-up">
              <div className="h-80 lg:h-[400px] xl:h-[500px] relative">
                <FuturisticCube />
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
