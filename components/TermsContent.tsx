"use client"
import React from 'react';

const TermsContent = () => {
  return (
    <section className="w-full bg-black px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto space-y-12">

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            1. <span className="text-yellow-400">Acceptance</span> of Terms
          </h2>
          <p className="text-zinc-300 text-lg">
            By accessing and using <span className="text-yellow-400 font-semibold">Jobnme Agency ("Jobnme")</span>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            2. Service <span className="text-yellow-400">Description</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-4">Jobnme provides a platform connecting clients with freelance professionals for various services including:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Web and mobile development</li>
            <li className="text-zinc-400 text-lg">• UI/UX design</li>
            <li className="text-zinc-400 text-lg">• Branding and marketing</li>
            <li className="text-zinc-400 text-lg">• Content creation</li>
            <li className="text-zinc-400 text-lg">• Other creative and technical services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            3. User <span className="text-yellow-400">Accounts</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-4">To use our services, you must:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Create an account with accurate information</li>
            <li className="text-zinc-400 text-lg">• Maintain the security of your account</li>
            <li className="text-zinc-400 text-lg">• Be at least <span className="text-yellow-400 font-semibold">18 years old</span></li>
            <li className="text-zinc-400 text-lg">• Comply with all applicable laws</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            4. <span className="text-yellow-400">Payment</span> Terms
          </h2>
          <p className="text-zinc-300 text-lg mb-4">
            All payments are processed through our secure <span className="text-yellow-400 font-semibold">escrow system</span>:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Clients fund projects upfront into escrow</li>
            <li className="text-zinc-400 text-lg">• Freelancers are paid upon milestone completion</li>
            <li className="text-zinc-400 text-lg">• Disputes are handled through our resolution process</li>
            <li className="text-zinc-400 text-lg">• Service fees are deducted from each transaction</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            5. Intellectual <span className="text-yellow-400">Property</span>
          </h2>
          <p className="text-zinc-300 text-lg">
            All work delivered through our platform is <span className="text-yellow-400 font-semibold">transferred to the client</span> upon full payment, unless otherwise agreed in writing. Freelancers retain the right to showcase work in their portfolio.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            6. <span className="text-yellow-400">Prohibited</span> Activities
          </h2>
          <p className="text-zinc-300 text-lg mb-4">Users may not:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Circumvent our payment system</li>
            <li className="text-zinc-400 text-lg">• Share login credentials</li>
            <li className="text-zinc-400 text-lg">• Engage in fraudulent activities</li>
            <li className="text-zinc-400 text-lg">• Harass or abuse other users</li>
            <li className="text-zinc-400 text-lg">• Violate intellectual property rights</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            7. Limitation of <span className="text-yellow-400">Liability</span>
          </h2>
          <p className="text-zinc-300 text-lg">
            Jobnme acts as a platform connecting clients and freelancers. We are <span className="text-yellow-400 font-semibold">not responsible</span> for the quality of work delivered or disputes between parties, though we provide mediation services.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            8. <span className="text-yellow-400">Termination</span>
          </h2>
          <p className="text-zinc-300 text-lg">
            We reserve the right to suspend or terminate accounts that violate these terms or engage in harmful behavior.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            9. Changes to <span className="text-yellow-400">Terms</span>
          </h2>
          <p className="text-zinc-300 text-lg">
            We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            10. <span className="text-yellow-400">Contact</span> Information
          </h2>
          <p className="text-zinc-300 text-lg">
            For questions about these Terms of Service, contact us at{' '}
            <a href="mailto:legal@jobnme.com" className="text-yellow-400 hover:underline font-semibold">
              legal@jobnme.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default TermsContent;
