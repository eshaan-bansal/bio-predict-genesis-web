
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <div className="w-2 h-2 bg-primary rounded-full mr-2" />
            AI-Powered Manufacturing Intelligence
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground mb-8 animate-fade-up">
            Unlock{' '}
            <span className="text-gradient">$100 Billion</span>
            {' '}in Manufacturing Efficiency
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-up max-w-3xl mx-auto">
            Transform biopharmaceutical manufacturing with predictive AI that delivers 
            30% higher yields and 50% lower costs across your entire production lifecycle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Button 
              size="lg" 
              className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200 text-lg px-8 py-4"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 hover:bg-muted/50 transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 animate-fade-up">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
              Trusted by Leading Biopharmaceutical Companies
            </p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-8 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
