import React, { useState } from 'react';
import ServiceHero from '../../components/shared/ServiceHero';
import ProjectCard from '../../components/shared/ProjectCard';
import { designProjects } from '../../data/projects';

const Designs = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (projectId: string) => {
    setFavorites((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };
  return (
    <div className="pt-16">
      <ServiceHero
        title="NIR Designs & Solutions"
        description="Innovative designs for modern living"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isFavorite={favorites.includes(project.id)}
                onToggleFavorite={() => toggleFavorite(project.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Designs;