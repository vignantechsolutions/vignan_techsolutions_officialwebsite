'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FuturisticHero() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({length: 50}, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-navy">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{ left: particle.x }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ 
              y: '-10vh',
              opacity: [0, 0.6, 0.6, 0],
              x: [0, 50, -30, 100]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Digital Wave Effects */}
      <div className="absolute top-1/4 left-0 right-0">
        <div className="digital-wave" style={{animationDelay: '0s'}}></div>
      </div>
      <div className="absolute bottom-1/4 left-0 right-0">
        <div className="digital-wave" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-cyber font-black mb-6 leading-tight">
            <span className="cyber-text">VIGNAN</span>
            <span className="text-tech-gray ml-2">
              <span className="text-purple-400">T</span>ECH<span className="text-purple-400">S</span>OLUTIONS
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="glass-effect p-8 rounded-3xl max-w-5xl mx-auto border border-cyan-glow/30 relative overflow-hidden">
              {/* Neural Network Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="neural-network-bg"></div>
              </div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-6"
                >
                  <h2 className="text-2xl md:text-3xl font-cyber text-electric-cyan mb-4 text-center">
                    <span className="glow-text">EMPOWERING</span> <span className="text-purple-400">DIGITAL</span> <span className="text-white">TRANSFORMATION</span>
                  </h2>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-tech-gray font-tech leading-relaxed mb-6 text-center"
                >
                  At <span className="text-electric-cyan font-bold glow-text">Vignan TechSolutions</span>, we bridge the gap between 
                  <span className="text-purple-400 font-semibold">academic excellence</span> and 
                  <span className="text-cyan-glow font-semibold">industry innovation</span>. We're not just a tech company - 
                  we're <span className="text-electric-blue font-semibold">your growth partners</span> in the digital age.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6"
                >
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-electric-cyan/10 to-transparent border border-electric-cyan/20">
                    <div className="text-2xl mb-2">🎓</div>
                    <h3 className="text-electric-cyan font-semibold mb-1">Student Success</h3>
                    <p className="text-sm text-tech-gray/80">Final Year Projects & Career Guidance</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/20">
                    <div className="text-2xl mb-2">🚀</div>
                    <h3 className="text-purple-400 font-semibold mb-1">Business Growth</h3>
                    <p className="text-sm text-tech-gray/80">Web Solutions & Digital Presence</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-glow/10 to-transparent border border-cyan-glow/20">
                    <div className="text-2xl mb-2">🎆</div>
                    <h3 className="text-cyan-glow font-semibold mb-1">Innovation Hub</h3>
                    <p className="text-sm text-tech-gray/80">Cutting-edge Tech Solutions</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mt-6 p-4 rounded-xl bg-gradient-to-r from-electric-cyan/5 to-purple-500/5 border border-electric-cyan/20"
                >
                  <p className="text-lg text-center text-tech-gray/90 font-tech leading-relaxed">
                    <span className="text-electric-cyan font-bold">Our Mission:</span> To empower students with 
                    <span className="glow-text font-bold">industry-ready skills</span> and help businesses achieve 
                    <span className="text-purple-400 font-bold">digital excellence</span> through 
                    <span className="text-cyan-glow font-bold">innovative technology solutions</span> and 
                    <span className="text-electric-blue font-bold">personalized mentorship</span>.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 max-w-6xl mx-auto"
        >
          {[
            { name: 'AI/ML', icon: '🧠', color: 'cyan-glow' },
            { name: 'Python Fullstack', icon: '🐍', color: 'electric-blue' },
            { name: 'Java Fullstack', icon: '☕', color: 'cyan-glow' },
            { name: 'Web Development', icon: '🌐', color: 'electric-blue' },
            { name: 'MERN Stack', icon: '⚛️', color: 'cyan-glow' }
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="holo-card rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:animate-tech-glow transition-all">{tech.icon}</div>
              <h3 className="font-cyber text-sm text-tech-gray group-hover:text-cyan-glow transition-colors">{tech.name}</h3>
              
              {/* Cyber Scan Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-glow animate-cyber-scan"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'grid-flow 20s linear infinite'
        }}></div>
      </div>
    </section>
  )
}