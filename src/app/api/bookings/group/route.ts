import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const bookings = await prisma.groupBooking.findMany({
      include: { client: true },
      orderBy: { preferredDate: 'desc' },
    })
    return NextResponse.json(bookings)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch group bookings' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      contactName,
      organisation,
      email,
      phone,
      groupSize,
      preferredDate,
      alternativeDate,
      tourTheme,
      groupType,
      requirements,
    } = body

    if (!contactName || !email || !phone || !groupSize || !preferredDate) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const [firstName, ...rest] = contactName.split(' ')
    const lastName = rest.join(' ') || '-'

    let client = await prisma.client.findUnique({ where: { email } })
    if (!client) {
      client = await prisma.client.create({
        data: { firstName, lastName, email, phone },
      })
    }

    const booking = await prisma.groupBooking.create({
      data: {
        organisation: organisation || null,
        groupSize: Number(groupSize),
        preferredDate: new Date(preferredDate),
        alternativeDate: alternativeDate ? new Date(alternativeDate) : null,
        tourTheme: tourTheme || null,
        groupType: groupType || null,
        requirements: requirements || null,
        clientId: client.id,
        status: 'ENQUIRY',
      },
    })

    return NextResponse.json(booking, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create group booking' }, { status: 500 })
  }
}
