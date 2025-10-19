'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import SmartServicesGrid from '../components/SmartServicesGrid'
import AdvancedServicesShowcase from '../components/AdvancedServicesShowcase'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-deep-navy">
      <Navbar />
      
      <section className="relative pt-32 pb-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-cyber font-black">
              <span className="cyber-text">OUR</span>
              <span className="text-purple-400 ml-4">SERVICES</span>
            </h1>
            <p className="text-xl text-tech-gray max-w-4xl mx-auto mb-8">
              Comprehensive tech solutions tailored for students, startups, and enterprises
            </p>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmartServicesGrid />
        </div>
      </section>

      <section className="pt-2 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdvancedServicesShowcase />
        </div>
      </section>


      
      <Footer />
    </main>
  )
}