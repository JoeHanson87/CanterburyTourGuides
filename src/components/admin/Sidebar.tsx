'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊', exact: true },
  { href: '/admin/bookings/daily', label: 'Daily Bookings', icon: '🗓️' },
  { href: '/admin/bookings/group', label: 'Group Bookings', icon: '👥' },
  { href: '/admin/clients', label: 'Clients', icon: '👤' },
  { href: '/admin/guides', label: 'Guides', icon: '🎖️' },
  { href: '/admin/availability', label: 'Availability', icon: '📅' },
  { href: '/admin/rotas', label: 'Rotas', icon: '📋' },
  { href: '/admin/invoices', label: 'Invoices', icon: '🧾' },
  { href: '/admin/reports', label: 'Reports', icon: '📈' },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-brand-green-900 text-white flex flex-col min-h-screen">
      <div className="p-6 border-b border-brand-green-700">
        <h1 className="font-serif text-lg font-bold leading-tight">Canterbury</h1>
        <p className="text-brand-green-300 text-xs">Guided Tours Admin</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150 ${
                isActive
                  ? 'bg-brand-green-700 text-white font-medium'
                  : 'text-brand-green-300 hover:bg-brand-green-800 hover:text-white'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-brand-green-700">
        <Link
          href="/"
          className="flex items-center space-x-3 px-3 py-2 text-brand-green-300 hover:text-white text-sm mb-1"
        >
          <span>🌐</span>
          <span>View Website</span>
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center space-x-3 px-3 py-2 text-brand-green-300 hover:text-white text-sm w-full text-left"
        >
          <span>🚪</span>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  )
}
