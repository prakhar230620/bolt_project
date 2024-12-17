export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  completionDate: string;
  startingPrice: number;
  image: string;
  features: string[];
  amenities: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Property {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  images: string[];
  video?: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}