export interface FinanceFormData {
  fullName: string;
  email: string;
  mobile: string;
  aadhar: string;
  pan: string;
}

export interface FormState {
  values: FinanceFormData;
  errors: Partial<Record<keyof FinanceFormData, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FinanceFormResponse {
  success: boolean;
  error?: string;
}