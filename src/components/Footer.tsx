
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
              Join leading biopharmaceutical companies using BioPredict to achieve 
              unprecedented manufacturing efficiency and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
                Schedule Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-4">
                Download Case Study
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
              <span className="text-2xl font-serif font-medium">BioPredict</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI-powered predictive intelligence for biopharmaceutical manufacturing excellence.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="font-medium mb-6">Platform</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-medium mb-6">Solutions</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Raw Material Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-medium mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} BioPredict AI. All rights reserved.
          </p>
          <div className="flex space-x-8 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
