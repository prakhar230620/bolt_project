import { useState, useEffect } from 'react';

export const useTestimonialCarousel = (totalItems: number, autoPlayInterval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval]);

  return {
    currentIndex,
    nextTestimonial,
    prevTestimonial,
  };
};