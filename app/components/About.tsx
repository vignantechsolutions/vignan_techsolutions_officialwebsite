'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  RocketLaunchIcon, 
  LightBulbIcon, 
  HeartIcon, 
  UsersIcon,
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const team = [
  { name: "Suresh Tammali", expertise: "AI/ML, Full Stack" },
  { name: "Manjunath Reddy", expertise: "Full Stack, Cloud" },
  { name: "Ravi Shalvadi", expertise: "Data Science, ML" },
  { name: "Roshan", expertise: "Software Development" }
]

const values = [
  { 
    icon: LightBulbIcon, 
    title: "Innovation", 
    desc: "We encourage creativity and out-of-the-box thinking in every project",
    color: "from-yellow-400 to-orange-500"
  },
  { 
    icon: SparklesIcon, 
    title: "Excellence", 
    desc: "Quality isn't an option — it's our foundation in everything we deliver",
    color: "from-blue-400 to-purple-500"
  },
  { 
    icon: HeartIcon, 
    title: "Integrity", 
    desc: "We value trust, transparency, and teamwork in all our interactions",
    color: "from-red-400 to-pink-500"
  },
  { 
    icon: AcademicCapIcon, 
    title: "Learning", 
    desc: "Technology never stops evolving, and neither do we or our students",
    color: "from-green-400 to-teal-500"
  },
  { 
    icon: GlobeAltIcon, 
    title: "Impact", 
    desc: "Every line of code we write aims to make a meaningful difference",
    color: "from-purple-400 to-indigo-500"
  }
]

const milestones = [
  { year: "2024", title: "The Spark", desc: "Started helping engineering, BCA, and MCA students with final-year projects" },
  { year: "2024", title: "Growing Impact", desc: "Expanded to web development and tech consulting services" },
  { year: "2024", title: "500+ Projects", desc: "Successfully delivered hundreds of student and industrial projects" },
  { year: "2025", title: "Future Vision", desc: "Scaling with AI-powered tools and comprehensive learning platforms" }
]

const stats = [
  { number: "25+", label: "Student Projects Completed", icon: AcademicCapIcon },
  { number: "10+", label: "Web Solutions Delivered", icon: GlobeAltIcon },
  { number: "100+", label: "Students Guided & Mentored", icon: UsersIcon },
  { number: "100%", label: "Client Satisfaction Rate", icon: SparklesIcon }
]

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.8])

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-electric-cyan opacity-10" style={{animationDelay: '0s'}}></div>
        <div className="floating-orb absolute top-40 right-20 w-24 h-24 bg-purple-500 opacity-10" style={{animationDelay: '5s'}}></div>
        <div className="floating-orb absolute bottom-40 left-1/4 w-20 h-20 bg-pink-500 opacity-10" style={{animationDelay: '10s'}}></div>
        
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(0,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(168,85,247,0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(0,89,255,0.2) 0%, transparent 50%)
            `
          }}></div>
        </div>
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>
      
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto relative z-10">
        {/* Advanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          {/* Holographic Title Effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 relative"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-cyber font-bold mb-6 bg-gradient-to-r from-white via-electric-cyan to-purple-400 bg-clip-text text-transparent relative"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0,255,255,0.5)',
                  '0 0 40px rgba(168,85,247,0.5)',
                  '0 0 20px rgba(0,255,255,0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Turning Ideas into Impactful Innovations
              
              {/* Scanning Line Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
                animate={{ y: [0, 80, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.h2>
            
            {/* Animated Underline */}
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-purple-500 mx-auto mb-8 relative"
              animate={{
                scaleX: [1, 1.5, 1],
                boxShadow: [
                  '0 0 10px rgba(0,255,255,0.5)',
                  '0 0 30px rgba(168,85,247,0.8)',
                  '0 0 10px rgba(0,255,255,0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed space-y-6"
          >
            <p>
              Every great venture begins with a spark — an idea fueled by passion, curiosity, and the desire to make a difference.
              For <span className="text-electric-cyan font-semibold">Vignan TechSolutions</span>, that spark ignited in 2024, when a group of tech enthusiasts began helping engineering, BCA, and MCA students bring their final-year project ideas to life.
            </p>
            <p>
              What started as a small initiative — assisting students with project building, documentation, and technical support — quickly grew into a dynamic tech venture focused on innovation, quality, and real-world application.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">🌱 Our Journey</h3>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              From guiding a handful of students to developing hundreds of successful academic and industrial projects, Vignan TechSolutions has evolved into a trusted platform for:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              "Complete Final Year Project Packages",
              "Web Development & Maintenance Services", 
              "Tech Consulting & AI-based Solutions",
              "Online Tech Classes with Industry Experts"
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl flex items-center"
              >
                <div className="w-3 h-3 bg-electric-cyan rounded-full mr-4"></div>
                <span className="text-gray-300 text-lg">{service}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center glass-effect p-8 rounded-3xl"
          >
            <p className="text-xl text-gray-300 mb-4">But our mission has always remained the same:</p>
            <p className="text-2xl font-semibold text-electric-cyan">
              Empower learners, inspire creators, and bridge the gap between education and innovation.
            </p>
          </motion.div>
        </motion.div>

        {/* Advanced Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            className="glass-effect p-10 rounded-3xl relative overflow-hidden group border border-cyan-glow/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Holographic Scan Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-0 group-hover:opacity-100"
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-blue-600 rounded-2xl flex items-center justify-center mr-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <h3 className="text-3xl font-cyber text-cyan-glow">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To make technology education practical, accessible, and industry-driven — enabling students and professionals to learn, build, and innovate through real-world tech experiences.
              </p>
              <p className="text-gray-400 mt-4 italic">
                We believe every idea, no matter how small, has the potential to shape the future — and we're here to turn that potential into reality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: -2 }}
            className="glass-effect p-10 rounded-3xl relative overflow-hidden group border border-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Holographic Scan Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ y: [0, 300, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>
                <h3 className="text-3xl font-cyber text-purple-400">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become a leading innovation hub that empowers the next generation of tech minds — combining education, technology, and creativity to solve real-world challenges.
              </p>
              <p className="text-gray-400 mt-4 italic">
                We envision a world where every student graduates not just with a degree — but with a product, a portfolio, and a purpose.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">⚙️ What We Stand For</h3>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-effect p-8 rounded-3xl text-center group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder's Message */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden border border-cyan-glow/30">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-purple-500/10"></div>
            
            <motion.div 
              className="absolute top-8 left-8 text-6xl text-cyan-glow/30 font-cyber"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "
            </motion.div>
            <div className="relative z-10 text-center">
              <motion.h3 
                className="text-4xl font-cyber text-cyan-glow mb-8"
                animate={{ textShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 20px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👨💻 Our Founder's Message
              </motion.h3>
              
              <motion.blockquote 
                className="text-xl text-tech-gray font-tech italic leading-relaxed mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="text-electric-blue">"Vignan TechSolutions was born out of a simple idea — to help students not just complete their projects, but understand technology in a way that excites them.</span>
                <br /><br />
                <span className="text-purple-400">Every project we build, every class we conduct, and every solution we deliver carries that same vision — to create opportunities, ignite curiosity, and turn learners into innovators."</span>
              </motion.blockquote>
              
              <motion.div
                className="flex items-center justify-center space-x-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-glow to-electric-blue rounded-full flex items-center justify-center">
                  <span className="text-deep-navy font-cyber font-bold">ST</span>
                </div>
                <p className="text-cyan-glow font-cyber text-lg">— Suresh Tammali, Founder of Vignan TechSolutions</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-5xl font-cyber text-cyan-glow mb-4"
              animate={{ textShadow: ['0 0 10px rgba(0,255,255,0.5)', '0 0 30px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Meet Our Team
            </motion.h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl text-center"
              >
                <h4 className="text-xl font-cyber text-cyan-glow mb-2">{member.name}</h4>
                <p className="text-gray-400 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 via-purple-500/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">🚀 Transforming Ideas into Reality</h3>
                <p className="text-gray-400 mb-6">Building the future through innovation and education</p>
                <div className="max-w-3xl mx-auto text-gray-300 text-sm leading-relaxed">
                  <p className="mb-4">
                    From conceptualizing cutting-edge student projects to delivering enterprise-grade web solutions, we've established ourselves as 
                    a trusted technology partner. Our commitment to excellence and personalized mentorship has created a community of successful 
                    developers and innovators.
                  </p>
                  <p>
                    Each milestone represents not just numbers, but real stories of students who've launched their careers, businesses that've 
                    scaled their operations, and ideas that've transformed into impactful solutions.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-electric-cyan/25"
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-4xl font-bold text-electric-cyan mb-2">{stat.number}</div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="inline-flex items-center px-6 py-3 bg-electric-cyan/20 rounded-full border border-electric-cyan/30">
                    <span className="text-electric-cyan font-semibold">Dedicated Project Support</span>
                  </div>
                  <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 rounded-full border border-purple-500/30">
                    <span className="text-purple-400 font-semibold">Technical Training Programs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Looking Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-electric-cyan/5"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">🌟 Looking Ahead</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                As we continue to grow, Vignan TechSolutions is expanding its reach beyond academic projects — building AI-powered tools, online learning platforms, and automation solutions for the future.
              </p>
              <p className="text-2xl font-semibold text-electric-cyan mb-4">
                Our story has just begun — and we invite you to be part of it.
              </p>
              <p className="text-xl text-white font-bold">
                Let's code the future together.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}