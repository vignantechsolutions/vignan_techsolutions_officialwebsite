'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-deep-navy/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-glow via-electric-blue to-cyan-glow relative"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow via-electric-blue to-cyan-glow blur-sm opacity-50"></div>
        
        {/* Scanning line */}
        <motion.div
          className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-cyan-glow to-transparent opacity-80"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}