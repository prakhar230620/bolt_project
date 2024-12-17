import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;