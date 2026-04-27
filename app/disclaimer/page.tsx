import Link from "next/link"

export default function Disclaimer() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-black text-yellow-400 mb-2">Disclaimer</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-bold mb-3">1. General Information</h2>
            <p>The information provided by JOB-N-ME ("we," "us," or "our") on JOB-N-ME.com is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">2. No Professional Advice</h2>
            <p>The content on this website does not constitute professional advice of any kind including but not limited to legal, financial, or business advice. You should consult a qualified professional before making any decisions based on information found on this platform.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">3. External Links Disclaimer</h2>
            <p>The site may contain links to external websites that are not provided or maintained by or in any way affiliated with JOB-N-ME. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">4. Freelancer & Client Disclaimer</h2>
            <p>JOB-N-ME acts as a platform connecting freelancers and clients. We are not responsible for the quality, timeliness, or outcome of any work delivered by freelancers through our platform. Clients engage freelancers at their own discretion and risk. All disputes between clients and freelancers are subject to our dispute resolution policy.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">5. AI-Generated Content</h2>
            <p>JOB-N-ME uses artificial intelligence tools to assist with proposal generation, job matching, and communication. AI-generated content is provided as a starting point and may require human review. We are not liable for any inaccuracies in AI-generated content used on or through our platform.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">6. Limitation of Liability</h2>
            <p>Under no circumstance shall JOB-N-ME be liable for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-3">7. Contact Us</h2>
            <p>If you have any questions about this disclaimer, please contact us at <a href="mailto:support@JOB-N-ME.com" className="text-yellow-400 hover:underline">support@JOB-N-ME.com</a></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex gap-6 text-sm">
          <Link href="/privacy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-zinc-500 hover:text-yellow-400 transition-colors">Terms of Service</Link>
          <Link href="/refund-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Refund Policy</Link>
          <Link href="/cookie-policy" className="text-zinc-500 hover:text-yellow-400 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </main>
  )
}
