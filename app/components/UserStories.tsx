'use client'
import { useState, useEffect } from 'react'
import { PhotoIcon, VideoCameraIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface Feedback {
  id: string
  name: string
  email: string
  college: string
  company: string
  rating: number
  textReview: string
  photos: string[]
  video: string | null
  createdAt: string
}

export default function UserStories() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [viewingMedia, setViewingMedia] = useState<{type: 'photos' | 'video', data: string[], feedbackId: string, studentName: string} | null>(null)

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const response = await fetch('/api/feedbacks/db?approved=true&limit=6')
        const data = await response.json()
        setFeedbacks(data.data || [])
      } catch (error) {
        console.error('Failed to load feedbacks:', error)
      }
    }

    loadFeedbacks()
  }, [])

  if (feedbacks.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-cyber text-cyan-glow mb-8">Student Success Stories</h2>
          <p className="text-tech-gray">Be the first to share your success story!</p>
          <a href="/feedback" className="inline-block mt-4 neon-btn px-6 py-2 rounded-lg">
            Share Your Story
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-cyber text-center text-cyan-glow mb-12">
          Student Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {feedbacks.map((feedback, index) => (
            <div key={feedback.id} className="glass-panel rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{index % 2 === 0 ? '👨💻' : '👩💻'}</div>
                <div>
                  <h3 className="text-lg font-cyber text-cyan-glow">{feedback.name}</h3>
                  <p className="text-tech-gray text-sm">{feedback.company || 'Student'}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                    ★
                  </span>
                ))}
              </div>
              
              <p className="text-tech-gray text-sm mb-4 line-clamp-3">
                "{feedback.textReview}"
              </p>
              
              <div className="flex items-center justify-between text-xs text-tech-gray/60">
                <div className="flex items-center space-x-2">
                  {feedback.college && (
                    <span className="bg-electric-blue/20 text-electric-blue px-2 py-1 rounded">
                      {feedback.college}
                    </span>
                  )}
                  
                  {feedback.photos && feedback.photos.length > 0 && (
                    <button 
                      onClick={() => setViewingMedia({type: 'photos', data: feedback.photos, feedbackId: feedback.id, studentName: feedback.name})}
                      className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                      title="View photos"
                    >
                      <PhotoIcon className="w-4 h-4" />
                      <span>{feedback.photos.length}</span>
                    </button>
                  )}
                  
                  {feedback.video && (
                    <button 
                      onClick={() => setViewingMedia({type: 'video', data: [feedback.video!], feedbackId: feedback.id, studentName: feedback.name})}
                      className="flex items-center space-x-1 text-cyan-glow/70 hover:text-cyan-glow transition-colors cursor-pointer"
                      title="View video"
                    >
                      <VideoCameraIcon className="w-4 h-4" />
                      <span>Video</span>
                    </button>
                  )}
                </div>
                <span>{new Date(feedback.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/feedback" className="neon-btn px-8 py-3 rounded-lg font-semibold">
            Share Your Success Story
          </a>
        </div>
      </div>

      {/* Media Modal */}
      {viewingMedia && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel rounded-2xl p-6 max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-cyber text-cyan-glow">
                {viewingMedia.type === 'photos' ? 'Photos' : 'Video'} - {viewingMedia.studentName}
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