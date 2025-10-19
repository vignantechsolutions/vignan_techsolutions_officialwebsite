'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, RocketLaunchIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface ProjectInquiryFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectInquiryForm({ isOpen, onClose }: ProjectInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/project-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSuccess(true)
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            description: '',
            budget: '',
            timeline: ''
          })
          setIsSuccess(false)
          onClose()
        }, 2000)
      } else {
        alert('Failed to submit inquiry. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="holo-card rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Success State */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-deep-navy/95 rounded-3xl flex items-center justify-center z-10"
                >
                  <div className="text-center">
                    <CheckCircleIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-cyber text-cyan-glow mb-2">Success!</h3>
                    <p className="text-tech-gray">We'll contact you within 24 hours</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <RocketLaunchIcon className="w-8 h-8 text-cyan-glow" />
                <div>
                  <h2 className="text-3xl font-cyber text-cyan-glow">Launch Your Project</h2>
                  <p className="text-tech-gray/80">Let's bring your ideas to life</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-tech-gray hover:text-cyan-glow transition-colors p-2"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-cyber text-electric-blue mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-cyber text-electric-blue mb-4">Project Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Project Type *</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                      required
                    >
                      <option value="">Choose your project type</option>
                      <option value="Final Year Project">🎓 Final Year Project</option>
                      <option value="Web Development">🌐 Web Development</option>
                      <option value="Mobile App">📱 Mobile App</option>
                      <option value="AI/ML Project">🤖 AI/ML Project</option>
                      <option value="IoT Project">🔗 IoT Project</option>
                      <option value="Other">⚡ Other</option>
                    </select>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-cyan-glow font-cyber text-sm mb-2">Project Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={4}
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none resize-none transition-all"
                  placeholder="Tell us about your vision, requirements, and goals..."
                />
              </motion.div>

              {/* Budget & Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-cyber text-electric-blue mb-4">Budget & Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    >
                      <option value="">Select your budget</option>
                      <option value="Under ₹10,000">💰 Under ₹10,000</option>
                      <option value="₹10,000 - ₹25,000">💎 ₹10,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">🚀 ₹25,000 - ₹50,000</option>
                      <option value="Above ₹50,000">⭐ Above ₹50,000</option>
                    </select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-cyan-glow font-cyber text-sm mb-2">Project Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      className="w-full p-4 rounded-xl bg-slate-900/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow focus:ring-2 focus:ring-cyan-glow/20 outline-none transition-all"
                    >
                      <option value="">When do you need it?</option>
                      <option value="1-2 weeks">⚡ 1-2 weeks (Rush)</option>
                      <option value="3-4 weeks">🎯 3-4 weeks (Standard)</option>
                      <option value="1-2 months">📅 1-2 months (Detailed)</option>
                      <option value="3+ months">🏗️ 3+ months (Complex)</option>
                    </select>
                  </motion.div>
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-cyan-glow/20"
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-4 border-2 border-cyan-glow/50 text-cyan-glow rounded-xl hover:bg-cyan-glow/10 transition-all font-cyber"
                >
                  Maybe Later
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neon-btn px-10 py-4 rounded-xl font-cyber text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-navy"></div>
                      <span>Launching...</span>
                    </>
                  ) : (
                    <>
                      <RocketLaunchIcon className="w-5 h-5" />
                      <span>Launch Project</span>
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}