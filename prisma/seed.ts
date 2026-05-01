import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import 'dotenv/config'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@canterburyguidedtours.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@canterburyguidedtours.com',
      password: hashedPassword,
      role: 'admin',
    },
  })
  console.log('✅ Admin user:', admin.email)

  // Guides
  const guides = await Promise.all([
    prisma.guide.upsert({
      where: { email: 'margaret.white@canterburyguidedtours.com' },
      update: {},
      create: {
        firstName: 'Margaret',
        lastName: 'White',
        email: 'margaret.white@canterburyguidedtours.com',
        phone: '07700 900001',
        badgeNumber: 'GB-KNT-0142',
        bio: 'Margaret has been a Green Badge guide for over 15 years, specialising in medieval history and the Canterbury Cathedral precinct.',
        isActive: true,
      },
    }),
    prisma.guide.upsert({
      where: { email: 'david.chen@canterburyguidedtours.com' },
      update: {},
      create: {
        firstName: 'David',
        lastName: 'Chen',
        email: 'david.chen@canterburyguidedtours.com',
        phone: '07700 900002',
        badgeNumber: 'GB-KNT-0198',
        bio: 'David specialises in Roman Canterbury and the city\'s archaeological heritage. He is also a qualified heritage interpreter.',
        isActive: true,
      },
    }),
    prisma.guide.upsert({
      where: { email: 'sarah.patel@canterburyguidedtours.com' },
      update: {},
      create: {
        firstName: 'Sarah',
        lastName: 'Patel',
        email: 'sarah.patel@canterburyguidedtours.com',
        phone: '07700 900003',
        badgeNumber: 'GB-KNT-0234',
        bio: 'Sarah is passionate about Tudor and Stuart Canterbury and is particularly skilled with school groups and educational tours.',
        isActive: true,
      },
    }),
    prisma.guide.upsert({
      where: { email: 'james.foster@canterburyguidedtours.com' },
      update: {},
      create: {
        firstName: 'James',
        lastName: 'Foster',
        email: 'james.foster@canterburyguidedtours.com',
        phone: '07700 900004',
        badgeNumber: 'GB-KNT-0267',
        bio: 'James has a background in literary history and leads our popular Literary Canterbury tours covering Chaucer, Marlowe and beyond.',
        isActive: true,
      },
    }),
  ])
  console.log('✅ Guides created:', guides.length)

  // Clients
  const clients = await Promise.all([
    prisma.client.upsert({
      where: { email: 'john.smith@example.com' },
      update: {},
      create: { firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', phone: '01227 111111', country: 'UK' },
    }),
    prisma.client.upsert({
      where: { email: 'marie.dupont@example.fr' },
      update: {},
      create: { firstName: 'Marie', lastName: 'Dupont', email: 'marie.dupont@example.fr', country: 'France' },
    }),
    prisma.client.upsert({
      where: { email: 'thomas.mueller@example.de' },
      update: {},
      create: { firstName: 'Thomas', lastName: 'Mueller', email: 'thomas.mueller@example.de', country: 'Germany' },
    }),
    prisma.client.upsert({
      where: { email: 'school.trips@westgateacademy.sch.uk' },
      update: {},
      create: { firstName: 'Rebecca', lastName: 'Collins', email: 'school.trips@westgateacademy.sch.uk', organisation: 'Westgate Academy', phone: '01227 222222' },
    }),
    prisma.client.upsert({
      where: { email: 'sarah.jones@example.com' },
      update: {},
      create: { firstName: 'Sarah', lastName: 'Jones', email: 'sarah.jones@example.com', phone: '07900 123456', country: 'UK' },
    }),
  ])
  console.log('✅ Clients created:', clients.length)

  // Daily Bookings
  const baseDate = new Date()
  const dailyBookings = await Promise.all([
    prisma.dailyBooking.create({
      data: {
        clientId: clients[0].id,
        tourDate: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 1),
        timeSlot: '11:00',
        adults: 2,
        children: 1,
        totalAmount: 40,
        status: 'CONFIRMED',
      },
    }),
    prisma.dailyBooking.create({
      data: {
        clientId: clients[1].id,
        tourDate: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 2),
        timeSlot: '11:00',
        adults: 3,
        children: 0,
        totalAmount: 48,
        status: 'CONFIRMED',
      },
    }),
    prisma.dailyBooking.create({
      data: {
        clientId: clients[2].id,
        tourDate: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 3),
        timeSlot: '14:00',
        adults: 2,
        children: 2,
        totalAmount: 48,
        status: 'CONFIRMED',
      },
    }),
    prisma.dailyBooking.create({
      data: {
        clientId: clients[4].id,
        tourDate: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + 5),
        timeSlot: '11:00',
        adults: 4,
        children: 0,
        totalAmount: 64,
        status: 'CONFIRMED',
      },
    }),
    prisma.dailyBooking.create({
      data: {
        clientId: clients[0].id,
        tourDate: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() - 5),
        timeSlot: '11:00',
        adults: 1,
        children: 0,
        totalAmount: 16,
        status: 'CONFIRMED',
      },
    }),
  ])
  console.log('✅ Daily bookings created:', dailyBookings.length)

  // Group Bookings
  const groupBookings = await Promise.all([
    prisma.groupBooking.create({
      data: {
        clientId: clients[3].id,
        organisation: 'Westgate Academy',
        groupSize: 32,
        preferredDate: new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 15),
        tourTheme: 'educational',
        groupType: 'school',
        requirements: 'KS3 history group, mixed ability. Accessible route preferred.',
        status: 'CONFIRMED',
      },
    }),
    prisma.groupBooking.create({
      data: {
        clientId: clients[1].id,
        groupSize: 15,
        preferredDate: new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 20),
        tourTheme: 'medieval',
        groupType: 'private',
        status: 'ENQUIRY',
      },
    }),
  ])
  console.log('✅ Group bookings created:', groupBookings.length)

  // Upsells
  await Promise.all([
    prisma.upsell.create({ data: { name: 'Traditional Cream Tea', description: 'Cream tea for two at the Old Weavers restaurant', price: 18 } }),
    prisma.upsell.create({ data: { name: 'Roman Museum Entry', description: 'Entry to the Canterbury Roman Museum', price: 7 } }),
    prisma.upsell.create({ data: { name: 'Cathedral Audio Guide', description: 'Cathedral interior audio guide (cathedral entry separate)', price: 5 } }),
  ])
  console.log('✅ Upsells created')

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
