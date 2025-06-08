
import LazyFuturisticCube from './LazyFuturisticCube';
import DemoRequestModal from './DemoRequestModal';
import { useState } from 'react';
import { useContent } from '../hooks/useContent';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { content, loading } = useContent();

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  if (loading || !content) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </section>
    );
  }

  const heroContent = content.hero;

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Content */}
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
              {/* Left Column - Text Content */}
              <div id="main-content" className="text-center lg:text-left space-y-6 lg:space-y-8 slide-up">
                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-charcoal leading-tight text-balance">
                  Optimize <span className="text-coral-pink">Biopharmaceutical Manufacturing</span> with AI-Driven Raw Material Insights
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-charcoal leading-relaxed font-medium opacity-80">
                  {heroContent.subheadline}
                </p>

                {/* CTA Button */}
                <div className="pt-4 flex justify-center lg:justify-start">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button 
                          onClick={handleRequestDemo}
                          className="bg-coral-pink text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-coral-pink/90 transition-colors min-h-[44px] min-w-[44px] touch-manipulation shadow-lg"
                        >
                          Request Demo
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>See 98.7% Accuracy At No Cost</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {/* Right Column - 3D Graphic */}
              <div className="relative slide-up order-first lg:order-last">
                <div className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative">
                  <LazyFuturisticCube />
                </div>
                
                {/* Floating data points around the cube */}
                <div className="absolute top-1/4 left-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse border border-mint-green/20">
                  <div className="text-xs sm:text-sm font-medium text-charcoal">{heroContent.statistics.accuracy}</div>
                  <div className="text-xs text-charcoal/60">Prediction Accuracy</div>
                </div>
                
                <div className="absolute bottom-1/4 right-0 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-300 border border-mint-green/20">
                  <div className="text-xs sm:text-sm font-medium text-charcoal">{heroContent.statistics.savings}</div>
                  <div className="text-xs text-charcoal/60">Annual Savings</div>
                </div>
                
                <div className="absolute top-1/2 -left-2 sm:-left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-4 sm:py-2 shadow-lg animate-pulse delay-700 border border-mint-green/20">
                  <div className="text-xs sm:text-sm font-medium text-charcoal">{heroContent.statistics.fasterRCA}</div>
                  <div className="text-xs text-charcoal/60">Faster RCA</div>
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
