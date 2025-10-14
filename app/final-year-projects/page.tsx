import Navbar from '../components/Navbar'
import FinalYearProjects from '../components/FinalYearProjects'
import Footer from '../components/Footer'

export default function FinalYearProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FinalYearProjects />
      </div>
      <Footer />
    </main>
  )
}