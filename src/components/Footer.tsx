
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Explore RMPredictive
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-sans font-medium">RMPredictive</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI for smarter manufacturing.
            </p>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="font-sans font-medium mb-6 text-gray-300">Features</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Predictive Analytics</li>
              <li>Data Integration</li>
              <li>Risk Prevention</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-sans font-medium mb-6 text-gray-300">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Schedule Demo</li>
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
  );
};

export default Footer;
