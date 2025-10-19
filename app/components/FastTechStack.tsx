'use client'

export default function FastTechStack() {
  const stacks = [
    { name: 'AI/ML', icon: '🧠', techs: ['Python', 'TensorFlow', 'PyTorch'] },
    { name: 'MERN Stack', icon: '⚛️', techs: ['MongoDB', 'Express', 'React', 'Node.js'] },
    { name: 'Java Enterprise', icon: '☕', techs: ['Spring Boot', 'Microservices'] },
    { name: 'Web Tech', icon: '🌐', techs: ['Next.js', 'TypeScript', 'Tailwind'] }
  ]

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-400 mb-2">
          Technology Solutions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2">
          {stacks.map((stack, i) => (
            <div key={i} className="bg-gray-800/50 backdrop-blur border border-blue-400/30 rounded p-1.5 sm:p-2 text-center hover:scale-105 transition-all duration-300 group">
              <div className="text-base sm:text-lg mb-1 group-hover:scale-110 transition-transform duration-300">{stack.icon}</div>
              <h3 className="text-xs font-bold text-blue-400 mb-1">{stack.name}</h3>
              <div className="space-y-0.5">
                {stack.techs.map((tech, j) => (
                  <div key={j} className="bg-gray-900/50 rounded px-1 py-0.5 text-xs text-gray-300 hover:bg-blue-400/10 transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}