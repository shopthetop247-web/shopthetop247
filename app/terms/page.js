export const metadata = {
  title: "Terms & Conditions | ShopTheTop247®",
  description:
    "Terms and conditions governing the use of ShopTheTop247®, including affiliate disclosures, content usage, and liability limitations.",
}

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto p-6 prose prose-gray">
      <h1>Terms & Conditions</h1>

      <p>
        <strong>Last updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p>
        Welcome to <strong>ShopTheTop247®</strong> (“we,” “our,” or “us”). By
        accessing or using this website, you agree to be bound by these Terms &
        Conditions. If you do not agree, please discontinue use of the site.
      </p>

      <h2>Use of the Website</h2>
      <p>
        The content on this website is provided for informational and educational
        purposes only. You agree to use this site lawfully and not engage in any
        activity that could harm the site, its users, or its content.
      </p>

      <h2>Affiliate Disclosure</h2>
      <p>
        ShopTheTop247® participates in affiliate marketing programs. This means
        we may earn a commission when you click on affiliate links and make a
        purchase, at no additional cost to you.
      </p>
      <p>
        We do not sell, ship, or manufacture any products listed on this site.
        All transactions occur on third-party websites.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        All content, including reviews, recommendations, and opinions, reflects
        personal viewpoints and experiences. Nothing on this website should be
        considered professional, medical, legal, or financial advice.
      </p>

      <h2>Product Information Disclaimer</h2>
      <p>
        Product descriptions, pricing, availability, and features are provided
        by third parties and may change without notice. We do not guarantee the
        accuracy or completeness of product information.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to third-party websites. We are not
        responsible for the content, policies, or practices of any third-party
        sites. Accessing external links is done at your own risk.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, images, logos, and design,
        is the property of ShopTheTop247® unless otherwise stated and may not be
        copied, reproduced, or distributed without written permission.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, ShopTheTop247® shall not be liable
        for any direct, indirect, incidental, or consequential damages arising
        from the use of this website or reliance on its content.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms & Conditions at any
        time. Changes will be effective immediately upon posting.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions regarding these Terms, please contact us via
        the <a href="/contact">Contact page</a>.
      </p>
    </section>
  )
}
