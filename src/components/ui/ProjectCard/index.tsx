import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectContent from './ProjectContent';

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <ProjectImage
        image={image}
        title={title}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <ProjectContent
        title={title}
        description={description}
      />
    </div>
  );
};

export default ProjectCard;