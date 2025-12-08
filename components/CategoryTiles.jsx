import Link from 'next/link'
export default function CategoryTiles({ categories }){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-6">
      {categories.map(c => (
        <Link key={c} href={`/products?category=${encodeURIComponent(c)}`} className="bg-white border rounded-xl p-4 text-center text-sm shadow-sm hover:shadow-md">{c}</Link>
      ))}
    </div>
  )
}
