'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Code, Palette, Lightbulb, Heart, Target, Users, Award, BookOpen } from 'lucide-react';

export default function About() {
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get to know the person behind the code and designs
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Shubham Mitra, a passionate 2nd year Computer Science student with a deep love for 
                  creating beautiful, functional web experiences. My journey into the world of technology began 
                  with curiosity and has evolved into a genuine passion for frontend development and UI/UX design.
                </p>
                <p>
                  What started as simple HTML pages has grown into a comprehensive understanding of modern web 
                  technologies. I believe that great design and clean code go hand in hand, and I'm constantly 
                  learning new ways to bridge the gap between user needs and technical possibilities.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
                  projects, or working on personal projects that challenge my skills and creativity.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20" />
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Shubham Mitra</h4>
                  <p className="text-gray-300">Frontend Developer</p>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </motion.div>
          </div>

          {/* What I Do */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">What I Do</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Code,
                  title: 'Frontend Development',
                  description: 'Building responsive, interactive web applications using modern technologies like React, JavaScript, and Tailwind CSS.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Palette,
                  title: 'UI/UX Design',
                  description: 'Creating intuitive and beautiful user experiences through thoughtful design and user research.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Lightbulb,
                  title: 'Problem Solving',
                  description: 'Approaching challenges with creativity and technical expertise to find innovative solutions.',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.01, y: -5 }}
                  className="card hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-12">My Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Heart, name: 'Passion', description: 'I love what I do and it shows in my work' },
                { icon: Target, name: 'Growth', description: 'Always learning and improving my skills' },
                { icon: Users, name: 'Collaboration', description: 'Great things happen when we work together' },
                { icon: Award, name: 'Excellence', description: 'Striving for the highest quality in everything' },
                { icon: BookOpen, name: 'Learning', description: 'Continuously expanding my knowledge base' },
                { icon: Lightbulb, name: 'Innovation', description: 'Finding creative solutions to complex problems' }
              ].map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 card hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{value.name}</h4>
                  <p className="text-sm text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
