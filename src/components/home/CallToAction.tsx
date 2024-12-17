import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join the ranks of innovative companies that are reshaping their industries
            with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-3 rounded-md hover:bg-accent/90 transition-all duration-300 flex items-center justify-center group">
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;