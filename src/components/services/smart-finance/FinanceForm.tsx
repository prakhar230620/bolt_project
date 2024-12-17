import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import FileUpload from '../../shared/FileUpload';
import { validateAadhar, validatePAN, validateMobile } from '../../../utils/validation';
import { sendEmail } from '../../../utils/email';

const FinanceForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await sendEmail(
        'bankhedeprakhar2@gmail.com',
        'New Finance Application',
        `New finance application from ${data.fullName}\nEmail: ${data.email}\nMobile: ${data.mobile}`
      );
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Full Name (as per Aadhar)"
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
        label="Mobile"
        {...register('mobile', {
          required: 'Mobile number is required',
          validate: validateMobile,
        })}
        error={errors.mobile?.message as string}
      />
      <Input
        label="Aadhar Number"
        {...register('aadhar', {
          required: 'Aadhar number is required',
          validate: validateAadhar,
        })}
        error={errors.aadhar?.message as string}
      />
      <Input
        label="PAN Number"
        {...register('pan', {
          required: 'PAN number is required',
          validate: validatePAN,
        })}
        error={errors.pan?.message as string}
      />
      <FileUpload
        label="Passport Photo"
        accept="image/*"
        onChange={(files) => console.log('Photo:', files)}
      />
      <FileUpload
        label="Aadhar Card (Both Sides)"
        accept="image/*"
        multiple
        onChange={(files) => console.log('Aadhar:', files)}
      />
      <FileUpload
        label="PAN Card"
        accept="image/*"
        onChange={(files) => console.log('PAN:', files)}
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
      >
        Submit Application
      </button>
    </form>
  );
};

export default FinanceForm;