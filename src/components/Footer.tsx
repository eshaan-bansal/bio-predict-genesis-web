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
      <footer className="bg-black text-white">
        <div className="container mx-auto container-padding py-20 flex flex-col items-center justify-center text-center">
          {/* Company Info */}
          <h3 className="text-3xl font-bold mb-4 font-instrument-serif text-white sm:text-gray-900">
            {footerContent.company.name}
          </h3>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl">
            {footerContent.company.description}
          </p>

          {/* Navigation */}
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {footerContent.navigation.items.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-lg font-semibold hover:text-accent transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {footerContent.contact.items.map((item) => (
                <li key={item.label}>
                  {item.action === 'demo' ? (
                    <button
                      onClick={handleRequestDemo}
                      className="text-lg font-semibold hover:text-accent transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : item.action === 'scroll' && item.target ? (
                    <button
                      onClick={() => scrollToSection(item.target)}
                      className="text-lg font-semibold hover:text-accent transition-colors"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span className="text-lg font-semibold">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white w-full pt-8 mt-8">
            <p className="text-base font-medium mb-4">
              {footerContent.legal.copyright.replace('{year}', currentYear.toString())}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {footerContent.legal.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-base font-medium hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
