import DemoRequestModal from './DemoRequestModal';
import { useState, useEffect } from 'react';
import { useContent } from '../hooks/useContent';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { content, loading } = useContent();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  if (loading || !content) {
    return (
      <section className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="animate-pulse text-gray-400">Loading...</div>
      </section>
    );
  }

  const heroContent = content.hero;

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#e6f3ff' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/CompleteRendering.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        {/* Content */}
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
              {/* Left Column - Text Content */}
              <div id="main-content" className="text-center lg:text-left space-y-6 lg:space-y-8 slide-up">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-tight text-balance">
                  <span className="text-blue-300">RM</span><span className="text-blue-300">Predictive</span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white leading-relaxed font-medium">
                  {heroContent.subheadline}
                </p>
              </div>

              {/* Right Column - Floating Data Points Only (no 3D animation) */}
              <div className="relative slide-up order-first lg:order-last">
                <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative">
                  {/* No 3D animation here, just empty space for layout */}
                </div>
                {/* Floating data points around the (now video) background */}
                <div className="absolute top-1/4 left-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse">
                  <div className="text-xs sm:text-sm font-medium text-gray-900">{heroContent.statistics.accuracy}</div>
                  <div className="text-xs text-gray-600">Prediction Accuracy</div>
                </div>
                <div className="absolute bottom-1/4 right-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-300">
                  <div className="text-xs sm:text-sm font-medium text-gray-900">{heroContent.statistics.savings}</div>
                  <div className="text-xs text-gray-600">Annual Savings</div>
                </div>
                <div className="absolute top-1/2 -left-2 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-700">
                  <div className="text-xs sm:text-sm font-medium text-gray-900">{heroContent.statistics.fasterRCA}</div>
                  <div className="text-xs text-gray-600">Faster RCA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
