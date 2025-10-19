import { NextRequest, NextResponse } from 'next/server'
import { sendAcknowledgmentEmail } from '../../../lib/emailService'

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json()
    
    await sendAcknowledgmentEmail(email, name, message)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send acknowledgment' }, { status: 500 })
  }
}