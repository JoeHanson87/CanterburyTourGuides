import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Canterbury Guided Tours and our team of expert Green Badge City Guides — the highest guiding qualification in the UK.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-brand-navy-100 text-xl leading-relaxed">
              We are a team of passionate, fully qualified Green Badge City Guides dedicated to
              sharing the extraordinary history of Canterbury with visitors from around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Canterbury Guided Tours Ltd was founded with a single purpose: to share the
                incredible depth of history, culture and heritage that makes Canterbury one of
                England&apos;s most extraordinary cities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our guides are all holders of the prestigious Green Badge — the highest guiding
                qualification in England, awarded by the Institute of Tourist Guiding. This
                rigorous qualification requires years of study and examination, covering history,
                architecture, culture and guiding techniques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From the magnificent UNESCO World Heritage Canterbury Cathedral to the ancient
                Roman city walls, from the medieval Buttermarket to the hidden courts and alleys
                known only to locals — our guides bring every stone to life with stories,
                passion and expert knowledge.
              </p>

              <h3 className="font-serif text-2xl font-bold text-brand-navy-800 mb-4">
                The Green Badge
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Green Badge is awarded by the Institute of Tourist Guiding (ITG) and
                represents the highest standard of city guiding in England. Guides must pass
                extensive written and practical examinations covering local history, architecture,
                culture, and professional guiding practice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Holders of the Green Badge are required to undertake regular Continuous
                Professional Development (CPD) to maintain their qualification, ensuring their
                knowledge remains current and their skills continue to develop.
              </p>
            </div>

            <div className="space-y-6">
              {/* Canterbury aerial image */}
              <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Canterbury_Cathedral_from_the_air_1_trimmed.jpg/1280px-Canterbury_Cathedral_from_the_air_1_trimmed.jpg"
                  alt="Aerial view of Canterbury Cathedral and the city"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="bg-brand-navy-800 text-white rounded-xl p-6">
                <h3 className="font-serif text-2xl font-bold mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: '2,000+', label: 'Years of History We Cover' },
                    { number: '★★★★★', label: 'Average Rating' },
                    { number: '10,000+', label: 'Visitors Per Year' },
                    { number: '100%', label: 'Green Badge Qualified' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 border border-brand-navy-700 rounded-lg">
                      <div className="text-brand-gold-400 font-bold text-xl">{stat.number}</div>
                      <div className="text-brand-navy-200 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-serif text-xl font-bold text-brand-navy-800 mb-4">
                  Accreditations &amp; Memberships
                </h3>
                <ul className="space-y-3">
                  {[
                    '🎖️ Institute of Tourist Guiding (ITG) — Green Badge',
                    '🏛️ Canterbury Cathedral — Official Tour Partner',
                    '⭐ TripAdvisor Travellers\' Choice Award',
                    '⭐ GetYourGuide Top Rated Experience',
                    '🤝 Canterbury BID Member',
                    '📋 Visit Britain Quality Assured',
                  ].map((item) => (
                    <li key={item} className="text-gray-700 text-sm">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-cream rounded-xl p-6 border border-brand-navy-200">
                <h3 className="font-serif text-xl font-bold text-brand-navy-800 mb-3">
                  Continuous Professional Development
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  All our guides maintain their Green Badge through regular CPD activities
                  including heritage site visits, historical research, and guiding skills
                  workshops — ensuring you always receive the most current and engaging tours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-navy-800 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Come and Meet Us</h2>
          <p className="text-brand-navy-200 mb-6">
            Join us daily at 11am outside the Canterbury Visitor Centre, Sun Street.
            We&apos;d love to share Canterbury&apos;s history with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book/daily" className="btn-secondary">
              Book a Tour
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-navy-800 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
