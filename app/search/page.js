import { getAllPosts } from "../../lib/posts"
import { products } from "../../lib/products"
import Link from "next/link"

/* ===========================
   SEO METADATA
   =========================== */
export function generateMetadata({ searchParams }) {
  const q = searchParams?.q || ""

  return {
    title: q
      ? `Search results for "${q}" | ShopTheTop247®`
      : "Search | ShopTheTop247®",
    description: q
      ? `Browse products and blog posts related to "${q}".`
      : "Search products and blog posts on ShopTheTop247®.",
  }
}

/* ===========================
   FUZZY MATCHING HELPERS
   =========================== */
function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "")
}

function fuzzyMatch(text, query) {
  text = normalize(text)
  query = normalize(query)

  if (!query) return false
  if (text.includes(query)) return true

  // word-by-word similarity
  const textWords = text.split(" ")
  const queryWords = query.split(" ")

  return queryWords.some(qw =>
    textWords.some(tw => tw.startsWith(qw) || qw.startsWith(tw))
  )
}

function highlight(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${query})`, "gi")
  return text.replace(regex, `<mark class="bg-yellow-200">$1</mark>`)
}

/* ===========================
   SEARCH PAGE
   =========================== */
export default function SearchPage({ searchParams }) {
  const query = searchParams?.q?.trim() || ""

  const matchedProducts = products.filter(p =>
    fuzzyMatch(
      `${p.name} ${p.short || ""} ${p.long || ""}`,
      query
    )
  )

  const matchedPosts = getAllPosts().filter(post =>
    fuzzyMatch(
      `${post.title} ${post.excerpt} ${post.content}`,
      query
    )
  )

  /* ==========*
