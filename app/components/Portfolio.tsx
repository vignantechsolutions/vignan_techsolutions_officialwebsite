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
    id: 'projects',
    icon: CpuChipIcon,
    title: 'Final Year Projects',
    emoji: '🎓',
    description: 'Complete project packages for engineering, BCA, and MCA students. AI, ML, Web, and Mobile projects with full documentation and support.',
    focuses: [
      'AI & Machine Learning Projects',
      'Python Full Stack Applications',
      'Java Enterprise Solutions',
      'Web Development Projects',
      'MERN Stack Applications'
    ],
    tagline: 'Empowering students with industry-ready projects and comprehensive support.',
    available: true
  },
  {
    id: 'web',
    icon: GlobeAltIcon,
    title: 'Web Development',
    emoji: '🌐',
    description: 'Modern, responsive websites that make brands shine. Beautiful design meets powerful functionality for businesses and startups.',
    focuses: [
      'Corporate Websites',
      'E-commerce Stores',
      'Educational Portals',
      'CMS Solutions',
      'SEO Optimization'
    ],
    tagline: 'Creativity + Code = Digital Excellence',
    available: true
  },
  {
    id: 'fullstack',
    icon: CogIcon,
    title: 'Full Stack Development',
    emoji: '⚙️',
    description: 'Complete web applications using modern frameworks. Python Django, Java Spring Boot, and MERN stack solutions for scalable business needs.',
    focuses: [
      'Django Applications',
      'Spring Boot Systems',
      'React.js Frontends',
      'Database Integration',
      'API Development'
    ],
    tagline: 'End-to-end solutions from database to deployment.',
    available: true
  },
  {
    id: 'ai',
    icon: CpuChipIcon,
    title: 'AI & Machine Learning',
    emoji: '🧠',
    description: 'Intelligent systems that learn and adapt. Computer vision, NLP, and predictive analytics solutions for modern challenges.',
    focuses: [
      'Computer Vision Systems',
      'NLP Chatbots',
      'Predictive Analytics',
      'Recommendation Engines',
      'Automation Tools'
    ],
    tagline: 'Building intelligent solutions that inspire innovation.',
    available: true
  },
  {
    id: 'training',
    icon: DevicePhoneMobileIcon,
    title: 'Online Tech Classes',
    emoji: '📚',
    description: 'Live interactive sessions with industry experts. Practical training in Python, Web Development, Data Science, and AI/ML technologies.',
    focuses: [
      'Python Programming',
      'Web Development',
      'Data Science Training',
      'AI/ML Courses',
      'Live Project Sessions'
    ],
    tagline: 'Learn from experts, build real projects, advance your career.',
    available: false
  },
  {
    id: 'consulting',
    icon: WifiIcon,
    title: 'Tech Consulting',
    emoji: '💡',
    description: 'Strategic technology guidance for businesses. System architecture, digital transformation, and automation solutions tailored to your needs.',
    focuses: [
      'System Architecture',
      'Digital Transformation',
      'Process Automation',
      'Technology Strategy',
      'Performance Optimization'
    ],
    tagline: 'Strategic guidance for your digital transformation journey.',
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className="glass-effect p-6 rounded-2xl relative overflow-hidden border border-cyan-glow/20 group-hover:border-cyan-glow/40 transition-all duration-500 h-full">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.1) 0%, transparent 50%)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Holographic Scan Effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ y: [0, 300, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {!section.available && (
                  <motion.div 
                    className="absolute top-4 right-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold border border-yellow-500/30">
                      Soon
                    </span>
                  </motion.div>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-electric-cyan/25"
                    >
                      <section.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xl font-cyber text-cyan-glow mb-1"
                        animate={{ textShadow: ['0 0 5px rgba(0,255,255,0.5)', '0 0 15px rgba(0,255,255,0.8)', '0 0 5px rgba(0,255,255,0.5)'] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {section.emoji} {section.title}
                      </motion.h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-tech-gray font-tech leading-relaxed mb-4 flex-1">
                    {section.description.length > 120 ? section.description.substring(0, 120) + '...' : section.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-cyber text-electric-blue mb-2">Key Areas:</h4>
                    <div className="space-y-1">
                      {section.focuses.slice(0, 3).map((focus, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-xs text-tech-gray"
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-electric-cyan rounded-full mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                          <span>{focus}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <motion.div
                    className="mt-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-center py-2 px-4 rounded-lg text-xs font-semibold ${
                      section.available 
                        ? 'bg-gradient-to-r from-electric-cyan/20 to-purple-500/20 text-electric-cyan border border-electric-cyan/30' 
                        : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {section.available ? '✨ Available Now' : '🚀 Coming Soon'}
                    </div>
                  </motion.div>
                </div>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-electric-cyan rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
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