'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, RocketLaunchIcon, BellIcon } from '@heroicons/react/24/outline'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  serviceTitle: string
}

export default function ComingSoonModal({ isOpen, onClose, serviceTitle }: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="glass-effect p-8 rounded-2xl max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-electric-cyan to-purple-500 rounded-full flex items-center justify-center"
              >
                <RocketLaunchIcon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {serviceTitle}
              </h3>
              
              <div className="bg-gradient-to-r from-electric-cyan/20 to-purple-500/20 border border-electric-cyan/30 rounded-lg p-4 mb-6">
                <h4 className="text-lg font-semibold text-electric-cyan mb-2">Coming Soon!</h4>
                <p className="text-gray-300 text-sm">
                  We're working hard to bring you this amazing service. Stay tuned for updates!
                </p>
              </div>

              {serviceTitle === "Tech Solutions" && (
                <div className="text-left mb-6">
                  <h5 className="text-white font-semibold mb-3">What to expect:</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Custom enterprise software development</li>
                    <li>• Advanced API integrations & microservices</li>
                    <li>• Cloud migration & DevOps automation</li>
                    <li>• AI-powered business solutions</li>
                    <li>• 24/7 technical consulting support</li>
                  </ul>
                </div>
              )}

              {serviceTitle === "Online Tech Classes" && (
                <div className="text-left mb-6">
                  <h5 className="text-white font-semibold mb-3">What to expect:</h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Live interactive coding sessions</li>
                    <li>• Industry expert instructors</li>
                    <li>• Hands-on project-based learning</li>
                    <li>• Career guidance & placement support</li>
                    <li>• Certificates & portfolio building</li>
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-center space-x-2 text-electric-cyan mb-6">
                <BellIcon className="w-5 h-5" />
                <span className="text-sm">Get notified when we launch!</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-electric-cyan to-purple-500 text-white py-3 rounded-full font-semibold"
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}