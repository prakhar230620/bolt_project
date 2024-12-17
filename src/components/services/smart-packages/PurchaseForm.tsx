import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import { initializePayment } from '../../../utils/payment';
import { sendEmail } from '../../../utils/email';

interface PurchaseFormProps {
  planId: string;
  planPrice: number;
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ planId, planPrice }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const payment = await initializePayment(planPrice);
      if (payment.success) {
        await sendEmail(
          'bankhedeprakhar2@gmail.com',
          'New Package Purchase',
          `New purchase for plan ${planId}\nCustomer: ${data.name}\nEmail: ${data.email}`
        );
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message as string}
      />
      <Input
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message as string}
      />
      <Input
        label="Phone"
        {...register('phone', { required: 'Phone is required' })}
        error={errors.phone?.message as string}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
      >
        Proceed to Payment
      </button>
    </form>
  );
};