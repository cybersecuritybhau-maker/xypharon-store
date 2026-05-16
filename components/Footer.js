export default function Footer() {
  return (
    <footer className="border-t border-dark-800 bg-dark-950 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-bg rounded-xl flex items-center justify-center font-bold text-sm glow-sm">
              X
            </div>
            <span className="text-lg font-bold text-white">
              <span className="gradient-text">Xypharon</span>
            </span>
          </div>
          <p className="text-dark-400 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Xypharon. BGMI &amp; Gaming Store.
          </p>
          <a
            href="https://www.youtube.com/@Xypharon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-400 hover:text-red-500 text-sm transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            @Xypharon
          </a>
        </div>
      </div>
    </footer>
  )
}
