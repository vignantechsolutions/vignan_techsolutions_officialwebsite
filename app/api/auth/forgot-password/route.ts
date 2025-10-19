import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../../lib/database'
import { sendOTPEmail } from '../../../../lib/emailService'

// Global password reset OTP storage
declare global {
  var resetOtpStore: Map<string, { otp: string; expires: number }> | undefined
}

const resetOtpStore = globalThis.resetOtpStore ?? new Map<string, { otp: string; expires: number }>()
globalThis.resetOtpStore = resetOtpStore

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Check if email exists
    const db = await getDatabase()
    const user = await db.get('SELECT email FROM users WHERE email = ?', [email])
    
    if (!user) {
      return NextResponse.json({ error: 'Email not found' }, { status: 404 })
    }
    
    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    
    // Store OTP with 10-minute expiry
    resetOtpStore.set(email, {
      otp,
      expires: Date.now() + 10 * 60 * 1000
    })
    
    // Send email
    await sendOTPEmail(email, otp)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Password reset OTP sent to your email' 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send reset OTP' }, { status: 500 })
  }
}