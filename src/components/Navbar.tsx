
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import DemoRequestModal from './DemoRequestModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['problem', 'platform', 'science', 'market', 'about'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { name: 'Problem', id: 'problem' },
    { name: 'Platform', id: 'platform' },
    { name: 'Science', id: 'science' },
    { name: 'Market', id: 'market' },
    { name: 'Contact', id: 'about' }
  ];

  return (
    <>
      {/* Skip Navigation for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-olive-green text-ivory px-4 py-2 rounded-lg z-[100]"
      >
        Skip to main content
      </a>
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-sm border-b border-border shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xl sm:text-2xl font-medium text-dark-brown hover:text-olive-green transition-colors"
              >
                RMPredictive
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors min-h-[44px] min-w-[44px] touch-manipulation px-3 py-2 rounded-md ${
                    activeSection === item.id 
                      ? 'text-olive-green bg-sand-beige/20' 
                      : 'text-dark-brown hover:text-olive-green hover:bg-sand-beige/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Primary CTA Button */}
              <Button 
                onClick={handleRequestDemo}
                className="bg-olive-green hover:bg-olive-green/90 text-ivory px-6 py-2 min-h-[44px] shadow-lg"
              >
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-dark-brown p-2 min-h-[44px] min-w-[44px] touch-manipulation hover:text-olive-green hover:bg-sand-beige/10 rounded-md transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-ivory border-t border-border shadow-lg rounded-b-lg">
              <div className="container mx-auto container-padding py-6 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left font-medium py-4 px-4 transition-colors rounded-lg min-h-[44px] touch-manipulation ${
                      activeSection === item.id 
                        ? 'text-olive-green bg-sand-beige/20' 
                        : 'text-dark-brown hover:text-olive-green hover:bg-sand-beige/10'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-border">
                  <Button 
                    onClick={handleRequestDemo}
                    className="w-full bg-olive-green hover:bg-olive-green/90 text-ivory py-4 min-h-[44px] shadow-lg"
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Request Modal */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
