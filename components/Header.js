import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center font-bold text-lg glow-sm group-hover:scale-110 transition-transform">
              X
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight block leading-tight">
                <span className="gradient-text">Xypharon</span>
              </span>
              <span className="text-[10px] text-dark-500 block -mt-0.5">BGMI Store</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link href="/products/senstivity" className="text-dark-300 hover:text-pink-400 transition-colors text-sm font-medium">Sensitivity</Link>
            <Link href="/products/control-layout" className="text-dark-300 hover:text-pink-400 transition-colors text-sm font-medium">Control Layout</Link>
            <Link href="/products/one-to-one" className="text-dark-300 hover:text-pink-400 transition-colors text-sm font-medium">1-on-1</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@Xypharon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-dark-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-5 border-t border-dark-800 pt-4 mt-2">
            <div className="flex flex-col gap-2">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-dark-300 hover:text-white transition-colors py-2.5 px-3 rounded-lg hover:bg-dark-800/50">Home</Link>
              <Link href="/products/senstivity" onClick={() => setMobileOpen(false)} className="text-dark-300 hover:text-pink-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-dark-800/50">Sensitivity</Link>
              <Link href="/products/control-layout" onClick={() => setMobileOpen(false)} className="text-dark-300 hover:text-pink-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-dark-800/50">Control Layout</Link>
              <Link href="/products/one-to-one" onClick={() => setMobileOpen(false)} className="text-dark-300 hover:text-pink-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-dark-800/50">1-on-1 Sessions</Link>
              <a
                href="https://www.youtube.com/@Xypharon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl text-sm font-semibold mt-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                My YouTube Channel
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
