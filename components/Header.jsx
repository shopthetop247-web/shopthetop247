// /components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="shopthetop247 logo" 
            className="h-10 w-auto"  // << Fixes logo size across the site
          />
          <span className="text-xl font-bold">shopthetop247</span>
        </Link>

        {/* Center: Search */}
        <div className="hidden sm:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2"
          />
        </div>

        {/* Right: Placeholder for future items */}
        <div className="w-8"></div>
      </div>
    </header>
  );
}
