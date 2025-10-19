import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../../lib/database'

// Access the same global OTP store
declare global {
  var otpStore: Map<string, { otp: string; expires: number }> | undefined
}

const otpStore = globalThis.otpStore ?? new Map<string, { otp: string; expires: number }>()
if (!globalThis.otpStore) {
  globalThis.otpStore = otpStore
}

export async function POST(request: NextRequest) {
  try {
    const { email, otp, userData } = await request.json()
    
    const storedOtp = otpStore.get(email)
    
    if (!storedOtp) {
      return NextResponse.json({ error: 'OTP not found or expired' }, { status: 400 })
    }
    
    if (Date.now() > storedOtp.expires) {
      otpStore.delete(email)
      return NextResponse.json({ error: 'OTP expired' }, { status: 400 })
    }
    
    if (storedOtp.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 })
    }
    
    // OTP verified, create user
    const db = await getDatabase()
    const userId = Date.now().toString()
    
    await db.run(`
      INSERT INTO users (id, name, email, password, isActive)
      VALUES (?, ?, ?, ?, 1)
    `, [userId, userData.name, email, userData.password])
    
    // Clean up OTP
    otpStore.delete(email)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Registration completed successfully' 
    })
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}