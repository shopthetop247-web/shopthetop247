import { getProductById } from '../../../lib/products'

/* ===========================
   SEO (Dynamic Metadata)
   =========================== */
export async function generateMetadata({ params }) {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | ShopTheTop247®",
      description: "The requested product could not be found.",
    }
  }

  return {
    title: `${product.name} – Review, Price & Buying Guide | ShopTheTop247®`,
    description: product.short || `Read our detailed review of ${product.name}.`,
  }
}

/* ===========================
   PAGE COMPONENT
   =========================== */
export default function ProductPage({ params }) {
  const product = getProductById(params.id)

  if (!product) {
    return <p className="p-6">Product not found.</p>
  }

  /* ===========================
     PRODUCT SCHEMA (JSON-LD)
     =========================== */
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.short || product.long,
    "brand": {
      "@type": "Brand",
      "name": "ShopTheTop247®"
    },
    "aggregateRating": product.rating
      ? {
          "@type": "AggregateRating",
          "ratingValue": product.rating,
          "reviewCount": 1
        }
      : undefined,
    "offers": {
      "@type": "Offer",
      "url": product.affiliateUrl,
      "priceCurrency": "USD",
      "price": product.price?.replace(/[^0-9.]/g, ""),
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-6">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Card wrapper */}
      <div className="bg-white rounded-2xl shadow-sm p-6">

        {/* Image */}
        <img
          src={product.image}
          alt={product.imageAlt || product.name}
          className="w-full max-w-md h-80 object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold">{product.name}</h1>

        {/* SHORT DESCRIPTION */}
        {product.short && (
          <p className="text-gray-600 text-lg mt-2">
            {product.short}
          </p>
        )}

        {/* Price + Rating */}
        <div className="mt-4 flex items-center gap-6">
          <span className="text-2xl font-semibold">{product.price}</span>
          <span className="text-gray-500">{product.rating} ★</span>
        </div>

        {/* LONG DESCRIPTION */}
        {product.long && (
          <div className="mt-6 text-gray-700 leading-relaxed space-y-4">
            {product.long
              .trim()
              .split('\n\n')
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        )}

        {/* BUY BUTTON */}
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-block mt-8 px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition"
        >
          Buy Now
        </a>

      </div>
    </section>
  )
}
