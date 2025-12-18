export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-700 mb-4">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        Have a question, suggestion, or collaboration idea?
        We’d love to hear from you. Send us a message below.
      </p>

      <form
  action="https://formspree.io/f/xpqazpay"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
    className="w-full border p-2 rounded"
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
    className="w-full border p-2 rounded"
  />

  <textarea
    name="message"
    placeholder="Your message"
    required
    className="w-full border p-2 rounded"
    rows={5}
  />

  <button
    type="submit"
    className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
  >
    Send Message
  </button>
</form>

    </section>
  );
}
