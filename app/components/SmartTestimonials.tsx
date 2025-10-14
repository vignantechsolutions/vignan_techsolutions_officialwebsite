'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Patel',
    role: 'CS Student, VTU',
    project: 'AI Disease Detection System',
    rating: 5,
    text: 'The AI project exceeded my expectations. The mentorship was exceptional and I learned cutting-edge technologies.',
    avatar: '👨‍💻'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'IT Graduate',
    project: 'E-Commerce MERN Platform',
    rating: 5,
    text: 'Outstanding full-stack development experience. The project helped me land my dream job at a tech startup.',
    avatar: '👩‍💻'
  },
  {
    id: 3,
    name: 'Rahul Kumar',
    role: 'Software Engineer',
    project: 'Java Microservices Architecture',
    rating: 5,
    text: 'Professional-grade enterprise project. The scalable architecture knowledge is invaluable in my career.',
    avatar: '👨‍🔬'
  }
]

export default function SmartTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="max-w-6xl mx-auto py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-cyber text-center text-cyan-glow mb-16"
      >
        Student Success Stories
      </motion.h2>

      <div className="relative">
        {/* Main Testimonial Card */}
        <div className="relative h-96 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -300, rotateY: -90 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="absolute inset-0"
            >
              <div className="glass-panel rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Holographic Background */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.3) 0%, transparent 70%)',
                      'radial-gradient(circle at 80% 80%, rgba(0,89,255,0.3) 0%, transparent 70%)',
                      'radial-gradient(circle at 20% 20%, rgba(0,255,255,0.3) 0%, transparent 70%)'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-glow to-electric-blue flex items-center justify-center text-2xl">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-cyber text-cyan-glow">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-tech-gray/70 font-tech">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-electric-blue font-tech text-sm">
                          {testimonials[currentIndex].project}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <StarIcon className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-tech-gray font-tech leading-relaxed italic flex-1 flex items-center"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
                    animate={{ x: [-100, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass-panel border border-cyan-glow/30 text-cyan-glow hover:shadow-cyber transition-all"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="flex space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-cyan-glow shadow-cyber' 
                    : 'bg-tech-gray/30 hover:bg-tech-gray/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full glass-panel border border-cyan-glow/30 text-cyan-glow hover:shadow-cyber transition-all"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}