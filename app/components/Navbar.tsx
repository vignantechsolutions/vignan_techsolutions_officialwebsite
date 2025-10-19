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
      transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
      className="fixed w-full z-50 glass-panel border-b border-cyan-glow/20 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Logo className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
            <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-cyber font-bold text-cyan-glow">
              <span className="hidden sm:inline">Vignan </span>
              <span className="sm:hidden">VTS</span>
              <span className="text-tech-gray hidden sm:inline">TechSolutions</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-sm xl:text-base text-tech-gray hover:text-cyan-glow transition-colors font-tech">Home</Link>
            <Link href="/services" className="text-sm xl:text-base text-tech-gray hover:text-cyan-glow transition-colors font-tech">Services</Link>
            <Link href="/classes" className="text-sm xl:text-base text-tech-gray hover:text-cyan-glow transition-colors font-tech">Classes</Link>
            <Link href="/about" className="text-sm xl:text-base text-tech-gray hover:text-cyan-glow transition-colors font-tech">About</Link>
            <Link href="/contact" className="text-sm xl:text-base text-tech-gray hover:text-cyan-glow transition-colors font-tech">Contact</Link>
            <Link href="/admin" className="text-sm xl:text-base bg-cyan-glow/20 text-cyan-glow hover:bg-cyan-glow/30 transition-colors font-tech px-3 py-1 rounded-lg">Admin</Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-tech-gray hover:text-cyan-glow transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="lg:hidden glass-panel border-t border-cyan-glow/20"
        >
          <div className="px-3 pt-3 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-3 text-tech-gray hover:text-cyan-glow font-tech rounded-lg hover:bg-cyan-glow/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="block px-4 py-3 text-tech-gray hover:text-cyan-glow font-tech rounded-lg hover:bg-cyan-glow/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>

            <Link 
              href="/classes" 
              className="block px-4 py-3 text-tech-gray hover:text-cyan-glow font-tech rounded-lg hover:bg-cyan-glow/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Classes
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-tech-gray hover:text-cyan-glow font-tech rounded-lg hover:bg-cyan-glow/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-tech-gray hover:text-cyan-glow font-tech rounded-lg hover:bg-cyan-glow/10 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/admin" 
              className="block px-4 py-3 bg-cyan-glow/20 text-cyan-glow hover:bg-cyan-glow/30 font-tech rounded-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}