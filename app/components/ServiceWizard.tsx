'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { XMarkIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const wizardSteps = [
  {
    question: "What type of user are you?",
    options: [
      { id: "student", label: "Student", desc: "Final year projects, assignments" },
      { id: "startup", label: "Startup", desc: "MVP development, tech solutions" },
      { id: "business", label: "Business", desc: "Enterprise solutions, consulting" }
    ]
  },
  {
    question: "What's your primary goal?",
    options: [
      { id: "project", label: "Complete a Project", desc: "Need full development" },
      { id: "learn", label: "Learn Technology", desc: "Training and courses" },
      { id: "consult", label: "Get Consultation", desc: "Expert advice and guidance" }
    ]
  },
  {
    question: "Which technology interests you most?",
    options: [
      { id: "ai", label: "AI/ML", desc: "Machine learning, data science" },
      { id: "web", label: "Web Development", desc: "Websites, web applications" },
      { id: "mobile", label: "Mobile Apps", desc: "iOS, Android development" },
      { id: "iot", label: "IoT", desc: "Internet of Things projects" }
    ]
  }
]

const recommendations = {
  "student-project-ai": "Final Year AI/ML Project Package",
  "student-project-web": "Final Year Web Development Project",
  "student-project-mobile": "Final Year Mobile App Project",
  "student-project-iot": "Final Year IoT Project Package",
  "student-learn-ai": "AI/ML Online Course",
  "student-learn-web": "Web Development Bootcamp",
  "startup-project-web": "MVP Web Development",
  "startup-consult-ai": "AI Strategy Consultation",
  "business-consult-web": "Enterprise Web Solutions"
}

interface ServiceWizardProps {
  isOpen: boolean
  onClose: () => void
}

export default function ServiceWizard({ isOpen, onClose }: ServiceWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [recommendation, setRecommendation] = useState("")

  const handleAnswer = (optionId: string) => {
    const newAnswers = [...answers, optionId]
    setAnswers(newAnswers)

    if (currentStep < wizardSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const key = newAnswers.join("-")
      setRecommendation(recommendations[key as keyof typeof recommendations] || "Custom Solution Consultation")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setAnswers(answers.slice(0, -1))
    }
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setAnswers([])
    setRecommendation("")
  }

  const handleGetQuote = () => {
    const subject = `Service Inquiry - ${recommendation}`
    const body = `I'm interested in: ${recommendation}%0D%0A%0D%0AMy answers:%0D%0A1. User type: ${answers[0]}%0D%0A2. Goal: ${answers[1]}%0D%0A3. Technology: ${answers[2]}`
    window.location.href = `mailto:vignantechsolutions@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="glass-effect p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Service Wizard</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {!recommendation ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Step {currentStep + 1} of {wizardSteps.length}</span>
                    <span>{Math.round(((currentStep + 1) / wizardSteps.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-electric-cyan h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / wizardSteps.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-6">
                  {wizardSteps[currentStep].question}
                </h3>

                <div className="space-y-4 mb-6">
                  {wizardSteps[currentStep].options.map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option.id)}
                      className="w-full p-4 text-left bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 hover:border-electric-cyan transition-all"
                    >
                      <div className="font-semibold text-white mb-1">{option.label}</div>
                      <div className="text-gray-300 text-sm">{option.desc}</div>
                    </motion.button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back
                  </button>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4">Perfect Match!</h3>
                <div className="glass-effect p-6 rounded-xl mb-6">
                  <h4 className="text-xl font-semibold text-electric-cyan mb-2">
                    Recommended Service:
                  </h4>
                  <p className="text-white text-lg">{recommendation}</p>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleGetQuote}
                    className="bg-electric-cyan text-dark-gray px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    Get Quote <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                  <button
                    onClick={handleRestart}
                    className="glass-effect px-6 py-3 rounded-lg text-white border border-white/20"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}