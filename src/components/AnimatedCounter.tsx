
import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  isVisible?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2000, 
  isVisible = true 
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!isVisible) return;
    
    // Extract numeric value and suffix
    const numericMatch = value.match(/[\d.]+/);
    const suffix = value.replace(/[\d.]+/, '');
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetValue = parseFloat(numericMatch[0]);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = targetValue * easeOutQuart;
      
      // Format the display value
      let formattedValue;
      if (targetValue >= 100) {
        formattedValue = Math.floor(currentValue).toString();
      } else {
        formattedValue = currentValue.toFixed(1);
      }
      
      setDisplayValue(formattedValue + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(animate, 200); // Delay start slightly
    return () => clearTimeout(timer);
  }, [value, duration, isVisible]);
  
  return <span>{displayValue}</span>;
};

export default AnimatedCounter;
