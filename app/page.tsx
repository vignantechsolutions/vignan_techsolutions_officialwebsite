import Navbar from './components/Navbar'
import FuturisticHero from './components/FuturisticHero'
import TechStackVisualizer from './components/TechStackVisualizer'
import Interactive3DShowcase from './components/Interactive3DShowcase'
import ProcessFlowDiagram from './components/ProcessFlowDiagram'
import SmartTestimonials from './components/SmartTestimonials'
import ParallaxSection from './components/ParallaxSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-navy relative z-10">
      <Navbar />
      <FuturisticHero />
      
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <ParallaxSection className="py-20" speed={0.3}>
                <TechStackVisualizer />
              </ParallaxSection>
              
              <ParallaxSection className="py-20">
                <Interactive3DShowcase />
              </ParallaxSection>
              
              <ParallaxSection speed={0.4}>
                <ProcessFlowDiagram />
              </ParallaxSection>
              
              <ParallaxSection className="py-20" speed={0.2}>
                <SmartTestimonials />
              </ParallaxSection>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}