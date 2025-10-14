'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GlobeAltIcon,
  CogIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  WifiIcon
} from '@heroicons/react/24/outline'

const portfolioSections = [
  {
    id: 'web',
    icon: GlobeAltIcon,
    title: 'Web Development',
    emoji: '🌐',
    description: 'We create modern, responsive, and high-performing websites that help brands make a strong digital impression. Our web projects combine aesthetic design, user-friendly interfaces, and strong backend logic to ensure seamless functionality across all devices.',
    focuses: [
      'Corporate & Portfolio Websites',
      'Educational Portals & LMS Platforms', 
      'E-commerce Websites',
      'CMS Solutions (WordPress, Strapi, Django)',
      'SEO & Performance Optimization'
    ],
    tagline: 'Each project is built to scale — blending creativity and code for measurable results.',
    available: true
  },
  {
    id: 'fullstack',
    icon: CogIcon,
    title: 'Full Stack Solutions',
    emoji: '⚙️',
    description: 'Our Full Stack projects integrate powerful backends with sleek, dynamic frontends — delivering complete, production-ready applications. We leverage technologies like React, Next.js, Node.js, and Django to build robust systems with intuitive user experiences.',
    focuses: [
      'Business Dashboards & Admin Panels',
      'SaaS Platforms',
      'Real-time Data Applications', 
      'Cloud-integrated Systems'
    ],
    tagline: 'From database to deployment — we handle the full lifecycle of development.',
    available: true
  },
  {
    id: 'ai',
    icon: CpuChipIcon,
    title: 'Artificial Intelligence & Machine Learning',
    emoji: '🧠',
    description: 'Innovation meets intelligence in our AI/ML projects. We develop systems that learn, analyze, and make intelligent decisions, empowering students and businesses to explore the power of automation and analytics.',
    focuses: [
      'Computer Vision (Face, Object, and Activity Detection)',
      'NLP-based Chatbots & Voice Assistants',
      'Predictive Analytics Models',
      'Recommendation Engines',
      'AI-Driven Automation Tools'
    ],
    tagline: 'Our AI projects are designed not just to impress — but to inspire innovation and critical thinking.',
    available: true
  },
  {
    id: 'mobile',
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Application Development',
    emoji: '📱',
    description: 'We design mobile-first, user-friendly applications that bring convenience and connectivity to your fingertips. Our apps are crafted for performance, usability, and security, ensuring a smooth experience across Android and iOS devices.',
    focuses: [
      'Cross-platform Apps (Flutter, React Native)',
      'Native Android Applications',
      'E-learning & Productivity Apps',
      'IoT-connected Mobile Interfaces'
    ],
    tagline: 'We turn ideas into mobile experiences that empower users and engage audiences.',
    available: false
  },
  {
    id: 'iot',
    icon: WifiIcon,
    title: 'Internet of Things (IoT)',
    emoji: '🌍',
    description: 'In our IoT projects, hardware meets software to create smart, connected solutions for modern challenges. We build intelligent systems that sense, communicate, and act — bringing automation into everyday life.',
    focuses: [
      'Smart Home & Smart City Systems',
      'Health Monitoring Devices',
      'Sensor-based Automation',
      'Cloud & Mobile Integration for IoT',
      'Real-time Data Visualization Dashboards'
    ],
    tagline: 'Our IoT innovations are designed to make technology more human — intuitive, responsive, and connected.',
    available: false
  }
]

export default function Portfolio() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-electric-cyan opacity-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute top-60 right-20 w-24 h-24 bg-purple-500 opacity-10" style={{animationDelay: '8s'}}></div>
        <div className="floating-orb absolute bottom-40 left-1/4 w-20 h-20 bg-pink-500 opacity-10" style={{animationDelay: '16s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-cyber font-bold mb-6 bg-gradient-to-r from-white via-electric-cyan to-purple-400 bg-clip-text text-transparent"
              animate={{ textShadow: ['0 0 20px rgba(0,255,255,0.5)', '0 0 40px rgba(168,85,247,0.5)', '0 0 20px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💼 Our Portfolio
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-purple-500 mx-auto mb-8"
              animate={{ scaleX: [1, 1.5, 1], boxShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 30px rgba(168,85,247,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-tech-gray max-w-5xl mx-auto leading-relaxed space-y-6"
          >
            <motion.p 
              className="text-2xl font-cyber text-cyan-glow mb-4"
              animate={{ textShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 20px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              A showcase of innovation, creativity, and real-world impact.
            </motion.p>
            <p className="font-tech">
              Every project we build at <span className="text-electric-cyan font-cyber font-semibold">Vignan TechSolutions</span> reflects our commitment to quality, technology, and transformation.
            </p>
            <p className="font-tech">
              From intuitive web applications to AI-driven systems, our portfolio demonstrates how we turn ideas into <span className="text-purple-400 font-semibold">working realities</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Portfolio Sections */}
        <div className="space-y-20">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-effect p-12 rounded-3xl relative overflow-hidden border border-cyan-glow/20 group">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ y: [0, 500, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {!section.available && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Section Header */}
                  <div className="flex items-center mb-8">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-electric-cyan to-purple-500 rounded-2xl flex items-center justify-center mr-6"
                    >
                      <section.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-4xl font-cyber text-cyan-glow mb-2"
                        animate={{ textShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 25px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {section.emoji} {section.title}
                      </motion.h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-tech-gray font-tech leading-relaxed mb-8 max-w-5xl">
                    {section.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-cyber text-electric-blue mb-6">We {section.id === 'fullstack' ? 'Build' : section.id === 'ai' ? 'Expertise Includes' : section.id === 'mobile' ? 'Specializations' : section.id === 'iot' ? 'Project Areas' : 'Focus On'}:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.focuses.map((focus, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 10 }}
                          className="flex items-center group"
                        >
                          <div className="w-3 h-3 bg-electric-cyan rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                          <span className="text-tech-gray font-tech text-lg">{focus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className="bg-gradient-to-r from-electric-cyan/10 to-purple-500/10 border border-electric-cyan/20 rounded-2xl p-6">
                    <p className="text-lg text-electric-cyan font-cyber font-semibold italic text-center">
                      {section.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="glass-effect p-16 rounded-3xl relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-50"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-cyber text-cyan-glow mb-6"
                  animate={{ textShadow: ['0 0 15px rgba(0,255,255,0.5)', '0 0 35px rgba(0,255,255,0.8)', '0 0 15px rgba(0,255,255,0.5)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Each project at Vignan TechSolutions tells a story
                </motion.h3>
                <motion.div 
                  className="w-20 h-1 bg-gradient-to-r from-electric-cyan to-purple-500 mx-auto mb-6"
                  animate={{ scaleX: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xl text-purple-400 mb-6 font-tech">
                  — of <span className="text-electric-cyan font-bold">innovation</span>, <span className="text-white font-bold">dedication</span>, and <span className="text-cyan-glow font-bold">transformative impact</span>.
                </p>
              </motion.div>
              
              <p className="text-xl text-tech-gray font-tech mb-12 max-w-4xl mx-auto leading-relaxed">
                Explore our work and discover how we're <span className="text-electric-cyan font-bold">shaping the future of technology</span>, 
                <span className="text-purple-400 font-bold">one project at a time</span>. Each solution represents our commitment to 
                <span className="text-cyan-glow font-bold">excellence and innovation</span>.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}