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
  'iQOO 12', 'iQOO 11', 'iQOO Neo 9 Pro',
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
                { icon: '🎯',
