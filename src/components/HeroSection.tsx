
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-12 slide-up">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            AI-Powered Manufacturing Intelligence
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl lg:text-7xl font-medium text-gray-900 mb-8 slide-up text-balance">
            Transforming Biopharmaceutical Manufacturing
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-16 leading-relaxed slide-up max-w-3xl mx-auto">
            Unlock predictive intelligence that delivers 30% higher yields and 50% cost reduction 
            across your entire production lifecycle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
            <Button 
              size="lg" 
              className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-4"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-24 slide-up">
            <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider font-medium">
              Trusted by Leading Biopharmaceutical Companies
            </p>
            <div className="flex justify-center items-center space-x-16 opacity-40">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-8 bg-gray-300 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
