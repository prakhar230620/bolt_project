import React from 'react';

interface FormSubmitButtonProps {
  isSubmitting: boolean;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50"
    >
      {isSubmitting ? 'Submitting...' : 'Submit Application'}
    </button>
  );
};

export default FormSubmitButton;