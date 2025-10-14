'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Computer Vision Disease Detection',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    description: 'AI-powered medical diagnosis system using deep learning for X-ray and MRI analysis',
    color: 'from-cyan-glow to-electric-blue'
  },
  {
    id: 2,
    title: 'Real-Time Stock Trading Platform',
    tech: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    description: 'Full-stack trading platform with real-time data, portfolio management, and ML predictions',
    color: 'from-electric-blue to-purple-500'
  },
  {
    id: 3,
    title: 'Enterprise Resource Planning System',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    description: 'Comprehensive ERP solution with microservices architecture and advanced analytics',
    color: 'from-purple-500 to-cyan-glow'
  },
  {
    id: 4,
    title: 'AI-Powered Social Media Analytics',
    tech: ['React', 'Node.js', 'MongoDB', 'Python'],
    description: 'MERN stack application with sentiment analysis and trend prediction using ML',
    color: 'from-cyan-glow to-green-400'
  },
  {
    id: 5,
    title: 'Smart City Traffic Management',
    tech: ['Next.js', 'TypeScript', 'WebRTC', 'TensorFlow.js'],
    description: 'Real-time traffic optimization using computer vision and predictive algorithms',
    color: 'from-green-400 to-electric-blue'
  },
  {
    id: 6,
    title: 'Cryptocurrency Exchange Platform',
    tech: ['Java', 'Spring Security', 'Kafka', 'React'],
    description: 'High-frequency trading platform with advanced security and real-time processing',
    color: 'from-electric-blue to-cyan-glow'
  }
]

export default function Interactive3DShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsFlipped(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsFlipped(false)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20">
      <h2 className="text-4xl font-cyber text-center text-cyan-glow mb-12">
        Featured Projects
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Navigation Buttons */}
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 z-10 p-3 rounded-full glass-panel border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 z-10 p-3 rounded-full glass-panel border border-cyan-glow/30 text-cyan-glow hover:bg-cyan-glow/10 transition-all"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </motion.button>

        {/* 3D Project Card */}
        <div className="perspective-1000 w-80 h-96">
          <motion.div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: isFlipped ? 185 : 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Front Face */}
            <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${currentProject.color} p-8 backface-hidden shadow-holo`}>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className="text-2xl font-cyber text-deep-navy mb-4"
                    key={`title-${currentProject.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentProject.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    key={`tech-${currentProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentProject.tech.map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-deep-navy/20 rounded-full text-xs font-code text-deep-navy"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-deep-navy/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      🚀
                    </motion.div>
                  </div>
                  <p className="text-deep-navy/80 text-sm">Click to flip</p>
                </div>
              </div>

              {/* Holographic scan line */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-white/50"
                animate={{ y: [0, 384, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Back Face */}
            <div className="absolute inset-0 w-full h-full rounded-2xl glass-panel border border-cyan-glow/30 p-8 rotate-y-180 backface-hidden">
              <div className="h-full flex flex-col justify-center text-center">
                <motion.h3 
                  className="text-xl font-cyber text-cyan-glow mb-6"
                  key={`back-title-${currentProject.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Project Details
                </motion.h3>
                
                <motion.p 
                  className="text-tech-gray font-tech leading-relaxed mb-8"
                  key={`desc-${currentProject.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.description}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-btn px-6 py-3 rounded-lg font-semibold"
                >
                  View Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsFlipped(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-cyan-glow shadow-cyber' : 'bg-tech-gray/30'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  )
}