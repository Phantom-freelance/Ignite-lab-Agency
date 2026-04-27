"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutCancel() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Cancel Icon */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-orange-500/20 flex items-center justify-center">
            <span className="text-7xl">❌</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Payment Cancelled
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8">
            No worries! Your payment was not processed. You can try again whenever you're ready.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-4">Need Help?</p>
            <p className="text-zinc-300 mb-6">
              If you experienced any issues during checkout, our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <a href="mailto:support@JOB-N-ME.com" className="text-yellow-400 hover:text-yellow-500 font-bold">
                📧 support@JOB-N-ME.com
              </a>
              <span className="text-zinc-600 hidden sm:block">|</span>
              <a href="tel:+1234567890" className="text-yellow-400 hover:text-yellow-500 font-bold">
                📞 +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-all"
            >
              Browse Services Again
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold text-lg hover:border-yellow-400 transition-all"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
