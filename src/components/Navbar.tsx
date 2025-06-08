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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100]"
      >
        Skip to main content
      </a>
      
      <nav className={
        "fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      }>
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-xl sm:text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                <img
                  src="/RMPredictive_Logo.png"
                  alt="RMPredictive Logo"
                  className="h-[78px] w-[78px] object-contain"
                  style={{ background: 'transparent' }}
                />
                <span>RMPredictive</span>
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
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Primary CTA Button */}
              <Button 
                onClick={handleRequestDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 min-h-[44px]"
              >
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 p-2 min-h-[44px] min-w-[44px] touch-manipulation hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
              <div className="container mx-auto container-padding py-6 space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left font-medium py-4 px-4 transition-colors rounded-lg min-h-[44px] touch-manipulation ${
                      activeSection === item.id 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-gray-100">
                  <Button 
                    onClick={handleRequestDemo}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 min-h-[44px]"
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
