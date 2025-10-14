'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  CheckIcon, 
  StarIcon, 
  CodeBracketIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const domains = [
  { icon: "🤖", title: "AI & Machine Learning", desc: "Face Recognition, Chatbots, Predictive Analysis" },
  { icon: "🌐", title: "Web Development", desc: "Full-stack websites using Django, React, Node.js" },
  { icon: "📱", title: "Mobile App Development", desc: "Android, Flutter, React Native apps" },
  { icon: "🔗", title: "Internet of Things (IoT)", desc: "Smart Home, Smart Health, Sensor Automation" },
  { icon: "☁️", title: "Cloud & Cybersecurity", desc: "Secure systems with AWS, Firebase, encryption" }
]

const packages = [
  {
    name: "Basic",
    price: "₹6,000",
    ideal: "Confident coders",
    features: ["Source Code", "Project Report", "Setup Guide", "Email Support"]
  },
  {
    name: "Standard",
    price: "₹8,000",
    ideal: "Regular students",
    features: ["Everything in Basic", "PPT Presentation", "Live Demo", "Phone Support"],
    popular: true
  },
  {
    name: "Premium",
    price: "₹10,000",
    ideal: "Project excellence",
    features: ["Everything in Standard", "1-on-1 Mentorship", "Customization", "24/7 Support"]
  }
]

const faqs = [
  { q: "Can I modify the project after purchase?", a: "Yes, we provide free minor customizations as per university guidelines." },
  { q: "Will you explain the code for viva?", a: "Absolutely! We provide one-on-one walkthrough sessions with our expert developers." },
  { q: "How long does delivery take?", a: "Standard delivery is 3-5 days. Rush delivery available in 24-48 hours." },
  { q: "Are the projects plagiarism-free?", a: "Yes, all projects are original and built from scratch with unique implementations." }
]

export default function FinalYearProjects() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="text-white">Final Year </span>
            <span className="text-electric-cyan">Project Packages</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            End-to-end project solutions for Engineering, MCA, and BCA students with real-world applications, 
            clean code architecture, and comprehensive documentation.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: -15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-effect p-8 rounded-2xl mb-16 hover:shadow-2xl hover:shadow-electric-cyan/10 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Vignan TechSolutions, we provide end-to-end Final Year Project solutions tailored for Engineering, MCA, and BCA students. 
            Each project is designed with real-world applications, clean code architecture, and in-depth documentation — making it ready for both academic evaluation and industry presentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CodeBracketIcon className="w-12 h-12 text-electric-cyan mx-auto mb-3" />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">Real-world Use Cases</h3>
              <p className="text-gray-300 text-sm">Industry-relevant applications</p>
            </motion.div>
            <div className="text-center">
              <DocumentTextIcon className="w-12 h-12 text-electric-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Working Source Code</h3>
              <p className="text-gray-300 text-sm">Fully functional, tested code</p>
            </div>
            <div className="text-center">
              <PresentationChartLineIcon className="w-12 h-12 text-electric-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Report + Presentation</h3>
              <p className="text-gray-300 text-sm">IEEE format documentation</p>
            </div>
            <div className="text-center">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-electric-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Setup & Demo Support</h3>
              <p className="text-gray-300 text-sm">Complete guidance included</p>
            </div>
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">What's Included in Every Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🧠", title: "Source Code", desc: "Clean, optimized, and well-commented code (Python, Java, Node.js, etc.)" },
              { icon: "📘", title: "Project Report", desc: "IEEE-format documentation with objectives, architecture, UML diagrams, testing, and results" },
              { icon: "🖥️", title: "Live Demo Support", desc: "Online or offline project demo session with setup guidance" },
              { icon: "📊", title: "Presentation Slides (PPT)", desc: "Professionally designed presentation for final evaluation" },
              { icon: "🧾", title: "Abstract & Synopsis", desc: "Ready-to-submit summary for approval" },
              { icon: "🧑🏫", title: "Guided Explanation", desc: "One-on-one walkthrough by our expert developers" },
              { icon: "🔧", title: "Free Revisions", desc: "Minor customization as per university guidelines" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl flex items-start space-x-4"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
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
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-300 mb-8">
            Unlike generic project providers, Vignan TechSolutions focuses on originality, quality, and technical accuracy. 
            We ensure every project is conceptually strong, error-free, and complies with academic standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "100% Working Project + Code Explanation",
              "Customization Options for all branches (CSE, IT, ECE, EEE, MECH)",
              "Built using latest frameworks (Django, React, TensorFlow, IoT Cloud, etc.)",
              "Real-time problem-solving approach",
              "24×7 Support Team"
            ].map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="w-6 h-6 text-electric-cyan flex-shrink-0" />
                <span className="text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">✨ Premium Add-Ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Turnkey Hosting", desc: "Deploy on web or cloud", price: "+₹2,000" },
              { title: "Video Walkthrough Tutorial", desc: "Complete video explanation", price: "+₹1,500" },
              { title: "Advanced UI/UX Enhancement", desc: "Premium design upgrade", price: "+₹3,000" },
              { title: "Plagiarism-Free Report Guarantee", desc: "100% original content", price: "+₹1,000" },
              { title: "Printed Project Report Delivery", desc: "Hard copy delivery", price: "+₹500" }
            ].map((addon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect p-6 rounded-xl text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{addon.title}</h3>
                <p className="text-gray-300 mb-3">{addon.desc}</p>
                <span className="text-electric-cyan font-bold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Vignan TechSolutions made my final year project stress-free! The code ran perfectly during the viva, and the report was well-structured."
              </p>
              <div className="text-white font-semibold">— Divya, B.Tech CSE, 2024 Batch</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Our college recommended their AI projects — I got the top grade thanks to their support!"
              </p>
              <div className="text-white font-semibold">— Rahul, MCA Student</div>
            </div>
          </div>
        </motion.div>

        {/* Project Domains */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Explore Projects In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center cursor-pointer transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-4xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
                <p className="text-gray-300">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{
                  y: -15,
                  scale: pkg.popular ? 1.08 : 1.05,
                  rotateY: 5,
                  boxShadow: pkg.popular 
                    ? "0 25px 50px rgba(6, 182, 212, 0.4)" 
                    : "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                viewport={{ once: true }}
                className={`glass-effect p-8 rounded-2xl relative cursor-pointer transform-gpu transition-all duration-300 ${
                  pkg.popular ? 'border-2 border-electric-cyan shadow-lg shadow-electric-cyan/20' : 'hover:border border-electric-cyan/50'
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-cyan text-dark-gray px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-electric-cyan mb-2">{pkg.price}</div>
                  <p className="text-gray-300">{pkg.ideal}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-electric-cyan mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: pkg.popular 
                      ? "0 0 30px rgba(6, 182, 212, 0.6)" 
                      : "0 0 20px rgba(6, 182, 212, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const subject = `Final Year Project - ${pkg.name} Package`
                    const body = `I'm interested in the ${pkg.name} package (${pkg.price}).%0D%0A%0D%0APlease provide more details about available projects.`
                    window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-electric-cyan text-dark-gray hover:shadow-lg hover:shadow-electric-cyan/25 animate-pulse' 
                      : 'glass-effect text-white border border-electric-cyan hover:bg-electric-cyan hover:text-dark-gray'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Select Domain",
              "Discuss Requirements", 
              "Project Development",
              "Demo & Review",
              "Final Delivery"
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

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <span className="text-electric-cyan text-2xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl mb-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-electric-cyan mb-2">1200+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-cyan mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-cyan mb-2">24×7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl text-center hover:shadow-2xl hover:shadow-electric-cyan/20 transition-all duration-500"
        >
          <h2 className="text-3xl font-bold text-white mb-4">🎯 Ready to Impress Your Professors?</h2>
          <p className="text-xl text-gray-300 mb-8">Get your fully developed project today with lifetime support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.button
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px #06B6D4",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const subject = "Final Year Project Inquiry"
                const body = "I'm interested in your final year project packages. Please share available projects and pricing details."
                window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
              }}
              className="bg-electric-cyan text-dark-gray px-8 py-4 rounded-full font-semibold text-lg neon-glow hover:animate-pulse transition-all duration-300"
            >
              View Available Projects
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const subject = "Custom Project Request"
                const body = "I need a custom final year project. Here are my requirements:%0D%0A%0D%0ADomain:%0D%0ATechnology:%0D%0ASpecial Requirements:"
                window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
              }}
              className="glass-effect px-8 py-4 rounded-full font-semibold text-lg text-white border border-electric-cyan hover:border-electric-cyan/80 transition-all duration-300"
            >
              Request Custom Idea
            </motion.button>
          </div>
          
          {/* WhatsApp CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              const message = "Hi! I'm interested in Final Year Project packages. Can you help me choose the right one?"
              window.open(`https://wa.me/919110478047?text=${encodeURIComponent(message)}`, '_blank')
            }}
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold flex items-center mx-auto gap-2"
          >
            💬 WhatsApp for Instant Help
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}