import React from 'react';

interface ProjectContentProps {
  title: string;
  description: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ title, description }) => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectContent;