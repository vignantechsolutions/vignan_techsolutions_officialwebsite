'use client'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Computer Vision Disease Detection',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    description: 'AI-powered medical diagnosis system using deep learning for X-ray and MRI analysis'
  },
  {
    id: 2,
    title: 'Real-Time Stock Trading Platform', 
    tech: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    description: 'Full-stack trading platform with real-time data, portfolio management, and ML predictions'
  },
  {
    id: 3,
    title: 'Enterprise Resource Planning System',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
    description: 'Comprehensive ERP solution with microservices architecture and advanced analytics'
  }
]

export default function SimpleShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsFlipped(false)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsFlipped(false)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-400 mb-4">
        Featured Projects
      </h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevProject}
          className="absolute left-0 z-10 p-3 rounded-full bg-gray-800 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all"
        >
          ←
        </button>

        <button
          onClick={nextProject}
          className="absolute right-0 z-10 p-3 rounded-full bg-gray-800 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all"
        >
          →
        </button>

        <div className="w-64 h-80">
          <div
            className="relative w-full h-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {!isFlipped ? (
              <div className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 p-6 shadow-lg">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {currentProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {currentProject.tech.map((tech, idx) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <p className="text-white/80 text-xs">Click to flip</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full rounded-xl bg-gray-800 border border-blue-400 p-6">
                <div className="h-full flex flex-col justify-center text-center">
                  <h3 className="text-lg font-bold text-blue-400 mb-4">
                    Project Details
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {currentProject.description}
                  </p>

                  <button className="bg-blue-400 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-300 transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsFlipped(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentIndex ? 'bg-blue-400' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}