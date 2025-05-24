
import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-slate-300 mb-8 text-balance">
              Join leading biopharmaceutical companies using BioPredict to achieve 
              unprecedented manufacturing efficiency and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
                Schedule Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-7 w-7 text-blue-400" />
              <span className="text-xl font-semibold">BioPredict</span>
            </div>
            <p className="text-slate-400 text-sm">
              AI-powered predictive intelligence for biopharmaceutical manufacturing excellence.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Raw Material Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} BioPredict AI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
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
