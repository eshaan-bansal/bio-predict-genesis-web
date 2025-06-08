
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoRequestModal from './DemoRequestModal';

const Footer = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-midnight-blue text-silver">
        <div className="container mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium text-electric-teal mb-4">
                RMPredictive
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                AI-driven efficiency for advanced therapy manufacturing.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('problem')}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Problem
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('platform')}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Platform
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('science')}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Science
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('market')}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Market
                  </button>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-medium text-white mb-4">
                Solutions
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-sm">Predictive Analytics</span>
                </li>
                <li>
                  <span className="text-sm">Data Integration</span>
                </li>
                <li>
                  <span className="text-sm">Risk Prevention</span>
                </li>
                <li>
                  <span className="text-sm">Yield Optimization</span>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="font-medium text-white mb-4">
                Get Started
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={handleRequestDemo}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Request Demo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
              
              {/* Support Links */}
              <div className="mt-6">
                <h5 className="font-medium text-white mb-3">Support</h5>
                <ul className="space-y-2">
                  <li>
                    <span className="text-sm">Documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gunmetal-gray mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0">
                © {currentYear} RMPredictive. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <Link
                  to="/privacy-policy"
                  className="text-sm hover:text-electric-teal transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms-of-service"
                  className="text-sm hover:text-electric-teal transition-colors"
                >
                  Terms
                </Link>
                <Link
                  to="/cookies"
                  className="text-sm hover:text-electric-teal transition-colors"
                >
                  Cookies
                </Link>
              </div>
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
