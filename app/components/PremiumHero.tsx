'use client'
import { motion } from 'framer-motion'
import { ChevronRightIcon, SparklesIcon, CpuChipIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-20 left-20 w-96 h-96 bg-cyber-green opacity-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute bottom-20 right-20 w-80 h-80 bg-neural-blue opacity-10" style={{animationDelay: '8s'}}></div>
        <div className="floating-orb absolute top-1/2 left-1/2 w-64 h-64 bg-quantum-purple opacity-10" style={{animationDelay: '16s'}}></div>
      </div>

      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({length: 144}).map((_, i) => (
            <div key={i} className="border border-cyber-green/20 animate-pulse-glow" style={{animationDelay: `${i * 0.1}s`}}></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">


        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-cyber font-black mb-8 leading-tight"
        >
          <span className="cyber-text">VIGNAN</span>
          <br />
          <span className="text-white">
            <span className="text-purple-400">T</span>ECH<span className="text-purple-400">S</span>OLUTIONS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-neural leading-relaxed"
        >
          Empowering the next generation of{' '}
          <span className="text-cyber-green font-semibold">Computer Scientists</span> and{' '}
          <span className="text-neural-blue font-semibold">Industry Experts</span> with cutting-edge projects, 
          AI-driven solutions, and premium tech education.
        </motion.p>



        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {[
            { name: 'AI/ML', icon: '🧠', color: 'cyber-green' },
            { name: 'Python Fullstack', icon: '🐍', color: 'neural-blue' },
            { name: 'Java Fullstack', icon: '☕', color: 'quantum-purple' },
            { name: 'Web Development', icon: '🌐', color: 'electric-cyan' },
            { name: 'MERN Stack', icon: '⚛️', color: 'matrix-amber' }
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="holographic rounded-2xl p-6 text-center hover:animate-hologram transition-all"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-cyber text-sm text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 20}).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [-100, window.innerWidth + 100],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-xs font-code text-cyber-green/30"
          >
            {['const', 'function', 'async', 'await', 'class', 'import', 'export', 'return'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>
    </section>
  )
}