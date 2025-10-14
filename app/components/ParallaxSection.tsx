'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className = '', speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`relative ${className}`}
    >
      {children}
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({length: 5}).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-glow rounded-full opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}