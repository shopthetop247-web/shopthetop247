import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* BIGGER LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png"
            alt="ShopTheTop247 Logo"
            width={160}   // increased from around 45–50
            height={50}
            className="object-contain"
          />
          
        </Link>

        {/* SMALLER SEARCH BAR */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products, tips, blogs..."
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* RIGHT LINKS */}
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

