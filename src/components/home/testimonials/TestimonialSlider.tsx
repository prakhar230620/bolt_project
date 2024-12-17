import React from 'react';
import { Testimonial } from '../../../types';
import TestimonialCard from './TestimonialCard';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  currentIndex: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials, currentIndex }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;