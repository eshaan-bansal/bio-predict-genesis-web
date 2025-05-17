
import { MicrochipIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-biopredict-blue py-12 text-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <MicrochipIcon className="h-8 w-8 text-biopredict-light-purple mr-2" />
            <span className="font-bold text-xl text-white">
              Bio<span className="text-biopredict-light-purple">Predict</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#problem" className="hover:text-biopredict-light-purple transition-colors">The Challenge</a>
            <a href="#solution" className="hover:text-biopredict-light-purple transition-colors">Our Solution</a>
            <a href="#benefits" className="hover:text-biopredict-light-purple transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-biopredict-light-purple transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} BioPredict AI. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
