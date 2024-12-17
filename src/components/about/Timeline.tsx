import React from 'react';
import { Achievement } from '../../types';

const achievements: Achievement[] = [
  {
    id: 1,
    year: 2018,
    title: 'Company Founded',
    description: 'Next Innovation was established with a vision to transform industries through technology.',
  },
  {
    id: 2,
    year: 2019,
    title: 'First Major Project',
    description: 'Successfully delivered AI-powered solutions to Fortune 500 companies.',
  },
  {
    id: 3,
    year: 2020,
    title: 'Global Expansion',
    description: 'Opened offices in major tech hubs across three continents.',
  },
  {
    id: 4,
    year: 2021,
    title: 'Innovation Award',
    description: 'Received the prestigious Global Innovation Excellence Award.',
  },
  {
    id: 5,
    year: 2022,
    title: 'Sustainable Tech Initiative',
    description: 'Launched green technology solutions for sustainable development.',
  },
  {
    id: 6,
    year: 2023,
    title: 'AI Research Center',
    description: 'Established state-of-the-art AI research and development center.',
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of our major milestones and achievements that have shaped our success story.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div
                    className={`${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    } p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                  >
                    <span className="text-secondary font-bold text-xl">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{achievement.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
                <div className="w-1/2 pl-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;