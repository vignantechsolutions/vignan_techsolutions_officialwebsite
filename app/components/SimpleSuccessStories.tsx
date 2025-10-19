'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, PhotoIcon, VideoCameraIcon, XMarkIcon } from '@heroicons/react/24/outline'


interface ApprovedFeedback {
  id: string
  name: string
  email: string
  college: string
  semesterYear: string
  company: string
  rating: number
  textReview: string
  photos: string[]
  video: string | null
  timestamp: Date
  approved: boolean
}

export default function SimpleSuccessStories() {
  const [approvedFeedbacks, setApprovedFeedbacks] = useState<ApprovedFeedback[]>([])
  const [viewingMedia, setViewingMedia] = useState<{type: 'photos' | 'video', data: string[], feedbackId: string, studentName: string} | null>(null)

  useEffect(() => {
    const loadApprovedFeedbacks = async () => {
      try {
        const response = await fetch('/api/feedbacks/db?approved=true')
        const data = await response.json()
        setApprovedFeedbacks(data.data || [])
      } catch (error) {
        console.error('Failed to load approved feedbacks:', error)
      }
    }

    loadApprovedFeedbacks()
    const interval = setInterval(loadApprovedFeedbacks, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {approvedFeedbacks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-8">
              Student Success Stories
            </h2>
          </motion.div>
        )}

        {approvedFeedbacks.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {approvedFeedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:shadow-cyber transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{index % 2 === 0 ? '👨💻' : '👩💻'}</div>
                      <div>
                        <h3 className="text-lg font-cyber text-cyan-glow">{feedback.name}</h3>
                        <p className="text-tech-gray/80 text-sm mb-2">
                          {feedback.company || 'Student'}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {feedback.college && (
                            <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue text-xs rounded-full">
                              {feedback.college}
                            </span>
                          )}
                          {feedback.semesterYear && (
                            <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                              {feedback.semesterYear}
                            </span>
                          )}
                        </div>
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

                <div className="mb-4">
                  <h4 className="text-electric-blue font-cyber text-base mb-2">
                    {feedback.company === 'Software Engineer' ? 'Java Microservices Architecture' : 'Success Project'}
                  </h4>
                  <p className="text-tech-gray text-sm leading-relaxed">
                    "{feedback.textReview}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">
                      🏆 Career Success
                    </span>
                    
                    {feedback.photos && feedback.photos.length > 0 && (
                      <button 
                        onClick={() => setViewingMedia({type: 'photos', data: feedback.photos, feedbackId: feedback.id, studentName: feedback.name})}
                        className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                        title="Click to view photos"
                      >
                        <PhotoIcon className="w-4 h-4" />
                        <span className="text-xs">{feedback.photos.length}</span>
                      </button>
                    )}
                    
                    {feedback.video && (
                      <button 
                        onClick={() => setViewingMedia({type: 'video', data: [feedback.video], feedbackId: feedback.id, studentName: feedback.name})}
                        className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                        title="Click to view video"
                      >
                        <VideoCameraIcon className="w-4 h-4" />
                        <span className="text-xs">Video</span>
                      </button>
                    )}
                  </div>
                  
                  <div className="text-tech-gray/50 text-xs">
                    {new Date(feedback.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/feedback"
            className="inline-block neon-btn px-8 py-3 rounded-lg font-semibold transition-all"
          >
            {approvedFeedbacks.length > 0 ? 'Share Your Success Story' : 'Give Feedback'}
          </a>
        </motion.div>
      </div>

      {viewingMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-cyber text-cyan-glow">
                {viewingMedia.type === 'photos' ? 'Photos' : 'Video'}
              </h3>
              <button 
                onClick={() => setViewingMedia(null)}
                className="text-tech-gray hover:text-cyan-glow transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {viewingMedia.data.map((mediaData, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  {viewingMedia.type === 'photos' ? (
                    <img 
                      src={mediaData} 
                      alt={`Photo ${index + 1}`}
                      className="w-full h-auto max-h-96 object-cover"
                    />
                  ) : (
                    <video 
                      src={mediaData} 
                      controls 
                      className="w-full h-auto max-h-96"
                    />
                  )}
                </div>
              ))}
            </div>
            

          </div>
        </div>
      )}
    </section>
  )
}