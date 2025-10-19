import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../lib/database'

export async function GET() {
  try {
    const db = await getDatabase()
    const contacts = await db.all('SELECT * FROM contacts ORDER BY createdAt DESC')
    return NextResponse.json(contacts)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load contacts' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    const db = await getDatabase()
    
    await db.run(`
      INSERT INTO contacts (id, name, email, message, createdAt)
      VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    `, [Date.now().toString(), name, email, message])
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 })
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
    await db.run('DELETE FROM contacts WHERE id = ?', [id])
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 })
  }
}