import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../lib/database'

export async function GET() {
  try {
    const db = await getDatabase()
    const users = await db.all('SELECT id, name, email, createdAt, isActive FROM users ORDER BY createdAt DESC')
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load users' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 })
    }
    
    const db = await getDatabase()
    await db.run('DELETE FROM users WHERE id = ?', [id])
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}