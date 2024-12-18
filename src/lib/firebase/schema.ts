// Firebase Collection Schemas

// Users Collection
export interface UserSchema {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  company?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

// Finance Applications Collection
export interface FinanceApplicationSchema {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  mobile: string;
  aadhar: string;
  pan: string;
  status: 'pending' | 'approved' | 'rejected';
  documents: {
    photo?: string;
    aadharFront?: string;
    aadharBack?: string;
    panCard?: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Projects Collection
export interface ProjectSchema {
  id: string;
  title: string;
  description: string;
  images: string[];
  type: 'upcoming' | 'construction' | 'design';
  category: 'residential' | 'commercial' | 'hospitality';
  location?: string;
  price?: {
    min: number;
    max: number;
    currency: string;
  };
  details: {
    floorPlan?: string;
    design3d?: string;
    pricePerSqFt?: number;
    amenities?: string[];
    specifications?: {
      [key: string]: string;
    };
  };
  status: 'planning' | 'in-progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

// Package Subscriptions Collection
export interface PackageSubscriptionSchema {
  id: string;
  userId: string;
  packageId: string;
  packageType: 'smart' | 'brand' | 'finance';
  status: 'active' | 'expired' | 'cancelled';
  startDate: string;
  endDate: string;
  paymentDetails: {
    amount: number;
    transactionId: string;
    paymentMethod: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Contact Messages Collection
export interface ContactMessageSchema {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
  updatedAt: string;
}