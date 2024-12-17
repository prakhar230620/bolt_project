import React from 'react';

interface TestimonialSectionProps {
  children: React.ReactNode;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ children }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;