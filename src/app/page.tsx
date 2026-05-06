import type { Metadata } from 'next'
import Image from 'next/image'
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
      <section className="relative overflow-hidden" style={{ height: '480px' }}>
        <Image
          src="/images/banner-tour-group.jpg"
          alt="Canterbury Official Guide leading a tour through the city streets"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Red accent bar at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-red-600" />
      </section>

      {/* Intro Section */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="section-heading mb-4">
                Official Canterbury City Guided Walking Tours
              </h1>
              <div className="border border-gray-300 rounded px-4 py-2 mb-5 text-sm font-semibold text-gray-700 inline-block">
                Tours running daily at 11am
              </div>
              <p className="text-gray-700 mb-4">
                Canterbury Guided Tours provide entertaining 90-minute walking tours for visitors
                to the historic city of Canterbury. Our tours all include access to the Cathedral
                Precincts, are led by{' '}
                <strong>fully qualified Green Badge Guides</strong>, and are the official tours
                of the city.
              </p>
              <p className="text-gray-700 mb-6">
                Tours run <strong>daily at 11am</strong>, with additional 2pm tour seasonally.{' '}
                <strong>Private tours</strong> and themed walks for couples, groups and schools
                are available to book in advance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book/daily" className="btn-primary text-center">
                  Book a Daily Tour
                </Link>
                <Link href="/tours/group" className="btn-outline text-center">
                  Group Tours
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="font-serif text-lg font-bold text-brand-red-600 mb-3">
                  Latest News
                </h3>
                <div className="overflow-hidden rounded-lg mb-3">
                  <Image
                    src="/images/banner-cathedral-night.jpg"
                    alt="Canterbury Cathedral at night"
                    width={400}
                    height={160}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Tours are running daily at 11am. Join us to discover Canterbury&apos;s rich
                  history with our expert Green Badge Guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/guides-homepage.jpg"
                alt="Canterbury Guided Tours team of Green Badge Guides"
                width={840}
                height={330}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/cathedral.png"
                alt="Canterbury Cathedral"
                width={880}
                height={640}
                className="w-full h-64 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                <h3 className="font-serif text-xl font-bold text-brand-grey-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
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
                <div className="text-brand-red-600 text-xl mb-3">★★★★★</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-brand-grey-900">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                  <p className="text-brand-red-600 text-xs font-medium mt-1">{t.platform}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-grey-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Canterbury?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join us for an unforgettable journey through one of England&apos;s most historic
            cities. Tours depart daily at 11am.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/daily" className="btn-primary">
              Book Your Place Today
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-grey-800 transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
