import React from 'react';
import { Brain, Rocket, Shield, Code, Database, Cloud } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions to transform your business processes.',
    Icon: Brain,
  },
  {
    title: 'Innovation Strategy',
    description: 'Strategic planning and implementation of innovative technology solutions.',
    Icon: Rocket,
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security measures to protect your digital assets and data.',
    Icon: Shield,
  },
  {
    title: 'Custom Development',
    description: 'Tailored software solutions designed to meet your specific needs.',
    Icon: Code,
  },
  {
    title: 'Data Analytics',
    description: 'Comprehensive data analysis and visualization services.',
    Icon: Database,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    Icon: Cloud,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of innovative solutions designed to
            drive your business forward in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;