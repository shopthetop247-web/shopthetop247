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
            width={200}
            height={80}
            className="object-contain block mb-2"
          />
            <p className="mt-2 text-sm text-gray-600">
              Curated products, honest reviews, and smart lifestyle tips —
              helping you shop better every day.
            </p>

            {/* Social Icons */}
  <div className="flex items-center gap-4">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/shopthetop247"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ShopTheTop247 on Instagram"
      className="text-gray-500 hover:text-pink-600 transition"
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
      className="text-gray-500 hover:text-blue-600 transition"
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
      className="text-gray-500 hover:text-red-600 transition"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 00-3.5 19.37c-.05-.82-.1-2.08.02-2.97.1-.77.65-4.9.65-4.9s-.17-.35-.17-.86c0-.8.46-1.4 1.03-1.4.48 0 .72.36.72.8 0 .48-.3 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.56 0-1.34-.96-2.27-2.33-2.27-1.59 0-2.52 1.2-2.52 2.43 0 .48.19 1 .43 1.28a.17.17 0 01.04.17c-.04.19-.14.6-.16.69-.03.12-.1.15-.24.09-.9-.42-1.47-1.74-1.47-2.8 0-2.27 1.65-4.36 4.76-4.36 2.5 0 4.45 1.78 4.45 4.17 0 2.48-1.57 4.48-3.74 4.48-.73 0-1.42-.38-1.65-.83l-.45 1.7c-.16.62-.6 1.4-.9 1.87A10 10 0 1012 2z"/>
      </svg>
    </a>
  </div>
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
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-indigo-600">
                  Terms & Conditions
              </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-indigo-600">
                  Privacy Policy
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
