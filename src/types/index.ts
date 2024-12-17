export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Achievement {
  id: number;
  year: number;
  title: string;
  description: string;
}