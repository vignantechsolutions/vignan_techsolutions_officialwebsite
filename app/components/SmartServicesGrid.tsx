'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import ComingSoonModal from './ComingSoonModal'
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  CogIcon, 
  PlayCircleIcon,
  SparklesIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    title: 'Final Year Project Packages',
    subtitle: 'AI, IoT, ML, Web, and Mobile Projects — Fully Developed with Report & Support',
    icon: <AcademicCapIcon className="w-8 h-8" />,
    color: 'from-cyan-glow to-electric-blue',
    features: ['Complete Source Code', 'Documentation', 'Presentation', '24/7 Support'],
    technologies: ['AI & ML', 'IoT', 'Blockchain', 'Cloud Computing', 'Mobile Apps'],
    gradient: 'bg-gradient-to-br from-cyan-glow/20 to-electric-blue/20'
  },
  {
    id: 2,
    title: 'Web Development & Maintenance',
    subtitle: 'Responsive websites and web applications with modern technologies',
    icon: <GlobeAltIcon className="w-8 h-8" />,
    color: 'from-electric-blue to-purple-400',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Maintenance'],
    technologies: ['React/Next.js', 'Django', 'Node.js', 'E-commerce', 'CMS'],
    gradient: 'bg-gradient-to-br from-electric-blue/20 to-purple-400/20'
  },
  {
    id: 3,
    title: 'Tech Solutions',
    subtitle: 'System integrations, app development, and automation tools',
    icon: <CogIcon className="w-8 h-8" />,
    color: 'from-purple-400 to-green-400',
    features: ['Custom Software', 'API Integration', 'Automation', 'Consulting'],
    technologies: ['Enterprise Apps', 'APIs', 'DevOps', 'Cloud Solutions', 'Integrations'],
    gradient: 'bg-gradient-to-br from-purple-400/20 to-green-400/20'
  },
  {
    id: 4,
    title: 'Online Tech Classes',
    subtitle: 'Live interactive sessions with industry experts and practical projects',
    icon: <PlayCircleIcon className="w-8 h-8" />,
    color: 'from-green-400 to-cyan-glow',
    features: ['Live Sessions', 'Recorded Classes', 'Certificates', 'Projects'],
    technologies: ['Python', 'Web Dev', 'Data Science', 'AI/ML', 'Mobile Dev'],
    gradient: 'bg-gradient-to-br from-green-400/20 to-cyan-glow/20'
  }
]

export default function SmartServicesGrid() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [comingSoonModal, setComingSoonModal] = useState({ isOpen: false, serviceTitle: '' })

  const handleComingSoon = (title: string) => {
    setComingSoonModal({ isOpen: true, serviceTitle: title })
  }

  return (
    <div className="max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-cyber text-cyan-glow mb-6">
          Our Services
        </h2>
        <p className="text-xl text-tech-gray/70 font-tech max-w-3xl mx-auto">
          Comprehensive tech solutions designed for students and professionals
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => setHoveredService(service.id)}
            onHoverEnd={() => setHoveredService(null)}
            className="group cursor-pointer"
          >
            <div className={`relative holo-card rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 ${
              hoveredService === service.id ? 'shadow-holo scale-105' : ''
            }`}>
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                animate={hoveredService === service.id ? {
                  background: [
                    service.gradient,
                    service.gradient.replace('/20', '/30'),
                    service.gradient
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-deep-navy`}>
                    {service.icon}
                  </div>
                  <motion.div
                    animate={hoveredService === service.id ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ChevronRightIcon className="w-6 h-6 text-cyan-glow" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-cyber text-cyan-glow mb-3">
                  {service.title}
                </h3>
                <p className="text-tech-gray/70 font-tech mb-6 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-cyber text-electric-blue mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-cyan-glow rounded-full"></div>
                        <span className="text-tech-gray font-tech text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-cyber text-electric-blue mb-3">Technologies/Domains</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hoveredService === service.id ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.9 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 bg-deep-navy/30 rounded-full text-xs font-code text-tech-gray border border-cyan-glow/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                {service.id === 1 ? (
                  <Link href="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold transition-all"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                ) : service.id === 2 ? (
                  <Link href="/web-development">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold transition-all"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleComingSoon(service.title)}
                    className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold transition-all"
                  >
                    Learn More
                  </motion.button>
                )}
              </div>

              {/* Holographic Scan Effect */}
              {hoveredService === service.id && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
                  animate={{ y: [0, 400, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>


      
      <ComingSoonModal 
        isOpen={comingSoonModal.isOpen} 
        onClose={() => setComingSoonModal({ isOpen: false, serviceTitle: '' })} 
        serviceTitle={comingSoonModal.serviceTitle}
      />
    </div>
  )
}