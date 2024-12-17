import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';
import { useAuth } from '../../hooks/useAuth';
import { sendEmail } from '../../utils/email';

interface PurchaseFormProps {
  type: 'smart-packages' | 'brand-promotion';
  planId: string;
  planName: string;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ type, planId, planName }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { user } = useAuth();

  const onSubmit = async (data: any) => {
    if (!user) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }

    try {
      // Send email with form data
      await sendEmail(
        'bankhedeprakhar2@gmail.com',
        `New ${type === 'smart-packages' ? 'Smart Package' : 'Brand Promotion'} Purchase Request`,
        `
          Plan: ${planName}
          User Details:
          Name: ${data.fullName}
          Email: ${data.email}
          Mobile: ${data.mobile}
          Address: ${data.address}
          ${type === 'brand-promotion' ? `Brand Description: ${data.brandDescription}` : ''}
          ${type === 'smart-packages' ? `Description: ${data.description}` : ''}
        `
      );

      // Navigate to payment page
      navigate(`/payment/${type}/${planId}`, { 
        state: { formData: data }
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name"
        {...register('fullName', { required: 'Full name is required' })}
        error={errors.fullName?.message as string}
      />
      <Input
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message as string}
      />
      <Input
        label="Mobile Number"
        {...register('mobile', { required: 'Mobile number is required' })}
        error={errors.mobile?.message as string}
      />
      <Input
        label="Address"
        {...register('address', { required: 'Address is required' })}
        error={errors.address?.message as string}
      />
      
      {type === 'brand-promotion' && (
        <>
          <Input
            label="Brand Description"
            {...register('brandDescription', { required: 'Brand description is required' })}
            error={errors.brandDescription?.message as string}
          />
          <div className="space-y-4">
            <Input
              type="file"
              label="Promotional Images (2 required)"
              accept="image/*"
              multiple
              {...register('images', { required: 'Images are required' })}
              error={errors.images?.message as string}
            />
            <Input
              type="file"
              label="Promotional Video (30 seconds max)"
              accept="video/*"
              {...register('video', { required: 'Video is required' })}
              error={errors.video?.message as string}
            />
          </div>
        </>
      )}
      
      {type === 'smart-packages' && (
        <Input
          label="Additional Description"
          {...register('description')}
          error={errors.description?.message as string}
        />
      )}

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
      >
        Proceed to Payment
      </button>
    </form>
  );
};