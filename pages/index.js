import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const products = [
  {
    image: 'https://fizzer.vercel.app/oneToone.jpg',
    title: 'One to One Sessions',
    description: 'A focused 1-on-1 session where I connect with you directly to clear your doubts on BGMI setup, gameplay, and YouTube growth.',
    price: 849,
    href: '/products/one-to-one',
    badge: 'popular'
  },
  {
    image: 'https://fizzer.vercel.app/sensitivity.jpg',
    title: 'Sensitivity',
    description: 'Accurate, device-specific BGMI sensitivity setups — tested and refined for consistent performance. Includes Drills and Guides.',
    price: 249,
    href: '/products/senstivity',
    badge: 'bestseller'
  },
  {
    image: 'https://fizzer.vercel.app/cl.jpg',
    title: 'Control Layout',
    description: 'Optimized BGMI control layouts designed for faster reactions, cleaner movement, and better control.',
    price: 249,
    href: '/products/control-layout',
    badge: 'hot'
  },
  {
    image: 'https://fizzer.vercel.app/thumb.jpg',
    title: 'THUMBNAIL PACK',
    description: 'A gaming-focused thumbnail asset pack to help you create high-quality, eye-catching thumbnails.',
    price: 349,
    href: '/products/thumbnail',
  },
  {
    image: 'https://fizzer.vercel.app/videoedit.jpg',
    title: 'VIDEO EDITING PACK',
    description: 'A gaming-focused video editing asset pack to improve the quality, flow, and feel of your videos.',
    price: 449,
    href: '/products/video-editing',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Head>
        <title>Xypharon - BGMI Gaming Store</title>
        <meta name="description" content="BGMI Sensitivity, Control Layout, Thumbnail Packs & More - Xypharon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-dark-950" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-pink-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-ping" />
            <span>Xypharon BGMI Store</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 leading-tight">
            Swagat Hai Aapka <br />
            <span className="gradient-text">Xypharon Ki Duniya</span> Mein
          </h1>
          <p className="text-dark-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 px-2">
            Device-specific sensitivity, optimized control layouts, pro thumbnail packs, and 1-on-1 coaching — everything you need to level up your BGMI game.
          </p>

          <a
            href="https://www.youtube.com/@Xypharon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 active:scale-95 mb-8"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe to Xypharon
          </a>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-dark-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span>Device Specific</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>Creator Tested</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-dark-400 text-sm sm:text-base mt-1">Choose what fits your gameplay style</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* YouTube Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-8">
        <a
          href="https://www.youtube.com/@Xypharon"
          target="_blank"
          rel="noopener noreferrer"
          className="block gradient-bg rounded-2xl p-6 sm:p-8 text-center glow hover:opacity-95 transition-all"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Xypharon on YouTube</h3>
            <p className="text-pink-100 text-sm sm:text-base max-w-md">
              BGMI content, sensitivity setups, gameplay tips & more. Subscribe for regular updates!
            </p>
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/30 transition-all active:scale-95">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 18a1 1 0 0 1-.707-1.707l4.293-4.293-4.293-4.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 10 18z"/>
              </svg>
              Visit Channel
            </span>
          </div>
        </a>
      </section>

      <Footer />
    </div>
  )
}
