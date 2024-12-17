import React from 'react';

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/90 to-[#26a69a]/80" />
    </div>
  );
};

export default HeroBackground;