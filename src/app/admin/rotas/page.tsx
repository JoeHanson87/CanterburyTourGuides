import { prisma } from '@/lib/prisma'

export default async function AdminRotasPage() {
  const rotas = await prisma.rotaEntry.findMany({
    include: { guide: true, dailyBooking: true },
    orderBy: { date: 'desc' },
    take: 60,
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Rotas</h1>
        <p className="text-gray-500 mt-1">Guide assignments for upcoming tours</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time Slot</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Guide</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking Ref</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rotas.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {new Date(r.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{r.timeSlot}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {r.guide.firstName} {r.guide.lastName}
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">
                    {r.dailyBookingId ? r.dailyBookingId.slice(0, 8) + '…' : '—'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      r.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
              {rotas.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    No rota entries yet.
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
