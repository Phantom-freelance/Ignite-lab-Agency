"use client"
import React from 'react';

const PrivacyContent = () => {
  return (
    <section className="w-full bg-black px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl mx-auto space-y-12">

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            1. Information We <span className="text-yellow-400">Collect</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-4">We collect information you provide directly to us, including:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Name and contact information</li>
            <li className="text-zinc-400 text-lg">• Account credentials</li>
            <li className="text-zinc-400 text-lg">• Project details and requirements</li>
            <li className="text-zinc-400 text-lg">• Payment and billing information</li>
            <li className="text-zinc-400 text-lg">• Communications with us</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            2. How We <span className="text-yellow-400">Use</span> Your Information
          </h2>
          <p className="text-zinc-300 text-lg mb-4">We use the information we collect to:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Provide and improve our services</li>
            <li className="text-zinc-400 text-lg">• Process transactions and send related information</li>
            <li className="text-zinc-400 text-lg">• Send technical notices and support messages</li>
            <li className="text-zinc-400 text-lg">• Communicate with you about products, services, and events</li>
            <li className="text-zinc-400 text-lg">• Monitor and analyze trends and usage</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            3. Information <span className="text-yellow-400">Sharing</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-4">
            We <span className="text-yellow-400 font-semibold">do not sell</span> your personal information. We may share your information:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• With freelancers working on your projects</li>
            <li className="text-zinc-400 text-lg">• With service providers who assist our operations</li>
            <li className="text-zinc-400 text-lg">• To comply with legal obligations</li>
            <li className="text-zinc-400 text-lg">• With your consent or at your direction</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            4. Data <span className="text-yellow-400">Security</span>
          </h2>
          <p className="text-zinc-300 text-lg">
            We implement appropriate security measures to protect your information. However, no method of transmission over the internet is <span className="text-yellow-400 font-semibold">100% secure</span>.
          </p>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            5. Your <span className="text-yellow-400">Rights</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-4">You have the right to:</p>
          <ul className="space-y-3 ml-6">
            <li className="text-zinc-400 text-lg">• Access and receive a copy of your personal data</li>
            <li className="text-zinc-400 text-lg">• Correct inaccurate personal data</li>
            <li className="text-zinc-400 text-lg">• Request deletion of your personal data</li>
            <li className="text-zinc-400 text-lg">• Object to or restrict processing of your data</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            6. <span className="text-yellow-400">Contact</span> Us
          </h2>
          <p className="text-zinc-300 text-lg">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@job-n-me.com" className="text-yellow-400 hover:underline font-semibold">
              privacy@job-n-me.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyContent;
