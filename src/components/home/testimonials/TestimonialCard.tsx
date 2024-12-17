import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Quote className="h-8 w-8 text-primary/20 mb-4" />
      <p className="text-gray-600 mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;