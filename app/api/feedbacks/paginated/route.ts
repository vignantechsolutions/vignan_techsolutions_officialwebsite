import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data', 'feedbacks.json'), 'utf8')
    const feedbacks = JSON.parse(data)
    
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedData = feedbacks.slice(startIndex, endIndex)
    
    return NextResponse.json({
      data: paginatedData,
      total: feedbacks.length,
      page,
      totalPages: Math.ceil(feedbacks.length / limit)
    })
  } catch {
    return NextResponse.json({ data: [], total: 0, page: 1, totalPages: 0 })
  }
}