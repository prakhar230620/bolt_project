import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ Icon }) => {
  return (
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
  );
};

export default ServiceIcon;