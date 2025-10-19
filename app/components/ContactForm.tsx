import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-cyber text-cyan-glow mb-4">Get In Touch</h2>
          <p className="text-tech-gray font-tech text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-panel rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-cyan-glow font-cyber text-sm mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-cyan-glow font-cyber text-sm mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-cyan-glow font-cyber text-sm mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={5}
              className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors resize-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="neon-btn px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-400/10 border border-green-400/30 rounded-lg text-center"
            >
              <p className="text-green-400 font-cyber">✅ Message sent successfully! We'll get back to you soon.</p>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}