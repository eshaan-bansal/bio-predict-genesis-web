
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X, BookOpenIcon, Activity } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 glass-morphism shadow-cyber' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <Brain className="h-10 w-10 text-biopredict-purple animate-pulse-glow mr-3" />
              <div className="absolute inset-0 rounded-full bg-biopredict-purple/20 animate-ping" style={{animationDuration: '3s'}}></div>
            </div>
            <span className="font-bold text-2xl text-white">
              Bio<span className="gradient-text">Predict</span>
              <span className="text-xs text-biopredict-accent ml-2 font-mono">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#problem" className="text-sm font-medium text-slate-300 hover:text-biopredict-accent transition-all duration-300 relative group">
                  Challenge
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biopredict-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#solution" className="text-sm font-medium text-slate-300 hover:text-biopredict-accent transition-all duration-300 relative group">
                  AI Solution
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biopredict-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm font-medium text-slate-300 hover:text-biopredict-accent transition-all duration-300 relative group">
                  Benefits
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biopredict-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm font-medium text-slate-300 hover:text-biopredict-accent transition-all duration-300 relative group">
                  Team
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biopredict-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-biopredict-accent transition-all duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-biopredict-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="glass-morphism border-biopredict-purple/50 hover:bg-biopredict-purple/10 text-slate-300">
                <Activity className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button size="sm" className="cyber-button gap-2">
                <BookOpenIcon className="h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md glass-morphism"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-biopredict-purple" />
              ) : (
                <Menu className="h-6 w-6 text-biopredict-purple" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism shadow-cyber animate-fade-in mt-2">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#problem" 
              className="block py-3 px-4 text-sm text-slate-300 hover:text-biopredict-accent hover:bg-biopredict-purple/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Challenge
            </a>
            <a 
              href="#solution" 
              className="block py-3 px-4 text-sm text-slate-300 hover:text-biopredict-accent hover:bg-biopredict-purple/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Solution
            </a>
            <a 
              href="#benefits" 
              className="block py-3 px-4 text-sm text-slate-300 hover:text-biopredict-accent hover:bg-biopredict-purple/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#team" 
              className="block py-3 px-4 text-sm text-slate-300 hover:text-biopredict-accent hover:bg-biopredict-purple/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="block py-3 px-4 text-sm text-slate-300 hover:text-biopredict-accent hover:bg-biopredict-purple/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 space-y-3">
              <Button variant="outline" size="sm" className="w-full glass-morphism border-biopredict-purple/50 text-slate-300">
                <Activity className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button size="sm" className="w-full cyber-button gap-2">
                <BookOpenIcon className="h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
