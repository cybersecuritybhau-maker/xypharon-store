import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const devices = [
  'Select Your Device',
  'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 14 Pro Max', 'iPhone 14 Pro',
  'iPhone 13 Pro Max', 'iPhone 13', 'iPhone 12 Pro Max', 'iPhone 12',
  'Samsung Galaxy S24 Ultra', 'Samsung Galaxy S23 Ultra', 'Samsung Galaxy S22 Ultra',
  'Samsung Galaxy S21 Ultra', 'Samsung Galaxy S20 FE',
  'OnePlus 12', 'OnePlus 11', 'OnePlus 10 Pro', 'OnePlus 9 Pro', 'OnePlus Nord',
  'iQOO Z10 Turbo Pro', 'iQOO Neo 10', 'iQOO 12', 'iQOO 11', 'iQOO Neo 9 Pro',
  'Vivo X100 Pro', 'Vivo V30 Pro',
  'Xiaomi 14 Pro', 'Redmi Note 13 Pro', 'Redmi Note 12 Pro', 'Redmi K50',
  'Realme GT 3', 'Realme GT 2 Pro', 'Realme 12 Pro+',
  'Poco F5', 'Poco F4', 'Poco X6 Pro',
  'Nothing Phone 2', 'Nothing Phone 1',
  'Asus ROG Phone 7', 'Asus ROG Phone 6',
  'iPad Pro M4', 'iPad Pro M2', 'iPad Air M1', 'iPad Mini 6',
]

const sensitivityLevels = [
  { name: 'Low', desc: 'Steady & Controlled — Best for taps and precise aiming' },
  { name: 'Medium', desc: 'Balanced — All-round performance for most players' },
  { name: 'High', desc: 'Aggressive — Maximum speed for close-range fights' },
]

export default function SensitivityPage() {
  const [selectedDevice, setSelectedDevice] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState(null)
  const [purchased, setPurchased] = useState(false)

  const PRICE = 249
  const isDeviceSelected = selectedDevice && selectedDevice !== 'Select Your Device'

  const handlePurchase = () => {
    if (!isDeviceSelected || !selectedLevel) return
    setPurchased(true)
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Head>
        <title>Sensitivity Settings - Xypharon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-400 hover:text-white transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative h-48 sm:h-[300px] rounded-3xl overflow-hidden mb-6 bg-dark-900">
              <img
                src="https://fizzer.vercel.app/_next/image?url=%2Fhero-bg.jpg&w=3840&q=75"
                alt="Sensitivity Settings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">
                  Sensitivity <span className="gradient-text">Settings</span>
                </h1>
                <p className="text-dark-300 text-xs sm:text-sm md:text-base">
                  Device-specific BGMI sensitivity packs built for consistency, control, and real fights.
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-dark-800/30 rounded-2xl p-5 sm:p-6 border border-dark-700/50">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">What You Get</h3>
              {[
                { icon: '🎯', title: '3 Sensitivity Options per Device', desc: 'Low, Medium, and High — choose what fits your playstyle.' },
                { icon: '✅', title: 'Creator & Player Tested Values', desc: 'Refined through real usage, not random presets.' },
                { icon: '🔥', title: 'Better Control in Real Fights', desc: 'Designed for sprays, tracking, and close-range combat.' },
                { icon: '💸', title: 'Low-Cost, High-Value Setup', desc: 'Premium sensitivity setups at a budget-friendly price.' },
                { icon: '🎯', title: 'Sensitivity Mastery Drills', desc: 'Simple daily drills to help you adapt faster.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-3 items-start p-2.5 sm:p-3 rounded-xl hover:bg-dark-700/30 transition-colors">
                  <span className="text-xl sm:text-2xl shrink-0">{feature.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm">{feature.title}</h4>
                    <p className="text-dark-400 text-[11px] sm:text-xs mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700/50 p-6 sm:p-8 glow-sm">
              <div className="text-center mb-6 pb-6 border-b border-dark-700/50">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-4xl sm:text-5xl font-black gradient-text">₹{PRICE}</span>
                </div>
                <p className="text-dark-400 text-xs sm:text-sm">
                  One-time payment &middot; Lifetime access &middot; Instant delivery
                </p>
              </div>

              <div className="mb-5">
                <label className="block text-white font-semibold mb-2 text-xs sm:text-sm">
                  Step 1: Select Your Device
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3.5 text-left text-white hover:border-pink-500/50 transition-colors flex items-center justify-between text-sm"
                  >
                    <span className={selectedDevice ? 'text-white' : 'text-dark-400'}>
                      {selectedDevice || 'Select Your Device'}
                    </span>
                    <svg className={`w-4 h-4 text-dark-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showDropdown && (
                    <div className="absolute z-20 top-full mt-1 w-full bg-dark-900 border border-dark-600 rounded-xl max-h-48 sm:max-h-60 overflow-y-auto shadow-2xl">
                      {devices.map((device, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedDevice(device)
                            setShowDropdown(false)
                          }}
                          className={`w-full text-left px-4 py-3 text-xs sm:text-sm transition-colors hover:bg-dark-700/50 ${
                            selectedDevice === device ? 'text-pink-400 bg-pink-500/10' : 'text-dark-300'
                          }`}
                        >
                          {device}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2 text-xs sm:text-sm">
                  Step 2: Choose Sensitivity Level
                </label>
                <div className="space-y-2">
                  {sensitivityLevels.map((level, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedLevel(level.name)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all text-sm ${
                        selectedLevel === level.name
                          ? 'border-pink-500 bg-pink-500/10 text-white'
                          : 'border-dark-600 bg-dark-900 text-dark-300 hover:border-dark-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-xs sm:text-sm">{level.name}</span>
                          <p className="text-[10px] sm:text-xs mt-0.5 opacity-70">{level.desc}</p>
                        </div>
                        {selectedLevel === level.name && (
                          <span className="w-5 h-5 sm:w-6 sm:h-6 gradient-bg rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shrink-0">
                            ✓
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={!isDeviceSelected || !selectedLevel}
                className={`w-full py-3.5 sm:py-4 rounded-2xl text-white font-bold text-base sm:text-lg transition-all active:scale-[0.98] ${
                  isDeviceSelected && selectedLevel
                    ? 'gradient-bg hover:opacity-90 glow cursor-pointer'
                    : 'bg-dark-600 cursor-not-allowed text-dark-400'
                }`}
              >
                {!isDeviceSelected
                  ? 'Select a device first'
                  : !selectedLevel
                  ? 'Choose sensitivity level'
                  : `Buy Now — ₹${PRICE}`}
              </button>

              {purchased && (
                <div className="mt-6 p-5 sm:p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                  <div className="text-3xl sm:text-4xl mb-3">🎉</div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">Purchase Successful!</h3>
                  <p className="text-emerald-400 text-xs sm:text-sm">
                    Sensitivity settings for {selectedDevice} ({selectedLevel}) are ready.
                  </p>
                  <button
                    onClick={() => {
                      setPurchased(false)
                      setSelectedDevice('')
                      setSelectedLevel(null)
                    }}
                    className="mt-3 text-dark-400 hover:text-white text-xs sm:text-sm transition-colors underline"
                  >
                    Buy again for another device
                  </button>
                </div>
              )}

              <div className="mt-5 text-center">
                <a
                  href="https://www.youtube.com/@Xypharon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 text-xs sm:text-sm transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  @Xypharon on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
                                   }
