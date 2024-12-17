import React from 'react';
import Input from '../../../ui/Input';
import { FormState } from './types';

interface FormFieldsProps {
  formState: FormState;
}

const FormFields: React.FC<FormFieldsProps> = ({ formState }) => {
  const { values, errors, handleChange } = formState;

  return (
    <>
      <Input
        label="Full Name (as per Aadhar)"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Mobile"
        name="mobile"
        value={values.mobile}
        onChange={handleChange}
        error={errors.mobile}
      />
      <Input
        label="Aadhar Number"
        name="aadhar"
        value={values.aadhar}
        onChange={handleChange}
        error={errors.aadhar}
      />
      <Input
        label="PAN Number"
        name="pan"
        value={values.pan}
        onChange={handleChange}
        error={errors.pan}
      />
    </>
  );
};

export default FormFields;