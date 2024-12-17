import React from 'react';
import { Lightbulb, Target, Zap } from 'lucide-react';

const Innovation = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To drive technological innovation that empowers businesses and enriches lives through
              cutting-edge solutions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in innovative technology solutions, shaping the future of
              digital transformation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, excellence, and collaboration drive everything we do at Next
              Innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;