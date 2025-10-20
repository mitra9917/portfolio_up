'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { ExternalLink, Github, Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Task Management App',
      description: 'A full-featured task management application built with React and Tailwind CSS. Features include drag-and-drop functionality, real-time updates, and user authentication.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Firebase'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Complete UI/UX design for a modern e-commerce mobile application. Includes user research, wireframing, prototyping, and high-fidelity designs.',
      image: '/api/placeholder/400/300',
      tags: ['Figma', 'UI/UX', 'Prototyping', 'User Research'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with real-time data, interactive maps, and 7-day forecasts. Built with vanilla JavaScript and modern CSS.',
      image: '/api/placeholder/400/300',
      tags: ['JavaScript', 'CSS3', 'API Integration', 'Responsive'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Personal Blog',
      description: 'A modern blog platform with markdown support, syntax highlighting, and responsive design. Features include search, categories, and comments.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Markdown', 'Tailwind', 'Next.js'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Comprehensive dashboard design for data visualization and analytics. Focus on user experience and data accessibility.',
      image: '/api/placeholder/400/300',
      tags: ['Figma', 'Data Viz', 'Dashboard', 'UI/UX'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Memory Game',
      description: 'An interactive memory card game with multiple difficulty levels, score tracking, and smooth animations. Built with vanilla JavaScript.',
      image: '/api/placeholder/400/300',
      tags: ['JavaScript', 'CSS3', 'HTML5', 'Game'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of my work showcasing my skills in frontend development and UI/UX design
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl card hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500/20 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full btn-primary group-hover:scale-105 transition-transform">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
              <p className="text-gray-400 mb-6">
                I'm always working on new projects and open to collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Let's Collaborate
                </button>
                <button className="btn-secondary">
                  View My Skills
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
