import React from 'react';
import TeamSection from '../components/about/TeamSection';
import Timeline from '../components/about/Timeline';
import Innovation from '../components/about/Innovation';

const About = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl">
            Since our inception, Next Innovation has been at the forefront of technological advancement,
            driving change and creating solutions that shape the future of industries worldwide.
          </p>
        </div>
      </section>
      <Innovation />
      <TeamSection />
      <Timeline />
    </div>
  );
};

export default About;