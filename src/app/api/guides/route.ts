import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const guides = await prisma.guide.findMany({
      orderBy: { lastName: 'asc' },
    })
    return NextResponse.json(guides)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch guides' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, badgeNumber, bio } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const guide = await prisma.guide.create({
      data: { firstName, lastName, email, phone: phone || null, badgeNumber: badgeNumber || null, bio: bio || null },
    })
    return NextResponse.json(guide, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create guide' }, { status: 500 })
  }
}
