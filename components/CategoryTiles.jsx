import Link from "next/link"

export default function CategoryTiles({ categories }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
      {categories.map(cat => (
        <Link 
          key={cat}
          href={`/category/${encodeURIComponent(cat)}`}
          className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition block text-center font-medium"
        >
          {cat}
        </Link>
      ))}
    </div>
  )
}
