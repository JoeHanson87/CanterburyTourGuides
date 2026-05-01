'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getTodayDateString } from '@/lib/utils'

const schema = z.object({
  contactName: z.string().min(1, 'Contact name required'),
  organisation: z.string().optional(),
  email: z.string().email('Valid email required'),
  phone: z.string().min(1, 'Phone number required'),
  groupSize: z.coerce.number().min(10, 'Minimum group size is 10').max(60),
  preferredDate: z.string().min(1, 'Please provide a preferred date'),
  alternativeDate: z.string().optional(),
  tourTheme: z.string().min(1, 'Please select a theme'),
  groupType: z.string().min(1, 'Please select group type'),
  requirements: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function BookGroupPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/bookings/group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Submission failed. Please try again.')
      }
      setSubmitted(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-cream flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="font-serif text-2xl font-bold text-brand-green-800 mb-3">
            Enquiry Received!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your group tour enquiry. A member of our team will be in touch
            within 24 hours to discuss your requirements and provide a quote.
          </p>
          <a href="/" className="btn-primary">
            Return Home
          </a>
        </div>
      </div>
    )
  }

  const today = getTodayDateString()

  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-brand-green-800 mb-2">
            Group Tour Enquiry
          </h1>
          <p className="text-gray-600">
            Tell us about your group and we&apos;ll craft the perfect Canterbury experience.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-md p-8 space-y-6">
          <h2 className="font-serif text-xl font-bold text-brand-green-800">Contact Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                {...register('contactName')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
              {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organisation (optional)</label>
              <input
                type="text"
                {...register('organisation')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <hr className="border-gray-200" />
          <h2 className="font-serif text-xl font-bold text-brand-green-800">Group Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group Type *</label>
              <select
                {...register('groupType')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              >
                <option value="">Select group type</option>
                <option value="school">School / College</option>
                <option value="corporate">Corporate / Business</option>
                <option value="club">Club / Society</option>
                <option value="private">Private Party</option>
                <option value="coach">Coach Tour / Travel Trade</option>
                <option value="other">Other</option>
              </select>
              {errors.groupType && <p className="text-red-500 text-xs mt-1">{errors.groupType.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group Size * (10–60)</label>
              <input
                type="number"
                min={10}
                max={60}
                {...register('groupSize')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
              {errors.groupSize && <p className="text-red-500 text-xs mt-1">{errors.groupSize.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tour Theme *</label>
            <select
              {...register('tourTheme')}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
            >
              <option value="">Select a theme</option>
              <option value="classic">Classic Canterbury</option>
              <option value="medieval">Medieval Canterbury</option>
              <option value="roman">Roman Canterbury</option>
              <option value="tudor">Tudor & Stuart Canterbury</option>
              <option value="literary">Literary Canterbury</option>
              <option value="religious">Religious Canterbury</option>
              <option value="educational">Educational (curriculum-linked)</option>
              <option value="custom">Custom — tell us below</option>
            </select>
            {errors.tourTheme && <p className="text-red-500 text-xs mt-1">{errors.tourTheme.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
              <input
                type="date"
                min={today}
                {...register('preferredDate')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
              {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alternative Date</label>
              <input
                type="date"
                min={today}
                {...register('alternativeDate')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requirements / Additional Information
            </label>
            <textarea
              {...register('requirements')}
              rows={4}
              placeholder="Accessibility needs, specific interests, age range, any other details..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-600"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-60"
          >
            {loading ? 'Submitting...' : 'Send Enquiry'}
          </button>

          <p className="text-gray-500 text-xs text-center">
            We&apos;ll respond within 24 hours with a personalised quote.
          </p>
        </form>
      </div>
    </div>
  )
}
