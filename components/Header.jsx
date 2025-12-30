'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [query, setQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    setQuery('')
  }

  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">

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

          {/* Search */}
          <form onSubmit={handleSubmit} className="hidden md:flex flex-1 mx-6">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products, tips, blogs..."
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg text-sm
                         focus:ring-2 focus:ring-brand-accent focus:outline-none"
            />
          </form>

          {/* Nav + Social */}
          <nav className="flex flex-col items-end text-sm font-medium gap-2">

            <div className="flex gap-4">
              {navItems.map(item => {
                const active = isActive(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative transition ${
                      active
                        ? 'text-[#F27405]'
                        : 'text-gray-800 hover:text-[#F27405]'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <SocialIcons className="pt-1 text-gray-500 hover:text-gray-800" />

          </nav>
        </div>
      </div>
    </header>
  )
}
