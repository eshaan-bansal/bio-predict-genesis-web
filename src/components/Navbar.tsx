
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MicrochipIcon, Menu, X, BookOpenIcon } from 'lucide-react';

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm dark:bg-biopredict-blue/80' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MicrochipIcon className="h-8 w-8 text-biopredict-light-purple animate-pulse-glow mr-2" />
            <span className="font-bold text-xl text-biopredict-blue dark:text-white">
              Bio<span className="text-biopredict-light-purple">Predict</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#problem" className="text-sm font-medium hover:text-biopredict-light-purple transition-colors">
                  The Challenge
                </a>
              </li>
              <li>
                <a href="#solution" className="text-sm font-medium hover:text-biopredict-light-purple transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm font-medium hover:text-biopredict-light-purple transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm font-medium hover:text-biopredict-light-purple transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm font-medium hover:text-biopredict-light-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            <Button variant="default" size="sm" className="gap-1">
              <BookOpenIcon className="h-4 w-4" />
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md"
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
        <div className="md:hidden bg-white dark:bg-biopredict-blue shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#problem" 
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              The Challenge
            </a>
            <a 
              href="#solution" 
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Solution
            </a>
            <a 
              href="#benefits" 
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#team" 
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <Button variant="default" size="sm" className="w-full gap-1">
                <BookOpenIcon className="h-4 w-4" />
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
