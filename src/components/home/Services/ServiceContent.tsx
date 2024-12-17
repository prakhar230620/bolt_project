import React from 'react';

interface ServiceContentProps {
  title: string;
  description: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ title, description }) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );
};

export default ServiceContent;