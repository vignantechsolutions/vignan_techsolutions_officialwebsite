'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import ServiceWizard from './ServiceWizard'
import ComingSoonModal from './ComingSoonModal'
import { 
  CpuChipIcon, 
  GlobeAltIcon, 
  CogIcon, 
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CpuChipIcon,
    title: "Final Year Project Packages",
    description: "AI, IoT, ML, Web, and Mobile Projects — Fully Developed with Report & Support",
    features: ["Complete Source Code", "Documentation", "Presentation", "24/7 Support"],
    domains: ["AI & ML", "IoT", "Blockchain", "Cloud Computing", "Mobile Apps"]
  },
  {
    icon: GlobeAltIcon,
    title: "Web Development & Maintenance",
    description: "Responsive websites and web applications with modern technologies",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Maintenance"],
    domains: ["React/Next.js", "Django", "Node.js", "E-commerce", "CMS"]
  },
  {
    icon: CogIcon,
    title: "Tech Solutions",
    description: "System integrations, app development, and automation tools",
    features: ["Custom Software", "API Integration", "Automation", "Consulting"],
    domains: ["Enterprise Apps", "APIs", "DevOps", "Cloud Solutions", "Integrations"]
  },
  {
    icon: AcademicCapIcon,
    title: "Online Tech Classes",
    description: "Live interactive sessions with industry experts and practical projects",
    features: ["Live Sessions", "Recorded Classes", "Certificates", "Projects"],
    domains: ["Python", "Web Dev", "Data Science", "AI/ML", "Mobile Dev"]
  }
]

export default function Services() {
  const [showWizard, setShowWizard] = useState(false)
  const [comingSoonModal, setComingSoonModal] = useState({ isOpen: false, serviceTitle: '' })

  const handleLearnMore = (index: number, title: string) => {
    if (index === 2 || index === 3) { // Tech Solutions or Online Tech Classes
      setComingSoonModal({ isOpen: true, serviceTitle: title })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-electric-cyan">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive tech solutions tailored for students, startups, and enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-2xl group cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-12 h-12 text-electric-cyan mr-4" />
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <SparklesIcon className="w-5 h-5 text-electric-cyan mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <ArrowRightIcon className="w-4 h-4 text-electric-cyan mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies/Domains</h4>
                <div className="flex flex-wrap gap-2">
                  {service.domains.map((domain, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-electric-cyan/20 text-electric-cyan rounded-full text-sm border border-electric-cyan/30"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
              
              {index === 0 ? (
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-electric-cyan to-royal-blue text-white py-3 rounded-full font-semibold group-hover:shadow-lg group-hover:shadow-electric-cyan/25 transition-all"
                  >
                    Learn More
                  </motion.button>
                </Link>
              ) : index === 1 ? (
                <Link href="/web-development">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-electric-cyan to-royal-blue text-white py-3 rounded-full font-semibold group-hover:shadow-lg group-hover:shadow-electric-cyan/25 transition-all"
                  >
                    Learn More
                  </motion.button>
                </Link>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLearnMore(index, service.title)}
                  className="w-full bg-gradient-to-r from-electric-cyan to-royal-blue text-white py-3 rounded-full font-semibold group-hover:shadow-lg group-hover:shadow-electric-cyan/25 transition-all"
                >
                  Learn More
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Service Selector Wizard CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Not sure which service you need?</h3>
            <p className="text-gray-300 mb-6">Use our interactive service selector to find the perfect solution for your needs</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #06B6D4" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWizard(true)}
              className="bg-electric-cyan text-dark-gray px-8 py-4 rounded-full font-semibold text-lg neon-glow"
            >
              Start Service Wizard
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <ServiceWizard isOpen={showWizard} onClose={() => setShowWizard(false)} />
      <ComingSoonModal 
        isOpen={comingSoonModal.isOpen} 
        onClose={() => setComingSoonModal({ isOpen: false, serviceTitle: '' })} 
        serviceTitle={comingSoonModal.serviceTitle}
      />
    </section>
  )
}