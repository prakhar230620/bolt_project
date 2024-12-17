import React from 'react';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/projects/ProjectCard';
import { Building } from 'lucide-react';

const Projects = () => {
  const { projects, loading } = useProjects();

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Projects</h1>
          <p className="text-xl max-w-3xl">
            Discover our latest and upcoming projects that are shaping the future of real estate
            and innovation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">No Projects Available</h3>
              <p className="text-gray-500">Check back soon for new projects</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;