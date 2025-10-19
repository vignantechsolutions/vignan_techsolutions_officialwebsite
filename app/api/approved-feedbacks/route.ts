import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const approvedPath = path.join(process.cwd(), 'data', 'approved-feedbacks.json')

export async function GET() {
  try {
    const data = await fs.readFile(approvedPath, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json([])
  }
}