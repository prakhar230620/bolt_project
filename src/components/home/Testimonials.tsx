import React from 'react';
import { testimonials } from '../../data/testimonials';
import { useTestimonialCarousel } from '../../hooks/useTestimonialCarousel';
import TestimonialSection from './testimonials/TestimonialSection';
import TestimonialSlider from './testimonials/TestimonialSlider';
import TestimonialControls from './testimonials/TestimonialControls';

const Testimonials = () => {
  const { currentIndex, nextTestimonial, prevTestimonial } = useTestimonialCarousel(
    testimonials.length
  );

  return (
    <TestimonialSection>
      <TestimonialSlider
        testimonials={testimonials}
        currentIndex={currentIndex}
      />
      <TestimonialControls
        onPrev={prevTestimonial}
        onNext={nextTestimonial}
      />
    </TestimonialSection>
  );
};

export default Testimonials;