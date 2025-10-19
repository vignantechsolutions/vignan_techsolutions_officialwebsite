'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      if (credentials.username === 'Vignan' && credentials.password === 'Vignantech123') {
        localStorage.setItem('adminLoggedIn', 'true')
        router.push('/admin/dashboard')
      } else {
        setError('Invalid username or password')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="glass-panel rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-between items-center mb-4">
              <Link 
                href="/" 
                className="text-tech-gray hover:text-cyan-glow transition-colors text-sm flex items-center space-x-1"
              >
                <span>←</span>
                <span>Back to Main</span>
              </Link>
              <div></div>
            </div>
            <h1 className="text-3xl font-cyber text-cyan-glow mb-2">Admin Portal</h1>
            <p className="text-tech-gray font-tech">Secure access to dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-cyan-glow font-cyber text-sm mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                placeholder="Enter admin username"
                required
              />
            </div>
            
            <div>
              <label className="block text-cyan-glow font-cyber text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 p-2 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
            >
              {isLoading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>
          

        </div>
      </motion.div>
    </div>
  )
}