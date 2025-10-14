import './globals.css'
import { Inter } from 'next/font/google'
import InteractiveBackground from './components/InteractiveBackground'
import ScrollProgressBar from './components/ScrollProgressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vignan TechSolutions - Empowering Innovators',
  description: 'From final year projects to enterprise-grade websites — we transform your ideas into digital success stories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InteractiveBackground />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  )
}