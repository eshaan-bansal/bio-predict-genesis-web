
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
      <section className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f5f3f0' }}>
        <div className="animate-pulse text-gray-400">Loading...</div>
      </section>
    );
  }

  const heroContent = content.hero;

  return (
    <>
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content */}
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8 slide-up">
              {/* Main Headline */}
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight text-balance">
                AI-Driven Manufacturing
                <span className="block text-blue-400">Optimization</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed font-medium max-w-3xl mx-auto">
                Achieve 30% higher yields and 50% cost reduction through intelligent raw material insights
              </p>

              {/* CTA Button */}
              <div className="pt-8">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={handleRequestDemo}
                        className="bg-blue-600 text-white px-12 py-6 rounded-lg text-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl min-h-[44px] min-w-[44px] touch-manipulation"
                      >
                        See 98.7% Accuracy Demo
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>See 98.7% Accuracy At No Cost</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Key Statistics */}
              <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{heroContent.statistics.accuracy}</div>
                  <div className="text-sm text-gray-300 mt-1">Prediction Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{heroContent.statistics.savings}</div>
                  <div className="text-sm text-gray-300 mt-1">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{heroContent.statistics.fasterRCA}</div>
                  <div className="text-sm text-gray-300 mt-1">Faster RCA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
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
