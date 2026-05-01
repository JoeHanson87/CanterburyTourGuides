import { prisma } from '@/lib/prisma'

function getMonthDates(year: number, month: number) {
  const dates: Date[] = []
  const d = new Date(year, month, 1)
  while (d.getMonth() === month) {
    dates.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return dates
}

export default async function AdminAvailabilityPage() {
  const guides = await prisma.guide.findMany({ where: { isActive: true }, orderBy: { lastName: 'asc' } })
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const dates = getMonthDates(year, month)

  const availabilities = await prisma.guideAvailability.findMany({
    where: {
      date: {
        gte: new Date(year, month, 1),
        lt: new Date(year, month + 1, 1),
      },
    },
  })

  const availMap: Record<string, Record<string, boolean>> = {}
  for (const a of availabilities) {
    const dateKey = a.date.toISOString().split('T')[0]
    if (!availMap[a.guideId]) availMap[a.guideId] = {}
    availMap[a.guideId][dateKey] = a.available
  }

  const monthName = new Date(year, month).toLocaleString('en-GB', { month: 'long', year: 'numeric' })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Guide Availability</h1>
        <p className="text-gray-500 mt-1">{monthName}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="text-xs">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-500 sticky left-0 bg-gray-50 min-w-[120px]">
                  Guide
                </th>
                {dates.map((d) => (
                  <th key={d.toISOString()} className="px-2 py-3 text-center font-medium text-gray-500 min-w-[36px]">
                    <div>{d.getDate()}</div>
                    <div className="text-gray-400">{d.toLocaleString('en-GB', { weekday: 'narrow' })}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {guides.map((g) => (
                <tr key={g.id}>
                  <td className="px-4 py-3 font-medium text-gray-900 sticky left-0 bg-white">
                    {g.firstName} {g.lastName[0]}.
                  </td>
                  {dates.map((d) => {
                    const key = d.toISOString().split('T')[0]
                    const avail = availMap[g.id]?.[key]
                    return (
                      <td key={key} className="px-1 py-3 text-center">
                        {avail === true ? (
                          <span className="inline-block w-6 h-6 bg-green-200 text-green-800 rounded text-xs leading-6">✓</span>
                        ) : avail === false ? (
                          <span className="inline-block w-6 h-6 bg-red-100 text-red-600 rounded text-xs leading-6">✗</span>
                        ) : (
                          <span className="inline-block w-6 h-6 bg-gray-100 rounded text-xs leading-6 text-gray-300">–</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex space-x-4 text-xs text-gray-500">
          <span><span className="inline-block w-4 h-4 bg-green-200 rounded mr-1 align-middle" />Available</span>
          <span><span className="inline-block w-4 h-4 bg-red-100 rounded mr-1 align-middle" />Unavailable</span>
          <span><span className="inline-block w-4 h-4 bg-gray-100 rounded mr-1 align-middle" />Not set</span>
        </div>
      </div>
    </div>
  )
}
