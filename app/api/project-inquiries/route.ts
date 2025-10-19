import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../lib/database'

export async function GET() {
  try {
    const db = await getDatabase()
    const inquiries = await db.all('SELECT * FROM project_inquiries ORDER BY createdAt DESC')
    return NextResponse.json(inquiries)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load inquiries' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, projectType, description, budget, timeline } = await request.json()
    const db = await getDatabase()
    
    await db.run(`
      INSERT INTO project_inquiries (id, name, email, phone, projectType, description, budget, timeline)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [Date.now().toString(), name, email, phone, projectType, description, budget, timeline])
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, action } = await request.json()
    
    if (action === 'mark_replied') {
      const db = await getDatabase()
      await db.run('UPDATE project_inquiries SET replied = 1 WHERE id = ?', [id])
      return NextResponse.json({ success: true })
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update inquiry' }, { status: 500 })
  }
}