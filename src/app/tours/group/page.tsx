import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Group Tours',
  description:
    'Private group walking tours in Canterbury for schools, corporates, clubs and private parties. Fully tailored by our expert Green Badge guides.',
}

export default function GroupToursPage() {
  return (
    <>
      <section className="bg-brand-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="bg-brand-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
              By Arrangement
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Private Group Tours</h1>
            <p className="text-brand-green-100 text-xl leading-relaxed">
              Tailored Canterbury walking tours for schools, corporate groups, clubs and private
              parties. We craft each experience around your group&apos;s interests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-6">Tailored to Your Group</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every group is unique. Our experienced Green Badge guides work with you before
                the tour to understand your interests, pace requirements and any special requests.
                The result is a genuinely bespoke experience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                We accommodate groups from 10 to 60 people, and can split larger groups across
                multiple expert guides to ensure everyone gets the full experience.
              </p>

              <h3 className="font-serif text-2xl font-bold text-brand-green-800 mb-6">
                Group Types We Welcome
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🏫', label: 'Schools & Universities' },
                  { icon: '💼', label: 'Corporate Groups' },
                  { icon: '🎉', label: 'Private Parties' },
                  { icon: '🚌', label: 'Coach Tours' },
                  { icon: '👥', label: 'Clubs & Societies' },
                  { icon: '✈️', label: 'Incoming Tour Groups' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-green-800 text-white rounded-xl p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Group Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-brand-green-700 pb-3">
                    <span>Up to 15 people</span>
                    <span className="text-brand-gold-400 font-bold text-xl">From £180</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-brand-green-700 pb-3">
                    <span>16–30 people</span>
                    <span className="text-brand-gold-400 font-bold text-xl">From £300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>31–60 people</span>
                    <span className="text-brand-gold-400 font-bold text-xl">POA</span>
                  </div>
                </div>
                <p className="text-brand-green-200 text-sm mt-4">
                  Prices include guide fees. Cathedral entry extra if required.
                </p>
                <Link href="/book/group" className="btn-secondary mt-6 w-full text-center block">
                  Request a Quote
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-serif text-xl font-bold text-brand-green-800 mb-4">
                  Theme Options
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Classic Canterbury — the complete city overview',
                    'Medieval Canterbury — the Pilgrim\'s journey',
                    'Roman Canterbury — Durovernum Cantiacorum',
                    'Tudor & Stuart Canterbury',
                    'Literary Canterbury — Marlowe, Chaucer & more',
                    'Religious Canterbury — Cathedral & Christianity',
                    'Educational KS2/KS3 curriculum-linked tours',
                  ].map((theme) => (
                    <li key={theme} className="flex items-start">
                      <span className="text-brand-gold-600 mr-2 mt-0.5">✓</span>
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Planning a Group Visit?</h2>
          <p className="text-brand-green-200 mb-6">
            Contact us to discuss your group&apos;s requirements and receive a tailored quote.
          </p>
          <Link href="/book/group" className="btn-secondary">
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  )
}
