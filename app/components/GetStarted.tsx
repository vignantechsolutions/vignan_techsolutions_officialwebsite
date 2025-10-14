'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const steps = [
  { title: "Tell us about your project", desc: "Share your requirements and goals" },
  { title: "Get a custom proposal", desc: "Receive timeline and pricing details" },
  { title: "Start building", desc: "Begin development with our expert team" }
]

const services = [
  "Final Year Project (AI/ML/IoT/Web)",
  "Website Development",
  "Mobile App Development", 
  "Tech Consulting",
  "Online Training"
]

export default function GetStarted() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    budget: '',
    description: ''
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">
            <span className="text-white">Get </span>
            <span className="text-electric-cyan">Started</span>
          </h2>
          <p className="text-xl text-gray-300">
            Transform your ideas into reality in 3 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-electric-cyan text-dark-gray rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Start Your Project</h3>
          
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3">Select Service</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedService(service)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    selectedService === service
                      ? 'bg-electric-cyan text-dark-gray'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <CheckIcon className={`w-5 h-5 inline mr-2 ${
                    selectedService === service ? 'text-dark-gray' : 'text-electric-cyan'
                  }`} />
                  {service}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan"
            />
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-cyan"
            >
              <option value="">Project Timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>

          <div className="mb-6">
            <select
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-electric-cyan"
            >
              <option value="">Budget Range</option>
              <option value="Under ₹10,000">Under ₹10,000</option>
              <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
              <option value="₹50,000+">₹50,000+</option>
            </select>
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Describe your project requirements..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px #06B6D4" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const subject = `New Project Inquiry - ${selectedService}`
              const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${selectedService}%0D%0ATimeline: ${formData.timeline}%0D%0ABudget: ${formData.budget}%0D%0A%0D%0AProject Description:%0D%0A${formData.description}`
              window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
            }}
            className="w-full bg-electric-cyan text-dark-gray py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 neon-glow"
          >
            Get Free Consultation
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>

          <p className="text-gray-400 text-sm text-center mt-4">
            We'll respond within 24 hours with a custom proposal
          </p>
        </motion.div>
      </div>
    </section>
  )
}