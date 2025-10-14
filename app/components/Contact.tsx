'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  ClockIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

export default function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    const smsUrl = `sms:+919110478047?body=${encodeURIComponent(message)}`
    window.location.href = smsUrl
  }

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-10 left-20 w-40 h-40 bg-electric-cyan opacity-5" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute top-60 right-10 w-32 h-32 bg-purple-500 opacity-5" style={{animationDelay: '7s'}}></div>
        <div className="floating-orb absolute bottom-20 left-1/3 w-24 h-24 bg-pink-500 opacity-5" style={{animationDelay: '14s'}}></div>
        <div className="floating-orb absolute bottom-40 right-1/4 w-28 h-28 bg-blue-500 opacity-5" style={{animationDelay: '21s'}}></div>
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div style={{ y }} className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-cyber font-bold mb-6 bg-gradient-to-r from-white via-electric-cyan to-purple-400 bg-clip-text text-transparent"
              animate={{ textShadow: ['0 0 20px rgba(0,255,255,0.5)', '0 0 40px rgba(168,85,247,0.5)', '0 0 20px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Contact Us
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-purple-500 mx-auto mb-8"
              animate={{ scaleX: [1, 1.5, 1], boxShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 30px rgba(168,85,247,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-tech-gray font-tech max-w-4xl mx-auto leading-relaxed"
          >
            Ready to transform your ideas into reality? Let's discuss your project and bring your vision to life!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glass-effect p-10 rounded-3xl relative overflow-hidden group border border-cyan-glow/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
              animate={{ y: [0, 500, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-purple-500 rounded-2xl flex items-center justify-center mr-4"
                >
                  <PaperAirplaneIcon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-cyber text-cyan-glow"
                  animate={{ textShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 20px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Send us a message
                </motion.h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:bg-white/15 transition-all backdrop-blur-sm"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:bg-white/15 transition-all backdrop-blur-sm"
                    required
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-electric-cyan focus:bg-white/15 transition-all backdrop-blur-sm"
                    required
                  >
                    <option value="" className="bg-dark-gray">Select Service</option>
                    <option value="final-year-project" className="bg-dark-gray">Final Year Project</option>
                    <option value="web-development" className="bg-dark-gray">Web Development</option>
                    <option value="tech-solutions" className="bg-dark-gray">Tech Solutions</option>
                    <option value="online-classes" className="bg-dark-gray">Online Classes</option>
                  </select>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:bg-white/15 transition-all backdrop-blur-sm resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-cyan to-purple-500 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 shadow-lg"
                >
                  <RocketLaunchIcon className="w-6 h-6" />
                  Launch Your Project
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -2 }}
              className="glass-effect p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4"
                  >
                    <SparklesIcon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-cyber text-purple-400">Get in touch</h3>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 bg-electric-cyan/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-electric-cyan/30 transition-colors">
                      <EnvelopeIcon className="w-6 h-6 text-electric-cyan" />
                    </div>
                    <div>
                      <p className="text-cyan-glow font-cyber font-semibold">Email</p>
                      <p className="text-tech-gray font-tech">vignantechsolutions@gmail.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 bg-electric-cyan/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-electric-cyan/30 transition-colors">
                      <PhoneIcon className="w-6 h-6 text-electric-cyan" />
                    </div>
                    <div>
                      <p className="text-cyan-glow font-cyber font-semibold">Phone</p>
                      <p className="text-tech-gray font-tech">+91 9110478047</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start group"
                  >
                    <div className="w-12 h-12 bg-electric-cyan/20 rounded-xl flex items-center justify-center mr-4 mt-1 group-hover:bg-electric-cyan/30 transition-colors">
                      <MapPinIcon className="w-6 h-6 text-electric-cyan" />
                    </div>
                    <div>
                      <p className="text-cyan-glow font-cyber font-semibold">Address</p>
                      <p className="text-tech-gray font-tech">Kalaburagi, Karnataka<br />India - 585103</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="glass-effect p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-cyber text-electric-blue mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const message = "Hi! I'm interested in your services. Can we discuss my requirements?"
                      window.open(`https://wa.me/919110478047?text=${encodeURIComponent(message)}`, '_blank')
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg"
                  >
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                    WhatsApp Chat
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.location.href = "tel:+919110478047"
                    }}
                    className="w-full glass-effect border-2 border-electric-cyan text-electric-cyan py-4 rounded-xl font-semibold hover:bg-electric-cyan hover:text-white transition-all"
                  >
                    Schedule a Call
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -2 }}
              className="glass-effect p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4"
                  >
                    <ClockIcon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-cyber text-cyan-glow">Office Hours</h4>
                </div>
                
                <div className="space-y-3 text-tech-gray font-tech">
                  <motion.p whileHover={{ x: 5 }} className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-electric-cyan font-semibold">9:00 AM - 7:00 PM</span>
                  </motion.p>
                  <motion.p whileHover={{ x: 5 }} className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-electric-cyan font-semibold">10:00 AM - 5:00 PM</span>
                  </motion.p>
                  <motion.p whileHover={{ x: 5 }} className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-red-400 font-semibold">Closed</span>
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-16 rounded-3xl relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan to-transparent opacity-50"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <motion.h3 
                  className="text-4xl md:text-5xl font-cyber text-cyan-glow mb-6"
                  animate={{ textShadow: ['0 0 15px rgba(0,255,255,0.5)', '0 0 35px rgba(0,255,255,0.8)', '0 0 15px rgba(0,255,255,0.5)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Ready to Start Your Project?
                </motion.h3>
                <motion.div 
                  className="w-20 h-1 bg-gradient-to-r from-electric-cyan to-purple-500 mx-auto mb-6"
                  animate={{ scaleX: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <p className="text-xl text-tech-gray font-tech mb-10 max-w-3xl mx-auto leading-relaxed">
                Join the growing community of students and businesses who trust us with their <span className="text-electric-blue font-semibold">innovative tech solutions</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-2xl border border-electric-cyan/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-cyber text-cyan-glow mb-2">Free Consultation</h4>
                  <p className="text-tech-gray/70 font-tech text-sm">Expert guidance for your project requirements</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-2xl border border-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-cyber text-cyan-glow mb-2">Dedicated Support</h4>
                  <p className="text-tech-gray/70 font-tech text-sm">Continuous assistance throughout your journey</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-6 rounded-2xl border border-green-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <RocketLaunchIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-cyber text-cyan-glow mb-2">Quick Response</h4>
                  <p className="text-tech-gray/70 font-tech text-sm">Fast turnaround times for all inquiries</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}