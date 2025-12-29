'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setQuery('')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="ShopTheTop247 Logo"
              width={360}
              height={220}
              className="object-contain w-40 sm:w-48 md:w-64"
            />
          </Link>

          {/* Search (hidden on mobile) */}
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex flex-1 mx-6"
          >
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products, tips, blogs..."
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg text-sm
                         focus:ring-2 focus:ring-brand-accent focus:outline-none"
            />
          </form>

          {/* Navigation + Social */}
          <nav className="flex flex-col items-end text-sm font-medium gap-2">

            {/* Nav Links */}
            <div className="flex gap-4">
              {['Home', 'Blog', 'About', 'Contact'].map(item => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative text-gray-800 transition
                             hover:text-[#F27405]
                             after:absolute after:left-0 after:-bottom-1
                             after:h-[2px] after:w-full after:origin-right
                             after:scale-x-0 after:bg-[#F27405]
                             after:transition-transform after:duration-200
                             hover:after:origin-left hover:after:scale-x-100"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-1">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shopthetop247"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShopTheTop247 on Instagram"
                className="text-gray-500 hover:text-[#F27405] transition-transform hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShopTheTop247 on Facebook"
                className="text-gray-500 hover:text-[#F27405] transition-transform hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8.08V12h2.42V9.8c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 2.91h-2.24v7.04A10 10 0 0022 12z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/shopthetop247/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShopTheTop247 on Pinterest"
                className="text-gray-500 hover:text-[#F27405] transition-transform hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-3.5 19.37c-.05-.82-.1-2.08.02-2.97.1-.77.65-4.9.65-4.9s-.17-.35-.17-.86c0-.8.46-1.4 1.03-1.4.48 0 .72.36.72.8 0 .48-.3 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.56 0-1.34-.96-2.27-2.33-2.27-1.59 0-2.52 1.2-2.52 2.43 0 .48.19 1 .43 1.28a.17.17 0 01.04.17c-.04.19-.14.6-.16.69-.03.12-.1.15-.24.09-.9-.42-1.47-1.74-1.47-2.8 0-2.27 1.65-4.36 4.76-4.36 2.5 0 4.45 1.78 4.45 4.17 0 2.48-1.57 4.48-3.74 4.48-.73 0-1.42-.38-1.65-.83l-.45 1.7c-.16.62-.6 1.4-.9 1.87A10 10 0 1012 2z"/>
                </svg>
              </a>

            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
