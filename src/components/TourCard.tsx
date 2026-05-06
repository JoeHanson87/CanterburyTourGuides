import Link from 'next/link'

interface TourCardProps {
  title: string
  description: string
  price: string
  duration: string
  highlights: string[]
  bookingHref: string
  learnMoreHref: string
  badge?: string
}

export default function TourCard({
  title,
  description,
  price,
  duration,
  highlights,
  bookingHref,
  learnMoreHref,
  badge,
}: TourCardProps) {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="bg-brand-grey-800 p-6 text-white relative">
        {badge && (
          <span className="absolute top-4 right-4 bg-brand-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
        <h3 className="font-serif text-xl font-bold mb-1">{title}</h3>
        <div className="flex items-center space-x-3 text-white/70 text-sm">
          <span>⏱ {duration}</span>
          <span>•</span>
          <span className="text-white font-semibold text-base">{price}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-6">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start text-sm">
              <span className="text-brand-red-600 mr-2 mt-0.5">✓</span>
              <span className="text-gray-700">{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3">
          <Link href={bookingHref} className="btn-primary text-sm py-2 px-4">
            Book Now
          </Link>
          <Link href={learnMoreHref} className="btn-outline text-sm py-2 px-4">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
