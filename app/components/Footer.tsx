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
      <div className="container-responsive py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
              <Logo className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-0 sm:mr-3" />
              <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-space font-bold text-electric-cyan">
                <span className="block sm:inline">Vignan </span>
                <span className="text-white">TechSolutions</span>
              </Link>
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              Empowering Tech Minds | Building Smart Solutions. We bridge the gap between education and innovation.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-electric-cyan/20 rounded-full flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-dark-gray transition-all"
              >
                <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:vignantechsolutions@gmail.com"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-electric-cyan/20 rounded-full flex items-center justify-center text-electric-cyan hover:bg-electric-cyan hover:text-dark-gray transition-all"
              >
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm sm:text-base text-gray-300 hover:text-electric-cyan transition-colors">Services</Link></li>
              <li><Link href="/classes" className="text-sm sm:text-base text-gray-300 hover:text-electric-cyan transition-colors">Online Classes</Link></li>
              <li><Link href="/about" className="text-sm sm:text-base text-gray-300 hover:text-electric-cyan transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm sm:text-base text-gray-300 hover:text-electric-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Info</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start text-gray-300">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">vignantechsolutions@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 9110478047</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  Kalaburagi, Karnataka<br />India - 585103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            © 2024 Vignan TechSolutions. All rights reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            <Link href="/privacy" className="text-electric-cyan hover:underline ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="text-electric-cyan hover:underline ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}