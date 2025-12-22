'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogClient({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter(post => post.category === activeCategory)

  const categoryCounts = posts.reduce((acc, post) => {
  if (!post.category) return acc

  acc[post.category] = (acc[post.category] || 0) + 1
  return acc
}, {})


  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
            ${
              activeCategory === 'All'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
        >
          All
        </button>

        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
              ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {category}
            <span className="ml-1 text-xs text-gray-400">
            ({categoryCounts[category] || 0})
            </span>

          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="grid gap-8">
        {filteredPosts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-w-xl h-56 object-cover rounded-xl"
              />
            )}

            <div className="mt-4">
              <span className="inline-block mb-2 text-xs font-semibold text-indigo-600 uppercase">
                {post.category}
              </span>

              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
              <p className="text-gray-700 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}

        {filteredPosts.length === 0 && (
          <p className="text-gray-500">
            No posts found in this category.
          </p>
        )}
      </div>
    </section>
  )
}
