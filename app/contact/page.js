export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-700 mb-4">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        Have a question, suggestion, or collaboration idea?
        We’d love to hear from you. Send us a message below.
      </p>

      <form 
           action="https://formspree.io/f/xojaqjgl"
           method="POST"
           className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            rows="5"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
