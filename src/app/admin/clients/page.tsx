import { prisma } from '@/lib/prisma'

export default async function AdminClientsPage() {
  const clients = await prisma.client.findMany({
    include: {
      dailyBookings: true,
      groupBookings: true,
    },
    orderBy: { lastName: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Clients</h1>
        <p className="text-gray-500 mt-1">{clients.length} registered clients</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Daily Bookings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Group Bookings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {c.firstName} {c.lastName}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{c.email}</td>
                  <td className="px-6 py-4 text-gray-600">{c.phone || '—'}</td>
                  <td className="px-6 py-4 text-center">{c.dailyBookings.length}</td>
                  <td className="px-6 py-4 text-center">{c.groupBookings.length}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs">
                    {new Date(c.createdAt).toLocaleDateString('en-GB')}
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No clients yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
