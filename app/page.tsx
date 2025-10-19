'use client'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import FastHero from './components/FastHero'
import TechStackVisualizer from './components/TechStackVisualizer'
import Interactive3DShowcase from './components/Interactive3DShowcase'
import ApprovedFeedbacks from './components/ApprovedFeedbacks'
import LaunchProjectButton from './components/LaunchProjectButton'
const ProcessFlowDiagram = () => null
const SmartTestimonials = () => null
const SimpleSuccessStories = () => null
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy overflow-x-hidden">
      <Navbar />
      <FastHero />
      
      {/* Tech Stack Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStackVisualizer />
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Interactive3DShowcase />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-10">

        <ApprovedFeedbacks />
      </section>
      


      <Footer />
    </main>
  )
}