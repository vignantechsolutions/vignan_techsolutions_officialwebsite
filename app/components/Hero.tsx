'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRightIcon, CodeBracketIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="min-h-screen-safe flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-96 h-48 sm:h-96 bg-electric-cyan opacity-10 sm:opacity-20" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500 opacity-8 sm:opacity-15" style={{animationDelay: '5s'}}></div>
        <div className="floating-orb absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-pink-500 opacity-5 sm:opacity-10" style={{animationDelay: '10s'}}></div>
        
        {/* Animated Grid Lines - Hidden on mobile for performance */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent"
              style={{ top: `${20 + i * 20}%`, width: '100%' }}
              animate={{ x: [-1000, 1000] }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>
      </div>

      <div className="container-responsive text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-space font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="text-white">Empowering </span>
            <span className="text-electric-cyan">Innovators.</span>
            <br className="hidden sm:block" />
            <span className="text-white">Building </span>
            <span className="bg-gradient-to-r from-electric-cyan to-royal-blue bg-clip-text text-transparent">
              Future-Ready Solutions.
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-fluid-lg sm:text-fluid-xl lg:text-fluid-2xl text-gray-300 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto px-4"
          >
            From final year projects to enterprise-grade websites — we transform your ideas into digital success stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #06B6D4" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-electric-cyan text-dark-gray px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 neon-glow"
              >
                Get Started <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass-effect px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-white border border-electric-cyan/30"
            >
              View Portfolio
            </motion.button>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4"
          >
            <motion.div 
              className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <CodeBracketIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-electric-cyan mx-auto mb-3 sm:mb-4" />
              </motion.div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 relative z-10">Final Year Projects</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">AI, IoT, ML, Web & Mobile projects with complete documentation</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group relative overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-electric-cyan mx-auto mb-3 sm:mb-4" />
              </motion.div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 relative z-10">Web Development</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Enterprise-grade websites and applications</p>
            </motion.div>
            
            <motion.div 
              className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group relative overflow-hidden sm:col-span-2 lg:col-span-1"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 premium-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <AcademicCapIcon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-electric-cyan mx-auto mb-3 sm:mb-4" />
              </motion.div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 relative z-10">Tech Classes</h3>
              <p className="text-sm sm:text-base text-gray-300 relative z-10">Live online courses with expert instructors</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}