import { getAllPosts, getAllCategories } from '../../../../lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const categories = getAllCategories()

  return categories.map(category => ({
    category: category.toLowerCase(),
  }))
}

export function generateMetadata({ params }) {
  const rawCategory = params.category.replace('-', ' ')
  const categoryName =
    rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1)

  return {
    title: `${categoryName} Blog Posts | ShopTheTop247®`,
    description: `Browse ${categoryName.toLowerCase()} articles, product reviews, and buying guides from ShopTheTop247®.`,
    openGraph: {
      title: `${categoryName} Articles`,
      description: `Expert ${categoryName.toLowerCase()} content from ShopTheTop247® including reviews, tips, and recommendations.`,
      url: `https://shopthetop247.com/blog/category/${params.category}`,
      type: 'website',
    },
  }
}

export default function CategoryPage({ params }) {
  const posts = getAllPosts()
  const category = params.category.toLowerCase()

  const filteredPosts = posts.filter(
    post => post.category.toLowerCase() === category
  )

  if (filteredPosts.length === 0) {
    notFound()
  }

  const formattedCategory = category.replace('-', ' ')
  const categoryUrl = `https://shopthetop247.com/blog/category/${category}`

  /* ---------- SCHEMA ---------- */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://shopthetop247.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://shopthetop247.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: formattedCategory,
        item: categoryUrl,
      },
    ],
  }

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${formattedCategory} Articles`,
    description: `Browse ${formattedCategory} product reviews, buying guides, and expert recommendations.`,
    url: categoryUrl,
    mainEntity: filteredPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.date,
      url: `https://shopthetop247.com/blog/${post.slug}`,
    })),
  }

  return (
    <section className="p-6 max-w-6xl mx-auto">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, collectionSchema]),
        }}
      />

      {/* Category Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold capitalize">
          {formattedCategory}
        </h1>

        <p className="mt-4 max-w-3xl text-gray-600">
          Explore our latest <strong>{formattedCategory}</strong> articles,
          including honest product reviews, buying guides, and practical tips
          to help you make smarter shopping decisions.
        </p>
      </header>

      {/* Posts */}
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
              <h2 className="text-2xl font-semibold">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {post.date}
              </p>
              <p className="text-gray-700 mt-2">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/blog"
          className="font-medium text-[#F27405] hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>

    </section>
  )
}
