'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    const t = localStorage.getItem('theme') || 'light'
    setTheme(t); document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light')
  }, [])
  function toggle(){ const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); localStorage.setItem('theme', next); document.documentElement.setAttribute('data-theme', next === 'dark' ? 'dark' : 'light') }
  return (
    <header className="bg-white border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="shopthetop247" className="h-10 w-10 object-contain" />
          <div>
            <div className="font-bold text-lg">shopthetop247</div>
            <div className="text-xs text-gray-500">LEARN • SHOP • SAVE</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/reviews">Reviews</Link>
          <button onClick={toggle} className="px-3 py-1 border rounded">{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </nav>
      </div>
    </header>
  )
}
