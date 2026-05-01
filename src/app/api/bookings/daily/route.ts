import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const dateStr = searchParams.get('date')

    const where = dateStr ? { tourDate: new Date(dateStr) } : {}

    const bookings = await prisma.dailyBooking.findMany({
      where,
      include: { client: true },
      orderBy: { tourDate: 'desc' },
    })
    return NextResponse.json(bookings)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      date,
      timeSlot,
      adults,
      children,
      firstName,
      lastName,
      email,
      phone,
      upsellCreamTea,
      upsellRoman,
      upsellAudio,
      notes,
    } = body

    if (!date || !timeSlot || !adults || !firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adultCount = Number(adults)
    const childCount = Number(children) || 0
    const totalPeople = adultCount + childCount

    let totalAmount =
      adultCount * 16 +
      childCount * 8 +
      (upsellCreamTea ? totalPeople * 18 : 0) +
      (upsellRoman ? totalPeople * 7 : 0) +
      (upsellAudio ? totalPeople * 5 : 0)

    // Upsert client
    let client = await prisma.client.findUnique({ where: { email } })
    if (!client) {
      client = await prisma.client.create({
        data: { firstName, lastName, email, phone: phone || null },
      })
    }

    const booking = await prisma.dailyBooking.create({
      data: {
        tourDate: new Date(date),
        timeSlot,
        adults: adultCount,
        children: childCount,
        totalAmount,
        notes: notes || null,
        clientId: client.id,
        status: 'CONFIRMED',
      },
    })

    return NextResponse.json(booking, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 })
  }
}
