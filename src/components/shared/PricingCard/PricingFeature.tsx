import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeatureProps {
  text: string;
  included: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text, included }) => {
  return (
    <li className="flex items-center space-x-3">
      <Check
        className={`h-5 w-5 ${
          included ? 'text-green-500' : 'text-gray-300'
        }`}
      />
      <span className={included ? 'text-gray-600' : 'text-gray-400'}>
        {text}
      </span>
    </li>
  );
};

export default PricingFeature;