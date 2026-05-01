import type { Metadata } from 'next'
import Link from 'next/link'
import TourCard from '@/components/TourCard'

export const metadata: Metadata = {
  title: 'Canterbury Guided Tours | Official Green Badge Walking Tours',
  description:
    'Experience the best of Canterbury with our expert Green Badge City Guides. Daily walking tours including Canterbury Cathedral. 5-star rated on TripAdvisor and GetYourGuide.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-green-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <span className="bg-brand-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Green Badge Certified
              </span>
              <span className="text-brand-gold-400 text-sm">★★★★★ 5-Star Rated</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Canterbury&apos;s{' '}
              <span className="text-brand-gold-400">2,000 Years</span> of History
            </h1>
            <p className="text-brand-green-100 text-xl mb-8 leading-relaxed">
              Led by fully qualified Green Badge City Guides — the highest guiding qualification
              in the UK. Explore Canterbury Cathedral grounds, medieval streets, Roman remains
              and hidden gems with experts who truly know this extraordinary city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book/daily" className="btn-secondary text-center">
                Book a Daily Tour
              </Link>
              <Link
                href="/tours/group"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-green-800 transition-colors duration-200 text-center"
              >
                Group Tours
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-brand-green-200">
              <div className="flex items-center space-x-2">
                <span className="text-brand-gold-400">📍</span>
                <span>Meets daily at 11am</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-gold-400">🏛️</span>
                <span>Cathedral grounds access</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-brand-gold-400">🎖️</span>
                <span>Green Badge guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Bar */}
      <section className="bg-brand-gold-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <span className="text-xl">★★★★★</span>
              <span>TripAdvisor Travellers&apos; Choice</span>
            </div>
            <div className="w-px h-6 bg-brand-gold-400 hidden md:block" />
            <div className="flex items-center space-x-2">
              <span className="text-xl">★★★★★</span>
              <span>GetYourGuide Top Rated</span>
            </div>
            <div className="w-px h-6 bg-brand-gold-400 hidden md:block" />
            <div className="flex items-center space-x-2">
              <span className="text-xl">🎖️</span>
              <span>Institute of Tourist Guiding Accredited</span>
            </div>
            <div className="w-px h-6 bg-brand-gold-400 hidden md:block" />
            <div className="flex items-center space-x-2">
              <span className="text-xl">🏛️</span>
              <span>Official Cathedral Grounds Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Our Walking Tours</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Whether you&apos;re visiting for a day or planning a special group experience,
              we have the perfect tour to bring Canterbury&apos;s history to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TourCard
              title="Daily City Walking Tour"
              description="Join our expert guides every morning for an immersive walk through 2,000 years of Canterbury history. From the magnificent Cathedral to ancient Roman walls, every step reveals a new story."
              price="From £16 per person"
              duration="2 hours"
              highlights={[
                'Canterbury Cathedral grounds access included',
                'Roman city walls and Westgate Towers',
                'Medieval Buttermarket and Mercery Lane',
                'St Augustine\'s Abbey and Pilgrim routes',
                'Daily at 11am, seasonal 2pm tour available',
              ]}
              bookingHref="/book/daily"
              learnMoreHref="/tours/daily"
              badge="Daily"
            />
            <TourCard
              title="Private Group Tours"
              description="Tailored experiences for schools, corporate groups, clubs and private parties. Our guides craft bespoke itineraries to match your group's interests and requirements."
              price="From £180 for groups"
              duration="2–3 hours"
              highlights={[
                'Fully tailored to your group\'s interests',
                'School groups and educational visits welcome',
                'Corporate team building experiences',
                'Flexible dates and times',
                'Minimum 10 people, maximum 60',
              ]}
              bookingHref="/book/group"
              learnMoreHref="/tours/group"
              badge="By arrangement"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Why Choose Canterbury Guided Tours?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎖️',
                title: 'Green Badge Qualified',
                desc: 'All our guides hold the prestigious Green Badge — the highest guiding qualification awarded by the Institute of Tourist Guiding. Rigorous training, exceptional knowledge.',
              },
              {
                icon: '🏛️',
                title: 'Cathedral Grounds Access',
                desc: 'Our tours include access to Canterbury Cathedral grounds, giving you a closer look at this UNESCO World Heritage Site with expert commentary.',
              },
              {
                icon: '⭐',
                title: '5-Star Rated',
                desc: 'Consistently rated 5 stars on both TripAdvisor and GetYourGuide by thousands of visitors from around the world. Your satisfaction is our priority.',
              },
              {
                icon: '🗓️',
                title: 'Daily Departures',
                desc: 'Tours depart every day at 11am from the Canterbury Visitor Centre. No need to book in advance for small groups — just turn up!',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Friendly',
                desc: 'Our guides excel at engaging visitors of all ages. Children are welcome and our storytelling approach brings history alive for young explorers.',
              },
              {
                icon: '🌍',
                title: 'International Welcome',
                desc: 'We welcome visitors from around the world. Guides have experience with international groups and can accommodate varying levels of English.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-brand-green-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-brand-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">What Our Visitors Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: 'Absolutely brilliant tour. Our guide brought Canterbury to life in a way no guidebook could. The Cathedral grounds access was a real highlight — worth every penny!',
                author: 'Sarah M.',
                location: 'London',
                platform: 'TripAdvisor',
              },
              {
                text: 'We booked a private tour for our school group of 35 students. The guide was incredible with the children — engaging, patient and wonderfully knowledgeable. Highly recommend!',
                author: 'Mr Thompson',
                location: 'Essex Primary School',
                platform: 'GetYourGuide',
              },
              {
                text: "The 2pm afternoon tour was perfect for us. Our guide's knowledge of the medieval history was extraordinary. Found hidden gems we'd never have discovered on our own.",
                author: 'Jacques & Marie',
                location: 'Paris, France',
                platform: 'TripAdvisor',
              },
            ].map((t) => (
              <div key={t.author} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-brand-gold-500 text-xl mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-brand-green-800">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                  <p className="text-brand-gold-600 text-xs font-medium mt-1">{t.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Canterbury?
          </h2>
          <p className="text-brand-green-200 text-lg mb-8">
            Join us for an unforgettable journey through one of England&apos;s most historic
            cities. Tours depart daily at 11am.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/daily" className="btn-secondary">
              Book Your Place Today
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-green-800 transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
