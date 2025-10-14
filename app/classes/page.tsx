import Navbar from '../components/Navbar'
import Classes from '../components/Classes'
import Footer from '../components/Footer'

export default function ClassesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Classes />
      </div>
      <Footer />
    </main>
  )
}