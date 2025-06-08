
import FuturisticCube from './FuturisticCube';

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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 slide-up">
              {/* Main Headline */}
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight text-balance">
                Optimize <span className="text-blue-600">Raw Material Impact</span> with AI
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-medium">
                Discover RMPredictive: AI-driven efficiency for advanced therapy manufacturing
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={scrollToNext}
                  className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors min-h-[44px] min-w-[44px] touch-manipulation"
                >
                  Explore RMPredictive
                </button>
              </div>
            </div>

            {/* Right Column - 3D Graphic */}
            <div className="relative slide-up order-first lg:order-last">
              <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative">
                <FuturisticCube />
              </div>
              
              {/* Floating data points around the cube */}
              <div className="absolute top-1/4 left-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse">
                <div className="text-xs sm:text-sm font-medium text-gray-900">98.7%</div>
                <div className="text-xs text-gray-600">Prediction Accuracy</div>
              </div>
              
              <div className="absolute bottom-1/4 right-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-300">
                <div className="text-xs sm:text-sm font-medium text-gray-900">$4-10M+</div>
                <div className="text-xs text-gray-600">Annual Savings</div>
              </div>
              
              <div className="absolute top-1/2 -left-2 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-700">
                <div className="text-xs sm:text-sm font-medium text-gray-900">20-50%</div>
                <div className="text-xs text-gray-600">Faster RCA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
