
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleContactAction = (action: string, target?: string) => {
    if (action === 'demo') {
      handleRequestDemo();
    } else if (action === 'scroll' && target) {
      scrollToSection(target);
    }
  };

  if (loading || !content) {
    return null;
  }

  const footerContent = content.footer;

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
                Achieve cost savings and efficiency with {footerContent.company.name}.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="container mx-auto container-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Brand - Centered */}
            <div className="md:col-span-3 text-center mb-8">
              <div className="mb-6">
                <span className="text-2xl font-sans font-medium">{footerContent.company.name}</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                {footerContent.company.description}
              </p>
            </div>
            
            {/* Navigation */}
            <div className="text-center">
              <h3 className="font-sans font-medium mb-6 text-gray-300">{footerContent.navigation.title}</h3>
              <ul className="space-y-4 text-gray-400">
                {footerContent.navigation.items.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.sectionId)}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="text-center">
              <h3 className="font-sans font-medium mb-6 text-gray-300">{footerContent.solutions.title}</h3>
              <ul className="space-y-4 text-gray-400">
                {footerContent.solutions.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div className="text-center">
              <h3 className="font-sans font-medium mb-6 text-gray-300">{footerContent.contact.title}</h3>
              <ul className="space-y-4 text-gray-400">
                {footerContent.contact.items.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleContactAction(item.action, item.target)}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
            <p className="text-gray-400 mb-4 md:mb-0">
              {footerContent.legal.copyright.replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-8 text-gray-400">
              {footerContent.legal.links.map((link, index) => (
                <Link key={index} to={link.path} className="hover:text-white transition-colors">
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
