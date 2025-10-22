'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [region, setRegion] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    try {
      // You can wire this to a real API later. For now we just show success.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setEmail('');
      setRole('');
      setRegion('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="w-full rounded-2xl border border-gray-200 p-6 md:p-8 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
        Privacy Patterns — monthly
      </h2>
      <p className="mt-2 text-sm md:text-base text-gray-600">
        Practical templates and what actually works. No spam.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 md:grid-cols-4">
        <input
          type="email"
          required
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="md:col-span-2 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Email"
        />
        <input
          type="text"
          placeholder="Role (e.g., Counsel, PM, Eng)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Role"
        />
        <input
          type="text"
          placeholder="Region (US, EU, UK, …)"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Region"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="md:col-span-4 mt-1 w-full rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
          aria-live="polite"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>

        {status === 'success' && (
          <p className="md:col-span-4 text-sm text-green-700">
            Thanks! Check your inbox for a confirmation link.
          </p>
        )}
        {status === 'error' && (
          <p className="md:col-span-4 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
