'use client'
import { useState } from 'react'

const processSteps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Understanding your requirements and project scope',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Planning',
    description: 'Creating detailed project roadmap and timeline',
    icon: '📋'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Building your project with cutting-edge technologies',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Rigorous quality assurance and performance testing',
    icon: '🔍'
  },
  {
    id: 5,
    title: 'Deployment',
    description: 'Launching your project with full support',
    icon: '🚀'
  }
]

export default function ProcessFlowDiagram() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-5xl font-cyber text-center text-cyan-glow mb-20">
        Our Development Process
      </h2>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
              className="relative group cursor-pointer text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full glass-panel border-2 border-cyan-glow/50 flex items-center justify-center mb-4 group-hover:shadow-cyber transition-all duration-200 hover:scale-105">
                <div className="text-3xl">{step.icon}</div>
                {activeStep === index && (
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-glow animate-ping" />
                )}
              </div>

              <div className={`transition-transform duration-200 ${activeStep === index ? '-translate-y-1' : ''}`}>
                <h3 className="text-lg font-cyber text-cyan-glow mb-2">
                  {step.title}
                </h3>
                <p className="text-tech-gray/70 font-tech text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-glow text-deep-navy font-cyber text-sm flex items-center justify-center">
                {step.id}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-panel rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-3xl font-cyber text-cyan-glow mb-4">
              Step {processSteps[activeStep].id}: {processSteps[activeStep].title}
            </h4>
            <p className="text-tech-gray font-tech text-xl leading-relaxed">
              {processSteps[activeStep].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}