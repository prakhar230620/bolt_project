import React, { useState } from 'react';
import Input from '../../ui/Input';
import { FileUpload } from '../../ui/FileUpload';
import Button from '../../ui/Button';

interface ProjectFormProps {
  type: 'upcoming' | 'construction' | 'design';
  onSubmit: (data: any) => void;
  initialData?: any;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ type, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    location: '',
    price: '',
    images: [],
    status: 'planning',
    technologies: [],
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Project Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-gray-300"
          rows={4}
          required
        />
      </div>

      <Input
        label="Location"
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        required
      />

      <Input
        label="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />

      <FileUpload
        label="Project Images"
        accept="image/*"
        multiple
        onChange={(files) => {
          if (files) {
            setFormData({ ...formData, images: Array.from(files) });
          }
        }}
      />

      <Button type="submit" variant="primary">
        {initialData ? 'Update Project' : 'Add Project'}
      </Button>
    </form>
  );
};

export default ProjectForm; 