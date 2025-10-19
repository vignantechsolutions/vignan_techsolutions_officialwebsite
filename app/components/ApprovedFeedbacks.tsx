'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, PhotoIcon, VideoCameraIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ApprovedFeedback {
  id: string
  name: string
  email: string
  college?: string
  company?: string
  semesterYear?: string
  rating: number
  textReview: string
  photos: string[]
  video: string | null
  photoCount: number
  hasVideo: boolean
  createdAt: string
  approved: boolean
}

export default function ApprovedFeedbacks() {
  const [approvedFeedbacks, setApprovedFeedbacks] = useState<ApprovedFeedback[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMedia, setSelectedMedia] = useState<{type: 'photos' | 'video', data: any} | null>(null)

  useEffect(() => {
    const loadApprovedFeedbacks = async () => {
      try {
        // Start with empty array - will populate when admin approves feedbacks
        setApprovedFeedbacks([])
      } catch (error) {
        console.error('Failed to load approved feedbacks:', error)
      } finally {
        setLoading(false)
      }
    }

    loadApprovedFeedbacks()
    
    // Poll for changes every 10 seconds to get real-time updates when admin approves new feedback
    const interval = setInterval(loadApprovedFeedbacks, 10000)
    
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-cyan-glow border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-tech-gray font-tech">Loading success stories...</p>
          </div>
        </div>
      </section>
    )
  }

  if (approvedFeedbacks.length === 0) {
    return (
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-4">
              Student Success Stories
            </h2>
            <p className="text-tech-gray font-tech text-base sm:text-lg">
              Be the first to share your success story and inspire others!
            </p>
            <div className="mt-8">
              <a
                href="/feedback"
                className="inline-block neon-btn px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Share Your Success Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-4">
            Student Success Stories
          </h2>
          <p className="text-tech-gray font-tech text-base sm:text-lg">
            Inspiring journeys of students who achieved their goals with our guidance
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {approvedFeedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:shadow-cyber transition-all duration-300 flex-shrink-0 w-80 snap-center"
              >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-cyber text-cyan-glow">{feedback.name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {feedback.college && (
                        <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs rounded-full">
                          🎓 {feedback.college}
                        </span>
                      )}
                      {feedback.semesterYear && (
                        <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                          📚 {feedback.semesterYear}
                        </span>
                      )}
                      {feedback.company && (
                        <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">
                          💼 {feedback.company}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < feedback.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              {feedback.textReview && (
                <div className="mb-4">
                  <p className="text-tech-gray text-sm leading-relaxed">
                    "{feedback.textReview}"
                  </p>
                </div>
              )}

              {/* Success Metrics & Media */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-cyan-glow/70">
                    <span className="text-xs">🏆 Success Story</span>
                  </div>
                  
                  {feedback.photoCount > 0 && (
                    <button 
                      onClick={() => setSelectedMedia({type: 'photos', data: feedback.photos})}
                      className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                    >
                      <PhotoIcon className="w-4 h-4" />
                      <span className="text-xs">{feedback.photoCount}</span>
                    </button>
                  )}
                  
                  {feedback.hasVideo && (
                    <button 
                      onClick={() => setSelectedMedia({type: 'video', data: feedback.video})}
                      className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                    >
                      <VideoCameraIcon className="w-4 h-4" />
                      <span className="text-xs">Video</span>
                    </button>
                  )}
                </div>
                
                <div className="text-tech-gray/50 text-xs">
                  {new Date(feedback.createdAt).toLocaleDateString()}
                </div>
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-glow/5 to-electric-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {approvedFeedbacks.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-cyan-glow/30"
                whileHover={{ scale: 1.5, backgroundColor: '#00FFFF' }}
              />
            ))}
          </div>
          
          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center mt-4"
          >
            <p className="text-tech-gray/60 text-sm flex items-center justify-center gap-2">
              <span>👈</span> Scroll to explore more stories <span>👉</span>
            </p>
          </motion.div>
        </div>

        {/* Give Your Feedback Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <motion.a
            href="/feedback"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block neon-btn px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Give Your Feedback
          </motion.a>
        </motion.div>
        
        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedMedia(null)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-10 right-0 text-white hover:text-cyan-glow transition-colors"
              >
                <XMarkIcon className="w-8 h-8" />
              </button>
              
              {selectedMedia.type === 'photos' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedMedia.data?.map((photo: string, index: number) => (
                    <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full rounded-lg" />
                  ))}
                </div>
              )}
              
              {selectedMedia.type === 'video' && selectedMedia.data && (
                <div className="flex justify-center">
                  <video src={selectedMedia.data} controls className="max-w-2xl w-full rounded-lg" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}