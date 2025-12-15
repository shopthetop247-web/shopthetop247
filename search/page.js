export default function SearchPage({ searchParams }) {
  const query = searchParams?.q || ""

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Search Results
      </h1>

      {query ? (
        <p className="text-gray-600">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      ) : (
        <p className="text-gray-500">No search query provided.</p>
      )}

      {/* NEXT STEP:
          Filter products + blog posts here */}
    </section>
  )
}
