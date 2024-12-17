import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  duration: string;
  features: PricingFeature[];
  recommended?: boolean;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  duration,
  features,
  recommended,
  ctaLink,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 ${
        recommended ? 'ring-2 ring-accent transform scale-105' : ''
      }`}
    >
      {recommended && (
        <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium absolute -top-3 left-1/2 -translate-x-1/2">
          Recommended
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">₹{price}</span>
        <span className="text-gray-600">/{duration}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check
              className={`h-5 w-5 ${
                feature.included ? 'text-green-500' : 'text-gray-300'
              }`}
            />
            <span
              className={feature.included ? 'text-gray-600' : 'text-gray-400'}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

export default PricingCard;