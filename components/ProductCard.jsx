import Link from 'next/link'

export default function ProductCard({ product }) {
  if (!product) return null

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex gap-4 p-4">
      
      {/* Left-aligned smaller image */}
      <img
        src={product.image}
        alt={product.imageAlt || product.name}
        className="w-28 h-24 object-cover rounded-xl flex-shrink-0"
      />

      {/* Right content */}
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-gray-900">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1 flex-1">
          {product.short}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-gray-800">
              {product.price}
            </div>
            <div className="text-xs text-gray-500">
              {product.rating} ★
            </div>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex justify-center px-4 py-2 bg-green-500 text-white rounded-xl text-sm hover:bg-green-600 transition"
            >
              Buy
            </a>

            <Link
              href={`/products/${product.id}`}
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
