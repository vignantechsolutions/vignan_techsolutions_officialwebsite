import { NextRequest, NextResponse } from 'next/server'

interface AnalyticsData {
  realTimeUsers: number
  pageViews: number
  sessions: number
  bounceRate: number
  avgSessionDuration: string
  topPages: Array<{page: string, views: number}>
  usersByCountry: Array<{country: string, users: number}>
  deviceTypes: Array<{device: string, percentage: number}>
  trafficSources: Array<{source: string, percentage: number}>
}

export async function GET() {
  try {
    // Simulate real-time analytics data
    const mockData: AnalyticsData = {
      realTimeUsers: Math.floor(Math.random() * 50) + 10,
      pageViews: Math.floor(Math.random() * 1000) + 500,
      sessions: Math.floor(Math.random() * 300) + 150,
      bounceRate: Math.floor(Math.random() * 30) + 20,
      avgSessionDuration: `${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      topPages: [
        { page: '/', views: Math.floor(Math.random() * 200) + 100 },
        { page: '/services', views: Math.floor(Math.random() * 150) + 75 },
        { page: '/portfolio', views: Math.floor(Math.random() * 100) + 50 },
        { page: '/contact', views: Math.floor(Math.random() * 80) + 40 },
        { page: '/ai-recommender', views: Math.floor(Math.random() * 60) + 30 }
      ],
      usersByCountry: [
        { country: 'India', users: Math.floor(Math.random() * 100) + 50 },
        { country: 'USA', users: Math.floor(Math.random() * 50) + 25 },
        { country: 'UK', users: Math.floor(Math.random() * 30) + 15 },
        { country: 'Canada', users: Math.floor(Math.random() * 25) + 10 }
      ],
      deviceTypes: [
        { device: 'Desktop', percentage: Math.floor(Math.random() * 20) + 45 },
        { device: 'Mobile', percentage: Math.floor(Math.random() * 20) + 35 },
        { device: 'Tablet', percentage: Math.floor(Math.random() * 15) + 10 }
      ],
      trafficSources: [
        { source: 'Organic Search', percentage: Math.floor(Math.random() * 20) + 40 },
        { source: 'Direct', percentage: Math.floor(Math.random() * 15) + 25 },
        { source: 'Social Media', percentage: Math.floor(Math.random() * 10) + 15 },
        { source: 'Referral', percentage: Math.floor(Math.random() * 10) + 10 }
      ]
    }

    return NextResponse.json(mockData)
  } catch (error) {
    console.error('Analytics API Error:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}