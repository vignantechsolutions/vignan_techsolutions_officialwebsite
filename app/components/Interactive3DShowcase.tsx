'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Platform',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Scikit-learn'],
    description: 'Advanced ML system for disease prediction, medical image analysis, and personalized treatment recommendations using deep learning',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 2,
    title: 'Advanced E-Commerce Platform',
    tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
    description: 'Full-stack e-commerce solution with real-time inventory, payment gateway integration, and advanced analytics dashboard',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 3,
    title: 'Microservices Banking System',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes'],
    description: 'Enterprise-grade banking platform with microservices architecture, real-time transactions, and advanced security protocols',
    color: 'from-purple-500 to-cyan-400'
  },
  {
    id: 4,
    title: 'Real-Time Collaboration Platform',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    description: 'MERN stack application with live video calls, real-time document editing, and team collaboration features',
    color: 'from-cyan-400 to-green-400'
  }
]

export default function Interactive3DShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

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
    <div className="relative w-full max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl sm:text-4xl font-cyber text-center text-cyan-glow mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Projects
      </motion.h2>

      <div className="relative flex items-center justify-center perspective-1000">
        {/* Enhanced Navigation Buttons */}
        <motion.button
          onClick={prevProject}
          whileHover={{ scale: 1.2, x: -10, rotateY: -15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 z-20 p-4 rounded-full holo-card border-2 border-cyan-glow/50 text-cyan-glow hover:shadow-cyber transition-all"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </motion.button>

        <motion.button
          onClick={nextProject}
          whileHover={{ scale: 1.2, x: 10, rotateY: 15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 z-20 p-4 rounded-full holo-card border-2 border-cyan-glow/50 text-cyan-glow hover:shadow-cyber transition-all"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </motion.button>

        {/* Advanced 3D Project Card */}
        <div className="w-80 h-96 perspective-1000">
          <motion.div
            className="relative w-full h-full preserve-3d cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            whileHover={{ 
              rotateY: isFlipped ? 185 : 5,
              rotateX: 5,
              scale: 1.05,
              z: 100
            }}
            animate={{
              rotateY: isFlipped ? 180 : 0,
              rotateX: 0
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-glow rounded-full opacity-60"
                animate={{
                  x: [0, 50, -30, 0],
                  y: [0, -40, 30, 0],
                  scale: [1, 1.5, 0.8, 1]
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${10 + i * 15}%`
                }}
              />
            ))}

            {/* Enhanced Front Face */}
            <div 
              className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br backface-hidden overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${currentProject.color.replace('from-', '').replace(' to-', ', ')})`,
                backfaceVisibility: 'hidden',
                transform: 'rotateY(0deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 255, 255, 0.4), 0 0 0 1px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <motion.h3 
                    className="text-xl font-cyber text-white mb-4 drop-shadow-lg"
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
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-semibold border border-white/30"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                <div className="text-center">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      🚀
                    </motion.div>
                  </motion.div>
                  <p className="text-white/90 text-sm font-semibold">Click to explore</p>
                </div>
              </div>

              {/* Enhanced Holographic Effects */}
              <motion.div
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                animate={{ y: [0, 384, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 blur-lg"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Enhanced Back Face */}
            <div 
              className="absolute inset-0 w-full h-full rounded-2xl holo-card border-2 border-cyan-glow/50 p-8 backface-hidden overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Animated Circuit Pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-full bg-cyan-glow"
                    animate={{ opacity: [0.1, 0.8, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    style={{ left: `${12.5 * (i + 1)}%` }}
                  />
                ))}
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center text-center">
                <motion.h3 
                  className="text-2xl font-cyber text-cyan-glow mb-6"
                  key={`back-title-${currentProject.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Project Details
                </motion.h3>
                
                <motion.p 
                  className="text-tech-gray leading-relaxed mb-8 text-sm"
                  key={`desc-${currentProject.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.description}
                </motion.p>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowMessage(true)
                    setTimeout(() => setShowMessage(false), 3000)
                  }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-btn px-6 py-3 rounded-xl font-cyber text-sm"
                >
                  Explore Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Project Indicators */}
      <div className="flex justify-center mt-8 space-x-4">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsFlipped(false)
            }}
            className={`relative w-4 h-4 rounded-full transition-all ${
              idx === currentIndex 
                ? 'bg-cyan-glow shadow-cyber' 
                : 'bg-tech-gray/30 hover:bg-tech-gray/50'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
          >
            {idx === currentIndex && (
              <motion.div
                className="absolute -inset-1 rounded-full bg-cyan-glow/30 blur-sm"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Message Box */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-4 right-4 bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg shadow-lg z-50"
          >
            Project details will be updated soon...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}