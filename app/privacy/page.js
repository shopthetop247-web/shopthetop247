export const metadata = {
  title: "Privacy Policy | ShopTheTop247®",
  description:
    "Privacy policy explaining how ShopTheTop247® collects, uses, and protects visitor information.",
}

export default function PrivacyPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 prose prose-gray">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p>
        At <strong>ShopTheTop247®</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect limited personal information when you voluntarily submit
        it, such as when you contact us through a form. This may include your
        name, email address, and message content.
      </p>

      <p>
        We may also collect non-personal information such as browser type,
        device, pages visited, and general usage data to improve site
        performance.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To respond to inquiries submitted through the contact form</li>
        <li>To improve website functionality and content</li>
        <li>To analyze traffic and user behavior</li>
      </ul>

      <h2>Cookies & Analytics</h2>
      <p>
        We may use cookies or similar technologies to analyze website traffic
        and improve user experience. Cookies do not contain personally
        identifiable information.
      </p>

      <h2>Affiliate Links</h2>
      <p>
        Some links on this website are affiliate links. Clicking on these links
        may result in a commission for us at no additional cost to you. Affiliate
        partners may use cookies in accordance with their own privacy policies.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use third-party services such as analytics tools or form services.
        These providers have their own privacy policies governing how they
        handle data.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information, but no method
        of transmission over the internet is 100% secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access to or deletion of your personal information by
        contacting us through the website.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        This Privacy Policy may be updated from time to time. Updates will be
        posted on this page.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        via the <a href="/contact">Contact page</a>.
      </p>
    </section>
  )
}
