import { useState } from 'react';
import { validateFinanceForm } from './validation';
import { sendEmail } from '../../../../../utils/email';
import { FinanceFormData } from './types';

const initialState: FinanceFormData = {
  fullName: '',
  email: '',
  mobile: '',
  aadhar: '',
  pan: '',
};

export const useFinanceForm = () => {
  const [values, setValues] = useState<FinanceFormData>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FinanceFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FinanceFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateFinanceForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail({
        to: 'bankhedeprakhar2@gmail.com',
        subject: 'New Finance Application',
        body: `
          New finance application received:
          
          Full Name: ${values.fullName}
          Email: ${values.email}
          Mobile: ${values.mobile}
          Aadhar Number: ${values.aadhar}
          PAN Number: ${values.pan}
        `
      });

      setValues(initialState);
      // Show success message
    } catch (error) {
      console.error('Form submission failed:', error);
      // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formState: {
      values,
      errors,
      handleChange,
    },
    handleSubmit,
    isSubmitting,
  };
};