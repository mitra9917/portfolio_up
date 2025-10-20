'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'work.shubham.dev@gmail.com',
      description: 'I\'ll get back to you within 24 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9917126279',
      description: 'Available for calls 9 AM - 6 PM',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, India',
      description: 'Open to remote work',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mitra9917', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shubham-kumar-mitra-335626336/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/mitra9917', label: 'Twitter' },
    { icon: Mail, href: 'mailto:work.shubham.dev@gmail.com', label: 'Email' },
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always excited to connect with fellow developers, designers, and potential collaborators
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-300 mb-1">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 card flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <h4 className="text-lg font-semibold text-white">Available for New Projects</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  I'm currently available for new projects and collaborations. Whether you need a frontend developer, 
                  UI/UX designer, or someone to help with your web development needs, I'd love to hear from you!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
