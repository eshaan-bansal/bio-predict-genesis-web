import React from 'react';
import { Shield, Lock, Database, Server, Users, Search, Settings, TrendingUp, Maximize } from 'lucide-react';
import { useContent } from '../hooks/useContent';
const PrivacySection = () => {
  const {
    content,
    loading
  } = useContent();
  if (loading || !content) {
    return <section className="py-16 bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>;
  }
  const privacyContent = content.privacy;
  const pilotContent = content.pilot;
  const iconMap = {
    'Search': Search,
    'Settings': Settings,
    'TrendingUp': TrendingUp,
    'Maximize': Maximize
  };
  return;
};
export default PrivacySection;