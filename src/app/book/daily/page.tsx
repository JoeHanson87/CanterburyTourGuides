'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getTodayDateString } from '@/lib/utils'

const schema = z.object({
  date: z.string().min(1, 'Please select a date'),
  timeSlot: z.enum(['11:00', '14:00'], { required_error: 'Please select a time' }),
  adults: z.coerce.number().min(1, 'At least 1 adult required').max(20),
  children: z.coerce.number().min(0).max(20),
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  upsellCreamTea: z.boolean().optional(),
  upsellRoman: z.boolean().optional(),
  upsellAudio: z.boolean().optional(),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const PRICES = {
  adult: 16,
  child: 8,
  creamTea: 18,
  roman: 7,
  audio: 5,
}

export default function BookDailyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { adults: 1, children: 0, timeSlot: '11:00' },
  })

  const adults = watch('adults') || 1
  const children = watch('children') || 0
  const creamTea = watch('upsellCreamTea')
  const roman = watch('upsellRoman')
  const audio = watch('upsellAudio')

  const subtotal =
    adults * PRICES.adult +
    children * PRICES.child +
    (creamTea ? (adults + children) * PRICES.creamTea : 0) +
    (roman ? (adults + children) * PRICES.roman : 0) +
    (audio ? (adults + children) * PRICES.audio : 0)

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/bookings/daily', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Booking failed. Please try again.')
      }
      setSubmitted(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  const today = getTodayDateString()

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-serif text-2xl font-bold text-brand-green-800 mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for booking your Canterbury tour. A confirmation has been sent to your email
            address. We look forward to seeing you!
          </p>
          <a href="/" className="btn-primary">
            Return Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-green-800 mb-2">
            Book Your Daily Tour
          </h1>
          <p className="text-gray-600">
            Secure your place on our expert-guided Canterbury walking tour.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* Tour Options */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="font-serif text-xl font-bold text-brand-green-800 mb-4">Tour Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register('date')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time *
                  </label>
                  <select
                    {...register('timeSlot')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  >
                    <option value="11:00">11:00am (Daily)</option>
                    <option value="14:00">2:00pm (Seasonal Apr–Oct)</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adults (£16 each) *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    {...register('adults')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                  {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Children 5–15 (£8 each)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    {...register('children')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="font-serif text-xl font-bold text-brand-green-800 mb-4">Your Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    type="text"
                    {...register('firstName')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    type="text"
                    {...register('lastName')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requirements (optional)
                </label>
                <textarea
                  {...register('notes')}
                  rows={3}
                  placeholder="Wheelchair access, dietary requirements, etc."
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
                />
              </div>
            </div>

            {/* Extras */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="font-serif text-xl font-bold text-brand-green-800 mb-4">Optional Extras</h2>
              <div className="space-y-3">
                {[
                  { name: 'upsellCreamTea' as const, label: 'Traditional Cream Tea', price: '+£18 per person' },
                  { name: 'upsellRoman' as const, label: 'Roman Museum Entry', price: '+£7 per person' },
                  { name: 'upsellAudio' as const, label: 'Cathedral Audio Guide', price: '+£5 per person' },
                ].map((extra) => (
                  <label key={extra.name} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register(extra.name)}
                      className="h-4 w-4 text-brand-green-600 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 text-sm flex-1">{extra.label}</span>
                    <span className="text-brand-green-800 font-semibold text-sm">{extra.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-brand-green-800 text-white rounded-xl p-6 sticky top-24">
              <h2 className="font-serif text-xl font-bold mb-4">Summary</h2>
              <div className="space-y-2 text-sm border-b border-brand-green-700 pb-4 mb-4">
                <div className="flex justify-between">
                  <span>Adults × {adults}</span>
                  <span>£{adults * PRICES.adult}</span>
                </div>
                {children > 0 && (
                  <div className="flex justify-between">
                    <span>Children × {children}</span>
                    <span>£{children * PRICES.child}</span>
                  </div>
                )}
                {creamTea && (
                  <div className="flex justify-between text-brand-gold-300">
                    <span>Cream Tea × {adults + children}</span>
                    <span>£{(adults + children) * PRICES.creamTea}</span>
                  </div>
                )}
                {roman && (
                  <div className="flex justify-between text-brand-gold-300">
                    <span>Roman Museum × {adults + children}</span>
                    <span>£{(adults + children) * PRICES.roman}</span>
                  </div>
                )}
                {audio && (
                  <div className="flex justify-between text-brand-gold-300">
                    <span>Audio Guide × {adults + children}</span>
                    <span>£{(adults + children) * PRICES.audio}</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span className="text-brand-gold-400">£{subtotal}</span>
              </div>
              {error && (
                <div className="bg-red-900 text-red-200 text-sm p-3 rounded-md mb-4">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-gold-600 hover:bg-brand-gold-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>
              <p className="text-brand-green-300 text-xs mt-3 text-center">
                No payment required online. Pay on the day.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
