import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'shopthetop247',
  description: 'Learn • Shop • Save — Curated picks in tech, home, beauty, health, pets & travel.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  )
}
