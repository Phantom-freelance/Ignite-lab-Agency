"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('Check your email for a reset link.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <Link href="/">
            <h1 className="text-yellow-400 text-4xl font-black tracking-tight">
              job<span className="text-white">nme</span>
            </h1>
          </Link>
          <p className="text-zinc-400 mt-3 text-sm">Enter your email to reset your password</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          {status === 'success' ? (
            <div className="text-center">
              <div className="text-yellow-400 text-5xl mb-4">✉️</div>
              <p className="text-white font-bold text-lg">Email Sent!</p>
              <p className="text-zinc-400 text-sm mt-2">{message}</p>
              <Link href="/auth/signin" className="mt-6 inline-block text-yellow-400 hover:underline text-sm">
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-white text-sm font-semibold block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-sm">{message}</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-yellow-400 text-black font-black py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
              </button>
              <p className="text-center text-zinc-500 text-sm">
                Remember your password?{' '}
                <Link href="/auth/signin" className="text-yellow-400 hover:underline">Sign In</Link>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </main>
  );
}
