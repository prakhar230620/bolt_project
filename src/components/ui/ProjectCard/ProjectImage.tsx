import React from 'react';
import { Heart } from 'lucide-react';

interface ProjectImageProps {
  image: string;
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  image,
  title,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <button
        onClick={onToggleFavorite}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart
          className={`h-5 w-5 ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`}
        />
      </button>
    </div>
  );
};

export default ProjectImage;