import React from 'react';
import { Hero, Services, Testimonials, CallToAction } from '../components/home';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;