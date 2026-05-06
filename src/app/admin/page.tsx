import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminDashboard() {
  const [dailyCount, groupCount, clientCount, guideCount, revenue] = await Promise.all([
    prisma.dailyBooking.count(),
    prisma.groupBooking.count(),
    prisma.client.count(),
    prisma.guide.count(),
    prisma.dailyBooking.aggregate({ _sum: { totalAmount: true } }),
  ])

  const totalRevenue = revenue._sum.totalAmount ?? 0

  const recentBookings = await prisma.dailyBooking.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { client: true },
  })

  const stats = [
    { label: 'Daily Bookings', value: dailyCount, icon: '🗓️', href: '/admin/bookings/daily', colour: 'bg-blue-50 border-blue-200' },
    { label: 'Group Bookings', value: groupCount, icon: '👥', href: '/admin/bookings/group', colour: 'bg-purple-50 border-purple-200' },
    { label: 'Total Clients', value: clientCount, icon: '👤', href: '/admin/clients', colour: 'bg-yellow-50 border-yellow-200' },
    { label: 'Active Guides', value: guideCount, icon: '🎖️', href: '/admin/guides', colour: 'bg-green-50 border-green-200' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back — here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <div className={`border rounded-xl p-5 ${stat.colour} hover:shadow-md transition-shadow`}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Revenue Card */}
      <div className="bg-brand-navy-800 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-brand-navy-200 text-sm">Total Revenue (Daily Tours)</p>
            <p className="text-4xl font-bold mt-1">
              £{totalRevenue.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="text-5xl opacity-30">💷</div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-xl font-bold text-gray-900">Recent Daily Bookings</h2>
          <Link href="/admin/bookings/daily" className="text-brand-navy-700 hover:text-brand-navy-900 text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guests</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {b.client.firstName} {b.client.lastName}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {new Date(b.tourDate).toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{b.timeSlot}</td>
                  <td className="px-6 py-4 text-gray-600">{b.adults + b.children}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">£{b.totalAmount.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
              {recentBookings.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                    No bookings yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { href: '/admin/rotas', label: 'View Rotas', icon: '📋' },
          { href: '/admin/availability', label: 'Availability', icon: '📅' },
          { href: '/admin/invoices', label: 'Invoices', icon: '🧾' },
          { href: '/admin/reports', label: 'Reports', icon: '📈' },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center space-x-3 hover:shadow-md transition-shadow">
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium text-gray-700 text-sm">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
