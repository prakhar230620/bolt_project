import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Building, MapPin, Building2 } from 'lucide-react';

const RealEstateProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "Luxury Apartments - Sky Residences",
      description: "Premium 3 and 4 BHK apartments with panoramic city views and world-class amenities.",
      technologies: ["Modular Kitchen", "Smart Home", "Swimming Pool"],
      status: "in-progress",
      location: "Bandra West, Mumbai",
      timeline: "Expected Completion: Q4 2024",
      icon: <Home className="w-10 h-10 text-blue-600" />,
      price: "₹2.5 Crore - ₹4.5 Crore"
    },
    {
      id: 2,
      title: "Green Valley Villas",
      description: "Eco-friendly independent villas with sustainable design and private gardens.",
      technologies: ["Solar Panels", "Rainwater Harvesting", "Organic Landscaping"],
      status: "planning",
      location: "Lonavala, Maharashtra",
      timeline: "Launch: Q1 2025",
      icon: <Building2 className="w-10 h-10 text-green-600" />,
      price: "₹1.8 Crore - ₹3.2 Crore"
    },
    {
      id: 3,
      title: "Urban Commercial Complex",
      description: "Modern commercial spaces with flexible office layouts and premium retail zones.",
      technologies: ["High-speed Internet", "24/7 Security", "Parking Facilities"],
      status: "soon",
      location: "Pune IT Corridor",
      timeline: "Pre-launch Booking: Q2 2025",
      icon: <Building className="w-10 h-10 text-purple-600" />,
      price: "₹75 Lakh - ₹1.5 Crore per unit"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.status === activeFilter);

  const getStatusColor = (status) => {
    switch(status) {
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'soon': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Upcoming Real Estate Projects
        </h1>

        <div className="flex justify-center mb-8 space-x-4">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={activeFilter === 'in-progress' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('in-progress')}
          >
            In Progress
          </Button>
          <Button
            variant={activeFilter === 'planning' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('planning')}
          >
            Planning
          </Button>
          <Button
            variant={activeFilter === 'soon' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('soon')}
          >
            Coming Soon
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                {project.icon}
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <Badge className={`${getStatusColor(project.status)} mt-2`}>
                    {project.status === 'in-progress' ? 'In Progress' :
                     project.status === 'planning' ? 'Planning' :
                     'Coming Soon'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-red-500" />
                  <span>{project.location}</span>
                </div>
                <div className="font-bold text-xl text-green-700">
                  {project.price}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {project.timeline}
                </span>
                <Button variant="outline">View Project Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateProjects;