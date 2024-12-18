import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, Palette } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/admin/projects">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold">Upcoming Projects</h2>
              <p className="text-gray-600 mt-2">Manage upcoming real estate projects</p>
            </div>
          </Link>

          <Link to="/admin/constructions">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Building className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold">Construction Projects</h2>
              <p className="text-gray-600 mt-2">Manage construction projects</p>
            </div>
          </Link>

          <Link to="/admin/designs">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Palette className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-xl font-semibold">Design Projects</h2>
              <p className="text-gray-600 mt-2">Manage design projects</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 