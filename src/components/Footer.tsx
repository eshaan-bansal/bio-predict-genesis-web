
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto container-padding section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6 text-balance">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join leading biopharmaceutical companies using RawMaterialPredictive to achieve 
              unprecedented manufacturing efficiency and quality.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-serif font-medium">RawMaterialPredictive</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered predictive intelligence for biopharmaceutical manufacturing excellence.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="font-light mb-6 text-gray-300">Platform</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Features</li>
              <li>Integrations</li>
              <li>Security</li>
              <li>API Documentation</li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-light mb-6 text-gray-300">Solutions</h3>
            <ul className="space-y-4 text-gray-400 font-light">
              <li>Raw Material Optimization</li>
              <li>Process Control</li>
              <li>Quality Management</li>
              <li>Regulatory Compliance</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} RawMaterialPredictive AI. All rights reserved.
          </p>
          <div className="flex space-x-8 text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
