import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: { feedbackId: string; filename: string } }
) {
  try {
    const { feedbackId, filename } = params
    const filePath = path.join(process.cwd(), 'data', 'media', feedbackId, filename)
    
    // Security check
    if (!filename.match(/^(photo_\d+\.jpg|video\.mp4)$/)) {
      return new NextResponse('Invalid file', { status: 400 })
    }
    
    const fileBuffer = await fs.readFile(filePath)
    const contentType = filename.endsWith('.jpg') ? 'image/jpeg' : 'video/mp4'
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000', // 1 year cache
      },
    })
  } catch (error) {
    return new NextResponse('File not found', { status: 404 })
  }
}