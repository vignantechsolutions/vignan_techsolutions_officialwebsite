'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGlowing, setIsGlowing] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hi! I\'m your AI assistant. How can I help you explore our tech solutions?' }
  ])
  const [input, setInput] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const sendMessage = () => {
    if (!input.trim()) return
    
    setMessages(prev => [...prev, { type: 'user', text: input }])
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd recommend checking out our AI/ML projects for cutting-edge experience!",
        "Our Python fullstack course is perfect for building complete applications.",
        "Java enterprise development is great for large-scale systems.",
        "MERN stack projects are trending in the industry right now.",
        "Let me connect you with our project specialists for personalized guidance."
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { type: 'ai', text: randomResponse }])
    }, 1000)
    
    setInput('')
  }

  return (
    <>
      {/* Floating AI Orb */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 rounded-full bg-gradient-to-r from-cyan-glow to-electric-blue flex items-center justify-center shadow-cyber transition-all duration-300 ${
            isGlowing ? 'animate-tech-glow' : ''
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Pulsing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-glow"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* AI Brain Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <SparklesIcon className="w-8 h-8 text-deep-navy" />
          </motion.div>
          
          {/* Notification Dot */}
          {!isOpen && (
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-electric-blue rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-96 h-96 glass-panel rounded-2xl border border-cyan-glow/30 shadow-holo z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-glow/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-glow to-electric-blue flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 text-deep-navy" />
                </div>
                <div>
                  <h3 className="font-cyber text-cyan-glow text-sm">AI Assistant</h3>
                  <p className="text-tech-gray/60 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-tech-gray/60 hover:text-cyan-glow transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 h-64 overflow-y-auto">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg font-tech text-sm ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-cyan-glow to-electric-blue text-deep-navy' 
                      : 'holo-card text-tech-gray'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyan-glow/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about projects, courses..."
                  className="flex-1 bg-transparent border border-cyan-glow/30 rounded-lg px-3 py-2 text-tech-gray placeholder-tech-gray/50 focus:border-cyan-glow focus:outline-none font-tech text-sm"
                />
                <motion.button
                  onClick={sendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neon-btn p-2 rounded-lg"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Holographic Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}