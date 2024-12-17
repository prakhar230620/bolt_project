import { Project } from '../types/services';

export const constructionProjects: Project[] = [
  {
    id: 'luxury-homes',
    title: 'Luxury Homes',
    description: 'Premium residential project with modern amenities',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'residential',
    details: {
      floorPlan: 'https://example.com/floorplan1.pdf',
      pricePerSqFt: 4500,
    },
  },
  {
    id: 'tech-park',
    title: 'Tech Park',
    description: 'State-of-the-art commercial complex',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'commercial',
    details: {
      floorPlan: 'https://example.com/floorplan2.pdf',
      pricePerSqFt: 6000,
    },
  },
];

export const designProjects: Project[] = [
  {
    id: 'modern-villa',
    title: 'Modern Villa',
    description: 'Contemporary design with sustainable features',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'residential',
    details: {
      design3d: 'https://example.com/3d-design1.pdf',
      pricePerSqFt: 3500,
    },
  },
  {
    id: 'boutique-hotel',
    title: 'Boutique Hotel',
    description: 'Luxury hospitality design project',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'hospitality',
    details: {
      design3d: 'https://example.com/3d-design2.pdf',
      pricePerSqFt: 5500,
    },
  },
];