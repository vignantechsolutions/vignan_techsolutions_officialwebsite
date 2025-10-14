'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed w-full z-50 glass-panel border-b border-cyan-glow/20 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo className="w-8 h-8 mr-3" />
            <Link href="/" className="text-2xl font-cyber font-bold text-cyan-glow">
              Vignan <span className="text-tech-gray">TechSolutions</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">Home</Link>
            <Link href="/services" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">Services</Link>
            <Link href="/portfolio" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">Portfolio</Link>
            <Link href="/classes" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">Classes</Link>
            <Link href="/about" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">About</Link>
            <Link href="/contact" className="text-tech-gray hover:text-cyan-glow transition-colors font-tech">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-tech-gray">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">Home</Link>
            <Link href="/services" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">Services</Link>
            <Link href="/portfolio" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">Portfolio</Link>
            <Link href="/classes" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">Classes</Link>
            <Link href="/about" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-tech-gray hover:text-cyan-glow font-tech">Contact</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}