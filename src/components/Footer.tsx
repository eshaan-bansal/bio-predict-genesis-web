
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DemoRequestModal from './DemoRequestModal';
import { useContent } from '../hooks/useContent';

const Footer = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { content, loading } = useContent();

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

  if (loading || !content) {
    return (
      <footer className="bg-midnight-blue text-silver">
        <div className="container mx-auto container-padding py-12">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </footer>
    );
  }

  const footerContent = content.footer;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-midnight-blue text-silver">
        <div className="container mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium text-electric-teal mb-4">
                {footerContent.company.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                {footerContent.company.description}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium text-white mb-4">
                {footerContent.navigation.title}
              </h4>
              <ul className="space-y-3">
                {footerContent.navigation.items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.sectionId)}
                      className="text-sm hover:text-electric-teal transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-medium text-white mb-4">
                {footerContent.solutions.title}
              </h4>
              <ul className="space-y-3">
                {footerContent.solutions.items.map((item) => (
                  <li key={item}>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="font-medium text-white mb-4">
                {footerContent.contact.title}
              </h4>
              <ul className="space-y-3">
                {footerContent.contact.items.map((item) => (
                  <li key={item.label}>
                    {item.action === 'demo' ? (
                      <button
                        onClick={handleRequestDemo}
                        className="text-sm hover:text-electric-teal transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : item.action === 'scroll' && item.target ? (
                      <button
                        onClick={() => scrollToSection(item.target)}
                        className="text-sm hover:text-electric-teal transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <span className="text-sm">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Additional Support Links */}
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
                {footerContent.legal.copyright.replace('{year}', currentYear.toString())}
              </p>
              
              <div className="flex space-x-6">
                {footerContent.legal.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="text-sm hover:text-electric-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
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
