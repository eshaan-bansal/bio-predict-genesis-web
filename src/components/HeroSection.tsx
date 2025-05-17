
import { Button } from "@/components/ui/button";
import { ChevronRight, RocketIcon } from "lucide-react";
import DataWaveBackground from "./DataWaveBackground";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <DataWaveBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-biopredict-purple/30 bg-biopredict-purple/10 text-biopredict-purple text-xs font-medium mb-6 animate-fade-in">
            <RocketIcon className="h-3.5 w-3.5 mr-2" />
            AI-Powered Biomanufacturing
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
            Unlocking <span className="gradient-text">$100 Billion</span> in Biopharma Manufacturing Efficiency
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in-slow">
            AI-Powered Process Optimization Delivering 30% Higher Yields and 50% Lower Costs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-slow">
            <Button size="lg" className="gap-2 font-medium">
              Get Started <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Abstract Visualization */}
        <div className="relative mt-20 md:mt-32 h-64 max-w-5xl mx-auto rounded-lg overflow-hidden animate-fade-in-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-biopredict-purple/80 to-biopredict-light-purple/80 opacity-90 z-10 rounded-lg"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-full max-w-2xl">
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 bg-white/20 rounded-full w-1/4"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/5"></div>
                <div className="h-3 bg-white/40 rounded-full w-1/6"></div>
                <div className="h-3 bg-white/60 rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 bg-white/10 rounded-full w-1/6"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/4"></div>
                <div className="h-3 bg-white/60 rounded-full w-1/5"></div>
                <div className="h-3 bg-white/30 rounded-full w-1/6"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-white/50 rounded-full w-1/3"></div>
                <div className="h-3 bg-white/20 rounded-full w-1/4"></div>
                <div className="h-3 bg-white/10 rounded-full w-1/5"></div>
                <div className="h-3 bg-white/30 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom shape divider */}
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background h-[60px] w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
