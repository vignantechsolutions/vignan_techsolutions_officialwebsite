import Navbar from '../components/Navbar'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

export default function GetStartedPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <GetStarted />
      </div>
      <Footer />
    </main>
  )
}