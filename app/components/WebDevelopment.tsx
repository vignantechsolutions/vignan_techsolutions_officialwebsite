'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: GlobeAltIcon,
    title: "Website Design & Development",
    desc: "Clean, fast, and responsive websites that adapt perfectly to any screen size",
    features: ["Pixel-perfect UI design", "Interactive animations", "SEO-friendly structure", "Fast-loading architecture"]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Web Application Development",
    desc: "Scalable web applications using modern tech stacks for startups and enterprises",
    features: ["SaaS platforms", "Dashboards & admin panels", "Data-driven applications", "API-based web services"]
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Development",
    desc: "Smart, secure, and conversion-optimized e-commerce solutions",
    features: ["Payment gateways", "Inventory management", "Order tracking", "Customizable designs"]
  },
  {
    icon: DocumentTextIcon,
    title: "CMS Development",
    desc: "Custom CMS platforms for easy content management without coding",
    features: ["WordPress", "Strapi", "Custom Django/React CMS", "User-friendly interface"]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Website Maintenance & Support",
    desc: "Continuous care to keep your site secure, updated, and fast",
    features: ["Security patches", "Speed optimization", "Regular backups", "24×7 support"]
  }
]

const packages = [
  {
    name: "Basic Website",
    price: "₹7,999",
    features: ["5 Pages", "Responsive Design", "SEO Setup", "Basic Support"],
    ideal: "Small businesses"
  },
  {
    name: "Standard Business",
    price: "₹14,999",
    features: ["Custom Design", "CMS Integration", "Maintenance", "Analytics"],
    ideal: "Growing companies",
    popular: true
  },
  {
    name: "E-commerce Pro",
    price: "₹24,999",
    features: ["Online Store", "Payment Gateway", "Admin Panel", "Inventory System"],
    ideal: "Online retailers"
  },
  {
    name: "Enterprise App",
    price: "Custom Quote",
    features: ["Full-Stack App", "Cloud Hosting", "API Integration", "Custom Features"],
    ideal: "Large enterprises"
  }
]

const technologies = [
  { category: "Frontend", techs: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", techs: ["Django", "Node.js", "Express.js", "FastAPI"] },
  { category: "Database", techs: ["PostgreSQL", "MongoDB", "Firebase", "MySQL"] },
  { category: "CMS", techs: ["WordPress", "Strapi", "Ghost", "Custom CMS"] },
  { category: "E-commerce", techs: ["Shopify", "WooCommerce", "Custom Stores", "Payment APIs"] }
]

const sampleProjects = [
  { name: "EduConnect LMS", desc: "Learning platform with Django & React", tech: "Django + React" },
  { name: "SmartKart", desc: "E-commerce system with Next.js & Stripe", tech: "Next.js + Stripe" },
  { name: "BuildPro", desc: "Construction company CMS website", tech: "WordPress + Custom" },
  { name: "TechTalk Blog", desc: "SEO-optimized blogging platform", tech: "Next.js + CMS" }
]

export default function WebDevelopment() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="text-white">Web Development </span>
            <span className="text-electric-cyan">& Maintenance</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            High-performance, secure, and future-ready websites that help your business grow digitally
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">🧭 Overview</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Vignan TechSolutions, we design and develop high-performance, secure, and future-ready websites that help your business grow digitally. 
            Our team blends modern frameworks, responsive UI, and data-driven design to build websites that don't just look beautiful — they perform, convert, and scale.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mb-6">We Specialize In:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Corporate & Startup Websites",
              "E-commerce Platforms", 
              "Web Portals & Dashboards",
              "Educational & Institutional Websites",
              "AI/ML Integrated Web Applications"
            ].map((specialty, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="w-5 h-5 text-electric-cyan flex-shrink-0" />
                <span className="text-gray-300">{specialty}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">💻 Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-2xl cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-electric-cyan mr-4" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckIcon className="w-4 h-4 text-electric-cyan" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">⚙️ Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "Responsive Design", desc: "Works seamlessly across all devices and screen sizes" },
              { icon: "⚡", title: "Fast Loading", desc: "Optimized assets and caching for superior speed" },
              { icon: "🔍", title: "SEO Optimized", desc: "Structured data, meta tags, and keyword-rich content" },
              { icon: "🧱", title: "Secure & Scalable", desc: "HTTPS, authentication layers, and best security practices" },
              { icon: "🔧", title: "Ongoing Maintenance", desc: "Timely updates, fixes, and monitoring" },
              { icon: "☁️", title: "Cloud Deployment", desc: "Hosting on AWS, Vercel, or DigitalOcean" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">🧩 Technologies & Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-electric-cyan mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.techs.map((item, idx) => (
                    <span key={idx} className="inline-block bg-electric-cyan/20 text-electric-cyan px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">🚀 Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Requirement Analysis",
              "UI/UX Design", 
              "Development & Integration",
              "Testing & QA",
              "Deployment & Maintenance"
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-electric-cyan text-dark-gray rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white mb-2">{step}</h3>
                {index < 4 && (
                  <ArrowRightIcon className="w-6 h-6 text-electric-cyan mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sample Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">🧱 Sample Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleProjects.map((project, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-3">{project.desc}</p>
                <span className="text-electric-cyan text-sm font-semibold">{project.tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">💰 Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`glass-effect p-6 rounded-2xl relative ${
                  pkg.popular ? 'border-2 border-electric-cyan' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-cyan text-dark-gray px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-electric-cyan mb-2">{pkg.price}</div>
                  <p className="text-gray-300 text-sm">{pkg.ideal}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckIcon className="w-4 h-4 text-electric-cyan mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    const subject = `Web Development - ${pkg.name} Package`
                    const body = `I'm interested in the ${pkg.name} package (${pkg.price}).%0D%0A%0D%0APlease provide more details.`
                    window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
                  }}
                  className={`w-full py-2 rounded-lg font-semibold transition-all ${
                    pkg.popular 
                      ? 'bg-electric-cyan text-dark-gray' 
                      : 'glass-effect text-white border border-electric-cyan hover:bg-electric-cyan hover:text-dark-gray'
                  }`}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">🌟 Why Choose Vignan TechSolutions</h2>
          <p className="text-xl text-gray-300 mb-8">
            We don't just build websites — we build digital experiences that drive engagement, trust, and growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "100% Custom Solutions (no templates)",
              "Industry-Level Tech Stack",
              "On-Time Delivery with Transparency", 
              "Lifetime Support Plans",
              "AI Integration Ready (Chatbots, Analytics, Recommendations)"
            ].map((edge, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="w-6 h-6 text-electric-cyan flex-shrink-0" />
                <span className="text-gray-300">{edge}</span>
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  )
}