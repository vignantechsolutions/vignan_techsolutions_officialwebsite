'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

interface ApprovedFeedback {
  id: string
  name: string
  email: string
  college: string
  semesterYear: string
  company: string
  rating: number
  textReview: string
  photos: File[]
  video: File | null
  timestamp: Date
  approved: boolean
}

const defaultSuccessStories = [
  {
    id: 1,
    name: 'Arjun Patel',
    avatar: '👨‍💻',
    college: 'VTU',
    course: 'CS Student',
    project: 'AI Disease Detection System',
    story: 'The AI project exceeded my expectations. The mentorship was exceptional and I learned cutting-edge technologies.',
    rating: 5,
    achievement: 'Placed at Google',
    technologies: ['Python', 'TensorFlow', 'OpenCV']
  },
  {
    id: 2,
    name: 'Priya Sharma',
    avatar: '👩‍💻',
    college: 'JNTU',
    course: 'IT Student',
    project: 'E-Commerce Platform',
    story: 'Amazing guidance throughout the project. Got placed in my dream company with this project in my portfolio.',
    rating: 5,
    achievement: 'Placed at Microsoft',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    name: 'Rahul Kumar',
    avatar: '👨‍🎓',
    college: 'VIT',
    course: '4th Year ECE',
    project: 'IoT Smart Home System',
    story: 'The project helped me understand real-world applications. Excellent support from the team throughout.',
    rating: 5,
    achievement: 'Startup Founder',
    technologies: ['Arduino', 'IoT', 'Mobile App']
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    avatar: '👩‍🔬',
    college: 'BITS Pilani',
    course: 'CSE Final Year',
    project: 'Blockchain Voting System',
    story: 'Innovative project that opened doors to blockchain development. Great mentorship and technical guidance.',
    rating: 5,
    achievement: 'Blockchain Developer',
    technologies: ['Solidity', 'Web3', 'React']
  },
  {
    id: 5,
    name: 'Vikash Singh',
    avatar: '👨‍💼',
    college: 'NIT Warangal',
    course: 'CSE 3rd Year',
    project: 'Machine Learning Stock Predictor',
    story: 'Learned advanced ML concepts and got hands-on experience. The project boosted my confidence significantly.',
    rating: 5,
    achievement: 'Data Scientist at Flipkart',
    technologies: ['Python', 'Scikit-learn', 'Pandas']
  },
  {
    id: 6,
    name: 'Ananya Gupta',
    avatar: '👩‍💻',
    college: 'IIIT Hyderabad',
    course: 'CSE 4th Year',
    project: 'AR/VR Learning Platform',
    story: 'Cutting-edge project that helped me explore emerging technologies. Excellent guidance and support.',
    rating: 5,
    achievement: 'AR/VR Developer',
    technologies: ['Unity', 'C#', 'ARCore']
  }
]

export default function StudentSuccessStories() {
  const [approvedFeedbacks, setApprovedFeedbacks] = useState<ApprovedFeedback[]>([])
  const [allStories, setAllStories] = useState(defaultSuccessStories)

  useEffect(() => {
    const loadApprovedFeedbacks = () => {
      const stored = JSON.parse(localStorage.getItem('approvedFeedbacks') || '[]')
      setApprovedFeedbacks(stored)
      
      // Combine default stories with approved feedbacks
      const dynamicStories = stored.map((feedback: ApprovedFeedback, index: number) => ({
        id: `dynamic-${feedback.id}`,
        name: feedback.name,
        avatar: index % 2 === 0 ? '👨💻' : '👩💻',
        college: feedback.college || 'Student',
        course: feedback.semesterYear || 'Final Year',
        project: 'Success Story Project',
        story: feedback.textReview,
        rating: feedback.rating,
        achievement: feedback.company || 'Career Success',
        technologies: ['Project Skills', 'Technical Growth'],
        hasMedia: feedback.photos.length > 0 || feedback.video !== null
      }))
      
      setAllStories([...defaultSuccessStories, ...dynamicStories])
    }

    loadApprovedFeedbacks()
    
    // Listen for storage changes
    const handleStorageChange = () => {
      loadApprovedFeedbacks()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // Poll for changes every 5 seconds
    const interval = setInterval(loadApprovedFeedbacks, 5000)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-4">
            Student Success Stories
          </h2>
          <p className="text-tech-gray font-tech text-base sm:text-lg">
            Inspiring journeys of students who achieved their goals with our guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {allStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 hover:shadow-cyber transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{story.avatar}</div>
                    <div>
                      <h3 className="text-lg font-cyber text-cyan-glow">{story.name}</h3>
                      <p className="text-tech-gray/80 text-sm">{story.course}, {story.college}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < story.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <div className="mb-3">
                  <h4 className="text-electric-blue font-cyber text-base mb-1">{story.project}</h4>
                </div>
              </div>

              {/* Story */}
              <div className="mb-4">
                <p className="text-tech-gray text-sm leading-relaxed">
                  "{story.story}"
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full font-semibold">
                  🏆 {story.achievement}
                </span>
              </div>

              {/* Technologies & Media */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {story.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-cyan-glow/20 text-cyan-glow text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Media Indicators for Dynamic Stories */}
                {story.hasMedia && (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-cyan-glow/70">
                      <PhotoIcon className="w-3 h-3" />
                      <span className="text-xs">Photos</span>
                    </div>
                    <div className="flex items-center space-x-1 text-cyan-glow/70">
                      <VideoCameraIcon className="w-3 h-3" />
                      <span className="text-xs">Video</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Holographic Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-glow/5 to-electric-blue/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-panel rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-cyber text-cyan-glow mb-4">
              🚀 Ready to Write Your Success Story?
            </h3>
            <p className="text-tech-gray font-tech mb-6">
              Join thousands of students who transformed their careers with our guidance.
              Share your journey and inspire others!
            </p>
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