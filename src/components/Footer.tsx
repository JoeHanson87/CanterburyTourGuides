import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-brand-gold-500 flex items-center justify-center">
                <span className="text-brand-navy-900 font-bold text-sm">CT</span>
              </div>
              <span className="font-serif text-lg font-bold">Canterbury Guided Tours</span>
            </div>
            <p className="text-brand-navy-200 text-sm leading-relaxed mb-4">
              Official walking tours of Canterbury led by fully qualified Green Badge City Guides.
              Discover 2,000 years of history including Canterbury Cathedral, Roman remains and
              medieval streets.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-brand-gold-400 text-lg">★★★★★</span>
                <span className="text-sm text-brand-navy-200">TripAdvisor</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-brand-gold-400 text-lg">★★★★★</span>
                <span className="text-sm text-brand-navy-200">GetYourGuide</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-brand-gold-400 mb-4">Our Tours</h3>
            <ul className="space-y-2 text-sm text-brand-navy-200">
              <li><Link href="/tours/daily" className="hover:text-white transition-colors">Daily Walking Tours</Link></li>
              <li><Link href="/tours/group" className="hover:text-white transition-colors">Group Tours</Link></li>
              <li><Link href="/book/daily" className="hover:text-white transition-colors">Book a Tour</Link></li>
              <li><Link href="/book/group" className="hover:text-white transition-colors">Group Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-brand-gold-400 mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-brand-navy-200">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Guides</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-brand-navy-200">
                <strong className="text-white">Meeting Point:</strong><br />
                Canterbury Visitor Centre<br />
                12 Sun Street, Canterbury<br />
                CT1 2HX
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-navy-700 flex flex-col md:flex-row items-center justify-between text-sm text-brand-navy-400">
          <p>&copy; {new Date().getFullYear()} Canterbury Guided Tours Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">All guides hold the Green Badge qualification — the highest level of guiding in the UK</p>
        </div>
      </div>
    </footer>
  )
}
