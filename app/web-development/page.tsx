'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon,
  CloudIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: "Website Design & Development",
    description: "Clean, fast, and responsive websites that adapt perfectly to any screen size",
    features: ["Pixel-perfect UI design", "Interactive animations", "SEO-friendly structure", "Fast-loading architecture"],
    icon: "🌐"
  },
  {
    title: "Web Application Development", 
    description: "Scalable web applications using modern tech stacks for startups and enterprises",
    features: ["SaaS platforms", "Dashboards & admin panels", "Data-driven applications", "API-based web services"],
    icon: "💻"
  },
  {
    title: "E-commerce Development",
    description: "Smart, secure, and conversion-optimized e-commerce solutions",
    features: ["Payment gateways", "Inventory management", "Order tracking", "Customizable designs"],
    icon: "🛒"
  },
  {
    title: "CMS Development",
    description: "Custom CMS platforms for easy content management without coding",
    features: ["WordPress", "Strapi", "Custom Django/React CMS", "User-friendly interface"],
    icon: "📝"
  },
  {
    title: "Website Maintenance & Support",
    description: "Continuous care to keep your site secure, updated, and fast",
    features: ["Security patches", "Speed optimization", "Regular backups", "24×7 support"],
    icon: "🔧"
  }
]

const keyFeatures = [
  { icon: "🌐", title: "Responsive Design", description: "Works seamlessly across all devices and screen sizes" },
  { icon: "⚡", title: "Fast Loading", description: "Optimized assets and caching for superior speed" },
  { icon: "🔍", title: "SEO Optimized", description: "Structured data, meta tags, and keyword-rich content" },
  { icon: "🧱", title: "Secure & Scalable", description: "HTTPS, authentication layers, and best security practices" },
  { icon: "🔧", title: "Ongoing Maintenance", description: "Timely updates, fixes, and monitoring" },
  { icon: "☁️", title: "Cloud Deployment", description: "Hosting on AWS, Vercel, or DigitalOcean" }
]

const technologies = {
  "Frontend": ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  "Backend": ["Django", "Node.js", "Express.js", "FastAPI"],
  "Database": ["PostgreSQL", "MongoDB", "Firebase", "MySQL"],
  "CMS": ["WordPress", "Strapi", "Ghost", "Custom CMS"],
  "E-commerce": ["Shopify", "WooCommerce", "Custom Stores", "Payment APIs"]
}

const sampleProjects = [
  { name: "EduConnect LMS", description: "Learning platform with Django & React", tech: "Django + React" },
  { name: "SmartKart", description: "E-commerce system with Next.js & Stripe", tech: "Next.js + Stripe" },
  { name: "BuildPro", description: "Construction company CMS website", tech: "WordPress + Custom" },
  { name: "TechTalk Blog", description: "SEO-optimized blogging platform", tech: "Next.js + CMS" }
]

const packages = [
  {
    name: "Basic Website",
    price: "₹7,999",
    subtitle: "Small businesses",
    features: ["5 Pages", "Responsive Design", "SEO Setup", "Basic Support"],
    popular: false
  },
  {
    name: "Standard Business",
    price: "₹14,999", 
    subtitle: "Growing companies",
    features: ["Custom Design", "CMS Integration", "Maintenance", "Analytics"],
    popular: true
  },
  {
    name: "E-commerce Pro",
    price: "₹24,999",
    subtitle: "Online retailers", 
    features: ["Online Store", "Payment Gateway", "Admin Panel", "Inventory System"],
    popular: false
  },
  {
    name: "Enterprise App",
    price: "Custom Quote",
    subtitle: "Large enterprises",
    features: ["Full-Stack App", "Cloud Hosting", "API Integration", "Custom Features"],
    popular: false
  }
]

const processSteps = [
  "Requirement Analysis",
  "UI/UX Design", 
  "Development & Integration",
  "Testing & QA",
  "Deployment & Maintenance"
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-electric-cyan opacity-10" style={{animationDelay: '0s'}}></div>
          <div className="floating-orb absolute bottom-20 right-10 w-24 h-24 bg-purple-500 opacity-10" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-cyber font-black mb-6">
              <span className="cyber-text">WEB DEVELOPMENT</span>
              <span className="text-purple-400 ml-4">& MAINTENANCE</span>
            </h1>
            <p className="text-xl text-tech-gray max-w-4xl mx-auto mb-8">
              High-performance, secure, and future-ready websites that help your business grow digitally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 border border-cyan-glow/20 mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-6 flex items-center">
              <span className="text-4xl mr-4">🧭</span> Overview
            </h2>
            <p className="text-tech-gray text-lg leading-relaxed mb-8">
              At Vignan TechSolutions, we design and develop high-performance, secure, and future-ready websites that help your business grow digitally. Our team blends modern frameworks, responsive UI, and data-driven design to build websites that don't just look beautiful — they perform, convert, and scale.
            </p>
            <div>
              <h3 className="text-xl font-cyber text-white mb-4">We Specialize In:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Corporate & Startup Websites", "E-commerce Platforms", "Web Portals & Dashboards", "Educational & Institutional Websites", "AI/ML Integrated Web Applications"].map((item) => (
                  <div key={item} className="flex items-center text-tech-gray">
                    <span className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4 flex items-center justify-center">
              <span className="text-4xl mr-4">💻</span> Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-3xl p-8 border border-cyan-glow/20 hover:border-cyan-glow/40 transition-all group"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:animate-tech-glow">{service.icon}</div>
                  <h3 className="text-xl font-cyber text-white mb-2">{service.title}</h3>
                  <p className="text-tech-gray/80 text-sm mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-tech-gray/80 text-sm flex items-center">
                      <span className="w-1 h-1 bg-cyan-glow rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4 flex items-center justify-center">
              <span className="text-4xl mr-4">⚙️</span> Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="holo-card rounded-2xl p-6 text-center group hover:animate-tech-glow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-tech-gray/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4 flex items-center justify-center">
              <span className="text-4xl mr-4">🧩</span> Technologies & Domains
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 border border-cyan-glow/20"
              >
                <h3 className="text-lg font-cyber text-electric-cyan mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-electric-cyan/10 text-electric-cyan text-sm rounded-full border border-electric-cyan/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-4 flex items-center justify-center">
              <span className="text-4xl mr-4">🚀</span> Our Development Process
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-electric-cyan to-purple-500 rounded-full flex items-center justify-center text-dark-gray font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <p className="text-tech-gray text-center max-w-32">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 border border-cyan-glow/20"
          >
            <h2 className="text-3xl font-cyber text-electric-cyan mb-6 flex items-center justify-center">
              <span className="text-4xl mr-4">🌟</span> Why Choose Vignan TechSolutions
            </h2>
            <p className="text-tech-gray text-lg text-center mb-8">
              We don't just build websites — we build digital experiences that drive engagement, trust, and growth.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "100% Custom Solutions (no templates)",
                "Industry-Level Tech Stack", 
                "On-Time Delivery with Transparency",
                "Lifetime Support Plans",
                "AI Integration Ready (Chatbots, Analytics, Recommendations)"
              ].map((item) => (
                <div key={item} className="flex items-center text-tech-gray">
                  <span className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 border border-electric-cyan/20"
          >
            <h2 className="text-3xl font-cyber text-white mb-4 flex items-center justify-center">
              <span className="text-4xl mr-4">🎯</span> Ready to Build Your Digital Presence?
            </h2>
            <p className="text-tech-gray mb-8 max-w-2xl mx-auto">
              Let's design a website that defines your business and drives growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-electric-cyan to-purple-500 text-dark-gray font-semibold rounded-xl hover:shadow-lg hover:shadow-electric-cyan/25 transition-all flex items-center"
                >
                  <span className="mr-2">🚀</span> Get a Free Quote
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-electric-cyan text-electric-cyan font-semibold rounded-xl hover:bg-electric-cyan hover:text-dark-gray transition-all flex items-center"
              >
                <span className="mr-2">💬</span> Chat with Our Expert
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}