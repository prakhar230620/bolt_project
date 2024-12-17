import React from 'react';
import { ServiceHero, PricingCard } from '../../components/shared';
import { smartPackagePlans } from '../../data/plans';

const SmartPackages = () => {
  return (
    <div className="pt-16">
      <ServiceHero
        title="NIR Smart Packages"
        description="Choose the perfect package for your business needs"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartPackagePlans.map((plan) => (
              <PricingCard
                key={plan.id}
                {...plan}
                ctaLink={`/services/smart-packages/purchase/${plan.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartPackages;