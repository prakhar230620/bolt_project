import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Innovate Today for a
        <span className="text-[#ff5722]"> Better Tomorrow</span>
      </h1>
      <p className="text-xl text-gray-200 mb-8">
        We transform visionary ideas into groundbreaking realities through cutting-edge technology
        and innovative solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#ff5722] text-white px-8 py-3 rounded-md hover:bg-[#f4511e] transition-all duration-300 flex items-center justify-center group">
          Get Started
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#1a237e] transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroContent;