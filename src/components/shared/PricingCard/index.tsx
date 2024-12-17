import React from 'react';
import { Link } from 'react-router-dom';
import PricingHeader from './PricingHeader';
import PricingFeature from './PricingFeature';
import { PricingFeature as PricingFeatureType } from '../../../types/services';

interface PricingCardProps {
  title: string;
  price: number;
  duration: string;
  features: PricingFeatureType[];
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
      className={`bg-white rounded-lg shadow-lg p-8 relative ${
        recommended ? 'ring-2 ring-accent transform scale-105' : ''
      }`}
    >
      <PricingHeader
        title={title}
        price={price}
        duration={duration}
        recommended={recommended}
      />
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <PricingFeature
            key={index}
            text={feature.text}
            included={feature.included}
          />
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