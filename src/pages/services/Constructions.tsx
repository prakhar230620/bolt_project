import React, { useState } from 'react';
import ServiceHero from '../../components/shared/ServiceHero';
import ProjectCard from '../../components/shared/ProjectCard';
import { constructionProjects } from '../../data/projects';

const Constructions = () => {
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
        title="NIR Constructions"
        description="Building excellence, delivering dreams"
        image="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {constructionProjects.map((project) => (
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

export default Constructions;