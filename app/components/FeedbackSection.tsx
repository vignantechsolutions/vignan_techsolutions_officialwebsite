'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, PhotoIcon, VideoCameraIcon, PencilIcon } from '@heroicons/react/24/outline'

interface FeedbackData {
  id: string
  name: string
  email: string
  college: string
  semesterYear: string
  company: string
  rating: number
  textReview: string
  photos: string[]
  video: string | null
  timestamp: Date
  approved: boolean
}

interface UserRegistration {
  id: string
  name: string
  email: string
  password: string
  timestamp: Date
}

interface UserProfile {
  name: string
  college: string
  semesterYear: string
  company: string
}

export default function FeedbackSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showOtpVerification, setShowOtpVerification] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showResetPassword, setShowResetPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [forgotEmail, setForgotEmail] = useState('')
  const [resetData, setResetData] = useState({ email: '', otp: '', newPassword: '', confirmPassword: '' })
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [otpData, setOtpData] = useState({ otp: '', email: '' })
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    college: '',
    semesterYear: '',
    company: ''
  })
  const [feedbackData, setFeedbackData] = useState<Partial<FeedbackData>>({
    rating: 5,
    textReview: '',
    photos: [],
    video: null
  })
  const [showProfileForm, setShowProfileForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [previewVideo, setPreviewVideo] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      })
      
      const result = await response.json()
      
      if (result.success) {
        setIsLoggedIn(true)
        setShowProfileForm(true)
        setUserProfile({ name: result.user.name, college: '', semesterYear: '', company: '' })
      } else {
        alert(result.error || 'Login failed')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }
  
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setResetData({ email: forgotEmail, otp: '', newPassword: '', confirmPassword: '' })
        setShowForgotPassword(false)
        setShowResetPassword(true)
        alert('Password reset OTP sent to your email')
      } else {
        alert(result.error || 'Failed to send reset OTP')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }
  
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (resetData.newPassword !== resetData.confirmPassword) {
      alert('Passwords do not match')
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: resetData.email,
          otp: resetData.otp,
          newPassword: resetData.newPassword
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert('Password reset successfully! You can now login.')
        setShowResetPassword(false)
        setResetData({ email: '', otp: '', newPassword: '', confirmPassword: '' })
      } else {
        alert(result.error || 'Password reset failed')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match')
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: registerData.email })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setOtpData({ otp: '', email: registerData.email })
        setShowRegister(false)
        setShowOtpVerification(true)
        alert(`OTP sent to ${registerData.email}. Please check your email.`)
      } else {
        alert(result.error || 'Failed to send OTP')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }
  
  const handleOtpVerification = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: otpData.email,
          otp: otpData.otp,
          userData: registerData
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        alert('Registration completed successfully! You can now login.')
        setShowOtpVerification(false)
        setRegisterData({ name: '', email: '', password: '', confirmPassword: '' })
        setOtpData({ otp: '', email: '' })
      } else {
        alert(result.error || 'OTP verification failed')
      }
    } catch (error) {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const handleFileUpload = (files: FileList | null, type: 'photo' | 'video') => {
    if (!files) return
    
    if (type === 'photo') {
      const newFiles = Array.from(files)
      setFeedbackData(prev => ({
        ...prev,
        photos: [...(prev.photos || []), ...newFiles]
      }))
      
      // Create preview URLs
      newFiles.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setPreviewImages(prev => [...prev, e.target?.result as string])
        }
        reader.readAsDataURL(file)
      })
    } else {
      const file = files[0]
      setFeedbackData(prev => ({
        ...prev,
        video: file
      }))
      
      // Create video preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewVideo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (index: number) => {
    setFeedbackData(prev => ({
      ...prev,
      photos: prev.photos?.filter((_, i) => i !== index) || []
    }))
    setPreviewImages(prev => prev.filter((_, i) => i !== index))
  }

  const removeVideo = () => {
    setFeedbackData(prev => ({ ...prev, video: null }))
    setPreviewVideo(null)
  }

  const submitFeedback = async () => {
    setIsSubmitting(true)
    
    // Convert photos to base64
    const photoPromises = (feedbackData.photos || []).map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      })
    })
    
    // Convert video to base64
    let videoBase64: string | null = null
    if (feedbackData.video) {
      videoBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(feedbackData.video!)
      })
    }
    
    const photosBase64 = await Promise.all(photoPromises)
    
    const feedback = {
      id: Date.now().toString(),
      name: userProfile.name,
      email: loginData.email,
      college: userProfile.college,
      semesterYear: userProfile.semesterYear,
      company: userProfile.company,
      rating: feedbackData.rating || 5,
      textReview: feedbackData.textReview || '',
      photos: photosBase64,
      video: videoBase64,
      timestamp: new Date(),
      approved: false
    }

    // Save to database via API
    await fetch('/api/feedbacks/db', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(feedback)
    })
    
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Feedback submitted successfully! It will be reviewed by admin.')
      setIsLoggedIn(false)
      setShowProfileForm(false)
      setUserProfile({ name: '', college: '', semesterYear: '', company: '' })
      setFeedbackData({ rating: 5, textReview: '', photos: [], video: null })
      setPreviewImages([])
      setPreviewVideo(null)
    }, 1000)
  }

  if (!isLoggedIn) {
    return (
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">


          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-cyber text-cyan-glow mb-6 text-center">Login to Continue</h3>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRegister(true)}
                    className="w-full bg-transparent border border-cyan-glow/50 text-cyan-glow hover:bg-cyan-glow/10 py-3 rounded-lg font-semibold transition-all"
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="w-full text-cyan-glow hover:text-white transition-colors text-sm"
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* OTP Verification Modal */}
        {showOtpVerification && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-cyber text-cyan-glow">Verify Email</h3>
                  <button
                    onClick={() => setShowOtpVerification(false)}
                    className="text-tech-gray hover:text-cyan-glow"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-tech-gray text-sm mb-4">
                  Enter the 6-digit OTP sent to {otpData.email}
                </p>
                
                <form onSubmit={handleOtpVerification} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otpData.otp}
                      onChange={(e) => setOtpData(prev => ({ ...prev, otp: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors text-center text-2xl tracking-widest"
                      maxLength={6}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || otpData.otp.length !== 6}
                    className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify & Complete Registration'}
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      const response = await fetch('/api/auth/send-otp', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: otpData.email })
                      })
                      const result = await response.json()
                      if (result.success) {
                        alert('New OTP sent!')
                      }
                    }}
                    className="w-full text-cyan-glow hover:text-white transition-colors text-sm"
                  >
                    Resend OTP
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {showForgotPassword && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-cyber text-cyan-glow">Forgot Password</h3>
                  <button
                    onClick={() => setShowForgotPassword(false)}
                    className="text-tech-gray hover:text-cyan-glow"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset OTP'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* Reset Password Modal */}
        {showResetPassword && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-cyber text-cyan-glow">Reset Password</h3>
                  <button
                    onClick={() => setShowResetPassword(false)}
                    className="text-tech-gray hover:text-cyan-glow"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter OTP from email"
                      value={resetData.otp}
                      onChange={(e) => setResetData(prev => ({ ...prev, otp: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="New Password"
                      value={resetData.newPassword}
                      onChange={(e) => setResetData(prev => ({ ...prev, newPassword: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      value={resetData.confirmPassword}
                      onChange={(e) => setResetData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Resetting...' : 'Reset Password'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* Register Modal */}
        {showRegister && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md w-full"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-cyber text-cyan-glow">Create Account</h3>
                  <button
                    onClick={() => setShowRegister(false)}
                    className="text-tech-gray hover:text-cyan-glow"
                  >
                    ✕
                  </button>
                </div>
                
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={registerData.name}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={registerData.email}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-btn py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    )
  }

  // Profile Form Component
  if (isLoggedIn && showProfileForm) {
    return (
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-4">
              Complete Your Profile
            </h2>
            <p className="text-tech-gray font-tech text-base sm:text-lg">
              Tell us a bit about yourself to personalize your feedback
            </p>
          </motion.div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <form onSubmit={(e) => { e.preventDefault(); setShowProfileForm(false); }} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-glow font-cyber text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-cyan-glow font-cyber text-sm mb-2">College/University</label>
                  <input
                    type="text"
                    value={userProfile.college}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, college: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    placeholder="e.g., VIT University"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cyan-glow font-cyber text-sm mb-2">Semester/Year</label>
                  <input
                    type="text"
                    value={userProfile.semesterYear}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, semesterYear: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    placeholder="e.g., 3rd Year, 6th Sem"
                  />
                </div>
                <div>
                  <label className="block text-cyan-glow font-cyber text-sm mb-2">Company (if working)</label>
                  <input
                    type="text"
                    value={userProfile.company}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                    placeholder="e.g., Google, Microsoft"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsLoggedIn(false)}
                  className="text-tech-gray hover:text-cyan-glow transition-colors"
                >
                  Logout
                </button>
                <button
                  type="submit"
                  className="neon-btn px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Continue to Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cyber text-cyan-glow mb-4">
            Share Your Feedback
          </h2>
          <p className="text-tech-gray font-tech text-base sm:text-lg">
            Welcome {userProfile.name || loginData.email}! Share your experience with us
          </p>
        </motion.div>

        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          {/* Rating */}
          <div className="mb-8">
            <h3 className="text-lg font-cyber text-cyan-glow mb-4">Rate Your Experience</h3>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackData(prev => ({ ...prev, rating: star }))}
                  className="transition-colors"
                >
                  <StarIcon 
                    className={`w-8 h-8 ${star <= (feedbackData.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Combined Feedback Input */}
          <div className="mb-8">
            <h3 className="text-lg font-cyber text-cyan-glow mb-4">Share Your Experience</h3>
            
            {/* Text Input */}
            <div className="mb-6">
              <textarea
                placeholder="Share your detailed experience with our services..."
                value={feedbackData.textReview}
                onChange={(e) => setFeedbackData(prev => ({ ...prev, textReview: e.target.value }))}
                className="w-full h-32 p-4 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors resize-none"
              />
            </div>

            {/* Media Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Photo Upload */}
              <div>
                <label className="block text-cyan-glow font-cyber text-sm mb-2">
                  <PhotoIcon className="w-4 h-4 inline mr-2" />
                  Add Photos
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e.target.files, 'photo')}
                  className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                />
                {previewImages.length > 0 && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {previewImages.map((img, index) => (
                      <div key={index} className="relative">
                        <img src={img} alt={`Preview ${index + 1}`} className="w-full h-20 object-cover rounded" />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Video Upload */}
              <div>
                <label className="block text-cyan-glow font-cyber text-sm mb-2">
                  <VideoCameraIcon className="w-4 h-4 inline mr-2" />
                  Add Video
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleFileUpload(e.target.files, 'video')}
                  className="w-full p-3 rounded-lg bg-deep-navy/50 border border-cyan-glow/30 text-tech-gray focus:border-cyan-glow outline-none transition-colors"
                />
                {previewVideo && (
                  <div className="mt-3 relative">
                    <video src={previewVideo} className="w-full h-32 object-cover rounded" controls />
                    <button
                      onClick={removeVideo}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-tech-gray hover:text-cyan-glow transition-colors"
            >
              Logout
            </button>
            <button
              onClick={submitFeedback}
              disabled={isSubmitting}
              className="neon-btn px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}