'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import FeedbackSection from '../components/FeedbackSection'
import Footer from '../components/Footer'

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      
      {/* Header */}
      <section className="pt-20 pb-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-tech-gray hover:text-cyan-glow transition-colors mb-3"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-cyber text-cyan-glow">
              Share Your Experience
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />
      
      <Footer />
    </main>
  )
}