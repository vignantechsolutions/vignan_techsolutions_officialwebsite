'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { number: 500, label: 'Projects Delivered', suffix: '+', icon: '🚀', color: 'cyan-glow' },
  { number: 1000, label: 'Students Trained', suffix: '+', icon: '👨‍💻', color: 'electric-blue' },
  { number: 50, label: 'Industry Partners', suffix: '+', icon: '🤝', color: 'purple-400' },
  { number: 95, label: 'Success Rate', suffix: '%', icon: '⭐', color: 'green-400' }
]

export default function SmartStatsGrid() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.number) {
            newCounters[index] = Math.min(newCounters[index] + Math.ceil(stat.number / 100), stat.number)
          }
          return newCounters
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="holo-card rounded-2xl p-6 text-center h-full hover:animate-tech-glow transition-all">
            {/* Floating Icon */}
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl mb-4"
            >
              {stat.icon}
            </motion.div>

            {/* Animated Counter */}
            <motion.div
              className={`text-4xl font-cyber text-${stat.color} mb-2`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {counters[index]}{stat.suffix}
            </motion.div>

            <p className="text-tech-gray/70 font-tech text-sm">{stat.label}</p>

            {/* Holographic Scan Line */}
            <motion.div
              className={`absolute bottom-0 left-0 h-1 bg-${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              animate={{ width: ['0%', '100%', '0%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}