// /components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="shopthetop247 logo" 
            className="h-16 w-auto md:h-16 sm:h-14" 
          />
          <span className="text-3xl font-bold hidden sm:block">
            shopthetop247
          </span>
        </Link>

        {/* Search bar */}
        <div className="hidden md:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          />
        </div>

        <div className="w-8"></div>
      </div>
    </header>
  );
}
