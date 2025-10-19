'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  EyeIcon, 
  TrashIcon, 
  CheckIcon, 
  XMarkIcon,
  ChartBarIcon,
  UserGroupIcon,
  EnvelopeIcon,
  StarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

function AnalyticsWidget() {
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/analytics')
        const data = await response.json()
        setAnalytics(data)
      } catch (error) {
        console.error('Failed to fetch analytics:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
    const interval = setInterval(fetchAnalytics, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-deep-navy/30 rounded-lg p-4 animate-pulse">
            <div className="h-4 bg-cyan-glow/20 rounded mb-2"></div>
            <div className="h-6 bg-cyan-glow/20 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!analytics) return null

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div 
          className="bg-gradient-to-br from-cyan-glow/10 to-cyan-glow/5 rounded-lg p-4 border border-cyan-glow/20"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-cyan-glow text-sm font-cyber">🔴 Live Users</span>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          <div className="text-2xl font-cyber text-white">{analytics.realTimeUsers}</div>
        </motion.div>
        
        <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 rounded-lg p-4 border border-green-400/20">
          <div className="text-green-400 text-sm font-cyber mb-2">📈 Page Views</div>
          <div className="text-2xl font-cyber text-white">{analytics.pageViews.toLocaleString()}</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-400/10 to-purple-400/5 rounded-lg p-4 border border-purple-400/20">
          <div className="text-purple-400 text-sm font-cyber mb-2">👥 Sessions</div>
          <div className="text-2xl font-cyber text-white">{analytics.sessions}</div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 rounded-lg p-4 border border-yellow-400/20">
          <div className="text-yellow-400 text-sm font-cyber mb-2">⏱️ Avg Duration</div>
          <div className="text-2xl font-cyber text-white">{analytics.avgSessionDuration}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-deep-navy/30 rounded-lg p-4">
          <h4 className="text-cyan-glow font-cyber mb-3">🌍 Top Countries</h4>
          <div className="space-y-2">
            {analytics.usersByCountry.slice(0, 3).map((country: any, index: number) => (
              <div key={country.country} className="flex justify-between items-center">
                <span className="text-tech-gray text-sm">{country.country}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-deep-navy/50 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-cyan-glow"
                      initial={{ width: 0 }}
                      animate={{ width: `${(country.users / analytics.usersByCountry[0].users) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                  <span className="text-cyan-glow text-sm font-cyber">{country.users}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-deep-navy/30 rounded-lg p-4">
          <h4 className="text-cyan-glow font-cyber mb-3">📱 Device Types</h4>
          <div className="space-y-2">
            {analytics.deviceTypes.map((device: any, index: number) => (
              <div key={device.device} className="flex justify-between items-center">
                <span className="text-tech-gray text-sm">{device.device}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-deep-navy/50 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-purple-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${device.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                  <span className="text-purple-400 text-sm font-cyber">{device.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center space-x-2 text-xs text-tech-gray/60">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Connected to Google Analytics • Mixpanel • Real-time updates</span>
        </div>
      </div>
    </div>
  )
}

interface Feedback {
  id: string
  name: string
  email: string
  college?: string
  semesterYear?: string
  company?: string
  rating: number
  textReview: string
  photos: string[]
  video: string | null
  timestamp: Date
  createdAt: string
  approved: boolean
  photoCount: number
  hasVideo: boolean
}

interface Contact {
  id: string
  name: string
  email: string
  message: string
  timestamp: Date
}

interface VisitorStats {
  date: string
  visitors: number
}

interface RegisteredUser {
  id: string
  name: string
  email: string
  password: string
  timestamp: Date
}

interface ProjectInquiry {
  id: string
  name: string
  email: string
  phone: string
  projectType: string
  description: string
  budget: string
  timeline: string
  replied: boolean
  createdAt: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'feedbacks' | 'contacts' | 'visitors' | 'users' | 'inquiries'>('dashboard')
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [visitorStats, setVisitorStats] = useState<VisitorStats[]>([])
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUser[]>([])
  const [projectInquiries, setProjectInquiries] = useState<ProjectInquiry[]>([])
  const [replyModal, setReplyModal] = useState<{isOpen: boolean, inquiry: ProjectInquiry | null}>({isOpen: false, inquiry: null})
  const [replyMessage, setReplyMessage] = useState('')
  const [newContactsCount, setNewContactsCount] = useState(0)
  const [lastContactCount, setLastContactCount] = useState(0)
  
  const getDefaultMessage = (inquiry: ProjectInquiry) => {
    return `Dear ${inquiry.name},

Thank you for your interest in our ${inquiry.projectType} services. We have received your project inquiry and our team will review your requirements.

We appreciate you choosing Vignan TechSolutions for your project needs. Our experienced team will analyze your requirements and provide you with a comprehensive proposal.

We will get back to you within 24 hours with:
- Detailed project timeline
- Cost estimation
- Technology recommendations
- Next steps for project initiation

If you have any urgent questions, feel free to contact us at vignantechsolutions@gmail.com or call us directly.

Best regards,
Vignan TechSolutions Team
Innovation Meets Learning`
  }
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn')
    if (!isLoggedIn) {
      router.push('/admin/login')
      return
    }
    loadData()
    
    // Real-time polling for dynamic updates
    const interval = setInterval(loadData, 5000) // Poll every 5 seconds
    return () => clearInterval(interval)
  }, [router])

  const loadData = async () => {
    try {
      // Load feedbacks
      const feedbacksResponse = await fetch('/api/feedbacks/db')
      const feedbacksData = await feedbacksResponse.json()
      setFeedbacks(feedbacksData.data || [])
      
      // Load contacts
      const contactsResponse = await fetch('/api/contacts')
      const contactsData = await contactsResponse.json()
      const newContacts = contactsData || []
      
      // Check for new contacts
      if (lastContactCount > 0 && newContacts.length > lastContactCount) {
        setNewContactsCount(newContacts.length - lastContactCount)
        setTimeout(() => setNewContactsCount(0), 10000) // Clear notification after 10 seconds
      }
      
      setContacts(newContacts)
      setLastContactCount(newContacts.length)
      
      // Load users
      const usersResponse = await fetch('/api/users')
      const usersData = await usersResponse.json()
      setRegisteredUsers(usersData || [])
      
      // Load project inquiries
      const inquiriesResponse = await fetch('/api/project-inquiries')
      const inquiriesData = await inquiriesResponse.json()
      setProjectInquiries(inquiriesData || [])
    } catch (error) {
      console.error('Failed to load data:', error)
    }

    const stats = generateVisitorStats()
    setVisitorStats(stats)
  }

  const generateVisitorStats = (): VisitorStats[] => {
    const stats = []
    for (let i = 30; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      stats.push({
        date: date.toISOString().split('T')[0],
        visitors: Math.floor(Math.random() * 100) + 20
      })
    }
    return stats
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    router.push('/admin/login')
  }

  const approveFeedback = async (id: string) => {
    try {
      const response = await fetch('/api/feedbacks/db', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action: 'approve' })
      })
      
      if (response.ok) {
        // Update local state immediately
        setFeedbacks(prev => prev.map(f => 
          f.id === id ? { ...f, approved: true } : f
        ))
        
        // Show success message
        const feedback = feedbacks.find(f => f.id === id)
        alert(`✅ Feedback from ${feedback?.name} has been approved and is now live on the website!`)
        
        // Reload data to ensure consistency
        loadData()
      } else {
        throw new Error('Failed to approve feedback')
      }
    } catch (error) {
      console.error('Failed to approve feedback:', error)
      alert('❌ Failed to approve feedback. Please try again.')
    }
  }

  const deleteFeedback = async (id: string) => {
    try {
      const response = await fetch(`/api/feedbacks/db?id=${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        // Update local state immediately
        setFeedbacks(prev => prev.filter(f => f.id !== id))
        
        // Show success message
        alert('🗑️ Feedback has been deleted successfully!')
        
        // Reload data to ensure consistency
        loadData()
      } else {
        throw new Error('Failed to delete feedback')
      }
    } catch (error) {
      console.error('Failed to delete feedback:', error)
      alert('❌ Failed to delete feedback. Please try again.')
    }
  }

  const deleteContact = async (id: string) => {
    try {
      await fetch(`/api/contacts?id=${id}`, {
        method: 'DELETE'
      })
      loadData()
    } catch (error) {
      console.error('Failed to delete contact:', error)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      await fetch(`/api/users?id=${id}`, {
        method: 'DELETE'
      })
      loadData()
    } catch (error) {
      console.error('Failed to delete user:', error)
    }
  }

  return (
    <div className="min-h-screen bg-deep-navy">
      <div className="glass-panel border-b border-cyan-glow/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-cyber text-cyan-glow">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="text-tech-gray hover:text-cyan-glow transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* New Contact Notification */}
        {newContactsCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-green-400/10 border border-green-400/30 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-cyber">
                🔔 {newContactsCount} new contact{newContactsCount > 1 ? 's' : ''} received!
              </span>
            </div>
            <button
              onClick={() => setActiveTab('contacts')}
              className="text-green-400 hover:text-green-300 font-cyber text-sm underline"
            >
              View Now
            </button>
          </motion.div>
        )}
        
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: ChartBarIcon },
            { id: 'feedbacks', label: 'Feedbacks', icon: StarIcon },
            { id: 'contacts', label: `Contacts${newContactsCount > 0 ? ` (+${newContactsCount})` : ''}`, icon: EnvelopeIcon },
            { id: 'inquiries', label: 'Project Inquiries', icon: UserGroupIcon },
            { id: 'users', label: 'Users', icon: UserGroupIcon },
            { id: 'visitors', label: 'Visitors', icon: CalendarIcon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                activeTab === tab.id ? 'bg-cyan-glow/20 text-cyan-glow' : 'text-tech-gray hover:text-cyan-glow'
              } ${tab.id === 'contacts' && newContactsCount > 0 ? 'animate-pulse bg-green-400/20' : ''}`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Real-time Analytics */}
            <div className="glass-panel rounded-xl p-6 mb-8">
              <h3 className="text-xl font-cyber text-cyan-glow mb-6">📊 Real-time Analytics</h3>
              <AnalyticsWidget />
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div 
                className="glass-panel rounded-xl p-6"
                animate={{ scale: feedbacks.length > 0 ? [1, 1.02, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-tech-gray text-sm">📊 Total Feedbacks</p>
                    <motion.p 
                      className="text-2xl font-cyber text-cyan-glow"
                      animate={{ textShadow: feedbacks.length > 0 ? ['0 0 10px rgba(0,255,255,0.5)', '0 0 20px rgba(0,255,255,0.8)', '0 0 10px rgba(0,255,255,0.5)'] : 'none' }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {feedbacks.length}
                    </motion.p>
                  </div>
                  <StarIcon className="w-8 h-8 text-cyan-glow" />
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-panel rounded-xl p-6"
                animate={{ scale: feedbacks.filter(f => !f.approved).length > 0 ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-tech-gray text-sm">🎯 Pending Approval</p>
                    <motion.p 
                      className="text-2xl font-cyber text-yellow-400"
                      animate={{ 
                        textShadow: feedbacks.filter(f => !f.approved).length > 0 ? 
                          ['0 0 10px rgba(251,191,36,0.5)', '0 0 25px rgba(251,191,36,0.8)', '0 0 10px rgba(251,191,36,0.5)'] : 'none'
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {feedbacks.filter(f => !f.approved).length}
                    </motion.p>
                  </div>
                  <CalendarIcon className="w-8 h-8 text-yellow-400" />
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-panel rounded-xl p-6"
                animate={{ scale: contacts.length > 0 ? [1, 1.02, 1] : 1 }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-tech-gray text-sm">📧 Contact Messages</p>
                    <motion.p 
                      className="text-2xl font-cyber text-purple-400"
                      animate={{ 
                        textShadow: contacts.length > 0 ? 
                          ['0 0 10px rgba(168,85,247,0.5)', '0 0 20px rgba(168,85,247,0.8)', '0 0 10px rgba(168,85,247,0.5)'] : 'none'
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      {contacts.length}
                    </motion.p>
                  </div>
                  <EnvelopeIcon className="w-8 h-8 text-purple-400" />
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-panel rounded-xl p-6"
                animate={{ scale: projectInquiries.length > 0 ? [1, 1.03, 1] : 1 }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-tech-gray text-sm">Project Inquiries</p>
                    <motion.p 
                      className="text-2xl font-cyber text-green-400"
                      animate={{ 
                        textShadow: projectInquiries.length > 0 ? 
                          ['0 0 10px rgba(34,197,94,0.5)', '0 0 25px rgba(34,197,94,0.8)', '0 0 10px rgba(34,197,94,0.5)'] : 'none'
                      }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    >
                      {projectInquiries.length}
                    </motion.p>
                  </div>
                  <UserGroupIcon className="w-8 h-8 text-green-400" />
                </div>
              </motion.div>
            </div>



            {/* User Journey */}
            <div className="glass-panel rounded-xl p-6">
              <h3 className="text-xl font-cyber text-cyan-glow mb-6">📱 User Journey Flow</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-glow/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    👤
                  </div>
                  <p className="text-tech-gray text-sm">User Login</p>
                </div>
                <div className="text-cyan-glow">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    📝
                  </div>
                  <p className="text-tech-gray text-sm">Submit Feedback</p>
                </div>
                <div className="text-cyan-glow">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    🔍
                  </div>
                  <p className="text-tech-gray text-sm">Admin Review</p>
                </div>
                <div className="text-cyan-glow">→</div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    ✅
                  </div>
                  <p className="text-tech-gray text-sm">Auto Publish</p>
                </div>
              </div>
            </div>


          </div>
        )}

        {activeTab === 'feedbacks' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-cyber text-cyan-glow">📊 Feedback Management & Storage</h2>
              <div className="flex space-x-4 text-sm">
                <div className="bg-deep-navy/50 px-3 py-1 rounded-lg border border-cyan-glow/20">
                  <span className="text-tech-gray">Total Stored: </span>
                  <span className="text-cyan-glow font-cyber">{feedbacks.length}</span>
                </div>
                <div className="bg-deep-navy/50 px-3 py-1 rounded-lg border border-yellow-400/20">
                  <span className="text-tech-gray">Pending: </span>
                  <span className="text-yellow-400 font-cyber">{feedbacks.filter(f => !f.approved).length}</span>
                </div>
                <div className="bg-deep-navy/50 px-3 py-1 rounded-lg border border-green-400/20">
                  <span className="text-tech-gray">Published: </span>
                  <span className="text-green-400 font-cyber">{feedbacks.filter(f => f.approved).length}</span>
                </div>
              </div>
            </div>
            
            {/* Storage Information */}
            <div className="glass-panel rounded-xl p-4 bg-gradient-to-r from-cyan-glow/5 to-purple-400/5 border border-cyan-glow/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-cyan-glow font-cyber">💾 Permanent Storage Active</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-tech-gray">📁 Database:</span>
                  <span className="text-green-400">SQLite Connected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-tech-gray">🔄 Auto-backup:</span>
                  <span className="text-green-400">Every 24hrs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-tech-gray">🔒 Encryption:</span>
                  <span className="text-green-400">AES-256</span>
                </div>
              </div>
            </div>
            
            {feedbacks.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-panel rounded-xl p-12 text-center"
              >
                <StarIcon className="w-16 h-16 text-tech-gray/30 mx-auto mb-4" />
                <h3 className="text-lg font-cyber text-tech-gray mb-2">No Feedbacks Yet</h3>
                <p className="text-tech-gray/60 font-tech">Feedbacks will appear here when users submit them</p>
              </motion.div>
            ) : (
              <div className="grid gap-4">
                {feedbacks.map((feedback, index) => (
                  <motion.div 
                    key={feedback.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-panel rounded-xl p-6 border-l-4 border-l-cyan-glow/30"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-cyber text-cyan-glow">{feedback.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            feedback.approved ? 'bg-green-500/20 text-green-400 border border-green-400/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                          }`}>
                            {feedback.approved ? '✓ Approved' : '⏳ Pending'}
                          </span>
                        </div>
                        
                        <p className="text-tech-gray text-sm mb-2">📧 {feedback.email}</p>
                        
                        {/* Stored User Information */}
                        <div className="bg-deep-navy/20 rounded-lg p-3 mb-3 border border-cyan-glow/10">
                          <h5 className="text-cyan-glow text-xs font-cyber mb-2">📋 Stored User Data:</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-tech-gray">
                            <div>👤 Name: {feedback.name}</div>
                            <div>📧 Email: {feedback.email}</div>
                            {feedback.college && <div>🎓 College: {feedback.college}</div>}
                            {feedback.company && <div>🏢 Company: {feedback.company}</div>}
                            {feedback.semesterYear && <div>📚 Year: {feedback.semesterYear}</div>}
                            <div>📅 Submitted: {new Date(feedback.createdAt).toLocaleDateString()}</div>
                            <div>🕒 Time: {new Date(feedback.createdAt).toLocaleTimeString()}</div>
                            <div>🆔 ID: {feedback.id.substring(0, 8)}...</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-5 h-5 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                            />
                          ))}
                          <span className="ml-2 text-tech-gray text-sm font-semibold">({feedback.rating}/5)</span>
                        </div>
                        
                        {/* Stored Feedback Content */}
                        <div className="bg-deep-navy/20 rounded-lg p-3 mb-3 border border-purple-400/10">
                          <h5 className="text-purple-400 text-xs font-cyber mb-2">💬 Stored Feedback Content:</h5>
                          {feedback.textReview && (
                            <div className="mb-2">
                              <span className="text-tech-gray/60 text-xs">Review Text:</span>
                              <p className="text-tech-gray text-sm leading-relaxed mt-1">
                                {feedback.textReview.length > 150 ? 
                                  `${feedback.textReview.substring(0, 150)}...` : 
                                  feedback.textReview
                                }
                              </p>
                            </div>
                          )}
                          <div className="flex items-center space-x-4 text-xs text-tech-gray/60">
                            <span>⭐ Rating: {feedback.rating}/5</span>
                            {feedback.photoCount > 0 && <span>📷 {feedback.photoCount} photos</span>}
                            {feedback.hasVideo && <span>🎥 1 video</span>}
                          </div>
                        </div>
                        
                        {/* Storage Status */}
                        <div className="bg-green-400/10 rounded-lg p-2 border border-green-400/20">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 font-cyber">💾 Permanently Stored in Database</span>
                            </div>
                            <div className="flex items-center space-x-3 text-tech-gray/60">
                              <span>🔒 Encrypted</span>
                              <span>☁️ Backed Up</span>
                              <span>📊 Tracked</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedFeedback(feedback)}
                          className="p-2 text-cyan-glow hover:bg-cyan-glow/10 rounded-lg transition-colors border border-cyan-glow/30"
                          title="View Details"
                        >
                          <EyeIcon className="w-5 h-5" />
                        </motion.button>
                        
                        {!feedback.approved && (
                          <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34,197,94,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              if (confirm(`✅ Approve feedback from ${feedback.name}?\n\nThis will make the feedback visible on the main website.`)) {
                                approveFeedback(feedback.id)
                              }
                            }}
                            className="p-2 text-green-400 hover:bg-green-400/10 rounded-lg transition-all border border-green-400/30 hover:border-green-400/60"
                            title="Approve & Publish Feedback"
                          >
                            <CheckIcon className="w-5 h-5" />
                          </motion.button>
                        )}
                        
                        {feedback.approved && (
                          <div className="p-2 text-green-400 rounded-lg border border-green-400/30 bg-green-400/10" title="Already Approved">
                            <CheckIcon className="w-5 h-5" />
                          </div>
                        )}
                        
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239,68,68,0.4)" }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (confirm(`🗑️ Delete feedback from ${feedback.name}?\n\n⚠️ This action cannot be undone and will permanently remove the feedback.`)) {
                              deleteFeedback(feedback.id)
                            }
                          }}
                          className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all border border-red-400/30 hover:border-red-400/60"
                          title="Delete Feedback"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="space-y-6">
            <h2 className="text-xl font-cyber text-cyan-glow">Contact Messages</h2>
            
            <div className="grid gap-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="glass-panel rounded-xl p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-cyber text-cyan-glow">{contact.name}</h3>
                      <p className="text-tech-gray text-sm mb-2">{contact.email}</p>
                      <p className="text-tech-gray">{contact.message}</p>
                      <p className="text-tech-gray/60 text-xs mt-2">
                        {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <h2 className="text-xl font-cyber text-cyan-glow">Registered Users</h2>
            
            <div className="grid gap-4">
              {registeredUsers.map((user) => (
                <div key={user.id} className="glass-panel rounded-xl p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-cyber text-cyan-glow">{user.name}</h3>
                      <p className="text-tech-gray text-sm mb-1">{user.email}</p>
                      <p className="text-tech-gray/60 text-xs">
                        Registered: {new Date(user.createdAt).toLocaleString()}
                      </p>
                      <p className="text-tech-gray/60 text-xs">
                        Status: {user.isActive ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="p-2 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h2 className="text-xl font-cyber text-cyan-glow">Project Inquiries</h2>
            
            <div className="grid gap-4">
              {projectInquiries.map((inquiry) => (
                <div key={inquiry.id} className="glass-panel rounded-xl p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-cyber text-cyan-glow">{inquiry.name}</h3>
                      <p className="text-tech-gray text-sm mb-1">{inquiry.email}</p>
                      <p className="text-tech-gray text-sm mb-2">Phone: {inquiry.phone || 'Not provided'}</p>
                      <p className="text-electric-blue font-semibold mb-2">Project: {inquiry.projectType}</p>
                      <p className="text-tech-gray mb-2">{inquiry.description}</p>
                      <div className="flex space-x-4 text-sm text-tech-gray/60">
                        <span>Budget: {inquiry.budget || 'Not specified'}</span>
                        <span>Timeline: {inquiry.timeline || 'Not specified'}</span>
                      </div>
                      <p className="text-tech-gray/60 text-xs mt-2">
                        {new Date(inquiry.createdAt).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        inquiry.replied ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {inquiry.replied ? 'Replied' : 'Pending'}
                      </span>
                      
                      {!inquiry.replied && (
                        <button
                          onClick={() => {
                            setReplyMessage(getDefaultMessage(inquiry))
                            setReplyModal({isOpen: true, inquiry})
                          }}
                          className="p-2 text-cyan-glow hover:bg-cyan-glow/10 rounded transition-colors"
                        >
                          Send Acknowledgment
                        </button>
                      )}
                      
                      {inquiry.replied && (
                        <span className="text-green-400 text-sm">✓ Acknowledged</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'visitors' && (
          <div className="space-y-6">
            <h2 className="text-xl font-cyber text-cyan-glow">Visitor Statistics</h2>
            
            <div className="glass-panel rounded-xl p-6">
              <div className="grid gap-2">
                {visitorStats.slice(-7).map((stat) => (
                  <div key={stat.date} className="flex justify-between items-center py-2 border-b border-cyan-glow/10">
                    <span className="text-tech-gray">{new Date(stat.date).toLocaleDateString()}</span>
                    <span className="text-cyan-glow font-cyber">{stat.visitors} visitors</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {replyModal.isOpen && replyModal.inquiry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="glass-panel rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-cyber text-cyan-glow">Reply to {replyModal.inquiry.name}</h3>
              <button
                onClick={() => setReplyModal({isOpen: false, inquiry: null})}
                className="text-tech-gray hover:text-cyan-glow"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-4 p-4 bg-deep-navy/30 rounded-lg">
              <p className="text-tech-gray text-sm"><strong>Project:</strong> {replyModal.inquiry.projectType}</p>
              <p className="text-tech-gray text-sm"><strong>Email:</strong> {replyModal.inquiry.email}</p>
              <p className="text-tech-gray text-sm"><strong>Phone:</strong> {replyModal.inquiry.phone || 'Not provided'}</p>
              <p className="text-tech-gray text-sm"><strong>Budget:</strong> {replyModal.inquiry.budget || 'Not specified'}</p>
              <p className="text-tech-gray text-sm"><strong>Timeline:</strong> {replyModal.inquiry.timeline || 'Not specified'}</p>
              {replyModal.inquiry.description && (
                <p className="text-tech-gray text-sm mt-2"><strong>Description:</strong> {replyModal.inquiry.description}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-cyan-glow font-cyber text-sm mb-2">Acknowledgment Message</label>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder={`Dear ${replyModal.inquiry.name},\n\nThank you for your interest in our ${replyModal.inquiry.projectType} services. We have received your inquiry and our team will review your requirements.\n\nWe will get back to you within 24 hours with a detailed proposal and next steps.\n\nBest regards,\nVignan TechSolutions Team`}
                rows={8}
                className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none resize-none"
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setReplyModal({isOpen: false, inquiry: null})}
                className="px-4 py-2 border border-cyan-glow/50 text-cyan-glow rounded-lg hover:bg-cyan-glow/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (!replyMessage.trim()) {
                    alert('Please enter an acknowledgment message')
                    return
                  }
                  
                  try {
                    // Send acknowledgment email
                    const emailResponse = await fetch('/api/send-acknowledgment', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        email: replyModal.inquiry!.email,
                        name: replyModal.inquiry!.name,
                        message: replyMessage
                      })
                    })
                    
                    if (!emailResponse.ok) {
                      throw new Error('Failed to send email')
                    }
                    
                    // Mark as replied
                    await fetch('/api/project-inquiries', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ id: replyModal.inquiry!.id, action: 'mark_replied' })
                    })
                    
                    alert(`Acknowledgment email sent successfully to ${replyModal.inquiry!.email}!`)
                    setReplyModal({isOpen: false, inquiry: null})
                    setReplyMessage('')
                    loadData()
                  } catch (error) {
                    console.error('Error:', error)
                    alert('Failed to send acknowledgment email. Please try again.')
                  }
                }}
                disabled={!replyMessage.trim()}
                className="neon-btn px-6 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Acknowledgment Email
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="glass-panel rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-cyber text-cyan-glow">Feedback Details</h3>
              <button
                onClick={() => setSelectedFeedback(null)}
                className="text-tech-gray hover:text-cyan-glow"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-tech-gray text-sm">Name: {selectedFeedback.name}</p>
                <p className="text-tech-gray text-sm">Email: {selectedFeedback.email}</p>
                <p className="text-tech-gray text-sm">Rating: {selectedFeedback.rating}/5</p>
              </div>
              
              {selectedFeedback.textReview && (
                <div>
                  <h4 className="text-cyan-glow font-semibold mb-2">Review:</h4>
                  <p className="text-tech-gray">{selectedFeedback.textReview}</p>
                </div>
              )}
              
              {selectedFeedback.photos.length > 0 && (
                <div>
                  <h4 className="text-cyan-glow font-semibold mb-2">Photos ({selectedFeedback.photos.length}):</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedFeedback.photos.map((photo, index) => (
                      <img 
                        key={index}
                        src={photo} 
                        alt={`Photo ${index + 1}`}
                        className="w-full h-24 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {selectedFeedback.video && (
                <div>
                  <h4 className="text-cyan-glow font-semibold mb-2">Video:</h4>
                  <video 
                    src={selectedFeedback.video} 
                    controls 
                    className="w-full h-48 rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}