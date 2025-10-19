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


      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
            <div className={`relative holo-card rounded-2xl p-6 h-full overflow-hidden ${
              hoveredService === service.id ? 'shadow-holo' : ''
            }`}>
              {/* Animated Background */}
              <div className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-deep-navy`}>
                    {service.icon}
                  </div>
                  <div className={`transition-transform duration-300 ${
                    hoveredService === service.id ? 'rotate-90' : ''
                  }`}>
                    <ChevronRightIcon className="w-6 h-6 text-cyan-glow" />
                  </div>
                </div>

                <h3 className="text-xl font-cyber text-cyan-glow mb-2">
                  {service.title}
                </h3>
                <p className="text-tech-gray/70 font-tech mb-4 text-sm leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-deep-navy/30 rounded-full text-xs font-code text-tech-gray border border-cyan-glow/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                {service.id === 1 ? (
                  <Link href="/final-year-projects">
                    <button className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold">
                      Learn More
                    </button>
                  </Link>
                ) : service.id === 2 ? (
                  <Link href="/web-development">
                    <button className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold">
                      Learn More
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleComingSoon(service.title)}
                    className="mt-6 w-full neon-btn py-3 rounded-xl font-semibold"
                  >
                    Learn More
                  </button>
                )}
              </div>


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