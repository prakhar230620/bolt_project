import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TestimonialControls: React.FC<TestimonialControlsProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </>
  );
};

export default TestimonialControls;