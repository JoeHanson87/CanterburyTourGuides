import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Canterbury Guided Tours. We\'d love to hear from you about daily tours, group bookings or any other enquiries.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-brand-navy-100 text-xl max-w-2xl leading-relaxed">
            We&apos;re here to help with tour bookings, group enquiries and any questions about
            our Canterbury walking tours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="section-heading mb-6">Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you&apos;re looking to book a daily tour, discuss a group visit, or
                  simply want to know more about what we offer — we&apos;re happy to help.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    title: 'Meeting Point',
                    lines: ['Canterbury Visitor Centre', 'Sun Street', 'Canterbury', 'CT1 2HX'],
                  },
                  {
                    icon: '📧',
                    title: 'Email',
                    lines: ['info@canterburyguidedtours.com'],
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    lines: ['01227 000 000', 'Mon–Fri 9am–5pm'],
                  },
                  {
                    icon: '🕐',
                    title: 'Tour Times',
                    lines: ['Daily at 11:00am (year-round)', '2:00pm seasonal (April–October)'],
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4 bg-white rounded-xl p-4 shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-semibold text-brand-navy-800">{item.title}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy-800 text-white rounded-xl p-6">
                <h3 className="font-serif text-lg font-bold mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/book/daily" className="flex items-center text-brand-navy-200 hover:text-white text-sm transition-colors">
                    → Book a Daily Tour
                  </Link>
                  <Link href="/book/group" className="flex items-center text-brand-navy-200 hover:text-white text-sm transition-colors">
                    → Group Tour Enquiry
                  </Link>
                  <Link href="/tours/daily" className="flex items-center text-brand-navy-200 hover:text-white text-sm transition-colors">
                    → Tour Information
                  </Link>
                  <Link href="/about" className="flex items-center text-brand-navy-200 hover:text-white text-sm transition-colors">
                    → About Our Guides
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Do I need to book in advance?',
                    a: 'For groups of 1–6 people, you can simply turn up at 11am. For larger groups of 7 or more, we recommend booking in advance to ensure availability.',
                  },
                  {
                    q: 'Where exactly does the tour start?',
                    a: 'Tours meet outside the Canterbury Visitor Centre on Sun Street, CT1 2HX. Look for the green-badged guide with our Canterbury Guided Tours sign.',
                  },
                  {
                    q: 'What happens in bad weather?',
                    a: 'Our tours run in all weathers. We recommend dressing appropriately for the conditions. In exceptional circumstances (severe storms), we may cancel — we will contact booked participants.',
                  },
                  {
                    q: 'Is the tour suitable for children?',
                    a: 'Absolutely! Our guides are experienced at engaging children of all ages. Children 5–15 are half price, and under 5s are free.',
                  },
                  {
                    q: 'Are the tours wheelchair accessible?',
                    a: 'The main route is on historic paved streets. We can arrange an adapted wheelchair-accessible route on request — please contact us in advance.',
                  },
                  {
                    q: 'Can I get a private tour just for my family?',
                    a: 'Yes! We can arrange private family tours on request. Please use our group enquiry form or contact us directly for a quote.',
                  },
                ].map((faq) => (
                  <details key={faq.q} className="bg-white rounded-xl p-4 shadow-sm group">
                    <summary className="font-semibold text-brand-navy-800 cursor-pointer list-none flex justify-between items-center">
                      {faq.q}
                      <span className="text-brand-gold-600 ml-2 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3 pt-3 border-t border-gray-100">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
