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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
        >
          <div className="relative mb-8">
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-cyber font-black leading-tight relative z-10"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)',
                  '0 0 30px rgba(168,85,247,0.8), 0 0 60px rgba(168,85,247,0.4)',
                  '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)'
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span 
                className="cyber-text inline-block"
                animate={{
                  rotateX: [0, 5, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                VIGNAN
              </motion.span>
              <motion.span 
                className="text-tech-gray ml-4 sm:ml-6 inline-block"
                animate={{
                  rotateX: [0, -5, 0],
                  rotateY: [0, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <motion.span 
                  className="text-purple-400"
                  animate={{ color: ['#a855f7', '#06b6d4', '#a855f7'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  T
                </motion.span>
                ECH
                <motion.span 
                  className="text-purple-400"
                  animate={{ color: ['#a855f7', '#06b6d4', '#a855f7'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  S
                </motion.span>
                OLUTIONS
              </motion.span>
            </motion.h1>
            
            {/* Holographic backdrop */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-glow/20 via-purple-400/20 to-cyan-glow/20 blur-3xl -z-10"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Matrix-style scanning lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1.5 }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-tech-gray font-tech leading-relaxed mb-6">
              Welcome to <span className="text-electric-cyan font-bold">Vignan TechSolutions</span> — where student ideas evolve into smart innovations.
            </p>
            <p className="text-base md:text-lg text-tech-gray/90 font-tech leading-relaxed mb-6">
              We help aspiring engineers design, develop, and deploy cutting-edge final year projects that fuse <span className="text-cyan-glow">AI</span>, <span className="text-purple-400">ML</span>, <span className="text-green-400">IoT</span>, and <span className="text-electric-blue">Web Development</span> into powerful real-world solutions.
            </p>
            <p className="text-base md:text-lg text-tech-gray/90 font-tech leading-relaxed mb-8">
              With our hands-on guidance, smart tools, and technical mentorship, your project journey becomes more than an assignment — it becomes your launchpad into the tech world.
            </p>
            <motion.div
              animate={{
                textShadow: [
                  '0 0 10px rgba(0,255,255,0.5)',
                  '0 0 20px rgba(168,85,247,0.5)',
                  '0 0 10px rgba(0,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl md:text-2xl font-cyber text-electric-cyan"
            >
              💡 Dream. Design. Develop. Deploy. — That's the Vignan Way.
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Advanced Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="tech-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto"
        >
          {[
            { name: 'Innovate', icon: '💡', color: 'from-cyan-glow to-electric-blue' },
            { name: 'Create', icon: '🚀', color: 'from-electric-blue to-purple-400' },
            { name: 'Transform', icon: '⚡', color: 'from-purple-400 to-green-400' },
            { name: 'Succeed', icon: '🎯', color: 'from-green-400 to-cyan-glow' },
            { name: 'Excel', icon: '🏆', color: 'from-cyan-glow to-electric-blue' }
          ].map((aim, index) => (
            <motion.div
              key={aim.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1, type: "spring", stiffness: 150, damping: 25 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="holo-card rounded-2xl p-6 text-center group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${aim.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5
                }}
              >
                {aim.icon}
              </motion.div>
              
              <h3 className="font-cyber text-lg text-cyan-glow group-hover:text-white transition-colors duration-300 relative z-10">
                {aim.name}
              </h3>
              
              {/* Holographic scan effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 100, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
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