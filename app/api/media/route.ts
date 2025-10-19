import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { base64Data, filename, feedbackId } = await request.json()
    
    const mediaDir = path.join(process.cwd(), 'data', 'media', feedbackId)
    await fs.mkdir(mediaDir, { recursive: true })
    
    const buffer = Buffer.from(base64Data.split(',')[1], 'base64')
    const filePath = path.join(mediaDir, filename)
    
    await fs.writeFile(filePath, buffer)
    
    return NextResponse.json({ 
      success: true, 
      path: `/api/media/${feedbackId}/${filename}` 
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save media' }, { status: 500 })
  }
}