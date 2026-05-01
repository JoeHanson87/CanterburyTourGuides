import { prisma } from '@/lib/prisma'

export default async function AdminGuidesPage() {
  const guides = await prisma.guide.findMany({
    orderBy: { lastName: 'asc' },
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-gray-900">Guides</h1>
        <p className="text-gray-500 mt-1">{guides.length} registered guides</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((g) => (
          <div key={g.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-green-100 rounded-full w-12 h-12 flex items-center justify-center text-brand-green-800 font-bold text-lg flex-shrink-0">
                {g.firstName[0]}{g.lastName[0]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">
                  {g.firstName} {g.lastName}
                </h3>
                <p className="text-gray-500 text-xs mt-0.5">🎖️ Green Badge</p>
                {g.badgeNumber && (
                  <p className="text-gray-400 text-xs">Badge: {g.badgeNumber}</p>
                )}
              </div>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>📧 {g.email}</p>
              {g.phone && <p>📞 {g.phone}</p>}
            </div>
            {g.bio && (
              <p className="mt-3 text-gray-500 text-xs leading-relaxed line-clamp-3">
                {g.bio}
              </p>
            )}
            <div className="mt-4 flex items-center">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                g.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
              }`}>
                {g.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        ))}
        {guides.length === 0 && (
          <div className="col-span-3 py-12 text-center text-gray-400">
            No guides registered yet.
          </div>
        )}
      </div>
    </div>
  )
}
