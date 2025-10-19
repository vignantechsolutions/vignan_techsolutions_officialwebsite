import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../../lib/database'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    const db = await getDatabase()
    const user = await db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])
    
    if (user) {
      return NextResponse.json({ 
        success: true, 
        user: { id: user.id, name: user.name, email: user.email }
      })
    } else {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}