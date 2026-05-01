import { prisma } from '@/lib/prisma'

export default async function AdminInvoicesPage() {
  const groupBookings = await prisma.groupBooking.findMany({
    include: { client: true },
    orderBy: { preferredDate: 'desc' },
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Invoices</h1>
        <p className="text-gray-500 mt-1">Group tour invoices and billing</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice Ref</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Organisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tour Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Group Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {groupBookings.map((b, i) => {
                const amount = b.groupSize <= 15 ? 180 : b.groupSize <= 30 ? 300 : 0
                return (
                  <tr key={b.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">
                      INV-{String(i + 1).padStart(4, '0')}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {b.client.firstName} {b.client.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{b.organisation || '—'}</td>
                    <td className="px-6 py-4 text-gray-700">
                      {new Date(b.preferredDate).toLocaleDateString('en-GB')}
                    </td>
                    <td className="px-6 py-4 text-center">{b.groupSize}</td>
                    <td className="px-6 py-4 font-medium">
                      {amount > 0 ? `£${amount}` : 'POA'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        b.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
                        b.status === 'ENQUIRY' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
              {groupBookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                    No invoices yet.
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
