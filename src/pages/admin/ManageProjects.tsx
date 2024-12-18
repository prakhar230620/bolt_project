import React, { useState, useEffect } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import ProjectForm from '../../components/admin/ProjectForm';
import { createProject, updateProject, deleteProject, getProjectsByType } from '../../lib/firebase/projects';

const ManageProjects = ({ type = 'upcoming' }) => {
  const [projects, setProjects] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    loadProjects();
  }, [type]);

  const loadProjects = async () => {
    try {
      const projectsList = await getProjectsByType(type);
      setProjects(projectsList);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const handleAddProject = async (data, images) => {
    try {
      await createProject({ ...data, type }, images);
      loadProjects();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleEditProject = async (data, images) => {
    try {
      await updateProject(editingProject.id, { ...data, type }, images);
      loadProjects();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Projects</h1>
          <Button onClick={() => setIsAddingNew(true)}>Add New Project</Button>
        </div>

        {(isAddingNew || editingProject) && (
          <Card className="mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            <ProjectForm
              type="upcoming"
              onSubmit={editingProject ? handleEditProject : handleAddProject}
              initialData={editingProject}
            />
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setEditingProject(project)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProjects; 