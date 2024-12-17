import React from 'react';
import ServiceHero from '../../components/shared/ServiceHero';
import PricingCard from '../../components/shared/PricingCard';
import { brandPromotionPlans } from '../../data/plans';

const BrandPromotion = () => {
  return (
    <div className="pt-16">
      <ServiceHero
        title="NIR Smart Brand Promotion"
        description="Elevate your brand with our comprehensive promotion services"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPromotionPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                {...plan}
                ctaLink={`/services/brand-promotion/purchase/${plan.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPromotion;