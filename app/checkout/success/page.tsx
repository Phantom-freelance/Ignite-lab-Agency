"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CheckoutSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      }).catch(console.error);
    }
  }, [sessionId]);

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <span className="text-7xl">✅</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-zinc-400 mb-8">
            Thank you for your order! We've received your payment and will start working on your project right away.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8">
            <p className="text-zinc-500 text-sm font-bold uppercase mb-2">What's Next?</p>
            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">📧</span>
                <span className="text-zinc-300">Check your email for order confirmation and receipt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">📊</span>
                <span className="text-zinc-300">Track your order progress in the dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">💬</span>
                <span className="text-zinc-300">Our team will contact you within 24 hours</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard/orders"
              className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-500 transition-all"
            >
              View Your Orders →
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold text-lg hover:border-yellow-400 transition-all"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default function CheckoutSuccess() {
  return (
    <Suspense fallback={
      <main className="w-full min-h-screen flex flex-col bg-black">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
        <Footer />
      </main>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
