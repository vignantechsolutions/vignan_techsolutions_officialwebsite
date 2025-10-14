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
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-cyber text-center text-cyan-glow mb-16"
      >
        Technology Expertise
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Tech Stack Categories */}
        <div className="space-y-4">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveStack(index)}
              className={`cursor-pointer p-6 rounded-xl transition-all border ${
                activeStack === index 
                  ? 'glass-panel border-cyan-glow/70 shadow-cyber bg-cyan-glow/10' 
                  : 'holo-card border-cyan-glow/20 hover:border-cyan-glow/50 hover:bg-cyan-glow/5'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{stack.icon}</div>
                <div>
                  <h3 className="text-xl font-cyber text-cyan-glow">{stack.category}</h3>
                  <p className="text-tech-gray/80 font-tech text-sm">
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
            transition={{ duration: 0.6 }}
            className={`glass-panel rounded-2xl p-8 bg-gradient-to-br ${techStacks[activeStack].color} relative overflow-hidden`}
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
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{techStacks[activeStack].icon}</div>
                <h3 className="text-2xl font-cyber text-white">
                  {techStacks[activeStack].category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {techStacks[activeStack].technologies.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-deep-navy/20 rounded-lg p-3 text-center"
                  >
                    <span className="font-code text-white text-sm font-semibold">
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