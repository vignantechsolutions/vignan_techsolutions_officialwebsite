'use client'
import { motion } from 'framer-motion'

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <motion.div 
      className={`${className} relative cursor-pointer`}
      whileHover={{ 
        scale: 1.1,
        rotateY: 15,
        rotateX: 5,
        filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="30%" stopColor="#3B82F6" />
            <stop offset="60%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
          </linearGradient>
          <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feOffset dx="0" dy="0" result="offsetBlur"/>
            <feMerge> 
              <feMergeNode in="offsetBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="innerShadow">
            <feOffset dx="0" dy="2"/>
            <feGaussianBlur stdDeviation="2" result="offset-blur"/>
            <feFlood floodColor="#000000" floodOpacity="0.3"/>
            <feComposite in2="offset-blur" operator="in"/>
            <feMerge> 
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        
        {/* 3D Base Shadow */}
        <motion.polygon
          points="60,8 95,28 95,68 60,88 25,68 25,28"
          fill="rgba(0,0,0,0.2)"
          transform="translate(2,2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        
        {/* Main 3D Hexagon */}
        <motion.polygon
          points="60,8 95,28 95,68 60,88 25,68 25,28"
          fill="url(#logoGradient)"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          filter="url(#premiumGlow)"
          initial={{ pathLength: 0, scale: 0 }}
          animate={{ 
            pathLength: 1, 
            scale: 1,
            rotate: [0, 360]
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            scale: { duration: 1, delay: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        
        {/* Inner 3D Frame */}
        <motion.polygon
          points="60,18 85,33 85,63 60,78 35,63 35,33"
          fill="rgba(255,255,255,0.1)"
          stroke="url(#innerGradient)"
          strokeWidth="2"
          filter="url(#innerShadow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* 3D Circuit Patterns */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.path
            d="M40,35 L50,35 L50,45 L70,45 L70,35 L80,35 M50,45 L50,55 M70,45 L70,55 M40,55 L50,55 L70,55 L80,55"
            fill="none"
            stroke="url(#innerGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          />
          
          {/* Tech nodes */}
          <motion.circle cx="40" cy="35" r="2" fill="#06B6D4" filter="url(#premiumGlow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          />
          <motion.circle cx="80" cy="35" r="2" fill="#8B5CF6" filter="url(#premiumGlow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
          />
          <motion.circle cx="40" cy="55" r="2" fill="#EC4899" filter="url(#premiumGlow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
          />
          <motion.circle cx="80" cy="55" r="2" fill="#06B6D4" filter="url(#premiumGlow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
          />
        </motion.g>
        
        {/* Premium 3D "V" */}
        <motion.text
          x="60"
          y="52"
          textAnchor="middle"
          className="text-3xl font-bold"
          fill="url(#innerGradient)"
          filter="url(#innerShadow)"
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            rotateY: 0,
            textShadow: "0 0 10px rgba(6, 182, 212, 0.8)"
          }}
          transition={{ duration: 0.8, delay: 2, type: "spring" }}
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          V
        </motion.text>
        
        {/* Floating particles */}
        <motion.g>
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={30 + i * 12}
              cy={20 + (i % 2) * 50}
              r="1"
              fill={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#8B5CF6" : "#EC4899"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [10, -5, 10],
                scale: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: 2 + i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.g>
      </svg>
      
      {/* 3D Reflection Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  )
}