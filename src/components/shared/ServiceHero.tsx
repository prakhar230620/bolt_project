import React from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, image }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;