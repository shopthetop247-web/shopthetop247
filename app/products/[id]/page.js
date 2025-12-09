import { getProductById } from '../../../lib/products'

export default function ProductPage({ params }) {
  const product = getProductById(params.id)

  if (!product) return <p>Product not found.</p>

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm">
      <img 
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="mt-6 text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.short}</p>

      <div className="mt-4 flex items-center gap-6">
        <span className="text-xl font-semibold">{product.price}</span>
        <span className="text-gray-500">{product.rating} ★</span>
      </div>

      <a 
        href={product.affiliateUrl} 
        target="_blank" 
        rel="noopener noreferrer sponsored"
        className="block bg-green-500 text-white px-6 py-3 rounded-xl text-center mt-6"
      >
        Buy Now
      </a>
    </section>
  )
}
