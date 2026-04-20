"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [taskManagerUrl, setTaskManagerUrl] = useState('');

  useEffect(() => {
    setTaskManagerUrl(process.env.NEXT_PUBLIC_TASK_MANAGER_URL || 'http://localhost:3001');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to Task Manager login with credentials
    if (taskManagerUrl) {
      window.location.href = `${taskManagerUrl}/login?email=${encodeURIComponent(email)}`;
    }
  };

  const redirectToTaskManager = () => {
    if (taskManagerUrl) {
      window.location.href = `${taskManagerUrl}/login`;
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <Link href="/" className="text-4xl font-bold text-yellow-400 block text-center mb-8">
          Jobnme
        </Link>
        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-zinc-400 mb-8">Sign in to your account</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white block mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div>
              <label className="text-white block mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-full font-bold hover:bg-white transition-all"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={redirectToTaskManager}
              className="text-yellow-400 hover:underline text-sm"
            >
            </button>
          </div>

          <p className="text-zinc-400 text-center mt-6">
            Don't have an account?{' '}
            <Link href="/auth/forgot-password" className="text-yellow-400 hover:underline font-medium">Forgot password?</Link>
            </p>
            <p className="text-center text-zinc-500 text-sm mt-2">No account? <Link href="/auth/signup" className="text-yellow-400 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
