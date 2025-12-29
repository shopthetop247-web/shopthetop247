import { getPostBySlug } from '../../../lib/posts'

/* ===========================
   DYNAMIC SEO METADATA
   =========================== */
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | ShopTheTop247® Blog',
    }
  }

  return {
    title: `${post.title} | ShopTheTop247® Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://shopthetop247.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: post.image
        ? [`https://shopthetop247.com${post.image}`]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

/* ===========================
   CONTENT FORMAT HELPERS
   =========================== */

// Converts **bold** into <strong>
function formatBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

// Splits content into paragraphs
function formatParagraphs(text) {
  return text
    .trim()
    .split(/\n\s*\n/) // empty line = new paragraph
    .map(
      (p) => `<p class="mb-4">${formatBold(p)}</p>`
    )
    .join('')
}

/* ===========================
   BLOG POST PAGE
   =========================== */
export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <p className="p-6">Post not found.</p>
  }

  /* ===========================
     BLOG SCHEMA (JSON-LD)
     =========================== */
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image
      ? [`https://shopthetop247.com${post.image}`]
      : undefined,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "ShopTheTop247®",
    },
    "publisher": {
      "@type": "Organization",
      "name": "ShopTheTop247®",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shopthetop247.com/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shopthetop247.com/blog/${post.slug}`,
    },
  }

  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postSchema),
        }}
      />

      {/* Featured Image */}
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 mb-8">
        {post.date}
      </p>

      {/* Content */}
     <article
  className="prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{ __html: formatParagraphs(post.content) }}
/>

    </section>
  )
}
