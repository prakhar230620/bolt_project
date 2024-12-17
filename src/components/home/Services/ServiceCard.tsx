import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceIcon from './ServiceIcon';
import ServiceContent from './ServiceContent';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <ServiceIcon Icon={Icon} />
      <ServiceContent title={title} description={description} />
    </div>
  );
};

export default ServiceCard;