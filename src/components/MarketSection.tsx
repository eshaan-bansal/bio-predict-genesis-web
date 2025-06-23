import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BrainCircuit, Shield, Rocket, Database, Award } from "lucide-react";
import { useContent } from '../hooks/useContent';
import AnimatedCounter from './AnimatedCounter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
const MarketSection = () => {
  const {
    elementRef,
    isVisible
  } = useIntersectionObserver();
  const {
    content,
    loading
  } = useContent();
  if (loading || !content) {
    return <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>;
  }
  const scienceContent = content.science;
  return;
};
export default MarketSection;