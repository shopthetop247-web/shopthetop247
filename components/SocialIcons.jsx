'use client'

const icons = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/shopthetop247',
    path: (
      <>
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7z" />
        <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" />
        <circle cx="17.5" cy="6.5" r="1.1" />
      </>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/yourpage',
    path: (
      <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H8.08V12h2.42V9.8c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.57.74-1.57 1.5V12h2.67l-.43 2.91h-2.24v7.04A10 10 0 0022 12z" />
    ),
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/shopthetop247/',
    path: (
      <path d="M12 2a10 10 0 00-3.5 19.37c-.05-.82-.1-2.08.02-2.97.1-.77.65-4.9.65-4.9s-.17-.35-.17-.86c0-.8.46-1.4 1.03-1.4.48 0 .72.36.72.8 0 .48-.3 1.2-.46 1.87-.13.56.28 1.02.83 1.02 1 0 1.77-1.05 1.77-2.56 0-1.34-.96-2.27-2.33-2.27-1.59 0-2.52 1.2-2.52 2.43 0 .48.19 1 .43 1.28a.17.17 0 01.04.17c-.04.19-.14.6-.16.69-.03.12-.1.15-.24.09-.9-.42-1.47-1.74-1.47-2.8 0-2.27 1.65-4.36 4.76-4.36 2.5 0 4.45 1.78 4.45 4.17 0 2.48-1.57 4.48-3.74 4.48-.73 0-1.42-.38-1.65-.83l-.45 1.7c-.16.62-.6 1.4-.9 1.87A10 10 0 1012 2z" />
    ),
  },
]

export default function SocialIcons({ className = '', iconHoverColors = {} }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map(icon => (
        <a
          key={icon.label}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`ShopTheTop247 on ${icon.label}`}
          className={`transition-transform hover:scale-110 ${
            iconHoverColors[icon.label] ?? ''
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
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
