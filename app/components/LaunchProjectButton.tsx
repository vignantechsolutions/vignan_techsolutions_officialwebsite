'use client'
import { useState } from 'react'
import ProjectInquiryForm from './ProjectInquiryForm'

export default function LaunchProjectButton() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="neon-btn px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
      >
Launch Your Project
      </button>
      
      <ProjectInquiryForm 
        isOpen={showForm} 
        onClose={() => setShowForm(false)} 
      />
    </>
  )
}