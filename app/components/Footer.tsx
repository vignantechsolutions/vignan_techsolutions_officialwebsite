'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from './Logo'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="relative bg-dark-gray/50 backdrop-blur-lg border-t border-white/10 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute -top-20 -left-20 w-40 h-40 bg-electric-cyan opacity-5" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute -bottom-20 -right-20 w-32 h-32 bg-purple-500 opacity-5" style={{animationDelay: '10s'}}></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-px premium-gradient opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo className="w-10 h-10 mr-3" />
              <Link href="/" className="text-3xl font-space font-bold text-electric-cyan">
                Vignan <span className="text-white">TechSolutions</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Tech Minds | Building Smart Solutions. We bridge the gap between education and innovation.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-electric-cyan/20 rounded-full flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-dark-gray transition-all"
              >
                <GlobeAltIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:vignantechsolutions@gmail.com"
                className="w-10 h-10 bg-electric-cyan/20 rounded-full flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-dark-gray transition-all"
              >
                <EnvelopeIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-electric-cyan transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-electric-cyan transition-colors">Portfolio</Link></li>
              <li><Link href="/classes" className="text-gray-300 hover:text-electric-cyan transition-colors">Online Classes</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-electric-cyan transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-electric-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-electric-cyan mr-3" />
                vignantechsolutions@gmail.com
              </li>
              <li className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 text-electric-cyan mr-3" />
                +91 9110478047
              </li>
              <li className="flex items-start text-gray-300">
                <MapPinIcon className="w-5 h-5 text-electric-cyan mr-3 mt-1" />
                <span>Kalaburagi, Karnataka<br />India - 585103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Vignan TechSolutions. All rights reserved. | 
            <Link href="/privacy" className="text-electric-cyan hover:underline ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="text-electric-cyan hover:underline ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}