export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAadhar = (aadhar: string): boolean => {
  return /^\d{12}$/.test(aadhar);
};

export const validatePAN = (pan: string): boolean => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
};

export const validateMobile = (mobile: string): boolean => {
  return /^[6-9]\d{9}$/.test(mobile);
};

export const validatePassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};