'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const processSteps = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Understanding your requirements and project scope',
    icon: '💬',
    color: 'cyan-glow'
  },
  {
    id: 2,
    title: 'Planning',
    description: 'Creating detailed project roadmap and timeline',
    icon: '📋',
    color: 'electric-blue'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Building your project with cutting-edge technologies',
    icon: '⚡',
    color: 'purple-400'
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Rigorous quality assurance and performance testing',
    icon: '🔍',
    color: 'green-400'
  },
  {
    id: 5,
    title: 'Deployment',
    description: 'Launching your project with full support',
    icon: '🚀',
    color: 'cyan-glow'
  }
]

export default function ProcessFlowDiagram() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="max-w-7xl mx-auto py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-cyber text-center text-cyan-glow mb-16"
      >
        Our Development Process
      </motion.h2>

      <div className="relative">
        {/* Connection Lines */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-glow via-electric-blue to-cyan-glow opacity-30"></div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setActiveStep(index)}
              className="relative group cursor-pointer"
            >
              {/* Step Circle */}
              <motion.div
                className={`relative mx-auto w-20 h-20 rounded-full glass-panel border-2 border-${step.color}/50 flex items-center justify-center mb-4 group-hover:shadow-cyber transition-all`}
                whileHover={{ scale: 1.1, rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-3xl">{step.icon}</div>
                
                {/* Pulse Ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 border-${step.color}`}
                  animate={activeStep === index ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Step Content */}
              <motion.div
                className="text-center"
                animate={activeStep === index ? { y: -5 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-lg font-cyber text-${step.color} mb-2`}>
                  {step.title}
                </h3>
                <p className="text-tech-gray/70 font-tech text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Step Number */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${step.color} text-deep-navy font-cyber text-sm flex items-center justify-center`}>
                {step.id}
              </div>

              {/* Holographic Glow */}
              {activeStep === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-2xl bg-${step.color}/10 blur-xl -z-10`}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Active Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <div className="glass-panel rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-cyber text-cyan-glow mb-3">
              Step {processSteps[activeStep].id}: {processSteps[activeStep].title}
            </h4>
            <p className="text-tech-gray font-tech">
              {processSteps[activeStep].description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}