'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { GraduationCap, Briefcase, Award, Download, Calendar, MapPin } from 'lucide-react';

export default function Resume() {
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
              My <span className="gradient-text">Resume</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my education, experience, and achievements
            </p>

            {/* Download Resume Button */}
            <a
              href="/assets/myCV.pdf" // 👉 Replace this with your actual resume link
              target="_blank"              // 👉 Opens the resume in a new tab
              rel="noopener noreferrer"    // 🔒 Security best practice
              download                     // 💾 Triggers browser download
              className="btn-primary inline-flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>


          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    degree: 'Bachelor of Technology in Computer Science',
                    school: 'VIT CHENNAI',
                    period: '2024 - Present',
                    location: 'Chennai, India',
                    gpa: 'CGPA: 8.87',
                    description: 'Currently pursuing my undergraduate degree with focus on software development, algorithms, and computer science fundamentals.'
                  },
                  {
                    degree: 'Higher Secondary Education',
                    school: 'Hartmann College (ICSE affiliated)',
                    period: '2020 - 2022',
                    location: 'Bareilly, India',
                    gpa: 'Percentage: 87.6%',
                    description: 'focusing on science and mathematics.'
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                        <p className="text-blue-400 font-medium">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{edu.period}</p>
                        <p className="text-sm text-gray-500">{edu.gpa}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Experience</h2>
              </div>

              <div className="space-y-6">
                {[
                  // {
                  //   title: 'Frontend Developer Intern',
                  //   company: 'Tech Company',
                  //   period: 'Summer 2024',
                  //   location: 'Remote',
                  //   description: 'Developed responsive web applications using React and modern JavaScript. Collaborated with design team to implement UI/UX designs.',
                  //   achievements: ['Built 3+ web applications', 'Improved user experience by 40%', 'Collaborated with cross-functional teams']
                  // },
                  {
                    title: 'Freelance Frontend Developer',
                    company: 'Self-Employed',
                    period: '2025 - Present',
                    location: 'Remote',
                    description: 'Creating custom websites and web applications for small businesses and individuals.',
                    achievements: [/*'Completed 10+ projects', 'Maintained 100% client satisfaction', */'Developed custom solutions']
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{exp.period}</p>
                        <p className="text-sm text-gray-500">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Key Knowledege learnt</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Web Development Fundamentals',
                  issuer: 'Online Platform-YT-SuperSimpleDev',
                  date: '2024',
                  description: 'Comprehensive course covering HTML, CSS, JavaScript, and modern web development practices.'
                },
                {
                  title: 'React Development',
                  issuer: 'Online Platform-YT-SuperSimpleDev',
                  date: '2025',
                  description: 'Advanced React concepts including hooks, state management, and component architecture.'
                },
                {
                  title: 'UI/UX Design Principles',
                  issuer: 'Figma',
                  date: '2025',
                  description: 'User-centered design principles, wireframing, prototyping, and design thinking methodology.'
                },
                {
                  title: 'Academic Excellence',
                  issuer: 'VIT University',
                  date: '2024',
                  description: 'Recognition for outstanding academic performance and leadership in computer science studies.'
                },
                // {
                //   title: 'Hackathon Winner',
                //   issuer: 'Tech Competition',
                //   date: '2023',
                //   description: 'First place in university hackathon for innovative web application development.'
                // },
                // {
                //   title: 'Open Source Contributor',
                //   issuer: 'GitHub',
                //   date: '2023 - Present',
                //   description: 'Active contributor to open source projects, helping improve developer tools and libraries.'
                // }
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-green-400 font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
