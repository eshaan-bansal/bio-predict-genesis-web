
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
          ? 'py-3 glass-morphism shadow-2xl border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <Brain className="h-8 w-8 text-biopredict-accent mr-3" />
            </div>
            <span className="font-light text-2xl text-white">
              Bio<span className="font-medium text-biopredict-accent">Predict</span>
              <span className="text-xs text-slate-400 ml-2 font-mono uppercase tracking-wider">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex space-x-12">
              <li>
                <a href="#problem" className="text-sm font-light text-slate-300 hover:text-white transition-all duration-300">
                  Challenge
                </a>
              </li>
              <li>
                <a href="#solution" className="text-sm font-light text-slate-300 hover:text-white transition-all duration-300">
                  Solution
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm font-light text-slate-300 hover:text-white transition-all duration-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm font-light text-slate-300 hover:text-white transition-all duration-300">
                  Team
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="glass-morphism border-slate-600 hover:bg-white/5 text-slate-300 rounded-full px-6">
                <Activity className="h-4 w-4 mr-2" />
                Demo
              </Button>
              <Button size="sm" className="cyber-button gap-2 rounded-full px-6">
                <BookOpenIcon className="h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl glass-morphism"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-biopredict-accent" />
              ) : (
                <Menu className="h-6 w-6 text-biopredict-accent" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-morphism animate-fade-in mt-4 mx-4 rounded-2xl">
          <div className="px-6 py-8 space-y-6">
            {['Challenge', 'Solution', 'Benefits', 'Team'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-lg font-light text-slate-300 hover:text-white transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-6 space-y-4">
              <Button variant="outline" size="sm" className="w-full glass-morphism border-slate-600 text-slate-300 rounded-full">
                <Activity className="h-4 w-4 mr-2" />
                Demo
              </Button>
              <Button size="sm" className="w-full cyber-button gap-2 rounded-full">
                <BookOpenIcon className="h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
