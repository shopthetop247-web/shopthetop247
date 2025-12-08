export default function Reviews(){
  return (
    <section>
      <h1 className="text-2xl font-bold">Quick Reviews</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold">Headphones — Verdict</h3>
          <p className="text-sm text-gray-600 mt-2">Great battery and comfort for commuters.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold">Dog Bed — Verdict</h3>
          <p className="text-sm text-gray-600 mt-2">Memory foam holds shape and supports older dogs.</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold">Air Purifier — Verdict</h3>
          <p className="text-sm text-gray-600 mt-2">Excellent for small rooms; watch replacement filter costs.</p>
        </div>
      </div>
    </section>
  )
}
