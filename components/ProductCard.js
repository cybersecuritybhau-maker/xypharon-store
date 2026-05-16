import Link from 'next/link'

export default function ProductCard({ image, title, description, price, href, badge }) {
  return (
    <div className="group relative bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-700/50 card-hover">
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`
            px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase
            ${badge === 'hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : ''}
            ${badge === 'popular' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' : ''}
            ${badge === 'bestseller' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : ''}
          `}>
            {badge}
          </span>
        </div>
      )}
      
      <div className="relative h-44 sm:h-52 overflow-hidden bg-dark-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
          {title}
        </h3>
        <p className="text-dark-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text">₹{price}</span>
          <Link
            href={href}
            className="gradient-bg px-5 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all glow-sm active:scale-95"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  )
}
