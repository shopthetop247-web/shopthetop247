import './globals.css'
import Header from '../components/Header'

export const metadata = {
  metadataBase: new URL("https://shopthetop247.com"),
}

export const metadata = {
  title: 'shopthetop247',
  description: 'Learn • Shop • Save — Curated picks in tech, home, beauty, health, pets & travel.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
