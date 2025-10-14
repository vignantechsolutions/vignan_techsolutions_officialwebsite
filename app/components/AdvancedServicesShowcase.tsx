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
    description: 'We create modern, responsive, and high-performing websites that help brands make a strong digital impression. Our web projects combine aesthetic design, user-friendly interfaces, and strong backend logic to ensure seamless functionality across all devices.',
    focusAreas: [
      'Corporate & Portfolio Websites',
      'Educational Portals & LMS Platforms', 
      'E-commerce Websites',
      'CMS Solutions (WordPress, Strapi, Django)',
      'SEO & Performance Optimization'
    ],
    tagline: 'Each project is built to scale — blending creativity and code for measurable results.',
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
    title: 'Mobile Application Development',
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    emoji: '📱',
    description: 'We design mobile-first, user-friendly applications that bring convenience and connectivity to your fingertips. Our apps are crafted for performance, usability, and security, ensuring a smooth experience across Android and iOS devices.',
    focusAreas: [
      'Cross-platform Apps (Flutter, React Native)',
      'Native Android Applications',
      'E-learning & Productivity Apps',
      'IoT-connected Mobile Interfaces'
    ],
    tagline: 'We turn ideas into mobile experiences that empower users and engage audiences.',
    color: 'from-green-400 to-cyan-glow',
    status: 'coming-soon'
  },
  {
    id: 5,
    title: 'Internet of Things (IoT)',
    icon: <WifiIcon className="w-12 h-12" />,
    emoji: '🌍',
    description: 'In our IoT projects, hardware meets software to create smart, connected solutions for modern challenges. We build intelligent systems that sense, communicate, and act — bringing automation into everyday life.',
    focusAreas: [
      'Smart Home & Smart City Systems',
      'Health Monitoring Devices',
      'Sensor-based Automation',
      'Cloud & Mobile Integration for IoT',
      'Real-time Data Visualization Dashboards'
    ],
    tagline: 'Our IoT innovations are designed to make technology more human — intuitive, responsive, and connected.',
    color: 'from-cyan-glow to-electric-blue',
    status: 'coming-soon'
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
          <motion.button
            key={service.id}
            onClick={() => setActiveService(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-3 rounded-2xl font-cyber text-sm transition-all ${
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
          </motion.button>
        ))}
      </div>

      {/* Active Service Display */}
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative"
      >
        <div className={`glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden bg-gradient-to-br ${services[activeService].color}/10`}>
          {/* Holographic Background Effect */}
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              background: [
                `radial-gradient(circle at 20% 20%, ${services[activeService].color.split(' ')[1]}/30 0%, transparent 70%)`,
                `radial-gradient(circle at 80% 80%, ${services[activeService].color.split(' ')[3]}/30 0%, transparent 70%)`,
                `radial-gradient(circle at 20% 20%, ${services[activeService].color.split(' ')[1]}/30 0%, transparent 70%)`
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative z-10">
            {/* Service Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className={`p-4 rounded-3xl bg-gradient-to-r ${services[activeService].color} text-deep-navy`}
                >
                  {services[activeService].icon}
                </motion.div>
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-tech-gray font-tech leading-relaxed mb-8"
            >
              {services[activeService].description}
            </motion.p>

            {/* Focus Areas */}
            <div className="mb-8">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-cyber text-electric-blue mb-6"
              >
                We Focus On:
              </motion.h4>
              <div className="grid md:grid-cols-2 gap-4">
                {services[activeService].focusAreas.map((area, idx) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-xl holo-card hover:shadow-cyber transition-all"
                  >
                    <div className="w-3 h-3 bg-cyan-glow rounded-full animate-pulse"></div>
                    <span className="text-tech-gray font-tech">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-r from-cyan-glow/10 to-electric-blue/10 border border-cyan-glow/20"
            >
              <p className="text-lg font-tech italic text-cyan-glow">
                {services[activeService].tagline}
              </p>
            </motion.div>
          </div>

          {/* Scanning Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
            animate={{ y: [0, 500, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-panel rounded-3xl p-8 max-w-4xl mx-auto relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'conic-gradient(from 0deg, rgba(0,255,255,0.3), rgba(0,89,255,0.3), rgba(168,85,247,0.3), rgba(0,255,255,0.3))',
                'conic-gradient(from 180deg, rgba(0,255,255,0.3), rgba(0,89,255,0.3), rgba(168,85,247,0.3), rgba(0,255,255,0.3))',
                'conic-gradient(from 0deg, rgba(0,255,255,0.3), rgba(0,89,255,0.3), rgba(168,85,247,0.3), rgba(0,255,255,0.3))'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

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