import { getProductById } from '../../../lib/products'

export default function ProductPage({ params }){
  const product = getProductById(params.id)
  if(!product) return <div>Product not found</div>
  return (
    <article className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg md:col-span-1" />
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.short}</p>
          <div className="mt-4 flex items-center gap-4">
            <div className="text-2xl font-semibold">{product.price}</div>
            <div className="text-sm text-gray-500">{product.rating} ★</div>
          </div>
          <div className="mt-6 flex gap-3">
            <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="px-5 py-3 bg-green-500 text-white rounded-lg">Buy now</a>
            <button className="px-4 py-3 border rounded-lg">Save</button>
          </div>
          <section className="mt-6">
            <h3 className="font-semibold">Why we like it</h3>
            <p className="mt-2 text-gray-600">Detailed review and pros & cons go here. Add long-form content to improve SEO and conversions.</p>
          </section>
        </div>
      </div>
    </article>
  )
}
