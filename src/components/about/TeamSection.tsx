import React from 'react';
import { TeamMember } from '../../types';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Alexandra Chen',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    bio: 'Visionary leader with 15+ years in tech innovation',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    bio: 'Tech expert specializing in AI and machine learning',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    bio: 'Innovation strategist with a passion for emerging tech',
  },
  {
    id: 4,
    name: 'James Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    bio: 'Full-stack developer with expertise in cloud solutions',
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the innovative minds behind Next Innovation's success. Our diverse team brings together
            expertise from various fields to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {[Twitter, Linkedin, Github].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;