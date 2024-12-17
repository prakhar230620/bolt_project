import React from 'react';
import { Project } from '../../types/projects';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{project.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Completion: {project.completionDate}</span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">
            Starting from ₹{project.startingPrice.toLocaleString()}
          </span>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;