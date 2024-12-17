import React from 'react';
import { Heart } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={onToggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;