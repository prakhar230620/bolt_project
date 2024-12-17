import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropertyForm from '../components/properties/PropertyForm';

const ListProperty = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate('/login', { state: { from: '/list-property' } });
    return null;
  }

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">List Your Property</h1>
          <p className="text-xl max-w-3xl">
            Showcase your property to potential buyers and investors. Fill out the form below
            to get started.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <PropertyForm />
        </div>
      </section>
    </div>
  );
};

export default ListProperty;