import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
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
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto container-padding">
        
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto container-padding py-8 space-y-6">
            {['Platform', 'Science', 'Solutions', 'Company'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>)}
            <div className="pt-6 space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="bg-gray-900 text-white w-full">
                Book Demo
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;