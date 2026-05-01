import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Daily Walking Tours',
  description:
    'Join our daily Canterbury walking tours at 11am (and 2pm seasonally). Expert Green Badge guides explore the Cathedral, Roman walls, medieval streets and more.',
}

export default function DailyToursPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="bg-brand-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
              Daily Departures
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Daily Canterbury Walking Tours
            </h1>
            <p className="text-brand-green-100 text-xl leading-relaxed">
              Every day at 11am, our expert Green Badge guides lead you on an immersive
              two-hour journey through 2,000 years of Canterbury history.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Morning Tour', time: '11:00am', info: 'Daily year-round', icon: '🌅' },
              { label: 'Afternoon Tour', time: '2:00pm', info: 'Seasonal (Apr–Oct)', icon: '☀️' },
              { label: 'Meeting Point', time: 'Sun Street', info: 'Canterbury Visitor Centre', icon: '📍' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-brand-green-800 text-lg">{item.label}</h3>
                <p className="text-brand-gold-600 font-semibold text-xl">{item.time}</p>
                <p className="text-gray-500 text-sm">{item.info}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-6">What to Expect</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our 2-hour walking tour is the perfect introduction to Canterbury, covering the
                highlights of this extraordinary UNESCO World Heritage city. Your Green Badge guide
                will bring 2,000 years of history to life with stories, legends and expert knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The tour covers approximately 1.5 miles at a leisurely pace, suitable for most
                fitness levels. Comfortable shoes are recommended. The route is largely on historic
                paved streets.
              </p>

              <h3 className="font-serif text-2xl font-bold text-brand-green-800 mb-4">
                Tour Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  'Canterbury Cathedral grounds — UNESCO World Heritage Site',
                  'The medieval Buttermarket and Mercery Lane',
                  'Ancient city walls and Westgate Towers',
                  "Greyfriars Chapel — Canterbury's oldest building",
                  'The Weavers\' Houses and Huguenot Heritage',
                  'St Augustine\'s Abbey ruins',
                  'The Pilgrim\'s Hospital of St Thomas',
                  'Roman city walls and Dane John Gardens',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-brand-gold-600 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* Pricing */}
              <div className="bg-brand-green-800 text-white rounded-xl p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Prices</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-brand-green-700 pb-3">
                    <span>Adults</span>
                    <span className="text-brand-gold-400 font-bold text-xl">£16</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-brand-green-700 pb-3">
                    <span>Children (5–15)</span>
                    <span className="text-brand-gold-400 font-bold text-xl">£8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Under 5s</span>
                    <span className="text-brand-gold-400 font-bold text-xl">FREE</span>
                  </div>
                </div>
                <p className="text-brand-green-200 text-sm mt-4">
                  * Cathedral grounds entry fee included in tour price
                </p>
                <Link href="/book/daily" className="btn-secondary mt-6 w-full text-center block">
                  Book Your Place
                </Link>
              </div>

              {/* Extras */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-serif text-xl font-bold text-brand-green-800 mb-4">
                  Optional Add-ons
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Traditional Cream Tea</span>
                    <span className="font-semibold text-brand-green-800">+£18 per person</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Roman Museum Entry</span>
                    <span className="font-semibold text-brand-green-800">+£7 per person</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Cathedral Audio Guide</span>
                    <span className="font-semibold text-brand-green-800">+£5 per person</span>
                  </div>
                </div>
              </div>

              {/* Important Info */}
              <div className="bg-brand-cream rounded-xl p-6 border border-brand-green-200">
                <h3 className="font-serif text-xl font-bold text-brand-green-800 mb-4">
                  Good to Know
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-green-600 mr-2">•</span>
                    No booking required for groups of 1–6 — just turn up!
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green-600 mr-2">•</span>
                    Groups of 7+ should book in advance
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green-600 mr-2">•</span>
                    Tours run in all weathers — dress appropriately
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green-600 mr-2">•</span>
                    Dogs welcome on a lead
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green-600 mr-2">•</span>
                    Wheelchair accessible routes available on request
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-brand-green-200 mb-6">
            Secure your place on our next daily tour. Tours depart daily at 11am from the
            Canterbury Visitor Centre, Sun Street.
          </p>
          <Link href="/book/daily" className="btn-secondary">
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}
