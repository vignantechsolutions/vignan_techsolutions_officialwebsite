'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  CodeBracketIcon, 
  DocumentTextIcon, 
  PresentationChartLineIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const projectPackages = [
  {
    id: 1,
    title: "AI & Machine Learning Projects",
    description: "Advanced AI/ML solutions with neural networks, deep learning, and predictive analytics",
    icon: "🧠",
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    projects: ["AI Chatbot with NLP", "Face Recognition System", "Stock Price Prediction", "Disease Diagnosis AI"],
    color: "electric-cyan"
  },
  {
    id: 2,
    title: "Python Full Stack Projects",
    description: "Complete web applications using Python frameworks with modern UI/UX",
    icon: "🐍",
    technologies: ["Django", "Flask", "FastAPI", "PostgreSQL", "React"],
    projects: ["Hospital Management System", "E-commerce Platform", "Social Media Dashboard", "Learning Management System"],
    color: "purple-400"
  },
  {
    id: 3,
    title: "Java Full Stack Projects",
    description: "Enterprise-grade applications with Spring Boot and modern frontend",
    icon: "☕",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "Angular", "Microservices"],
    projects: ["Banking Management System", "Inventory Management", "Employee Portal", "Online Examination System"],
    color: "cyan-glow"
  },
  {
    id: 4,
    title: "Web Development Projects",
    description: "Modern responsive websites and web applications",
    icon: "🌐",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    projects: ["Restaurant Website", "Portfolio Website", "News Portal", "Online Booking System"],
    color: "electric-blue"
  },
  {
    id: 5,
    title: "MERN Stack Projects",
    description: "Full-stack JavaScript applications with MongoDB, Express, React, Node.js",
    icon: "⚛️",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    projects: ["Netflix Clone", "WhatsApp Clone", "Instagram Clone", "Task Management App"],
    color: "green-400"
  },
  {
    id: 6,
    title: "IoT Smart Solutions",
    description: "Internet of Things projects with sensor integration and real-time monitoring",
    icon: "📡",
    technologies: ["Arduino", "Raspberry Pi", "ESP32", "Node.js", "MQTT"],
    projects: ["Smart Home Automation", "Health Monitoring System", "Smart Agriculture", "Vehicle Tracking System"],
    color: "orange-400"
  }
]

const features = [
  {
    icon: <CodeBracketIcon className="w-8 h-8" />,
    title: "Complete Source Code",
    description: "Well-documented, production-ready code with best practices"
  },
  {
    icon: <DocumentTextIcon className="w-8 h-8" />,
    title: "Comprehensive Documentation",
    description: "Detailed project report, user manual, and technical documentation"
  },
  {
    icon: <PresentationChartLineIcon className="w-8 h-8" />,
    title: "Professional Presentation",
    description: "PowerPoint slides and demo videos for project presentation"
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Lifetime support for project understanding and modifications"
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-cyber font-black mb-6">
              <span className="cyber-text">FINAL YEAR</span>
              <span className="text-purple-400 ml-4">PROJECT PACKAGES</span>
            </h1>
            <p className="text-xl text-tech-gray max-w-4xl mx-auto mb-8">
              AI, IoT, ML, Web, and Mobile Projects — Fully Developed with Report & Support
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4">KEY FEATURES</h2>
            <p className="text-tech-gray max-w-2xl mx-auto">Everything you need for a successful final year project</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="holo-card rounded-2xl p-6 text-center group hover:animate-tech-glow"
              >
                <div className="text-electric-cyan mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-tech-gray/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4">TECHNOLOGIES & DOMAINS</h2>
            <p className="text-tech-gray max-w-2xl mx-auto">Choose from our comprehensive project packages</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-3xl p-8 border border-cyan-glow/20 hover:border-cyan-glow/40 transition-all group"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:animate-tech-glow">{pkg.icon}</div>
                  <h3 className="text-xl font-cyber text-white mb-2">{pkg.title}</h3>
                  <p className="text-tech-gray/80 text-sm mb-4">{pkg.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-electric-cyan font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-electric-cyan/10 text-electric-cyan text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Sample Projects:</h4>
                    <ul className="space-y-1">
                      {pkg.projects.map((project) => (
                        <li key={project} className="text-tech-gray/80 text-sm flex items-center">
                          <span className="w-1 h-1 bg-cyan-glow rounded-full mr-2"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 border border-electric-cyan/20"
          >
            <h2 className="text-3xl font-cyber text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-tech-gray mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your requirements and choose the perfect project package for your final year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-electric-cyan to-purple-500 text-dark-gray font-semibold rounded-xl hover:shadow-lg hover:shadow-electric-cyan/25 transition-all"
                >
                  Contact Us Now
                </motion.button>
              </Link>
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-electric-cyan text-electric-cyan font-semibold rounded-xl hover:bg-electric-cyan hover:text-dark-gray transition-all"
                >
                  View Sample Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}