'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours/daily', label: 'Daily Tours' },
  { href: '/tours/group', label: 'Group Tours' },
  { href: '/about', label: 'Our Guides' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-brand-grey-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Site name on the left */}
          <Link href="/" className="flex items-center space-x-3">
            <span className="font-serif text-lg font-bold leading-tight">
              Canterbury Guided Tours
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book/daily"
              className="ml-3 bg-brand-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-red-700 transition-colors"
            >
              Book Now
            </Link>
            {/* Logo at top right */}
            <Link href="/" className="ml-4">
              <Image
                src="/images/logo.png"
                alt="Canterbury Guided Tours logo"
                width={64}
                height={64}
                className="rounded-full"
                priority
              />
            </Link>
          </div>

          {/* Mobile: logo + hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Canterbury Guided Tours logo"
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </Link>
            <button
              className="p-2 rounded-md hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book/daily"
              className="block mt-2 bg-brand-red-600 text-white px-3 py-2 rounded-md text-base font-semibold hover:bg-brand-red-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
