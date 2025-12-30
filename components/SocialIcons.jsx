'use client'

const icons = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shopthetop247',
    hover: 'hover:text-pink-600',
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1.2" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/yourpage',
    hover: 'hover:text-blue-600',
    path: (
      <path d="M15 3h3V0h-3c-3.3 0-6 2.7-6 6v3H6v4h3v11h4V13h3l1-4h-4V6c0-.6.4-1 1-1z" />
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/shopthetop247/',
    hover: 'hover:text-red-600',
    path: (
      <path d="M12 0C5.4 0 0 5.4 0 12c0 4.8 3 8.9 7.3 10.6-.1-.9-.2-2.2 0-3.1l1.4-6s-.3-.6-.3-1.4c0-1.3.8-2.3 1.8-2.3.8 0 1.2.6 1.2 1.4 0 .9-.6 2.3-.9 3.6-.2 1 .5 1.8 1.6 1.8 1.9 0 3.3-2 3.3-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.9.8 2.4.1.1.1.3.1.4l-.3 1.1c-.1.3-.3.4-.6.3-1.8-.8-2.9-3.3-2.9-5.4 0-4.4 3.2-8.5 9.3-8.5 4.9 0 8.7 3.5 8.7 8.1 0 4.9-3.1 8.8-7.3 8.8-1.4 0-2.7-.7-3.1-1.6l-.9 3.3c-.3 1.1-1.1 2.5-1.7 3.4.9.3 1.9.4 2.9.4 6.6 0 12-5.4 12-12S18.6 0 12 0z" />
    ),
  },
]

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map(icon => (
        <a
          key={icon.label}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`ShopTheTop247 on ${icon.label}`}
          className={`text-gray-500 transition-transform hover:scale-110 ${icon.hover}`}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            {icon.path}
          </svg>
        </a>
      ))}
    </div>
  )
}
