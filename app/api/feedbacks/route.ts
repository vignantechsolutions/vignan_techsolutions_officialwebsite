import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'feedbacks.json')
const approvedPath = path.join(process.cwd(), 'data', 'approved-feedbacks.json')

export async function GET() {
  try {
    const data = await fs.readFile(dataPath, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: NextRequest) {
  try {
    const feedback = await request.json()
    const feedbackId = Date.now().toString()
    
    // Store media separately and keep only file paths
    const mediaUrls = { photos: [], video: null }
    
    if (feedback.photos?.length > 0) {
      for (let i = 0; i < feedback.photos.length; i++) {
        const response = await fetch('/api/media', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            base64Data: feedback.photos[i],
            filename: `photo_${i}.jpg`,
            feedbackId
          })
        })
        const result = await response.json()
        mediaUrls.photos.push(result.path)
      }
    }
    
    if (feedback.video) {
      const response = await fetch('/api/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base64Data: feedback.video,
          filename: 'video.mp4',
          feedbackId
        })
      })
      const result = await response.json()
      mediaUrls.video = result.path
    }
    
    // Append to file instead of loading entire JSON
    const feedbackEntry = {
      ...feedback,
      id: feedbackId,
      photos: mediaUrls.photos,
      video: mediaUrls.video,
      timestamp: new Date(),
      approved: false
    }
    
    const data = await fs.readFile(dataPath, 'utf8').catch(() => '[]')
    const feedbacks = JSON.parse(data)
    feedbacks.push(feedbackEntry)
    
    await fs.writeFile(dataPath, JSON.stringify(feedbacks))
    return NextResponse.json({ success: true, id: feedbackId })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save feedback' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, action } = await request.json()
    const data = await fs.readFile(dataPath, 'utf8')
    const feedbacks = JSON.parse(data)
    
    if (action === 'approve') {
      const feedbackIndex = feedbacks.findIndex((f: any) => f.id === id)
      if (feedbackIndex !== -1) {
        feedbacks[feedbackIndex].approved = true
        
        const approvedData = await fs.readFile(approvedPath, 'utf8').catch(() => '[]')
        const approvedFeedbacks = JSON.parse(approvedData)
        approvedFeedbacks.push(feedbacks[feedbackIndex])
        
        await fs.writeFile(dataPath, JSON.stringify(feedbacks, null, 2))
        await fs.writeFile(approvedPath, JSON.stringify(approvedFeedbacks, null, 2))
      }
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update feedback' }, { status: 500 })
  }
}