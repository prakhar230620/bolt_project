import React from 'react';
import { useFinanceForm } from './useFinanceForm';
import FormFields from './FormFields';
import FormSubmitButton from './FormSubmitButton';

const FinanceForm = () => {
  const { handleSubmit, isSubmitting, formState } = useFinanceForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormFields formState={formState} />
      <FormSubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

export default FinanceForm;