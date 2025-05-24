
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Brain className="h-7 w-7 text-blue-600" />
            <span className="text-xl font-semibold text-slate-900">
              BioPredict
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {['Platform', 'Science', 'Solutions', 'Company'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-900">
                Sign In
              </Button>
              <Button className="btn-primary">
                Book Demo
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 animate-fade-in">
          <div className="container-custom py-6 space-y-4">
            {['Platform', 'Science', 'Solutions', 'Company'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-700 hover:text-slate-900 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="btn-primary w-full">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
