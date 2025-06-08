import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoRequestModal from './DemoRequestModal';

const Footer = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        {/* CTA Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto container-padding section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-sans text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Achieve cost savings and efficiency with RMPredictive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleRequestDemo}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium min-h-[44px]"
                >
                  Request Demo
                </Button>
                <Button 
                  onClick={() => scrollToSection('platform')}
                  variant="outline"
                  className="border-gray-300 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-medium min-h-[44px]"
                >
                  Explore Platform
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="container mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-sans font-medium">RMPredictive</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                AI-driven efficiency for advanced therapy manufacturing.
              </p>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 className="font-sans font-medium mb-6 text-gray-300">Navigation</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('problem')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Problem
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('platform')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Platform
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('science')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Science
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('market')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Market
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Solutions */}
            <div>
              <h3 className="font-sans font-medium mb-6 text-gray-300">Solutions</h3>
              <ul className="space-y-4 text-gray-400">
                <li>Predictive Analytics</li>
                <li>Data Integration</li>
                <li>Risk Prevention</li>
                <li>Yield Optimization</li>
              </ul>
            </div>
            
            {/* Contact & Support */}
            <div>
              <h3 className="font-sans font-medium mb-6 text-gray-300">Get Started</h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <button 
                    onClick={handleRequestDemo}
                    className="hover:text-white transition-colors text-left"
                  >
                    Request Demo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>Support</li>
                <li>Documentation</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} RMPredictive. All rights reserved.
            </p>
            <div className="flex space-x-8 text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <DemoRequestModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
};

export default Footer;
