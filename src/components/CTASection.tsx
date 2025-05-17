
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-biopredict-blue to-biopredict-purple opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] -z-10"></div>
      
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute left-0 top-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <RocketIcon className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Biomanufacturing?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Join industry leaders who have achieved 30% higher yields and 50% lower costs with BioPredict AI. Schedule a consultation with our team to see how our technology can optimize your processes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-biopredict-purple hover:bg-white/90">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Download Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
