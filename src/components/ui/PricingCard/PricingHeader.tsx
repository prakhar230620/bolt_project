import React from 'react';

interface PricingHeaderProps {
  title: string;
  price: number;
  duration: string;
  recommended?: boolean;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({
  title,
  price,
  duration,
  recommended
}) => {
  return (
    <>
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
    </>
  );
};

export default PricingHeader;