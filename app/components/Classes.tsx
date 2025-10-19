'use client'
import { motion } from 'framer-motion'
import { RocketLaunchIcon, BellIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Classes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-cyber font-bold mb-6"
            animate={{ textShadow: ['0 0 20px rgba(0,255,255,0.5)', '0 0 40px rgba(168,85,247,0.5)', '0 0 20px rgba(0,255,255,0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-white">Online </span>
            <span className="text-electric-cyan">Classes</span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-glow to-purple-500 mx-auto mb-6"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xl text-tech-gray font-tech max-w-3xl mx-auto">
            Learn from industry experts with live sessions, hands-on projects, and career support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass-effect p-16 rounded-3xl text-center relative overflow-hidden border border-cyan-glow/30 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-purple-500/10"></div>
          
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
            animate={{ y: [0, 600, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-electric-cyan to-purple-500 rounded-full flex items-center justify-center"
            >
              <RocketLaunchIcon className="w-12 h-12 text-white" />
            </motion.div>

            <motion.h3 
              className="text-4xl md:text-5xl font-cyber text-cyan-glow mb-6"
              animate={{ textShadow: ['0 0 15px rgba(0,255,255,0.5)', '0 0 35px rgba(0,255,255,0.8)', '0 0 15px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Coming Soon!
            </motion.h3>
            
            <div className="bg-gradient-to-r from-electric-cyan/20 to-purple-500/20 border border-electric-cyan/30 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
              <h4 className="text-2xl font-cyber text-electric-cyan mb-6">What to Expect from Our Online Classes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Live interactive coding sessions with industry experts</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Hands-on projects and real-world applications</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Personalized mentorship and career guidance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Industry-recognized certificates upon completion</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Job placement support and portfolio building</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3"></div>
                    <span className="text-tech-gray font-tech">Flexible schedules for working professionals</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl mb-4">🐍</div>
                <h5 className="text-xl font-cyber text-cyan-glow mb-2">Python Programming</h5>
                <p className="text-tech-gray/70 font-tech text-sm">Complete Python development from basics to advanced</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl mb-4">☕</div>
                <h5 className="text-xl font-cyber text-cyan-glow mb-2">Java Programming</h5>
                <p className="text-tech-gray/70 font-tech text-sm">Enterprise Java development and object-oriented programming</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl mb-4">🌐</div>
                <h5 className="text-xl font-cyber text-cyan-glow mb-2">Web Development</h5>
                <p className="text-tech-gray/70 font-tech text-sm">Full-stack web development with modern frameworks</p>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <div className="text-4xl mb-4">🤖</div>
                <h5 className="text-xl font-cyber text-cyan-glow mb-2">Data Science & AI</h5>
                <p className="text-tech-gray/70 font-tech text-sm">Machine learning and AI with practical applications</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-electric-cyan mb-8">
              <BellIcon className="w-6 h-6" />
              <span className="text-lg font-cyber font-semibold">Get notified when we launch our online classes!</span>
            </div>

            <p className="text-tech-gray font-tech text-lg mb-8 max-w-3xl mx-auto">
              We're working hard to create the most comprehensive and practical online learning experience. 
              Our classes will combine theoretical knowledge with hands-on projects, ensuring you're <span className="text-electric-blue font-semibold">job-ready upon completion</span>.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-cyan to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center"
            >
              <AcademicCapIcon className="w-6 h-6 mr-2" />
              Stay Updated
            </motion.button>

            {/* Acknowledgment Message Box */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-8 glass-effect p-6 rounded-2xl border border-green-400/30 bg-green-400/10 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-cyber text-green-400">Thank You for Your Interest!</h4>
              </div>
              <p className="text-tech-gray font-tech text-center">
                We appreciate your enthusiasm for learning with Vignan TechSolutions. Our team is working diligently to launch comprehensive online classes that will transform your career in technology. Stay tuned for updates!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}