import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
           
            <Image
            src="/logo.jpg"
            alt="ShopTheTop247 Logo"
            width={190}
            height={60}
            className="object-contain"
          />
            <p className="mt-2 text-sm text-gray-600">
              Curated products, honest reviews, and smart lifestyle tips —
              helping you shop better every day.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">
              Disclosure
            </h4>
            <p className="text-sm text-gray-600">
              Some links on this site are affiliate links. We may earn a commission
              at no extra cost to you. This helps support our work.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <span>
            © {new Date().getFullYear()} ShopTheTop247®. All rights reserved.
          </span>

          <span className="mt-2 sm:mt-0">
            Built with ❤️ for smart shoppers
          </span>
        </div>

      </div>
    </footer>
  )
}
