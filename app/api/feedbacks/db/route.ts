import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '../../../../lib/database'

export async function PUT(request: NextRequest) {
  try {
    const { id, action } = await request.json()
    const db = await getDatabase()
    
    if (action === 'approve') {
      await db.run(`
        UPDATE feedbacks 
        SET approved = 1, approvedAt = CURRENT_TIMESTAMP 
        WHERE id = ?
      `, [id])
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 })
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
    
    // Get media folder before deletion
    const feedback = await db.get('SELECT mediaFolder FROM feedbacks WHERE id = ?', [id])
    
    // Delete from database
    await db.run('DELETE FROM feedbacks WHERE id = ?', [id])
    
    // Delete media files
    if (feedback?.mediaFolder) {
      const { fileManager } = await import('../../../../lib/fileManager')
      await fileManager.deleteMedia(feedback.mediaFolder)
    }
    
    // Clear cache
    const { cache } = await import('../../../../lib/cache')
    cache.clear()
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete feedback' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50) // Max 50 per page
  const approved = searchParams.get('approved') === 'true'
  
  try {
    const { cache } = await import('../../../../lib/cache')
    const cacheKey = `feedbacks_${approved}_${page}_${limit}`
    
    // Check cache first
    let result = cache.get(cacheKey)
    if (result) {
      return NextResponse.json(result)
    }
    
    const db = await getDatabase()
    const offset = (page - 1) * limit
    
    const feedbacks = await db.all(`
      SELECT id, name, email, college, company, rating, textReview, 
             mediaFolder, photoCount, hasVideo, approved, createdAt
      FROM feedbacks 
      WHERE approved = ? 
      ORDER BY createdAt DESC 
      LIMIT ? OFFSET ?
    `, [approved ? 1 : 0, limit, offset])
    
    // Parse media from JSON
    for (const feedback of feedbacks) {
      if (feedback.mediaFolder) {
        try {
          const mediaData = JSON.parse(feedback.mediaFolder)
          feedback.photos = mediaData.photos || []
          feedback.video = mediaData.video || null
        } catch {
          feedback.photos = []
          feedback.video = null
        }
      }
    }
    
    const total = await db.get(`
      SELECT COUNT(*) as count FROM feedbacks WHERE approved = ?
    `, [approved ? 1 : 0])
    
    result = {
      data: feedbacks,
      total: total.count,
      page,
      totalPages: Math.ceil(total.count / limit)
    }
    
    // Cache for 5 minutes
    cache.set(cacheKey, result, 300000)
    
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const feedback = await request.json()
    const db = await getDatabase()
    const feedbackId = Date.now().toString()
    
    // Save to database with media as JSON strings
    await db.run(`
      INSERT INTO feedbacks (
        id, name, email, college, company, semesterYear, rating, textReview, 
        mediaFolder, photoCount, hasVideo, approved
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      feedbackId,
      feedback.name,
      feedback.email,
      feedback.college || null,
      feedback.company || null,
      feedback.semesterYear || null,
      feedback.rating,
      feedback.textReview,
      JSON.stringify({ photos: feedback.photos || [], video: feedback.video }),
      (feedback.photos || []).length,
      feedback.video ? 1 : 0,
      0 // Not approved by default
    ])
    
    return NextResponse.json({ success: true, id: feedbackId })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save feedback' }, { status: 500 })
  }
}