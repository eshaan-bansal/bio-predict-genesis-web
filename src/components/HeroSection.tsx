
import FuturisticCube from './FuturisticCube';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#problem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f5f3f0' }}>
      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8 slide-up">
              {/* Main Headline */}
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight text-balance">
                Unlocking <span className="text-blue-600">$100 Billion</span> in Biopharma Manufacturing Efficiency
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-medium">
                AI-Powered Process Optimization Delivering 
                <span className="text-blue-600 font-semibold"> 30% Higher Yields</span> and 
                <span className="text-blue-600 font-semibold"> 50% Lower Costs</span>
              </p>

              {/* Call to action */}
              <div className="pt-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                  Discover the Platform
                </button>
              </div>
            </div>

            {/* Right Column - 3D Graphic */}
            <div className="relative slide-up order-first lg:order-last">
              <div className="h-80 lg:h-[500px] xl:h-[600px] relative">
                <FuturisticCube />
              </div>
              
              {/* Floating data points around the cube */}
              <div className="absolute top-1/4 left-0 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-pulse">
                <div className="text-sm font-medium text-gray-900">98.7%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-pulse delay-300">
                <div className="text-sm font-medium text-gray-900">30%</div>
                <div className="text-xs text-gray-600">Higher Yield</div>
              </div>
              
              <div className="absolute top-1/2 -left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg animate-pulse delay-700">
                <div className="text-sm font-medium text-gray-900">50%</div>
                <div className="text-xs text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors group"
          aria-label="Scroll to learn more"
        >
          <span className="text-sm font-medium">Learn More</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-gray-600 transition-colors">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-gray-600 transition-colors"></div>
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
