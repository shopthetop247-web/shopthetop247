import './globals.css'
import Header from '../components/Header'

export const metadata = {
  metadataBase: new URL("https://shopthetop247.com"),
  title: {
    default: "ShopTheTop247®",
    template: "%s | ShopTheTop247®",
  },
  description:
    "Learn • Shop • Save — Curated picks in tech, home, beauty, health, pets & travel.",
  openGraph: {
    title: "ShopTheTop247®",
    description:
      "Curated products, smart tips, and honest reviews across tech, home, wellness, pets, and travel.",
    url: "https://shopthetop247.com",
    siteName: "ShopTheTop247®",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopTheTop247®",
    description:
      "Curated products, smart tips, and honest reviews across tech, home, wellness, pets, and travel.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
