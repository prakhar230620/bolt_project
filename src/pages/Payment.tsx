import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { initializePayment } from '../utils/payment';

const Payment = () => {
  const { type, planId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = location.state?.formData;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (!formData) {
      navigate(`/services/${type}`);
    }
  }, [user, formData]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await initializePayment(formData.amount);
      if (response.success) {
        // Handle successful payment
        navigate('/profile', { 
          state: { 
            message: 'Payment successful! Your subscription has been activated.' 
          }
        });
      }
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Complete Your Payment</h2>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded">
              <p className="flex justify-between mb-2">
                <span>Plan:</span>
                <span>{formData?.planName}</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Amount:</span>
                <span>₹{formData?.amount}</span>
              </p>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay with PhonePe'}
          </button>
        </div>
      </div>
    </div>
  );
};