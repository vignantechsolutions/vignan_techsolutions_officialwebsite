import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../../lib/database'

// Access global reset OTP store
declare global {
  var resetOtpStore: Map<string, { otp: string; expires: number }> | undefined
}

const resetOtpStore = globalThis.resetOtpStore ?? new Map<string, { otp: string; expires: number }>()

export async function POST(request: NextRequest) {
  try {
    const { email, otp, newPassword } = await request.json()
    
    const storedOtp = resetOtpStore.get(email)
    
    if (!storedOtp) {
      return NextResponse.json({ error: 'OTP not found or expired' }, { status: 400 })
    }
    
    if (Date.now() > storedOtp.expires) {
      resetOtpStore.delete(email)
      return NextResponse.json({ error: 'OTP expired' }, { status: 400 })
    }
    
    if (storedOtp.otp !== otp) {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 })
    }
    
    // Update password
    const db = await getDatabase()
    await db.run('UPDATE users SET password = ? WHERE email = ?', [newPassword, email])
    
    // Clean up OTP
    resetOtpStore.delete(email)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Password reset successfully' 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Password reset failed' }, { status: 500 })
  }
}