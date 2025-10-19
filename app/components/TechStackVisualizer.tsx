'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const techStacks = [
  {
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
    color: 'from-cyan-glow to-electric-blue',
    icon: '🧠'
  },
  {
    category: 'Python Fullstack',
    technologies: ['Django', 'Flask', 'FastAPI', 'PostgreSQL', 'Redis'],
    color: 'from-electric-blue to-purple-400',
    icon: '🐍'
  },
  {
    category: 'Java Enterprise',
    technologies: ['Spring Boot', 'Hibernate', 'Microservices', 'Kafka', 'Docker'],
    color: 'from-purple-400 to-green-400',
    icon: '☕'
  },
  {
    category: 'MERN Stack',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL'],
    color: 'from-green-400 to-cyan-glow',
    icon: '⚛️'
  },
  {
    category: 'Web Technologies',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'PWA'],
    color: 'from-cyan-glow to-electric-blue',
    icon: '🌐'
  }
]

export default function TechStackVisualizer() {
  const [activeStack, setActiveStack] = useState(3)

  return (
    <div className="w-full max-w-7xl mx-auto pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-20 xl:pt-12 xl:pb-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cyber text-center text-cyan-glow mb-8 sm:mb-12 md:mb-16 lg:mb-20"
      >
        Technology Expertise
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Tech Stack Categories */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 120, damping: 25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveStack(index)}
              className={`cursor-pointer p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl transition-smooth border ${
                activeStack === index 
                  ? 'glass-panel border-cyan-glow/70 shadow-cyber bg-cyan-glow/10' 
                  : 'holo-card border-cyan-glow/20 hover:border-cyan-glow/50 hover:bg-cyan-glow/5'
              }`}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{stack.icon}</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-cyber text-cyan-glow">{stack.category}</h3>
                  <p className="text-tech-gray/80 font-tech text-xs sm:text-sm md:text-base">
                    {stack.technologies.length} Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Visualization */}
        <div className="relative">
          <motion.div
            key={activeStack}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className={`glass-panel rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gradient-to-br ${techStacks[activeStack].color} relative overflow-hidden gpu-accelerated`}
          >
            {/* Holographic Effect */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ 
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(0,255,255,0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mr-3 sm:mr-4 md:mr-6">{techStacks[activeStack].icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-cyber text-white">
                  {techStacks[activeStack].category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {techStacks[activeStack].technologies.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 150, damping: 25 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-deep-navy/20 rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center transition-smooth cursor-pointer"
                  >
                    <span className="font-code text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scanning Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-white/50"
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}