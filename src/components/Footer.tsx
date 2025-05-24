
import React from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto container-padding section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join leading biopharmaceutical companies using BioPredict to achieve 
              unprecedented manufacturing efficiency and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-foreground hover:bg-white/90 text-lg px-8 py-4">
                Schedule Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-xl font-display font-semibold">BioPredict</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              AI-powered predictive intelligence for biopharmaceutical manufacturing excellence.
            </p>
          </div>
          
          {/* Platform */}
          <div>
            <h3 className="font-display font-semibold mb-6">Platform</h3>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-display font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Raw Material Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Regulatory Compliance</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} BioPredict AI. All rights reserved.
          </p>
          <div className="flex space-x-8 text-white/70">
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
