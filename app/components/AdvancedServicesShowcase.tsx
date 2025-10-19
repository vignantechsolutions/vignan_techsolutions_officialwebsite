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

const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: <GlobeAltIcon className="w-12 h-12" />,
    emoji: '🌐',
    description: 'Modern, responsive websites that make brands shine. Beautiful design meets powerful functionality.',
    focusAreas: [
      'Corporate Websites',
      'E-commerce Stores', 
      'Educational Portals',
      'CMS Solutions'
    ],
    tagline: 'Creativity + Code = Digital Excellence',
    color: 'from-cyan-glow to-electric-blue',
    status: 'available'
  },
  {
    id: 2,
    title: 'Full Stack Solutions',
    icon: <CogIcon className="w-12 h-12" />,
    emoji: '⚙️',
    description: 'Our Full Stack projects integrate powerful backends with sleek, dynamic frontends — delivering complete, production-ready applications. We leverage technologies like React, Next.js, Node.js, and Django to build robust systems with intuitive user experiences.',
    focusAreas: [
      'Business Dashboards & Admin Panels',
      'SaaS Platforms',
      'Real-time Data Applications', 
      'Cloud-integrated Systems'
    ],
    tagline: 'From database to deployment — we handle the full lifecycle of development.',
    color: 'from-electric-blue to-purple-400',
    status: 'available'
  },
  {
    id: 3,
    title: 'Artificial Intelligence & Machine Learning',
    icon: <CpuChipIcon className="w-12 h-12" />,
    emoji: '🧠',
    description: 'Innovation meets intelligence in our AI/ML projects. We develop systems that learn, analyze, and make intelligent decisions, empowering students and businesses to explore the power of automation and analytics.',
    focusAreas: [
      'Computer Vision (Face, Object, and Activity Detection)',
      'NLP-based Chatbots & Voice Assistants',
      'Predictive Analytics Models',
      'Recommendation Engines',
      'AI-Driven Automation Tools'
    ],
    tagline: 'Our AI projects are designed not just to impress — but to inspire innovation and critical thinking.',
    color: 'from-purple-400 to-green-400',
    status: 'available'
  },
  {
    id: 4,
    title: 'Python Full Stack',
    icon: <CogIcon className="w-12 h-12" />,
    emoji: '🐍',
    description: 'Complete web applications using Python frameworks with modern UI/UX. Powerful backend logic meets elegant frontend design.',
    focusAreas: [
      'Django Applications',
      'Flask Web Services',
      'FastAPI Development',
      'PostgreSQL Integration'
    ],
    tagline: 'Python Power + Modern Design = Scalable Solutions',
    color: 'from-green-400 to-cyan-glow',
    status: 'available'
  },
  {
    id: 5,
    title: 'Java Full Stack',
    icon: <CpuChipIcon className="w-12 h-12" />,
    emoji: '☕',
    description: 'Enterprise-grade applications with Spring Boot and modern frontend technologies. Robust, scalable solutions for business needs.',
    focusAreas: [
      'Spring Boot Applications',
      'Hibernate ORM',
      'MySQL Database',
      'Angular Frontend'
    ],
    tagline: 'Enterprise Strength + Modern Architecture = Business Success',
    color: 'from-cyan-glow to-electric-blue',
    status: 'available'
  }
]

export default function AdvancedServicesShowcase() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="max-w-7xl mx-auto py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-cyber text-cyan-glow mb-6">
          Our Expertise
        </h2>
        <p className="text-xl text-tech-gray/70 font-tech max-w-3xl mx-auto">
          Comprehensive technology solutions designed to transform ideas into reality
        </p>
      </motion.div>

      {/* Services Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setActiveService(index)}
            className={`relative px-6 py-3 rounded-2xl font-cyber text-sm transition-all hover:scale-105 active:scale-95 ${
              activeService === index 
                ? 'glass-panel border-cyan-glow/50 text-cyan-glow shadow-cyber' 
                : 'holo-card text-tech-gray/70 hover:text-cyan-glow'
            }`}
          >
            <span className="mr-2">{service.emoji}</span>
            {service.title}
            {service.status === 'coming-soon' && (
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-electric-blue text-deep-navy text-xs rounded-full font-code">
                Soon
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Active Service Display */}
      <div
        key={activeService}
        className="relative animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className={`glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br ${services[activeService].color}/10`}>
          {/* Holographic Background Effect */}
          <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${services[activeService].color}/10`} />

          <div className="relative z-10">
            {/* Service Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className={`p-4 rounded-3xl bg-gradient-to-r ${services[activeService].color} text-deep-navy`}>
                  {services[activeService].icon}
                </div>
                <div>
                  <h3 className="text-4xl font-cyber text-cyan-glow mb-2">
                    {services[activeService].emoji} {services[activeService].title}
                  </h3>
                  {services[activeService].status === 'coming-soon' && (
                    <span className="inline-block px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-cyber">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-tech-gray font-tech leading-relaxed mb-8">
              {services[activeService].description}
            </p>

            {/* Focus Areas */}
            <div className="mb-8">
              <h4 className="text-2xl font-cyber text-electric-blue mb-6">
                We Focus On:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {services[activeService].focusAreas.map((area, idx) => (
                  <div
                    key={area}
                    className="flex items-center space-x-3 p-3 rounded-xl holo-card hover:shadow-cyber transition-all"
                  >
                    <div className="w-3 h-3 bg-cyan-glow rounded-full animate-pulse"></div>
                    <span className="text-tech-gray font-tech">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-cyan-glow/10 to-electric-blue/10 border border-cyan-glow/20">
              <p className="text-lg font-tech italic text-cyan-glow">
                {services[activeService].tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-glow/20 to-electric-blue/20" />

          <div className="relative z-10">
            <h3 className="text-3xl font-cyber text-cyan-glow mb-4">
              Each project at Vignan TechSolutions tells a story
            </h3>
            <p className="text-xl text-tech-gray/70 font-tech mb-8">
              — of innovation, teamwork, and transformation.
            </p>
            <p className="text-lg text-tech-gray font-tech mb-8">
              Explore our work and discover how we're shaping the future of technology, one project at a time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}