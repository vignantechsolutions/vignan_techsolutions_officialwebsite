'use client'
export default function FastHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-deep-navy">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-8xl font-cyber font-black mb-6 relative text-center">
          <span className="bg-gradient-to-r from-cyan-glow via-electric-blue to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            VIGNAN <span className="text-maroon-600 drop-shadow-lg">T</span>ECH<span className="text-maroon-600 drop-shadow-lg">S</span>OLUTIONS
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow via-electric-blue to-purple-400 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
            VIGNAN <span className="text-maroon-600">T</span>ECH<span className="text-maroon-600">S</span>OLUTIONS
          </div>
        </h1>
        <p className="text-xl text-tech-gray mb-8">
          Where Innovation Meets Academic Excellence
        </p>
        <p className="text-lg text-tech-gray/90 mb-8">
          Empowering future engineers to ideate, design, and deploy cutting-edge, industry-ready solutions. Through impactful final year projects and in-depth technical mentorship, we foster creativity, technical mastery, and real-world problem-solving—bridging the gap between academic learning and professional innovation in a rapidly evolving technological landscape.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
          {['💡 Innovate', '✨ Create', '⚡ Transform', '🎯 Succeed', '🏆 Excel'].map((item, i) => (
            <div key={i} className="glass-panel rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{item.split(' ')[0]}</div>
              <h3 className="text-cyan-glow font-cyber text-sm">{item.split(' ')[1]}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}