'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import SocialIcons from './SocialIcons'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
]

/**
 * BLOG CATEGORY LINKS
 * These should point to real index pages
 * Example: /blog/category/product-reviews
 */
const blogTopics = [
  { label: 'Pets', href: '/blog/category/pets' },
  { label: 'Health', href: '/blog/category/health' },
  { label: 'Travel', href: '/blog/category/travel' },
  { label: 'Technology', href: '/blog/category/technology' },
  { label: 'Beauty', href: '/blog/category/beauty' },
]


export default function Footer() {
  const pathname = usePathname()

  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <footer role="contentinfo" className="mt-16 border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">

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

            <SocialIcons
              className="mt-4 text-gray-500"
              iconHoverColors={{
                Instagram: 'hover:text-pink-600',
                Facebook: 'hover:text-blue-600',
                Pinterest: 'hover:text-red-600',
              }}
            />
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h4 className="font-semibold text-gray-800 mb-3">
              Explore
            </h4>

            <ul className="space-y-2 text-sm">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      isActive(link.href)
                        ? 'text-[#F27405] font-medium'
                        : 'text-gray-600 hover:text-brand-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Blog Topics (SEO POWER) */}
          <nav aria-label="Blog topics">
            <h4 className="font-semibold text-gray-800 mb-3">
              Blog Topics
            </h4>

            <ul className="space-y-2 text-sm">
              {blogTopics.map(topic => (
                <li key={topic.href}>
                  <Link
                    href={topic.href}
                    className="text-gray-600 hover:text-brand-accent transition"
                  >
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Disclosure */}
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

        <div className="mt-10 pt-6 border-t text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between">
          <span>
            © {new Date().getFullYear()} ShopTheTop247®. All rights reserved.
          </span>
          <span className="mt-2 sm:mt-0">
            Built with ❤️ for smart shoppers
          </span>
        </div>

      </div>

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ShopTheTop247",
            url: "https://shopthetop247.com",
            logo: "https://shopthetop247.com/logo.jpg",
            sameAs: [
              "https://www.instagram.com/shopthetop247",
              "https://www.pinterest.com/shopthetop247/",
              "https://facebook.com/yourpage"
            ]
          }),
        }}
      />
    </footer>
  )
}
