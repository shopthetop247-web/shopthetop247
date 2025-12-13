import { products } from '../../../lib/products'

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return <p className="p-6">Product not found.</p>
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      
      {/* Product Card Layout */}
      <div className="bg-white rounded-2xl shadow-sm p-6 flex gap-6">

        {/* Larger left-aligned image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-60 object-cover rounded-2xl flex-shrink-0"
        />

        {/* Product details */}
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="mt-2 text-lg font-medium text-gray-800">
            {product.price}
          </div>

          <div className="text-sm text-gray-500 mt-1">
            {product.rating} ★ rating
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition"
            >
              Buy Now
            </a>

            <a
              href="/products"
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition"
            >
              Back to Products
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

