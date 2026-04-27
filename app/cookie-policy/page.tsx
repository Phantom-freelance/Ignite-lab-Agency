import Link from "next/link"

export default function CookiePolicy() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-black text-yellow-400 mb-2">Cookie Policy</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, keeping you logged in, and understanding how you use our platform.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">2. How We Use Cookies</h2>
            <p>JOB-N-ME uses cookies for the following purposes:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li><span className="text-white font-medium">Essential Cookies:</span> Required for the platform to function — login sessions, security tokens, and user preferences</li>
              <li><span className="text-white font-medium">Analytics Cookies:</span> Help us understand how visitors use our site so we can improve the experience</li>
              <li><span className="text-white font-medium">Functional Cookies:</span> Remember your settings and preferences across visits</li>
              <li><span className="text-white font-medium">Marketing Cookies:</span> Used to show you relevant content and measure campaign effectiveness</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">3. Third-Party Cookies</h2>
            <p>We may use third-party services such as Google Analytics, Stripe, and social media platforms that set their own cookies. These cookies are governed by the respective third-party privacy policies and are outside our control.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">4. Managing Cookies</h2>
            <p>You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our platform. Most browsers allow you to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all third-party cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">5. Cookie Retention</h2>
            <p>Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Most of our persistent cookies expire within 30-90 days.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">6. Your Consent</h2>
            <p>By continuing to use JOB-N-ME.com, you consent to our use of cookies as described in this policy. You may withdraw consent at any time by clearing cookies in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">7. Contact Us</h2>
            <p>If you have questions about our cookie policy, contact us at <a href="mailto:support@JOB-N-ME.com" className="text-yellow-400 hover:underline">support@JOB-N-ME.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-6 text-sm">
          <Link href="/privacy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-zinc-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          <Link href="/disclaimer" className="text-zinc-500 hover:text-yellow-400 transition-colors">Disclaimer</Link>
          <Link href="/refund-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Refund Policy</Link>
        </div>
      </div>
    </main>
  )
}
