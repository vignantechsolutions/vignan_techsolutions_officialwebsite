'use client'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  CogIcon, 
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

export default function ServicesOverview() {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Final Year Projects',
      description: 'Complete project development from concept to deployment',
      features: ['Custom Solutions', 'Documentation', 'Presentation Support']
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      features: ['React/Next.js', 'Full-Stack', 'E-commerce']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile application development',
      features: ['React Native', 'Flutter', 'Native Apps']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Science & AI',
      description: 'Machine learning and AI-powered solutions',
      features: ['ML Models', 'Data Analysis', 'AI Integration']
    },
    {
      icon: AcademicCapIcon,
      title: 'Online Classes',
      description: 'Live interactive coding sessions with experts',
      features: ['Live Sessions', 'Hands-on Projects', 'Career Support']
    },
    {
      icon: CogIcon,
      title: 'Tech Consulting',
      description: 'Technical guidance and architecture consulting',
      features: ['System Design', 'Code Review', 'Best Practices']
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber text-cyan-glow mb-6">
            Our Services
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-glow to-purple-500 mx-auto mb-6"
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl text-tech-gray font-tech max-w-3xl mx-auto">
            Comprehensive tech solutions for students, startups, and professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-purple-500 rounded-2xl flex items-center justify-center mb-6"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-cyber text-cyan-glow mb-4">
                  {service.title}
                </h3>
                
                <p className="text-tech-gray font-tech mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></div>
                      <span className="text-tech-gray/80 font-tech text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}