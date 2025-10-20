'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Shubham</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400">
                  Frontend Developer & UI/UX Designer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  I'm a passionate 2nd year Computer Science student specializing in creating 
                  beautiful, functional web experiences. I love turning ideas into reality through 
                  clean code and thoughtful design.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>work.shubham.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 8595673484</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Chennai, India</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/projects" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center hover:scale-105">
                  View My Work
                </Link>
                <Link href="/contact" className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 inline-flex items-center justify-center hover:scale-105">
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/mitra9917" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/shubham-kumar-mitra-335626336/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/mitra9917" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:work.shubham.dev@gmail.com" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20" />
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Shubham Mitra</h3>
                    <p className="text-gray-300">Frontend Developer</p>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Learning' },
              { number: '10+', label: 'Projects Built' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Passion' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}