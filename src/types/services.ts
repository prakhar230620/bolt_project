import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  price: number;
  duration: string;
  features: PricingFeature[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details: {
    floorPlan?: string;
    design3d?: string;
    pricePerSqFt?: number;
  };
}

export interface ServiceFormData {
  fullName: string;
  email: string;
  mobile: string;
  address: string;
  aadharNumber: string;
  panNumber: string;
  documents: {
    photo?: File;
    aadharFront?: File;
    aadharBack?: File;
    panCard?: File;
  };
}