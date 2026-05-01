import { prisma } from '@/lib/prisma'

export default async function AdminGroupBookingsPage() {
  const bookings = await prisma.groupBooking.findMany({
    include: { client: true },
    orderBy: { preferredDate: 'desc' },
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Group Bookings</h1>
        <p className="text-gray-500 mt-1">{bookings.length} total enquiries</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Group Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Preferred Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Theme</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {b.client.firstName} {b.client.lastName}
                    </div>
                    <div className="text-gray-500 text-xs">{b.client.email}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{b.organisation || '—'}</td>
                  <td className="px-6 py-4 text-gray-600 capitalize">{b.groupType || '—'}</td>
                  <td className="px-6 py-4 text-center font-medium">{b.groupSize}</td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(b.preferredDate).toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4 text-gray-600 capitalize">{b.tourTheme || '—'}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      b.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                      b.status === 'ENQUIRY' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                    No group bookings yet.
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
