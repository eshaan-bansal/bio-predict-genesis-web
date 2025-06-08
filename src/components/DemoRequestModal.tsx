import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, Calendar, User, Mail, Building } from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestModal = ({ isOpen, onClose }: DemoRequestModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with an email sending service (e.g., EmailJS, Formspree, or backend API)
    // Send formData to jamie@rawmaterialpredictive.com and eshaan@rawmaterialpredictive.com
    // Example: await sendEmail(formData);
    console.log('Demo request submitted:', formData);
    alert('Thank you! Your request has been sent. We\'ll contact you within 24 hours to schedule your demo.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Request Demo</h2>
            <p className="text-gray-600 mt-1">Schedule your personalized RMPredictive demonstration</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-gray-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="h-4 w-4 inline mr-2" />
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-gray-500"
              placeholder="your.email@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              <Building className="h-4 w-4 inline mr-2" />
              Company *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-gray-500"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-gray-500"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your manufacturing challenges
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-black placeholder:text-gray-500"
              placeholder="Describe your current processes, pain points, or specific areas where you'd like to see improvement..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Demo
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 bg-black text-white hover:bg-black/90 border-none"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            We'll respond within 24 hours to schedule your personalized demonstration.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestModal;
