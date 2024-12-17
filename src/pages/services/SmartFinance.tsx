import React from 'react';
import ServiceHero from '../../components/shared/ServiceHero';
import EMICalculator from '../../components/services/smart-finance/EMICalculator';
import FinanceForm from '../../components/services/smart-finance/FinanceForm';

const SmartFinance = () => {
  return (
    <div className="pt-16">
      <ServiceHero
        title="NIR Smart Finance"
        description="Flexible financing solutions for your needs"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <EMICalculator />
            <div>
              <h3 className="text-2xl font-semibold mb-6">Apply for Finance</h3>
              <FinanceForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartFinance;