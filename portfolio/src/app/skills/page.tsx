'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Code, Palette, Database, Smartphone, Globe, Zap, Github, Figma, Square, Type, FileText, Layers, Server } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 85, icon: Square },
        { name: 'JavaScript', level: 90, icon: FileText },
        { name: 'TypeScript', level: 80, icon: Type },
        { name: 'HTML5', level: 95, icon: Layers },
        { name: 'CSS3', level: 88, icon: Layers },
      ]
    },
    {
      name: 'Design & UX',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 92, icon: Figma },
        { name: 'UI/UX Design', level: 85, icon: Palette },
        { name: 'Prototyping', level: 80, icon: Smartphone },
        { name: 'User Research', level: 75, icon: Globe },
      ]
    },
    {
      name: 'Tools & Others',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: Github },
        { name: 'Node.js', level: 70, icon: Server },
        { name: 'Database', level: 65, icon: Database },
        { name: 'Mobile Dev', level: 60, icon: Smartphone },
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: Square, color: 'text-blue-400' },
    { name: 'TypeScript', icon: Type, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FileText, color: 'text-yellow-400' },
    { name: 'HTML5', icon: Layers, color: 'text-orange-500' },
    { name: 'CSS3', icon: Layers, color: 'text-blue-600' },
    { name: 'Figma', icon: Figma, color: 'text-purple-500' },
    { name: 'GitHub', icon: Github, color: 'text-gray-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
  ];

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
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical abilities and design expertise
            </p>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="card hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">Technologies I Work With</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group text-center"
                >
                  <div className="w-16 h-16 card flex items-center justify-center mx-auto mb-3 group-hover:border-blue-400/50 transition-all duration-300">
                    <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Current Learning */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-4 h-4 text-white" />
                </div>
                Currently Learning
              </h3>
              <div className="space-y-4">
                {[
                  'Advanced React Patterns',
                  'Node.js & Express',
                  'MongoDB & Database Design',
                  'Advanced CSS Animations',
                  'Cloud Computing (AWS)',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Future Goals */}
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Future Goals
              </h3>
              <div className="space-y-4">
                {[
                  'Full-Stack Development',
                  'Mobile App Development',
                  'Cloud Computing (AWS/Azure)',
                  'Machine Learning Basics',
                  'Open Source Contributions',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mt-16"
          >
            <div className="card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
              <p className="text-gray-400 mb-6">
                I'm always excited to apply my skills to new challenges and learn from every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Let's Collaborate
                </button>
                <button className="btn-secondary">
                  View My Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
