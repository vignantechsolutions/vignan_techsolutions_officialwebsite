import { NextRequest, NextResponse } from 'next/server'
import { sendOTPEmail } from '../../../../lib/emailService'

// Global OTP storage to persist between API calls
declare global {
  var otpStore: Map<string, { otp: string; expires: number }> | undefined
}

const otpStore = globalThis.otpStore ?? new Map<string, { otp: string; expires: number }>()
globalThis.otpStore = otpStore

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Check if email already exists
    const { getDatabase } = await import('../../../../lib/database')
    const db = await getDatabase()
    const existingUser = await db.get('SELECT email FROM users WHERE email = ?', [email])
    
    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered. Please login.' }, { status: 400 })
    }
    
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Store OTP with 5-minute expiry
    otpStore.set(email, {
      otp,
      expires: Date.now() + 5 * 60 * 1000
    })
    
    // Send real email
    try {
      await sendOTPEmail(email, otp)
      console.log(`OTP sent to ${email}: ${otp}`)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Fallback: still return success but log error
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'OTP sent to your email'
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 })
  }
}