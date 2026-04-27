import Link from "next/link"

export default function RefundPolicy() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-black text-yellow-400 mb-2">Refund Policy</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold mb-3">1. Overview</h2>
            <p>At JOB-N-ME, we are committed to ensuring satisfaction for both clients and freelancers. This Refund Policy outlines the conditions under which refunds may be issued for services purchased through our platform.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">2. Escrow Protection</h2>
            <p>All payments made through JOB-N-ME are held in escrow until the client confirms satisfactory completion of the work. Funds are only released to the freelancer upon client approval. This protects clients from paying for work that does not meet agreed requirements.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">3. Eligibility for Refund</h2>
            <p>You may be eligible for a full or partial refund in the following circumstances:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li>The freelancer fails to deliver work within the agreed timeframe</li>
              <li>Delivered work significantly differs from the agreed scope</li>
              <li>The freelancer becomes unresponsive after payment</li>
              <li>Duplicate payments were made in error</li>
              <li>Technical errors resulted in incorrect charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">4. Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li>Work has been completed and approved by the client</li>
              <li>Change of mind after work has commenced</li>
              <li>Disputes raised more than 14 days after project completion</li>
              <li>Platform subscription fees once the billing period has started</li>
              <li>Work that was completed according to the original agreed brief</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">5. How to Request a Refund</h2>
            <p>To request a refund, please follow these steps:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-zinc-400">
              <li>Contact our support team at <a href="mailto:support@JOB-N-ME.com" className="text-yellow-400 hover:underline">support@JOB-N-ME.com</a> within 14 days of the issue</li>
              <li>Provide your order ID, project details, and reason for the refund request</li>
              <li>Our team will review the request within 3-5 business days</li>
              <li>If approved, refunds will be processed within 7-10 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">6. Dispute Resolution</h2>
            <p>If a dispute arises between a client and freelancer, JOB-N-ME offers mediation services. Both parties will be given the opportunity to present evidence. Our team will make a fair determination based on the project agreement, communications, and deliverables submitted.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">7. Processing Time</h2>
            <p>Approved refunds are processed within 7-10 business days. The time for funds to appear in your account depends on your payment provider and may take additional time.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">8. Contact Us</h2>
            <p>For any refund-related queries, contact us at <a href="mailto:support@JOB-N-ME.com" className="text-yellow-400 hover:underline">support@JOB-N-ME.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-6 text-sm">
          <Link href="/privacy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-zinc-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          <Link href="/disclaimer" className="text-zinc-500 hover:text-yellow-400 transition-colors">Disclaimer</Link>
          <Link href="/cookie-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </main>
  )
}
