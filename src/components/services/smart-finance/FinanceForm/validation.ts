import { FinanceFormData } from './types';
import { validateEmail, validateAadhar, validatePAN, validateMobile } from '../../../../utils/validation';

export const validateFinanceForm = (data: FinanceFormData) => {
  const errors: Partial<Record<keyof FinanceFormData, string>> = {};

  if (!data.fullName) {
    errors.fullName = 'Full name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.mobile) {
    errors.mobile = 'Mobile number is required';
  } else if (!validateMobile(data.mobile)) {
    errors.mobile = 'Invalid mobile number';
  }

  if (!data.aadhar) {
    errors.aadhar = 'Aadhar number is required';
  } else if (!validateAadhar(data.aadhar)) {
    errors.aadhar = 'Invalid Aadhar number';
  }

  if (!data.pan) {
    errors.pan = 'PAN number is required';
  } else if (!validatePAN(data.pan)) {
    errors.pan = 'Invalid PAN number';
  }

  return errors;
};